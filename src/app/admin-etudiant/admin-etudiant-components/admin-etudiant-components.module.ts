import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEtudiantComponentsRoutingModule } from './admin-etudiant-components-routing.module';
import { AdminEtudiantFooterComponent } from './admin-etudiant-footer/admin-etudiant-footer.component';
import { AdminEtudiantHeaderComponent } from './admin-etudiant-header/admin-etudiant-header.component';
import { AdminEtudiantSidebarComponent } from './admin-etudiant-sidebar/admin-etudiant-sidebar.component';


@NgModule({
    declarations: [
        AdminEtudiantFooterComponent,
        AdminEtudiantHeaderComponent,
        AdminEtudiantSidebarComponent
    ],
  exports: [
    AdminEtudiantSidebarComponent,
    AdminEtudiantHeaderComponent
  ],
    imports: [
        CommonModule,
        AdminEtudiantComponentsRoutingModule
    ]
})
export class AdminEtudiantComponentsModule { }
