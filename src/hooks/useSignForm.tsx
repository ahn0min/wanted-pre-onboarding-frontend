import { ChangeEvent, FormEvent, useEffect } from "react";
import { useState } from "react";
import { AuthAPI } from "../api";
import validate from "../util/validate";

interface ISignInForm {
  email: string;
  password: string;
}

export const useSignForm = () => {
  const [form, setForm] = useState<ISignInForm>({
    email: "",
    password: "",
  });
  const [isSignIn, setSignIn] = useState(true);
  const [isValidate, setIsValidate] = useState(true);

  const toggleIsSignIn = () => setSignIn((pre) => !pre);

  useEffect(() => {
    if (!form.email || !form.password) return;
    if (!validate.email(form.email) || !validate.password(form.password)) {
      return setIsValidate(true);
    }
    setIsValidate(false);
  }, [form]);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setForm((pre) => ({ ...pre, ...{ email: e.target.value } }));
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setForm((pre) => ({ ...pre, ...{ password: e.target.value } }));
  const submitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await AuthAPI.signUp(form);
      alert("회원가입 성공");
    } catch (err) {
      alert("회원가입 실패");
    }
  };

  return { form, isSignIn, toggleIsSignIn, onChangeEmail, onChangePassword, submitSignUp, isValidate };
};
