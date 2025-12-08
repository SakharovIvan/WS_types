export interface Valid_User {
  id: string;
  email: string;
  user: string;
}
export interface UserModel{
  id: string;

  email: string;

  password: string;

  isActivated: boolean;

  activationLink: string;
}

export interface Token_Schema{
    id: string;
  
    email: string;
  
    user: string;
  
    refreshToken: string;
}
export enum AUTH_ROUTES {
  MAIN = '/api/auth',
  REGISTRATION = '/registration',
  LOGIN = '/login',
  LOGOUT = '/logout',
  ACTIVATION_LINK = '/activate',
  REFRESH_TOKEN = '/refresh',
  GET_USERS = '/users',
}