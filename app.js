const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const rootRoutes = require('./routes/root');
const myRoutes = require('./routes/me');
const fidosRoutes = require('./routes/fido');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', adminRoutes);


app.use(errorController.get404);


app.listen(3000);