import React, { useEffect } from "react";
import startAnim from "../utilities/landingPageAnimations";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as Sv } from "./assets/Main.svg";
import "./styles/mainpage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  useEffect(() => {
    startAnim();
  });
  return (
    <div className="main-pg">
      <svg>
        <Sv />
      </svg>
      <div className="scrollElement"></div>

      <Link to="/login">
        <button className="btn btn_works">Login</button>
      </Link>
      <div className="credit">art credit :codepen.io@isladjan</div>
      <div className="welcome">
        <span>
          Welcome to Learncy <br />
          😁<br />
          login or signup to get started
        </span>

        <div className="logo">
          <Logo />
        </div>
      </div>
      <Link to="/signup">
        <button className="btn">Signup</button>
      </Link>
    </div>
  );
}
