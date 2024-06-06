import { setTrigger } from "@/redux/slices/Trigger/trigger.slice";
import { setUser } from "@/redux/slices/User/user.slice";
import { RootState } from "@/redux/store";
import { UserProps } from "@/services/interfaces/user";
import { UserService } from "@/services/user";
import { getToken } from "@/utils/auth";
import { useQuery } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMessage } from "src/utils/message";

const ERROR_MESSAGE = "Erro ao buscar dados do uusário";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const trigger = useSelector((state: RootState) => state.trigger);
  const { showToast } = useMessage();
  const dispatch = useDispatch();

  const handleGetUser = async (): Promise<void> => {
    const token = await getToken();
    const userId = jwtDecode<UserProps>(token!).id;

    await UserService.getUser({ userId })
      .then((res) => {
        dispatch(setUser(res));
        dispatch(setTrigger("desativou"));
      })
      .catch(() => {
        showToast({
          title: ERROR_MESSAGE,
          error: true,
        });
      });
  };

  useQuery({
    queryKey: ["user", trigger.trigger],
    queryFn: async () => {
      await handleGetUser();
      return null;
    },
  });

  return <>{children}</>;
};
