import { Button } from "@material-ui/core";
import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import './css/SignIn.css'
import'./css/SignUp.css'
const UseLog = (props) => {
  const [signIn, setSignIn] = useState(false);
  const handelStatus = ()=> {
    props.handelLoginStatus(true);
  }

  return (
    <div className="login-page flex">
     <Button
        variant="contained"
        className="btn-red btn"
        onClick={() => {
          if (signIn) setSignIn(false);
          else setSignIn(true);
        }}
      >
        {signIn ?  "Sign Up":"Sign In"}
      </Button>

      {signIn ? <SignIn  handelStatus={handelStatus} />:<SignUp handelStatus={handelStatus} />}


    </div>
  );
}

export default UseLog;
