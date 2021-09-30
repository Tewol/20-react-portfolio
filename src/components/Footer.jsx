import React, { Component } from "react";
import { Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row md="12">
            <Col xs="12" sm="6" className="container text-center">
              <Nav className="justify-content-start">
                <NavItem>
                  <NavLink href="mailto:tewol22@gmail.com">
                    <h5> tewol22@gmail.com </h5>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col className="icons" xs="12" sm="6">
              <Nav className="justify-content-end">
                <NavItem>
                  <NavLink href="https://github.com/Tewol" aria-label="github">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      size="2x"
                      color="rgb(238, 198, 67)"
                    />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/hewan-redie-b5751b89" aria-label="linkedin">
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      size="2x"
                      color="rgb(238, 198, 67)"
                    />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="https://stackoverflow.com/users/16101184/hewan-redie" aria-label="stack">
                    <FontAwesomeIcon
                      icon={["fab", "stack-overflow"]}
                      size="2x"
                      color="rgb(238, 198, 67)"
                    />
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>

        <h6> © 2021 Design & build by Hewan Redie</h6>
      </div>
    );
  }
}
export default Footer;
