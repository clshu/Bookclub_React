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

		return models.Event.findAll({
			include: [{
        				model: models.Member

     				 },
      				{
      	 				model: models.Book
      				},

      				{
      				   model: models.Rsvp
	    			}


      			  ]
		})

	.then(function(results){
		//console.log(results);
			res.json(results);
	});

});

router.get('/:currentMonth',function (req, res) {
    let yearMonth = req.params.currentMonth.split('-');
    let year = parseInt(yearMonth[0]);
    let month = parseInt(yearMonth[1]);

		return models.Event.findOne({
			include: [{
        				model: models.Member
     				 },
      				{
      	 				model: models.Book
      				}
            ],
      where: {
        $and: [
          Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('dt')), year),
          Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('dt')), month),
        ]
      }
		})

	.then(function(results){
		  console.log(results);
			res.json(results);
	});

});



module.exports = router;
