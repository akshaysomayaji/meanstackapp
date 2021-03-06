import { Component } from '@angular/core';
import { RegisterModel } from './registerModel';
import { RegisterService } from './register.service';
import { RegisterResponseModel } from './RegisterResponseModel';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  submitted = false;
  notificationShow: boolean = false;
  message: string;

  formData: RegisterModel = {
    username: "", password: "", confirmpassword: "", email: "", firstname:"",lastname:""
  };
  constructor(private registerService: RegisterService, private router: Router, private formBuilder: FormBuilder) {
    this.createForm();
  }

  registerForm: FormGroup;
  ngOnInit() {
  }

  onRegister(registerModel: RegisterModel): void {
    console.log(registerModel);
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.formData = registerModel;

    this.registerService.register(this.formData as RegisterModel)
      .subscribe((responseData: RegisterResponseModel) => {
        console.log(responseData);
        this.message = responseData.msg;
        this.notificationShow = true;
      });
  }


  createForm() {
    this.registerForm = new FormGroup({
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
      "txtConfirmPassword": new FormControl(this.formData.confirmpassword, [
        Validators.required, Validators.minLength(6),
      ]),
    })
  }
}
