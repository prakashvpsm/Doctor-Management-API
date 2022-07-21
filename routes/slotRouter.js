const express = require('express');
const router = express.Router();
const slotController = require('../controllers/slotController');
const authController = require('./../controllers/authController');


router.use(authController.protect);


// Only admin have permission to access for the below APIs 
router.use(authController.restrictTo('admin'));

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