var express = require('express');
var request = require('request');
var router = express.Router();

const SERVICE = 'http://private-a4710f-investimentssimulator.apiary-mock.com/available-investments';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/available-investments', function(req, res, next) {
  //request.get(SERVICE, function(error, response, body) {
  //  var json = JSON.parse(body);
  //  res.json(json);
  //});

  res.json(require('../mock.json'));
})
module.exports = router;
