import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AuthenticationCheck from "./components/AuthenticationCheck/AuthenticationCheck";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { logInActionCreator } from "./redux/reducers/features/userSlice";
import { useAppDispatch } from "./redux/store/hooks";
import { IDecodedToken } from "./types/user.types";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const userData: IDecodedToken = jwtDecode(token);
      dispatch(logInActionCreator(userData));
    }
  }, [dispatch]);

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
              <HomePage />
            </AuthenticationCheck>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
