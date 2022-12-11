// import { AxiosResponse } from "axios";

export interface ISignFormPayload {
  email: string;
  password: string;
}

export interface ITodoUpdatePayload {
  todo: string;
  isCompleted: boolean;
}

export interface ISignFormResponse {
  access_token: string;
}

// export type ResponseType<T> = Promise<AxiosResponse<T>>;
export interface ITodoDto {
  id: number;
  isCompleted: boolean;
  todo: string;
  userId: number;
}
