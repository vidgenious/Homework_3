//Author: Maxwell McAtee
//Last Updated: 3/1/2021
//orders route for sending json object
//Professor: Nuxoll

var express = require('express');
var router = express.Router();

var orders = [
    {topping:"cherry", quantity:12},
    {topping:"plain", quantity:5},
    {topping:"chocolate", quantity:37}
];

/* GET orders */
router.get('/', function(req, res, next) {
  res.json(orders);
});
/* POST orders*/
router.post('/', function(req, res, next) {
  res.json(orders);
});

module.exports = router;
