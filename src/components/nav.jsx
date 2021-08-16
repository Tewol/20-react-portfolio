import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const HeaderNav = () => {
  return (
    <div className="NavBar">
      <Nav className="nav nav-tabs">

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="/About">
            About
          </NavLink>
        </NavItem> 

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="/Portfolio">
            Portfolio
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="/Contact">
            Contact
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="/Resume">
            Resume
          </NavLink>
        </NavItem>

      </Nav>
    </div>
  );
}

export default HeaderNav;