var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config(); // Tambahkan baris ini untuk memuat variabel dari file .env

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth'); // Rute otentikasi
var protectedRouter = require('./routes/protected'); // Rute terproteksi
var dataUserRouter = require('./routes/datauser'); // Rute datauser

var app = express();

// Middleware untuk body parsing
app.use(bodyParser.json());

// Connect to MongoDB
var dbURI = process.env.MONGODB_URI; // Gunakan variabel lingkungan
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/auth', authRouter); // Gunakan rute otentikasi
app.use('/api', protectedRouter); // Gunakan rute terproteksi
app.use('/api/datauser', dataUserRouter); // Gunakan rute datauser

// Rute utama
app.get('/', (req, res) => {
  res.send('API sudah berjalan...');
});

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
