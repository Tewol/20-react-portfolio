import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../../App.css';
import { validateEmail } from '../../utils/helpers';

const ContactForm = (props) => {

  const [fullName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //Set the state to email, username, and message based on the input type,
    if (inputType === 'fullName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    }  else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setErrorMessage('Invalid Email');
      return;
    }

    setUserName('');
    setEmail('');
    setMessage('');
    
  };

  return (
    <Form className="contact" >
      <div>
      <h3> Contact:</h3>
      <FormGroup className="label">
        <Label for="name"> Full Name: </Label>
        <Input 
          type="text"
          name="fullName"
          placeholder="Hewan Redie"
          value={fullName}
          onChange={handleInputChange}/>
      </FormGroup>
      
      <FormGroup>
        <Label for="email"> Email Address: </Label>
        <Input 
          type="email"
          name="email"
          placeholder="example@example.com"
          value={email}
          onChange={handleInputChange}/>
      </FormGroup>

      <FormGroup>
        <Label for="message"> Message: </Label>
        <Input 
          type="textarea" 
          name="comment" 
          value={message}
          onChange={handleInputChange}/>
      </FormGroup>

      <Button className="sub"
        onSubmit={handleFormSubmit}> Submit </Button>
    </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

    </Form> 
  );
}

export default ContactForm;