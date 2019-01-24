import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersAddComponent } from './users-add.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'users'
    },
    children: [
      {
        path: 'index',
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: 'add',
        component: UsersAddComponent,
        data: {
          title: 'Add'
        }
      },]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
