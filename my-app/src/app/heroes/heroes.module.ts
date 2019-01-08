import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HeroesRoutingModule,
    NgbModule
  ],
  declarations: [HeroesComponent ]
})
export class HeroesModule { }
