import React, { Component } from "react";
import image from "../image/collage6.jpg";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailid, password } = this.state;
    axios
      .post("http://localhost:5000/api/user/login", {
        email: emailid,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("Logged In");
          localStorage.setItem("token", res.data.token);
        } else {
          console.log("Log In Failed!");
        }
      });
  };
  render() {
    return (
      <div className="App" style={{ backgroundImage: "url(" + image + ")" }}>
        <div className="auth-wrapper">
          <form className="auth-inner" onSubmit={this.handleSubmit}>
            <h3 className="header">Log In</h3>

            <div className="form-group">
              <div className="titles">
                <label>First name</label>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="  Enter Full Name"
              />
            </div>

            <div className="form-group">
              <div className="titles">
                <label>Email address</label>
              </div>
              <input
                type="email"
                className="form-control"
                placeholder="  Enter email"
                name="emailid"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <div className="titles">
                <label>Password</label>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="  Enter password"
                name="password"
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" class="button">
              Log In
            </button>
            <p className="forgot-password text-right">Forgot password?</p>
          </form>
        </div>
      </div>
    );
  }
}
