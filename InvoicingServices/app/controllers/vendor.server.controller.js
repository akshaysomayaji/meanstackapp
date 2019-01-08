var mongoose = require('mongoose'), VendorSchema = mongoose.model('VendorSchema');
var NotificationHelper = require('../helpers/genericHelper').commonNotification;
var MailHelper = require('../helpers/genericHelper').mailgeneraation;
notification = new NotificationHelper();


exports.getVendorDetails = function (req, res, next) {
    try {
        var params = req.query;
        var query = { flgActive: true };
        Object.keys(params).forEach(function (key) {
            if (params[key])
                query[key] = new RegExp(params[key], "i");
        });
        VendorSchema.find(query, function (err, vendors) {
            if (err) {
                res.send({ 'vendors': [], success: false, msg: notification.getVendor_notification_message('Vendor005'), err: err });
            } else {
                res.send({ 'vendors': vendors, success: true });
            }
        });
    }
    catch (err) {
        res.send({ 'vendors': [], success: false, msg: notification.getVendor_notification_message('Vendor005'), err: err });
    }

}

exports.addVendorDetails = function (req, res, next) {
    try {
        var vendorObj = new VendorSchema(req.body);
        vendorObj.createdBy = req.session.loggedinuser;
        vendorObj.save(function (err) {
            if (err) {
                res.send({ 'vendors': [], success: false, msg: notification.getVendor_notification_message('Vendor005'), err: err });
            } else {
                res.send({ 'vendors': [], success: true, msg: notification.getVendor_notification_message('Vendor002') });
            }
        });
    }
    catch (err) {
        res.send({ 'vendors': [], success: false, msg: notification.getCustomer_notification_message('Customer005'), err: err });
    }
}