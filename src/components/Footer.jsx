import React, { Component } from "react";
import { Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(fab);

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row md="12">
            <Col xs="12" sm="6" className="container text-center">
             
            </Col>

            <Col className="icons" xs="12" sm="6">
              <Nav className="justify-content-end">                 
                  <NavItem>
                    <NavLink href="mailto:tewol22@gmail.com">
                    {/* <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" /> */}
                    <h5> tewol22@gmail.com </h5>
                    </NavLink>
                  </NavItem>

                  {/* <NavItem>
                    <NavLink href="tel:651.621.0392">
                      <FontAwesomeIcon icon={faPhone} size="2x" color="white" />
                    </NavLink>
                  </NavItem> */}

                  <NavItem>
                    <NavLink href="https://github.com/Tewol">
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        size="2x"
                        color="rgb(238, 198, 67)"
                      />
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="https://www.linkedin.com/in/hewan-redie-b5751b89">
                      <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                        size="2x"
                        color="rgb(238, 198, 67)"
                      />
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="https://stackoverflow.com/users/16101184/hewan-redie">
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
