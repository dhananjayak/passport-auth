const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session:false });

module.exports = function (app) {
	app.get('/', requireAuth, function(req, res){
		res.send({hi:'there'});
	});

	app.post('/sign', requireSignin, function(req, res){
		res.send({hi:true});
	});
	app.post('/signup', Authentication.signup);
}