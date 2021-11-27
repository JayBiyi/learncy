import { ReactComponent as Mascot } from "../Mascot.svg";
import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import getDataBase from "../utilities/getDataBase";
import Message from "./Message";
import smile from '../utilities/smile'
import Loader from "./Loader";
import createErrorMessage from "../utilities/createErrorMessage";
export default function SignupPage() {
  return (
    <main className="login-screen home">
      <div className="loginform">
        <div className="mascot">
          <Mascot />
        </div>
        <Form />
      </div>
    </main>
  );
}
function makeWelcomeMessage(name){
  return `Hey ${name}, I'm so glad you've chosen to join the learncy community.Learning shouldn't be done the hard way, with this platform, you get to learn the fancy way.Feel free to reach out to us for any suggestions and improvements we can make on this platform.We have so much to add and we can't wait for you to check it out.This platform is for you because now, you have joined the community.
  Yours fithfully,
  Jason Biyinzika
  Founder Learncy.`
}
const Form = () => {
  useEffect(()=>{
    smile()
  })
  const { signup, setUserName} = useAuth();

  const { addUser,sendNotification} = getDataBase();
  const history = useHistory();

  const [emailRef, passwordRef, comfirmPasswordRef, userNameRef] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== comfirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }

    setError("");
    setLoading(true);
    await signup(emailRef.current.value, passwordRef.current.value)
      .then((msg) => {
        console.log(msg);
      
        addUser(emailRef.current.value, userNameRef.current.value)
        // addCard(emailRef.current.value)
        console.log(emailRef.current.value)
        sendNotification('jason from learncy',emailRef.current.value,makeWelcomeMessage(userNameRef.current.value)).then(r=>console.log(r)).catch(e=>console.log(e))
      })
      .then(() => {
        setUserName(userNameRef.current.value);
        

        history.push("/home");
      })
      .catch((err) => {
        setError(createErrorMessage(err.code));
      });

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Message message={error} type="error" />}
      <div style={{ color: "blue", textAlign: "center", margin: "20px" }}>
        <div>Let's get you signed up</div>
      </div>
      {loading && <Loader />}
      <input type="text" ref={userNameRef} placeholder="username" required />

      <input type="email" placeholder="email" ref={emailRef} required />

      <input
        type="password"
        ref={passwordRef}
        placeholder="password"
        required
      />
      <input
        type="password"
        ref={comfirmPasswordRef}
        placeholder="comfirm password"
        required
      />
      <button disabled={loading} className="button" type="submit">
        {"let's do this"}
      </button>
      <Link to='/login' style={{ fontSize: '0.7rem',color: "blue", textAlign: "center", margin: "15px" }}>Back to login</Link>
    </form>
  );
};
