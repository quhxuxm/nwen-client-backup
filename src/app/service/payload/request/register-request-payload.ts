export class RegisterRequestPayload {
  constructor(private username: string, private password: string, private nickname: string) {
    this.username = username;
    this.password = password;
    this.nickname = nickname;
  }
}
