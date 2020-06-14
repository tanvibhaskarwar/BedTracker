import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { HospModal } from "./HospModal";
import axios from "axios";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, hospd: [], currentSelected: null };
  }

  componentDidMount = () => {
    axios({
      method: "GET",
      url: "http://localhost:5000/api/hospital/getHospitals",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      this.setState({ hospd: res.data });
    });
  };

  render() {
    const styles = {
      Card: {
        marginTop: 5,
        marginBottom: 5,
      },
      Button: { marginLeft: 20, marginRight: 20 },
      LI: { marginLeft: 30, marginRight: 30 },
    };
    let modalClose = () => this.setState({ modalShow: false });

    return this.state.hospd.map((obj, index) => {
      return (
        <Card style={styles.Card}>
          <Card.Header style={{ fontSize: 30 }}>{obj.name}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item style={styles.LI}>
              ICUs vacant: {obj.icu_avail}
            </ListGroup.Item>
            <ListGroup.Item style={styles.LI}>
              Non ICUs vacant: {obj.non_icu_avail}
            </ListGroup.Item>
            <ListGroup.Item style={styles.LI}>
              Address: {obj.address}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <>
              <Button
                style={styles.Button}
                variant="contained"
                color="primary"
                onClick={() =>
                  this.setState({ modalShow: true, currentSelected: obj })
                }
              >
                Book Now
              </Button>
              <HospModal
                show={this.state.modalShow}
                onHide={modalClose}
                data={this.state.currentSelected}
              />
            </>
            <Button
              style={styles.Button}
              variant="outlined"
              color="primary"
              href="#calls"
            >
              For More Information Call: 9855231645
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Last Updated: 1 hour ago
          </Card.Footer>
        </Card>
      );
    });
  }
}
