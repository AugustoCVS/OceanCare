import axios from "axios";
import { responseInterceptor } from "./interceptors/response-interceptor";
import { requestInterceptor } from "./interceptors/request-interceptor";
import { AuthService } from "./auth";
import { getRefreshToken, saveTokensOnStorage } from "@/utils/auth";

const BASE_URL = "http://192.168.0.6:8080";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => requestInterceptor(config),
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  async (error) => {
    const prevReq = error.config;
    const refreshToken = await getRefreshToken();

    if (error.response?.status === 403 && !prevReq._retry) {
      prevReq._retry = true;

      await AuthService.refreshToken({
        refreshToken: refreshToken || "",
      }).then(async (res) => {
        prevReq.headers["Authorization"] = `Bearer ${res.token}`;
        await saveTokensOnStorage(res);
      });
      return api.request(prevReq);
    }
    return Promise.reject(error);
  }
);

export { api };
