const express = require('express');
const router = express.Router();
const slotController = require('../controllers/slotController');
const authController = require('./../controllers/authController');


router
    .route('/:id/:date')
    .get(slotController.getSlotsByDate);

router.use(authController.protect);

router
    .route('/')
    .get(slotController.getAllSlots)
    .post(slotController.createSlot)

router
    .route('/:id')
    .get(slotController.getSlot)
    .patch(slotController.updateSlot)
    .delete(slotController.deleteSlot);


module.exports = router;