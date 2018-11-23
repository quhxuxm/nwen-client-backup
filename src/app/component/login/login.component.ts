import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ExecutorRequest} from '../../service/executor-request';
import {ExecutorService, ExecutorServiceExceptionCallback, ExecutorServiceSuccessCallback} from '../../service/executor.service';
import {AuthenticateRequestPayload} from '../../service/payload/request/authenticate-request-payload';
import {AuthenticateResponsePayload} from '../../service/payload/response/authenticate-response-payload';

@Component({
  selector: 'nwen-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required,
      Validators.max(40),
      Validators.min(3),
      Validators.pattern(
        '^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$')],
    password: ['', Validators.required,
      Validators.max(16),
      Validators.min(6),
      Validators.pattern('^.*(?=.{6,})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\\[\\]\\(\\)\\=\\-\\_\\+\\\\\\|\\<\\>\\,\\.\\/]).*$')]
  });

  constructor(private formBuilder: FormBuilder, private executorService: ExecutorService, private router: Router) {
  }

  ngOnInit() {
  }

  public register() {
    const loginRequest: ExecutorRequest<AuthenticateRequestPayload> = new ExecutorRequest();
    const payload = new AuthenticateRequestPayload();
    payload.username = this.loginForm.value['username'];
    payload.password = this.loginForm.value['password'];
    loginRequest.payload = payload;
    const successCallback: ExecutorServiceSuccessCallback<AuthenticateResponsePayload> = response => {
      console.log(response.payload);
      this.router.navigateByUrl('/login');
    };
    const errorCallback: ExecutorServiceExceptionCallback = response => {
      // Token server errors
      if ('REGISTER_TOKEN_IS_EMPTY_ERROR' === response.payload.code) {
        this.loginForm.controls['username'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_TOKEN_FORMAT_INCORRECT' === response.payload.code) {
        this.loginForm.controls['username'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_TOKEN_EXIST_ERROR' === response.payload.code) {
        this.loginForm.controls['username'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      // Password server errors
      if ('REGISTER_PASSWORD_IS_EMPTY_ERROR' === response.payload.code) {
        this.loginForm.controls['password'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_PASSWORD_FORMAT_INCORRECT' === response.payload.code) {
        this.loginForm.controls['password'].setErrors({
          'server': response.payload.code
        });
        return;
      }
    };
    this.executorService.exec('/api/authenticate', loginRequest, successCallback, errorCallback);
  }
}
