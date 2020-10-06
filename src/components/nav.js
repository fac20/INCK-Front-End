import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "./logout";


export function NavBar(props) {
  return (
    <nav>
      {/* <img />logo for site*/}
      <ul className="navlist">
        <li className="pinklink">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="pinklink">
          <Link to="/welcome">Welcome</Link>
        </li>
        <li className="bluelink">
          <Link to="/stats">Stats</Link>
        </li>
        <li className="bluelink">
          <Link to="/balance">Balance</Link>
        </li>
        <li>
          <Logout loggedInChecker={props.loggedInChecker}/>
        </li>
      </ul>
    </nav>
  );
}

export function LogNav() {
  return (
    <nav>
      <ul className="navlist">
        <li claasName="signUpLink">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
