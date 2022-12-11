import { FormEvent } from "react";
import { AuthAPI } from "../api";
import { ISignFormPayload } from "../api/type";
import { useNavigates } from "./useNavigates";

export const useLogin = (form?: ISignFormPayload) => {
  const { navigateTodo } = useNavigates();
  const login = async (e: FormEvent<HTMLFormElement>) => {
    if (!form) return;
    e.preventDefault();
    try {
      const response = await AuthAPI.signIn(form);
      localStorage.setItem("token", JSON.stringify({ access_token: response.data.access_token }));
      navigateTodo();
      alert("로그인 성공");
    } catch (err) {
      alert("로그인 실패");
    }
  };

  return { login };
};
