const moment = require('moment')
const Slot = require('../models/slotModal');
const base = require('./baseController');
const AppError = require('../utils/appError');

exports.deleteMe = async (req, res, next) => {
    try {
        await Slot.findByIdAndUpdate(req.user.id, {
            active: false
        });

        res.status(204).json({
            status: 'success',
            data: null
        });


    } catch (error) {
        next(error);
    }
};


exports.getSlotsByDate = async (req, res, next) => {
    try {
        console.log(req.params.date)
        const slot = await Slot.where('id', req.params.id)
            .where('slotDate', req.params.date)

        if (!slot) {
            return next(new AppError(404, 'fail', 'No slots found with that id'), req, res, next);
        }

        res.status(200).json({
            status: 'success',
            data: slot
        });
    } catch (error) {
        next(error);
    }
};

exports.createSlot = base.createOne(Slot);
exports.getAllSlots = base.getAll(Slot);
exports.getSlot = base.getOne(Slot);
exports.updateSlot = base.updateOne(Slot);
exports.deleteSlot = base.deleteOne(Slot);
