import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";

export default class FooterApp extends Component {
  render() {
    return (
      <div className={"fixed-bottom"} style={{ textAlign: "center" }}>
        <Button variant="primary">Home</Button>{" "}
        <Button variant="info">Stream</Button>{" "}
        <Button variant="success">Chat</Button>{" "}
        <Button variant="info">Notification</Button>{" "}
      </div>
    );
  }
}
