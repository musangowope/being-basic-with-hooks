import React, { useReducer } from "react";

const UseReducerAddMinusExample = () => {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      {count}
      <button onClick={() => dispatch("add")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};

export default UseReducerAddMinusExample;
