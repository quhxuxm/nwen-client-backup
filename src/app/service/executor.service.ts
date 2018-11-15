/// <reference >
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {GlobalConstant} from '../constant';
import {ExecutorRequest} from './executor-request';
import {ExecutorResponse} from './executor-response';
import {ExceptionResponsePayload} from './payload/response/exception-response-payload';
import {SecurityService} from './security.service';

export type ExecutorServiceExceptionCallback = (executorResponse: ExecutorResponse<ExceptionResponsePayload>) => void;
export type ExecutorServiceSuccessCallback<ResponsePayloadType> = (executorResponse: ExecutorResponse<ResponsePayloadType>) => void;

@Injectable({
  providedIn: 'root'
})
export class ExecutorService {
  constructor(private httpClient: HttpClient, private securityService: SecurityService) {
  }

  exec<RequestPayloadType, ResponsePayloadType>(entryUrl: string, executorRequest: ExecutorRequest<RequestPayloadType>,
                                                successCallback: ExecutorServiceSuccessCallback<ResponsePayloadType>,
                                                exceptionCallback: ExecutorServiceExceptionCallback): void {
    const secureTokenInRequest: string | undefined = executorRequest.header[GlobalConstant.ExecutorRequestHeaderName.SECURE_TOKEN];
    if (!secureTokenInRequest) {
      const storedSecureToken: string | null = this.securityService.secureToken;
      if (storedSecureToken != null) {
        executorRequest.header[GlobalConstant.ExecutorRequestHeaderName.SECURE_TOKEN] = storedSecureToken;
      }
    }
    const responseObservable = this.httpClient.post<ExecutorResponse<ResponsePayloadType>>(entryUrl,
      executorRequest,
      {observe: 'response'});
    responseObservable.subscribe(response => {
      const executorResponse: ExecutorResponse<ResponsePayloadType> | null = response.body;
      if (executorResponse == null) {
        console.error('Can not get the executor response from the http response because of the executor response is null.');
        return;
      }
      const secureToken: string | undefined = executorResponse.header[GlobalConstant.ExecutorResponseHeaderName.SECURE_TOKEN];
      if (secureToken) {
        this.securityService.secureToken = secureToken;
      }
      successCallback(executorResponse);
    }, (error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
        console.error('There is a client error happen.');
        return;
      }
      console.error('There is a server error happen.');
      const executorExceptionResponse: ExecutorResponse<ExceptionResponsePayload> | null = error.error;
      if (executorExceptionResponse == null) {
        console.error('Can not get the executor response from the http response because of the executor response is null.');
        return;
      }
      exceptionCallback(executorExceptionResponse);
    });
  }
}
