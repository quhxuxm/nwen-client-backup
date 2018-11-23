import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ExecutorRequest} from '../../service/executor-request';
import {ExecutorService, ExecutorServiceExceptionCallback, ExecutorServiceSuccessCallback} from '../../service/executor.service';
import {RegisterRequestPayload} from '../../service/payload/request/register-request-payload';
import {RegisterResponsePayload} from '../../service/payload/response/register-response-payload';

@Component({
  selector: 'nwen-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    username: ['', Validators.required,
      Validators.max(40),
      Validators.min(3),
      Validators.pattern(
        '^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$')],
    password: ['', Validators.required,
      Validators.max(16),
      Validators.min(6),
      Validators.pattern('^.*(?=.{6,})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\\[\\]\\(\\)\\=\\-\\_\\+\\\\\\|\\<\\>\\,\\.\\/]).*$')],
    nickname: ['', Validators.required,
      Validators.max(40),
      Validators.min(2),
      Validators.pattern('^[\u4E00-\u9FA5A-Za-z0-9_]+$')]
  });

  constructor(private formBuilder: FormBuilder, private executorService: ExecutorService, private router: Router) {
  }

  ngOnInit() {
  }

  public register() {
    const registerRequest: ExecutorRequest<RegisterRequestPayload> = new ExecutorRequest();
    const payload = new RegisterRequestPayload();
    payload.username = this.registerForm.value['username'];
    payload.password = this.registerForm.value['password'];
    payload.nickname = this.registerForm.value['nickname'];
    registerRequest.payload = payload;
    const successCallback: ExecutorServiceSuccessCallback<RegisterResponsePayload> = response => {
      console.log(response.payload);
      this.router.navigateByUrl('/login');
    };
    const errorCallback: ExecutorServiceExceptionCallback = response => {
      // Token server errors
      if ('REGISTER_TOKEN_IS_EMPTY_ERROR' === response.payload.code) {
        this.registerForm.controls['username'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_TOKEN_FORMAT_INCORRECT' === response.payload.code) {
        this.registerForm.controls['username'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_TOKEN_EXIST_ERROR' === response.payload.code) {
        this.registerForm.controls['username'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      // Password server errors
      if ('REGISTER_PASSWORD_IS_EMPTY_ERROR' === response.payload.code) {
        this.registerForm.controls['password'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_PASSWORD_FORMAT_INCORRECT' === response.payload.code) {
        this.registerForm.controls['password'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      // Nick name server errors
      if ('REGISTER_NICKNAME_IS_EMPTY_ERROR' === response.payload.code) {
        this.registerForm.controls['nickname'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_NICKNAME_FORMAT_INCORRECT' === response.payload.code) {
        this.registerForm.controls['nickname'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_NICKNAME_EXIST_ERROR' === response.payload.code) {
        this.registerForm.controls['nickname'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_NICKNAME_MAX_LENGTH_INCORRECT' === response.payload.code) {
        this.registerForm.controls['nickname'].setErrors({
          'server': response.payload.code
        });
        return;
      }
      if ('REGISTER_NICKNAME_MIN_LENGTH_INCORRECT' === response.payload.code) {
        this.registerForm.controls['nickname'].setErrors({
          'server': response.payload.code
        });
        return;
      }
    };
    this.executorService.exec('/api/register', registerRequest, successCallback, errorCallback);
  }
}
