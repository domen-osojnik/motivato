import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button, ButtonText } from "../../styles/globalStyles";
import LoginComponent from "../auth/Login";
import RegisterComponent from "../auth/Register";
import "./nav.css";

const Nav = (props: any) => {
  return (
    <div className="navigation">
      <div className="frame"></div>
      <div className="right-side">
        <div className="buttons">
          <Router>
            <Button type="secondary">
              <ButtonText>LoginNNNNN</ButtonText>
              {/* <Link to="/login">Login</Link> */}
            </Button>
            {/* <Button variant="contained" color="secondary">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/register">Register</Link>
          </Button> */}

            <Switch>
              <Route path="/login">
                <LoginComponent />
              </Route>
              <Route path="/register">
                <RegisterComponent />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Nav;
