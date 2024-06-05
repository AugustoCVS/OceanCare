import { RootState } from "@/redux/store";
import { useMessage } from "@/utils/message";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { useDispatch, useSelector } from "react-redux";
import { DEVELOPMENT_FEATURE } from "./menu.constants";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "@/routes/stack.routes";
import { removeTokensOnStorage } from "@/utils/auth";
import { setToken } from "@/redux/slices/Token/token.slice";

export const useMenu = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackTypes>();

  const { showToast } = useMessage();

  const modalUpdateRef = useRef<Modalize>(null);

  const handleOpenModalUpdate = (): void => {
    modalUpdateRef.current?.open();
  };

  const handleChangePhoto = (): void => {
    showToast({
      title: DEVELOPMENT_FEATURE,
      error: true,
    });
  };

  const handleLogout = async (): Promise<void> => {
    await removeTokensOnStorage();
    dispatch(setToken("" as any));
    navigation.navigate("Initial");
  };

  const userInfo = [
    {
      id: 0,
      label: "Nome",
      value: user?.name,
    },
    {
      id: 1,
      label: "Email",
      value: user?.email,
    },
    {
      id: 2,
      label: "Pontos",
      value: user.reportedTrash.toString(),
    }
  ]

  return {
    refs: {
      modalUpdateRef,
    },
    states: {
      user,
      userInfo,
    },
    actions: {
      handleOpenModalUpdate,
      handleChangePhoto,
      handleLogout,
    }
  };
};
