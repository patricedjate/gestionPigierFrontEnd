import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminEntrepriseDashboardComponent} from "./admin-entreprise-dashboard.component";

const routes: Routes = [
  {
    path : "",
    component : AdminEntrepriseDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEntrepriseDashboardRoutingModule { }
