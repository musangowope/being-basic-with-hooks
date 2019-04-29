import React, { Fragment, useReducer, useRef } from "react";

const UserReducerShoppingList = props => {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];

      case "remove":
        return state.filter((_, index) => index !== action.index);

      default:
        return state;
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });

    inputRef.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() =>
                dispatch({
                  type: "remove",
                  index
                })
              }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default UserReducerShoppingList;
