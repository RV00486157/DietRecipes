const express = require('express')
const Recipe = require('../models/Recipes') 

module.exports.list = (req,res) =>{
    Recipe.find()
        .then(recipes=>{
            res.send(recipes)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.add = (req,res) =>{
    recipe = new Recipe(req.body)
    recipe.save()
        .then(recipe=>{
            res.send(recipe)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.edit = (req,res) =>{
    const id = req.params.id
    const body = req.body
    Recipe.findByIdAndUpdate(id, body , {
        new: true,
        runValidators: true
    })
        .then(recipe=>{
            res.send(recipe)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.show = (req,res) =>{
    const id = req.params.id
    Recipe.findById(id)
        .then(recipe=>{
            res.send(recipe)
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.remove = (req,res) =>{
    const id = req.params.id
    Recipe.findByIdAndDelete(id)
        .then(recipe=>{
            res.send(recipe)
        })
        .catch(err=>{
            res.send(err)
        })
}