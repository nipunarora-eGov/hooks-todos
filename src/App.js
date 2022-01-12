import React, { useContext, useReducer } from "react";
import { userContext } from "./index";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useContext(userContext);
  return (
    <div>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="border p-1 m-1 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="border p-1 m-1 rounded"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="border p-1 m-1 rounded"
      >
        Reset
      </button>
    </div>
  );
};

export default App;
