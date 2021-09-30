import React from "react";
import { Nav } from "reactstrap";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="NavBar">
      <Nav>
        <NavLink className="LinkList" activeClassName="active" to="/about">
          ABOUT
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/portfolio">
          PORTFOLIO
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/contact">
          CONTACT
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/resume">
          RESUME
        </NavLink>
      </Nav>
    </div>
  );
};

export default HeaderNav;
