import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Authenticated from "./components/Authenticated/Authenticated";

import AuthenticationCheck from "./components/AuthenticationCheck/AuthenticationCheck";
import Layout from "./components/Layout/Layout";
import BecomeAHostFormPage from "./pages/BecomeAHostFormPage";
import BecomeAHostPage from "./pages/BecomeAHostPage";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { logInActionCreator } from "./redux/reducers/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { IDecodedToken, IState } from "./types/user.types";

const App = () => {
  const dispatch = useAppDispatch();

  const { authenticated } = useAppSelector(
    (state: { user: IState }) => state.user
  );

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const { username, email, image }: IDecodedToken = jwtDecode(token);
      dispatch(logInActionCreator({ username, email, image }));
    }
  }, [dispatch, token, authenticated]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <AuthenticationCheck>
              <LoginPage />
            </AuthenticationCheck>
          }
        />
        <Route
          path="/register"
          element={
            <AuthenticationCheck>
              <RegisterPage />
            </AuthenticationCheck>
          }
        />

        <Route
          path="/home"
          element={
            <Authenticated>
              <Layout>
                <HomePage />
              </Layout>
            </Authenticated>
          }
        />

        <Route path="/host/become-a-host" element={<BecomeAHostPage />} />
        <Route
          path="/host/become-a-host/property-type-group"
          element={<BecomeAHostFormPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
