const messageController = {};
const asyncHandler = require('express-async-handler') //installed npm (express-async-handler) so no need to do try/catch
// const Patient = require('../models/userModels');
const Message = require('../models/messageModel');



//                                          MESSAGES TO BE STORED
//@desc  Get user
//@route GET /main
//@access Private
messageController.getMessage = asyncHandler(async (req, res, next) => {
    const message = await Message.find({user: req.user.id});
    res.status(200).json(message);
})
//@desc  Set user
//@route POST /main
//@access Private
messageController.createMessage = asyncHandler(async (req, res, next) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    const message = await Message.create({
        text: req.body.text, 
        user: req.user.id
    })
    res.status(200).json(message)
})
//@desc  Update user
//@route PUT /main/:id
//@access Private
messageController.updateMessage = asyncHandler(async (req, res, next) => {
    const message = await Message.findById(req.params.id);
    if (!message) {
        res.status(400)
        throw new Error ('Message not found')
    }
    const user = await PT.findById(req.user.id)
    //check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //make sure the logged in user matches the goal user
    if (message.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedMessage)
})
//@desc  Delete user
//@route DELETE /main:id
//@access Private
messageController.deleteMessage = asyncHandler(async (req, res, next) => {
    const message = await Message.findById(req.params.id);
    if (!message) {
        res.status(400)
        throw new Error ('Message not found')
    }
    const user = await PT.findById(req.user.id)
    //check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }
    //make sure the logged in user matches the goal user
    if (message.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id})
})

//                                      USER INFORMATION FOR LATER
// //@desc  Get user
// //@route GET /main
// //@access Private
// userController.getUser = asyncHandler(async (req, res, next) => {
//     const message = await Message.find();
//     res.status(200).json(message);
// })
// //@desc  Set user
// //@route POST /main
// //@access Private
// userController.setUser = asyncHandler(async (req, res, next) => {
//     if (!req.body.fullName) {
//         res.status(400)
//         throw new Error('Please add text field')
//     }
//     const userPatient = await Patient.create({
//         fullName: req.body.fullName
//     })
//     res.status(200).json(userPatient)
// })
// //@desc  Update user
// //@route PUT /main/:id
// //@access Private
// userController.updateUser = asyncHandler(async (req, res, next) => {
//     res.status(200).json({ message: `Updated profile ${req.params.id}`})
// })
// //@desc  Delete user
// //@route DELETE /main:id
// //@access Private
// userController.deleteUser = asyncHandler(async (req, res, next) => {
//     res.status(200).json({ message: `Deleted profile ${req.params.id}`})
// })

module.exports = messageController;
// const getUser = (req, res) => {
//     res.status(200).json({ message: 'Welcome User!'})
// }

// module.exports = {
//     getUser,
// }





/*
                    **** WHAT I WILL BE DOING*********
const models = require('../models/userModels');
const userController = {};

userController.getUsers = (req, res, next) => {
    models.Patient.find({}, (err, patient) => {
        res.locals.patient = patient;
        console.log(people);
    });
    next();
}

module.exports = userController;
                        *********************
*/





