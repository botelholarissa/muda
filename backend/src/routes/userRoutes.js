const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/create', controller.addUser);


module.exports = router;