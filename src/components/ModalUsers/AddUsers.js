import React, { useState, useRef } from "react";
import "./AddUserModal.css";

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredUserage, setEnteredUserage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // console.log(ageInputRef.current.value);
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // console.log(enteredUsername, enteredUserage);
    // setEnteredUsername("");
    // setEnteredUserage("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const userageChangeHandler = (event) => {
  //   setEnteredUserage(event.target.value);
  // };

  return (
    <>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          // value={enteredUsername}
          // onChange={usernameChangeHandler}
          ref={nameInputRef}
        />
        <label htmlFor="username">Age (Years)</label>
        <input
          type="number"
          id="age"
          // value={enteredUserage}
          // onChange={userageChangeHandler}
          ref={ageInputRef}
        />
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUsers;
