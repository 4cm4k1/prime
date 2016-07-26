var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: String,
    qty: Number
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
