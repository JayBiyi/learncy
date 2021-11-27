import React, {useState } from "react";
import comment from "./assets/comment.svg";
import { ReactComponent as Heart } from "./assets/heart.svg";
import { ReactComponent as Delete } from "./assets/delete.svg";
import "./styles/cardTools.css";
import CardForm from "./CardForm";
import edit from "./assets/edit.svg";

export default function CardToolsPanel({ data, onLike, onDelete }) {
  const activeCardId = Object.keys(data)[0] || "";
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="card-tools-panel">
      {activeCardId && (
        <button className="tool-icn">
          <img src={comment} alt="add_comment" />
        </button>
      )}
      {activeCardId && (
        <button
          onClick={() => {
            console.log("adding to favs");
            onLike(activeCardId, {
              front: Object.values(data)[0].front,
              back: Object.values(data)[0].back,
            });
          }}
          className="tool-icn"
        >
          <Heart />
        </button>
      )}

      <button className="tool-icn add-btn" onClick={() => setIsFormOpen(true)}>
        +
      </button>
      {activeCardId && (
        <button onClick={() => onDelete(activeCardId)} className="tool-icn">
          <Delete />
        </button>
      )}
      {activeCardId && (
        <button className="tool-icn">
          <img src={edit} alt="add_card" />
        </button>
      )}
      <CardForm setFormOpen={setIsFormOpen} isOpen={isFormOpen} />
    </div>
  );
}
