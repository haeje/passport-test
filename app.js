const express = require('express');
const app = express();
const port = 3000;
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')

const router = require('./router/index');

app.set('view engine', 'ejs');
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(router);




app.use(express.static('public'));
app.use(express.static('files'));



app.listen(port, ()=>console.log(`listening on port ${port}`));