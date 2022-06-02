import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import AuthenticationCheck from "./components/AuthenticationCheck/AuthenticationCheck";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { logInActionCreator } from "./redux/reducers/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { IDecodedToken } from "./types/user.types";

const App = () => {
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token || name) {
      const userData: IDecodedToken = jwtDecode(token as string);
      dispatch(logInActionCreator(userData));
      navigate("/home");
    }
  }, [dispatch, navigate, name]);

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
