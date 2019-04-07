const express = require('express');
const router = express.Router();
const crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  let numChars = Math.round(5000 + (Math.random() * 5000));
  let randChars = crypto.randomBytes(numChars).toString('hex');
  res.json(randChars);
});

module.exports = router;