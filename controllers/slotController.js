const Slot = require('../models/slotModal');
const base = require('./baseController');

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

exports.createSlot = base.createOne(Slot);
exports.getAllSlots = base.getAll(Slot);
exports.getSlot = base.getOne(Slot);
exports.updateSlot = base.updateOne(Slot);
exports.deleteSlot = base.deleteOne(Slot);