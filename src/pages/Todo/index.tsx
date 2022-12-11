import { useEffect } from "react";
import { TodoList } from "../../components/domains/Todo/TodoList";
import { TodoSubmit } from "../../components/domains/Todo/TodoSubmit";
import { useNavigates } from "../../hooks/useNavigates";
import { useTodos } from "../../hooks/useTodos";

const TodoPage = () => {
  const { todos, value, onChange, submitTodo, updateTodo, deleteTodo } = useTodos();
  const { navigateSign } = useNavigates();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigateSign();
  }, []);

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h1>TodoPage</h1>
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      <TodoSubmit value={value} onChange={onChange} onSubmitTodo={submitTodo} />
    </div>
  );
};
export default TodoPage;
