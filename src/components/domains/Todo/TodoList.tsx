import { AxiosResponse } from "axios";
import { ITodoDto, ITodoUpdatePayload } from "../../../api/type";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: ITodoDto[];
  updateTodo: (id: number, payload: ITodoUpdatePayload) => Promise<AxiosResponse<any, any> | undefined>;
  deleteTodo: (id: number) => Promise<AxiosResponse<any, any> | undefined>;
}

export const TodoList = ({ todos, ...props }: TodoListProps) => {
  if (!todos.length) return <TodoItem id={0} isCompleted={false} todo={""} userId={0} />;
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} {...props} />
      ))}
    </ul>
  );
};
