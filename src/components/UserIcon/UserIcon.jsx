// UserIcon.js
import React, { useState } from 'react';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';

const UserIcon = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>User Icon</button>
      {showModal && (
        <div className="modal">
          <button onClick={closeModal}>Close</button>
          <Registration />
          <Login/>
        </div>
      )}
    </div>
  );
};

export default UserIcon;
