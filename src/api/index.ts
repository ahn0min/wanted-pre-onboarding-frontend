import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { ISignFormResponse, ITodoDto, ITodoUpdatePayload } from "./type";

let BASEURL = "https://pre-onboarding-selection-task.shop/";
const api = axios.create({
  baseURL: BASEURL,
  headers: {
    contentType: "application/json",
  },
});

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");
  if (!token) return config;
  const { access_token } = JSON.parse(token);
  config.headers["Authorization"] = access_token ? `Bearer ${access_token}` : null;
  return config;
});

export const AuthAPI = {
  signIn: async (form: { email: string; password: string }): Promise<AxiosResponse<ISignFormResponse>> => {
    return await api.post("/auth/signin", form);
  },
  signUp: async (form: { email: string; password: string }): Promise<AxiosResponse<ISignFormResponse>> => {
    return await api.post("/auth/signup", form);
  },
};

// todo: string
export const TodoAPI = {
  create: (payload: { todo: string }): Promise<AxiosResponse<ITodoDto>> => api.post("/todos", payload),
  get: () => api("/todos"),
  update: (id: number, payload: ITodoUpdatePayload) => api.put(`/todos/${id}`, payload),
  delete: (id: number) => api.delete(`/todos/${id}`),
};
