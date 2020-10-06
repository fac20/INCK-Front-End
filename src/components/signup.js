import React from "react";
import { FormGroup, Input, Label } from "./../styled-components/FormDesign";
import { useHistory } from "react-router-dom";

export const SignUpForm = ({loggedInChecker}) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const signupSubmit = (event) => {
    //setUsername(event.target.elements.username.value)
    event.preventDefault();
    event.target.reset();
    localStorage.setItem("key", "x");
    loggedInChecker();
    history.push("/welcome");
  };

  return (
    <FormGroup onSubmit={(event) => signupSubmit(event)}>
      <Label htmlFor="username">
        Username:
        <div id="usernameRequirements">
          Usernames must be no longer than 20 characters.
        </div>
        <Input
          id="username"
          name="username"
          type="text"
          max="20"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </Label>
      <Label htmlFor="password">
        Password:
        <div id="passwordsuRequirements">
          Passwords must contain at least one letter and one number, and contain
          at least 8 characters.
        </div>
        <Input
          id="password"
          name="password"
          type="password"
          min="1"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Label>
      <button type="submit">Sign Up</button>
    </FormGroup>
  );
};
