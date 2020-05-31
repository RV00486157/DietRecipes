const User = require('../models/User')

const authenticateUser = function(req, res, next){
    const token = req.header('x-auth')
    User.findByToken(token)
        .then(function (user) {
            if(user) {
                req.user = user
                req.token = token
                next()
            } else {
                res.status('401').send({ notice: 'token not available'})
            }
            
        })
        .catch(function (err) {
            res.status('401').send(err)
        })
}

const checkAllowAccess = function(req,res,next){
    if(req.user.accessAllowed){
        next()
    }else{
        res.status('403').json({notice:'You are not allowed to login. Contact admin'})
    }
}

const authorizeUser = function(req,res,next){
    if(req.user.role == 'admin'){
        next()
    }else{
        res.status('404').json({notice:'page your looking for does not exist'})
    }
}

module.exports = {
    authenticateUser,
    authorizeUser, 
    checkAllowAccess
}