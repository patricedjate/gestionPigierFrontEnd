import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminEtudiantComponent} from "./admin-etudiant.component";

const routes: Routes = [
  {
     path: 'profil',
    component: AdminEtudiantComponent,
     loadChildren: () =>
       import('./admin-etudiant-profil/admin-etudiant-profil.module').then(
         (m) => m.AdminEtudiantProfilModule
       ),
   },
  {
    path: 'rechercheStage',
    component: AdminEtudiantComponent,
    loadChildren: () =>
      import('./admin-etudiant-stage/admin-etudiant-stage.module').then(
        (m) => m.AdminEtudiantStageModule
      ),
  },
  {
    path: "",
    component: AdminEtudiantComponent,
    loadChildren: () =>
      import('./admin-etudiant-dashboard/admin-etudiant-dashboard.module').then(
        (m) => m.AdminEtudiantDashboardModule
      ),
  },
  {
    path: 'mdpReset',
    component: AdminEtudiantComponent,
    loadChildren: () =>
      import('./admin-etudiant-mdp-reset/admin-etudiant-mdp-reset.module').then(
        (m) => m.AdminEtudiantMdpResetModule
      ),
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEtudiantRoutingModule { }
