import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `linear-gradient(to right, rgb(87, 30, 75) 10%, rgb(176, 187, 189) 63%)`, borderColor: '#333' }}>
        <Container fluid>
          <h1 className="display-3">Welcome</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;