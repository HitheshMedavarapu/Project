const express = require('express'); 
const note = require('../models/note');
const router = express.Router();

router.get('/', (req, res) => {
  try {
    const notes = note.getNotes(); 
    res.send(notes);
  } catch (err) {
    res.status(401).send({message: error.message});
  }
});

module.exports = router;