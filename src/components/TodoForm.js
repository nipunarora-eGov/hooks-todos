import React, { useState, useEffect, useContext } from "react";
import TodosContext from "../context";
const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const {
    state: { currentTodo = {} },
    dispatch,
  } = useContext(TodosContext);
  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    }
  }, [currentTodo.id]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center p-5">
        <input
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          className="border-black border-solid border-2"
        />
      </form>
    </div>
  );
};

export default TodoForm;
