import { Component, OnInit } from '@angular/core';
import {SidenavService} from '../../../_shared/_services/sidenav.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  sidenavStatus = false;

  constructor(private readonly sidenavService: SidenavService) {
    sidenavService.sidenavStatus = false;

  }

  ngOnInit(): void {
    this.sidenavService.getSidenavStatus().subscribe(s => {
      this.sidenavStatus = s;
      this.onSidenavSwitch(this.sidenavStatus);
    });

  }


  onSidenavSwitch($event: boolean): void {
    this.sidenavService.sidenavStatus = $event;
  }

}
