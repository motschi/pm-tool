/**
 * Created by Motsch on 03.08.2016.
 */
var express = require('express');
var router = express.Router();
controller = require('../controllers/projekte.js');

router.get('/:id', function(req, res, next) {
    var id = req.params.id.trim();
    controller.findProjektById(id,function(results) {
        if (!results) results = [];
        res.render('projekt', {
            projekt: results,
            title: "Projekt ",


        });
    });
});

/* GET projekt page. */
router.get('/', function(req, res, next) {
    controller.getProjekte(function(results) {
        if (!results) results = [];
        res.render('projekt', {
            projekte: results,
            title: "Projekte",


        });
    });
});

module.exports = router;