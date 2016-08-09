var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    passwort: String,
    firma: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;