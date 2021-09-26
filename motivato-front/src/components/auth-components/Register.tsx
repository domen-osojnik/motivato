import React from "react";
import { useFormik } from "formik";
import { Card } from "@material-ui/core";
import "./Register.css";
import ProfilePic from "../../resources/profile-picture-def.svg";
import { PinDropSharp } from "@material-ui/icons";

class RegisterControl extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="register-card">
        <div className="header-text">
          <div className="header-text-signup">
            What is your <span className="alt-text">name?</span>
          </div>
          <div className="header-text-sub">
            Your name will appear on quotes and your public profle.
          </div>
        </div>
        <img className="profile-image" src={ProfilePic}></img>
        <SignupForm />
      </div>
    );
  }
}
const FormSection = (props: any) => {
  return (
    <div className="form-section-wrap">
      <span>{props.label}</span>
      <input
        name={props.name}
        type={props.type}
        id={props.id}
        value={props.sampletext}
      ></input>
    </div>
  );
};
const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormSection
        type="email"
        name="email"
        label="Email"
        sampletext="example@net.com"
      />
      <FormSection
        type="email"
        name="email"
        label="Email"
        sampletext="example@net.com"
        class="50-p"
      />
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterControl;
