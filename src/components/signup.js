import React from "react";
import Form from "./../styled-components/Forms";

export const SignUpForm = () => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signupSubmit = (event) => {
    setUsername(event.target.elements.username.value)
    event.preventDefault();
    event.target.reset();
    localStorage.setItem('key', "x");
  }

    return (
      <Form onSubmit={(event) => signupSubmit(event)}>
        <label htmlFor="username">
          Username: 
          <div id="usernameRequirements">
							Usernames must be no longer than 20 characters.
						</div>
          <input id="username" name="username" type="text" max="20" onChange={event => setUsername(event.target.value)} value={username} required />
        </label>
        <label htmlFor="password">
          Password: 
          <div id="passwordsuRequirements">
							Passwords must contain at least one letter and one
							number, and contain at least 8 characters.
						</div>
          <input id="password" name="password" type="password" min="1" onChange={event => setPassword(event.target.value)}required />
        </label>
        <input type="submit" />
        </Form>
    );
  };