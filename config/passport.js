const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt-nodejs');

    passport.serializeUser(function (user, cb) {
        cb(null, user.id);
    });
    passport.deserializeUser(function (id, cb) {
        UserModel.findOne({ id }, function (err, user) {
            cb(err, user);
        });
    });
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passportField: 'password'
    }, function (userName, password, cb) {  
        UserModel.findOne({ name: userName }, function (err, user) {
            if (err) return cb(err);
            if (!user) return cb(null, false, { message: 'name not found' });
            bcrypt.compare(password, user.pass, function (err, res) {
                if (!res) return cb(null, false, { 
                    status:'failed',
                    message: 'Login failed'
                });
                let userDetails = {
                    name: user.name,
                    id: user.id
                };
                return cb(null, userDetails, { 
                    status:'success',
                    message: 'Login Succesful'
                });
            });
        });
    }));