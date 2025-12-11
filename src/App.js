import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "./api";
import UserForm from "./UserForm";
import UserList from "./UserList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreate = async (user) => {
    await createUser(user);
    loadUsers();
  };

  const handleUpdate = async (id, user) => {
    await updateUser(id, user);
    loadUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div className="container">
      <h1>BerlinForU — User Service</h1>

      <UserForm onCreate={handleCreate} />
      <UserList users={users} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;