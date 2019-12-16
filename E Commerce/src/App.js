import React, { Component } from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import Shop from "./Shop";
import Container from "./Container";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const id = event.target.id;
    console.log("id=" + id);
  }
  render() {
    return (
      <React.Fragment>
        <Nav></Nav>
        <Container></Container>
      </React.Fragment>
    );
  }
}

export default App;
