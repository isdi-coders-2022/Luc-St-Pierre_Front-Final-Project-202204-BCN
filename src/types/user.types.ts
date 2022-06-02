export interface Props {
  children: JSX.Element;
}

export interface IinitialState {
  name: string;
  username: string;
  image: string;
  id: string;
  authenticated: boolean;
}
export interface IUserCredentials {
  username: string;
  password: string;
}

export interface ILoginData {
  token: string;
}

export interface IDecodedToken {
  name: string;
  username: string;
  image: string;
  id: string;
  authenticated: boolean;
}
