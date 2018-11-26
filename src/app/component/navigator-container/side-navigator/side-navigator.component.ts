import {Component, OnInit} from '@angular/core';
import {SecurityService} from '../../../service/security.service';

@Component({
  selector: 'nwen-side-navigator',
  templateUrl: './side-navigator.component.html',
  styleUrls: ['./side-navigator.component.scss']
})
export class SideNavigatorComponent implements OnInit {
  constructor(private securityService: SecurityService) {
  }

  ngOnInit() {
  }

  logout(): void {
    this.securityService.secureToken = null;
  }

  isAuthenticated(): boolean {
    return this.securityService.authenticatedAuthor != null;
  }
}
