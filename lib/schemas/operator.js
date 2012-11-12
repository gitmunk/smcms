var mongoose = require('mongoose'),
   //bcrypt = require ('bcrypt'),
   Schema = mongoose.Schema
   , ObjectId = Schema.Types.ObjectId
    
    
var OperatorSchema = new Schema({
   name       : String
   , client   : { type: ObjectId, ref: 'Client' }
   , role     : { type: String }
   , email    : { type: String, unique: true }
   , salt     : { type: String, required: true }
   , hash     : { type: String, required: true }
});

OperatorSchema
    .virtual('password')
    .get(function () {
        return this._password; 
    })
    .set(function (password) {
        this._password = password;
        //var salt = this.salt = bcrypt.genSaltSync(10);
        //this.hash = bcrypt.hashSync(password, salt);
        this.salt = '.';
        this.hash = password;
    });
    
OperatorSchema.methods.verifyPassword = function(password, callback) {
    return callback(null, (this.hash == password) );
    return bcrypt.compare(password, this.hash, callback);
}

OperatorSchema.statics.authenticate = function(email, password, callback) {
    this.findOne({email: email}, function (err, user) {
        if(err)
            return  callback(err);
        
        if(!user)
            return callback(null, false);
        
        return user.verifyPassword (password, function(err, passwordCorrect) {
            if(err)
                return (callback(err));
            if(!passwordCorrect)
                return callback(null, false);
            return callback (null, user);
        });
    });
}

module.exports = mongoose.model('Operator', OperatorSchema);