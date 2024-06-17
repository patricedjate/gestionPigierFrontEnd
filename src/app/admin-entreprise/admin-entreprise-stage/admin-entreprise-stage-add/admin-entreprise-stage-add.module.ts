import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseStageAddRoutingModule } from './admin-entreprise-stage-add-routing.module';
import { AdminEntrepriseStageAddComponent } from './admin-entreprise-stage-add.component';


@NgModule({
  declarations: [
    AdminEntrepriseStageAddComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseStageAddRoutingModule
  ]
})
export class AdminEntrepriseStageAddModule { }
