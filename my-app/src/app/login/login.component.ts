import { Component } from '@angular/core';
import { LoginModel } from './LoginModel';
import { LoginService } from './login.service';
import { LoginResponseModel } from './LoginResponseModel';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted = false;
  notificationShow: boolean = false;
  message: string;

  formData: LoginModel = {
    username: "", password: "", remberme: false
  };
  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {
    this.createForm();
  }
  loginForm: FormGroup;
  ngOnInit() {
  }

  onLogin(loginModel: LoginModel): void {
    console.log(loginModel);
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.formData = loginModel;

    this.loginService.addHero(this.formData as LoginModel)
      .subscribe((responseData: LoginResponseModel) => {
        console.log(responseData);
        this.message = responseData.response_message;
        this.notificationShow = !responseData.status;
        if (responseData.success) {
          sessionStorage.setItem("txtFullName", responseData.txtFullName);
          sessionStorage.setItem("accessToken", responseData.token);
          this.router.navigate(['./heroes']);
        }
      });
  }


  createForm() {
    this.loginForm = new FormGroup({
      "txtUserName": new FormControl(this.formData.username, [
        Validators.required, Validators.email
      ]),
      "txtPassword": new FormControl(this.formData.password, [
        Validators.required, Validators.minLength(6)
      ]),
    })
  }
}
