import {Injectable} from '@angular/core';
import {GlobalConstant} from '../constant';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  constructor() {
  }

  get secureToken(): string | null {
    return localStorage.getItem(GlobalConstant.StorageKeyName.SECURE_TOKEN_STORAGE_KEY);
  }

  set secureToken(value: string | null) {
    if (value == null) {
      return;
    }
    localStorage.setItem(GlobalConstant.StorageKeyName.SECURE_TOKEN_STORAGE_KEY, value);
  }
}
