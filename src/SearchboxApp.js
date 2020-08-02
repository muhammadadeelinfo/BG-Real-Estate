import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, InputGroup } from "react-bootstrap";
export default class SearchboxApp extends Component {
  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter desired property location..."
            aria-label="Recipient's queries"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </>
    );
  }
}
