var express = require('express');
var router = express.Router();

const users = [
  {id: 0, username: "wedeycode", url: "wedeycode.com"},
  {id: 1, username: "adewale", url: "https://wedeycode.com"},
  {id: 2, username: "farouq", url: "http://wedeycode.com"},
  {id: 3, username: "amina", url: "www.wedeycode.com"},
];

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json(users);
});

module.exports = router;
