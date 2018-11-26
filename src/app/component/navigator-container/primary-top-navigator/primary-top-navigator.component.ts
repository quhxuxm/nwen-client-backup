import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {AuthenticationRelated} from '../../../service/authentication-related';
import {SecurityService} from '../../../service/security.service';

@Component({
  selector: 'nwen-primary-top-navigator',
  templateUrl: './primary-top-navigator.component.html',
  styleUrls: ['./primary-top-navigator.component.scss']
})
export class PrimaryTopNavigatorComponent extends AuthenticationRelated implements OnInit {
  @Input()
  sideNavigator: MatSidenav;
  @Output()
  toggleSecondaryTopNavigatorEvent: EventEmitter<any>;

  constructor(securityService: SecurityService) {
    super(securityService);
    this.toggleSecondaryTopNavigatorEvent = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  toggleSideNavigator() {
    this.sideNavigator.toggle();
  }

  toggleSecondaryTopNavigator() {
    this.toggleSecondaryTopNavigatorEvent.emit();
  }
}
