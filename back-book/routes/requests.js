const e = require('express');
const express = require('express'); 
const router = express.Router();
const Request = require('../models/Request');



router.get('/', async (req, res) => {

    const requests = await Request.find().limit(10);
    try{
        res.json(requests);
    }catch(err){
        res.json({message : err});
    }
});


router.post('/', async (req, res) => {
    const savedRequest = await new Request({
        "description": req.body.description,
        "tags": req.body.tags,
        "user_id": req.body.user_id
    }).save();
    try{
        res.send(savedRequest);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/search', async (req, res) => {
    const searchResult = await Request.find({"tags": {$all: [req.body.tags]}}).sort('created');

    try{
        res.json({
            content: searchResult,
            count: searchResult.length
        });
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;

