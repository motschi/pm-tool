var mongoose = require('mongoose');

var projekteSchema = mongoose.Schema({
    name: String,
});
var Projekte = mongoose.model('Projekte', projekteSchema);

Projekte.find(function (err, projekte) {
    if (projekte.length) {
        console.log("Daten bereits vorhanden");
        return;
    }
    new Projekte({
        name: "Bauer",



    }).save();

    new Projekte({
        name: "Döner",


    }).save();


    console.log("Projekte hinzugefügt");
});

module.exports = Projekte;