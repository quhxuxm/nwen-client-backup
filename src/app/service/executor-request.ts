export enum ExecutorRequestHeaderName {
  SECURE_TOKEN
}

export class ExecutorRequest<PayloadType> {
  private _header: Map<ExecutorRequestHeaderName, string>;
  private _payload: PayloadType;

  constructor() {
    this._header = new Map<ExecutorRequestHeaderName, string>();
  }

  get payload(): PayloadType {
    return this._payload;
  }

  set payload(value: PayloadType) {
    this._payload = value;
  }

  get header(): Map<ExecutorRequestHeaderName, string> {
    return this._header;
  }
}
