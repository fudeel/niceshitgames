import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./_pages/_public/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./_pages/_private/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
