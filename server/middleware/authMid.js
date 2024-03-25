const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  // Check if the token starts with "Bearer "
  if (!token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Invalid token format, authorization denied' });
  }

  const tokenWithoutBearer = token.split(' ')[1]; // Remove "Bearer " from the token

  try {
    const decoded = jwt.verify(tokenWithoutBearer, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('Token verification error:', err.message);
    return res.status(401).json({ message: 'Invalid token, authorization denied' });
  }
};

module.exports = authMiddleware;
