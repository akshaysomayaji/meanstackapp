import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes/heroes.service';
import { commonResponseModel } from '../commonResponseModel';
import { Router } from '@angular/router';
import { userFilterModel, userResponseModel, UsersModel } from './usersModel';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  filter : userFilterModel = { userrole: 'all', id: '', username: '' };
  users: UsersModel[];
  constructor(private heroesService: HeroesService, private router: Router, private usereService: UsersService) { }

  ngOnInit() {

    this.heroesService.sessionCheck().subscribe(
      (responseData: commonResponseModel) => {
        console.log("response =", responseData);
        if (!responseData) {
          this.router.navigate(['./login']);
        }
        if (!responseData.success) {
          this.router.navigate(['./login']);
        }
      });

    this.usereService.getUsersDetails(this.filter as userFilterModel).subscribe((responseData: userResponseModel) => {
      console.log("response =", responseData);
      if (responseData.success == true) {
        this.users = responseData.users;
      } else {
        alert(responseData.msg);
      }
    });
  }

  newUser(): void {

  };

  model = {
    left: false,
    middle: false,
    right: false
  };

}
