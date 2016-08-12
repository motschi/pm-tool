/**
 * Created by Motsch on 03.08.2016.
 */
var express = require('express');
var router = express.Router();
controller = require('../controllers/projekte.js');
var moment = require('moment')

router.get('/:id', function(req, res, next) {
    var id = req.params.id.trim();
    controller.findProjektById(id,function(result) {

        if (!result) result = [];
        res.render('projekt', {
            projekt: result,
            title: "Projekt ",


        });
    });
});

// POST REMOVE PROJKET
router.post('/projektLoeschen', function (req, res) {
    var id = req.body._id;

    controller.removeProjekt(id, function () {
        res.redirect('/');
    });


});

module.exports = router;