import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AuthenticationCheck from "./components/AuthenticationCheck/AuthenticationCheck";
import Layout from "./components/Layout/Layout";
import BecomeAHostFormPage from "./pages/BecomeAHostFormPage";
import BecomeAHostPage from "./pages/BecomeAHostPage";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { logInActionCreator } from "./redux/reducers/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { IinitialState } from "./types/places.types";
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/home"
          element={
            <AuthenticationCheck>
              <Layout>
                <HomePage />
              </Layout>
            </AuthenticationCheck>
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
