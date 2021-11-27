import { Link, useHistory } from "react-router-dom";
import logo from "./assets/logo.svg";
import { useEffect, useState, useRef } from "react";
import { ReactComponent as Bell } from "./assets/Bell.svg";
import { useToast } from "../contexts/ToastContext";
import Toast from "./Toast";
import NotificationsCard from "./Notifications";
import { ReactComponent as Home } from "./assets/home.svg";
import { useAuth } from "../contexts/AuthContext";
import getDataBase from "../utilities/getDataBase";

export default function Navbar() {
  const { shouldToastShow, toastType, toastMessage } = useToast();
  const { currentUser, logout, unSubscribe } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    logout()
      .then((msg) => {
        console.log(msg);
        unSubscribe();
        history.push("/login");
      })
      .catch((err) => console.log(err));
  }

  return (
    <nav>
      <Toast
        shouldToastShow={shouldToastShow}
        toastType={toastType}
        toastMessage={toastMessage}
      />
      <User name={currentUser.displayName} />
      <Link to="/home">
        <div className="nav-icn">
          <Home />
        </div>
      </Link>
      <button className="nav-btn" onClick={handleLogOut}>
        Logout
      </button>

      <Notification />
    </nav>
  );
}

const User = ({ name }) => {
  return (
    <div
      style={{
        fontFamily: "var(--font-greet)",
        color: "rgb(154,156,159)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0",
        margin: "5px",
      }}
    >
      <img className="logo" src={logo} alt="logo" />
      <div className="greeting">
        <span>learncy</span>
      </div>
    </div>
  );
};

const Notification = () => {
  const indicatorRef = useRef();
  const [showNotifications, setShowNotifications] = useState(false);
  const { currentUser } = useAuth();
  const { getNotifications } = getDataBase();
  const [notifications, setNotifications] = useState(() => []);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const arr = [];
    getNotifications(currentUser.email).then((results) => {
      results.forEach((result) => {
        arr.push({ [result.id]: result.data() });
      });
      setNotifications(arr);
      setLoading(false);
    });
  }, []);

  return (
    <div className="notification">
      <span
        ref={indicatorRef}
        style={{
          backgroundColor: `${notifications.length ? "red" : "transparent"}`,
        }}
        className="indicator"
      ></span>
      <button
        onClick={() => {
          indicatorRef.current.style.display = "none";
          setShowNotifications((showNotifications) => !showNotifications);
        }}
        className="nav-icn"
      >
        <Bell />
      </button>
      {showNotifications && (
        <NotificationsCard loading={loading} notifications={notifications} />
      )}
    </div>
  );
};
