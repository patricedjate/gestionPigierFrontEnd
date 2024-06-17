import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminEntrepriseProfilComponent} from "./admin-entreprise-profil.component";

const routes: Routes = [
  {
    path:'',
    component: AdminEntrepriseProfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEntrepriseProfilRoutingModule { }
