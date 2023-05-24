import React from 'react';
import axios from 'axios';

function ContactList({ userId }) {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/chat/contacts');
        setContacts(response.data.contacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>{contact.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
