import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  value: string;
  htmlFor: string;
}

export const Label = ({ value, htmlFor, ...props }: LabelProps) => {
  return (
    <label {...props} htmlFor={htmlFor}>
      {value}
    </label>
  );
};
