import React, { Component } from "react";
import "./index.css";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  FaHome,
  FaSearch,
  FaSalesforce,
  FaBuyNLarge,
  FaBell,
} from "react-icons/fa";
import NavBarApp from "./NavBarApp";
import SearchAll from "./SearchAll";
import BuyApp from "./BuyApp";
import SaleApp from "./SaleApp";
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
        <NavBarApp />

        <div className="mainContainer">
          <Router>
            <switch>
              <Route exact path="/BuyApp" component={BuyApp} />
              <Route exact path="/SearchAll" component={SearchAll} />
              <Route exact path="/SaleApp" component={SaleApp} />
            </switch>
            <ButtonGroup
              className="mb-2"
              className={"fixed-bottom"}
              style={{ textAlign: "center" }}
            >
              <Link to="/BuyApp" className="btn btn-light">
                <FaBuyNLarge size="2em" /> <br />
                Buy
              </Link>
              <Link to="/SaleApp" className="btn btn-light">
                <FaSalesforce size="2em" />
                <br />
                Sale
              </Link>
              <Link to="SearchAll" className="btn btn-light">
                <FaSearch size="2em" />
                <br />
                Search All
              </Link>
              <Link className="btn btn-light">
                <FaBell size="2em" /> <br />
                Alerts
              </Link>
            </ButtonGroup>
          </Router>
        </div>
      </>
    );
  }
}
