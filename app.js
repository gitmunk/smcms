var express = require('express')
    , corser = require('corser')
    , passport = require('passport')
    , dataProvider = require('./lib/dataProvider')
    , configs = require('./config.json')
    , expressWinston = require('express-winston')
    , winston = require('winston')
    , mongoStore = require('connect-mongodb')
    , Db = require('mongodb').Db
    , Server = require('mongodb').Server
    , server_config = new Server(configs.mongoHost, configs.mongoPort, {auto_reconnect: true, native_parser: true})
    , db = new Db(configs.mongoDb, server_config, {safe:false})
    , mongo_store = new mongoStore({db: db, reapInterval: 3000}); // check every 3 seconds
    

var app = global.app = module.exports = express();
dataProvider.startUp(configs.mongoSession);

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(corser.create());
    /*
    // express-winston logger makes sense BEFORE the router.
    app.use(expressWinston.logger({
        transports: [
            new winston.transports.Console({
                json: true,
                colorize: true
            })
        ]
    }));*/
    app.use(express.session({ 
      store: mongo_store, ///TODO: REPLACE IT WITH CONNECT-REDIS https://github.com/visionmedia/connect-redis
      secret: 'ShopMunk jump'
    }, function() {
        app.use(app.router);
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(__dirname + '/public'));
});

require('./lib/routes')(app);

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


app.listen(configs.instancePort);
console.log('listening to port:', configs.instancePort);