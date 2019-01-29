import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'
import { menuModel } from './menuModel'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent {

  txtFullName: string = localStorage.getItem("txtFullName");

  menulist: menuModel[] = [
    {
      link: "/users/index", menuname: 'Users', active: false, submenu: [
        { submenuname: 'Index', link: '/users/index', active: false }, { submenuname: 'Add', link: '/users/add', active: false }]
    },
    { link: "/heroes", menuname: 'Heroes', active: false, submenu: [] },
    {
      link: "/heroes", menuname: 'Page 1', active: false,
      submenu: [{ submenuname: 'Page 1-1', link: '/users/index', active: false }, { submenuname: 'Page 1-2', link: '/heroes', active: false }]
    }
  ];

  title: string = "Test Angular App";

  constructor(private router: Router) { }
  ngOnInit() {
  }



  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['./login']);
  }
}
