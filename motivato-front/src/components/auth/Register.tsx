import React from "react";
import { useFormik } from "formik";
import { Card } from "@material-ui/core";
import "./Register.css";

class RegisterControl extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card>
          <SignupForm />
        </Card>
      </div>
    );
  }
}

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
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
