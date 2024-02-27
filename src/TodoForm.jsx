import { useRef } from "react";
import useTodo from "./store/useTodo";

const TodoForm = () => {
  const inputRef = useRef(null);
  const { addNewTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    addNewTodo(value);
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type in Something ..." ref={inputRef} />
    </form>
  );
};

export default TodoForm;
