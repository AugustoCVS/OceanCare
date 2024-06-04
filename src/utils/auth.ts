import { LoginResponseProps } from "@/services/interfaces/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveTokensOnStorage = async (data: LoginResponseProps): Promise<void> => {
  await AsyncStorage.setItem("@token", data.token);
  await AsyncStorage.setItem("@refreshToken", data.refreshToken);
};

const getToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem("@token");
};

const getRefreshToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem("@refreshToken");
};

const removeTokensOnStorage = async (): Promise<void> => {
  await AsyncStorage.removeItem("@token");
  await AsyncStorage.removeItem("@refreshToken");
};

export {
  saveTokensOnStorage,
  getToken,
  getRefreshToken,
  removeTokensOnStorage,
};
