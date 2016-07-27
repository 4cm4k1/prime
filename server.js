var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var User = require('./models/user');
var path = require('path');

var app = express();
var localStrategy = require('passport-local').Strategy;

var register = require('./routes/register');
var login = require('./routes/login');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

var db = mongoose.connect('mongodb://localhost/prime_example_passport').connection;

db.on('error', function(err) {
    console.log('MongoDB connection error:', err);
});

db.once('open', function() {
    console.log('Connected to MongoDB');
});

app.use(session({
    secret: 'trogdor',
    key: 'user',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000,
        secure: false
    }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'username'
}, function(req, username, password, done) {
    User.findOne({
        username: username
    }, function(err, user) {
        if (err) {
            throw err;
        }
        if (!user) {
            return done(null, false, {
                message: 'Incorrect username and password.'
            });
        }
        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                throw err;
            }
            if (isMatch) {
                return done(null, user);
            } else {
                done(null, false, {
                    message: 'Incorrect username and password.'
                });
            }
        });
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if (err) {
            return done(err);
        }
        done(null, user);
    });
});

app.get('/', function(request, response, next) {
    response.sendFile(path.resolve(__dirname, 'public/views/login.html'));
});
app.use('/register', register);
app.use('/login', login);

var server = app.listen(process.env.PORT || 3000, startServer);

function startServer() {
    var port = server.address().port;
    console.log('Listening on port', port, 'Ctrl-C to kill server');
}
