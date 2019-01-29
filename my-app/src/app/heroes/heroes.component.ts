import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { commonResponseModel } from '../commonResponseModel';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroesService: HeroesService, private router: Router) { }

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
  }


  model = {
    left: false,
    middle: false,
    right: false
  };

}
