import React from 'react';
import io from 'socket.io-client';

function Notifications({ userId }) {
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('notification', (notification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
