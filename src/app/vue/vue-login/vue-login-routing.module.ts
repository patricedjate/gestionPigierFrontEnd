import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VueLoginIndexComponent} from "./vue-login-index/vue-login-index.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VueLoginIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueLoginRoutingModule { }
