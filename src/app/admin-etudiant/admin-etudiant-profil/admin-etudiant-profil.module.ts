import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEtudiantProfilRoutingModule } from './admin-etudiant-profil-routing.module';
import { AdminEtudiantProfilComponent } from './admin-etudiant-profil.component';


@NgModule({
  declarations: [
    AdminEtudiantProfilComponent
  ],
  imports: [
    CommonModule,
    AdminEtudiantProfilRoutingModule
  ]
})
export class AdminEtudiantProfilModule { }
