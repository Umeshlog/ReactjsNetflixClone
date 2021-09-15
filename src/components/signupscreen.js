import React, { useRef } from "react";
import { auth } from "../firebase";
import "./login.css";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ) .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupscreen">
      <form action="">
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder="email" />
        <input type="password" ref={passwordRef} placeholder="password" />
        <button onClick={signIn}>Sign In</button>

        <h4>
          new to netflix <span onClick={register} >Sign Up Now</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
