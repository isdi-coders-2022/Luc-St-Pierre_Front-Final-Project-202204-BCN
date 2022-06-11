import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  IDecodedToken,
  ILoginResponse,
  IUserCredentials,
} from "../../types/user.types";
import {
  setLoadingOffWithMessage,
  setLoadingOn,
} from "../../utils/modal/modal";

import { logInActionCreator } from "../reducers/features/userSlice";
import { AppDispatch } from "../store/store";

const baseUrl = process.env.REACT_APP_API_URL;

export const loginThunk =
  (userData: IUserCredentials) => async (dispatch: AppDispatch) => {
    try {
      setLoadingOn();

      const {
        data: { token },
      } = await axios.post<ILoginResponse>(`${baseUrl}user/login`, userData);

      if (token) {
        const { username, name, email, image, imageBackup }: IDecodedToken =
          jwtDecode(token);

        const authenticatedUser = {
          username,
          name,
          email,
          image,
          imageBackup,
        };

        dispatch(logInActionCreator(authenticatedUser));
        setLoadingOffWithMessage("Successful authentication", false);
        localStorage.setItem("token", token);
      }
    } catch {
      setLoadingOffWithMessage("Error while authenticating", true);
    }
  };

export const registerThunk =
  (userData: any, password: string) => async (dispatch: AppDispatch) => {
    try {
      setLoadingOn();
      const { data } = await axios.post(`${baseUrl}user/register`, userData);

      if (data) {
        const newUserData = {
          username: data.username,
          password: password,
        };
        setLoadingOffWithMessage("User created successfully", false);
        dispatch(loginThunk(newUserData));
      }
    } catch {
      setLoadingOffWithMessage("Error while registering", true);
    }
  };
