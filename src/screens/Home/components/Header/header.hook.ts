import { setToken } from "@/redux/slices/Token/token.slice";
import { RootState } from "@/redux/store";
import { StackTypes } from "@/routes/stack.routes";
import { removeTokensOnStorage } from "@/utils/auth";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export const useHeader = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackTypes>();

  const handleLogout = async (): Promise<void> => {
    await removeTokensOnStorage();
    dispatch(setToken("" as any));
    navigation.navigate("Initial");
  };

  return {
    states: {
      user,
    },
    actions: {
      handleLogout,
    },
  };
};
