import { ReactComponent as Mascot } from "../Mascot.svg";
import React, { useRef, useState } from "react";
import { useAuth} from "../contexts/AuthContext";
import { useHistory,Link } from "react-router-dom";
import Message from "./Message";
import Loader from "./Loader";
import createErrorMessage from "../utilities/createErrorMessage";
export default function LoginPage() {
  return (
    <main className="login-screen home">
      <div className="loginform">
        <div className="mascot">
          <Mascot />
        </div>
        <LoginForm />
      </div>
    </main>
  );
}

const LoginForm = () => {
  const { login } = useAuth();
  const history = useHistory();

  const [emailRef, passwordRef] = [useRef(), useRef()];
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    await login(emailRef.current.value, passwordRef.current.value)
      .then((d) => history.push("/home"))
      .catch((err) => {
        console.log(err.code);
        setError(createErrorMessage(err.code));
      });
    setLoading(false);
  }
  const styles = {color: "blue", textAlign: "center", margin: "15px" };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Message message={error} type="error" />}
      {loading && <Loader />}
      <div style={styles}>
        <div>Login to learncy</div>
      </div>

      <input type="text" placeholder="email" ref={emailRef} required />
      <input
        type="password"
        ref={passwordRef}
        placeholder="password"
        required
      />
      <button disabled={loading} className="button" type="submit">
        Let's Go
      </button>
      <div style={{...styles,fontSize:'0.8rem'}}>
        <Link to="/signup">Signup instead</Link>
      </div>

      <div style={{...styles,fontSize:'0.7rem'}}>
        <Link to="/reset">I think I forgot my password😅</Link>
      </div>
    </form>
  );
};
