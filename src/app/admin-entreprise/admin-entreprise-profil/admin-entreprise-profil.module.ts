import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseProfilRoutingModule } from './admin-entreprise-profil-routing.module';
import { AdminEntrepriseProfilComponent } from './admin-entreprise-profil.component';


@NgModule({
  declarations: [
    AdminEntrepriseProfilComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseProfilRoutingModule
  ]
})
export class AdminEntrepriseProfilModule { }
