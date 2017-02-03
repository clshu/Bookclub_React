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
	
		return models.Post.findAll({
			include: [{
        				model: models.Member
         
     				 }
      			  ]
		})

	.then(function(results){
		console.log(results);	
			res.json(results);
	});  	
  
});
	


module.exports = router;