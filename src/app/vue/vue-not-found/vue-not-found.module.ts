import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueNotFoundRoutingModule } from './vue-not-found-routing.module';
import { VueNotFoundComponent } from './vue-not-found.component';


@NgModule({
  declarations: [
    VueNotFoundComponent
  ],
  imports: [
    CommonModule,
    VueNotFoundRoutingModule
  ]
})
export class VueNotFoundModule { }
