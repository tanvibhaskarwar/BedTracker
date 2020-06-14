import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

export class TestForm extends Component {
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
    const { refCode } = this.state;
    console.log(this.props);
    Axios.post(
      "http://localhost:5000/api/BookTest",
      {
        tcid: this.props.data.testingCentreId,
        rid: refCode,
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
          <Form.Label>Referral code</Form.Label>
          <Form.Control
            placeholder="Enter referral code"
            name="refCode"
            onChange={this.handleInput}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
