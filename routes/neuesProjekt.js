/* ++Startseite */

var express = require('express');
var router = express.Router();
controller = require('../controllers/projekte.js');

/* GET home page.*/
router.get('/', function(req, res, next) {
  controller.getProjekte(function(results) {
    if (!results) results = [];
    res.render('neuesProjekt', {
      title: "Neues Projekt anlegen",


    });
  });
});

// POST ADD PROJEKT
router.post('/addProjekt', function (req, res) {
  var projektname = req.body.projektname;
  var projektbeschreibung = req.body.projektbeschreibung;
  var schritte = Array.prototype.slice.call(req.body.schritte);


  controller.addProjekt(projektname, projektbeschreibung, schritte, function () {
    res.redirect('/');
  });

});


module.exports = router;
