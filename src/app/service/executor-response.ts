export enum ExecutorResponseHeaderName {
  SECURE_TOKEN
}

export class ExecutorResponse<PayloadType> {
  private _payload: PayloadType;
  private _header: Map<ExecutorResponseHeaderName, string>;
  private _success: boolean;

  constructor(success: boolean) {
    this._success = success;
    this._header = new Map<ExecutorResponseHeaderName, string>();
  }

  get payload(): PayloadType {
    return this._payload;
  }

  set payload(value: PayloadType) {
    this._payload = value;
  }

  get header(): Map<ExecutorResponseHeaderName, string> {
    return this._header;
  }

  get success(): boolean {
    return this._success;
  }
}
