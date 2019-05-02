import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import ClassExample from "./ClassExample";
import HooksExample from "./HooksExample";

const Comparison = () => {
  return (
    <Router>
      <h3>Classes vs Functions with Hooks</h3>
      <p>
        This is demonstration shows how you would achieve a certain
        functionality using Classes (state and Lifecycle hooks) versus achieving
        the same functionality in a function component using Hooks.
      </p>
      <div>PS: Analyze the code</div>
      <ul>
        <li>
          <Link to="/comparison/class-example">Class Example</Link>
        </li>
        <li>
          <Link to="/comparison/hooks-example">Hook Example</Link>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path="/comparison/class-example"
          component={ClassExample}
        />
        <Route
          exact
          path="/comparison/hooks-example"
          component={HooksExample}
        />
      </Switch>
    </Router>
  );
};

export default Comparison;
