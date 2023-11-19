const express = require('express');
const deleteNote = require('../../controllers/notes/deleteNote');
const fetchNote = require('../../controllers/notes/fetchNote');
const getNotes = require('../../controllers/notes/getNotes');
const insertNote = require('../../controllers/notes/insertNote');
const updateNote = require('../../controllers/notes/updateNote');
const loginMiddleware = require('../../middlewares/authMiddlewares')
const router = express.Router();

router.get('/get', loginMiddleware, getNotes);
router.get('/fetch/:noteId', loginMiddleware, fetchNote);
router.post('/insert', loginMiddleware, insertNote);
router.post('/update', loginMiddleware, updateNote);
router.post('/delete', loginMiddleware, deleteNote);


module.exports = router;
