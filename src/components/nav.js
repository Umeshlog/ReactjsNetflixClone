import firebase from "firebase";
import React, { useState, useEffect } from "react";

import Login from "./login";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

 
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contant">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          className="logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          onClick={async () =>await firebase.auth().signOut()}
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
