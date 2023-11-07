import React, { useState } from 'react';

const UserEditModal = ({ user, onSave, onClose }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default UserEditModal;