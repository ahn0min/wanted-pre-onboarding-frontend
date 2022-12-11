import { Input } from "../../common/Input";
import { Label } from "../../common/Label";

interface TogoSubmitProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitTodo: () => Promise<void>;
}

export const TodoSubmit = ({ value, onChange, onSubmitTodo }: TogoSubmitProps) => {
  return (
    <div>
      <Label value={""} htmlFor={"todo_input"} />
      <Input name={"todo_input"} value={value} onChange={onChange} />
      <button onClick={onSubmitTodo}>add</button>
    </div>
  );
};
