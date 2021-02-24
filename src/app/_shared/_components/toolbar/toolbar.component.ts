import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SidenavService} from '../../_services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() sidenavSwitch: EventEmitter<boolean> = new EventEmitter<boolean>();

  items: MenuItem[] = [];


  constructor(private readonly sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload'
      }
    ];
  }


  onSidenavSwitch(): void {
    this.sidenavService.getSidenavStatus().subscribe(s => {
      this.sidenavSwitch.emit(!s);
    });
  }

}
