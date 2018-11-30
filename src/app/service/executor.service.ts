/* tslint:disable:semicolon */
/// <reference >
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {GlobalConstant} from '../constant';
import {ExecutorRequest} from './executor-request';
import {ExecutorResponse} from './executor-response';
import {ExceptionResponsePayload} from './payload/response/exception-response-payload';
import {SecurityService} from './security.service';

export type ExecutorServiceServerExceptionCallback = (payload: any) => void;
export type ExecutorServiceClientExceptionCallback = (error: ErrorEvent) => void;
export type ExecutorServiceBusinessExceptionCallback = (executorResponse: ExecutorResponse<ExceptionResponsePayload>) => void;
export type ExecutorServiceSuccessCallback<ResponsePayloadType> = (executorResponse: ExecutorResponse<ResponsePayloadType>) => void;

@Injectable({
  providedIn: 'root'
})
export class ExecutorService {
  private defaultBusinessExceptionCallback: ExecutorServiceBusinessExceptionCallback = (executorResponse) => {
    if (executorResponse.payload.code === GlobalConstant.ExceptionPayloadCode.AUTH_ERROR) {
      this.router.navigateByUrl('/login');
    }
  };

  constructor(private httpClient: HttpClient, private securityService: SecurityService, private router: Router) {
  }

  exec<RequestPayloadType, ResponsePayloadType>(entryUrl: string, executorRequest: ExecutorRequest<RequestPayloadType>,
                                                successCallback: ExecutorServiceSuccessCallback<ResponsePayloadType>,
                                                clientExceptionCallback?: ExecutorServiceClientExceptionCallback,
                                                serverExceptionCallback?: ExecutorServiceServerExceptionCallback,
                                                businessExceptionCallback: ExecutorServiceBusinessExceptionCallback =
                                                  this.defaultBusinessExceptionCallback): void {
    const secureTokenInRequest: string | undefined = executorRequest.header[GlobalConstant.ExecutorRequestHeaderName.SECURE_TOKEN];
    if (!secureTokenInRequest) {
      if (this.securityService.secureToken) {
        executorRequest.header[GlobalConstant.ExecutorRequestHeaderName.SECURE_TOKEN] =
          this.securityService.secureToken;
      }
    }
    const responseObservable = this.httpClient.post<ExecutorResponse<ResponsePayloadType | ExceptionResponsePayload>>(entryUrl,
      executorRequest,
      {observe: 'response'});
    responseObservable.subscribe(response => {
      const executorResponse = response.body;
      if (executorResponse == null) {
        console.error('Can not get the executor response from the http response because of the executor response is null.');
        return;
      }
      if (!executorResponse.success) {
        console.error('There is a business error happen.');
        businessExceptionCallback(<ExecutorResponse<ExceptionResponsePayload>>executorResponse);
        return;
      }
      const secureToken: string | undefined = executorResponse.header[GlobalConstant.ExecutorResponseHeaderName.SECURE_TOKEN];
      if (secureToken) {
        this.securityService.secureToken = secureToken;
      }
      successCallback(<ExecutorResponse<ResponsePayloadType>>executorResponse);
    }, (error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        console.error('There is a client error happen.');
        if (clientExceptionCallback) {
          clientExceptionCallback(error.error);
        }
        return;
      }
      console.error('There is a server error happen.');
      if (serverExceptionCallback) {
        serverExceptionCallback(error.error);
      }
    });
  }
}
