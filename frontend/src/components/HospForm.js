import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

export class HospForm extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleForm = (event) => {
    event.preventDefault();
    const { testCode } = this.state;
    console.log(this.props);
    Axios.post(
      "http://localhost:5000/api/hospital/bookHospital",
      {
        hid: this.props.data.data.hid,
        tid: testCode,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    ).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail" onSubmit={this.handleForm}>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control placeholder="Enter your number" />
          <Form.Text className="text-muted">
            You will receive updates on this number.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Test code</Form.Label>
          <Form.Control
            placeholder="Enter referral code"
            name="testCode"
            onChange={this.handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={() => console.log(this.props.data.data)}>Show</Button>
      </Form>
    );
  }
}
