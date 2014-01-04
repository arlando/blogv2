var mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    crypto = require('crypto'),
    SALT_WORK_FACTOR = 10,
    MAX_LOGIN_ATTEMPTS = 5,
    LOCK_TIME = 2 * 60 * 60 * 1000;

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    loginAttempts: {
        type: Number,
        required: true,
        default: 0
    },
    lockUntil: {
        type: Number
    },
    token: {
        type: String,
        expires: 50000
    }
});

UserSchema
    .virtual('isLocked')
    .get( function() {
        //check for a future lockUntil timestamp
        return !!(this.lockUntil && this.lockUntil > Date.now());
    });

//Definition for failed login attempts
UserSchema.statics = {
    failedLogin : {
        NOT_FOUND: 0,
        PASSWORD_INCORRECT: 1,
        MAX_ATTEMPTS: 2
    },
    getAuthenticated : function(username, password, cb) {
        var self =  this;
        this.findOne({username: username}, function(err, user) {
            if (err) return cb(err);

            //user exists?
            if (!user) {
                return cb(null, null, self.failedLogin.NOT_FOUND);
            }

            //check if account is currrently locked
            if (user.isLocked) {
                return user.incLoginAttempts(function(err) {
                    if (err) return cb(err);
                    return cb(null, null, self.failedLogin.MAX_ATTEMPTS);
                });
            }

            //test for a matching password
            user.comparePassword(password, function(err, isMatch) {
                if (err) return cb(err);

                //check if password is a match
                if (isMatch) {
                    //if there is no lock or failed attempts return the user
                    if (!user.loginAttempts && !user.lockUntil) return cb(null, user);
                    //reset attempts and lock info
                    var updates = {
                        $set: {
                            loginAttempts: 0
                        },
                        $unset: {
                            lockUntil: 1
                        }
                    };
                    return user.update(updates, function(err) {
                        if (err) return cb(err);
                        return cb(null, user);
                    });
                }

                //password is incorrect, must increment login attempts before responding
                user.incLoginAttempts(function(err) {
                    if (err) return cb(err);
                    return cb(null, null, self.failedLogin.PASSWORD_INCORRECT);
                });
            });
        });
    }
}

UserSchema.pre('save', function (next) {
    var user = this;

    //only hash if password is modified or is new
    if (!user.isModified('password')) return next();

    //generate a SALT
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods = {
    incLoginAttempts : function(cb) {
        //previous lock that has expired start at 1
        if(this.lockUntil && this.lockUntil < Date.now()) {
            return this.update({
                $set: {
                    loginAttempts: 1
                },
                $unset: {
                    lockUntil: 1
                }
            }, cb);
        }
        //increment
        var updates = {
            $inc: {
                loginAttempts: 1
            }
        };

        if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked ) {
            updates.$set = {
                lockUntil: Date.now() + LOCK_TIME
            };
        }
        return this.update(updates, cb);
    },
    comparePassword : function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    }
};

mongoose.model('User', UserSchema);
