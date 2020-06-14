import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { TestForm } from "./TestForm";

export class TestModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Booking Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TestForm data={this.props.data} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
