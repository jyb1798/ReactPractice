import React, { useState } from "react";
import AddUsers from "./components/ModalUsers/AddUsers";
import UsersList from "./components/ModalUsers/UsersList";

const ModalApp = () => {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((preUsersList) => {
      return [
        ...preUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default ModalApp;
