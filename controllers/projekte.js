var projekte = require('../models/projekte');

var ProjekteController = {

    // GET Projekte
    getProjekte: function (callback) {

        projekte.find().sort('_id').exec(function (err, projekte) {
            if (!err) {
                callback(projekte);
            }
            else callback(null);
        });

        //return posts;
    },

    // FIND PROJEKT BY ID
    findProjektById: function (id,callback) {
        projekte.findOne({'_id': id}, function (err, projekt) {
            if (!err) {
                callback(projekt);
            }
        });
    },

    // UPDATE PROJEKT
    updateProjekt: function (id, projektname, beschreibung, schritte, callback) {

        projekte.update({_id: id}, {
            $set: {
                name: projektname,
                beschreibung: beschreibung,
                letzteAenderung: new Date(),
                schritte: schritte,
            }
        }).exec(function () {
            callback();

        });

    },

    // ADD PROJEKT
    addProjekt: function (projektname, beschreibung, schritte, callback) {

        new projekte({

            name: projektname,
            beschreibung: beschreibung,
            letzteAenderung: new Date(),
            schritte: schritte,

        }).save(function (err, status) {
            if(err){
                failed();
            }
            else{
                callback();
            }
        });

    },
    
    // REMOVE PROJEKT
    removeProjekt: function(id, callback) {

        projekte.remove( {_id: id} , function () {
            callback();
        })

    },
    
};

module.exports = ProjekteController;