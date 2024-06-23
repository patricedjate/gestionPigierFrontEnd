import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueRegisterRoutingModule } from './vue-register-routing.module';
import { VueRegisterComponent } from './vue-register.component';
import { VueRegisterIndexComponent } from './vue-register-index/vue-register-index.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    VueRegisterComponent,
    VueRegisterIndexComponent
  ],
    imports: [
        CommonModule,
        VueRegisterRoutingModule,
        ReactiveFormsModule
    ]
})
export class VueRegisterModule { }
