import React, { useState } from "react";
import "./AddUserModal.css";

const AddUsers = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserage, setEnteredUserage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserage < 1) {
      return;
    }
    console.log(enteredUsername, enteredUserage);
    setEnteredUsername("");
    setEnteredUserage("");
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
      <input
        type="text"
        id="username"
        value={enteredUsername}
        onChange={usernameChangeHandler}
      />
      <label htmlFor="username">Age (Years)</label>
      <input
        type="number"
        id="age"
        value={enteredUserage}
        onChange={userageChangeHandler}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUsers;
