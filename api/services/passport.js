const passport = require('passport');
const models = require('../models');
const config = require('../routes/config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
/*

Incoming Request --> Passport --> Route Handler
						|
						|
			|-----------------------|
			|						            |
			|					             	|
	Passport Strategy 1		Passport Strategy 2
			|						            |
			|					             	|
		Verify Member			Verify Member with a
		with a JWT 			email and password
*/

/*

Sign up --> Verify email is not in use --> Token

Log in --> Verify email/password(Local Strategy) --> Token

Auth's request --> Verify Token(JWT Strategy) --> Resource Access

*/

// Set Options for Local
// By default local strategy will look for username and password
// Replace username with email
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
	// Verify this email and password, call done with the member
	// if it is correct email and password
	// otherwise, call done with false

	models.Member.findOne({where: {email: email}})
	.then(function(member) {
		// No matching member
		if (!member) { return done(null, false); }

		// compare passwords
		// comparePassword is an instance method defined in Member Model
		// it compares the plain password in 1st argument with this.password,
		// which is hashed password

		member.comparePassword(password, function(err, isMatched) {
			if (err) { return done(err); }
			if (!isMatched) { return done(null, false); }
			let user = member;
			return done(null, user);
		});
	})
	.catch(function(err) {
		if (err) { return done(err, false); }
	})
});

// Set Options for JWT
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
	// See if the member ID in payload exists in our database
	// If it does, call 'done' with that member
	// otherwise, call 'done' without a member object

	models.Member.findById(payload.sub)
	.then(function(member) {
		if (member) {
			return done(null, member);
		} else {
			return done(null, false); // Failed case
		}
	})
	.catch(function(err){
		if (err) { return done(err, false);} // Failed case
	});
});

// Tell passprot to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);
