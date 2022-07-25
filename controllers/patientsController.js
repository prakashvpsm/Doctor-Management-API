const moment = require('moment')
const Patient = require('../models/patientModal');
const Slot = require('../models/slotModal');
const base = require('./baseController');


// exports.createPatient = base.createOne(Patient);



exports.createPatient = async (req, res, next) => {
    try {
        const doc = await Patient.create(req.body);

        if(doc){
            const updateSlot = await Slot.update({_id : doc.slotId}, {status : 'booked'})

            if(updateSlot){
                res.status(201).json({
                    status: 'success',
                    data: {
                        doc
                    }
                });
            }else{
                next('cant able to update')
            }
        }else{
            next('cant able to update')
        }

    } catch (error) {
        next(error);
    }
};


exports.getPatientsByDate = async (req, res, next) => {
    try {
        console.log(req.params.date)
        const patients = await Patient.where('doctorID', req.params.id)
            .where('date', req.params.date)

        if (!patients) {
            return next(new AppError(404, 'fail', 'No Patients with that id'), req, res, next);
        }

        res.status(200).json({
            status: 'success',
            data: patients
        });
    } catch (error) {
        next(error);
    }
};

exports.getPatients = base.getAll(Patient);
exports.getPatient = base.getOne(Patient);
exports.updatePatient = base.updateOne(Patient);
exports.deletePatient = base.deleteOne(Patient);
