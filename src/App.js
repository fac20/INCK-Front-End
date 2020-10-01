import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { NavBar, LogNav } from "./components/nav.js";
import { Balance } from "./components/balance";
import { Home } from "./components/home";
import { Stats } from "./components/stats";
import { SignUpForm } from "./components/signup";
import { LoginForm } from "./components/login";

function App() {

  //check local storage for jwt, if true, pass true to logged in
  const loggedInChecker = () => {
      return localStorage.getItem('key') ? true : false;
  }

  //check if user is logged in on page load and pass that as initial state
  const [loggedIn, setLoggedIn] = React.useState(loggedInChecker());

  return (
    <BrowserRouter>
      {loggedIn ? <NavBar /> : <LogNav />}
      {/* how to make Nav appear for all except Home? */}
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile">
            {!loggedInChecker() ? <Redirect to="/" /> : <h1>Profile</h1>}
          </Route>
          <Route path="/welcome">
            {!loggedInChecker() ? <Redirect to="/" /> : <h1>Welcome</h1>}
            {/* not sure about this path,  */}
          </Route>
          <Route path="/stats">
            {!loggedInChecker() ? <Redirect to="/" /> : <Stats work="29" play="50" />}

            {/* potentially could be integrated */}
          </Route>
          <Route path="/balance">
            {!loggedInChecker() ? <Redirect to="/" /> : <Balance />}
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/login">
          <LoginForm />
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
