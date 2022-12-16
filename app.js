 const port = process.env.PORT || 8080;

 var express = require('express');
 var path = require('path');
 var createError = require('http-errors');
 var flash = require('express-flash');
 var session = require('express-session');
 var cookieParser = require('cookie-parser');
 var bodyParser = require('body-parser');
 var mysql = require('mysql');
 //Setup External Files
 var connection = require('./lib/db');
 var homeRouter = require('./routes/index');
 var bookRouter = require('./routes/booking');
 var tourRouter = require('./routes/tour');
 var loginRouter = require('./routes/login');
 var adminRouter = require('./routes/admin');
 var viewRouter = require('./routes/view');
 var successRouter = require('./routes/success')
 var app = express();



 // Setup the Views Templating Engine
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(express.static(path.join(__dirname, 'public')));


 //Session Settings
 app.use(cookieParser());
 app.use(cookieParser());
 app.use(session({
     secret: 'secret code 3245',
     resave: false,
     saveUninitialized: true,
     cookie: { maxAge: 120000 }
 }))


 app.use(flash());

 app.use('/', homeRouter);
 app.use('/login', loginRouter);
 app.use('/booking', bookRouter)
 app.use('/tour', tourRouter);
 app.use('/admin', adminRouter);
 app.use('/view', viewRouter);
 app.use('/success', successRouter)
 app.listen(port, () => console.log(`Listening on port ${port}..`));

 module.exports = app;