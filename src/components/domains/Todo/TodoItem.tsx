import { ITodoDto } from "../../../api/type";

interface TodoItemProps extends ITodoDto {}

export const TodoItem = (props: TodoItemProps) => {
  return (
    <li
      style={{
        position: "relative",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <span>{!props.todo ? "당신의 투두리스트를 추가해보세요!" : props.todo}</span>
      <span style={{ position: "absolute", right: "10px" }}>{props.isCompleted ? "O" : "X"}</span>
    </li>
  );
};
