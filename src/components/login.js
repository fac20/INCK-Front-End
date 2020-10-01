import React from "react";
import Form from "./../styled-components/Forms";

export const LoginForm = () => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    localStorage.setItem('key', "x");
  }

    return (
      <Form onSubmit={(event) => loginSubmit(event)}>
        <label htmlFor="username">
          Username: 
          <input id="username" name="username" type="text" max="20" onChange={event => setUsername(event.target.value)} required />
        </label>
        <label htmlFor="password">
          Password: 
          <input id="password" name="password" type="password" min="1"  onChange={event => setPassword(event.target.value)} required />
        </label>
        <input type="submit" />
      </Form>
    );
  };