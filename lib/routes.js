var passport = require('passport')
    , index = require('../routes/index')
    , venues = require('../routes/venues')
    , regions = require('../routes/regions')
    , products = require('../routes/products')
    , campaigns = require('../routes/campaigns')
    , dataProvider = require('./dataProvider.js');

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated())
        return next();
    return res.redirect('/login');
}

//IMPORTANT!!! THE PATH SHOULD BE CORRECT IN ORDER TO SERVE THE STATIC FILES!!!
var staticMiddleware = require('express').static(__dirname+"/../restricted");

module.exports = function(app) {
    app.get('/', ensureAuthenticated, index.cms);
    app.get('/login', index.login);
    app.post('/login', passport.authenticate('local', 
        { 
            successRedirect: '/', 
            failureRedirect: '/login'
        })
    );
    
    app.get('/files/*', ensureAuthenticated, function (req, res, next) {
        req.url = req.url.replace(/^\/files/, '');
        staticMiddleware(req, res, next);
    });
    
    
    //RESTful api for venues
    app.get('/api/venues', ensureAuthenticated, venues.read);
    app.get('/api/venues/:id', ensureAuthenticated, venues.readOne);
    app.post('/api/venues/:id', ensureAuthenticated, venues.create);
    app.put('/api/venues/:id', ensureAuthenticated, venues.update);
    app.delete('/api/venues/:id', ensureAuthenticated, venues.delete);
    
    //RESTful api for regions
    app.get('/api/regions', ensureAuthenticated, regions.read);
    app.get('/api/regions/:id', ensureAuthenticated, regions.readOne);
    app.post('/api/regions/:id', ensureAuthenticated, regions.create);
    app.put('/api/regions/:id', ensureAuthenticated, regions.update);
    app.delete('/api/regions/:id', ensureAuthenticated, regions.delete);
    
    //RESTful api for products
    app.get('/api/products', ensureAuthenticated, products.read);
    app.get('/api/products/:id', ensureAuthenticated, products.readOne);
    app.post('/api/products/:id', ensureAuthenticated, products.create);
    app.put('/api/products/:id', ensureAuthenticated, products.update);
    app.delete('/api/products/:id', ensureAuthenticated, products.delete);
    
    //RESTful api for products
    app.get('/api/campaigns', ensureAuthenticated, campaigns.read);
    app.get('/api/campaigns/:id', ensureAuthenticated, campaigns.readOne);
    app.post('/api/campaigns/:id', ensureAuthenticated, campaigns.create);
    app.put('/api/campaigns/:id', ensureAuthenticated, campaigns.update);
    app.delete('/api/campaigns/:id', ensureAuthenticated, campaigns.delete);
}