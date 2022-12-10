import { ITodoDto } from "../../../api/type";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: ITodoDto[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  if (!todos.length) return <TodoItem id={0} isCompleted={false} todo={""} userId={0} />;
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
