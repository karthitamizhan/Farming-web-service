import React, { Component } from "react";
import HyperLink from './navbar';

import '../style/farm.css';

export default class Supplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { id, password } = this.state;
    console.log(id, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.error === "InvAlid Password") {
          alert("password not match");
        }
        if (data.error === " id Exists ") {
          alert("Id Exits");
        }
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./postadvertise";
        }
      });
  }
  render() {
    return (
      <>
      <HyperLink />
      <form onSubmit={this.handleSubmit} className="form">
        <h3 style={{textAlign:"center",color:"red"}} className="post">Supplier Login</h3>

        <div className="mb-3">
          <label>Id :</label>
          <input
            type="id"
            className="control"
            placeholder="Enter id"
            onChange={(e) => this.setState({ id: e.target.value })}
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

        <div className="mb-3">
        </div>

        <div className="">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
        Don't have an account?  <a href="/supplier-sign">Sign Up</a>
        </p>
      </form>
      </>
    );
  }
}





 

