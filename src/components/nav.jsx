import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Link = ({ currentPage, handlePageChange }) => {
  return (
    <div className="NavBar">
      <Nav className="nav nav-tabs"> 
        <NavItem>
          <NavLink className="LinkList" href="#"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </NavLink>
        </NavItem>

        <NavItem className="nav-item">
          <NavLink className="LinkList" href="#Contact" 
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            
            Contact
          
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className="LinkList" href="#"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </NavLink>
        </NavItem>

      </Nav>
    </div>
  );
}

export default Link;