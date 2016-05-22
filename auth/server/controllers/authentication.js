const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
	// user has already had their email and password auth'd just need to give them a token
	res.send({ token: tokenForUser(req.user)});
}

exports.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;
	
	if(!email || !password) {
		return res.status(422).send({ error: 'You must provide email and password'});
	}

	// see if a user with the given email exists
	User.findOne({ email: email}, function(err, existingUser) {
		if (err) {
			return next(err);
		}

		// if a user with email does exist, return an error
		if (existingUser) {
			return res.status(422).send({ error: 'Email is in use' });
		}

		// if a user with email does not exist, create and save user record
		const user = new User({
			email: email,
			password: password
		})

		user.save(function(err) {
			if (err) {
				return next(err);
			}

			// respone to request indicating the user was created 
			res.json({ token: tokenForUser(user)});
		});	
	});
	
	
}