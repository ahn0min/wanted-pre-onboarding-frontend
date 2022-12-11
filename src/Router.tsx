import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignPage, TodoPage } from "./pages";

export const routerList = {
  sign: "/",
  todo: "todo",
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routerList.sign} element={<SignPage />} />
        <Route path={routerList.todo} element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
