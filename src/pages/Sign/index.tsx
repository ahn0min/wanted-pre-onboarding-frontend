import { useState } from "react";
import { SignInForm } from "../../components/domains/SignIn/Form";
import { SignUpForm } from "../../components/domains/SignUp/Form";

const signModes = ["로그인", "회원가입"];

const SignPage = () => {
  const [mode, setMode] = useState(signModes[0]);
  return (
    <div>
      <div>
        {signModes.map((mode) => (
          <button onClick={() => setMode(mode)}>{mode}</button>
        ))}
      </div>
      <div>{mode === signModes[0] ? <SignInForm /> : <SignUpForm />}</div>
    </div>
  );
};

export default SignPage;
