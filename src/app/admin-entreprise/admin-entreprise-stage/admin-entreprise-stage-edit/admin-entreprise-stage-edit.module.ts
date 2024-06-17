import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseStageEditRoutingModule } from './admin-entreprise-stage-edit-routing.module';
import { AdminEntrepriseStageEditComponent } from './admin-entreprise-stage-edit.component';


@NgModule({
  declarations: [
    AdminEntrepriseStageEditComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseStageEditRoutingModule
  ]
})
export class AdminEntrepriseStageEditModule { }
