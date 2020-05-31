const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dietSchema = new Schema({
    kind_of_diet:{
        type: String,
        //enum: ['ketos', 'vegan'],
        required: true,
        unique: true
    },
    Preference:{
        type: String,
        enum: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Eggetarian',''],
        //required: true
    },
    description:{
        type: String,
        required: true
    }
})

const DietPlan = mongoose.model('DietPlan', dietSchema)
module.exports= DietPlan