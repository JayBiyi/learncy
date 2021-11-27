import React from "react";
import { Link} from "react-router-dom";
import quiz from "./assets/quiz.svg";
import plus from "./assets/plus.svg";
import MenuItem from './MenuItem'
import "./styles/Home.css";
import books from "./assets/books.svg";
import cards from "./assets/cards.svg";
import {useAuth} from '../contexts/AuthContext'
export default function Home() {
  const {currentUser} = useAuth();
  return (
    <div className="home">
      <p>Here's what's up {currentUser.displayName}!</p>
      <div className="menu">
        <Link to="/flashcards">
          <MenuItem icon={cards} name="FLASHCARDS" />
        </Link>
        <Link to="/learn">
          <MenuItem icon={books} name="LEARN" />
        </Link>

        <Link to="/quiz">
          <MenuItem icon={quiz} name="QUIZ" />
        </Link>
      </div>
      <p>Favourite Cards</p>
      <QuickCards />
    </div>
  );
}
const QuickCards = () => {
  return (
    <div className="quick-cards">
      <div className="add-card">
        <img src={plus} alt="add-icon" />
        <p>Add Favourite card</p>
      </div>
    </div>
  );
};

