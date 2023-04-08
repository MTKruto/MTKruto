// deno-lint-ignore-file no-explicit-any

const id = Symbol("id");

const params = Symbol("params");

export abstract class TLObject {
  protected abstract get [id](): number | symbol;
  protected abstract get [params](): Params | symbol;
}

type Params = [
  | string
  | number
  | null
  | bigint
  | boolean
  | Uint8Array
  | Array<any>
  | TLObject,
  string,
][];

export abstract class Constructor extends TLObject {
}

export abstract class TypeError extends Constructor {
}

export abstract class TypeNull extends Constructor {
}

export abstract class TypeInputPeer extends Constructor {
}

export abstract class TypeInputUser extends Constructor {
}

export abstract class TypeInputContact extends Constructor {
}

export abstract class TypeInputFile extends Constructor {
}

export abstract class TypeInputMedia extends Constructor {
}

export abstract class TypeInputChatPhoto extends Constructor {
}

export abstract class TypeInputGeoPoint extends Constructor {
}

export abstract class TypeInputPhoto extends Constructor {
}

export abstract class TypeInputFileLocation extends Constructor {
}

export abstract class TypePeer extends Constructor {
}

export abstract class TypeStorageFileType extends Constructor {
}

export abstract class TypeUser extends Constructor {
}

export abstract class TypeUserProfilePhoto extends Constructor {
}

export abstract class TypeUserStatus extends Constructor {
}

export abstract class TypeChat extends Constructor {
}

export abstract class TypeChatFull extends Constructor {
}

export abstract class TypeChatParticipant extends Constructor {
}

export abstract class TypeChatParticipants extends Constructor {
}

export abstract class TypeChatPhoto extends Constructor {
}

export abstract class TypeMessage extends Constructor {
}

export abstract class TypeMessageMedia extends Constructor {
}

export abstract class TypeMessageAction extends Constructor {
}

export abstract class TypeDialog extends Constructor {
}

export abstract class TypePhoto extends Constructor {
}

export abstract class TypePhotoSize extends Constructor {
}

export abstract class TypeGeoPoint extends Constructor {
}

export abstract class TypeAuthSentCode extends Constructor {
}

export abstract class TypeAuthAuthorization extends Constructor {
}

export abstract class TypeAuthExportedAuthorization extends Constructor {
}

export abstract class TypeInputNotifyPeer extends Constructor {
}

export abstract class TypeInputPeerNotifySettings extends Constructor {
}

export abstract class TypePeerNotifySettings extends Constructor {
}

export abstract class TypePeerSettings extends Constructor {
}

export abstract class TypeWallPaper extends Constructor {
}

export abstract class TypeReportReason extends Constructor {
}

export abstract class TypeUserFull extends Constructor {
}

export abstract class TypeContact extends Constructor {
}

export abstract class TypeImportedContact extends Constructor {
}

export abstract class TypeContactStatus extends Constructor {
}

export abstract class TypeContactsContacts extends Constructor {
}

export abstract class TypeContactsImportedContacts extends Constructor {
}

export abstract class TypeContactsBlocked extends Constructor {
}

export abstract class TypeMessagesDialogs extends Constructor {
}

export abstract class TypeMessagesMessages extends Constructor {
}

export abstract class TypeMessagesChats extends Constructor {
}

export abstract class TypeMessagesChatFull extends Constructor {
}

export abstract class TypeMessagesAffectedHistory extends Constructor {
}

export abstract class TypeMessagesFilter extends Constructor {
}

export abstract class TypeUpdate extends Constructor {
}

export abstract class TypeUpdatesState extends Constructor {
}

export abstract class TypeUpdatesDifference extends Constructor {
}

export abstract class TypeUpdates extends Constructor {
}

export abstract class TypePhotosPhotos extends Constructor {
}

export abstract class TypePhotosPhoto extends Constructor {
}

export abstract class TypeUploadFile extends Constructor {
}

export abstract class TypeDcOption extends Constructor {
}

export abstract class TypeConfig extends Constructor {
}

export abstract class TypeNearestDc extends Constructor {
}

export abstract class TypeHelpAppUpdate extends Constructor {
}

export abstract class TypeHelpInviteText extends Constructor {
}

export abstract class TypeEncryptedChat extends Constructor {
}

export abstract class TypeInputEncryptedChat extends Constructor {
}

export abstract class TypeEncryptedFile extends Constructor {
}

export abstract class TypeInputEncryptedFile extends Constructor {
}

export abstract class TypeEncryptedMessage extends Constructor {
}

export abstract class TypeMessagesDhConfig extends Constructor {
}

export abstract class TypeMessagesSentEncryptedMessage extends Constructor {
}

export abstract class TypeInputDocument extends Constructor {
}

export abstract class TypeDocument extends Constructor {
}

export abstract class TypeHelpSupport extends Constructor {
}

export abstract class TypeNotifyPeer extends Constructor {
}

export abstract class TypeSendMessageAction extends Constructor {
}

export abstract class TypeContactsFound extends Constructor {
}

export abstract class TypeInputPrivacyKey extends Constructor {
}

export abstract class TypePrivacyKey extends Constructor {
}

export abstract class TypeInputPrivacyRule extends Constructor {
}

export abstract class TypePrivacyRule extends Constructor {
}

export abstract class TypeAccountPrivacyRules extends Constructor {
}

export abstract class TypeAccountDaysTTL extends Constructor {
}

export abstract class TypeDocumentAttribute extends Constructor {
}

export abstract class TypeMessagesStickers extends Constructor {
}

export abstract class TypeStickerPack extends Constructor {
}

export abstract class TypeMessagesAllStickers extends Constructor {
}

export abstract class TypeMessagesAffectedMessages extends Constructor {
}

export abstract class TypeWebPage extends Constructor {
}

export abstract class TypeAuthorization extends Constructor {
}

export abstract class TypeAccountAuthorizations extends Constructor {
}

export abstract class TypeAccountPassword extends Constructor {
}

export abstract class TypeAccountPasswordSettings extends Constructor {
}

export abstract class TypeAccountPasswordInputSettings extends Constructor {
}

export abstract class TypeAuthPasswordRecovery extends Constructor {
}

export abstract class TypeReceivedNotifyMessage extends Constructor {
}

export abstract class TypeExportedChatInvite extends Constructor {
}

export abstract class TypeChatInvite extends Constructor {
}

export abstract class TypeInputStickerSet extends Constructor {
}

export abstract class TypeStickerSet extends Constructor {
}

export abstract class TypeMessagesStickerSet extends Constructor {
}

export abstract class TypeBotCommand extends Constructor {
}

export abstract class TypeBotInfo extends Constructor {
}

export abstract class TypeKeyboardButton extends Constructor {
}

export abstract class TypeKeyboardButtonRow extends Constructor {
}

export abstract class TypeReplyMarkup extends Constructor {
}

export abstract class TypeMessageEntity extends Constructor {
}

export abstract class TypeInputChannel extends Constructor {
}

export abstract class TypeContactsResolvedPeer extends Constructor {
}

export abstract class TypeMessageRange extends Constructor {
}

export abstract class TypeUpdatesChannelDifference extends Constructor {
}

export abstract class TypeChannelMessagesFilter extends Constructor {
}

export abstract class TypeChannelParticipant extends Constructor {
}

export abstract class TypeChannelParticipantsFilter extends Constructor {
}

export abstract class TypeChannelsChannelParticipants extends Constructor {
}

export abstract class TypeChannelsChannelParticipant extends Constructor {
}

export abstract class TypeHelpTermsOfService extends Constructor {
}

export abstract class TypeMessagesSavedGifs extends Constructor {
}

export abstract class TypeInputBotInlineMessage extends Constructor {
}

export abstract class TypeInputBotInlineResult extends Constructor {
}

export abstract class TypeBotInlineMessage extends Constructor {
}

export abstract class TypeBotInlineResult extends Constructor {
}

export abstract class TypeMessagesBotResults extends Constructor {
}

export abstract class TypeExportedMessageLink extends Constructor {
}

export abstract class TypeMessageFwdHeader extends Constructor {
}

export abstract class TypeAuthCodeType extends Constructor {
}

export abstract class TypeAuthSentCodeType extends Constructor {
}

export abstract class TypeMessagesBotCallbackAnswer extends Constructor {
}

export abstract class TypeMessagesMessageEditData extends Constructor {
}

export abstract class TypeInputBotInlineMessageID extends Constructor {
}

export abstract class TypeInlineBotSwitchPM extends Constructor {
}

export abstract class TypeMessagesPeerDialogs extends Constructor {
}

export abstract class TypeTopPeer extends Constructor {
}

export abstract class TypeTopPeerCategory extends Constructor {
}

export abstract class TypeTopPeerCategoryPeers extends Constructor {
}

export abstract class TypeContactsTopPeers extends Constructor {
}

export abstract class TypeDraftMessage extends Constructor {
}

export abstract class TypeMessagesFeaturedStickers extends Constructor {
}

export abstract class TypeMessagesRecentStickers extends Constructor {
}

export abstract class TypeMessagesArchivedStickers extends Constructor {
}

export abstract class TypeMessagesStickerSetInstallResult extends Constructor {
}

export abstract class TypeStickerSetCovered extends Constructor {
}

export abstract class TypeMaskCoords extends Constructor {
}

export abstract class TypeInputStickeredMedia extends Constructor {
}

export abstract class TypeGame extends Constructor {
}

export abstract class TypeInputGame extends Constructor {
}

export abstract class TypeHighScore extends Constructor {
}

export abstract class TypeMessagesHighScores extends Constructor {
}

export abstract class TypeRichText extends Constructor {
}

export abstract class TypePageBlock extends Constructor {
}

export abstract class TypePhoneCallDiscardReason extends Constructor {
}

export abstract class TypeDataJSON extends Constructor {
}

export abstract class TypeLabeledPrice extends Constructor {
}

export abstract class TypeInvoice extends Constructor {
}

export abstract class TypePaymentCharge extends Constructor {
}

export abstract class TypePostAddress extends Constructor {
}

export abstract class TypePaymentRequestedInfo extends Constructor {
}

export abstract class TypePaymentSavedCredentials extends Constructor {
}

export abstract class TypeWebDocument extends Constructor {
}

export abstract class TypeInputWebDocument extends Constructor {
}

export abstract class TypeInputWebFileLocation extends Constructor {
}

export abstract class TypeUploadWebFile extends Constructor {
}

export abstract class TypePaymentsPaymentForm extends Constructor {
}

export abstract class TypePaymentsValidatedRequestedInfo extends Constructor {
}

export abstract class TypePaymentsPaymentResult extends Constructor {
}

export abstract class TypePaymentsPaymentReceipt extends Constructor {
}

export abstract class TypePaymentsSavedInfo extends Constructor {
}

export abstract class TypeInputPaymentCredentials extends Constructor {
}

export abstract class TypeAccountTmpPassword extends Constructor {
}

export abstract class TypeShippingOption extends Constructor {
}

export abstract class TypeInputStickerSetItem extends Constructor {
}

export abstract class TypeInputPhoneCall extends Constructor {
}

export abstract class TypePhoneCall extends Constructor {
}

export abstract class TypePhoneConnection extends Constructor {
}

export abstract class TypePhoneCallProtocol extends Constructor {
}

export abstract class TypePhonePhoneCall extends Constructor {
}

export abstract class TypeUploadCdnFile extends Constructor {
}

export abstract class TypeCdnPublicKey extends Constructor {
}

export abstract class TypeCdnConfig extends Constructor {
}

export abstract class TypeLangPackString extends Constructor {
}

export abstract class TypeLangPackDifference extends Constructor {
}

export abstract class TypeLangPackLanguage extends Constructor {
}

export abstract class TypeChannelAdminLogEventAction extends Constructor {
}

export abstract class TypeChannelAdminLogEvent extends Constructor {
}

export abstract class TypeChannelsAdminLogResults extends Constructor {
}

export abstract class TypeChannelAdminLogEventsFilter extends Constructor {
}

export abstract class TypePopularContact extends Constructor {
}

export abstract class TypeMessagesFavedStickers extends Constructor {
}

export abstract class TypeRecentMeUrl extends Constructor {
}

export abstract class TypeHelpRecentMeUrls extends Constructor {
}

export abstract class TypeInputSingleMedia extends Constructor {
}

export abstract class TypeWebAuthorization extends Constructor {
}

export abstract class TypeAccountWebAuthorizations extends Constructor {
}

export abstract class TypeInputMessage extends Constructor {
}

export abstract class TypeInputDialogPeer extends Constructor {
}

export abstract class TypeDialogPeer extends Constructor {
}

export abstract class TypeMessagesFoundStickerSets extends Constructor {
}

export abstract class TypeFileHash extends Constructor {
}

export abstract class TypeInputClientProxy extends Constructor {
}

export abstract class TypeHelpTermsOfServiceUpdate extends Constructor {
}

export abstract class TypeInputSecureFile extends Constructor {
}

export abstract class TypeSecureFile extends Constructor {
}

export abstract class TypeSecureData extends Constructor {
}

export abstract class TypeSecurePlainData extends Constructor {
}

export abstract class TypeSecureValueType extends Constructor {
}

export abstract class TypeSecureValue extends Constructor {
}

export abstract class TypeInputSecureValue extends Constructor {
}

export abstract class TypeSecureValueHash extends Constructor {
}

export abstract class TypeSecureValueError extends Constructor {
}

export abstract class TypeSecureCredentialsEncrypted extends Constructor {
}

export abstract class TypeAccountAuthorizationForm extends Constructor {
}

export abstract class TypeAccountSentEmailCode extends Constructor {
}

export abstract class TypeHelpDeepLinkInfo extends Constructor {
}

export abstract class TypeSavedContact extends Constructor {
}

export abstract class TypeAccountTakeout extends Constructor {
}

export abstract class TypePasswordKdfAlgo extends Constructor {
}

export abstract class TypeSecurePasswordKdfAlgo extends Constructor {
}

export abstract class TypeSecureSecretSettings extends Constructor {
}

export abstract class TypeInputCheckPasswordSRP extends Constructor {
}

export abstract class TypeSecureRequiredType extends Constructor {
}

export abstract class TypeHelpPassportConfig extends Constructor {
}

export abstract class TypeInputAppEvent extends Constructor {
}

export abstract class TypeJSONObjectValue extends Constructor {
}

export abstract class TypeJSONValue extends Constructor {
}

export abstract class TypePageTableCell extends Constructor {
}

export abstract class TypePageTableRow extends Constructor {
}

export abstract class TypePageCaption extends Constructor {
}

export abstract class TypePageListItem extends Constructor {
}

export abstract class TypePageListOrderedItem extends Constructor {
}

export abstract class TypePageRelatedArticle extends Constructor {
}

export abstract class TypePage extends Constructor {
}

export abstract class TypeHelpSupportName extends Constructor {
}

export abstract class TypeHelpUserInfo extends Constructor {
}

export abstract class TypePollAnswer extends Constructor {
}

export abstract class TypePoll extends Constructor {
}

export abstract class TypePollAnswerVoters extends Constructor {
}

export abstract class TypePollResults extends Constructor {
}

export abstract class TypeChatOnlines extends Constructor {
}

export abstract class TypeStatsURL extends Constructor {
}

export abstract class TypeChatAdminRights extends Constructor {
}

export abstract class TypeChatBannedRights extends Constructor {
}

export abstract class TypeInputWallPaper extends Constructor {
}

export abstract class TypeAccountWallPapers extends Constructor {
}

export abstract class TypeCodeSettings extends Constructor {
}

export abstract class TypeWallPaperSettings extends Constructor {
}

export abstract class TypeAutoDownloadSettings extends Constructor {
}

export abstract class TypeAccountAutoDownloadSettings extends Constructor {
}

export abstract class TypeEmojiKeyword extends Constructor {
}

export abstract class TypeEmojiKeywordsDifference extends Constructor {
}

export abstract class TypeEmojiURL extends Constructor {
}

export abstract class TypeEmojiLanguage extends Constructor {
}

export abstract class TypeFolder extends Constructor {
}

export abstract class TypeInputFolderPeer extends Constructor {
}

export abstract class TypeFolderPeer extends Constructor {
}

export abstract class TypeMessagesSearchCounter extends Constructor {
}

export abstract class TypeUrlAuthResult extends Constructor {
}

export abstract class TypeChannelLocation extends Constructor {
}

export abstract class TypePeerLocated extends Constructor {
}

export abstract class TypeRestrictionReason extends Constructor {
}

export abstract class TypeInputTheme extends Constructor {
}

export abstract class TypeTheme extends Constructor {
}

export abstract class TypeAccountThemes extends Constructor {
}

export abstract class TypeAuthLoginToken extends Constructor {
}

export abstract class TypeAccountContentSettings extends Constructor {
}

export abstract class TypeMessagesInactiveChats extends Constructor {
}

export abstract class TypeBaseTheme extends Constructor {
}

export abstract class TypeInputThemeSettings extends Constructor {
}

export abstract class TypeThemeSettings extends Constructor {
}

export abstract class TypeWebPageAttribute extends Constructor {
}

export abstract class TypeMessageUserVote extends Constructor {
}

export abstract class TypeMessagesVotesList extends Constructor {
}

export abstract class TypeBankCardOpenUrl extends Constructor {
}

export abstract class TypePaymentsBankCardData extends Constructor {
}

export abstract class TypeDialogFilter extends Constructor {
}

export abstract class TypeDialogFilterSuggested extends Constructor {
}

export abstract class TypeStatsDateRangeDays extends Constructor {
}

export abstract class TypeStatsAbsValueAndPrev extends Constructor {
}

export abstract class TypeStatsPercentValue extends Constructor {
}

export abstract class TypeStatsGraph extends Constructor {
}

export abstract class TypeMessageInteractionCounters extends Constructor {
}

export abstract class TypeStatsBroadcastStats extends Constructor {
}

export abstract class TypeHelpPromoData extends Constructor {
}

export abstract class TypeVideoSize extends Constructor {
}

export abstract class TypeStatsGroupTopPoster extends Constructor {
}

export abstract class TypeStatsGroupTopAdmin extends Constructor {
}

export abstract class TypeStatsGroupTopInviter extends Constructor {
}

export abstract class TypeStatsMegagroupStats extends Constructor {
}

export abstract class TypeGlobalPrivacySettings extends Constructor {
}

export abstract class TypeHelpCountryCode extends Constructor {
}

export abstract class TypeHelpCountry extends Constructor {
}

export abstract class TypeHelpCountriesList extends Constructor {
}

export abstract class TypeMessageViews extends Constructor {
}

export abstract class TypeMessagesMessageViews extends Constructor {
}

export abstract class TypeMessagesDiscussionMessage extends Constructor {
}

export abstract class TypeMessageReplyHeader extends Constructor {
}

export abstract class TypeMessageReplies extends Constructor {
}

export abstract class TypePeerBlocked extends Constructor {
}

export abstract class TypeStatsMessageStats extends Constructor {
}

export abstract class TypeGroupCall extends Constructor {
}

export abstract class TypeInputGroupCall extends Constructor {
}

export abstract class TypeGroupCallParticipant extends Constructor {
}

export abstract class TypePhoneGroupCall extends Constructor {
}

export abstract class TypePhoneGroupParticipants extends Constructor {
}

export abstract class TypeInlineQueryPeerType extends Constructor {
}

export abstract class TypeMessagesHistoryImport extends Constructor {
}

export abstract class TypeMessagesHistoryImportParsed extends Constructor {
}

export abstract class TypeMessagesAffectedFoundMessages extends Constructor {
}

export abstract class TypeChatInviteImporter extends Constructor {
}

export abstract class TypeMessagesExportedChatInvites extends Constructor {
}

export abstract class TypeMessagesExportedChatInvite extends Constructor {
}

export abstract class TypeMessagesChatInviteImporters extends Constructor {
}

export abstract class TypeChatAdminWithInvites extends Constructor {
}

export abstract class TypeMessagesChatAdminsWithInvites extends Constructor {
}

export abstract class TypeMessagesCheckedHistoryImportPeer extends Constructor {
}

export abstract class TypePhoneJoinAsPeers extends Constructor {
}

export abstract class TypePhoneExportedGroupCallInvite extends Constructor {
}

export abstract class TypeGroupCallParticipantVideoSourceGroup
  extends Constructor {
}

export abstract class TypeGroupCallParticipantVideo extends Constructor {
}

export abstract class TypeStickersSuggestedShortName extends Constructor {
}

export abstract class TypeBotCommandScope extends Constructor {
}

export abstract class TypeAccountResetPasswordResult extends Constructor {
}

export abstract class TypeSponsoredMessage extends Constructor {
}

export abstract class TypeMessagesSponsoredMessages extends Constructor {
}

export abstract class TypeSearchResultsCalendarPeriod extends Constructor {
}

export abstract class TypeMessagesSearchResultsCalendar extends Constructor {
}

export abstract class TypeSearchResultsPosition extends Constructor {
}

export abstract class TypeMessagesSearchResultsPositions extends Constructor {
}

export abstract class TypeChannelsSendAsPeers extends Constructor {
}

export abstract class TypeUsersUserFull extends Constructor {
}

export abstract class TypeMessagesPeerSettings extends Constructor {
}

export abstract class TypeAuthLoggedOut extends Constructor {
}

export abstract class TypeReactionCount extends Constructor {
}

export abstract class TypeMessageReactions extends Constructor {
}

export abstract class TypeMessagesMessageReactionsList extends Constructor {
}

export abstract class TypeAvailableReaction extends Constructor {
}

export abstract class TypeMessagesAvailableReactions extends Constructor {
}

export abstract class TypeMessagesTranslatedText extends Constructor {
}

export abstract class TypeMessagePeerReaction extends Constructor {
}

export abstract class TypeGroupCallStreamChannel extends Constructor {
}

export abstract class TypePhoneGroupCallStreamChannels extends Constructor {
}

export abstract class TypePhoneGroupCallStreamRtmpUrl extends Constructor {
}

export abstract class TypeAttachMenuBotIconColor extends Constructor {
}

export abstract class TypeAttachMenuBotIcon extends Constructor {
}

export abstract class TypeAttachMenuBot extends Constructor {
}

export abstract class TypeAttachMenuBots extends Constructor {
}

export abstract class TypeAttachMenuBotsBot extends Constructor {
}

export abstract class TypeWebViewResult extends Constructor {
}

export abstract class TypeSimpleWebViewResult extends Constructor {
}

export abstract class TypeWebViewMessageSent extends Constructor {
}

export abstract class TypeBotMenuButton extends Constructor {
}

export abstract class TypeAccountSavedRingtones extends Constructor {
}

export abstract class TypeNotificationSound extends Constructor {
}

export abstract class TypeAccountSavedRingtone extends Constructor {
}

export abstract class TypeAttachMenuPeerType extends Constructor {
}

export abstract class TypeInputInvoice extends Constructor {
}

export abstract class TypePaymentsExportedInvoice extends Constructor {
}

export abstract class TypeMessagesTranscribedAudio extends Constructor {
}

export abstract class TypeHelpPremiumPromo extends Constructor {
}

export abstract class TypeInputStorePaymentPurpose extends Constructor {
}

export abstract class TypePremiumGiftOption extends Constructor {
}

export abstract class TypePaymentFormMethod extends Constructor {
}

export abstract class TypeEmojiStatus extends Constructor {
}

export abstract class TypeAccountEmojiStatuses extends Constructor {
}

export abstract class TypeReaction extends Constructor {
}

export abstract class TypeChatReactions extends Constructor {
}

export abstract class TypeMessagesReactions extends Constructor {
}

export abstract class TypeEmailVerifyPurpose extends Constructor {
}

export abstract class TypeEmailVerification extends Constructor {
}

export abstract class TypeAccountEmailVerified extends Constructor {
}

export abstract class TypePremiumSubscriptionOption extends Constructor {
}

export abstract class TypeSendAsPeer extends Constructor {
}

export class InputPeerEmpty extends TypeInputPeer {
  protected get [id]() {
    return 0x7f3b18ea;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPeerSelf extends TypeInputPeer {
  protected get [id]() {
    return 0x7da07ec9;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPeerChat extends TypeInputPeer {
  chat_id: bigint;

  protected get [id]() {
    return 0x35a95cb9;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
    ];
  }

  constructor(params: { chat_id: bigint }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class InputUserEmpty extends TypeInputUser {
  protected get [id]() {
    return 0xb98886cf;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputUserSelf extends TypeInputUser {
  protected get [id]() {
    return 0xf7c1b13f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPhoneContact extends TypeInputContact {
  client_id: bigint;
  phone: string;
  first_name: string;
  last_name: string;

  protected get [id]() {
    return 0xf392b7f4;
  }

  protected get [params](): Params {
    return [
      [this.client_id, "long"],
      [this.phone, "string"],
      [this.first_name, "string"],
      [this.last_name, "string"],
    ];
  }

  constructor(
    params: {
      client_id: bigint;
      phone: string;
      first_name: string;
      last_name: string;
    },
  ) {
    super();
    this.client_id = params.client_id;
    this.phone = params.phone;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
  }
}

export class InputMediaEmpty extends TypeInputMedia {
  protected get [id]() {
    return 0x9664f57f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMediaUploadedPhoto extends TypeInputMedia {
  file: TypeInputFile;
  stickers?: Array<TypeInputDocument>;
  ttl_seconds?: number;

  protected get [id]() {
    return 0x1e287d04;
  }

  protected get [params](): Params {
    return [
      [this.file, "InputFile"],
      [this.stickers ?? null, "flags.0?Vector<InputDocument>"],
      [this.ttl_seconds ?? null, "flags.1?int"],
    ];
  }

  constructor(
    params: {
      file: TypeInputFile;
      stickers?: Array<TypeInputDocument>;
      ttl_seconds?: number;
    },
  ) {
    super();
    this.file = params.file;
    this.stickers = params.stickers;
    this.ttl_seconds = params.ttl_seconds;
  }
}

export class InputMediaPhoto extends TypeInputMedia {
  id: TypeInputPhoto;
  ttl_seconds?: number;

  protected get [id]() {
    return 0xb3ba0635;
  }

  protected get [params](): Params {
    return [
      [this.id, "InputPhoto"],
      [this.ttl_seconds ?? null, "flags.0?int"],
    ];
  }

  constructor(params: { id: TypeInputPhoto; ttl_seconds?: number }) {
    super();
    this.id = params.id;
    this.ttl_seconds = params.ttl_seconds;
  }
}

export class InputMediaGeoPoint extends TypeInputMedia {
  geo_point: TypeInputGeoPoint;

  protected get [id]() {
    return 0xf9c44144;
  }

  protected get [params](): Params {
    return [
      [this.geo_point, "InputGeoPoint"],
    ];
  }

  constructor(params: { geo_point: TypeInputGeoPoint }) {
    super();
    this.geo_point = params.geo_point;
  }
}

export class InputMediaContact extends TypeInputMedia {
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;

  protected get [id]() {
    return 0xf8ab7dfb;
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string"],
      [this.first_name, "string"],
      [this.last_name, "string"],
      [this.vcard, "string"],
    ];
  }

  constructor(
    params: {
      phone_number: string;
      first_name: string;
      last_name: string;
      vcard: string;
    },
  ) {
    super();
    this.phone_number = params.phone_number;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.vcard = params.vcard;
  }
}

export class InputChatPhotoEmpty extends TypeInputChatPhoto {
  protected get [id]() {
    return 0x1ca48f57;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputChatUploadedPhoto extends TypeInputChatPhoto {
  file?: TypeInputFile;
  video?: TypeInputFile;
  video_start_ts?: number;

  protected get [id]() {
    return 0xc642724e;
  }

  protected get [params](): Params {
    return [
      [this.file ?? null, "flags.0?InputFile"],
      [this.video ?? null, "flags.1?InputFile"],
      [this.video_start_ts ?? null, "flags.2?double"],
    ];
  }

  constructor(
    params: {
      file?: TypeInputFile;
      video?: TypeInputFile;
      video_start_ts?: number;
    },
  ) {
    super();
    this.file = params.file;
    this.video = params.video;
    this.video_start_ts = params.video_start_ts;
  }
}

export class InputGeoPointEmpty extends TypeInputGeoPoint {
  protected get [id]() {
    return 0xe4c123d6;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPhotoEmpty extends TypeInputPhoto {
  protected get [id]() {
    return 0x1cd7bf0d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PeerUser extends TypePeer {
  user_id: bigint;

  protected get [id]() {
    return 0x59511722;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
    ];
  }

  constructor(params: { user_id: bigint }) {
    super();
    this.user_id = params.user_id;
  }
}

export class PeerChat extends TypePeer {
  chat_id: bigint;

  protected get [id]() {
    return 0x36c6019a;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
    ];
  }

  constructor(params: { chat_id: bigint }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class StorageFileUnknown extends TypeStorageFileType {
  protected get [id]() {
    return 0xaa963b05;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFilePartial extends TypeStorageFileType {
  protected get [id]() {
    return 0x40bc6f52;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFileJpeg extends TypeStorageFileType {
  protected get [id]() {
    return 0x007efe0e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFileGif extends TypeStorageFileType {
  protected get [id]() {
    return 0xcae1aadf;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFilePng extends TypeStorageFileType {
  protected get [id]() {
    return 0x0a4f63c0;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFilePdf extends TypeStorageFileType {
  protected get [id]() {
    return 0xae1e508d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFileMp3 extends TypeStorageFileType {
  protected get [id]() {
    return 0x528a0677;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFileMov extends TypeStorageFileType {
  protected get [id]() {
    return 0x4b09ebbc;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFileMp4 extends TypeStorageFileType {
  protected get [id]() {
    return 0xb3cea0e4;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StorageFileWebp extends TypeStorageFileType {
  protected get [id]() {
    return 0x1081464c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UserEmpty extends TypeUser {
  id: bigint;

  protected get [id]() {
    return 0xd3bc4b7a;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class UserProfilePhotoEmpty extends TypeUserProfilePhoto {
  protected get [id]() {
    return 0x4f11bae1;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UserStatusEmpty extends TypeUserStatus {
  protected get [id]() {
    return 0x09d05049;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UserStatusOnline extends TypeUserStatus {
  expires: number;

  protected get [id]() {
    return 0xedb93949;
  }

  protected get [params](): Params {
    return [
      [this.expires, "int"],
    ];
  }

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class UserStatusOffline extends TypeUserStatus {
  was_online: number;

  protected get [id]() {
    return 0x008c703f;
  }

  protected get [params](): Params {
    return [
      [this.was_online, "int"],
    ];
  }

  constructor(params: { was_online: number }) {
    super();
    this.was_online = params.was_online;
  }
}

export class ChatEmpty extends TypeChat {
  id: bigint;

  protected get [id]() {
    return 0x29562865;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class ChatForbidden extends TypeChat {
  id: bigint;
  title: string;

  protected get [id]() {
    return 0x6592a1a7;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.title, "string"],
    ];
  }

  constructor(params: { id: bigint; title: string }) {
    super();
    this.id = params.id;
    this.title = params.title;
  }
}

export class ChatParticipantsForbidden extends TypeChatParticipants {
  chat_id: bigint;
  self_participant?: TypeChatParticipant;

  protected get [id]() {
    return 0x8763d3e1;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
      [this.self_participant ?? null, "flags.0?ChatParticipant"],
    ];
  }

  constructor(
    params: { chat_id: bigint; self_participant?: TypeChatParticipant },
  ) {
    super();
    this.chat_id = params.chat_id;
    this.self_participant = params.self_participant;
  }
}

export class ChatPhotoEmpty extends TypeChatPhoto {
  protected get [id]() {
    return 0x37c1011c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageEmpty extends TypeMessage {
  id: number;
  peer_id?: TypePeer;

  protected get [id]() {
    return 0x90a6ca84;
  }

  protected get [params](): Params {
    return [
      [this.id, "int"],
      [this.peer_id ?? null, "flags.0?Peer"],
    ];
  }

  constructor(params: { id: number; peer_id?: TypePeer }) {
    super();
    this.id = params.id;
    this.peer_id = params.peer_id;
  }
}

export class MessageService extends TypeMessage {
  out?: true;
  mentioned?: true;
  media_unread?: true;
  silent?: true;
  post?: true;
  legacy?: true;
  id: number;
  from_id?: TypePeer;
  peer_id: TypePeer;
  reply_to?: TypeMessageReplyHeader;
  date: number;
  action: TypeMessageAction;
  ttl_period?: number;

  protected get [id]() {
    return 0x2b085862;
  }

  protected get [params](): Params {
    return [
      [this.out ?? null, "flags.1?true"],
      [this.mentioned ?? null, "flags.4?true"],
      [this.media_unread ?? null, "flags.5?true"],
      [this.silent ?? null, "flags.13?true"],
      [this.post ?? null, "flags.14?true"],
      [this.legacy ?? null, "flags.19?true"],
      [this.id, "int"],
      [this.from_id ?? null, "flags.8?Peer"],
      [this.peer_id, "Peer"],
      [this.reply_to ?? null, "flags.3?MessageReplyHeader"],
      [this.date, "int"],
      [this.action, "MessageAction"],
      [this.ttl_period ?? null, "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      mentioned?: true;
      media_unread?: true;
      silent?: true;
      post?: true;
      legacy?: true;
      id: number;
      from_id?: TypePeer;
      peer_id: TypePeer;
      reply_to?: TypeMessageReplyHeader;
      date: number;
      action: TypeMessageAction;
      ttl_period?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.mentioned = params.mentioned;
    this.media_unread = params.media_unread;
    this.silent = params.silent;
    this.post = params.post;
    this.legacy = params.legacy;
    this.id = params.id;
    this.from_id = params.from_id;
    this.peer_id = params.peer_id;
    this.reply_to = params.reply_to;
    this.date = params.date;
    this.action = params.action;
    this.ttl_period = params.ttl_period;
  }
}

export class MessageMediaEmpty extends TypeMessageMedia {
  protected get [id]() {
    return 0x3ded6320;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageMediaPhoto extends TypeMessageMedia {
  photo?: TypePhoto;
  ttl_seconds?: number;

  protected get [id]() {
    return 0x695150d7;
  }

  protected get [params](): Params {
    return [
      [this.photo ?? null, "flags.0?Photo"],
      [this.ttl_seconds ?? null, "flags.2?int"],
    ];
  }

  constructor(params: { photo?: TypePhoto; ttl_seconds?: number }) {
    super();
    this.photo = params.photo;
    this.ttl_seconds = params.ttl_seconds;
  }
}

export class MessageMediaGeo extends TypeMessageMedia {
  geo: TypeGeoPoint;

  protected get [id]() {
    return 0x56e0d474;
  }

  protected get [params](): Params {
    return [
      [this.geo, "GeoPoint"],
    ];
  }

  constructor(params: { geo: TypeGeoPoint }) {
    super();
    this.geo = params.geo;
  }
}

export class MessageMediaContact extends TypeMessageMedia {
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  user_id: bigint;

  protected get [id]() {
    return 0x70322949;
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string"],
      [this.first_name, "string"],
      [this.last_name, "string"],
      [this.vcard, "string"],
      [this.user_id, "long"],
    ];
  }

  constructor(
    params: {
      phone_number: string;
      first_name: string;
      last_name: string;
      vcard: string;
      user_id: bigint;
    },
  ) {
    super();
    this.phone_number = params.phone_number;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.vcard = params.vcard;
    this.user_id = params.user_id;
  }
}

export class MessageMediaUnsupported extends TypeMessageMedia {
  protected get [id]() {
    return 0x9f84f49e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionEmpty extends TypeMessageAction {
  protected get [id]() {
    return 0xb6aef7b0;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionChatCreate extends TypeMessageAction {
  title: string;
  users: Array<bigint>;

  protected get [id]() {
    return 0xbd47cbad;
  }

  protected get [params](): Params {
    return [
      [this.title, "string"],
      [this.users, "Vector<long>"],
    ];
  }

  constructor(params: { title: string; users: Array<bigint> }) {
    super();
    this.title = params.title;
    this.users = params.users;
  }
}

export class MessageActionChatEditTitle extends TypeMessageAction {
  title: string;

  protected get [id]() {
    return 0xb5a1ce5a;
  }

  protected get [params](): Params {
    return [
      [this.title, "string"],
    ];
  }

  constructor(params: { title: string }) {
    super();
    this.title = params.title;
  }
}

export class MessageActionChatEditPhoto extends TypeMessageAction {
  photo: TypePhoto;

  protected get [id]() {
    return 0x7fcb13a8;
  }

  protected get [params](): Params {
    return [
      [this.photo, "Photo"],
    ];
  }

  constructor(params: { photo: TypePhoto }) {
    super();
    this.photo = params.photo;
  }
}

export class MessageActionChatDeletePhoto extends TypeMessageAction {
  protected get [id]() {
    return 0x95e3fbef;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionChatAddUser extends TypeMessageAction {
  users: Array<bigint>;

  protected get [id]() {
    return 0x15cefd00;
  }

  protected get [params](): Params {
    return [
      [this.users, "Vector<long>"],
    ];
  }

  constructor(params: { users: Array<bigint> }) {
    super();
    this.users = params.users;
  }
}

export class MessageActionChatDeleteUser extends TypeMessageAction {
  user_id: bigint;

  protected get [id]() {
    return 0xa43f30cc;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
    ];
  }

  constructor(params: { user_id: bigint }) {
    super();
    this.user_id = params.user_id;
  }
}

export class PhotoEmpty extends TypePhoto {
  id: bigint;

  protected get [id]() {
    return 0x2331b22d;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class PhotoSizeEmpty extends TypePhotoSize {
  type: string;

  protected get [id]() {
    return 0x0e17e23c;
  }

  protected get [params](): Params {
    return [
      [this.type, "string"],
    ];
  }

  constructor(params: { type: string }) {
    super();
    this.type = params.type;
  }
}

export class PhotoCachedSize extends TypePhotoSize {
  type: string;
  w: number;
  h: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0x021e1ad6;
  }

  protected get [params](): Params {
    return [
      [this.type, "string"],
      [this.w, "int"],
      [this.h, "int"],
      [this.bytes, "bytes"],
    ];
  }

  constructor(
    params: { type: string; w: number; h: number; bytes: Uint8Array },
  ) {
    super();
    this.type = params.type;
    this.w = params.w;
    this.h = params.h;
    this.bytes = params.bytes;
  }
}

export class GeoPointEmpty extends TypeGeoPoint {
  protected get [id]() {
    return 0x1117dd5f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputNotifyUsers extends TypeInputNotifyPeer {
  protected get [id]() {
    return 0x193b4417;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputNotifyChats extends TypeInputNotifyPeer {
  protected get [id]() {
    return 0x4a95e84e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonSpam extends TypeReportReason {
  protected get [id]() {
    return 0x58dbcab8;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonViolence extends TypeReportReason {
  protected get [id]() {
    return 0x1e22c78d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonPornography extends TypeReportReason {
  protected get [id]() {
    return 0x2e59d922;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonChildAbuse extends TypeReportReason {
  protected get [id]() {
    return 0xadf44ee3;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonOther extends TypeReportReason {
  protected get [id]() {
    return 0xc1e4a2b1;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ContactsContactsNotModified extends TypeContactsContacts {
  protected get [id]() {
    return 0xb74ba9d2;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ContactsBlockedSlice extends TypeContactsBlocked {
  count: number;
  blocked: Array<TypePeerBlocked>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xe1664194;
  }

  protected get [params](): Params {
    return [
      [this.count, "int"],
      [this.blocked, "Vector<PeerBlocked>"],
      [this.chats, "Vector<Chat>"],
      [this.users, "Vector<User>"],
    ];
  }

  constructor(
    params: {
      count: number;
      blocked: Array<TypePeerBlocked>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.count = params.count;
    this.blocked = params.blocked;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesDialogsSlice extends TypeMessagesDialogs {
  count: number;
  dialogs: Array<TypeDialog>;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x71e094f3;
  }

  protected get [params](): Params {
    return [
      [this.count, "int"],
      [this.dialogs, "Vector<Dialog>"],
      [this.messages, "Vector<Message>"],
      [this.chats, "Vector<Chat>"],
      [this.users, "Vector<User>"],
    ];
  }

  constructor(
    params: {
      count: number;
      dialogs: Array<TypeDialog>;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.count = params.count;
    this.dialogs = params.dialogs;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesMessagesSlice extends TypeMessagesMessages {
  inexact?: true;
  count: number;
  next_rate?: number;
  offset_id_offset?: number;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x3a54685e;
  }

  protected get [params](): Params {
    return [
      [this.inexact ?? null, "flags.1?true"],
      [this.count, "int"],
      [this.next_rate ?? null, "flags.0?int"],
      [this.offset_id_offset ?? null, "flags.2?int"],
      [this.messages, "Vector<Message>"],
      [this.chats, "Vector<Chat>"],
      [this.users, "Vector<User>"],
    ];
  }

  constructor(
    params: {
      inexact?: true;
      count: number;
      next_rate?: number;
      offset_id_offset?: number;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.inexact = params.inexact;
    this.count = params.count;
    this.next_rate = params.next_rate;
    this.offset_id_offset = params.offset_id_offset;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class InputMessagesFilterEmpty extends TypeMessagesFilter {
  protected get [id]() {
    return 0x57e2f66c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterPhotos extends TypeMessagesFilter {
  protected get [id]() {
    return 0x9609a51c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterVideo extends TypeMessagesFilter {
  protected get [id]() {
    return 0x9fc00e65;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterPhotoVideo extends TypeMessagesFilter {
  protected get [id]() {
    return 0x56e9f0e4;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterDocument extends TypeMessagesFilter {
  protected get [id]() {
    return 0x9eddf188;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterUrl extends TypeMessagesFilter {
  protected get [id]() {
    return 0x7ef0dd87;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterGif extends TypeMessagesFilter {
  protected get [id]() {
    return 0xffc86587;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateNewMessage extends TypeUpdate {
  message: TypeMessage;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x1f2b0afd;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: { message: TypeMessage; pts: number; pts_count: number },
  ) {
    super();
    this.message = params.message;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class UpdateMessageID extends TypeUpdate {
  id: number;
  random_id: bigint;

  protected get [id]() {
    return 0x4e90bfd6;
  }

  protected get [params](): Params {
    return [
      [this.id, "int"],
      [this.random_id, "long"],
    ];
  }

  constructor(params: { id: number; random_id: bigint }) {
    super();
    this.id = params.id;
    this.random_id = params.random_id;
  }
}

export class UpdateDeleteMessages extends TypeUpdate {
  messages: Array<number>;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0xa20db0e5;
  }

  protected get [params](): Params {
    return [
      [this.messages, "Vector<int>"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: { messages: Array<number>; pts: number; pts_count: number },
  ) {
    super();
    this.messages = params.messages;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class UpdateUserTyping extends TypeUpdate {
  user_id: bigint;
  action: TypeSendMessageAction;

  protected get [id]() {
    return 0xc01e857f;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.action, "SendMessageAction"],
    ];
  }

  constructor(params: { user_id: bigint; action: TypeSendMessageAction }) {
    super();
    this.user_id = params.user_id;
    this.action = params.action;
  }
}

export class UpdateChatUserTyping extends TypeUpdate {
  chat_id: bigint;
  from_id: TypePeer;
  action: TypeSendMessageAction;

  protected get [id]() {
    return 0x83487af0;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
      [this.from_id, "Peer"],
      [this.action, "SendMessageAction"],
    ];
  }

  constructor(
    params: {
      chat_id: bigint;
      from_id: TypePeer;
      action: TypeSendMessageAction;
    },
  ) {
    super();
    this.chat_id = params.chat_id;
    this.from_id = params.from_id;
    this.action = params.action;
  }
}

export class UpdateChatParticipants extends TypeUpdate {
  participants: TypeChatParticipants;

  protected get [id]() {
    return 0x07761198;
  }

  protected get [params](): Params {
    return [
      [this.participants, "ChatParticipants"],
    ];
  }

  constructor(params: { participants: TypeChatParticipants }) {
    super();
    this.participants = params.participants;
  }
}

export class UpdateUserStatus extends TypeUpdate {
  user_id: bigint;
  status: TypeUserStatus;

  protected get [id]() {
    return 0xe5bdf8de;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.status, "UserStatus"],
    ];
  }

  constructor(params: { user_id: bigint; status: TypeUserStatus }) {
    super();
    this.user_id = params.user_id;
    this.status = params.status;
  }
}

export class UpdateUserName extends TypeUpdate {
  user_id: bigint;
  first_name: string;
  last_name: string;
  username: string;

  protected get [id]() {
    return 0xc3f202e0;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.first_name, "string"],
      [this.last_name, "string"],
      [this.username, "string"],
    ];
  }

  constructor(
    params: {
      user_id: bigint;
      first_name: string;
      last_name: string;
      username: string;
    },
  ) {
    super();
    this.user_id = params.user_id;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.username = params.username;
  }
}

export class UpdateUserPhoto extends TypeUpdate {
  user_id: bigint;
  date: number;
  photo: TypeUserProfilePhoto;
  previous: boolean;

  protected get [id]() {
    return 0xf227868c;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.date, "int"],
      [this.photo, "UserProfilePhoto"],
      [this.previous, "Bool"],
    ];
  }

  constructor(
    params: {
      user_id: bigint;
      date: number;
      photo: TypeUserProfilePhoto;
      previous: boolean;
    },
  ) {
    super();
    this.user_id = params.user_id;
    this.date = params.date;
    this.photo = params.photo;
    this.previous = params.previous;
  }
}

export class UpdatesDifferenceEmpty extends TypeUpdatesDifference {
  date: number;
  seq: number;

  protected get [id]() {
    return 0x5d75a138;
  }

  protected get [params](): Params {
    return [
      [this.date, "int"],
      [this.seq, "int"],
    ];
  }

  constructor(params: { date: number; seq: number }) {
    super();
    this.date = params.date;
    this.seq = params.seq;
  }
}

export class UpdatesDifferenceSlice extends TypeUpdatesDifference {
  new_messages: Array<TypeMessage>;
  new_encrypted_messages: Array<TypeEncryptedMessage>;
  other_updates: Array<TypeUpdate>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  intermediate_state: TypeUpdatesState;

  protected get [id]() {
    return 0xa8fb1981;
  }

  protected get [params](): Params {
    return [
      [this.new_messages, "Vector<Message>"],
      [this.new_encrypted_messages, "Vector<EncryptedMessage>"],
      [this.other_updates, "Vector<Update>"],
      [this.chats, "Vector<Chat>"],
      [this.users, "Vector<User>"],
      [this.intermediate_state, "updates.State"],
    ];
  }

  constructor(
    params: {
      new_messages: Array<TypeMessage>;
      new_encrypted_messages: Array<TypeEncryptedMessage>;
      other_updates: Array<TypeUpdate>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
      intermediate_state: TypeUpdatesState;
    },
  ) {
    super();
    this.new_messages = params.new_messages;
    this.new_encrypted_messages = params.new_encrypted_messages;
    this.other_updates = params.other_updates;
    this.chats = params.chats;
    this.users = params.users;
    this.intermediate_state = params.intermediate_state;
  }
}

export class UpdatesTooLong extends TypeUpdates {
  protected get [id]() {
    return 0xe317af7e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateShortMessage extends TypeUpdates {
  out?: true;
  mentioned?: true;
  media_unread?: true;
  silent?: true;
  id: number;
  user_id: bigint;
  message: string;
  pts: number;
  pts_count: number;
  date: number;
  fwd_from?: TypeMessageFwdHeader;
  via_bot_id?: bigint;
  reply_to?: TypeMessageReplyHeader;
  entities?: Array<TypeMessageEntity>;
  ttl_period?: number;

  protected get [id]() {
    return 0x313bc7f8;
  }

  protected get [params](): Params {
    return [
      [this.out ?? null, "flags.1?true"],
      [this.mentioned ?? null, "flags.4?true"],
      [this.media_unread ?? null, "flags.5?true"],
      [this.silent ?? null, "flags.13?true"],
      [this.id, "int"],
      [this.user_id, "long"],
      [this.message, "string"],
      [this.pts, "int"],
      [this.pts_count, "int"],
      [this.date, "int"],
      [this.fwd_from ?? null, "flags.2?MessageFwdHeader"],
      [this.via_bot_id ?? null, "flags.11?long"],
      [this.reply_to ?? null, "flags.3?MessageReplyHeader"],
      [this.entities ?? null, "flags.7?Vector<MessageEntity>"],
      [this.ttl_period ?? null, "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      mentioned?: true;
      media_unread?: true;
      silent?: true;
      id: number;
      user_id: bigint;
      message: string;
      pts: number;
      pts_count: number;
      date: number;
      fwd_from?: TypeMessageFwdHeader;
      via_bot_id?: bigint;
      reply_to?: TypeMessageReplyHeader;
      entities?: Array<TypeMessageEntity>;
      ttl_period?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.mentioned = params.mentioned;
    this.media_unread = params.media_unread;
    this.silent = params.silent;
    this.id = params.id;
    this.user_id = params.user_id;
    this.message = params.message;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
    this.date = params.date;
    this.fwd_from = params.fwd_from;
    this.via_bot_id = params.via_bot_id;
    this.reply_to = params.reply_to;
    this.entities = params.entities;
    this.ttl_period = params.ttl_period;
  }
}

export class UpdateShortChatMessage extends TypeUpdates {
  out?: true;
  mentioned?: true;
  media_unread?: true;
  silent?: true;
  id: number;
  from_id: bigint;
  chat_id: bigint;
  message: string;
  pts: number;
  pts_count: number;
  date: number;
  fwd_from?: TypeMessageFwdHeader;
  via_bot_id?: bigint;
  reply_to?: TypeMessageReplyHeader;
  entities?: Array<TypeMessageEntity>;
  ttl_period?: number;

  protected get [id]() {
    return 0x4d6deea5;
  }

  protected get [params](): Params {
    return [
      [this.out ?? null, "flags.1?true"],
      [this.mentioned ?? null, "flags.4?true"],
      [this.media_unread ?? null, "flags.5?true"],
      [this.silent ?? null, "flags.13?true"],
      [this.id, "int"],
      [this.from_id, "long"],
      [this.chat_id, "long"],
      [this.message, "string"],
      [this.pts, "int"],
      [this.pts_count, "int"],
      [this.date, "int"],
      [this.fwd_from ?? null, "flags.2?MessageFwdHeader"],
      [this.via_bot_id ?? null, "flags.11?long"],
      [this.reply_to ?? null, "flags.3?MessageReplyHeader"],
      [this.entities ?? null, "flags.7?Vector<MessageEntity>"],
      [this.ttl_period ?? null, "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      mentioned?: true;
      media_unread?: true;
      silent?: true;
      id: number;
      from_id: bigint;
      chat_id: bigint;
      message: string;
      pts: number;
      pts_count: number;
      date: number;
      fwd_from?: TypeMessageFwdHeader;
      via_bot_id?: bigint;
      reply_to?: TypeMessageReplyHeader;
      entities?: Array<TypeMessageEntity>;
      ttl_period?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.mentioned = params.mentioned;
    this.media_unread = params.media_unread;
    this.silent = params.silent;
    this.id = params.id;
    this.from_id = params.from_id;
    this.chat_id = params.chat_id;
    this.message = params.message;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
    this.date = params.date;
    this.fwd_from = params.fwd_from;
    this.via_bot_id = params.via_bot_id;
    this.reply_to = params.reply_to;
    this.entities = params.entities;
    this.ttl_period = params.ttl_period;
  }
}

export class UpdateShort extends TypeUpdates {
  update: TypeUpdate;
  date: number;

  protected get [id]() {
    return 0x78d4dec1;
  }

  protected get [params](): Params {
    return [
      [this.update, "Update"],
      [this.date, "int"],
    ];
  }

  constructor(params: { update: TypeUpdate; date: number }) {
    super();
    this.update = params.update;
    this.date = params.date;
  }
}

export class UpdatesCombined extends TypeUpdates {
  updates: Array<TypeUpdate>;
  users: Array<TypeUser>;
  chats: Array<TypeChat>;
  date: number;
  seq_start: number;
  seq: number;

  protected get [id]() {
    return 0x725b04c3;
  }

  protected get [params](): Params {
    return [
      [this.updates, "Vector<Update>"],
      [this.users, "Vector<User>"],
      [this.chats, "Vector<Chat>"],
      [this.date, "int"],
      [this.seq_start, "int"],
      [this.seq, "int"],
    ];
  }

  constructor(
    params: {
      updates: Array<TypeUpdate>;
      users: Array<TypeUser>;
      chats: Array<TypeChat>;
      date: number;
      seq_start: number;
      seq: number;
    },
  ) {
    super();
    this.updates = params.updates;
    this.users = params.users;
    this.chats = params.chats;
    this.date = params.date;
    this.seq_start = params.seq_start;
    this.seq = params.seq;
  }
}

export class PhotosPhotosSlice extends TypePhotosPhotos {
  count: number;
  photos: Array<TypePhoto>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x15051f54;
  }

  protected get [params](): Params {
    return [
      [this.count, "int"],
      [this.photos, "Vector<Photo>"],
      [this.users, "Vector<User>"],
    ];
  }

  constructor(
    params: { count: number; photos: Array<TypePhoto>; users: Array<TypeUser> },
  ) {
    super();
    this.count = params.count;
    this.photos = params.photos;
    this.users = params.users;
  }
}

export class HelpNoAppUpdate extends TypeHelpAppUpdate {
  protected get [id]() {
    return 0xc45a6536;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateNewEncryptedMessage extends TypeUpdate {
  message: TypeEncryptedMessage;
  qts: number;

  protected get [id]() {
    return 0x12bcbd9a;
  }

  protected get [params](): Params {
    return [
      [this.message, "EncryptedMessage"],
      [this.qts, "int"],
    ];
  }

  constructor(params: { message: TypeEncryptedMessage; qts: number }) {
    super();
    this.message = params.message;
    this.qts = params.qts;
  }
}

export class UpdateEncryptedChatTyping extends TypeUpdate {
  chat_id: number;

  protected get [id]() {
    return 0x1710f156;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "int"],
    ];
  }

  constructor(params: { chat_id: number }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class UpdateEncryption extends TypeUpdate {
  chat: TypeEncryptedChat;
  date: number;

  protected get [id]() {
    return 0xb4a2e88d;
  }

  protected get [params](): Params {
    return [
      [this.chat, "EncryptedChat"],
      [this.date, "int"],
    ];
  }

  constructor(params: { chat: TypeEncryptedChat; date: number }) {
    super();
    this.chat = params.chat;
    this.date = params.date;
  }
}

export class UpdateEncryptedMessagesRead extends TypeUpdate {
  chat_id: number;
  max_date: number;
  date: number;

  protected get [id]() {
    return 0x38fe25b7;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "int"],
      [this.max_date, "int"],
      [this.date, "int"],
    ];
  }

  constructor(params: { chat_id: number; max_date: number; date: number }) {
    super();
    this.chat_id = params.chat_id;
    this.max_date = params.max_date;
    this.date = params.date;
  }
}

export class EncryptedChatEmpty extends TypeEncryptedChat {
  id: number;

  protected get [id]() {
    return 0xab7ec0a0;
  }

  protected get [params](): Params {
    return [
      [this.id, "int"],
    ];
  }

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

export class EncryptedChatWaiting extends TypeEncryptedChat {
  id: number;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;

  protected get [id]() {
    return 0x66b25953;
  }

  protected get [params](): Params {
    return [
      [this.id, "int"],
      [this.access_hash, "long"],
      [this.date, "int"],
      [this.admin_id, "long"],
      [this.participant_id, "long"],
    ];
  }

  constructor(
    params: {
      id: number;
      access_hash: bigint;
      date: number;
      admin_id: bigint;
      participant_id: bigint;
    },
  ) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.date = params.date;
    this.admin_id = params.admin_id;
    this.participant_id = params.participant_id;
  }
}

export class EncryptedChatRequested extends TypeEncryptedChat {
  folder_id?: number;
  id: number;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  g_a: Uint8Array;

  protected get [id]() {
    return 0x48f1d94c;
  }

  protected get [params](): Params {
    return [
      [this.folder_id ?? null, "flags.0?int"],
      [this.id, "int"],
      [this.access_hash, "long"],
      [this.date, "int"],
      [this.admin_id, "long"],
      [this.participant_id, "long"],
      [this.g_a, "bytes"],
    ];
  }

  constructor(
    params: {
      folder_id?: number;
      id: number;
      access_hash: bigint;
      date: number;
      admin_id: bigint;
      participant_id: bigint;
      g_a: Uint8Array;
    },
  ) {
    super();
    this.folder_id = params.folder_id;
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.date = params.date;
    this.admin_id = params.admin_id;
    this.participant_id = params.participant_id;
    this.g_a = params.g_a;
  }
}

export class EncryptedChatDiscarded extends TypeEncryptedChat {
  history_deleted?: true;
  id: number;

  protected get [id]() {
    return 0x1e1c7c45;
  }

  protected get [params](): Params {
    return [
      [this.history_deleted ?? null, "flags.0?true"],
      [this.id, "int"],
    ];
  }

  constructor(params: { history_deleted?: true; id: number }) {
    super();
    this.history_deleted = params.history_deleted;
    this.id = params.id;
  }
}

export class EncryptedFileEmpty extends TypeEncryptedFile {
  protected get [id]() {
    return 0xc21f497e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputEncryptedFileEmpty extends TypeInputEncryptedFile {
  protected get [id]() {
    return 0x1837c364;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputEncryptedFileUploaded extends TypeInputEncryptedFile {
  id: bigint;
  parts: number;
  md5_checksum: string;
  key_fingerprint: number;

  protected get [id]() {
    return 0x64bd0306;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.parts, "int"],
      [this.md5_checksum, "string"],
      [this.key_fingerprint, "int"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      parts: number;
      md5_checksum: string;
      key_fingerprint: number;
    },
  ) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.md5_checksum = params.md5_checksum;
    this.key_fingerprint = params.key_fingerprint;
  }
}

export class InputEncryptedFileLocation extends TypeInputFileLocation {
  id: bigint;
  access_hash: bigint;

  protected get [id]() {
    return 0xf5235d55;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.access_hash, "long"],
    ];
  }

  constructor(params: { id: bigint; access_hash: bigint }) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
  }
}

export class EncryptedMessageService extends TypeEncryptedMessage {
  random_id: bigint;
  chat_id: number;
  date: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0x23734b06;
  }

  protected get [params](): Params {
    return [
      [this.random_id, "long"],
      [this.chat_id, "int"],
      [this.date, "int"],
      [this.bytes, "bytes"],
    ];
  }

  constructor(
    params: {
      random_id: bigint;
      chat_id: number;
      date: number;
      bytes: Uint8Array;
    },
  ) {
    super();
    this.random_id = params.random_id;
    this.chat_id = params.chat_id;
    this.date = params.date;
    this.bytes = params.bytes;
  }
}

export class MessagesDhConfigNotModified extends TypeMessagesDhConfig {
  random: Uint8Array;

  protected get [id]() {
    return 0xc0e24635;
  }

  protected get [params](): Params {
    return [
      [this.random, "bytes"],
    ];
  }

  constructor(params: { random: Uint8Array }) {
    super();
    this.random = params.random;
  }
}

export class MessagesSentEncryptedFile
  extends TypeMessagesSentEncryptedMessage {
  date: number;
  file: TypeEncryptedFile;

  protected get [id]() {
    return 0x9493ff32;
  }

  protected get [params](): Params {
    return [
      [this.date, "int"],
      [this.file, "EncryptedFile"],
    ];
  }

  constructor(params: { date: number; file: TypeEncryptedFile }) {
    super();
    this.date = params.date;
    this.file = params.file;
  }
}

export class InputFileBig extends TypeInputFile {
  id: bigint;
  parts: number;
  name: string;

  protected get [id]() {
    return 0xfa4f0bb5;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.parts, "int"],
      [this.name, "string"],
    ];
  }

  constructor(params: { id: bigint; parts: number; name: string }) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.name = params.name;
  }
}

export class InputEncryptedFileBigUploaded extends TypeInputEncryptedFile {
  id: bigint;
  parts: number;
  key_fingerprint: number;

  protected get [id]() {
    return 0x2dc173c8;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.parts, "int"],
      [this.key_fingerprint, "int"],
    ];
  }

  constructor(params: { id: bigint; parts: number; key_fingerprint: number }) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.key_fingerprint = params.key_fingerprint;
  }
}

export class UpdateChatParticipantAdd extends TypeUpdate {
  chat_id: bigint;
  user_id: bigint;
  inviter_id: bigint;
  date: number;
  version: number;

  protected get [id]() {
    return 0x3dda5451;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
      [this.user_id, "long"],
      [this.inviter_id, "long"],
      [this.date, "int"],
      [this.version, "int"],
    ];
  }

  constructor(
    params: {
      chat_id: bigint;
      user_id: bigint;
      inviter_id: bigint;
      date: number;
      version: number;
    },
  ) {
    super();
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
    this.inviter_id = params.inviter_id;
    this.date = params.date;
    this.version = params.version;
  }
}

export class UpdateChatParticipantDelete extends TypeUpdate {
  chat_id: bigint;
  user_id: bigint;
  version: number;

  protected get [id]() {
    return 0xe32f3d77;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
      [this.user_id, "long"],
      [this.version, "int"],
    ];
  }

  constructor(params: { chat_id: bigint; user_id: bigint; version: number }) {
    super();
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
    this.version = params.version;
  }
}

export class UpdateDcOptions extends TypeUpdate {
  dc_options: Array<TypeDcOption>;

  protected get [id]() {
    return 0x8e5e9873;
  }

  protected get [params](): Params {
    return [
      [this.dc_options, "Vector<DcOption>"],
    ];
  }

  constructor(params: { dc_options: Array<TypeDcOption> }) {
    super();
    this.dc_options = params.dc_options;
  }
}

export class InputMediaUploadedDocument extends TypeInputMedia {
  nosound_video?: true;
  force_file?: true;
  file: TypeInputFile;
  thumb?: TypeInputFile;
  mime_type: string;
  attributes: Array<TypeDocumentAttribute>;
  stickers?: Array<TypeInputDocument>;
  ttl_seconds?: number;

  protected get [id]() {
    return 0x5b38c6c1;
  }

  protected get [params](): Params {
    return [
      [this.nosound_video ?? null, "flags.3?true"],
      [this.force_file ?? null, "flags.4?true"],
      [this.file, "InputFile"],
      [this.thumb ?? null, "flags.2?InputFile"],
      [this.mime_type, "string"],
      [this.attributes, "Vector<DocumentAttribute>"],
      [this.stickers ?? null, "flags.0?Vector<InputDocument>"],
      [this.ttl_seconds ?? null, "flags.1?int"],
    ];
  }

  constructor(
    params: {
      nosound_video?: true;
      force_file?: true;
      file: TypeInputFile;
      thumb?: TypeInputFile;
      mime_type: string;
      attributes: Array<TypeDocumentAttribute>;
      stickers?: Array<TypeInputDocument>;
      ttl_seconds?: number;
    },
  ) {
    super();
    this.nosound_video = params.nosound_video;
    this.force_file = params.force_file;
    this.file = params.file;
    this.thumb = params.thumb;
    this.mime_type = params.mime_type;
    this.attributes = params.attributes;
    this.stickers = params.stickers;
    this.ttl_seconds = params.ttl_seconds;
  }
}

export class InputMediaDocument extends TypeInputMedia {
  id: TypeInputDocument;
  ttl_seconds?: number;
  query?: string;

  protected get [id]() {
    return 0x33473058;
  }

  protected get [params](): Params {
    return [
      [this.id, "InputDocument"],
      [this.ttl_seconds ?? null, "flags.0?int"],
      [this.query ?? null, "flags.1?string"],
    ];
  }

  constructor(
    params: { id: TypeInputDocument; ttl_seconds?: number; query?: string },
  ) {
    super();
    this.id = params.id;
    this.ttl_seconds = params.ttl_seconds;
    this.query = params.query;
  }
}

export class MessageMediaDocument extends TypeMessageMedia {
  nopremium?: true;
  document?: TypeDocument;
  ttl_seconds?: number;

  protected get [id]() {
    return 0x9cb070d7;
  }

  protected get [params](): Params {
    return [
      [this.nopremium ?? null, "flags.3?true"],
      [this.document ?? null, "flags.0?Document"],
      [this.ttl_seconds ?? null, "flags.2?int"],
    ];
  }

  constructor(
    params: { nopremium?: true; document?: TypeDocument; ttl_seconds?: number },
  ) {
    super();
    this.nopremium = params.nopremium;
    this.document = params.document;
    this.ttl_seconds = params.ttl_seconds;
  }
}

export class InputDocumentEmpty extends TypeInputDocument {
  protected get [id]() {
    return 0x72f0eaae;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputDocumentFileLocation extends TypeInputFileLocation {
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
  thumb_size: string;

  protected get [id]() {
    return 0xbad07584;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.access_hash, "long"],
      [this.file_reference, "bytes"],
      [this.thumb_size, "string"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      access_hash: bigint;
      file_reference: Uint8Array;
      thumb_size: string;
    },
  ) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.file_reference = params.file_reference;
    this.thumb_size = params.thumb_size;
  }
}

export class DocumentEmpty extends TypeDocument {
  id: bigint;

  protected get [id]() {
    return 0x36f8c871;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class NotifyUsers extends TypeNotifyPeer {
  protected get [id]() {
    return 0xb4c83b4c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class NotifyChats extends TypeNotifyPeer {
  protected get [id]() {
    return 0xc007cec3;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateNotifySettings extends TypeUpdate {
  peer: TypeNotifyPeer;
  notify_settings: TypePeerNotifySettings;

  protected get [id]() {
    return 0xbec268ef;
  }

  protected get [params](): Params {
    return [
      [this.peer, "NotifyPeer"],
      [this.notify_settings, "PeerNotifySettings"],
    ];
  }

  constructor(
    params: { peer: TypeNotifyPeer; notify_settings: TypePeerNotifySettings },
  ) {
    super();
    this.peer = params.peer;
    this.notify_settings = params.notify_settings;
  }
}

export class SendMessageTypingAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0x16bf744e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageCancelAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0xfd5ec8f5;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageRecordVideoAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0xa187d66f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageUploadVideoAction extends TypeSendMessageAction {
  progress: number;

  protected get [id]() {
    return 0xe9763aec;
  }

  protected get [params](): Params {
    return [
      [this.progress, "int"],
    ];
  }

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class SendMessageRecordAudioAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0xd52f73f7;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageUploadAudioAction extends TypeSendMessageAction {
  progress: number;

  protected get [id]() {
    return 0xf351d7ab;
  }

  protected get [params](): Params {
    return [
      [this.progress, "int"],
    ];
  }

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class SendMessageUploadPhotoAction extends TypeSendMessageAction {
  progress: number;

  protected get [id]() {
    return 0xd1d34a26;
  }

  protected get [params](): Params {
    return [
      [this.progress, "int"],
    ];
  }

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class SendMessageUploadDocumentAction extends TypeSendMessageAction {
  progress: number;

  protected get [id]() {
    return 0xaa0cd9e4;
  }

  protected get [params](): Params {
    return [
      [this.progress, "int"],
    ];
  }

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class SendMessageGeoLocationAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0x176f8ba1;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageChooseContactAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0x628cbc6f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateServiceNotification extends TypeUpdate {
  popup?: true;
  inbox_date?: number;
  type: string;
  message: string;
  media: TypeMessageMedia;
  entities: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0xebe46819;
  }

  protected get [params](): Params {
    return [
      [this.popup ?? null, "flags.0?true"],
      [this.inbox_date ?? null, "flags.1?int"],
      [this.type, "string"],
      [this.message, "string"],
      [this.media, "MessageMedia"],
      [this.entities, "Vector<MessageEntity>"],
    ];
  }

  constructor(
    params: {
      popup?: true;
      inbox_date?: number;
      type: string;
      message: string;
      media: TypeMessageMedia;
      entities: Array<TypeMessageEntity>;
    },
  ) {
    super();
    this.popup = params.popup;
    this.inbox_date = params.inbox_date;
    this.type = params.type;
    this.message = params.message;
    this.media = params.media;
    this.entities = params.entities;
  }
}

export class UserStatusRecently extends TypeUserStatus {
  protected get [id]() {
    return 0xe26f42f1;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UserStatusLastWeek extends TypeUserStatus {
  protected get [id]() {
    return 0x07bf09fc;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UserStatusLastMonth extends TypeUserStatus {
  protected get [id]() {
    return 0x77ebc742;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdatePrivacy extends TypeUpdate {
  key: TypePrivacyKey;
  rules: Array<TypePrivacyRule>;

  protected get [id]() {
    return 0xee3b272a;
  }

  protected get [params](): Params {
    return [
      [this.key, "PrivacyKey"],
      [this.rules, "Vector<PrivacyRule>"],
    ];
  }

  constructor(params: { key: TypePrivacyKey; rules: Array<TypePrivacyRule> }) {
    super();
    this.key = params.key;
    this.rules = params.rules;
  }
}

export class InputPrivacyKeyStatusTimestamp extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0x4f96cb18;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyStatusTimestamp extends TypePrivacyKey {
  protected get [id]() {
    return 0xbc2eab30;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyValueAllowContacts extends TypeInputPrivacyRule {
  protected get [id]() {
    return 0x0d09e07b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyValueAllowAll extends TypeInputPrivacyRule {
  protected get [id]() {
    return 0x184b35ce;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyValueAllowUsers extends TypeInputPrivacyRule {
  users: Array<TypeInputUser>;

  protected get [id]() {
    return 0x131cc67f;
  }

  protected get [params](): Params {
    return [
      [this.users, "Vector<InputUser>"],
    ];
  }

  constructor(params: { users: Array<TypeInputUser> }) {
    super();
    this.users = params.users;
  }
}

export class InputPrivacyValueDisallowContacts extends TypeInputPrivacyRule {
  protected get [id]() {
    return 0x0ba52007;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyValueDisallowAll extends TypeInputPrivacyRule {
  protected get [id]() {
    return 0xd66b66c9;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyValueDisallowUsers extends TypeInputPrivacyRule {
  users: Array<TypeInputUser>;

  protected get [id]() {
    return 0x90110467;
  }

  protected get [params](): Params {
    return [
      [this.users, "Vector<InputUser>"],
    ];
  }

  constructor(params: { users: Array<TypeInputUser> }) {
    super();
    this.users = params.users;
  }
}

export class PrivacyValueAllowContacts extends TypePrivacyRule {
  protected get [id]() {
    return 0xfffe1bac;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyValueAllowAll extends TypePrivacyRule {
  protected get [id]() {
    return 0x65427b82;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyValueAllowUsers extends TypePrivacyRule {
  users: Array<bigint>;

  protected get [id]() {
    return 0xb8905fb2;
  }

  protected get [params](): Params {
    return [
      [this.users, "Vector<long>"],
    ];
  }

  constructor(params: { users: Array<bigint> }) {
    super();
    this.users = params.users;
  }
}

export class PrivacyValueDisallowContacts extends TypePrivacyRule {
  protected get [id]() {
    return 0xf888fa1a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyValueDisallowAll extends TypePrivacyRule {
  protected get [id]() {
    return 0x8b73e763;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyValueDisallowUsers extends TypePrivacyRule {
  users: Array<bigint>;

  protected get [id]() {
    return 0xe4621141;
  }

  protected get [params](): Params {
    return [
      [this.users, "Vector<long>"],
    ];
  }

  constructor(params: { users: Array<bigint> }) {
    super();
    this.users = params.users;
  }
}

export class UpdateUserPhone extends TypeUpdate {
  user_id: bigint;
  phone: string;

  protected get [id]() {
    return 0x05492a13;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.phone, "string"],
    ];
  }

  constructor(params: { user_id: bigint; phone: string }) {
    super();
    this.user_id = params.user_id;
    this.phone = params.phone;
  }
}

export class DocumentAttributeImageSize extends TypeDocumentAttribute {
  w: number;
  h: number;

  protected get [id]() {
    return 0x6c37c15c;
  }

  protected get [params](): Params {
    return [
      [this.w, "int"],
      [this.h, "int"],
    ];
  }

  constructor(params: { w: number; h: number }) {
    super();
    this.w = params.w;
    this.h = params.h;
  }
}

export class DocumentAttributeAnimated extends TypeDocumentAttribute {
  protected get [id]() {
    return 0x11b58939;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class DocumentAttributeSticker extends TypeDocumentAttribute {
  mask?: true;
  alt: string;
  stickerset: TypeInputStickerSet;
  mask_coords?: TypeMaskCoords;

  protected get [id]() {
    return 0x6319d612;
  }

  protected get [params](): Params {
    return [
      [this.mask ?? null, "flags.1?true"],
      [this.alt, "string"],
      [this.stickerset, "InputStickerSet"],
      [this.mask_coords ?? null, "flags.0?MaskCoords"],
    ];
  }

  constructor(
    params: {
      mask?: true;
      alt: string;
      stickerset: TypeInputStickerSet;
      mask_coords?: TypeMaskCoords;
    },
  ) {
    super();
    this.mask = params.mask;
    this.alt = params.alt;
    this.stickerset = params.stickerset;
    this.mask_coords = params.mask_coords;
  }
}

export class DocumentAttributeVideo extends TypeDocumentAttribute {
  round_message?: true;
  supports_streaming?: true;
  duration: number;
  w: number;
  h: number;

  protected get [id]() {
    return 0x0ef02ce6;
  }

  protected get [params](): Params {
    return [
      [this.round_message ?? null, "flags.0?true"],
      [this.supports_streaming ?? null, "flags.1?true"],
      [this.duration, "int"],
      [this.w, "int"],
      [this.h, "int"],
    ];
  }

  constructor(
    params: {
      round_message?: true;
      supports_streaming?: true;
      duration: number;
      w: number;
      h: number;
    },
  ) {
    super();
    this.round_message = params.round_message;
    this.supports_streaming = params.supports_streaming;
    this.duration = params.duration;
    this.w = params.w;
    this.h = params.h;
  }
}

export class DocumentAttributeAudio extends TypeDocumentAttribute {
  voice?: true;
  duration: number;
  title?: string;
  performer?: string;
  waveform?: Uint8Array;

  protected get [id]() {
    return 0x9852f9c6;
  }

  protected get [params](): Params {
    return [
      [this.voice ?? null, "flags.10?true"],
      [this.duration, "int"],
      [this.title ?? null, "flags.0?string"],
      [this.performer ?? null, "flags.1?string"],
      [this.waveform ?? null, "flags.2?bytes"],
    ];
  }

  constructor(
    params: {
      voice?: true;
      duration: number;
      title?: string;
      performer?: string;
      waveform?: Uint8Array;
    },
  ) {
    super();
    this.voice = params.voice;
    this.duration = params.duration;
    this.title = params.title;
    this.performer = params.performer;
    this.waveform = params.waveform;
  }
}

export class DocumentAttributeFilename extends TypeDocumentAttribute {
  file_name: string;

  protected get [id]() {
    return 0x15590068;
  }

  protected get [params](): Params {
    return [
      [this.file_name, "string"],
    ];
  }

  constructor(params: { file_name: string }) {
    super();
    this.file_name = params.file_name;
  }
}

export class MessagesStickersNotModified extends TypeMessagesStickers {
  protected get [id]() {
    return 0xf1749a22;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesAllStickersNotModified extends TypeMessagesAllStickers {
  protected get [id]() {
    return 0xe86602c3;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateReadHistoryInbox extends TypeUpdate {
  folder_id?: number;
  peer: TypePeer;
  max_id: number;
  still_unread_count: number;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x9c974fdf;
  }

  protected get [params](): Params {
    return [
      [this.folder_id ?? null, "flags.0?int"],
      [this.peer, "Peer"],
      [this.max_id, "int"],
      [this.still_unread_count, "int"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: {
      folder_id?: number;
      peer: TypePeer;
      max_id: number;
      still_unread_count: number;
      pts: number;
      pts_count: number;
    },
  ) {
    super();
    this.folder_id = params.folder_id;
    this.peer = params.peer;
    this.max_id = params.max_id;
    this.still_unread_count = params.still_unread_count;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class UpdateReadHistoryOutbox extends TypeUpdate {
  peer: TypePeer;
  max_id: number;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x2f2f21bf;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.max_id, "int"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: { peer: TypePeer; max_id: number; pts: number; pts_count: number },
  ) {
    super();
    this.peer = params.peer;
    this.max_id = params.max_id;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class UpdateWebPage extends TypeUpdate {
  webpage: TypeWebPage;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x7f891213;
  }

  protected get [params](): Params {
    return [
      [this.webpage, "WebPage"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: { webpage: TypeWebPage; pts: number; pts_count: number },
  ) {
    super();
    this.webpage = params.webpage;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class WebPageEmpty extends TypeWebPage {
  id: bigint;

  protected get [id]() {
    return 0xeb1477e8;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class WebPagePending extends TypeWebPage {
  id: bigint;
  date: number;

  protected get [id]() {
    return 0xc586da1c;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.date, "int"],
    ];
  }

  constructor(params: { id: bigint; date: number }) {
    super();
    this.id = params.id;
    this.date = params.date;
  }
}

export class MessageMediaWebPage extends TypeMessageMedia {
  webpage: TypeWebPage;

  protected get [id]() {
    return 0xa32dd500;
  }

  protected get [params](): Params {
    return [
      [this.webpage, "WebPage"],
    ];
  }

  constructor(params: { webpage: TypeWebPage }) {
    super();
    this.webpage = params.webpage;
  }
}

export class InputMediaVenue extends TypeInputMedia {
  geo_point: TypeInputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;

  protected get [id]() {
    return 0xc13d1c11;
  }

  protected get [params](): Params {
    return [
      [this.geo_point, "InputGeoPoint"],
      [this.title, "string"],
      [this.address, "string"],
      [this.provider, "string"],
      [this.venue_id, "string"],
      [this.venue_type, "string"],
    ];
  }

  constructor(
    params: {
      geo_point: TypeInputGeoPoint;
      title: string;
      address: string;
      provider: string;
      venue_id: string;
      venue_type: string;
    },
  ) {
    super();
    this.geo_point = params.geo_point;
    this.title = params.title;
    this.address = params.address;
    this.provider = params.provider;
    this.venue_id = params.venue_id;
    this.venue_type = params.venue_type;
  }
}

export class MessageMediaVenue extends TypeMessageMedia {
  geo: TypeGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;

  protected get [id]() {
    return 0x2ec0533f;
  }

  protected get [params](): Params {
    return [
      [this.geo, "GeoPoint"],
      [this.title, "string"],
      [this.address, "string"],
      [this.provider, "string"],
      [this.venue_id, "string"],
      [this.venue_type, "string"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      title: string;
      address: string;
      provider: string;
      venue_id: string;
      venue_type: string;
    },
  ) {
    super();
    this.geo = params.geo;
    this.title = params.title;
    this.address = params.address;
    this.provider = params.provider;
    this.venue_id = params.venue_id;
    this.venue_type = params.venue_type;
  }
}

export class ChatInviteExported extends TypeExportedChatInvite {
  revoked?: true;
  permanent?: true;
  request_needed?: true;
  link: string;
  admin_id: bigint;
  date: number;
  start_date?: number;
  expire_date?: number;
  usage_limit?: number;
  usage?: number;
  requested?: number;
  title?: string;

  protected get [id]() {
    return 0x0ab4a819;
  }

  protected get [params](): Params {
    return [
      [this.revoked ?? null, "flags.0?true"],
      [this.permanent ?? null, "flags.5?true"],
      [this.request_needed ?? null, "flags.6?true"],
      [this.link, "string"],
      [this.admin_id, "long"],
      [this.date, "int"],
      [this.start_date ?? null, "flags.4?int"],
      [this.expire_date ?? null, "flags.1?int"],
      [this.usage_limit ?? null, "flags.2?int"],
      [this.usage ?? null, "flags.3?int"],
      [this.requested ?? null, "flags.7?int"],
      [this.title ?? null, "flags.8?string"],
    ];
  }

  constructor(
    params: {
      revoked?: true;
      permanent?: true;
      request_needed?: true;
      link: string;
      admin_id: bigint;
      date: number;
      start_date?: number;
      expire_date?: number;
      usage_limit?: number;
      usage?: number;
      requested?: number;
      title?: string;
    },
  ) {
    super();
    this.revoked = params.revoked;
    this.permanent = params.permanent;
    this.request_needed = params.request_needed;
    this.link = params.link;
    this.admin_id = params.admin_id;
    this.date = params.date;
    this.start_date = params.start_date;
    this.expire_date = params.expire_date;
    this.usage_limit = params.usage_limit;
    this.usage = params.usage;
    this.requested = params.requested;
    this.title = params.title;
  }
}

export class ChatInviteAlready extends TypeChatInvite {
  chat: TypeChat;

  protected get [id]() {
    return 0x5a686d7c;
  }

  protected get [params](): Params {
    return [
      [this.chat, "Chat"],
    ];
  }

  constructor(params: { chat: TypeChat }) {
    super();
    this.chat = params.chat;
  }
}

export class MessageActionChatJoinedByLink extends TypeMessageAction {
  inviter_id: bigint;

  protected get [id]() {
    return 0x031224c3;
  }

  protected get [params](): Params {
    return [
      [this.inviter_id, "long"],
    ];
  }

  constructor(params: { inviter_id: bigint }) {
    super();
    this.inviter_id = params.inviter_id;
  }
}

export class UpdateReadMessagesContents extends TypeUpdate {
  messages: Array<number>;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x68c13933;
  }

  protected get [params](): Params {
    return [
      [this.messages, "Vector<int>"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: { messages: Array<number>; pts: number; pts_count: number },
  ) {
    super();
    this.messages = params.messages;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class InputStickerSetEmpty extends TypeInputStickerSet {
  protected get [id]() {
    return 0xffb62b95;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputStickerSetID extends TypeInputStickerSet {
  id: bigint;
  access_hash: bigint;

  protected get [id]() {
    return 0x9de7a269;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.access_hash, "long"],
    ];
  }

  constructor(params: { id: bigint; access_hash: bigint }) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
  }
}

export class InputStickerSetShortName extends TypeInputStickerSet {
  short_name: string;

  protected get [id]() {
    return 0x861cc8a0;
  }

  protected get [params](): Params {
    return [
      [this.short_name, "string"],
    ];
  }

  constructor(params: { short_name: string }) {
    super();
    this.short_name = params.short_name;
  }
}

export class ReplyKeyboardHide extends TypeReplyMarkup {
  selective?: true;

  protected get [id]() {
    return 0xa03e5b85;
  }

  protected get [params](): Params {
    return [
      [this.selective ?? null, "flags.2?true"],
    ];
  }

  constructor(params: { selective?: true }) {
    super();
    this.selective = params.selective;
  }
}

export class ReplyKeyboardForceReply extends TypeReplyMarkup {
  single_use?: true;
  selective?: true;
  placeholder?: string;

  protected get [id]() {
    return 0x86b40b08;
  }

  protected get [params](): Params {
    return [
      [this.single_use ?? null, "flags.1?true"],
      [this.selective ?? null, "flags.2?true"],
      [this.placeholder ?? null, "flags.3?string"],
    ];
  }

  constructor(
    params: { single_use?: true; selective?: true; placeholder?: string },
  ) {
    super();
    this.single_use = params.single_use;
    this.selective = params.selective;
    this.placeholder = params.placeholder;
  }
}

export class ReplyKeyboardMarkup extends TypeReplyMarkup {
  resize?: true;
  single_use?: true;
  selective?: true;
  rows: Array<TypeKeyboardButtonRow>;
  placeholder?: string;

  protected get [id]() {
    return 0x85dd99d1;
  }

  protected get [params](): Params {
    return [
      [this.resize ?? null, "flags.0?true"],
      [this.single_use ?? null, "flags.1?true"],
      [this.selective ?? null, "flags.2?true"],
      [this.rows, "Vector<KeyboardButtonRow>"],
      [this.placeholder ?? null, "flags.3?string"],
    ];
  }

  constructor(
    params: {
      resize?: true;
      single_use?: true;
      selective?: true;
      rows: Array<TypeKeyboardButtonRow>;
      placeholder?: string;
    },
  ) {
    super();
    this.resize = params.resize;
    this.single_use = params.single_use;
    this.selective = params.selective;
    this.rows = params.rows;
    this.placeholder = params.placeholder;
  }
}

export class InputPeerUser extends TypeInputPeer {
  user_id: bigint;
  access_hash: bigint;

  protected get [id]() {
    return 0xdde8a54c;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.access_hash, "long"],
    ];
  }

  constructor(params: { user_id: bigint; access_hash: bigint }) {
    super();
    this.user_id = params.user_id;
    this.access_hash = params.access_hash;
  }
}

export class MessageEntityUnknown extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0xbb92ba95;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityMention extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0xfa04579d;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityHashtag extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x6f635b0d;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityBotCommand extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x6cef8ac7;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityUrl extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x6ed02538;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityEmail extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x64e475c2;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityBold extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0xbd610bc9;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityItalic extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x826f8b60;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityCode extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x28a20571;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityPre extends TypeMessageEntity {
  offset: number;
  length: number;
  language: string;

  protected get [id]() {
    return 0x73924be0;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
      [this.language, "string"],
    ];
  }

  constructor(params: { offset: number; length: number; language: string }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.language = params.language;
  }
}

export class MessageEntityTextUrl extends TypeMessageEntity {
  offset: number;
  length: number;
  url: string;

  protected get [id]() {
    return 0x76a6d327;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
      [this.url, "string"],
    ];
  }

  constructor(params: { offset: number; length: number; url: string }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.url = params.url;
  }
}

export class UpdateShortSentMessage extends TypeUpdates {
  out?: true;
  id: number;
  pts: number;
  pts_count: number;
  date: number;
  media?: TypeMessageMedia;
  entities?: Array<TypeMessageEntity>;
  ttl_period?: number;

  protected get [id]() {
    return 0x9015e101;
  }

  protected get [params](): Params {
    return [
      [this.out ?? null, "flags.1?true"],
      [this.id, "int"],
      [this.pts, "int"],
      [this.pts_count, "int"],
      [this.date, "int"],
      [this.media ?? null, "flags.9?MessageMedia"],
      [this.entities ?? null, "flags.7?Vector<MessageEntity>"],
      [this.ttl_period ?? null, "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      id: number;
      pts: number;
      pts_count: number;
      date: number;
      media?: TypeMessageMedia;
      entities?: Array<TypeMessageEntity>;
      ttl_period?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.id = params.id;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
    this.date = params.date;
    this.media = params.media;
    this.entities = params.entities;
    this.ttl_period = params.ttl_period;
  }
}

export class InputChannelEmpty extends TypeInputChannel {
  protected get [id]() {
    return 0xee8c1e86;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PeerChannel extends TypePeer {
  channel_id: bigint;

  protected get [id]() {
    return 0xa2a5371e;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
    ];
  }

  constructor(params: { channel_id: bigint }) {
    super();
    this.channel_id = params.channel_id;
  }
}

export class InputPeerChannel extends TypeInputPeer {
  channel_id: bigint;
  access_hash: bigint;

  protected get [id]() {
    return 0x27bcbbfc;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.access_hash, "long"],
    ];
  }

  constructor(params: { channel_id: bigint; access_hash: bigint }) {
    super();
    this.channel_id = params.channel_id;
    this.access_hash = params.access_hash;
  }
}

export class Channel extends TypeChat {
  creator?: true;
  left?: true;
  broadcast?: true;
  verified?: true;
  megagroup?: true;
  restricted?: true;
  signatures?: true;
  min?: true;
  scam?: true;
  has_link?: true;
  has_geo?: true;
  slowmode_enabled?: true;
  call_active?: true;
  call_not_empty?: true;
  fake?: true;
  gigagroup?: true;
  noforwards?: true;
  join_to_send?: true;
  join_request?: true;
  id: bigint;
  access_hash?: bigint;
  title: string;
  username?: string;
  photo: TypeChatPhoto;
  date: number;
  restriction_reason?: Array<TypeRestrictionReason>;
  admin_rights?: TypeChatAdminRights;
  banned_rights?: TypeChatBannedRights;
  default_banned_rights?: TypeChatBannedRights;
  participants_count?: number;

  protected get [id]() {
    return 0x8261ac61;
  }

  protected get [params](): Params {
    return [
      [this.creator ?? null, "flags.0?true"],
      [this.left ?? null, "flags.2?true"],
      [this.broadcast ?? null, "flags.5?true"],
      [this.verified ?? null, "flags.7?true"],
      [this.megagroup ?? null, "flags.8?true"],
      [this.restricted ?? null, "flags.9?true"],
      [this.signatures ?? null, "flags.11?true"],
      [this.min ?? null, "flags.12?true"],
      [this.scam ?? null, "flags.19?true"],
      [this.has_link ?? null, "flags.20?true"],
      [this.has_geo ?? null, "flags.21?true"],
      [this.slowmode_enabled ?? null, "flags.22?true"],
      [this.call_active ?? null, "flags.23?true"],
      [this.call_not_empty ?? null, "flags.24?true"],
      [this.fake ?? null, "flags.25?true"],
      [this.gigagroup ?? null, "flags.26?true"],
      [this.noforwards ?? null, "flags.27?true"],
      [this.join_to_send ?? null, "flags.28?true"],
      [this.join_request ?? null, "flags.29?true"],
      [this.id, "long"],
      [this.access_hash ?? null, "flags.13?long"],
      [this.title, "string"],
      [this.username ?? null, "flags.6?string"],
      [this.photo, "ChatPhoto"],
      [this.date, "int"],
      [this.restriction_reason ?? null, "flags.9?Vector<RestrictionReason>"],
      [this.admin_rights ?? null, "flags.14?ChatAdminRights"],
      [this.banned_rights ?? null, "flags.15?ChatBannedRights"],
      [this.default_banned_rights ?? null, "flags.18?ChatBannedRights"],
      [this.participants_count ?? null, "flags.17?int"],
    ];
  }

  constructor(
    params: {
      creator?: true;
      left?: true;
      broadcast?: true;
      verified?: true;
      megagroup?: true;
      restricted?: true;
      signatures?: true;
      min?: true;
      scam?: true;
      has_link?: true;
      has_geo?: true;
      slowmode_enabled?: true;
      call_active?: true;
      call_not_empty?: true;
      fake?: true;
      gigagroup?: true;
      noforwards?: true;
      join_to_send?: true;
      join_request?: true;
      id: bigint;
      access_hash?: bigint;
      title: string;
      username?: string;
      photo: TypeChatPhoto;
      date: number;
      restriction_reason?: Array<TypeRestrictionReason>;
      admin_rights?: TypeChatAdminRights;
      banned_rights?: TypeChatBannedRights;
      default_banned_rights?: TypeChatBannedRights;
      participants_count?: number;
    },
  ) {
    super();
    this.creator = params.creator;
    this.left = params.left;
    this.broadcast = params.broadcast;
    this.verified = params.verified;
    this.megagroup = params.megagroup;
    this.restricted = params.restricted;
    this.signatures = params.signatures;
    this.min = params.min;
    this.scam = params.scam;
    this.has_link = params.has_link;
    this.has_geo = params.has_geo;
    this.slowmode_enabled = params.slowmode_enabled;
    this.call_active = params.call_active;
    this.call_not_empty = params.call_not_empty;
    this.fake = params.fake;
    this.gigagroup = params.gigagroup;
    this.noforwards = params.noforwards;
    this.join_to_send = params.join_to_send;
    this.join_request = params.join_request;
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.title = params.title;
    this.username = params.username;
    this.photo = params.photo;
    this.date = params.date;
    this.restriction_reason = params.restriction_reason;
    this.admin_rights = params.admin_rights;
    this.banned_rights = params.banned_rights;
    this.default_banned_rights = params.default_banned_rights;
    this.participants_count = params.participants_count;
  }
}

export class ChannelForbidden extends TypeChat {
  broadcast?: true;
  megagroup?: true;
  id: bigint;
  access_hash: bigint;
  title: string;
  until_date?: number;

  protected get [id]() {
    return 0x17d493d5;
  }

  protected get [params](): Params {
    return [
      [this.broadcast ?? null, "flags.5?true"],
      [this.megagroup ?? null, "flags.8?true"],
      [this.id, "long"],
      [this.access_hash, "long"],
      [this.title, "string"],
      [this.until_date ?? null, "flags.16?int"],
    ];
  }

  constructor(
    params: {
      broadcast?: true;
      megagroup?: true;
      id: bigint;
      access_hash: bigint;
      title: string;
      until_date?: number;
    },
  ) {
    super();
    this.broadcast = params.broadcast;
    this.megagroup = params.megagroup;
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.title = params.title;
    this.until_date = params.until_date;
  }
}

export class ChannelFull extends TypeChatFull {
  can_view_participants?: true;
  can_set_username?: true;
  can_set_stickers?: true;
  hidden_prehistory?: true;
  can_set_location?: true;
  has_scheduled?: true;
  can_view_stats?: true;
  blocked?: true;
  can_delete_channel?: true;
  id: bigint;
  about: string;
  participants_count?: number;
  admins_count?: number;
  kicked_count?: number;
  banned_count?: number;
  online_count?: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  chat_photo: TypePhoto;
  notify_settings: TypePeerNotifySettings;
  exported_invite?: TypeExportedChatInvite;
  bot_info: Array<TypeBotInfo>;
  migrated_from_chat_id?: bigint;
  migrated_from_max_id?: number;
  pinned_msg_id?: number;
  stickerset?: TypeStickerSet;
  available_min_id?: number;
  folder_id?: number;
  linked_chat_id?: bigint;
  location?: TypeChannelLocation;
  slowmode_seconds?: number;
  slowmode_next_send_date?: number;
  stats_dc?: number;
  pts: number;
  call?: TypeInputGroupCall;
  ttl_period?: number;
  pending_suggestions?: Array<string>;
  groupcall_default_join_as?: TypePeer;
  theme_emoticon?: string;
  requests_pending?: number;
  recent_requesters?: Array<bigint>;
  default_send_as?: TypePeer;
  available_reactions?: TypeChatReactions;

  protected get [id]() {
    return 0xf2355507;
  }

  protected get [params](): Params {
    return [
      [this.can_view_participants ?? null, "flags.3?true"],
      [this.can_set_username ?? null, "flags.6?true"],
      [this.can_set_stickers ?? null, "flags.7?true"],
      [this.hidden_prehistory ?? null, "flags.10?true"],
      [this.can_set_location ?? null, "flags.16?true"],
      [this.has_scheduled ?? null, "flags.19?true"],
      [this.can_view_stats ?? null, "flags.20?true"],
      [this.blocked ?? null, "flags.22?true"],
      [this.can_delete_channel ?? null, "flags2.0?true"],
      [this.id, "long"],
      [this.about, "string"],
      [this.participants_count ?? null, "flags.0?int"],
      [this.admins_count ?? null, "flags.1?int"],
      [this.kicked_count ?? null, "flags.2?int"],
      [this.banned_count ?? null, "flags.2?int"],
      [this.online_count ?? null, "flags.13?int"],
      [this.read_inbox_max_id, "int"],
      [this.read_outbox_max_id, "int"],
      [this.unread_count, "int"],
      [this.chat_photo, "Photo"],
      [this.notify_settings, "PeerNotifySettings"],
      [this.exported_invite ?? null, "flags.23?ExportedChatInvite"],
      [this.bot_info, "Vector<BotInfo>"],
      [this.migrated_from_chat_id ?? null, "flags.4?long"],
      [this.migrated_from_max_id ?? null, "flags.4?int"],
      [this.pinned_msg_id ?? null, "flags.5?int"],
      [this.stickerset ?? null, "flags.8?StickerSet"],
      [this.available_min_id ?? null, "flags.9?int"],
      [this.folder_id ?? null, "flags.11?int"],
      [this.linked_chat_id ?? null, "flags.14?long"],
      [this.location ?? null, "flags.15?ChannelLocation"],
      [this.slowmode_seconds ?? null, "flags.17?int"],
      [this.slowmode_next_send_date ?? null, "flags.18?int"],
      [this.stats_dc ?? null, "flags.12?int"],
      [this.pts, "int"],
      [this.call ?? null, "flags.21?InputGroupCall"],
      [this.ttl_period ?? null, "flags.24?int"],
      [this.pending_suggestions ?? null, "flags.25?Vector<string>"],
      [this.groupcall_default_join_as ?? null, "flags.26?Peer"],
      [this.theme_emoticon ?? null, "flags.27?string"],
      [this.requests_pending ?? null, "flags.28?int"],
      [this.recent_requesters ?? null, "flags.28?Vector<long>"],
      [this.default_send_as ?? null, "flags.29?Peer"],
      [this.available_reactions ?? null, "flags.30?ChatReactions"],
    ];
  }

  constructor(
    params: {
      can_view_participants?: true;
      can_set_username?: true;
      can_set_stickers?: true;
      hidden_prehistory?: true;
      can_set_location?: true;
      has_scheduled?: true;
      can_view_stats?: true;
      blocked?: true;
      can_delete_channel?: true;
      id: bigint;
      about: string;
      participants_count?: number;
      admins_count?: number;
      kicked_count?: number;
      banned_count?: number;
      online_count?: number;
      read_inbox_max_id: number;
      read_outbox_max_id: number;
      unread_count: number;
      chat_photo: TypePhoto;
      notify_settings: TypePeerNotifySettings;
      exported_invite?: TypeExportedChatInvite;
      bot_info: Array<TypeBotInfo>;
      migrated_from_chat_id?: bigint;
      migrated_from_max_id?: number;
      pinned_msg_id?: number;
      stickerset?: TypeStickerSet;
      available_min_id?: number;
      folder_id?: number;
      linked_chat_id?: bigint;
      location?: TypeChannelLocation;
      slowmode_seconds?: number;
      slowmode_next_send_date?: number;
      stats_dc?: number;
      pts: number;
      call?: TypeInputGroupCall;
      ttl_period?: number;
      pending_suggestions?: Array<string>;
      groupcall_default_join_as?: TypePeer;
      theme_emoticon?: string;
      requests_pending?: number;
      recent_requesters?: Array<bigint>;
      default_send_as?: TypePeer;
      available_reactions?: TypeChatReactions;
    },
  ) {
    super();
    this.can_view_participants = params.can_view_participants;
    this.can_set_username = params.can_set_username;
    this.can_set_stickers = params.can_set_stickers;
    this.hidden_prehistory = params.hidden_prehistory;
    this.can_set_location = params.can_set_location;
    this.has_scheduled = params.has_scheduled;
    this.can_view_stats = params.can_view_stats;
    this.blocked = params.blocked;
    this.can_delete_channel = params.can_delete_channel;
    this.id = params.id;
    this.about = params.about;
    this.participants_count = params.participants_count;
    this.admins_count = params.admins_count;
    this.kicked_count = params.kicked_count;
    this.banned_count = params.banned_count;
    this.online_count = params.online_count;
    this.read_inbox_max_id = params.read_inbox_max_id;
    this.read_outbox_max_id = params.read_outbox_max_id;
    this.unread_count = params.unread_count;
    this.chat_photo = params.chat_photo;
    this.notify_settings = params.notify_settings;
    this.exported_invite = params.exported_invite;
    this.bot_info = params.bot_info;
    this.migrated_from_chat_id = params.migrated_from_chat_id;
    this.migrated_from_max_id = params.migrated_from_max_id;
    this.pinned_msg_id = params.pinned_msg_id;
    this.stickerset = params.stickerset;
    this.available_min_id = params.available_min_id;
    this.folder_id = params.folder_id;
    this.linked_chat_id = params.linked_chat_id;
    this.location = params.location;
    this.slowmode_seconds = params.slowmode_seconds;
    this.slowmode_next_send_date = params.slowmode_next_send_date;
    this.stats_dc = params.stats_dc;
    this.pts = params.pts;
    this.call = params.call;
    this.ttl_period = params.ttl_period;
    this.pending_suggestions = params.pending_suggestions;
    this.groupcall_default_join_as = params.groupcall_default_join_as;
    this.theme_emoticon = params.theme_emoticon;
    this.requests_pending = params.requests_pending;
    this.recent_requesters = params.recent_requesters;
    this.default_send_as = params.default_send_as;
    this.available_reactions = params.available_reactions;
  }
}

export class MessagesChannelMessages extends TypeMessagesMessages {
  inexact?: true;
  pts: number;
  count: number;
  offset_id_offset?: number;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x64479808;
  }

  protected get [params](): Params {
    return [
      [this.inexact ?? null, "flags.1?true"],
      [this.pts, "int"],
      [this.count, "int"],
      [this.offset_id_offset ?? null, "flags.2?int"],
      [this.messages, "Vector<Message>"],
      [this.chats, "Vector<Chat>"],
      [this.users, "Vector<User>"],
    ];
  }

  constructor(
    params: {
      inexact?: true;
      pts: number;
      count: number;
      offset_id_offset?: number;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.inexact = params.inexact;
    this.pts = params.pts;
    this.count = params.count;
    this.offset_id_offset = params.offset_id_offset;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessageActionChannelCreate extends TypeMessageAction {
  title: string;

  protected get [id]() {
    return 0x95d2ac92;
  }

  protected get [params](): Params {
    return [
      [this.title, "string"],
    ];
  }

  constructor(params: { title: string }) {
    super();
    this.title = params.title;
  }
}

export class UpdateChannelTooLong extends TypeUpdate {
  channel_id: bigint;
  pts?: number;

  protected get [id]() {
    return 0x108d941f;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.pts ?? null, "flags.0?int"],
    ];
  }

  constructor(params: { channel_id: bigint; pts?: number }) {
    super();
    this.channel_id = params.channel_id;
    this.pts = params.pts;
  }
}

export class UpdateChannel extends TypeUpdate {
  channel_id: bigint;

  protected get [id]() {
    return 0x635b4c09;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
    ];
  }

  constructor(params: { channel_id: bigint }) {
    super();
    this.channel_id = params.channel_id;
  }
}

export class UpdateNewChannelMessage extends TypeUpdate {
  message: TypeMessage;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x62ba04d9;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: { message: TypeMessage; pts: number; pts_count: number },
  ) {
    super();
    this.message = params.message;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class UpdateReadChannelInbox extends TypeUpdate {
  folder_id?: number;
  channel_id: bigint;
  max_id: number;
  still_unread_count: number;
  pts: number;

  protected get [id]() {
    return 0x922e6e10;
  }

  protected get [params](): Params {
    return [
      [this.folder_id ?? null, "flags.0?int"],
      [this.channel_id, "long"],
      [this.max_id, "int"],
      [this.still_unread_count, "int"],
      [this.pts, "int"],
    ];
  }

  constructor(
    params: {
      folder_id?: number;
      channel_id: bigint;
      max_id: number;
      still_unread_count: number;
      pts: number;
    },
  ) {
    super();
    this.folder_id = params.folder_id;
    this.channel_id = params.channel_id;
    this.max_id = params.max_id;
    this.still_unread_count = params.still_unread_count;
    this.pts = params.pts;
  }
}

export class UpdateDeleteChannelMessages extends TypeUpdate {
  channel_id: bigint;
  messages: Array<number>;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0xc32d5b12;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.messages, "Vector<int>"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: {
      channel_id: bigint;
      messages: Array<number>;
      pts: number;
      pts_count: number;
    },
  ) {
    super();
    this.channel_id = params.channel_id;
    this.messages = params.messages;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class UpdateChannelMessageViews extends TypeUpdate {
  channel_id: bigint;
  id: number;
  views: number;

  protected get [id]() {
    return 0xf226ac08;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.id, "int"],
      [this.views, "int"],
    ];
  }

  constructor(params: { channel_id: bigint; id: number; views: number }) {
    super();
    this.channel_id = params.channel_id;
    this.id = params.id;
    this.views = params.views;
  }
}

export class UpdatesChannelDifferenceEmpty
  extends TypeUpdatesChannelDifference {
  final?: true;
  pts: number;
  timeout?: number;

  protected get [id]() {
    return 0x3e11affb;
  }

  protected get [params](): Params {
    return [
      [this.final ?? null, "flags.0?true"],
      [this.pts, "int"],
      [this.timeout ?? null, "flags.1?int"],
    ];
  }

  constructor(params: { final?: true; pts: number; timeout?: number }) {
    super();
    this.final = params.final;
    this.pts = params.pts;
    this.timeout = params.timeout;
  }
}

export class UpdatesChannelDifferenceTooLong
  extends TypeUpdatesChannelDifference {
  final?: true;
  timeout?: number;
  dialog: TypeDialog;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xa4bcc6fe;
  }

  protected get [params](): Params {
    return [
      [this.final ?? null, "flags.0?true"],
      [this.timeout ?? null, "flags.1?int"],
      [this.dialog, "Dialog"],
      [this.messages, "Vector<Message>"],
      [this.chats, "Vector<Chat>"],
      [this.users, "Vector<User>"],
    ];
  }

  constructor(
    params: {
      final?: true;
      timeout?: number;
      dialog: TypeDialog;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.final = params.final;
    this.timeout = params.timeout;
    this.dialog = params.dialog;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChannelMessagesFilterEmpty extends TypeChannelMessagesFilter {
  protected get [id]() {
    return 0x94d42ee7;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelParticipantSelf extends TypeChannelParticipant {
  via_request?: true;
  user_id: bigint;
  inviter_id: bigint;
  date: number;

  protected get [id]() {
    return 0x35a8bfa7;
  }

  protected get [params](): Params {
    return [
      [this.via_request ?? null, "flags.0?true"],
      [this.user_id, "long"],
      [this.inviter_id, "long"],
      [this.date, "int"],
    ];
  }

  constructor(
    params: {
      via_request?: true;
      user_id: bigint;
      inviter_id: bigint;
      date: number;
    },
  ) {
    super();
    this.via_request = params.via_request;
    this.user_id = params.user_id;
    this.inviter_id = params.inviter_id;
    this.date = params.date;
  }
}

export class ChannelParticipantCreator extends TypeChannelParticipant {
  user_id: bigint;
  admin_rights: TypeChatAdminRights;
  rank?: string;

  protected get [id]() {
    return 0x2fe601d3;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.admin_rights, "ChatAdminRights"],
      [this.rank ?? null, "flags.0?string"],
    ];
  }

  constructor(
    params: {
      user_id: bigint;
      admin_rights: TypeChatAdminRights;
      rank?: string;
    },
  ) {
    super();
    this.user_id = params.user_id;
    this.admin_rights = params.admin_rights;
    this.rank = params.rank;
  }
}

export class ChannelParticipantsRecent extends TypeChannelParticipantsFilter {
  protected get [id]() {
    return 0xde3f3c79;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelParticipantsAdmins extends TypeChannelParticipantsFilter {
  protected get [id]() {
    return 0xb4608969;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelParticipantsKicked extends TypeChannelParticipantsFilter {
  q: string;

  protected get [id]() {
    return 0xa3b54985;
  }

  protected get [params](): Params {
    return [
      [this.q, "string"],
    ];
  }

  constructor(params: { q: string }) {
    super();
    this.q = params.q;
  }
}

export class ChatParticipantCreator extends TypeChatParticipant {
  user_id: bigint;

  protected get [id]() {
    return 0xe46bcee4;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
    ];
  }

  constructor(params: { user_id: bigint }) {
    super();
    this.user_id = params.user_id;
  }
}

export class ChatParticipantAdmin extends TypeChatParticipant {
  user_id: bigint;
  inviter_id: bigint;
  date: number;

  protected get [id]() {
    return 0xa0933f5b;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.inviter_id, "long"],
      [this.date, "int"],
    ];
  }

  constructor(params: { user_id: bigint; inviter_id: bigint; date: number }) {
    super();
    this.user_id = params.user_id;
    this.inviter_id = params.inviter_id;
    this.date = params.date;
  }
}

export class UpdateChatParticipantAdmin extends TypeUpdate {
  chat_id: bigint;
  user_id: bigint;
  is_admin: boolean;
  version: number;

  protected get [id]() {
    return 0xd7ca61a2;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
      [this.user_id, "long"],
      [this.is_admin, "Bool"],
      [this.version, "int"],
    ];
  }

  constructor(
    params: {
      chat_id: bigint;
      user_id: bigint;
      is_admin: boolean;
      version: number;
    },
  ) {
    super();
    this.chat_id = params.chat_id;
    this.user_id = params.user_id;
    this.is_admin = params.is_admin;
    this.version = params.version;
  }
}

export class MessageActionChatMigrateTo extends TypeMessageAction {
  channel_id: bigint;

  protected get [id]() {
    return 0xe1037f92;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
    ];
  }

  constructor(params: { channel_id: bigint }) {
    super();
    this.channel_id = params.channel_id;
  }
}

export class MessageActionChannelMigrateFrom extends TypeMessageAction {
  title: string;
  chat_id: bigint;

  protected get [id]() {
    return 0xea3948e9;
  }

  protected get [params](): Params {
    return [
      [this.title, "string"],
      [this.chat_id, "long"],
    ];
  }

  constructor(params: { title: string; chat_id: bigint }) {
    super();
    this.title = params.title;
    this.chat_id = params.chat_id;
  }
}

export class ChannelParticipantsBots extends TypeChannelParticipantsFilter {
  protected get [id]() {
    return 0xb0d1865b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateNewStickerSet extends TypeUpdate {
  stickerset: TypeMessagesStickerSet;

  protected get [id]() {
    return 0x688a30aa;
  }

  protected get [params](): Params {
    return [
      [this.stickerset, "messages.StickerSet"],
    ];
  }

  constructor(params: { stickerset: TypeMessagesStickerSet }) {
    super();
    this.stickerset = params.stickerset;
  }
}

export class UpdateStickerSetsOrder extends TypeUpdate {
  masks?: true;
  emojis?: true;
  order: Array<bigint>;

  protected get [id]() {
    return 0x0bb2d201;
  }

  protected get [params](): Params {
    return [
      [this.masks ?? null, "flags.0?true"],
      [this.emojis ?? null, "flags.1?true"],
      [this.order, "Vector<long>"],
    ];
  }

  constructor(params: { masks?: true; emojis?: true; order: Array<bigint> }) {
    super();
    this.masks = params.masks;
    this.emojis = params.emojis;
    this.order = params.order;
  }
}

export class UpdateStickerSets extends TypeUpdate {
  masks?: true;
  emojis?: true;

  protected get [id]() {
    return 0x31c24808;
  }

  protected get [params](): Params {
    return [
      [this.masks ?? null, "flags.0?true"],
      [this.emojis ?? null, "flags.1?true"],
    ];
  }

  constructor(params: { masks?: true; emojis?: true }) {
    super();
    this.masks = params.masks;
    this.emojis = params.emojis;
  }
}

export class MessagesSavedGifsNotModified extends TypeMessagesSavedGifs {
  protected get [id]() {
    return 0xe8025ca2;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateSavedGifs extends TypeUpdate {
  protected get [id]() {
    return 0x9375341e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputBotInlineMessageMediaAuto extends TypeInputBotInlineMessage {
  message: string;
  entities?: Array<TypeMessageEntity>;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x3380c786;
  }

  protected get [params](): Params {
    return [
      [this.message, "string"],
      [this.entities ?? null, "flags.1?Vector<MessageEntity>"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      message: string;
      entities?: Array<TypeMessageEntity>;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.message = params.message;
    this.entities = params.entities;
    this.reply_markup = params.reply_markup;
  }
}

export class InputBotInlineMessageText extends TypeInputBotInlineMessage {
  no_webpage?: true;
  message: string;
  entities?: Array<TypeMessageEntity>;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x3dcd7a87;
  }

  protected get [params](): Params {
    return [
      [this.no_webpage ?? null, "flags.0?true"],
      [this.message, "string"],
      [this.entities ?? null, "flags.1?Vector<MessageEntity>"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      no_webpage?: true;
      message: string;
      entities?: Array<TypeMessageEntity>;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.no_webpage = params.no_webpage;
    this.message = params.message;
    this.entities = params.entities;
    this.reply_markup = params.reply_markup;
  }
}

export class BotInlineMessageMediaAuto extends TypeBotInlineMessage {
  message: string;
  entities?: Array<TypeMessageEntity>;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x764cf810;
  }

  protected get [params](): Params {
    return [
      [this.message, "string"],
      [this.entities ?? null, "flags.1?Vector<MessageEntity>"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      message: string;
      entities?: Array<TypeMessageEntity>;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.message = params.message;
    this.entities = params.entities;
    this.reply_markup = params.reply_markup;
  }
}

export class BotInlineMessageText extends TypeBotInlineMessage {
  no_webpage?: true;
  message: string;
  entities?: Array<TypeMessageEntity>;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x8c7f65e2;
  }

  protected get [params](): Params {
    return [
      [this.no_webpage ?? null, "flags.0?true"],
      [this.message, "string"],
      [this.entities ?? null, "flags.1?Vector<MessageEntity>"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      no_webpage?: true;
      message: string;
      entities?: Array<TypeMessageEntity>;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.no_webpage = params.no_webpage;
    this.message = params.message;
    this.entities = params.entities;
    this.reply_markup = params.reply_markup;
  }
}

export class UpdateBotInlineQuery extends TypeUpdate {
  query_id: bigint;
  user_id: bigint;
  query: string;
  geo?: TypeGeoPoint;
  peer_type?: TypeInlineQueryPeerType;
  offset: string;

  protected get [id]() {
    return 0x496f379c;
  }

  protected get [params](): Params {
    return [
      [this.query_id, "long"],
      [this.user_id, "long"],
      [this.query, "string"],
      [this.geo ?? null, "flags.0?GeoPoint"],
      [this.peer_type ?? null, "flags.1?InlineQueryPeerType"],
      [this.offset, "string"],
    ];
  }

  constructor(
    params: {
      query_id: bigint;
      user_id: bigint;
      query: string;
      geo?: TypeGeoPoint;
      peer_type?: TypeInlineQueryPeerType;
      offset: string;
    },
  ) {
    super();
    this.query_id = params.query_id;
    this.user_id = params.user_id;
    this.query = params.query;
    this.geo = params.geo;
    this.peer_type = params.peer_type;
    this.offset = params.offset;
  }
}

export class UpdateBotInlineSend extends TypeUpdate {
  user_id: bigint;
  query: string;
  geo?: TypeGeoPoint;
  id: string;
  msg_id?: TypeInputBotInlineMessageID;

  protected get [id]() {
    return 0x12f12a07;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.query, "string"],
      [this.geo ?? null, "flags.0?GeoPoint"],
      [this.id, "string"],
      [this.msg_id ?? null, "flags.1?InputBotInlineMessageID"],
    ];
  }

  constructor(
    params: {
      user_id: bigint;
      query: string;
      geo?: TypeGeoPoint;
      id: string;
      msg_id?: TypeInputBotInlineMessageID;
    },
  ) {
    super();
    this.user_id = params.user_id;
    this.query = params.query;
    this.geo = params.geo;
    this.id = params.id;
    this.msg_id = params.msg_id;
  }
}

export class InputMessagesFilterVoice extends TypeMessagesFilter {
  protected get [id]() {
    return 0x50f5c392;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterMusic extends TypeMessagesFilter {
  protected get [id]() {
    return 0x3751b49e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyKeyChatInvite extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xbdfb0426;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyChatInvite extends TypePrivacyKey {
  protected get [id]() {
    return 0x500e6dfa;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateEditChannelMessage extends TypeUpdate {
  message: TypeMessage;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x1b3f4df7;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: { message: TypeMessage; pts: number; pts_count: number },
  ) {
    super();
    this.message = params.message;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class MessageActionPinMessage extends TypeMessageAction {
  protected get [id]() {
    return 0x94bd38ed;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AuthCodeTypeSms extends TypeAuthCodeType {
  protected get [id]() {
    return 0x72a3158c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AuthCodeTypeCall extends TypeAuthCodeType {
  protected get [id]() {
    return 0x741cd3e3;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AuthCodeTypeFlashCall extends TypeAuthCodeType {
  protected get [id]() {
    return 0x226ccefb;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AuthSentCodeTypeApp extends TypeAuthSentCodeType {
  length: number;

  protected get [id]() {
    return 0x3dbb5986;
  }

  protected get [params](): Params {
    return [
      [this.length, "int"],
    ];
  }

  constructor(params: { length: number }) {
    super();
    this.length = params.length;
  }
}

export class AuthSentCodeTypeSms extends TypeAuthSentCodeType {
  length: number;

  protected get [id]() {
    return 0xc000bba2;
  }

  protected get [params](): Params {
    return [
      [this.length, "int"],
    ];
  }

  constructor(params: { length: number }) {
    super();
    this.length = params.length;
  }
}

export class AuthSentCodeTypeCall extends TypeAuthSentCodeType {
  length: number;

  protected get [id]() {
    return 0x5353e5a7;
  }

  protected get [params](): Params {
    return [
      [this.length, "int"],
    ];
  }

  constructor(params: { length: number }) {
    super();
    this.length = params.length;
  }
}

export class AuthSentCodeTypeFlashCall extends TypeAuthSentCodeType {
  pattern: string;

  protected get [id]() {
    return 0xab03c6d9;
  }

  protected get [params](): Params {
    return [
      [this.pattern, "string"],
    ];
  }

  constructor(params: { pattern: string }) {
    super();
    this.pattern = params.pattern;
  }
}

export class KeyboardButtonUrl extends TypeKeyboardButton {
  text: string;
  url: string;

  protected get [id]() {
    return 0x258aff05;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
      [this.url, "string"],
    ];
  }

  constructor(params: { text: string; url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class KeyboardButtonCallback extends TypeKeyboardButton {
  requires_password?: true;
  text: string;
  data: Uint8Array;

  protected get [id]() {
    return 0x35bbdb6b;
  }

  protected get [params](): Params {
    return [
      [this.requires_password ?? null, "flags.0?true"],
      [this.text, "string"],
      [this.data, "bytes"],
    ];
  }

  constructor(
    params: { requires_password?: true; text: string; data: Uint8Array },
  ) {
    super();
    this.requires_password = params.requires_password;
    this.text = params.text;
    this.data = params.data;
  }
}

export class KeyboardButtonRequestPhone extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0xb16a6c29;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class KeyboardButtonRequestGeoLocation extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0xfc796b3f;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class KeyboardButtonSwitchInline extends TypeKeyboardButton {
  same_peer?: true;
  text: string;
  query: string;

  protected get [id]() {
    return 0x0568a748;
  }

  protected get [params](): Params {
    return [
      [this.same_peer ?? null, "flags.0?true"],
      [this.text, "string"],
      [this.query, "string"],
    ];
  }

  constructor(params: { same_peer?: true; text: string; query: string }) {
    super();
    this.same_peer = params.same_peer;
    this.text = params.text;
    this.query = params.query;
  }
}

export class ReplyInlineMarkup extends TypeReplyMarkup {
  rows: Array<TypeKeyboardButtonRow>;

  protected get [id]() {
    return 0x48a30254;
  }

  protected get [params](): Params {
    return [
      [this.rows, "Vector<KeyboardButtonRow>"],
    ];
  }

  constructor(params: { rows: Array<TypeKeyboardButtonRow> }) {
    super();
    this.rows = params.rows;
  }
}

export class UpdateBotCallbackQuery extends TypeUpdate {
  query_id: bigint;
  user_id: bigint;
  peer: TypePeer;
  msg_id: number;
  chat_instance: bigint;
  data?: Uint8Array;
  game_short_name?: string;

  protected get [id]() {
    return 0xb9cfc48d;
  }

  protected get [params](): Params {
    return [
      [this.query_id, "long"],
      [this.user_id, "long"],
      [this.peer, "Peer"],
      [this.msg_id, "int"],
      [this.chat_instance, "long"],
      [this.data ?? null, "flags.0?bytes"],
      [this.game_short_name ?? null, "flags.1?string"],
    ];
  }

  constructor(
    params: {
      query_id: bigint;
      user_id: bigint;
      peer: TypePeer;
      msg_id: number;
      chat_instance: bigint;
      data?: Uint8Array;
      game_short_name?: string;
    },
  ) {
    super();
    this.query_id = params.query_id;
    this.user_id = params.user_id;
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.chat_instance = params.chat_instance;
    this.data = params.data;
    this.game_short_name = params.game_short_name;
  }
}

export class UpdateEditMessage extends TypeUpdate {
  message: TypeMessage;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0xe40370a3;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: { message: TypeMessage; pts: number; pts_count: number },
  ) {
    super();
    this.message = params.message;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class InputBotInlineMessageMediaGeo extends TypeInputBotInlineMessage {
  geo_point: TypeInputGeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x96929a85;
  }

  protected get [params](): Params {
    return [
      [this.geo_point, "InputGeoPoint"],
      [this.heading ?? null, "flags.0?int"],
      [this.period ?? null, "flags.1?int"],
      [this.proximity_notification_radius ?? null, "flags.3?int"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      geo_point: TypeInputGeoPoint;
      heading?: number;
      period?: number;
      proximity_notification_radius?: number;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.geo_point = params.geo_point;
    this.heading = params.heading;
    this.period = params.period;
    this.proximity_notification_radius = params.proximity_notification_radius;
    this.reply_markup = params.reply_markup;
  }
}

export class InputBotInlineMessageMediaVenue extends TypeInputBotInlineMessage {
  geo_point: TypeInputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x417bbf11;
  }

  protected get [params](): Params {
    return [
      [this.geo_point, "InputGeoPoint"],
      [this.title, "string"],
      [this.address, "string"],
      [this.provider, "string"],
      [this.venue_id, "string"],
      [this.venue_type, "string"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      geo_point: TypeInputGeoPoint;
      title: string;
      address: string;
      provider: string;
      venue_id: string;
      venue_type: string;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.geo_point = params.geo_point;
    this.title = params.title;
    this.address = params.address;
    this.provider = params.provider;
    this.venue_id = params.venue_id;
    this.venue_type = params.venue_type;
    this.reply_markup = params.reply_markup;
  }
}

export class InputBotInlineMessageMediaContact
  extends TypeInputBotInlineMessage {
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0xa6edbffd;
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string"],
      [this.first_name, "string"],
      [this.last_name, "string"],
      [this.vcard, "string"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      phone_number: string;
      first_name: string;
      last_name: string;
      vcard: string;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.phone_number = params.phone_number;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.vcard = params.vcard;
    this.reply_markup = params.reply_markup;
  }
}

export class BotInlineMessageMediaGeo extends TypeBotInlineMessage {
  geo: TypeGeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x051846fd;
  }

  protected get [params](): Params {
    return [
      [this.geo, "GeoPoint"],
      [this.heading ?? null, "flags.0?int"],
      [this.period ?? null, "flags.1?int"],
      [this.proximity_notification_radius ?? null, "flags.3?int"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      heading?: number;
      period?: number;
      proximity_notification_radius?: number;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.geo = params.geo;
    this.heading = params.heading;
    this.period = params.period;
    this.proximity_notification_radius = params.proximity_notification_radius;
    this.reply_markup = params.reply_markup;
  }
}

export class BotInlineMessageMediaVenue extends TypeBotInlineMessage {
  geo: TypeGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x8a86659c;
  }

  protected get [params](): Params {
    return [
      [this.geo, "GeoPoint"],
      [this.title, "string"],
      [this.address, "string"],
      [this.provider, "string"],
      [this.venue_id, "string"],
      [this.venue_type, "string"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      title: string;
      address: string;
      provider: string;
      venue_id: string;
      venue_type: string;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.geo = params.geo;
    this.title = params.title;
    this.address = params.address;
    this.provider = params.provider;
    this.venue_id = params.venue_id;
    this.venue_type = params.venue_type;
    this.reply_markup = params.reply_markup;
  }
}

export class BotInlineMessageMediaContact extends TypeBotInlineMessage {
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x18d1cdc2;
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string"],
      [this.first_name, "string"],
      [this.last_name, "string"],
      [this.vcard, "string"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      phone_number: string;
      first_name: string;
      last_name: string;
      vcard: string;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.phone_number = params.phone_number;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.vcard = params.vcard;
    this.reply_markup = params.reply_markup;
  }
}

export class InputBotInlineResultPhoto extends TypeInputBotInlineResult {
  id: string;
  type: string;
  photo: TypeInputPhoto;
  send_message: TypeInputBotInlineMessage;

  protected get [id]() {
    return 0xa8d864a7;
  }

  protected get [params](): Params {
    return [
      [this.id, "string"],
      [this.type, "string"],
      [this.photo, "InputPhoto"],
      [this.send_message, "InputBotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      type: string;
      photo: TypeInputPhoto;
      send_message: TypeInputBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.photo = params.photo;
    this.send_message = params.send_message;
  }
}

export class InputBotInlineResultDocument extends TypeInputBotInlineResult {
  id: string;
  type: string;
  title?: string;
  description?: string;
  document: TypeInputDocument;
  send_message: TypeInputBotInlineMessage;

  protected get [id]() {
    return 0xfff8fdc4;
  }

  protected get [params](): Params {
    return [
      [this.id, "string"],
      [this.type, "string"],
      [this.title ?? null, "flags.1?string"],
      [this.description ?? null, "flags.2?string"],
      [this.document, "InputDocument"],
      [this.send_message, "InputBotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      type: string;
      title?: string;
      description?: string;
      document: TypeInputDocument;
      send_message: TypeInputBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.title = params.title;
    this.description = params.description;
    this.document = params.document;
    this.send_message = params.send_message;
  }
}

export class BotInlineMediaResult extends TypeBotInlineResult {
  id: string;
  type: string;
  photo?: TypePhoto;
  document?: TypeDocument;
  title?: string;
  description?: string;
  send_message: TypeBotInlineMessage;

  protected get [id]() {
    return 0x17db940b;
  }

  protected get [params](): Params {
    return [
      [this.id, "string"],
      [this.type, "string"],
      [this.photo ?? null, "flags.0?Photo"],
      [this.document ?? null, "flags.1?Document"],
      [this.title ?? null, "flags.2?string"],
      [this.description ?? null, "flags.3?string"],
      [this.send_message, "BotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      type: string;
      photo?: TypePhoto;
      document?: TypeDocument;
      title?: string;
      description?: string;
      send_message: TypeBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.photo = params.photo;
    this.document = params.document;
    this.title = params.title;
    this.description = params.description;
    this.send_message = params.send_message;
  }
}

export class UpdateInlineBotCallbackQuery extends TypeUpdate {
  query_id: bigint;
  user_id: bigint;
  msg_id: TypeInputBotInlineMessageID;
  chat_instance: bigint;
  data?: Uint8Array;
  game_short_name?: string;

  protected get [id]() {
    return 0x691e9052;
  }

  protected get [params](): Params {
    return [
      [this.query_id, "long"],
      [this.user_id, "long"],
      [this.msg_id, "InputBotInlineMessageID"],
      [this.chat_instance, "long"],
      [this.data ?? null, "flags.0?bytes"],
      [this.game_short_name ?? null, "flags.1?string"],
    ];
  }

  constructor(
    params: {
      query_id: bigint;
      user_id: bigint;
      msg_id: TypeInputBotInlineMessageID;
      chat_instance: bigint;
      data?: Uint8Array;
      game_short_name?: string;
    },
  ) {
    super();
    this.query_id = params.query_id;
    this.user_id = params.user_id;
    this.msg_id = params.msg_id;
    this.chat_instance = params.chat_instance;
    this.data = params.data;
    this.game_short_name = params.game_short_name;
  }
}

export class TopPeerCategoryBotsPM extends TypeTopPeerCategory {
  protected get [id]() {
    return 0xab661b5b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TopPeerCategoryBotsInline extends TypeTopPeerCategory {
  protected get [id]() {
    return 0x148677e2;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TopPeerCategoryCorrespondents extends TypeTopPeerCategory {
  protected get [id]() {
    return 0x0637b7ed;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TopPeerCategoryGroups extends TypeTopPeerCategory {
  protected get [id]() {
    return 0xbd17a14a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TopPeerCategoryChannels extends TypeTopPeerCategory {
  protected get [id]() {
    return 0x161d9628;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ContactsTopPeersNotModified extends TypeContactsTopPeers {
  protected get [id]() {
    return 0xde266ef5;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageEntityMentionName extends TypeMessageEntity {
  offset: number;
  length: number;
  user_id: bigint;

  protected get [id]() {
    return 0xdc7b1140;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
      [this.user_id, "long"],
    ];
  }

  constructor(params: { offset: number; length: number; user_id: bigint }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.user_id = params.user_id;
  }
}

export class InputMessageEntityMentionName extends TypeMessageEntity {
  offset: number;
  length: number;
  user_id: TypeInputUser;

  protected get [id]() {
    return 0x208e68c9;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
      [this.user_id, "InputUser"],
    ];
  }

  constructor(
    params: { offset: number; length: number; user_id: TypeInputUser },
  ) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.user_id = params.user_id;
  }
}

export class InputMessagesFilterChatPhotos extends TypeMessagesFilter {
  protected get [id]() {
    return 0x3a20ecb8;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateReadChannelOutbox extends TypeUpdate {
  channel_id: bigint;
  max_id: number;

  protected get [id]() {
    return 0xb75f99a9;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.max_id, "int"],
    ];
  }

  constructor(params: { channel_id: bigint; max_id: number }) {
    super();
    this.channel_id = params.channel_id;
    this.max_id = params.max_id;
  }
}

export class UpdateDraftMessage extends TypeUpdate {
  peer: TypePeer;
  draft: TypeDraftMessage;

  protected get [id]() {
    return 0xee2bb969;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.draft, "DraftMessage"],
    ];
  }

  constructor(params: { peer: TypePeer; draft: TypeDraftMessage }) {
    super();
    this.peer = params.peer;
    this.draft = params.draft;
  }
}

export class DraftMessageEmpty extends TypeDraftMessage {
  date?: number;

  protected get [id]() {
    return 0x1b0c841a;
  }

  protected get [params](): Params {
    return [
      [this.date ?? null, "flags.0?int"],
    ];
  }

  constructor(params: { date?: number }) {
    super();
    this.date = params.date;
  }
}

export class MessageActionHistoryClear extends TypeMessageAction {
  protected get [id]() {
    return 0x9fbab604;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesFeaturedStickersNotModified
  extends TypeMessagesFeaturedStickers {
  count: number;

  protected get [id]() {
    return 0xc6dc0c66;
  }

  protected get [params](): Params {
    return [
      [this.count, "int"],
    ];
  }

  constructor(params: { count: number }) {
    super();
    this.count = params.count;
  }
}

export class UpdateReadFeaturedStickers extends TypeUpdate {
  protected get [id]() {
    return 0x571d2742;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesRecentStickersNotModified
  extends TypeMessagesRecentStickers {
  protected get [id]() {
    return 0x0b17f890;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateRecentStickers extends TypeUpdate {
  protected get [id]() {
    return 0x9a422c20;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesStickerSetInstallResultSuccess
  extends TypeMessagesStickerSetInstallResult {
  protected get [id]() {
    return 0x38641628;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesStickerSetInstallResultArchive
  extends TypeMessagesStickerSetInstallResult {
  sets: Array<TypeStickerSetCovered>;

  protected get [id]() {
    return 0x35e410a8;
  }

  protected get [params](): Params {
    return [
      [this.sets, "Vector<StickerSetCovered>"],
    ];
  }

  constructor(params: { sets: Array<TypeStickerSetCovered> }) {
    super();
    this.sets = params.sets;
  }
}

export class UpdateConfig extends TypeUpdate {
  protected get [id]() {
    return 0xa229dd06;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdatePtsChanged extends TypeUpdate {
  protected get [id]() {
    return 0x3354678f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMediaPhotoExternal extends TypeInputMedia {
  url: string;
  ttl_seconds?: number;

  protected get [id]() {
    return 0xe5bbfe1a;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
      [this.ttl_seconds ?? null, "flags.0?int"],
    ];
  }

  constructor(params: { url: string; ttl_seconds?: number }) {
    super();
    this.url = params.url;
    this.ttl_seconds = params.ttl_seconds;
  }
}

export class InputMediaDocumentExternal extends TypeInputMedia {
  url: string;
  ttl_seconds?: number;

  protected get [id]() {
    return 0xfb52dc99;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
      [this.ttl_seconds ?? null, "flags.0?int"],
    ];
  }

  constructor(params: { url: string; ttl_seconds?: number }) {
    super();
    this.url = params.url;
    this.ttl_seconds = params.ttl_seconds;
  }
}

export class StickerSetMultiCovered extends TypeStickerSetCovered {
  set: TypeStickerSet;
  covers: Array<TypeDocument>;

  protected get [id]() {
    return 0x3407e51b;
  }

  protected get [params](): Params {
    return [
      [this.set, "StickerSet"],
      [this.covers, "Vector<Document>"],
    ];
  }

  constructor(params: { set: TypeStickerSet; covers: Array<TypeDocument> }) {
    super();
    this.set = params.set;
    this.covers = params.covers;
  }
}

export class DocumentAttributeHasStickers extends TypeDocumentAttribute {
  protected get [id]() {
    return 0x9801d2f7;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputStickeredMediaPhoto extends TypeInputStickeredMedia {
  id: TypeInputPhoto;

  protected get [id]() {
    return 0x4a992157;
  }

  protected get [params](): Params {
    return [
      [this.id, "InputPhoto"],
    ];
  }

  constructor(params: { id: TypeInputPhoto }) {
    super();
    this.id = params.id;
  }
}

export class InputStickeredMediaDocument extends TypeInputStickeredMedia {
  id: TypeInputDocument;

  protected get [id]() {
    return 0x0438865b;
  }

  protected get [params](): Params {
    return [
      [this.id, "InputDocument"],
    ];
  }

  constructor(params: { id: TypeInputDocument }) {
    super();
    this.id = params.id;
  }
}

export class InputBotInlineResultGame extends TypeInputBotInlineResult {
  id: string;
  short_name: string;
  send_message: TypeInputBotInlineMessage;

  protected get [id]() {
    return 0x4fa417f2;
  }

  protected get [params](): Params {
    return [
      [this.id, "string"],
      [this.short_name, "string"],
      [this.send_message, "InputBotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      short_name: string;
      send_message: TypeInputBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.short_name = params.short_name;
    this.send_message = params.send_message;
  }
}

export class InputBotInlineMessageGame extends TypeInputBotInlineMessage {
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x4b425864;
  }

  protected get [params](): Params {
    return [
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(params: { reply_markup?: TypeReplyMarkup }) {
    super();
    this.reply_markup = params.reply_markup;
  }
}

export class MessageMediaGame extends TypeMessageMedia {
  game: TypeGame;

  protected get [id]() {
    return 0xfdb19008;
  }

  protected get [params](): Params {
    return [
      [this.game, "Game"],
    ];
  }

  constructor(params: { game: TypeGame }) {
    super();
    this.game = params.game;
  }
}

export class InputMediaGame extends TypeInputMedia {
  id: TypeInputGame;

  protected get [id]() {
    return 0xd33f43f3;
  }

  protected get [params](): Params {
    return [
      [this.id, "InputGame"],
    ];
  }

  constructor(params: { id: TypeInputGame }) {
    super();
    this.id = params.id;
  }
}

export class InputGameID extends TypeInputGame {
  id: bigint;
  access_hash: bigint;

  protected get [id]() {
    return 0x032c3e77;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.access_hash, "long"],
    ];
  }

  constructor(params: { id: bigint; access_hash: bigint }) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
  }
}

export class InputGameShortName extends TypeInputGame {
  bot_id: TypeInputUser;
  short_name: string;

  protected get [id]() {
    return 0xc331e80a;
  }

  protected get [params](): Params {
    return [
      [this.bot_id, "InputUser"],
      [this.short_name, "string"],
    ];
  }

  constructor(params: { bot_id: TypeInputUser; short_name: string }) {
    super();
    this.bot_id = params.bot_id;
    this.short_name = params.short_name;
  }
}

export class KeyboardButtonGame extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0x50f41ccf;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class MessageActionGameScore extends TypeMessageAction {
  game_id: bigint;
  score: number;

  protected get [id]() {
    return 0x92a72876;
  }

  protected get [params](): Params {
    return [
      [this.game_id, "long"],
      [this.score, "int"],
    ];
  }

  constructor(params: { game_id: bigint; score: number }) {
    super();
    this.game_id = params.game_id;
    this.score = params.score;
  }
}

export class UpdatesDifferenceTooLong extends TypeUpdatesDifference {
  pts: number;

  protected get [id]() {
    return 0x4afe8f6d;
  }

  protected get [params](): Params {
    return [
      [this.pts, "int"],
    ];
  }

  constructor(params: { pts: number }) {
    super();
    this.pts = params.pts;
  }
}

export class UpdateChannelWebPage extends TypeUpdate {
  channel_id: bigint;
  webpage: TypeWebPage;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x2f2ba99f;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.webpage, "WebPage"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: {
      channel_id: bigint;
      webpage: TypeWebPage;
      pts: number;
      pts_count: number;
    },
  ) {
    super();
    this.channel_id = params.channel_id;
    this.webpage = params.webpage;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class MessagesChatsSlice extends TypeMessagesChats {
  count: number;
  chats: Array<TypeChat>;

  protected get [id]() {
    return 0x9cd81144;
  }

  protected get [params](): Params {
    return [
      [this.count, "int"],
      [this.chats, "Vector<Chat>"],
    ];
  }

  constructor(params: { count: number; chats: Array<TypeChat> }) {
    super();
    this.count = params.count;
    this.chats = params.chats;
  }
}

export class TextEmpty extends TypeRichText {
  protected get [id]() {
    return 0xdc3d824f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TextPlain extends TypeRichText {
  text: string;

  protected get [id]() {
    return 0x744694e0;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class TextBold extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0x6724abc4;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class TextItalic extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0xd912a59c;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class TextUnderline extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0xc12622c4;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class TextStrike extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0x9bf8bb95;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class TextFixed extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0x6c3f19b9;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class TextUrl extends TypeRichText {
  text: TypeRichText;
  url: string;
  webpage_id: bigint;

  protected get [id]() {
    return 0x3c2884c1;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
      [this.url, "string"],
      [this.webpage_id, "long"],
    ];
  }

  constructor(params: { text: TypeRichText; url: string; webpage_id: bigint }) {
    super();
    this.text = params.text;
    this.url = params.url;
    this.webpage_id = params.webpage_id;
  }
}

export class TextEmail extends TypeRichText {
  text: TypeRichText;
  email: string;

  protected get [id]() {
    return 0xde5a0dd6;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
      [this.email, "string"],
    ];
  }

  constructor(params: { text: TypeRichText; email: string }) {
    super();
    this.text = params.text;
    this.email = params.email;
  }
}

export class TextConcat extends TypeRichText {
  texts: Array<TypeRichText>;

  protected get [id]() {
    return 0x7e6260d7;
  }

  protected get [params](): Params {
    return [
      [this.texts, "Vector<RichText>"],
    ];
  }

  constructor(params: { texts: Array<TypeRichText> }) {
    super();
    this.texts = params.texts;
  }
}

export class PageBlockUnsupported extends TypePageBlock {
  protected get [id]() {
    return 0x13567e8a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PageBlockTitle extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0x70abc3fd;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockSubtitle extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0x8ffa9a1f;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockAuthorDate extends TypePageBlock {
  author: TypeRichText;
  published_date: number;

  protected get [id]() {
    return 0xbaafe5e0;
  }

  protected get [params](): Params {
    return [
      [this.author, "RichText"],
      [this.published_date, "int"],
    ];
  }

  constructor(params: { author: TypeRichText; published_date: number }) {
    super();
    this.author = params.author;
    this.published_date = params.published_date;
  }
}

export class PageBlockHeader extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0xbfd064ec;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockSubheader extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0xf12bb6e1;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockParagraph extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0x467a0766;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockPreformatted extends TypePageBlock {
  text: TypeRichText;
  language: string;

  protected get [id]() {
    return 0xc070d93e;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
      [this.language, "string"],
    ];
  }

  constructor(params: { text: TypeRichText; language: string }) {
    super();
    this.text = params.text;
    this.language = params.language;
  }
}

export class PageBlockFooter extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0x48870999;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockDivider extends TypePageBlock {
  protected get [id]() {
    return 0xdb20b188;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PageBlockAnchor extends TypePageBlock {
  name: string;

  protected get [id]() {
    return 0xce0d37b0;
  }

  protected get [params](): Params {
    return [
      [this.name, "string"],
    ];
  }

  constructor(params: { name: string }) {
    super();
    this.name = params.name;
  }
}

export class PageBlockList extends TypePageBlock {
  items: Array<TypePageListItem>;

  protected get [id]() {
    return 0xe4e88011;
  }

  protected get [params](): Params {
    return [
      [this.items, "Vector<PageListItem>"],
    ];
  }

  constructor(params: { items: Array<TypePageListItem> }) {
    super();
    this.items = params.items;
  }
}

export class PageBlockBlockquote extends TypePageBlock {
  text: TypeRichText;
  caption: TypeRichText;

  protected get [id]() {
    return 0x263d7c26;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
      [this.caption, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText; caption: TypeRichText }) {
    super();
    this.text = params.text;
    this.caption = params.caption;
  }
}

export class PageBlockPullquote extends TypePageBlock {
  text: TypeRichText;
  caption: TypeRichText;

  protected get [id]() {
    return 0x4f4456d3;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
      [this.caption, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText; caption: TypeRichText }) {
    super();
    this.text = params.text;
    this.caption = params.caption;
  }
}

export class PageBlockPhoto extends TypePageBlock {
  photo_id: bigint;
  caption: TypePageCaption;
  url?: string;
  webpage_id?: bigint;

  protected get [id]() {
    return 0x1759c560;
  }

  protected get [params](): Params {
    return [
      [this.photo_id, "long"],
      [this.caption, "PageCaption"],
      [this.url ?? null, "flags.0?string"],
      [this.webpage_id ?? null, "flags.0?long"],
    ];
  }

  constructor(
    params: {
      photo_id: bigint;
      caption: TypePageCaption;
      url?: string;
      webpage_id?: bigint;
    },
  ) {
    super();
    this.photo_id = params.photo_id;
    this.caption = params.caption;
    this.url = params.url;
    this.webpage_id = params.webpage_id;
  }
}

export class PageBlockVideo extends TypePageBlock {
  autoplay?: true;
  loop?: true;
  video_id: bigint;
  caption: TypePageCaption;

  protected get [id]() {
    return 0x7c8fe7b6;
  }

  protected get [params](): Params {
    return [
      [this.autoplay ?? null, "flags.0?true"],
      [this.loop ?? null, "flags.1?true"],
      [this.video_id, "long"],
      [this.caption, "PageCaption"],
    ];
  }

  constructor(
    params: {
      autoplay?: true;
      loop?: true;
      video_id: bigint;
      caption: TypePageCaption;
    },
  ) {
    super();
    this.autoplay = params.autoplay;
    this.loop = params.loop;
    this.video_id = params.video_id;
    this.caption = params.caption;
  }
}

export class PageBlockCover extends TypePageBlock {
  cover: TypePageBlock;

  protected get [id]() {
    return 0x39f23300;
  }

  protected get [params](): Params {
    return [
      [this.cover, "PageBlock"],
    ];
  }

  constructor(params: { cover: TypePageBlock }) {
    super();
    this.cover = params.cover;
  }
}

export class PageBlockEmbed extends TypePageBlock {
  full_width?: true;
  allow_scrolling?: true;
  url?: string;
  html?: string;
  poster_photo_id?: bigint;
  w?: number;
  h?: number;
  caption: TypePageCaption;

  protected get [id]() {
    return 0xa8718dc5;
  }

  protected get [params](): Params {
    return [
      [this.full_width ?? null, "flags.0?true"],
      [this.allow_scrolling ?? null, "flags.3?true"],
      [this.url ?? null, "flags.1?string"],
      [this.html ?? null, "flags.2?string"],
      [this.poster_photo_id ?? null, "flags.4?long"],
      [this.w ?? null, "flags.5?int"],
      [this.h ?? null, "flags.5?int"],
      [this.caption, "PageCaption"],
    ];
  }

  constructor(
    params: {
      full_width?: true;
      allow_scrolling?: true;
      url?: string;
      html?: string;
      poster_photo_id?: bigint;
      w?: number;
      h?: number;
      caption: TypePageCaption;
    },
  ) {
    super();
    this.full_width = params.full_width;
    this.allow_scrolling = params.allow_scrolling;
    this.url = params.url;
    this.html = params.html;
    this.poster_photo_id = params.poster_photo_id;
    this.w = params.w;
    this.h = params.h;
    this.caption = params.caption;
  }
}

export class PageBlockEmbedPost extends TypePageBlock {
  url: string;
  webpage_id: bigint;
  author_photo_id: bigint;
  author: string;
  date: number;
  blocks: Array<TypePageBlock>;
  caption: TypePageCaption;

  protected get [id]() {
    return 0xf259a80b;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
      [this.webpage_id, "long"],
      [this.author_photo_id, "long"],
      [this.author, "string"],
      [this.date, "int"],
      [this.blocks, "Vector<PageBlock>"],
      [this.caption, "PageCaption"],
    ];
  }

  constructor(
    params: {
      url: string;
      webpage_id: bigint;
      author_photo_id: bigint;
      author: string;
      date: number;
      blocks: Array<TypePageBlock>;
      caption: TypePageCaption;
    },
  ) {
    super();
    this.url = params.url;
    this.webpage_id = params.webpage_id;
    this.author_photo_id = params.author_photo_id;
    this.author = params.author;
    this.date = params.date;
    this.blocks = params.blocks;
    this.caption = params.caption;
  }
}

export class PageBlockCollage extends TypePageBlock {
  items: Array<TypePageBlock>;
  caption: TypePageCaption;

  protected get [id]() {
    return 0x65a0fa4d;
  }

  protected get [params](): Params {
    return [
      [this.items, "Vector<PageBlock>"],
      [this.caption, "PageCaption"],
    ];
  }

  constructor(
    params: { items: Array<TypePageBlock>; caption: TypePageCaption },
  ) {
    super();
    this.items = params.items;
    this.caption = params.caption;
  }
}

export class PageBlockSlideshow extends TypePageBlock {
  items: Array<TypePageBlock>;
  caption: TypePageCaption;

  protected get [id]() {
    return 0x031f9590;
  }

  protected get [params](): Params {
    return [
      [this.items, "Vector<PageBlock>"],
      [this.caption, "PageCaption"],
    ];
  }

  constructor(
    params: { items: Array<TypePageBlock>; caption: TypePageCaption },
  ) {
    super();
    this.items = params.items;
    this.caption = params.caption;
  }
}

export class WebPageNotModified extends TypeWebPage {
  cached_page_views?: number;

  protected get [id]() {
    return 0x7311ca11;
  }

  protected get [params](): Params {
    return [
      [this.cached_page_views ?? null, "flags.0?int"],
    ];
  }

  constructor(params: { cached_page_views?: number }) {
    super();
    this.cached_page_views = params.cached_page_views;
  }
}

export class InputPrivacyKeyPhoneCall extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xfabadc5f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyPhoneCall extends TypePrivacyKey {
  protected get [id]() {
    return 0x3d662b7b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageGamePlayAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0xdd6a8f48;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PhoneCallDiscardReasonMissed extends TypePhoneCallDiscardReason {
  protected get [id]() {
    return 0x85e42301;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PhoneCallDiscardReasonDisconnect
  extends TypePhoneCallDiscardReason {
  protected get [id]() {
    return 0xe095c1a0;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PhoneCallDiscardReasonHangup extends TypePhoneCallDiscardReason {
  protected get [id]() {
    return 0x57adc690;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PhoneCallDiscardReasonBusy extends TypePhoneCallDiscardReason {
  protected get [id]() {
    return 0xfaf7e8c9;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateDialogPinned extends TypeUpdate {
  pinned?: true;
  folder_id?: number;
  peer: TypeDialogPeer;

  protected get [id]() {
    return 0x6e6fe51c;
  }

  protected get [params](): Params {
    return [
      [this.pinned ?? null, "flags.0?true"],
      [this.folder_id ?? null, "flags.1?int"],
      [this.peer, "DialogPeer"],
    ];
  }

  constructor(
    params: { pinned?: true; folder_id?: number; peer: TypeDialogPeer },
  ) {
    super();
    this.pinned = params.pinned;
    this.folder_id = params.folder_id;
    this.peer = params.peer;
  }
}

export class UpdatePinnedDialogs extends TypeUpdate {
  folder_id?: number;
  order?: Array<TypeDialogPeer>;

  protected get [id]() {
    return 0xfa0f3ca2;
  }

  protected get [params](): Params {
    return [
      [this.folder_id ?? null, "flags.1?int"],
      [this.order ?? null, "flags.0?Vector<DialogPeer>"],
    ];
  }

  constructor(params: { folder_id?: number; order?: Array<TypeDialogPeer> }) {
    super();
    this.folder_id = params.folder_id;
    this.order = params.order;
  }
}

export class UpdateBotWebhookJSON extends TypeUpdate {
  data: TypeDataJSON;

  protected get [id]() {
    return 0x8317c0c3;
  }

  protected get [params](): Params {
    return [
      [this.data, "DataJSON"],
    ];
  }

  constructor(params: { data: TypeDataJSON }) {
    super();
    this.data = params.data;
  }
}

export class UpdateBotWebhookJSONQuery extends TypeUpdate {
  query_id: bigint;
  data: TypeDataJSON;
  timeout: number;

  protected get [id]() {
    return 0x9b9240a6;
  }

  protected get [params](): Params {
    return [
      [this.query_id, "long"],
      [this.data, "DataJSON"],
      [this.timeout, "int"],
    ];
  }

  constructor(
    params: { query_id: bigint; data: TypeDataJSON; timeout: number },
  ) {
    super();
    this.query_id = params.query_id;
    this.data = params.data;
    this.timeout = params.timeout;
  }
}

export class InputMediaInvoice extends TypeInputMedia {
  title: string;
  description: string;
  photo?: TypeInputWebDocument;
  invoice: TypeInvoice;
  payload: Uint8Array;
  provider: string;
  provider_data: TypeDataJSON;
  start_param?: string;

  protected get [id]() {
    return 0xd9799874;
  }

  protected get [params](): Params {
    return [
      [this.title, "string"],
      [this.description, "string"],
      [this.photo ?? null, "flags.0?InputWebDocument"],
      [this.invoice, "Invoice"],
      [this.payload, "bytes"],
      [this.provider, "string"],
      [this.provider_data, "DataJSON"],
      [this.start_param ?? null, "flags.1?string"],
    ];
  }

  constructor(
    params: {
      title: string;
      description: string;
      photo?: TypeInputWebDocument;
      invoice: TypeInvoice;
      payload: Uint8Array;
      provider: string;
      provider_data: TypeDataJSON;
      start_param?: string;
    },
  ) {
    super();
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.invoice = params.invoice;
    this.payload = params.payload;
    this.provider = params.provider;
    this.provider_data = params.provider_data;
    this.start_param = params.start_param;
  }
}

export class MessageActionPaymentSentMe extends TypeMessageAction {
  recurring_init?: true;
  recurring_used?: true;
  currency: string;
  total_amount: bigint;
  payload: Uint8Array;
  info?: TypePaymentRequestedInfo;
  shipping_option_id?: string;
  charge: TypePaymentCharge;

  protected get [id]() {
    return 0x8f31b327;
  }

  protected get [params](): Params {
    return [
      [this.recurring_init ?? null, "flags.2?true"],
      [this.recurring_used ?? null, "flags.3?true"],
      [this.currency, "string"],
      [this.total_amount, "long"],
      [this.payload, "bytes"],
      [this.info ?? null, "flags.0?PaymentRequestedInfo"],
      [this.shipping_option_id ?? null, "flags.1?string"],
      [this.charge, "PaymentCharge"],
    ];
  }

  constructor(
    params: {
      recurring_init?: true;
      recurring_used?: true;
      currency: string;
      total_amount: bigint;
      payload: Uint8Array;
      info?: TypePaymentRequestedInfo;
      shipping_option_id?: string;
      charge: TypePaymentCharge;
    },
  ) {
    super();
    this.recurring_init = params.recurring_init;
    this.recurring_used = params.recurring_used;
    this.currency = params.currency;
    this.total_amount = params.total_amount;
    this.payload = params.payload;
    this.info = params.info;
    this.shipping_option_id = params.shipping_option_id;
    this.charge = params.charge;
  }
}

export class MessageMediaInvoice extends TypeMessageMedia {
  shipping_address_requested?: true;
  test?: true;
  title: string;
  description: string;
  photo?: TypeWebDocument;
  receipt_msg_id?: number;
  currency: string;
  total_amount: bigint;
  start_param: string;

  protected get [id]() {
    return 0x84551347;
  }

  protected get [params](): Params {
    return [
      [this.shipping_address_requested ?? null, "flags.1?true"],
      [this.test ?? null, "flags.3?true"],
      [this.title, "string"],
      [this.description, "string"],
      [this.photo ?? null, "flags.0?WebDocument"],
      [this.receipt_msg_id ?? null, "flags.2?int"],
      [this.currency, "string"],
      [this.total_amount, "long"],
      [this.start_param, "string"],
    ];
  }

  constructor(
    params: {
      shipping_address_requested?: true;
      test?: true;
      title: string;
      description: string;
      photo?: TypeWebDocument;
      receipt_msg_id?: number;
      currency: string;
      total_amount: bigint;
      start_param: string;
    },
  ) {
    super();
    this.shipping_address_requested = params.shipping_address_requested;
    this.test = params.test;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.receipt_msg_id = params.receipt_msg_id;
    this.currency = params.currency;
    this.total_amount = params.total_amount;
    this.start_param = params.start_param;
  }
}

export class KeyboardButtonBuy extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0xafd93fbb;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class MessageActionPaymentSent extends TypeMessageAction {
  recurring_init?: true;
  recurring_used?: true;
  currency: string;
  total_amount: bigint;
  invoice_slug?: string;

  protected get [id]() {
    return 0x96163f56;
  }

  protected get [params](): Params {
    return [
      [this.recurring_init ?? null, "flags.2?true"],
      [this.recurring_used ?? null, "flags.3?true"],
      [this.currency, "string"],
      [this.total_amount, "long"],
      [this.invoice_slug ?? null, "flags.0?string"],
    ];
  }

  constructor(
    params: {
      recurring_init?: true;
      recurring_used?: true;
      currency: string;
      total_amount: bigint;
      invoice_slug?: string;
    },
  ) {
    super();
    this.recurring_init = params.recurring_init;
    this.recurring_used = params.recurring_used;
    this.currency = params.currency;
    this.total_amount = params.total_amount;
    this.invoice_slug = params.invoice_slug;
  }
}

export class PaymentSavedCredentialsCard extends TypePaymentSavedCredentials {
  id: string;
  title: string;

  protected get [id]() {
    return 0xcdc27a1f;
  }

  protected get [params](): Params {
    return [
      [this.id, "string"],
      [this.title, "string"],
    ];
  }

  constructor(params: { id: string; title: string }) {
    super();
    this.id = params.id;
    this.title = params.title;
  }
}

export class InputPaymentCredentialsSaved extends TypeInputPaymentCredentials {
  id: string;
  tmp_password: Uint8Array;

  protected get [id]() {
    return 0xc10eb2cf;
  }

  protected get [params](): Params {
    return [
      [this.id, "string"],
      [this.tmp_password, "bytes"],
    ];
  }

  constructor(params: { id: string; tmp_password: Uint8Array }) {
    super();
    this.id = params.id;
    this.tmp_password = params.tmp_password;
  }
}

export class UpdateBotShippingQuery extends TypeUpdate {
  query_id: bigint;
  user_id: bigint;
  payload: Uint8Array;
  shipping_address: TypePostAddress;

  protected get [id]() {
    return 0xb5aefd7d;
  }

  protected get [params](): Params {
    return [
      [this.query_id, "long"],
      [this.user_id, "long"],
      [this.payload, "bytes"],
      [this.shipping_address, "PostAddress"],
    ];
  }

  constructor(
    params: {
      query_id: bigint;
      user_id: bigint;
      payload: Uint8Array;
      shipping_address: TypePostAddress;
    },
  ) {
    super();
    this.query_id = params.query_id;
    this.user_id = params.user_id;
    this.payload = params.payload;
    this.shipping_address = params.shipping_address;
  }
}

export class UpdateBotPrecheckoutQuery extends TypeUpdate {
  query_id: bigint;
  user_id: bigint;
  payload: Uint8Array;
  info?: TypePaymentRequestedInfo;
  shipping_option_id?: string;
  currency: string;
  total_amount: bigint;

  protected get [id]() {
    return 0x8caa9a96;
  }

  protected get [params](): Params {
    return [
      [this.query_id, "long"],
      [this.user_id, "long"],
      [this.payload, "bytes"],
      [this.info ?? null, "flags.0?PaymentRequestedInfo"],
      [this.shipping_option_id ?? null, "flags.1?string"],
      [this.currency, "string"],
      [this.total_amount, "long"],
    ];
  }

  constructor(
    params: {
      query_id: bigint;
      user_id: bigint;
      payload: Uint8Array;
      info?: TypePaymentRequestedInfo;
      shipping_option_id?: string;
      currency: string;
      total_amount: bigint;
    },
  ) {
    super();
    this.query_id = params.query_id;
    this.user_id = params.user_id;
    this.payload = params.payload;
    this.info = params.info;
    this.shipping_option_id = params.shipping_option_id;
    this.currency = params.currency;
    this.total_amount = params.total_amount;
  }
}

export class UpdatePhoneCall extends TypeUpdate {
  phone_call: TypePhoneCall;

  protected get [id]() {
    return 0xab0f6b1e;
  }

  protected get [params](): Params {
    return [
      [this.phone_call, "PhoneCall"],
    ];
  }

  constructor(params: { phone_call: TypePhoneCall }) {
    super();
    this.phone_call = params.phone_call;
  }
}

export class PhoneCallEmpty extends TypePhoneCall {
  id: bigint;

  protected get [id]() {
    return 0x5366c915;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class PhoneCallWaiting extends TypePhoneCall {
  video?: true;
  id: bigint;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  protocol: TypePhoneCallProtocol;
  receive_date?: number;

  protected get [id]() {
    return 0xc5226f17;
  }

  protected get [params](): Params {
    return [
      [this.video ?? null, "flags.6?true"],
      [this.id, "long"],
      [this.access_hash, "long"],
      [this.date, "int"],
      [this.admin_id, "long"],
      [this.participant_id, "long"],
      [this.protocol, "PhoneCallProtocol"],
      [this.receive_date ?? null, "flags.0?int"],
    ];
  }

  constructor(
    params: {
      video?: true;
      id: bigint;
      access_hash: bigint;
      date: number;
      admin_id: bigint;
      participant_id: bigint;
      protocol: TypePhoneCallProtocol;
      receive_date?: number;
    },
  ) {
    super();
    this.video = params.video;
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.date = params.date;
    this.admin_id = params.admin_id;
    this.participant_id = params.participant_id;
    this.protocol = params.protocol;
    this.receive_date = params.receive_date;
  }
}

export class PhoneCallRequested extends TypePhoneCall {
  video?: true;
  id: bigint;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  g_a_hash: Uint8Array;
  protocol: TypePhoneCallProtocol;

  protected get [id]() {
    return 0x14b0ed0c;
  }

  protected get [params](): Params {
    return [
      [this.video ?? null, "flags.6?true"],
      [this.id, "long"],
      [this.access_hash, "long"],
      [this.date, "int"],
      [this.admin_id, "long"],
      [this.participant_id, "long"],
      [this.g_a_hash, "bytes"],
      [this.protocol, "PhoneCallProtocol"],
    ];
  }

  constructor(
    params: {
      video?: true;
      id: bigint;
      access_hash: bigint;
      date: number;
      admin_id: bigint;
      participant_id: bigint;
      g_a_hash: Uint8Array;
      protocol: TypePhoneCallProtocol;
    },
  ) {
    super();
    this.video = params.video;
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.date = params.date;
    this.admin_id = params.admin_id;
    this.participant_id = params.participant_id;
    this.g_a_hash = params.g_a_hash;
    this.protocol = params.protocol;
  }
}

export class PhoneCallAccepted extends TypePhoneCall {
  video?: true;
  id: bigint;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  g_b: Uint8Array;
  protocol: TypePhoneCallProtocol;

  protected get [id]() {
    return 0x3660c311;
  }

  protected get [params](): Params {
    return [
      [this.video ?? null, "flags.6?true"],
      [this.id, "long"],
      [this.access_hash, "long"],
      [this.date, "int"],
      [this.admin_id, "long"],
      [this.participant_id, "long"],
      [this.g_b, "bytes"],
      [this.protocol, "PhoneCallProtocol"],
    ];
  }

  constructor(
    params: {
      video?: true;
      id: bigint;
      access_hash: bigint;
      date: number;
      admin_id: bigint;
      participant_id: bigint;
      g_b: Uint8Array;
      protocol: TypePhoneCallProtocol;
    },
  ) {
    super();
    this.video = params.video;
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.date = params.date;
    this.admin_id = params.admin_id;
    this.participant_id = params.participant_id;
    this.g_b = params.g_b;
    this.protocol = params.protocol;
  }
}

export class PhoneCallDiscarded extends TypePhoneCall {
  need_rating?: true;
  need_debug?: true;
  video?: true;
  id: bigint;
  reason?: TypePhoneCallDiscardReason;
  duration?: number;

  protected get [id]() {
    return 0x50ca4de1;
  }

  protected get [params](): Params {
    return [
      [this.need_rating ?? null, "flags.2?true"],
      [this.need_debug ?? null, "flags.3?true"],
      [this.video ?? null, "flags.6?true"],
      [this.id, "long"],
      [this.reason ?? null, "flags.0?PhoneCallDiscardReason"],
      [this.duration ?? null, "flags.1?int"],
    ];
  }

  constructor(
    params: {
      need_rating?: true;
      need_debug?: true;
      video?: true;
      id: bigint;
      reason?: TypePhoneCallDiscardReason;
      duration?: number;
    },
  ) {
    super();
    this.need_rating = params.need_rating;
    this.need_debug = params.need_debug;
    this.video = params.video;
    this.id = params.id;
    this.reason = params.reason;
    this.duration = params.duration;
  }
}

export class InputMessagesFilterPhoneCalls extends TypeMessagesFilter {
  missed?: true;

  protected get [id]() {
    return 0x80c99768;
  }

  protected get [params](): Params {
    return [
      [this.missed ?? null, "flags.0?true"],
    ];
  }

  constructor(params: { missed?: true }) {
    super();
    this.missed = params.missed;
  }
}

export class MessageActionPhoneCall extends TypeMessageAction {
  video?: true;
  call_id: bigint;
  reason?: TypePhoneCallDiscardReason;
  duration?: number;

  protected get [id]() {
    return 0x80e11a7f;
  }

  protected get [params](): Params {
    return [
      [this.video ?? null, "flags.2?true"],
      [this.call_id, "long"],
      [this.reason ?? null, "flags.0?PhoneCallDiscardReason"],
      [this.duration ?? null, "flags.1?int"],
    ];
  }

  constructor(
    params: {
      video?: true;
      call_id: bigint;
      reason?: TypePhoneCallDiscardReason;
      duration?: number;
    },
  ) {
    super();
    this.video = params.video;
    this.call_id = params.call_id;
    this.reason = params.reason;
    this.duration = params.duration;
  }
}

export class InputMessagesFilterRoundVoice extends TypeMessagesFilter {
  protected get [id]() {
    return 0x7a7c17a4;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterRoundVideo extends TypeMessagesFilter {
  protected get [id]() {
    return 0xb549da53;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageRecordRoundAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0x88f27fbc;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageUploadRoundAction extends TypeSendMessageAction {
  progress: number;

  protected get [id]() {
    return 0x243e1c66;
  }

  protected get [params](): Params {
    return [
      [this.progress, "int"],
    ];
  }

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class UploadFileCdnRedirect extends TypeUploadFile {
  dc_id: number;
  file_token: Uint8Array;
  encryption_key: Uint8Array;
  encryption_iv: Uint8Array;
  file_hashes: Array<TypeFileHash>;

  protected get [id]() {
    return 0xf18cda44;
  }

  protected get [params](): Params {
    return [
      [this.dc_id, "int"],
      [this.file_token, "bytes"],
      [this.encryption_key, "bytes"],
      [this.encryption_iv, "bytes"],
      [this.file_hashes, "Vector<FileHash>"],
    ];
  }

  constructor(
    params: {
      dc_id: number;
      file_token: Uint8Array;
      encryption_key: Uint8Array;
      encryption_iv: Uint8Array;
      file_hashes: Array<TypeFileHash>;
    },
  ) {
    super();
    this.dc_id = params.dc_id;
    this.file_token = params.file_token;
    this.encryption_key = params.encryption_key;
    this.encryption_iv = params.encryption_iv;
    this.file_hashes = params.file_hashes;
  }
}

export class UploadCdnFileReuploadNeeded extends TypeUploadCdnFile {
  request_token: Uint8Array;

  protected get [id]() {
    return 0xeea8e46e;
  }

  protected get [params](): Params {
    return [
      [this.request_token, "bytes"],
    ];
  }

  constructor(params: { request_token: Uint8Array }) {
    super();
    this.request_token = params.request_token;
  }
}

export class PageBlockChannel extends TypePageBlock {
  channel: TypeChat;

  protected get [id]() {
    return 0xef1751b5;
  }

  protected get [params](): Params {
    return [
      [this.channel, "Chat"],
    ];
  }

  constructor(params: { channel: TypeChat }) {
    super();
    this.channel = params.channel;
  }
}

export class LangPackStringPluralized extends TypeLangPackString {
  key: string;
  zero_value?: string;
  one_value?: string;
  two_value?: string;
  few_value?: string;
  many_value?: string;
  other_value: string;

  protected get [id]() {
    return 0x6c47ac9f;
  }

  protected get [params](): Params {
    return [
      [this.key, "string"],
      [this.zero_value ?? null, "flags.0?string"],
      [this.one_value ?? null, "flags.1?string"],
      [this.two_value ?? null, "flags.2?string"],
      [this.few_value ?? null, "flags.3?string"],
      [this.many_value ?? null, "flags.4?string"],
      [this.other_value, "string"],
    ];
  }

  constructor(
    params: {
      key: string;
      zero_value?: string;
      one_value?: string;
      two_value?: string;
      few_value?: string;
      many_value?: string;
      other_value: string;
    },
  ) {
    super();
    this.key = params.key;
    this.zero_value = params.zero_value;
    this.one_value = params.one_value;
    this.two_value = params.two_value;
    this.few_value = params.few_value;
    this.many_value = params.many_value;
    this.other_value = params.other_value;
  }
}

export class LangPackStringDeleted extends TypeLangPackString {
  key: string;

  protected get [id]() {
    return 0x2979eeb2;
  }

  protected get [params](): Params {
    return [
      [this.key, "string"],
    ];
  }

  constructor(params: { key: string }) {
    super();
    this.key = params.key;
  }
}

export class UpdateLangPackTooLong extends TypeUpdate {
  lang_code: string;

  protected get [id]() {
    return 0x46560264;
  }

  protected get [params](): Params {
    return [
      [this.lang_code, "string"],
    ];
  }

  constructor(params: { lang_code: string }) {
    super();
    this.lang_code = params.lang_code;
  }
}

export class UpdateLangPack extends TypeUpdate {
  difference: TypeLangPackDifference;

  protected get [id]() {
    return 0x56022f4d;
  }

  protected get [params](): Params {
    return [
      [this.difference, "LangPackDifference"],
    ];
  }

  constructor(params: { difference: TypeLangPackDifference }) {
    super();
    this.difference = params.difference;
  }
}

export class ChannelParticipantAdmin extends TypeChannelParticipant {
  can_edit?: true;
  self?: true;
  user_id: bigint;
  inviter_id?: bigint;
  promoted_by: bigint;
  date: number;
  admin_rights: TypeChatAdminRights;
  rank?: string;

  protected get [id]() {
    return 0x34c3bb53;
  }

  protected get [params](): Params {
    return [
      [this.can_edit ?? null, "flags.0?true"],
      [this.self ?? null, "flags.1?true"],
      [this.user_id, "long"],
      [this.inviter_id ?? null, "flags.1?long"],
      [this.promoted_by, "long"],
      [this.date, "int"],
      [this.admin_rights, "ChatAdminRights"],
      [this.rank ?? null, "flags.2?string"],
    ];
  }

  constructor(
    params: {
      can_edit?: true;
      self?: true;
      user_id: bigint;
      inviter_id?: bigint;
      promoted_by: bigint;
      date: number;
      admin_rights: TypeChatAdminRights;
      rank?: string;
    },
  ) {
    super();
    this.can_edit = params.can_edit;
    this.self = params.self;
    this.user_id = params.user_id;
    this.inviter_id = params.inviter_id;
    this.promoted_by = params.promoted_by;
    this.date = params.date;
    this.admin_rights = params.admin_rights;
    this.rank = params.rank;
  }
}

export class ChannelParticipantBanned extends TypeChannelParticipant {
  left?: true;
  peer: TypePeer;
  kicked_by: bigint;
  date: number;
  banned_rights: TypeChatBannedRights;

  protected get [id]() {
    return 0x6df8014e;
  }

  protected get [params](): Params {
    return [
      [this.left ?? null, "flags.0?true"],
      [this.peer, "Peer"],
      [this.kicked_by, "long"],
      [this.date, "int"],
      [this.banned_rights, "ChatBannedRights"],
    ];
  }

  constructor(
    params: {
      left?: true;
      peer: TypePeer;
      kicked_by: bigint;
      date: number;
      banned_rights: TypeChatBannedRights;
    },
  ) {
    super();
    this.left = params.left;
    this.peer = params.peer;
    this.kicked_by = params.kicked_by;
    this.date = params.date;
    this.banned_rights = params.banned_rights;
  }
}

export class ChannelParticipantsBanned extends TypeChannelParticipantsFilter {
  q: string;

  protected get [id]() {
    return 0x1427a5e1;
  }

  protected get [params](): Params {
    return [
      [this.q, "string"],
    ];
  }

  constructor(params: { q: string }) {
    super();
    this.q = params.q;
  }
}

export class ChannelParticipantsSearch extends TypeChannelParticipantsFilter {
  q: string;

  protected get [id]() {
    return 0x0656ac4b;
  }

  protected get [params](): Params {
    return [
      [this.q, "string"],
    ];
  }

  constructor(params: { q: string }) {
    super();
    this.q = params.q;
  }
}

export class ChannelAdminLogEventActionChangeTitle
  extends TypeChannelAdminLogEventAction {
  prev_value: string;
  new_value: string;

  protected get [id]() {
    return 0xe6dfb825;
  }

  protected get [params](): Params {
    return [
      [this.prev_value, "string"],
      [this.new_value, "string"],
    ];
  }

  constructor(params: { prev_value: string; new_value: string }) {
    super();
    this.prev_value = params.prev_value;
    this.new_value = params.new_value;
  }
}

export class ChannelAdminLogEventActionChangeAbout
  extends TypeChannelAdminLogEventAction {
  prev_value: string;
  new_value: string;

  protected get [id]() {
    return 0x55188a2e;
  }

  protected get [params](): Params {
    return [
      [this.prev_value, "string"],
      [this.new_value, "string"],
    ];
  }

  constructor(params: { prev_value: string; new_value: string }) {
    super();
    this.prev_value = params.prev_value;
    this.new_value = params.new_value;
  }
}

export class ChannelAdminLogEventActionChangeUsername
  extends TypeChannelAdminLogEventAction {
  prev_value: string;
  new_value: string;

  protected get [id]() {
    return 0x6a4afc38;
  }

  protected get [params](): Params {
    return [
      [this.prev_value, "string"],
      [this.new_value, "string"],
    ];
  }

  constructor(params: { prev_value: string; new_value: string }) {
    super();
    this.prev_value = params.prev_value;
    this.new_value = params.new_value;
  }
}

export class ChannelAdminLogEventActionChangePhoto
  extends TypeChannelAdminLogEventAction {
  prev_photo: TypePhoto;
  new_photo: TypePhoto;

  protected get [id]() {
    return 0x434bd2af;
  }

  protected get [params](): Params {
    return [
      [this.prev_photo, "Photo"],
      [this.new_photo, "Photo"],
    ];
  }

  constructor(params: { prev_photo: TypePhoto; new_photo: TypePhoto }) {
    super();
    this.prev_photo = params.prev_photo;
    this.new_photo = params.new_photo;
  }
}

export class ChannelAdminLogEventActionToggleInvites
  extends TypeChannelAdminLogEventAction {
  new_value: boolean;

  protected get [id]() {
    return 0x1b7907ae;
  }

  protected get [params](): Params {
    return [
      [this.new_value, "Bool"],
    ];
  }

  constructor(params: { new_value: boolean }) {
    super();
    this.new_value = params.new_value;
  }
}

export class ChannelAdminLogEventActionToggleSignatures
  extends TypeChannelAdminLogEventAction {
  new_value: boolean;

  protected get [id]() {
    return 0x26ae0971;
  }

  protected get [params](): Params {
    return [
      [this.new_value, "Bool"],
    ];
  }

  constructor(params: { new_value: boolean }) {
    super();
    this.new_value = params.new_value;
  }
}

export class ChannelAdminLogEventActionUpdatePinned
  extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0xe9e82c18;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
    ];
  }

  constructor(params: { message: TypeMessage }) {
    super();
    this.message = params.message;
  }
}

export class ChannelAdminLogEventActionEditMessage
  extends TypeChannelAdminLogEventAction {
  prev_message: TypeMessage;
  new_message: TypeMessage;

  protected get [id]() {
    return 0x709b2405;
  }

  protected get [params](): Params {
    return [
      [this.prev_message, "Message"],
      [this.new_message, "Message"],
    ];
  }

  constructor(params: { prev_message: TypeMessage; new_message: TypeMessage }) {
    super();
    this.prev_message = params.prev_message;
    this.new_message = params.new_message;
  }
}

export class ChannelAdminLogEventActionDeleteMessage
  extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x42e047bb;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
    ];
  }

  constructor(params: { message: TypeMessage }) {
    super();
    this.message = params.message;
  }
}

export class ChannelAdminLogEventActionParticipantJoin
  extends TypeChannelAdminLogEventAction {
  protected get [id]() {
    return 0x183040d3;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelAdminLogEventActionParticipantLeave
  extends TypeChannelAdminLogEventAction {
  protected get [id]() {
    return 0xf89777f2;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelAdminLogEventActionParticipantInvite
  extends TypeChannelAdminLogEventAction {
  participant: TypeChannelParticipant;

  protected get [id]() {
    return 0xe31c34d8;
  }

  protected get [params](): Params {
    return [
      [this.participant, "ChannelParticipant"],
    ];
  }

  constructor(params: { participant: TypeChannelParticipant }) {
    super();
    this.participant = params.participant;
  }
}

export class ChannelAdminLogEventActionParticipantToggleBan
  extends TypeChannelAdminLogEventAction {
  prev_participant: TypeChannelParticipant;
  new_participant: TypeChannelParticipant;

  protected get [id]() {
    return 0xe6d83d7e;
  }

  protected get [params](): Params {
    return [
      [this.prev_participant, "ChannelParticipant"],
      [this.new_participant, "ChannelParticipant"],
    ];
  }

  constructor(
    params: {
      prev_participant: TypeChannelParticipant;
      new_participant: TypeChannelParticipant;
    },
  ) {
    super();
    this.prev_participant = params.prev_participant;
    this.new_participant = params.new_participant;
  }
}

export class ChannelAdminLogEventActionParticipantToggleAdmin
  extends TypeChannelAdminLogEventAction {
  prev_participant: TypeChannelParticipant;
  new_participant: TypeChannelParticipant;

  protected get [id]() {
    return 0xd5676710;
  }

  protected get [params](): Params {
    return [
      [this.prev_participant, "ChannelParticipant"],
      [this.new_participant, "ChannelParticipant"],
    ];
  }

  constructor(
    params: {
      prev_participant: TypeChannelParticipant;
      new_participant: TypeChannelParticipant;
    },
  ) {
    super();
    this.prev_participant = params.prev_participant;
    this.new_participant = params.new_participant;
  }
}

export class TopPeerCategoryPhoneCalls extends TypeTopPeerCategory {
  protected get [id]() {
    return 0x1e76a78c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PageBlockAudio extends TypePageBlock {
  audio_id: bigint;
  caption: TypePageCaption;

  protected get [id]() {
    return 0x804361ea;
  }

  protected get [params](): Params {
    return [
      [this.audio_id, "long"],
      [this.caption, "PageCaption"],
    ];
  }

  constructor(params: { audio_id: bigint; caption: TypePageCaption }) {
    super();
    this.audio_id = params.audio_id;
    this.caption = params.caption;
  }
}

export class MessageActionScreenshotTaken extends TypeMessageAction {
  protected get [id]() {
    return 0x4792929b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesFavedStickersNotModified
  extends TypeMessagesFavedStickers {
  protected get [id]() {
    return 0x9e8fa6d3;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateFavedStickers extends TypeUpdate {
  protected get [id]() {
    return 0xe511996d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateChannelReadMessagesContents extends TypeUpdate {
  channel_id: bigint;
  messages: Array<number>;

  protected get [id]() {
    return 0x44bdd535;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.messages, "Vector<int>"],
    ];
  }

  constructor(params: { channel_id: bigint; messages: Array<number> }) {
    super();
    this.channel_id = params.channel_id;
    this.messages = params.messages;
  }
}

export class InputMessagesFilterMyMentions extends TypeMessagesFilter {
  protected get [id]() {
    return 0xc1f8e69a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateContactsReset extends TypeUpdate {
  protected get [id]() {
    return 0x7084a7be;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelAdminLogEventActionChangeStickerSet
  extends TypeChannelAdminLogEventAction {
  prev_stickerset: TypeInputStickerSet;
  new_stickerset: TypeInputStickerSet;

  protected get [id]() {
    return 0xb1c3caa7;
  }

  protected get [params](): Params {
    return [
      [this.prev_stickerset, "InputStickerSet"],
      [this.new_stickerset, "InputStickerSet"],
    ];
  }

  constructor(
    params: {
      prev_stickerset: TypeInputStickerSet;
      new_stickerset: TypeInputStickerSet;
    },
  ) {
    super();
    this.prev_stickerset = params.prev_stickerset;
    this.new_stickerset = params.new_stickerset;
  }
}

export class MessageActionCustomAction extends TypeMessageAction {
  message: string;

  protected get [id]() {
    return 0xfae69f56;
  }

  protected get [params](): Params {
    return [
      [this.message, "string"],
    ];
  }

  constructor(params: { message: string }) {
    super();
    this.message = params.message;
  }
}

export class InputPaymentCredentialsApplePay
  extends TypeInputPaymentCredentials {
  payment_data: TypeDataJSON;

  protected get [id]() {
    return 0x0aa1c39f;
  }

  protected get [params](): Params {
    return [
      [this.payment_data, "DataJSON"],
    ];
  }

  constructor(params: { payment_data: TypeDataJSON }) {
    super();
    this.payment_data = params.payment_data;
  }
}

export class InputMessagesFilterGeo extends TypeMessagesFilter {
  protected get [id]() {
    return 0xe7026d0d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterContacts extends TypeMessagesFilter {
  protected get [id]() {
    return 0xe062db83;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateChannelAvailableMessages extends TypeUpdate {
  channel_id: bigint;
  available_min_id: number;

  protected get [id]() {
    return 0xb23fc698;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.available_min_id, "int"],
    ];
  }

  constructor(params: { channel_id: bigint; available_min_id: number }) {
    super();
    this.channel_id = params.channel_id;
    this.available_min_id = params.available_min_id;
  }
}

export class ChannelAdminLogEventActionTogglePreHistoryHidden
  extends TypeChannelAdminLogEventAction {
  new_value: boolean;

  protected get [id]() {
    return 0x5f5c95f1;
  }

  protected get [params](): Params {
    return [
      [this.new_value, "Bool"],
    ];
  }

  constructor(params: { new_value: boolean }) {
    super();
    this.new_value = params.new_value;
  }
}

export class InputMediaGeoLive extends TypeInputMedia {
  stopped?: true;
  geo_point: TypeInputGeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;

  protected get [id]() {
    return 0x971fa843;
  }

  protected get [params](): Params {
    return [
      [this.stopped ?? null, "flags.0?true"],
      [this.geo_point, "InputGeoPoint"],
      [this.heading ?? null, "flags.2?int"],
      [this.period ?? null, "flags.1?int"],
      [this.proximity_notification_radius ?? null, "flags.3?int"],
    ];
  }

  constructor(
    params: {
      stopped?: true;
      geo_point: TypeInputGeoPoint;
      heading?: number;
      period?: number;
      proximity_notification_radius?: number;
    },
  ) {
    super();
    this.stopped = params.stopped;
    this.geo_point = params.geo_point;
    this.heading = params.heading;
    this.period = params.period;
    this.proximity_notification_radius = params.proximity_notification_radius;
  }
}

export class MessageMediaGeoLive extends TypeMessageMedia {
  geo: TypeGeoPoint;
  heading?: number;
  period: number;
  proximity_notification_radius?: number;

  protected get [id]() {
    return 0xb940c666;
  }

  protected get [params](): Params {
    return [
      [this.geo, "GeoPoint"],
      [this.heading ?? null, "flags.0?int"],
      [this.period, "int"],
      [this.proximity_notification_radius ?? null, "flags.1?int"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      heading?: number;
      period: number;
      proximity_notification_radius?: number;
    },
  ) {
    super();
    this.geo = params.geo;
    this.heading = params.heading;
    this.period = params.period;
    this.proximity_notification_radius = params.proximity_notification_radius;
  }
}

export class RecentMeUrlUnknown extends TypeRecentMeUrl {
  url: string;

  protected get [id]() {
    return 0x46e1d13d;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class RecentMeUrlUser extends TypeRecentMeUrl {
  url: string;
  user_id: bigint;

  protected get [id]() {
    return 0xb92c09e2;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
      [this.user_id, "long"],
    ];
  }

  constructor(params: { url: string; user_id: bigint }) {
    super();
    this.url = params.url;
    this.user_id = params.user_id;
  }
}

export class RecentMeUrlChat extends TypeRecentMeUrl {
  url: string;
  chat_id: bigint;

  protected get [id]() {
    return 0xb2da71d2;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
      [this.chat_id, "long"],
    ];
  }

  constructor(params: { url: string; chat_id: bigint }) {
    super();
    this.url = params.url;
    this.chat_id = params.chat_id;
  }
}

export class RecentMeUrlChatInvite extends TypeRecentMeUrl {
  url: string;
  chat_invite: TypeChatInvite;

  protected get [id]() {
    return 0xeb49081d;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
      [this.chat_invite, "ChatInvite"],
    ];
  }

  constructor(params: { url: string; chat_invite: TypeChatInvite }) {
    super();
    this.url = params.url;
    this.chat_invite = params.chat_invite;
  }
}

export class RecentMeUrlStickerSet extends TypeRecentMeUrl {
  url: string;
  set: TypeStickerSetCovered;

  protected get [id]() {
    return 0xbc0a57dc;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
      [this.set, "StickerSetCovered"],
    ];
  }

  constructor(params: { url: string; set: TypeStickerSetCovered }) {
    super();
    this.url = params.url;
    this.set = params.set;
  }
}

export class ChannelsChannelParticipantsNotModified
  extends TypeChannelsChannelParticipants {
  protected get [id]() {
    return 0xf0173fe9;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesMessagesNotModified extends TypeMessagesMessages {
  count: number;

  protected get [id]() {
    return 0x74535f21;
  }

  protected get [params](): Params {
    return [
      [this.count, "int"],
    ];
  }

  constructor(params: { count: number }) {
    super();
    this.count = params.count;
  }
}

export class InputMessageID extends TypeInputMessage {
  id: number;

  protected get [id]() {
    return 0xa676a322;
  }

  protected get [params](): Params {
    return [
      [this.id, "int"],
    ];
  }

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

export class InputMessageReplyTo extends TypeInputMessage {
  id: number;

  protected get [id]() {
    return 0xbad88395;
  }

  protected get [params](): Params {
    return [
      [this.id, "int"],
    ];
  }

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

export class InputMessagePinned extends TypeInputMessage {
  protected get [id]() {
    return 0x86872538;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageEntityPhone extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x9b69e34b;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityCashtag extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x4c4e743f;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageActionBotAllowed extends TypeMessageAction {
  domain: string;

  protected get [id]() {
    return 0xabe9affe;
  }

  protected get [params](): Params {
    return [
      [this.domain, "string"],
    ];
  }

  constructor(params: { domain: string }) {
    super();
    this.domain = params.domain;
  }
}

export class MessagesFoundStickerSetsNotModified
  extends TypeMessagesFoundStickerSets {
  protected get [id]() {
    return 0x0d54b65d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class WebDocumentNoProxy extends TypeWebDocument {
  url: string;
  size: number;
  mime_type: string;
  attributes: Array<TypeDocumentAttribute>;

  protected get [id]() {
    return 0xf9c8bcc6;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
      [this.size, "int"],
      [this.mime_type, "string"],
      [this.attributes, "Vector<DocumentAttribute>"],
    ];
  }

  constructor(
    params: {
      url: string;
      size: number;
      mime_type: string;
      attributes: Array<TypeDocumentAttribute>;
    },
  ) {
    super();
    this.url = params.url;
    this.size = params.size;
    this.mime_type = params.mime_type;
    this.attributes = params.attributes;
  }
}

export class HelpTermsOfServiceUpdateEmpty
  extends TypeHelpTermsOfServiceUpdate {
  expires: number;

  protected get [id]() {
    return 0xe3309f7f;
  }

  protected get [params](): Params {
    return [
      [this.expires, "int"],
    ];
  }

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class InputSecureFileUploaded extends TypeInputSecureFile {
  id: bigint;
  parts: number;
  md5_checksum: string;
  file_hash: Uint8Array;
  secret: Uint8Array;

  protected get [id]() {
    return 0x3334b0f0;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.parts, "int"],
      [this.md5_checksum, "string"],
      [this.file_hash, "bytes"],
      [this.secret, "bytes"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      parts: number;
      md5_checksum: string;
      file_hash: Uint8Array;
      secret: Uint8Array;
    },
  ) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.md5_checksum = params.md5_checksum;
    this.file_hash = params.file_hash;
    this.secret = params.secret;
  }
}

export class InputSecureFileLocation extends TypeInputFileLocation {
  id: bigint;
  access_hash: bigint;

  protected get [id]() {
    return 0xcbc7ee28;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.access_hash, "long"],
    ];
  }

  constructor(params: { id: bigint; access_hash: bigint }) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
  }
}

export class SecureFileEmpty extends TypeSecureFile {
  protected get [id]() {
    return 0x64199744;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecurePlainPhone extends TypeSecurePlainData {
  phone: string;

  protected get [id]() {
    return 0x7d6099dd;
  }

  protected get [params](): Params {
    return [
      [this.phone, "string"],
    ];
  }

  constructor(params: { phone: string }) {
    super();
    this.phone = params.phone;
  }
}

export class SecurePlainEmail extends TypeSecurePlainData {
  email: string;

  protected get [id]() {
    return 0x21ec5a5f;
  }

  protected get [params](): Params {
    return [
      [this.email, "string"],
    ];
  }

  constructor(params: { email: string }) {
    super();
    this.email = params.email;
  }
}

export class SecureValueTypePersonalDetails extends TypeSecureValueType {
  protected get [id]() {
    return 0x9d2a81e3;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypePassport extends TypeSecureValueType {
  protected get [id]() {
    return 0x3dac6a00;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeDriverLicense extends TypeSecureValueType {
  protected get [id]() {
    return 0x06e425c4;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeIdentityCard extends TypeSecureValueType {
  protected get [id]() {
    return 0xa0d0744b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeInternalPassport extends TypeSecureValueType {
  protected get [id]() {
    return 0x99a48f23;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeAddress extends TypeSecureValueType {
  protected get [id]() {
    return 0xcbe31e26;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeUtilityBill extends TypeSecureValueType {
  protected get [id]() {
    return 0xfc36954e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeBankStatement extends TypeSecureValueType {
  protected get [id]() {
    return 0x89137c0d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeRentalAgreement extends TypeSecureValueType {
  protected get [id]() {
    return 0x8b883488;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypePassportRegistration extends TypeSecureValueType {
  protected get [id]() {
    return 0x99e3806a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeTemporaryRegistration extends TypeSecureValueType {
  protected get [id]() {
    return 0xea02ec33;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypePhone extends TypeSecureValueType {
  protected get [id]() {
    return 0xb320aadb;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueTypeEmail extends TypeSecureValueType {
  protected get [id]() {
    return 0x8e3ca7ee;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueErrorData extends TypeSecureValueError {
  type: TypeSecureValueType;
  data_hash: Uint8Array;
  field: string;
  text: string;

  protected get [id]() {
    return 0xe8a40bd9;
  }

  protected get [params](): Params {
    return [
      [this.type, "SecureValueType"],
      [this.data_hash, "bytes"],
      [this.field, "string"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: {
      type: TypeSecureValueType;
      data_hash: Uint8Array;
      field: string;
      text: string;
    },
  ) {
    super();
    this.type = params.type;
    this.data_hash = params.data_hash;
    this.field = params.field;
    this.text = params.text;
  }
}

export class SecureValueErrorFrontSide extends TypeSecureValueError {
  type: TypeSecureValueType;
  file_hash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0x00be3dfa;
  }

  protected get [params](): Params {
    return [
      [this.type, "SecureValueType"],
      [this.file_hash, "bytes"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; file_hash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.file_hash = params.file_hash;
    this.text = params.text;
  }
}

export class SecureValueErrorReverseSide extends TypeSecureValueError {
  type: TypeSecureValueType;
  file_hash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0x868a2aa5;
  }

  protected get [params](): Params {
    return [
      [this.type, "SecureValueType"],
      [this.file_hash, "bytes"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; file_hash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.file_hash = params.file_hash;
    this.text = params.text;
  }
}

export class SecureValueErrorSelfie extends TypeSecureValueError {
  type: TypeSecureValueType;
  file_hash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0xe537ced6;
  }

  protected get [params](): Params {
    return [
      [this.type, "SecureValueType"],
      [this.file_hash, "bytes"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; file_hash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.file_hash = params.file_hash;
    this.text = params.text;
  }
}

export class SecureValueErrorFile extends TypeSecureValueError {
  type: TypeSecureValueType;
  file_hash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0x7a700873;
  }

  protected get [params](): Params {
    return [
      [this.type, "SecureValueType"],
      [this.file_hash, "bytes"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; file_hash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.file_hash = params.file_hash;
    this.text = params.text;
  }
}

export class SecureValueErrorFiles extends TypeSecureValueError {
  type: TypeSecureValueType;
  file_hash: Array<Uint8Array>;
  text: string;

  protected get [id]() {
    return 0x666220e9;
  }

  protected get [params](): Params {
    return [
      [this.type, "SecureValueType"],
      [this.file_hash, "Vector<bytes>"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: {
      type: TypeSecureValueType;
      file_hash: Array<Uint8Array>;
      text: string;
    },
  ) {
    super();
    this.type = params.type;
    this.file_hash = params.file_hash;
    this.text = params.text;
  }
}

export class MessageActionSecureValuesSentMe extends TypeMessageAction {
  values: Array<TypeSecureValue>;
  credentials: TypeSecureCredentialsEncrypted;

  protected get [id]() {
    return 0x1b287353;
  }

  protected get [params](): Params {
    return [
      [this.values, "Vector<SecureValue>"],
      [this.credentials, "SecureCredentialsEncrypted"],
    ];
  }

  constructor(
    params: {
      values: Array<TypeSecureValue>;
      credentials: TypeSecureCredentialsEncrypted;
    },
  ) {
    super();
    this.values = params.values;
    this.credentials = params.credentials;
  }
}

export class MessageActionSecureValuesSent extends TypeMessageAction {
  types: Array<TypeSecureValueType>;

  protected get [id]() {
    return 0xd95c6154;
  }

  protected get [params](): Params {
    return [
      [this.types, "Vector<SecureValueType>"],
    ];
  }

  constructor(params: { types: Array<TypeSecureValueType> }) {
    super();
    this.types = params.types;
  }
}

export class HelpDeepLinkInfoEmpty extends TypeHelpDeepLinkInfo {
  protected get [id]() {
    return 0x66afa166;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SavedPhoneContact extends TypeSavedContact {
  phone: string;
  first_name: string;
  last_name: string;
  date: number;

  protected get [id]() {
    return 0x1142bd56;
  }

  protected get [params](): Params {
    return [
      [this.phone, "string"],
      [this.first_name, "string"],
      [this.last_name, "string"],
      [this.date, "int"],
    ];
  }

  constructor(
    params: {
      phone: string;
      first_name: string;
      last_name: string;
      date: number;
    },
  ) {
    super();
    this.phone = params.phone;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.date = params.date;
  }
}

export class InputTakeoutFileLocation extends TypeInputFileLocation {
  protected get [id]() {
    return 0x29be5899;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateDialogUnreadMark extends TypeUpdate {
  unread?: true;
  peer: TypeDialogPeer;

  protected get [id]() {
    return 0xe16459c3;
  }

  protected get [params](): Params {
    return [
      [this.unread ?? null, "flags.0?true"],
      [this.peer, "DialogPeer"],
    ];
  }

  constructor(params: { unread?: true; peer: TypeDialogPeer }) {
    super();
    this.unread = params.unread;
    this.peer = params.peer;
  }
}

export class MessagesDialogsNotModified extends TypeMessagesDialogs {
  count: number;

  protected get [id]() {
    return 0xf0e3e596;
  }

  protected get [params](): Params {
    return [
      [this.count, "int"],
    ];
  }

  constructor(params: { count: number }) {
    super();
    this.count = params.count;
  }
}

export class InputWebFileGeoPointLocation extends TypeInputWebFileLocation {
  geo_point: TypeInputGeoPoint;
  access_hash: bigint;
  w: number;
  h: number;
  zoom: number;
  scale: number;

  protected get [id]() {
    return 0x9f2221c9;
  }

  protected get [params](): Params {
    return [
      [this.geo_point, "InputGeoPoint"],
      [this.access_hash, "long"],
      [this.w, "int"],
      [this.h, "int"],
      [this.zoom, "int"],
      [this.scale, "int"],
    ];
  }

  constructor(
    params: {
      geo_point: TypeInputGeoPoint;
      access_hash: bigint;
      w: number;
      h: number;
      zoom: number;
      scale: number;
    },
  ) {
    super();
    this.geo_point = params.geo_point;
    this.access_hash = params.access_hash;
    this.w = params.w;
    this.h = params.h;
    this.zoom = params.zoom;
    this.scale = params.scale;
  }
}

export class ContactsTopPeersDisabled extends TypeContactsTopPeers {
  protected get [id]() {
    return 0xb52c939d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonCopyright extends TypeReportReason {
  protected get [id]() {
    return 0x9b89f93a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PasswordKdfAlgoUnknown extends TypePasswordKdfAlgo {
  protected get [id]() {
    return 0xd45ab096;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecurePasswordKdfAlgoUnknown extends TypeSecurePasswordKdfAlgo {
  protected get [id]() {
    return 0x004a8537;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000
  extends TypeSecurePasswordKdfAlgo {
  salt: Uint8Array;

  protected get [id]() {
    return 0xbbf2dda0;
  }

  protected get [params](): Params {
    return [
      [this.salt, "bytes"],
    ];
  }

  constructor(params: { salt: Uint8Array }) {
    super();
    this.salt = params.salt;
  }
}

export class SecurePasswordKdfAlgoSHA512 extends TypeSecurePasswordKdfAlgo {
  salt: Uint8Array;

  protected get [id]() {
    return 0x86471d92;
  }

  protected get [params](): Params {
    return [
      [this.salt, "bytes"],
    ];
  }

  constructor(params: { salt: Uint8Array }) {
    super();
    this.salt = params.salt;
  }
}

export class PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow
  extends TypePasswordKdfAlgo {
  salt1: Uint8Array;
  salt2: Uint8Array;
  g: number;
  p: Uint8Array;

  protected get [id]() {
    return 0x3a912d4a;
  }

  protected get [params](): Params {
    return [
      [this.salt1, "bytes"],
      [this.salt2, "bytes"],
      [this.g, "int"],
      [this.p, "bytes"],
    ];
  }

  constructor(
    params: { salt1: Uint8Array; salt2: Uint8Array; g: number; p: Uint8Array },
  ) {
    super();
    this.salt1 = params.salt1;
    this.salt2 = params.salt2;
    this.g = params.g;
    this.p = params.p;
  }
}

export class InputCheckPasswordEmpty extends TypeInputCheckPasswordSRP {
  protected get [id]() {
    return 0x9880f658;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValueErrorTranslationFile extends TypeSecureValueError {
  type: TypeSecureValueType;
  file_hash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0xa1144770;
  }

  protected get [params](): Params {
    return [
      [this.type, "SecureValueType"],
      [this.file_hash, "bytes"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; file_hash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.file_hash = params.file_hash;
    this.text = params.text;
  }
}

export class SecureValueErrorTranslationFiles extends TypeSecureValueError {
  type: TypeSecureValueType;
  file_hash: Array<Uint8Array>;
  text: string;

  protected get [id]() {
    return 0x34636dd8;
  }

  protected get [params](): Params {
    return [
      [this.type, "SecureValueType"],
      [this.file_hash, "Vector<bytes>"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: {
      type: TypeSecureValueType;
      file_hash: Array<Uint8Array>;
      text: string;
    },
  ) {
    super();
    this.type = params.type;
    this.file_hash = params.file_hash;
    this.text = params.text;
  }
}

export class SecureRequiredTypeOneOf extends TypeSecureRequiredType {
  types: Array<TypeSecureRequiredType>;

  protected get [id]() {
    return 0x027477b4;
  }

  protected get [params](): Params {
    return [
      [this.types, "Vector<SecureRequiredType>"],
    ];
  }

  constructor(params: { types: Array<TypeSecureRequiredType> }) {
    super();
    this.types = params.types;
  }
}

export class HelpPassportConfigNotModified extends TypeHelpPassportConfig {
  protected get [id]() {
    return 0xbfb9f457;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class JsonNull extends TypeJSONValue {
  protected get [id]() {
    return 0x3f6d7b68;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class JsonBool extends TypeJSONValue {
  value: boolean;

  protected get [id]() {
    return 0xc7345e6a;
  }

  protected get [params](): Params {
    return [
      [this.value, "Bool"],
    ];
  }

  constructor(params: { value: boolean }) {
    super();
    this.value = params.value;
  }
}

export class JsonNumber extends TypeJSONValue {
  value: number;

  protected get [id]() {
    return 0x2be0dfa4;
  }

  protected get [params](): Params {
    return [
      [this.value, "double"],
    ];
  }

  constructor(params: { value: number }) {
    super();
    this.value = params.value;
  }
}

export class JsonString extends TypeJSONValue {
  value: string;

  protected get [id]() {
    return 0xb71e767a;
  }

  protected get [params](): Params {
    return [
      [this.value, "string"],
    ];
  }

  constructor(params: { value: string }) {
    super();
    this.value = params.value;
  }
}

export class JsonArray extends TypeJSONValue {
  value: Array<TypeJSONValue>;

  protected get [id]() {
    return 0xf7444763;
  }

  protected get [params](): Params {
    return [
      [this.value, "Vector<JSONValue>"],
    ];
  }

  constructor(params: { value: Array<TypeJSONValue> }) {
    super();
    this.value = params.value;
  }
}

export class JsonObject extends TypeJSONValue {
  value: Array<TypeJSONObjectValue>;

  protected get [id]() {
    return 0x99c1d49d;
  }

  protected get [params](): Params {
    return [
      [this.value, "Vector<JSONObjectValue>"],
    ];
  }

  constructor(params: { value: Array<TypeJSONObjectValue> }) {
    super();
    this.value = params.value;
  }
}

export class InputNotifyBroadcasts extends TypeInputNotifyPeer {
  protected get [id]() {
    return 0xb1db7c7e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class NotifyBroadcasts extends TypeNotifyPeer {
  protected get [id]() {
    return 0xd612e8ef;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TextSubscript extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0xed6a8504;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class TextSuperscript extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0xc7fb5e01;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class TextMarked extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0x034b8621;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class TextPhone extends TypeRichText {
  text: TypeRichText;
  phone: string;

  protected get [id]() {
    return 0x1ccb966a;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
      [this.phone, "string"],
    ];
  }

  constructor(params: { text: TypeRichText; phone: string }) {
    super();
    this.text = params.text;
    this.phone = params.phone;
  }
}

export class TextImage extends TypeRichText {
  document_id: bigint;
  w: number;
  h: number;

  protected get [id]() {
    return 0x081ccf4f;
  }

  protected get [params](): Params {
    return [
      [this.document_id, "long"],
      [this.w, "int"],
      [this.h, "int"],
    ];
  }

  constructor(params: { document_id: bigint; w: number; h: number }) {
    super();
    this.document_id = params.document_id;
    this.w = params.w;
    this.h = params.h;
  }
}

export class PageBlockKicker extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0x1e148390;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockTable extends TypePageBlock {
  bordered?: true;
  striped?: true;
  title: TypeRichText;
  rows: Array<TypePageTableRow>;

  protected get [id]() {
    return 0xbf4dea82;
  }

  protected get [params](): Params {
    return [
      [this.bordered ?? null, "flags.0?true"],
      [this.striped ?? null, "flags.1?true"],
      [this.title, "RichText"],
      [this.rows, "Vector<PageTableRow>"],
    ];
  }

  constructor(
    params: {
      bordered?: true;
      striped?: true;
      title: TypeRichText;
      rows: Array<TypePageTableRow>;
    },
  ) {
    super();
    this.bordered = params.bordered;
    this.striped = params.striped;
    this.title = params.title;
    this.rows = params.rows;
  }
}

export class PageListItemText extends TypePageListItem {
  text: TypeRichText;

  protected get [id]() {
    return 0xb92fb6cd;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageListItemBlocks extends TypePageListItem {
  blocks: Array<TypePageBlock>;

  protected get [id]() {
    return 0x25e073fc;
  }

  protected get [params](): Params {
    return [
      [this.blocks, "Vector<PageBlock>"],
    ];
  }

  constructor(params: { blocks: Array<TypePageBlock> }) {
    super();
    this.blocks = params.blocks;
  }
}

export class PageListOrderedItemText extends TypePageListOrderedItem {
  num: string;
  text: TypeRichText;

  protected get [id]() {
    return 0x5e068047;
  }

  protected get [params](): Params {
    return [
      [this.num, "string"],
      [this.text, "RichText"],
    ];
  }

  constructor(params: { num: string; text: TypeRichText }) {
    super();
    this.num = params.num;
    this.text = params.text;
  }
}

export class PageListOrderedItemBlocks extends TypePageListOrderedItem {
  num: string;
  blocks: Array<TypePageBlock>;

  protected get [id]() {
    return 0x98dd8936;
  }

  protected get [params](): Params {
    return [
      [this.num, "string"],
      [this.blocks, "Vector<PageBlock>"],
    ];
  }

  constructor(params: { num: string; blocks: Array<TypePageBlock> }) {
    super();
    this.num = params.num;
    this.blocks = params.blocks;
  }
}

export class PageBlockOrderedList extends TypePageBlock {
  items: Array<TypePageListOrderedItem>;

  protected get [id]() {
    return 0x9a8ae1e1;
  }

  protected get [params](): Params {
    return [
      [this.items, "Vector<PageListOrderedItem>"],
    ];
  }

  constructor(params: { items: Array<TypePageListOrderedItem> }) {
    super();
    this.items = params.items;
  }
}

export class PageBlockDetails extends TypePageBlock {
  open?: true;
  blocks: Array<TypePageBlock>;
  title: TypeRichText;

  protected get [id]() {
    return 0x76768bed;
  }

  protected get [params](): Params {
    return [
      [this.open ?? null, "flags.0?true"],
      [this.blocks, "Vector<PageBlock>"],
      [this.title, "RichText"],
    ];
  }

  constructor(
    params: { open?: true; blocks: Array<TypePageBlock>; title: TypeRichText },
  ) {
    super();
    this.open = params.open;
    this.blocks = params.blocks;
    this.title = params.title;
  }
}

export class PageBlockRelatedArticles extends TypePageBlock {
  title: TypeRichText;
  articles: Array<TypePageRelatedArticle>;

  protected get [id]() {
    return 0x16115a96;
  }

  protected get [params](): Params {
    return [
      [this.title, "RichText"],
      [this.articles, "Vector<PageRelatedArticle>"],
    ];
  }

  constructor(
    params: { title: TypeRichText; articles: Array<TypePageRelatedArticle> },
  ) {
    super();
    this.title = params.title;
    this.articles = params.articles;
  }
}

export class PageBlockMap extends TypePageBlock {
  geo: TypeGeoPoint;
  zoom: number;
  w: number;
  h: number;
  caption: TypePageCaption;

  protected get [id]() {
    return 0xa44f3ef6;
  }

  protected get [params](): Params {
    return [
      [this.geo, "GeoPoint"],
      [this.zoom, "int"],
      [this.w, "int"],
      [this.h, "int"],
      [this.caption, "PageCaption"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      zoom: number;
      w: number;
      h: number;
      caption: TypePageCaption;
    },
  ) {
    super();
    this.geo = params.geo;
    this.zoom = params.zoom;
    this.w = params.w;
    this.h = params.h;
    this.caption = params.caption;
  }
}

export class InputPrivacyKeyPhoneP2P extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xdb9e70d2;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyPhoneP2P extends TypePrivacyKey {
  protected get [id]() {
    return 0x39491cc8;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TextAnchor extends TypeRichText {
  text: TypeRichText;
  name: string;

  protected get [id]() {
    return 0x35553762;
  }

  protected get [params](): Params {
    return [
      [this.text, "RichText"],
      [this.name, "string"],
    ];
  }

  constructor(params: { text: TypeRichText; name: string }) {
    super();
    this.text = params.text;
    this.name = params.name;
  }
}

export class HelpUserInfoEmpty extends TypeHelpUserInfo {
  protected get [id]() {
    return 0xf3ae2eed;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionContactSignUp extends TypeMessageAction {
  protected get [id]() {
    return 0xf3f25f76;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateMessagePoll extends TypeUpdate {
  poll_id: bigint;
  poll?: TypePoll;
  results: TypePollResults;

  protected get [id]() {
    return 0xaca1657b;
  }

  protected get [params](): Params {
    return [
      [this.poll_id, "long"],
      [this.poll ?? null, "flags.0?Poll"],
      [this.results, "PollResults"],
    ];
  }

  constructor(
    params: { poll_id: bigint; poll?: TypePoll; results: TypePollResults },
  ) {
    super();
    this.poll_id = params.poll_id;
    this.poll = params.poll;
    this.results = params.results;
  }
}

export class InputMediaPoll extends TypeInputMedia {
  poll: TypePoll;
  correct_answers?: Array<Uint8Array>;
  solution?: string;
  solution_entities?: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x0f94e5f1;
  }

  protected get [params](): Params {
    return [
      [this.poll, "Poll"],
      [this.correct_answers ?? null, "flags.0?Vector<bytes>"],
      [this.solution ?? null, "flags.1?string"],
      [this.solution_entities ?? null, "flags.1?Vector<MessageEntity>"],
    ];
  }

  constructor(
    params: {
      poll: TypePoll;
      correct_answers?: Array<Uint8Array>;
      solution?: string;
      solution_entities?: Array<TypeMessageEntity>;
    },
  ) {
    super();
    this.poll = params.poll;
    this.correct_answers = params.correct_answers;
    this.solution = params.solution;
    this.solution_entities = params.solution_entities;
  }
}

export class MessageMediaPoll extends TypeMessageMedia {
  poll: TypePoll;
  results: TypePollResults;

  protected get [id]() {
    return 0x4bd6e798;
  }

  protected get [params](): Params {
    return [
      [this.poll, "Poll"],
      [this.results, "PollResults"],
    ];
  }

  constructor(params: { poll: TypePoll; results: TypePollResults }) {
    super();
    this.poll = params.poll;
    this.results = params.results;
  }
}

export class PhotoStrippedSize extends TypePhotoSize {
  type: string;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xe0b0bc2e;
  }

  protected get [params](): Params {
    return [
      [this.type, "string"],
      [this.bytes, "bytes"],
    ];
  }

  constructor(params: { type: string; bytes: Uint8Array }) {
    super();
    this.type = params.type;
    this.bytes = params.bytes;
  }
}

export class UpdateChatDefaultBannedRights extends TypeUpdate {
  peer: TypePeer;
  default_banned_rights: TypeChatBannedRights;
  version: number;

  protected get [id]() {
    return 0x54c01850;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.default_banned_rights, "ChatBannedRights"],
      [this.version, "int"],
    ];
  }

  constructor(
    params: {
      peer: TypePeer;
      default_banned_rights: TypeChatBannedRights;
      version: number;
    },
  ) {
    super();
    this.peer = params.peer;
    this.default_banned_rights = params.default_banned_rights;
    this.version = params.version;
  }
}

export class InputWallPaperSlug extends TypeInputWallPaper {
  slug: string;

  protected get [id]() {
    return 0x72091c80;
  }

  protected get [params](): Params {
    return [
      [this.slug, "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class ChannelParticipantsContacts extends TypeChannelParticipantsFilter {
  q: string;

  protected get [id]() {
    return 0xbb6ae88d;
  }

  protected get [params](): Params {
    return [
      [this.q, "string"],
    ];
  }

  constructor(params: { q: string }) {
    super();
    this.q = params.q;
  }
}

export class ChannelAdminLogEventActionDefaultBannedRights
  extends TypeChannelAdminLogEventAction {
  prev_banned_rights: TypeChatBannedRights;
  new_banned_rights: TypeChatBannedRights;

  protected get [id]() {
    return 0x2df5fc0a;
  }

  protected get [params](): Params {
    return [
      [this.prev_banned_rights, "ChatBannedRights"],
      [this.new_banned_rights, "ChatBannedRights"],
    ];
  }

  constructor(
    params: {
      prev_banned_rights: TypeChatBannedRights;
      new_banned_rights: TypeChatBannedRights;
    },
  ) {
    super();
    this.prev_banned_rights = params.prev_banned_rights;
    this.new_banned_rights = params.new_banned_rights;
  }
}

export class ChannelAdminLogEventActionStopPoll
  extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x8f079643;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
    ];
  }

  constructor(params: { message: TypeMessage }) {
    super();
    this.message = params.message;
  }
}

export class AccountWallPapersNotModified extends TypeAccountWallPapers {
  protected get [id]() {
    return 0x1c199183;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class EmojiKeywordDeleted extends TypeEmojiKeyword {
  keyword: string;
  emoticons: Array<string>;

  protected get [id]() {
    return 0x236df622;
  }

  protected get [params](): Params {
    return [
      [this.keyword, "string"],
      [this.emoticons, "Vector<string>"],
    ];
  }

  constructor(params: { keyword: string; emoticons: Array<string> }) {
    super();
    this.keyword = params.keyword;
    this.emoticons = params.emoticons;
  }
}

export class InputPrivacyKeyForwards extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xa4dd4c08;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyForwards extends TypePrivacyKey {
  protected get [id]() {
    return 0x69ec56a3;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyKeyProfilePhoto extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0x5719bacc;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyProfilePhoto extends TypePrivacyKey {
  protected get [id]() {
    return 0x96151fed;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPhotoFileLocation extends TypeInputFileLocation {
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
  thumb_size: string;

  protected get [id]() {
    return 0x40181ffe;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.access_hash, "long"],
      [this.file_reference, "bytes"],
      [this.thumb_size, "string"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      access_hash: bigint;
      file_reference: Uint8Array;
      thumb_size: string;
    },
  ) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.file_reference = params.file_reference;
    this.thumb_size = params.thumb_size;
  }
}

export class InputPhotoLegacyFileLocation extends TypeInputFileLocation {
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
  volume_id: bigint;
  local_id: number;
  secret: bigint;

  protected get [id]() {
    return 0xd83466f3;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.access_hash, "long"],
      [this.file_reference, "bytes"],
      [this.volume_id, "long"],
      [this.local_id, "int"],
      [this.secret, "long"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      access_hash: bigint;
      file_reference: Uint8Array;
      volume_id: bigint;
      local_id: number;
      secret: bigint;
    },
  ) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.file_reference = params.file_reference;
    this.volume_id = params.volume_id;
    this.local_id = params.local_id;
    this.secret = params.secret;
  }
}

export class InputPeerPhotoFileLocation extends TypeInputFileLocation {
  big?: true;
  peer: TypeInputPeer;
  photo_id: bigint;

  protected get [id]() {
    return 0x37257e99;
  }

  protected get [params](): Params {
    return [
      [this.big ?? null, "flags.0?true"],
      [this.peer, "InputPeer"],
      [this.photo_id, "long"],
    ];
  }

  constructor(params: { big?: true; peer: TypeInputPeer; photo_id: bigint }) {
    super();
    this.big = params.big;
    this.peer = params.peer;
    this.photo_id = params.photo_id;
  }
}

export class InputStickerSetThumb extends TypeInputFileLocation {
  stickerset: TypeInputStickerSet;
  thumb_version: number;

  protected get [id]() {
    return 0x9d84f3db;
  }

  protected get [params](): Params {
    return [
      [this.stickerset, "InputStickerSet"],
      [this.thumb_version, "int"],
    ];
  }

  constructor(
    params: { stickerset: TypeInputStickerSet; thumb_version: number },
  ) {
    super();
    this.stickerset = params.stickerset;
    this.thumb_version = params.thumb_version;
  }
}

export class DialogFolder extends TypeDialog {
  pinned?: true;
  folder: TypeFolder;
  peer: TypePeer;
  top_message: number;
  unread_muted_peers_count: number;
  unread_unmuted_peers_count: number;
  unread_muted_messages_count: number;
  unread_unmuted_messages_count: number;

  protected get [id]() {
    return 0x71bd134c;
  }

  protected get [params](): Params {
    return [
      [this.pinned ?? null, "flags.2?true"],
      [this.folder, "Folder"],
      [this.peer, "Peer"],
      [this.top_message, "int"],
      [this.unread_muted_peers_count, "int"],
      [this.unread_unmuted_peers_count, "int"],
      [this.unread_muted_messages_count, "int"],
      [this.unread_unmuted_messages_count, "int"],
    ];
  }

  constructor(
    params: {
      pinned?: true;
      folder: TypeFolder;
      peer: TypePeer;
      top_message: number;
      unread_muted_peers_count: number;
      unread_unmuted_peers_count: number;
      unread_muted_messages_count: number;
      unread_unmuted_messages_count: number;
    },
  ) {
    super();
    this.pinned = params.pinned;
    this.folder = params.folder;
    this.peer = params.peer;
    this.top_message = params.top_message;
    this.unread_muted_peers_count = params.unread_muted_peers_count;
    this.unread_unmuted_peers_count = params.unread_unmuted_peers_count;
    this.unread_muted_messages_count = params.unread_muted_messages_count;
    this.unread_unmuted_messages_count = params.unread_unmuted_messages_count;
  }
}

export class InputDialogPeerFolder extends TypeInputDialogPeer {
  folder_id: number;

  protected get [id]() {
    return 0x64600527;
  }

  protected get [params](): Params {
    return [
      [this.folder_id, "int"],
    ];
  }

  constructor(params: { folder_id: number }) {
    super();
    this.folder_id = params.folder_id;
  }
}

export class DialogPeerFolder extends TypeDialogPeer {
  folder_id: number;

  protected get [id]() {
    return 0x514519e2;
  }

  protected get [params](): Params {
    return [
      [this.folder_id, "int"],
    ];
  }

  constructor(params: { folder_id: number }) {
    super();
    this.folder_id = params.folder_id;
  }
}

export class UpdateFolderPeers extends TypeUpdate {
  folder_peers: Array<TypeFolderPeer>;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x19360dc0;
  }

  protected get [params](): Params {
    return [
      [this.folder_peers, "Vector<FolderPeer>"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: {
      folder_peers: Array<TypeFolderPeer>;
      pts: number;
      pts_count: number;
    },
  ) {
    super();
    this.folder_peers = params.folder_peers;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class InputUserFromMessage extends TypeInputUser {
  peer: TypeInputPeer;
  msg_id: number;
  user_id: bigint;

  protected get [id]() {
    return 0x1da448e2;
  }

  protected get [params](): Params {
    return [
      [this.peer, "InputPeer"],
      [this.msg_id, "int"],
      [this.user_id, "long"],
    ];
  }

  constructor(
    params: { peer: TypeInputPeer; msg_id: number; user_id: bigint },
  ) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.user_id = params.user_id;
  }
}

export class InputChannelFromMessage extends TypeInputChannel {
  peer: TypeInputPeer;
  msg_id: number;
  channel_id: bigint;

  protected get [id]() {
    return 0x5b934f9d;
  }

  protected get [params](): Params {
    return [
      [this.peer, "InputPeer"],
      [this.msg_id, "int"],
      [this.channel_id, "long"],
    ];
  }

  constructor(
    params: { peer: TypeInputPeer; msg_id: number; channel_id: bigint },
  ) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.channel_id = params.channel_id;
  }
}

export class InputPeerUserFromMessage extends TypeInputPeer {
  peer: TypeInputPeer;
  msg_id: number;
  user_id: bigint;

  protected get [id]() {
    return 0xa87b0a1c;
  }

  protected get [params](): Params {
    return [
      [this.peer, "InputPeer"],
      [this.msg_id, "int"],
      [this.user_id, "long"],
    ];
  }

  constructor(
    params: { peer: TypeInputPeer; msg_id: number; user_id: bigint },
  ) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.user_id = params.user_id;
  }
}

export class InputPeerChannelFromMessage extends TypeInputPeer {
  peer: TypeInputPeer;
  msg_id: number;
  channel_id: bigint;

  protected get [id]() {
    return 0xbd2a0840;
  }

  protected get [params](): Params {
    return [
      [this.peer, "InputPeer"],
      [this.msg_id, "int"],
      [this.channel_id, "long"],
    ];
  }

  constructor(
    params: { peer: TypeInputPeer; msg_id: number; channel_id: bigint },
  ) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.channel_id = params.channel_id;
  }
}

export class InputPrivacyKeyPhoneNumber extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0x0352dafa;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyPhoneNumber extends TypePrivacyKey {
  protected get [id]() {
    return 0xd19ae46d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TopPeerCategoryForwardUsers extends TypeTopPeerCategory {
  protected get [id]() {
    return 0xa8406ca9;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TopPeerCategoryForwardChats extends TypeTopPeerCategory {
  protected get [id]() {
    return 0xfbeec0f0;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelAdminLogEventActionChangeLinkedChat
  extends TypeChannelAdminLogEventAction {
  prev_value: bigint;
  new_value: bigint;

  protected get [id]() {
    return 0x050c7ac8;
  }

  protected get [params](): Params {
    return [
      [this.prev_value, "long"],
      [this.new_value, "long"],
    ];
  }

  constructor(params: { prev_value: bigint; new_value: bigint }) {
    super();
    this.prev_value = params.prev_value;
    this.new_value = params.new_value;
  }
}

export class KeyboardButtonUrlAuth extends TypeKeyboardButton {
  text: string;
  fwd_text?: string;
  url: string;
  button_id: number;

  protected get [id]() {
    return 0x10b78d29;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
      [this.fwd_text ?? null, "flags.0?string"],
      [this.url, "string"],
      [this.button_id, "int"],
    ];
  }

  constructor(
    params: { text: string; fwd_text?: string; url: string; button_id: number },
  ) {
    super();
    this.text = params.text;
    this.fwd_text = params.fwd_text;
    this.url = params.url;
    this.button_id = params.button_id;
  }
}

export class InputKeyboardButtonUrlAuth extends TypeKeyboardButton {
  request_write_access?: true;
  text: string;
  fwd_text?: string;
  url: string;
  bot: TypeInputUser;

  protected get [id]() {
    return 0xd02e7fd4;
  }

  protected get [params](): Params {
    return [
      [this.request_write_access ?? null, "flags.0?true"],
      [this.text, "string"],
      [this.fwd_text ?? null, "flags.1?string"],
      [this.url, "string"],
      [this.bot, "InputUser"],
    ];
  }

  constructor(
    params: {
      request_write_access?: true;
      text: string;
      fwd_text?: string;
      url: string;
      bot: TypeInputUser;
    },
  ) {
    super();
    this.request_write_access = params.request_write_access;
    this.text = params.text;
    this.fwd_text = params.fwd_text;
    this.url = params.url;
    this.bot = params.bot;
  }
}

export class UrlAuthResultRequest extends TypeUrlAuthResult {
  request_write_access?: true;
  bot: TypeUser;
  domain: string;

  protected get [id]() {
    return 0x92d33a0e;
  }

  protected get [params](): Params {
    return [
      [this.request_write_access ?? null, "flags.0?true"],
      [this.bot, "User"],
      [this.domain, "string"],
    ];
  }

  constructor(
    params: { request_write_access?: true; bot: TypeUser; domain: string },
  ) {
    super();
    this.request_write_access = params.request_write_access;
    this.bot = params.bot;
    this.domain = params.domain;
  }
}

export class UrlAuthResultAccepted extends TypeUrlAuthResult {
  url: string;

  protected get [id]() {
    return 0x8f8c0e4e;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class UrlAuthResultDefault extends TypeUrlAuthResult {
  protected get [id]() {
    return 0xa9d6db1f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyValueAllowChatParticipants
  extends TypeInputPrivacyRule {
  chats: Array<bigint>;

  protected get [id]() {
    return 0x840649cf;
  }

  protected get [params](): Params {
    return [
      [this.chats, "Vector<long>"],
    ];
  }

  constructor(params: { chats: Array<bigint> }) {
    super();
    this.chats = params.chats;
  }
}

export class InputPrivacyValueDisallowChatParticipants
  extends TypeInputPrivacyRule {
  chats: Array<bigint>;

  protected get [id]() {
    return 0xe94f0f86;
  }

  protected get [params](): Params {
    return [
      [this.chats, "Vector<long>"],
    ];
  }

  constructor(params: { chats: Array<bigint> }) {
    super();
    this.chats = params.chats;
  }
}

export class PrivacyValueAllowChatParticipants extends TypePrivacyRule {
  chats: Array<bigint>;

  protected get [id]() {
    return 0x6b134e8e;
  }

  protected get [params](): Params {
    return [
      [this.chats, "Vector<long>"],
    ];
  }

  constructor(params: { chats: Array<bigint> }) {
    super();
    this.chats = params.chats;
  }
}

export class PrivacyValueDisallowChatParticipants extends TypePrivacyRule {
  chats: Array<bigint>;

  protected get [id]() {
    return 0x41c87565;
  }

  protected get [params](): Params {
    return [
      [this.chats, "Vector<long>"],
    ];
  }

  constructor(params: { chats: Array<bigint> }) {
    super();
    this.chats = params.chats;
  }
}

export class MessageEntityUnderline extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x9c4e7e8b;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityStrike extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0xbf0693d4;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityBlockquote extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x020df5d0;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class UpdatePeerSettings extends TypeUpdate {
  peer: TypePeer;
  settings: TypePeerSettings;

  protected get [id]() {
    return 0x6a7e7366;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.settings, "PeerSettings"],
    ];
  }

  constructor(params: { peer: TypePeer; settings: TypePeerSettings }) {
    super();
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class ChannelLocationEmpty extends TypeChannelLocation {
  protected get [id]() {
    return 0xbfb5ad8b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdatePeerLocated extends TypeUpdate {
  peers: Array<TypePeerLocated>;

  protected get [id]() {
    return 0xb4afcfb0;
  }

  protected get [params](): Params {
    return [
      [this.peers, "Vector<PeerLocated>"],
    ];
  }

  constructor(params: { peers: Array<TypePeerLocated> }) {
    super();
    this.peers = params.peers;
  }
}

export class ChannelAdminLogEventActionChangeLocation
  extends TypeChannelAdminLogEventAction {
  prev_value: TypeChannelLocation;
  new_value: TypeChannelLocation;

  protected get [id]() {
    return 0x0e6b76ae;
  }

  protected get [params](): Params {
    return [
      [this.prev_value, "ChannelLocation"],
      [this.new_value, "ChannelLocation"],
    ];
  }

  constructor(
    params: { prev_value: TypeChannelLocation; new_value: TypeChannelLocation },
  ) {
    super();
    this.prev_value = params.prev_value;
    this.new_value = params.new_value;
  }
}

export class InputReportReasonGeoIrrelevant extends TypeReportReason {
  protected get [id]() {
    return 0xdbd4feed;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelAdminLogEventActionToggleSlowMode
  extends TypeChannelAdminLogEventAction {
  prev_value: number;
  new_value: number;

  protected get [id]() {
    return 0x53909779;
  }

  protected get [params](): Params {
    return [
      [this.prev_value, "int"],
      [this.new_value, "int"],
    ];
  }

  constructor(params: { prev_value: number; new_value: number }) {
    super();
    this.prev_value = params.prev_value;
    this.new_value = params.new_value;
  }
}

export class AuthAuthorizationSignUpRequired extends TypeAuthAuthorization {
  terms_of_service?: TypeHelpTermsOfService;

  protected get [id]() {
    return 0x44747e9a;
  }

  protected get [params](): Params {
    return [
      [this.terms_of_service ?? null, "flags.0?help.TermsOfService"],
    ];
  }

  constructor(params: { terms_of_service?: TypeHelpTermsOfService }) {
    super();
    this.terms_of_service = params.terms_of_service;
  }
}

export class PaymentsPaymentVerificationNeeded
  extends TypePaymentsPaymentResult {
  url: string;

  protected get [id]() {
    return 0xd8411139;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class InputStickerSetAnimatedEmoji extends TypeInputStickerSet {
  protected get [id]() {
    return 0x028703c8;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateNewScheduledMessage extends TypeUpdate {
  message: TypeMessage;

  protected get [id]() {
    return 0x39a51dfb;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
    ];
  }

  constructor(params: { message: TypeMessage }) {
    super();
    this.message = params.message;
  }
}

export class UpdateDeleteScheduledMessages extends TypeUpdate {
  peer: TypePeer;
  messages: Array<number>;

  protected get [id]() {
    return 0x90866cee;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.messages, "Vector<int>"],
    ];
  }

  constructor(params: { peer: TypePeer; messages: Array<number> }) {
    super();
    this.peer = params.peer;
    this.messages = params.messages;
  }
}

export class InputThemeSlug extends TypeInputTheme {
  slug: string;

  protected get [id]() {
    return 0xf5890df1;
  }

  protected get [params](): Params {
    return [
      [this.slug, "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class AccountThemesNotModified extends TypeAccountThemes {
  protected get [id]() {
    return 0xf41eb622;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateTheme extends TypeUpdate {
  theme: TypeTheme;

  protected get [id]() {
    return 0x8216fba3;
  }

  protected get [params](): Params {
    return [
      [this.theme, "Theme"],
    ];
  }

  constructor(params: { theme: TypeTheme }) {
    super();
    this.theme = params.theme;
  }
}

export class InputPrivacyKeyAddedByPhone extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xd1219bdd;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyAddedByPhone extends TypePrivacyKey {
  protected get [id]() {
    return 0x42ffd42b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateGeoLiveViewed extends TypeUpdate {
  peer: TypePeer;
  msg_id: number;

  protected get [id]() {
    return 0x871fb939;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.msg_id, "int"],
    ];
  }

  constructor(params: { peer: TypePeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

export class UpdateLoginToken extends TypeUpdate {
  protected get [id]() {
    return 0x564fe691;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AuthLoginTokenMigrateTo extends TypeAuthLoginToken {
  dc_id: number;
  token: Uint8Array;

  protected get [id]() {
    return 0x068e9916;
  }

  protected get [params](): Params {
    return [
      [this.dc_id, "int"],
      [this.token, "bytes"],
    ];
  }

  constructor(params: { dc_id: number; token: Uint8Array }) {
    super();
    this.dc_id = params.dc_id;
    this.token = params.token;
  }
}

export class AuthLoginTokenSuccess extends TypeAuthLoginToken {
  authorization: TypeAuthAuthorization;

  protected get [id]() {
    return 0x390d5c5e;
  }

  protected get [params](): Params {
    return [
      [this.authorization, "auth.Authorization"],
    ];
  }

  constructor(params: { authorization: TypeAuthAuthorization }) {
    super();
    this.authorization = params.authorization;
  }
}

export class BaseThemeClassic extends TypeBaseTheme {
  protected get [id]() {
    return 0xc3a12462;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BaseThemeDay extends TypeBaseTheme {
  protected get [id]() {
    return 0xfbd81688;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BaseThemeNight extends TypeBaseTheme {
  protected get [id]() {
    return 0xb7b31ea8;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BaseThemeTinted extends TypeBaseTheme {
  protected get [id]() {
    return 0x6d5f77ee;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BaseThemeArctic extends TypeBaseTheme {
  protected get [id]() {
    return 0x5b11125a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputWallPaperNoFile extends TypeInputWallPaper {
  id: bigint;

  protected get [id]() {
    return 0x967a462e;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class WallPaperNoFile extends TypeWallPaper {
  id: bigint;
  default?: true;
  dark?: true;
  settings?: TypeWallPaperSettings;

  protected get [id]() {
    return 0xe0804116;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.default ?? null, "flags.1?true"],
      [this.dark ?? null, "flags.4?true"],
      [this.settings ?? null, "flags.2?WallPaperSettings"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      default?: true;
      dark?: true;
      settings?: TypeWallPaperSettings;
    },
  ) {
    super();
    this.id = params.id;
    this.default = params.default;
    this.dark = params.dark;
    this.settings = params.settings;
  }
}

export class WebPageAttributeTheme extends TypeWebPageAttribute {
  documents?: Array<TypeDocument>;
  settings?: TypeThemeSettings;

  protected get [id]() {
    return 0x54b56617;
  }

  protected get [params](): Params {
    return [
      [this.documents ?? null, "flags.0?Vector<Document>"],
      [this.settings ?? null, "flags.1?ThemeSettings"],
    ];
  }

  constructor(
    params: { documents?: Array<TypeDocument>; settings?: TypeThemeSettings },
  ) {
    super();
    this.documents = params.documents;
    this.settings = params.settings;
  }
}

export class UpdateMessagePollVote extends TypeUpdate {
  poll_id: bigint;
  user_id: bigint;
  options: Array<Uint8Array>;
  qts: number;

  protected get [id]() {
    return 0x106395c9;
  }

  protected get [params](): Params {
    return [
      [this.poll_id, "long"],
      [this.user_id, "long"],
      [this.options, "Vector<bytes>"],
      [this.qts, "int"],
    ];
  }

  constructor(
    params: {
      poll_id: bigint;
      user_id: bigint;
      options: Array<Uint8Array>;
      qts: number;
    },
  ) {
    super();
    this.poll_id = params.poll_id;
    this.user_id = params.user_id;
    this.options = params.options;
    this.qts = params.qts;
  }
}

export class MessageUserVoteInputOption extends TypeMessageUserVote {
  user_id: bigint;
  date: number;

  protected get [id]() {
    return 0x3ca5b0ec;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.date, "int"],
    ];
  }

  constructor(params: { user_id: bigint; date: number }) {
    super();
    this.user_id = params.user_id;
    this.date = params.date;
  }
}

export class MessageUserVoteMultiple extends TypeMessageUserVote {
  user_id: bigint;
  options: Array<Uint8Array>;
  date: number;

  protected get [id]() {
    return 0x8a65e557;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.options, "Vector<bytes>"],
      [this.date, "int"],
    ];
  }

  constructor(
    params: { user_id: bigint; options: Array<Uint8Array>; date: number },
  ) {
    super();
    this.user_id = params.user_id;
    this.options = params.options;
    this.date = params.date;
  }
}

export class KeyboardButtonRequestPoll extends TypeKeyboardButton {
  quiz?: boolean;
  text: string;

  protected get [id]() {
    return 0xbbc7515d;
  }

  protected get [params](): Params {
    return [
      [this.quiz ?? null, "flags.0?Bool"],
      [this.text, "string"],
    ];
  }

  constructor(params: { quiz?: boolean; text: string }) {
    super();
    this.quiz = params.quiz;
    this.text = params.text;
  }
}

export class MessageEntityBankCard extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x761e6af4;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class PeerSelfLocated extends TypePeerLocated {
  expires: number;

  protected get [id]() {
    return 0xf8ec284b;
  }

  protected get [params](): Params {
    return [
      [this.expires, "int"],
    ];
  }

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class UpdateDialogFilter extends TypeUpdate {
  id: number;
  filter?: TypeDialogFilter;

  protected get [id]() {
    return 0x26ffde7d;
  }

  protected get [params](): Params {
    return [
      [this.id, "int"],
      [this.filter ?? null, "flags.0?DialogFilter"],
    ];
  }

  constructor(params: { id: number; filter?: TypeDialogFilter }) {
    super();
    this.id = params.id;
    this.filter = params.filter;
  }
}

export class UpdateDialogFilterOrder extends TypeUpdate {
  order: Array<number>;

  protected get [id]() {
    return 0xa5d72105;
  }

  protected get [params](): Params {
    return [
      [this.order, "Vector<int>"],
    ];
  }

  constructor(params: { order: Array<number> }) {
    super();
    this.order = params.order;
  }
}

export class UpdateDialogFilters extends TypeUpdate {
  protected get [id]() {
    return 0x3504914f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StatsGraphAsync extends TypeStatsGraph {
  token: string;

  protected get [id]() {
    return 0x4a27eb2d;
  }

  protected get [params](): Params {
    return [
      [this.token, "string"],
    ];
  }

  constructor(params: { token: string }) {
    super();
    this.token = params.token;
  }
}

export class StatsGraphError extends TypeStatsGraph {
  error: string;

  protected get [id]() {
    return 0xbedc9822;
  }

  protected get [params](): Params {
    return [
      [this.error, "string"],
    ];
  }

  constructor(params: { error: string }) {
    super();
    this.error = params.error;
  }
}

export class InputMediaDice extends TypeInputMedia {
  emoticon: string;

  protected get [id]() {
    return 0xe66fbf7b;
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class MessageMediaDice extends TypeMessageMedia {
  value: number;
  emoticon: string;

  protected get [id]() {
    return 0x3f7ee58b;
  }

  protected get [params](): Params {
    return [
      [this.value, "int"],
      [this.emoticon, "string"],
    ];
  }

  constructor(params: { value: number; emoticon: string }) {
    super();
    this.value = params.value;
    this.emoticon = params.emoticon;
  }
}

export class InputStickerSetDice extends TypeInputStickerSet {
  emoticon: string;

  protected get [id]() {
    return 0xe67f520e;
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class HelpPromoDataEmpty extends TypeHelpPromoData {
  expires: number;

  protected get [id]() {
    return 0x98f6ac75;
  }

  protected get [params](): Params {
    return [
      [this.expires, "int"],
    ];
  }

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class UpdatePhoneCallSignalingData extends TypeUpdate {
  phone_call_id: bigint;
  data: Uint8Array;

  protected get [id]() {
    return 0x2661bf09;
  }

  protected get [params](): Params {
    return [
      [this.phone_call_id, "long"],
      [this.data, "bytes"],
    ];
  }

  constructor(params: { phone_call_id: bigint; data: Uint8Array }) {
    super();
    this.phone_call_id = params.phone_call_id;
    this.data = params.data;
  }
}

export class ChatInvitePeek extends TypeChatInvite {
  chat: TypeChat;
  expires: number;

  protected get [id]() {
    return 0x61695cb0;
  }

  protected get [params](): Params {
    return [
      [this.chat, "Chat"],
      [this.expires, "int"],
    ];
  }

  constructor(params: { chat: TypeChat; expires: number }) {
    super();
    this.chat = params.chat;
    this.expires = params.expires;
  }
}

export class PhoneConnectionWebrtc extends TypePhoneConnection {
  turn?: true;
  stun?: true;
  id: bigint;
  ip: string;
  ipv6: string;
  port: number;
  username: string;
  password: string;

  protected get [id]() {
    return 0x635fe375;
  }

  protected get [params](): Params {
    return [
      [this.turn ?? null, "flags.0?true"],
      [this.stun ?? null, "flags.1?true"],
      [this.id, "long"],
      [this.ip, "string"],
      [this.ipv6, "string"],
      [this.port, "int"],
      [this.username, "string"],
      [this.password, "string"],
    ];
  }

  constructor(
    params: {
      turn?: true;
      stun?: true;
      id: bigint;
      ip: string;
      ipv6: string;
      port: number;
      username: string;
      password: string;
    },
  ) {
    super();
    this.turn = params.turn;
    this.stun = params.stun;
    this.id = params.id;
    this.ip = params.ip;
    this.ipv6 = params.ipv6;
    this.port = params.port;
    this.username = params.username;
    this.password = params.password;
  }
}

export class HelpCountriesListNotModified extends TypeHelpCountriesList {
  protected get [id]() {
    return 0x93cc1f32;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateChannelMessageForwards extends TypeUpdate {
  channel_id: bigint;
  id: number;
  forwards: number;

  protected get [id]() {
    return 0xd29a27f4;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.id, "int"],
      [this.forwards, "int"],
    ];
  }

  constructor(params: { channel_id: bigint; id: number; forwards: number }) {
    super();
    this.channel_id = params.channel_id;
    this.id = params.id;
    this.forwards = params.forwards;
  }
}

export class PhotoSizeProgressive extends TypePhotoSize {
  type: string;
  w: number;
  h: number;
  sizes: Array<number>;

  protected get [id]() {
    return 0xfa3efb95;
  }

  protected get [params](): Params {
    return [
      [this.type, "string"],
      [this.w, "int"],
      [this.h, "int"],
      [this.sizes, "Vector<int>"],
    ];
  }

  constructor(
    params: { type: string; w: number; h: number; sizes: Array<number> },
  ) {
    super();
    this.type = params.type;
    this.w = params.w;
    this.h = params.h;
    this.sizes = params.sizes;
  }
}

export class UpdateReadChannelDiscussionInbox extends TypeUpdate {
  channel_id: bigint;
  top_msg_id: number;
  read_max_id: number;
  broadcast_id?: bigint;
  broadcast_post?: number;

  protected get [id]() {
    return 0xd6b19546;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.top_msg_id, "int"],
      [this.read_max_id, "int"],
      [this.broadcast_id ?? null, "flags.0?long"],
      [this.broadcast_post ?? null, "flags.0?int"],
    ];
  }

  constructor(
    params: {
      channel_id: bigint;
      top_msg_id: number;
      read_max_id: number;
      broadcast_id?: bigint;
      broadcast_post?: number;
    },
  ) {
    super();
    this.channel_id = params.channel_id;
    this.top_msg_id = params.top_msg_id;
    this.read_max_id = params.read_max_id;
    this.broadcast_id = params.broadcast_id;
    this.broadcast_post = params.broadcast_post;
  }
}

export class UpdateReadChannelDiscussionOutbox extends TypeUpdate {
  channel_id: bigint;
  top_msg_id: number;
  read_max_id: number;

  protected get [id]() {
    return 0x695c9e7c;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.top_msg_id, "int"],
      [this.read_max_id, "int"],
    ];
  }

  constructor(
    params: { channel_id: bigint; top_msg_id: number; read_max_id: number },
  ) {
    super();
    this.channel_id = params.channel_id;
    this.top_msg_id = params.top_msg_id;
    this.read_max_id = params.read_max_id;
  }
}

export class UpdatePeerBlocked extends TypeUpdate {
  peer_id: TypePeer;
  blocked: boolean;

  protected get [id]() {
    return 0x246a4b22;
  }

  protected get [params](): Params {
    return [
      [this.peer_id, "Peer"],
      [this.blocked, "Bool"],
    ];
  }

  constructor(params: { peer_id: TypePeer; blocked: boolean }) {
    super();
    this.peer_id = params.peer_id;
    this.blocked = params.blocked;
  }
}

export class UpdateChannelUserTyping extends TypeUpdate {
  channel_id: bigint;
  top_msg_id?: number;
  from_id: TypePeer;
  action: TypeSendMessageAction;

  protected get [id]() {
    return 0x8c88c923;
  }

  protected get [params](): Params {
    return [
      [this.channel_id, "long"],
      [this.top_msg_id ?? null, "flags.0?int"],
      [this.from_id, "Peer"],
      [this.action, "SendMessageAction"],
    ];
  }

  constructor(
    params: {
      channel_id: bigint;
      top_msg_id?: number;
      from_id: TypePeer;
      action: TypeSendMessageAction;
    },
  ) {
    super();
    this.channel_id = params.channel_id;
    this.top_msg_id = params.top_msg_id;
    this.from_id = params.from_id;
    this.action = params.action;
  }
}

export class InputMessageCallbackQuery extends TypeInputMessage {
  id: number;
  query_id: bigint;

  protected get [id]() {
    return 0xacfa1a7e;
  }

  protected get [params](): Params {
    return [
      [this.id, "int"],
      [this.query_id, "long"],
    ];
  }

  constructor(params: { id: number; query_id: bigint }) {
    super();
    this.id = params.id;
    this.query_id = params.query_id;
  }
}

export class ChannelParticipantLeft extends TypeChannelParticipant {
  peer: TypePeer;

  protected get [id]() {
    return 0x1b03f006;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
    ];
  }

  constructor(params: { peer: TypePeer }) {
    super();
    this.peer = params.peer;
  }
}

export class ChannelParticipantsMentions extends TypeChannelParticipantsFilter {
  q?: string;
  top_msg_id?: number;

  protected get [id]() {
    return 0xe04b5ceb;
  }

  protected get [params](): Params {
    return [
      [this.q ?? null, "flags.0?string"],
      [this.top_msg_id ?? null, "flags.1?int"],
    ];
  }

  constructor(params: { q?: string; top_msg_id?: number }) {
    super();
    this.q = params.q;
    this.top_msg_id = params.top_msg_id;
  }
}

export class UpdatePinnedMessages extends TypeUpdate {
  pinned?: true;
  peer: TypePeer;
  messages: Array<number>;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0xed85eab5;
  }

  protected get [params](): Params {
    return [
      [this.pinned ?? null, "flags.0?true"],
      [this.peer, "Peer"],
      [this.messages, "Vector<int>"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: {
      pinned?: true;
      peer: TypePeer;
      messages: Array<number>;
      pts: number;
      pts_count: number;
    },
  ) {
    super();
    this.pinned = params.pinned;
    this.peer = params.peer;
    this.messages = params.messages;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class UpdatePinnedChannelMessages extends TypeUpdate {
  pinned?: true;
  channel_id: bigint;
  messages: Array<number>;
  pts: number;
  pts_count: number;

  protected get [id]() {
    return 0x5bb98608;
  }

  protected get [params](): Params {
    return [
      [this.pinned ?? null, "flags.0?true"],
      [this.channel_id, "long"],
      [this.messages, "Vector<int>"],
      [this.pts, "int"],
      [this.pts_count, "int"],
    ];
  }

  constructor(
    params: {
      pinned?: true;
      channel_id: bigint;
      messages: Array<number>;
      pts: number;
      pts_count: number;
    },
  ) {
    super();
    this.pinned = params.pinned;
    this.channel_id = params.channel_id;
    this.messages = params.messages;
    this.pts = params.pts;
    this.pts_count = params.pts_count;
  }
}

export class InputMessagesFilterPinned extends TypeMessagesFilter {
  protected get [id]() {
    return 0x1bb00451;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionGeoProximityReached extends TypeMessageAction {
  from_id: TypePeer;
  to_id: TypePeer;
  distance: number;

  protected get [id]() {
    return 0x98e0d697;
  }

  protected get [params](): Params {
    return [
      [this.from_id, "Peer"],
      [this.to_id, "Peer"],
      [this.distance, "int"],
    ];
  }

  constructor(
    params: { from_id: TypePeer; to_id: TypePeer; distance: number },
  ) {
    super();
    this.from_id = params.from_id;
    this.to_id = params.to_id;
    this.distance = params.distance;
  }
}

export class PhotoPathSize extends TypePhotoSize {
  type: string;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xd8214d41;
  }

  protected get [params](): Params {
    return [
      [this.type, "string"],
      [this.bytes, "bytes"],
    ];
  }

  constructor(params: { type: string; bytes: Uint8Array }) {
    super();
    this.type = params.type;
    this.bytes = params.bytes;
  }
}

export class SpeakingInGroupCallAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0xd92c2285;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class GroupCallDiscarded extends TypeGroupCall {
  id: bigint;
  access_hash: bigint;
  duration: number;

  protected get [id]() {
    return 0x7780bcb4;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
      [this.access_hash, "long"],
      [this.duration, "int"],
    ];
  }

  constructor(params: { id: bigint; access_hash: bigint; duration: number }) {
    super();
    this.id = params.id;
    this.access_hash = params.access_hash;
    this.duration = params.duration;
  }
}

export class MessageActionGroupCall extends TypeMessageAction {
  call: TypeInputGroupCall;
  duration?: number;

  protected get [id]() {
    return 0x7a0d7f42;
  }

  protected get [params](): Params {
    return [
      [this.call, "InputGroupCall"],
      [this.duration ?? null, "flags.0?int"],
    ];
  }

  constructor(params: { call: TypeInputGroupCall; duration?: number }) {
    super();
    this.call = params.call;
    this.duration = params.duration;
  }
}

export class MessageActionInviteToGroupCall extends TypeMessageAction {
  call: TypeInputGroupCall;
  users: Array<bigint>;

  protected get [id]() {
    return 0x502f92f7;
  }

  protected get [params](): Params {
    return [
      [this.call, "InputGroupCall"],
      [this.users, "Vector<long>"],
    ];
  }

  constructor(params: { call: TypeInputGroupCall; users: Array<bigint> }) {
    super();
    this.call = params.call;
    this.users = params.users;
  }
}

export class UpdateChat extends TypeUpdate {
  chat_id: bigint;

  protected get [id]() {
    return 0xf89a6a4e;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
    ];
  }

  constructor(params: { chat_id: bigint }) {
    super();
    this.chat_id = params.chat_id;
  }
}

export class UpdateGroupCallParticipants extends TypeUpdate {
  call: TypeInputGroupCall;
  participants: Array<TypeGroupCallParticipant>;
  version: number;

  protected get [id]() {
    return 0xf2ebdb4e;
  }

  protected get [params](): Params {
    return [
      [this.call, "InputGroupCall"],
      [this.participants, "Vector<GroupCallParticipant>"],
      [this.version, "int"],
    ];
  }

  constructor(
    params: {
      call: TypeInputGroupCall;
      participants: Array<TypeGroupCallParticipant>;
      version: number;
    },
  ) {
    super();
    this.call = params.call;
    this.participants = params.participants;
    this.version = params.version;
  }
}

export class UpdateGroupCall extends TypeUpdate {
  chat_id: bigint;
  call: TypeGroupCall;

  protected get [id]() {
    return 0x14b24500;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
      [this.call, "GroupCall"],
    ];
  }

  constructor(params: { chat_id: bigint; call: TypeGroupCall }) {
    super();
    this.chat_id = params.chat_id;
    this.call = params.call;
  }
}

export class InlineQueryPeerTypeSameBotPM extends TypeInlineQueryPeerType {
  protected get [id]() {
    return 0x3081ed9d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InlineQueryPeerTypePM extends TypeInlineQueryPeerType {
  protected get [id]() {
    return 0x833c0fac;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InlineQueryPeerTypeChat extends TypeInlineQueryPeerType {
  protected get [id]() {
    return 0xd766c50a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InlineQueryPeerTypeMegagroup extends TypeInlineQueryPeerType {
  protected get [id]() {
    return 0x5ec4be43;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InlineQueryPeerTypeBroadcast extends TypeInlineQueryPeerType {
  protected get [id]() {
    return 0x6334ee9a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelAdminLogEventActionStartGroupCall
  extends TypeChannelAdminLogEventAction {
  call: TypeInputGroupCall;

  protected get [id]() {
    return 0x23209745;
  }

  protected get [params](): Params {
    return [
      [this.call, "InputGroupCall"],
    ];
  }

  constructor(params: { call: TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class ChannelAdminLogEventActionDiscardGroupCall
  extends TypeChannelAdminLogEventAction {
  call: TypeInputGroupCall;

  protected get [id]() {
    return 0xdb9f9140;
  }

  protected get [params](): Params {
    return [
      [this.call, "InputGroupCall"],
    ];
  }

  constructor(params: { call: TypeInputGroupCall }) {
    super();
    this.call = params.call;
  }
}

export class ChannelAdminLogEventActionParticipantMute
  extends TypeChannelAdminLogEventAction {
  participant: TypeGroupCallParticipant;

  protected get [id]() {
    return 0xf92424d2;
  }

  protected get [params](): Params {
    return [
      [this.participant, "GroupCallParticipant"],
    ];
  }

  constructor(params: { participant: TypeGroupCallParticipant }) {
    super();
    this.participant = params.participant;
  }
}

export class ChannelAdminLogEventActionParticipantUnmute
  extends TypeChannelAdminLogEventAction {
  participant: TypeGroupCallParticipant;

  protected get [id]() {
    return 0xe64429c0;
  }

  protected get [params](): Params {
    return [
      [this.participant, "GroupCallParticipant"],
    ];
  }

  constructor(params: { participant: TypeGroupCallParticipant }) {
    super();
    this.participant = params.participant;
  }
}

export class ChannelAdminLogEventActionToggleGroupCallSetting
  extends TypeChannelAdminLogEventAction {
  join_muted: boolean;

  protected get [id]() {
    return 0x56d6a247;
  }

  protected get [params](): Params {
    return [
      [this.join_muted, "Bool"],
    ];
  }

  constructor(params: { join_muted: boolean }) {
    super();
    this.join_muted = params.join_muted;
  }
}

export class InputPaymentCredentialsGooglePay
  extends TypeInputPaymentCredentials {
  payment_token: TypeDataJSON;

  protected get [id]() {
    return 0x8ac32801;
  }

  protected get [params](): Params {
    return [
      [this.payment_token, "DataJSON"],
    ];
  }

  constructor(params: { payment_token: TypeDataJSON }) {
    super();
    this.payment_token = params.payment_token;
  }
}

export class SendMessageHistoryImportAction extends TypeSendMessageAction {
  progress: number;

  protected get [id]() {
    return 0xdbda9246;
  }

  protected get [params](): Params {
    return [
      [this.progress, "int"],
    ];
  }

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class InputReportReasonFake extends TypeReportReason {
  protected get [id]() {
    return 0xf5ddd6e7;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionSetMessagesTTL extends TypeMessageAction {
  period: number;

  protected get [id]() {
    return 0xaa1afbfd;
  }

  protected get [params](): Params {
    return [
      [this.period, "int"],
    ];
  }

  constructor(params: { period: number }) {
    super();
    this.period = params.period;
  }
}

export class UpdatePeerHistoryTTL extends TypeUpdate {
  peer: TypePeer;
  ttl_period?: number;

  protected get [id]() {
    return 0xbb9bb9a5;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.ttl_period ?? null, "flags.0?int"],
    ];
  }

  constructor(params: { peer: TypePeer; ttl_period?: number }) {
    super();
    this.peer = params.peer;
    this.ttl_period = params.ttl_period;
  }
}

export class UpdateChatParticipant extends TypeUpdate {
  chat_id: bigint;
  date: number;
  actor_id: bigint;
  user_id: bigint;
  prev_participant?: TypeChatParticipant;
  new_participant?: TypeChatParticipant;
  invite?: TypeExportedChatInvite;
  qts: number;

  protected get [id]() {
    return 0xd087663a;
  }

  protected get [params](): Params {
    return [
      [this.chat_id, "long"],
      [this.date, "int"],
      [this.actor_id, "long"],
      [this.user_id, "long"],
      [this.prev_participant ?? null, "flags.0?ChatParticipant"],
      [this.new_participant ?? null, "flags.1?ChatParticipant"],
      [this.invite ?? null, "flags.2?ExportedChatInvite"],
      [this.qts, "int"],
    ];
  }

  constructor(
    params: {
      chat_id: bigint;
      date: number;
      actor_id: bigint;
      user_id: bigint;
      prev_participant?: TypeChatParticipant;
      new_participant?: TypeChatParticipant;
      invite?: TypeExportedChatInvite;
      qts: number;
    },
  ) {
    super();
    this.chat_id = params.chat_id;
    this.date = params.date;
    this.actor_id = params.actor_id;
    this.user_id = params.user_id;
    this.prev_participant = params.prev_participant;
    this.new_participant = params.new_participant;
    this.invite = params.invite;
    this.qts = params.qts;
  }
}

export class UpdateChannelParticipant extends TypeUpdate {
  via_chatlist?: true;
  channel_id: bigint;
  date: number;
  actor_id: bigint;
  user_id: bigint;
  prev_participant?: TypeChannelParticipant;
  new_participant?: TypeChannelParticipant;
  invite?: TypeExportedChatInvite;
  qts: number;

  protected get [id]() {
    return 0x985d3abb;
  }

  protected get [params](): Params {
    return [
      [this.via_chatlist ?? null, "flags.3?true"],
      [this.channel_id, "long"],
      [this.date, "int"],
      [this.actor_id, "long"],
      [this.user_id, "long"],
      [this.prev_participant ?? null, "flags.0?ChannelParticipant"],
      [this.new_participant ?? null, "flags.1?ChannelParticipant"],
      [this.invite ?? null, "flags.2?ExportedChatInvite"],
      [this.qts, "int"],
    ];
  }

  constructor(
    params: {
      via_chatlist?: true;
      channel_id: bigint;
      date: number;
      actor_id: bigint;
      user_id: bigint;
      prev_participant?: TypeChannelParticipant;
      new_participant?: TypeChannelParticipant;
      invite?: TypeExportedChatInvite;
      qts: number;
    },
  ) {
    super();
    this.via_chatlist = params.via_chatlist;
    this.channel_id = params.channel_id;
    this.date = params.date;
    this.actor_id = params.actor_id;
    this.user_id = params.user_id;
    this.prev_participant = params.prev_participant;
    this.new_participant = params.new_participant;
    this.invite = params.invite;
    this.qts = params.qts;
  }
}

export class UpdateBotStopped extends TypeUpdate {
  user_id: bigint;
  date: number;
  stopped: boolean;
  qts: number;

  protected get [id]() {
    return 0xc4870a49;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.date, "int"],
      [this.stopped, "Bool"],
      [this.qts, "int"],
    ];
  }

  constructor(
    params: { user_id: bigint; date: number; stopped: boolean; qts: number },
  ) {
    super();
    this.user_id = params.user_id;
    this.date = params.date;
    this.stopped = params.stopped;
    this.qts = params.qts;
  }
}

export class MessagesExportedChatInviteReplaced
  extends TypeMessagesExportedChatInvite {
  invite: TypeExportedChatInvite;
  new_invite: TypeExportedChatInvite;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x222600ef;
  }

  protected get [params](): Params {
    return [
      [this.invite, "ExportedChatInvite"],
      [this.new_invite, "ExportedChatInvite"],
      [this.users, "Vector<User>"],
    ];
  }

  constructor(
    params: {
      invite: TypeExportedChatInvite;
      new_invite: TypeExportedChatInvite;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.invite = params.invite;
    this.new_invite = params.new_invite;
    this.users = params.users;
  }
}

export class ChannelAdminLogEventActionParticipantJoinByInvite
  extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;

  protected get [id]() {
    return 0x5cdada77;
  }

  protected get [params](): Params {
    return [
      [this.invite, "ExportedChatInvite"],
    ];
  }

  constructor(params: { invite: TypeExportedChatInvite }) {
    super();
    this.invite = params.invite;
  }
}

export class ChannelAdminLogEventActionExportedInviteDelete
  extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;

  protected get [id]() {
    return 0x5a50fca4;
  }

  protected get [params](): Params {
    return [
      [this.invite, "ExportedChatInvite"],
    ];
  }

  constructor(params: { invite: TypeExportedChatInvite }) {
    super();
    this.invite = params.invite;
  }
}

export class ChannelAdminLogEventActionExportedInviteRevoke
  extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;

  protected get [id]() {
    return 0x410a134e;
  }

  protected get [params](): Params {
    return [
      [this.invite, "ExportedChatInvite"],
    ];
  }

  constructor(params: { invite: TypeExportedChatInvite }) {
    super();
    this.invite = params.invite;
  }
}

export class ChannelAdminLogEventActionExportedInviteEdit
  extends TypeChannelAdminLogEventAction {
  prev_invite: TypeExportedChatInvite;
  new_invite: TypeExportedChatInvite;

  protected get [id]() {
    return 0xe90ebb59;
  }

  protected get [params](): Params {
    return [
      [this.prev_invite, "ExportedChatInvite"],
      [this.new_invite, "ExportedChatInvite"],
    ];
  }

  constructor(
    params: {
      prev_invite: TypeExportedChatInvite;
      new_invite: TypeExportedChatInvite;
    },
  ) {
    super();
    this.prev_invite = params.prev_invite;
    this.new_invite = params.new_invite;
  }
}

export class ChannelAdminLogEventActionParticipantVolume
  extends TypeChannelAdminLogEventAction {
  participant: TypeGroupCallParticipant;

  protected get [id]() {
    return 0x3e7f6847;
  }

  protected get [params](): Params {
    return [
      [this.participant, "GroupCallParticipant"],
    ];
  }

  constructor(params: { participant: TypeGroupCallParticipant }) {
    super();
    this.participant = params.participant;
  }
}

export class ChannelAdminLogEventActionChangeHistoryTTL
  extends TypeChannelAdminLogEventAction {
  prev_value: number;
  new_value: number;

  protected get [id]() {
    return 0x6e941a38;
  }

  protected get [params](): Params {
    return [
      [this.prev_value, "int"],
      [this.new_value, "int"],
    ];
  }

  constructor(params: { prev_value: number; new_value: number }) {
    super();
    this.prev_value = params.prev_value;
    this.new_value = params.new_value;
  }
}

export class InputGroupCallStream extends TypeInputFileLocation {
  call: TypeInputGroupCall;
  time_ms: bigint;
  scale: number;
  video_channel?: number;
  video_quality?: number;

  protected get [id]() {
    return 0x0598a92a;
  }

  protected get [params](): Params {
    return [
      [this.call, "InputGroupCall"],
      [this.time_ms, "long"],
      [this.scale, "int"],
      [this.video_channel ?? null, "flags.0?int"],
      [this.video_quality ?? null, "flags.0?int"],
    ];
  }

  constructor(
    params: {
      call: TypeInputGroupCall;
      time_ms: bigint;
      scale: number;
      video_channel?: number;
      video_quality?: number;
    },
  ) {
    super();
    this.call = params.call;
    this.time_ms = params.time_ms;
    this.scale = params.scale;
    this.video_channel = params.video_channel;
    this.video_quality = params.video_quality;
  }
}

export class InputBotInlineMessageMediaInvoice
  extends TypeInputBotInlineMessage {
  title: string;
  description: string;
  photo?: TypeInputWebDocument;
  invoice: TypeInvoice;
  payload: Uint8Array;
  provider: string;
  provider_data: TypeDataJSON;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0xd7e78225;
  }

  protected get [params](): Params {
    return [
      [this.title, "string"],
      [this.description, "string"],
      [this.photo ?? null, "flags.0?InputWebDocument"],
      [this.invoice, "Invoice"],
      [this.payload, "bytes"],
      [this.provider, "string"],
      [this.provider_data, "DataJSON"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      title: string;
      description: string;
      photo?: TypeInputWebDocument;
      invoice: TypeInvoice;
      payload: Uint8Array;
      provider: string;
      provider_data: TypeDataJSON;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.invoice = params.invoice;
    this.payload = params.payload;
    this.provider = params.provider;
    this.provider_data = params.provider_data;
    this.reply_markup = params.reply_markup;
  }
}

export class BotInlineMessageMediaInvoice extends TypeBotInlineMessage {
  shipping_address_requested?: true;
  test?: true;
  title: string;
  description: string;
  photo?: TypeWebDocument;
  currency: string;
  total_amount: bigint;
  reply_markup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x354a9b09;
  }

  protected get [params](): Params {
    return [
      [this.shipping_address_requested ?? null, "flags.1?true"],
      [this.test ?? null, "flags.3?true"],
      [this.title, "string"],
      [this.description, "string"],
      [this.photo ?? null, "flags.0?WebDocument"],
      [this.currency, "string"],
      [this.total_amount, "long"],
      [this.reply_markup ?? null, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      shipping_address_requested?: true;
      test?: true;
      title: string;
      description: string;
      photo?: TypeWebDocument;
      currency: string;
      total_amount: bigint;
      reply_markup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.shipping_address_requested = params.shipping_address_requested;
    this.test = params.test;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.currency = params.currency;
    this.total_amount = params.total_amount;
    this.reply_markup = params.reply_markup;
  }
}

export class MessageActionGroupCallScheduled extends TypeMessageAction {
  call: TypeInputGroupCall;
  schedule_date: number;

  protected get [id]() {
    return 0xb3a07661;
  }

  protected get [params](): Params {
    return [
      [this.call, "InputGroupCall"],
      [this.schedule_date, "int"],
    ];
  }

  constructor(params: { call: TypeInputGroupCall; schedule_date: number }) {
    super();
    this.call = params.call;
    this.schedule_date = params.schedule_date;
  }
}

export class UpdateGroupCallConnection extends TypeUpdate {
  presentation?: true;
  params: TypeDataJSON;

  protected get [id]() {
    return 0x0b783982;
  }

  protected get [params](): Params {
    return [
      [this.presentation ?? null, "flags.0?true"],
      [this.params, "DataJSON"],
    ];
  }

  constructor(params: { presentation?: true; params: TypeDataJSON }) {
    super();
    this.presentation = params.presentation;
    this.params = params.params;
  }
}

export class BotCommandScopeDefault extends TypeBotCommandScope {
  protected get [id]() {
    return 0x2f6cb2ab;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BotCommandScopeUsers extends TypeBotCommandScope {
  protected get [id]() {
    return 0x3c4f04d8;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BotCommandScopeChats extends TypeBotCommandScope {
  protected get [id]() {
    return 0x6fe1a881;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BotCommandScopeChatAdmins extends TypeBotCommandScope {
  protected get [id]() {
    return 0xb9aa606a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BotCommandScopePeer extends TypeBotCommandScope {
  peer: TypeInputPeer;

  protected get [id]() {
    return 0xdb9d897d;
  }

  protected get [params](): Params {
    return [
      [this.peer, "InputPeer"],
    ];
  }

  constructor(params: { peer: TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class BotCommandScopePeerAdmins extends TypeBotCommandScope {
  peer: TypeInputPeer;

  protected get [id]() {
    return 0x3fd863d1;
  }

  protected get [params](): Params {
    return [
      [this.peer, "InputPeer"],
    ];
  }

  constructor(params: { peer: TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class BotCommandScopePeerUser extends TypeBotCommandScope {
  peer: TypeInputPeer;
  user_id: TypeInputUser;

  protected get [id]() {
    return 0x0a1321f3;
  }

  protected get [params](): Params {
    return [
      [this.peer, "InputPeer"],
      [this.user_id, "InputUser"],
    ];
  }

  constructor(params: { peer: TypeInputPeer; user_id: TypeInputUser }) {
    super();
    this.peer = params.peer;
    this.user_id = params.user_id;
  }
}

export class AccountResetPasswordFailedWait
  extends TypeAccountResetPasswordResult {
  retry_date: number;

  protected get [id]() {
    return 0xe3779861;
  }

  protected get [params](): Params {
    return [
      [this.retry_date, "int"],
    ];
  }

  constructor(params: { retry_date: number }) {
    super();
    this.retry_date = params.retry_date;
  }
}

export class AccountResetPasswordRequestedWait
  extends TypeAccountResetPasswordResult {
  until_date: number;

  protected get [id]() {
    return 0xe9effc7d;
  }

  protected get [params](): Params {
    return [
      [this.until_date, "int"],
    ];
  }

  constructor(params: { until_date: number }) {
    super();
    this.until_date = params.until_date;
  }
}

export class AccountResetPasswordOk extends TypeAccountResetPasswordResult {
  protected get [id]() {
    return 0xe926d63e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateBotCommands extends TypeUpdate {
  peer: TypePeer;
  bot_id: bigint;
  commands: Array<TypeBotCommand>;

  protected get [id]() {
    return 0x4d712f2e;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.bot_id, "long"],
      [this.commands, "Vector<BotCommand>"],
    ];
  }

  constructor(
    params: { peer: TypePeer; bot_id: bigint; commands: Array<TypeBotCommand> },
  ) {
    super();
    this.peer = params.peer;
    this.bot_id = params.bot_id;
    this.commands = params.commands;
  }
}

export class MessageActionSetChatTheme extends TypeMessageAction {
  emoticon: string;

  protected get [id]() {
    return 0xaa786345;
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class SendMessageChooseStickerAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0xb05ac6b1;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputStickerSetAnimatedEmojiAnimations
  extends TypeInputStickerSet {
  protected get [id]() {
    return 0x0cde3739;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageEmojiInteraction extends TypeSendMessageAction {
  emoticon: string;
  msg_id: number;
  interaction: TypeDataJSON;

  protected get [id]() {
    return 0x25972bcb;
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string"],
      [this.msg_id, "int"],
      [this.interaction, "DataJSON"],
    ];
  }

  constructor(
    params: { emoticon: string; msg_id: number; interaction: TypeDataJSON },
  ) {
    super();
    this.emoticon = params.emoticon;
    this.msg_id = params.msg_id;
    this.interaction = params.interaction;
  }
}

export class SendMessageEmojiInteractionSeen extends TypeSendMessageAction {
  emoticon: string;

  protected get [id]() {
    return 0xb665902e;
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class InputBotInlineMessageID64 extends TypeInputBotInlineMessageID {
  dc_id: number;
  owner_id: bigint;
  id: number;
  access_hash: bigint;

  protected get [id]() {
    return 0xb6d915d7;
  }

  protected get [params](): Params {
    return [
      [this.dc_id, "int"],
      [this.owner_id, "long"],
      [this.id, "int"],
      [this.access_hash, "long"],
    ];
  }

  constructor(
    params: {
      dc_id: number;
      owner_id: bigint;
      id: number;
      access_hash: bigint;
    },
  ) {
    super();
    this.dc_id = params.dc_id;
    this.owner_id = params.owner_id;
    this.id = params.id;
    this.access_hash = params.access_hash;
  }
}

export class SearchResultPosition extends TypeSearchResultsPosition {
  msg_id: number;
  date: number;
  offset: number;

  protected get [id]() {
    return 0x7f648b67;
  }

  protected get [params](): Params {
    return [
      [this.msg_id, "int"],
      [this.date, "int"],
      [this.offset, "int"],
    ];
  }

  constructor(params: { msg_id: number; date: number; offset: number }) {
    super();
    this.msg_id = params.msg_id;
    this.date = params.date;
    this.offset = params.offset;
  }
}

export class MessageActionChatJoinedByRequest extends TypeMessageAction {
  protected get [id]() {
    return 0xebbca3cb;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdatePendingJoinRequests extends TypeUpdate {
  peer: TypePeer;
  requests_pending: number;
  recent_requesters: Array<bigint>;

  protected get [id]() {
    return 0x7063c3db;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.requests_pending, "int"],
      [this.recent_requesters, "Vector<long>"],
    ];
  }

  constructor(
    params: {
      peer: TypePeer;
      requests_pending: number;
      recent_requesters: Array<bigint>;
    },
  ) {
    super();
    this.peer = params.peer;
    this.requests_pending = params.requests_pending;
    this.recent_requesters = params.recent_requesters;
  }
}

export class UpdateBotChatInviteRequester extends TypeUpdate {
  peer: TypePeer;
  date: number;
  user_id: bigint;
  about: string;
  invite: TypeExportedChatInvite;
  qts: number;

  protected get [id]() {
    return 0x11dfa986;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.date, "int"],
      [this.user_id, "long"],
      [this.about, "string"],
      [this.invite, "ExportedChatInvite"],
      [this.qts, "int"],
    ];
  }

  constructor(
    params: {
      peer: TypePeer;
      date: number;
      user_id: bigint;
      about: string;
      invite: TypeExportedChatInvite;
      qts: number;
    },
  ) {
    super();
    this.peer = params.peer;
    this.date = params.date;
    this.user_id = params.user_id;
    this.about = params.about;
    this.invite = params.invite;
    this.qts = params.qts;
  }
}

export class ChannelAdminLogEventActionParticipantJoinByRequest
  extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;
  approved_by: bigint;

  protected get [id]() {
    return 0xafb6144a;
  }

  protected get [params](): Params {
    return [
      [this.invite, "ExportedChatInvite"],
      [this.approved_by, "long"],
    ];
  }

  constructor(params: { invite: TypeExportedChatInvite; approved_by: bigint }) {
    super();
    this.invite = params.invite;
    this.approved_by = params.approved_by;
  }
}

export class InputKeyboardButtonUserProfile extends TypeKeyboardButton {
  text: string;
  user_id: TypeInputUser;

  protected get [id]() {
    return 0xe988037b;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
      [this.user_id, "InputUser"],
    ];
  }

  constructor(params: { text: string; user_id: TypeInputUser }) {
    super();
    this.text = params.text;
    this.user_id = params.user_id;
  }
}

export class KeyboardButtonUserProfile extends TypeKeyboardButton {
  text: string;
  user_id: bigint;

  protected get [id]() {
    return 0x308660c1;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
      [this.user_id, "long"],
    ];
  }

  constructor(params: { text: string; user_id: bigint }) {
    super();
    this.text = params.text;
    this.user_id = params.user_id;
  }
}

export class ChannelAdminLogEventActionToggleNoForwards
  extends TypeChannelAdminLogEventAction {
  new_value: boolean;

  protected get [id]() {
    return 0xcb2ac766;
  }

  protected get [params](): Params {
    return [
      [this.new_value, "Bool"],
    ];
  }

  constructor(params: { new_value: boolean }) {
    super();
    this.new_value = params.new_value;
  }
}

export class MessagesStickerSetNotModified extends TypeMessagesStickerSet {
  protected get [id]() {
    return 0xd3f924eb;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelAdminLogEventActionSendMessage
  extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x278f2868;
  }

  protected get [params](): Params {
    return [
      [this.message, "Message"],
    ];
  }

  constructor(params: { message: TypeMessage }) {
    super();
    this.message = params.message;
  }
}

export class AuthCodeTypeMissedCall extends TypeAuthCodeType {
  protected get [id]() {
    return 0xd61ad6ee;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AuthSentCodeTypeMissedCall extends TypeAuthSentCodeType {
  prefix: string;
  length: number;

  protected get [id]() {
    return 0x82006484;
  }

  protected get [params](): Params {
    return [
      [this.prefix, "string"],
      [this.length, "int"],
    ];
  }

  constructor(params: { prefix: string; length: number }) {
    super();
    this.prefix = params.prefix;
    this.length = params.length;
  }
}

export class UpdateMessageReactions extends TypeUpdate {
  peer: TypePeer;
  msg_id: number;
  reactions: TypeMessageReactions;

  protected get [id]() {
    return 0x154798c3;
  }

  protected get [params](): Params {
    return [
      [this.peer, "Peer"],
      [this.msg_id, "int"],
      [this.reactions, "MessageReactions"],
    ];
  }

  constructor(
    params: { peer: TypePeer; msg_id: number; reactions: TypeMessageReactions },
  ) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.reactions = params.reactions;
  }
}

export class MessagesAvailableReactionsNotModified
  extends TypeMessagesAvailableReactions {
  protected get [id]() {
    return 0x9f071957;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageEntitySpoiler extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x32ca960f;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class ChannelAdminLogEventActionChangeAvailableReactions
  extends TypeChannelAdminLogEventAction {
  prev_value: TypeChatReactions;
  new_value: TypeChatReactions;

  protected get [id]() {
    return 0xbe4e0ef8;
  }

  protected get [params](): Params {
    return [
      [this.prev_value, "ChatReactions"],
      [this.new_value, "ChatReactions"],
    ];
  }

  constructor(
    params: { prev_value: TypeChatReactions; new_value: TypeChatReactions },
  ) {
    super();
    this.prev_value = params.prev_value;
    this.new_value = params.new_value;
  }
}

export class MessagesTranslateNoResult extends TypeMessagesTranslatedText {
  protected get [id]() {
    return 0x67ca4737;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesTranslateResultText extends TypeMessagesTranslatedText {
  text: string;

  protected get [id]() {
    return 0xa214f7d0;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class InputReportReasonIllegalDrugs extends TypeReportReason {
  protected get [id]() {
    return 0x0a8eb2be;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonPersonalDetails extends TypeReportReason {
  protected get [id]() {
    return 0x9ec7863d;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AttachMenuBotsNotModified extends TypeAttachMenuBots {
  protected get [id]() {
    return 0xf1d88a5c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateAttachMenuBots extends TypeUpdate {
  protected get [id]() {
    return 0x17b7a20b;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class WebViewResultUrl extends TypeWebViewResult {
  query_id: bigint;
  url: string;

  protected get [id]() {
    return 0x0c14557c;
  }

  protected get [params](): Params {
    return [
      [this.query_id, "long"],
      [this.url, "string"],
    ];
  }

  constructor(params: { query_id: bigint; url: string }) {
    super();
    this.query_id = params.query_id;
    this.url = params.url;
  }
}

export class SimpleWebViewResultUrl extends TypeSimpleWebViewResult {
  url: string;

  protected get [id]() {
    return 0x882f76bb;
  }

  protected get [params](): Params {
    return [
      [this.url, "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class UpdateWebViewResultSent extends TypeUpdate {
  query_id: bigint;

  protected get [id]() {
    return 0x1592b79d;
  }

  protected get [params](): Params {
    return [
      [this.query_id, "long"],
    ];
  }

  constructor(params: { query_id: bigint }) {
    super();
    this.query_id = params.query_id;
  }
}

export class KeyboardButtonWebView extends TypeKeyboardButton {
  text: string;
  url: string;

  protected get [id]() {
    return 0x13767230;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
      [this.url, "string"],
    ];
  }

  constructor(params: { text: string; url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class KeyboardButtonSimpleWebView extends TypeKeyboardButton {
  text: string;
  url: string;

  protected get [id]() {
    return 0xa0c0505c;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
      [this.url, "string"],
    ];
  }

  constructor(params: { text: string; url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class MessageActionWebViewDataSentMe extends TypeMessageAction {
  text: string;
  data: string;

  protected get [id]() {
    return 0x47dd8079;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
      [this.data, "string"],
    ];
  }

  constructor(params: { text: string; data: string }) {
    super();
    this.text = params.text;
    this.data = params.data;
  }
}

export class MessageActionWebViewDataSent extends TypeMessageAction {
  text: string;

  protected get [id]() {
    return 0xb4c38cb5;
  }

  protected get [params](): Params {
    return [
      [this.text, "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class UpdateBotMenuButton extends TypeUpdate {
  bot_id: bigint;
  button: TypeBotMenuButton;

  protected get [id]() {
    return 0x14b85813;
  }

  protected get [params](): Params {
    return [
      [this.bot_id, "long"],
      [this.button, "BotMenuButton"],
    ];
  }

  constructor(params: { bot_id: bigint; button: TypeBotMenuButton }) {
    super();
    this.bot_id = params.bot_id;
    this.button = params.button;
  }
}

export class BotMenuButtonDefault extends TypeBotMenuButton {
  protected get [id]() {
    return 0x7533a588;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BotMenuButtonCommands extends TypeBotMenuButton {
  protected get [id]() {
    return 0x4258c205;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AccountSavedRingtonesNotModified
  extends TypeAccountSavedRingtones {
  protected get [id]() {
    return 0xfbf6e8b1;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateSavedRingtones extends TypeUpdate {
  protected get [id]() {
    return 0x74d8be99;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class NotificationSoundDefault extends TypeNotificationSound {
  protected get [id]() {
    return 0x97e8bebe;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class NotificationSoundNone extends TypeNotificationSound {
  protected get [id]() {
    return 0x6f0c34df;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class NotificationSoundLocal extends TypeNotificationSound {
  title: string;
  data: string;

  protected get [id]() {
    return 0x830b9ae4;
  }

  protected get [params](): Params {
    return [
      [this.title, "string"],
      [this.data, "string"],
    ];
  }

  constructor(params: { title: string; data: string }) {
    super();
    this.title = params.title;
    this.data = params.data;
  }
}

export class NotificationSoundRingtone extends TypeNotificationSound {
  id: bigint;

  protected get [id]() {
    return 0xff6c8049;
  }

  protected get [params](): Params {
    return [
      [this.id, "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class AccountSavedRingtoneConverted extends TypeAccountSavedRingtone {
  document: TypeDocument;

  protected get [id]() {
    return 0x1f307eb7;
  }

  protected get [params](): Params {
    return [
      [this.document, "Document"],
    ];
  }

  constructor(params: { document: TypeDocument }) {
    super();
    this.document = params.document;
  }
}

export class AttachMenuPeerTypeSameBotPM extends TypeAttachMenuPeerType {
  protected get [id]() {
    return 0x7d6be90e;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AttachMenuPeerTypeBotPM extends TypeAttachMenuPeerType {
  protected get [id]() {
    return 0xc32bfa1a;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AttachMenuPeerTypePM extends TypeAttachMenuPeerType {
  protected get [id]() {
    return 0xf146d31f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AttachMenuPeerTypeChat extends TypeAttachMenuPeerType {
  protected get [id]() {
    return 0x0509113f;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AttachMenuPeerTypeBroadcast extends TypeAttachMenuPeerType {
  protected get [id]() {
    return 0x7bfbdefc;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChatInvitePublicJoinRequests extends TypeExportedChatInvite {
  protected get [id]() {
    return 0xed107ab7;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputInvoiceMessage extends TypeInputInvoice {
  peer: TypeInputPeer;
  msg_id: number;

  protected get [id]() {
    return 0xc5b56859;
  }

  protected get [params](): Params {
    return [
      [this.peer, "InputPeer"],
      [this.msg_id, "int"],
    ];
  }

  constructor(params: { peer: TypeInputPeer; msg_id: number }) {
    super();
    this.peer = params.peer;
    this.msg_id = params.msg_id;
  }
}

export class InputInvoiceSlug extends TypeInputInvoice {
  slug: string;

  protected get [id]() {
    return 0xc326caef;
  }

  protected get [params](): Params {
    return [
      [this.slug, "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class UpdateTranscribedAudio extends TypeUpdate {
  pending?: true;
  peer: TypePeer;
  msg_id: number;
  transcription_id: bigint;
  text: string;

  protected get [id]() {
    return 0x0084cd5a;
  }

  protected get [params](): Params {
    return [
      [this.pending ?? null, "flags.0?true"],
      [this.peer, "Peer"],
      [this.msg_id, "int"],
      [this.transcription_id, "long"],
      [this.text, "string"],
    ];
  }

  constructor(
    params: {
      pending?: true;
      peer: TypePeer;
      msg_id: number;
      transcription_id: bigint;
      text: string;
    },
  ) {
    super();
    this.pending = params.pending;
    this.peer = params.peer;
    this.msg_id = params.msg_id;
    this.transcription_id = params.transcription_id;
    this.text = params.text;
  }
}

export class DialogFilterDefault extends TypeDialogFilter {
  protected get [id]() {
    return 0x363293ae;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageEntityCustomEmoji extends TypeMessageEntity {
  offset: number;
  length: number;
  document_id: bigint;

  protected get [id]() {
    return 0xc8cf05f8;
  }

  protected get [params](): Params {
    return [
      [this.offset, "int"],
      [this.length, "int"],
      [this.document_id, "long"],
    ];
  }

  constructor(params: { offset: number; length: number; document_id: bigint }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.document_id = params.document_id;
  }
}

export class DocumentAttributeCustomEmoji extends TypeDocumentAttribute {
  free?: true;
  text_color?: true;
  alt: string;
  stickerset: TypeInputStickerSet;

  protected get [id]() {
    return 0xfd149899;
  }

  protected get [params](): Params {
    return [
      [this.free ?? null, "flags.0?true"],
      [this.text_color ?? null, "flags.1?true"],
      [this.alt, "string"],
      [this.stickerset, "InputStickerSet"],
    ];
  }

  constructor(
    params: {
      free?: true;
      text_color?: true;
      alt: string;
      stickerset: TypeInputStickerSet;
    },
  ) {
    super();
    this.free = params.free;
    this.text_color = params.text_color;
    this.alt = params.alt;
    this.stickerset = params.stickerset;
  }
}

export class StickerSetFullCovered extends TypeStickerSetCovered {
  set: TypeStickerSet;
  packs: Array<TypeStickerPack>;
  documents: Array<TypeDocument>;

  protected get [id]() {
    return 0x1aed5ee5;
  }

  protected get [params](): Params {
    return [
      [this.set, "StickerSet"],
      [this.packs, "Vector<StickerPack>"],
      [this.documents, "Vector<Document>"],
    ];
  }

  constructor(
    params: {
      set: TypeStickerSet;
      packs: Array<TypeStickerPack>;
      documents: Array<TypeDocument>;
    },
  ) {
    super();
    this.set = params.set;
    this.packs = params.packs;
    this.documents = params.documents;
  }
}

export class InputStorePaymentPremiumSubscription
  extends TypeInputStorePaymentPurpose {
  restore?: true;
  upgrade?: true;

  protected get [id]() {
    return 0xa6751e66;
  }

  protected get [params](): Params {
    return [
      [this.restore ?? null, "flags.0?true"],
      [this.upgrade ?? null, "flags.1?true"],
    ];
  }

  constructor(params: { restore?: true; upgrade?: true }) {
    super();
    this.restore = params.restore;
    this.upgrade = params.upgrade;
  }
}

export class InputStorePaymentGiftPremium extends TypeInputStorePaymentPurpose {
  user_id: TypeInputUser;
  currency: string;
  amount: bigint;

  protected get [id]() {
    return 0x616f7fe8;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "InputUser"],
      [this.currency, "string"],
      [this.amount, "long"],
    ];
  }

  constructor(
    params: { user_id: TypeInputUser; currency: string; amount: bigint },
  ) {
    super();
    this.user_id = params.user_id;
    this.currency = params.currency;
    this.amount = params.amount;
  }
}

export class MessageActionGiftPremium extends TypeMessageAction {
  currency: string;
  amount: bigint;
  months: number;

  protected get [id]() {
    return 0xaba0f5c6;
  }

  protected get [params](): Params {
    return [
      [this.currency, "string"],
      [this.amount, "long"],
      [this.months, "int"],
    ];
  }

  constructor(params: { currency: string; amount: bigint; months: number }) {
    super();
    this.currency = params.currency;
    this.amount = params.amount;
    this.months = params.months;
  }
}

export class InputStickerSetPremiumGifts extends TypeInputStickerSet {
  protected get [id]() {
    return 0xc88b3b02;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateReadFeaturedEmojiStickers extends TypeUpdate {
  protected get [id]() {
    return 0xfb4c496c;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyKeyVoiceMessages extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xaee69d68;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class PrivacyKeyVoiceMessages extends TypePrivacyKey {
  protected get [id]() {
    return 0x0697f414;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputWebFileAudioAlbumThumbLocation
  extends TypeInputWebFileLocation {
  small?: true;
  document?: TypeInputDocument;
  title?: string;
  performer?: string;

  protected get [id]() {
    return 0xf46fe924;
  }

  protected get [params](): Params {
    return [
      [this.small ?? null, "flags.2?true"],
      [this.document ?? null, "flags.0?InputDocument"],
      [this.title ?? null, "flags.1?string"],
      [this.performer ?? null, "flags.1?string"],
    ];
  }

  constructor(
    params: {
      small?: true;
      document?: TypeInputDocument;
      title?: string;
      performer?: string;
    },
  ) {
    super();
    this.small = params.small;
    this.document = params.document;
    this.title = params.title;
    this.performer = params.performer;
  }
}

export class EmojiStatusEmpty extends TypeEmojiStatus {
  protected get [id]() {
    return 0x2de11aae;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class EmojiStatusUntil extends TypeEmojiStatus {
  document_id: bigint;
  until: number;

  protected get [id]() {
    return 0xfa30a8c7;
  }

  protected get [params](): Params {
    return [
      [this.document_id, "long"],
      [this.until, "int"],
    ];
  }

  constructor(params: { document_id: bigint; until: number }) {
    super();
    this.document_id = params.document_id;
    this.until = params.until;
  }
}

export class UpdateUserEmojiStatus extends TypeUpdate {
  user_id: bigint;
  emoji_status: TypeEmojiStatus;

  protected get [id]() {
    return 0x28373599;
  }

  protected get [params](): Params {
    return [
      [this.user_id, "long"],
      [this.emoji_status, "EmojiStatus"],
    ];
  }

  constructor(params: { user_id: bigint; emoji_status: TypeEmojiStatus }) {
    super();
    this.user_id = params.user_id;
    this.emoji_status = params.emoji_status;
  }
}

export class UpdateRecentEmojiStatuses extends TypeUpdate {
  protected get [id]() {
    return 0x30f443db;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AccountEmojiStatusesNotModified extends TypeAccountEmojiStatuses {
  protected get [id]() {
    return 0xd08ce645;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ReactionEmpty extends TypeReaction {
  protected get [id]() {
    return 0x79f5d419;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ReactionEmoji extends TypeReaction {
  emoticon: string;

  protected get [id]() {
    return 0x1b2286b8;
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class ReactionCustomEmoji extends TypeReaction {
  document_id: bigint;

  protected get [id]() {
    return 0x8935fc73;
  }

  protected get [params](): Params {
    return [
      [this.document_id, "long"],
    ];
  }

  constructor(params: { document_id: bigint }) {
    super();
    this.document_id = params.document_id;
  }
}

export class ChatReactionsNone extends TypeChatReactions {
  protected get [id]() {
    return 0xeafc32bc;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChatReactionsAll extends TypeChatReactions {
  allow_custom?: true;

  protected get [id]() {
    return 0x52928bca;
  }

  protected get [params](): Params {
    return [
      [this.allow_custom ?? null, "flags.0?true"],
    ];
  }

  constructor(params: { allow_custom?: true }) {
    super();
    this.allow_custom = params.allow_custom;
  }
}

export class ChatReactionsSome extends TypeChatReactions {
  reactions: Array<TypeReaction>;

  protected get [id]() {
    return 0x661d4037;
  }

  protected get [params](): Params {
    return [
      [this.reactions, "Vector<Reaction>"],
    ];
  }

  constructor(params: { reactions: Array<TypeReaction> }) {
    super();
    this.reactions = params.reactions;
  }
}

export class MessagesReactionsNotModified extends TypeMessagesReactions {
  protected get [id]() {
    return 0xb06fdbdf;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateRecentReactions extends TypeUpdate {
  protected get [id]() {
    return 0x6f7863f4;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateMoveStickerSetToTop extends TypeUpdate {
  masks?: true;
  emojis?: true;
  stickerset: bigint;

  protected get [id]() {
    return 0x86fccf85;
  }

  protected get [params](): Params {
    return [
      [this.masks ?? null, "flags.0?true"],
      [this.emojis ?? null, "flags.1?true"],
      [this.stickerset, "long"],
    ];
  }

  constructor(params: { masks?: true; emojis?: true; stickerset: bigint }) {
    super();
    this.masks = params.masks;
    this.emojis = params.emojis;
    this.stickerset = params.stickerset;
  }
}

export class AuthSentCodeTypeEmailCode extends TypeAuthSentCodeType {
  apple_signin_allowed?: true;
  google_signin_allowed?: true;
  email_pattern: string;
  length: number;
  next_phone_login_date?: number;

  protected get [id]() {
    return 0x5a159841;
  }

  protected get [params](): Params {
    return [
      [this.apple_signin_allowed ?? null, "flags.0?true"],
      [this.google_signin_allowed ?? null, "flags.1?true"],
      [this.email_pattern, "string"],
      [this.length, "int"],
      [this.next_phone_login_date ?? null, "flags.2?int"],
    ];
  }

  constructor(
    params: {
      apple_signin_allowed?: true;
      google_signin_allowed?: true;
      email_pattern: string;
      length: number;
      next_phone_login_date?: number;
    },
  ) {
    super();
    this.apple_signin_allowed = params.apple_signin_allowed;
    this.google_signin_allowed = params.google_signin_allowed;
    this.email_pattern = params.email_pattern;
    this.length = params.length;
    this.next_phone_login_date = params.next_phone_login_date;
  }
}

export class AuthSentCodeTypeSetUpEmailRequired extends TypeAuthSentCodeType {
  apple_signin_allowed?: true;
  google_signin_allowed?: true;

  protected get [id]() {
    return 0xa5491dea;
  }

  protected get [params](): Params {
    return [
      [this.apple_signin_allowed ?? null, "flags.0?true"],
      [this.google_signin_allowed ?? null, "flags.1?true"],
    ];
  }

  constructor(
    params: { apple_signin_allowed?: true; google_signin_allowed?: true },
  ) {
    super();
    this.apple_signin_allowed = params.apple_signin_allowed;
    this.google_signin_allowed = params.google_signin_allowed;
  }
}

export class EmailVerifyPurposeLoginSetup extends TypeEmailVerifyPurpose {
  phone_number: string;
  phone_code_hash: string;

  protected get [id]() {
    return 0x4345be73;
  }

  protected get [params](): Params {
    return [
      [this.phone_number, "string"],
      [this.phone_code_hash, "string"],
    ];
  }

  constructor(params: { phone_number: string; phone_code_hash: string }) {
    super();
    this.phone_number = params.phone_number;
    this.phone_code_hash = params.phone_code_hash;
  }
}

export class EmailVerifyPurposeLoginChange extends TypeEmailVerifyPurpose {
  protected get [id]() {
    return 0x527d22eb;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class EmailVerifyPurposePassport extends TypeEmailVerifyPurpose {
  protected get [id]() {
    return 0xbbf51685;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class EmailVerificationCode extends TypeEmailVerification {
  code: string;

  protected get [id]() {
    return 0x922e55a9;
  }

  protected get [params](): Params {
    return [
      [this.code, "string"],
    ];
  }

  constructor(params: { code: string }) {
    super();
    this.code = params.code;
  }
}

export class EmailVerificationGoogle extends TypeEmailVerification {
  token: string;

  protected get [id]() {
    return 0xdb909ec2;
  }

  protected get [params](): Params {
    return [
      [this.token, "string"],
    ];
  }

  constructor(params: { token: string }) {
    super();
    this.token = params.token;
  }
}

export class EmailVerificationApple extends TypeEmailVerification {
  token: string;

  protected get [id]() {
    return 0x96d074fd;
  }

  protected get [params](): Params {
    return [
      [this.token, "string"],
    ];
  }

  constructor(params: { token: string }) {
    super();
    this.token = params.token;
  }
}

export class AccountEmailVerifiedLogin extends TypeAccountEmailVerified {
  email: string;
  sent_code: TypeAuthSentCode;

  protected get [id]() {
    return 0xe1bb0d61;
  }

  protected get [params](): Params {
    return [
      [this.email, "string"],
      [this.sent_code, "auth.SentCode"],
    ];
  }

  constructor(params: { email: string; sent_code: TypeAuthSentCode }) {
    super();
    this.email = params.email;
    this.sent_code = params.sent_code;
  }
}

export class InputStickerSetEmojiGenericAnimations extends TypeInputStickerSet {
  protected get [id]() {
    return 0x04c4d4ce;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputStickerSetEmojiDefaultStatuses extends TypeInputStickerSet {
  protected get [id]() {
    return 0x29d0f5ee;
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}
