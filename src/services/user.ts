import { api } from "./api";
import { UserProps } from "./interfaces/user";

export const UserService = {
  getUser: async ({ userId }: { userId: string }) => {
    const res = await api.get<UserProps>(`/users/${userId}`);

    return res.data;
  },
};
