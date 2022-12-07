import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignPage, TodoPage } from "./pages";

const RouterList = {
  sign: "/",
  todo: "todo",
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterList.sign} element={<SignPage />} />
        <Route path={RouterList.todo} element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
