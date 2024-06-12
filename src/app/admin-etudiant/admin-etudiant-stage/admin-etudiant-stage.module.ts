import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEtudiantStageRoutingModule } from './admin-etudiant-stage-routing.module';
import { AdminEtudiantStageComponent } from './admin-etudiant-stage.component';
import { AdminEtudiantStageDetailsComponent } from './admin-etudiant-stage-details/admin-etudiant-stage-details.component';


@NgModule({
  declarations: [
    AdminEtudiantStageComponent,
    AdminEtudiantStageDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminEtudiantStageRoutingModule
  ]
})
export class AdminEtudiantStageModule { }
