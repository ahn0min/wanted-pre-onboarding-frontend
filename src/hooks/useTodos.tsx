import { ChangeEvent, useEffect, useState } from "react";
import { TodoAPI } from "../api";

export const useTodos = () => {
  const [todos, setTodos] = useState<any[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getResponse = async () => {
      try {
        const response = await TodoAPI.get();
        setTodos(response.data);
      } catch (err) {
        alert("투두 리스트를 불러오지 못했어요.");
      }
    };
    getResponse();
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
  return { todos, setTodos, value, onChange, onSubmitTodo };
};
