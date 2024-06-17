import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseRoutingModule } from './admin-entreprise-routing.module';
import { AdminEntrepriseComponent } from './admin-entreprise.component';


@NgModule({
  declarations: [
    AdminEntrepriseComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseRoutingModule
  ]
})
export class AdminEntrepriseModule { }
