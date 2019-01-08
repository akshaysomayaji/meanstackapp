var mongoose = require('mongoose'),
	crypto = require('crypto'),
	Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


var DepartmentSchema = new Schema({
    DepartmentName: {
        type: String,
        required: true
    },
    DepartmentYear: {
        type: String,
        required: true
    },
    hod: [{
        userid: {
            type: String,
            required: true
        },
        isactive: {
            type: Boolean, default: true,
            required: true
        },
        createdDate: {
            type: Date, default: Date.now(),
            required: true
        }
    }],
    staff: [{
           userid: {
               type: String,
               required: true
           },
           isactive: {
               type: Boolean, default: true,
               required: true
           },
           createdDate: {
               type: Date, default: Date.now(),
               required: true
           }
       }],
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createdDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "department" });



var CourseSchema = new Schema({
    CourseName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createdDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "Course" });

var SemisterSchema = new Schema({
    SemisterName: {
        type: String,
        required: true
    },
    CourseId: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createdDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "Semister" });

var SubjectSchema = new Schema({
    SubjectName: {
        type: String,
        required: true
    },
    SemisterId: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createdDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "subjects" });



var studentCurrentCourse = new Schema({
    studentId: {
        type: String,
        required: true
    },
    CourseId: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createdDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "StudentCurrentCourse" })

var studentCurrentSem = new Schema({
    studentCurrentCourseId: {
        type: String,
        required: true
    },
    semid: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createdDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: "StudentCurrentSem" })


var BranchSchema = new Schema({
    branchname: {
        type: String,
        required: true
    },
    branchcode: {
        type: String,
        required: true
    },
    branchusers: [{
        txtUserId: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean, default: true,
        },
        createdDate: {
            type: Date, default: Date.now(),
            required: false
        }
    }],
    branchcontactnumber: {
        type: String,
        required: true
    },
    branchgstin: {
        type: String,
        required: false
    },
    branchaddress: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean, default: true,
        required: true
    },
    createdDate: {
        type: Date, default: Date.now(),
        required: true
    }
}, { collection: 'brach_collection' });


mongoose.model('DepartmentSchema', DepartmentSchema);
mongoose.model('CourseSchema', CourseSchema);
mongoose.model('SemisterSchema', SemisterSchema);
mongoose.model('SubjectSchema', SubjectSchema);
mongoose.model('BranchSchema', BranchSchema);




