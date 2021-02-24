import {NgModule} from '@angular/core';
import {AdminPanelComponent} from './admin-panel.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {
}
