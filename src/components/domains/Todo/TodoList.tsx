import { ITodoDto, ITodoUpdatePayload } from "../../../api/type";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: ITodoDto[];
  updateTodo: (id: number, payload: ITodoUpdatePayload) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
}

export const TodoList = ({ todos, ...props }: TodoListProps) => {
  return (
    <ul style={{ listStyle: "none", padding: "20px 0" }}>
      {!todos.length ? (
        <TodoItem id={0} isCompleted={false} todo={""} userId={0} />
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} {...props} />)
      )}
    </ul>
  );
};
