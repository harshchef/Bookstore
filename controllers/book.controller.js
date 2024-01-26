// book.controller.js
const Book = require("../models/userModels");

async function addBook(req, res) {
  try {
    const { title, author, ISBN, price, quantity } = req.body;

    // Validate input
    if (!title || !author || !ISBN || !price || !quantity) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Check if book with the same ISBN already exists
    const existingBook = await Book.findOne({ ISBN });
    if (existingBook) {
      return res
        .status(400)
        .json({ error: "Book with this ISBN already exists." });
    }

    // Create a new book
    const newBook = new Book({ title, author, ISBN, price, quantity });
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getBookByISBN(req, res) {
  try {
    const isbn = req.params.isbn;
    const book = await Book.findOne({ ISBN: isbn });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function updateBook(req, res) {
  try {
    const isbn = req.params.isbn;
    const { title, author, price, quantity } = req.body;

    // Validate input
    if (!title || !author || !price || !quantity) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const book = await Book.findOne({ ISBN: isbn });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Update book details
    book.title = title;
    book.author = author;
    book.price = price;
    book.quantity = quantity;

    await book.save();

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// async function deleteBook(req, res) {
//   try {
//     const isbn = req.params.isbn;

//     const book = await Book.findOne({ ISBN: isbn });

//     if (!book) {
//       return res.status(404).json({ error: "Book not found" });
//     }

//     // Delete the book
//     await book.remove();

//     res.status(204).end();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
// async function deleteBook(req, res) {
//   try {
//     const isbn = req.params.isbn;

//     const book = await Book.findOne({ ISBN: isbn });

//     if (!book) {
//       return res.status(404).json({ error: "Book not found" });
//     }

//     // Delete the book
//     await book.remove();

//     res.status(204).end();
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "Internal Server Error", details: error.message });
//   }
// }
async function deleteBook(req, res) {
  try {
    const isbn = req.params.isbn;

    // Use findOneAndDelete to find and delete the book
    const deletedBook = await Book.findOneAndDelete({ ISBN: isbn });

    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}

module.exports = {
  addBook,
  getAllBooks,
  getBookByISBN,
  updateBook,
  deleteBook,
};
