/* ++Startseite */

var express = require('express');
var router = express.Router();
controller = require('../controllers/projekte.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  controller.getProjekte(function(results) {
    if (!results) results = [];
    global.alleProjekte = results;
    res.render('neuesProjekt', {
      projekte: alleProjekte,
      title: "Projekte",


    });
  });
});

module.exports = router;
