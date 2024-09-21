const jwt = require('jsonwebtoken');


// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'No token provided.' });

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) return res.status(500).json({ message: 'Failed to authenticate token.' });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

// Middleware to check if the user is a company
const isCompany = (req, res, next) => {
  if (req.userRole === 'company') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. Company only.' });
  }
};

// Middleware to check if the user is a regular user
const isUser = (req, res, next) => {
  if (req.userRole === 'user') {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. User only.' });
  }
};

// JWT Token generation function for registration
const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role: role }, 'your_secret_key', { expiresIn: '1h' });
};

module.exports = { verifyToken, isCompany, isUser, generateToken };
