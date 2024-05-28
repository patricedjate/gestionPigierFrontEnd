import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueRegisterRoutingModule } from './vue-register-routing.module';
import { VueRegisterComponent } from './vue-register.component';
import { VueRegisterIndexComponent } from './vue-register-index/vue-register-index.component';


@NgModule({
  declarations: [
    VueRegisterComponent,
    VueRegisterIndexComponent
  ],
  imports: [
    CommonModule,
    VueRegisterRoutingModule
  ]
})
export class VueRegisterModule { }
