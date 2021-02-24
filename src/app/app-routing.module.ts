import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./_pages/_public/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./_pages/_public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./_pages/_private/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
