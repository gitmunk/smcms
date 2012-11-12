var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId
    
var ProductSchema = new Schema({
    name            : String
    , logo          : String
    , description   : String
    , barcodes      : [String]
    , brand         : String
    , category      : String
    , subCategory   : String
    , active        : Boolean
    , client        : { type: ObjectId, ref: 'Client' }
});


module.exports = mongoose.model('Product', ProductSchema);