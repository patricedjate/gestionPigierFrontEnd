import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseCandidatRoutingModule } from './admin-entreprise-candidat-routing.module';
import { AdminEntrepriseCandidatIndexComponent } from './admin-entreprise-candidat-index/admin-entreprise-candidat-index.component';
import { AdminEntrepriseCandidatDetailsComponent } from './admin-entreprise-candidat-details/admin-entreprise-candidat-details.component';


@NgModule({
  declarations: [
    AdminEntrepriseCandidatIndexComponent,
    AdminEntrepriseCandidatDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseCandidatRoutingModule
  ]
})
export class AdminEntrepriseCandidatModule { }
