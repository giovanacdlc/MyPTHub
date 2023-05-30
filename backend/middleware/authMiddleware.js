const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const { PT, Patient } = require('../models/userModels')

const protect = asyncHandler(async(req, res, next) => {
  let token;

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
        //Get token from header
        token = req.headers.authorization.split(' ') [1];

        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //get user from token - finding the user by the id that is in the token, password not hashed here
        req.user = await PT.findById(decoded.id).select('-password');
        next();
    }
    catch (err) {
        console.log(err)
        res.status(401)
        throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = {protect}