import React from "react";
import MainPage from "./components/MainPage";
import { AuthProvider } from "./contexts/AuthContext";
import ToastProvider from "./contexts/ToastContext";

import Navbar from "./components/Navbar";
import UserPrivate from "./components/UserPrivate";
import FlashCards from "./components/FlashCards";
import Home from "./components/Home";
import Reset from "./components/Reset";

import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "./components/Quiz";

const Main = () => {
  return (
    <Router>
      <ToastProvider>
        <Navbar />
        <Switch>
          <main>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/flashcards">
              <FlashCards />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
          </main>
        </Switch>
      </ToastProvider>
    </Router>
  );
};

const App = function (props) {
  // const [userState,setUserState] = useAuth();

  // useEffect(() => {
  //   smile();
  // });

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <AuthProvider>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/reset">
              <Reset />
            </Route>
            <UserPrivate exact path="/home">
              <Main />
            </UserPrivate>
          </AuthProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
