var db = require('../lib/dataProvider').Venues;

module.exports = {
    
    read: function (req, res, next ) {
        console.log('find all');
        
        db.findAll(req.user.client, function(err, docs){
            if(err)
                throw(err);
            res.json(docs);
        });
    },
    
    readOne: function (req, res, next ) {
        db.findById(req.id, function(err, doc){
            if(err)
                throw(err);
            
            if(doc && doc.client == req.user.client)
                res.json(doc);
            else
                res.json({});
        });
    },
    
    create: function (req, res, next ) {
        
        
    },
    
    update: function (req, res, next ) {
        
        
    },
    
    delete: function (req, res, next ) {
        
        
    }
}