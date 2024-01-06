const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js')

router.get('/getusers', userController.getUsers);
router.post('/adduser', userController.addUser);
router.patch('/updateuser/:id', userController.updateUser);
router.delete('/deleteuser/:id', userController.deleteUser);

module.exports = router;