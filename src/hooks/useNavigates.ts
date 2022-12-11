import { useNavigate } from "react-router-dom";
import { routerList } from "../Router";

export const useNavigates = () => {
  const navigate = useNavigate();

  const navigateSign = () => navigate(routerList.sign);
  const navigateTodo = () => navigate(routerList.todo);

  return { navigateSign, navigateTodo };
};
