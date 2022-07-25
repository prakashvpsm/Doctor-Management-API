const User = require('../models/userModel');
const base = require('./baseController');
const AppError = require('../utils/appError');

exports.deleteMe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
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


exports.getDoctors = async (req, res, next) => {
    try {
        const slot = await User.find({}, ['_id', 'name', 'email']).where('role', 'doctor');

        if (!slot) {
            return next(new AppError(404, 'fail', 'No doctors found'), req, res, next);
        }

        res.status(200).json({
            status: 'success',
            data: slot
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllUsers = base.getAll(User);
exports.getUser = base.getOne(User);
exports.createUser = base.createOne(User);


// Don't update password on this 
exports.updateUser = base.updateOne(User);
exports.deleteUser = base.deleteOne(User);