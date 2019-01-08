var customer = require('../../app/controllers/customer.server.controller');
module.exports = function (app) {
    app.route('/api/customers/get').get(customer.getCustomerDetails);
    app.route('/api/customers/Add').post(customer.addCustomerDetails);
}