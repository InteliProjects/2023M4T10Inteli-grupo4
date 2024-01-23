const express = require('express');
const router = express.Router();
const allocationController = require('../controllers/allocationController');

router.get('/allocations', allocationController.getAllAllocations);
router.get('/allocations/:id', allocationController.getAllocationById);
router.post('/allocations', allocationController.createAllocation);
router.put('/allocations/:id', allocationController.updateAllocation);
router.get('/allocations/item/:item_id', allocationController.getAllAllocationsForItem);
router.get('/allocations/local/:local_id', allocationController.getAllAllocationsForLocal);

module.exports = router;
