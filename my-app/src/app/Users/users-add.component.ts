import { Component } from '@angular/core';
import { UsersModel, userResponseModel } from './usersModel';
import { UsersService } from './users.service';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-add',
  templateUrl: 'users-add.component.html'
})
export class UsersAddComponent {
  submitted = false;
  notificationShow: boolean = false;
  message: string;

  formData: UsersModel = {
    username: "", password: "", userrole: "", email: "", firstname: "", lastname: "", _id:""
  };
  constructor(private userService: UsersService, private router: Router, private formBuilder: FormBuilder) {
    this.createForm();
  }

  userAddForm: FormGroup;
  ngOnInit() {
  }

  onCreate(usersModel: UsersModel): void {
    console.log(usersModel);
    this.submitted = true;

    // stop here if form is invalid
    if (this.userAddForm.invalid) {
      return;
    }
    this.formData = usersModel;

    delete this.formData._id;

    this.userService.addUserDetails(this.formData as UsersModel)
      .subscribe((responseData: userResponseModel) => {
        console.log(responseData);
        this.message = responseData.msg;
        this.notificationShow = true;
      });


  }


  createForm() {
    this.userAddForm = new FormGroup({
      "txtUserName": new FormControl(this.formData.username, [
        Validators.required
      ]),
      "txtEmailId": new FormControl(this.formData.email, [
        Validators.required, Validators.email
      ]),
      "txtFirstname": new FormControl(this.formData.firstname, [
        Validators.required
      ]),
      "txtLastname": new FormControl(this.formData.lastname),
      "txtPassword": new FormControl(this.formData.password, [
        Validators.required, Validators.minLength(6)
      ]),
      "txtUserRole": new FormControl(this.formData.userrole, [
        Validators.required,
      ]),
    })
  }
}
