import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsersComponent } from './users.component';

import { UsersRoutingModule } from './users-routing.module';
import { UsersAddComponent } from './users-add.component';
import { UsersEditComponent } from './users-edit.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UsersRoutingModule,
    NgbModule
  ],
  declarations: [UsersComponent, UsersAddComponent, UsersEditComponent]
})
export class UsersModule { }
