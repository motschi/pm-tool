/**
 * Created by Motsch on 03.08.2016.
 */
var express = require('express');
var router = express.Router();
controller = require('../controllers/projekte.js');

router.get('/:id', function(req, res, next) {
    var id = req.params.id.trim();
    controller.findProjektById(id,function(result) {
        if (!result) result = [];
        res.render('projektBearbeiten', {
            projekt: result,
            title: "Projekt bearbeiten",

        });
    });
});

// POST UPDATE PROJEKT
router.post('/updateProjekt', function (req, res) {
    var projektname = req.body.projektname;
    var projektbeschreibung = req.body.projektbeschreibung;
    var _id = req.body._id;
    var schritte = Array.prototype.slice.call(req.body.schritte);


    controller.updateProjekt(_id, projektname, projektbeschreibung, schritte, function () {
        res.redirect('/projekt/'+_id );
    });

});

module.exports = router;