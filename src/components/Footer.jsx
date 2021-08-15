import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Nav className="social">
          <NavItem>
            <NavLink href="mailto:tewol22@gmail.com"> Email
              <i class="fa fa-envelope"></i>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="tel:651.621.0392"> Phone
              <i class="fa fa-phone"></i>
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="https://github.com/Tewol"> GitHub
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="https://www.linkedin.com/in/hewan-redie-b5751b89"> LinkedIn
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </NavLink>
          </NavItem>
        </Nav>

        Copyright &copy; Hewan Redie

      </div>
    );
  }
}
export default Footer;
