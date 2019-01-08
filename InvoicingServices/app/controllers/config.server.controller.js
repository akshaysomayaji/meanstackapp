var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Department = mongoose.model('DepartmentSchema'),
    Course = mongoose.model('CourseSchema'),
      Semister = mongoose.model('SemisterSchema'),
      Subject = mongoose.model('SubjectSchema'),
      Course = mongoose.model('CourseSchema'),
      Semister = mongoose.model('SemisterSchema'),
      branchSchema = mongoose.model('BranchSchema');
var NotificationHelper = require('../helpers/genericHelper').commonNotification;
notification = new NotificationHelper();



exports.addDepartment = function (req, res, next) {
    try {
        Department.find({},function (err, result) {
            if (err) {
                res.send({ 'data': [], success: false, msg: notification.getConfig_notification_message('Dept005'), err: err });
            } else {
                if (result.length > 0) {
                    res.send({ 'data': [], success: false, msg: notification.getConfig_notification_message('Dept002'), err: err });
                } else {
                    var DepartmentObj = new Department(req.body);
                    DepartmentObj.save(function (err, userObj) {
                        if (err) {
                            res.send({ 'data': [], success: false, msg: notification.getConfig_notification_message('Dept000'), err: err });
                        } else {
                            res.send({ 'data': [], success: false, msg: notification.getConfig_notification_message('Dept005'), err: err });
                        }
                    })
                }
            }
        });        
    }
    catch (err) {
        res.send({ 'data': [], success: false, msg: notification.getConfig_notification_message('Dept005'), err: err });
    }
}


exports.getdepartments = function (req, res, next) {
    try {
        Department.find({isActive: true }, function (err, result) {
            if (result) {
                res.send({ 'data': result, success: true, msg: "", err: err });
            } else {
                res.send({ 'data': {}, success: false, msg: notification.getConfig_notification_message('Dept000') });
            }
        });
    }
    catch (err) {
        res.send({ 'data': {}, success: false, msg: notification.getConfig_notification_message('Dept000'), err: err });
    }
}

exports.addcourseandsemister = function (req, res, next) {
    try {

    } catch (err) { }
};


exports.addcourse = function (req, res, next) {
    try {
        
    } catch (err) {
    
    }
};


exports.addBranchDetails = function (req, res, next) {
    try {
        var data = req.body;
        var branchSchemaObj = new branchSchema(data);
        branchSchemaObj.save(function (err, result) {
            if (err) {
                res.send({ 'data': [], success: false, msg: notification.getConfig_notification_message('Branch005'), err: err });
            } else {
                res.send({ 'data': [], success: false, msg: notification.getConfig_notification_message('Branch001'), err: err });
            }
        })
    } catch (err) {
        res.send({ 'data': {}, success: false, msg: notification.getConfig_notification_message('Branch000'), err: err });
    }
};


exports.getBranchDetails = function (req, res, next) {
    try {
        branchSchema.find(function (err, result) {
            if (result) {
                res.send({ 'branch': result, success: true, msg: "", err: err });
            } else {
                res.send({ 'branch': result, success: false, msg: notification.getUser_notification_message('Branch000') });
            }
        });
    } catch (err) {
        res.send({ 'data': {}, success: false, msg: notification.getConfig_notification_message('Branch000'), err: err });
    }
};

exports.editBranchDetails = function (req, res, next) {
    try
    {
        branchSchema.findByIdAndUpdate({ "_id": req.body._id }, req.body, function (err, result) {
            if (result) {
                res.send({ 'branch': result, success: true, msg: notification.getConfig_notification_message('Branch003'), err: err });
            } else {
                res.send({ 'branch': result, success: false, msg: notification.getUser_notification_message('Branch000') });
            }
        });
    }
    catch (err) {
        res.send({ 'data': {}, success: false, msg: notification.getConfig_notification_message('Branch000'), err: err });
    }
};