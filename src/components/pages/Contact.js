import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Form className="contact">
      <h3> Contact:</h3>
      <FormGroup className="label">
        <Label for="name"> Full Name: </Label>
        <Input 
          type="full-name"
          name="name"
          id="name"
          placeholder="Hewan Redie"/>
      </FormGroup>

      <FormGroup>
        <Label for="email"> Email Address: </Label>
        <Input 
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="example@example.com"/>
      </FormGroup>

      <FormGroup>
        <Label for="message"> Message: </Label>
        <Input 
          type="textarea" 
          name="comment" 
          id="message"/>
      </FormGroup>

      <Button className="sub"> Submit </Button>

    </Form>
  );
}

export default ContactForm;