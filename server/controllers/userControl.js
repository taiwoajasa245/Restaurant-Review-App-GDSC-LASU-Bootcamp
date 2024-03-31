const User = require('../models/User');

// Update User Details
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, { name, email }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User details updated successfully', user: updatedUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Find Users
const findUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Find User by ID
const findUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Find User by Username
const findUserByUsername = async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username }).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


// // Dashboard route with user ID parameter
// const userDash = async (req, res) => {
//   // Check if the user ID in the route matches the one in the token
//   console.log(req.user);
//   if (req.user !== req.params.userId) {
//     return res.status(401).json({ message: 'Unauthorized access to dashboard' });
//   }
//   // Proceed with serving the dashboard
//   res.json({ message: 'Welcome to the dashboard' });

// };




module.exports = { updateUser, findUsers, findUserById, findUserByUsername };