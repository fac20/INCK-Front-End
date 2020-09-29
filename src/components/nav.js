import React from "react";
import { Link } from "react-router-dom"

export function NavBar () {

    return (
        <nav>
        {/* <img />logo */}
        <ul>
          <li>
          <Link to="/profile">Profile</Link>
          </li>
          <li>
          <Link to="/welcome">Welcome</Link>
          </li>
          <li>
          <Link to="/stats">Stats</Link>
          </li>
          <li>
          <Link to="/balance">Balance</Link>
          </li>
          <li>
            {/* logout button(if logged in) */}
          </li>
        </ul>
      </nav>
    )
}