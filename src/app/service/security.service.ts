import {Injectable} from '@angular/core';
import {GlobalConstant} from '../constant';
import {AuthenticatedAuthor} from './authenticated-author';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private _authenticatedAuthor: AuthenticatedAuthor | null;
  private _secureToken: string | null;

  constructor() {
    this._secureToken = localStorage.getItem(GlobalConstant.StorageKeyName.SECURE_TOKEN_STORAGE_KEY);
    if (this._secureToken) {
      this._authenticatedAuthor = new AuthenticatedAuthor();
    }
  }

  get secureToken(): string | null {
    return this._secureToken;
  }

  set secureToken(value: string | null) {
    if (value == null) {
      localStorage.clear();
      this._authenticatedAuthor = null;
      this._secureToken = null;
      return;
    }
    localStorage.setItem(GlobalConstant.StorageKeyName.SECURE_TOKEN_STORAGE_KEY, value);
    this._secureToken = value;
    this._authenticatedAuthor = new AuthenticatedAuthor();
  }

  get authenticatedAuthor(): AuthenticatedAuthor | null {
    return this._authenticatedAuthor;
  }
}
