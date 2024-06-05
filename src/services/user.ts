import { api } from "./api";
import { ResponseUserProps, UserProps } from "./interfaces/user";

export const UserService = {
  getUser: async ({ userId }: { userId: number }) => {
    const res = await api.get<UserProps>(`/users/${userId}`);

    return res.data;
  },

  getUsers: async () => {
    const res = await api.get<ResponseUserProps>("/users/list");

    return res.data;
  },
};
