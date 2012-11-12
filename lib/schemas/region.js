var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId
    
    
var RegionSchema = new Schema({
    name        : String
    , venues    : [{type: ObjectId, ref: 'Venue'}]
    , client    : { type: ObjectId, ref: 'Client' }
});


module.exports = mongoose.model('Region', RegionSchema);