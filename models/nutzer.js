var mongoose = require('mongoose');

var nutzerSchema = mongoose.Schema({
    name: String,
    email: String,
    passwort: String,
    firma: String
});

var Nutzer = mongoose.model('Nutzer', nutzerSchema);

module.exports = Nutzer;