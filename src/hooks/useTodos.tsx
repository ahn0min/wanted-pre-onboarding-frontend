import { ChangeEvent, useEffect, useState } from "react";
import { TodoAPI } from "../api";
import { ITodoUpdatePayload } from "../api/type";

export const useTodos = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [value, setValue] = useState("");

  const getTodos = async () => {
    try {
      const response = await TodoAPI.get();
      setTodos(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitTodo = async () => {
    try {
      const response = await TodoAPI.create({ todo: value });
      setTodos((pre) => [...pre, response.data]);
      alert("투두리스트 작성에 성공했어요");
      setValue("");
    } catch (err) {
      alert("투두리스트 작성에 실패했어요");
    }
  };

  const updateTodo = async (id: number, payload: ITodoUpdatePayload) => {
    try {
      await TodoAPI.update(id, payload);
      getTodos();
    } catch (err) {
      alert("실패");
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await TodoAPI.delete(id);
      getTodos();
      alert("삭제 완료");
    } catch (err) {
      alert("삭제가 실패했어요");
    }
  };
  return { todos, setTodos, value, onChange, submitTodo, getTodos, updateTodo, deleteTodo };
};
