import React from "react";
import "./styles/notifications.css";
import getDataBase from "../utilities/getDataBase";
import { ReactComponent as MsgIcn } from "./assets/msg.svg";
import {useAuth} from '../contexts/AuthContext'


export default function NotificationsCard({loading,notifications}) {
  const {deleteNotification} = getDataBase();
  const uid = useAuth().currentUser.email

  return (
    <div className="notifications-card">
      {loading ? (
        "loading..."
      ) : notifications.length ? (
          notifications.map((note,i)=>{ deleteNotification(uid,Object.keys(note)[i])
              return <NotificationItem key={i} sender={Object.keys(note)[i]} message={(Object.values(note)[i]).message}/> }
     
          )
      
      ) : (
        <span className="notif-error">
          "you don't have any new notifications"
        </span>
      )}
    </div>
  );
}
function NotificationItem({ sender, message }) {
  return (
    <li className="notification-item">
      <div className="msg-icn">
        <MsgIcn />
      </div>
      <div className="message">
        <span style={{ fontWeight: "bold" }}>{sender}</span>
        <span>{message}</span>
      </div>
    </li>
  );
}
