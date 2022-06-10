import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  IDecodedToken,
  ILoginResponse,
  IUserCredentials,
} from "../../types/user.types";
import { logInActionCreator } from "../reducers/features/userSlice";
import { AppDispatch } from "../store/store";

const baseUrl = process.env.REACT_APP_API_URL;

export const loginThunk =
  (userData: IUserCredentials) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { token },
      } = await axios.post<ILoginResponse>(`${baseUrl}user/login`, userData);
      if (token) {
        const { username, name, email, image, imageBackup }: IDecodedToken =
          jwtDecode(token);

        console.log("imageBackup: ", imageBackup);

        const authenticatedUser = {
          username,
          name,
          email,
          image,
          imageBackup,
        };

        dispatch(logInActionCreator(authenticatedUser));
        localStorage.setItem("token", token);
      }
    } catch (error: any) {
      return error.message;
    }
  };

export const registerThunk =
  (userData: any, password: string) => async (dispatch: AppDispatch) => {
    try {
      const { data } = await axios.post(`${baseUrl}user/register`, userData);

      if (data) {
        const newUserData = {
          username: data.new_user.username,
          password: password,
        };
        dispatch(loginThunk(newUserData));
      }
    } catch (error: any) {
      return error;
    }
  };
