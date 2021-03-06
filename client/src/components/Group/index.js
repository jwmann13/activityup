import React from "react";
import Header from "../Header";
import EventDetails from "./EventDetails";
import Chat from "./Chat";
import Calender from "./Calender";
import Footer from "../Footer";
import "./styleGroup.css";

function Group(props) {
  return (
    <div>
      <Header
        authenticated={props.authenticated}
        username={props.username}
        updateUser={props.updateUser}
      />
      <div className="headerBuffer"></div>
      <div className="upperGroupArea">
        <EventDetails />
        <Chat />
      </div>
      <Calender />
      <Footer />
    </div>
  );
}

export default Group;
