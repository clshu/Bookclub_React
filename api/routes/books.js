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

      			  ]
		})
	
	.then(function(results){
		console.log(results);	
			res.json(results);
	});  	
  
});


// router.put('/edit',function (req, res) {

// 		console.log(req.body);
	
// 		models.Member.update({

// 		fname: req.body.fname,
// 		lname: req.body.lname,
// 		address1: req.body.address1,
// 		city: req.body.city,
// 		state: req.body.state,
// 		zip: req.body.zip,
// 		mobile: req.body.mobile,
// 		favebook1: req.body.favebook1,
// 		favbook2: req.body.favbook2,
// 		favbook3: req.body.favbook3,
// 		aboutme: req.body.aboutme
		
// 		},

// 		{where:{id:req.body.id}})
      			  
	
	
// 	.then(function(results){
		
// 		return models.Member.findById(req.body.id);
// 	})
// 	.then(function(data){
// 		console.log(data);	
// 		res.json(data);
// 	})
  
// });



module.exports = router;