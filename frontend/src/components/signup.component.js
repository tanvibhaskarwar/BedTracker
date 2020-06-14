import React, { Component } from "react";
import image from "../image/collage6.jpg";
import axios from "axios";

export default class SignUp extends Component {
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
    const { emailid, pass } = this.state;
    console.log(`EmailId : ${emailid}, password : ${pass}`);

    axios
      .post(
        "http://localhost:5000/api/user/signup",
        {
          email: emailid,
          password: pass,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res));
  };
  render() {
    return (
      <div className="App" style={{ backgroundImage: "url(" + image + ")" }}>
        <div className="auth-wrapper">
          <form className="auth-inner1" onSubmit={this.handleSubmit}>
            <h3 className="header">Sign Up</h3>
            <div className="form-group">
              <label>Name</label>
              <input
                type="name"
                className="form-control"
                placeholder="  Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="  Enter email"
                name="emailid"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="  Enter password"
                name="pass"
                onChange={this.handleChange}
              />
            </div>

            <div>
              <div className="form-group">
                <div>
                  <label>Age</label>
                </div>
                <input
                  type="number"
                  size="4"
                  name="age"
                  min="0"
                  max="103"
                  className="form-control"
                  placeholder="  age"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div className="gender" class="column">
                <label>Gender</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" value="Male" name="gender" />{" "}
                <label>Male</label>&nbsp;&nbsp;
                <input type="radio" value="Female" name="gender" />{" "}
                <label>Female</label>&nbsp;&nbsp;
                <input type="radio" value="Other" name="gender" />{" "}
                <label>Other</label>
              </div>
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="button">
              Submit
            </button>
            <p className="forgot-password text-right">
              Already registered sign in?
            </p>
          </form>
        </div>
      </div>
    );
  }
}
