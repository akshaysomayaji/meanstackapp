import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  txtFullName: string = sessionStorage.getItem("txtFullName")
  constructor(private router: Router) { }
  ngOnInit() {
  }

  logout(): void{
    sessionStorage.clear();
    this.router.navigate(['./login']);
  }
}
