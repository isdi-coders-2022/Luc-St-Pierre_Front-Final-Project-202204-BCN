import axios from "axios";
import jwtDecode from "jwt-decode";
import { DecodedToken, LoginData, UserData } from "../../types/user.types";
import { logInActionCreator } from "../reducers/features/userSlice";
import { AppDispatch } from "../store/store";

export const loginThunk =
  (user: LoginData | UserData) => async (dispatch: AppDispatch) => {
    const { data } = await axios.post<LoginData>(
      `${process.env.REACT_APP_API_URL}users/login`,
      user
    );

    const decodedToken: DecodedToken = await jwtDecode(data.token);

    localStorage.setItem("token", data.token);

    dispatch(logInActionCreator(decodedToken));
  };
