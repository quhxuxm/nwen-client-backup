export module GlobalConstant {
  export module ExecutorRequestHeaderName {
    export const SECURE_TOKEN = 'SECURE_TOKEN';
  }
  export module ExecutorResponseHeaderName {
    export const SECURE_TOKEN = 'SECURE_TOKEN';
  }
  export module StorageKeyName {
    export const SECURE_TOKEN_STORAGE_KEY = 'SECURE_TOKEN';
  }
  export module Common {
    export const PASSWORD_PATTERN = /((?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w])*/;
    export const NICKNAME_PATTERN = /[\u4e00-\u9fa5\w]*/;
    export const USERNAME_MAX_LENGTH = 40;
    export const USERNAME_MIN_LENGTH = 3;
    export const PASSWORD_MAX_LENGTH = 16;
    export const PASSWORD_MIN_LENGTH = 6;
    export const NICKNAME_MAX_LENGTH = 12;
    export const NICKNAME_MIN_LENGTH = 2;
  }
}
