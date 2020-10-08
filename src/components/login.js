import React from "react";
import { FormGroup, Input, Label } from "./../styled-components/FormDesign";
import { useHistory } from "react-router-dom";

export const LoginForm = (props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  const url = "https://zenpal.herokuapp.com/login"

  const checkResponse = (response) => {
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    console.log(response.json())
    return response.json();
  };
  
  const sendLogin = (username, password) => {
    return fetch(url, {
      method: "POST", 
      mode: "no-cors",
      body: JSON.stringify({username, password}),
      headers: { "content-type" : "application/json"}
    }).then(checkResponse);
  };

  const loginSubmit = (event) => {
    event.preventDefault();

    //pull out information from form
    const username = event.target.elements.username.value;
    const password = event.target.password.value;

    //send to back end 
    sendLogin(username, password)
    .then(response => {
      //set access token in local storage once we know what it's called!
      localStorage.setItem("access_token", response.access_token);
    });
  
    event.target.reset();
    
    props.loggedInChecker();
    history.push("/welcome");
  };

  
  // On login send a post request to the sever /login
  // fetch username via api then convert json data.
  // give user a JWT and store local for x amount of time

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
