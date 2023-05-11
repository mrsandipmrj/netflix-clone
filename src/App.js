import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MainComponent from "./components/Main-Component";
import Banner from "./components/Banner";
 import UseLog from "./components/UseLog";
import { auth } from "./firebase";
import './components/css/style.css'


const App = (props)=> {

  const [loginStatus, setLoginStatus] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoginStatus(true);
        setUser(authUser);

        if (authUser.displayName) {
        } else {
          return authUser.updateProfile({
            displayName: userName,
          });
        }
      } else {
        //user is logged out....
        setUserName("");
      }
    });
    return () => {
      //perform some clean up action
      unsubscribe();
    };
  }, [user, userName]);

const handelLoginStatus = (status)=> {
    setLoginStatus(status);
  }

  return (
    <div>
      <Header LoginStatus={loginStatus} handelLoginStatus={handelLoginStatus} />
      {loginStatus ? (
        <div>
          <Banner />
          <MainComponent />
        </div>
      ) : (
        <UseLog handelLoginStatus={handelLoginStatus} />
      )}
    </div>
  );
}

export default App;
