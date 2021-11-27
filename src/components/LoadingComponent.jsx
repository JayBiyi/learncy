import React from 'react'
import "./styles/loader.css";
import {ReactComponent as Load} from "./assets/loader.svg";
export default function LoadingComponent() {
    return (
        <div className="menu-item loading">
            <svg>
        <Load />
      </svg>
        </div>
    )
}
