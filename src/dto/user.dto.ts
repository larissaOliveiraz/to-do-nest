export type CreateUserRequestDTO = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type SignInDTO = {
  username: string;
  password: string;
};
