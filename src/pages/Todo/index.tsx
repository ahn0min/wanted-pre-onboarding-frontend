import { TodoList } from "../../components/domains/Todo/TodoList";
import { TodoSubmit } from "../../components/domains/Todo/TodoSubmit";
import { useTodos } from "../../hooks/useTodos";

const TodoPage = () => {
  const { todos, value, onChange, onSubmitTodo } = useTodos();

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h1>TodoPage</h1>
      <TodoList todos={todos} />
      <TodoSubmit value={value} onChange={onChange} onSubmitTodo={onSubmitTodo} />
    </div>
  );
};
export default TodoPage;
