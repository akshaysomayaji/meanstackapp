import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes/heroes.service';
import { commonResponseModel } from '../commonResponseModel';
import { Router } from '@angular/router';
import { userFilterModel, userResponseModel, UsersModel } from './usersModel';
import { UsersService } from './users.service';
import { PagerService } from '../pagerService';

@Component({
  selector: 'app-users-index',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  filter : userFilterModel = { userrole: 'all', id: '', username: '' };
  users: UsersModel[];
  page = 1;
  collectionSize = 0;
  count = 0;
 
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private heroesService: HeroesService, private router: Router, private usereService: UsersService, private pagerService: PagerService) {
   
  }

  ngOnInit() {
   
    if (!localStorage.getItem("accessToken")) {
      this.router.navigate(['./login']);
    }

    this.usereService.getUsersDetails(this.filter as userFilterModel).subscribe((responseData: userResponseModel) => {
      console.log("response =", responseData);
      if (responseData.success == true) {
        this.users = responseData.users;
        this.count = 0; 
        for (let i = 0; i < this.users.length; i++) {
          this.users[i].index = i + 1;
        }
        this.collectionSize = this.users.length;
        this.setPage(1);
      } else {
        this.router.navigate(['./login']);
      }
    });
  }

  newUser(): void {
    this.router.navigate(['./users/add']);
  };

  model = {
    left: false,
    middle: false,
    right: false
  };

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.users.length, page);

    // get current page of items
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
