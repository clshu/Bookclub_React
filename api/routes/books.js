var router = require('express').Router();
var models  = require('../models');
var sequelizeConnection = models.sequelize;
var Sequelize = models.Sequelize;


// middleware that is specific to this router - logs time of request
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next();
});

// route for home page
router.get('/',function (req, res) {
	
		models.Book.findAll({
			include: [{
        				model: models.Rating,
        			    include: [{
        						model: models.Member,
        						attributes: ['id', 'fname', 'lname', 'piclink']
        					    } 
        						]
     				 }

      			  ],
      			 order: [
            ['title'],
            [models.Rating, 'ratedon', 'DESC']
        	]
		})
	
	.then(function(results){
		console.log(results);	
			res.json(results);
	});  	
  
});


router.post('/newrating',function (req, res) {

	console.log(req.body);
	
	models.Rating.create(req.body)
	
	.then(function(data){
		console.log(data);	
		res.json(data);
	})
  
});



module.exports = router;