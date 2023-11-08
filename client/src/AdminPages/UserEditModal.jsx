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
        <h2 className='font-bold'>Edit User</h2>
        <form>
          <label htmlFor="name" className=''>Name : </label>
          <input
          className='border border-red-400 pl-1 rounded-sm'
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
          />
          <label htmlFor="email" className='ml-3'>Email : </label>
          <input className='border border-red-400 pl-1 rounded-sm'
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <input className='border border-red-400 pl-1 rounded-sm'
            type="file"
            name="image"
            
            
          />
          <button onClick={handleSave} className='m-2 bg-green-400 rounded-md p-2'>Save</button>
          <button onClick={onClose} className='m-2 bg-green-400 rounded-md p-2'>Close</button>
        </form>
      </div>
    </div>
  );
};

export default UserEditModal;