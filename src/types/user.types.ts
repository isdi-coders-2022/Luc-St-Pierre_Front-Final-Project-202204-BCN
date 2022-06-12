export interface Props {
  children: JSX.Element;
}

export interface IState {
  userData: IUser;
  authenticated: boolean;
}

export interface IUser {
  username: string;
  name: string;
  image: string;
  imageBackup?: string;
}

export interface IinitialState {
  name: string;
  username: string;
  email: string;
  image: string;
  id: string;
  authenticated: boolean;
}
export interface IUserCredentials {
  username: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IDecodedToken {
  name: string;
  username: string;
  email: string;
  image: string;
  imageBackup: string;
  id: string;
  authenticated: boolean;
}

export interface IRegisterData {
  name: string;
  username: string;
  email: string;
  password: string;
  image: string;
  imageBackup: string;
  id: string;
  authenticated: boolean;
}

export interface ILoginForm {
  username: string;
  password: string;
}

export interface IRegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
  image: string | File;
}
