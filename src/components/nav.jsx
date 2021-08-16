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
          <NavLink className="LinkList" href="/portfolio">
            Portfolio
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="/contact">
            Contact
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="/resume">
            Resume
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default HeaderNav;