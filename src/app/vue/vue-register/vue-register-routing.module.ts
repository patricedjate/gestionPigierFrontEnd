import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VueRegisterIndexComponent} from "./vue-register-index/vue-register-index.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: VueRegisterIndexComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueRegisterRoutingModule { }
