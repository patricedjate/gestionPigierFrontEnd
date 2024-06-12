import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VueComponent} from "./vue.component";

const routes: Routes = [
  /*{
     path: '',
     loadChildren: () =>
       import('./feature-module/feature-module.module').then(
         (m) => m.FeatureModuleModule
       ),
   }, */
  {
    path: '',
    loadChildren: () =>
      import('./vue-login/vue-login.module').then(
        (m) => m.VueLoginModule
      ),
  },
  {
    path: 'register',
    component: VueComponent,
    loadChildren: () =>
      import('./vue-register/vue-register.module').then(
        (m) => m.VueRegisterModule
      ),
  },

  {
    path: 'mdp-forget',
    loadChildren: () =>
      import('./vue-mdp-forget/vue-mdp-forget.module').then(
        (m) => m.VueMdpForgetModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueRoutingModule { }
