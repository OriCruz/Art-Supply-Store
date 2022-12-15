const mongoose = require('mongoose');
const itemsSchema = new mongoose.Schema({
    name:{type:String, required: true},
    img:{type:String, required:true},
    price:{type:String, required:true}
});

const Items = mongoose.model('Items', itemsSchema);

 module.exports = Items;