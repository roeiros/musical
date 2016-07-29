var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    name  : String,
    email : { type: String, unique: true },
    admin : Boolean
}));

