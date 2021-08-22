var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const expressStatusMonitor = require('express-status-monitor');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const config = {
    healthChecks: [{
        protocol: 'http',
        host: 'localhost',
        path: '/',
        port: '3000'
    }, {
        protocol: 'http',
        host: 'localhost',
        path: '/users',
        port: '3000'
    }]
}
// app.use(expressStatusMonitor());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('listening on port 3000')
})
