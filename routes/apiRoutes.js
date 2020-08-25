const Router = require('express').Router();

// const db = require('../models');

const { createUser } = require('../controllers/apiController');

Router.get('/', createUser);

// Router.get('/', (req, res) => {
// 	db.User.create({
// 		username: 'Peter Pan',
// 		email: 'pan@gmail.com'
// 	}).then((data) => {
// 		console.log(data);

// 		res.send('Request received.');
// 	}).catch((err) => {
// 		console.log(err);
// 	});
// });

module.exports = Router;