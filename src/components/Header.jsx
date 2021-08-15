import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
//import styles from '../App.css'; 

const Welcome = (props) => {
  return (
    <div className="header">
      <Jumbotron style={{ backgroundImage: `linear-gradient(to right, rgb(87, 30, 75) 10%, rgb(176, 187, 189) 63%)`, borderColor: '#333' }}>
        <Container fluid>
          <h1 className="Welcome">Welcome</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;