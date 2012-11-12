var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;
    
    
var ClientSchema = new Schema({
    name    : String
});

module.exports = mongoose.model('Client', ClientSchema);