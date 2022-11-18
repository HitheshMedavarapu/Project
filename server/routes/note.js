const express = require('express'); 
const Note = require('../models/user');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    const notes = Note.getNotes(); 
    res.send(users);
  } catch (err) {
    res.status(401).send({message: error.message});
  }
});

module.exports = router;