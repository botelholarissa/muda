const express = require('express');
const router = express.Router();
const controller = require('../controllers/plantsController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/create', controller.addPlant);
//router.put('/update', controller.updatePlant);
//router.delete('/delete', controller.deletePlant);


module.exports = router;