import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEtudiantRoutingModule } from './admin-etudiant-routing.module';
import { AdminEtudiantComponent } from './admin-etudiant.component';
import {AdminEtudiantComponentsModule} from "./admin-etudiant-components/admin-etudiant-components.module";



@NgModule({
  declarations: [


    AdminEtudiantComponent
  ],
  imports: [
    CommonModule,
    AdminEtudiantRoutingModule,
    AdminEtudiantComponentsModule
  ]
})
export class AdminEtudiantModule { }
