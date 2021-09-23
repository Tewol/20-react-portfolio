import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
//import styles from '../App.css'; 

const Welcome = (props) => {
  return (
    <div className="header">
      <Jumbotron >
        <Container fluid>
          <h1 className="Welcome"></h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;