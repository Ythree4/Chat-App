const User = require('../models/User');
const Message = require('../models/Message');

exports.getContacts = async (req, res) => {
  try {
    const contacts = await User.find().select('username');
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving contacts' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { contactId } = req.params;
    const messages = await Message.find({ contactId }).select('text sender');
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving messages' });
  }
};

exports.sendMessage = async (req, res) => {
  try {
    const { contactId } = req.params;
    const { text } = req.body;
    const sender = req.user.userId;
    const message = new Message({ contactId, text, sender });
    await message.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
};
