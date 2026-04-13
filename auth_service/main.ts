export interface user_registration_form {
  email: string;
  password: string;
  inn: string;
  name: string;
}
export interface Valid_User {
  id: string;
  email: string;
  user: string;
}

export interface UserModel extends user_registration_form {
  id: string;
  name: string;
  isActivated: boolean;
  activationLink: string;
}

export interface Token_Schema {
  id: string;
  email: string;
  user: string;
  refreshToken: string;
}

export interface Role {
  id: string;
  user: UserModel;
  role: string;
  isadmin: boolean;
  createdAt: Date;
  updatedAt: Date;
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
  ROLE = '/role',
}

export enum AUTH_CMD {
  registration = 'registration',
  login = 'login',
  logout = 'logout',
  refresh = 'refresh',
  activate = 'activate',
  resetpassword = 'resetpassword',
  users = 'users',
  validate = 'validate',
  validate_user_model = 'validate_user_model',
  role_list = 'role_list',
  change_role = 'change_role',
  validate_role = 'validate_role',
  get_Role = 'get_Role',
}

export interface JWTPayload {
  email: string;
  sub: string;
}

export interface AuthTokens {
  refreshToken: string;
  accessToken: string;
}

export interface ROLE_FUNC {
  role_list(data: {}): Promise<Role[]>;
  change_role(data: { role: Role }): Promise<void>;
  validate_role(data: { user: Valid_User }): Promise<Role>;
  get_Role(data: { user: UserModel }): Promise<Role>;
}
