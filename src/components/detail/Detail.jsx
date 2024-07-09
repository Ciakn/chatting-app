import React from "react";
import "./detail.css";
function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="avatar" />
        <h2>Ali ahmed</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel.
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="arrow" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="./arrowUp.png" alt="arrow" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowDown.png" alt="arrow" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="arrow" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./download.jpeg" alt="shared photo" />
                <span>Photo_2024.ng</span>
              </div>
              <img src="download.png" alt="download button" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="./download.jpeg" alt="shared photo" />
                <span>Photo_2024.ng</span>
              </div>
              <img src="download.png" alt="download button" className="icon" />
            </div>
              <div className="photoItem">
              <div className="photoDetail">
                <img src="./download.jpeg" alt="shared photo" />
                <span>Photo_2024.ng</span>
              </div>
              <img src="download.png" alt="download button" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowup.png" alt="arrow" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">LogOut</button>
      </div>
    </div>
  );
}

export default Detail;
