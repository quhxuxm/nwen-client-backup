import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ExecutorRequest} from './executor-request';
import {ExecutorResponse} from './executor-response';

@Injectable({
  providedIn: 'root'
})
export class ExecutorService {
  constructor(private entryUrl, private httpClient: HttpClient) {
  }

  exec<RequestPayloadType, ResponsePayloadType>(executorRequest: ExecutorRequest<RequestPayloadType>,
                                                callback: (executorResponse: ExecutorResponse<ResponsePayloadType>) => void): void {
    const responseObservable = this.httpClient.post(this.entryUrl, executorRequest);
    responseObservable.subscribe()
  }
}
