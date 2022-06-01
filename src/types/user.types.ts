export interface UserData {
  id: string;
  name: string;
  username: string;
  authenticated: boolean;
}

export interface LoginData {
  username: string;
  password: string;
  token?: string;
}

export interface DecodedToken {
  username: string;
  id: string;
  iat: number;
}
