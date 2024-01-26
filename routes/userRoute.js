// routes.js
const express = require("express");
const router = express.Router();
const {
  addBook,
  getAllBooks,
  getBookByISBN,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

router.post("/books", addBook);
router.get("/books", getAllBooks);
router.get("/books/:isbn", getBookByISBN);
router.put("/books/:isbn", updateBook);
router.delete("/books/:isbn", deleteBook);

module.exports = router;
