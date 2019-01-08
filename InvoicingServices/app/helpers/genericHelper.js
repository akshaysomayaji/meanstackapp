﻿

var GenericHelper = function () {

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    this.getFormattedDate = function (val) {
        var result = "";

        var month = val.getMonth();
        var day = val.getDate();
        var year = val.getFullYear();
        result = day + "-" + monthNames[month] + "-" + year

        return result;
    }

};


var commonNotification = function () {

    this.authetication_notification_message = function (Code) {
        switch (Code) {
            case "Auth001": return "Invalid user name. Please check and retry.";
            case "Auth002": return "Invalid password. Please check and retry.";
            case "Auth003": return "Maximum attempts (5) reached. Your account is locked. Please get in touch with the admin to unlock account.";
            case "Auth004": return "Invalid user name or Invalid password. Please check and retry.";
            case "Auth005": return "Invalid Email Id. Please check and retry.";
            case "SMS001": return "Login Activity";
            case "SMS002": return "<div><p>Dear Sir/Madam, " +
                        "<br/> A successfull login into your GST Account #email#. on GST platform happened on: <br/>" + new Date().toString() + "</p>" +
                        "<br><br><p>Please call the helpline (+91 xxxxx yyyyy) if you did not login </p>" +
                        "<br><p>Regards,</p>" +
                        "<br><p>Support Team</p>" +
                        "</div>";
            case "SMS003": return "An unsuccessful attempt was made to login into your GST account #email#. Please call the helpline (+91 xxxxx yyyyy) if you did not try to login.";
            default: return Code;
        }
    }

    this.getUser_notification_message = function (Code) {
        switch (Code) {
            //User Common notification
            case "User001": return "Given Email Id or Username already exists. Please change the Email Id or Username and try again.";
            case "User002": return "User already has the given role. Please check and try again with a different role.";
            case "User003": return "User added successfully.";
            case "User004": return "User updated successfully.";
            case "User005": return "User reset successfully.";
            case "User006": return "User unlocked successfully.";
            case "User007": return "User deactivated successfully.";
            case "User008": return "User to role mapping successful.";
            case "User009": return "User role removed successfully.";
            case "User010": return "Given Mail Id is already mapped to another user. Please change and retry.";
            case "User011": return "Gstin is successfully mapped to user.";
            case "User012": return "Failed to add user's, please check and try again.";
            case "User013": return "Otp sent your registered email address successfully.";
            case "User014": return "Fail to send to OTP.";
            case "User015": return "Fail to send to mail, please try again.";
            case "User000": return "Some thing went wrong, please try again.";
            default: return Code;
        }
    }
    

    this.getConfig_notification_message = function (Code) {
        switch (Code) {
            case "Dept001": return "Department added successfully.";
            case "Dept002": return "Department is already exists, please change the Department name, and try again.";
            case "Dept003": return "Department updated successfully.";
            case "Dept004": return "Department deleted successfully.";
            case "Dept005": return "Failed to add Department, please try again.";
            case "Dept006": return "Failed to edit Department, please try again.";
            case "Dept007": return "Failed to delete Department, please try again.";
            case "Dept000": return "Some thing went wrong, please try again.";


            case "Course001": return "Course added successfully.";
            case "Course002": return "Course is already exists, please change the Course name, and try again.";
            case "Course003": return "Course updated successfully.";
            case "Course004": return "Course deleted successfully.";
            case "Course005": return "Failed to add Course, please try again.";
            case "Course006": return "Failed to edit Course, please try again.";
            case "Course007": return "Failed to delete Course, please try again.";
            case "Course000": return "Some thing went wrong, please try again.";


            case "Sem001": return "Semister added successfully.";
            case "Sem002": return "Semister is already exists, please change the Semister name, and try again.";
            case "Sem003": return "Semister updated successfully.";
            case "Sem004": return "Semister deleted successfully.";
            case "Sem005": return "Failed to add Semister, please try again.";
            case "Sem006": return "Failed to edit Semister, please try again.";
            case "Sem007": return "Failed to delete Semister, please try again.";
            case "Sem000": return "Some thing went wrong, please try again.";


            case "Subj001": return "Subject added successfully.";
            case "Subj002": return "Subject is already exists, please change the Subject name, and try again.";
            case "Subj003": return "Subject updated successfully.";
            case "Subj004": return "Subject deleted successfully.";
            case "Subj005": return "Failed to add Subject, please try again.";
            case "Subj006": return "Failed to edit Subject, please try again.";
            case "Subj007": return "Failed to delete Subject, please try again.";
            case "Subj000": return "Some thing went wrong, please try again.";


            case "Branch001": return "Branch added successfully.";
            case "Branch002": return "Branch is already exists, please change the Branch name, and try again.";
            case "Branch003": return "Branch updated successfully.";
            case "Branch004": return "Branch deleted successfully.";
            case "Branch005": return "Failed to add Branch, please try again.";
            case "Branch006": return "Failed to edit Branch, please try again.";
            case "Branch007": return "Failed to delete Branch, please try again.";
            case "Branch000": return "Some thing went wrong, please try again.";
            default: return Code;
        }
    }

    this.getmail_contents = function (Code) {
        switch (Code) {
            case "MAIL001": return "Account Creation";
            case "MAIL002": return '<div style="width:98%;height:98%;" class="email-tmpl"><div style="border:1px solid;padding:8px;" class="email-tmpl-box"><div align="left" class="em-logo"><img src="#clientConfigObj.image#" /></div><div class="em-text"><p>Dear #firstname# #lastname#,<br/><br/><br/> Your Account Has been created for #clientConfigObj.name#.<br/> Please use the following PIN:<b> #rand# </b> to Activate your account While Login.<br />Click <a href="  #clientConfigObj.url# #!/Activate">Here</a> To Activate <br /><br /></p><p align="left"> #clientConfigObj.name# Team</p></div></div><p align="center">This email has been generated automatically by #clientConfigObj.name# as part of your request to reset password at #clientConfigObj.url# website.Note: Kindly do not reply to this mail. This mail was sent automatically from our server.</p></div>';
            case "MAIL003": return '<div style="width:98%;height:98%;" class="email-tmpl"><div style="border:1px solid;padding:8px;" class="email-tmpl-box"><div align="left" class="em-logo"><img src="#clientConfigObj.image#" /></div><div class="em-text"><p>Dear #firstname#,<br/><br/><br/> Your Account Has been created for #clientConfigObj.name#.<br/> Please use User Name as <b> #email# </b> and Password as <b> #autogenpassword# </b> to login and activate your account.<br />Click  <a href=#serverUrl##!/login">here</a> to activate. <br /><br /></p><p align="left"> #clientConfigObj.name# Team</p></div></div><br/>  <p align="center">This email has been generated automatically by #clientConfigObj.name#. <br/> Note: Kindly do not reply to this mail. This mail was sent automatically from our server.</p></div>';

        }
    }

    this.getCustomer_notification_message = function (Code) {
        switch (Code) {
            //User Common notification
            case "Customer001": return "Given Customer Code already exists. Please change the Customer Code and try again.";
            case "Customer002": return "Customer added successfully.";
            case "Customer003": return "Customer updated successfully.";
            case "Customer004": return "Customer deleted successfully.";
            case "Customer005": return "Somthing went wrong, please try again.";
        }
    }

    this.getVendor_notification_message = function (Code) {
        switch (Code) {
            //User Common notification
            case "Vendor001": return "Given Vendor Code already exists. Please change the Vendor Code and try again.";
            case "Vendor002": return "Vendor added successfully.";
            case "Vendor003": return "Vendor updated successfully.";
            case "Vendor004": return "Vendor deleted successfully.";
            case "Vendor005": return "Somthing went wrong, please try again.";
        }
    }
}

var mailgeneraation = function () {
    this.sendmails_registration = function (data, req, callback) {
        var error = false, lookup = 0;
        var smtp = req.config.smtp;
        data.password = generatePassword(12);
        mailOptions = {
            from: req.config.clientConfigObj.name + ' <' + req.config.clientConfigObj.email + '>',
            to: data.email,
            subject: "Account Creation",
            html: '<div style="width:98%;height:98%;" class="email-tmpl"><div style="border:1px solid;padding:8px;" class="email-tmpl-box"><div align="left" class="em-logo"><img src="' + req.config.clientConfigObj.image + '" /></div><div class="em-text"><p>Dear ' + data.firstname + ',<br/><br/><br/> Your Account Has been created for ' + req.config.clientConfigObj.name + '.<br/> Please use User Name as <b>' + data.email + ' </b> and Password as <b> ' + data.password + ' </b> to login and activate your account.<br />Click  <a href=' + req.config.serverUrl + '#!/login">here</a> to login. <br /><br /></p><p align="left">' + req.config.clientConfigObj.name + ' Team</p></div></div><p align="center">This email has been generated automatically by ' + req.config.clientConfigObj.name + '.Note: Kindly do not reply to this mail. This mail was sent automatically from our server.</p></div>'
        }

        smtp.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log("error =",error);
                data.mailSentError = true;
                callback(data);
            } else {
                data.mailSentError = false;
                callback(data);
            }
        });
    }
};

function generatePassword(length) {
    var password = '', character;
    while (length > password.length) {
        if (password.indexOf(character = String.fromCharCode(Math.floor(Math.random() * 94) + 33), Math.floor(password.length / 94) * 94) < 0) {
            password += character;
        }
    }
    return password;
}

exports.mailgeneraation = mailgeneraation;
exports.GenericHelper = GenericHelper;
exports.commonNotification = commonNotification;