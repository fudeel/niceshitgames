import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SidenavService} from '../../_services/sidenav.service';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();

  status: any;
  items: MenuItem[] = [];

  constructor(public sidenavService: SidenavService) {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Homepage',
        icon: 'pi pi-fw pi-home',
        routerLink: ['./homepage'],
        routerLinkActiveOptions: { exact: true },
      }
    ];
  }

  onHide(): void {
    this.hide.emit(false);
  }
}
