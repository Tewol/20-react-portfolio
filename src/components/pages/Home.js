
import React from 'react';
import { Container, Row, Col, CardImg} from 'reactstrap';
import Profile from "../assets/Pic1.avif";

const About = () => {
  return (
    <Container className="About">
      <Row>      
        <Col sm="12" md="7">
          <h2>Hello there!</h2>
          <p>
            My name is Hewan, a passionate full-stack developer with extensive background in various programming languages and frameworks. 
            Specialized in JavaScript, jQuery, React, CSS, HTML5, Node.js, Express.js, SQL, NoSQL(MongoDB). 
            Proficient in managing all aspects of the test life cycle in software development projects from 5+ years of experience in software testing.  
          </p> 
        </Col>

        <Col sm="12" md="5">
          <CardImg src={Profile} className="mypic" alt="myPic" />
        </Col>
      </Row>
    </Container>    
  );
};

export default About;