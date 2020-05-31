const pick = require('lodash/pick')
const User = require('../../models/User')

// localhost:3030/users/register
module.exports.register =  function(req, res){
    const body = pick(req.body, ['username', 'email', 'password', 'mobile'])
    const user = new User(body)
    user.save()
        .then(function(user){
            res.send(pick(user,['_id', 'username', 'email','mobile']))
        }) 
        .catch(function(err){
            res.send(err)
        }) 
}

// localhost:3030/users/login 
module.exports.login= function(req, res){
    const body = req.body 
    User.findByCredentials(body.email, body.password)
        .then(function(user){
           return user.generateToken()
        })
        .then(function(token){
            res.send({'x-auth': token})
        })
        .catch(function(err){
            res.send(err)
        })

}

// localhost:3030/users/account 
module.exports.account = function(req, res){
    const { user } = req 
    res.send(pick(user,['_id', 'username', 'email', 'role', 'address', 'mobile']))
}


// localhost:3030/users/logout
module.exports.logout = function(req, res){
    const { user, token } = req 
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token }}})
        .then(function(){
            res.send({notice: 'successfully logged out'})
        })
        .catch(function(err){
            res.send(err)
        })
}

module.exports.update_user = function(req,res){
    const body = pick(req.body,['mobile', 'address'])
    const user = req.user
    User.findByIdAndUpdate({_id: user._id},body,{
        new: true,
        runValidators: true
    })
    .then(user=>{
        res.json(pick(user,['_id', 'username', 'email', 'role', 'address', 'mobile']))
    })
    .catch(err=>{
        res.json(err)
    })
        
}

module.exports.add_user = function(req,res){
    const body = pick(req.body, ['username', 'email', 'password', 'role'])
    const user = new User(body)
    user.save()
        .then(user=>{
            res.json(user)
        })
        .catch(err=>{
            res.json(err)
        })
}
