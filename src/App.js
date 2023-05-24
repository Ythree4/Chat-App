import React from 'react';
import Login from './components/Login';
import Account from './components/Account';
import ContactList from './components/ContactList';
import ChatHistory from './components/ChatHistory';
import ChatComposer from './components/ChatComposer';
import Notifications from './components/Notifications';

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [userId, setUserId] = React.useState(null);

  const handleLogin = (id) => {
    setLoggedIn(true);
    setUserId(id);
  };

  return (
    <div>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && (
        <div>
          <Account userId={userId} />
          <ContactList userId={userId} />
          <ChatHistory userId={userId} />
          <ChatComposer userId={userId} />
          <Notifications userId={userId} />
        </div>
      )}
    </div>
  );
}

export default App;
