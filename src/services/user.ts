import { api } from "./api";
import {
  ResponseUserProps,
  UpdateUserInfoRequest,
  UserProps,
} from "./interfaces/user";

export const UserService = {
  getUser: async ({ userId }: { userId: number }) => {
    const res = await api.get<UserProps>(`/users/${userId}`);

    return res.data;
  },

  getUsers: async () => {
    const res = await api.get<ResponseUserProps>("/users/list");

    return res.data;
  },

  updateUserInfo: async ({
    data,
    userId,
  }: {
    data: UpdateUserInfoRequest;
    userId: number;
  }) => {
    const res = await api.put<UserProps>(`/users/update/${userId}`, {
      name: data.name,
      email: data.email,
    });

    return res.data;
  },
};
