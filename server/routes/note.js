
const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const notes = await Note.getNotes();
      res.send(notes);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/Read', async (req, res) => {
    try {
      let note = await Note.Read(req.body);
      res.send({...note,noteContent})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .put('/edit', async (req, res) => {
    try {
      let note = await Note.editNotes(req.body);
      res.send({...note, noteContent});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Note.deleteNote(req.body);
      res.send({success: "Content deleted"})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })



  
module.exports = router;
/*
//const { application } = require('express');
const express=require('express');
const User=require('../models/user');
const router=express.Router();

router
    .get('/',async(req,res)=>{
    try{
        const users=await User.getAllUsers();
        res.send(users);
    } catch(err){
        res.status(401).send({message: err.message});

    }
})

.post('/login', async (req, res) => {
    try {
      let user = await User.login(req.body);
      res.send({...user, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/register', async (req, res) => {
    try {
      let user = await User.register(req.body);
      res.send({...user, password: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .put('/edit', async (req, res) => {
    try {
      let user = await User.editUser(req.body);
      res.send({...user, password: undefined});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      User.deleteUser(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })


module.exports=router;


const express=require('express');
const Note=require('../models/note');
const router=express.Router();

router.get('/',async (req,res)=>{
    try{
        const notes=await Note.getAllNotes();
        res.send(notes);
    }catch(err){
        res.status(401).send({message: err.message});

    }
})

.put('/edit', async (req, res) => {
    try {
      let note = await Note.editNote(req.body);
      res.send({...note});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      Note.deleteNote(req.body);
      res.send({success: "We'll Miss You... :("})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })


module.exports=router;
*/