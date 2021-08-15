
import React from 'react';
import { Media } from 'reactstrap';

const AboutMe = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="myPic" />
      </Media>
      <Media body>
        <Media heading>
        About Me:
        </Media>
          Hello there!

          My name is Hewan Redie. I was born and raised in Ethiopia and moved to the US 10 years ago.

          I am currently attending University of Minnesota's Boot Camp program.
      </Media>
    </Media>
    
  );
};

export default AboutMe;