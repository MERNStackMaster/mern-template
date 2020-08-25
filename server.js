require('dotenv').config()
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;
// set MONGODB_URI in your config vars in Heroku
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/exampledb';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// routes
app.use('/api', require('./routes/apiRoutes'));

/***************** 
* Ideally, before using this repo, delete `client` folder, and run:
* `npx create-react-app client` (inside the mern-template folder)
******************/

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`App now running on PORT http://localhost:${PORT}/`);
});