var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId
    
    
var VenueSchema = new Schema({
    name            : String
    , qrEntrance    : String
    , qrExit        : String
    , coordinates   : {
        lat         : Number
        , lon       : Number
    }
    , client        : { type: ObjectId, ref: 'Client' }
});


module.exports = mongoose.model('Venue', VenueSchema);