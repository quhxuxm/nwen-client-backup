export class ExecutorResponse<PayloadType> {
  payload: PayloadType;
  readonly header: {
    [key: string]: string;
  };

  constructor() {
    this.header = {};
  }
}
