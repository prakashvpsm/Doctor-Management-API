const Slot = require('../models/slotModal');
const base = require('./baseController');

const deleteMe = async (req, res, next) => {
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

const createSlot = base.createOne(Slot);
const getAllSlots = base.getAll(Slot);
const getSlot = base.getOne(Slot);
const updateSlot = base.updateOne(Slot);
const deleteSlot = base.deleteOne(Slot);



module.exports = {
    deleteMe,
    createSlot,
    getAllSlots,
    getSlot,
    updateSlot,
    deleteSlot
}