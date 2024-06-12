import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueLoginRoutingModule } from './vue-login-routing.module';
import { VueLoginComponent } from './vue-login.component';
import { VueLoginIndexComponent } from './vue-login-index/vue-login-index.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [


    VueLoginComponent,
        VueLoginIndexComponent
  ],
  imports: [
    CommonModule,
    VueLoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class VueLoginModule { }
