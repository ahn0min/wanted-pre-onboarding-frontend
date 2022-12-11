import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignInForm } from "../../components/domains/SignIn/Form";
import { SignUpForm } from "../../components/domains/SignUp/Form";
import { useLogin } from "../../hooks/useLogin";
import { useNavigates } from "../../hooks/useNavigates";
import { routerList } from "../../Router";

const signModes = ["로그인", "회원가입"];

const SignPage = () => {
  const [mode, setMode] = useState(signModes[0]);
  const { navigateTodo } = useNavigates();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigateTodo();
  }, []);

  return (
    <div>
      <>
        <div>
          {signModes.map((mode) => (
            <button onClick={() => setMode(mode)}>{mode}</button>
          ))}
        </div>
        <div>{mode === signModes[0] ? <SignInForm /> : <SignUpForm />}</div>
      </>
    </div>
  );
};

export default SignPage;
