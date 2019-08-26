import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    data: []
  };

  Submit = e => {
    e.preventDefault();
    this.state.data.push({
      name: this.state.name,
      email: this.state.email
    });
    this.setState(this.state);

    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.Submit}>
          <input
            onChange={e => {
              this.setState({
                name: e.target.value
              });
            }}
            name="Email"
            type="text"
          />
          <input
            onChange={e => {
              this.setState({
                email: e.target.value
              });
            }}
            name="Password"
            type="text"
          />
          <input type="submit" />
        </form>

        <div style={{ width: "100%", height: 100, backgroundColor: "red" }}>
          {this.state.data.map((item, index) => (
            <div key={index}>
              <p>Name: {item.name}</p>
              <p>Name: {item.email}</p>
            </div>
          ))}
        </div>
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
