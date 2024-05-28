import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VueMdpForgetRoutingModule } from './vue-mdp-forget-routing.module';
import { VueMdpForgetComponent } from './vue-mdp-forget.component';
import { VueMdpForgetResetComponent } from './vue-mdp-forget-reset/vue-mdp-forget-reset.component';


@NgModule({
  declarations: [
    VueMdpForgetComponent,
    VueMdpForgetResetComponent
  ],
  imports: [
    CommonModule,
    VueMdpForgetRoutingModule
  ]
})
export class VueMdpForgetModule { }
