import React from "react";
import { Nav, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="NavBar">
      {/* <Navbar>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar"> */}
        <Nav>
          <NavLink className="LinkList" activeClassName="active" to="/about">
            ABOUT
          </NavLink>
          <NavLink
            className="LinkList"
            activeClassName="active"
            to="/portfolio"
          >
            PORTFOLIO
          </NavLink>
          <NavLink className="LinkList" activeClassName="active" to="/contact">
            CONTACT
          </NavLink>
          <NavLink className="LinkList" activeClassName="active" to="/resume">
            RESUME
          </NavLink>
        </Nav>
      {/* </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
};

export default HeaderNav;
