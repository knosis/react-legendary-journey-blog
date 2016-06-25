var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Greetings Human, I am web browser render logic.  Count your days!');
});

module.exports = router;