﻿var port = 1001;
var tokenSecret = 'SuperSecret';
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var domain = 'http://localhost:4444';
var serverUrl = 'http://localhost'

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host: "smtp.gmail.com",
    secureConnection: false,
    port: 587,
    auth: {
        user: "akkie.kicha@gmail.com",
        pass: "9632343752"
    }
}));

var clientConfigObj = {
    url: serverUrl,
    name: "GSTSTAR",
    email: "messenger@gststar.com",             // for sending email
    image: serverUrl + 'img/logo.png'  // this file present in client project

};

var sessiontimeout = 15 * 60;

module.exports = {
    port: port,
    db: 'mongodb://localhost/InvoiceDB',
    'secret': 'superawesome',
    tokenSecret: tokenSecret,
    smtp: smtpTransport,
    domain: domain,
    serverUrl: serverUrl,
    clientConfigObj: clientConfigObj,
    sessiondb: 'mongodb://localhost/SessionDb',
    sessiontimeout: sessiontimeout,
}