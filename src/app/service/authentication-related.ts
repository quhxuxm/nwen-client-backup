import {SecurityService} from './security.service';

export abstract class AuthenticationRelated {
  protected constructor(private _securityService: SecurityService) {
  }

  isAuthenticated(): boolean {
    return this._securityService.secureToken != null;
  }

  clearAuthentication(): void {
    this._securityService.secureToken = null;
  }
}
