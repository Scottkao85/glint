// User Model
// ----------
//
// The User model defines the structure of all of the User documents created.

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bluebird = require('bluebird');


var UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, 
    index: {
      unique: true
    }
  },

  password: {
    type: String,
    required: true
  }
});

var User = mongoose.model('User', UserSchema);

User.comparePassword = function(candidatePassword, savedPassword, cb) {
  bcrypt.compare(candidatePassword, savedPassword, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

UserSchema.pre('save', function(next){
  var cipher = bluebird.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
    });
});

module.exports = User;
