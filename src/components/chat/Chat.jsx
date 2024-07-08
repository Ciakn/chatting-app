import React from "react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import "./chat.css";
function Chat() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [textValue, setTextValue] = useState("");
  const handleEmoji = (e) => {
    setTextValue((prev) => prev + e.emoji);
    console.log(e.emoji);
  };
  console.log(textValue);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span className="">mohammad ali</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phonecall" />
          <img src="./video.png" alt="videocall" />
          <img src="./info.png" alt="info" />
        </div>
      </div>
      <div className="center"></div>
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
