import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MegaMenuModule} from 'primeng/megamenu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    MegaMenuModule
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    MegaMenuModule

  ]
})
export class SharedModule {
}
