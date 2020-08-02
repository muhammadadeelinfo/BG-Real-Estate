import React, { Component } from "react";
import "./index.css";
import NavBar from "./NavBar";
import FooterApp from "./FooterApp";
import SearchboxApp from "./SearchboxApp";
import CardApp from "./CardApp";
import { InputGroup } from "react-bootstrap";
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SearchboxApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <CardApp />
        <FooterApp />
      </>
    );
  }
}
