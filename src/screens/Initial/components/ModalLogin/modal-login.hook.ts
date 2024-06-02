import { useMutation } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ModalLoginProps } from "./modal-login.types";
import {
  LoginRequestProps,
  LoginResponseProps,
} from "@/services/interfaces/auth";
import { AuthService } from "@/services/auth";
import { useMessage } from "@/utils/message";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-login.utils";
import { jwtDecode } from "jwt-decode";
import { UserProps } from "@/services/interfaces/user";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/User/user.slice";
import { setToken } from "@/redux/slices/Token/token.slice";
import { StackTypes } from "@/routes/stack.routes";
import { useNavigation } from "@react-navigation/native";

export const useModalLogin = ({ modalRef }: ModalLoginProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackTypes>();
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

  const handleSaveUserInfo = ({ token }: { token: string }): void => {
    const userInfo = jwtDecode<UserProps>(token);
    dispatch(setToken({ token }));
    dispatch(setUser(userInfo));
  };

  const navigateToHome = (): void => {
    navigation.navigate("TabDashboard");
    showToast({
      title: SUCCESS_MESSAGE,
    });
  };

  const { isPending, mutate } = useMutation({
    mutationFn: (data: LoginRequestProps) => AuthService.login({ data }),
    onSuccess: async (data: LoginResponseProps) => {
      await handleSaveTokens(data);
      handleSaveUserInfo({
        token: data.token,
      });
      navigateToHome();
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
