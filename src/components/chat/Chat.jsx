import React, { useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import "./chat.css";
import AddUser from "../list/ChatList/AddUsers/AddUser";
function Chat() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [textValue, setTextValue] = useState("");
  const endRef = useRef();
  const handleEmoji = (e) => {
    setTextValue((prev) => prev + e.emoji);
  };
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span className="">Cya kan</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phonecall" />
          <img src="./video.png" alt="videocall" />
          <img src="./info.png" alt="info" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              laoreet nisi at elit venenatis fringilla. Cras ut semper quam,
              sit.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message ">
          <img src="./avatar.png" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              laoreet nisi at elit venenatis fringilla. Cras ut semper quam,
              sit.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <img src="./download.jpeg" alt="some photo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              laoreet nisi at elit venenatis fringilla. Cras ut semper quam,
              sit.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message ">
          <img src="avatar.png" />

          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              laoreet nisi at elit venenatis fringilla. Cras ut semper quam,
              sit.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Type message"
          value={textValue}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="emoji"
            onClick={() => setShowEmoji((prev) => !prev)}
          />
          {showEmoji ? (
            <div className="emojiPicker">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          ) : null}
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
