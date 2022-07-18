import asyncHandler from "express-async-handler";
import User from '../models/userModel.js';

const getAllUsers = asyncHandler(async (req, res) => {
    const user = await User.find();

    if (!user) {
        res.status(404);
        throw new Error('UserID not found');
    }

    res.status(200).json(user);
});

const registerUser = asyncHandler(async (req, res) => {
    const { username, password, email, role } = req.body;

    const validate = (...params) => params.every(param => !!param);

    if (!validate(username, password, email, role)) {
        res.status(400);
        throw new Error('Malformed request');
    }
    const user = await User.create({
        username,
        password,
        email,
        role,
    });

    res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
    const options = { new: true };
    const { body, params } = req;
    const { id } = params;
    const user = await User.findById(id);

    if (!user) {
        res.status(404);
        throw new Error('UserID not found');
    }
    const updatedUser = await User.findByIdAndUpdate(
        id, body, options
    );
    res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404);
        throw new Error('UserID not found');
    }
    await user.remove();
    res.status(200).json(`Deleted user: ${user.username}`);
});

const loginUser = asyncHandler(async (req, res) => {

});

export {
    getAllUsers,
    registerUser,
    updateUser,
    deleteUser,
    loginUser,
};