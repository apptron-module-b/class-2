import React, { Component } from "react";
import View, { Name } from "./View";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Form />
      </div>
    );
  }
}

export default App;
