import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEtudiantDashboardRoutingModule } from './admin-etudiant-dashboard-routing.module';
import { AdminEtudiantDashboardComponent } from './admin-etudiant-dashboard.component';


@NgModule({
  declarations: [
    AdminEtudiantDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminEtudiantDashboardRoutingModule
  ]
})
export class AdminEtudiantDashboardModule { }
