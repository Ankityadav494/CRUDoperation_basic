const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
 const userSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    image_url:String

});
module.exports = mongoose.model('User',userSchema);