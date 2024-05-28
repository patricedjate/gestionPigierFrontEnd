import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseComponentsRoutingModule } from './admin-entreprise-components-routing.module';
import { AdminEntrepriseFooterComponent } from './admin-entreprise-footer/admin-entreprise-footer.component';
import { AdminEntrepriseHeaderComponent } from './admin-entreprise-header/admin-entreprise-header.component';
import { AdminEntrepriseSidebarComponent } from './admin-entreprise-sidebar/admin-entreprise-sidebar.component';


@NgModule({
  declarations: [
    AdminEntrepriseFooterComponent,
    AdminEntrepriseHeaderComponent,
    AdminEntrepriseSidebarComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseComponentsRoutingModule
  ]
})
export class AdminEntrepriseComponentsModule { }
