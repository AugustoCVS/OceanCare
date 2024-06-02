import { apiAuth } from "./api-auth";
import { RegisterRequestProps } from "./interfaces/auth";
export const AuthService = {
  register: async ({ data }: { data: RegisterRequestProps }) => {
    const res = await apiAuth.post("/users/register", data);

    return res.data;
  },
};
