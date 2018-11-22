import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
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
  username: string;
  password: string;
  nickname: string;
  @ViewChild('registerForm')
  registerForm: FormGroup;

  constructor(private executorService: ExecutorService, private router: Router) {
  }

  ngOnInit() {
  }

  public register() {
    const registerRequest: ExecutorRequest<RegisterRequestPayload> = new ExecutorRequest();
    const payload = new RegisterRequestPayload();
    payload.username = this.username;
    payload.password = this.password;
    payload.nickname = this.nickname;
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
