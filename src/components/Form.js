import React, { Component } from "react";

export default class Form extends Component {
  Submit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.Submit}>
          <input name="Email" type="text" />
          <input name="Password" type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

// var obj = {
//   name: "ali",
//   func: () => {
//     return this.name;
//   }
// };

// conts oBject = obj.fun.bind(obj)

// oBject()
