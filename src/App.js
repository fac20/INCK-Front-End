import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { NavBar, LogNav } from "./components/nav.js";
import { Balance } from "./components/balance";
import { Home } from "./components/home";
import { Stats } from "./components/stats";
import { SignUpForm } from "./components/signup";
import { LoginForm } from "./components/login";
import { Welcome } from "./components/welcome";
import Profile from "./components/profile";

function App() {
  //check if user is logged in on page load and pass that as initial state
  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem("key") ? true : false
  );

  //check local storage for jwt, if true, pass true to logged in
  const loggedInChecker = () => {
    if (localStorage.getItem("key")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    <BrowserRouter>
      {loggedIn ? <NavBar loggedInChecker={loggedInChecker} /> : <LogNav />}
      {/* how to make Nav appear for all except Home? */}
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile">
            {!loggedIn ? <Redirect to="/" /> : <Profile />}
          </Route>
          <Route path="/welcome">
            {!loggedIn ? <Redirect to="/" /> : <Welcome />}
            {/* not sure about this path,  */}
          </Route>
          <Route path="/stats">
            {!loggedIn ? <Redirect to="/" /> : <Stats work="29" play="50" />}

            {/* potentially could be integrated */}
          </Route>
          <Route path="/balance">
            {!loggedIn ? <Redirect to="/" /> : <Balance />}
          </Route>
          <Route path="/signup">
            <SignUpForm loggedInChecker={loggedInChecker} />
          </Route>
          <Route path="/login">
            <LoginForm loggedInChecker={loggedInChecker} />
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
