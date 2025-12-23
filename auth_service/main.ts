export interface Valid_User {
  id: string;
  email: string;
  user: string;
}

export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  isActivated: boolean;
  activationLink: string;
}

export interface Token_Schema {
  id: string;
  email: string;
  user: string;
  refreshToken: string;
}
export enum AUTH_ROUTES {
  MAIN = '/api/auth',
  SIGN_UP = '/registration',
  SIGN_IN = '/login',
  SIGN_OUT = '/logout',
  REFRESH_TOKEN = '/refresh',
  ACTIVATION_LINK = '/activate',
  PASSWORD_RESET = '/resetpassword',
  USERS = '/users',
}

export enum AUTH_CMD {
  registration = 'registration',
  login = 'login',
  logout = 'logout',
  refresh = 'refresh',
  activate = 'activate',
  resetpassword = 'resetpassword',
  users = 'users',
}
export interface JWTPayload {
  email: string;
  sub: string;
}
export interface AuthTokens {
  refreshToken: string;
  accessToken: string;
}
