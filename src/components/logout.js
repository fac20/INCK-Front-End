import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./../styled-components/Button";

export function Logout(props) {
  const history = useHistory();
  const removeToken = () => {
    localStorage.removeItem("key");
    props.loggedInChecker();
    history.push("/");
  };

  return (
    <Button className="logout" onClick={removeToken}>
      Logout
    </Button>
  );
}
