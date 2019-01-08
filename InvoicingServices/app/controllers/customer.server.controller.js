var mongoose = require('mongoose'), CustomerSchema = mongoose.model('CustomerSchema');
var NotificationHelper = require('../helpers/genericHelper').commonNotification;
var MailHelper = require('../helpers/genericHelper').mailgeneraation;
notification = new NotificationHelper();


exports.getCustomerDetails = function (req, res, next) {
    try
    {
        var params = req.query;
        var query = {flgActive : true};
        Object.keys(params).forEach(function (key, value) {
            if (params[key])
                query[key] = new RegExp(params[key], "i");
        });
        CustomerSchema.find(query, function (err, customers) {
            if (err) {
                res.send({ 'customers': [], success: false, msg: notification.getCustomer_notification_message('Customer005'), err: err });
            } else {
                res.send({ 'customers': customers, success: true });
            }
        });
    }
    catch (err)
    {
        res.send({ 'customers': [], success: false, msg: notification.getCustomer_notification_message('Customer005'), err: err });
    }
   
}

exports.addCustomerDetails = function (req, res, next) {
    try
    {
        var custmerObj = new CustomerSchema(req.body);
        custmerObj.createdBy = req.session.loggedinuser;
        custmerObj.save(function (err, userObj) {
            if (err) {
                res.send({ 'customers': [], success: false, msg: notification.getCustomer_notification_message('Customer005'), err: err });
            } else {
                res.send({ 'customers': [], success: true, msg: notification.getCustomer_notification_message('Customer002') });
            }
        });
    }
    catch (err)
    {
        res.send({ 'customers': [], success: false, msg: notification.getCustomer_notification_message('Customer005'), err: err });
    }
}