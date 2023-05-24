const express = require('express').Router();
const chatController = require('../controllers/chatController');

const router = express.Router();

router.get('/contacts', chatController.getContacts);
router.get('/messages/:contactId', chatController.getMessages);
router.post('/messages/:contactId', chatController.sendMessage);

module.exports = router;
