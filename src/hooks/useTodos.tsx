import { ChangeEvent, useEffect, useState } from "react";
import { TodoAPI } from "../api";
ㅎimport { ITodoUpdatePayload } from "../api/type";

export const useTodos = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [value, setValue] = useState("");

  const getTodos = async () => {
    try {
      const response = await TodoAPI.get();
      setTodos(response.data);
    } catch (err) {
      alert("투두 리스트를 불러오지 못했어요.");
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmitTodo = async () => {
    try {
      const response = await TodoAPI.create({ todo: value });
      setTodos((pre) => [...pre, response.data]);
      alert("투두리스트 작성에 성공했어요");
    } catch (err) {
      alert("투두리스트 작성에 실패했어요");
    }
  };

  const updateTodo = async (id: number, payload: ITodoUpdatePayload) => {
    try {
      const response = await TodoAPI.update(id, payload);
      return response;
    } catch (err) {
      alert("실패");
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await TodoAPI.delete(id);
      getTodos();
      alert("삭제 완료");
      return response;
    } catch (err) {
      alert("삭제가 실패했어요");
    }
  };
  return { todos, setTodos, value, onChange, onSubmitTodo, getTodos, updateTodo, deleteTodo };
};
