export class Card {
  private _title: string | null;
  private _titleRouterLink: string | null;
  private _subTitle: string | null;
  private _subTitleRouterLink: string | null;
  private _content: string | null;
  private _contentRouterLink: string | null;
  private _coverImageUrl: string | null;
  private _coverImageRouterLink: string | null;

  get title(): string | null {
    return this._title;
  }

  set title(value: string | null) {
    this._title = value;
  }

  get titleRouterLink(): string | null {
    return this._titleRouterLink;
  }

  set titleRouterLink(value: string | null) {
    this._titleRouterLink = value;
  }

  get subTitle(): string | null {
    return this._subTitle;
  }

  set subTitle(value: string | null) {
    this._subTitle = value;
  }

  get subTitleRouterLink(): string | null {
    return this._subTitleRouterLink;
  }

  set subTitleRouterLink(value: string | null) {
    this._subTitleRouterLink = value;
  }

  get content(): string | null {
    return this._content;
  }

  set content(value: string | null) {
    this._content = value;
  }

  get contentRouterLink(): string | null {
    return this._contentRouterLink;
  }

  set contentRouterLink(value: string | null) {
    this._contentRouterLink = value;
  }

  get coverImageUrl(): string | null {
    return this._coverImageUrl;
  }

  set coverImageUrl(value: string | null) {
    this._coverImageUrl = value;
  }

  get coverImageRouterLink(): string | null {
    return this._coverImageRouterLink;
  }

  set coverImageRouterLink(value: string | null) {
    this._coverImageRouterLink = value;
  }
}
