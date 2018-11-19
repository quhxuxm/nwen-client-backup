import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'nwen-primary-top-navigator',
  templateUrl: './primary-top-navigator.component.html',
  styleUrls: ['./primary-top-navigator.component.scss']
})
export class PrimaryTopNavigatorComponent implements OnInit {
  @Input()
  sideNavigator: MatSidenav;
  @Output()
  toggleSecondaryTopNav: EventEmitter;

  constructor() {
    this.toggleSecondaryTopNav = new EventEmitter();
  }

  ngOnInit() {
  }

  toggleSideNavigator() {
    this.sideNavigator.toggle();
  }

  toggleSecondaryTopNavigator() {
    this.toggleSecondaryTopNav.emit();
  }
}
