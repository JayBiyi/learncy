import React from "react";
import { ReactComponent as Error } from "./assets/error.svg";
import { ReactComponent as Check } from "./assets/check.svg";
import "./styles/toast.css";
import styled, { css } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { animated,useTransition } from "react-spring";

const ToastContainer = styled(animated.div)`
  width: 280px;
  position: fixed;
  top: -20;
  left: 0;
  z-index; 1000;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  display: flex;
  font-size: 0.8em;
  align-items: center;
  background: #75cf0faf;
  transition: all 2s;
  transition-timing-function: ease-in-out;
  justify-items: center;
  color: white;
  border-radius: 5px;
  ${(props) =>
    props.error &&
    css`
      background-color: #f33951;
    `}
`;

export default function Toast({ shouldToastShow, toastType, toastMessage }) {
  const [cankillToast, setKillToast] = useState(false);
  const transition = useTransition(shouldToastShow && !cankillToast, {
    from: {y: -100,opacity: 0},
    enter: {y: 5,opacity: 1},
    leave: {y:-100,opacity: 0},
    delay: 0
  });
  useEffect(() => {
    setTimeout(() => {
      setKillToast(true);
    }, 5000);
    return () => {
      setKillToast(false);
    };
  }, [shouldToastShow, toastMessage]);

  return transition((style, item) => {
    if (item) {
      return (
        <ToastContainer style={style} error={toastType === "error" ? true : false}>
          <span style={{ margin: "10px" }}>
            {toastType === "error" ? <Error /> : <Check />}
          </span>
          <div
            style={{
              margin: "0px 6px 0px 0px",
              textAlign: "center",
              padding: "15px 0",
              height: "100%",
            }}
          >
            {toastMessage}
          </div>
        </ToastContainer>
      );
    } else return "";
  });
}

