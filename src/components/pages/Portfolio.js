import React from "react";
import TeamProfile from "../assets/teamprofile.avif";
import Ecommerce from "../assets/ecommerce.avif";
import Employee from "../assets/employee.avif";
import Proj1 from "../assets/proj1.avif";
import Proj2 from "../assets/proj2.avif";
import Proj3 from "../assets/proj3.avif";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

library.add(fab);

const Portfolio = (props) => {
  return (
    <Container className="Projects">
      <Row>
        <Col className="Title">
          <h3> Portfolio </h3>
        </Col>
      </Row>

      <Row>
        <Col xs="12" sm="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4">Team Profile Generator</CardTitle>
              <a href="https://tewol.github.io/10-team-profile-generator-oop/output/">
                <CardImg src={TeamProfile} className="project-img" alt="Team Profile"/>
              </a>

              <p class="card-text">
                A command-line application that takes in information about
                employees and generates summary of each person.
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript</li>{" "}
                  <li class="tech-button" > Inquirer</li>{" "}
                  <li class="tech-button" > Node.js</li>{" "}
                  <li class="tech-button" > Git</li>{" "}
                  <li class="tech-button" > Jest</li>
                </ul>
              </div>

              <CardText>
                <a href="https://github.com/Tewol/13-ecommerce-orm" class="repo-link">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Team Profile
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4">Ecommerce</CardTitle>

              <a href="https://app.scre.io/#/my-videos/1">
                <CardImg src={Ecommerce} className="project-img" alt="Ecommerce"/>
              </a>

              <p class="card-text">
                A back-end e-commerce site that uses the latest technologies to
                compete with other e-commerce companies.
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript</li>{" "}
                  <li class="tech-button" > MySQL</li>{" "}
                  <li class="tech-button" > Express.js</li>{" "}
                  <li class="tech-button" > Git</li>{" "}
                  <li class="tech-button" > Insomnia</li>
                </ul>
              </div>

              <CardText>
                <a href="https://github.com/Tewol/13-ecommerce-orm" class="repo-link">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Ecommerce
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4"> Employee Managment System </CardTitle>
              <a href=" https://github.com/Tewol/12-employee-tracker-mysql/blob/main/images/employee_Tracker.gif">
                <CardImg src={Employee} className="project-img" alt="Employee managment"/>
              </a>

              <p class="card-text">
                Employee tracker application that ables a user to view and
                manage the departments, roles, and employees.
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript </li>{" "}
                  <li class="tech-button"> InquirerJs </li>{" "}
                  <li class="tech-button"> MySQL </li>{" "}
                  <li class="tech-button" > Git</li>{" "}
                </ul>
              </div>

              <CardText>
                <a href="https://github.com/Tewol/12-employee-tracker-mysql" class="repo-link">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Employee Managment
                  System
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4"> Actor Database </CardTitle>
              <a href="https://m-ray-ofsunshine.github.io/actor-database/">
                <CardImg src={Proj1} className="project-img" alt="actor database"/>
              </a>

              <p class="card-text">
                A website that incorporates third party API to allow users
                search an actor/actress information using their name
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> HTML5</li>{" "}
                  <li class="tech-button" > CSS</li>{" "}
                  <li class="tech-button" > Git</li>{" "}
                  <li class="tech-button" > JavaScript</li>
                  <li class="tech-button" > Third Party APIs</li>
                  <li class="tech-button" > Server Side APIs</li>
                </ul>
              </div>

              <CardText class="card-text">
                <a href="https://github.com/m-ray-ofSunshine/actor-database" class="repo-link">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Actor Database
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4"> Railway Express </CardTitle>
              <a href="https://aqueous-fortress-46074.herokuapp.com/">
                <CardImg src={Proj2} className="project-img" alt="Railway station" />
              </a>

              <p class="card-text">
                A railway web application that allow passengers to reserve
                a seat on one of many trains within Minnesota. 
                passengers can see other passengers aboard as well as scheduled and current station.{" "}
              </p>

              <div class="tech-used">
                <ul>
                  <li class="tech-button"> JavaScript</li>{" "}
                  <li class="tech-button" > MySQL</li>{" "}
                  <li class="tech-button" > Sequelize</li>{" "}
                  <li class="tech-button" > Handlebars</li>
                  <li class="tech-button"> Date-and-time</li>{" "}
                  <li class="tech-button" > Bootstrap</li>{" "}
                  <li class="tech-button" > Heroku</li>{" "}
                  <li class="tech-button" > Dotenv</li>
                  <li class="tech-button" > Express.js </li>
                  <li class="tech-button" > Git</li>{" "}
                </ul>
              </div>

              <CardText>
                <a href="https://github.com/Tewol/Railway-Express" class="repo-link">
                  <FontAwesomeIcon icon={["fab", "github"]} /> Railway Express
                </a>
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col xs="12" sm="6">
          <Card className="projectCard">
            <CardBody>
              <CardTitle tag="h4"> Bark Avenue </CardTitle>
              <a href={Proj3}>
                <CardImg src={Proj3} className="project-img" alt="Bark avenue home page"/>
              </a>

              <p class="card-text">
                Bark Avenue is a website built for a pet hotel using Reactjs
                where a user can sign up, log in, set their pets name, check out
                the services offered, select a service, book a reservation, and
                add it to the cart.
              </p>


              <div class="tech-used">
                <ul>
                <li class="tech-button"> JavaScript</li>{" "}
                  <li class="tech-button" > Reactjs</li>{" "}
                  <li class="tech-button" > MongoDB</li>{" "}
                  <li class="tech-button" > Redux</li>
                  <li class="tech-button"> React-Bootstrap</li>{" "}
                  <li class="tech-button" > Reactstrap</li>{" "}
                  <li class="tech-button" > Day-Picker</li>
                  <li class="tech-button" > emailjs</li>
                  <li class="tech-button" > Git</li>{" "}
                  <li class="tech-button" > Heroku</li>{" "}
                </ul>
              </div>

              <CardText tag="h6">
                <a href={Proj3} class="repo-link">
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
