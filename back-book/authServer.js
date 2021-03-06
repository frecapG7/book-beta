const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('./models/User');

app.use('/', express.json());

// TODO : Should be store elsewhere
let refreshTokens = [];

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(401);
        const accessToken = generateAccessToken({ username: user.username });
        res.json({ accessToken: accessToken });

    });
});

app.post('/login', (req, res) => {
    console.log('TODO: login');

    //Auth user
    const username = User.findOne({ email: req.body.email }, (err, user) => {
        // if not found return error
        if (err) return res.status(400).json({
            message: 'User not found'
        });

        // check if password is valid
        if (!user.validPassword(req.body.password)) return res.status(400).json({
            message: 'Wrong password'
        });

        const accessToken = generateAccessToken(user);
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

        refreshTokens.push(refreshToken);

        res.json({ accessToken: accessToken, refreshToken: refreshToken });


    });

});

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
});



function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '120s' });
}


app.listen(4000);
