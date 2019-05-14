import React, { useState, useEffect } from "react";

const HooksExample = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sipsOfCoffee, setSipsOfCoffee] = useState(0);

  useEffect(() => {
    document.title = sipsOfCoffee;

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, sipsOfCoffee]);

  const handleResize = () => setScreenWidth(window.innerWidth);
  const increment = () => setSipsOfCoffee(sipsOfCoffee + 1);

  return (
    <div>
      <h4>Function Component with Hooks</h4>
      <div>
        <span>Number of sips of Coffee {sipsOfCoffee}</span>
        <button type="button" onClick={increment}>
          Click me
        </button>
      </div>
      <div>Screen Width: {screenWidth}</div>
    </div>
  );
};

export default HooksExample;
