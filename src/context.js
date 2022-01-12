import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Eat breakfast", complete: false },
    { id: 2, text: "Do laundry", complete: false },
    { id: 3, text: "make project", complete: true },
  ],
  currentTodo: {},
  //when we click the edit button that todo becomes the current todo
});

export default TodosContext;
