export enum REPAIR_ROUTES {
  MAIN = '/api/auth',
  SIGN_UP = '/registration',
  SIGN_IN = '/login',
  SIGN_OUT = '/logout',
  REFRESH_TOKEN = '/refresh',
  ACTIVATION_LINK = '/activate',
  PASSWORD_RESET = '/resetpassword',
  USERS = '/users',
}

export enum REPAIR_CMD {
  registration = 'registration',
  login = 'login',
  logout = 'logout',
  refresh = 'refresh',
  activate = 'activate',
  resetpassword = 'resetpassword',
  users = 'users',
}
