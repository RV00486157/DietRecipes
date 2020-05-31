const express = require('express')
const DietPlan = require('../models/DietPlan')

module.exports.list = (req,res) =>{
    DietPlan.find()
        .then(diets=>{
            res.send(diets)
        })
        .catch(err=>{
            res.send(err)
        })
} 

module.exports.add = (req,res) =>{
    const diet = new DietPlan(req.body)
    diet.save()
        .then(diet=>{
            res.send(diet)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.remove = (req,res) =>{
    const id = req.params.id
    DietPlan.findByIdAndDelete(id)
        .then(diet=>{
            res.send(diet)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.edit = (req,res) =>{
    const id = req.params.id
    const body = req.body
    DietPlan.findByIdAndUpdate(id, body,{
        new: true,
        runValidators: true
    })
        .then(diet=>{
            res.send(diet)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.show = (req,res) =>{
    const id = req.params.id
    DietPlan.findById(id)
        .then(diet=>{
            res.send(diet)
        })
        .catch(err=>{
            res.send(err)
        })
}