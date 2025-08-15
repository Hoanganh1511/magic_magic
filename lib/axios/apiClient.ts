// src/lib/axios/apiClient.ts
import axios, { AxiosInstance } from "axios";
import { setupInterceptors } from "./interceptors";

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Gắn interceptors (log, auth, error handling)
setupInterceptors(apiClient);

export default apiClient;
