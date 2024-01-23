const express = require('express');
const router = express.Router();
const mechanicController = require('../controllers/mechanicController');

router.get('/mechanics', mechanicController.getAllMechanics);
router.get('/mechanics/:id', mechanicController.getMechanicById);
router.post('/mechanics', mechanicController.createMechanic);
router.put('/mechanics/:id', mechanicController.updateMechanic);

module.exports = router;
