import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminEtudiantComponent} from "../admin-etudiant/admin-etudiant.component";
import {AdminEntrepriseComponent} from "./admin-entreprise.component";

const routes: Routes = [
  {
    path: 'stage',
    component: AdminEntrepriseComponent,
    loadChildren: () =>
      import('./admin-entreprise-stage/admin-entreprise-stage.module').then(
        (m) => m.AdminEntrepriseStageModule
      ),
  },
  {
    path: 'profil',
    component: AdminEntrepriseComponent,
    loadChildren: () =>
      import('./admin-entreprise-profil/admin-entreprise-profil.module').then(
        (m) => m.AdminEntrepriseProfilModule
      ),
  },
  {
    path: 'candidat',
    component: AdminEntrepriseComponent,
    loadChildren: () =>
      import('./admin-entreprise-candidat/admin-entreprise-candidat.module').then(
        (m) => m.AdminEntrepriseCandidatModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEntrepriseRoutingModule { }
