export interface UserData {
  id: string;
  name: string;
  username: string;
  image: string;
  authenticated: boolean;
}

export interface LoginData {
  token: string;
}

export interface DecodedToken {
  name: string;
  username: string;
  image: string;
  authenticated: boolean;
  id: string;
  iat: number;
}
