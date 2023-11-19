'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 4000
const cors = require('cors')
const express = require("express");
const connectDb = require('./config/db/connect');
const userRouter = require('./src/routes/user');
const notesRouter = require('./src/routes/notes');

connectDb();
const app = express();
app.use(cors());

// Middlewares
app.use(express.json())

// test API
app.get('/api', (req, res) => {
    res.send('hello')
})

// Routes
app.use('/api/user', userRouter);
app.use('/api/notes', notesRouter);

app.listen(PORT, () => {
    console.log('Server is Running on : ', PORT)
})