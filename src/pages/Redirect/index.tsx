import { useEffect } from "react";
import { useNavigates } from "../../hooks/useNavigates";

const RedirectPage = () => {
  const { navigateSign } = useNavigates();

  useEffect(() => {
    navigateSign();
  }, []);

  return null;
};

export default RedirectPage;
