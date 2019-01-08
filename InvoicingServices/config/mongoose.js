var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function () {
    var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 0, socketTimeoutMS: 0 } } }
    mongoose.Promise = global.Promise;
    var db = mongoose.connect(config.db, options);
    require('../app/models/users.server.model.js');
    require('../app/models/config.server.model.js');
    require('../app/models/customers.server.model.js');
    require('../app/models/vendors.server.model.js');
    return db;
};