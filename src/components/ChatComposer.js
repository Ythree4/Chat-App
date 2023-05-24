import React from 'react';
import axios from 'axios';

function ChatComposer({ userId }) {
  const [contactId, setContactId] = React.useState(null);
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`/chat/messages/${contactId}`, { text: message });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h2>Chat Composer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatComposer;
