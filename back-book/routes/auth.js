const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');



// TODO : Should be store elsewhere
let refreshTokens = [];

router.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(401);
        const accessToken = generateAccessToken({ username: user.username });
        res.json({ accessToken: accessToken });

    });
});

router.post('/login', (req, res) => {

    //Auth user
    const username = User.findOne({ email: req.body.email }, (err, user) => {
        // if not found return error
        if (user === null) {
            return res.status(404).json({
                message: 'User not found'
            });
        };

        // check if password is valid
        if (!user.validPassword(req.body.password)) return res.status(401).json({
            message: 'Wrong password'
        });

        const jsonUser = {id : user.id};
        const accessToken = generateAccessToken(jsonUser);
        const refreshToken = jwt.sign(jsonUser, process.env.REFRESH_TOKEN_SECRET);

        refreshTokens.push(refreshToken);

        res.json({ accessToken: accessToken, refreshToken: refreshToken });


    });

});

router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    res.sendStatus(204);
});



function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '120s' });
}


module.exports = router;