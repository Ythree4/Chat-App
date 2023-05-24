import React from 'react';
import axios from 'axios';

function ChatHistory({ userId }) {
  const [contactId, setContactId] = React.useState(null);
  const [messages, setMessages] = React.useState([]);

  const handleContactClick = async (contactId) => {
    setContactId(contactId);

    try {
      const response = await axios.get(`/chat/messages/${contactId}`);
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div>
      <h2>Chat History</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <strong>{message.sender}</strong>: {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatHistory;
