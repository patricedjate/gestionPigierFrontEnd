import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEntrepriseStageRoutingModule } from './admin-entreprise-stage-routing.module';
import { AdminEntrepriseStageDetailsComponent } from './admin-entreprise-stage-details/admin-entreprise-stage-details.component';
import { AdminEntrepriseStageAddComponent } from './admin-entreprise-stage-add/admin-entreprise-stage-add.component';
import { AdminEntrepriseStageIndexComponent } from './admin-entreprise-stage-index/admin-entreprise-stage-index.component';
import { AdminEntrepriseStageEditComponent } from './admin-entreprise-stage-edit/admin-entreprise-stage-edit.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminEntrepriseStageDetailsComponent,
    AdminEntrepriseStageAddComponent,
    AdminEntrepriseStageIndexComponent,
    AdminEntrepriseStageEditComponent
  ],
    imports: [
        CommonModule,
        AdminEntrepriseStageRoutingModule,
        ReactiveFormsModule
    ]
})
export class AdminEntrepriseStageModule { }
