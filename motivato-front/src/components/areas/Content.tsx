import { Route } from "react-router-dom";
import LoginComponent from "../auth-components/Login";
import RegisterControl from "../auth-components/Register";
import Home from "./Home";
const Content = (props: any) => {
  return (
    <div>
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/register" component={RegisterControl}></Route>
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
};

export default Content;
