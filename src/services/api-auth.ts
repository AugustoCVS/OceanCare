import axios from "axios";
import { responseInterceptor } from "./interceptors/response-interceptor";
import { errorInterceptor } from "./interceptors/error-interceptor";

const BASE_URL = "https://backend-ocean-care.onrender.com";

const apiAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiAuth.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
);

export { apiAuth };