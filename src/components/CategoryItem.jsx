import React from "react";
import {ReactComponent as Collection} from "./assets/collection.svg";

export default function CategoryItem({ name }) {
  const COLOR_PALETS = [
    ["#FFF2C7",'#FBC071'],
    ["#D8EFFF",'#68B5F9'],
    ["#FEDFCC",'#FE9881'],
    ["#B9EEDC",'#58B696'],
    ["#E0D7FF",'#9479F3'],
    ["#FBE2FA",'#F47ED2'],
    ["#E6E4FE",'#FBC67A']
  ];
  const randColor = Math.floor(Math.random() * 6);
  return (
    <div
      className="category-itm"
      style={{
        color: COLOR_PALETS[randColor][1],
        backgroundColor: `${COLOR_PALETS[randColor][0]}`,
      }}
    >
      <div className="category-icon">

        <Collection />
      </div>
      <span style={{fontWeight: "bold"}}>{name}</span>
    </div>
  );
}
