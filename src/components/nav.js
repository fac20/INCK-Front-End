import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
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
        <li>{/* logout button(if logged in) */}</li>
      </ul>
    </nav>
  );
}

export function LogNav () {

  return (
    <nav>
      <ul className="navlist">
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}