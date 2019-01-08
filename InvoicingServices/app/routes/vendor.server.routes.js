var vendors = require('../../app/controllers/vendor.server.controller'),
passport = require('passport');

module.exports = function (app) {
    app.route('/api/vendors/get').get(vendors.getVendorDetails);
    app.route('/api/vendors/Add').post(vendors.addVendorDetails);
}