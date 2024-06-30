import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseDashboardRoutingModule } from './admin-entreprise-dashboard-routing.module';
import { AdminEntrepriseDashboardComponent } from './admin-entreprise-dashboard.component';


@NgModule({
  declarations: [
    AdminEntrepriseDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseDashboardRoutingModule
  ]
})
export class AdminEntrepriseDashboardModule { }
