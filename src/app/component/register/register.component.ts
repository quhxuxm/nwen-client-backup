import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {GlobalConstant} from '../../constant';
import {ExecutorRequest} from '../../service/executor-request';
import {
  ExecutorService, ExecutorServiceBusinessExceptionCallback, ExecutorServiceClientExceptionCallback, ExecutorServiceServerExceptionCallback,
  ExecutorServiceSuccessCallback
} from '../../service/executor.service';
import {RegisterRequestPayload} from '../../service/payload/request/register-request-payload';
import {RegisterResponsePayload} from '../../service/payload/response/register-response-payload';

@Component({
  selector: 'nwen-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private executorService: ExecutorService, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required,
        Validators.maxLength(GlobalConstant.Common.USERNAME_MAX_LENGTH),
        Validators.minLength(GlobalConstant.Common.USERNAME_MIN_LENGTH),
        Validators.pattern(GlobalConstant.Common.USERNAME_PATTERN)]],
      password: ['', [Validators.required,
        Validators.maxLength(GlobalConstant.Common.PASSWORD_MAX_LENGTH),
        Validators.minLength(GlobalConstant.Common.PASSWORD_MIN_LENGTH),
        Validators.pattern(GlobalConstant.Common.PASSWORD_PATTERN)]],
      nickname: ['', [Validators.required,
        Validators.maxLength(GlobalConstant.Common.NICKNAME_MAX_LENGTH),
        Validators.minLength(GlobalConstant.Common.NICKNAME_MIN_LENGTH),
        Validators.pattern(GlobalConstant.Common.NICKNAME_PATTERN)]]
    });
  }

  public isControlValid(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    if (control == null) {
      return false;
    }
    const changed = (control.dirty || control.touched);
    return !(control.invalid && changed);
  }

  public register(): void {
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
    const clientErrorCallback: ExecutorServiceClientExceptionCallback = error => {
      this.registerForm.setErrors({
        clientError: 'client-connection'
      });
      return;
    };
    const serverErrorCallback: ExecutorServiceServerExceptionCallback = error => {
      this.registerForm.setErrors({
        serverError: 'unknown'
      });
      return;
    };
    const businessErrorCallback: ExecutorServiceBusinessExceptionCallback = response => {
      // Token server errors
      if ('USERNAME_EXIST' === response.payload.code) {
        this.registerForm.controls['username'].setErrors({
          serverError: response.payload.code
        });
        return;
      }
      if ('USERNAME_IS_EMPTY' === response.payload.code) {
        this.registerForm.controls['username'].setErrors({
          serverError: response.payload.code
        });
        return;
      }
      if ('USERNAME_FORMAT_INCORRECT' === response.payload.code) {
        this.registerForm.controls['username'].setErrors({
          serverError: response.payload.code
        });
        return;
      }
      // Password server errors
      if ('PASSWORD_IS_EMPTY' === response.payload.code) {
        this.registerForm.controls['password'].setErrors({
          serverError: response.payload.code
        });
        return;
      }
      if ('PASSWORD_FORMAT_INCORRECT' === response.payload.code) {
        this.registerForm.controls['password'].setErrors({
          serverError: response.payload.code
        });
        return;
      }
      // Nick name server errors
      if ('NICKNAME_IS_EMPTY' === response.payload.code) {
        this.registerForm.controls['nickname'].setErrors({
          serverError: response.payload.code
        });
        return;
      }
      if ('NICKNAME_FORMAT_INCORRECT' === response.payload.code) {
        this.registerForm.controls['nickname'].setErrors({
          serverError: response.payload.code
        });
        return;
      }
      if ('NICKNAME_EXIST' === response.payload.code) {
        this.registerForm.controls['nickname'].setErrors({
          serverError: response.payload.code
        });
        return;
      }
    };
    this.executorService.exec(
      '/api/register', registerRequest, successCallback, clientErrorCallback, serverErrorCallback, businessErrorCallback
    );
  }
}
