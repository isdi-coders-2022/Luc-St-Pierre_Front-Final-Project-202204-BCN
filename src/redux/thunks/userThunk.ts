import axios from "axios";
import jwtDecode from "jwt-decode";
import { DecodedToken, LoginData, UserData } from "../../types/user.types";
import { logInActionCreator } from "../reducers/features/userSlice";

export const loginThunk = (user: LoginData | UserData) => async (dispatch) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}users/login`,
    user
  );

  const decodedToken: DecodedToken = await jwtDecode(data.token);

  localStorage.setItem("token", data.token);

  const authenticatedUser = {
    name: (user as UserData).name,
    username: user.username,
    password: (user as LoginData).password,
    id: decodedToken.id,
    token: data.token,
    authenticated: true,
  };

  dispatch(logInActionCreator(authenticatedUser));
};
