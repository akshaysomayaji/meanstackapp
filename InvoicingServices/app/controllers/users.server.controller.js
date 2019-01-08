var mongoose = require('mongoose'), crypto = require('crypto'), User = mongoose.model('UserSchema'), UserPassword = mongoose.model('UserPasswordSchema'), user_otp_schema = mongoose.model('user_otp_schema');
var userLoginLogSchema = mongoose.model('UserLoggedInLogSchema');
var NotificationHelper = require('../helpers/genericHelper').commonNotification;
var MailHelper = require('../helpers/genericHelper').mailgeneraation;
notification = new NotificationHelper();
mail = new MailHelper();
var jwt = require('jsonwebtoken');
var config = require('../../config/config');


exports.authenticate = function (req, res, next) {
    var email = req.body.username.toString();
    var password = req.body.password;
    console.log(req.body);
    User.findOne({ email: email, isActive: true }, function (err, result) {
        console.log(result);
        if (result) {
            UserPassword.findOne({ userid: result._id.toString(), isActive: true }, function (err, userpwd) {
                if (userpwd) {
                    if (userpwd.comparepasswords(password)) {
                        userLoginLogSchema.update({ txtUserId: result._id},
                            { isOnline: false, isActive: false, dtLoggedOut: Date.now() },function () {
                                var userLoginLogSchemaObj = new userLoginLogSchema();
                                userLoginLogSchemaObj.txtUserId = result._id;
                                userLoginLogSchemaObj.isOnline = true;
                                userLoginLogSchemaObj.save(function () {
                                    result.password = null;
                                    var tokenObj = {};
                                    tokenObj.id = result._id;
                                    req.session.username = result.username;
                                    req.session.loggedinuser = result.email;
                                    var token = jwt.sign(tokenObj, '' + config.tokenSecret);
                                    console.log("token =", token);

                                    req.session.save(function (err) {
                                        console.log("session =", req.session);
                                        res.send({ 'users': result._id, txtFullName: result.firstname, txtUsername: result.username, success: true, response_message: '', token: token, txtRoleName: result.txtRoleName });
                                    });
                                    
                                    
                                });

                            });

                    } else {
                        result.password = null;
                        res.send({ 'users': [], success: false, response_message: notification.authetication_notification_message('Auth004') });
                    }
                } else {
                    res.send({ 'users': [], success: false, response_message: notification.authetication_notification_message('Auth004') });
                }
            });
        } else {
            res.send({ 'users': [], success: false, response_message: notification.authetication_notification_message('Auth004') });
        }
    });
}


exports.register = function (req, res, next) {
    try {
        var userObj = new User(req.body);
        userObj.userrole = "admin";
        userObj.save(function (err, userObj) {
            if (err) {
                res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User012'), err: err });
            } else {
                var md5 = crypto.createHash('md5');
                req.body.password = md5.update(req.body.password).digest('hex');
                var userPasswordObj = new UserPassword(req.body);
                userPasswordObj.userid = userObj._id.toString();
                userPasswordObj.save(function (err, userPwdObj) {
                    console.log("err 2", err);
                    res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User003'), err: err });
                });
            }
        });
    }
    catch (err) {
        res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User012'), err: err });
    }
}

exports.forgotpassword = function (req, res, next) {
    try {
        user_otp_schema.findOne({ email: req.params.email, isActive: true }, function (err, result) {
            if (err) {
                res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User014'), err: err });
            } else {
                if (result) {
                    res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User003'), err: err });
                } else {
                    res.send({ 'users': [], success: true, msg: notification.getUser_notification_message('User003') });
                }
            }
        })
    } catch (err) {
        res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User014'), err: err });
    }
}

function sendmails(body, req, callback) {
    var smtp = req.config.smtp;
}

exports.validateSession = function (req, res, next) {
    res.send({ success: true, text:"", });
};

exports.getuserdetails = function (req, res, next) {
    try {
        User.findOne({ _id: mongoose.Types.ObjectId(req.params.id), isActive: true }, function (err, result) {
            if (err) {
                res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User000'), err: err });
            } else {
                if (result) {
                    res.send({ 'users': result, success: true, msg: "", err: err });
                } else {
                    res.send({ 'users': result, success: false, msg: notification.getUser_notification_message('User003') });
                }
            }
        });
    }
    catch (err) {
        res.send({ 'users': {}, success: false, msg: notification.getUser_notification_message('User014'), err: err });
    }
}

exports.getallusers = function (req, res, next) {
    var rolename = req.params.userrole;
    var query = { userrole: rolename, isActive: true };
    if (rolename === 'all') {
        query = { isActive: true };
    }
    try {
        User.find(query, function (err, result) {
            if (result) {
                res.send({ 'users': result, success: true, msg: "", err: err });
            } else {
                res.send({ 'users': result, success: false, msg: notification.getUser_notification_message('User003') });
            }
        });
    }
    catch (err) {
        res.send({ 'users': {}, success: false, msg: notification.getUser_notification_message('User014'), err: err });
    }
}

exports.adduser = function (req, res, next) {
    console.log("data=", req.body);
    try {
        User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }], isActive: true }, function (err, result) {
            if (err) {
                res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User000'), err: err });
            } else {
                if (result) {
                    res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User001'), err: err });
                } else {
                    mail.sendmails_registration(req.body, req, function (result) {
                        if (result.mailSentError) {
                            res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User015'), err: err });
                        } else {
                            var userObj = new User(req.body);
                            userObj.save(function (err, userreponseObj) {
                                if (err) {
                                    res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User012'), err: err });
                                } else {
                                    var md5 = crypto.createHash('md5');
                                    req.body.password = md5.update(req.body.password).digest('hex');
                                    var userPasswordObj = new UserPassword(req.body);
                                    userPasswordObj.userid = userreponseObj._id.toString();
                                    userPasswordObj.save(function (err, userPwdObj) {
                                        if (err) {
                                            res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User000'), err: err });
                                        }
                                        res.send({ 'users': [], success: true, msg: notification.getUser_notification_message('User003') });
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    }
    catch (err) {
        res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User000'), err: err });
    }
}

exports.getOnlineUsers = function (req, res, next) {
    try {
        userLoginLogSchema.aggregate([{
            $lookup: {
                from: "User",
                localField: "txtUserId",
                foreignField: "_id",
                as: "userdocs"
            }
        },
        { $project: { "User.username": 1, "isOnline": 1 } }
        ], function (err, response) {
        });
    } catch (err) {
        res.send({ 'users': [], success: false, msg: notification.getUser_notification_message('User000'), err: err });
    }
}


