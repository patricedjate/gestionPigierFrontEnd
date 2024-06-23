import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseRoutingModule } from './admin-entreprise-routing.module';
import { AdminEntrepriseComponent } from './admin-entreprise.component';
import {
    AdminEtudiantComponentsModule
} from "../admin-etudiant/admin-etudiant-components/admin-etudiant-components.module";
import {AdminEntrepriseComponentsModule} from "./admin-entreprise-components/admin-entreprise-components.module";


@NgModule({
  declarations: [
    AdminEntrepriseComponent
  ],
  imports: [
    CommonModule,
    AdminEntrepriseRoutingModule,
    AdminEntrepriseComponentsModule
  ]
})
export class AdminEntrepriseModule { }
