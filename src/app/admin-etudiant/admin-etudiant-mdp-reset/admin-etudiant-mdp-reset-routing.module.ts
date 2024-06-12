import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminEtudiantProfilComponent} from "../admin-etudiant-profil/admin-etudiant-profil.component";
import {AdminEtudiantMdpResetComponent} from "./admin-etudiant-mdp-reset.component";

const routes: Routes = [
  {
    path: '',
    component: AdminEtudiantMdpResetComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEtudiantMdpResetRoutingModule { }
