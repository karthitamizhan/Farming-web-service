import React, { Component } from "react";
import '../style/farm.css';
import HyperLink from './navbar';
export default class Signs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { id, name, email, password } = this.state;
    console.log(id, name, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id,
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.error, "userRegister");
        if (data.error === "User Exists") {
          alert("Email Exits");
        }
        if (data.error === " id Exists ") {
          alert("Id Exits");
        }
        if (data.error === " error ") {
          alert("Cant't able to register");
        }
        if (data.status === "ok") {
          alert("Registered successful");
        }
      });
  }
  render() {
    return (
      <>
      <HyperLink />
      <form onSubmit={this.handleSubmit} className="form">
        <h3 style={{textAlign:"center",color:"red"}} className="post">Supplier Registration</h3>

        <div className="mb-3">
          <label>Id :</label>
          <input
            type="text"
            className="control"
            placeholder="supplier id"
            onChange={(e) => this.setState({ id: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Name :</label>
          <input
            type="text"
            className="control"
            placeholder="Enter the name"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Email address :</label>
          <input
            type="email"
            className="control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password :</label>
          <input
            type="password"
            className="control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/supplier">login in?</a>
        </p>
      </form>
      </>
    );
  }
}





