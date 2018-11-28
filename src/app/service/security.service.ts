import {Injectable} from '@angular/core';
import {GlobalConstant} from '../constant';
import {AuthenticateResponsePayload} from './payload/response/authenticate-response-payload';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private _authenticatedAuthor: AuthenticateResponsePayload | null;

  constructor() {
    const authenticatedAuthorString = localStorage.getItem(GlobalConstant.StorageKeyName.AUTHENTICATED_AUTHOR);
    if (authenticatedAuthorString == null) {
      return;
    }
    this._authenticatedAuthor = JSON.parse(authenticatedAuthorString);
  }

  get authenticatedAuthor(): AuthenticateResponsePayload | null {
    return this._authenticatedAuthor;
  }

  set authenticatedAuthor(value: AuthenticateResponsePayload | null) {
    if (value == null) {
      localStorage.clear();
      this._authenticatedAuthor = null;
      return;
    }
    localStorage.setItem(GlobalConstant.StorageKeyName.AUTHENTICATED_AUTHOR, JSON.stringify(value));
    this._authenticatedAuthor = value;
  }
}
