import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminEtudiantProfilComponent} from "../admin-etudiant-profil/admin-etudiant-profil.component";
import {AdminEtudiantDashboardComponent} from "./admin-etudiant-dashboard.component";

const routes: Routes = [
  {
    path: 'profil',
    component: AdminEtudiantDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEtudiantDashboardRoutingModule { }
