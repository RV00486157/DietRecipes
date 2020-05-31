const Image = require('../models/RecipeImage')
const fs= require('fs')
const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination:"../public/uploads",
    filename: function(req,file, cb){
        cb(null, "IMAGE-" + Date.now()+ path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1000000
    }
}).single("myImage");

module.exports.uploadImg = (req,res)=>upload(req,res,(err)=>{
    //console.log(req)
    console.log("Request---", Object.keys(req.body))
    if(!err){
        var new_img = new Image;
    new_img.img.data = fs.readFileSync("../public/uploads")
    new_img.img.contentType = 'image/jpeg';
    new_img.save();
    res.json({ message: 'New image added to the db!' });
    }

})