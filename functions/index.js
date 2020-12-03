const functions = require('firebase-functions');

require('dotenv').config();
var http = require('http');
const path = require('path');
var cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const rootRoutes = require('./routes/root');
const authRoutes = require('./routes/auth');
const fidosRoutes = require('./routes/blog');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', rootRoutes);
app.use('/home', rootRoutes);
app.use('/admin', authRoutes);

app.use(errorController.get404);


exports.app = functions.https.onRequest(app);

