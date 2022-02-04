import React, { useState } from "react";
import "./AddUserModal.css";

const AddUsers = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredUserage);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={usernameChangeHandler} />
      <label htmlFor="username">Age (Years)</label>
      <input type="number" id="age" onChange={userageChangeHandler} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUsers;
