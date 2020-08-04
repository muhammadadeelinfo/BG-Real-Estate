import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

export default class SearchAll extends Component {
  render() {
    return (
      <>
        <Card className="cardBox">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
