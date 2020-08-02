import React, { Component } from "react";
import "./index.css";
import { Button } from "react-bootstrap";

import NavBar from "./NavBar";
import CardApp from "./CardApp";
import SearchboxApp from "./SearchboxApp";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { InputGroup } from "react-bootstrap";
export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />

        <div className="mainContainer">
          <Router>
            <switch>
              <Route path="/SearchboxApp" component={SearchboxApp} />
              <Route exact path="/CardApp" component={CardApp} />
            </switch>
            <div className={"fixed-bottom"} style={{ textAlign: "center" }}>
              <Link to="/SearchboxApp" className="btn btn-primary">
                Search
              </Link>
              <Link to="CardApp" className="btn btn-info">
                Search All
              </Link>
              <Link className="btn btn-success">Chat</Link>
              <Link className="btn btn-info">Alerts</Link>
            </div>
          </Router>
        </div>
      </>
    );
  }
}
