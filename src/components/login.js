import React from "react";
import { FormGroup, Input, Label } from "./../styled-components/FormDesign";
import { useHistory } from "react-router-dom";

export const LoginForm = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const loginSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    localStorage.setItem("key", "x");
    props.loggedInChecker();
    //problem, it doesnt check token before redirecting, so sends to "/" instead
    history.push("/welcome");
  };

  return (
    <FormGroup onSubmit={(event) => loginSubmit(event)}>
      <Label htmlFor="username">
        Username:
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
        <Input
          id="password"
          name="password"
          type="password"
          min="1"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Label>
      <Input type="submit" />
    </FormGroup>
  );
};
