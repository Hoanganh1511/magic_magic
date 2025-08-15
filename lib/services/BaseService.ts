// src/lib/services/BaseService.ts
import apiClient from "../axios/apiClient";

export abstract class BaseService {
  protected client = apiClient;
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll<T>(params?: Record<string, unknown>) {
    return this.client.get<T[]>(this.endpoint, { params });
  }

  getById<T>(id: string | number) {
    return this.client.get<T>(`${this.endpoint}/${id}`);
  }

  create<T>(data: Partial<T>) {
    return this.client.post<T>(this.endpoint, data);
  }

  update<T>(id: string | number, data: Partial<T>) {
    return this.client.put<T>(`${this.endpoint}/${id}`, data);
  }

  delete(id: string | number) {
    return this.client.delete(`${this.endpoint}/${id}`);
  }
}
