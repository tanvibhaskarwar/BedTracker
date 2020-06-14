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
            <h1> What do we offer under Testing</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Testing being the first stage towards fighting Covid-19, we aim at
          providing a trouble-free testing provision, where you can book a test
          in advance by coming onto our site. A referal code will be provided
          after consulting with the doctor which will hint you to book a test on
          our portal! Our services aim at rendering a hassle-free and
          easily-deciphered procedure towards fighting this virus with unison!
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
