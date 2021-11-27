import "./styles/FlashCards.css";
import React, {useState } from "react";
import CardsSection from "./CardsSection";
import LoadingComponent from "./LoadingComponent";
import getDataBase from "../utilities/getDataBase";
import CategoryItem from "./CategoryItem";
import { useAuth } from "../contexts/AuthContext";
import { ReactComponent as ListIcon } from "./assets/list.svg";
import { useEffect } from "react";

export default function FlashCards() {
  const { currentUser } = useAuth();
  const [categories, setCategories] = useState(() => null);
  const [currentCategory, setCurrentCategory] = useState(0);
  const [loading, setLoading] = useState(true);
  const userId = currentUser.email;
  const { fetchCardCategories } = getDataBase();
  useEffect(() => {
    fetchCardCategories(userId).then((cats) => {

      setCategories(cats)
    setLoading(false)});
    return () => {
      // setCategories(null)
    };
  }, []);
  return (
    <div className="flash-cards-screen">
      <span
        style={{
          color: "#5F5F71",
          fontWeight: "bold",
          fontFamily: "'Baloo Da 2', cursive",
          margin: "10px 10px",
        }}
      >
        Categories
      </span>
      <div className="categories-menu">
        {loading ? <LoadingComponent /> : (categories.length
          ? categories.map((c, i) => (
              <button
                key={i}
                style={{ border: "none", padding: "0px", background: "none" }}
                onClick={() => setCurrentCategory(i)}
              >
                <CategoryItem name={c} />
              </button>
            ))
          : "You don't have any cards yet, click the add button to add a card")}
      </div>
      <div>
        <button className="toggle-all-cards">
          <ListIcon />
          <div style={{ display: "inline-block", marginBottom: "1px" }}>
            All Cards
          </div>
        </button>
      </div>
      {categories ? (
        <CardsSection
          uId={userId}
          category={categories[currentCategory]}
        />
      ) : null}
    </div>
  );
}
