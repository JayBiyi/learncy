import { useState, useEffect } from "react";
import getDataBase from "../utilities/getDataBase";
import CardToolsPanel from "./CardToolsPanel";
import Toast from "./Toast";
import Card from "./Card";

export default function CardsSection({ uId, category }) {
  const { getCardsInCategory, deleteCard, addCard } = getDataBase();
  // cont [cardIds,setCardIds] = useState([])
  const [cards, setCards] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(() => 0);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  useEffect(() => {
    getCardsInCategory(uId, category).then((cads) => setCards(cads));
    return () => {
      setActiveCardIndex(0);
      //
    };
  }, [category, uId]);

  function changeCardIndex(num) {
    //takes in a number [0 or 1] one to mean next and 0 to mean previous

    if (activeCardIndex >= 1 && num === 0) {
      //this is call for decrease
      setActiveCardIndex((p) => p - 1);
    }
    if (activeCardIndex < cards.length - 1 && num === 1) {
      setActiveCardIndex((p) => p + 1);
    }
  }
  function onLike(activeCardId, card) {
    addCard(uId, "favourites", activeCardId, card);
  }
  function onDelete(activeCardId) {
    deleteCard(uId, category, activeCardId)
      .then(() => {
        setDeleteSuccess(1);
      })
      .catch(() => setDeleteSuccess(0));
  }
  return (
    <section style={{ position: "relative" }}>
      <CardToolsPanel
        onLike={onLike}
        data={cards ? cards[activeCardIndex] : 0}
        onDelete={onDelete}
      />
      {deleteSuccess === 1 ? (
        <Toast show msg={"successfully deleted card"} />
      ) : deleteSuccess === 0 ? (
        <Toast error show msg={"could not delete card"} />
      ) : null}
      <div className="cards-grid">
        {cards ? (
          <Card
            progress={((activeCardIndex + 1) / cards.length) * 100}
            total={cards.length}
            currentIndx={activeCardIndex}
            data={cards[activeCardIndex]}
            onCardChange={changeCardIndex}
            category={category}
          />
        ) : null}
      </div>
    </section>
  );
}
