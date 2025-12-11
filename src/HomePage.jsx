import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "./api";

function HomePage() {
  const [users, setUsers] = useState([]);

  // ✅ Load users when the page loads
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Add user
  const handleAdd = async () => {
    await createUser({ name: "Dhrithi", phone: "12345" });
    loadUsers(); // refresh list
  };

  // ✅ Delete user
  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers(); // refresh list
  };

  return (
    <div>
      <h1>Users</h1>

      <button onClick={handleAdd}>Add User</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.phone}
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;