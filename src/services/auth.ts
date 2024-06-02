import { apiAuth } from "./api-auth";
import { LoginRequestProps, LoginResponseProps, RegisterRequestProps } from "./interfaces/auth";

export const AuthService = {
  register: async ({ data }: { data: RegisterRequestProps }) => {
    const res = await apiAuth.post("/users/register", data);

    return res.data;
  },

  login: async ({ data }: { data: LoginRequestProps }) => {
    const res = await apiAuth.post<LoginResponseProps>("/users/login", data);

    return res.data;
  },
};
