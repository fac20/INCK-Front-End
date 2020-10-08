import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./../styled-components/Button";

export function Logout(props) {
  const history = useHistory();
  const removeToken = () => {
    localStorage.removeItem("access_token");
    props.loggedInChecker();
    history.push("/");
  };

  return (
    <Button
      className="logout"
      onClick={removeToken}
      boxShadow="3px 5px #fff2f2">
      Logout
    </Button>
  );
}
