import { setUser } from "@/redux/slices/User/user.slice";
import { UserProps } from "@/services/interfaces/user";
import { UserService } from "@/services/user";
import { getToken } from "@/utils/auth";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useMessage } from "src/utils/message";

const ERROR_MESSAGE = "Erro ao buscar dados do uusário";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { showToast } = useMessage();
  const dispatch = useDispatch();

  const handleGetUser = async (): Promise<void> => {
    const token = await getToken();
    const userId = jwtDecode<UserProps>(token!).id;

    await UserService.getUser({ userId })
      .then((res) => {
        dispatch(setUser(res));
      })
      .catch(() => {
        showToast({
          title: ERROR_MESSAGE,
          error: true,
        });
      });
  };

  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      await handleGetUser();
      return null;
    },
  });

  return <>{children}</>;
};
