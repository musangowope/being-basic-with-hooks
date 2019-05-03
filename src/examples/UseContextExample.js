import React, { useContext } from "react";

// ThemeContext is created with default value "null"
const ThemeContext = React.createContext(null);
// it returns two components Provider and Consumer

function UseContextExample() {
  return (
    <div>
      {/* we are wrapping the Provider component by passing
      the current value "dark" */}
      <ThemeContext.Provider value="dark">
        <Post />
      </ThemeContext.Provider>
    </div>
  );
}

// Now we are consuming the ThemeContext data inside Post component
function Post() {
  const theme = useContext(ThemeContext);

  return (
    <div className={theme}>
      {console.log(theme)}
      <h1>My posts</h1>
    </div>
  );
}

export default UseContextExample;
