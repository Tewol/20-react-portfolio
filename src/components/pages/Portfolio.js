import React from "react";
import TeamProfile from "../assets/teamprofile.png";
import Ecommerce from "../assets/ecommerce.png";
import Employee from "../assets/employee.png";
import Proj1 from "../assets/proj1.png";
import Proj2 from "../assets/proj2.png";
import Proj3 from "../assets/proj3.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';

library.add(fab);

const Portfolio = (props) => {
  return (
    <Container className ="Projects">
      <Row>
        <Col className ="Title"> 
        Portfolio
        </Col>
      </Row>

      <Row>
        <Col xs="12" sm="4">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h5">Team Profile Generator</CardTitle>          
              <a href="https://tewol.github.io/10-team-profile-generator-oop/output/">
                <CardImg
                  src={TeamProfile}
                  height="130"
                  width="250"
                /> 
              </a>
              <p class="card-text"> A command-line application that takes in information about employees and generates summary of each person.</p>
              <ul>
             
              </ul>
              
              <CardText>
                <a href="https://github.com/Tewol/13-ecommerce-orm">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Team Profile
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="4">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h5">Ecommerce</CardTitle>

              <a href="https://app.scre.io/#/my-videos/1">
                <CardImg
                  src={Ecommerce}
                  height="130"
                  width="250"
                />
              </a>
              <p class="card-text"> A back-end e-commerce site that uses the latest technologies to compete with other e-commerce companies.</p>
              <CardText>
                <a href="https://github.com/Tewol/13-ecommerce-orm">
                <FontAwesomeIcon icon={["fab", "github"]} /> Ecommerce
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="4">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h5"> Employee Managment System </CardTitle>
              <a href=" https://github.com/Tewol/12-employee-tracker-mysql/blob/main/images/employee_Tracker.gif">
                <CardImg
                  src={Employee}
                  height="130"
                  width="250"
                />
              </a>
              <p>Employee tracker application that ables a user to view and manage the departments, roles, and employees.</p>
              <CardText>
                <a href="https://github.com/Tewol/12-employee-tracker-mysql">
                <FontAwesomeIcon icon={["fab", "github"]} /> Employee Mgnt System
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        
        <Col xs="12" sm="4">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h5"> Actor Database </CardTitle>
              <a href="https://m-ray-ofsunshine.github.io/actor-database/">
                <CardImg
                  src={Proj1}
                  height="130"
                  width="250"
                />
              </a>
              <p class="card-text"> A website that incorporates third party API to allow users search an actor/actress information using their name</p>
              <CardText>
                <a href="https://github.com/m-ray-ofSunshine/actor-database">
                <FontAwesomeIcon icon={["fab", "github"]} /> Actor Database
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="4">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h5"> Railway Express </CardTitle>
              <a href="https://aqueous-fortress-46074.herokuapp.com/">
                <CardImg
                  src={Proj2}
                  height="130"
                  width="250"
                />
              </a>
              <p class="card-text">A railway reservation web app that allows a passenger to reserve a seat on one of many trains within Minnesota. As a passenger, they will be able to see other passengers aboard as well as the scheduled and current station. </p>
              <CardText>
                <a href="https://github.com/Tewol/Railway-Express">
                <FontAwesomeIcon icon={["fab", "github"]} /> Railway Express
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="4">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h5"> Bark Avenue </CardTitle>
              <a href={Proj3}>
                <CardImg
                  src={Proj3}
                  height="130"
                  width="250"
                />
              </a>
              <p class="card-text">Bark Avenue is a website built for a pet hotel using Reactjs where a user can sign up, log in, set their pets name, check out the services offered, select a service, book a reservation, and add it to the cart.</p>
              <CardText tag="h6">
                <a href={Proj3}>
                <FontAwesomeIcon icon={["fab", "github"]} /> Bark Avenue
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