import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { NavBar } from "./components/nav.js";
import { Balance } from "./components/balance";
import { Home } from "./components/home";
import { Stats } from "./components/stats";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* how to make Nav appear for all except Home? */}
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
            {/* home, not logged in */}
          </Route>
          <Route path="/profile">
            <h1>Profile</h1> cool!
          </Route>
          <Route path="/welcome">
            {/* not sure about this path,  */}
            <h1>Welcome</h1>
          </Route>
          <Route path="/stats">
            {/* potentially could be integrated */}
            <Stats work="29" play="50" />
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
