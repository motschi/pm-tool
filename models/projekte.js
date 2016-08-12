var mongoose = require('mongoose');

var projekteSchema = mongoose.Schema({
    name: String,
    beschreibung: String,
    letzteAenderung: { type: Date, default: Date.now },
    schritte: [
        {
            idGantt: String,
            name: String,
            resource: String,
            startDatum: { type: Date, default: null },
            endDatum: { type: Date, default: null },
            dauer: { type: Number, default: null },
            statusInProzent: Number,
            abhaengigkeitIdGantt: { type: String, default: "" }
        }
    ]
});

var Projekte = mongoose.model('Projekte', projekteSchema);

Projekte.find(function (err, projekte) {
    if (projekte.length) {
        console.log("Daten bereits vorhanden");
        return;
    }

    /* nur wenn Projekte leer*/
    new Projekte({
        name: "Papierflieger",
        beschreibung: "Es soll ein Papierflieger entwickelt werden.",
        schritte: [
            {
                idGantt: "1",
                name: "Schritt 1",
                resource: "Resource1",
                dauer: 12,
                statusInProzent: 42
            },
            {
                idGantt: "2",
                name: "Schritt 2",
                resource: "Resource1",
                dauer: 5,
                statusInProzent: 0,
                abhaengigkeitIdGantt: "1"
            }
        ]

    }).save();

    new Projekte({
        name: "Beispielprojekt",
        beschreibung: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        schritte: [
            {
                idGantt: "21",
                name: "Schritt 21",
                resource: "Resource1",
                dauer: 12,
                statusInProzent: 42
            },
            {
                idGantt: "22",
                name: "Schritt 22",
                resource: "Resource2",
                dauer: 5,
                statusInProzent: 0,
                abhaengigkeitIdGantt: "21"
            }
        ]

    }).save();


    console.log("Projekte hinzugefügt");

});

module.exports = Projekte;