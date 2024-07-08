import React from "react";
import "./chat.css";
function Chat() {
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span className="">mohammad ali</span>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phonecall" />
          <img src="./video.png" alt="videocall" />
          <img src="./info.png" alt="info" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  );
}

export default Chat;
