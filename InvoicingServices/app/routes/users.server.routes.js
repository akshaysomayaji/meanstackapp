﻿var users = require('../../app/controllers/users.server.controller'),
passport = require('passport');

module.exports = function (app) {
    app.route('/api/login').post(users.authenticate);
    app.route('/api/user/register').post(users.register);
    app.route('/api/user/sessionvalidation/:token').get(users.validateSession);
    app.route('/api/user/get/:id').get(users.getuserdetails);
    app.route('/api/user/getall/:userrole').get(users.getallusers);
    app.route('/api/user/add').post(users.adduser);
    app.route('/api/user/edit').put(users.adduser);
    app.route('/api/user/delete').put(users.adduser);
}