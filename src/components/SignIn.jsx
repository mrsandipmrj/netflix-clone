import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { auth } from "../firebase";
const LogIn = (props)=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelInput = (event)=> {
    setEmail(event.target.value);
  }
  const handelPassword = (event)=> {
    setPassword(event.target.value);
  }
  const handelSubmit = (event)=> {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.handelStatus(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className="signIn-background">
      <h2>Sign In</h2>
      <form className="column flex" onSubmit={handelSubmit}>
        <TextField
          type="email"
          id="filled-basic"
          label="Email"
          variant="filled"
          className="signUp-input"
          value={email}
          onChange={handelInput}
          required
        />
        <TextField
          type="password"
          id="filled-basic"
          label="Password"
          variant="filled"
          className="signUp-input"
          value={password}
          onChange={handelPassword}
          required
        />

        <Button type="submit" className="red">
          Sign In
        </Button>
      </form>
      New to netflix?
      <span className="blue-text "> Sign up now</span>
    </div>
  );
}

export default LogIn;
