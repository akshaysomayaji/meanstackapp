﻿var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	flash = require('connect-flash'),
    session = require('express-session'),
    mongoStore = require('connect-mongo')(session)
    expressJWT = require('express-jwt'),
    jwt = require('jsonwebtoken'),
    cors = require('cors'),
    uuid = require('node-uuid'),
    cookieParser = require('cookie-parser'),
    boolParser = require('express-query-boolean'),
    dateParser = require('express-query-date');

module.exports = function () {
    var app = express();
    app.use(cookieParser('SecretPassPhrase'));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(session({
        secret: "SecretPassPhrase",
        resave: false,
        saveUninitialized: false,
        store: new mongoStore({
            url: config.sessiondb,
            ttl: config.sessiontimeout
        }),
        cookie: {maxAge: 60 * 60 * 1000 }
    }));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(boolParser());
    app.use(dateParser());
    //app.use(xmlparser());
    var corsOptions = {
        origin: config.domain,
        credentials: false,
        optionsSuccessStatus: 200
    };
    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));
    app.use(function (req, res, next) {
        // Assign the config to the req object
        req.config = config;
        return next();
    });

    //app.use(function (req, res, next) {
    //    console.log(req.url);
    //    if (req.url != '/api/login' || req.url != '/api/user/register'
    //        || req.url != '/api/index' || req.url.toString() != '/'
    //    ) {
    //        var token = req.headers['authorization'];
    //        if (token) {
    //            try {
    //                var decoded = jwt.verify(token, '' + config.tokenSecret);
    //                if (decoded) {
    //                    console.log(decoded);
    //                    var currenttime = new Date();
    //                    var exptime = new Date(decoded.exp);
    //                    console.log(req.session);
    //                    if (currenttime.valueOf() < exptime.valueOf()) {                            
    //                        next();
    //                    } else {
    //                        return res.status(403).send({
    //                            success: false,
    //                            id: 102,
    //                            msg: 'Session expired. Please relogin.'
    //                        });
    //                    }
    //                }
    //            }
    //            catch (err) {
    //                return res.status(403).send({ success: false, id: 101, msg: 'Invalid Token. Please relogin' })
    //            }
    //        } else {
    //            return res.status(403).send({
    //                success: false,
    //                id: 102,
    //                msg: 'no token provided.'
    //            });
    //        }
    //    } else {
    //        next();
    //    }
    //});
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/config.server.routes.js')(app);
    require('../app/routes/customer.server.routes.js')(app);
    require('../app/routes/vendor.server.routes.js')(app);
    return app;
};