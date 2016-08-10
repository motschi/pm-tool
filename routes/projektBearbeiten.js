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

/* GET projekt page.
router.get('/', function(req, res, next) {
    controller.getProjekte(function(results) {
        if (!results) results = [];
        res.render('projektBearbeiten', {
            projekte: results,
            title: "Projekte",


        });
    });
});
 */
module.exports = router;