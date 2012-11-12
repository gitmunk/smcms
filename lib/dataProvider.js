var mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var Clients = require('./schemas/client')
    , Operator = require('./schemas/operator')
    , Venues = require('./schemas/venue')
    , Regions = require('./schemas/region')
    , Products = require('./schemas/product')
    , Campaigns = require('./schemas/campaign');

passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done) {
        Operator.authenticate(email, password, done)   
    }
));

// serialize user on login
passport.serializeUser(function(user, done) {
    //console.log('User logged in', user);
    done(null, user.id);
});

// deserialize user on logout
passport.deserializeUser(function(id, done) {
    //console.log('deserialize', id);
    //return done(null,id)
    Operator.findById(id, function (err, user) { 
        //console.log(user);
        done(err, user);
    });
});

module.exports = {
    
    startUp : function (db) {
        mongoose.connect(db);
        mongoose.connection.on('open', function() {
            console.log('we have a connection');
            /*var user = new Operator ({
                name: 'Kamen Kanchev',
                email: 'gubarez',
                password: 'parola'
            });
            user.save(console.log);*/
        });
        this.db = mongoose.connections[0].db;
    },
    
    Venues: {
        
        findAll: function (clientId, callback) {
                Venues.find({client: clientId}, callback);
        }
        , findById: function (id, callback) {
                Venues.findById(id, callback);
        }
        , create: function (data, callback) {
                var venue = new Venues(data);
                venue.save(callback);
        }
        , update: function(id, data, callback) {
                
        }
        , delete: function(id, callback) {
                
        }
    }
    
    , Regions: {
        
        
    }
    
    , Products: {
        
        
    }
    
    , Campaigns: {
        
        
    }
}