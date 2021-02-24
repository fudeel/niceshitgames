import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MegaMenuModule} from 'primeng/megamenu';
import { SidenavComponent } from './_components/sidenav/sidenav.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ToolbarComponent } from './_components/toolbar/toolbar.component';
import {SplitButtonModule} from 'primeng/splitbutton';


@NgModule({
  declarations: [SidenavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    MegaMenuModule,
    ToolbarModule,
    SplitButtonModule,
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    MegaMenuModule,
    SidenavComponent,
    ToolbarModule,
    ToolbarComponent,
    SplitButtonModule

  ]
})
export class SharedModule {
}
