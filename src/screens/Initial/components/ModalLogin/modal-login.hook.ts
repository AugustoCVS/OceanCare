import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ModalLoginProps } from "./modal-login.types";
import { LoginRequestProps, LoginResponseProps } from "@/services/interfaces/auth";
import { AuthService } from "@/services/auth";
import { useMessage } from "@/utils/message";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-login.utils";

export const useModalLogin = ({ modalRef }: ModalLoginProps) => {
  const { showToast } = useMessage();

  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  const handleSaveTokens = async ({
    refreshToken,
    token,
  }: LoginResponseProps): Promise<void> => {
    await AsyncStorage.setItem("@token", token);
    await AsyncStorage.setItem("@refreshToken", refreshToken);
  };

  const { isPending, mutate } = useMutation({
    mutationFn: (data: LoginRequestProps) => AuthService.login({ data }),
    onSuccess: async (data: LoginResponseProps) => {
      console.log(data);
      await handleSaveTokens(data);
      handleCloseModal();
      showToast({
        title: SUCCESS_MESSAGE,
      });
    },
    onError: () => {
      showToast({
        title: ERROR_MESSAGE,
        error: true,
      });
    },
  });

  const handleLogin = (data: LoginRequestProps): void => {
    mutate(data);
  };

  return {
    states: {
      isPending,
    },
    actions: {
      handleCloseModal,
      handleLogin,
    },
  };
};
