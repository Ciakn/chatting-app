import React, { useState } from "react";
import "./chatList.css";
function ChatList() {
  const [addMode, setAddMode] = useState(false);
  console.log(addMode);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="search" />
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
        <img
          onClick={() => setAddMode((prev) => !prev)}
          alt="add"
          src={`${addMode ? "./minus.png" : "./plus.png"}`}
          className="add"
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Ali Ahmed</span>
          <p>hello bro</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Ali Ahmed</span>
          <p>hello bro</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Ali Ahmed</span>
          <p>hello bro</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Ali Ahmed</span>
          <p>hello bro</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Ali Ahmed</span>
          <p>hello bro</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Ali Ahmed</span>
          <p>hello bro</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Ali Ahmed</span>
          <p>hello bro</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="avatar" />
        <div className="texts">
          <span>Ali Ahmed</span>
          <p>hello bro</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
