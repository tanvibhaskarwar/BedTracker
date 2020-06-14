import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { HospForm } from "./HospForm";

export class HospModal extends Component {
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
          <Modal.Title align="center" id="contained-modal-title-vcenter">
            <h1>     What do we offer under Testing</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Helloo
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
