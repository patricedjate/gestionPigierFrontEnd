import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VueLoginIndexComponent} from "../../vue/vue-login/vue-login-index/vue-login-index.component";
import {AdminEtudiantProfilComponent} from "../admin-etudiant-profil/admin-etudiant-profil.component";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEtudiantStageRoutingModule { }
