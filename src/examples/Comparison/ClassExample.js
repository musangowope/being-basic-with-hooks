import React, { Component, Fragment } from "react";

/*
* Let's try and make this a fun example :)
* */

class ClassExample extends Component {
  state = {
    screenWidth: window.innerWidth,
    sipsOfCoffee: 0
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    document.title = this.state.sipsOfCoffee;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.sipsOfCoffee !== this.state.sipsOfCoffee) {
      document.title = this.state.sipsOfCoffee;
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  increment = () =>
    this.setState(prevState => ({
      sipsOfCoffee: prevState.sipsOfCoffee + 1
    }));

  render() {
    const { screenWidth, sipsOfCoffee } = this.state;
    return (
      <Fragment>
        <h4>Classes</h4>
        <div>
          <span>Number of Sips of Coffee {sipsOfCoffee}</span>
          <button type="button" onClick={this.increment}>
            Take a sip of coffee
          </button>
        </div>
        <div>Screen Width: {screenWidth}</div>
      </Fragment>
    );
  }
}

export default ClassExample;
