// https://leocs.me/jquery-drawsvg/
require('dotenv').config();
var http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000
var sslRedirect = require('heroku-ssl-redirect');
// var admin = require("firebase-admin");

// var serviceAccount = require("./fidoandme-backend-firebase-adminsdk-hhjvc-a09b79cff2.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://fidoandme-backend.firebaseio.com"
// });

// const database = admin.firestore();



const errorController = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rootRoutes = require('./routes/root');
const authRoutes = require('./routes/auth');
const fidosRoutes = require('./routes/blog');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', rootRoutes);
app.use('/home', rootRoutes);
app.use('/admin', authRoutes);

app.use(errorController.get404);


app.listen(PORT, function(){
    console.log('Server has started succesfully');
});