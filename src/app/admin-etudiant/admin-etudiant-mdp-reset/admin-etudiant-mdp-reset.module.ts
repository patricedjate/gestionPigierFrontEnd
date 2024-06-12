import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEtudiantMdpResetRoutingModule } from './admin-etudiant-mdp-reset-routing.module';
import { AdminEtudiantMdpResetComponent } from './admin-etudiant-mdp-reset.component';


@NgModule({
  declarations: [
    AdminEtudiantMdpResetComponent
  ],
  imports: [
    CommonModule,
    AdminEtudiantMdpResetRoutingModule
  ]
})
export class AdminEtudiantMdpResetModule { }
