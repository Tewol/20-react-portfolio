import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom"

const HeaderNav = () => {
  return (
    <div className="NavBar">
      <Nav className="nav nav-tabs">
        <NavItem className="nav-item">
          <Link className="LinkList" to="/about">
            About
          </Link>
        </NavItem> 

        <NavItem className="nav-item">
          <Link className="LinkList" to="/portfolio">
            Portfolio
          </Link>
        </NavItem>

        <NavItem className="nav-item">
          <Link className="LinkList" to="/contact">
            Contact
          </Link>
        </NavItem>

        <NavItem className="nav-item">
          <Link className="LinkList" to="/resume">
            Resume
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default HeaderNav;