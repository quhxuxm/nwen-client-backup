import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GlobalConstant} from '../../constant';
import {ExecutorRequest} from '../../service/executor-request';
import {
  ExecutorService, ExecutorServiceBusinessExceptionCallback, ExecutorServiceClientExceptionCallback, ExecutorServiceServerExceptionCallback,
  ExecutorServiceSuccessCallback
} from '../../service/executor.service';
import {AuthenticateRequestPayload} from '../../service/payload/request/authenticate-request-payload';
import {AuthenticateResponsePayload} from '../../service/payload/response/authenticate-response-payload';

@Component({
  selector: 'nwen-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private executorService: ExecutorService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,
        Validators.maxLength(GlobalConstant.Common.USERNAME_MAX_LENGTH),
        Validators.minLength(GlobalConstant.Common.USERNAME_MIN_LENGTH),
        Validators.pattern(GlobalConstant.Common.USERNAME_PATTERN)]],
      password: ['', [Validators.required,
        Validators.maxLength(GlobalConstant.Common.PASSWORD_MAX_LENGTH),
        Validators.minLength(GlobalConstant.Common.PASSWORD_MIN_LENGTH),
        Validators.pattern(GlobalConstant.Common.PASSWORD_PATTERN)]]
    });
  }

  public isControlValid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    if (control == null) {
      return false;
    }
    const changed = (control.dirty || control.touched);
    return !(control.invalid && changed);
  }

  public login() {
    const loginRequest: ExecutorRequest<AuthenticateRequestPayload> = new ExecutorRequest();
    const payload = new AuthenticateRequestPayload();
    payload.username = this.loginForm.value['username'];
    payload.password = this.loginForm.value['password'];
    loginRequest.payload = payload;
    const successCallback: ExecutorServiceSuccessCallback<AuthenticateResponsePayload> = response => {
      console.log(response.payload);
      const secureToken = response.header[GlobalConstant.ExecutorResponseHeaderName.SECURE_TOKEN];
      localStorage.setItem(GlobalConstant.ExecutorResponseHeaderName.SECURE_TOKEN, secureToken);
      this.router.navigateByUrl('/home');
    };
    const clientExceptionCallback: ExecutorServiceClientExceptionCallback = error => {
      this.loginForm.setErrors({
        clientError: 'client-connection'
      });
      return;
    };
    const serverExceptionCallback: ExecutorServiceServerExceptionCallback = response => {
      this.loginForm.setErrors({
        serverError: 'unknown'
      });
      return;
    };
    const businessExceptionCallback: ExecutorServiceBusinessExceptionCallback = response => {
      // Token server errors
      if ('USERNAME_IS_EMPTY' === response.payload.code) {
        this.loginForm.controls['username'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('PASSWORD_IS_EMPTY' === response.payload.code) {
        this.loginForm.controls['username'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('AUTH_ERROR' === response.payload.code) {
        this.loginForm.setErrors({
          authenticationFail: 'authentication-fail'
        });
        return;
      }
    };
    this.executorService.exec('/api/authenticate', loginRequest, successCallback,
      clientExceptionCallback, serverExceptionCallback, businessExceptionCallback);
  }
}
