// auth.middleware.js
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  // Get the token from the request header
  const token = req.header("Authorization");

  // Check if token is present
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, "your_secret_key");

    // Attach the user information to the request
    req.user = decoded;

    // Move to the next middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
}

module.exports = authenticate;
