const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

// Generate JWT token
const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;

};

const generateAndSaveToken = async (tokenString, userId) => {
  try {
    await Token.create({ token: tokenString, userId });
  } catch (error) {
    throw new Error('Error generating and saving token');
  }
};

// Validate JWT token
const validateToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, validateToken, generateAndSaveToken };