const router = require('express').Router();

router.get('/first', function(req, res) {
  res.send({ message: 'First Route Backend Access' });
})

router.get('/second', function(req, res) {
  res.send({ message: 'Second Route Backend Access' });
})

module.exports = router;
