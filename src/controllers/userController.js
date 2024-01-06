const UserModel = require('../models/userModel.js')

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ Success: true, Data: users });
    } catch (error) {
        console.error(error)
        res.status(400).json({ Success: false, Error: error });
    }
};

const addUser = async (req, res) => {
    try {
        const users = new UserModel({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            dob: req.body.dob,
            active: req.body.active,
        })
        const newUser = await users.save();
        res.status(201).json({ Success: true, Message: 'New user added successfully', Data: newUser });
    } catch (error) {
        console.error(error)
        res.status(400).json({ Success: false, Error: error });
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const reqData = req.body;
        const options = { new: true };

        const updateUser = await UserModel.findByIdAndUpdate(
            id,
            reqData,
            options,
        )
        res.status(200).json({ Success: true, Message: 'New user updated successfully', Data: updateUser });
    } catch (error) {
        console.error(error)
        res.status(400).json({ Success: false, Error: error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await UserModel.findByIdAndDelete(id);
        res.status(200).json({ Success: true, Message: `User '${deleteUser.firstname}' deleted successfully` });
    } catch (error) {
        console.error(error)
        res.status(400).json({ Success: false, Error: error });
    }
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};