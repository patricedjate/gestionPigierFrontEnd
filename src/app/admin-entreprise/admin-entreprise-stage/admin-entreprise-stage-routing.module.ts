import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AdminEntrepriseStageIndexComponent
} from "./admin-entreprise-stage-index/admin-entreprise-stage-index.component";
import {AdminEntrepriseStageAddComponent} from "./admin-entreprise-stage-add/admin-entreprise-stage-add.component";
import {AdminEntrepriseStageEditComponent} from "./admin-entreprise-stage-edit/admin-entreprise-stage-edit.component";
import {
  AdminEntrepriseStageDetailsComponent
} from "./admin-entreprise-stage-details/admin-entreprise-stage-details.component";

const routes: Routes = [
  {
    path:'',
    component: AdminEntrepriseStageIndexComponent
  },
  {
    path: 'add',
    component: AdminEntrepriseStageAddComponent,
  },
  {
    path: 'edit/:id',
    component: AdminEntrepriseStageEditComponent,
  },
  {
    path: 'details/:id',
    component: AdminEntrepriseStageDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEntrepriseStageRoutingModule { }
