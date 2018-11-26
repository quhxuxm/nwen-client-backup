import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SecurityService} from '../../../service/security.service';

@Component({
  selector: 'nwen-primary-top-navigator',
  templateUrl: './primary-top-navigator.component.html',
  styleUrls: ['./primary-top-navigator.component.scss']
})
export class PrimaryTopNavigatorComponent implements OnInit {
  @Input()
  sideNavigator: MatSidenav;
  @Output()
  toggleSecondaryTopNavigatorEvent: EventEmitter<any>;

  constructor(private securityService: SecurityService) {
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

  isAuthenticated(): boolean {
    return this.securityService.authenticatedAuthor != null;
  }
}
