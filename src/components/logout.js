import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "./../styled-components/Button";

export function Logout() {
  const history = useHistory();
  const location = useLocation();
  const removeToken = () => {
    localStorage.removeItem("key");
    //issue, it doesnt check key before redirecting.
    console.log(location.pathname);
    history.push("/");
  };

  return (
    <Button className="logout" onClick={removeToken}>
      Logout
    </Button>
  );
}
