export class ExecutorResponse<PayloadType> {
  success: boolean;
  payload: PayloadType;
  readonly header: {
    [key: string]: string;
  };

  constructor() {
    this.header = {};
    this.success = true;
  }
}
