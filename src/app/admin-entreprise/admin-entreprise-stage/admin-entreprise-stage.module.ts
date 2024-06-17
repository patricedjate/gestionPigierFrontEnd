import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseStageRoutingModule } from './admin-entreprise-stage-routing.module';
import { AdminEntrepriseStageDetailsComponent } from './admin-entreprise-stage-details/admin-entreprise-stage-details.component';


@NgModule({
  declarations: [
    AdminEntrepriseStageDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseStageRoutingModule
  ]
})
export class AdminEntrepriseStageModule { }
