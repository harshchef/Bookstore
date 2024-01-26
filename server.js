
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authenticate = require('./middlewares/auth.middleware');
const routes = require('./routes/userRoute');
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// Use environment variable for port or default to 3000
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use authentication middleware for protected routes
app.use('/books', authenticate);

// Set up API routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





