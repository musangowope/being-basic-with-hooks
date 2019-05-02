import React, { useState, useEffect } from "react";

const HooksExample = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  });

  const handleResize = () => setScreenWidth(window.innerWidth);
  const increment = () => setCounter(counter + 1);

  return (
    <div>
      <h4>Function Component with Hooks</h4>
      <div>
        <span>Number of clicks {counter}</span>
        <button type="button" onClick={increment}>
          Click me
        </button>
      </div>
      <div>Screen Width: {screenWidth}</div>
    </div>
  );
};

export default HooksExample;
