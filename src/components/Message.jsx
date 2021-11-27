import React from "react";

export default function Message({ message, type }) {
  const style = {
    color: type === "error" ? "red" : "green",
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: type === "error" ? "rgba(212, 3, 3, 0.25)" : "rgba(0, 145, 0, 0.25)",
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
  };
  return <div style={style}>{message}</div>;
}
