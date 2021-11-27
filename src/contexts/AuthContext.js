import React from "react";
import app from "../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

const auth = getAuth();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function setUserName(name) {
    return updateProfile(auth.currentUser, { displayName: name });
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  function logout() {
    return signOut(auth);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const unSubscribe  = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    unSubscribe,
    setUserName,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
