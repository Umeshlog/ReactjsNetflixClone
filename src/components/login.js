import React, { useState } from "react";
import "./login.css";
import SignUpScreen from "./signupscreen";

const Login = () => {
  const [signin, setSignin] = useState(false);

  const showSignUp = (e) => {
    e.preventDefault();
    setSignin(true);
  };

  return (
    <div className="login">
      <div className="login__header">
        <img
          src="https://s22.q4cdn.com/959853165/files/design/logo.png"
          alt="Netflix"
          className="login__logo"
        />
        <button className="login__button">Sighn in</button>
      
      </div>
      <div className="login__body">
        {signin ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form className="login__form">
              <input type="text" placeholder="email addreess" />
              <button onClick={showSignUp}>Get Started</button>
            </form>
          </>
        )}
      </div>

      <div className="login__gradiant"></div>
    </div>
  );
};

export default Login;
