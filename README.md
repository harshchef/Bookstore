Bookstore API
This project is a Bookstore API implemented using Express.js and MongoDB. It follows a structured file organization for better code management.

Project Structure
node_modules/: Contains all npm dependencies for the project.
.env: Environment variables, such as the MongoDB connection string, are stored here.
.gitignore: Specifies files and directories to be ignored by Git.
package.json: Metadata about the project, including dependencies and scripts.
package-lock.json: Automatically generated snapshot of the package dependency tree.
server.js: Main entry point for the application. Sets up the Express server, connects to MongoDB, and defines API routes.
middlewares/: Directory containing middleware functions, including an authentication middleware.
routes/: Directory containing modules defining API routes. In this case, it includes a module for user-related routes.
models/: Directory containing modules defining data models. In this case, it includes a module for the user model.
Tasks Completed
Database Design:

Designed a MongoDB schema to store book details, including title, author, ISBN, price, and quantity.
API Endpoints:

Implemented CRUD operations with endpoints for adding a new book, retrieving all books, retrieving a specific book by ISBN, updating book details, and deleting a book.
Authentication:

Implemented basic authentication to restrict access to certain endpoints using an authentication middleware.
Documentation:

Provided clear documentation of API endpoints and their usage.
Testing:

Wrote unit tests for the API endpoints, ensuring robust functionality.
Evaluation Criteria
Code Quality and Organization:

Code is well-organized and follows best practices for maintainability.
Effective Use of Framework:

Utilized Express.js effectively to build a scalable and efficient API.
Database Design and Interaction:

Designed a MongoDB schema that efficiently stores and retrieves book details.
Handling of Edge Cases and Errors:

Implemented proper error handling and considered edge cases in API operations.
Packages Used
express: Web application framework for Node.js.
mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
body-parser: Middleware for parsing incoming request bodies.
dotenv: Loads environment variables from a .env file into process.env.
