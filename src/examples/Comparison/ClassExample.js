import React, { Component, Fragment } from "react";

class ClassExample extends Component {
  state = {
    screenWidth: window.innerWidth,
    screenCounter: 0
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    document.title = this.state.screenCounter;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title = this.state.screenCounter;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  increment = () =>
    this.setState(prevState => ({
      screenCounter: prevState.screenCounter + 1
    }));

  render() {
    const { screenWidth, screenCounter } = this.state;
    return (
      <Fragment>
        <h4>Classes</h4>
        <div>
          <span>Number of clicks {screenCounter}</span>
          <button type="button" onClick={this.increment}>
            Click me
          </button>
        </div>
        <div>Screen Width: {screenWidth}</div>
      </Fragment>
    );
  }
}

export default ClassExample;
