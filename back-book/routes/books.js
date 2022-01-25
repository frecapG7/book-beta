
const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        console.log(err);

    }

});

router.get('/:id', async (req, res) => {
    try {
        const book = Book.findById(req.params.id);
        res.json(book);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {

    const book = new Book({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    });
    try {
        const savedBook = await book.save();
        res.json(savedBook);
    } catch (err) {
        res.json({ message: err });
    }

})

module.exports = router;

