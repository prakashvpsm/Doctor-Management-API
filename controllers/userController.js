const User = require('../models/userModel');
const base = require('./baseController');

const deleteMe = async (req, res, next) => {
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

const getAllUsers = base.getAll(User);
const getUser = base.getOne(User);

// Don't update password on this 
const updateUser = base.updateOne(User);
const deleteUser = base.deleteOne(User);

module.exports = {
    deleteMe,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}