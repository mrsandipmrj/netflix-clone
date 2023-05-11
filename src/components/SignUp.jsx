import React, { useState } from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { auth } from "../firebase";
const SignUp = (props)=> {
  const [wantpassword, setwantpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelEmail = (event) => {
    setEmail(event.target.value);
  }
  const handelPassword = (event)=> {
    setPassword(event.target.value);
  }
  const handelSubmit = (event)=> {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(props.handelStatus(true))
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className="login-main">
      <div className="login-box">Unlimited movies, TV shows and more.</div>
      <div className="login-box-2">Watch anywhere. Cancel anytime.</div>
      <div className="login-box-3">
        Ready to watch? Enter your email to create or restart your membership.
        <div className="login-form">
          <form className="form flex" onSubmit={handelSubmit}>
            {!wantpassword && (
              <input
                type="email"
                className="Input"
                placeholder="Email address"
                value={email}
                onChange={handelEmail}
                required
              />
            )}
            {wantpassword && (
              <input
                type="password"
                className="Input"
                placeholder="Password"
                value={password}
                onChange={handelPassword}
                required
              />
            )}
            <button
              type="submit"
              className="login-btn"
              onClick={() => {
                email && setwantpassword(true);
              }}
            >
              <div className="flex">
                Get Started <KeyboardArrowRightIcon />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
