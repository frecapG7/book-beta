const express = require('express');
const router = express.Router();

const User = require('../models/User');

const UserService = require('../services/UserService');

router.post('/search', async (req, res) => {
    const result = await User.find({ "username": { $regex: '.*' + req.body.name + '.*' } });
    try {
        res.json({
            "content": result,
            "count": result.length
        });
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

router.post('/', UserService.verifyMailUnicity, async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email
    });
    newUser.setPassword(req.body.password);

    try {
        const savedUser = await newUser.save();

        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

module.exports = router;