import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Authenticated from "./components/Authenticated/Authenticated";

import AuthenticationCheck from "./components/AuthenticationCheck/AuthenticationCheck";
import Layout from "./components/Layout/Layout";
import BecomeAHostFormPage from "./pages/BecomeAHostFormPage";
import BecomeAHostPage from "./pages/BecomeAHostPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { IDecodedToken, IState } from "./types/user.types";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import { logInActionCreator } from "./redux/reducers/features/userSlice/userSlice";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const dispatch = useAppDispatch();

  const { authenticated } = useAppSelector(
    (state: { user: IState }) => state.user
  );

  const token = localStorage.getItem("token");
  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (token as string) {
      const { id, username, name, image, imageBackup }: IDecodedToken =
        jwtDecode(token as string);
      dispatch(logInActionCreator({ id, username, name, image, imageBackup }));
    }
  }, [dispatch, token, authenticated, baseUrl]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/hosts/home" />} />
        <Route
          path="/user/login"
          element={
            <AuthenticationCheck>
              <LoginPage />
            </AuthenticationCheck>
          }
        />
        <Route
          path="/user/register"
          element={
            <AuthenticationCheck>
              <RegisterPage />
            </AuthenticationCheck>
          }
        />

        <Route
          path="/hosts/home"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        <Route
          path="/host/become-a-host"
          element={
            <Authenticated>
              <BecomeAHostPage />
            </Authenticated>
          }
        />

        <Route
          path="/places/:placeId"
          element={
            <Authenticated>
              <Layout>
                <PlaceDetailsPage />
              </Layout>
            </Authenticated>
          }
        />

        <Route
          path="/become-a-host/:placeId"
          element={
            <Authenticated>
              <BecomeAHostFormPage />
            </Authenticated>
          }
        />

        <Route
          path="/host/become-a-host/property-type-group"
          element={
            <Authenticated>
              <BecomeAHostFormPage />
            </Authenticated>
          }
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
