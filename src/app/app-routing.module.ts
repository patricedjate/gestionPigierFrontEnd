import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
      import('./vue/vue.module').then(
        (m) => m.VueModule
      ),
  },
  {
    path: 'vue',
    loadChildren: () =>
      import('./vue/vue.module').then(
        (m) => m.VueModule
      ),
  },
  {
    path: 'entreprise',
    loadChildren: () =>
      import('./admin-entreprise/admin-entreprise.module').then(
        (m) => m.AdminEntrepriseModule
      ),
  },
  {
    path: 'etudiant',
    loadChildren: () =>
      import('./admin-etudiant/admin-etudiant.module').then(
        (m) => m.AdminEtudiantModule
      ),
  },
  {
    path: 'construction',
    loadChildren: () =>
      import('./vue/vue-not-found/vue-not-found.module').then(
        (m) => m.VueNotFoundModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
