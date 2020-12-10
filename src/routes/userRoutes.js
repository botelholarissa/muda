const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const testeController = require('../controllers/gardenControllers')

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/create', controller.addUser);
router.put('/update', controller.updateUser);
router.delete('/delete', controller.deleteUser);

router.get('/teste/:id', testeController.getTestById);


module.exports = router;