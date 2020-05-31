const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    description:{
        type:String
    },
    ingredients:{
        type: String,
        required: true
    },
    calories: {
        type: String,
        required: true
    },
    serving: {
        type: String
    },
    type:{
        type: String,
        enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Eggetarian'],
        required: true
    },
    steps:{
        type: String
    },
    diet:{
        type: Schema.Types.ObjectId,
        ref: 'DietPlan',
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe