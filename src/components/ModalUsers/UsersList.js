import "./UsersList.css";

const UsersList = (props) => {
  console.log(props.users);
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UsersList;