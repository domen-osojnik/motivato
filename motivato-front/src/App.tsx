import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LoginComponent from "./components/auth/Login.js";
import RegisterComponent from "./components/auth/Register";

// This will be home page in the future, for now just add login and register button
function App() {
  return (
    <Router>
      <div className="button-container">
        <Button variant="contained" color="secondary">
          <Link to="/login">Login</Link>
        </Button>
        <Button variant="contained" color="primary">
          <Link to="/register">Register</Link>
        </Button>

        <Switch>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route path="/register">
            <RegisterComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
