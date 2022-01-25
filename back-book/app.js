const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');


const booksRoute = require('./routes/books');
const requestsRoute = require('./routes/requests');
const usersRoute = require('./routes/users');
// Routes
app.use('/', bodyParser.json());
app.use('/books', booksRoute);
app.use('/requests', requestsRoute);
app.use('/users', usersRoute);


app.get("/", (req, res) => {
    console.log('Hello world');
    res.send('Hello zorld');
});

mongoose.connect(
    process.env.DATABASE_CONNECTION, () => {
    console.log('Connection succes');
});

app.listen(3000);
