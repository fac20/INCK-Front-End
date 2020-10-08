import React from "react";
import { FormGroup, Input, Label } from "./../styled-components/FormDesign";
import { useHistory } from "react-router-dom";

export const SignUpForm = ({ loggedInChecker }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const url = "https://zenpal.herokuapp.com/signup";

  const signupSubmit = (event) => {
    event.preventDefault();

    const checkResponse = (response) => {
      if (!response.ok) {
        console.error(`Error with the request! ${response.status}`);
        return response.status;
      }
      return response;
    };

    const sendSignup = (username, password) => {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "content-type": "application/json" },
      })
        .then(checkResponse)
        .catch((err) => {
          throw new Error("Signup fetch failed");
        });
    };

    //send username and password to be checked by database
    const usernameValue = event.target.elements.username.value;
    const passwordValue = event.target.password.value;

    sendSignup(usernameValue, passwordValue).then((response) => {
      if (response.status === 201) {
        //if response is 201, reset form
        //log them in
        localStorage.setItem("access_token", response.access_token);
        //access token is coming back undefined because it is not jsonified!
        //need to work out how to access the token!
        loggedInChecker();
        history.push("/welcome");
      } else if (response === 409) {
        //if response is 409-you don't get a status- render error response to page
        //try again
        console.log("username taken");
      }
    });
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
