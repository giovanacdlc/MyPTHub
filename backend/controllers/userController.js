const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const { PT, Patient } = require('../models/userModels')


//@desc Register new user
//@route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
    const { name, username, password } = req.body;
    if (!name || !username || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //check if user exists
    const userExists = await PT.findOne({username});
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create User
    const user = await PT.create({
        name, 
        username,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id, 
            name: user.name, 
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc Authenticate user
//@route POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    //Check for username
    const user = await PT.findOne({username})

    //check password
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id, 
            name: user.name, 
            username: user.username,
            token: generateToken(user._id)
        })
    } else {
        res.status(400); 
        throw new Error('Invalid credentials')
    }
})


//@desc Get user data
//@route GET /api/users/userInfo
//@access Private
const getUserData = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await PT.findById(id);
    if (!user) {
        return res.status(404).json({error: 'User not found'})
    }
    res.status(200).json({name: user.name}) 
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        //expires in 30 days
        expiresIn: '30d', 
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUserData
}