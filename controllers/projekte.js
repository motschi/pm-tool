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
}

module.exports = ProjekteController;