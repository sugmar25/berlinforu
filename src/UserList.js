import { useState } from "react";

export default function UserList({ users, onUpdate, onDelete }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");

  const startEdit = (user) => {
    setEditId(user.id);
    setEditName(user.name);
    setEditPhone(user.phoneNumber);
  };

  const saveEdit = () => {
    onUpdate(editId, { name: editName, phoneNumber: editPhone });
    setEditId(null);
  };

  return (
    <div className="list">
      <h2>Users</h2>

      {users.length === 0 && <p>No users found.</p>}

      {users.map((user) => (
        <div key={user.id} className="user-card">
          {editId === user.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <input
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p><strong>{user.name}</strong></p>
              <p>{user.phoneNumber}</p>
              <button onClick={() => startEdit(user)}>Edit</button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}