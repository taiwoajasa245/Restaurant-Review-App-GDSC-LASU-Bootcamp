const express = require('express');
const router = express.Router();
const { updateUser, findUsers, findUserById, findUserByUsername,  } = require('../controllers/userControl');

router.put('/', updateUser);
router.get('/', findUsers);
router.get('/:id', findUserById);
router.get('/username/:username', findUserByUsername);
// router.get('/:userId/dashboard',  userDash);



module.exports = router;