const Order = require('../models/Order')
const pick = require('lodash/pick')

module.exports.add = (req,res) =>{
    const body = req.body
    const order = new Order(body)
    order.user = req.user._id
    order.save()
        .then(order=>{
            res.send(order)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.list = (req,res) =>{
    Order.listOrders(req.user)
        .then((orders)=>{
            res.send(orders)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.show = (req,res) =>{
    const id = req.params.id
    Order.showOrders(req.user, id)
        .then(order=>{
            res.send(order)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.edit = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Order.updateOrders(req.user, id, body) 
        .then(order=>{
            res.send(order)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.remove = (req,res) =>{
    const id = req.params.id
    Order.deleteOrders(req.user, id)
        .then(order=>{
            res.send(order)
        })
        .catch(err=>{
            res.send(err)
        })
}