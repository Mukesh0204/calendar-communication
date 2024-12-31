import React from 'react';

const Notification = ({ message, type }) => {
  const notificationStyles = type === 'overdue' ? 'bg-danger text-white' : 'bg-yellow-500 text-black';

  return (
    <div className={`p-4 mb-4 rounded-lg ${notificationStyles}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
