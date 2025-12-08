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