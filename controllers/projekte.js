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
    
};

module.exports = ProjekteController;