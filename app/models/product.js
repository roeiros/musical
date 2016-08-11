var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

module.exports = mongoose.model('Product', new Schema({
    name  : String,
    price : Number,
    stock : Number,
    categories : [String]
}));



