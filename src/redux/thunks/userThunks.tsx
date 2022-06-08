import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  IDecodedToken,
  ILoginResponse,
  IRegisterData,
  IUserCredentials,
} from "../../types/user.types";
import {
  logInActionCreator,
  registerActionCreator,
} from "../reducers/features/userSlice";
import { AppDispatch } from "../store/store";

export const loginThunk =
  (user: IUserCredentials) => async (dispatch: AppDispatch) => {
    const { data } = await axios.post<ILoginResponse>(
      `${process.env.REACT_APP_API_URL}user/login`,
      user
    );

    const { name, username, email, image, id, authenticated }: IDecodedToken =
      jwtDecode<IDecodedToken>(data.token);

    localStorage.setItem("token", data.token);

    dispatch(
      logInActionCreator({ name, username, email, image, id, authenticated })
    );
  };

export const registerThunk =
  (user: IRegisterData) => async (dispatch: AppDispatch) => {
    await axios.post<ILoginResponse>(
      `${process.env.REACT_APP_API_URL}user/register`,
      user
    );

    dispatch(registerActionCreator(user));
  };
