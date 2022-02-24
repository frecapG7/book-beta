

const Book = require("../models/Book");
const BookService = {

    async AddBook(book, user) {

        const newBook = new Book({
            title: book.title,
            description: book.description,
            author: book.author,
            publishDate: book.publishDate,
            tags: book.tags,
            createdBy: user.id
        });

        try {
            const savedBook = await newBook.save();
            return { savedBook };
        } catch (err) {
            return { message: err };
        }
    },

    async SearchBook(searchValue, additionalTags, pageSize, pageNumber, sortBy) {
        try {
            const resultSet = await Book.find({
                $or: [
                    { "title": { $regex: '.*' + searchValue + '.*' } },
                    { "author": { $regex: '.*' + searchValue + '.*' } }]
            }).limit(pageSize);

            return resultSet;
        } catch (err) {
            return {message : err};
        }
    }
}


module.exports = BookService;
