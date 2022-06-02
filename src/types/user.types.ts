export interface IinitialState {
  name: string;
  username: string;
  image: string;
  id: string;
}
export interface IUserData {
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
}
