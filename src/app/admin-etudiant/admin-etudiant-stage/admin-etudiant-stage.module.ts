import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEtudiantStageRoutingModule } from './admin-etudiant-stage-routing.module';
import { AdminEtudiantStageComponent } from './admin-etudiant-stage.component';


@NgModule({
  declarations: [
    AdminEtudiantStageComponent
  ],
  imports: [
    CommonModule,
    AdminEtudiantStageRoutingModule
  ]
})
export class AdminEtudiantStageModule { }
