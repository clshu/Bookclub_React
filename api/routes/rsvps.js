var router = require('express').Router();
var models = require('../models');
var sequelizeConnection = models.sequelize;
var Sequelize = models.Sequelize;


// middleware that is specific to this router - logs time of request
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next();
});

// GET /api/rsvps/:eventId
router.get('/:eventId', function(req, res) {

  return models.Rsvp.findAll({
      where: {
            EventId: req.params.eventId
      },
      include: [ {model: models.Member, attributes: ['id', 'fname', 'lname', 'piclink']} ],
      order: [
          ['response', 'DESC']
      ]
    })
    .then(data => {
      res.json(data);
    })
    .catch(err => {throw err})

})

router.post('/new', function(req, res) {
  let rsvp = req.body;
  console.log(rsvp);
  return models.Rsvp.create(rsvp)
  .then(newRsvp => {
      return models.Rsvp.findAll({
        where: {
              EventId: rsvp.EventId
        },
        include: [ {model: models.Member, attributes: ['id', 'fname', 'lname', 'piclink']} ],
        order: [
            ['response', 'DESC']
        ]
      })
      .then(newrsvp => {
        res.json(newrsvp);
      })
      .catch(err => { throw err })
  })
  .catch(err => { throw err })
})

router.put('/update', function(req, res) {
  let rsvp = req.body;
  console.log(rsvp);
  debugger;
  return models.Rsvp.update(
    {
      response: rsvp.response,
      rsvpon: rsvp.rsvpon
     },
    {
      where: { id: rsvp.id }
    }
  )
  .then (updatedRsvp => {

    return models.Rsvp.findAll({
      where: {
            EventId: rsvp.EventId
      },
      include: [ {model: models.Member, attributes: ['id', 'fname', 'lname', 'piclink']} ],
      order: [
          ['response', 'DESC']
      ]
    })
    .then(newRsvp => {
      res.json(newRsvp);
    })
    .catch(err => {
      throw err;
    })
  })

  .catch(err => {
    throw err;
  })
})

module.exports = router;
