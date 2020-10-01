import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { NavBar, LogNav } from "./components/nav.js";
import { Balance } from "./components/balance";
import { Home } from "./components/home";
import { Stats } from "./components/stats";

function App() {

  // set state of logged in as false initially
  const [loggedIn, setLoggedIn] = React.useState(false);

  //check local storage for jwt, if true, pass true to logged in
  //reusable func
  const loggedInChecker = () =>{
    return localStorage.getItem('key') ? true : false;
  }
  
 
  return (
    <BrowserRouter>
      {loggedIn ? <NavBar />:<LogNav />}
      {/* how to make Nav appear for all except Home? */}
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
            {/* home, not logged in */}
          </Route>
          <Route path="/profile">
            {!loggedInChecker() ? <Redirect to="/" />:<h1>Profile</h1>}
          </Route>
          <Route path="/welcome">
          {!loggedInChecker() ? <Redirect to="/" />:<h1>Profile</h1>}
            {/* not sure about this path,  */}
            <h1>Welcome</h1>
          </Route>
          <Route path="/stats">
          {!loggedInChecker() ? <Redirect to="/" />:<h1>Stats</h1>}
            {/* potentially could be integrated */}
            <Stats work="29" play="50" />
          </Route>
          <Route path="/balance">
          {!loggedInChecker() ? <Redirect to="/" />:<h1>Balance2</h1>}
            <h1>Balance</h1>
            <Balance />
          </Route>
          <Route path="/signup">

          </Route>
          <Route path="/login">

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
