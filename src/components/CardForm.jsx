import { useRef } from "react";
import { v4 } from "uuid";
import { useState } from "react";
import { useToast } from "../contexts/ToastContext";
import getDataBase from "../utilities/getDataBase";
import { useAuth } from "../contexts/AuthContext";
import { animated,useTransition } from "react-spring";
import add_comment_icon from "./assets/comment-add.svg";
export default function CardForm({ setFormOpen, isOpen }) {
  const uid = useAuth().currentUser.email;
  const [qnRef, ansRef] = [useRef(), useRef()];
  const { addCard } = getDataBase();
  const [category, setCategory] = useState(null);
  const [add_comment, setAddComment] = useState(false);
  const { setToastShow, setToastType, setToastMessage } = useToast();
  function handleChange(e) {
    setCategory(e.target.value.toUpperCase());
  }
  function addComment(comment) {}
  const transition = useTransition(isOpen, {
    from: {top: 200,opacity: 0},
    enter: {top: 0,opacity: 1},
    leave: {top:200,opacity: 0},
    delay: 0
  });

  function handleSubmit(e) {
    e.preventDefault();
    const cardId = v4();
    setFormOpen(false);
    const qn = qnRef.current.value;
    const ans = ansRef.current.value;
    const data = { front: qn, back: ans };
    addCard(uid, category, cardId, data)
      .then(() => {
        setToastMessage(`successfully added card to collection ${category}`);
        setToastShow(true);
        setToastType("success");
      })
      .catch(() => {
        console.log("error adding card");
        setToastMessage("could not add card to collection");
        setToastShow(true);
        setToastType("error");
      });
  }
  return transition((styles, item) => {
    return item && (
      <animated.div style={styles} className="form-wrapper">
        <form className="card-form" onSubmit={handleSubmit}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "20px",
              margin: "0 10px 0 5px",
            }}
          >
            {" "}
            <button
              onClick={() => setFormOpen(false)}
              className="card-form-btn close"
            >
              ×
            </button>
          </div>
          <h4 style={{margin: '5px'}}>Add a card</h4>
          <div>
            <input
              type="text"
              onChange={handleChange}
              required
              autoComplete="on"
              placeholder="category"
            />
          </div>
          <div>
            <textarea
              ref={qnRef}
              required
              rows="4"
              cols="50"
              placeholder="front"
            />
          </div>
          <div>
            <textarea
              ref={ansRef}
              required
              rows="4"
              cols="50"
              placeholder="back"
            />
          </div>
          {add_comment && (
            <div>
              <textarea
                ref={ansRef}
                required
                rows="4"
                cols="50"
                placeholder="add comment (optional)"
              />
            </div>
          )}

          <div className="card-form-btns">
            {" "}
            <button
              onClick={() => setAddComment((prev) => !prev)}
              className="card-form-btn comment"
            >
              <img src={add_comment_icon} alt="comment_add" />
            </button>
            <button className="card-form-btn save" type="submit">
              save
            </button>
          </div>
        </form>
      </animated.div>
    );
  });
}
