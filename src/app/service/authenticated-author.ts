export class AuthenticatedAuthor {
  private _username: string;
  private _id: string;
  private _nickname: string;
  private _iconImageId: string;

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get iconImageId(): string {
    return this._iconImageId;
  }

  set iconImageId(value: string) {
    this._iconImageId = value;
  }
}
