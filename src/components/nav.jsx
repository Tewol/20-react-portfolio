import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Link = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="#">Portfolio</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">Resume</NavLink>
        </NavItem>

        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>

      </Nav>
    </div>
  );
}

export default Link;