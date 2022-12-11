import { useEffect } from "react";
import { SignInForm } from "../../components/domains/SignIn/Form";
import { SignUpForm } from "../../components/domains/SignUp/Form";
import { useNavigates } from "../../hooks/useNavigates";
import { useSignForm } from "../../hooks/useSignForm";

const SignPage = () => {
  const { isSignIn, toggleIsSignIn } = useSignForm();
  const { navigateTodo } = useNavigates();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigateTodo();
  }, []);

  return (
    <div>
      <>
        <div>
          {isSignIn ? (
            <button key="회원가입" onClick={toggleIsSignIn}>
              회원가입
            </button>
          ) : (
            <button key="로그인" onClick={toggleIsSignIn}>
              로그인
            </button>
          )}
        </div>
        <div>{isSignIn ? <SignInForm /> : <SignUpForm toggle={toggleIsSignIn} />}</div>
      </>
      <button onClick={toggleIsSignIn}>ddfd</button>
    </div>
  );
};

export default SignPage;
