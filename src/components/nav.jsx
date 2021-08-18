import React from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from "react-router-dom"

const HeaderNav = () => {
  return (
    <div className="NavBar">
      <Nav >
        <NavLink className="LinkList" activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/contact">
          Contact
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/resume">
          Resume
        </NavLink>
        <NavLink className="LinkList" activeClassName="active" to="/example">
          Resume
        </NavLink>
      </Nav>
    </div>
  );
}

export default HeaderNav;