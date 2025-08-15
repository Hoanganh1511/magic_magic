// src/lib/axios/interceptors.ts
import { AxiosInstance, AxiosError, AxiosResponse } from "axios";

export const setupInterceptors = (client: AxiosInstance) => {
  client.interceptors.request.use(
    (config) => {
      // Gắn token nếu có
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  client.interceptors.response.use(
    (response: AxiosResponse) => {
      return response.data; // unwrap data
    },
    (error: AxiosError) => {
      // Log lỗi cho debug
      console.error("API Error:", error.response?.data || error.message);

      // Xử lý lỗi 401 → logout
      if (error.response?.status === 401) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }

      return Promise.reject(error);
    }
  );
};
