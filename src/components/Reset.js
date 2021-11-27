import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Message from "./Message";
import Loader from "./Loader";
import createErrorMessage from '../utilities/createErrorMessage';
 
export default function Reset() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [emailRef] = [useRef()];
  async function handleReset(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    await resetPassword(emailRef.current.value)
      .then((msg) => {
        console.log(msg);
        setMessage("Reset Link has been sent to your email");
      })
      .catch((err) => {
        console.log(err.code);
        setError(createErrorMessage(err.code));
      });
    setLoading(false);
  }
  const styles = { color: "blue", textAlign: "center", margin: "20px" };
  return (
    <main
      className="login-screen home"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <form
        className="reset-form"
        onSubmit={handleReset}
        style={{ margin: "0 auto" }}
      >
        {(error && <Message message={error} type="error" />) ||
          (message && <Message message={message} type="success" />)}
        <div style={styles}>We can fix this!</div>

        <input
          type="email"
          ref={emailRef}
          placeholder="recovery email"
          required
        />
        {loading ? <Loader /> : null}

        <button disabled={loading} className="button" type="submit">
          Reset Password
        </button>
        <div
          style={{
            ...styles,
            fontSize: "0.6em",
            marginBottom: "5px",
            color: "purple",
          }}
        >
          <Link to="/login">Pshh, I remembered!!</Link>
        </div>
      </form>
    </main>
  );
}
