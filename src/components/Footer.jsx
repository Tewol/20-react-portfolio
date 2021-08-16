import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(fab)

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Nav className="social">
          <NavItem>
            <NavLink href="mailto:tewol22@gmail.com"> 
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="tel:651.621.0392"> 
              <FontAwesomeIcon icon={faPhone} size="2x"/>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="https://github.com/Tewol">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x"/>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="https://www.linkedin.com/in/hewan-redie-b5751b89">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
            </NavLink>
          </NavItem>
        </Nav>

        <h4> Copyright &copy; Hewan Redie </h4>

      </div>
    );
  }
}
export default Footer;
