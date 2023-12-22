import React, { Component } from "react";
import '../style/farm.css';
import HyperLink from "./navbar";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/adminpost", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          // window.localStorage.setItem("token", data.data);
          window.location.href = "./viewfarmer";
          alert("ligin successfull");
        }
        if(data.error==="User"){
          alert("user not match");
        }
        if(data.error==="password not"){
          alert("password not match");
        }
      });
  }
  render() {
    return (
      <>
      <HyperLink />
      <form onSubmit={this.handleSubmit} className="form">
        <h3 style={{textAlign:"center",color:"red"}}>Admin Login</h3>

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

        <div className="mb-3">
         
        </div>

        <div className="">
          <button type="submit" className="btn btn-primary ">
            Submit
          </button>
        </div>
      </form>
      </>
    );
  }
}



