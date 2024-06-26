import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VueNotFoundComponent} from "./vue-not-found.component";

const routes: Routes = [
  {
    path :"",
    component : VueNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueNotFoundRoutingModule { }
