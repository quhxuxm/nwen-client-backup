export module GlobalConstant {
  export module ExecutorRequestHeaderName {
    export const SECURE_TOKEN = 'SECURE_TOKEN';
  }
  export module ExecutorResponseHeaderName {
    export const SECURE_TOKEN = 'SECURE_TOKEN';
  }
  export module ExceptionPayloadCode {
    export const AUTH_ERROR = 'AUTH_ERROR';
  }
  export module StorageKeyName {
    export const SECURE_TOKEN = 'SECURE_TOKEN';
  }
  export module Common {
    export const PASSWORD_PATTERN = /(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&<>/\,\.\(\)\\\^])[A-Za-z\d$@!%*#?&<>/\,\.\(\)\\\^]+/;
    export const NICKNAME_PATTERN = /[\u4e00-\u9fa5\w]+/;
    export const USERNAME_PATTERN = /([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])+/;
    export const USERNAME_MAX_LENGTH = 40;
    export const USERNAME_MIN_LENGTH = 3;
    export const PASSWORD_MAX_LENGTH = 16;
    export const PASSWORD_MIN_LENGTH = 8;
    export const NICKNAME_MAX_LENGTH = 12;
    export const NICKNAME_MIN_LENGTH = 2;
  }
}
