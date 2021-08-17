import React from 'react';
import { Nav } from 'reactstrap';
import { Link, NavLink } from "react-router-dom"

const HeaderNav = () => {
  
  return (
    <div className="NavBar">
      <Nav >
        <NavLink className="LinkList" activeClassName="active" to="/about" activeClassName="active">
          About
        </NavLink>
        <Link className="LinkList" to="/portfolio">
          Portfolio
        </Link>
        <Link className="LinkList" to="/contact" activeClassName="active">
          Contact
        </Link>
        <Link className="LinkList" to="/resume">
          Resume
        </Link>
      </Nav>

     
    </div>
  );
}

export default HeaderNav;