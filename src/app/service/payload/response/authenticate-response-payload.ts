export class AuthenticateResponsePayload {
  authorId: string;
  authorNickname: string;
  authorUsername: string;
  authorDescription: string;
  authorTags: string[];
  authorLastLoginDate: Date;
  authorIconImageId: string;
  secureToken: string;
  authorDefaultAnthologyId: string;
}
