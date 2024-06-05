import { UserProps } from "@/services/interfaces/user"

export type UserListProps = {
  userList: UserProps[]
  isLoading: boolean;
  onRefresh: () => void;
}