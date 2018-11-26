import {Component, OnInit} from '@angular/core';
import {AuthenticationRelated} from '../../../service/authentication-related';
import {SecurityService} from '../../../service/security.service';

@Component({
  selector: 'nwen-side-navigator',
  templateUrl: './side-navigator.component.html',
  styleUrls: ['./side-navigator.component.scss']
})
export class SideNavigatorComponent extends AuthenticationRelated implements OnInit {
  constructor(securityService: SecurityService) {
    super(securityService);
  }

  ngOnInit() {
  }
}
