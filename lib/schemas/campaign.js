var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId
    , Mixed  = Schema.Types.Mixed
    
    
var CampaignSchema = new Schema({
    
    name            : String
    , description   : String
    , active        : Boolean
    , startDate     : Date
    , endDate       : Date
    , reward        : {
        
    }
    , regions       : {type: ObjectId, ref: 'Region'}
    , venues        : {type: ObjectId, ref: 'Venue'}
    , rules         : [Mixed]
    , client        : { type: ObjectId, ref: 'Client' }
});

module.exports = mongoose.model('Campaign', CampaignSchema);