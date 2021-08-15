import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  CardImgOverlay
} from "reactstrap";

const Portfolio = (props) => {
  return (
    <Container>
      <Row>
        <Col> Portfolio: </Col>
      </Row>

      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardBody>
              <CardImgOverlay body className="ml-5">
                <CardTitle tag="h5">Team Profile Generator</CardTitle>
              </CardImgOverlay>
              <a href="https://tewol.github.io/10-team-profile-generator-oop/output/">
                <CardImg
                  top width="100%"
                  src="/assets/fullstack.png"
                  class="projects"
                  height="130"
                  width="250"
                  alt="Card image cap"
                />
              </a>
              <CardText>
                <a href="https://github.com/Tewol/10-team-profile-generator-oop">
                  {" "}
                  <i class="fa fa-github"></i> Profile Generator{" "}
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Ecommerce</CardTitle>

              <a href="https://app.scre.io/#/my-videos/1">
                <CardImg
                  top
                  width="100%"
                  src="/assets/images/ecommerce.png"
                  class="projects"
                  height="130"
                  width="250"
                  alt="Card image cap"
                />
              </a>
              <CardText>
                <a href="https://github.com/Tewol/13-ecommerce-orm">
                  {" "}
                  <i class="fa fa-github"></i> Ecommerce{" "}
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5"> Employee Managment System </CardTitle>
              <a href=" https://github.com/Tewol/12-employee-tracker-mysql/blob/main/images/employee_Tracker.gif">
                <CardImg
                  top
                  width="/assets/images/employee.png"
                  class="projects"
                  height="130"
                  width="250"
                  alt="Card image cap"
                />
              </a>
              <CardText>
                <a href="https://github.com/Tewol/12-employee-tracker-mysql">
                  {" "}
                  <i class="fa fa-github"></i> Employee Mgnt System
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5"> Project 1 - Actor Database </CardTitle>
              <a href="https://m-ray-ofsunshine.github.io/actor-database/">
                <CardImg
                  top
                  width="100%"
                  src="/assets/images/proj1-js-api.png"
                  class="projects"
                  height="130"
                  width="250"
                  alt="Card image cap"
                />
              </a>
              <CardText>
                <a href="https://github.com/m-ray-ofSunshine/actor-database">
                  {" "}
                  <i class="fa fa-github"></i> Actor Database{" "}
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5"> Project 2 - Railway Express </CardTitle>
              <a href="https://aqueous-fortress-46074.herokuapp.com/">
                <CardImg
                  top
                  width="100%"
                  src="/assets/images/proj2.png"
                  class="projects"
                  height="130"
                  width="250"
                  alt="Card image cap"
                />
              </a>
              <CardText>
                <a href="https://github.com/zacharyjg00/Railway-Express">
                  {" "}
                  <i class="fa fa-github"></i> Railway Express{" "}
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="6" sm="4">
          <Card>
            <CardBody>
              <CardTitle tag="h5"> Project 3 - Final Project </CardTitle>
              <a href="../hw2-portfolio-hewan-redie/assets/images/comingsoon.png">
                <CardImg
                  top
                  width="100%"
                  src="/assets/images/comingsoon.png"
                  class="projects"
                  height="130"
                  width="250"
                  alt="Card image cap"
                />
              </a>
              <CardText>
                <a href="../hw2-portfolio-hewan-redie/assets/images/comingsoon.png">
                  {" "}
                  <i class="fa fa-github"></i> Coming soon{" "}
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
