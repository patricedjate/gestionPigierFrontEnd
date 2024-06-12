import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VueLoginIndexComponent} from "../../vue/vue-login/vue-login-index/vue-login-index.component";
import {AdminEtudiantProfilComponent} from "../admin-etudiant-profil/admin-etudiant-profil.component";
import {AdminEtudiantDashboardComponent} from "../admin-etudiant-dashboard/admin-etudiant-dashboard.component";
import {AdminEtudiantStageComponent} from "./admin-etudiant-stage.component";
import {
  AdminEtudiantStageDetailsComponent
} from "./admin-etudiant-stage-details/admin-etudiant-stage-details.component";

const routes: Routes = [
  {
    path: '',
    component: AdminEtudiantStageComponent,
  },
  {
    path: 'detail/:id',
    component: AdminEtudiantStageDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEtudiantStageRoutingModule { }
