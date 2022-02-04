import React from "react";
import Card from "../ModalUI/Card";

const AddUsers = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="username">Age (Years)</label>
        <input type="number" id="username" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUsers;
