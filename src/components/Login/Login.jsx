import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <div className="login">
      <div className="item">
        <form>
          <h3>Sign in</h3>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign in</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
        <form>
          <label style={{ cursor: "pointer" }} htmlFor="file">
            <img src={avatar.url || "./avatar.png"} />
            Upload an Image
          </label>
          <input
            id="file"
            type="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
