import React from "react";
import { useFormik } from "formik";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Register.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class RegisterControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = useStyles();
    return (
      <Card className={classes.root}>
        <SignupForm />
      </Card>
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
