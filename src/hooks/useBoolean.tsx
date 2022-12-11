import { useState } from "react";

export const useBoolean = (state: boolean = false) => {
  const [isBoolean, setBoolean] = useState(state);

  const open = () => setBoolean(true);
  const close = () => setBoolean(false);
  const toggle = () => setBoolean((pre) => !pre);

  return { isBoolean, setBoolean, open, close, toggle };
};
