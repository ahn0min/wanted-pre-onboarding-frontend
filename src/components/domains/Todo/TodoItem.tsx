import { AxiosResponse } from "axios";
import { ChangeEvent, useState } from "react";
import { ITodoDto, ITodoUpdatePayload } from "../../../api/type";
import { useBoolean } from "../../../hooks/useBoolean";
import { Input } from "../../common/Input";

interface TodoItemProps extends ITodoDto {
  updateTodo?: (id: number, payload: ITodoUpdatePayload) => Promise<AxiosResponse<any, any> | undefined>;
  deleteTodo?: (id: number) => Promise<AxiosResponse<any, any> | undefined>;
}

export const TodoItem = ({ updateTodo, deleteTodo, ...props }: TodoItemProps) => {
  const { isBoolean: isModify, toggle } = useBoolean();
  const [value, setValue] = useState(props.todo);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const updateOnClick = async () => {
    if (value === props.todo) return toggle();

    const response = updateTodo && (await updateTodo(props.id, { todo: value, isCompleted: props.isCompleted }));
    if (response?.status === 200) {
      setValue(response?.data.todo);
    } else {
      setValue(props.todo);
    }

    toggle();
  };

  const deleteOnClick = async (id: number) => {
    deleteTodo && (await deleteTodo(id));
  };

  return (
    <li
      style={{
        position: "relative",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <span style={{ position: "absolute", left: "10px", cursor: "pointer" }} onClick={updateOnClick}>
        {props.isCompleted ? "달성" : "미달성"}
      </span>
      {isModify ? (
        <Input name={"todo"} value={value} onChange={onChange} />
      ) : (
        <span>{!props.todo ? "당신의 투두리스트를 추가해보세요!" : value}</span>
      )}
      <span style={{ position: "absolute", right: "10px" }}>
        {!isModify ? (
          <>
            <button onClick={toggle}>수정</button>
            <button onClick={() => deleteOnClick(props.id)}>삭제</button>
          </>
        ) : (
          <span>
            <button onClick={updateOnClick}>제출</button>
            <button onClick={toggle}>취소</button>
          </span>
        )}
      </span>
    </li>
  );
};
