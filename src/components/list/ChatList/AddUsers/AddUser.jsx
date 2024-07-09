import React from "react";
import "./AddUser.css";
const AddUser = () => {
  return (
    <div className="addUser">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="addingUser">
        <div className="userDetail">
          <img src="./avatar.png" alt="avatar" />
          <span>ali ahmed</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
