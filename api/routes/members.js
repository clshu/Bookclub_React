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
	//sequelizeConnection.sync()
		
	
		models.Member.findAll({
			include: [{
        				model: models.Event,
        			    include: [{
        						model: models.Book
        						}]
         
     				 }
      			  ]
		})
	
	.then(function(results){
		console.log(results);	
			res.json(results);
	});  	
  
});


router.put('/edit',function (req, res) {
	//sequelizeConnection.sync()
		console.log(req.body);
	
		models.Member.update({

		fname: req.body.fname,
		lname: req.body.lname,
		address1: req.body.address1,
		city: req.body.city,
		state: req.body.state,
		zip: req.body.zip,
		mobile: req.body.mobile,
		favebook1: req.body.favebook1,
		favbook2: req.body.favbook2,
		favbook3: req.body.favbook3,
		aboutme: req.body.aboutme
		
		},

		{where:{id:req.body.id}})
      			  
	
	
	.then(function(results){
		// console.log(results);	
		// res.json(results);

		return models.Member.findById(req.body.id);
	})
	.then(function(data){
		console.log(data);	
		res.json(data);
	})
  
});


// router.put('/', function (req, res) {
// 	models.burgers.update({devoured:true},{where:{id:req.body.id}})
// 	.then(function(){
// 		//when the user orders drinks to go with burger, drinks need to get stored in drinks table
// 		return models.drinks.create({drink_name:req.body.drink_name,burgerId:req.body.id});
		
// 	})
// 	.then(function(){
// 		res.redirect('/');
// 	})
// });

module.exports = router;