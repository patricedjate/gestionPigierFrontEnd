import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminEtudiantProfilComponent} from "./admin-etudiant-profil.component";

const routes: Routes = [
  {
    path: 'profil',
    component: AdminEtudiantProfilComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEtudiantProfilRoutingModule { }
