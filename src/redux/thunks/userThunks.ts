import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  IDecodedToken,
  ILoginData,
  IUserCredentials,
} from "../../types/user.types";
import { logInActionCreator } from "../reducers/features/userSlice";
import { AppDispatch } from "../store/store";

export const loginThunk =
  (user: IUserCredentials) => async (dispatch: AppDispatch) => {
    const { data } = await axios.post<ILoginData>(
      `${process.env.REACT_APP_API_URL}users/login`,
      user
    );

    const { name, username, image, id, authenticated }: IDecodedToken =
      jwtDecode<IDecodedToken>(data.token);

    localStorage.setItem("token", data.token);

    dispatch(logInActionCreator({ name, username, image, id, authenticated }));
  };
