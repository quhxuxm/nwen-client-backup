export class ExecutorRequest<PayloadType> {
  readonly header: {
    [key: string]: string;
  };
  payload: PayloadType;

  constructor() {
    this.header = {};
  }
}
