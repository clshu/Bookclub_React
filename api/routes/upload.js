var router = require('express').Router();
var multer = require('multer');
var path = require('path');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,'..','..','public','img'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

router.post('/', upload.single('photo'), function(req, res, next){
  console.log(req.file);
  res.end();
});


module.exports = router;