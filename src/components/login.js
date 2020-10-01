import React from "react";
import {FormGroup, Input, Label, Placeholder} from "./../styled-components/FormDesign";

export const LoginForm = () => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    localStorage.setItem('key', "x");
  }

    return (
      <FormGroup onSubmit={(event) => loginSubmit(event)}>
        <Label htmlFor="username">
          Username: 
          <Input id="username" name="username" type="text" max="20" onChange={event => setUsername(event.target.value)} required />
        </Label>
        <Label htmlFor="password">
          Password: 
          <Input id="password" name="password" type="password" min="1"  onChange={event => setPassword(event.target.value)} required />
        </Label>
        <Input type="submit" />
      </FormGroup>
    );
  };