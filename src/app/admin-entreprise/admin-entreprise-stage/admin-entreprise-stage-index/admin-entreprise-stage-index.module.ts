import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseStageIndexRoutingModule } from './admin-entreprise-stage-index-routing.module';
import { AdminEntrepriseStageIndexComponent } from './admin-entreprise-stage-index.component';


@NgModule({
  declarations: [
    AdminEntrepriseStageIndexComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseStageIndexRoutingModule
  ]
})
export class AdminEntrepriseStageIndexModule { }
