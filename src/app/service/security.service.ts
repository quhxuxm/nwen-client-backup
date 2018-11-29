import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {GlobalConstant} from '../constant';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private _secureToken: string | null;
  private _jwtHelper: JwtHelperService;

  constructor() {
    this._jwtHelper = new JwtHelperService();
    const secureTokenFromStorage = localStorage.getItem(GlobalConstant.StorageKeyName.SECURE_TOKEN);
    if (secureTokenFromStorage == null) {
      return;
    }
    this._secureToken = secureTokenFromStorage;
  }

  get secureToken(): string | null {
    return this._secureToken;
  }

  set secureToken(value: string | null) {
    if (value == null) {
      localStorage.clear();
      this._secureToken = null;
      return;
    }
    localStorage.setItem(GlobalConstant.StorageKeyName.SECURE_TOKEN, value);
    this._secureToken = value;
  }

  isSecureTokenExpired(): boolean {
    if (!this._secureToken) {
      return true;
    }
    const expiration = this._jwtHelper.getTokenExpirationDate(this._secureToken);
    if (!expiration) {
      return true;
    }
    return new Date().getTime() > expiration.getTime();
  }
}
