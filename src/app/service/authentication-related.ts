import {SecurityService} from './security.service';

export abstract class AuthenticationRelated {
  protected constructor(private _securityService: SecurityService) {
  }

  isAuthenticated(): boolean {
    if (!this._securityService.authenticatedAuthor) {
      return false;
    }
    if (!this._securityService.authenticatedAuthor.secureToken) {
      return false;
    }
    return true;
  }

  clearAuthentication(): void {
    this._securityService.authenticatedAuthor = null;
  }
}
