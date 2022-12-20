import { ChangeEvent, useState } from "react";
import { ITodoDto, ITodoUpdatePayload } from "../../../api/type";
import { useBoolean } from "../../../hooks/useBoolean";
import { Input } from "../../common/Input";

interface TodoItemProps extends ITodoDto {
  updateTodo?: (id: number, payload: ITodoUpdatePayload) => Promise<void>;
  deleteTodo?: (id: number) => Promise<void>;
}

export const TodoItem = ({ updateTodo, deleteTodo, ...props }: TodoItemProps) => {
  const { isBoolean: isModify, toggle } = useBoolean();
  const [value, setValue] = useState(props.todo);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const updateOnClick = async (value: string, isCompleted?: boolean) => {
    if (value === props.todo) return toggle();
    if (updateTodo) await updateTodo(props.id, { todo: value, isCompleted: isCompleted || props.isCompleted });
    toggle();
  };

  const updateIsCompletedOnClick = async () => {
    if (updateTodo) await updateTodo(props.id, { todo: value, isCompleted: !props.isCompleted });
  };

  const deleteOnClick = async (id: number) => {
    if (deleteTodo) await deleteTodo(id);
  };

  const resetValue = () => {
    setValue(props.todo);
    toggle();
  };

  if (!props.todo)
    return (
      <li
        style={{
          listStyle: "none",
          position: "relative",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <span>당신의 투두리스트를 추가해보세요</span>
      </li>
    );

  return (
    <li
      style={{
        position: "relative",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <span style={{ position: "absolute", left: "10px", cursor: "pointer" }} onClick={updateIsCompletedOnClick}>
        {props.isCompleted ? "달성" : "미달성"}
      </span>
      {isModify ? <Input name={"todo"} value={value} onChange={onChange} /> : <span>{value}</span>}
      <span style={{ position: "absolute", right: "10px" }}>
        {!isModify ? (
          <>
            <button onClick={toggle}>수정</button>
            <button onClick={() => deleteOnClick(props.id)}>삭제</button>
          </>
        ) : (
          <span>
            <button onClick={() => updateOnClick(value)}>제출</button>
            <button onClick={resetValue}>취소</button>
          </span>
        )}
      </span>
    </li>
  );
};
