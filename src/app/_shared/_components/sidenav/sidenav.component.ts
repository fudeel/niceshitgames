import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SidenavService} from '../../_services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() hide: EventEmitter<boolean> = new EventEmitter<boolean>();

  status: any;

  constructor(public sidenavService: SidenavService) {
  }

  ngOnInit(): void {

  }

  onHide(): void {
    this.hide.emit(false);
  }
}
