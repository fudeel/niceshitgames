import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  status$: Observable<boolean>;
  private statusSubject: Subject<boolean>;

  currentStatus = false;

  constructor() {
    this.statusSubject = new Subject<boolean>();
    this.status$ = this.statusSubject.asObservable();
  }


  set sidenavStatus(newValue: any) {
    this.currentStatus = newValue;
    this.status$ = newValue;
    this.statusSubject.next(newValue);
  }


  getSidenavStatus(): Observable<any> {
    return of(this.status$);
  }
}
