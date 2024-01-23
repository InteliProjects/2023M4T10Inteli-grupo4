const express = require('express');
const router = express.Router();
const localController = require('../controllers/localController');

router.get('/locals', localController.getAllLocals);
router.get('/locals/:id', localController.getLocalById);
router.post('/locals', localController.createLocal);
router.put('/locals/:id', localController.updateLocal);

module.exports = router;

