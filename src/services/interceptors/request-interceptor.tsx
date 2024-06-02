import AsyncStorage from "@react-native-async-storage/async-storage";
import { InternalAxiosRequestConfig } from "axios";

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  const token = await AsyncStorage.getItem("@token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
