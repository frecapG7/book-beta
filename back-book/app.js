const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const jwt = require('jsonwebtoken');


const booksRoute = require('./routes/books');
const requestsRoute = require('./routes/requests');
const usersRoute = require('./routes/users');
// Routes
app.use('/', express.json());
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

//TODO : emove
app.get('/test', authenticateToken, (req, res) => {
    res.json({ username: req.user.username });
})


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next();
    });
}

app.listen(3000);
