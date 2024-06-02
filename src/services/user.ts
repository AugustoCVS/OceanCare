import { apiAuth } from "./api-auth";
import { UserProps } from "./interfaces/user";

export const UserService = {
  getUser: async ({ userId }: { userId: string }) => {
    const res = await apiAuth.get<UserProps>(`/users/${userId}`);

    return res.data;
  },
};
