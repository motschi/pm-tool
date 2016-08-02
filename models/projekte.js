var mongoose = require('mongoose');

var nutzerSchema = mongoose.Schema({
    name: String,
    email: String,
    passwort: String,
    firma: String,
});

var projekteSchema = mongoose.Schema({
    name: String,
    beschreibung: String,
    letzteAenderung: Date,
    schritte: Array,
});

var schritteSchema = mongoose.Schema({
    idGantt: String,
    resource: String,
    startDatum: Date,
    endDatum: Date,
    dauer: Number,
    statusInProzent: Number,
    abhaengigkeitidGantt: String,
    reihenfolge: Number,
});


var Projekte = mongoose.model('Projekte', projekteSchema);
var Nutzer = mongoose.model('Nutzer', nutzerSchema);
var Schritte = mongoose.model('Schritte', schritteSchema);

Projekte.find(function (err, projekte) {
    if (projekte.length) {
        console.log("Daten bereits vorhanden");
        return;
    }

    /* nur wenn Projekte leer*/
    new Projekte({
        name: "Papierflieger",
        beschreibung: "Es soll ein Papierflieger entwickelt werden."

    }).save();

    new Projekte({
        name: "Beispielprojekt",
        beschreibung: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."

    }).save();


    console.log("Projekte hinzugefügt");

});

module.exports = Projekte;