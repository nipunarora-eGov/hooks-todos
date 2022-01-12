import { v4 as uuidv4 } from "uuid";
export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TODO":
      const updatedTodo = { ...state.currentTodo, text: action.payload };
      const updatedTodoIndex = state.todos.findIndex(
        (el) => el.id === state.currentTodo.id
      );
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1),
      ];

      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos,
      };

    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload,
      };
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false,
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos,
      };
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map((el) =>
        el.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : el
      );
      return {
        ...state,
        todos: toggledTodos,
      };
    case "REMOVE_TODO":
      const filteredTodos = state.todos.filter(
        (el) => el.id !== action.payload.id
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
}
