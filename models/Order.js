const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    // duration:{
    //     type: String
    // },
    recipes:[
        {
            recipe:{
                type:Schema.Types.ObjectId,
                ref: 'Recipe'
            },
            quantity:{
                type: Number
            }

        }
    ]
    ,
    total:{
        type: Number,
        required: true
    },
    order_placed:{
        type: Boolean,
        default: false
    },
    payment_method:{
        type: String,
        default: "cash"
    }
    // diet:{
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'DietPlan'
    // },
    // startDate:{
    //     type: Date
    // },
    // endDate:{
    //     type: Date
    // }
})

orderSchema.statics.listOrders = function(user){
    const Order = this
    if(user.role == 'admin'){
        return Order.find().populate('user', ['username', 'address', 'mobile'])
    }else{
        return Order.find({ user: user._id})
    }
}

orderSchema.statics.updateOrders = function(user, id, body){
    const Order = this
    if(user.role == 'admin'){
        return Order.findByIdAndUpdate(id,body,{
            new: true,
            runValidators: true
        })
    }else{
        return Order.findOneAndUpdate({user:user._id, _id:id }, body ,{
            new: true,
            runValidators: true
        })
    }
}

orderSchema.statics.showOrders = function(user, id){
    const Order = this
    if(user.role == 'admin'){
        return Order.findById(id)
    }else{
        return Order.findOne({user: user._id, _id: id})
    }
}

orderSchema.statics.deleteOrders = function(user, id){
    const Order = this
    if(user.role == 'admin'){
        return Order.findByIdAndDelete(id)
    }else{
        return Order.findOneAndDelete({ user: user._id, _id: id})
    }
}

const Order = mongoose.model('Order', orderSchema)
module.exports = Order