import React from "react";
import { useLocation } from "react-router-dom";
import { Button, ButtonText, StyledLink } from "../../styles/globalStyles";
import "./nav.css";
import QuotasticLogo from "../../resources/Group.svg";

function LoginButton(props: any) {
  return (
    <Button type="secondary">
      <ButtonText type="secondary">Login</ButtonText>
    </Button>
  );
}

function RegisterButton(props: any) {
  return (
    <Button type="primary">
      <ButtonText type="primary">Register</ButtonText>
    </Button>
  );
}

const Nav = (props: any) => {
  let url = useLocation();
  let isLoginPage = false;

  let button;
  if (url.pathname === "/login") {
    isLoginPage = true;
    button = RegisterButton(null);
  } else if (url.pathname === "/register") {
    button = LoginButton(null);
  }
  return (
    <div className="navigation">
      <div className="frame">
        <img src={QuotasticLogo} alt="Missing logo svg" />
      </div>
      <div className="right-side">
        <div className="buttons">
          <StyledLink to={isLoginPage ? "/register" : "/login"}>
            {button}
          </StyledLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
