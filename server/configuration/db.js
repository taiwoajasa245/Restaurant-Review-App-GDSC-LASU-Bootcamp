const mongoose = require('mongoose');
require('dotenv').config();
const DB_URI = process.env.DB_URI; 

const connectDB = async () => {


  try {
    await mongoose.connect(DB_URI);
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;