const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const patientController = require('./../controllers/patientsController');


router.post('/', patientController.createPatient);


// Protect all routes after this middleware
router.use(authController.protect);


router
    .route('/')
    .get(patientController.getPatients);


router
    .route('/:id/:date')
    .get(patientController.getPatientsByDate);
    
router
    .route('/:id')
    .get(patientController.getPatient)
    .patch(patientController.updatePatient)
    .delete(patientController.deletePatient);

module.exports = router;