


const BookService = {



    async AddBook(book, user) {
    
        const newBook = new Book({
            title: book.title,
            description: book.description,
            author: book.author,
            publishDate: book.publishDate,
            tags: book.tags,
            createdBy = user.id 
        });

        try {
            const savedBook = await newBook.save();
            return { savedBook };
        } catch (err) {
            return { message: err };
        }
    }
}


module.exports = BookService;
