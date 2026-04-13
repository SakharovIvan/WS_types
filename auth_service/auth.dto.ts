export class AuthDto {
  readonly email: string;
  readonly password: string;
}

export class MainRegistrationUserDto extends AuthDto {
  readonly name: string;
  inn: string;
}

export class CreateUserDto extends MainRegistrationUserDto {
  readonly isActivated: boolean;
  readonly activationLink: string;
}

export class UpdateUserDto {
  readonly name: string | null;
  readonly email: string | null;
  readonly password: string | null;
  readonly inn: string | null;
  readonly isActivated: boolean | null;
  readonly activationLink: string | null;
}
