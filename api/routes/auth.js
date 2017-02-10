const router = require('express').Router();
const jwt = require('jwt-simple');
const config = require('./config.js');
const models = require('../models');
const passport = require('passport');

const verifyLogin = passport.authenticate('local', { session: false});

function tokenForMember(member) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: member.id, iat: timestamp }, config.secret);
}

router.post('/signin', verifyLogin, function(req, res, next) {
	// email and password is auth'd by passport's LocalStrategy
	// req.user is passed down from LocalStrategy's
	// done(null, user), req.user is fixed and can't use req.member
	// Just send back token and member

	if (req.user.error){
		res.json({ error: req.user.error })
	}else{
		let member = req.user;
		member.password = undefined; // Don't send password back to frontend
		return res.json({ token: tokenForMember(member), member });
	}

	
})

router.post('/signup', function(req, res, next) {

	console.log(req.body);
	const email = req.body.email;
	const password = req.body.password;

	if (!email || !password) {
		res.status(422).json({error: "You must provide email and password"});
	}

	// See if member with the given email exists
	models.Member.findOne({ where: {email: email}})
		.then(function(existingMember) {
			if (existingMember) {
				// If a member with email does exist, return an error
				return res.status(422).json({error: "Email in use."});
			}

			// If not, create and save member to DB
			// A beforeCreate hook will encrypt the password
			// before reall creation happens
			models.Member.create({
				email: email,
				password: password,

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
				aboutme: req.body.aboutme,
				jointdt: req.body.joindt,
				piclink: req.body.piclink
		
			})
			.then(function(member) {
				member.password = undefined; // Don't send password back to frontend
				return res.json({ token: tokenForMember(member), member });
			})
			.catch(err => {
				return next(err);
			})

		}).catch(err => {
			return next(err);
		})
})

module.exports = router;