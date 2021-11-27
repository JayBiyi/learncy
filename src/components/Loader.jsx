import "./styles/loader.css";
import {ReactComponent as Load} from "./assets/loader.svg";
// import React from 'react'

export default function Loader() {
  return (
    //      <div class="loading">Loading&#8230;</div>
    <div className="loader">
      <svg>
        <Load />
      </svg>
    </div>
  );
}
