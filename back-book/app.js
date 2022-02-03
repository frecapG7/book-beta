const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const booksRoute = require('./routes/books');
const requestsRoute = require('./routes/requests');
const usersRoute = require('./routes/users');
const cors = require('cors');
const config = require('./config');

app.use(cors());
// Routes
app.use('/', express.json());

app.use('/', authRoute);
app.use('/books', booksRoute);
app.use('/requests', requestsRoute);
app.use('/users', usersRoute);


app.get("/", (req, res) => {
    console.log('Hello world');
    res.send('Hello zorld');
});

console.log(process.DATABASE_CONNECTION);

mongoose.connect(
    config.DATABASE_CONNECTION, () => {
    console.log('Connection succes');
});




app.listen(3000);
