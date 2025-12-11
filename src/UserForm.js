import { useState } from "react";

export default function UserForm({ onCreate }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ name, phoneNumber });
    setName("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Create User</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />

      <button type="submit">Create</button>
    </form>
  );
}