import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Form>
      <h3> Contact:</h3>
      <FormGroup>
        <Label for="name"> Name: </Label>
        <Input />
      </FormGroup>

      <FormGroup>
        <Label for="email"> Email Address: </Label>
        <Input />
      </FormGroup>

      <FormGroup>
        <Label for="message"> Message: </Label>
        <Input type="textarea" name="comment" id="message" />
      </FormGroup>

      <Button>Submit</Button>

    </Form>
  );
}

export default ContactForm;