const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/create', controller.addUser);
router.put('/update', controller.updateUser);


module.exports = router;