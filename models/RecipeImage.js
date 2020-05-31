const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImgSchema = new Schema({
    img: { data: Buffer, contentType: String}
}, {
    timestamps: true
});

// const ImgSchema = new Schema({
//     imageName: {
//         name: String,
//         default: 'none',
//         required: true
//     },
//     imageData: {
//         type: String,
//         required: true
//     }
// })

module.exports = mongoose.model('Img', ImgSchema);