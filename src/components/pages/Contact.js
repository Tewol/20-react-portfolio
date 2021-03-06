import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { validateEmail } from "../../utils/helpers";

const ContactForm = (props) => {
  const [fullName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    //Set the state to email, username, and message based on the input type,
    if (inputType === "fullName") {
      setUserName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("wrong email");
      return;
    }
    setUserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Form className="contact">
      <div>
        <h3> Contact</h3>
        <p>Have a question or want to work together? you can send me message here or email me direcly @ tewol22@gmail.com</p>
        <FormGroup className="label">
          <Input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleInputChange}
            name="fullName"
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange}
            onSubmit={handleFormSubmit}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="comment"
            placeholder="Message"
            value={message}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <Button className="sub"> Submit </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
