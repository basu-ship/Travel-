const jwt = require('jsonwebtoken')
const User = require('../models/User');


const authMiddleware = async(req, res, next)=>{
    try{
        let token;

        // retrieving token from header
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token){
            return res.status(401).json({message: 'Not authorized, no token'});
        }

        // verifying token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // get user DB without password
        const user = await User.findById(decoded.id).select('-password');

        // attaching user to request object
        req.user = user;

        // proceed to next middleware
        next();
    }catch(error){
        res.status(401).json({message: 'Unauthorized: Invalid token'});
    }
}

module.exports = authMiddleware;