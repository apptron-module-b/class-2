import React, { Component } from "react";

export default class View extends Component {
  render() {
    return (
      <div>
        <p>This is Module B</p>
        <p>This is Module A</p>
      </div>
    );
  }
}

export class Name extends Component {
  render() {
    return (
      <div>
        <p>I am a student</p>
      </div>
    );
  }
}
