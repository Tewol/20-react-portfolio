
import React from 'react';
import { Container, Row, Col, CardImg} from 'reactstrap';
import Profile from "../assets/Pic1.png";

const About = () => {
  return (
    <Container className="About">
      <Row>      
        <Col xs="12" sm="8">
          <p>About Me:</p> 
          Hello there!
          My name is Hewan Redie. I was born and raised in Ethiopia and moved to the US 10 years ago.
          I am currently attending University of Minnesota's Boot Camp program.
        </Col>

        <Col xs="12" sm="4">
          <CardImg src={Profile} className="mypic" alt="myPic" />
        </Col>
      </Row>
    </Container>    
  );
};

export default About;