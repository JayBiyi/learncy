import React, { useEffect, useRef } from "react";
import { ReactComponent as Back } from "./assets/arrow_back.svg";
import { ReactComponent as Forward } from "./assets/arrow_forward.svg";
import { ReactComponent as Show } from "./assets/arrow_flip1.svg";
import { ReactComponent as Timer } from "./assets/timer.svg";
import "./styles/card-styles.css";
export default function Card({
  total,
  currentIndx,
  data,
  category,
  progress,
  onCardChange,
}) {
  const dataFront = Object.values(data)[0].front;
  const dataBack = Object.values(data)[0].back;

  const flipButtonStyle = {
    paddingLeft: "20px",
    paddingRight: "20px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    border: "0.2px solid rgb(214, 214, 214)",
    borderBottom: "none",
  };

  const card = useRef();
  function flipUp() {
    card.current.style.transform = "rotateY(180deg)";
    card.current.style.transition = "transform 0.5s";
  }
  function flipDown() {
    card.current.style.transform = "rotateY(0deg)";
    card.current.style.transition = "transform 0.5s";
  }

  return (
    <div class="flash-card">
      <div class="card-content" ref={card}>
        <div class="front">
          <Badge />

          <div className="card-control-panel top">
            <span className="timer">
              <Timer />
              00:00
            </span>
          </div>
          <span className="question">{dataFront}</span>
          <div className="card-control-panel bottom">
            <NavButton
              onClick={() => onCardChange(0)}
              render={() => <Back />}
            />
            <button style={flipButtonStyle} onClick={flipUp}>
              <Show />
            </button>
            <NavButton
              onClick={() => onCardChange(1)}
              render={() => <Forward />}
            />
          </div>
        </div>
        <div class="back">
          <Badge progress={progress} />
          <span>{dataBack}</span>
          <div className="card-control-panel btn-back">
            <button style={flipButtonStyle} onClick={flipDown}>
              <Show />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//grid view and slide view
const Badge = ({ progress }) => {
  const badgeRef = useRef();
  useEffect(() => {
    badgeRef.current.style.height = progress + "%";
    return () => {};
  }, [progress]);

  return (
    <div className="badge">
      <div ref={badgeRef} className={"progress"}></div>
    </div>
  );
};

function NavButton({ render, onClick }) {
  const style = { margin: "10px" };
  return (
    <button onClick={onClick} style={style} className="card-nav">
      {render()}
    </button>
  );
}
