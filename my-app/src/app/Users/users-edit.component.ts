import { Component } from '@angular/core';
import { UsersModel, userResponseModel } from './usersModel';
import { UsersService } from './users.service';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users-edit',
  templateUrl: 'users-edit.component.html'
})
export class UsersEditComponent {
  submitted = false;
  notificationShow: boolean = false;
  message: string;

  formData: UsersModel = {
    username: "", password: "", userrole: "", email: "", firstname: "", lastname: "", _id: "", index:0
  };



  constructor(private userService: UsersService, private router: Router, private formBuilder: FormBuilder) {
    this.createForm();
    this.userService.getFormData().subscribe(response => this.formData = response);
    console.log(this.formData);
  }



  userEditForm: FormGroup;
  ngOnInit() {
  }

  onCreate(usersModel: UsersModel): void {
    console.log(this.formData);
    this.submitted = true;
    console.log(usersModel);
    // stop here if form is invalid
    if (this.userEditForm.invalid) {
      return;
    }
    this.formData = usersModel;

    this.userService.updateUserDetails(this.formData as UsersModel)
      .subscribe((responseData: userResponseModel) => {
        console.log(responseData);
        this.message = responseData.msg;
        this.notificationShow = true;
      });
  }


  onReset(usersModel: UsersModel): void {
    this.submitted = false;
    usersModel = {
      username: "", password: "", userrole: "", email: "", firstname: "", lastname: "", _id: "", index:0
    };
    this.formData = usersModel;
  }

  createForm() {
    this.userEditForm = new FormGroup({
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
      "txtUserRole": new FormControl(this.formData.userrole, [
        Validators.required,
      ]),
    })
  }
}
