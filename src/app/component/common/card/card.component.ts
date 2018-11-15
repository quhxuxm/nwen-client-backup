import {Component, OnInit} from '@angular/core';
import {ExecutorRequest} from '../../../service/executor-request';
import {ExecutorResponse} from '../../../service/executor-response';
import {ExecutorService} from '../../../service/executor.service';
import {AuthenticateRequestPayload} from '../../../service/payload/request/authenticate-request-payload';
import {RegisterRequestPayload} from '../../../service/payload/request/register-request-payload';
import {AuthenticateResponsePayload} from '../../../service/payload/response/authenticate-response-payload';
import {RegisterResponsePayload} from '../../../service/payload/response/register-response-payload';

@Component({
  selector: 'nwen-common-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor(private executorService: ExecutorService) {
  }

  ngOnInit() {
    const authRequestPayload: AuthenticateRequestPayload = new AuthenticateRequestPayload('USERNAME_1', 'password');
    const authRequest: ExecutorRequest<AuthenticateRequestPayload> = new ExecutorRequest<AuthenticateRequestPayload>();
    authRequest.payload = authRequestPayload;
    this.executorService.exec('/api/authenticate', authRequest,
      (executorResponse: ExecutorResponse<AuthenticateResponsePayload>) => {
        console.log('Success response start ========================');
        console.log(executorResponse.payload);
        console.log('Success response end ========================');
      }, executorExceptionResponse => {
        console.log('Exception response start ========================');
        console.log(executorExceptionResponse.payload);
        console.log('Exception response end ========================');
      });
  }

  sendRegisterRequest(): void {
    const registerRequestPayload: RegisterRequestPayload = new RegisterRequestPayload('USERNAME_1', 'password', 'USERNAME_1');
    const registerRequest: ExecutorRequest<RegisterRequestPayload> = new ExecutorRequest<RegisterRequestPayload>();
    registerRequest.payload = registerRequestPayload;
    this.executorService.exec('/api/register', registerRequest,
      (executorResponse: ExecutorResponse<RegisterResponsePayload>) => {
        console.log('Success response start ========================');
        console.log(executorResponse.payload);
        console.log('Success response end ========================');
      }, executorExceptionResponse => {
        console.log('Exception response start ========================');
        console.log(executorExceptionResponse.payload);
        console.log('Exception response end ========================');
      });
  }
}
