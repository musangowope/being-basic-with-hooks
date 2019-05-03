import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import TodoList from "./examples/Todolist";
import UseEffectExample from "./examples/UseEffectExample";
import UseReducerAddMinusExample from "./examples/UseReducerAddMinusExample";
import UserReducerShoppingList from "./examples/UserReducerShoppingList";
import Comparison from "./examples/Comparison";
import UseContextExample from "./examples/UseContextExample";

const App = () => {
  return (
    <Router>
      <div>
        <h2>React Hook Examples</h2>
        <ul>
          <li>
            <Link to="/comparison">
              Using state and lifecycles in Classes vs using hooks in functions
            </Link>
          </li>

          <li>
            <Link to="/todolist-example">
              Basic TodoList Example with UseState
            </Link>
          </li>
          <li>
            <Link to="/use-effect-example">Basic UseEffect Example</Link>
          </li>
          <li>
            <Link to="/use-reducer-add-minus">
              UseReducer Example Adding and Minus
            </Link>
          </li>
          <li>
            <Link to="/use-reducer-shopping-list">
              UseReducer Example Shopping List
            </Link>
          </li>
          <li>
            <Link to="use-context-example">Use context</Link>
          </li>
        </ul>

        <h2>Current Example</h2>

        <Switch>
          <Route exact path="/comparison" component={Comparison} />

          <Route exact path="/todolist-example" component={TodoList} />
          <Route
            exact
            path="/use-effect-example"
            component={UseEffectExample}
          />
          <Route
            exact
            path="/use-reducer-add-minus"
            component={UseReducerAddMinusExample}
          />
          <Route
            exact
            path="/use-reducer-shopping-list"
            component={UserReducerShoppingList}
          />
          <Route
            exact
            path="/use-context-example"
            component={UseContextExample}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
