// Generate random verification token
const generateVerificationToken = () => {
    return Math.floor(100000 + Math.random() * 900000); // 6-digit random number
  };
  
  module.exports = generateVerificationToken;
  