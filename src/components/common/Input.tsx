import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = ({ name, ...props }: InputProps) => {
  // validate를 통과해야 disabled: false

  return <input name={name} {...props} />;
};
