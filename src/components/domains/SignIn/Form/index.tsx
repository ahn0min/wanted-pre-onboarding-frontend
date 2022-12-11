import { useLogin } from "../../../../hooks/useLogin";
import { useSignForm } from "../../../../hooks/useSignForm";
import validate from "../../../../util/validate";
import { Input } from "../../../common/Input";
import { Label } from "../../../common/Label";

import "./style.css";

// interface ISignInForm {
//   email: string;
//   password: string;
// }

export const formNames = {
  email: "email",
  password: "password",
};

export const SignInForm = () => {
  const { form, onChangeEmail, onChangePassword, isValidate } = useSignForm();
  const { login } = useLogin(form);

  return (
    <form className="sign_form" onSubmit={login}>
      <h1>로그인</h1>
      <div className="flex">
        <Label htmlFor={formNames.email} value="이메일" />
        <Input type={formNames.email} onChange={onChangeEmail} name={formNames.email} />
        <p>{!validate.email(form.email) ? "올바른 이메일형식이 아니에요" : ""}</p>
      </div>
      <div className="flex">
        <Label htmlFor={formNames.password} value={"패스워드"} />
        <Input type={formNames.password} onChange={onChangePassword} name={formNames.password} />
        <p>{!validate.password(form.password) ? "비밀번호는 8글자 이상이에요" : ""}</p>
      </div>
      <button type="submit" disabled={isValidate}>
        로그인하기
      </button>
    </form>
  );
};
