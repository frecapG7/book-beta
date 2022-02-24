
const express = require('express');
const router = express.Router();

const Book = require('../models/Book');
const BookService = require('../services/BookService');
const { authenticateToken } = require('../validators/authValidator');

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
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', authenticateToken, async (req, res) => {
    console.log('API Call');

    try {

        const newBook = await BookService.AddBook(req.body, req.user)
        res.status(200).json(newBook);

    } catch (err) {
        res.status(err.status ? err.status : 500).json(err.message);
    }

});

router.patch('/:id', async (req, res) => {
    const book = await Book.findById(req.params.id)
});

router.post('/search', async (req, res) => {
    console.log('API call');
    try {
        const pageSize = req.params.pageSize;
        const pageNumber = req.params.pageNumber;
        const value = req.body.value;
        const searchResults = await BookService.SearchBook(value, pageSize, pageNumber, null);

        console.log(searchResults);
        res.status(200).json(searchResults);
    } catch(err){
        res.status(err.status ? err.status : 500).json(err.message);
    }


});

module.exports = router;

