import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { NavBar } from "./components/nav.js";
import { Balance } from "./components/balance";
import { Home } from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* how to make Nav appear for all except Home? */}
      <main>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
            {/* home, not logged in */}
          </Route>
          <Route path="/profile">
            <h1>Profile</h1>
          </Route>
          <Route path="/welcome">
            {/* not sure about this path,  */}
            <h1>Welcome</h1>
          </Route>
          <Route path="/stats">
            {/* potentially could be integrated */}
            <h1>Stats</h1>
          </Route>
          <Route path="/balance">
            <h1>Balance</h1>
            <Balance />
          </Route>
          <Route>
            <h1>Oops! Page not found.</h1>
            <Link to="/">Back to Home</Link>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
