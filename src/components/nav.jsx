import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Link = ({ currentPage, handlePageChange }) => {
  return (
    <div className="NavBar">
      <Nav className="nav nav-tabs">

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="#About"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
        </NavItem> 

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}>
            Portfolio
          </NavLink>
        </NavItem>


        <NavItem className="nav-item">
          <NavLink className="LinkList" href="#Contact" 
            onClick={() => handlePageChange('Contact')}>
            Contact
          </NavLink>
        </NavItem>


        <NavItem className="nav-item">
          <NavLink className="LinkList" href="#Resume"
            onClick={() => handlePageChange('Resume')}>
            Resume
          </NavLink>
        </NavItem>

      </Nav>
    </div>
  );
}

export default Link;