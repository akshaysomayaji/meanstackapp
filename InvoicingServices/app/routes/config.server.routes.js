var config = require('../../app/controllers/config.server.controller'),
passport = require('passport');

module.exports = function (app) {
	
	app.route('/api/subject/add').post(config.addDepartment);
	app.route('/api/subject/edit').put(config.addDepartment);
	app.route('/api/subject/delete').put(config.addDepartment);
	app.route('/api/subject/get').get(config.addDepartment);


	app.route('/api/department/add').get(config.addDepartment);
	app.route('/api/department/edit').get(config.addDepartment);
	app.route('/api/department/delete').get(config.addDepartment);
	app.route('/api/department/get').get(config.getdepartments);


	//app.route('/api/course/add').get(users.validateSession);
	//app.route('/api/course/add').get(users.validateSession);
	//app.route('/api/course/add').get(users.validateSession);
    //app.route('/api/course/get').get(users.validateSession);

	app.route('/api/branch/add').post(config.addBranchDetails);
    app.route('/api/branch/get').get(config.getBranchDetails);
    app.route('/api/branch/update').put(config.editBranchDetails);
}