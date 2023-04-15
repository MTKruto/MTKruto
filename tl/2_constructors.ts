import {
  flags,
  id,
  ParamDesc,
  paramDesc,
  Params,
  params,
  TLObject,
  TLObjectConstructor,
} from "./1_tl_object.ts";

export abstract class Constructor extends TLObject {
}

// Uknown type
export abstract class TypeX extends Constructor {}

export abstract class TypeResPQ extends Constructor {
}

export abstract class TypePQInnerData extends Constructor {
}

export abstract class TypeServerDHParams extends Constructor {
}

export abstract class TypeServerDHInnerData extends Constructor {
}

export abstract class TypeClientDHInnerData extends Constructor {
}

export abstract class TypeSetClientDHParamsAnswer extends Constructor {
}

export abstract class TypeBindAuthKeyInner extends Constructor {
}

export abstract class TypeRpcError extends Constructor {
}

export abstract class TypeRpcDropAnswer extends Constructor {
}

export abstract class TypeFutureSalt extends Constructor {
}

export abstract class TypeFutureSalts extends Constructor {
}

export abstract class TypePong extends Constructor {
}

export abstract class TypeDestroySessionRes extends Constructor {
}

export abstract class TypeNewSession extends Constructor {
}

export abstract class TypeMsgsAck extends Constructor {
}

export abstract class TypeBadMsgNotification extends Constructor {
}

export abstract class TypeMsgResendReq extends Constructor {
}

export abstract class TypeMsgsStateReq extends Constructor {
}

export abstract class TypeMsgsStateInfo extends Constructor {
}

export abstract class TypeMsgsAllInfo extends Constructor {
}

export abstract class TypeMsgDetailedInfo extends Constructor {
}

export abstract class TypeDestroyAuthKeyRes extends Constructor {
}

export abstract class TypeHttpWait extends Constructor {
}

export abstract class TypeTrue extends Constructor {
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

export abstract class TypeMessageExtendedMedia extends Constructor {
}

export abstract class TypeStickerKeyword extends Constructor {
}

export abstract class TypeUsername extends Constructor {
}

export abstract class TypeForumTopic extends Constructor {
}

export abstract class TypeMessagesForumTopics extends Constructor {
}

export abstract class TypeDefaultHistoryTTL extends Constructor {
}

export abstract class TypeExportedContactToken extends Constructor {
}

export abstract class TypeRequestPeerType extends Constructor {
}

export abstract class TypeEmojiList extends Constructor {
}

export abstract class TypeEmojiGroup extends Constructor {
}

export abstract class TypeMessagesEmojiGroups extends Constructor {
}

export abstract class TypeTextWithEntities extends Constructor {
}

export abstract class TypeMessagesTranslatedText extends Constructor {
}

export abstract class TypeAutoSaveSettings extends Constructor {
}

export abstract class TypeAutoSaveException extends Constructor {
}

export abstract class TypeAccountAutoSaveSettings extends Constructor {
}

export abstract class TypeHelpAppConfig extends Constructor {
}

export abstract class TypeInputBotApp extends Constructor {
}

export abstract class TypeBotApp extends Constructor {
}

export abstract class TypeMessagesBotApp extends Constructor {
}

export abstract class TypeAppWebViewResult extends Constructor {
}

export abstract class TypeInlineBotWebView extends Constructor {
}

export abstract class TypeReadParticipantDate extends Constructor {
}

export class ResPQ extends Constructor {
  nonce: bigint;
  serverNonce: bigint;
  pq: Uint8Array;
  serverPublicKeyFingerprints: Array<bigint>;

  protected get [id]() {
    return 0x05162463;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["pq", Uint8Array, "bytes"],
      ["serverPublicKeyFingerprints", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.pq, Uint8Array, "bytes"],
      [this.serverPublicKeyFingerprints, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(
    params: {
      nonce: bigint;
      serverNonce: bigint;
      pq: Uint8Array;
      serverPublicKeyFingerprints: Array<bigint>;
    },
  ) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.pq = params.pq;
    this.serverPublicKeyFingerprints = params.serverPublicKeyFingerprints;
  }
}

export class PQInnerDataDc extends TypePQInnerData {
  pq: Uint8Array;
  p: Uint8Array;
  q: Uint8Array;
  nonce: bigint;
  serverNonce: bigint;
  newNonce: bigint;
  dc: number;

  protected get [id]() {
    return 0xa9f55f95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pq", Uint8Array, "bytes"],
      ["p", Uint8Array, "bytes"],
      ["q", Uint8Array, "bytes"],
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["newNonce", "bigint", "int256"],
      ["dc", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pq, Uint8Array, "bytes"],
      [this.p, Uint8Array, "bytes"],
      [this.q, Uint8Array, "bytes"],
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.newNonce, "bigint", "int256"],
      [this.dc, "number", "int"],
    ];
  }

  constructor(
    params: {
      pq: Uint8Array;
      p: Uint8Array;
      q: Uint8Array;
      nonce: bigint;
      serverNonce: bigint;
      newNonce: bigint;
      dc: number;
    },
  ) {
    super();
    this.pq = params.pq;
    this.p = params.p;
    this.q = params.q;
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.newNonce = params.newNonce;
    this.dc = params.dc;
  }
}

export class PQInnerDataTempDc extends TypePQInnerData {
  pq: Uint8Array;
  p: Uint8Array;
  q: Uint8Array;
  nonce: bigint;
  serverNonce: bigint;
  newNonce: bigint;
  dc: number;
  expiresIn: number;

  protected get [id]() {
    return 0x56fddf88;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pq", Uint8Array, "bytes"],
      ["p", Uint8Array, "bytes"],
      ["q", Uint8Array, "bytes"],
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["newNonce", "bigint", "int256"],
      ["dc", "number", "int"],
      ["expiresIn", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pq, Uint8Array, "bytes"],
      [this.p, Uint8Array, "bytes"],
      [this.q, Uint8Array, "bytes"],
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.newNonce, "bigint", "int256"],
      [this.dc, "number", "int"],
      [this.expiresIn, "number", "int"],
    ];
  }

  constructor(
    params: {
      pq: Uint8Array;
      p: Uint8Array;
      q: Uint8Array;
      nonce: bigint;
      serverNonce: bigint;
      newNonce: bigint;
      dc: number;
      expiresIn: number;
    },
  ) {
    super();
    this.pq = params.pq;
    this.p = params.p;
    this.q = params.q;
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.newNonce = params.newNonce;
    this.dc = params.dc;
    this.expiresIn = params.expiresIn;
  }
}

export class ServerDHParamsOk extends TypeServerDHParams {
  nonce: bigint;
  serverNonce: bigint;
  encryptedAnswer: Uint8Array;

  protected get [id]() {
    return 0xd0e8075c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["encryptedAnswer", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.encryptedAnswer, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: { nonce: bigint; serverNonce: bigint; encryptedAnswer: Uint8Array },
  ) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.encryptedAnswer = params.encryptedAnswer;
  }
}

export class ServerDHInnerData extends Constructor {
  nonce: bigint;
  serverNonce: bigint;
  g: number;
  dhPrime: Uint8Array;
  gA: Uint8Array;
  serverTime: number;

  protected get [id]() {
    return 0xb5890dba;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["g", "number", "int"],
      ["dhPrime", Uint8Array, "bytes"],
      ["gA", Uint8Array, "bytes"],
      ["serverTime", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.g, "number", "int"],
      [this.dhPrime, Uint8Array, "bytes"],
      [this.gA, Uint8Array, "bytes"],
      [this.serverTime, "number", "int"],
    ];
  }

  constructor(
    params: {
      nonce: bigint;
      serverNonce: bigint;
      g: number;
      dhPrime: Uint8Array;
      gA: Uint8Array;
      serverTime: number;
    },
  ) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.g = params.g;
    this.dhPrime = params.dhPrime;
    this.gA = params.gA;
    this.serverTime = params.serverTime;
  }
}

export class ClientDHInnerData extends Constructor {
  nonce: bigint;
  serverNonce: bigint;
  retryId: bigint;
  gB: Uint8Array;

  protected get [id]() {
    return 0x6643b654;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["retryId", "bigint", "long"],
      ["gB", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.retryId, "bigint", "long"],
      [this.gB, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      nonce: bigint;
      serverNonce: bigint;
      retryId: bigint;
      gB: Uint8Array;
    },
  ) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.retryId = params.retryId;
    this.gB = params.gB;
  }
}

export class DhGenOk extends TypeSetClientDHParamsAnswer {
  nonce: bigint;
  serverNonce: bigint;
  newNonceHash1: bigint;

  protected get [id]() {
    return 0x3bcbf734;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["newNonceHash1", "bigint", "int128"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.newNonceHash1, "bigint", "int128"],
    ];
  }

  constructor(
    params: { nonce: bigint; serverNonce: bigint; newNonceHash1: bigint },
  ) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.newNonceHash1 = params.newNonceHash1;
  }
}

export class DhGenRetry extends TypeSetClientDHParamsAnswer {
  nonce: bigint;
  serverNonce: bigint;
  newNonceHash2: bigint;

  protected get [id]() {
    return 0x46dc1fb9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["newNonceHash2", "bigint", "int128"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.newNonceHash2, "bigint", "int128"],
    ];
  }

  constructor(
    params: { nonce: bigint; serverNonce: bigint; newNonceHash2: bigint },
  ) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.newNonceHash2 = params.newNonceHash2;
  }
}

export class DhGenFail extends TypeSetClientDHParamsAnswer {
  nonce: bigint;
  serverNonce: bigint;
  newNonceHash3: bigint;

  protected get [id]() {
    return 0xa69dae02;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "int128"],
      ["serverNonce", "bigint", "int128"],
      ["newNonceHash3", "bigint", "int128"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "int128"],
      [this.serverNonce, "bigint", "int128"],
      [this.newNonceHash3, "bigint", "int128"],
    ];
  }

  constructor(
    params: { nonce: bigint; serverNonce: bigint; newNonceHash3: bigint },
  ) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.newNonceHash3 = params.newNonceHash3;
  }
}

export class BindAuthKeyInner extends TypeBindAuthKeyInner {
  nonce: bigint;
  tempAuthKeyId: bigint;
  permAuthKeyId: bigint;
  tempSessionId: bigint;
  expiresAt: number;

  protected get [id]() {
    return 0x75a3f765;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["nonce", "bigint", "long"],
      ["tempAuthKeyId", "bigint", "long"],
      ["permAuthKeyId", "bigint", "long"],
      ["tempSessionId", "bigint", "long"],
      ["expiresAt", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.nonce, "bigint", "long"],
      [this.tempAuthKeyId, "bigint", "long"],
      [this.permAuthKeyId, "bigint", "long"],
      [this.tempSessionId, "bigint", "long"],
      [this.expiresAt, "number", "int"],
    ];
  }

  constructor(
    params: {
      nonce: bigint;
      tempAuthKeyId: bigint;
      permAuthKeyId: bigint;
      tempSessionId: bigint;
      expiresAt: number;
    },
  ) {
    super();
    this.nonce = params.nonce;
    this.tempAuthKeyId = params.tempAuthKeyId;
    this.permAuthKeyId = params.permAuthKeyId;
    this.tempSessionId = params.tempSessionId;
    this.expiresAt = params.expiresAt;
  }
}

export class RpcError extends TypeRpcError {
  errorCode: number;
  errorMessage: string;

  protected get [id]() {
    return 0x2144ca19;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["errorCode", "number", "int"],
      ["errorMessage", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.errorCode, "number", "int"],
      [this.errorMessage, "string", "string"],
    ];
  }

  constructor(params: { errorCode: number; errorMessage: string }) {
    super();
    this.errorCode = params.errorCode;
    this.errorMessage = params.errorMessage;
  }
}

export class RpcAnswerUnknown extends TypeRpcDropAnswer {
  protected get [id]() {
    return 0x5e2ad36e;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class RpcAnswerDroppedRunning extends TypeRpcDropAnswer {
  protected get [id]() {
    return 0xcd78e586;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class RpcAnswerDropped extends TypeRpcDropAnswer {
  msgId: bigint;
  seqNo: number;
  bytes: number;

  protected get [id]() {
    return 0xa43ad8b7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgId", "bigint", "long"],
      ["seqNo", "number", "int"],
      ["bytes", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgId, "bigint", "long"],
      [this.seqNo, "number", "int"],
      [this.bytes, "number", "int"],
    ];
  }

  constructor(params: { msgId: bigint; seqNo: number; bytes: number }) {
    super();
    this.msgId = params.msgId;
    this.seqNo = params.seqNo;
    this.bytes = params.bytes;
  }
}

export class FutureSalt extends TypeFutureSalt {
  validSince: number;
  validUntil: number;
  salt: bigint;

  protected get [id]() {
    return 0x0949d9dc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["validSince", "number", "int"],
      ["validUntil", "number", "int"],
      ["salt", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.validSince, "number", "int"],
      [this.validUntil, "number", "int"],
      [this.salt, "bigint", "long"],
    ];
  }

  constructor(
    params: { validSince: number; validUntil: number; salt: bigint },
  ) {
    super();
    this.validSince = params.validSince;
    this.validUntil = params.validUntil;
    this.salt = params.salt;
  }
}

export class FutureSalts extends TypeFutureSalts {
  reqMsgId: bigint;
  now: number;
  salts: Array<TypeFutureSalt>;

  protected get [id]() {
    return 0xae500895;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["reqMsgId", "bigint", "long"],
      ["now", "number", "int"],
      ["salts", [TypeFutureSalt], "vector<future_salt>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.reqMsgId, "bigint", "long"],
      [this.now, "number", "int"],
      [this.salts, [TypeFutureSalt], "vector<future_salt>"],
    ];
  }

  constructor(
    params: { reqMsgId: bigint; now: number; salts: Array<TypeFutureSalt> },
  ) {
    super();
    this.reqMsgId = params.reqMsgId;
    this.now = params.now;
    this.salts = params.salts;
  }
}

export class Pong extends Constructor {
  msgId: bigint;
  pingId: bigint;

  protected get [id]() {
    return 0x347773c5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgId", "bigint", "long"],
      ["pingId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgId, "bigint", "long"],
      [this.pingId, "bigint", "long"],
    ];
  }

  constructor(params: { msgId: bigint; pingId: bigint }) {
    super();
    this.msgId = params.msgId;
    this.pingId = params.pingId;
  }
}

export class DestroySessionOk extends TypeDestroySessionRes {
  sessionId: bigint;

  protected get [id]() {
    return 0xe22045fc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sessionId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sessionId, "bigint", "long"],
    ];
  }

  constructor(params: { sessionId: bigint }) {
    super();
    this.sessionId = params.sessionId;
  }
}

export class DestroySessionNone extends TypeDestroySessionRes {
  sessionId: bigint;

  protected get [id]() {
    return 0x62d350c9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["sessionId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sessionId, "bigint", "long"],
    ];
  }

  constructor(params: { sessionId: bigint }) {
    super();
    this.sessionId = params.sessionId;
  }
}

export class NewSessionCreated extends TypeNewSession {
  firstMsgId: bigint;
  uniqueId: bigint;
  serverSalt: bigint;

  protected get [id]() {
    return 0x9ec20908;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["firstMsgId", "bigint", "long"],
      ["uniqueId", "bigint", "long"],
      ["serverSalt", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.firstMsgId, "bigint", "long"],
      [this.uniqueId, "bigint", "long"],
      [this.serverSalt, "bigint", "long"],
    ];
  }

  constructor(
    params: { firstMsgId: bigint; uniqueId: bigint; serverSalt: bigint },
  ) {
    super();
    this.firstMsgId = params.firstMsgId;
    this.uniqueId = params.uniqueId;
    this.serverSalt = params.serverSalt;
  }
}

export class MsgsAck extends TypeMsgsAck {
  msgIds: Array<bigint>;

  protected get [id]() {
    return 0x62d6b459;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgIds", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgIds, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { msgIds: Array<bigint> }) {
    super();
    this.msgIds = params.msgIds;
  }
}

export class BadMsgNotification extends TypeBadMsgNotification {
  badMsgId: bigint;
  badMsgSeqno: number;
  errorCode: number;

  protected get [id]() {
    return 0xa7eff811;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["badMsgId", "bigint", "long"],
      ["badMsgSeqno", "number", "int"],
      ["errorCode", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.badMsgId, "bigint", "long"],
      [this.badMsgSeqno, "number", "int"],
      [this.errorCode, "number", "int"],
    ];
  }

  constructor(
    params: { badMsgId: bigint; badMsgSeqno: number; errorCode: number },
  ) {
    super();
    this.badMsgId = params.badMsgId;
    this.badMsgSeqno = params.badMsgSeqno;
    this.errorCode = params.errorCode;
  }
}

export class BadServerSalt extends TypeBadMsgNotification {
  badMsgId: bigint;
  badMsgSeqno: number;
  errorCode: number;
  newServerSalt: bigint;

  protected get [id]() {
    return 0xedab447b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["badMsgId", "bigint", "long"],
      ["badMsgSeqno", "number", "int"],
      ["errorCode", "number", "int"],
      ["newServerSalt", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.badMsgId, "bigint", "long"],
      [this.badMsgSeqno, "number", "int"],
      [this.errorCode, "number", "int"],
      [this.newServerSalt, "bigint", "long"],
    ];
  }

  constructor(
    params: {
      badMsgId: bigint;
      badMsgSeqno: number;
      errorCode: number;
      newServerSalt: bigint;
    },
  ) {
    super();
    this.badMsgId = params.badMsgId;
    this.badMsgSeqno = params.badMsgSeqno;
    this.errorCode = params.errorCode;
    this.newServerSalt = params.newServerSalt;
  }
}

export class MsgResendReq extends TypeMsgResendReq {
  msgIds: Array<bigint>;

  protected get [id]() {
    return 0x7d861a08;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgIds", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgIds, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { msgIds: Array<bigint> }) {
    super();
    this.msgIds = params.msgIds;
  }
}

export class MsgsStateReq extends TypeMsgsStateReq {
  msgIds: Array<bigint>;

  protected get [id]() {
    return 0xda69fb52;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgIds", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgIds, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { msgIds: Array<bigint> }) {
    super();
    this.msgIds = params.msgIds;
  }
}

export class MsgsStateInfo extends TypeMsgsStateInfo {
  reqMsgId: bigint;
  info: Uint8Array;

  protected get [id]() {
    return 0x04deb57d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["reqMsgId", "bigint", "long"],
      ["info", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.reqMsgId, "bigint", "long"],
      [this.info, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { reqMsgId: bigint; info: Uint8Array }) {
    super();
    this.reqMsgId = params.reqMsgId;
    this.info = params.info;
  }
}

export class MsgsAllInfo extends TypeMsgsAllInfo {
  msgIds: Array<bigint>;
  info: Uint8Array;

  protected get [id]() {
    return 0x8cc0d131;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgIds", ["bigint"], "Vector<long>"],
      ["info", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgIds, ["bigint"], "Vector<long>"],
      [this.info, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { msgIds: Array<bigint>; info: Uint8Array }) {
    super();
    this.msgIds = params.msgIds;
    this.info = params.info;
  }
}

export class MsgDetailedInfo extends TypeMsgDetailedInfo {
  msgId: bigint;
  answerMsgId: bigint;
  bytes: number;
  status: number;

  protected get [id]() {
    return 0x276d3ec6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgId", "bigint", "long"],
      ["answerMsgId", "bigint", "long"],
      ["bytes", "number", "int"],
      ["status", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgId, "bigint", "long"],
      [this.answerMsgId, "bigint", "long"],
      [this.bytes, "number", "int"],
      [this.status, "number", "int"],
    ];
  }

  constructor(
    params: {
      msgId: bigint;
      answerMsgId: bigint;
      bytes: number;
      status: number;
    },
  ) {
    super();
    this.msgId = params.msgId;
    this.answerMsgId = params.answerMsgId;
    this.bytes = params.bytes;
    this.status = params.status;
  }
}

export class MsgNewDetailedInfo extends TypeMsgDetailedInfo {
  answerMsgId: bigint;
  bytes: number;
  status: number;

  protected get [id]() {
    return 0x809db6df;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["answerMsgId", "bigint", "long"],
      ["bytes", "number", "int"],
      ["status", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.answerMsgId, "bigint", "long"],
      [this.bytes, "number", "int"],
      [this.status, "number", "int"],
    ];
  }

  constructor(params: { answerMsgId: bigint; bytes: number; status: number }) {
    super();
    this.answerMsgId = params.answerMsgId;
    this.bytes = params.bytes;
    this.status = params.status;
  }
}

export class DestroyAuthKeyOk extends TypeDestroyAuthKeyRes {
  protected get [id]() {
    return 0xf660e1d4;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class DestroyAuthKeyNone extends TypeDestroyAuthKeyRes {
  protected get [id]() {
    return 0x0a9f2259;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class DestroyAuthKeyFail extends TypeDestroyAuthKeyRes {
  protected get [id]() {
    return 0xea109b13;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class HttpWait extends TypeHttpWait {
  maxDelay: number;
  waitAfter: number;
  maxWait: number;

  protected get [id]() {
    return 0x9299359f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["maxDelay", "number", "int"],
      ["waitAfter", "number", "int"],
      ["maxWait", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.maxDelay, "number", "int"],
      [this.waitAfter, "number", "int"],
      [this.maxWait, "number", "int"],
    ];
  }

  constructor(
    params: { maxDelay: number; waitAfter: number; maxWait: number },
  ) {
    super();
    this.maxDelay = params.maxDelay;
    this.waitAfter = params.waitAfter;
    this.maxWait = params.maxWait;
  }
}

export class True extends Constructor {
  protected get [id]() {
    return 0x3fedd339;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class Error extends Constructor {
  code: number;
  text: string;

  protected get [id]() {
    return 0xc4b9f9bb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["code", "number", "int"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.code, "number", "int"],
      [this.text, "string", "string"],
    ];
  }

  constructor(params: { code: number; text: string }) {
    super();
    this.code = params.code;
    this.text = params.text;
  }
}

export class Null extends Constructor {
  protected get [id]() {
    return 0x56730bcc;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPeerEmpty extends TypeInputPeer {
  protected get [id]() {
    return 0x7f3b18ea;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPeerChat extends TypeInputPeer {
  chatId: bigint;

  protected get [id]() {
    return 0x35a95cb9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
    ];
  }

  constructor(params: { chatId: bigint }) {
    super();
    this.chatId = params.chatId;
  }
}

export class InputPeerUser extends TypeInputPeer {
  userId: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xdde8a54c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { userId: bigint; accessHash: bigint }) {
    super();
    this.userId = params.userId;
    this.accessHash = params.accessHash;
  }
}

export class InputPeerChannel extends TypeInputPeer {
  channelId: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x27bcbbfc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { channelId: bigint; accessHash: bigint }) {
    super();
    this.channelId = params.channelId;
    this.accessHash = params.accessHash;
  }
}

export class InputPeerUserFromMessage extends TypeInputPeer {
  peer: TypeInputPeer;
  msgId: number;
  userId: bigint;

  protected get [id]() {
    return 0xa87b0a1c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { peer: TypeInputPeer; msgId: number; userId: bigint }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.userId = params.userId;
  }
}

export class InputPeerChannelFromMessage extends TypeInputPeer {
  peer: TypeInputPeer;
  msgId: number;
  channelId: bigint;

  protected get [id]() {
    return 0xbd2a0840;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["channelId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.channelId, "bigint", "long"],
    ];
  }

  constructor(
    params: { peer: TypeInputPeer; msgId: number; channelId: bigint },
  ) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.channelId = params.channelId;
  }
}

export class InputUserEmpty extends TypeInputUser {
  protected get [id]() {
    return 0xb98886cf;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputUser extends Constructor {
  userId: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xf21158c6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { userId: bigint; accessHash: bigint }) {
    super();
    this.userId = params.userId;
    this.accessHash = params.accessHash;
  }
}

export class InputUserFromMessage extends TypeInputUser {
  peer: TypeInputPeer;
  msgId: number;
  userId: bigint;

  protected get [id]() {
    return 0x1da448e2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { peer: TypeInputPeer; msgId: number; userId: bigint }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.userId = params.userId;
  }
}

export class InputPhoneContact extends TypeInputContact {
  clientId: bigint;
  phone: string;
  firstName: string;
  lastName: string;

  protected get [id]() {
    return 0xf392b7f4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["clientId", "bigint", "long"],
      ["phone", "string", "string"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.clientId, "bigint", "long"],
      [this.phone, "string", "string"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
    ];
  }

  constructor(
    params: {
      clientId: bigint;
      phone: string;
      firstName: string;
      lastName: string;
    },
  ) {
    super();
    this.clientId = params.clientId;
    this.phone = params.phone;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }
}

export class InputFile extends Constructor {
  id: bigint;
  parts: number;
  name: string;
  md5Checksum: string;

  protected get [id]() {
    return 0xf52ff27f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["parts", "number", "int"],
      ["name", "string", "string"],
      ["md5Checksum", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.parts, "number", "int"],
      [this.name, "string", "string"],
      [this.md5Checksum, "string", "string"],
    ];
  }

  constructor(
    params: { id: bigint; parts: number; name: string; md5Checksum: string },
  ) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.name = params.name;
    this.md5Checksum = params.md5Checksum;
  }
}

export class InputFileBig extends TypeInputFile {
  id: bigint;
  parts: number;
  name: string;

  protected get [id]() {
    return 0xfa4f0bb5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["parts", "number", "int"],
      ["name", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.parts, "number", "int"],
      [this.name, "string", "string"],
    ];
  }

  constructor(params: { id: bigint; parts: number; name: string }) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.name = params.name;
  }
}

export class InputMediaEmpty extends TypeInputMedia {
  protected get [id]() {
    return 0x9664f57f;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMediaUploadedPhoto extends TypeInputMedia {
  spoiler?: true;
  file: TypeInputFile;
  stickers?: Array<TypeInputDocument>;
  ttlSeconds?: number;

  protected get [id]() {
    return 0x1e287d04;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["spoiler", "true", "flags.2?true"],
      ["file", TypeInputFile, "InputFile"],
      ["stickers", [TypeInputDocument], "flags.0?Vector<InputDocument>"],
      ["ttlSeconds", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.spoiler ?? null, "true", "flags.2?true"],
      [this.file, TypeInputFile, "InputFile"],
      [
        this.stickers ?? null,
        [TypeInputDocument],
        "flags.0?Vector<InputDocument>",
      ],
      [this.ttlSeconds ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(
    params: {
      spoiler?: true;
      file: TypeInputFile;
      stickers?: Array<TypeInputDocument>;
      ttlSeconds?: number;
    },
  ) {
    super();
    this.spoiler = params.spoiler;
    this.file = params.file;
    this.stickers = params.stickers;
    this.ttlSeconds = params.ttlSeconds;
  }
}

export class InputMediaPhoto extends TypeInputMedia {
  spoiler?: true;
  id: TypeInputPhoto;
  ttlSeconds?: number;

  protected get [id]() {
    return 0xb3ba0635;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["spoiler", "true", "flags.1?true"],
      ["id", TypeInputPhoto, "InputPhoto"],
      ["ttlSeconds", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.spoiler ?? null, "true", "flags.1?true"],
      [this.id, TypeInputPhoto, "InputPhoto"],
      [this.ttlSeconds ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(
    params: { spoiler?: true; id: TypeInputPhoto; ttlSeconds?: number },
  ) {
    super();
    this.spoiler = params.spoiler;
    this.id = params.id;
    this.ttlSeconds = params.ttlSeconds;
  }
}

export class InputMediaGeoPoint extends TypeInputMedia {
  geoPoint: TypeInputGeoPoint;

  protected get [id]() {
    return 0xf9c44144;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["geoPoint", TypeInputGeoPoint, "InputGeoPoint"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.geoPoint, TypeInputGeoPoint, "InputGeoPoint"],
    ];
  }

  constructor(params: { geoPoint: TypeInputGeoPoint }) {
    super();
    this.geoPoint = params.geoPoint;
  }
}

export class InputMediaContact extends TypeInputMedia {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  vcard: string;

  protected get [id]() {
    return 0xf8ab7dfb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
      ["vcard", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
      [this.vcard, "string", "string"],
    ];
  }

  constructor(
    params: {
      phoneNumber: string;
      firstName: string;
      lastName: string;
      vcard: string;
    },
  ) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.vcard = params.vcard;
  }
}

export class InputMediaUploadedDocument extends TypeInputMedia {
  nosoundVideo?: true;
  forceFile?: true;
  spoiler?: true;
  file: TypeInputFile;
  thumb?: TypeInputFile;
  mimeType: string;
  attributes: Array<TypeDocumentAttribute>;
  stickers?: Array<TypeInputDocument>;
  ttlSeconds?: number;

  protected get [id]() {
    return 0x5b38c6c1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["nosoundVideo", "true", "flags.3?true"],
      ["forceFile", "true", "flags.4?true"],
      ["spoiler", "true", "flags.5?true"],
      ["file", TypeInputFile, "InputFile"],
      ["thumb", TypeInputFile, "flags.2?InputFile"],
      ["mimeType", "string", "string"],
      ["attributes", [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
      ["stickers", [TypeInputDocument], "flags.0?Vector<InputDocument>"],
      ["ttlSeconds", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.nosoundVideo ?? null, "true", "flags.3?true"],
      [this.forceFile ?? null, "true", "flags.4?true"],
      [this.spoiler ?? null, "true", "flags.5?true"],
      [this.file, TypeInputFile, "InputFile"],
      [this.thumb ?? null, TypeInputFile, "flags.2?InputFile"],
      [this.mimeType, "string", "string"],
      [this.attributes, [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
      [
        this.stickers ?? null,
        [TypeInputDocument],
        "flags.0?Vector<InputDocument>",
      ],
      [this.ttlSeconds ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(
    params: {
      nosoundVideo?: true;
      forceFile?: true;
      spoiler?: true;
      file: TypeInputFile;
      thumb?: TypeInputFile;
      mimeType: string;
      attributes: Array<TypeDocumentAttribute>;
      stickers?: Array<TypeInputDocument>;
      ttlSeconds?: number;
    },
  ) {
    super();
    this.nosoundVideo = params.nosoundVideo;
    this.forceFile = params.forceFile;
    this.spoiler = params.spoiler;
    this.file = params.file;
    this.thumb = params.thumb;
    this.mimeType = params.mimeType;
    this.attributes = params.attributes;
    this.stickers = params.stickers;
    this.ttlSeconds = params.ttlSeconds;
  }
}

export class InputMediaDocument extends TypeInputMedia {
  spoiler?: true;
  id: TypeInputDocument;
  ttlSeconds?: number;
  query?: string;

  protected get [id]() {
    return 0x33473058;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["spoiler", "true", "flags.2?true"],
      ["id", TypeInputDocument, "InputDocument"],
      ["ttlSeconds", "number", "flags.0?int"],
      ["query", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.spoiler ?? null, "true", "flags.2?true"],
      [this.id, TypeInputDocument, "InputDocument"],
      [this.ttlSeconds ?? null, "number", "flags.0?int"],
      [this.query ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(
    params: {
      spoiler?: true;
      id: TypeInputDocument;
      ttlSeconds?: number;
      query?: string;
    },
  ) {
    super();
    this.spoiler = params.spoiler;
    this.id = params.id;
    this.ttlSeconds = params.ttlSeconds;
    this.query = params.query;
  }
}

export class InputMediaVenue extends TypeInputMedia {
  geoPoint: TypeInputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venueId: string;
  venueType: string;

  protected get [id]() {
    return 0xc13d1c11;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["geoPoint", TypeInputGeoPoint, "InputGeoPoint"],
      ["title", "string", "string"],
      ["address", "string", "string"],
      ["provider", "string", "string"],
      ["venueId", "string", "string"],
      ["venueType", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.geoPoint, TypeInputGeoPoint, "InputGeoPoint"],
      [this.title, "string", "string"],
      [this.address, "string", "string"],
      [this.provider, "string", "string"],
      [this.venueId, "string", "string"],
      [this.venueType, "string", "string"],
    ];
  }

  constructor(
    params: {
      geoPoint: TypeInputGeoPoint;
      title: string;
      address: string;
      provider: string;
      venueId: string;
      venueType: string;
    },
  ) {
    super();
    this.geoPoint = params.geoPoint;
    this.title = params.title;
    this.address = params.address;
    this.provider = params.provider;
    this.venueId = params.venueId;
    this.venueType = params.venueType;
  }
}

export class InputMediaPhotoExternal extends TypeInputMedia {
  spoiler?: true;
  url: string;
  ttlSeconds?: number;

  protected get [id]() {
    return 0xe5bbfe1a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["spoiler", "true", "flags.1?true"],
      ["url", "string", "string"],
      ["ttlSeconds", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.spoiler ?? null, "true", "flags.1?true"],
      [this.url, "string", "string"],
      [this.ttlSeconds ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { spoiler?: true; url: string; ttlSeconds?: number }) {
    super();
    this.spoiler = params.spoiler;
    this.url = params.url;
    this.ttlSeconds = params.ttlSeconds;
  }
}

export class InputMediaDocumentExternal extends TypeInputMedia {
  spoiler?: true;
  url: string;
  ttlSeconds?: number;

  protected get [id]() {
    return 0xfb52dc99;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["spoiler", "true", "flags.1?true"],
      ["url", "string", "string"],
      ["ttlSeconds", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.spoiler ?? null, "true", "flags.1?true"],
      [this.url, "string", "string"],
      [this.ttlSeconds ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { spoiler?: true; url: string; ttlSeconds?: number }) {
    super();
    this.spoiler = params.spoiler;
    this.url = params.url;
    this.ttlSeconds = params.ttlSeconds;
  }
}

export class InputMediaGame extends TypeInputMedia {
  id: TypeInputGame;

  protected get [id]() {
    return 0xd33f43f3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", TypeInputGame, "InputGame"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, TypeInputGame, "InputGame"],
    ];
  }

  constructor(params: { id: TypeInputGame }) {
    super();
    this.id = params.id;
  }
}

export class InputMediaInvoice extends TypeInputMedia {
  title: string;
  description: string;
  photo?: TypeInputWebDocument;
  invoice: TypeInvoice;
  payload: Uint8Array;
  provider: string;
  providerData: TypeDataJSON;
  startParam?: string;
  extendedMedia?: TypeInputMedia;

  protected get [id]() {
    return 0x8eb5a6d5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["title", "string", "string"],
      ["description", "string", "string"],
      ["photo", TypeInputWebDocument, "flags.0?InputWebDocument"],
      ["invoice", TypeInvoice, "Invoice"],
      ["payload", Uint8Array, "bytes"],
      ["provider", "string", "string"],
      ["providerData", TypeDataJSON, "DataJSON"],
      ["startParam", "string", "flags.1?string"],
      ["extendedMedia", TypeInputMedia, "flags.2?InputMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.title, "string", "string"],
      [this.description, "string", "string"],
      [this.photo ?? null, TypeInputWebDocument, "flags.0?InputWebDocument"],
      [this.invoice, TypeInvoice, "Invoice"],
      [this.payload, Uint8Array, "bytes"],
      [this.provider, "string", "string"],
      [this.providerData, TypeDataJSON, "DataJSON"],
      [this.startParam ?? null, "string", "flags.1?string"],
      [this.extendedMedia ?? null, TypeInputMedia, "flags.2?InputMedia"],
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
      providerData: TypeDataJSON;
      startParam?: string;
      extendedMedia?: TypeInputMedia;
    },
  ) {
    super();
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.invoice = params.invoice;
    this.payload = params.payload;
    this.provider = params.provider;
    this.providerData = params.providerData;
    this.startParam = params.startParam;
    this.extendedMedia = params.extendedMedia;
  }
}

export class InputMediaGeoLive extends TypeInputMedia {
  stopped?: true;
  geoPoint: TypeInputGeoPoint;
  heading?: number;
  period?: number;
  proximityNotificationRadius?: number;

  protected get [id]() {
    return 0x971fa843;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["stopped", "true", "flags.0?true"],
      ["geoPoint", TypeInputGeoPoint, "InputGeoPoint"],
      ["heading", "number", "flags.2?int"],
      ["period", "number", "flags.1?int"],
      ["proximityNotificationRadius", "number", "flags.3?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.stopped ?? null, "true", "flags.0?true"],
      [this.geoPoint, TypeInputGeoPoint, "InputGeoPoint"],
      [this.heading ?? null, "number", "flags.2?int"],
      [this.period ?? null, "number", "flags.1?int"],
      [this.proximityNotificationRadius ?? null, "number", "flags.3?int"],
    ];
  }

  constructor(
    params: {
      stopped?: true;
      geoPoint: TypeInputGeoPoint;
      heading?: number;
      period?: number;
      proximityNotificationRadius?: number;
    },
  ) {
    super();
    this.stopped = params.stopped;
    this.geoPoint = params.geoPoint;
    this.heading = params.heading;
    this.period = params.period;
    this.proximityNotificationRadius = params.proximityNotificationRadius;
  }
}

export class InputMediaPoll extends TypeInputMedia {
  poll: TypePoll;
  correctAnswers?: Array<Uint8Array>;
  solution?: string;
  solutionEntities?: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x0f94e5f1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["poll", TypePoll, "Poll"],
      ["correctAnswers", [Uint8Array], "flags.0?Vector<bytes>"],
      ["solution", "string", "flags.1?string"],
      [
        "solutionEntities",
        [TypeMessageEntity],
        "flags.1?Vector<MessageEntity>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.poll, TypePoll, "Poll"],
      [this.correctAnswers ?? null, [Uint8Array], "flags.0?Vector<bytes>"],
      [this.solution ?? null, "string", "flags.1?string"],
      [
        this.solutionEntities ?? null,
        [TypeMessageEntity],
        "flags.1?Vector<MessageEntity>",
      ],
    ];
  }

  constructor(
    params: {
      poll: TypePoll;
      correctAnswers?: Array<Uint8Array>;
      solution?: string;
      solutionEntities?: Array<TypeMessageEntity>;
    },
  ) {
    super();
    this.poll = params.poll;
    this.correctAnswers = params.correctAnswers;
    this.solution = params.solution;
    this.solutionEntities = params.solutionEntities;
  }
}

export class InputMediaDice extends TypeInputMedia {
  emoticon: string;

  protected get [id]() {
    return 0xe66fbf7b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class InputChatPhotoEmpty extends TypeInputChatPhoto {
  protected get [id]() {
    return 0x1ca48f57;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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
  videoStartTs?: number;
  videoEmojiMarkup?: TypeVideoSize;

  protected get [id]() {
    return 0xbdcdaec0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["file", TypeInputFile, "flags.0?InputFile"],
      ["video", TypeInputFile, "flags.1?InputFile"],
      ["videoStartTs", "number", "flags.2?double"],
      ["videoEmojiMarkup", TypeVideoSize, "flags.3?VideoSize"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.file ?? null, TypeInputFile, "flags.0?InputFile"],
      [this.video ?? null, TypeInputFile, "flags.1?InputFile"],
      [this.videoStartTs ?? null, "number", "flags.2?double"],
      [this.videoEmojiMarkup ?? null, TypeVideoSize, "flags.3?VideoSize"],
    ];
  }

  constructor(
    params: {
      file?: TypeInputFile;
      video?: TypeInputFile;
      videoStartTs?: number;
      videoEmojiMarkup?: TypeVideoSize;
    },
  ) {
    super();
    this.file = params.file;
    this.video = params.video;
    this.videoStartTs = params.videoStartTs;
    this.videoEmojiMarkup = params.videoEmojiMarkup;
  }
}

export class InputChatPhoto extends Constructor {
  id: TypeInputPhoto;

  protected get [id]() {
    return 0x8953ad37;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", TypeInputPhoto, "InputPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, TypeInputPhoto, "InputPhoto"],
    ];
  }

  constructor(params: { id: TypeInputPhoto }) {
    super();
    this.id = params.id;
  }
}

export class InputGeoPointEmpty extends TypeInputGeoPoint {
  protected get [id]() {
    return 0xe4c123d6;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputGeoPoint extends Constructor {
  lat: number;
  long: number;
  accuracyRadius?: number;

  protected get [id]() {
    return 0x48222faf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["lat", "number", "double"],
      ["long", "number", "double"],
      ["accuracyRadius", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.lat, "number", "double"],
      [this.long, "number", "double"],
      [this.accuracyRadius ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { lat: number; long: number; accuracyRadius?: number }) {
    super();
    this.lat = params.lat;
    this.long = params.long;
    this.accuracyRadius = params.accuracyRadius;
  }
}

export class InputPhotoEmpty extends TypeInputPhoto {
  protected get [id]() {
    return 0x1cd7bf0d;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPhoto extends Constructor {
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;

  protected get [id]() {
    return 0x3bb3b94a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["fileReference", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.fileReference, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: { id: bigint; accessHash: bigint; fileReference: Uint8Array },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
  }
}

export class InputFileLocation extends Constructor {
  volumeId: bigint;
  localId: number;
  secret: bigint;
  fileReference: Uint8Array;

  protected get [id]() {
    return 0xdfdaabe1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["volumeId", "bigint", "long"],
      ["localId", "number", "int"],
      ["secret", "bigint", "long"],
      ["fileReference", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.volumeId, "bigint", "long"],
      [this.localId, "number", "int"],
      [this.secret, "bigint", "long"],
      [this.fileReference, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      volumeId: bigint;
      localId: number;
      secret: bigint;
      fileReference: Uint8Array;
    },
  ) {
    super();
    this.volumeId = params.volumeId;
    this.localId = params.localId;
    this.secret = params.secret;
    this.fileReference = params.fileReference;
  }
}

export class InputEncryptedFileLocation extends TypeInputFileLocation {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xf5235d55;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputDocumentFileLocation extends TypeInputFileLocation {
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;
  thumbSize: string;

  protected get [id]() {
    return 0xbad07584;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["fileReference", Uint8Array, "bytes"],
      ["thumbSize", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.fileReference, Uint8Array, "bytes"],
      [this.thumbSize, "string", "string"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      accessHash: bigint;
      fileReference: Uint8Array;
      thumbSize: string;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
    this.thumbSize = params.thumbSize;
  }
}

export class InputSecureFileLocation extends TypeInputFileLocation {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xcbc7ee28;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputTakeoutFileLocation extends TypeInputFileLocation {
  protected get [id]() {
    return 0x29be5899;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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
  accessHash: bigint;
  fileReference: Uint8Array;
  thumbSize: string;

  protected get [id]() {
    return 0x40181ffe;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["fileReference", Uint8Array, "bytes"],
      ["thumbSize", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.fileReference, Uint8Array, "bytes"],
      [this.thumbSize, "string", "string"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      accessHash: bigint;
      fileReference: Uint8Array;
      thumbSize: string;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
    this.thumbSize = params.thumbSize;
  }
}

export class InputPhotoLegacyFileLocation extends TypeInputFileLocation {
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;
  volumeId: bigint;
  localId: number;
  secret: bigint;

  protected get [id]() {
    return 0xd83466f3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["fileReference", Uint8Array, "bytes"],
      ["volumeId", "bigint", "long"],
      ["localId", "number", "int"],
      ["secret", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.fileReference, Uint8Array, "bytes"],
      [this.volumeId, "bigint", "long"],
      [this.localId, "number", "int"],
      [this.secret, "bigint", "long"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      accessHash: bigint;
      fileReference: Uint8Array;
      volumeId: bigint;
      localId: number;
      secret: bigint;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
    this.volumeId = params.volumeId;
    this.localId = params.localId;
    this.secret = params.secret;
  }
}

export class InputPeerPhotoFileLocation extends TypeInputFileLocation {
  big?: true;
  peer: TypeInputPeer;
  photoId: bigint;

  protected get [id]() {
    return 0x37257e99;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["big", "true", "flags.0?true"],
      ["peer", TypeInputPeer, "InputPeer"],
      ["photoId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.big ?? null, "true", "flags.0?true"],
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.photoId, "bigint", "long"],
    ];
  }

  constructor(params: { big?: true; peer: TypeInputPeer; photoId: bigint }) {
    super();
    this.big = params.big;
    this.peer = params.peer;
    this.photoId = params.photoId;
  }
}

export class InputStickerSetThumb extends TypeInputFileLocation {
  stickerset: TypeInputStickerSet;
  thumbVersion: number;

  protected get [id]() {
    return 0x9d84f3db;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", TypeInputStickerSet, "InputStickerSet"],
      ["thumbVersion", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, TypeInputStickerSet, "InputStickerSet"],
      [this.thumbVersion, "number", "int"],
    ];
  }

  constructor(
    params: { stickerset: TypeInputStickerSet; thumbVersion: number },
  ) {
    super();
    this.stickerset = params.stickerset;
    this.thumbVersion = params.thumbVersion;
  }
}

export class InputGroupCallStream extends TypeInputFileLocation {
  call: TypeInputGroupCall;
  timeMs: bigint;
  scale: number;
  videoChannel?: number;
  videoQuality?: number;

  protected get [id]() {
    return 0x0598a92a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["call", TypeInputGroupCall, "InputGroupCall"],
      ["timeMs", "bigint", "long"],
      ["scale", "number", "int"],
      ["videoChannel", "number", "flags.0?int"],
      ["videoQuality", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.call, TypeInputGroupCall, "InputGroupCall"],
      [this.timeMs, "bigint", "long"],
      [this.scale, "number", "int"],
      [this.videoChannel ?? null, "number", "flags.0?int"],
      [this.videoQuality ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(
    params: {
      call: TypeInputGroupCall;
      timeMs: bigint;
      scale: number;
      videoChannel?: number;
      videoQuality?: number;
    },
  ) {
    super();
    this.call = params.call;
    this.timeMs = params.timeMs;
    this.scale = params.scale;
    this.videoChannel = params.videoChannel;
    this.videoQuality = params.videoQuality;
  }
}

export class PeerUser extends TypePeer {
  userId: bigint;

  protected get [id]() {
    return 0x59511722;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { userId: bigint }) {
    super();
    this.userId = params.userId;
  }
}

export class PeerChat extends TypePeer {
  chatId: bigint;

  protected get [id]() {
    return 0x36c6019a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
    ];
  }

  constructor(params: { chatId: bigint }) {
    super();
    this.chatId = params.chatId;
  }
}

export class PeerChannel extends TypePeer {
  channelId: bigint;

  protected get [id]() {
    return 0xa2a5371e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
    ];
  }

  constructor(params: { channelId: bigint }) {
    super();
    this.channelId = params.channelId;
  }
}

export class StorageFileUnknown extends TypeStorageFileType {
  protected get [id]() {
    return 0xaa963b05;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class User extends Constructor {
  self?: true;
  contact?: true;
  mutualContact?: true;
  deleted?: true;
  bot?: true;
  botChatHistory?: true;
  botNochats?: true;
  verified?: true;
  restricted?: true;
  min?: true;
  botInlineGeo?: true;
  support?: true;
  scam?: true;
  applyMinPhoto?: true;
  fake?: true;
  botAttachMenu?: true;
  premium?: true;
  attachMenuEnabled?: true;
  botCanEdit?: true;
  id: bigint;
  accessHash?: bigint;
  firstName?: string;
  lastName?: string;
  username?: string;
  phone?: string;
  photo?: TypeUserProfilePhoto;
  status?: TypeUserStatus;
  botInfoVersion?: number;
  restrictionReason?: Array<TypeRestrictionReason>;
  botInlinePlaceholder?: string;
  langCode?: string;
  emojiStatus?: TypeEmojiStatus;
  usernames?: Array<TypeUsername>;

  protected get [id]() {
    return 0x8f97c628;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["self", "true", "flags.10?true"],
      ["contact", "true", "flags.11?true"],
      ["mutualContact", "true", "flags.12?true"],
      ["deleted", "true", "flags.13?true"],
      ["bot", "true", "flags.14?true"],
      ["botChatHistory", "true", "flags.15?true"],
      ["botNochats", "true", "flags.16?true"],
      ["verified", "true", "flags.17?true"],
      ["restricted", "true", "flags.18?true"],
      ["min", "true", "flags.20?true"],
      ["botInlineGeo", "true", "flags.21?true"],
      ["support", "true", "flags.23?true"],
      ["scam", "true", "flags.24?true"],
      ["applyMinPhoto", "true", "flags.25?true"],
      ["fake", "true", "flags.26?true"],
      ["botAttachMenu", "true", "flags.27?true"],
      ["premium", "true", "flags.28?true"],
      ["attachMenuEnabled", "true", "flags.29?true"],
      ["flags2", flags, "#"],
      ["botCanEdit", "true", "flags2.1?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "flags.0?long"],
      ["firstName", "string", "flags.1?string"],
      ["lastName", "string", "flags.2?string"],
      ["username", "string", "flags.3?string"],
      ["phone", "string", "flags.4?string"],
      ["photo", TypeUserProfilePhoto, "flags.5?UserProfilePhoto"],
      ["status", TypeUserStatus, "flags.6?UserStatus"],
      ["botInfoVersion", "number", "flags.14?int"],
      [
        "restrictionReason",
        [TypeRestrictionReason],
        "flags.18?Vector<RestrictionReason>",
      ],
      ["botInlinePlaceholder", "string", "flags.19?string"],
      ["langCode", "string", "flags.22?string"],
      ["emojiStatus", TypeEmojiStatus, "flags.30?EmojiStatus"],
      ["usernames", [TypeUsername], "flags2.0?Vector<Username>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.self ?? null, "true", "flags.10?true"],
      [this.contact ?? null, "true", "flags.11?true"],
      [this.mutualContact ?? null, "true", "flags.12?true"],
      [this.deleted ?? null, "true", "flags.13?true"],
      [this.bot ?? null, "true", "flags.14?true"],
      [this.botChatHistory ?? null, "true", "flags.15?true"],
      [this.botNochats ?? null, "true", "flags.16?true"],
      [this.verified ?? null, "true", "flags.17?true"],
      [this.restricted ?? null, "true", "flags.18?true"],
      [this.min ?? null, "true", "flags.20?true"],
      [this.botInlineGeo ?? null, "true", "flags.21?true"],
      [this.support ?? null, "true", "flags.23?true"],
      [this.scam ?? null, "true", "flags.24?true"],
      [this.applyMinPhoto ?? null, "true", "flags.25?true"],
      [this.fake ?? null, "true", "flags.26?true"],
      [this.botAttachMenu ?? null, "true", "flags.27?true"],
      [this.premium ?? null, "true", "flags.28?true"],
      [this.attachMenuEnabled ?? null, "true", "flags.29?true"],
      ["flags2", flags, "#"],
      [this.botCanEdit ?? null, "true", "flags2.1?true"],
      [this.id, "bigint", "long"],
      [this.accessHash ?? null, "bigint", "flags.0?long"],
      [this.firstName ?? null, "string", "flags.1?string"],
      [this.lastName ?? null, "string", "flags.2?string"],
      [this.username ?? null, "string", "flags.3?string"],
      [this.phone ?? null, "string", "flags.4?string"],
      [this.photo ?? null, TypeUserProfilePhoto, "flags.5?UserProfilePhoto"],
      [this.status ?? null, TypeUserStatus, "flags.6?UserStatus"],
      [this.botInfoVersion ?? null, "number", "flags.14?int"],
      [
        this.restrictionReason ?? null,
        [TypeRestrictionReason],
        "flags.18?Vector<RestrictionReason>",
      ],
      [this.botInlinePlaceholder ?? null, "string", "flags.19?string"],
      [this.langCode ?? null, "string", "flags.22?string"],
      [this.emojiStatus ?? null, TypeEmojiStatus, "flags.30?EmojiStatus"],
      [this.usernames ?? null, [TypeUsername], "flags2.0?Vector<Username>"],
    ];
  }

  constructor(
    params: {
      self?: true;
      contact?: true;
      mutualContact?: true;
      deleted?: true;
      bot?: true;
      botChatHistory?: true;
      botNochats?: true;
      verified?: true;
      restricted?: true;
      min?: true;
      botInlineGeo?: true;
      support?: true;
      scam?: true;
      applyMinPhoto?: true;
      fake?: true;
      botAttachMenu?: true;
      premium?: true;
      attachMenuEnabled?: true;
      botCanEdit?: true;
      id: bigint;
      accessHash?: bigint;
      firstName?: string;
      lastName?: string;
      username?: string;
      phone?: string;
      photo?: TypeUserProfilePhoto;
      status?: TypeUserStatus;
      botInfoVersion?: number;
      restrictionReason?: Array<TypeRestrictionReason>;
      botInlinePlaceholder?: string;
      langCode?: string;
      emojiStatus?: TypeEmojiStatus;
      usernames?: Array<TypeUsername>;
    },
  ) {
    super();
    this.self = params.self;
    this.contact = params.contact;
    this.mutualContact = params.mutualContact;
    this.deleted = params.deleted;
    this.bot = params.bot;
    this.botChatHistory = params.botChatHistory;
    this.botNochats = params.botNochats;
    this.verified = params.verified;
    this.restricted = params.restricted;
    this.min = params.min;
    this.botInlineGeo = params.botInlineGeo;
    this.support = params.support;
    this.scam = params.scam;
    this.applyMinPhoto = params.applyMinPhoto;
    this.fake = params.fake;
    this.botAttachMenu = params.botAttachMenu;
    this.premium = params.premium;
    this.attachMenuEnabled = params.attachMenuEnabled;
    this.botCanEdit = params.botCanEdit;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.username = params.username;
    this.phone = params.phone;
    this.photo = params.photo;
    this.status = params.status;
    this.botInfoVersion = params.botInfoVersion;
    this.restrictionReason = params.restrictionReason;
    this.botInlinePlaceholder = params.botInlinePlaceholder;
    this.langCode = params.langCode;
    this.emojiStatus = params.emojiStatus;
    this.usernames = params.usernames;
  }
}

export class UserProfilePhotoEmpty extends TypeUserProfilePhoto {
  protected get [id]() {
    return 0x4f11bae1;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UserProfilePhoto extends Constructor {
  hasVideo?: true;
  personal?: true;
  photoId: bigint;
  strippedThumb?: Uint8Array;
  dcId: number;

  protected get [id]() {
    return 0x82d1f706;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hasVideo", "true", "flags.0?true"],
      ["personal", "true", "flags.2?true"],
      ["photoId", "bigint", "long"],
      ["strippedThumb", Uint8Array, "flags.1?bytes"],
      ["dcId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hasVideo ?? null, "true", "flags.0?true"],
      [this.personal ?? null, "true", "flags.2?true"],
      [this.photoId, "bigint", "long"],
      [this.strippedThumb ?? null, Uint8Array, "flags.1?bytes"],
      [this.dcId, "number", "int"],
    ];
  }

  constructor(
    params: {
      hasVideo?: true;
      personal?: true;
      photoId: bigint;
      strippedThumb?: Uint8Array;
      dcId: number;
    },
  ) {
    super();
    this.hasVideo = params.hasVideo;
    this.personal = params.personal;
    this.photoId = params.photoId;
    this.strippedThumb = params.strippedThumb;
    this.dcId = params.dcId;
  }
}

export class UserStatusEmpty extends TypeUserStatus {
  protected get [id]() {
    return 0x09d05049;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["expires", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.expires, "number", "int"],
    ];
  }

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class UserStatusOffline extends TypeUserStatus {
  wasOnline: number;

  protected get [id]() {
    return 0x008c703f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wasOnline", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wasOnline, "number", "int"],
    ];
  }

  constructor(params: { wasOnline: number }) {
    super();
    this.wasOnline = params.wasOnline;
  }
}

export class UserStatusRecently extends TypeUserStatus {
  protected get [id]() {
    return 0xe26f42f1;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChatEmpty extends TypeChat {
  id: bigint;

  protected get [id]() {
    return 0x29562865;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class Chat extends Constructor {
  creator?: true;
  left?: true;
  deactivated?: true;
  callActive?: true;
  callNotEmpty?: true;
  noforwards?: true;
  id: bigint;
  title: string;
  photo: TypeChatPhoto;
  participantsCount: number;
  date: number;
  version: number;
  migratedTo?: TypeInputChannel;
  adminRights?: TypeChatAdminRights;
  defaultBannedRights?: TypeChatBannedRights;

  protected get [id]() {
    return 0x41cbf256;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["creator", "true", "flags.0?true"],
      ["left", "true", "flags.2?true"],
      ["deactivated", "true", "flags.5?true"],
      ["callActive", "true", "flags.23?true"],
      ["callNotEmpty", "true", "flags.24?true"],
      ["noforwards", "true", "flags.25?true"],
      ["id", "bigint", "long"],
      ["title", "string", "string"],
      ["photo", TypeChatPhoto, "ChatPhoto"],
      ["participantsCount", "number", "int"],
      ["date", "number", "int"],
      ["version", "number", "int"],
      ["migratedTo", TypeInputChannel, "flags.6?InputChannel"],
      ["adminRights", TypeChatAdminRights, "flags.14?ChatAdminRights"],
      [
        "defaultBannedRights",
        TypeChatBannedRights,
        "flags.18?ChatBannedRights",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.creator ?? null, "true", "flags.0?true"],
      [this.left ?? null, "true", "flags.2?true"],
      [this.deactivated ?? null, "true", "flags.5?true"],
      [this.callActive ?? null, "true", "flags.23?true"],
      [this.callNotEmpty ?? null, "true", "flags.24?true"],
      [this.noforwards ?? null, "true", "flags.25?true"],
      [this.id, "bigint", "long"],
      [this.title, "string", "string"],
      [this.photo, TypeChatPhoto, "ChatPhoto"],
      [this.participantsCount, "number", "int"],
      [this.date, "number", "int"],
      [this.version, "number", "int"],
      [this.migratedTo ?? null, TypeInputChannel, "flags.6?InputChannel"],
      [
        this.adminRights ?? null,
        TypeChatAdminRights,
        "flags.14?ChatAdminRights",
      ],
      [
        this.defaultBannedRights ?? null,
        TypeChatBannedRights,
        "flags.18?ChatBannedRights",
      ],
    ];
  }

  constructor(
    params: {
      creator?: true;
      left?: true;
      deactivated?: true;
      callActive?: true;
      callNotEmpty?: true;
      noforwards?: true;
      id: bigint;
      title: string;
      photo: TypeChatPhoto;
      participantsCount: number;
      date: number;
      version: number;
      migratedTo?: TypeInputChannel;
      adminRights?: TypeChatAdminRights;
      defaultBannedRights?: TypeChatBannedRights;
    },
  ) {
    super();
    this.creator = params.creator;
    this.left = params.left;
    this.deactivated = params.deactivated;
    this.callActive = params.callActive;
    this.callNotEmpty = params.callNotEmpty;
    this.noforwards = params.noforwards;
    this.id = params.id;
    this.title = params.title;
    this.photo = params.photo;
    this.participantsCount = params.participantsCount;
    this.date = params.date;
    this.version = params.version;
    this.migratedTo = params.migratedTo;
    this.adminRights = params.adminRights;
    this.defaultBannedRights = params.defaultBannedRights;
  }
}

export class ChatForbidden extends TypeChat {
  id: bigint;
  title: string;

  protected get [id]() {
    return 0x6592a1a7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { id: bigint; title: string }) {
    super();
    this.id = params.id;
    this.title = params.title;
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
  hasLink?: true;
  hasGeo?: true;
  slowmodeEnabled?: true;
  callActive?: true;
  callNotEmpty?: true;
  fake?: true;
  gigagroup?: true;
  noforwards?: true;
  joinToSend?: true;
  joinRequest?: true;
  forum?: true;
  id: bigint;
  accessHash?: bigint;
  title: string;
  username?: string;
  photo: TypeChatPhoto;
  date: number;
  restrictionReason?: Array<TypeRestrictionReason>;
  adminRights?: TypeChatAdminRights;
  bannedRights?: TypeChatBannedRights;
  defaultBannedRights?: TypeChatBannedRights;
  participantsCount?: number;
  usernames?: Array<TypeUsername>;

  protected get [id]() {
    return 0x83259464;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["creator", "true", "flags.0?true"],
      ["left", "true", "flags.2?true"],
      ["broadcast", "true", "flags.5?true"],
      ["verified", "true", "flags.7?true"],
      ["megagroup", "true", "flags.8?true"],
      ["restricted", "true", "flags.9?true"],
      ["signatures", "true", "flags.11?true"],
      ["min", "true", "flags.12?true"],
      ["scam", "true", "flags.19?true"],
      ["hasLink", "true", "flags.20?true"],
      ["hasGeo", "true", "flags.21?true"],
      ["slowmodeEnabled", "true", "flags.22?true"],
      ["callActive", "true", "flags.23?true"],
      ["callNotEmpty", "true", "flags.24?true"],
      ["fake", "true", "flags.25?true"],
      ["gigagroup", "true", "flags.26?true"],
      ["noforwards", "true", "flags.27?true"],
      ["joinToSend", "true", "flags.28?true"],
      ["joinRequest", "true", "flags.29?true"],
      ["forum", "true", "flags.30?true"],
      ["flags2", flags, "#"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "flags.13?long"],
      ["title", "string", "string"],
      ["username", "string", "flags.6?string"],
      ["photo", TypeChatPhoto, "ChatPhoto"],
      ["date", "number", "int"],
      [
        "restrictionReason",
        [TypeRestrictionReason],
        "flags.9?Vector<RestrictionReason>",
      ],
      ["adminRights", TypeChatAdminRights, "flags.14?ChatAdminRights"],
      ["bannedRights", TypeChatBannedRights, "flags.15?ChatBannedRights"],
      [
        "defaultBannedRights",
        TypeChatBannedRights,
        "flags.18?ChatBannedRights",
      ],
      ["participantsCount", "number", "flags.17?int"],
      ["usernames", [TypeUsername], "flags2.0?Vector<Username>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.creator ?? null, "true", "flags.0?true"],
      [this.left ?? null, "true", "flags.2?true"],
      [this.broadcast ?? null, "true", "flags.5?true"],
      [this.verified ?? null, "true", "flags.7?true"],
      [this.megagroup ?? null, "true", "flags.8?true"],
      [this.restricted ?? null, "true", "flags.9?true"],
      [this.signatures ?? null, "true", "flags.11?true"],
      [this.min ?? null, "true", "flags.12?true"],
      [this.scam ?? null, "true", "flags.19?true"],
      [this.hasLink ?? null, "true", "flags.20?true"],
      [this.hasGeo ?? null, "true", "flags.21?true"],
      [this.slowmodeEnabled ?? null, "true", "flags.22?true"],
      [this.callActive ?? null, "true", "flags.23?true"],
      [this.callNotEmpty ?? null, "true", "flags.24?true"],
      [this.fake ?? null, "true", "flags.25?true"],
      [this.gigagroup ?? null, "true", "flags.26?true"],
      [this.noforwards ?? null, "true", "flags.27?true"],
      [this.joinToSend ?? null, "true", "flags.28?true"],
      [this.joinRequest ?? null, "true", "flags.29?true"],
      [this.forum ?? null, "true", "flags.30?true"],
      ["flags2", flags, "#"],
      [this.id, "bigint", "long"],
      [this.accessHash ?? null, "bigint", "flags.13?long"],
      [this.title, "string", "string"],
      [this.username ?? null, "string", "flags.6?string"],
      [this.photo, TypeChatPhoto, "ChatPhoto"],
      [this.date, "number", "int"],
      [
        this.restrictionReason ?? null,
        [TypeRestrictionReason],
        "flags.9?Vector<RestrictionReason>",
      ],
      [
        this.adminRights ?? null,
        TypeChatAdminRights,
        "flags.14?ChatAdminRights",
      ],
      [
        this.bannedRights ?? null,
        TypeChatBannedRights,
        "flags.15?ChatBannedRights",
      ],
      [
        this.defaultBannedRights ?? null,
        TypeChatBannedRights,
        "flags.18?ChatBannedRights",
      ],
      [this.participantsCount ?? null, "number", "flags.17?int"],
      [this.usernames ?? null, [TypeUsername], "flags2.0?Vector<Username>"],
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
      hasLink?: true;
      hasGeo?: true;
      slowmodeEnabled?: true;
      callActive?: true;
      callNotEmpty?: true;
      fake?: true;
      gigagroup?: true;
      noforwards?: true;
      joinToSend?: true;
      joinRequest?: true;
      forum?: true;
      id: bigint;
      accessHash?: bigint;
      title: string;
      username?: string;
      photo: TypeChatPhoto;
      date: number;
      restrictionReason?: Array<TypeRestrictionReason>;
      adminRights?: TypeChatAdminRights;
      bannedRights?: TypeChatBannedRights;
      defaultBannedRights?: TypeChatBannedRights;
      participantsCount?: number;
      usernames?: Array<TypeUsername>;
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
    this.hasLink = params.hasLink;
    this.hasGeo = params.hasGeo;
    this.slowmodeEnabled = params.slowmodeEnabled;
    this.callActive = params.callActive;
    this.callNotEmpty = params.callNotEmpty;
    this.fake = params.fake;
    this.gigagroup = params.gigagroup;
    this.noforwards = params.noforwards;
    this.joinToSend = params.joinToSend;
    this.joinRequest = params.joinRequest;
    this.forum = params.forum;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.title = params.title;
    this.username = params.username;
    this.photo = params.photo;
    this.date = params.date;
    this.restrictionReason = params.restrictionReason;
    this.adminRights = params.adminRights;
    this.bannedRights = params.bannedRights;
    this.defaultBannedRights = params.defaultBannedRights;
    this.participantsCount = params.participantsCount;
    this.usernames = params.usernames;
  }
}

export class ChannelForbidden extends TypeChat {
  broadcast?: true;
  megagroup?: true;
  id: bigint;
  accessHash: bigint;
  title: string;
  untilDate?: number;

  protected get [id]() {
    return 0x17d493d5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["broadcast", "true", "flags.5?true"],
      ["megagroup", "true", "flags.8?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["title", "string", "string"],
      ["untilDate", "number", "flags.16?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.broadcast ?? null, "true", "flags.5?true"],
      [this.megagroup ?? null, "true", "flags.8?true"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.title, "string", "string"],
      [this.untilDate ?? null, "number", "flags.16?int"],
    ];
  }

  constructor(
    params: {
      broadcast?: true;
      megagroup?: true;
      id: bigint;
      accessHash: bigint;
      title: string;
      untilDate?: number;
    },
  ) {
    super();
    this.broadcast = params.broadcast;
    this.megagroup = params.megagroup;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.title = params.title;
    this.untilDate = params.untilDate;
  }
}

export class ChatFull extends Constructor {
  canSetUsername?: true;
  hasScheduled?: true;
  translationsDisabled?: true;
  id: bigint;
  about: string;
  participants: TypeChatParticipants;
  chatPhoto?: TypePhoto;
  notifySettings: TypePeerNotifySettings;
  exportedInvite?: TypeExportedChatInvite;
  botInfo?: Array<TypeBotInfo>;
  pinnedMsgId?: number;
  folderId?: number;
  call?: TypeInputGroupCall;
  ttlPeriod?: number;
  groupcallDefaultJoinAs?: TypePeer;
  themeEmoticon?: string;
  requestsPending?: number;
  recentRequesters?: Array<bigint>;
  availableReactions?: TypeChatReactions;

  protected get [id]() {
    return 0xc9d31138;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["canSetUsername", "true", "flags.7?true"],
      ["hasScheduled", "true", "flags.8?true"],
      ["translationsDisabled", "true", "flags.19?true"],
      ["id", "bigint", "long"],
      ["about", "string", "string"],
      ["participants", TypeChatParticipants, "ChatParticipants"],
      ["chatPhoto", TypePhoto, "flags.2?Photo"],
      ["notifySettings", TypePeerNotifySettings, "PeerNotifySettings"],
      ["exportedInvite", TypeExportedChatInvite, "flags.13?ExportedChatInvite"],
      ["botInfo", [TypeBotInfo], "flags.3?Vector<BotInfo>"],
      ["pinnedMsgId", "number", "flags.6?int"],
      ["folderId", "number", "flags.11?int"],
      ["call", TypeInputGroupCall, "flags.12?InputGroupCall"],
      ["ttlPeriod", "number", "flags.14?int"],
      ["groupcallDefaultJoinAs", TypePeer, "flags.15?Peer"],
      ["themeEmoticon", "string", "flags.16?string"],
      ["requestsPending", "number", "flags.17?int"],
      ["recentRequesters", ["bigint"], "flags.17?Vector<long>"],
      ["availableReactions", TypeChatReactions, "flags.18?ChatReactions"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.canSetUsername ?? null, "true", "flags.7?true"],
      [this.hasScheduled ?? null, "true", "flags.8?true"],
      [this.translationsDisabled ?? null, "true", "flags.19?true"],
      [this.id, "bigint", "long"],
      [this.about, "string", "string"],
      [this.participants, TypeChatParticipants, "ChatParticipants"],
      [this.chatPhoto ?? null, TypePhoto, "flags.2?Photo"],
      [this.notifySettings, TypePeerNotifySettings, "PeerNotifySettings"],
      [
        this.exportedInvite ?? null,
        TypeExportedChatInvite,
        "flags.13?ExportedChatInvite",
      ],
      [this.botInfo ?? null, [TypeBotInfo], "flags.3?Vector<BotInfo>"],
      [this.pinnedMsgId ?? null, "number", "flags.6?int"],
      [this.folderId ?? null, "number", "flags.11?int"],
      [this.call ?? null, TypeInputGroupCall, "flags.12?InputGroupCall"],
      [this.ttlPeriod ?? null, "number", "flags.14?int"],
      [this.groupcallDefaultJoinAs ?? null, TypePeer, "flags.15?Peer"],
      [this.themeEmoticon ?? null, "string", "flags.16?string"],
      [this.requestsPending ?? null, "number", "flags.17?int"],
      [this.recentRequesters ?? null, ["bigint"], "flags.17?Vector<long>"],
      [
        this.availableReactions ?? null,
        TypeChatReactions,
        "flags.18?ChatReactions",
      ],
    ];
  }

  constructor(
    params: {
      canSetUsername?: true;
      hasScheduled?: true;
      translationsDisabled?: true;
      id: bigint;
      about: string;
      participants: TypeChatParticipants;
      chatPhoto?: TypePhoto;
      notifySettings: TypePeerNotifySettings;
      exportedInvite?: TypeExportedChatInvite;
      botInfo?: Array<TypeBotInfo>;
      pinnedMsgId?: number;
      folderId?: number;
      call?: TypeInputGroupCall;
      ttlPeriod?: number;
      groupcallDefaultJoinAs?: TypePeer;
      themeEmoticon?: string;
      requestsPending?: number;
      recentRequesters?: Array<bigint>;
      availableReactions?: TypeChatReactions;
    },
  ) {
    super();
    this.canSetUsername = params.canSetUsername;
    this.hasScheduled = params.hasScheduled;
    this.translationsDisabled = params.translationsDisabled;
    this.id = params.id;
    this.about = params.about;
    this.participants = params.participants;
    this.chatPhoto = params.chatPhoto;
    this.notifySettings = params.notifySettings;
    this.exportedInvite = params.exportedInvite;
    this.botInfo = params.botInfo;
    this.pinnedMsgId = params.pinnedMsgId;
    this.folderId = params.folderId;
    this.call = params.call;
    this.ttlPeriod = params.ttlPeriod;
    this.groupcallDefaultJoinAs = params.groupcallDefaultJoinAs;
    this.themeEmoticon = params.themeEmoticon;
    this.requestsPending = params.requestsPending;
    this.recentRequesters = params.recentRequesters;
    this.availableReactions = params.availableReactions;
  }
}

export class ChannelFull extends TypeChatFull {
  canViewParticipants?: true;
  canSetUsername?: true;
  canSetStickers?: true;
  hiddenPrehistory?: true;
  canSetLocation?: true;
  hasScheduled?: true;
  canViewStats?: true;
  blocked?: true;
  canDeleteChannel?: true;
  antispam?: true;
  participantsHidden?: true;
  translationsDisabled?: true;
  id: bigint;
  about: string;
  participantsCount?: number;
  adminsCount?: number;
  kickedCount?: number;
  bannedCount?: number;
  onlineCount?: number;
  readInboxMaxId: number;
  readOutboxMaxId: number;
  unreadCount: number;
  chatPhoto: TypePhoto;
  notifySettings: TypePeerNotifySettings;
  exportedInvite?: TypeExportedChatInvite;
  botInfo: Array<TypeBotInfo>;
  migratedFromChatId?: bigint;
  migratedFromMaxId?: number;
  pinnedMsgId?: number;
  stickerset?: TypeStickerSet;
  availableMinId?: number;
  folderId?: number;
  linkedChatId?: bigint;
  location?: TypeChannelLocation;
  slowmodeSeconds?: number;
  slowmodeNextSendDate?: number;
  statsDc?: number;
  pts: number;
  call?: TypeInputGroupCall;
  ttlPeriod?: number;
  pendingSuggestions?: Array<string>;
  groupcallDefaultJoinAs?: TypePeer;
  themeEmoticon?: string;
  requestsPending?: number;
  recentRequesters?: Array<bigint>;
  defaultSendAs?: TypePeer;
  availableReactions?: TypeChatReactions;

  protected get [id]() {
    return 0xf2355507;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["canViewParticipants", "true", "flags.3?true"],
      ["canSetUsername", "true", "flags.6?true"],
      ["canSetStickers", "true", "flags.7?true"],
      ["hiddenPrehistory", "true", "flags.10?true"],
      ["canSetLocation", "true", "flags.16?true"],
      ["hasScheduled", "true", "flags.19?true"],
      ["canViewStats", "true", "flags.20?true"],
      ["blocked", "true", "flags.22?true"],
      ["flags2", flags, "#"],
      ["canDeleteChannel", "true", "flags2.0?true"],
      ["antispam", "true", "flags2.1?true"],
      ["participantsHidden", "true", "flags2.2?true"],
      ["translationsDisabled", "true", "flags2.3?true"],
      ["id", "bigint", "long"],
      ["about", "string", "string"],
      ["participantsCount", "number", "flags.0?int"],
      ["adminsCount", "number", "flags.1?int"],
      ["kickedCount", "number", "flags.2?int"],
      ["bannedCount", "number", "flags.2?int"],
      ["onlineCount", "number", "flags.13?int"],
      ["readInboxMaxId", "number", "int"],
      ["readOutboxMaxId", "number", "int"],
      ["unreadCount", "number", "int"],
      ["chatPhoto", TypePhoto, "Photo"],
      ["notifySettings", TypePeerNotifySettings, "PeerNotifySettings"],
      ["exportedInvite", TypeExportedChatInvite, "flags.23?ExportedChatInvite"],
      ["botInfo", [TypeBotInfo], "Vector<BotInfo>"],
      ["migratedFromChatId", "bigint", "flags.4?long"],
      ["migratedFromMaxId", "number", "flags.4?int"],
      ["pinnedMsgId", "number", "flags.5?int"],
      ["stickerset", TypeStickerSet, "flags.8?StickerSet"],
      ["availableMinId", "number", "flags.9?int"],
      ["folderId", "number", "flags.11?int"],
      ["linkedChatId", "bigint", "flags.14?long"],
      ["location", TypeChannelLocation, "flags.15?ChannelLocation"],
      ["slowmodeSeconds", "number", "flags.17?int"],
      ["slowmodeNextSendDate", "number", "flags.18?int"],
      ["statsDc", "number", "flags.12?int"],
      ["pts", "number", "int"],
      ["call", TypeInputGroupCall, "flags.21?InputGroupCall"],
      ["ttlPeriod", "number", "flags.24?int"],
      ["pendingSuggestions", ["string"], "flags.25?Vector<string>"],
      ["groupcallDefaultJoinAs", TypePeer, "flags.26?Peer"],
      ["themeEmoticon", "string", "flags.27?string"],
      ["requestsPending", "number", "flags.28?int"],
      ["recentRequesters", ["bigint"], "flags.28?Vector<long>"],
      ["defaultSendAs", TypePeer, "flags.29?Peer"],
      ["availableReactions", TypeChatReactions, "flags.30?ChatReactions"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.canViewParticipants ?? null, "true", "flags.3?true"],
      [this.canSetUsername ?? null, "true", "flags.6?true"],
      [this.canSetStickers ?? null, "true", "flags.7?true"],
      [this.hiddenPrehistory ?? null, "true", "flags.10?true"],
      [this.canSetLocation ?? null, "true", "flags.16?true"],
      [this.hasScheduled ?? null, "true", "flags.19?true"],
      [this.canViewStats ?? null, "true", "flags.20?true"],
      [this.blocked ?? null, "true", "flags.22?true"],
      ["flags2", flags, "#"],
      [this.canDeleteChannel ?? null, "true", "flags2.0?true"],
      [this.antispam ?? null, "true", "flags2.1?true"],
      [this.participantsHidden ?? null, "true", "flags2.2?true"],
      [this.translationsDisabled ?? null, "true", "flags2.3?true"],
      [this.id, "bigint", "long"],
      [this.about, "string", "string"],
      [this.participantsCount ?? null, "number", "flags.0?int"],
      [this.adminsCount ?? null, "number", "flags.1?int"],
      [this.kickedCount ?? null, "number", "flags.2?int"],
      [this.bannedCount ?? null, "number", "flags.2?int"],
      [this.onlineCount ?? null, "number", "flags.13?int"],
      [this.readInboxMaxId, "number", "int"],
      [this.readOutboxMaxId, "number", "int"],
      [this.unreadCount, "number", "int"],
      [this.chatPhoto, TypePhoto, "Photo"],
      [this.notifySettings, TypePeerNotifySettings, "PeerNotifySettings"],
      [
        this.exportedInvite ?? null,
        TypeExportedChatInvite,
        "flags.23?ExportedChatInvite",
      ],
      [this.botInfo, [TypeBotInfo], "Vector<BotInfo>"],
      [this.migratedFromChatId ?? null, "bigint", "flags.4?long"],
      [this.migratedFromMaxId ?? null, "number", "flags.4?int"],
      [this.pinnedMsgId ?? null, "number", "flags.5?int"],
      [this.stickerset ?? null, TypeStickerSet, "flags.8?StickerSet"],
      [this.availableMinId ?? null, "number", "flags.9?int"],
      [this.folderId ?? null, "number", "flags.11?int"],
      [this.linkedChatId ?? null, "bigint", "flags.14?long"],
      [this.location ?? null, TypeChannelLocation, "flags.15?ChannelLocation"],
      [this.slowmodeSeconds ?? null, "number", "flags.17?int"],
      [this.slowmodeNextSendDate ?? null, "number", "flags.18?int"],
      [this.statsDc ?? null, "number", "flags.12?int"],
      [this.pts, "number", "int"],
      [this.call ?? null, TypeInputGroupCall, "flags.21?InputGroupCall"],
      [this.ttlPeriod ?? null, "number", "flags.24?int"],
      [this.pendingSuggestions ?? null, ["string"], "flags.25?Vector<string>"],
      [this.groupcallDefaultJoinAs ?? null, TypePeer, "flags.26?Peer"],
      [this.themeEmoticon ?? null, "string", "flags.27?string"],
      [this.requestsPending ?? null, "number", "flags.28?int"],
      [this.recentRequesters ?? null, ["bigint"], "flags.28?Vector<long>"],
      [this.defaultSendAs ?? null, TypePeer, "flags.29?Peer"],
      [
        this.availableReactions ?? null,
        TypeChatReactions,
        "flags.30?ChatReactions",
      ],
    ];
  }

  constructor(
    params: {
      canViewParticipants?: true;
      canSetUsername?: true;
      canSetStickers?: true;
      hiddenPrehistory?: true;
      canSetLocation?: true;
      hasScheduled?: true;
      canViewStats?: true;
      blocked?: true;
      canDeleteChannel?: true;
      antispam?: true;
      participantsHidden?: true;
      translationsDisabled?: true;
      id: bigint;
      about: string;
      participantsCount?: number;
      adminsCount?: number;
      kickedCount?: number;
      bannedCount?: number;
      onlineCount?: number;
      readInboxMaxId: number;
      readOutboxMaxId: number;
      unreadCount: number;
      chatPhoto: TypePhoto;
      notifySettings: TypePeerNotifySettings;
      exportedInvite?: TypeExportedChatInvite;
      botInfo: Array<TypeBotInfo>;
      migratedFromChatId?: bigint;
      migratedFromMaxId?: number;
      pinnedMsgId?: number;
      stickerset?: TypeStickerSet;
      availableMinId?: number;
      folderId?: number;
      linkedChatId?: bigint;
      location?: TypeChannelLocation;
      slowmodeSeconds?: number;
      slowmodeNextSendDate?: number;
      statsDc?: number;
      pts: number;
      call?: TypeInputGroupCall;
      ttlPeriod?: number;
      pendingSuggestions?: Array<string>;
      groupcallDefaultJoinAs?: TypePeer;
      themeEmoticon?: string;
      requestsPending?: number;
      recentRequesters?: Array<bigint>;
      defaultSendAs?: TypePeer;
      availableReactions?: TypeChatReactions;
    },
  ) {
    super();
    this.canViewParticipants = params.canViewParticipants;
    this.canSetUsername = params.canSetUsername;
    this.canSetStickers = params.canSetStickers;
    this.hiddenPrehistory = params.hiddenPrehistory;
    this.canSetLocation = params.canSetLocation;
    this.hasScheduled = params.hasScheduled;
    this.canViewStats = params.canViewStats;
    this.blocked = params.blocked;
    this.canDeleteChannel = params.canDeleteChannel;
    this.antispam = params.antispam;
    this.participantsHidden = params.participantsHidden;
    this.translationsDisabled = params.translationsDisabled;
    this.id = params.id;
    this.about = params.about;
    this.participantsCount = params.participantsCount;
    this.adminsCount = params.adminsCount;
    this.kickedCount = params.kickedCount;
    this.bannedCount = params.bannedCount;
    this.onlineCount = params.onlineCount;
    this.readInboxMaxId = params.readInboxMaxId;
    this.readOutboxMaxId = params.readOutboxMaxId;
    this.unreadCount = params.unreadCount;
    this.chatPhoto = params.chatPhoto;
    this.notifySettings = params.notifySettings;
    this.exportedInvite = params.exportedInvite;
    this.botInfo = params.botInfo;
    this.migratedFromChatId = params.migratedFromChatId;
    this.migratedFromMaxId = params.migratedFromMaxId;
    this.pinnedMsgId = params.pinnedMsgId;
    this.stickerset = params.stickerset;
    this.availableMinId = params.availableMinId;
    this.folderId = params.folderId;
    this.linkedChatId = params.linkedChatId;
    this.location = params.location;
    this.slowmodeSeconds = params.slowmodeSeconds;
    this.slowmodeNextSendDate = params.slowmodeNextSendDate;
    this.statsDc = params.statsDc;
    this.pts = params.pts;
    this.call = params.call;
    this.ttlPeriod = params.ttlPeriod;
    this.pendingSuggestions = params.pendingSuggestions;
    this.groupcallDefaultJoinAs = params.groupcallDefaultJoinAs;
    this.themeEmoticon = params.themeEmoticon;
    this.requestsPending = params.requestsPending;
    this.recentRequesters = params.recentRequesters;
    this.defaultSendAs = params.defaultSendAs;
    this.availableReactions = params.availableReactions;
  }
}

export class ChatParticipant extends Constructor {
  userId: bigint;
  inviterId: bigint;
  date: number;

  protected get [id]() {
    return 0xc02d4007;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["inviterId", "bigint", "long"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.inviterId, "bigint", "long"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; inviterId: bigint; date: number }) {
    super();
    this.userId = params.userId;
    this.inviterId = params.inviterId;
    this.date = params.date;
  }
}

export class ChatParticipantCreator extends TypeChatParticipant {
  userId: bigint;

  protected get [id]() {
    return 0xe46bcee4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { userId: bigint }) {
    super();
    this.userId = params.userId;
  }
}

export class ChatParticipantAdmin extends TypeChatParticipant {
  userId: bigint;
  inviterId: bigint;
  date: number;

  protected get [id]() {
    return 0xa0933f5b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["inviterId", "bigint", "long"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.inviterId, "bigint", "long"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; inviterId: bigint; date: number }) {
    super();
    this.userId = params.userId;
    this.inviterId = params.inviterId;
    this.date = params.date;
  }
}

export class ChatParticipantsForbidden extends TypeChatParticipants {
  chatId: bigint;
  selfParticipant?: TypeChatParticipant;

  protected get [id]() {
    return 0x8763d3e1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["chatId", "bigint", "long"],
      ["selfParticipant", TypeChatParticipant, "flags.0?ChatParticipant"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.chatId, "bigint", "long"],
      [
        this.selfParticipant ?? null,
        TypeChatParticipant,
        "flags.0?ChatParticipant",
      ],
    ];
  }

  constructor(
    params: { chatId: bigint; selfParticipant?: TypeChatParticipant },
  ) {
    super();
    this.chatId = params.chatId;
    this.selfParticipant = params.selfParticipant;
  }
}

export class ChatParticipants extends Constructor {
  chatId: bigint;
  participants: Array<TypeChatParticipant>;
  version: number;

  protected get [id]() {
    return 0x3cbc93f8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["participants", [TypeChatParticipant], "Vector<ChatParticipant>"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.participants, [TypeChatParticipant], "Vector<ChatParticipant>"],
      [this.version, "number", "int"],
    ];
  }

  constructor(
    params: {
      chatId: bigint;
      participants: Array<TypeChatParticipant>;
      version: number;
    },
  ) {
    super();
    this.chatId = params.chatId;
    this.participants = params.participants;
    this.version = params.version;
  }
}

export class ChatPhotoEmpty extends TypeChatPhoto {
  protected get [id]() {
    return 0x37c1011c;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChatPhoto extends Constructor {
  hasVideo?: true;
  photoId: bigint;
  strippedThumb?: Uint8Array;
  dcId: number;

  protected get [id]() {
    return 0x1c6e1c11;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hasVideo", "true", "flags.0?true"],
      ["photoId", "bigint", "long"],
      ["strippedThumb", Uint8Array, "flags.1?bytes"],
      ["dcId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hasVideo ?? null, "true", "flags.0?true"],
      [this.photoId, "bigint", "long"],
      [this.strippedThumb ?? null, Uint8Array, "flags.1?bytes"],
      [this.dcId, "number", "int"],
    ];
  }

  constructor(
    params: {
      hasVideo?: true;
      photoId: bigint;
      strippedThumb?: Uint8Array;
      dcId: number;
    },
  ) {
    super();
    this.hasVideo = params.hasVideo;
    this.photoId = params.photoId;
    this.strippedThumb = params.strippedThumb;
    this.dcId = params.dcId;
  }
}

export class MessageEmpty extends TypeMessage {
  id: number;
  peerId?: TypePeer;

  protected get [id]() {
    return 0x90a6ca84;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "number", "int"],
      ["peerId", TypePeer, "flags.0?Peer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "number", "int"],
      [this.peerId ?? null, TypePeer, "flags.0?Peer"],
    ];
  }

  constructor(params: { id: number; peerId?: TypePeer }) {
    super();
    this.id = params.id;
    this.peerId = params.peerId;
  }
}

export class Message extends Constructor {
  out?: true;
  mentioned?: true;
  mediaUnread?: true;
  silent?: true;
  post?: true;
  fromScheduled?: true;
  legacy?: true;
  editHide?: true;
  pinned?: true;
  noforwards?: true;
  id: number;
  fromId?: TypePeer;
  peerId: TypePeer;
  fwdFrom?: TypeMessageFwdHeader;
  viaBotId?: bigint;
  replyTo?: TypeMessageReplyHeader;
  date: number;
  message: string;
  media?: TypeMessageMedia;
  replyMarkup?: TypeReplyMarkup;
  entities?: Array<TypeMessageEntity>;
  views?: number;
  forwards?: number;
  replies?: TypeMessageReplies;
  editDate?: number;
  postAuthor?: string;
  groupedId?: bigint;
  reactions?: TypeMessageReactions;
  restrictionReason?: Array<TypeRestrictionReason>;
  ttlPeriod?: number;

  protected get [id]() {
    return 0x38116ee0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["out", "true", "flags.1?true"],
      ["mentioned", "true", "flags.4?true"],
      ["mediaUnread", "true", "flags.5?true"],
      ["silent", "true", "flags.13?true"],
      ["post", "true", "flags.14?true"],
      ["fromScheduled", "true", "flags.18?true"],
      ["legacy", "true", "flags.19?true"],
      ["editHide", "true", "flags.21?true"],
      ["pinned", "true", "flags.24?true"],
      ["noforwards", "true", "flags.26?true"],
      ["id", "number", "int"],
      ["fromId", TypePeer, "flags.8?Peer"],
      ["peerId", TypePeer, "Peer"],
      ["fwdFrom", TypeMessageFwdHeader, "flags.2?MessageFwdHeader"],
      ["viaBotId", "bigint", "flags.11?long"],
      ["replyTo", TypeMessageReplyHeader, "flags.3?MessageReplyHeader"],
      ["date", "number", "int"],
      ["message", "string", "string"],
      ["media", TypeMessageMedia, "flags.9?MessageMedia"],
      ["replyMarkup", TypeReplyMarkup, "flags.6?ReplyMarkup"],
      ["entities", [TypeMessageEntity], "flags.7?Vector<MessageEntity>"],
      ["views", "number", "flags.10?int"],
      ["forwards", "number", "flags.10?int"],
      ["replies", TypeMessageReplies, "flags.23?MessageReplies"],
      ["editDate", "number", "flags.15?int"],
      ["postAuthor", "string", "flags.16?string"],
      ["groupedId", "bigint", "flags.17?long"],
      ["reactions", TypeMessageReactions, "flags.20?MessageReactions"],
      [
        "restrictionReason",
        [TypeRestrictionReason],
        "flags.22?Vector<RestrictionReason>",
      ],
      ["ttlPeriod", "number", "flags.25?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.out ?? null, "true", "flags.1?true"],
      [this.mentioned ?? null, "true", "flags.4?true"],
      [this.mediaUnread ?? null, "true", "flags.5?true"],
      [this.silent ?? null, "true", "flags.13?true"],
      [this.post ?? null, "true", "flags.14?true"],
      [this.fromScheduled ?? null, "true", "flags.18?true"],
      [this.legacy ?? null, "true", "flags.19?true"],
      [this.editHide ?? null, "true", "flags.21?true"],
      [this.pinned ?? null, "true", "flags.24?true"],
      [this.noforwards ?? null, "true", "flags.26?true"],
      [this.id, "number", "int"],
      [this.fromId ?? null, TypePeer, "flags.8?Peer"],
      [this.peerId, TypePeer, "Peer"],
      [this.fwdFrom ?? null, TypeMessageFwdHeader, "flags.2?MessageFwdHeader"],
      [this.viaBotId ?? null, "bigint", "flags.11?long"],
      [
        this.replyTo ?? null,
        TypeMessageReplyHeader,
        "flags.3?MessageReplyHeader",
      ],
      [this.date, "number", "int"],
      [this.message, "string", "string"],
      [this.media ?? null, TypeMessageMedia, "flags.9?MessageMedia"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.6?ReplyMarkup"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.7?Vector<MessageEntity>",
      ],
      [this.views ?? null, "number", "flags.10?int"],
      [this.forwards ?? null, "number", "flags.10?int"],
      [this.replies ?? null, TypeMessageReplies, "flags.23?MessageReplies"],
      [this.editDate ?? null, "number", "flags.15?int"],
      [this.postAuthor ?? null, "string", "flags.16?string"],
      [this.groupedId ?? null, "bigint", "flags.17?long"],
      [
        this.reactions ?? null,
        TypeMessageReactions,
        "flags.20?MessageReactions",
      ],
      [
        this.restrictionReason ?? null,
        [TypeRestrictionReason],
        "flags.22?Vector<RestrictionReason>",
      ],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      mentioned?: true;
      mediaUnread?: true;
      silent?: true;
      post?: true;
      fromScheduled?: true;
      legacy?: true;
      editHide?: true;
      pinned?: true;
      noforwards?: true;
      id: number;
      fromId?: TypePeer;
      peerId: TypePeer;
      fwdFrom?: TypeMessageFwdHeader;
      viaBotId?: bigint;
      replyTo?: TypeMessageReplyHeader;
      date: number;
      message: string;
      media?: TypeMessageMedia;
      replyMarkup?: TypeReplyMarkup;
      entities?: Array<TypeMessageEntity>;
      views?: number;
      forwards?: number;
      replies?: TypeMessageReplies;
      editDate?: number;
      postAuthor?: string;
      groupedId?: bigint;
      reactions?: TypeMessageReactions;
      restrictionReason?: Array<TypeRestrictionReason>;
      ttlPeriod?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.mentioned = params.mentioned;
    this.mediaUnread = params.mediaUnread;
    this.silent = params.silent;
    this.post = params.post;
    this.fromScheduled = params.fromScheduled;
    this.legacy = params.legacy;
    this.editHide = params.editHide;
    this.pinned = params.pinned;
    this.noforwards = params.noforwards;
    this.id = params.id;
    this.fromId = params.fromId;
    this.peerId = params.peerId;
    this.fwdFrom = params.fwdFrom;
    this.viaBotId = params.viaBotId;
    this.replyTo = params.replyTo;
    this.date = params.date;
    this.message = params.message;
    this.media = params.media;
    this.replyMarkup = params.replyMarkup;
    this.entities = params.entities;
    this.views = params.views;
    this.forwards = params.forwards;
    this.replies = params.replies;
    this.editDate = params.editDate;
    this.postAuthor = params.postAuthor;
    this.groupedId = params.groupedId;
    this.reactions = params.reactions;
    this.restrictionReason = params.restrictionReason;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class MessageService extends TypeMessage {
  out?: true;
  mentioned?: true;
  mediaUnread?: true;
  silent?: true;
  post?: true;
  legacy?: true;
  id: number;
  fromId?: TypePeer;
  peerId: TypePeer;
  replyTo?: TypeMessageReplyHeader;
  date: number;
  action: TypeMessageAction;
  ttlPeriod?: number;

  protected get [id]() {
    return 0x2b085862;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["out", "true", "flags.1?true"],
      ["mentioned", "true", "flags.4?true"],
      ["mediaUnread", "true", "flags.5?true"],
      ["silent", "true", "flags.13?true"],
      ["post", "true", "flags.14?true"],
      ["legacy", "true", "flags.19?true"],
      ["id", "number", "int"],
      ["fromId", TypePeer, "flags.8?Peer"],
      ["peerId", TypePeer, "Peer"],
      ["replyTo", TypeMessageReplyHeader, "flags.3?MessageReplyHeader"],
      ["date", "number", "int"],
      ["action", TypeMessageAction, "MessageAction"],
      ["ttlPeriod", "number", "flags.25?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.out ?? null, "true", "flags.1?true"],
      [this.mentioned ?? null, "true", "flags.4?true"],
      [this.mediaUnread ?? null, "true", "flags.5?true"],
      [this.silent ?? null, "true", "flags.13?true"],
      [this.post ?? null, "true", "flags.14?true"],
      [this.legacy ?? null, "true", "flags.19?true"],
      [this.id, "number", "int"],
      [this.fromId ?? null, TypePeer, "flags.8?Peer"],
      [this.peerId, TypePeer, "Peer"],
      [
        this.replyTo ?? null,
        TypeMessageReplyHeader,
        "flags.3?MessageReplyHeader",
      ],
      [this.date, "number", "int"],
      [this.action, TypeMessageAction, "MessageAction"],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      mentioned?: true;
      mediaUnread?: true;
      silent?: true;
      post?: true;
      legacy?: true;
      id: number;
      fromId?: TypePeer;
      peerId: TypePeer;
      replyTo?: TypeMessageReplyHeader;
      date: number;
      action: TypeMessageAction;
      ttlPeriod?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.mentioned = params.mentioned;
    this.mediaUnread = params.mediaUnread;
    this.silent = params.silent;
    this.post = params.post;
    this.legacy = params.legacy;
    this.id = params.id;
    this.fromId = params.fromId;
    this.peerId = params.peerId;
    this.replyTo = params.replyTo;
    this.date = params.date;
    this.action = params.action;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class MessageMediaEmpty extends TypeMessageMedia {
  protected get [id]() {
    return 0x3ded6320;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageMediaPhoto extends TypeMessageMedia {
  spoiler?: true;
  photo?: TypePhoto;
  ttlSeconds?: number;

  protected get [id]() {
    return 0x695150d7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["spoiler", "true", "flags.3?true"],
      ["photo", TypePhoto, "flags.0?Photo"],
      ["ttlSeconds", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.spoiler ?? null, "true", "flags.3?true"],
      [this.photo ?? null, TypePhoto, "flags.0?Photo"],
      [this.ttlSeconds ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(
    params: { spoiler?: true; photo?: TypePhoto; ttlSeconds?: number },
  ) {
    super();
    this.spoiler = params.spoiler;
    this.photo = params.photo;
    this.ttlSeconds = params.ttlSeconds;
  }
}

export class MessageMediaGeo extends TypeMessageMedia {
  geo: TypeGeoPoint;

  protected get [id]() {
    return 0x56e0d474;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["geo", TypeGeoPoint, "GeoPoint"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.geo, TypeGeoPoint, "GeoPoint"],
    ];
  }

  constructor(params: { geo: TypeGeoPoint }) {
    super();
    this.geo = params.geo;
  }
}

export class MessageMediaContact extends TypeMessageMedia {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  vcard: string;
  userId: bigint;

  protected get [id]() {
    return 0x70322949;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
      ["vcard", "string", "string"],
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
      [this.vcard, "string", "string"],
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(
    params: {
      phoneNumber: string;
      firstName: string;
      lastName: string;
      vcard: string;
      userId: bigint;
    },
  ) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.vcard = params.vcard;
    this.userId = params.userId;
  }
}

export class MessageMediaUnsupported extends TypeMessageMedia {
  protected get [id]() {
    return 0x9f84f49e;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageMediaDocument extends TypeMessageMedia {
  nopremium?: true;
  spoiler?: true;
  document?: TypeDocument;
  ttlSeconds?: number;

  protected get [id]() {
    return 0x9cb070d7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["nopremium", "true", "flags.3?true"],
      ["spoiler", "true", "flags.4?true"],
      ["document", TypeDocument, "flags.0?Document"],
      ["ttlSeconds", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.nopremium ?? null, "true", "flags.3?true"],
      [this.spoiler ?? null, "true", "flags.4?true"],
      [this.document ?? null, TypeDocument, "flags.0?Document"],
      [this.ttlSeconds ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(
    params: {
      nopremium?: true;
      spoiler?: true;
      document?: TypeDocument;
      ttlSeconds?: number;
    },
  ) {
    super();
    this.nopremium = params.nopremium;
    this.spoiler = params.spoiler;
    this.document = params.document;
    this.ttlSeconds = params.ttlSeconds;
  }
}

export class MessageMediaWebPage extends TypeMessageMedia {
  webpage: TypeWebPage;

  protected get [id]() {
    return 0xa32dd600;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["webpage", TypeWebPage, "WebPage"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.webpage, TypeWebPage, "WebPage"],
    ];
  }

  constructor(params: { webpage: TypeWebPage }) {
    super();
    this.webpage = params.webpage;
  }
}

export class MessageMediaVenue extends TypeMessageMedia {
  geo: TypeGeoPoint;
  title: string;
  address: string;
  provider: string;
  venueId: string;
  venueType: string;

  protected get [id]() {
    return 0x2ec0533f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["geo", TypeGeoPoint, "GeoPoint"],
      ["title", "string", "string"],
      ["address", "string", "string"],
      ["provider", "string", "string"],
      ["venueId", "string", "string"],
      ["venueType", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.geo, TypeGeoPoint, "GeoPoint"],
      [this.title, "string", "string"],
      [this.address, "string", "string"],
      [this.provider, "string", "string"],
      [this.venueId, "string", "string"],
      [this.venueType, "string", "string"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      title: string;
      address: string;
      provider: string;
      venueId: string;
      venueType: string;
    },
  ) {
    super();
    this.geo = params.geo;
    this.title = params.title;
    this.address = params.address;
    this.provider = params.provider;
    this.venueId = params.venueId;
    this.venueType = params.venueType;
  }
}

export class MessageMediaGame extends TypeMessageMedia {
  game: TypeGame;

  protected get [id]() {
    return 0xfdb19008;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["game", TypeGame, "Game"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.game, TypeGame, "Game"],
    ];
  }

  constructor(params: { game: TypeGame }) {
    super();
    this.game = params.game;
  }
}

export class MessageMediaInvoice extends TypeMessageMedia {
  shippingAddressRequested?: true;
  test?: true;
  title: string;
  description: string;
  photo?: TypeWebDocument;
  receiptMsgId?: number;
  currency: string;
  totalAmount: bigint;
  startParam: string;
  extendedMedia?: TypeMessageExtendedMedia;

  protected get [id]() {
    return 0xf6a548d3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["shippingAddressRequested", "true", "flags.1?true"],
      ["test", "true", "flags.3?true"],
      ["title", "string", "string"],
      ["description", "string", "string"],
      ["photo", TypeWebDocument, "flags.0?WebDocument"],
      ["receiptMsgId", "number", "flags.2?int"],
      ["currency", "string", "string"],
      ["totalAmount", "bigint", "long"],
      ["startParam", "string", "string"],
      [
        "extendedMedia",
        TypeMessageExtendedMedia,
        "flags.4?MessageExtendedMedia",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.shippingAddressRequested ?? null, "true", "flags.1?true"],
      [this.test ?? null, "true", "flags.3?true"],
      [this.title, "string", "string"],
      [this.description, "string", "string"],
      [this.photo ?? null, TypeWebDocument, "flags.0?WebDocument"],
      [this.receiptMsgId ?? null, "number", "flags.2?int"],
      [this.currency, "string", "string"],
      [this.totalAmount, "bigint", "long"],
      [this.startParam, "string", "string"],
      [
        this.extendedMedia ?? null,
        TypeMessageExtendedMedia,
        "flags.4?MessageExtendedMedia",
      ],
    ];
  }

  constructor(
    params: {
      shippingAddressRequested?: true;
      test?: true;
      title: string;
      description: string;
      photo?: TypeWebDocument;
      receiptMsgId?: number;
      currency: string;
      totalAmount: bigint;
      startParam: string;
      extendedMedia?: TypeMessageExtendedMedia;
    },
  ) {
    super();
    this.shippingAddressRequested = params.shippingAddressRequested;
    this.test = params.test;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.receiptMsgId = params.receiptMsgId;
    this.currency = params.currency;
    this.totalAmount = params.totalAmount;
    this.startParam = params.startParam;
    this.extendedMedia = params.extendedMedia;
  }
}

export class MessageMediaGeoLive extends TypeMessageMedia {
  geo: TypeGeoPoint;
  heading?: number;
  period: number;
  proximityNotificationRadius?: number;

  protected get [id]() {
    return 0xb940c666;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["geo", TypeGeoPoint, "GeoPoint"],
      ["heading", "number", "flags.0?int"],
      ["period", "number", "int"],
      ["proximityNotificationRadius", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.geo, TypeGeoPoint, "GeoPoint"],
      [this.heading ?? null, "number", "flags.0?int"],
      [this.period, "number", "int"],
      [this.proximityNotificationRadius ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      heading?: number;
      period: number;
      proximityNotificationRadius?: number;
    },
  ) {
    super();
    this.geo = params.geo;
    this.heading = params.heading;
    this.period = params.period;
    this.proximityNotificationRadius = params.proximityNotificationRadius;
  }
}

export class MessageMediaPoll extends TypeMessageMedia {
  poll: TypePoll;
  results: TypePollResults;

  protected get [id]() {
    return 0x4bd6e798;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["poll", TypePoll, "Poll"],
      ["results", TypePollResults, "PollResults"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.poll, TypePoll, "Poll"],
      [this.results, TypePollResults, "PollResults"],
    ];
  }

  constructor(params: { poll: TypePoll; results: TypePollResults }) {
    super();
    this.poll = params.poll;
    this.results = params.results;
  }
}

export class MessageMediaDice extends TypeMessageMedia {
  value: number;
  emoticon: string;

  protected get [id]() {
    return 0x3f7ee58b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["value", "number", "int"],
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, "number", "int"],
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { value: number; emoticon: string }) {
    super();
    this.value = params.value;
    this.emoticon = params.emoticon;
  }
}

export class MessageActionEmpty extends TypeMessageAction {
  protected get [id]() {
    return 0xb6aef7b0;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
      ["users", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
      [this.users, ["bigint"], "Vector<long>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["photo", TypePhoto, "Photo"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.photo, TypePhoto, "Photo"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["users", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.users, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { users: Array<bigint> }) {
    super();
    this.users = params.users;
  }
}

export class MessageActionChatDeleteUser extends TypeMessageAction {
  userId: bigint;

  protected get [id]() {
    return 0xa43f30cc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { userId: bigint }) {
    super();
    this.userId = params.userId;
  }
}

export class MessageActionChatJoinedByLink extends TypeMessageAction {
  inviterId: bigint;

  protected get [id]() {
    return 0x031224c3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["inviterId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.inviterId, "bigint", "long"],
    ];
  }

  constructor(params: { inviterId: bigint }) {
    super();
    this.inviterId = params.inviterId;
  }
}

export class MessageActionChannelCreate extends TypeMessageAction {
  title: string;

  protected get [id]() {
    return 0x95d2ac92;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { title: string }) {
    super();
    this.title = params.title;
  }
}

export class MessageActionChatMigrateTo extends TypeMessageAction {
  channelId: bigint;

  protected get [id]() {
    return 0xe1037f92;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
    ];
  }

  constructor(params: { channelId: bigint }) {
    super();
    this.channelId = params.channelId;
  }
}

export class MessageActionChannelMigrateFrom extends TypeMessageAction {
  title: string;
  chatId: bigint;

  protected get [id]() {
    return 0xea3948e9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
      ["chatId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
      [this.chatId, "bigint", "long"],
    ];
  }

  constructor(params: { title: string; chatId: bigint }) {
    super();
    this.title = params.title;
    this.chatId = params.chatId;
  }
}

export class MessageActionPinMessage extends TypeMessageAction {
  protected get [id]() {
    return 0x94bd38ed;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionHistoryClear extends TypeMessageAction {
  protected get [id]() {
    return 0x9fbab604;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionGameScore extends TypeMessageAction {
  gameId: bigint;
  score: number;

  protected get [id]() {
    return 0x92a72876;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["gameId", "bigint", "long"],
      ["score", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.gameId, "bigint", "long"],
      [this.score, "number", "int"],
    ];
  }

  constructor(params: { gameId: bigint; score: number }) {
    super();
    this.gameId = params.gameId;
    this.score = params.score;
  }
}

export class MessageActionPaymentSentMe extends TypeMessageAction {
  recurringInit?: true;
  recurringUsed?: true;
  currency: string;
  totalAmount: bigint;
  payload: Uint8Array;
  info?: TypePaymentRequestedInfo;
  shippingOptionId?: string;
  charge: TypePaymentCharge;

  protected get [id]() {
    return 0x8f31b327;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["recurringInit", "true", "flags.2?true"],
      ["recurringUsed", "true", "flags.3?true"],
      ["currency", "string", "string"],
      ["totalAmount", "bigint", "long"],
      ["payload", Uint8Array, "bytes"],
      ["info", TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      ["shippingOptionId", "string", "flags.1?string"],
      ["charge", TypePaymentCharge, "PaymentCharge"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.recurringInit ?? null, "true", "flags.2?true"],
      [this.recurringUsed ?? null, "true", "flags.3?true"],
      [this.currency, "string", "string"],
      [this.totalAmount, "bigint", "long"],
      [this.payload, Uint8Array, "bytes"],
      [
        this.info ?? null,
        TypePaymentRequestedInfo,
        "flags.0?PaymentRequestedInfo",
      ],
      [this.shippingOptionId ?? null, "string", "flags.1?string"],
      [this.charge, TypePaymentCharge, "PaymentCharge"],
    ];
  }

  constructor(
    params: {
      recurringInit?: true;
      recurringUsed?: true;
      currency: string;
      totalAmount: bigint;
      payload: Uint8Array;
      info?: TypePaymentRequestedInfo;
      shippingOptionId?: string;
      charge: TypePaymentCharge;
    },
  ) {
    super();
    this.recurringInit = params.recurringInit;
    this.recurringUsed = params.recurringUsed;
    this.currency = params.currency;
    this.totalAmount = params.totalAmount;
    this.payload = params.payload;
    this.info = params.info;
    this.shippingOptionId = params.shippingOptionId;
    this.charge = params.charge;
  }
}

export class MessageActionPaymentSent extends TypeMessageAction {
  recurringInit?: true;
  recurringUsed?: true;
  currency: string;
  totalAmount: bigint;
  invoiceSlug?: string;

  protected get [id]() {
    return 0x96163f56;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["recurringInit", "true", "flags.2?true"],
      ["recurringUsed", "true", "flags.3?true"],
      ["currency", "string", "string"],
      ["totalAmount", "bigint", "long"],
      ["invoiceSlug", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.recurringInit ?? null, "true", "flags.2?true"],
      [this.recurringUsed ?? null, "true", "flags.3?true"],
      [this.currency, "string", "string"],
      [this.totalAmount, "bigint", "long"],
      [this.invoiceSlug ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(
    params: {
      recurringInit?: true;
      recurringUsed?: true;
      currency: string;
      totalAmount: bigint;
      invoiceSlug?: string;
    },
  ) {
    super();
    this.recurringInit = params.recurringInit;
    this.recurringUsed = params.recurringUsed;
    this.currency = params.currency;
    this.totalAmount = params.totalAmount;
    this.invoiceSlug = params.invoiceSlug;
  }
}

export class MessageActionPhoneCall extends TypeMessageAction {
  video?: true;
  callId: bigint;
  reason?: TypePhoneCallDiscardReason;
  duration?: number;

  protected get [id]() {
    return 0x80e11a7f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.2?true"],
      ["callId", "bigint", "long"],
      ["reason", TypePhoneCallDiscardReason, "flags.0?PhoneCallDiscardReason"],
      ["duration", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.2?true"],
      [this.callId, "bigint", "long"],
      [
        this.reason ?? null,
        TypePhoneCallDiscardReason,
        "flags.0?PhoneCallDiscardReason",
      ],
      [this.duration ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(
    params: {
      video?: true;
      callId: bigint;
      reason?: TypePhoneCallDiscardReason;
      duration?: number;
    },
  ) {
    super();
    this.video = params.video;
    this.callId = params.callId;
    this.reason = params.reason;
    this.duration = params.duration;
  }
}

export class MessageActionScreenshotTaken extends TypeMessageAction {
  protected get [id]() {
    return 0x4792929b;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionCustomAction extends TypeMessageAction {
  message: string;

  protected get [id]() {
    return 0xfae69f56;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { message: string }) {
    super();
    this.message = params.message;
  }
}

export class MessageActionBotAllowed extends TypeMessageAction {
  attachMenu?: true;
  domain?: string;
  app?: TypeBotApp;

  protected get [id]() {
    return 0xc516d679;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["attachMenu", "true", "flags.1?true"],
      ["domain", "string", "flags.0?string"],
      ["app", TypeBotApp, "flags.2?BotApp"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.attachMenu ?? null, "true", "flags.1?true"],
      [this.domain ?? null, "string", "flags.0?string"],
      [this.app ?? null, TypeBotApp, "flags.2?BotApp"],
    ];
  }

  constructor(
    params: { attachMenu?: true; domain?: string; app?: TypeBotApp },
  ) {
    super();
    this.attachMenu = params.attachMenu;
    this.domain = params.domain;
    this.app = params.app;
  }
}

export class MessageActionSecureValuesSentMe extends TypeMessageAction {
  values: Array<TypeSecureValue>;
  credentials: TypeSecureCredentialsEncrypted;

  protected get [id]() {
    return 0x1b287353;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["values", [TypeSecureValue], "Vector<SecureValue>"],
      [
        "credentials",
        TypeSecureCredentialsEncrypted,
        "SecureCredentialsEncrypted",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      [this.values, [TypeSecureValue], "Vector<SecureValue>"],
      [
        this.credentials,
        TypeSecureCredentialsEncrypted,
        "SecureCredentialsEncrypted",
      ],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["types", [TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.types, [TypeSecureValueType], "Vector<SecureValueType>"],
    ];
  }

  constructor(params: { types: Array<TypeSecureValueType> }) {
    super();
    this.types = params.types;
  }
}

export class MessageActionContactSignUp extends TypeMessageAction {
  protected get [id]() {
    return 0xf3f25f76;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionGeoProximityReached extends TypeMessageAction {
  fromId: TypePeer;
  toId: TypePeer;
  distance: number;

  protected get [id]() {
    return 0x98e0d697;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fromId", TypePeer, "Peer"],
      ["toId", TypePeer, "Peer"],
      ["distance", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fromId, TypePeer, "Peer"],
      [this.toId, TypePeer, "Peer"],
      [this.distance, "number", "int"],
    ];
  }

  constructor(params: { fromId: TypePeer; toId: TypePeer; distance: number }) {
    super();
    this.fromId = params.fromId;
    this.toId = params.toId;
    this.distance = params.distance;
  }
}

export class MessageActionGroupCall extends TypeMessageAction {
  call: TypeInputGroupCall;
  duration?: number;

  protected get [id]() {
    return 0x7a0d7f42;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["call", TypeInputGroupCall, "InputGroupCall"],
      ["duration", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.call, TypeInputGroupCall, "InputGroupCall"],
      [this.duration ?? null, "number", "flags.0?int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["call", TypeInputGroupCall, "InputGroupCall"],
      ["users", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, TypeInputGroupCall, "InputGroupCall"],
      [this.users, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { call: TypeInputGroupCall; users: Array<bigint> }) {
    super();
    this.call = params.call;
    this.users = params.users;
  }
}

export class MessageActionSetMessagesTTL extends TypeMessageAction {
  period: number;
  autoSettingFrom?: bigint;

  protected get [id]() {
    return 0x3c134d7b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["period", "number", "int"],
      ["autoSettingFrom", "bigint", "flags.0?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.period, "number", "int"],
      [this.autoSettingFrom ?? null, "bigint", "flags.0?long"],
    ];
  }

  constructor(params: { period: number; autoSettingFrom?: bigint }) {
    super();
    this.period = params.period;
    this.autoSettingFrom = params.autoSettingFrom;
  }
}

export class MessageActionGroupCallScheduled extends TypeMessageAction {
  call: TypeInputGroupCall;
  scheduleDate: number;

  protected get [id]() {
    return 0xb3a07661;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", TypeInputGroupCall, "InputGroupCall"],
      ["scheduleDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, TypeInputGroupCall, "InputGroupCall"],
      [this.scheduleDate, "number", "int"],
    ];
  }

  constructor(params: { call: TypeInputGroupCall; scheduleDate: number }) {
    super();
    this.call = params.call;
    this.scheduleDate = params.scheduleDate;
  }
}

export class MessageActionSetChatTheme extends TypeMessageAction {
  emoticon: string;

  protected get [id]() {
    return 0xaa786345;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class MessageActionChatJoinedByRequest extends TypeMessageAction {
  protected get [id]() {
    return 0xebbca3cb;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessageActionWebViewDataSentMe extends TypeMessageAction {
  text: string;
  data: string;

  protected get [id]() {
    return 0x47dd8079;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["data", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.data, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class MessageActionGiftPremium extends TypeMessageAction {
  currency: string;
  amount: bigint;
  months: number;

  protected get [id]() {
    return 0xaba0f5c6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["currency", "string", "string"],
      ["amount", "bigint", "long"],
      ["months", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.currency, "string", "string"],
      [this.amount, "bigint", "long"],
      [this.months, "number", "int"],
    ];
  }

  constructor(params: { currency: string; amount: bigint; months: number }) {
    super();
    this.currency = params.currency;
    this.amount = params.amount;
    this.months = params.months;
  }
}

export class MessageActionTopicCreate extends TypeMessageAction {
  title: string;
  iconColor: number;
  iconEmojiId?: bigint;

  protected get [id]() {
    return 0x0d999256;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["title", "string", "string"],
      ["iconColor", "number", "int"],
      ["iconEmojiId", "bigint", "flags.0?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.title, "string", "string"],
      [this.iconColor, "number", "int"],
      [this.iconEmojiId ?? null, "bigint", "flags.0?long"],
    ];
  }

  constructor(
    params: { title: string; iconColor: number; iconEmojiId?: bigint },
  ) {
    super();
    this.title = params.title;
    this.iconColor = params.iconColor;
    this.iconEmojiId = params.iconEmojiId;
  }
}

export class MessageActionTopicEdit extends TypeMessageAction {
  title?: string;
  iconEmojiId?: bigint;
  closed?: boolean;
  hidden?: boolean;

  protected get [id]() {
    return 0xc0944820;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["title", "string", "flags.0?string"],
      ["iconEmojiId", "bigint", "flags.1?long"],
      ["closed", "boolean", "flags.2?Bool"],
      ["hidden", "boolean", "flags.3?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.iconEmojiId ?? null, "bigint", "flags.1?long"],
      [this.closed ?? null, "boolean", "flags.2?Bool"],
      [this.hidden ?? null, "boolean", "flags.3?Bool"],
    ];
  }

  constructor(
    params: {
      title?: string;
      iconEmojiId?: bigint;
      closed?: boolean;
      hidden?: boolean;
    },
  ) {
    super();
    this.title = params.title;
    this.iconEmojiId = params.iconEmojiId;
    this.closed = params.closed;
    this.hidden = params.hidden;
  }
}

export class MessageActionSuggestProfilePhoto extends TypeMessageAction {
  photo: TypePhoto;

  protected get [id]() {
    return 0x57de635e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["photo", TypePhoto, "Photo"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.photo, TypePhoto, "Photo"],
    ];
  }

  constructor(params: { photo: TypePhoto }) {
    super();
    this.photo = params.photo;
  }
}

export class MessageActionRequestedPeer extends TypeMessageAction {
  buttonId: number;
  peer: TypePeer;

  protected get [id]() {
    return 0xfe77345d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["buttonId", "number", "int"],
      ["peer", TypePeer, "Peer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.buttonId, "number", "int"],
      [this.peer, TypePeer, "Peer"],
    ];
  }

  constructor(params: { buttonId: number; peer: TypePeer }) {
    super();
    this.buttonId = params.buttonId;
    this.peer = params.peer;
  }
}

export class Dialog extends Constructor {
  pinned?: true;
  unreadMark?: true;
  peer: TypePeer;
  topMessage: number;
  readInboxMaxId: number;
  readOutboxMaxId: number;
  unreadCount: number;
  unreadMentionsCount: number;
  unreadReactionsCount: number;
  notifySettings: TypePeerNotifySettings;
  pts?: number;
  draft?: TypeDraftMessage;
  folderId?: number;
  ttlPeriod?: number;

  protected get [id]() {
    return 0xd58a08c6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.2?true"],
      ["unreadMark", "true", "flags.3?true"],
      ["peer", TypePeer, "Peer"],
      ["topMessage", "number", "int"],
      ["readInboxMaxId", "number", "int"],
      ["readOutboxMaxId", "number", "int"],
      ["unreadCount", "number", "int"],
      ["unreadMentionsCount", "number", "int"],
      ["unreadReactionsCount", "number", "int"],
      ["notifySettings", TypePeerNotifySettings, "PeerNotifySettings"],
      ["pts", "number", "flags.0?int"],
      ["draft", TypeDraftMessage, "flags.1?DraftMessage"],
      ["folderId", "number", "flags.4?int"],
      ["ttlPeriod", "number", "flags.5?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.2?true"],
      [this.unreadMark ?? null, "true", "flags.3?true"],
      [this.peer, TypePeer, "Peer"],
      [this.topMessage, "number", "int"],
      [this.readInboxMaxId, "number", "int"],
      [this.readOutboxMaxId, "number", "int"],
      [this.unreadCount, "number", "int"],
      [this.unreadMentionsCount, "number", "int"],
      [this.unreadReactionsCount, "number", "int"],
      [this.notifySettings, TypePeerNotifySettings, "PeerNotifySettings"],
      [this.pts ?? null, "number", "flags.0?int"],
      [this.draft ?? null, TypeDraftMessage, "flags.1?DraftMessage"],
      [this.folderId ?? null, "number", "flags.4?int"],
      [this.ttlPeriod ?? null, "number", "flags.5?int"],
    ];
  }

  constructor(
    params: {
      pinned?: true;
      unreadMark?: true;
      peer: TypePeer;
      topMessage: number;
      readInboxMaxId: number;
      readOutboxMaxId: number;
      unreadCount: number;
      unreadMentionsCount: number;
      unreadReactionsCount: number;
      notifySettings: TypePeerNotifySettings;
      pts?: number;
      draft?: TypeDraftMessage;
      folderId?: number;
      ttlPeriod?: number;
    },
  ) {
    super();
    this.pinned = params.pinned;
    this.unreadMark = params.unreadMark;
    this.peer = params.peer;
    this.topMessage = params.topMessage;
    this.readInboxMaxId = params.readInboxMaxId;
    this.readOutboxMaxId = params.readOutboxMaxId;
    this.unreadCount = params.unreadCount;
    this.unreadMentionsCount = params.unreadMentionsCount;
    this.unreadReactionsCount = params.unreadReactionsCount;
    this.notifySettings = params.notifySettings;
    this.pts = params.pts;
    this.draft = params.draft;
    this.folderId = params.folderId;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class DialogFolder extends TypeDialog {
  pinned?: true;
  folder: TypeFolder;
  peer: TypePeer;
  topMessage: number;
  unreadMutedPeersCount: number;
  unreadUnmutedPeersCount: number;
  unreadMutedMessagesCount: number;
  unreadUnmutedMessagesCount: number;

  protected get [id]() {
    return 0x71bd134c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.2?true"],
      ["folder", TypeFolder, "Folder"],
      ["peer", TypePeer, "Peer"],
      ["topMessage", "number", "int"],
      ["unreadMutedPeersCount", "number", "int"],
      ["unreadUnmutedPeersCount", "number", "int"],
      ["unreadMutedMessagesCount", "number", "int"],
      ["unreadUnmutedMessagesCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.2?true"],
      [this.folder, TypeFolder, "Folder"],
      [this.peer, TypePeer, "Peer"],
      [this.topMessage, "number", "int"],
      [this.unreadMutedPeersCount, "number", "int"],
      [this.unreadUnmutedPeersCount, "number", "int"],
      [this.unreadMutedMessagesCount, "number", "int"],
      [this.unreadUnmutedMessagesCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      pinned?: true;
      folder: TypeFolder;
      peer: TypePeer;
      topMessage: number;
      unreadMutedPeersCount: number;
      unreadUnmutedPeersCount: number;
      unreadMutedMessagesCount: number;
      unreadUnmutedMessagesCount: number;
    },
  ) {
    super();
    this.pinned = params.pinned;
    this.folder = params.folder;
    this.peer = params.peer;
    this.topMessage = params.topMessage;
    this.unreadMutedPeersCount = params.unreadMutedPeersCount;
    this.unreadUnmutedPeersCount = params.unreadUnmutedPeersCount;
    this.unreadMutedMessagesCount = params.unreadMutedMessagesCount;
    this.unreadUnmutedMessagesCount = params.unreadUnmutedMessagesCount;
  }
}

export class PhotoEmpty extends TypePhoto {
  id: bigint;

  protected get [id]() {
    return 0x2331b22d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class Photo extends Constructor {
  hasStickers?: true;
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;
  date: number;
  sizes: Array<TypePhotoSize>;
  videoSizes?: Array<TypeVideoSize>;
  dcId: number;

  protected get [id]() {
    return 0xfb197a65;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hasStickers", "true", "flags.0?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["fileReference", Uint8Array, "bytes"],
      ["date", "number", "int"],
      ["sizes", [TypePhotoSize], "Vector<PhotoSize>"],
      ["videoSizes", [TypeVideoSize], "flags.1?Vector<VideoSize>"],
      ["dcId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hasStickers ?? null, "true", "flags.0?true"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.fileReference, Uint8Array, "bytes"],
      [this.date, "number", "int"],
      [this.sizes, [TypePhotoSize], "Vector<PhotoSize>"],
      [this.videoSizes ?? null, [TypeVideoSize], "flags.1?Vector<VideoSize>"],
      [this.dcId, "number", "int"],
    ];
  }

  constructor(
    params: {
      hasStickers?: true;
      id: bigint;
      accessHash: bigint;
      fileReference: Uint8Array;
      date: number;
      sizes: Array<TypePhotoSize>;
      videoSizes?: Array<TypeVideoSize>;
      dcId: number;
    },
  ) {
    super();
    this.hasStickers = params.hasStickers;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
    this.date = params.date;
    this.sizes = params.sizes;
    this.videoSizes = params.videoSizes;
    this.dcId = params.dcId;
  }
}

export class PhotoSizeEmpty extends TypePhotoSize {
  type: string;

  protected get [id]() {
    return 0x0e17e23c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, "string", "string"],
    ];
  }

  constructor(params: { type: string }) {
    super();
    this.type = params.type;
  }
}

export class PhotoSize extends Constructor {
  type: string;
  w: number;
  h: number;
  size: number;

  protected get [id]() {
    return 0x75c78e60;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", "string", "string"],
      ["w", "number", "int"],
      ["h", "number", "int"],
      ["size", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, "string", "string"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
      [this.size, "number", "int"],
    ];
  }

  constructor(params: { type: string; w: number; h: number; size: number }) {
    super();
    this.type = params.type;
    this.w = params.w;
    this.h = params.h;
    this.size = params.size;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["type", "string", "string"],
      ["w", "number", "int"],
      ["h", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, "string", "string"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
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

export class PhotoStrippedSize extends TypePhotoSize {
  type: string;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xe0b0bc2e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", "string", "string"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, "string", "string"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { type: string; bytes: Uint8Array }) {
    super();
    this.type = params.type;
    this.bytes = params.bytes;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["type", "string", "string"],
      ["w", "number", "int"],
      ["h", "number", "int"],
      ["sizes", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, "string", "string"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
      [this.sizes, ["number"], "Vector<int>"],
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

export class PhotoPathSize extends TypePhotoSize {
  type: string;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xd8214d41;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", "string", "string"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, "string", "string"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { type: string; bytes: Uint8Array }) {
    super();
    this.type = params.type;
    this.bytes = params.bytes;
  }
}

export class GeoPointEmpty extends TypeGeoPoint {
  protected get [id]() {
    return 0x1117dd5f;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class GeoPoint extends Constructor {
  long: number;
  lat: number;
  accessHash: bigint;
  accuracyRadius?: number;

  protected get [id]() {
    return 0xb2a2f663;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["long", "number", "double"],
      ["lat", "number", "double"],
      ["accessHash", "bigint", "long"],
      ["accuracyRadius", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.long, "number", "double"],
      [this.lat, "number", "double"],
      [this.accessHash, "bigint", "long"],
      [this.accuracyRadius ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(
    params: {
      long: number;
      lat: number;
      accessHash: bigint;
      accuracyRadius?: number;
    },
  ) {
    super();
    this.long = params.long;
    this.lat = params.lat;
    this.accessHash = params.accessHash;
    this.accuracyRadius = params.accuracyRadius;
  }
}

export class AuthSentCode extends Constructor {
  type: TypeAuthSentCodeType;
  phoneCodeHash: string;
  nextType?: TypeAuthCodeType;
  timeout?: number;

  protected get [id]() {
    return 0x5e002502;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["type", TypeAuthSentCodeType, "auth.SentCodeType"],
      ["phoneCodeHash", "string", "string"],
      ["nextType", TypeAuthCodeType, "flags.1?auth.CodeType"],
      ["timeout", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.type, TypeAuthSentCodeType, "auth.SentCodeType"],
      [this.phoneCodeHash, "string", "string"],
      [this.nextType ?? null, TypeAuthCodeType, "flags.1?auth.CodeType"],
      [this.timeout ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(
    params: {
      type: TypeAuthSentCodeType;
      phoneCodeHash: string;
      nextType?: TypeAuthCodeType;
      timeout?: number;
    },
  ) {
    super();
    this.type = params.type;
    this.phoneCodeHash = params.phoneCodeHash;
    this.nextType = params.nextType;
    this.timeout = params.timeout;
  }
}

export class AuthSentCodeSuccess extends TypeAuthSentCode {
  authorization: TypeAuthAuthorization;

  protected get [id]() {
    return 0x2390fe44;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["authorization", TypeAuthAuthorization, "auth.Authorization"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.authorization, TypeAuthAuthorization, "auth.Authorization"],
    ];
  }

  constructor(params: { authorization: TypeAuthAuthorization }) {
    super();
    this.authorization = params.authorization;
  }
}

export class AuthAuthorization extends Constructor {
  setupPasswordRequired?: true;
  otherwiseReloginDays?: number;
  tmpSessions?: number;
  futureAuthToken?: Uint8Array;
  user: TypeUser;

  protected get [id]() {
    return 0x2ea2c0d4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["setupPasswordRequired", "true", "flags.1?true"],
      ["otherwiseReloginDays", "number", "flags.1?int"],
      ["tmpSessions", "number", "flags.0?int"],
      ["futureAuthToken", Uint8Array, "flags.2?bytes"],
      ["user", TypeUser, "User"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.setupPasswordRequired ?? null, "true", "flags.1?true"],
      [this.otherwiseReloginDays ?? null, "number", "flags.1?int"],
      [this.tmpSessions ?? null, "number", "flags.0?int"],
      [this.futureAuthToken ?? null, Uint8Array, "flags.2?bytes"],
      [this.user, TypeUser, "User"],
    ];
  }

  constructor(
    params: {
      setupPasswordRequired?: true;
      otherwiseReloginDays?: number;
      tmpSessions?: number;
      futureAuthToken?: Uint8Array;
      user: TypeUser;
    },
  ) {
    super();
    this.setupPasswordRequired = params.setupPasswordRequired;
    this.otherwiseReloginDays = params.otherwiseReloginDays;
    this.tmpSessions = params.tmpSessions;
    this.futureAuthToken = params.futureAuthToken;
    this.user = params.user;
  }
}

export class AuthAuthorizationSignUpRequired extends TypeAuthAuthorization {
  termsOfService?: TypeHelpTermsOfService;

  protected get [id]() {
    return 0x44747e9a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["termsOfService", TypeHelpTermsOfService, "flags.0?help.TermsOfService"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [
        this.termsOfService ?? null,
        TypeHelpTermsOfService,
        "flags.0?help.TermsOfService",
      ],
    ];
  }

  constructor(params: { termsOfService?: TypeHelpTermsOfService }) {
    super();
    this.termsOfService = params.termsOfService;
  }
}

export class AuthExportedAuthorization extends Constructor {
  id: bigint;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xb434e2b8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { id: bigint; bytes: Uint8Array }) {
    super();
    this.id = params.id;
    this.bytes = params.bytes;
  }
}

export class InputNotifyPeer extends Constructor {
  peer: TypeInputPeer;

  protected get [id]() {
    return 0xb8bc5b0c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class InputNotifyUsers extends TypeInputNotifyPeer {
  protected get [id]() {
    return 0x193b4417;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputNotifyBroadcasts extends TypeInputNotifyPeer {
  protected get [id]() {
    return 0xb1db7c7e;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputNotifyForumTopic extends TypeInputNotifyPeer {
  peer: TypeInputPeer;
  topMsgId: number;

  protected get [id]() {
    return 0x5c467992;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
      ["topMsgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.topMsgId, "number", "int"],
    ];
  }

  constructor(params: { peer: TypeInputPeer; topMsgId: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
  }
}

export class InputPeerNotifySettings extends Constructor {
  showPreviews?: boolean;
  silent?: boolean;
  muteUntil?: number;
  sound?: TypeNotificationSound;

  protected get [id]() {
    return 0xdf1f002b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["showPreviews", "boolean", "flags.0?Bool"],
      ["silent", "boolean", "flags.1?Bool"],
      ["muteUntil", "number", "flags.2?int"],
      ["sound", TypeNotificationSound, "flags.3?NotificationSound"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.showPreviews ?? null, "boolean", "flags.0?Bool"],
      [this.silent ?? null, "boolean", "flags.1?Bool"],
      [this.muteUntil ?? null, "number", "flags.2?int"],
      [this.sound ?? null, TypeNotificationSound, "flags.3?NotificationSound"],
    ];
  }

  constructor(
    params: {
      showPreviews?: boolean;
      silent?: boolean;
      muteUntil?: number;
      sound?: TypeNotificationSound;
    },
  ) {
    super();
    this.showPreviews = params.showPreviews;
    this.silent = params.silent;
    this.muteUntil = params.muteUntil;
    this.sound = params.sound;
  }
}

export class PeerNotifySettings extends Constructor {
  showPreviews?: boolean;
  silent?: boolean;
  muteUntil?: number;
  iosSound?: TypeNotificationSound;
  androidSound?: TypeNotificationSound;
  otherSound?: TypeNotificationSound;

  protected get [id]() {
    return 0xa83b0426;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["showPreviews", "boolean", "flags.0?Bool"],
      ["silent", "boolean", "flags.1?Bool"],
      ["muteUntil", "number", "flags.2?int"],
      ["iosSound", TypeNotificationSound, "flags.3?NotificationSound"],
      ["androidSound", TypeNotificationSound, "flags.4?NotificationSound"],
      ["otherSound", TypeNotificationSound, "flags.5?NotificationSound"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.showPreviews ?? null, "boolean", "flags.0?Bool"],
      [this.silent ?? null, "boolean", "flags.1?Bool"],
      [this.muteUntil ?? null, "number", "flags.2?int"],
      [
        this.iosSound ?? null,
        TypeNotificationSound,
        "flags.3?NotificationSound",
      ],
      [
        this.androidSound ?? null,
        TypeNotificationSound,
        "flags.4?NotificationSound",
      ],
      [
        this.otherSound ?? null,
        TypeNotificationSound,
        "flags.5?NotificationSound",
      ],
    ];
  }

  constructor(
    params: {
      showPreviews?: boolean;
      silent?: boolean;
      muteUntil?: number;
      iosSound?: TypeNotificationSound;
      androidSound?: TypeNotificationSound;
      otherSound?: TypeNotificationSound;
    },
  ) {
    super();
    this.showPreviews = params.showPreviews;
    this.silent = params.silent;
    this.muteUntil = params.muteUntil;
    this.iosSound = params.iosSound;
    this.androidSound = params.androidSound;
    this.otherSound = params.otherSound;
  }
}

export class PeerSettings extends Constructor {
  reportSpam?: true;
  addContact?: true;
  blockContact?: true;
  shareContact?: true;
  needContactsException?: true;
  reportGeo?: true;
  autoarchived?: true;
  inviteMembers?: true;
  requestChatBroadcast?: true;
  geoDistance?: number;
  requestChatTitle?: string;
  requestChatDate?: number;

  protected get [id]() {
    return 0xa518110d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["reportSpam", "true", "flags.0?true"],
      ["addContact", "true", "flags.1?true"],
      ["blockContact", "true", "flags.2?true"],
      ["shareContact", "true", "flags.3?true"],
      ["needContactsException", "true", "flags.4?true"],
      ["reportGeo", "true", "flags.5?true"],
      ["autoarchived", "true", "flags.7?true"],
      ["inviteMembers", "true", "flags.8?true"],
      ["requestChatBroadcast", "true", "flags.10?true"],
      ["geoDistance", "number", "flags.6?int"],
      ["requestChatTitle", "string", "flags.9?string"],
      ["requestChatDate", "number", "flags.9?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.reportSpam ?? null, "true", "flags.0?true"],
      [this.addContact ?? null, "true", "flags.1?true"],
      [this.blockContact ?? null, "true", "flags.2?true"],
      [this.shareContact ?? null, "true", "flags.3?true"],
      [this.needContactsException ?? null, "true", "flags.4?true"],
      [this.reportGeo ?? null, "true", "flags.5?true"],
      [this.autoarchived ?? null, "true", "flags.7?true"],
      [this.inviteMembers ?? null, "true", "flags.8?true"],
      [this.requestChatBroadcast ?? null, "true", "flags.10?true"],
      [this.geoDistance ?? null, "number", "flags.6?int"],
      [this.requestChatTitle ?? null, "string", "flags.9?string"],
      [this.requestChatDate ?? null, "number", "flags.9?int"],
    ];
  }

  constructor(
    params: {
      reportSpam?: true;
      addContact?: true;
      blockContact?: true;
      shareContact?: true;
      needContactsException?: true;
      reportGeo?: true;
      autoarchived?: true;
      inviteMembers?: true;
      requestChatBroadcast?: true;
      geoDistance?: number;
      requestChatTitle?: string;
      requestChatDate?: number;
    },
  ) {
    super();
    this.reportSpam = params.reportSpam;
    this.addContact = params.addContact;
    this.blockContact = params.blockContact;
    this.shareContact = params.shareContact;
    this.needContactsException = params.needContactsException;
    this.reportGeo = params.reportGeo;
    this.autoarchived = params.autoarchived;
    this.inviteMembers = params.inviteMembers;
    this.requestChatBroadcast = params.requestChatBroadcast;
    this.geoDistance = params.geoDistance;
    this.requestChatTitle = params.requestChatTitle;
    this.requestChatDate = params.requestChatDate;
  }
}

export class WallPaper extends Constructor {
  id: bigint;
  creator?: true;
  default?: true;
  pattern?: true;
  dark?: true;
  accessHash: bigint;
  slug: string;
  document: TypeDocument;
  settings?: TypeWallPaperSettings;

  protected get [id]() {
    return 0xa437c3ed;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["flags", flags, "#"],
      ["creator", "true", "flags.0?true"],
      ["default", "true", "flags.1?true"],
      ["pattern", "true", "flags.3?true"],
      ["dark", "true", "flags.4?true"],
      ["accessHash", "bigint", "long"],
      ["slug", "string", "string"],
      ["document", TypeDocument, "Document"],
      ["settings", TypeWallPaperSettings, "flags.2?WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      ["flags", flags, "#"],
      [this.creator ?? null, "true", "flags.0?true"],
      [this.default ?? null, "true", "flags.1?true"],
      [this.pattern ?? null, "true", "flags.3?true"],
      [this.dark ?? null, "true", "flags.4?true"],
      [this.accessHash, "bigint", "long"],
      [this.slug, "string", "string"],
      [this.document, TypeDocument, "Document"],
      [
        this.settings ?? null,
        TypeWallPaperSettings,
        "flags.2?WallPaperSettings",
      ],
    ];
  }

  constructor(
    params: {
      id: bigint;
      creator?: true;
      default?: true;
      pattern?: true;
      dark?: true;
      accessHash: bigint;
      slug: string;
      document: TypeDocument;
      settings?: TypeWallPaperSettings;
    },
  ) {
    super();
    this.id = params.id;
    this.creator = params.creator;
    this.default = params.default;
    this.pattern = params.pattern;
    this.dark = params.dark;
    this.accessHash = params.accessHash;
    this.slug = params.slug;
    this.document = params.document;
    this.settings = params.settings;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["flags", flags, "#"],
      ["default", "true", "flags.1?true"],
      ["dark", "true", "flags.4?true"],
      ["settings", TypeWallPaperSettings, "flags.2?WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      ["flags", flags, "#"],
      [this.default ?? null, "true", "flags.1?true"],
      [this.dark ?? null, "true", "flags.4?true"],
      [
        this.settings ?? null,
        TypeWallPaperSettings,
        "flags.2?WallPaperSettings",
      ],
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

export class InputReportReasonSpam extends TypeReportReason {
  protected get [id]() {
    return 0x58dbcab8;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonGeoIrrelevant extends TypeReportReason {
  protected get [id]() {
    return 0xdbd4feed;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonFake extends TypeReportReason {
  protected get [id]() {
    return 0xf5ddd6e7;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputReportReasonIllegalDrugs extends TypeReportReason {
  protected get [id]() {
    return 0x0a8eb2be;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UserFull extends Constructor {
  blocked?: true;
  phoneCallsAvailable?: true;
  phoneCallsPrivate?: true;
  canPinMessage?: true;
  hasScheduled?: true;
  videoCallsAvailable?: true;
  voiceMessagesForbidden?: true;
  translationsDisabled?: true;
  id: bigint;
  about?: string;
  settings: TypePeerSettings;
  personalPhoto?: TypePhoto;
  profilePhoto?: TypePhoto;
  fallbackPhoto?: TypePhoto;
  notifySettings: TypePeerNotifySettings;
  botInfo?: TypeBotInfo;
  pinnedMsgId?: number;
  commonChatsCount: number;
  folderId?: number;
  ttlPeriod?: number;
  themeEmoticon?: string;
  privateForwardName?: string;
  botGroupAdminRights?: TypeChatAdminRights;
  botBroadcastAdminRights?: TypeChatAdminRights;
  premiumGifts?: Array<TypePremiumGiftOption>;

  protected get [id]() {
    return 0xf8d32aed;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["blocked", "true", "flags.0?true"],
      ["phoneCallsAvailable", "true", "flags.4?true"],
      ["phoneCallsPrivate", "true", "flags.5?true"],
      ["canPinMessage", "true", "flags.7?true"],
      ["hasScheduled", "true", "flags.12?true"],
      ["videoCallsAvailable", "true", "flags.13?true"],
      ["voiceMessagesForbidden", "true", "flags.20?true"],
      ["translationsDisabled", "true", "flags.23?true"],
      ["id", "bigint", "long"],
      ["about", "string", "flags.1?string"],
      ["settings", TypePeerSettings, "PeerSettings"],
      ["personalPhoto", TypePhoto, "flags.21?Photo"],
      ["profilePhoto", TypePhoto, "flags.2?Photo"],
      ["fallbackPhoto", TypePhoto, "flags.22?Photo"],
      ["notifySettings", TypePeerNotifySettings, "PeerNotifySettings"],
      ["botInfo", TypeBotInfo, "flags.3?BotInfo"],
      ["pinnedMsgId", "number", "flags.6?int"],
      ["commonChatsCount", "number", "int"],
      ["folderId", "number", "flags.11?int"],
      ["ttlPeriod", "number", "flags.14?int"],
      ["themeEmoticon", "string", "flags.15?string"],
      ["privateForwardName", "string", "flags.16?string"],
      ["botGroupAdminRights", TypeChatAdminRights, "flags.17?ChatAdminRights"],
      [
        "botBroadcastAdminRights",
        TypeChatAdminRights,
        "flags.18?ChatAdminRights",
      ],
      [
        "premiumGifts",
        [TypePremiumGiftOption],
        "flags.19?Vector<PremiumGiftOption>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.blocked ?? null, "true", "flags.0?true"],
      [this.phoneCallsAvailable ?? null, "true", "flags.4?true"],
      [this.phoneCallsPrivate ?? null, "true", "flags.5?true"],
      [this.canPinMessage ?? null, "true", "flags.7?true"],
      [this.hasScheduled ?? null, "true", "flags.12?true"],
      [this.videoCallsAvailable ?? null, "true", "flags.13?true"],
      [this.voiceMessagesForbidden ?? null, "true", "flags.20?true"],
      [this.translationsDisabled ?? null, "true", "flags.23?true"],
      [this.id, "bigint", "long"],
      [this.about ?? null, "string", "flags.1?string"],
      [this.settings, TypePeerSettings, "PeerSettings"],
      [this.personalPhoto ?? null, TypePhoto, "flags.21?Photo"],
      [this.profilePhoto ?? null, TypePhoto, "flags.2?Photo"],
      [this.fallbackPhoto ?? null, TypePhoto, "flags.22?Photo"],
      [this.notifySettings, TypePeerNotifySettings, "PeerNotifySettings"],
      [this.botInfo ?? null, TypeBotInfo, "flags.3?BotInfo"],
      [this.pinnedMsgId ?? null, "number", "flags.6?int"],
      [this.commonChatsCount, "number", "int"],
      [this.folderId ?? null, "number", "flags.11?int"],
      [this.ttlPeriod ?? null, "number", "flags.14?int"],
      [this.themeEmoticon ?? null, "string", "flags.15?string"],
      [this.privateForwardName ?? null, "string", "flags.16?string"],
      [
        this.botGroupAdminRights ?? null,
        TypeChatAdminRights,
        "flags.17?ChatAdminRights",
      ],
      [
        this.botBroadcastAdminRights ?? null,
        TypeChatAdminRights,
        "flags.18?ChatAdminRights",
      ],
      [
        this.premiumGifts ?? null,
        [TypePremiumGiftOption],
        "flags.19?Vector<PremiumGiftOption>",
      ],
    ];
  }

  constructor(
    params: {
      blocked?: true;
      phoneCallsAvailable?: true;
      phoneCallsPrivate?: true;
      canPinMessage?: true;
      hasScheduled?: true;
      videoCallsAvailable?: true;
      voiceMessagesForbidden?: true;
      translationsDisabled?: true;
      id: bigint;
      about?: string;
      settings: TypePeerSettings;
      personalPhoto?: TypePhoto;
      profilePhoto?: TypePhoto;
      fallbackPhoto?: TypePhoto;
      notifySettings: TypePeerNotifySettings;
      botInfo?: TypeBotInfo;
      pinnedMsgId?: number;
      commonChatsCount: number;
      folderId?: number;
      ttlPeriod?: number;
      themeEmoticon?: string;
      privateForwardName?: string;
      botGroupAdminRights?: TypeChatAdminRights;
      botBroadcastAdminRights?: TypeChatAdminRights;
      premiumGifts?: Array<TypePremiumGiftOption>;
    },
  ) {
    super();
    this.blocked = params.blocked;
    this.phoneCallsAvailable = params.phoneCallsAvailable;
    this.phoneCallsPrivate = params.phoneCallsPrivate;
    this.canPinMessage = params.canPinMessage;
    this.hasScheduled = params.hasScheduled;
    this.videoCallsAvailable = params.videoCallsAvailable;
    this.voiceMessagesForbidden = params.voiceMessagesForbidden;
    this.translationsDisabled = params.translationsDisabled;
    this.id = params.id;
    this.about = params.about;
    this.settings = params.settings;
    this.personalPhoto = params.personalPhoto;
    this.profilePhoto = params.profilePhoto;
    this.fallbackPhoto = params.fallbackPhoto;
    this.notifySettings = params.notifySettings;
    this.botInfo = params.botInfo;
    this.pinnedMsgId = params.pinnedMsgId;
    this.commonChatsCount = params.commonChatsCount;
    this.folderId = params.folderId;
    this.ttlPeriod = params.ttlPeriod;
    this.themeEmoticon = params.themeEmoticon;
    this.privateForwardName = params.privateForwardName;
    this.botGroupAdminRights = params.botGroupAdminRights;
    this.botBroadcastAdminRights = params.botBroadcastAdminRights;
    this.premiumGifts = params.premiumGifts;
  }
}

export class Contact extends Constructor {
  userId: bigint;
  mutual: boolean;

  protected get [id]() {
    return 0x145ade0b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["mutual", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.mutual, "boolean", "Bool"],
    ];
  }

  constructor(params: { userId: bigint; mutual: boolean }) {
    super();
    this.userId = params.userId;
    this.mutual = params.mutual;
  }
}

export class ImportedContact extends Constructor {
  userId: bigint;
  clientId: bigint;

  protected get [id]() {
    return 0xc13e3c50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["clientId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.clientId, "bigint", "long"],
    ];
  }

  constructor(params: { userId: bigint; clientId: bigint }) {
    super();
    this.userId = params.userId;
    this.clientId = params.clientId;
  }
}

export class ContactStatus extends Constructor {
  userId: bigint;
  status: TypeUserStatus;

  protected get [id]() {
    return 0x16d9703b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["status", TypeUserStatus, "UserStatus"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.status, TypeUserStatus, "UserStatus"],
    ];
  }

  constructor(params: { userId: bigint; status: TypeUserStatus }) {
    super();
    this.userId = params.userId;
    this.status = params.status;
  }
}

export class ContactsContactsNotModified extends TypeContactsContacts {
  protected get [id]() {
    return 0xb74ba9d2;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ContactsContacts extends Constructor {
  contacts: Array<TypeContact>;
  savedCount: number;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xeae87e42;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["contacts", [TypeContact], "Vector<Contact>"],
      ["savedCount", "number", "int"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.contacts, [TypeContact], "Vector<Contact>"],
      [this.savedCount, "number", "int"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      contacts: Array<TypeContact>;
      savedCount: number;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.contacts = params.contacts;
    this.savedCount = params.savedCount;
    this.users = params.users;
  }
}

export class ContactsImportedContacts extends Constructor {
  imported: Array<TypeImportedContact>;
  popularInvites: Array<TypePopularContact>;
  retryContacts: Array<bigint>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x77d01c3b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["imported", [TypeImportedContact], "Vector<ImportedContact>"],
      ["popularInvites", [TypePopularContact], "Vector<PopularContact>"],
      ["retryContacts", ["bigint"], "Vector<long>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.imported, [TypeImportedContact], "Vector<ImportedContact>"],
      [this.popularInvites, [TypePopularContact], "Vector<PopularContact>"],
      [this.retryContacts, ["bigint"], "Vector<long>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      imported: Array<TypeImportedContact>;
      popularInvites: Array<TypePopularContact>;
      retryContacts: Array<bigint>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.imported = params.imported;
    this.popularInvites = params.popularInvites;
    this.retryContacts = params.retryContacts;
    this.users = params.users;
  }
}

export class ContactsBlocked extends Constructor {
  blocked: Array<TypePeerBlocked>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x0ade1591;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["blocked", [TypePeerBlocked], "Vector<PeerBlocked>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.blocked, [TypePeerBlocked], "Vector<PeerBlocked>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      blocked: Array<TypePeerBlocked>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.blocked = params.blocked;
    this.chats = params.chats;
    this.users = params.users;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["blocked", [TypePeerBlocked], "Vector<PeerBlocked>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.blocked, [TypePeerBlocked], "Vector<PeerBlocked>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
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

export class MessagesDialogs extends Constructor {
  dialogs: Array<TypeDialog>;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x15ba6c40;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dialogs", [TypeDialog], "Vector<Dialog>"],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dialogs, [TypeDialog], "Vector<Dialog>"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      dialogs: Array<TypeDialog>;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.dialogs = params.dialogs;
    this.messages = params.messages;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["dialogs", [TypeDialog], "Vector<Dialog>"],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.dialogs, [TypeDialog], "Vector<Dialog>"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
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

export class MessagesDialogsNotModified extends TypeMessagesDialogs {
  count: number;

  protected get [id]() {
    return 0xf0e3e596;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
    ];
  }

  constructor(params: { count: number }) {
    super();
    this.count = params.count;
  }
}

export class MessagesMessages extends Constructor {
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x8c718e87;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["messages", [TypeMessage], "Vector<Message>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesMessagesSlice extends TypeMessagesMessages {
  inexact?: true;
  count: number;
  nextRate?: number;
  offsetIdOffset?: number;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x3a54685e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["inexact", "true", "flags.1?true"],
      ["count", "number", "int"],
      ["nextRate", "number", "flags.0?int"],
      ["offsetIdOffset", "number", "flags.2?int"],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.inexact ?? null, "true", "flags.1?true"],
      [this.count, "number", "int"],
      [this.nextRate ?? null, "number", "flags.0?int"],
      [this.offsetIdOffset ?? null, "number", "flags.2?int"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      inexact?: true;
      count: number;
      nextRate?: number;
      offsetIdOffset?: number;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.inexact = params.inexact;
    this.count = params.count;
    this.nextRate = params.nextRate;
    this.offsetIdOffset = params.offsetIdOffset;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesChannelMessages extends TypeMessagesMessages {
  inexact?: true;
  pts: number;
  count: number;
  offsetIdOffset?: number;
  messages: Array<TypeMessage>;
  topics: Array<TypeForumTopic>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xc776ba4e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["inexact", "true", "flags.1?true"],
      ["pts", "number", "int"],
      ["count", "number", "int"],
      ["offsetIdOffset", "number", "flags.2?int"],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["topics", [TypeForumTopic], "Vector<ForumTopic>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.inexact ?? null, "true", "flags.1?true"],
      [this.pts, "number", "int"],
      [this.count, "number", "int"],
      [this.offsetIdOffset ?? null, "number", "flags.2?int"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.topics, [TypeForumTopic], "Vector<ForumTopic>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      inexact?: true;
      pts: number;
      count: number;
      offsetIdOffset?: number;
      messages: Array<TypeMessage>;
      topics: Array<TypeForumTopic>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.inexact = params.inexact;
    this.pts = params.pts;
    this.count = params.count;
    this.offsetIdOffset = params.offsetIdOffset;
    this.messages = params.messages;
    this.topics = params.topics;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesMessagesNotModified extends TypeMessagesMessages {
  count: number;

  protected get [id]() {
    return 0x74535f21;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
    ];
  }

  constructor(params: { count: number }) {
    super();
    this.count = params.count;
  }
}

export class MessagesChats extends Constructor {
  chats: Array<TypeChat>;

  protected get [id]() {
    return 0x64ff9fd5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chats", [TypeChat], "Vector<Chat>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chats, [TypeChat], "Vector<Chat>"],
    ];
  }

  constructor(params: { chats: Array<TypeChat> }) {
    super();
    this.chats = params.chats;
  }
}

export class MessagesChatsSlice extends TypeMessagesChats {
  count: number;
  chats: Array<TypeChat>;

  protected get [id]() {
    return 0x9cd81144;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["chats", [TypeChat], "Vector<Chat>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.chats, [TypeChat], "Vector<Chat>"],
    ];
  }

  constructor(params: { count: number; chats: Array<TypeChat> }) {
    super();
    this.count = params.count;
    this.chats = params.chats;
  }
}

export class MessagesChatFull extends Constructor {
  fullChat: TypeChatFull;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xe5d7d19c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fullChat", TypeChatFull, "ChatFull"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fullChat, TypeChatFull, "ChatFull"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      fullChat: TypeChatFull;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.fullChat = params.fullChat;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesAffectedHistory extends Constructor {
  pts: number;
  ptsCount: number;
  offset: number;

  protected get [id]() {
    return 0xb45c69d1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
      ["offset", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
      [this.offset, "number", "int"],
    ];
  }

  constructor(params: { pts: number; ptsCount: number; offset: number }) {
    super();
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
    this.offset = params.offset;
  }
}

export class InputMessagesFilterEmpty extends TypeMessagesFilter {
  protected get [id]() {
    return 0x57e2f66c;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterVoice extends TypeMessagesFilter {
  protected get [id]() {
    return 0x50f5c392;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterChatPhotos extends TypeMessagesFilter {
  protected get [id]() {
    return 0x3a20ecb8;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterPhoneCalls extends TypeMessagesFilter {
  missed?: true;

  protected get [id]() {
    return 0x80c99768;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["missed", "true", "flags.0?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.missed ?? null, "true", "flags.0?true"],
    ];
  }

  constructor(params: { missed?: true }) {
    super();
    this.missed = params.missed;
  }
}

export class InputMessagesFilterRoundVoice extends TypeMessagesFilter {
  protected get [id]() {
    return 0x7a7c17a4;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterMyMentions extends TypeMessagesFilter {
  protected get [id]() {
    return 0xc1f8e69a;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterGeo extends TypeMessagesFilter {
  protected get [id]() {
    return 0xe7026d0d;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessagesFilterPinned extends TypeMessagesFilter {
  protected get [id]() {
    return 0x1bb00451;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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
  ptsCount: number;

  protected get [id]() {
    return 0x1f2b0afd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(params: { message: TypeMessage; pts: number; ptsCount: number }) {
    super();
    this.message = params.message;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateMessageID extends TypeUpdate {
  id: number;
  randomId: bigint;

  protected get [id]() {
    return 0x4e90bfd6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
      ["randomId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
      [this.randomId, "bigint", "long"],
    ];
  }

  constructor(params: { id: number; randomId: bigint }) {
    super();
    this.id = params.id;
    this.randomId = params.randomId;
  }
}

export class UpdateDeleteMessages extends TypeUpdate {
  messages: Array<number>;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0xa20db0e5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["messages", ["number"], "Vector<int>"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.messages, ["number"], "Vector<int>"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: { messages: Array<number>; pts: number; ptsCount: number },
  ) {
    super();
    this.messages = params.messages;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateUserTyping extends TypeUpdate {
  userId: bigint;
  action: TypeSendMessageAction;

  protected get [id]() {
    return 0xc01e857f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["action", TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.action, TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  constructor(params: { userId: bigint; action: TypeSendMessageAction }) {
    super();
    this.userId = params.userId;
    this.action = params.action;
  }
}

export class UpdateChatUserTyping extends TypeUpdate {
  chatId: bigint;
  fromId: TypePeer;
  action: TypeSendMessageAction;

  protected get [id]() {
    return 0x83487af0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["fromId", TypePeer, "Peer"],
      ["action", TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.fromId, TypePeer, "Peer"],
      [this.action, TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  constructor(
    params: { chatId: bigint; fromId: TypePeer; action: TypeSendMessageAction },
  ) {
    super();
    this.chatId = params.chatId;
    this.fromId = params.fromId;
    this.action = params.action;
  }
}

export class UpdateChatParticipants extends TypeUpdate {
  participants: TypeChatParticipants;

  protected get [id]() {
    return 0x07761198;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["participants", TypeChatParticipants, "ChatParticipants"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.participants, TypeChatParticipants, "ChatParticipants"],
    ];
  }

  constructor(params: { participants: TypeChatParticipants }) {
    super();
    this.participants = params.participants;
  }
}

export class UpdateUserStatus extends TypeUpdate {
  userId: bigint;
  status: TypeUserStatus;

  protected get [id]() {
    return 0xe5bdf8de;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["status", TypeUserStatus, "UserStatus"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.status, TypeUserStatus, "UserStatus"],
    ];
  }

  constructor(params: { userId: bigint; status: TypeUserStatus }) {
    super();
    this.userId = params.userId;
    this.status = params.status;
  }
}

export class UpdateUserName extends TypeUpdate {
  userId: bigint;
  firstName: string;
  lastName: string;
  usernames: Array<TypeUsername>;

  protected get [id]() {
    return 0xa7848924;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
      ["usernames", [TypeUsername], "Vector<Username>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
      [this.usernames, [TypeUsername], "Vector<Username>"],
    ];
  }

  constructor(
    params: {
      userId: bigint;
      firstName: string;
      lastName: string;
      usernames: Array<TypeUsername>;
    },
  ) {
    super();
    this.userId = params.userId;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.usernames = params.usernames;
  }
}

export class UpdateNewEncryptedMessage extends TypeUpdate {
  message: TypeEncryptedMessage;
  qts: number;

  protected get [id]() {
    return 0x12bcbd9a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeEncryptedMessage, "EncryptedMessage"],
      ["qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeEncryptedMessage, "EncryptedMessage"],
      [this.qts, "number", "int"],
    ];
  }

  constructor(params: { message: TypeEncryptedMessage; qts: number }) {
    super();
    this.message = params.message;
    this.qts = params.qts;
  }
}

export class UpdateEncryptedChatTyping extends TypeUpdate {
  chatId: number;

  protected get [id]() {
    return 0x1710f156;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "number", "int"],
    ];
  }

  constructor(params: { chatId: number }) {
    super();
    this.chatId = params.chatId;
  }
}

export class UpdateEncryption extends TypeUpdate {
  chat: TypeEncryptedChat;
  date: number;

  protected get [id]() {
    return 0xb4a2e88d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat", TypeEncryptedChat, "EncryptedChat"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat, TypeEncryptedChat, "EncryptedChat"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { chat: TypeEncryptedChat; date: number }) {
    super();
    this.chat = params.chat;
    this.date = params.date;
  }
}

export class UpdateEncryptedMessagesRead extends TypeUpdate {
  chatId: number;
  maxDate: number;
  date: number;

  protected get [id]() {
    return 0x38fe25b7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "number", "int"],
      ["maxDate", "number", "int"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "number", "int"],
      [this.maxDate, "number", "int"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { chatId: number; maxDate: number; date: number }) {
    super();
    this.chatId = params.chatId;
    this.maxDate = params.maxDate;
    this.date = params.date;
  }
}

export class UpdateChatParticipantAdd extends TypeUpdate {
  chatId: bigint;
  userId: bigint;
  inviterId: bigint;
  date: number;
  version: number;

  protected get [id]() {
    return 0x3dda5451;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["inviterId", "bigint", "long"],
      ["date", "number", "int"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.inviterId, "bigint", "long"],
      [this.date, "number", "int"],
      [this.version, "number", "int"],
    ];
  }

  constructor(
    params: {
      chatId: bigint;
      userId: bigint;
      inviterId: bigint;
      date: number;
      version: number;
    },
  ) {
    super();
    this.chatId = params.chatId;
    this.userId = params.userId;
    this.inviterId = params.inviterId;
    this.date = params.date;
    this.version = params.version;
  }
}

export class UpdateChatParticipantDelete extends TypeUpdate {
  chatId: bigint;
  userId: bigint;
  version: number;

  protected get [id]() {
    return 0xe32f3d77;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.version, "number", "int"],
    ];
  }

  constructor(params: { chatId: bigint; userId: bigint; version: number }) {
    super();
    this.chatId = params.chatId;
    this.userId = params.userId;
    this.version = params.version;
  }
}

export class UpdateDcOptions extends TypeUpdate {
  dcOptions: Array<TypeDcOption>;

  protected get [id]() {
    return 0x8e5e9873;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dcOptions", [TypeDcOption], "Vector<DcOption>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dcOptions, [TypeDcOption], "Vector<DcOption>"],
    ];
  }

  constructor(params: { dcOptions: Array<TypeDcOption> }) {
    super();
    this.dcOptions = params.dcOptions;
  }
}

export class UpdateNotifySettings extends TypeUpdate {
  peer: TypeNotifyPeer;
  notifySettings: TypePeerNotifySettings;

  protected get [id]() {
    return 0xbec268ef;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeNotifyPeer, "NotifyPeer"],
      ["notifySettings", TypePeerNotifySettings, "PeerNotifySettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeNotifyPeer, "NotifyPeer"],
      [this.notifySettings, TypePeerNotifySettings, "PeerNotifySettings"],
    ];
  }

  constructor(
    params: { peer: TypeNotifyPeer; notifySettings: TypePeerNotifySettings },
  ) {
    super();
    this.peer = params.peer;
    this.notifySettings = params.notifySettings;
  }
}

export class UpdateServiceNotification extends TypeUpdate {
  popup?: true;
  inboxDate?: number;
  type: string;
  message: string;
  media: TypeMessageMedia;
  entities: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0xebe46819;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["popup", "true", "flags.0?true"],
      ["inboxDate", "number", "flags.1?int"],
      ["type", "string", "string"],
      ["message", "string", "string"],
      ["media", TypeMessageMedia, "MessageMedia"],
      ["entities", [TypeMessageEntity], "Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.popup ?? null, "true", "flags.0?true"],
      [this.inboxDate ?? null, "number", "flags.1?int"],
      [this.type, "string", "string"],
      [this.message, "string", "string"],
      [this.media, TypeMessageMedia, "MessageMedia"],
      [this.entities, [TypeMessageEntity], "Vector<MessageEntity>"],
    ];
  }

  constructor(
    params: {
      popup?: true;
      inboxDate?: number;
      type: string;
      message: string;
      media: TypeMessageMedia;
      entities: Array<TypeMessageEntity>;
    },
  ) {
    super();
    this.popup = params.popup;
    this.inboxDate = params.inboxDate;
    this.type = params.type;
    this.message = params.message;
    this.media = params.media;
    this.entities = params.entities;
  }
}

export class UpdatePrivacy extends TypeUpdate {
  key: TypePrivacyKey;
  rules: Array<TypePrivacyRule>;

  protected get [id]() {
    return 0xee3b272a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", TypePrivacyKey, "PrivacyKey"],
      ["rules", [TypePrivacyRule], "Vector<PrivacyRule>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, TypePrivacyKey, "PrivacyKey"],
      [this.rules, [TypePrivacyRule], "Vector<PrivacyRule>"],
    ];
  }

  constructor(params: { key: TypePrivacyKey; rules: Array<TypePrivacyRule> }) {
    super();
    this.key = params.key;
    this.rules = params.rules;
  }
}

export class UpdateUserPhone extends TypeUpdate {
  userId: bigint;
  phone: string;

  protected get [id]() {
    return 0x05492a13;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["phone", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.phone, "string", "string"],
    ];
  }

  constructor(params: { userId: bigint; phone: string }) {
    super();
    this.userId = params.userId;
    this.phone = params.phone;
  }
}

export class UpdateReadHistoryInbox extends TypeUpdate {
  folderId?: number;
  peer: TypePeer;
  maxId: number;
  stillUnreadCount: number;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x9c974fdf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["folderId", "number", "flags.0?int"],
      ["peer", TypePeer, "Peer"],
      ["maxId", "number", "int"],
      ["stillUnreadCount", "number", "int"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.folderId ?? null, "number", "flags.0?int"],
      [this.peer, TypePeer, "Peer"],
      [this.maxId, "number", "int"],
      [this.stillUnreadCount, "number", "int"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      folderId?: number;
      peer: TypePeer;
      maxId: number;
      stillUnreadCount: number;
      pts: number;
      ptsCount: number;
    },
  ) {
    super();
    this.folderId = params.folderId;
    this.peer = params.peer;
    this.maxId = params.maxId;
    this.stillUnreadCount = params.stillUnreadCount;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateReadHistoryOutbox extends TypeUpdate {
  peer: TypePeer;
  maxId: number;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x2f2f21bf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["maxId", "number", "int"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.maxId, "number", "int"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: { peer: TypePeer; maxId: number; pts: number; ptsCount: number },
  ) {
    super();
    this.peer = params.peer;
    this.maxId = params.maxId;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateWebPage extends TypeUpdate {
  webpage: TypeWebPage;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x7f891213;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["webpage", TypeWebPage, "WebPage"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.webpage, TypeWebPage, "WebPage"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(params: { webpage: TypeWebPage; pts: number; ptsCount: number }) {
    super();
    this.webpage = params.webpage;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateReadMessagesContents extends TypeUpdate {
  messages: Array<number>;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x68c13933;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["messages", ["number"], "Vector<int>"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.messages, ["number"], "Vector<int>"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: { messages: Array<number>; pts: number; ptsCount: number },
  ) {
    super();
    this.messages = params.messages;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateChannelTooLong extends TypeUpdate {
  channelId: bigint;
  pts?: number;

  protected get [id]() {
    return 0x108d941f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channelId", "bigint", "long"],
      ["pts", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channelId, "bigint", "long"],
      [this.pts ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { channelId: bigint; pts?: number }) {
    super();
    this.channelId = params.channelId;
    this.pts = params.pts;
  }
}

export class UpdateChannel extends TypeUpdate {
  channelId: bigint;

  protected get [id]() {
    return 0x635b4c09;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
    ];
  }

  constructor(params: { channelId: bigint }) {
    super();
    this.channelId = params.channelId;
  }
}

export class UpdateNewChannelMessage extends TypeUpdate {
  message: TypeMessage;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x62ba04d9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(params: { message: TypeMessage; pts: number; ptsCount: number }) {
    super();
    this.message = params.message;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateReadChannelInbox extends TypeUpdate {
  folderId?: number;
  channelId: bigint;
  maxId: number;
  stillUnreadCount: number;
  pts: number;

  protected get [id]() {
    return 0x922e6e10;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["folderId", "number", "flags.0?int"],
      ["channelId", "bigint", "long"],
      ["maxId", "number", "int"],
      ["stillUnreadCount", "number", "int"],
      ["pts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.folderId ?? null, "number", "flags.0?int"],
      [this.channelId, "bigint", "long"],
      [this.maxId, "number", "int"],
      [this.stillUnreadCount, "number", "int"],
      [this.pts, "number", "int"],
    ];
  }

  constructor(
    params: {
      folderId?: number;
      channelId: bigint;
      maxId: number;
      stillUnreadCount: number;
      pts: number;
    },
  ) {
    super();
    this.folderId = params.folderId;
    this.channelId = params.channelId;
    this.maxId = params.maxId;
    this.stillUnreadCount = params.stillUnreadCount;
    this.pts = params.pts;
  }
}

export class UpdateDeleteChannelMessages extends TypeUpdate {
  channelId: bigint;
  messages: Array<number>;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0xc32d5b12;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["messages", ["number"], "Vector<int>"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.messages, ["number"], "Vector<int>"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      channelId: bigint;
      messages: Array<number>;
      pts: number;
      ptsCount: number;
    },
  ) {
    super();
    this.channelId = params.channelId;
    this.messages = params.messages;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateChannelMessageViews extends TypeUpdate {
  channelId: bigint;
  id: number;
  views: number;

  protected get [id]() {
    return 0xf226ac08;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["id", "number", "int"],
      ["views", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.id, "number", "int"],
      [this.views, "number", "int"],
    ];
  }

  constructor(params: { channelId: bigint; id: number; views: number }) {
    super();
    this.channelId = params.channelId;
    this.id = params.id;
    this.views = params.views;
  }
}

export class UpdateChatParticipantAdmin extends TypeUpdate {
  chatId: bigint;
  userId: bigint;
  isAdmin: boolean;
  version: number;

  protected get [id]() {
    return 0xd7ca61a2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["isAdmin", "boolean", "Bool"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.isAdmin, "boolean", "Bool"],
      [this.version, "number", "int"],
    ];
  }

  constructor(
    params: {
      chatId: bigint;
      userId: bigint;
      isAdmin: boolean;
      version: number;
    },
  ) {
    super();
    this.chatId = params.chatId;
    this.userId = params.userId;
    this.isAdmin = params.isAdmin;
    this.version = params.version;
  }
}

export class UpdateNewStickerSet extends TypeUpdate {
  stickerset: TypeMessagesStickerSet;

  protected get [id]() {
    return 0x688a30aa;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", TypeMessagesStickerSet, "messages.StickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, TypeMessagesStickerSet, "messages.StickerSet"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["masks", "true", "flags.0?true"],
      ["emojis", "true", "flags.1?true"],
      ["order", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.masks ?? null, "true", "flags.0?true"],
      [this.emojis ?? null, "true", "flags.1?true"],
      [this.order, ["bigint"], "Vector<long>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["masks", "true", "flags.0?true"],
      ["emojis", "true", "flags.1?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.masks ?? null, "true", "flags.0?true"],
      [this.emojis ?? null, "true", "flags.1?true"],
    ];
  }

  constructor(params: { masks?: true; emojis?: true }) {
    super();
    this.masks = params.masks;
    this.emojis = params.emojis;
  }
}

export class UpdateSavedGifs extends TypeUpdate {
  protected get [id]() {
    return 0x9375341e;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateBotInlineQuery extends TypeUpdate {
  queryId: bigint;
  userId: bigint;
  query: string;
  geo?: TypeGeoPoint;
  peerType?: TypeInlineQueryPeerType;
  offset: string;

  protected get [id]() {
    return 0x496f379c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["queryId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["query", "string", "string"],
      ["geo", TypeGeoPoint, "flags.0?GeoPoint"],
      ["peerType", TypeInlineQueryPeerType, "flags.1?InlineQueryPeerType"],
      ["offset", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.queryId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.query, "string", "string"],
      [this.geo ?? null, TypeGeoPoint, "flags.0?GeoPoint"],
      [
        this.peerType ?? null,
        TypeInlineQueryPeerType,
        "flags.1?InlineQueryPeerType",
      ],
      [this.offset, "string", "string"],
    ];
  }

  constructor(
    params: {
      queryId: bigint;
      userId: bigint;
      query: string;
      geo?: TypeGeoPoint;
      peerType?: TypeInlineQueryPeerType;
      offset: string;
    },
  ) {
    super();
    this.queryId = params.queryId;
    this.userId = params.userId;
    this.query = params.query;
    this.geo = params.geo;
    this.peerType = params.peerType;
    this.offset = params.offset;
  }
}

export class UpdateBotInlineSend extends TypeUpdate {
  userId: bigint;
  query: string;
  geo?: TypeGeoPoint;
  id: string;
  msgId?: TypeInputBotInlineMessageID;

  protected get [id]() {
    return 0x12f12a07;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["userId", "bigint", "long"],
      ["query", "string", "string"],
      ["geo", TypeGeoPoint, "flags.0?GeoPoint"],
      ["id", "string", "string"],
      ["msgId", TypeInputBotInlineMessageID, "flags.1?InputBotInlineMessageID"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.userId, "bigint", "long"],
      [this.query, "string", "string"],
      [this.geo ?? null, TypeGeoPoint, "flags.0?GeoPoint"],
      [this.id, "string", "string"],
      [
        this.msgId ?? null,
        TypeInputBotInlineMessageID,
        "flags.1?InputBotInlineMessageID",
      ],
    ];
  }

  constructor(
    params: {
      userId: bigint;
      query: string;
      geo?: TypeGeoPoint;
      id: string;
      msgId?: TypeInputBotInlineMessageID;
    },
  ) {
    super();
    this.userId = params.userId;
    this.query = params.query;
    this.geo = params.geo;
    this.id = params.id;
    this.msgId = params.msgId;
  }
}

export class UpdateEditChannelMessage extends TypeUpdate {
  message: TypeMessage;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x1b3f4df7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(params: { message: TypeMessage; pts: number; ptsCount: number }) {
    super();
    this.message = params.message;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateBotCallbackQuery extends TypeUpdate {
  queryId: bigint;
  userId: bigint;
  peer: TypePeer;
  msgId: number;
  chatInstance: bigint;
  data?: Uint8Array;
  gameShortName?: string;

  protected get [id]() {
    return 0xb9cfc48d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["queryId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["peer", TypePeer, "Peer"],
      ["msgId", "number", "int"],
      ["chatInstance", "bigint", "long"],
      ["data", Uint8Array, "flags.0?bytes"],
      ["gameShortName", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.queryId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.peer, TypePeer, "Peer"],
      [this.msgId, "number", "int"],
      [this.chatInstance, "bigint", "long"],
      [this.data ?? null, Uint8Array, "flags.0?bytes"],
      [this.gameShortName ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(
    params: {
      queryId: bigint;
      userId: bigint;
      peer: TypePeer;
      msgId: number;
      chatInstance: bigint;
      data?: Uint8Array;
      gameShortName?: string;
    },
  ) {
    super();
    this.queryId = params.queryId;
    this.userId = params.userId;
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.chatInstance = params.chatInstance;
    this.data = params.data;
    this.gameShortName = params.gameShortName;
  }
}

export class UpdateEditMessage extends TypeUpdate {
  message: TypeMessage;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0xe40370a3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(params: { message: TypeMessage; pts: number; ptsCount: number }) {
    super();
    this.message = params.message;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateInlineBotCallbackQuery extends TypeUpdate {
  queryId: bigint;
  userId: bigint;
  msgId: TypeInputBotInlineMessageID;
  chatInstance: bigint;
  data?: Uint8Array;
  gameShortName?: string;

  protected get [id]() {
    return 0x691e9052;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["queryId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["msgId", TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      ["chatInstance", "bigint", "long"],
      ["data", Uint8Array, "flags.0?bytes"],
      ["gameShortName", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.queryId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.msgId, TypeInputBotInlineMessageID, "InputBotInlineMessageID"],
      [this.chatInstance, "bigint", "long"],
      [this.data ?? null, Uint8Array, "flags.0?bytes"],
      [this.gameShortName ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(
    params: {
      queryId: bigint;
      userId: bigint;
      msgId: TypeInputBotInlineMessageID;
      chatInstance: bigint;
      data?: Uint8Array;
      gameShortName?: string;
    },
  ) {
    super();
    this.queryId = params.queryId;
    this.userId = params.userId;
    this.msgId = params.msgId;
    this.chatInstance = params.chatInstance;
    this.data = params.data;
    this.gameShortName = params.gameShortName;
  }
}

export class UpdateReadChannelOutbox extends TypeUpdate {
  channelId: bigint;
  maxId: number;

  protected get [id]() {
    return 0xb75f99a9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { channelId: bigint; maxId: number }) {
    super();
    this.channelId = params.channelId;
    this.maxId = params.maxId;
  }
}

export class UpdateDraftMessage extends TypeUpdate {
  peer: TypePeer;
  topMsgId?: number;
  draft: TypeDraftMessage;

  protected get [id]() {
    return 0x1b49ec6d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", TypePeer, "Peer"],
      ["topMsgId", "number", "flags.0?int"],
      ["draft", TypeDraftMessage, "DraftMessage"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, TypePeer, "Peer"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.draft, TypeDraftMessage, "DraftMessage"],
    ];
  }

  constructor(
    params: { peer: TypePeer; topMsgId?: number; draft: TypeDraftMessage },
  ) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
    this.draft = params.draft;
  }
}

export class UpdateReadFeaturedStickers extends TypeUpdate {
  protected get [id]() {
    return 0x571d2742;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateConfig extends TypeUpdate {
  protected get [id]() {
    return 0xa229dd06;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateChannelWebPage extends TypeUpdate {
  channelId: bigint;
  webpage: TypeWebPage;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x2f2ba99f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["webpage", TypeWebPage, "WebPage"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.webpage, TypeWebPage, "WebPage"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      channelId: bigint;
      webpage: TypeWebPage;
      pts: number;
      ptsCount: number;
    },
  ) {
    super();
    this.channelId = params.channelId;
    this.webpage = params.webpage;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateDialogPinned extends TypeUpdate {
  pinned?: true;
  folderId?: number;
  peer: TypeDialogPeer;

  protected get [id]() {
    return 0x6e6fe51c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.0?true"],
      ["folderId", "number", "flags.1?int"],
      ["peer", TypeDialogPeer, "DialogPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.0?true"],
      [this.folderId ?? null, "number", "flags.1?int"],
      [this.peer, TypeDialogPeer, "DialogPeer"],
    ];
  }

  constructor(
    params: { pinned?: true; folderId?: number; peer: TypeDialogPeer },
  ) {
    super();
    this.pinned = params.pinned;
    this.folderId = params.folderId;
    this.peer = params.peer;
  }
}

export class UpdatePinnedDialogs extends TypeUpdate {
  folderId?: number;
  order?: Array<TypeDialogPeer>;

  protected get [id]() {
    return 0xfa0f3ca2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["folderId", "number", "flags.1?int"],
      ["order", [TypeDialogPeer], "flags.0?Vector<DialogPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.folderId ?? null, "number", "flags.1?int"],
      [this.order ?? null, [TypeDialogPeer], "flags.0?Vector<DialogPeer>"],
    ];
  }

  constructor(params: { folderId?: number; order?: Array<TypeDialogPeer> }) {
    super();
    this.folderId = params.folderId;
    this.order = params.order;
  }
}

export class UpdateBotWebhookJSON extends TypeUpdate {
  data: TypeDataJSON;

  protected get [id]() {
    return 0x8317c0c3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["data", TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.data, TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { data: TypeDataJSON }) {
    super();
    this.data = params.data;
  }
}

export class UpdateBotWebhookJSONQuery extends TypeUpdate {
  queryId: bigint;
  data: TypeDataJSON;
  timeout: number;

  protected get [id]() {
    return 0x9b9240a6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["queryId", "bigint", "long"],
      ["data", TypeDataJSON, "DataJSON"],
      ["timeout", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.queryId, "bigint", "long"],
      [this.data, TypeDataJSON, "DataJSON"],
      [this.timeout, "number", "int"],
    ];
  }

  constructor(
    params: { queryId: bigint; data: TypeDataJSON; timeout: number },
  ) {
    super();
    this.queryId = params.queryId;
    this.data = params.data;
    this.timeout = params.timeout;
  }
}

export class UpdateBotShippingQuery extends TypeUpdate {
  queryId: bigint;
  userId: bigint;
  payload: Uint8Array;
  shippingAddress: TypePostAddress;

  protected get [id]() {
    return 0xb5aefd7d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["queryId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["payload", Uint8Array, "bytes"],
      ["shippingAddress", TypePostAddress, "PostAddress"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.queryId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.payload, Uint8Array, "bytes"],
      [this.shippingAddress, TypePostAddress, "PostAddress"],
    ];
  }

  constructor(
    params: {
      queryId: bigint;
      userId: bigint;
      payload: Uint8Array;
      shippingAddress: TypePostAddress;
    },
  ) {
    super();
    this.queryId = params.queryId;
    this.userId = params.userId;
    this.payload = params.payload;
    this.shippingAddress = params.shippingAddress;
  }
}

export class UpdateBotPrecheckoutQuery extends TypeUpdate {
  queryId: bigint;
  userId: bigint;
  payload: Uint8Array;
  info?: TypePaymentRequestedInfo;
  shippingOptionId?: string;
  currency: string;
  totalAmount: bigint;

  protected get [id]() {
    return 0x8caa9a96;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["queryId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["payload", Uint8Array, "bytes"],
      ["info", TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      ["shippingOptionId", "string", "flags.1?string"],
      ["currency", "string", "string"],
      ["totalAmount", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.queryId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.payload, Uint8Array, "bytes"],
      [
        this.info ?? null,
        TypePaymentRequestedInfo,
        "flags.0?PaymentRequestedInfo",
      ],
      [this.shippingOptionId ?? null, "string", "flags.1?string"],
      [this.currency, "string", "string"],
      [this.totalAmount, "bigint", "long"],
    ];
  }

  constructor(
    params: {
      queryId: bigint;
      userId: bigint;
      payload: Uint8Array;
      info?: TypePaymentRequestedInfo;
      shippingOptionId?: string;
      currency: string;
      totalAmount: bigint;
    },
  ) {
    super();
    this.queryId = params.queryId;
    this.userId = params.userId;
    this.payload = params.payload;
    this.info = params.info;
    this.shippingOptionId = params.shippingOptionId;
    this.currency = params.currency;
    this.totalAmount = params.totalAmount;
  }
}

export class UpdatePhoneCall extends TypeUpdate {
  phoneCall: TypePhoneCall;

  protected get [id]() {
    return 0xab0f6b1e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneCall", TypePhoneCall, "PhoneCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneCall, TypePhoneCall, "PhoneCall"],
    ];
  }

  constructor(params: { phoneCall: TypePhoneCall }) {
    super();
    this.phoneCall = params.phoneCall;
  }
}

export class UpdateLangPackTooLong extends TypeUpdate {
  langCode: string;

  protected get [id]() {
    return 0x46560264;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { langCode: string }) {
    super();
    this.langCode = params.langCode;
  }
}

export class UpdateLangPack extends TypeUpdate {
  difference: TypeLangPackDifference;

  protected get [id]() {
    return 0x56022f4d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["difference", TypeLangPackDifference, "LangPackDifference"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.difference, TypeLangPackDifference, "LangPackDifference"],
    ];
  }

  constructor(params: { difference: TypeLangPackDifference }) {
    super();
    this.difference = params.difference;
  }
}

export class UpdateFavedStickers extends TypeUpdate {
  protected get [id]() {
    return 0xe511996d;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateChannelReadMessagesContents extends TypeUpdate {
  channelId: bigint;
  topMsgId?: number;
  messages: Array<number>;

  protected get [id]() {
    return 0xea29055d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channelId", "bigint", "long"],
      ["topMsgId", "number", "flags.0?int"],
      ["messages", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channelId, "bigint", "long"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.messages, ["number"], "Vector<int>"],
    ];
  }

  constructor(
    params: { channelId: bigint; topMsgId?: number; messages: Array<number> },
  ) {
    super();
    this.channelId = params.channelId;
    this.topMsgId = params.topMsgId;
    this.messages = params.messages;
  }
}

export class UpdateContactsReset extends TypeUpdate {
  protected get [id]() {
    return 0x7084a7be;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateChannelAvailableMessages extends TypeUpdate {
  channelId: bigint;
  availableMinId: number;

  protected get [id]() {
    return 0xb23fc698;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["availableMinId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.availableMinId, "number", "int"],
    ];
  }

  constructor(params: { channelId: bigint; availableMinId: number }) {
    super();
    this.channelId = params.channelId;
    this.availableMinId = params.availableMinId;
  }
}

export class UpdateDialogUnreadMark extends TypeUpdate {
  unread?: true;
  peer: TypeDialogPeer;

  protected get [id]() {
    return 0xe16459c3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["unread", "true", "flags.0?true"],
      ["peer", TypeDialogPeer, "DialogPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.unread ?? null, "true", "flags.0?true"],
      [this.peer, TypeDialogPeer, "DialogPeer"],
    ];
  }

  constructor(params: { unread?: true; peer: TypeDialogPeer }) {
    super();
    this.unread = params.unread;
    this.peer = params.peer;
  }
}

export class UpdateMessagePoll extends TypeUpdate {
  pollId: bigint;
  poll?: TypePoll;
  results: TypePollResults;

  protected get [id]() {
    return 0xaca1657b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pollId", "bigint", "long"],
      ["poll", TypePoll, "flags.0?Poll"],
      ["results", TypePollResults, "PollResults"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pollId, "bigint", "long"],
      [this.poll ?? null, TypePoll, "flags.0?Poll"],
      [this.results, TypePollResults, "PollResults"],
    ];
  }

  constructor(
    params: { pollId: bigint; poll?: TypePoll; results: TypePollResults },
  ) {
    super();
    this.pollId = params.pollId;
    this.poll = params.poll;
    this.results = params.results;
  }
}

export class UpdateChatDefaultBannedRights extends TypeUpdate {
  peer: TypePeer;
  defaultBannedRights: TypeChatBannedRights;
  version: number;

  protected get [id]() {
    return 0x54c01850;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["defaultBannedRights", TypeChatBannedRights, "ChatBannedRights"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.defaultBannedRights, TypeChatBannedRights, "ChatBannedRights"],
      [this.version, "number", "int"],
    ];
  }

  constructor(
    params: {
      peer: TypePeer;
      defaultBannedRights: TypeChatBannedRights;
      version: number;
    },
  ) {
    super();
    this.peer = params.peer;
    this.defaultBannedRights = params.defaultBannedRights;
    this.version = params.version;
  }
}

export class UpdateFolderPeers extends TypeUpdate {
  folderPeers: Array<TypeFolderPeer>;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x19360dc0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["folderPeers", [TypeFolderPeer], "Vector<FolderPeer>"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.folderPeers, [TypeFolderPeer], "Vector<FolderPeer>"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      folderPeers: Array<TypeFolderPeer>;
      pts: number;
      ptsCount: number;
    },
  ) {
    super();
    this.folderPeers = params.folderPeers;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdatePeerSettings extends TypeUpdate {
  peer: TypePeer;
  settings: TypePeerSettings;

  protected get [id]() {
    return 0x6a7e7366;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["settings", TypePeerSettings, "PeerSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.settings, TypePeerSettings, "PeerSettings"],
    ];
  }

  constructor(params: { peer: TypePeer; settings: TypePeerSettings }) {
    super();
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class UpdatePeerLocated extends TypeUpdate {
  peers: Array<TypePeerLocated>;

  protected get [id]() {
    return 0xb4afcfb0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peers", [TypePeerLocated], "Vector<PeerLocated>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peers, [TypePeerLocated], "Vector<PeerLocated>"],
    ];
  }

  constructor(params: { peers: Array<TypePeerLocated> }) {
    super();
    this.peers = params.peers;
  }
}

export class UpdateNewScheduledMessage extends TypeUpdate {
  message: TypeMessage;

  protected get [id]() {
    return 0x39a51dfb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["messages", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.messages, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { peer: TypePeer; messages: Array<number> }) {
    super();
    this.peer = params.peer;
    this.messages = params.messages;
  }
}

export class UpdateTheme extends TypeUpdate {
  theme: TypeTheme;

  protected get [id]() {
    return 0x8216fba3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["theme", TypeTheme, "Theme"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.theme, TypeTheme, "Theme"],
    ];
  }

  constructor(params: { theme: TypeTheme }) {
    super();
    this.theme = params.theme;
  }
}

export class UpdateGeoLiveViewed extends TypeUpdate {
  peer: TypePeer;
  msgId: number;

  protected get [id]() {
    return 0x871fb939;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: TypePeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class UpdateLoginToken extends TypeUpdate {
  protected get [id]() {
    return 0x564fe691;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateMessagePollVote extends TypeUpdate {
  pollId: bigint;
  userId: bigint;
  options: Array<Uint8Array>;
  qts: number;

  protected get [id]() {
    return 0x106395c9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pollId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["options", [Uint8Array], "Vector<bytes>"],
      ["qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pollId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [this.options, [Uint8Array], "Vector<bytes>"],
      [this.qts, "number", "int"],
    ];
  }

  constructor(
    params: {
      pollId: bigint;
      userId: bigint;
      options: Array<Uint8Array>;
      qts: number;
    },
  ) {
    super();
    this.pollId = params.pollId;
    this.userId = params.userId;
    this.options = params.options;
    this.qts = params.qts;
  }
}

export class UpdateDialogFilter extends TypeUpdate {
  id: number;
  filter?: TypeDialogFilter;

  protected get [id]() {
    return 0x26ffde7d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "number", "int"],
      ["filter", TypeDialogFilter, "flags.0?DialogFilter"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "number", "int"],
      [this.filter ?? null, TypeDialogFilter, "flags.0?DialogFilter"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["order", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.order, ["number"], "Vector<int>"],
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdatePhoneCallSignalingData extends TypeUpdate {
  phoneCallId: bigint;
  data: Uint8Array;

  protected get [id]() {
    return 0x2661bf09;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneCallId", "bigint", "long"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneCallId, "bigint", "long"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { phoneCallId: bigint; data: Uint8Array }) {
    super();
    this.phoneCallId = params.phoneCallId;
    this.data = params.data;
  }
}

export class UpdateChannelMessageForwards extends TypeUpdate {
  channelId: bigint;
  id: number;
  forwards: number;

  protected get [id]() {
    return 0xd29a27f4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["id", "number", "int"],
      ["forwards", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.id, "number", "int"],
      [this.forwards, "number", "int"],
    ];
  }

  constructor(params: { channelId: bigint; id: number; forwards: number }) {
    super();
    this.channelId = params.channelId;
    this.id = params.id;
    this.forwards = params.forwards;
  }
}

export class UpdateReadChannelDiscussionInbox extends TypeUpdate {
  channelId: bigint;
  topMsgId: number;
  readMaxId: number;
  broadcastId?: bigint;
  broadcastPost?: number;

  protected get [id]() {
    return 0xd6b19546;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channelId", "bigint", "long"],
      ["topMsgId", "number", "int"],
      ["readMaxId", "number", "int"],
      ["broadcastId", "bigint", "flags.0?long"],
      ["broadcastPost", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channelId, "bigint", "long"],
      [this.topMsgId, "number", "int"],
      [this.readMaxId, "number", "int"],
      [this.broadcastId ?? null, "bigint", "flags.0?long"],
      [this.broadcastPost ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(
    params: {
      channelId: bigint;
      topMsgId: number;
      readMaxId: number;
      broadcastId?: bigint;
      broadcastPost?: number;
    },
  ) {
    super();
    this.channelId = params.channelId;
    this.topMsgId = params.topMsgId;
    this.readMaxId = params.readMaxId;
    this.broadcastId = params.broadcastId;
    this.broadcastPost = params.broadcastPost;
  }
}

export class UpdateReadChannelDiscussionOutbox extends TypeUpdate {
  channelId: bigint;
  topMsgId: number;
  readMaxId: number;

  protected get [id]() {
    return 0x695c9e7c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["topMsgId", "number", "int"],
      ["readMaxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.topMsgId, "number", "int"],
      [this.readMaxId, "number", "int"],
    ];
  }

  constructor(
    params: { channelId: bigint; topMsgId: number; readMaxId: number },
  ) {
    super();
    this.channelId = params.channelId;
    this.topMsgId = params.topMsgId;
    this.readMaxId = params.readMaxId;
  }
}

export class UpdatePeerBlocked extends TypeUpdate {
  peerId: TypePeer;
  blocked: boolean;

  protected get [id]() {
    return 0x246a4b22;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peerId", TypePeer, "Peer"],
      ["blocked", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peerId, TypePeer, "Peer"],
      [this.blocked, "boolean", "Bool"],
    ];
  }

  constructor(params: { peerId: TypePeer; blocked: boolean }) {
    super();
    this.peerId = params.peerId;
    this.blocked = params.blocked;
  }
}

export class UpdateChannelUserTyping extends TypeUpdate {
  channelId: bigint;
  topMsgId?: number;
  fromId: TypePeer;
  action: TypeSendMessageAction;

  protected get [id]() {
    return 0x8c88c923;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channelId", "bigint", "long"],
      ["topMsgId", "number", "flags.0?int"],
      ["fromId", TypePeer, "Peer"],
      ["action", TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channelId, "bigint", "long"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.fromId, TypePeer, "Peer"],
      [this.action, TypeSendMessageAction, "SendMessageAction"],
    ];
  }

  constructor(
    params: {
      channelId: bigint;
      topMsgId?: number;
      fromId: TypePeer;
      action: TypeSendMessageAction;
    },
  ) {
    super();
    this.channelId = params.channelId;
    this.topMsgId = params.topMsgId;
    this.fromId = params.fromId;
    this.action = params.action;
  }
}

export class UpdatePinnedMessages extends TypeUpdate {
  pinned?: true;
  peer: TypePeer;
  messages: Array<number>;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0xed85eab5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.0?true"],
      ["peer", TypePeer, "Peer"],
      ["messages", ["number"], "Vector<int>"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.0?true"],
      [this.peer, TypePeer, "Peer"],
      [this.messages, ["number"], "Vector<int>"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      pinned?: true;
      peer: TypePeer;
      messages: Array<number>;
      pts: number;
      ptsCount: number;
    },
  ) {
    super();
    this.pinned = params.pinned;
    this.peer = params.peer;
    this.messages = params.messages;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdatePinnedChannelMessages extends TypeUpdate {
  pinned?: true;
  channelId: bigint;
  messages: Array<number>;
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x5bb98608;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.0?true"],
      ["channelId", "bigint", "long"],
      ["messages", ["number"], "Vector<int>"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.0?true"],
      [this.channelId, "bigint", "long"],
      [this.messages, ["number"], "Vector<int>"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      pinned?: true;
      channelId: bigint;
      messages: Array<number>;
      pts: number;
      ptsCount: number;
    },
  ) {
    super();
    this.pinned = params.pinned;
    this.channelId = params.channelId;
    this.messages = params.messages;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class UpdateChat extends TypeUpdate {
  chatId: bigint;

  protected get [id]() {
    return 0xf89a6a4e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
    ];
  }

  constructor(params: { chatId: bigint }) {
    super();
    this.chatId = params.chatId;
  }
}

export class UpdateGroupCallParticipants extends TypeUpdate {
  call: TypeInputGroupCall;
  participants: Array<TypeGroupCallParticipant>;
  version: number;

  protected get [id]() {
    return 0xf2ebdb4e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", TypeInputGroupCall, "InputGroupCall"],
      [
        "participants",
        [TypeGroupCallParticipant],
        "Vector<GroupCallParticipant>",
      ],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, TypeInputGroupCall, "InputGroupCall"],
      [
        this.participants,
        [TypeGroupCallParticipant],
        "Vector<GroupCallParticipant>",
      ],
      [this.version, "number", "int"],
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
  chatId: bigint;
  call: TypeGroupCall;

  protected get [id]() {
    return 0x14b24500;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "bigint", "long"],
      ["call", TypeGroupCall, "GroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "bigint", "long"],
      [this.call, TypeGroupCall, "GroupCall"],
    ];
  }

  constructor(params: { chatId: bigint; call: TypeGroupCall }) {
    super();
    this.chatId = params.chatId;
    this.call = params.call;
  }
}

export class UpdatePeerHistoryTTL extends TypeUpdate {
  peer: TypePeer;
  ttlPeriod?: number;

  protected get [id]() {
    return 0xbb9bb9a5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", TypePeer, "Peer"],
      ["ttlPeriod", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, TypePeer, "Peer"],
      [this.ttlPeriod ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { peer: TypePeer; ttlPeriod?: number }) {
    super();
    this.peer = params.peer;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class UpdateChatParticipant extends TypeUpdate {
  chatId: bigint;
  date: number;
  actorId: bigint;
  userId: bigint;
  prevParticipant?: TypeChatParticipant;
  newParticipant?: TypeChatParticipant;
  invite?: TypeExportedChatInvite;
  qts: number;

  protected get [id]() {
    return 0xd087663a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["chatId", "bigint", "long"],
      ["date", "number", "int"],
      ["actorId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["prevParticipant", TypeChatParticipant, "flags.0?ChatParticipant"],
      ["newParticipant", TypeChatParticipant, "flags.1?ChatParticipant"],
      ["invite", TypeExportedChatInvite, "flags.2?ExportedChatInvite"],
      ["qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.chatId, "bigint", "long"],
      [this.date, "number", "int"],
      [this.actorId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [
        this.prevParticipant ?? null,
        TypeChatParticipant,
        "flags.0?ChatParticipant",
      ],
      [
        this.newParticipant ?? null,
        TypeChatParticipant,
        "flags.1?ChatParticipant",
      ],
      [
        this.invite ?? null,
        TypeExportedChatInvite,
        "flags.2?ExportedChatInvite",
      ],
      [this.qts, "number", "int"],
    ];
  }

  constructor(
    params: {
      chatId: bigint;
      date: number;
      actorId: bigint;
      userId: bigint;
      prevParticipant?: TypeChatParticipant;
      newParticipant?: TypeChatParticipant;
      invite?: TypeExportedChatInvite;
      qts: number;
    },
  ) {
    super();
    this.chatId = params.chatId;
    this.date = params.date;
    this.actorId = params.actorId;
    this.userId = params.userId;
    this.prevParticipant = params.prevParticipant;
    this.newParticipant = params.newParticipant;
    this.invite = params.invite;
    this.qts = params.qts;
  }
}

export class UpdateChannelParticipant extends TypeUpdate {
  viaChatlist?: true;
  channelId: bigint;
  date: number;
  actorId: bigint;
  userId: bigint;
  prevParticipant?: TypeChannelParticipant;
  newParticipant?: TypeChannelParticipant;
  invite?: TypeExportedChatInvite;
  qts: number;

  protected get [id]() {
    return 0x985d3abb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["viaChatlist", "true", "flags.3?true"],
      ["channelId", "bigint", "long"],
      ["date", "number", "int"],
      ["actorId", "bigint", "long"],
      ["userId", "bigint", "long"],
      ["prevParticipant", TypeChannelParticipant, "flags.0?ChannelParticipant"],
      ["newParticipant", TypeChannelParticipant, "flags.1?ChannelParticipant"],
      ["invite", TypeExportedChatInvite, "flags.2?ExportedChatInvite"],
      ["qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.viaChatlist ?? null, "true", "flags.3?true"],
      [this.channelId, "bigint", "long"],
      [this.date, "number", "int"],
      [this.actorId, "bigint", "long"],
      [this.userId, "bigint", "long"],
      [
        this.prevParticipant ?? null,
        TypeChannelParticipant,
        "flags.0?ChannelParticipant",
      ],
      [
        this.newParticipant ?? null,
        TypeChannelParticipant,
        "flags.1?ChannelParticipant",
      ],
      [
        this.invite ?? null,
        TypeExportedChatInvite,
        "flags.2?ExportedChatInvite",
      ],
      [this.qts, "number", "int"],
    ];
  }

  constructor(
    params: {
      viaChatlist?: true;
      channelId: bigint;
      date: number;
      actorId: bigint;
      userId: bigint;
      prevParticipant?: TypeChannelParticipant;
      newParticipant?: TypeChannelParticipant;
      invite?: TypeExportedChatInvite;
      qts: number;
    },
  ) {
    super();
    this.viaChatlist = params.viaChatlist;
    this.channelId = params.channelId;
    this.date = params.date;
    this.actorId = params.actorId;
    this.userId = params.userId;
    this.prevParticipant = params.prevParticipant;
    this.newParticipant = params.newParticipant;
    this.invite = params.invite;
    this.qts = params.qts;
  }
}

export class UpdateBotStopped extends TypeUpdate {
  userId: bigint;
  date: number;
  stopped: boolean;
  qts: number;

  protected get [id]() {
    return 0xc4870a49;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["date", "number", "int"],
      ["stopped", "boolean", "Bool"],
      ["qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.date, "number", "int"],
      [this.stopped, "boolean", "Bool"],
      [this.qts, "number", "int"],
    ];
  }

  constructor(
    params: { userId: bigint; date: number; stopped: boolean; qts: number },
  ) {
    super();
    this.userId = params.userId;
    this.date = params.date;
    this.stopped = params.stopped;
    this.qts = params.qts;
  }
}

export class UpdateGroupCallConnection extends TypeUpdate {
  presentation?: true;
  params: TypeDataJSON;

  protected get [id]() {
    return 0x0b783982;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["presentation", "true", "flags.0?true"],
      ["params", TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.presentation ?? null, "true", "flags.0?true"],
      [this.params, TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { presentation?: true; params: TypeDataJSON }) {
    super();
    this.presentation = params.presentation;
    this.params = params.params;
  }
}

export class UpdateBotCommands extends TypeUpdate {
  peer: TypePeer;
  botId: bigint;
  commands: Array<TypeBotCommand>;

  protected get [id]() {
    return 0x4d712f2e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["botId", "bigint", "long"],
      ["commands", [TypeBotCommand], "Vector<BotCommand>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.botId, "bigint", "long"],
      [this.commands, [TypeBotCommand], "Vector<BotCommand>"],
    ];
  }

  constructor(
    params: { peer: TypePeer; botId: bigint; commands: Array<TypeBotCommand> },
  ) {
    super();
    this.peer = params.peer;
    this.botId = params.botId;
    this.commands = params.commands;
  }
}

export class UpdatePendingJoinRequests extends TypeUpdate {
  peer: TypePeer;
  requestsPending: number;
  recentRequesters: Array<bigint>;

  protected get [id]() {
    return 0x7063c3db;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["requestsPending", "number", "int"],
      ["recentRequesters", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.requestsPending, "number", "int"],
      [this.recentRequesters, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(
    params: {
      peer: TypePeer;
      requestsPending: number;
      recentRequesters: Array<bigint>;
    },
  ) {
    super();
    this.peer = params.peer;
    this.requestsPending = params.requestsPending;
    this.recentRequesters = params.recentRequesters;
  }
}

export class UpdateBotChatInviteRequester extends TypeUpdate {
  peer: TypePeer;
  date: number;
  userId: bigint;
  about: string;
  invite: TypeExportedChatInvite;
  qts: number;

  protected get [id]() {
    return 0x11dfa986;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["date", "number", "int"],
      ["userId", "bigint", "long"],
      ["about", "string", "string"],
      ["invite", TypeExportedChatInvite, "ExportedChatInvite"],
      ["qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.date, "number", "int"],
      [this.userId, "bigint", "long"],
      [this.about, "string", "string"],
      [this.invite, TypeExportedChatInvite, "ExportedChatInvite"],
      [this.qts, "number", "int"],
    ];
  }

  constructor(
    params: {
      peer: TypePeer;
      date: number;
      userId: bigint;
      about: string;
      invite: TypeExportedChatInvite;
      qts: number;
    },
  ) {
    super();
    this.peer = params.peer;
    this.date = params.date;
    this.userId = params.userId;
    this.about = params.about;
    this.invite = params.invite;
    this.qts = params.qts;
  }
}

export class UpdateMessageReactions extends TypeUpdate {
  peer: TypePeer;
  msgId: number;
  topMsgId?: number;
  reactions: TypeMessageReactions;

  protected get [id]() {
    return 0x5e1b3cb8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["peer", TypePeer, "Peer"],
      ["msgId", "number", "int"],
      ["topMsgId", "number", "flags.0?int"],
      ["reactions", TypeMessageReactions, "MessageReactions"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.peer, TypePeer, "Peer"],
      [this.msgId, "number", "int"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
      [this.reactions, TypeMessageReactions, "MessageReactions"],
    ];
  }

  constructor(
    params: {
      peer: TypePeer;
      msgId: number;
      topMsgId?: number;
      reactions: TypeMessageReactions;
    },
  ) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.topMsgId = params.topMsgId;
    this.reactions = params.reactions;
  }
}

export class UpdateAttachMenuBots extends TypeUpdate {
  protected get [id]() {
    return 0x17b7a20b;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateWebViewResultSent extends TypeUpdate {
  queryId: bigint;

  protected get [id]() {
    return 0x1592b79d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["queryId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.queryId, "bigint", "long"],
    ];
  }

  constructor(params: { queryId: bigint }) {
    super();
    this.queryId = params.queryId;
  }
}

export class UpdateBotMenuButton extends TypeUpdate {
  botId: bigint;
  button: TypeBotMenuButton;

  protected get [id]() {
    return 0x14b85813;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["botId", "bigint", "long"],
      ["button", TypeBotMenuButton, "BotMenuButton"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.botId, "bigint", "long"],
      [this.button, TypeBotMenuButton, "BotMenuButton"],
    ];
  }

  constructor(params: { botId: bigint; button: TypeBotMenuButton }) {
    super();
    this.botId = params.botId;
    this.button = params.button;
  }
}

export class UpdateSavedRingtones extends TypeUpdate {
  protected get [id]() {
    return 0x74d8be99;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateTranscribedAudio extends TypeUpdate {
  pending?: true;
  peer: TypePeer;
  msgId: number;
  transcriptionId: bigint;
  text: string;

  protected get [id]() {
    return 0x0084cd5a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pending", "true", "flags.0?true"],
      ["peer", TypePeer, "Peer"],
      ["msgId", "number", "int"],
      ["transcriptionId", "bigint", "long"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pending ?? null, "true", "flags.0?true"],
      [this.peer, TypePeer, "Peer"],
      [this.msgId, "number", "int"],
      [this.transcriptionId, "bigint", "long"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: {
      pending?: true;
      peer: TypePeer;
      msgId: number;
      transcriptionId: bigint;
      text: string;
    },
  ) {
    super();
    this.pending = params.pending;
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.transcriptionId = params.transcriptionId;
    this.text = params.text;
  }
}

export class UpdateReadFeaturedEmojiStickers extends TypeUpdate {
  protected get [id]() {
    return 0xfb4c496c;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateUserEmojiStatus extends TypeUpdate {
  userId: bigint;
  emojiStatus: TypeEmojiStatus;

  protected get [id]() {
    return 0x28373599;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["emojiStatus", TypeEmojiStatus, "EmojiStatus"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.emojiStatus, TypeEmojiStatus, "EmojiStatus"],
    ];
  }

  constructor(params: { userId: bigint; emojiStatus: TypeEmojiStatus }) {
    super();
    this.userId = params.userId;
    this.emojiStatus = params.emojiStatus;
  }
}

export class UpdateRecentEmojiStatuses extends TypeUpdate {
  protected get [id]() {
    return 0x30f443db;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["masks", "true", "flags.0?true"],
      ["emojis", "true", "flags.1?true"],
      ["stickerset", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.masks ?? null, "true", "flags.0?true"],
      [this.emojis ?? null, "true", "flags.1?true"],
      [this.stickerset, "bigint", "long"],
    ];
  }

  constructor(params: { masks?: true; emojis?: true; stickerset: bigint }) {
    super();
    this.masks = params.masks;
    this.emojis = params.emojis;
    this.stickerset = params.stickerset;
  }
}

export class UpdateMessageExtendedMedia extends TypeUpdate {
  peer: TypePeer;
  msgId: number;
  extendedMedia: TypeMessageExtendedMedia;

  protected get [id]() {
    return 0x5a73a98c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["msgId", "number", "int"],
      ["extendedMedia", TypeMessageExtendedMedia, "MessageExtendedMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.msgId, "number", "int"],
      [this.extendedMedia, TypeMessageExtendedMedia, "MessageExtendedMedia"],
    ];
  }

  constructor(
    params: {
      peer: TypePeer;
      msgId: number;
      extendedMedia: TypeMessageExtendedMedia;
    },
  ) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.extendedMedia = params.extendedMedia;
  }
}

export class UpdateChannelPinnedTopic extends TypeUpdate {
  pinned?: true;
  channelId: bigint;
  topicId: number;

  protected get [id]() {
    return 0x192efbe3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.0?true"],
      ["channelId", "bigint", "long"],
      ["topicId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.0?true"],
      [this.channelId, "bigint", "long"],
      [this.topicId, "number", "int"],
    ];
  }

  constructor(params: { pinned?: true; channelId: bigint; topicId: number }) {
    super();
    this.pinned = params.pinned;
    this.channelId = params.channelId;
    this.topicId = params.topicId;
  }
}

export class UpdateChannelPinnedTopics extends TypeUpdate {
  channelId: bigint;
  order?: Array<number>;

  protected get [id]() {
    return 0xfe198602;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channelId", "bigint", "long"],
      ["order", ["number"], "flags.0?Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channelId, "bigint", "long"],
      [this.order ?? null, ["number"], "flags.0?Vector<int>"],
    ];
  }

  constructor(params: { channelId: bigint; order?: Array<number> }) {
    super();
    this.channelId = params.channelId;
    this.order = params.order;
  }
}

export class UpdateUser extends TypeUpdate {
  userId: bigint;

  protected get [id]() {
    return 0x20529438;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { userId: bigint }) {
    super();
    this.userId = params.userId;
  }
}

export class UpdateAutoSaveSettings extends TypeUpdate {
  protected get [id]() {
    return 0xec05b097;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class UpdateGroupInvitePrivacyForbidden extends TypeUpdate {
  userId: bigint;

  protected get [id]() {
    return 0xccf08ad6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { userId: bigint }) {
    super();
    this.userId = params.userId;
  }
}

export class UpdatesState extends Constructor {
  pts: number;
  qts: number;
  date: number;
  seq: number;
  unreadCount: number;

  protected get [id]() {
    return 0xa56c2a3e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pts", "number", "int"],
      ["qts", "number", "int"],
      ["date", "number", "int"],
      ["seq", "number", "int"],
      ["unreadCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pts, "number", "int"],
      [this.qts, "number", "int"],
      [this.date, "number", "int"],
      [this.seq, "number", "int"],
      [this.unreadCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      pts: number;
      qts: number;
      date: number;
      seq: number;
      unreadCount: number;
    },
  ) {
    super();
    this.pts = params.pts;
    this.qts = params.qts;
    this.date = params.date;
    this.seq = params.seq;
    this.unreadCount = params.unreadCount;
  }
}

export class UpdatesDifferenceEmpty extends TypeUpdatesDifference {
  date: number;
  seq: number;

  protected get [id]() {
    return 0x5d75a138;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["date", "number", "int"],
      ["seq", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.date, "number", "int"],
      [this.seq, "number", "int"],
    ];
  }

  constructor(params: { date: number; seq: number }) {
    super();
    this.date = params.date;
    this.seq = params.seq;
  }
}

export class UpdatesDifference extends Constructor {
  newMessages: Array<TypeMessage>;
  newEncryptedMessages: Array<TypeEncryptedMessage>;
  otherUpdates: Array<TypeUpdate>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  state: TypeUpdatesState;

  protected get [id]() {
    return 0x00f49ca0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newMessages", [TypeMessage], "Vector<Message>"],
      [
        "newEncryptedMessages",
        [TypeEncryptedMessage],
        "Vector<EncryptedMessage>",
      ],
      ["otherUpdates", [TypeUpdate], "Vector<Update>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["state", TypeUpdatesState, "updates.State"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newMessages, [TypeMessage], "Vector<Message>"],
      [
        this.newEncryptedMessages,
        [TypeEncryptedMessage],
        "Vector<EncryptedMessage>",
      ],
      [this.otherUpdates, [TypeUpdate], "Vector<Update>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.state, TypeUpdatesState, "updates.State"],
    ];
  }

  constructor(
    params: {
      newMessages: Array<TypeMessage>;
      newEncryptedMessages: Array<TypeEncryptedMessage>;
      otherUpdates: Array<TypeUpdate>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
      state: TypeUpdatesState;
    },
  ) {
    super();
    this.newMessages = params.newMessages;
    this.newEncryptedMessages = params.newEncryptedMessages;
    this.otherUpdates = params.otherUpdates;
    this.chats = params.chats;
    this.users = params.users;
    this.state = params.state;
  }
}

export class UpdatesDifferenceSlice extends TypeUpdatesDifference {
  newMessages: Array<TypeMessage>;
  newEncryptedMessages: Array<TypeEncryptedMessage>;
  otherUpdates: Array<TypeUpdate>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  intermediateState: TypeUpdatesState;

  protected get [id]() {
    return 0xa8fb1981;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newMessages", [TypeMessage], "Vector<Message>"],
      [
        "newEncryptedMessages",
        [TypeEncryptedMessage],
        "Vector<EncryptedMessage>",
      ],
      ["otherUpdates", [TypeUpdate], "Vector<Update>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["intermediateState", TypeUpdatesState, "updates.State"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newMessages, [TypeMessage], "Vector<Message>"],
      [
        this.newEncryptedMessages,
        [TypeEncryptedMessage],
        "Vector<EncryptedMessage>",
      ],
      [this.otherUpdates, [TypeUpdate], "Vector<Update>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.intermediateState, TypeUpdatesState, "updates.State"],
    ];
  }

  constructor(
    params: {
      newMessages: Array<TypeMessage>;
      newEncryptedMessages: Array<TypeEncryptedMessage>;
      otherUpdates: Array<TypeUpdate>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
      intermediateState: TypeUpdatesState;
    },
  ) {
    super();
    this.newMessages = params.newMessages;
    this.newEncryptedMessages = params.newEncryptedMessages;
    this.otherUpdates = params.otherUpdates;
    this.chats = params.chats;
    this.users = params.users;
    this.intermediateState = params.intermediateState;
  }
}

export class UpdatesDifferenceTooLong extends TypeUpdatesDifference {
  pts: number;

  protected get [id]() {
    return 0x4afe8f6d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pts, "number", "int"],
    ];
  }

  constructor(params: { pts: number }) {
    super();
    this.pts = params.pts;
  }
}

export class UpdatesTooLong extends TypeUpdates {
  protected get [id]() {
    return 0xe317af7e;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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
  mediaUnread?: true;
  silent?: true;
  id: number;
  userId: bigint;
  message: string;
  pts: number;
  ptsCount: number;
  date: number;
  fwdFrom?: TypeMessageFwdHeader;
  viaBotId?: bigint;
  replyTo?: TypeMessageReplyHeader;
  entities?: Array<TypeMessageEntity>;
  ttlPeriod?: number;

  protected get [id]() {
    return 0x313bc7f8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["out", "true", "flags.1?true"],
      ["mentioned", "true", "flags.4?true"],
      ["mediaUnread", "true", "flags.5?true"],
      ["silent", "true", "flags.13?true"],
      ["id", "number", "int"],
      ["userId", "bigint", "long"],
      ["message", "string", "string"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
      ["date", "number", "int"],
      ["fwdFrom", TypeMessageFwdHeader, "flags.2?MessageFwdHeader"],
      ["viaBotId", "bigint", "flags.11?long"],
      ["replyTo", TypeMessageReplyHeader, "flags.3?MessageReplyHeader"],
      ["entities", [TypeMessageEntity], "flags.7?Vector<MessageEntity>"],
      ["ttlPeriod", "number", "flags.25?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.out ?? null, "true", "flags.1?true"],
      [this.mentioned ?? null, "true", "flags.4?true"],
      [this.mediaUnread ?? null, "true", "flags.5?true"],
      [this.silent ?? null, "true", "flags.13?true"],
      [this.id, "number", "int"],
      [this.userId, "bigint", "long"],
      [this.message, "string", "string"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
      [this.date, "number", "int"],
      [this.fwdFrom ?? null, TypeMessageFwdHeader, "flags.2?MessageFwdHeader"],
      [this.viaBotId ?? null, "bigint", "flags.11?long"],
      [
        this.replyTo ?? null,
        TypeMessageReplyHeader,
        "flags.3?MessageReplyHeader",
      ],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.7?Vector<MessageEntity>",
      ],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      mentioned?: true;
      mediaUnread?: true;
      silent?: true;
      id: number;
      userId: bigint;
      message: string;
      pts: number;
      ptsCount: number;
      date: number;
      fwdFrom?: TypeMessageFwdHeader;
      viaBotId?: bigint;
      replyTo?: TypeMessageReplyHeader;
      entities?: Array<TypeMessageEntity>;
      ttlPeriod?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.mentioned = params.mentioned;
    this.mediaUnread = params.mediaUnread;
    this.silent = params.silent;
    this.id = params.id;
    this.userId = params.userId;
    this.message = params.message;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
    this.date = params.date;
    this.fwdFrom = params.fwdFrom;
    this.viaBotId = params.viaBotId;
    this.replyTo = params.replyTo;
    this.entities = params.entities;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class UpdateShortChatMessage extends TypeUpdates {
  out?: true;
  mentioned?: true;
  mediaUnread?: true;
  silent?: true;
  id: number;
  fromId: bigint;
  chatId: bigint;
  message: string;
  pts: number;
  ptsCount: number;
  date: number;
  fwdFrom?: TypeMessageFwdHeader;
  viaBotId?: bigint;
  replyTo?: TypeMessageReplyHeader;
  entities?: Array<TypeMessageEntity>;
  ttlPeriod?: number;

  protected get [id]() {
    return 0x4d6deea5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["out", "true", "flags.1?true"],
      ["mentioned", "true", "flags.4?true"],
      ["mediaUnread", "true", "flags.5?true"],
      ["silent", "true", "flags.13?true"],
      ["id", "number", "int"],
      ["fromId", "bigint", "long"],
      ["chatId", "bigint", "long"],
      ["message", "string", "string"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
      ["date", "number", "int"],
      ["fwdFrom", TypeMessageFwdHeader, "flags.2?MessageFwdHeader"],
      ["viaBotId", "bigint", "flags.11?long"],
      ["replyTo", TypeMessageReplyHeader, "flags.3?MessageReplyHeader"],
      ["entities", [TypeMessageEntity], "flags.7?Vector<MessageEntity>"],
      ["ttlPeriod", "number", "flags.25?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.out ?? null, "true", "flags.1?true"],
      [this.mentioned ?? null, "true", "flags.4?true"],
      [this.mediaUnread ?? null, "true", "flags.5?true"],
      [this.silent ?? null, "true", "flags.13?true"],
      [this.id, "number", "int"],
      [this.fromId, "bigint", "long"],
      [this.chatId, "bigint", "long"],
      [this.message, "string", "string"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
      [this.date, "number", "int"],
      [this.fwdFrom ?? null, TypeMessageFwdHeader, "flags.2?MessageFwdHeader"],
      [this.viaBotId ?? null, "bigint", "flags.11?long"],
      [
        this.replyTo ?? null,
        TypeMessageReplyHeader,
        "flags.3?MessageReplyHeader",
      ],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.7?Vector<MessageEntity>",
      ],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      mentioned?: true;
      mediaUnread?: true;
      silent?: true;
      id: number;
      fromId: bigint;
      chatId: bigint;
      message: string;
      pts: number;
      ptsCount: number;
      date: number;
      fwdFrom?: TypeMessageFwdHeader;
      viaBotId?: bigint;
      replyTo?: TypeMessageReplyHeader;
      entities?: Array<TypeMessageEntity>;
      ttlPeriod?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.mentioned = params.mentioned;
    this.mediaUnread = params.mediaUnread;
    this.silent = params.silent;
    this.id = params.id;
    this.fromId = params.fromId;
    this.chatId = params.chatId;
    this.message = params.message;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
    this.date = params.date;
    this.fwdFrom = params.fwdFrom;
    this.viaBotId = params.viaBotId;
    this.replyTo = params.replyTo;
    this.entities = params.entities;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class UpdateShort extends TypeUpdates {
  update: TypeUpdate;
  date: number;

  protected get [id]() {
    return 0x78d4dec1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["update", TypeUpdate, "Update"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.update, TypeUpdate, "Update"],
      [this.date, "number", "int"],
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
  seqStart: number;
  seq: number;

  protected get [id]() {
    return 0x725b04c3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["updates", [TypeUpdate], "Vector<Update>"],
      ["users", [TypeUser], "Vector<User>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["date", "number", "int"],
      ["seqStart", "number", "int"],
      ["seq", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.updates, [TypeUpdate], "Vector<Update>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.date, "number", "int"],
      [this.seqStart, "number", "int"],
      [this.seq, "number", "int"],
    ];
  }

  constructor(
    params: {
      updates: Array<TypeUpdate>;
      users: Array<TypeUser>;
      chats: Array<TypeChat>;
      date: number;
      seqStart: number;
      seq: number;
    },
  ) {
    super();
    this.updates = params.updates;
    this.users = params.users;
    this.chats = params.chats;
    this.date = params.date;
    this.seqStart = params.seqStart;
    this.seq = params.seq;
  }
}

export class Updates extends Constructor {
  updates: Array<TypeUpdate>;
  users: Array<TypeUser>;
  chats: Array<TypeChat>;
  date: number;
  seq: number;

  protected get [id]() {
    return 0x74ae4240;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["updates", [TypeUpdate], "Vector<Update>"],
      ["users", [TypeUser], "Vector<User>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["date", "number", "int"],
      ["seq", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.updates, [TypeUpdate], "Vector<Update>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.date, "number", "int"],
      [this.seq, "number", "int"],
    ];
  }

  constructor(
    params: {
      updates: Array<TypeUpdate>;
      users: Array<TypeUser>;
      chats: Array<TypeChat>;
      date: number;
      seq: number;
    },
  ) {
    super();
    this.updates = params.updates;
    this.users = params.users;
    this.chats = params.chats;
    this.date = params.date;
    this.seq = params.seq;
  }
}

export class UpdateShortSentMessage extends TypeUpdates {
  out?: true;
  id: number;
  pts: number;
  ptsCount: number;
  date: number;
  media?: TypeMessageMedia;
  entities?: Array<TypeMessageEntity>;
  ttlPeriod?: number;

  protected get [id]() {
    return 0x9015e101;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["out", "true", "flags.1?true"],
      ["id", "number", "int"],
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
      ["date", "number", "int"],
      ["media", TypeMessageMedia, "flags.9?MessageMedia"],
      ["entities", [TypeMessageEntity], "flags.7?Vector<MessageEntity>"],
      ["ttlPeriod", "number", "flags.25?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.out ?? null, "true", "flags.1?true"],
      [this.id, "number", "int"],
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
      [this.date, "number", "int"],
      [this.media ?? null, TypeMessageMedia, "flags.9?MessageMedia"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.7?Vector<MessageEntity>",
      ],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(
    params: {
      out?: true;
      id: number;
      pts: number;
      ptsCount: number;
      date: number;
      media?: TypeMessageMedia;
      entities?: Array<TypeMessageEntity>;
      ttlPeriod?: number;
    },
  ) {
    super();
    this.out = params.out;
    this.id = params.id;
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
    this.date = params.date;
    this.media = params.media;
    this.entities = params.entities;
    this.ttlPeriod = params.ttlPeriod;
  }
}

export class PhotosPhotos extends Constructor {
  photos: Array<TypePhoto>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x8dca6aa5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["photos", [TypePhoto], "Vector<Photo>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.photos, [TypePhoto], "Vector<Photo>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { photos: Array<TypePhoto>; users: Array<TypeUser> }) {
    super();
    this.photos = params.photos;
    this.users = params.users;
  }
}

export class PhotosPhotosSlice extends TypePhotosPhotos {
  count: number;
  photos: Array<TypePhoto>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x15051f54;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["photos", [TypePhoto], "Vector<Photo>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.photos, [TypePhoto], "Vector<Photo>"],
      [this.users, [TypeUser], "Vector<User>"],
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

export class PhotosPhoto extends Constructor {
  photo: TypePhoto;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x20212ca8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["photo", TypePhoto, "Photo"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.photo, TypePhoto, "Photo"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { photo: TypePhoto; users: Array<TypeUser> }) {
    super();
    this.photo = params.photo;
    this.users = params.users;
  }
}

export class UploadFile extends Constructor {
  type: TypeStorageFileType;
  mtime: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0x096a18d5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeStorageFileType, "storage.FileType"],
      ["mtime", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeStorageFileType, "storage.FileType"],
      [this.mtime, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: { type: TypeStorageFileType; mtime: number; bytes: Uint8Array },
  ) {
    super();
    this.type = params.type;
    this.mtime = params.mtime;
    this.bytes = params.bytes;
  }
}

export class UploadFileCdnRedirect extends TypeUploadFile {
  dcId: number;
  fileToken: Uint8Array;
  encryptionKey: Uint8Array;
  encryptionIv: Uint8Array;
  fileHashes: Array<TypeFileHash>;

  protected get [id]() {
    return 0xf18cda44;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dcId", "number", "int"],
      ["fileToken", Uint8Array, "bytes"],
      ["encryptionKey", Uint8Array, "bytes"],
      ["encryptionIv", Uint8Array, "bytes"],
      ["fileHashes", [TypeFileHash], "Vector<FileHash>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dcId, "number", "int"],
      [this.fileToken, Uint8Array, "bytes"],
      [this.encryptionKey, Uint8Array, "bytes"],
      [this.encryptionIv, Uint8Array, "bytes"],
      [this.fileHashes, [TypeFileHash], "Vector<FileHash>"],
    ];
  }

  constructor(
    params: {
      dcId: number;
      fileToken: Uint8Array;
      encryptionKey: Uint8Array;
      encryptionIv: Uint8Array;
      fileHashes: Array<TypeFileHash>;
    },
  ) {
    super();
    this.dcId = params.dcId;
    this.fileToken = params.fileToken;
    this.encryptionKey = params.encryptionKey;
    this.encryptionIv = params.encryptionIv;
    this.fileHashes = params.fileHashes;
  }
}

export class DcOption extends Constructor {
  ipv6?: true;
  mediaOnly?: true;
  tcpoOnly?: true;
  cdn?: true;
  static?: true;
  thisPortOnly?: true;
  id: number;
  ipAddress: string;
  port: number;
  secret?: Uint8Array;

  protected get [id]() {
    return 0x18b7a10d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["ipv6", "true", "flags.0?true"],
      ["mediaOnly", "true", "flags.1?true"],
      ["tcpoOnly", "true", "flags.2?true"],
      ["cdn", "true", "flags.3?true"],
      ["static", "true", "flags.4?true"],
      ["thisPortOnly", "true", "flags.5?true"],
      ["id", "number", "int"],
      ["ipAddress", "string", "string"],
      ["port", "number", "int"],
      ["secret", Uint8Array, "flags.10?bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.ipv6 ?? null, "true", "flags.0?true"],
      [this.mediaOnly ?? null, "true", "flags.1?true"],
      [this.tcpoOnly ?? null, "true", "flags.2?true"],
      [this.cdn ?? null, "true", "flags.3?true"],
      [this.static ?? null, "true", "flags.4?true"],
      [this.thisPortOnly ?? null, "true", "flags.5?true"],
      [this.id, "number", "int"],
      [this.ipAddress, "string", "string"],
      [this.port, "number", "int"],
      [this.secret ?? null, Uint8Array, "flags.10?bytes"],
    ];
  }

  constructor(
    params: {
      ipv6?: true;
      mediaOnly?: true;
      tcpoOnly?: true;
      cdn?: true;
      static?: true;
      thisPortOnly?: true;
      id: number;
      ipAddress: string;
      port: number;
      secret?: Uint8Array;
    },
  ) {
    super();
    this.ipv6 = params.ipv6;
    this.mediaOnly = params.mediaOnly;
    this.tcpoOnly = params.tcpoOnly;
    this.cdn = params.cdn;
    this.static = params.static;
    this.thisPortOnly = params.thisPortOnly;
    this.id = params.id;
    this.ipAddress = params.ipAddress;
    this.port = params.port;
    this.secret = params.secret;
  }
}

export class Config extends Constructor {
  defaultP2pContacts?: true;
  preloadFeaturedStickers?: true;
  revokePmInbox?: true;
  blockedMode?: true;
  forceTryIpv6?: true;
  date: number;
  expires: number;
  testMode: boolean;
  thisDc: number;
  dcOptions: Array<TypeDcOption>;
  dcTxtDomainName: string;
  chatSizeMax: number;
  megagroupSizeMax: number;
  forwardedCountMax: number;
  onlineUpdatePeriodMs: number;
  offlineBlurTimeoutMs: number;
  offlineIdleTimeoutMs: number;
  onlineCloudTimeoutMs: number;
  notifyCloudDelayMs: number;
  notifyDefaultDelayMs: number;
  pushChatPeriodMs: number;
  pushChatLimit: number;
  editTimeLimit: number;
  revokeTimeLimit: number;
  revokePmTimeLimit: number;
  ratingEDecay: number;
  stickersRecentLimit: number;
  channelsReadMediaPeriod: number;
  tmpSessions?: number;
  callReceiveTimeoutMs: number;
  callRingTimeoutMs: number;
  callConnectTimeoutMs: number;
  callPacketTimeoutMs: number;
  meUrlPrefix: string;
  autoupdateUrlPrefix?: string;
  gifSearchUsername?: string;
  venueSearchUsername?: string;
  imgSearchUsername?: string;
  staticMapsProvider?: string;
  captionLengthMax: number;
  messageLengthMax: number;
  webfileDcId: number;
  suggestedLangCode?: string;
  langPackVersion?: number;
  baseLangPackVersion?: number;
  reactionsDefault?: TypeReaction;
  autologinToken?: string;

  protected get [id]() {
    return 0xcc1a241e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["defaultP2pContacts", "true", "flags.3?true"],
      ["preloadFeaturedStickers", "true", "flags.4?true"],
      ["revokePmInbox", "true", "flags.6?true"],
      ["blockedMode", "true", "flags.8?true"],
      ["forceTryIpv6", "true", "flags.14?true"],
      ["date", "number", "int"],
      ["expires", "number", "int"],
      ["testMode", "boolean", "Bool"],
      ["thisDc", "number", "int"],
      ["dcOptions", [TypeDcOption], "Vector<DcOption>"],
      ["dcTxtDomainName", "string", "string"],
      ["chatSizeMax", "number", "int"],
      ["megagroupSizeMax", "number", "int"],
      ["forwardedCountMax", "number", "int"],
      ["onlineUpdatePeriodMs", "number", "int"],
      ["offlineBlurTimeoutMs", "number", "int"],
      ["offlineIdleTimeoutMs", "number", "int"],
      ["onlineCloudTimeoutMs", "number", "int"],
      ["notifyCloudDelayMs", "number", "int"],
      ["notifyDefaultDelayMs", "number", "int"],
      ["pushChatPeriodMs", "number", "int"],
      ["pushChatLimit", "number", "int"],
      ["editTimeLimit", "number", "int"],
      ["revokeTimeLimit", "number", "int"],
      ["revokePmTimeLimit", "number", "int"],
      ["ratingEDecay", "number", "int"],
      ["stickersRecentLimit", "number", "int"],
      ["channelsReadMediaPeriod", "number", "int"],
      ["tmpSessions", "number", "flags.0?int"],
      ["callReceiveTimeoutMs", "number", "int"],
      ["callRingTimeoutMs", "number", "int"],
      ["callConnectTimeoutMs", "number", "int"],
      ["callPacketTimeoutMs", "number", "int"],
      ["meUrlPrefix", "string", "string"],
      ["autoupdateUrlPrefix", "string", "flags.7?string"],
      ["gifSearchUsername", "string", "flags.9?string"],
      ["venueSearchUsername", "string", "flags.10?string"],
      ["imgSearchUsername", "string", "flags.11?string"],
      ["staticMapsProvider", "string", "flags.12?string"],
      ["captionLengthMax", "number", "int"],
      ["messageLengthMax", "number", "int"],
      ["webfileDcId", "number", "int"],
      ["suggestedLangCode", "string", "flags.2?string"],
      ["langPackVersion", "number", "flags.2?int"],
      ["baseLangPackVersion", "number", "flags.2?int"],
      ["reactionsDefault", TypeReaction, "flags.15?Reaction"],
      ["autologinToken", "string", "flags.16?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.defaultP2pContacts ?? null, "true", "flags.3?true"],
      [this.preloadFeaturedStickers ?? null, "true", "flags.4?true"],
      [this.revokePmInbox ?? null, "true", "flags.6?true"],
      [this.blockedMode ?? null, "true", "flags.8?true"],
      [this.forceTryIpv6 ?? null, "true", "flags.14?true"],
      [this.date, "number", "int"],
      [this.expires, "number", "int"],
      [this.testMode, "boolean", "Bool"],
      [this.thisDc, "number", "int"],
      [this.dcOptions, [TypeDcOption], "Vector<DcOption>"],
      [this.dcTxtDomainName, "string", "string"],
      [this.chatSizeMax, "number", "int"],
      [this.megagroupSizeMax, "number", "int"],
      [this.forwardedCountMax, "number", "int"],
      [this.onlineUpdatePeriodMs, "number", "int"],
      [this.offlineBlurTimeoutMs, "number", "int"],
      [this.offlineIdleTimeoutMs, "number", "int"],
      [this.onlineCloudTimeoutMs, "number", "int"],
      [this.notifyCloudDelayMs, "number", "int"],
      [this.notifyDefaultDelayMs, "number", "int"],
      [this.pushChatPeriodMs, "number", "int"],
      [this.pushChatLimit, "number", "int"],
      [this.editTimeLimit, "number", "int"],
      [this.revokeTimeLimit, "number", "int"],
      [this.revokePmTimeLimit, "number", "int"],
      [this.ratingEDecay, "number", "int"],
      [this.stickersRecentLimit, "number", "int"],
      [this.channelsReadMediaPeriod, "number", "int"],
      [this.tmpSessions ?? null, "number", "flags.0?int"],
      [this.callReceiveTimeoutMs, "number", "int"],
      [this.callRingTimeoutMs, "number", "int"],
      [this.callConnectTimeoutMs, "number", "int"],
      [this.callPacketTimeoutMs, "number", "int"],
      [this.meUrlPrefix, "string", "string"],
      [this.autoupdateUrlPrefix ?? null, "string", "flags.7?string"],
      [this.gifSearchUsername ?? null, "string", "flags.9?string"],
      [this.venueSearchUsername ?? null, "string", "flags.10?string"],
      [this.imgSearchUsername ?? null, "string", "flags.11?string"],
      [this.staticMapsProvider ?? null, "string", "flags.12?string"],
      [this.captionLengthMax, "number", "int"],
      [this.messageLengthMax, "number", "int"],
      [this.webfileDcId, "number", "int"],
      [this.suggestedLangCode ?? null, "string", "flags.2?string"],
      [this.langPackVersion ?? null, "number", "flags.2?int"],
      [this.baseLangPackVersion ?? null, "number", "flags.2?int"],
      [this.reactionsDefault ?? null, TypeReaction, "flags.15?Reaction"],
      [this.autologinToken ?? null, "string", "flags.16?string"],
    ];
  }

  constructor(
    params: {
      defaultP2pContacts?: true;
      preloadFeaturedStickers?: true;
      revokePmInbox?: true;
      blockedMode?: true;
      forceTryIpv6?: true;
      date: number;
      expires: number;
      testMode: boolean;
      thisDc: number;
      dcOptions: Array<TypeDcOption>;
      dcTxtDomainName: string;
      chatSizeMax: number;
      megagroupSizeMax: number;
      forwardedCountMax: number;
      onlineUpdatePeriodMs: number;
      offlineBlurTimeoutMs: number;
      offlineIdleTimeoutMs: number;
      onlineCloudTimeoutMs: number;
      notifyCloudDelayMs: number;
      notifyDefaultDelayMs: number;
      pushChatPeriodMs: number;
      pushChatLimit: number;
      editTimeLimit: number;
      revokeTimeLimit: number;
      revokePmTimeLimit: number;
      ratingEDecay: number;
      stickersRecentLimit: number;
      channelsReadMediaPeriod: number;
      tmpSessions?: number;
      callReceiveTimeoutMs: number;
      callRingTimeoutMs: number;
      callConnectTimeoutMs: number;
      callPacketTimeoutMs: number;
      meUrlPrefix: string;
      autoupdateUrlPrefix?: string;
      gifSearchUsername?: string;
      venueSearchUsername?: string;
      imgSearchUsername?: string;
      staticMapsProvider?: string;
      captionLengthMax: number;
      messageLengthMax: number;
      webfileDcId: number;
      suggestedLangCode?: string;
      langPackVersion?: number;
      baseLangPackVersion?: number;
      reactionsDefault?: TypeReaction;
      autologinToken?: string;
    },
  ) {
    super();
    this.defaultP2pContacts = params.defaultP2pContacts;
    this.preloadFeaturedStickers = params.preloadFeaturedStickers;
    this.revokePmInbox = params.revokePmInbox;
    this.blockedMode = params.blockedMode;
    this.forceTryIpv6 = params.forceTryIpv6;
    this.date = params.date;
    this.expires = params.expires;
    this.testMode = params.testMode;
    this.thisDc = params.thisDc;
    this.dcOptions = params.dcOptions;
    this.dcTxtDomainName = params.dcTxtDomainName;
    this.chatSizeMax = params.chatSizeMax;
    this.megagroupSizeMax = params.megagroupSizeMax;
    this.forwardedCountMax = params.forwardedCountMax;
    this.onlineUpdatePeriodMs = params.onlineUpdatePeriodMs;
    this.offlineBlurTimeoutMs = params.offlineBlurTimeoutMs;
    this.offlineIdleTimeoutMs = params.offlineIdleTimeoutMs;
    this.onlineCloudTimeoutMs = params.onlineCloudTimeoutMs;
    this.notifyCloudDelayMs = params.notifyCloudDelayMs;
    this.notifyDefaultDelayMs = params.notifyDefaultDelayMs;
    this.pushChatPeriodMs = params.pushChatPeriodMs;
    this.pushChatLimit = params.pushChatLimit;
    this.editTimeLimit = params.editTimeLimit;
    this.revokeTimeLimit = params.revokeTimeLimit;
    this.revokePmTimeLimit = params.revokePmTimeLimit;
    this.ratingEDecay = params.ratingEDecay;
    this.stickersRecentLimit = params.stickersRecentLimit;
    this.channelsReadMediaPeriod = params.channelsReadMediaPeriod;
    this.tmpSessions = params.tmpSessions;
    this.callReceiveTimeoutMs = params.callReceiveTimeoutMs;
    this.callRingTimeoutMs = params.callRingTimeoutMs;
    this.callConnectTimeoutMs = params.callConnectTimeoutMs;
    this.callPacketTimeoutMs = params.callPacketTimeoutMs;
    this.meUrlPrefix = params.meUrlPrefix;
    this.autoupdateUrlPrefix = params.autoupdateUrlPrefix;
    this.gifSearchUsername = params.gifSearchUsername;
    this.venueSearchUsername = params.venueSearchUsername;
    this.imgSearchUsername = params.imgSearchUsername;
    this.staticMapsProvider = params.staticMapsProvider;
    this.captionLengthMax = params.captionLengthMax;
    this.messageLengthMax = params.messageLengthMax;
    this.webfileDcId = params.webfileDcId;
    this.suggestedLangCode = params.suggestedLangCode;
    this.langPackVersion = params.langPackVersion;
    this.baseLangPackVersion = params.baseLangPackVersion;
    this.reactionsDefault = params.reactionsDefault;
    this.autologinToken = params.autologinToken;
  }
}

export class NearestDc extends Constructor {
  country: string;
  thisDc: number;
  nearestDc: number;

  protected get [id]() {
    return 0x8e1a1775;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["country", "string", "string"],
      ["thisDc", "number", "int"],
      ["nearestDc", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.country, "string", "string"],
      [this.thisDc, "number", "int"],
      [this.nearestDc, "number", "int"],
    ];
  }

  constructor(params: { country: string; thisDc: number; nearestDc: number }) {
    super();
    this.country = params.country;
    this.thisDc = params.thisDc;
    this.nearestDc = params.nearestDc;
  }
}

export class HelpAppUpdate extends Constructor {
  canNotSkip?: true;
  id: number;
  version: string;
  text: string;
  entities: Array<TypeMessageEntity>;
  document?: TypeDocument;
  url?: string;
  sticker?: TypeDocument;

  protected get [id]() {
    return 0xccbbce30;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["canNotSkip", "true", "flags.0?true"],
      ["id", "number", "int"],
      ["version", "string", "string"],
      ["text", "string", "string"],
      ["entities", [TypeMessageEntity], "Vector<MessageEntity>"],
      ["document", TypeDocument, "flags.1?Document"],
      ["url", "string", "flags.2?string"],
      ["sticker", TypeDocument, "flags.3?Document"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.canNotSkip ?? null, "true", "flags.0?true"],
      [this.id, "number", "int"],
      [this.version, "string", "string"],
      [this.text, "string", "string"],
      [this.entities, [TypeMessageEntity], "Vector<MessageEntity>"],
      [this.document ?? null, TypeDocument, "flags.1?Document"],
      [this.url ?? null, "string", "flags.2?string"],
      [this.sticker ?? null, TypeDocument, "flags.3?Document"],
    ];
  }

  constructor(
    params: {
      canNotSkip?: true;
      id: number;
      version: string;
      text: string;
      entities: Array<TypeMessageEntity>;
      document?: TypeDocument;
      url?: string;
      sticker?: TypeDocument;
    },
  ) {
    super();
    this.canNotSkip = params.canNotSkip;
    this.id = params.id;
    this.version = params.version;
    this.text = params.text;
    this.entities = params.entities;
    this.document = params.document;
    this.url = params.url;
    this.sticker = params.sticker;
  }
}

export class HelpNoAppUpdate extends TypeHelpAppUpdate {
  protected get [id]() {
    return 0xc45a6536;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class HelpInviteText extends Constructor {
  message: string;

  protected get [id]() {
    return 0x18cb9f78;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, "string", "string"],
    ];
  }

  constructor(params: { message: string }) {
    super();
    this.message = params.message;
  }
}

export class EncryptedChatEmpty extends TypeEncryptedChat {
  id: number;

  protected get [id]() {
    return 0xab7ec0a0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

export class EncryptedChatWaiting extends TypeEncryptedChat {
  id: number;
  accessHash: bigint;
  date: number;
  adminId: bigint;
  participantId: bigint;

  protected get [id]() {
    return 0x66b25953;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
      ["accessHash", "bigint", "long"],
      ["date", "number", "int"],
      ["adminId", "bigint", "long"],
      ["participantId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
      [this.accessHash, "bigint", "long"],
      [this.date, "number", "int"],
      [this.adminId, "bigint", "long"],
      [this.participantId, "bigint", "long"],
    ];
  }

  constructor(
    params: {
      id: number;
      accessHash: bigint;
      date: number;
      adminId: bigint;
      participantId: bigint;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.date = params.date;
    this.adminId = params.adminId;
    this.participantId = params.participantId;
  }
}

export class EncryptedChatRequested extends TypeEncryptedChat {
  folderId?: number;
  id: number;
  accessHash: bigint;
  date: number;
  adminId: bigint;
  participantId: bigint;
  gA: Uint8Array;

  protected get [id]() {
    return 0x48f1d94c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["folderId", "number", "flags.0?int"],
      ["id", "number", "int"],
      ["accessHash", "bigint", "long"],
      ["date", "number", "int"],
      ["adminId", "bigint", "long"],
      ["participantId", "bigint", "long"],
      ["gA", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.folderId ?? null, "number", "flags.0?int"],
      [this.id, "number", "int"],
      [this.accessHash, "bigint", "long"],
      [this.date, "number", "int"],
      [this.adminId, "bigint", "long"],
      [this.participantId, "bigint", "long"],
      [this.gA, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      folderId?: number;
      id: number;
      accessHash: bigint;
      date: number;
      adminId: bigint;
      participantId: bigint;
      gA: Uint8Array;
    },
  ) {
    super();
    this.folderId = params.folderId;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.date = params.date;
    this.adminId = params.adminId;
    this.participantId = params.participantId;
    this.gA = params.gA;
  }
}

export class EncryptedChat extends Constructor {
  id: number;
  accessHash: bigint;
  date: number;
  adminId: bigint;
  participantId: bigint;
  gAOrB: Uint8Array;
  keyFingerprint: bigint;

  protected get [id]() {
    return 0x61f0d4c7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
      ["accessHash", "bigint", "long"],
      ["date", "number", "int"],
      ["adminId", "bigint", "long"],
      ["participantId", "bigint", "long"],
      ["gAOrB", Uint8Array, "bytes"],
      ["keyFingerprint", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
      [this.accessHash, "bigint", "long"],
      [this.date, "number", "int"],
      [this.adminId, "bigint", "long"],
      [this.participantId, "bigint", "long"],
      [this.gAOrB, Uint8Array, "bytes"],
      [this.keyFingerprint, "bigint", "long"],
    ];
  }

  constructor(
    params: {
      id: number;
      accessHash: bigint;
      date: number;
      adminId: bigint;
      participantId: bigint;
      gAOrB: Uint8Array;
      keyFingerprint: bigint;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.date = params.date;
    this.adminId = params.adminId;
    this.participantId = params.participantId;
    this.gAOrB = params.gAOrB;
    this.keyFingerprint = params.keyFingerprint;
  }
}

export class EncryptedChatDiscarded extends TypeEncryptedChat {
  historyDeleted?: true;
  id: number;

  protected get [id]() {
    return 0x1e1c7c45;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["historyDeleted", "true", "flags.0?true"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.historyDeleted ?? null, "true", "flags.0?true"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { historyDeleted?: true; id: number }) {
    super();
    this.historyDeleted = params.historyDeleted;
    this.id = params.id;
  }
}

export class InputEncryptedChat extends Constructor {
  chatId: number;
  accessHash: bigint;

  protected get [id]() {
    return 0xf141b5e1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chatId", "number", "int"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chatId, "number", "int"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { chatId: number; accessHash: bigint }) {
    super();
    this.chatId = params.chatId;
    this.accessHash = params.accessHash;
  }
}

export class EncryptedFileEmpty extends TypeEncryptedFile {
  protected get [id]() {
    return 0xc21f497e;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class EncryptedFile extends Constructor {
  id: bigint;
  accessHash: bigint;
  size: bigint;
  dcId: number;
  keyFingerprint: number;

  protected get [id]() {
    return 0xa8008cd8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["size", "bigint", "long"],
      ["dcId", "number", "int"],
      ["keyFingerprint", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.size, "bigint", "long"],
      [this.dcId, "number", "int"],
      [this.keyFingerprint, "number", "int"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      accessHash: bigint;
      size: bigint;
      dcId: number;
      keyFingerprint: number;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.size = params.size;
    this.dcId = params.dcId;
    this.keyFingerprint = params.keyFingerprint;
  }
}

export class InputEncryptedFileEmpty extends TypeInputEncryptedFile {
  protected get [id]() {
    return 0x1837c364;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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
  md5Checksum: string;
  keyFingerprint: number;

  protected get [id]() {
    return 0x64bd0306;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["parts", "number", "int"],
      ["md5Checksum", "string", "string"],
      ["keyFingerprint", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.parts, "number", "int"],
      [this.md5Checksum, "string", "string"],
      [this.keyFingerprint, "number", "int"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      parts: number;
      md5Checksum: string;
      keyFingerprint: number;
    },
  ) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.md5Checksum = params.md5Checksum;
    this.keyFingerprint = params.keyFingerprint;
  }
}

export class InputEncryptedFile extends Constructor {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x5a17b5e5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputEncryptedFileBigUploaded extends TypeInputEncryptedFile {
  id: bigint;
  parts: number;
  keyFingerprint: number;

  protected get [id]() {
    return 0x2dc173c8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["parts", "number", "int"],
      ["keyFingerprint", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.parts, "number", "int"],
      [this.keyFingerprint, "number", "int"],
    ];
  }

  constructor(params: { id: bigint; parts: number; keyFingerprint: number }) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.keyFingerprint = params.keyFingerprint;
  }
}

export class EncryptedMessage extends Constructor {
  randomId: bigint;
  chatId: number;
  date: number;
  bytes: Uint8Array;
  file: TypeEncryptedFile;

  protected get [id]() {
    return 0xed18c118;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["randomId", "bigint", "long"],
      ["chatId", "number", "int"],
      ["date", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
      ["file", TypeEncryptedFile, "EncryptedFile"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.randomId, "bigint", "long"],
      [this.chatId, "number", "int"],
      [this.date, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
      [this.file, TypeEncryptedFile, "EncryptedFile"],
    ];
  }

  constructor(
    params: {
      randomId: bigint;
      chatId: number;
      date: number;
      bytes: Uint8Array;
      file: TypeEncryptedFile;
    },
  ) {
    super();
    this.randomId = params.randomId;
    this.chatId = params.chatId;
    this.date = params.date;
    this.bytes = params.bytes;
    this.file = params.file;
  }
}

export class EncryptedMessageService extends TypeEncryptedMessage {
  randomId: bigint;
  chatId: number;
  date: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0x23734b06;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["randomId", "bigint", "long"],
      ["chatId", "number", "int"],
      ["date", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.randomId, "bigint", "long"],
      [this.chatId, "number", "int"],
      [this.date, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      randomId: bigint;
      chatId: number;
      date: number;
      bytes: Uint8Array;
    },
  ) {
    super();
    this.randomId = params.randomId;
    this.chatId = params.chatId;
    this.date = params.date;
    this.bytes = params.bytes;
  }
}

export class MessagesDhConfigNotModified extends TypeMessagesDhConfig {
  random: Uint8Array;

  protected get [id]() {
    return 0xc0e24635;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["random", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.random, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { random: Uint8Array }) {
    super();
    this.random = params.random;
  }
}

export class MessagesDhConfig extends Constructor {
  g: number;
  p: Uint8Array;
  version: number;
  random: Uint8Array;

  protected get [id]() {
    return 0x2c221edd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["g", "number", "int"],
      ["p", Uint8Array, "bytes"],
      ["version", "number", "int"],
      ["random", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.g, "number", "int"],
      [this.p, Uint8Array, "bytes"],
      [this.version, "number", "int"],
      [this.random, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: { g: number; p: Uint8Array; version: number; random: Uint8Array },
  ) {
    super();
    this.g = params.g;
    this.p = params.p;
    this.version = params.version;
    this.random = params.random;
  }
}

export class MessagesSentEncryptedMessage extends Constructor {
  date: number;

  protected get [id]() {
    return 0x560f8935;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { date: number }) {
    super();
    this.date = params.date;
  }
}

export class MessagesSentEncryptedFile
  extends TypeMessagesSentEncryptedMessage {
  date: number;
  file: TypeEncryptedFile;

  protected get [id]() {
    return 0x9493ff32;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["date", "number", "int"],
      ["file", TypeEncryptedFile, "EncryptedFile"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.date, "number", "int"],
      [this.file, TypeEncryptedFile, "EncryptedFile"],
    ];
  }

  constructor(params: { date: number; file: TypeEncryptedFile }) {
    super();
    this.date = params.date;
    this.file = params.file;
  }
}

export class InputDocumentEmpty extends TypeInputDocument {
  protected get [id]() {
    return 0x72f0eaae;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputDocument extends Constructor {
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;

  protected get [id]() {
    return 0x1abfb575;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["fileReference", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.fileReference, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: { id: bigint; accessHash: bigint; fileReference: Uint8Array },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
  }
}

export class DocumentEmpty extends TypeDocument {
  id: bigint;

  protected get [id]() {
    return 0x36f8c871;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class Document extends Constructor {
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;
  date: number;
  mimeType: string;
  size: bigint;
  thumbs?: Array<TypePhotoSize>;
  videoThumbs?: Array<TypeVideoSize>;
  dcId: number;
  attributes: Array<TypeDocumentAttribute>;

  protected get [id]() {
    return 0x8fd4c4d8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["fileReference", Uint8Array, "bytes"],
      ["date", "number", "int"],
      ["mimeType", "string", "string"],
      ["size", "bigint", "long"],
      ["thumbs", [TypePhotoSize], "flags.0?Vector<PhotoSize>"],
      ["videoThumbs", [TypeVideoSize], "flags.1?Vector<VideoSize>"],
      ["dcId", "number", "int"],
      ["attributes", [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.fileReference, Uint8Array, "bytes"],
      [this.date, "number", "int"],
      [this.mimeType, "string", "string"],
      [this.size, "bigint", "long"],
      [this.thumbs ?? null, [TypePhotoSize], "flags.0?Vector<PhotoSize>"],
      [this.videoThumbs ?? null, [TypeVideoSize], "flags.1?Vector<VideoSize>"],
      [this.dcId, "number", "int"],
      [this.attributes, [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      accessHash: bigint;
      fileReference: Uint8Array;
      date: number;
      mimeType: string;
      size: bigint;
      thumbs?: Array<TypePhotoSize>;
      videoThumbs?: Array<TypeVideoSize>;
      dcId: number;
      attributes: Array<TypeDocumentAttribute>;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
    this.date = params.date;
    this.mimeType = params.mimeType;
    this.size = params.size;
    this.thumbs = params.thumbs;
    this.videoThumbs = params.videoThumbs;
    this.dcId = params.dcId;
    this.attributes = params.attributes;
  }
}

export class HelpSupport extends Constructor {
  phoneNumber: string;
  user: TypeUser;

  protected get [id]() {
    return 0x17c6b5f6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["user", TypeUser, "User"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.user, TypeUser, "User"],
    ];
  }

  constructor(params: { phoneNumber: string; user: TypeUser }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.user = params.user;
  }
}

export class NotifyPeer extends Constructor {
  peer: TypePeer;

  protected get [id]() {
    return 0x9fd40bd8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
    ];
  }

  constructor(params: { peer: TypePeer }) {
    super();
    this.peer = params.peer;
  }
}

export class NotifyUsers extends TypeNotifyPeer {
  protected get [id]() {
    return 0xb4c83b4c;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class NotifyForumTopic extends TypeNotifyPeer {
  peer: TypePeer;
  topMsgId: number;

  protected get [id]() {
    return 0x226e6308;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["topMsgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.topMsgId, "number", "int"],
    ];
  }

  constructor(params: { peer: TypePeer; topMsgId: number }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
  }
}

export class SendMessageTypingAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0x16bf744e;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["progress", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.progress, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["progress", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.progress, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["progress", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.progress, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["progress", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.progress, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["progress", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.progress, "number", "int"],
    ];
  }

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class SpeakingInGroupCallAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0xd92c2285;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SendMessageHistoryImportAction extends TypeSendMessageAction {
  progress: number;

  protected get [id]() {
    return 0xdbda9246;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["progress", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.progress, "number", "int"],
    ];
  }

  constructor(params: { progress: number }) {
    super();
    this.progress = params.progress;
  }
}

export class SendMessageChooseStickerAction extends TypeSendMessageAction {
  protected get [id]() {
    return 0xb05ac6b1;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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
  msgId: number;
  interaction: TypeDataJSON;

  protected get [id]() {
    return 0x25972bcb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
      ["msgId", "number", "int"],
      ["interaction", TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
      [this.msgId, "number", "int"],
      [this.interaction, TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(
    params: { emoticon: string; msgId: number; interaction: TypeDataJSON },
  ) {
    super();
    this.emoticon = params.emoticon;
    this.msgId = params.msgId;
    this.interaction = params.interaction;
  }
}

export class SendMessageEmojiInteractionSeen extends TypeSendMessageAction {
  emoticon: string;

  protected get [id]() {
    return 0xb665902e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class ContactsFound extends Constructor {
  myResults: Array<TypePeer>;
  results: Array<TypePeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xb3134d9d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["myResults", [TypePeer], "Vector<Peer>"],
      ["results", [TypePeer], "Vector<Peer>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.myResults, [TypePeer], "Vector<Peer>"],
      [this.results, [TypePeer], "Vector<Peer>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      myResults: Array<TypePeer>;
      results: Array<TypePeer>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.myResults = params.myResults;
    this.results = params.results;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class InputPrivacyKeyStatusTimestamp extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0x4f96cb18;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyKeyPhoneCall extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xfabadc5f;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyKeyPhoneP2P extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xdb9e70d2;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyKeyForwards extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xa4dd4c08;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyKeyPhoneNumber extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0x0352dafa;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputPrivacyKeyAddedByPhone extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0xd1219bdd;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["users", [TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.users, [TypeInputUser], "Vector<InputUser>"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["users", [TypeInputUser], "Vector<InputUser>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.users, [TypeInputUser], "Vector<InputUser>"],
    ];
  }

  constructor(params: { users: Array<TypeInputUser> }) {
    super();
    this.users = params.users;
  }
}

export class InputPrivacyValueAllowChatParticipants
  extends TypeInputPrivacyRule {
  chats: Array<bigint>;

  protected get [id]() {
    return 0x840649cf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chats", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chats, ["bigint"], "Vector<long>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["chats", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chats, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { chats: Array<bigint> }) {
    super();
    this.chats = params.chats;
  }
}

export class PrivacyValueAllowContacts extends TypePrivacyRule {
  protected get [id]() {
    return 0xfffe1bac;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["users", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.users, ["bigint"], "Vector<long>"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["users", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.users, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { users: Array<bigint> }) {
    super();
    this.users = params.users;
  }
}

export class PrivacyValueAllowChatParticipants extends TypePrivacyRule {
  chats: Array<bigint>;

  protected get [id]() {
    return 0x6b134e8e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chats", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chats, ["bigint"], "Vector<long>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["chats", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chats, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { chats: Array<bigint> }) {
    super();
    this.chats = params.chats;
  }
}

export class AccountPrivacyRules extends Constructor {
  rules: Array<TypePrivacyRule>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x50a04e45;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["rules", [TypePrivacyRule], "Vector<PrivacyRule>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.rules, [TypePrivacyRule], "Vector<PrivacyRule>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      rules: Array<TypePrivacyRule>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.rules = params.rules;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class AccountDaysTTL extends Constructor {
  days: number;

  protected get [id]() {
    return 0xb8d0afdf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["days", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.days, "number", "int"],
    ];
  }

  constructor(params: { days: number }) {
    super();
    this.days = params.days;
  }
}

export class DocumentAttributeImageSize extends TypeDocumentAttribute {
  w: number;
  h: number;

  protected get [id]() {
    return 0x6c37c15c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["w", "number", "int"],
      ["h", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.w, "number", "int"],
      [this.h, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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
  maskCoords?: TypeMaskCoords;

  protected get [id]() {
    return 0x6319d612;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["mask", "true", "flags.1?true"],
      ["alt", "string", "string"],
      ["stickerset", TypeInputStickerSet, "InputStickerSet"],
      ["maskCoords", TypeMaskCoords, "flags.0?MaskCoords"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.mask ?? null, "true", "flags.1?true"],
      [this.alt, "string", "string"],
      [this.stickerset, TypeInputStickerSet, "InputStickerSet"],
      [this.maskCoords ?? null, TypeMaskCoords, "flags.0?MaskCoords"],
    ];
  }

  constructor(
    params: {
      mask?: true;
      alt: string;
      stickerset: TypeInputStickerSet;
      maskCoords?: TypeMaskCoords;
    },
  ) {
    super();
    this.mask = params.mask;
    this.alt = params.alt;
    this.stickerset = params.stickerset;
    this.maskCoords = params.maskCoords;
  }
}

export class DocumentAttributeVideo extends TypeDocumentAttribute {
  roundMessage?: true;
  supportsStreaming?: true;
  duration: number;
  w: number;
  h: number;

  protected get [id]() {
    return 0x0ef02ce6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["roundMessage", "true", "flags.0?true"],
      ["supportsStreaming", "true", "flags.1?true"],
      ["duration", "number", "int"],
      ["w", "number", "int"],
      ["h", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.roundMessage ?? null, "true", "flags.0?true"],
      [this.supportsStreaming ?? null, "true", "flags.1?true"],
      [this.duration, "number", "int"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
    ];
  }

  constructor(
    params: {
      roundMessage?: true;
      supportsStreaming?: true;
      duration: number;
      w: number;
      h: number;
    },
  ) {
    super();
    this.roundMessage = params.roundMessage;
    this.supportsStreaming = params.supportsStreaming;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["voice", "true", "flags.10?true"],
      ["duration", "number", "int"],
      ["title", "string", "flags.0?string"],
      ["performer", "string", "flags.1?string"],
      ["waveform", Uint8Array, "flags.2?bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.voice ?? null, "true", "flags.10?true"],
      [this.duration, "number", "int"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.performer ?? null, "string", "flags.1?string"],
      [this.waveform ?? null, Uint8Array, "flags.2?bytes"],
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
  fileName: string;

  protected get [id]() {
    return 0x15590068;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fileName", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fileName, "string", "string"],
    ];
  }

  constructor(params: { fileName: string }) {
    super();
    this.fileName = params.fileName;
  }
}

export class DocumentAttributeHasStickers extends TypeDocumentAttribute {
  protected get [id]() {
    return 0x9801d2f7;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class DocumentAttributeCustomEmoji extends TypeDocumentAttribute {
  free?: true;
  textColor?: true;
  alt: string;
  stickerset: TypeInputStickerSet;

  protected get [id]() {
    return 0xfd149899;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["free", "true", "flags.0?true"],
      ["textColor", "true", "flags.1?true"],
      ["alt", "string", "string"],
      ["stickerset", TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.free ?? null, "true", "flags.0?true"],
      [this.textColor ?? null, "true", "flags.1?true"],
      [this.alt, "string", "string"],
      [this.stickerset, TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(
    params: {
      free?: true;
      textColor?: true;
      alt: string;
      stickerset: TypeInputStickerSet;
    },
  ) {
    super();
    this.free = params.free;
    this.textColor = params.textColor;
    this.alt = params.alt;
    this.stickerset = params.stickerset;
  }
}

export class MessagesStickersNotModified extends TypeMessagesStickers {
  protected get [id]() {
    return 0xf1749a22;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesStickers extends Constructor {
  hash: bigint;
  stickers: Array<TypeDocument>;

  protected get [id]() {
    return 0x30a6ec7e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["stickers", [TypeDocument], "Vector<Document>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.stickers, [TypeDocument], "Vector<Document>"],
    ];
  }

  constructor(params: { hash: bigint; stickers: Array<TypeDocument> }) {
    super();
    this.hash = params.hash;
    this.stickers = params.stickers;
  }
}

export class StickerPack extends Constructor {
  emoticon: string;
  documents: Array<bigint>;

  protected get [id]() {
    return 0x12b299d4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
      ["documents", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
      [this.documents, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { emoticon: string; documents: Array<bigint> }) {
    super();
    this.emoticon = params.emoticon;
    this.documents = params.documents;
  }
}

export class MessagesAllStickersNotModified extends TypeMessagesAllStickers {
  protected get [id]() {
    return 0xe86602c3;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesAllStickers extends Constructor {
  hash: bigint;
  sets: Array<TypeStickerSet>;

  protected get [id]() {
    return 0xcdbbcebb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["sets", [TypeStickerSet], "Vector<StickerSet>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.sets, [TypeStickerSet], "Vector<StickerSet>"],
    ];
  }

  constructor(params: { hash: bigint; sets: Array<TypeStickerSet> }) {
    super();
    this.hash = params.hash;
    this.sets = params.sets;
  }
}

export class MessagesAffectedMessages extends Constructor {
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x84d19185;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
    ];
  }

  constructor(params: { pts: number; ptsCount: number }) {
    super();
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
  }
}

export class WebPageEmpty extends TypeWebPage {
  id: bigint;

  protected get [id]() {
    return 0xeb1477e8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { id: bigint; date: number }) {
    super();
    this.id = params.id;
    this.date = params.date;
  }
}

export class WebPage extends Constructor {
  id: bigint;
  url: string;
  displayUrl: string;
  hash: number;
  type?: string;
  siteName?: string;
  title?: string;
  description?: string;
  photo?: TypePhoto;
  embedUrl?: string;
  embedType?: string;
  embedWidth?: number;
  embedHeight?: number;
  duration?: number;
  author?: string;
  document?: TypeDocument;
  cachedPage?: TypePage;
  attributes?: Array<TypeWebPageAttribute>;

  protected get [id]() {
    return 0xe89c45b2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "bigint", "long"],
      ["url", "string", "string"],
      ["displayUrl", "string", "string"],
      ["hash", "number", "int"],
      ["type", "string", "flags.0?string"],
      ["siteName", "string", "flags.1?string"],
      ["title", "string", "flags.2?string"],
      ["description", "string", "flags.3?string"],
      ["photo", TypePhoto, "flags.4?Photo"],
      ["embedUrl", "string", "flags.5?string"],
      ["embedType", "string", "flags.5?string"],
      ["embedWidth", "number", "flags.6?int"],
      ["embedHeight", "number", "flags.6?int"],
      ["duration", "number", "flags.7?int"],
      ["author", "string", "flags.8?string"],
      ["document", TypeDocument, "flags.9?Document"],
      ["cachedPage", TypePage, "flags.10?Page"],
      [
        "attributes",
        [TypeWebPageAttribute],
        "flags.12?Vector<WebPageAttribute>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "bigint", "long"],
      [this.url, "string", "string"],
      [this.displayUrl, "string", "string"],
      [this.hash, "number", "int"],
      [this.type ?? null, "string", "flags.0?string"],
      [this.siteName ?? null, "string", "flags.1?string"],
      [this.title ?? null, "string", "flags.2?string"],
      [this.description ?? null, "string", "flags.3?string"],
      [this.photo ?? null, TypePhoto, "flags.4?Photo"],
      [this.embedUrl ?? null, "string", "flags.5?string"],
      [this.embedType ?? null, "string", "flags.5?string"],
      [this.embedWidth ?? null, "number", "flags.6?int"],
      [this.embedHeight ?? null, "number", "flags.6?int"],
      [this.duration ?? null, "number", "flags.7?int"],
      [this.author ?? null, "string", "flags.8?string"],
      [this.document ?? null, TypeDocument, "flags.9?Document"],
      [this.cachedPage ?? null, TypePage, "flags.10?Page"],
      [
        this.attributes ?? null,
        [TypeWebPageAttribute],
        "flags.12?Vector<WebPageAttribute>",
      ],
    ];
  }

  constructor(
    params: {
      id: bigint;
      url: string;
      displayUrl: string;
      hash: number;
      type?: string;
      siteName?: string;
      title?: string;
      description?: string;
      photo?: TypePhoto;
      embedUrl?: string;
      embedType?: string;
      embedWidth?: number;
      embedHeight?: number;
      duration?: number;
      author?: string;
      document?: TypeDocument;
      cachedPage?: TypePage;
      attributes?: Array<TypeWebPageAttribute>;
    },
  ) {
    super();
    this.id = params.id;
    this.url = params.url;
    this.displayUrl = params.displayUrl;
    this.hash = params.hash;
    this.type = params.type;
    this.siteName = params.siteName;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.embedUrl = params.embedUrl;
    this.embedType = params.embedType;
    this.embedWidth = params.embedWidth;
    this.embedHeight = params.embedHeight;
    this.duration = params.duration;
    this.author = params.author;
    this.document = params.document;
    this.cachedPage = params.cachedPage;
    this.attributes = params.attributes;
  }
}

export class WebPageNotModified extends TypeWebPage {
  cachedPageViews?: number;

  protected get [id]() {
    return 0x7311ca11;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["cachedPageViews", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.cachedPageViews ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { cachedPageViews?: number }) {
    super();
    this.cachedPageViews = params.cachedPageViews;
  }
}

export class Authorization extends Constructor {
  current?: true;
  officialApp?: true;
  passwordPending?: true;
  encryptedRequestsDisabled?: true;
  callRequestsDisabled?: true;
  hash: bigint;
  deviceModel: string;
  platform: string;
  systemVersion: string;
  apiId: number;
  appName: string;
  appVersion: string;
  dateCreated: number;
  dateActive: number;
  ip: string;
  country: string;
  region: string;

  protected get [id]() {
    return 0xad01d61d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["current", "true", "flags.0?true"],
      ["officialApp", "true", "flags.1?true"],
      ["passwordPending", "true", "flags.2?true"],
      ["encryptedRequestsDisabled", "true", "flags.3?true"],
      ["callRequestsDisabled", "true", "flags.4?true"],
      ["hash", "bigint", "long"],
      ["deviceModel", "string", "string"],
      ["platform", "string", "string"],
      ["systemVersion", "string", "string"],
      ["apiId", "number", "int"],
      ["appName", "string", "string"],
      ["appVersion", "string", "string"],
      ["dateCreated", "number", "int"],
      ["dateActive", "number", "int"],
      ["ip", "string", "string"],
      ["country", "string", "string"],
      ["region", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.current ?? null, "true", "flags.0?true"],
      [this.officialApp ?? null, "true", "flags.1?true"],
      [this.passwordPending ?? null, "true", "flags.2?true"],
      [this.encryptedRequestsDisabled ?? null, "true", "flags.3?true"],
      [this.callRequestsDisabled ?? null, "true", "flags.4?true"],
      [this.hash, "bigint", "long"],
      [this.deviceModel, "string", "string"],
      [this.platform, "string", "string"],
      [this.systemVersion, "string", "string"],
      [this.apiId, "number", "int"],
      [this.appName, "string", "string"],
      [this.appVersion, "string", "string"],
      [this.dateCreated, "number", "int"],
      [this.dateActive, "number", "int"],
      [this.ip, "string", "string"],
      [this.country, "string", "string"],
      [this.region, "string", "string"],
    ];
  }

  constructor(
    params: {
      current?: true;
      officialApp?: true;
      passwordPending?: true;
      encryptedRequestsDisabled?: true;
      callRequestsDisabled?: true;
      hash: bigint;
      deviceModel: string;
      platform: string;
      systemVersion: string;
      apiId: number;
      appName: string;
      appVersion: string;
      dateCreated: number;
      dateActive: number;
      ip: string;
      country: string;
      region: string;
    },
  ) {
    super();
    this.current = params.current;
    this.officialApp = params.officialApp;
    this.passwordPending = params.passwordPending;
    this.encryptedRequestsDisabled = params.encryptedRequestsDisabled;
    this.callRequestsDisabled = params.callRequestsDisabled;
    this.hash = params.hash;
    this.deviceModel = params.deviceModel;
    this.platform = params.platform;
    this.systemVersion = params.systemVersion;
    this.apiId = params.apiId;
    this.appName = params.appName;
    this.appVersion = params.appVersion;
    this.dateCreated = params.dateCreated;
    this.dateActive = params.dateActive;
    this.ip = params.ip;
    this.country = params.country;
    this.region = params.region;
  }
}

export class AccountAuthorizations extends Constructor {
  authorizationTtlDays: number;
  authorizations: Array<TypeAuthorization>;

  protected get [id]() {
    return 0x4bff8ea0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["authorizationTtlDays", "number", "int"],
      ["authorizations", [TypeAuthorization], "Vector<Authorization>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.authorizationTtlDays, "number", "int"],
      [this.authorizations, [TypeAuthorization], "Vector<Authorization>"],
    ];
  }

  constructor(
    params: {
      authorizationTtlDays: number;
      authorizations: Array<TypeAuthorization>;
    },
  ) {
    super();
    this.authorizationTtlDays = params.authorizationTtlDays;
    this.authorizations = params.authorizations;
  }
}

export class AccountPassword extends Constructor {
  hasRecovery?: true;
  hasSecureValues?: true;
  hasPassword?: true;
  currentAlgo?: TypePasswordKdfAlgo;
  srpB?: Uint8Array;
  srpId?: bigint;
  hint?: string;
  emailUnconfirmedPattern?: string;
  newAlgo: TypePasswordKdfAlgo;
  newSecureAlgo: TypeSecurePasswordKdfAlgo;
  secureRandom: Uint8Array;
  pendingResetDate?: number;
  loginEmailPattern?: string;

  protected get [id]() {
    return 0x957b50fb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hasRecovery", "true", "flags.0?true"],
      ["hasSecureValues", "true", "flags.1?true"],
      ["hasPassword", "true", "flags.2?true"],
      ["currentAlgo", TypePasswordKdfAlgo, "flags.2?PasswordKdfAlgo"],
      ["srpB", Uint8Array, "flags.2?bytes"],
      ["srpId", "bigint", "flags.2?long"],
      ["hint", "string", "flags.3?string"],
      ["emailUnconfirmedPattern", "string", "flags.4?string"],
      ["newAlgo", TypePasswordKdfAlgo, "PasswordKdfAlgo"],
      ["newSecureAlgo", TypeSecurePasswordKdfAlgo, "SecurePasswordKdfAlgo"],
      ["secureRandom", Uint8Array, "bytes"],
      ["pendingResetDate", "number", "flags.5?int"],
      ["loginEmailPattern", "string", "flags.6?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hasRecovery ?? null, "true", "flags.0?true"],
      [this.hasSecureValues ?? null, "true", "flags.1?true"],
      [this.hasPassword ?? null, "true", "flags.2?true"],
      [
        this.currentAlgo ?? null,
        TypePasswordKdfAlgo,
        "flags.2?PasswordKdfAlgo",
      ],
      [this.srpB ?? null, Uint8Array, "flags.2?bytes"],
      [this.srpId ?? null, "bigint", "flags.2?long"],
      [this.hint ?? null, "string", "flags.3?string"],
      [this.emailUnconfirmedPattern ?? null, "string", "flags.4?string"],
      [this.newAlgo, TypePasswordKdfAlgo, "PasswordKdfAlgo"],
      [this.newSecureAlgo, TypeSecurePasswordKdfAlgo, "SecurePasswordKdfAlgo"],
      [this.secureRandom, Uint8Array, "bytes"],
      [this.pendingResetDate ?? null, "number", "flags.5?int"],
      [this.loginEmailPattern ?? null, "string", "flags.6?string"],
    ];
  }

  constructor(
    params: {
      hasRecovery?: true;
      hasSecureValues?: true;
      hasPassword?: true;
      currentAlgo?: TypePasswordKdfAlgo;
      srpB?: Uint8Array;
      srpId?: bigint;
      hint?: string;
      emailUnconfirmedPattern?: string;
      newAlgo: TypePasswordKdfAlgo;
      newSecureAlgo: TypeSecurePasswordKdfAlgo;
      secureRandom: Uint8Array;
      pendingResetDate?: number;
      loginEmailPattern?: string;
    },
  ) {
    super();
    this.hasRecovery = params.hasRecovery;
    this.hasSecureValues = params.hasSecureValues;
    this.hasPassword = params.hasPassword;
    this.currentAlgo = params.currentAlgo;
    this.srpB = params.srpB;
    this.srpId = params.srpId;
    this.hint = params.hint;
    this.emailUnconfirmedPattern = params.emailUnconfirmedPattern;
    this.newAlgo = params.newAlgo;
    this.newSecureAlgo = params.newSecureAlgo;
    this.secureRandom = params.secureRandom;
    this.pendingResetDate = params.pendingResetDate;
    this.loginEmailPattern = params.loginEmailPattern;
  }
}

export class AccountPasswordSettings extends Constructor {
  email?: string;
  secureSettings?: TypeSecureSecretSettings;

  protected get [id]() {
    return 0x9a5c33e5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["email", "string", "flags.0?string"],
      [
        "secureSettings",
        TypeSecureSecretSettings,
        "flags.1?SecureSecretSettings",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.email ?? null, "string", "flags.0?string"],
      [
        this.secureSettings ?? null,
        TypeSecureSecretSettings,
        "flags.1?SecureSecretSettings",
      ],
    ];
  }

  constructor(
    params: { email?: string; secureSettings?: TypeSecureSecretSettings },
  ) {
    super();
    this.email = params.email;
    this.secureSettings = params.secureSettings;
  }
}

export class AccountPasswordInputSettings extends Constructor {
  newAlgo?: TypePasswordKdfAlgo;
  newPasswordHash?: Uint8Array;
  hint?: string;
  email?: string;
  newSecureSettings?: TypeSecureSecretSettings;

  protected get [id]() {
    return 0xc23727c9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["newAlgo", TypePasswordKdfAlgo, "flags.0?PasswordKdfAlgo"],
      ["newPasswordHash", Uint8Array, "flags.0?bytes"],
      ["hint", "string", "flags.0?string"],
      ["email", "string", "flags.1?string"],
      [
        "newSecureSettings",
        TypeSecureSecretSettings,
        "flags.2?SecureSecretSettings",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.newAlgo ?? null, TypePasswordKdfAlgo, "flags.0?PasswordKdfAlgo"],
      [this.newPasswordHash ?? null, Uint8Array, "flags.0?bytes"],
      [this.hint ?? null, "string", "flags.0?string"],
      [this.email ?? null, "string", "flags.1?string"],
      [
        this.newSecureSettings ?? null,
        TypeSecureSecretSettings,
        "flags.2?SecureSecretSettings",
      ],
    ];
  }

  constructor(
    params: {
      newAlgo?: TypePasswordKdfAlgo;
      newPasswordHash?: Uint8Array;
      hint?: string;
      email?: string;
      newSecureSettings?: TypeSecureSecretSettings;
    },
  ) {
    super();
    this.newAlgo = params.newAlgo;
    this.newPasswordHash = params.newPasswordHash;
    this.hint = params.hint;
    this.email = params.email;
    this.newSecureSettings = params.newSecureSettings;
  }
}

export class AuthPasswordRecovery extends Constructor {
  emailPattern: string;

  protected get [id]() {
    return 0x137948a5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emailPattern", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emailPattern, "string", "string"],
    ];
  }

  constructor(params: { emailPattern: string }) {
    super();
    this.emailPattern = params.emailPattern;
  }
}

export class ReceivedNotifyMessage extends Constructor {
  id: number;
  flags: number;

  protected get [id]() {
    return 0xa384b779;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
      ["flags", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
      [this.flags, "number", "int"],
    ];
  }

  constructor(params: { id: number; flags: number }) {
    super();
    this.id = params.id;
    this.flags = params.flags;
  }
}

export class ChatInviteExported extends TypeExportedChatInvite {
  revoked?: true;
  permanent?: true;
  requestNeeded?: true;
  link: string;
  adminId: bigint;
  date: number;
  startDate?: number;
  expireDate?: number;
  usageLimit?: number;
  usage?: number;
  requested?: number;
  title?: string;

  protected get [id]() {
    return 0x0ab4a819;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["revoked", "true", "flags.0?true"],
      ["permanent", "true", "flags.5?true"],
      ["requestNeeded", "true", "flags.6?true"],
      ["link", "string", "string"],
      ["adminId", "bigint", "long"],
      ["date", "number", "int"],
      ["startDate", "number", "flags.4?int"],
      ["expireDate", "number", "flags.1?int"],
      ["usageLimit", "number", "flags.2?int"],
      ["usage", "number", "flags.3?int"],
      ["requested", "number", "flags.7?int"],
      ["title", "string", "flags.8?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.revoked ?? null, "true", "flags.0?true"],
      [this.permanent ?? null, "true", "flags.5?true"],
      [this.requestNeeded ?? null, "true", "flags.6?true"],
      [this.link, "string", "string"],
      [this.adminId, "bigint", "long"],
      [this.date, "number", "int"],
      [this.startDate ?? null, "number", "flags.4?int"],
      [this.expireDate ?? null, "number", "flags.1?int"],
      [this.usageLimit ?? null, "number", "flags.2?int"],
      [this.usage ?? null, "number", "flags.3?int"],
      [this.requested ?? null, "number", "flags.7?int"],
      [this.title ?? null, "string", "flags.8?string"],
    ];
  }

  constructor(
    params: {
      revoked?: true;
      permanent?: true;
      requestNeeded?: true;
      link: string;
      adminId: bigint;
      date: number;
      startDate?: number;
      expireDate?: number;
      usageLimit?: number;
      usage?: number;
      requested?: number;
      title?: string;
    },
  ) {
    super();
    this.revoked = params.revoked;
    this.permanent = params.permanent;
    this.requestNeeded = params.requestNeeded;
    this.link = params.link;
    this.adminId = params.adminId;
    this.date = params.date;
    this.startDate = params.startDate;
    this.expireDate = params.expireDate;
    this.usageLimit = params.usageLimit;
    this.usage = params.usage;
    this.requested = params.requested;
    this.title = params.title;
  }
}

export class ChatInvitePublicJoinRequests extends TypeExportedChatInvite {
  protected get [id]() {
    return 0xed107ab7;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChatInviteAlready extends TypeChatInvite {
  chat: TypeChat;

  protected get [id]() {
    return 0x5a686d7c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat", TypeChat, "Chat"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat, TypeChat, "Chat"],
    ];
  }

  constructor(params: { chat: TypeChat }) {
    super();
    this.chat = params.chat;
  }
}

export class ChatInvite extends Constructor {
  channel?: true;
  broadcast?: true;
  public?: true;
  megagroup?: true;
  requestNeeded?: true;
  title: string;
  about?: string;
  photo: TypePhoto;
  participantsCount: number;
  participants?: Array<TypeUser>;

  protected get [id]() {
    return 0x300c44c1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["channel", "true", "flags.0?true"],
      ["broadcast", "true", "flags.1?true"],
      ["public", "true", "flags.2?true"],
      ["megagroup", "true", "flags.3?true"],
      ["requestNeeded", "true", "flags.6?true"],
      ["title", "string", "string"],
      ["about", "string", "flags.5?string"],
      ["photo", TypePhoto, "Photo"],
      ["participantsCount", "number", "int"],
      ["participants", [TypeUser], "flags.4?Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.channel ?? null, "true", "flags.0?true"],
      [this.broadcast ?? null, "true", "flags.1?true"],
      [this.public ?? null, "true", "flags.2?true"],
      [this.megagroup ?? null, "true", "flags.3?true"],
      [this.requestNeeded ?? null, "true", "flags.6?true"],
      [this.title, "string", "string"],
      [this.about ?? null, "string", "flags.5?string"],
      [this.photo, TypePhoto, "Photo"],
      [this.participantsCount, "number", "int"],
      [this.participants ?? null, [TypeUser], "flags.4?Vector<User>"],
    ];
  }

  constructor(
    params: {
      channel?: true;
      broadcast?: true;
      public?: true;
      megagroup?: true;
      requestNeeded?: true;
      title: string;
      about?: string;
      photo: TypePhoto;
      participantsCount: number;
      participants?: Array<TypeUser>;
    },
  ) {
    super();
    this.channel = params.channel;
    this.broadcast = params.broadcast;
    this.public = params.public;
    this.megagroup = params.megagroup;
    this.requestNeeded = params.requestNeeded;
    this.title = params.title;
    this.about = params.about;
    this.photo = params.photo;
    this.participantsCount = params.participantsCount;
    this.participants = params.participants;
  }
}

export class ChatInvitePeek extends TypeChatInvite {
  chat: TypeChat;
  expires: number;

  protected get [id]() {
    return 0x61695cb0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["chat", TypeChat, "Chat"],
      ["expires", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.chat, TypeChat, "Chat"],
      [this.expires, "number", "int"],
    ];
  }

  constructor(params: { chat: TypeChat; expires: number }) {
    super();
    this.chat = params.chat;
    this.expires = params.expires;
  }
}

export class InputStickerSetEmpty extends TypeInputStickerSet {
  protected get [id]() {
    return 0xffb62b95;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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
  accessHash: bigint;

  protected get [id]() {
    return 0x9de7a269;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputStickerSetShortName extends TypeInputStickerSet {
  shortName: string;

  protected get [id]() {
    return 0x861cc8a0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["shortName", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.shortName, "string", "string"],
    ];
  }

  constructor(params: { shortName: string }) {
    super();
    this.shortName = params.shortName;
  }
}

export class InputStickerSetAnimatedEmoji extends TypeInputStickerSet {
  protected get [id]() {
    return 0x028703c8;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputStickerSetDice extends TypeInputStickerSet {
  emoticon: string;

  protected get [id]() {
    return 0xe67f520e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class InputStickerSetAnimatedEmojiAnimations
  extends TypeInputStickerSet {
  protected get [id]() {
    return 0x0cde3739;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputStickerSetPremiumGifts extends TypeInputStickerSet {
  protected get [id]() {
    return 0xc88b3b02;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputStickerSetEmojiGenericAnimations extends TypeInputStickerSet {
  protected get [id]() {
    return 0x04c4d4ce;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputStickerSetEmojiDefaultTopicIcons extends TypeInputStickerSet {
  protected get [id]() {
    return 0x44c1f8e9;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class StickerSet extends Constructor {
  archived?: true;
  official?: true;
  masks?: true;
  animated?: true;
  videos?: true;
  emojis?: true;
  installedDate?: number;
  id: bigint;
  accessHash: bigint;
  title: string;
  shortName: string;
  thumbs?: Array<TypePhotoSize>;
  thumbDcId?: number;
  thumbVersion?: number;
  thumbDocumentId?: bigint;
  count: number;
  hash: number;

  protected get [id]() {
    return 0x2dd14edc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["archived", "true", "flags.1?true"],
      ["official", "true", "flags.2?true"],
      ["masks", "true", "flags.3?true"],
      ["animated", "true", "flags.5?true"],
      ["videos", "true", "flags.6?true"],
      ["emojis", "true", "flags.7?true"],
      ["installedDate", "number", "flags.0?int"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["title", "string", "string"],
      ["shortName", "string", "string"],
      ["thumbs", [TypePhotoSize], "flags.4?Vector<PhotoSize>"],
      ["thumbDcId", "number", "flags.4?int"],
      ["thumbVersion", "number", "flags.4?int"],
      ["thumbDocumentId", "bigint", "flags.8?long"],
      ["count", "number", "int"],
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.archived ?? null, "true", "flags.1?true"],
      [this.official ?? null, "true", "flags.2?true"],
      [this.masks ?? null, "true", "flags.3?true"],
      [this.animated ?? null, "true", "flags.5?true"],
      [this.videos ?? null, "true", "flags.6?true"],
      [this.emojis ?? null, "true", "flags.7?true"],
      [this.installedDate ?? null, "number", "flags.0?int"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.title, "string", "string"],
      [this.shortName, "string", "string"],
      [this.thumbs ?? null, [TypePhotoSize], "flags.4?Vector<PhotoSize>"],
      [this.thumbDcId ?? null, "number", "flags.4?int"],
      [this.thumbVersion ?? null, "number", "flags.4?int"],
      [this.thumbDocumentId ?? null, "bigint", "flags.8?long"],
      [this.count, "number", "int"],
      [this.hash, "number", "int"],
    ];
  }

  constructor(
    params: {
      archived?: true;
      official?: true;
      masks?: true;
      animated?: true;
      videos?: true;
      emojis?: true;
      installedDate?: number;
      id: bigint;
      accessHash: bigint;
      title: string;
      shortName: string;
      thumbs?: Array<TypePhotoSize>;
      thumbDcId?: number;
      thumbVersion?: number;
      thumbDocumentId?: bigint;
      count: number;
      hash: number;
    },
  ) {
    super();
    this.archived = params.archived;
    this.official = params.official;
    this.masks = params.masks;
    this.animated = params.animated;
    this.videos = params.videos;
    this.emojis = params.emojis;
    this.installedDate = params.installedDate;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.title = params.title;
    this.shortName = params.shortName;
    this.thumbs = params.thumbs;
    this.thumbDcId = params.thumbDcId;
    this.thumbVersion = params.thumbVersion;
    this.thumbDocumentId = params.thumbDocumentId;
    this.count = params.count;
    this.hash = params.hash;
  }
}

export class MessagesStickerSet extends Constructor {
  set: TypeStickerSet;
  packs: Array<TypeStickerPack>;
  keywords: Array<TypeStickerKeyword>;
  documents: Array<TypeDocument>;

  protected get [id]() {
    return 0x6e153f16;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["set", TypeStickerSet, "StickerSet"],
      ["packs", [TypeStickerPack], "Vector<StickerPack>"],
      ["keywords", [TypeStickerKeyword], "Vector<StickerKeyword>"],
      ["documents", [TypeDocument], "Vector<Document>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.set, TypeStickerSet, "StickerSet"],
      [this.packs, [TypeStickerPack], "Vector<StickerPack>"],
      [this.keywords, [TypeStickerKeyword], "Vector<StickerKeyword>"],
      [this.documents, [TypeDocument], "Vector<Document>"],
    ];
  }

  constructor(
    params: {
      set: TypeStickerSet;
      packs: Array<TypeStickerPack>;
      keywords: Array<TypeStickerKeyword>;
      documents: Array<TypeDocument>;
    },
  ) {
    super();
    this.set = params.set;
    this.packs = params.packs;
    this.keywords = params.keywords;
    this.documents = params.documents;
  }
}

export class MessagesStickerSetNotModified extends TypeMessagesStickerSet {
  protected get [id]() {
    return 0xd3f924eb;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BotCommand extends Constructor {
  command: string;
  description: string;

  protected get [id]() {
    return 0xc27ac8c7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["command", "string", "string"],
      ["description", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.command, "string", "string"],
      [this.description, "string", "string"],
    ];
  }

  constructor(params: { command: string; description: string }) {
    super();
    this.command = params.command;
    this.description = params.description;
  }
}

export class BotInfo extends Constructor {
  userId?: bigint;
  description?: string;
  descriptionPhoto?: TypePhoto;
  descriptionDocument?: TypeDocument;
  commands?: Array<TypeBotCommand>;
  menuButton?: TypeBotMenuButton;

  protected get [id]() {
    return 0x8f300b57;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["userId", "bigint", "flags.0?long"],
      ["description", "string", "flags.1?string"],
      ["descriptionPhoto", TypePhoto, "flags.4?Photo"],
      ["descriptionDocument", TypeDocument, "flags.5?Document"],
      ["commands", [TypeBotCommand], "flags.2?Vector<BotCommand>"],
      ["menuButton", TypeBotMenuButton, "flags.3?BotMenuButton"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.userId ?? null, "bigint", "flags.0?long"],
      [this.description ?? null, "string", "flags.1?string"],
      [this.descriptionPhoto ?? null, TypePhoto, "flags.4?Photo"],
      [this.descriptionDocument ?? null, TypeDocument, "flags.5?Document"],
      [this.commands ?? null, [TypeBotCommand], "flags.2?Vector<BotCommand>"],
      [this.menuButton ?? null, TypeBotMenuButton, "flags.3?BotMenuButton"],
    ];
  }

  constructor(
    params: {
      userId?: bigint;
      description?: string;
      descriptionPhoto?: TypePhoto;
      descriptionDocument?: TypeDocument;
      commands?: Array<TypeBotCommand>;
      menuButton?: TypeBotMenuButton;
    },
  ) {
    super();
    this.userId = params.userId;
    this.description = params.description;
    this.descriptionPhoto = params.descriptionPhoto;
    this.descriptionDocument = params.descriptionDocument;
    this.commands = params.commands;
    this.menuButton = params.menuButton;
  }
}

export class KeyboardButton extends Constructor {
  text: string;

  protected get [id]() {
    return 0xa2fa4880;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class KeyboardButtonUrl extends TypeKeyboardButton {
  text: string;
  url: string;

  protected get [id]() {
    return 0x258aff05;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { text: string; url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class KeyboardButtonCallback extends TypeKeyboardButton {
  requiresPassword?: true;
  text: string;
  data: Uint8Array;

  protected get [id]() {
    return 0x35bbdb6b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["requiresPassword", "true", "flags.0?true"],
      ["text", "string", "string"],
      ["data", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.requiresPassword ?? null, "true", "flags.0?true"],
      [this.text, "string", "string"],
      [this.data, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: { requiresPassword?: true; text: string; data: Uint8Array },
  ) {
    super();
    this.requiresPassword = params.requiresPassword;
    this.text = params.text;
    this.data = params.data;
  }
}

export class KeyboardButtonRequestPhone extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0xb16a6c29;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class KeyboardButtonSwitchInline extends TypeKeyboardButton {
  samePeer?: true;
  text: string;
  query: string;

  protected get [id]() {
    return 0x0568a748;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["samePeer", "true", "flags.0?true"],
      ["text", "string", "string"],
      ["query", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.samePeer ?? null, "true", "flags.0?true"],
      [this.text, "string", "string"],
      [this.query, "string", "string"],
    ];
  }

  constructor(params: { samePeer?: true; text: string; query: string }) {
    super();
    this.samePeer = params.samePeer;
    this.text = params.text;
    this.query = params.query;
  }
}

export class KeyboardButtonGame extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0x50f41ccf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class KeyboardButtonBuy extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0xafd93fbb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
    ];
  }

  constructor(params: { text: string }) {
    super();
    this.text = params.text;
  }
}

export class KeyboardButtonUrlAuth extends TypeKeyboardButton {
  text: string;
  fwdText?: string;
  url: string;
  buttonId: number;

  protected get [id]() {
    return 0x10b78d29;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["text", "string", "string"],
      ["fwdText", "string", "flags.0?string"],
      ["url", "string", "string"],
      ["buttonId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.text, "string", "string"],
      [this.fwdText ?? null, "string", "flags.0?string"],
      [this.url, "string", "string"],
      [this.buttonId, "number", "int"],
    ];
  }

  constructor(
    params: { text: string; fwdText?: string; url: string; buttonId: number },
  ) {
    super();
    this.text = params.text;
    this.fwdText = params.fwdText;
    this.url = params.url;
    this.buttonId = params.buttonId;
  }
}

export class InputKeyboardButtonUrlAuth extends TypeKeyboardButton {
  requestWriteAccess?: true;
  text: string;
  fwdText?: string;
  url: string;
  bot: TypeInputUser;

  protected get [id]() {
    return 0xd02e7fd4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["requestWriteAccess", "true", "flags.0?true"],
      ["text", "string", "string"],
      ["fwdText", "string", "flags.1?string"],
      ["url", "string", "string"],
      ["bot", TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.requestWriteAccess ?? null, "true", "flags.0?true"],
      [this.text, "string", "string"],
      [this.fwdText ?? null, "string", "flags.1?string"],
      [this.url, "string", "string"],
      [this.bot, TypeInputUser, "InputUser"],
    ];
  }

  constructor(
    params: {
      requestWriteAccess?: true;
      text: string;
      fwdText?: string;
      url: string;
      bot: TypeInputUser;
    },
  ) {
    super();
    this.requestWriteAccess = params.requestWriteAccess;
    this.text = params.text;
    this.fwdText = params.fwdText;
    this.url = params.url;
    this.bot = params.bot;
  }
}

export class KeyboardButtonRequestPoll extends TypeKeyboardButton {
  quiz?: boolean;
  text: string;

  protected get [id]() {
    return 0xbbc7515d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["quiz", "boolean", "flags.0?Bool"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.quiz ?? null, "boolean", "flags.0?Bool"],
      [this.text, "string", "string"],
    ];
  }

  constructor(params: { quiz?: boolean; text: string }) {
    super();
    this.quiz = params.quiz;
    this.text = params.text;
  }
}

export class InputKeyboardButtonUserProfile extends TypeKeyboardButton {
  text: string;
  userId: TypeInputUser;

  protected get [id]() {
    return 0xe988037b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["userId", TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.userId, TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { text: string; userId: TypeInputUser }) {
    super();
    this.text = params.text;
    this.userId = params.userId;
  }
}

export class KeyboardButtonUserProfile extends TypeKeyboardButton {
  text: string;
  userId: bigint;

  protected get [id]() {
    return 0x308660c1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { text: string; userId: bigint }) {
    super();
    this.text = params.text;
    this.userId = params.userId;
  }
}

export class KeyboardButtonWebView extends TypeKeyboardButton {
  text: string;
  url: string;

  protected get [id]() {
    return 0x13767230;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.url, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { text: string; url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class KeyboardButtonRequestPeer extends TypeKeyboardButton {
  text: string;
  buttonId: number;
  peerType: TypeRequestPeerType;

  protected get [id]() {
    return 0x0d0b468c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["buttonId", "number", "int"],
      ["peerType", TypeRequestPeerType, "RequestPeerType"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.buttonId, "number", "int"],
      [this.peerType, TypeRequestPeerType, "RequestPeerType"],
    ];
  }

  constructor(
    params: { text: string; buttonId: number; peerType: TypeRequestPeerType },
  ) {
    super();
    this.text = params.text;
    this.buttonId = params.buttonId;
    this.peerType = params.peerType;
  }
}

export class KeyboardButtonRow extends Constructor {
  buttons: Array<TypeKeyboardButton>;

  protected get [id]() {
    return 0x77608b83;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["buttons", [TypeKeyboardButton], "Vector<KeyboardButton>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.buttons, [TypeKeyboardButton], "Vector<KeyboardButton>"],
    ];
  }

  constructor(params: { buttons: Array<TypeKeyboardButton> }) {
    super();
    this.buttons = params.buttons;
  }
}

export class ReplyKeyboardHide extends TypeReplyMarkup {
  selective?: true;

  protected get [id]() {
    return 0xa03e5b85;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["selective", "true", "flags.2?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.selective ?? null, "true", "flags.2?true"],
    ];
  }

  constructor(params: { selective?: true }) {
    super();
    this.selective = params.selective;
  }
}

export class ReplyKeyboardForceReply extends TypeReplyMarkup {
  singleUse?: true;
  selective?: true;
  placeholder?: string;

  protected get [id]() {
    return 0x86b40b08;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["singleUse", "true", "flags.1?true"],
      ["selective", "true", "flags.2?true"],
      ["placeholder", "string", "flags.3?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.singleUse ?? null, "true", "flags.1?true"],
      [this.selective ?? null, "true", "flags.2?true"],
      [this.placeholder ?? null, "string", "flags.3?string"],
    ];
  }

  constructor(
    params: { singleUse?: true; selective?: true; placeholder?: string },
  ) {
    super();
    this.singleUse = params.singleUse;
    this.selective = params.selective;
    this.placeholder = params.placeholder;
  }
}

export class ReplyKeyboardMarkup extends TypeReplyMarkup {
  resize?: true;
  singleUse?: true;
  selective?: true;
  persistent?: true;
  rows: Array<TypeKeyboardButtonRow>;
  placeholder?: string;

  protected get [id]() {
    return 0x85dd99d1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["resize", "true", "flags.0?true"],
      ["singleUse", "true", "flags.1?true"],
      ["selective", "true", "flags.2?true"],
      ["persistent", "true", "flags.4?true"],
      ["rows", [TypeKeyboardButtonRow], "Vector<KeyboardButtonRow>"],
      ["placeholder", "string", "flags.3?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.resize ?? null, "true", "flags.0?true"],
      [this.singleUse ?? null, "true", "flags.1?true"],
      [this.selective ?? null, "true", "flags.2?true"],
      [this.persistent ?? null, "true", "flags.4?true"],
      [this.rows, [TypeKeyboardButtonRow], "Vector<KeyboardButtonRow>"],
      [this.placeholder ?? null, "string", "flags.3?string"],
    ];
  }

  constructor(
    params: {
      resize?: true;
      singleUse?: true;
      selective?: true;
      persistent?: true;
      rows: Array<TypeKeyboardButtonRow>;
      placeholder?: string;
    },
  ) {
    super();
    this.resize = params.resize;
    this.singleUse = params.singleUse;
    this.selective = params.selective;
    this.persistent = params.persistent;
    this.rows = params.rows;
    this.placeholder = params.placeholder;
  }
}

export class ReplyInlineMarkup extends TypeReplyMarkup {
  rows: Array<TypeKeyboardButtonRow>;

  protected get [id]() {
    return 0x48a30254;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["rows", [TypeKeyboardButtonRow], "Vector<KeyboardButtonRow>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.rows, [TypeKeyboardButtonRow], "Vector<KeyboardButtonRow>"],
    ];
  }

  constructor(params: { rows: Array<TypeKeyboardButtonRow> }) {
    super();
    this.rows = params.rows;
  }
}

export class MessageEntityUnknown extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0xbb92ba95;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
      ["language", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
      [this.language, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { offset: number; length: number; url: string }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.url = params.url;
  }
}

export class MessageEntityMentionName extends TypeMessageEntity {
  offset: number;
  length: number;
  userId: bigint;

  protected get [id]() {
    return 0xdc7b1140;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { offset: number; length: number; userId: bigint }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.userId = params.userId;
  }
}

export class InputMessageEntityMentionName extends TypeMessageEntity {
  offset: number;
  length: number;
  userId: TypeInputUser;

  protected get [id]() {
    return 0x208e68c9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
      ["userId", TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
      [this.userId, TypeInputUser, "InputUser"],
    ];
  }

  constructor(
    params: { offset: number; length: number; userId: TypeInputUser },
  ) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.userId = params.userId;
  }
}

export class MessageEntityPhone extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x9b69e34b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityUnderline extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x9c4e7e8b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityBankCard extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x761e6af4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntitySpoiler extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x32ca960f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
    ];
  }

  constructor(params: { offset: number; length: number }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
  }
}

export class MessageEntityCustomEmoji extends TypeMessageEntity {
  offset: number;
  length: number;
  documentId: bigint;

  protected get [id]() {
    return 0xc8cf05f8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "number", "int"],
      ["length", "number", "int"],
      ["documentId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "number", "int"],
      [this.length, "number", "int"],
      [this.documentId, "bigint", "long"],
    ];
  }

  constructor(params: { offset: number; length: number; documentId: bigint }) {
    super();
    this.offset = params.offset;
    this.length = params.length;
    this.documentId = params.documentId;
  }
}

export class InputChannelEmpty extends TypeInputChannel {
  protected get [id]() {
    return 0xee8c1e86;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputChannel extends Constructor {
  channelId: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xf35aec28;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channelId", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channelId, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { channelId: bigint; accessHash: bigint }) {
    super();
    this.channelId = params.channelId;
    this.accessHash = params.accessHash;
  }
}

export class InputChannelFromMessage extends TypeInputChannel {
  peer: TypeInputPeer;
  msgId: number;
  channelId: bigint;

  protected get [id]() {
    return 0x5b934f9d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
      ["channelId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
      [this.channelId, "bigint", "long"],
    ];
  }

  constructor(
    params: { peer: TypeInputPeer; msgId: number; channelId: bigint },
  ) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.channelId = params.channelId;
  }
}

export class ContactsResolvedPeer extends Constructor {
  peer: TypePeer;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x7f077ad9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: { peer: TypePeer; chats: Array<TypeChat>; users: Array<TypeUser> },
  ) {
    super();
    this.peer = params.peer;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessageRange extends Constructor {
  minId: number;
  maxId: number;

  protected get [id]() {
    return 0x0ae30253;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["minId", "number", "int"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.minId, "number", "int"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { minId: number; maxId: number }) {
    super();
    this.minId = params.minId;
    this.maxId = params.maxId;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["final", "true", "flags.0?true"],
      ["pts", "number", "int"],
      ["timeout", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.final ?? null, "true", "flags.0?true"],
      [this.pts, "number", "int"],
      [this.timeout ?? null, "number", "flags.1?int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["final", "true", "flags.0?true"],
      ["timeout", "number", "flags.1?int"],
      ["dialog", TypeDialog, "Dialog"],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.final ?? null, "true", "flags.0?true"],
      [this.timeout ?? null, "number", "flags.1?int"],
      [this.dialog, TypeDialog, "Dialog"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
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

export class UpdatesChannelDifference extends Constructor {
  final?: true;
  pts: number;
  timeout?: number;
  newMessages: Array<TypeMessage>;
  otherUpdates: Array<TypeUpdate>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x2064674e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["final", "true", "flags.0?true"],
      ["pts", "number", "int"],
      ["timeout", "number", "flags.1?int"],
      ["newMessages", [TypeMessage], "Vector<Message>"],
      ["otherUpdates", [TypeUpdate], "Vector<Update>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.final ?? null, "true", "flags.0?true"],
      [this.pts, "number", "int"],
      [this.timeout ?? null, "number", "flags.1?int"],
      [this.newMessages, [TypeMessage], "Vector<Message>"],
      [this.otherUpdates, [TypeUpdate], "Vector<Update>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      final?: true;
      pts: number;
      timeout?: number;
      newMessages: Array<TypeMessage>;
      otherUpdates: Array<TypeUpdate>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.final = params.final;
    this.pts = params.pts;
    this.timeout = params.timeout;
    this.newMessages = params.newMessages;
    this.otherUpdates = params.otherUpdates;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChannelMessagesFilterEmpty extends TypeChannelMessagesFilter {
  protected get [id]() {
    return 0x94d42ee7;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelMessagesFilter extends Constructor {
  excludeNewMessages?: true;
  ranges: Array<TypeMessageRange>;

  protected get [id]() {
    return 0xcd77d957;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["excludeNewMessages", "true", "flags.1?true"],
      ["ranges", [TypeMessageRange], "Vector<MessageRange>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.excludeNewMessages ?? null, "true", "flags.1?true"],
      [this.ranges, [TypeMessageRange], "Vector<MessageRange>"],
    ];
  }

  constructor(
    params: { excludeNewMessages?: true; ranges: Array<TypeMessageRange> },
  ) {
    super();
    this.excludeNewMessages = params.excludeNewMessages;
    this.ranges = params.ranges;
  }
}

export class ChannelParticipant extends Constructor {
  userId: bigint;
  date: number;

  protected get [id]() {
    return 0xc00c07c0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; date: number }) {
    super();
    this.userId = params.userId;
    this.date = params.date;
  }
}

export class ChannelParticipantSelf extends TypeChannelParticipant {
  viaRequest?: true;
  userId: bigint;
  inviterId: bigint;
  date: number;

  protected get [id]() {
    return 0x35a8bfa7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["viaRequest", "true", "flags.0?true"],
      ["userId", "bigint", "long"],
      ["inviterId", "bigint", "long"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.viaRequest ?? null, "true", "flags.0?true"],
      [this.userId, "bigint", "long"],
      [this.inviterId, "bigint", "long"],
      [this.date, "number", "int"],
    ];
  }

  constructor(
    params: {
      viaRequest?: true;
      userId: bigint;
      inviterId: bigint;
      date: number;
    },
  ) {
    super();
    this.viaRequest = params.viaRequest;
    this.userId = params.userId;
    this.inviterId = params.inviterId;
    this.date = params.date;
  }
}

export class ChannelParticipantCreator extends TypeChannelParticipant {
  userId: bigint;
  adminRights: TypeChatAdminRights;
  rank?: string;

  protected get [id]() {
    return 0x2fe601d3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["userId", "bigint", "long"],
      ["adminRights", TypeChatAdminRights, "ChatAdminRights"],
      ["rank", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.userId, "bigint", "long"],
      [this.adminRights, TypeChatAdminRights, "ChatAdminRights"],
      [this.rank ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(
    params: { userId: bigint; adminRights: TypeChatAdminRights; rank?: string },
  ) {
    super();
    this.userId = params.userId;
    this.adminRights = params.adminRights;
    this.rank = params.rank;
  }
}

export class ChannelParticipantAdmin extends TypeChannelParticipant {
  canEdit?: true;
  self?: true;
  userId: bigint;
  inviterId?: bigint;
  promotedBy: bigint;
  date: number;
  adminRights: TypeChatAdminRights;
  rank?: string;

  protected get [id]() {
    return 0x34c3bb53;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["canEdit", "true", "flags.0?true"],
      ["self", "true", "flags.1?true"],
      ["userId", "bigint", "long"],
      ["inviterId", "bigint", "flags.1?long"],
      ["promotedBy", "bigint", "long"],
      ["date", "number", "int"],
      ["adminRights", TypeChatAdminRights, "ChatAdminRights"],
      ["rank", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.canEdit ?? null, "true", "flags.0?true"],
      [this.self ?? null, "true", "flags.1?true"],
      [this.userId, "bigint", "long"],
      [this.inviterId ?? null, "bigint", "flags.1?long"],
      [this.promotedBy, "bigint", "long"],
      [this.date, "number", "int"],
      [this.adminRights, TypeChatAdminRights, "ChatAdminRights"],
      [this.rank ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(
    params: {
      canEdit?: true;
      self?: true;
      userId: bigint;
      inviterId?: bigint;
      promotedBy: bigint;
      date: number;
      adminRights: TypeChatAdminRights;
      rank?: string;
    },
  ) {
    super();
    this.canEdit = params.canEdit;
    this.self = params.self;
    this.userId = params.userId;
    this.inviterId = params.inviterId;
    this.promotedBy = params.promotedBy;
    this.date = params.date;
    this.adminRights = params.adminRights;
    this.rank = params.rank;
  }
}

export class ChannelParticipantBanned extends TypeChannelParticipant {
  left?: true;
  peer: TypePeer;
  kickedBy: bigint;
  date: number;
  bannedRights: TypeChatBannedRights;

  protected get [id]() {
    return 0x6df8014e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["left", "true", "flags.0?true"],
      ["peer", TypePeer, "Peer"],
      ["kickedBy", "bigint", "long"],
      ["date", "number", "int"],
      ["bannedRights", TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.left ?? null, "true", "flags.0?true"],
      [this.peer, TypePeer, "Peer"],
      [this.kickedBy, "bigint", "long"],
      [this.date, "number", "int"],
      [this.bannedRights, TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  constructor(
    params: {
      left?: true;
      peer: TypePeer;
      kickedBy: bigint;
      date: number;
      bannedRights: TypeChatBannedRights;
    },
  ) {
    super();
    this.left = params.left;
    this.peer = params.peer;
    this.kickedBy = params.kickedBy;
    this.date = params.date;
    this.bannedRights = params.bannedRights;
  }
}

export class ChannelParticipantLeft extends TypeChannelParticipant {
  peer: TypePeer;

  protected get [id]() {
    return 0x1b03f006;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
    ];
  }

  constructor(params: { peer: TypePeer }) {
    super();
    this.peer = params.peer;
  }
}

export class ChannelParticipantsRecent extends TypeChannelParticipantsFilter {
  protected get [id]() {
    return 0xde3f3c79;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["q", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.q, "string", "string"],
    ];
  }

  constructor(params: { q: string }) {
    super();
    this.q = params.q;
  }
}

export class ChannelParticipantsBots extends TypeChannelParticipantsFilter {
  protected get [id]() {
    return 0xb0d1865b;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelParticipantsBanned extends TypeChannelParticipantsFilter {
  q: string;

  protected get [id]() {
    return 0x1427a5e1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["q", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.q, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["q", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.q, "string", "string"],
    ];
  }

  constructor(params: { q: string }) {
    super();
    this.q = params.q;
  }
}

export class ChannelParticipantsContacts extends TypeChannelParticipantsFilter {
  q: string;

  protected get [id]() {
    return 0xbb6ae88d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["q", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.q, "string", "string"],
    ];
  }

  constructor(params: { q: string }) {
    super();
    this.q = params.q;
  }
}

export class ChannelParticipantsMentions extends TypeChannelParticipantsFilter {
  q?: string;
  topMsgId?: number;

  protected get [id]() {
    return 0xe04b5ceb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["q", "string", "flags.0?string"],
      ["topMsgId", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.q ?? null, "string", "flags.0?string"],
      [this.topMsgId ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { q?: string; topMsgId?: number }) {
    super();
    this.q = params.q;
    this.topMsgId = params.topMsgId;
  }
}

export class ChannelsChannelParticipants extends Constructor {
  count: number;
  participants: Array<TypeChannelParticipant>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x9ab0feaf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["participants", [TypeChannelParticipant], "Vector<ChannelParticipant>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [
        this.participants,
        [TypeChannelParticipant],
        "Vector<ChannelParticipant>",
      ],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      count: number;
      participants: Array<TypeChannelParticipant>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.count = params.count;
    this.participants = params.participants;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChannelsChannelParticipantsNotModified
  extends TypeChannelsChannelParticipants {
  protected get [id]() {
    return 0xf0173fe9;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelsChannelParticipant extends Constructor {
  participant: TypeChannelParticipant;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xdfb80317;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["participant", TypeChannelParticipant, "ChannelParticipant"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.participant, TypeChannelParticipant, "ChannelParticipant"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      participant: TypeChannelParticipant;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.participant = params.participant;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class HelpTermsOfService extends Constructor {
  popup?: true;
  id: TypeDataJSON;
  text: string;
  entities: Array<TypeMessageEntity>;
  minAgeConfirm?: number;

  protected get [id]() {
    return 0x780a0310;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["popup", "true", "flags.0?true"],
      ["id", TypeDataJSON, "DataJSON"],
      ["text", "string", "string"],
      ["entities", [TypeMessageEntity], "Vector<MessageEntity>"],
      ["minAgeConfirm", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.popup ?? null, "true", "flags.0?true"],
      [this.id, TypeDataJSON, "DataJSON"],
      [this.text, "string", "string"],
      [this.entities, [TypeMessageEntity], "Vector<MessageEntity>"],
      [this.minAgeConfirm ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(
    params: {
      popup?: true;
      id: TypeDataJSON;
      text: string;
      entities: Array<TypeMessageEntity>;
      minAgeConfirm?: number;
    },
  ) {
    super();
    this.popup = params.popup;
    this.id = params.id;
    this.text = params.text;
    this.entities = params.entities;
    this.minAgeConfirm = params.minAgeConfirm;
  }
}

export class MessagesSavedGifsNotModified extends TypeMessagesSavedGifs {
  protected get [id]() {
    return 0xe8025ca2;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesSavedGifs extends Constructor {
  hash: bigint;
  gifs: Array<TypeDocument>;

  protected get [id]() {
    return 0x84a02a0d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["gifs", [TypeDocument], "Vector<Document>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.gifs, [TypeDocument], "Vector<Document>"],
    ];
  }

  constructor(params: { hash: bigint; gifs: Array<TypeDocument> }) {
    super();
    this.hash = params.hash;
    this.gifs = params.gifs;
  }
}

export class InputBotInlineMessageMediaAuto extends TypeInputBotInlineMessage {
  message: string;
  entities?: Array<TypeMessageEntity>;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x3380c786;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.message, "string", "string"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.1?Vector<MessageEntity>",
      ],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      message: string;
      entities?: Array<TypeMessageEntity>;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.message = params.message;
    this.entities = params.entities;
    this.replyMarkup = params.replyMarkup;
  }
}

export class InputBotInlineMessageText extends TypeInputBotInlineMessage {
  noWebpage?: true;
  message: string;
  entities?: Array<TypeMessageEntity>;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x3dcd7a87;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.0?true"],
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.0?true"],
      [this.message, "string", "string"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.1?Vector<MessageEntity>",
      ],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      noWebpage?: true;
      message: string;
      entities?: Array<TypeMessageEntity>;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.noWebpage = params.noWebpage;
    this.message = params.message;
    this.entities = params.entities;
    this.replyMarkup = params.replyMarkup;
  }
}

export class InputBotInlineMessageMediaGeo extends TypeInputBotInlineMessage {
  geoPoint: TypeInputGeoPoint;
  heading?: number;
  period?: number;
  proximityNotificationRadius?: number;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x96929a85;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["geoPoint", TypeInputGeoPoint, "InputGeoPoint"],
      ["heading", "number", "flags.0?int"],
      ["period", "number", "flags.1?int"],
      ["proximityNotificationRadius", "number", "flags.3?int"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.geoPoint, TypeInputGeoPoint, "InputGeoPoint"],
      [this.heading ?? null, "number", "flags.0?int"],
      [this.period ?? null, "number", "flags.1?int"],
      [this.proximityNotificationRadius ?? null, "number", "flags.3?int"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      geoPoint: TypeInputGeoPoint;
      heading?: number;
      period?: number;
      proximityNotificationRadius?: number;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.geoPoint = params.geoPoint;
    this.heading = params.heading;
    this.period = params.period;
    this.proximityNotificationRadius = params.proximityNotificationRadius;
    this.replyMarkup = params.replyMarkup;
  }
}

export class InputBotInlineMessageMediaVenue extends TypeInputBotInlineMessage {
  geoPoint: TypeInputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venueId: string;
  venueType: string;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x417bbf11;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["geoPoint", TypeInputGeoPoint, "InputGeoPoint"],
      ["title", "string", "string"],
      ["address", "string", "string"],
      ["provider", "string", "string"],
      ["venueId", "string", "string"],
      ["venueType", "string", "string"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.geoPoint, TypeInputGeoPoint, "InputGeoPoint"],
      [this.title, "string", "string"],
      [this.address, "string", "string"],
      [this.provider, "string", "string"],
      [this.venueId, "string", "string"],
      [this.venueType, "string", "string"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      geoPoint: TypeInputGeoPoint;
      title: string;
      address: string;
      provider: string;
      venueId: string;
      venueType: string;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.geoPoint = params.geoPoint;
    this.title = params.title;
    this.address = params.address;
    this.provider = params.provider;
    this.venueId = params.venueId;
    this.venueType = params.venueType;
    this.replyMarkup = params.replyMarkup;
  }
}

export class InputBotInlineMessageMediaContact
  extends TypeInputBotInlineMessage {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  vcard: string;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0xa6edbffd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["phoneNumber", "string", "string"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
      ["vcard", "string", "string"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.phoneNumber, "string", "string"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
      [this.vcard, "string", "string"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      phoneNumber: string;
      firstName: string;
      lastName: string;
      vcard: string;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.vcard = params.vcard;
    this.replyMarkup = params.replyMarkup;
  }
}

export class InputBotInlineMessageGame extends TypeInputBotInlineMessage {
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x4b425864;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(params: { replyMarkup?: TypeReplyMarkup }) {
    super();
    this.replyMarkup = params.replyMarkup;
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
  providerData: TypeDataJSON;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0xd7e78225;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["title", "string", "string"],
      ["description", "string", "string"],
      ["photo", TypeInputWebDocument, "flags.0?InputWebDocument"],
      ["invoice", TypeInvoice, "Invoice"],
      ["payload", Uint8Array, "bytes"],
      ["provider", "string", "string"],
      ["providerData", TypeDataJSON, "DataJSON"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.title, "string", "string"],
      [this.description, "string", "string"],
      [this.photo ?? null, TypeInputWebDocument, "flags.0?InputWebDocument"],
      [this.invoice, TypeInvoice, "Invoice"],
      [this.payload, Uint8Array, "bytes"],
      [this.provider, "string", "string"],
      [this.providerData, TypeDataJSON, "DataJSON"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
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
      providerData: TypeDataJSON;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.invoice = params.invoice;
    this.payload = params.payload;
    this.provider = params.provider;
    this.providerData = params.providerData;
    this.replyMarkup = params.replyMarkup;
  }
}

export class InputBotInlineResult extends Constructor {
  id: string;
  type: string;
  title?: string;
  description?: string;
  url?: string;
  thumb?: TypeInputWebDocument;
  content?: TypeInputWebDocument;
  sendMessage: TypeInputBotInlineMessage;

  protected get [id]() {
    return 0x88bf9319;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "string", "string"],
      ["type", "string", "string"],
      ["title", "string", "flags.1?string"],
      ["description", "string", "flags.2?string"],
      ["url", "string", "flags.3?string"],
      ["thumb", TypeInputWebDocument, "flags.4?InputWebDocument"],
      ["content", TypeInputWebDocument, "flags.5?InputWebDocument"],
      ["sendMessage", TypeInputBotInlineMessage, "InputBotInlineMessage"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "string", "string"],
      [this.type, "string", "string"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.description ?? null, "string", "flags.2?string"],
      [this.url ?? null, "string", "flags.3?string"],
      [this.thumb ?? null, TypeInputWebDocument, "flags.4?InputWebDocument"],
      [this.content ?? null, TypeInputWebDocument, "flags.5?InputWebDocument"],
      [this.sendMessage, TypeInputBotInlineMessage, "InputBotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      type: string;
      title?: string;
      description?: string;
      url?: string;
      thumb?: TypeInputWebDocument;
      content?: TypeInputWebDocument;
      sendMessage: TypeInputBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.title = params.title;
    this.description = params.description;
    this.url = params.url;
    this.thumb = params.thumb;
    this.content = params.content;
    this.sendMessage = params.sendMessage;
  }
}

export class InputBotInlineResultPhoto extends TypeInputBotInlineResult {
  id: string;
  type: string;
  photo: TypeInputPhoto;
  sendMessage: TypeInputBotInlineMessage;

  protected get [id]() {
    return 0xa8d864a7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "string", "string"],
      ["type", "string", "string"],
      ["photo", TypeInputPhoto, "InputPhoto"],
      ["sendMessage", TypeInputBotInlineMessage, "InputBotInlineMessage"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "string", "string"],
      [this.type, "string", "string"],
      [this.photo, TypeInputPhoto, "InputPhoto"],
      [this.sendMessage, TypeInputBotInlineMessage, "InputBotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      type: string;
      photo: TypeInputPhoto;
      sendMessage: TypeInputBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.photo = params.photo;
    this.sendMessage = params.sendMessage;
  }
}

export class InputBotInlineResultDocument extends TypeInputBotInlineResult {
  id: string;
  type: string;
  title?: string;
  description?: string;
  document: TypeInputDocument;
  sendMessage: TypeInputBotInlineMessage;

  protected get [id]() {
    return 0xfff8fdc4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "string", "string"],
      ["type", "string", "string"],
      ["title", "string", "flags.1?string"],
      ["description", "string", "flags.2?string"],
      ["document", TypeInputDocument, "InputDocument"],
      ["sendMessage", TypeInputBotInlineMessage, "InputBotInlineMessage"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "string", "string"],
      [this.type, "string", "string"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.description ?? null, "string", "flags.2?string"],
      [this.document, TypeInputDocument, "InputDocument"],
      [this.sendMessage, TypeInputBotInlineMessage, "InputBotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      type: string;
      title?: string;
      description?: string;
      document: TypeInputDocument;
      sendMessage: TypeInputBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.title = params.title;
    this.description = params.description;
    this.document = params.document;
    this.sendMessage = params.sendMessage;
  }
}

export class InputBotInlineResultGame extends TypeInputBotInlineResult {
  id: string;
  shortName: string;
  sendMessage: TypeInputBotInlineMessage;

  protected get [id]() {
    return 0x4fa417f2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "string", "string"],
      ["shortName", "string", "string"],
      ["sendMessage", TypeInputBotInlineMessage, "InputBotInlineMessage"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "string", "string"],
      [this.shortName, "string", "string"],
      [this.sendMessage, TypeInputBotInlineMessage, "InputBotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      shortName: string;
      sendMessage: TypeInputBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.shortName = params.shortName;
    this.sendMessage = params.sendMessage;
  }
}

export class BotInlineMessageMediaAuto extends TypeBotInlineMessage {
  message: string;
  entities?: Array<TypeMessageEntity>;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x764cf810;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.message, "string", "string"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.1?Vector<MessageEntity>",
      ],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      message: string;
      entities?: Array<TypeMessageEntity>;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.message = params.message;
    this.entities = params.entities;
    this.replyMarkup = params.replyMarkup;
  }
}

export class BotInlineMessageText extends TypeBotInlineMessage {
  noWebpage?: true;
  message: string;
  entities?: Array<TypeMessageEntity>;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x8c7f65e2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.0?true"],
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.0?true"],
      [this.message, "string", "string"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.1?Vector<MessageEntity>",
      ],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      noWebpage?: true;
      message: string;
      entities?: Array<TypeMessageEntity>;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.noWebpage = params.noWebpage;
    this.message = params.message;
    this.entities = params.entities;
    this.replyMarkup = params.replyMarkup;
  }
}

export class BotInlineMessageMediaGeo extends TypeBotInlineMessage {
  geo: TypeGeoPoint;
  heading?: number;
  period?: number;
  proximityNotificationRadius?: number;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x051846fd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["geo", TypeGeoPoint, "GeoPoint"],
      ["heading", "number", "flags.0?int"],
      ["period", "number", "flags.1?int"],
      ["proximityNotificationRadius", "number", "flags.3?int"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.geo, TypeGeoPoint, "GeoPoint"],
      [this.heading ?? null, "number", "flags.0?int"],
      [this.period ?? null, "number", "flags.1?int"],
      [this.proximityNotificationRadius ?? null, "number", "flags.3?int"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      heading?: number;
      period?: number;
      proximityNotificationRadius?: number;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.geo = params.geo;
    this.heading = params.heading;
    this.period = params.period;
    this.proximityNotificationRadius = params.proximityNotificationRadius;
    this.replyMarkup = params.replyMarkup;
  }
}

export class BotInlineMessageMediaVenue extends TypeBotInlineMessage {
  geo: TypeGeoPoint;
  title: string;
  address: string;
  provider: string;
  venueId: string;
  venueType: string;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x8a86659c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["geo", TypeGeoPoint, "GeoPoint"],
      ["title", "string", "string"],
      ["address", "string", "string"],
      ["provider", "string", "string"],
      ["venueId", "string", "string"],
      ["venueType", "string", "string"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.geo, TypeGeoPoint, "GeoPoint"],
      [this.title, "string", "string"],
      [this.address, "string", "string"],
      [this.provider, "string", "string"],
      [this.venueId, "string", "string"],
      [this.venueType, "string", "string"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      geo: TypeGeoPoint;
      title: string;
      address: string;
      provider: string;
      venueId: string;
      venueType: string;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.geo = params.geo;
    this.title = params.title;
    this.address = params.address;
    this.provider = params.provider;
    this.venueId = params.venueId;
    this.venueType = params.venueType;
    this.replyMarkup = params.replyMarkup;
  }
}

export class BotInlineMessageMediaContact extends TypeBotInlineMessage {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  vcard: string;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x18d1cdc2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["phoneNumber", "string", "string"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
      ["vcard", "string", "string"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.phoneNumber, "string", "string"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
      [this.vcard, "string", "string"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      phoneNumber: string;
      firstName: string;
      lastName: string;
      vcard: string;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.vcard = params.vcard;
    this.replyMarkup = params.replyMarkup;
  }
}

export class BotInlineMessageMediaInvoice extends TypeBotInlineMessage {
  shippingAddressRequested?: true;
  test?: true;
  title: string;
  description: string;
  photo?: TypeWebDocument;
  currency: string;
  totalAmount: bigint;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0x354a9b09;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["shippingAddressRequested", "true", "flags.1?true"],
      ["test", "true", "flags.3?true"],
      ["title", "string", "string"],
      ["description", "string", "string"],
      ["photo", TypeWebDocument, "flags.0?WebDocument"],
      ["currency", "string", "string"],
      ["totalAmount", "bigint", "long"],
      ["replyMarkup", TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.shippingAddressRequested ?? null, "true", "flags.1?true"],
      [this.test ?? null, "true", "flags.3?true"],
      [this.title, "string", "string"],
      [this.description, "string", "string"],
      [this.photo ?? null, TypeWebDocument, "flags.0?WebDocument"],
      [this.currency, "string", "string"],
      [this.totalAmount, "bigint", "long"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(
    params: {
      shippingAddressRequested?: true;
      test?: true;
      title: string;
      description: string;
      photo?: TypeWebDocument;
      currency: string;
      totalAmount: bigint;
      replyMarkup?: TypeReplyMarkup;
    },
  ) {
    super();
    this.shippingAddressRequested = params.shippingAddressRequested;
    this.test = params.test;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.currency = params.currency;
    this.totalAmount = params.totalAmount;
    this.replyMarkup = params.replyMarkup;
  }
}

export class BotInlineResult extends Constructor {
  id: string;
  type: string;
  title?: string;
  description?: string;
  url?: string;
  thumb?: TypeWebDocument;
  content?: TypeWebDocument;
  sendMessage: TypeBotInlineMessage;

  protected get [id]() {
    return 0x11965f3a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "string", "string"],
      ["type", "string", "string"],
      ["title", "string", "flags.1?string"],
      ["description", "string", "flags.2?string"],
      ["url", "string", "flags.3?string"],
      ["thumb", TypeWebDocument, "flags.4?WebDocument"],
      ["content", TypeWebDocument, "flags.5?WebDocument"],
      ["sendMessage", TypeBotInlineMessage, "BotInlineMessage"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "string", "string"],
      [this.type, "string", "string"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.description ?? null, "string", "flags.2?string"],
      [this.url ?? null, "string", "flags.3?string"],
      [this.thumb ?? null, TypeWebDocument, "flags.4?WebDocument"],
      [this.content ?? null, TypeWebDocument, "flags.5?WebDocument"],
      [this.sendMessage, TypeBotInlineMessage, "BotInlineMessage"],
    ];
  }

  constructor(
    params: {
      id: string;
      type: string;
      title?: string;
      description?: string;
      url?: string;
      thumb?: TypeWebDocument;
      content?: TypeWebDocument;
      sendMessage: TypeBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.title = params.title;
    this.description = params.description;
    this.url = params.url;
    this.thumb = params.thumb;
    this.content = params.content;
    this.sendMessage = params.sendMessage;
  }
}

export class BotInlineMediaResult extends TypeBotInlineResult {
  id: string;
  type: string;
  photo?: TypePhoto;
  document?: TypeDocument;
  title?: string;
  description?: string;
  sendMessage: TypeBotInlineMessage;

  protected get [id]() {
    return 0x17db940b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "string", "string"],
      ["type", "string", "string"],
      ["photo", TypePhoto, "flags.0?Photo"],
      ["document", TypeDocument, "flags.1?Document"],
      ["title", "string", "flags.2?string"],
      ["description", "string", "flags.3?string"],
      ["sendMessage", TypeBotInlineMessage, "BotInlineMessage"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "string", "string"],
      [this.type, "string", "string"],
      [this.photo ?? null, TypePhoto, "flags.0?Photo"],
      [this.document ?? null, TypeDocument, "flags.1?Document"],
      [this.title ?? null, "string", "flags.2?string"],
      [this.description ?? null, "string", "flags.3?string"],
      [this.sendMessage, TypeBotInlineMessage, "BotInlineMessage"],
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
      sendMessage: TypeBotInlineMessage;
    },
  ) {
    super();
    this.id = params.id;
    this.type = params.type;
    this.photo = params.photo;
    this.document = params.document;
    this.title = params.title;
    this.description = params.description;
    this.sendMessage = params.sendMessage;
  }
}

export class MessagesBotResults extends Constructor {
  gallery?: true;
  queryId: bigint;
  nextOffset?: string;
  switchPm?: TypeInlineBotSwitchPM;
  switchWebview?: TypeInlineBotWebView;
  results: Array<TypeBotInlineResult>;
  cacheTime: number;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xe021f2f6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["gallery", "true", "flags.0?true"],
      ["queryId", "bigint", "long"],
      ["nextOffset", "string", "flags.1?string"],
      ["switchPm", TypeInlineBotSwitchPM, "flags.2?InlineBotSwitchPM"],
      ["switchWebview", TypeInlineBotWebView, "flags.3?InlineBotWebView"],
      ["results", [TypeBotInlineResult], "Vector<BotInlineResult>"],
      ["cacheTime", "number", "int"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.gallery ?? null, "true", "flags.0?true"],
      [this.queryId, "bigint", "long"],
      [this.nextOffset ?? null, "string", "flags.1?string"],
      [
        this.switchPm ?? null,
        TypeInlineBotSwitchPM,
        "flags.2?InlineBotSwitchPM",
      ],
      [
        this.switchWebview ?? null,
        TypeInlineBotWebView,
        "flags.3?InlineBotWebView",
      ],
      [this.results, [TypeBotInlineResult], "Vector<BotInlineResult>"],
      [this.cacheTime, "number", "int"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      gallery?: true;
      queryId: bigint;
      nextOffset?: string;
      switchPm?: TypeInlineBotSwitchPM;
      switchWebview?: TypeInlineBotWebView;
      results: Array<TypeBotInlineResult>;
      cacheTime: number;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.gallery = params.gallery;
    this.queryId = params.queryId;
    this.nextOffset = params.nextOffset;
    this.switchPm = params.switchPm;
    this.switchWebview = params.switchWebview;
    this.results = params.results;
    this.cacheTime = params.cacheTime;
    this.users = params.users;
  }
}

export class ExportedMessageLink extends Constructor {
  link: string;
  html: string;

  protected get [id]() {
    return 0x5dab1af4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["link", "string", "string"],
      ["html", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.link, "string", "string"],
      [this.html, "string", "string"],
    ];
  }

  constructor(params: { link: string; html: string }) {
    super();
    this.link = params.link;
    this.html = params.html;
  }
}

export class MessageFwdHeader extends Constructor {
  imported?: true;
  fromId?: TypePeer;
  fromName?: string;
  date: number;
  channelPost?: number;
  postAuthor?: string;
  savedFromPeer?: TypePeer;
  savedFromMsgId?: number;
  psaType?: string;

  protected get [id]() {
    return 0x5f777dce;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["imported", "true", "flags.7?true"],
      ["fromId", TypePeer, "flags.0?Peer"],
      ["fromName", "string", "flags.5?string"],
      ["date", "number", "int"],
      ["channelPost", "number", "flags.2?int"],
      ["postAuthor", "string", "flags.3?string"],
      ["savedFromPeer", TypePeer, "flags.4?Peer"],
      ["savedFromMsgId", "number", "flags.4?int"],
      ["psaType", "string", "flags.6?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.imported ?? null, "true", "flags.7?true"],
      [this.fromId ?? null, TypePeer, "flags.0?Peer"],
      [this.fromName ?? null, "string", "flags.5?string"],
      [this.date, "number", "int"],
      [this.channelPost ?? null, "number", "flags.2?int"],
      [this.postAuthor ?? null, "string", "flags.3?string"],
      [this.savedFromPeer ?? null, TypePeer, "flags.4?Peer"],
      [this.savedFromMsgId ?? null, "number", "flags.4?int"],
      [this.psaType ?? null, "string", "flags.6?string"],
    ];
  }

  constructor(
    params: {
      imported?: true;
      fromId?: TypePeer;
      fromName?: string;
      date: number;
      channelPost?: number;
      postAuthor?: string;
      savedFromPeer?: TypePeer;
      savedFromMsgId?: number;
      psaType?: string;
    },
  ) {
    super();
    this.imported = params.imported;
    this.fromId = params.fromId;
    this.fromName = params.fromName;
    this.date = params.date;
    this.channelPost = params.channelPost;
    this.postAuthor = params.postAuthor;
    this.savedFromPeer = params.savedFromPeer;
    this.savedFromMsgId = params.savedFromMsgId;
    this.psaType = params.psaType;
  }
}

export class AuthCodeTypeSms extends TypeAuthCodeType {
  protected get [id]() {
    return 0x72a3158c;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AuthCodeTypeMissedCall extends TypeAuthCodeType {
  protected get [id]() {
    return 0xd61ad6ee;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AuthCodeTypeFragmentSms extends TypeAuthCodeType {
  protected get [id]() {
    return 0x06ed998c;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.length, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["pattern", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pattern, "string", "string"],
    ];
  }

  constructor(params: { pattern: string }) {
    super();
    this.pattern = params.pattern;
  }
}

export class AuthSentCodeTypeMissedCall extends TypeAuthSentCodeType {
  prefix: string;
  length: number;

  protected get [id]() {
    return 0x82006484;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prefix", "string", "string"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prefix, "string", "string"],
      [this.length, "number", "int"],
    ];
  }

  constructor(params: { prefix: string; length: number }) {
    super();
    this.prefix = params.prefix;
    this.length = params.length;
  }
}

export class AuthSentCodeTypeEmailCode extends TypeAuthSentCodeType {
  appleSigninAllowed?: true;
  googleSigninAllowed?: true;
  emailPattern: string;
  length: number;
  nextPhoneLoginDate?: number;

  protected get [id]() {
    return 0x5a159841;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["appleSigninAllowed", "true", "flags.0?true"],
      ["googleSigninAllowed", "true", "flags.1?true"],
      ["emailPattern", "string", "string"],
      ["length", "number", "int"],
      ["nextPhoneLoginDate", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.appleSigninAllowed ?? null, "true", "flags.0?true"],
      [this.googleSigninAllowed ?? null, "true", "flags.1?true"],
      [this.emailPattern, "string", "string"],
      [this.length, "number", "int"],
      [this.nextPhoneLoginDate ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(
    params: {
      appleSigninAllowed?: true;
      googleSigninAllowed?: true;
      emailPattern: string;
      length: number;
      nextPhoneLoginDate?: number;
    },
  ) {
    super();
    this.appleSigninAllowed = params.appleSigninAllowed;
    this.googleSigninAllowed = params.googleSigninAllowed;
    this.emailPattern = params.emailPattern;
    this.length = params.length;
    this.nextPhoneLoginDate = params.nextPhoneLoginDate;
  }
}

export class AuthSentCodeTypeSetUpEmailRequired extends TypeAuthSentCodeType {
  appleSigninAllowed?: true;
  googleSigninAllowed?: true;

  protected get [id]() {
    return 0xa5491dea;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["appleSigninAllowed", "true", "flags.0?true"],
      ["googleSigninAllowed", "true", "flags.1?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.appleSigninAllowed ?? null, "true", "flags.0?true"],
      [this.googleSigninAllowed ?? null, "true", "flags.1?true"],
    ];
  }

  constructor(
    params: { appleSigninAllowed?: true; googleSigninAllowed?: true },
  ) {
    super();
    this.appleSigninAllowed = params.appleSigninAllowed;
    this.googleSigninAllowed = params.googleSigninAllowed;
  }
}

export class AuthSentCodeTypeFragmentSms extends TypeAuthSentCodeType {
  url: string;
  length: number;

  protected get [id]() {
    return 0xd9565c39;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.length, "number", "int"],
    ];
  }

  constructor(params: { url: string; length: number }) {
    super();
    this.url = params.url;
    this.length = params.length;
  }
}

export class AuthSentCodeTypeFirebaseSms extends TypeAuthSentCodeType {
  nonce?: Uint8Array;
  receipt?: string;
  pushTimeout?: number;
  length: number;

  protected get [id]() {
    return 0xe57b1432;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["nonce", Uint8Array, "flags.0?bytes"],
      ["receipt", "string", "flags.1?string"],
      ["pushTimeout", "number", "flags.1?int"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.nonce ?? null, Uint8Array, "flags.0?bytes"],
      [this.receipt ?? null, "string", "flags.1?string"],
      [this.pushTimeout ?? null, "number", "flags.1?int"],
      [this.length, "number", "int"],
    ];
  }

  constructor(
    params: {
      nonce?: Uint8Array;
      receipt?: string;
      pushTimeout?: number;
      length: number;
    },
  ) {
    super();
    this.nonce = params.nonce;
    this.receipt = params.receipt;
    this.pushTimeout = params.pushTimeout;
    this.length = params.length;
  }
}

export class MessagesBotCallbackAnswer extends Constructor {
  alert?: true;
  hasUrl?: true;
  nativeUi?: true;
  message?: string;
  url?: string;
  cacheTime: number;

  protected get [id]() {
    return 0x36585ea4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["alert", "true", "flags.1?true"],
      ["hasUrl", "true", "flags.3?true"],
      ["nativeUi", "true", "flags.4?true"],
      ["message", "string", "flags.0?string"],
      ["url", "string", "flags.2?string"],
      ["cacheTime", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.alert ?? null, "true", "flags.1?true"],
      [this.hasUrl ?? null, "true", "flags.3?true"],
      [this.nativeUi ?? null, "true", "flags.4?true"],
      [this.message ?? null, "string", "flags.0?string"],
      [this.url ?? null, "string", "flags.2?string"],
      [this.cacheTime, "number", "int"],
    ];
  }

  constructor(
    params: {
      alert?: true;
      hasUrl?: true;
      nativeUi?: true;
      message?: string;
      url?: string;
      cacheTime: number;
    },
  ) {
    super();
    this.alert = params.alert;
    this.hasUrl = params.hasUrl;
    this.nativeUi = params.nativeUi;
    this.message = params.message;
    this.url = params.url;
    this.cacheTime = params.cacheTime;
  }
}

export class MessagesMessageEditData extends Constructor {
  caption?: true;

  protected get [id]() {
    return 0x26b5dde6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["caption", "true", "flags.0?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.caption ?? null, "true", "flags.0?true"],
    ];
  }

  constructor(params: { caption?: true }) {
    super();
    this.caption = params.caption;
  }
}

export class InputBotInlineMessageID extends Constructor {
  dcId: number;
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x890c3d89;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dcId", "number", "int"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dcId, "number", "int"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { dcId: number; id: bigint; accessHash: bigint }) {
    super();
    this.dcId = params.dcId;
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputBotInlineMessageID64 extends TypeInputBotInlineMessageID {
  dcId: number;
  ownerId: bigint;
  id: number;
  accessHash: bigint;

  protected get [id]() {
    return 0xb6d915d7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dcId", "number", "int"],
      ["ownerId", "bigint", "long"],
      ["id", "number", "int"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dcId, "number", "int"],
      [this.ownerId, "bigint", "long"],
      [this.id, "number", "int"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(
    params: { dcId: number; ownerId: bigint; id: number; accessHash: bigint },
  ) {
    super();
    this.dcId = params.dcId;
    this.ownerId = params.ownerId;
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InlineBotSwitchPM extends Constructor {
  text: string;
  startParam: string;

  protected get [id]() {
    return 0x3c20629f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["startParam", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.startParam, "string", "string"],
    ];
  }

  constructor(params: { text: string; startParam: string }) {
    super();
    this.text = params.text;
    this.startParam = params.startParam;
  }
}

export class MessagesPeerDialogs extends Constructor {
  dialogs: Array<TypeDialog>;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  state: TypeUpdatesState;

  protected get [id]() {
    return 0x3371c354;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dialogs", [TypeDialog], "Vector<Dialog>"],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["state", TypeUpdatesState, "updates.State"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dialogs, [TypeDialog], "Vector<Dialog>"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.state, TypeUpdatesState, "updates.State"],
    ];
  }

  constructor(
    params: {
      dialogs: Array<TypeDialog>;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
      state: TypeUpdatesState;
    },
  ) {
    super();
    this.dialogs = params.dialogs;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
    this.state = params.state;
  }
}

export class TopPeer extends Constructor {
  peer: TypePeer;
  rating: number;

  protected get [id]() {
    return 0xedcdc05b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["rating", "number", "double"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.rating, "number", "double"],
    ];
  }

  constructor(params: { peer: TypePeer; rating: number }) {
    super();
    this.peer = params.peer;
    this.rating = params.rating;
  }
}

export class TopPeerCategoryBotsPM extends TypeTopPeerCategory {
  protected get [id]() {
    return 0xab661b5b;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TopPeerCategoryPhoneCalls extends TypeTopPeerCategory {
  protected get [id]() {
    return 0x1e76a78c;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class TopPeerCategoryPeers extends Constructor {
  category: TypeTopPeerCategory;
  count: number;
  peers: Array<TypeTopPeer>;

  protected get [id]() {
    return 0xfb834291;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["category", TypeTopPeerCategory, "TopPeerCategory"],
      ["count", "number", "int"],
      ["peers", [TypeTopPeer], "Vector<TopPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.category, TypeTopPeerCategory, "TopPeerCategory"],
      [this.count, "number", "int"],
      [this.peers, [TypeTopPeer], "Vector<TopPeer>"],
    ];
  }

  constructor(
    params: {
      category: TypeTopPeerCategory;
      count: number;
      peers: Array<TypeTopPeer>;
    },
  ) {
    super();
    this.category = params.category;
    this.count = params.count;
    this.peers = params.peers;
  }
}

export class ContactsTopPeersNotModified extends TypeContactsTopPeers {
  protected get [id]() {
    return 0xde266ef5;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ContactsTopPeers extends Constructor {
  categories: Array<TypeTopPeerCategoryPeers>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x70b772a8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      [
        "categories",
        [TypeTopPeerCategoryPeers],
        "Vector<TopPeerCategoryPeers>",
      ],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [
        this.categories,
        [TypeTopPeerCategoryPeers],
        "Vector<TopPeerCategoryPeers>",
      ],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      categories: Array<TypeTopPeerCategoryPeers>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.categories = params.categories;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ContactsTopPeersDisabled extends TypeContactsTopPeers {
  protected get [id]() {
    return 0xb52c939d;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class DraftMessageEmpty extends TypeDraftMessage {
  date?: number;

  protected get [id]() {
    return 0x1b0c841a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["date", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.date ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { date?: number }) {
    super();
    this.date = params.date;
  }
}

export class DraftMessage extends Constructor {
  noWebpage?: true;
  replyToMsgId?: number;
  message: string;
  entities?: Array<TypeMessageEntity>;
  date: number;

  protected get [id]() {
    return 0xfd8e711f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["noWebpage", "true", "flags.1?true"],
      ["replyToMsgId", "number", "flags.0?int"],
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.noWebpage ?? null, "true", "flags.1?true"],
      [this.replyToMsgId ?? null, "number", "flags.0?int"],
      [this.message, "string", "string"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.3?Vector<MessageEntity>",
      ],
      [this.date, "number", "int"],
    ];
  }

  constructor(
    params: {
      noWebpage?: true;
      replyToMsgId?: number;
      message: string;
      entities?: Array<TypeMessageEntity>;
      date: number;
    },
  ) {
    super();
    this.noWebpage = params.noWebpage;
    this.replyToMsgId = params.replyToMsgId;
    this.message = params.message;
    this.entities = params.entities;
    this.date = params.date;
  }
}

export class MessagesFeaturedStickersNotModified
  extends TypeMessagesFeaturedStickers {
  count: number;

  protected get [id]() {
    return 0xc6dc0c66;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
    ];
  }

  constructor(params: { count: number }) {
    super();
    this.count = params.count;
  }
}

export class MessagesFeaturedStickers extends Constructor {
  premium?: true;
  hash: bigint;
  count: number;
  sets: Array<TypeStickerSetCovered>;
  unread: Array<bigint>;

  protected get [id]() {
    return 0xbe382906;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["premium", "true", "flags.0?true"],
      ["hash", "bigint", "long"],
      ["count", "number", "int"],
      ["sets", [TypeStickerSetCovered], "Vector<StickerSetCovered>"],
      ["unread", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.premium ?? null, "true", "flags.0?true"],
      [this.hash, "bigint", "long"],
      [this.count, "number", "int"],
      [this.sets, [TypeStickerSetCovered], "Vector<StickerSetCovered>"],
      [this.unread, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(
    params: {
      premium?: true;
      hash: bigint;
      count: number;
      sets: Array<TypeStickerSetCovered>;
      unread: Array<bigint>;
    },
  ) {
    super();
    this.premium = params.premium;
    this.hash = params.hash;
    this.count = params.count;
    this.sets = params.sets;
    this.unread = params.unread;
  }
}

export class MessagesRecentStickersNotModified
  extends TypeMessagesRecentStickers {
  protected get [id]() {
    return 0x0b17f890;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesRecentStickers extends Constructor {
  hash: bigint;
  packs: Array<TypeStickerPack>;
  stickers: Array<TypeDocument>;
  dates: Array<number>;

  protected get [id]() {
    return 0x88d37c56;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["packs", [TypeStickerPack], "Vector<StickerPack>"],
      ["stickers", [TypeDocument], "Vector<Document>"],
      ["dates", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.packs, [TypeStickerPack], "Vector<StickerPack>"],
      [this.stickers, [TypeDocument], "Vector<Document>"],
      [this.dates, ["number"], "Vector<int>"],
    ];
  }

  constructor(
    params: {
      hash: bigint;
      packs: Array<TypeStickerPack>;
      stickers: Array<TypeDocument>;
      dates: Array<number>;
    },
  ) {
    super();
    this.hash = params.hash;
    this.packs = params.packs;
    this.stickers = params.stickers;
    this.dates = params.dates;
  }
}

export class MessagesArchivedStickers extends Constructor {
  count: number;
  sets: Array<TypeStickerSetCovered>;

  protected get [id]() {
    return 0x4fcba9c8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["sets", [TypeStickerSetCovered], "Vector<StickerSetCovered>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.sets, [TypeStickerSetCovered], "Vector<StickerSetCovered>"],
    ];
  }

  constructor(params: { count: number; sets: Array<TypeStickerSetCovered> }) {
    super();
    this.count = params.count;
    this.sets = params.sets;
  }
}

export class MessagesStickerSetInstallResultSuccess
  extends TypeMessagesStickerSetInstallResult {
  protected get [id]() {
    return 0x38641628;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["sets", [TypeStickerSetCovered], "Vector<StickerSetCovered>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.sets, [TypeStickerSetCovered], "Vector<StickerSetCovered>"],
    ];
  }

  constructor(params: { sets: Array<TypeStickerSetCovered> }) {
    super();
    this.sets = params.sets;
  }
}

export class StickerSetCovered extends Constructor {
  set: TypeStickerSet;
  cover: TypeDocument;

  protected get [id]() {
    return 0x6410a5d2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["set", TypeStickerSet, "StickerSet"],
      ["cover", TypeDocument, "Document"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.set, TypeStickerSet, "StickerSet"],
      [this.cover, TypeDocument, "Document"],
    ];
  }

  constructor(params: { set: TypeStickerSet; cover: TypeDocument }) {
    super();
    this.set = params.set;
    this.cover = params.cover;
  }
}

export class StickerSetMultiCovered extends TypeStickerSetCovered {
  set: TypeStickerSet;
  covers: Array<TypeDocument>;

  protected get [id]() {
    return 0x3407e51b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["set", TypeStickerSet, "StickerSet"],
      ["covers", [TypeDocument], "Vector<Document>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.set, TypeStickerSet, "StickerSet"],
      [this.covers, [TypeDocument], "Vector<Document>"],
    ];
  }

  constructor(params: { set: TypeStickerSet; covers: Array<TypeDocument> }) {
    super();
    this.set = params.set;
    this.covers = params.covers;
  }
}

export class StickerSetFullCovered extends TypeStickerSetCovered {
  set: TypeStickerSet;
  packs: Array<TypeStickerPack>;
  keywords: Array<TypeStickerKeyword>;
  documents: Array<TypeDocument>;

  protected get [id]() {
    return 0x40d13c0e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["set", TypeStickerSet, "StickerSet"],
      ["packs", [TypeStickerPack], "Vector<StickerPack>"],
      ["keywords", [TypeStickerKeyword], "Vector<StickerKeyword>"],
      ["documents", [TypeDocument], "Vector<Document>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.set, TypeStickerSet, "StickerSet"],
      [this.packs, [TypeStickerPack], "Vector<StickerPack>"],
      [this.keywords, [TypeStickerKeyword], "Vector<StickerKeyword>"],
      [this.documents, [TypeDocument], "Vector<Document>"],
    ];
  }

  constructor(
    params: {
      set: TypeStickerSet;
      packs: Array<TypeStickerPack>;
      keywords: Array<TypeStickerKeyword>;
      documents: Array<TypeDocument>;
    },
  ) {
    super();
    this.set = params.set;
    this.packs = params.packs;
    this.keywords = params.keywords;
    this.documents = params.documents;
  }
}

export class StickerSetNoCovered extends TypeStickerSetCovered {
  set: TypeStickerSet;

  protected get [id]() {
    return 0x77b15d1c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["set", TypeStickerSet, "StickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.set, TypeStickerSet, "StickerSet"],
    ];
  }

  constructor(params: { set: TypeStickerSet }) {
    super();
    this.set = params.set;
  }
}

export class MaskCoords extends Constructor {
  n: number;
  x: number;
  y: number;
  zoom: number;

  protected get [id]() {
    return 0xaed6dbb2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["n", "number", "int"],
      ["x", "number", "double"],
      ["y", "number", "double"],
      ["zoom", "number", "double"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.n, "number", "int"],
      [this.x, "number", "double"],
      [this.y, "number", "double"],
      [this.zoom, "number", "double"],
    ];
  }

  constructor(params: { n: number; x: number; y: number; zoom: number }) {
    super();
    this.n = params.n;
    this.x = params.x;
    this.y = params.y;
    this.zoom = params.zoom;
  }
}

export class InputStickeredMediaPhoto extends TypeInputStickeredMedia {
  id: TypeInputPhoto;

  protected get [id]() {
    return 0x4a992157;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", TypeInputPhoto, "InputPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, TypeInputPhoto, "InputPhoto"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["id", TypeInputDocument, "InputDocument"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, TypeInputDocument, "InputDocument"],
    ];
  }

  constructor(params: { id: TypeInputDocument }) {
    super();
    this.id = params.id;
  }
}

export class Game extends Constructor {
  id: bigint;
  accessHash: bigint;
  shortName: string;
  title: string;
  description: string;
  photo: TypePhoto;
  document?: TypeDocument;

  protected get [id]() {
    return 0xbdf9653b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["shortName", "string", "string"],
      ["title", "string", "string"],
      ["description", "string", "string"],
      ["photo", TypePhoto, "Photo"],
      ["document", TypeDocument, "flags.0?Document"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.shortName, "string", "string"],
      [this.title, "string", "string"],
      [this.description, "string", "string"],
      [this.photo, TypePhoto, "Photo"],
      [this.document ?? null, TypeDocument, "flags.0?Document"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      accessHash: bigint;
      shortName: string;
      title: string;
      description: string;
      photo: TypePhoto;
      document?: TypeDocument;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.shortName = params.shortName;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.document = params.document;
  }
}

export class InputGameID extends TypeInputGame {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x032c3e77;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputGameShortName extends TypeInputGame {
  botId: TypeInputUser;
  shortName: string;

  protected get [id]() {
    return 0xc331e80a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["botId", TypeInputUser, "InputUser"],
      ["shortName", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.botId, TypeInputUser, "InputUser"],
      [this.shortName, "string", "string"],
    ];
  }

  constructor(params: { botId: TypeInputUser; shortName: string }) {
    super();
    this.botId = params.botId;
    this.shortName = params.shortName;
  }
}

export class HighScore extends Constructor {
  pos: number;
  userId: bigint;
  score: number;

  protected get [id]() {
    return 0x73a379eb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pos", "number", "int"],
      ["userId", "bigint", "long"],
      ["score", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pos, "number", "int"],
      [this.userId, "bigint", "long"],
      [this.score, "number", "int"],
    ];
  }

  constructor(params: { pos: number; userId: bigint; score: number }) {
    super();
    this.pos = params.pos;
    this.userId = params.userId;
    this.score = params.score;
  }
}

export class MessagesHighScores extends Constructor {
  scores: Array<TypeHighScore>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x9a3bfd99;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["scores", [TypeHighScore], "Vector<HighScore>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.scores, [TypeHighScore], "Vector<HighScore>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: { scores: Array<TypeHighScore>; users: Array<TypeUser> },
  ) {
    super();
    this.scores = params.scores;
    this.users = params.users;
  }
}

export class TextEmpty extends TypeRichText {
  protected get [id]() {
    return 0xdc3d824f;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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
  webpageId: bigint;

  protected get [id]() {
    return 0x3c2884c1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
      ["url", "string", "string"],
      ["webpageId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
      [this.url, "string", "string"],
      [this.webpageId, "bigint", "long"],
    ];
  }

  constructor(params: { text: TypeRichText; url: string; webpageId: bigint }) {
    super();
    this.text = params.text;
    this.url = params.url;
    this.webpageId = params.webpageId;
  }
}

export class TextEmail extends TypeRichText {
  text: TypeRichText;
  email: string;

  protected get [id]() {
    return 0xde5a0dd6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
      ["email", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
      [this.email, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["texts", [TypeRichText], "Vector<RichText>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.texts, [TypeRichText], "Vector<RichText>"],
    ];
  }

  constructor(params: { texts: Array<TypeRichText> }) {
    super();
    this.texts = params.texts;
  }
}

export class TextSubscript extends TypeRichText {
  text: TypeRichText;

  protected get [id]() {
    return 0xed6a8504;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
      ["phone", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
      [this.phone, "string", "string"],
    ];
  }

  constructor(params: { text: TypeRichText; phone: string }) {
    super();
    this.text = params.text;
    this.phone = params.phone;
  }
}

export class TextImage extends TypeRichText {
  documentId: bigint;
  w: number;
  h: number;

  protected get [id]() {
    return 0x081ccf4f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["documentId", "bigint", "long"],
      ["w", "number", "int"],
      ["h", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.documentId, "bigint", "long"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
    ];
  }

  constructor(params: { documentId: bigint; w: number; h: number }) {
    super();
    this.documentId = params.documentId;
    this.w = params.w;
    this.h = params.h;
  }
}

export class TextAnchor extends TypeRichText {
  text: TypeRichText;
  name: string;

  protected get [id]() {
    return 0x35553762;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
      ["name", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
      [this.name, "string", "string"],
    ];
  }

  constructor(params: { text: TypeRichText; name: string }) {
    super();
    this.text = params.text;
    this.name = params.name;
  }
}

export class PageBlockUnsupported extends TypePageBlock {
  protected get [id]() {
    return 0x13567e8a;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText }) {
    super();
    this.text = params.text;
  }
}

export class PageBlockAuthorDate extends TypePageBlock {
  author: TypeRichText;
  publishedDate: number;

  protected get [id]() {
    return 0xbaafe5e0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["author", TypeRichText, "RichText"],
      ["publishedDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.author, TypeRichText, "RichText"],
      [this.publishedDate, "number", "int"],
    ];
  }

  constructor(params: { author: TypeRichText; publishedDate: number }) {
    super();
    this.author = params.author;
    this.publishedDate = params.publishedDate;
  }
}

export class PageBlockHeader extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0xbfd064ec;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
      ["language", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
      [this.language, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["name", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.name, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["items", [TypePageListItem], "Vector<PageListItem>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.items, [TypePageListItem], "Vector<PageListItem>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
      ["caption", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
      [this.caption, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
      ["caption", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
      [this.caption, TypeRichText, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText; caption: TypeRichText }) {
    super();
    this.text = params.text;
    this.caption = params.caption;
  }
}

export class PageBlockPhoto extends TypePageBlock {
  photoId: bigint;
  caption: TypePageCaption;
  url?: string;
  webpageId?: bigint;

  protected get [id]() {
    return 0x1759c560;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["photoId", "bigint", "long"],
      ["caption", TypePageCaption, "PageCaption"],
      ["url", "string", "flags.0?string"],
      ["webpageId", "bigint", "flags.0?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.photoId, "bigint", "long"],
      [this.caption, TypePageCaption, "PageCaption"],
      [this.url ?? null, "string", "flags.0?string"],
      [this.webpageId ?? null, "bigint", "flags.0?long"],
    ];
  }

  constructor(
    params: {
      photoId: bigint;
      caption: TypePageCaption;
      url?: string;
      webpageId?: bigint;
    },
  ) {
    super();
    this.photoId = params.photoId;
    this.caption = params.caption;
    this.url = params.url;
    this.webpageId = params.webpageId;
  }
}

export class PageBlockVideo extends TypePageBlock {
  autoplay?: true;
  loop?: true;
  videoId: bigint;
  caption: TypePageCaption;

  protected get [id]() {
    return 0x7c8fe7b6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["autoplay", "true", "flags.0?true"],
      ["loop", "true", "flags.1?true"],
      ["videoId", "bigint", "long"],
      ["caption", TypePageCaption, "PageCaption"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.autoplay ?? null, "true", "flags.0?true"],
      [this.loop ?? null, "true", "flags.1?true"],
      [this.videoId, "bigint", "long"],
      [this.caption, TypePageCaption, "PageCaption"],
    ];
  }

  constructor(
    params: {
      autoplay?: true;
      loop?: true;
      videoId: bigint;
      caption: TypePageCaption;
    },
  ) {
    super();
    this.autoplay = params.autoplay;
    this.loop = params.loop;
    this.videoId = params.videoId;
    this.caption = params.caption;
  }
}

export class PageBlockCover extends TypePageBlock {
  cover: TypePageBlock;

  protected get [id]() {
    return 0x39f23300;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["cover", TypePageBlock, "PageBlock"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.cover, TypePageBlock, "PageBlock"],
    ];
  }

  constructor(params: { cover: TypePageBlock }) {
    super();
    this.cover = params.cover;
  }
}

export class PageBlockEmbed extends TypePageBlock {
  fullWidth?: true;
  allowScrolling?: true;
  url?: string;
  html?: string;
  posterPhotoId?: bigint;
  w?: number;
  h?: number;
  caption: TypePageCaption;

  protected get [id]() {
    return 0xa8718dc5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["fullWidth", "true", "flags.0?true"],
      ["allowScrolling", "true", "flags.3?true"],
      ["url", "string", "flags.1?string"],
      ["html", "string", "flags.2?string"],
      ["posterPhotoId", "bigint", "flags.4?long"],
      ["w", "number", "flags.5?int"],
      ["h", "number", "flags.5?int"],
      ["caption", TypePageCaption, "PageCaption"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.fullWidth ?? null, "true", "flags.0?true"],
      [this.allowScrolling ?? null, "true", "flags.3?true"],
      [this.url ?? null, "string", "flags.1?string"],
      [this.html ?? null, "string", "flags.2?string"],
      [this.posterPhotoId ?? null, "bigint", "flags.4?long"],
      [this.w ?? null, "number", "flags.5?int"],
      [this.h ?? null, "number", "flags.5?int"],
      [this.caption, TypePageCaption, "PageCaption"],
    ];
  }

  constructor(
    params: {
      fullWidth?: true;
      allowScrolling?: true;
      url?: string;
      html?: string;
      posterPhotoId?: bigint;
      w?: number;
      h?: number;
      caption: TypePageCaption;
    },
  ) {
    super();
    this.fullWidth = params.fullWidth;
    this.allowScrolling = params.allowScrolling;
    this.url = params.url;
    this.html = params.html;
    this.posterPhotoId = params.posterPhotoId;
    this.w = params.w;
    this.h = params.h;
    this.caption = params.caption;
  }
}

export class PageBlockEmbedPost extends TypePageBlock {
  url: string;
  webpageId: bigint;
  authorPhotoId: bigint;
  author: string;
  date: number;
  blocks: Array<TypePageBlock>;
  caption: TypePageCaption;

  protected get [id]() {
    return 0xf259a80b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["webpageId", "bigint", "long"],
      ["authorPhotoId", "bigint", "long"],
      ["author", "string", "string"],
      ["date", "number", "int"],
      ["blocks", [TypePageBlock], "Vector<PageBlock>"],
      ["caption", TypePageCaption, "PageCaption"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.webpageId, "bigint", "long"],
      [this.authorPhotoId, "bigint", "long"],
      [this.author, "string", "string"],
      [this.date, "number", "int"],
      [this.blocks, [TypePageBlock], "Vector<PageBlock>"],
      [this.caption, TypePageCaption, "PageCaption"],
    ];
  }

  constructor(
    params: {
      url: string;
      webpageId: bigint;
      authorPhotoId: bigint;
      author: string;
      date: number;
      blocks: Array<TypePageBlock>;
      caption: TypePageCaption;
    },
  ) {
    super();
    this.url = params.url;
    this.webpageId = params.webpageId;
    this.authorPhotoId = params.authorPhotoId;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["items", [TypePageBlock], "Vector<PageBlock>"],
      ["caption", TypePageCaption, "PageCaption"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.items, [TypePageBlock], "Vector<PageBlock>"],
      [this.caption, TypePageCaption, "PageCaption"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["items", [TypePageBlock], "Vector<PageBlock>"],
      ["caption", TypePageCaption, "PageCaption"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.items, [TypePageBlock], "Vector<PageBlock>"],
      [this.caption, TypePageCaption, "PageCaption"],
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

export class PageBlockChannel extends TypePageBlock {
  channel: TypeChat;

  protected get [id]() {
    return 0xef1751b5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", TypeChat, "Chat"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, TypeChat, "Chat"],
    ];
  }

  constructor(params: { channel: TypeChat }) {
    super();
    this.channel = params.channel;
  }
}

export class PageBlockAudio extends TypePageBlock {
  audioId: bigint;
  caption: TypePageCaption;

  protected get [id]() {
    return 0x804361ea;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["audioId", "bigint", "long"],
      ["caption", TypePageCaption, "PageCaption"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.audioId, "bigint", "long"],
      [this.caption, TypePageCaption, "PageCaption"],
    ];
  }

  constructor(params: { audioId: bigint; caption: TypePageCaption }) {
    super();
    this.audioId = params.audioId;
    this.caption = params.caption;
  }
}

export class PageBlockKicker extends TypePageBlock {
  text: TypeRichText;

  protected get [id]() {
    return 0x1e148390;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bordered", "true", "flags.0?true"],
      ["striped", "true", "flags.1?true"],
      ["title", TypeRichText, "RichText"],
      ["rows", [TypePageTableRow], "Vector<PageTableRow>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bordered ?? null, "true", "flags.0?true"],
      [this.striped ?? null, "true", "flags.1?true"],
      [this.title, TypeRichText, "RichText"],
      [this.rows, [TypePageTableRow], "Vector<PageTableRow>"],
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

export class PageBlockOrderedList extends TypePageBlock {
  items: Array<TypePageListOrderedItem>;

  protected get [id]() {
    return 0x9a8ae1e1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["items", [TypePageListOrderedItem], "Vector<PageListOrderedItem>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.items, [TypePageListOrderedItem], "Vector<PageListOrderedItem>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["open", "true", "flags.0?true"],
      ["blocks", [TypePageBlock], "Vector<PageBlock>"],
      ["title", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.open ?? null, "true", "flags.0?true"],
      [this.blocks, [TypePageBlock], "Vector<PageBlock>"],
      [this.title, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["title", TypeRichText, "RichText"],
      ["articles", [TypePageRelatedArticle], "Vector<PageRelatedArticle>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, TypeRichText, "RichText"],
      [this.articles, [TypePageRelatedArticle], "Vector<PageRelatedArticle>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["geo", TypeGeoPoint, "GeoPoint"],
      ["zoom", "number", "int"],
      ["w", "number", "int"],
      ["h", "number", "int"],
      ["caption", TypePageCaption, "PageCaption"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.geo, TypeGeoPoint, "GeoPoint"],
      [this.zoom, "number", "int"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
      [this.caption, TypePageCaption, "PageCaption"],
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

export class PhoneCallDiscardReasonMissed extends TypePhoneCallDiscardReason {
  protected get [id]() {
    return 0x85e42301;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class DataJSON extends Constructor {
  data: string;

  protected get [id]() {
    return 0x7d748d04;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["data", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.data, "string", "string"],
    ];
  }

  constructor(params: { data: string }) {
    super();
    this.data = params.data;
  }
}

export class LabeledPrice extends Constructor {
  label: string;
  amount: bigint;

  protected get [id]() {
    return 0xcb296bf8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["label", "string", "string"],
      ["amount", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.label, "string", "string"],
      [this.amount, "bigint", "long"],
    ];
  }

  constructor(params: { label: string; amount: bigint }) {
    super();
    this.label = params.label;
    this.amount = params.amount;
  }
}

export class Invoice extends Constructor {
  test?: true;
  nameRequested?: true;
  phoneRequested?: true;
  emailRequested?: true;
  shippingAddressRequested?: true;
  flexible?: true;
  phoneToProvider?: true;
  emailToProvider?: true;
  recurring?: true;
  currency: string;
  prices: Array<TypeLabeledPrice>;
  maxTipAmount?: bigint;
  suggestedTipAmounts?: Array<bigint>;
  recurringTermsUrl?: string;

  protected get [id]() {
    return 0x3e85a91b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["test", "true", "flags.0?true"],
      ["nameRequested", "true", "flags.1?true"],
      ["phoneRequested", "true", "flags.2?true"],
      ["emailRequested", "true", "flags.3?true"],
      ["shippingAddressRequested", "true", "flags.4?true"],
      ["flexible", "true", "flags.5?true"],
      ["phoneToProvider", "true", "flags.6?true"],
      ["emailToProvider", "true", "flags.7?true"],
      ["recurring", "true", "flags.9?true"],
      ["currency", "string", "string"],
      ["prices", [TypeLabeledPrice], "Vector<LabeledPrice>"],
      ["maxTipAmount", "bigint", "flags.8?long"],
      ["suggestedTipAmounts", ["bigint"], "flags.8?Vector<long>"],
      ["recurringTermsUrl", "string", "flags.9?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.test ?? null, "true", "flags.0?true"],
      [this.nameRequested ?? null, "true", "flags.1?true"],
      [this.phoneRequested ?? null, "true", "flags.2?true"],
      [this.emailRequested ?? null, "true", "flags.3?true"],
      [this.shippingAddressRequested ?? null, "true", "flags.4?true"],
      [this.flexible ?? null, "true", "flags.5?true"],
      [this.phoneToProvider ?? null, "true", "flags.6?true"],
      [this.emailToProvider ?? null, "true", "flags.7?true"],
      [this.recurring ?? null, "true", "flags.9?true"],
      [this.currency, "string", "string"],
      [this.prices, [TypeLabeledPrice], "Vector<LabeledPrice>"],
      [this.maxTipAmount ?? null, "bigint", "flags.8?long"],
      [this.suggestedTipAmounts ?? null, ["bigint"], "flags.8?Vector<long>"],
      [this.recurringTermsUrl ?? null, "string", "flags.9?string"],
    ];
  }

  constructor(
    params: {
      test?: true;
      nameRequested?: true;
      phoneRequested?: true;
      emailRequested?: true;
      shippingAddressRequested?: true;
      flexible?: true;
      phoneToProvider?: true;
      emailToProvider?: true;
      recurring?: true;
      currency: string;
      prices: Array<TypeLabeledPrice>;
      maxTipAmount?: bigint;
      suggestedTipAmounts?: Array<bigint>;
      recurringTermsUrl?: string;
    },
  ) {
    super();
    this.test = params.test;
    this.nameRequested = params.nameRequested;
    this.phoneRequested = params.phoneRequested;
    this.emailRequested = params.emailRequested;
    this.shippingAddressRequested = params.shippingAddressRequested;
    this.flexible = params.flexible;
    this.phoneToProvider = params.phoneToProvider;
    this.emailToProvider = params.emailToProvider;
    this.recurring = params.recurring;
    this.currency = params.currency;
    this.prices = params.prices;
    this.maxTipAmount = params.maxTipAmount;
    this.suggestedTipAmounts = params.suggestedTipAmounts;
    this.recurringTermsUrl = params.recurringTermsUrl;
  }
}

export class PaymentCharge extends Constructor {
  id: string;
  providerChargeId: string;

  protected get [id]() {
    return 0xea02c27e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "string", "string"],
      ["providerChargeId", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "string", "string"],
      [this.providerChargeId, "string", "string"],
    ];
  }

  constructor(params: { id: string; providerChargeId: string }) {
    super();
    this.id = params.id;
    this.providerChargeId = params.providerChargeId;
  }
}

export class PostAddress extends Constructor {
  streetLine1: string;
  streetLine2: string;
  city: string;
  state: string;
  countryIso2: string;
  postCode: string;

  protected get [id]() {
    return 0x1e8caaeb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["streetLine1", "string", "string"],
      ["streetLine2", "string", "string"],
      ["city", "string", "string"],
      ["state", "string", "string"],
      ["countryIso2", "string", "string"],
      ["postCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.streetLine1, "string", "string"],
      [this.streetLine2, "string", "string"],
      [this.city, "string", "string"],
      [this.state, "string", "string"],
      [this.countryIso2, "string", "string"],
      [this.postCode, "string", "string"],
    ];
  }

  constructor(
    params: {
      streetLine1: string;
      streetLine2: string;
      city: string;
      state: string;
      countryIso2: string;
      postCode: string;
    },
  ) {
    super();
    this.streetLine1 = params.streetLine1;
    this.streetLine2 = params.streetLine2;
    this.city = params.city;
    this.state = params.state;
    this.countryIso2 = params.countryIso2;
    this.postCode = params.postCode;
  }
}

export class PaymentRequestedInfo extends Constructor {
  name?: string;
  phone?: string;
  email?: string;
  shippingAddress?: TypePostAddress;

  protected get [id]() {
    return 0x909c3f94;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["name", "string", "flags.0?string"],
      ["phone", "string", "flags.1?string"],
      ["email", "string", "flags.2?string"],
      ["shippingAddress", TypePostAddress, "flags.3?PostAddress"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.name ?? null, "string", "flags.0?string"],
      [this.phone ?? null, "string", "flags.1?string"],
      [this.email ?? null, "string", "flags.2?string"],
      [this.shippingAddress ?? null, TypePostAddress, "flags.3?PostAddress"],
    ];
  }

  constructor(
    params: {
      name?: string;
      phone?: string;
      email?: string;
      shippingAddress?: TypePostAddress;
    },
  ) {
    super();
    this.name = params.name;
    this.phone = params.phone;
    this.email = params.email;
    this.shippingAddress = params.shippingAddress;
  }
}

export class PaymentSavedCredentialsCard extends TypePaymentSavedCredentials {
  id: string;
  title: string;

  protected get [id]() {
    return 0xcdc27a1f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "string", "string"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "string", "string"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { id: string; title: string }) {
    super();
    this.id = params.id;
    this.title = params.title;
  }
}

export class WebDocument extends Constructor {
  url: string;
  accessHash: bigint;
  size: number;
  mimeType: string;
  attributes: Array<TypeDocumentAttribute>;

  protected get [id]() {
    return 0x1c570ed1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["accessHash", "bigint", "long"],
      ["size", "number", "int"],
      ["mimeType", "string", "string"],
      ["attributes", [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.accessHash, "bigint", "long"],
      [this.size, "number", "int"],
      [this.mimeType, "string", "string"],
      [this.attributes, [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
    ];
  }

  constructor(
    params: {
      url: string;
      accessHash: bigint;
      size: number;
      mimeType: string;
      attributes: Array<TypeDocumentAttribute>;
    },
  ) {
    super();
    this.url = params.url;
    this.accessHash = params.accessHash;
    this.size = params.size;
    this.mimeType = params.mimeType;
    this.attributes = params.attributes;
  }
}

export class WebDocumentNoProxy extends TypeWebDocument {
  url: string;
  size: number;
  mimeType: string;
  attributes: Array<TypeDocumentAttribute>;

  protected get [id]() {
    return 0xf9c8bcc6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["size", "number", "int"],
      ["mimeType", "string", "string"],
      ["attributes", [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.size, "number", "int"],
      [this.mimeType, "string", "string"],
      [this.attributes, [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
    ];
  }

  constructor(
    params: {
      url: string;
      size: number;
      mimeType: string;
      attributes: Array<TypeDocumentAttribute>;
    },
  ) {
    super();
    this.url = params.url;
    this.size = params.size;
    this.mimeType = params.mimeType;
    this.attributes = params.attributes;
  }
}

export class InputWebDocument extends Constructor {
  url: string;
  size: number;
  mimeType: string;
  attributes: Array<TypeDocumentAttribute>;

  protected get [id]() {
    return 0x9bed434d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["size", "number", "int"],
      ["mimeType", "string", "string"],
      ["attributes", [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.size, "number", "int"],
      [this.mimeType, "string", "string"],
      [this.attributes, [TypeDocumentAttribute], "Vector<DocumentAttribute>"],
    ];
  }

  constructor(
    params: {
      url: string;
      size: number;
      mimeType: string;
      attributes: Array<TypeDocumentAttribute>;
    },
  ) {
    super();
    this.url = params.url;
    this.size = params.size;
    this.mimeType = params.mimeType;
    this.attributes = params.attributes;
  }
}

export class InputWebFileLocation extends Constructor {
  url: string;
  accessHash: bigint;

  protected get [id]() {
    return 0xc239d686;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { url: string; accessHash: bigint }) {
    super();
    this.url = params.url;
    this.accessHash = params.accessHash;
  }
}

export class InputWebFileGeoPointLocation extends TypeInputWebFileLocation {
  geoPoint: TypeInputGeoPoint;
  accessHash: bigint;
  w: number;
  h: number;
  zoom: number;
  scale: number;

  protected get [id]() {
    return 0x9f2221c9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["geoPoint", TypeInputGeoPoint, "InputGeoPoint"],
      ["accessHash", "bigint", "long"],
      ["w", "number", "int"],
      ["h", "number", "int"],
      ["zoom", "number", "int"],
      ["scale", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.geoPoint, TypeInputGeoPoint, "InputGeoPoint"],
      [this.accessHash, "bigint", "long"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
      [this.zoom, "number", "int"],
      [this.scale, "number", "int"],
    ];
  }

  constructor(
    params: {
      geoPoint: TypeInputGeoPoint;
      accessHash: bigint;
      w: number;
      h: number;
      zoom: number;
      scale: number;
    },
  ) {
    super();
    this.geoPoint = params.geoPoint;
    this.accessHash = params.accessHash;
    this.w = params.w;
    this.h = params.h;
    this.zoom = params.zoom;
    this.scale = params.scale;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["small", "true", "flags.2?true"],
      ["document", TypeInputDocument, "flags.0?InputDocument"],
      ["title", "string", "flags.1?string"],
      ["performer", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.small ?? null, "true", "flags.2?true"],
      [this.document ?? null, TypeInputDocument, "flags.0?InputDocument"],
      [this.title ?? null, "string", "flags.1?string"],
      [this.performer ?? null, "string", "flags.1?string"],
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

export class UploadWebFile extends Constructor {
  size: number;
  mimeType: string;
  fileType: TypeStorageFileType;
  mtime: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0x21e753bc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["size", "number", "int"],
      ["mimeType", "string", "string"],
      ["fileType", TypeStorageFileType, "storage.FileType"],
      ["mtime", "number", "int"],
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.size, "number", "int"],
      [this.mimeType, "string", "string"],
      [this.fileType, TypeStorageFileType, "storage.FileType"],
      [this.mtime, "number", "int"],
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      size: number;
      mimeType: string;
      fileType: TypeStorageFileType;
      mtime: number;
      bytes: Uint8Array;
    },
  ) {
    super();
    this.size = params.size;
    this.mimeType = params.mimeType;
    this.fileType = params.fileType;
    this.mtime = params.mtime;
    this.bytes = params.bytes;
  }
}

export class PaymentsPaymentForm extends Constructor {
  canSaveCredentials?: true;
  passwordMissing?: true;
  formId: bigint;
  botId: bigint;
  title: string;
  description: string;
  photo?: TypeWebDocument;
  invoice: TypeInvoice;
  providerId: bigint;
  url: string;
  nativeProvider?: string;
  nativeParams?: TypeDataJSON;
  additionalMethods?: Array<TypePaymentFormMethod>;
  savedInfo?: TypePaymentRequestedInfo;
  savedCredentials?: Array<TypePaymentSavedCredentials>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xa0058751;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["canSaveCredentials", "true", "flags.2?true"],
      ["passwordMissing", "true", "flags.3?true"],
      ["formId", "bigint", "long"],
      ["botId", "bigint", "long"],
      ["title", "string", "string"],
      ["description", "string", "string"],
      ["photo", TypeWebDocument, "flags.5?WebDocument"],
      ["invoice", TypeInvoice, "Invoice"],
      ["providerId", "bigint", "long"],
      ["url", "string", "string"],
      ["nativeProvider", "string", "flags.4?string"],
      ["nativeParams", TypeDataJSON, "flags.4?DataJSON"],
      [
        "additionalMethods",
        [TypePaymentFormMethod],
        "flags.6?Vector<PaymentFormMethod>",
      ],
      ["savedInfo", TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      [
        "savedCredentials",
        [TypePaymentSavedCredentials],
        "flags.1?Vector<PaymentSavedCredentials>",
      ],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.canSaveCredentials ?? null, "true", "flags.2?true"],
      [this.passwordMissing ?? null, "true", "flags.3?true"],
      [this.formId, "bigint", "long"],
      [this.botId, "bigint", "long"],
      [this.title, "string", "string"],
      [this.description, "string", "string"],
      [this.photo ?? null, TypeWebDocument, "flags.5?WebDocument"],
      [this.invoice, TypeInvoice, "Invoice"],
      [this.providerId, "bigint", "long"],
      [this.url, "string", "string"],
      [this.nativeProvider ?? null, "string", "flags.4?string"],
      [this.nativeParams ?? null, TypeDataJSON, "flags.4?DataJSON"],
      [
        this.additionalMethods ?? null,
        [TypePaymentFormMethod],
        "flags.6?Vector<PaymentFormMethod>",
      ],
      [
        this.savedInfo ?? null,
        TypePaymentRequestedInfo,
        "flags.0?PaymentRequestedInfo",
      ],
      [
        this.savedCredentials ?? null,
        [TypePaymentSavedCredentials],
        "flags.1?Vector<PaymentSavedCredentials>",
      ],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      canSaveCredentials?: true;
      passwordMissing?: true;
      formId: bigint;
      botId: bigint;
      title: string;
      description: string;
      photo?: TypeWebDocument;
      invoice: TypeInvoice;
      providerId: bigint;
      url: string;
      nativeProvider?: string;
      nativeParams?: TypeDataJSON;
      additionalMethods?: Array<TypePaymentFormMethod>;
      savedInfo?: TypePaymentRequestedInfo;
      savedCredentials?: Array<TypePaymentSavedCredentials>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.canSaveCredentials = params.canSaveCredentials;
    this.passwordMissing = params.passwordMissing;
    this.formId = params.formId;
    this.botId = params.botId;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.invoice = params.invoice;
    this.providerId = params.providerId;
    this.url = params.url;
    this.nativeProvider = params.nativeProvider;
    this.nativeParams = params.nativeParams;
    this.additionalMethods = params.additionalMethods;
    this.savedInfo = params.savedInfo;
    this.savedCredentials = params.savedCredentials;
    this.users = params.users;
  }
}

export class PaymentsValidatedRequestedInfo extends Constructor {
  id?: string;
  shippingOptions?: Array<TypeShippingOption>;

  protected get [id]() {
    return 0xd1451883;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "string", "flags.0?string"],
      [
        "shippingOptions",
        [TypeShippingOption],
        "flags.1?Vector<ShippingOption>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id ?? null, "string", "flags.0?string"],
      [
        this.shippingOptions ?? null,
        [TypeShippingOption],
        "flags.1?Vector<ShippingOption>",
      ],
    ];
  }

  constructor(
    params: { id?: string; shippingOptions?: Array<TypeShippingOption> },
  ) {
    super();
    this.id = params.id;
    this.shippingOptions = params.shippingOptions;
  }
}

export class PaymentsPaymentResult extends Constructor {
  updates: TypeUpdates;

  protected get [id]() {
    return 0x4e5f810d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["updates", TypeUpdates, "Updates"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.updates, TypeUpdates, "Updates"],
    ];
  }

  constructor(params: { updates: TypeUpdates }) {
    super();
    this.updates = params.updates;
  }
}

export class PaymentsPaymentVerificationNeeded
  extends TypePaymentsPaymentResult {
  url: string;

  protected get [id]() {
    return 0xd8411139;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class PaymentsPaymentReceipt extends Constructor {
  date: number;
  botId: bigint;
  providerId: bigint;
  title: string;
  description: string;
  photo?: TypeWebDocument;
  invoice: TypeInvoice;
  info?: TypePaymentRequestedInfo;
  shipping?: TypeShippingOption;
  tipAmount?: bigint;
  currency: string;
  totalAmount: bigint;
  credentialsTitle: string;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x70c4fe03;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["date", "number", "int"],
      ["botId", "bigint", "long"],
      ["providerId", "bigint", "long"],
      ["title", "string", "string"],
      ["description", "string", "string"],
      ["photo", TypeWebDocument, "flags.2?WebDocument"],
      ["invoice", TypeInvoice, "Invoice"],
      ["info", TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      ["shipping", TypeShippingOption, "flags.1?ShippingOption"],
      ["tipAmount", "bigint", "flags.3?long"],
      ["currency", "string", "string"],
      ["totalAmount", "bigint", "long"],
      ["credentialsTitle", "string", "string"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.date, "number", "int"],
      [this.botId, "bigint", "long"],
      [this.providerId, "bigint", "long"],
      [this.title, "string", "string"],
      [this.description, "string", "string"],
      [this.photo ?? null, TypeWebDocument, "flags.2?WebDocument"],
      [this.invoice, TypeInvoice, "Invoice"],
      [
        this.info ?? null,
        TypePaymentRequestedInfo,
        "flags.0?PaymentRequestedInfo",
      ],
      [this.shipping ?? null, TypeShippingOption, "flags.1?ShippingOption"],
      [this.tipAmount ?? null, "bigint", "flags.3?long"],
      [this.currency, "string", "string"],
      [this.totalAmount, "bigint", "long"],
      [this.credentialsTitle, "string", "string"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      date: number;
      botId: bigint;
      providerId: bigint;
      title: string;
      description: string;
      photo?: TypeWebDocument;
      invoice: TypeInvoice;
      info?: TypePaymentRequestedInfo;
      shipping?: TypeShippingOption;
      tipAmount?: bigint;
      currency: string;
      totalAmount: bigint;
      credentialsTitle: string;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.date = params.date;
    this.botId = params.botId;
    this.providerId = params.providerId;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.invoice = params.invoice;
    this.info = params.info;
    this.shipping = params.shipping;
    this.tipAmount = params.tipAmount;
    this.currency = params.currency;
    this.totalAmount = params.totalAmount;
    this.credentialsTitle = params.credentialsTitle;
    this.users = params.users;
  }
}

export class PaymentsSavedInfo extends Constructor {
  hasSavedCredentials?: true;
  savedInfo?: TypePaymentRequestedInfo;

  protected get [id]() {
    return 0xfb8fe43c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hasSavedCredentials", "true", "flags.1?true"],
      ["savedInfo", TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hasSavedCredentials ?? null, "true", "flags.1?true"],
      [
        this.savedInfo ?? null,
        TypePaymentRequestedInfo,
        "flags.0?PaymentRequestedInfo",
      ],
    ];
  }

  constructor(
    params: {
      hasSavedCredentials?: true;
      savedInfo?: TypePaymentRequestedInfo;
    },
  ) {
    super();
    this.hasSavedCredentials = params.hasSavedCredentials;
    this.savedInfo = params.savedInfo;
  }
}

export class InputPaymentCredentialsSaved extends TypeInputPaymentCredentials {
  id: string;
  tmpPassword: Uint8Array;

  protected get [id]() {
    return 0xc10eb2cf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "string", "string"],
      ["tmpPassword", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "string", "string"],
      [this.tmpPassword, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { id: string; tmpPassword: Uint8Array }) {
    super();
    this.id = params.id;
    this.tmpPassword = params.tmpPassword;
  }
}

export class InputPaymentCredentials extends Constructor {
  save?: true;
  data: TypeDataJSON;

  protected get [id]() {
    return 0x3417d728;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["save", "true", "flags.0?true"],
      ["data", TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.save ?? null, "true", "flags.0?true"],
      [this.data, TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { save?: true; data: TypeDataJSON }) {
    super();
    this.save = params.save;
    this.data = params.data;
  }
}

export class InputPaymentCredentialsApplePay
  extends TypeInputPaymentCredentials {
  paymentData: TypeDataJSON;

  protected get [id]() {
    return 0x0aa1c39f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["paymentData", TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.paymentData, TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { paymentData: TypeDataJSON }) {
    super();
    this.paymentData = params.paymentData;
  }
}

export class InputPaymentCredentialsGooglePay
  extends TypeInputPaymentCredentials {
  paymentToken: TypeDataJSON;

  protected get [id]() {
    return 0x8ac32801;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["paymentToken", TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.paymentToken, TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { paymentToken: TypeDataJSON }) {
    super();
    this.paymentToken = params.paymentToken;
  }
}

export class AccountTmpPassword extends Constructor {
  tmpPassword: Uint8Array;
  validUntil: number;

  protected get [id]() {
    return 0xdb64fd34;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["tmpPassword", Uint8Array, "bytes"],
      ["validUntil", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.tmpPassword, Uint8Array, "bytes"],
      [this.validUntil, "number", "int"],
    ];
  }

  constructor(params: { tmpPassword: Uint8Array; validUntil: number }) {
    super();
    this.tmpPassword = params.tmpPassword;
    this.validUntil = params.validUntil;
  }
}

export class ShippingOption extends Constructor {
  id: string;
  title: string;
  prices: Array<TypeLabeledPrice>;

  protected get [id]() {
    return 0xb6213cdf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "string", "string"],
      ["title", "string", "string"],
      ["prices", [TypeLabeledPrice], "Vector<LabeledPrice>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "string", "string"],
      [this.title, "string", "string"],
      [this.prices, [TypeLabeledPrice], "Vector<LabeledPrice>"],
    ];
  }

  constructor(
    params: { id: string; title: string; prices: Array<TypeLabeledPrice> },
  ) {
    super();
    this.id = params.id;
    this.title = params.title;
    this.prices = params.prices;
  }
}

export class InputStickerSetItem extends Constructor {
  document: TypeInputDocument;
  emoji: string;
  maskCoords?: TypeMaskCoords;
  keywords?: string;

  protected get [id]() {
    return 0x32da9e9c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["document", TypeInputDocument, "InputDocument"],
      ["emoji", "string", "string"],
      ["maskCoords", TypeMaskCoords, "flags.0?MaskCoords"],
      ["keywords", "string", "flags.1?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.document, TypeInputDocument, "InputDocument"],
      [this.emoji, "string", "string"],
      [this.maskCoords ?? null, TypeMaskCoords, "flags.0?MaskCoords"],
      [this.keywords ?? null, "string", "flags.1?string"],
    ];
  }

  constructor(
    params: {
      document: TypeInputDocument;
      emoji: string;
      maskCoords?: TypeMaskCoords;
      keywords?: string;
    },
  ) {
    super();
    this.document = params.document;
    this.emoji = params.emoji;
    this.maskCoords = params.maskCoords;
    this.keywords = params.keywords;
  }
}

export class InputPhoneCall extends Constructor {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x1e36fded;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class PhoneCallEmpty extends TypePhoneCall {
  id: bigint;

  protected get [id]() {
    return 0x5366c915;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
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
  accessHash: bigint;
  date: number;
  adminId: bigint;
  participantId: bigint;
  protocol: TypePhoneCallProtocol;
  receiveDate?: number;

  protected get [id]() {
    return 0xc5226f17;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.6?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["date", "number", "int"],
      ["adminId", "bigint", "long"],
      ["participantId", "bigint", "long"],
      ["protocol", TypePhoneCallProtocol, "PhoneCallProtocol"],
      ["receiveDate", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.6?true"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.date, "number", "int"],
      [this.adminId, "bigint", "long"],
      [this.participantId, "bigint", "long"],
      [this.protocol, TypePhoneCallProtocol, "PhoneCallProtocol"],
      [this.receiveDate ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(
    params: {
      video?: true;
      id: bigint;
      accessHash: bigint;
      date: number;
      adminId: bigint;
      participantId: bigint;
      protocol: TypePhoneCallProtocol;
      receiveDate?: number;
    },
  ) {
    super();
    this.video = params.video;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.date = params.date;
    this.adminId = params.adminId;
    this.participantId = params.participantId;
    this.protocol = params.protocol;
    this.receiveDate = params.receiveDate;
  }
}

export class PhoneCallRequested extends TypePhoneCall {
  video?: true;
  id: bigint;
  accessHash: bigint;
  date: number;
  adminId: bigint;
  participantId: bigint;
  gAHash: Uint8Array;
  protocol: TypePhoneCallProtocol;

  protected get [id]() {
    return 0x14b0ed0c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.6?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["date", "number", "int"],
      ["adminId", "bigint", "long"],
      ["participantId", "bigint", "long"],
      ["gAHash", Uint8Array, "bytes"],
      ["protocol", TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.6?true"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.date, "number", "int"],
      [this.adminId, "bigint", "long"],
      [this.participantId, "bigint", "long"],
      [this.gAHash, Uint8Array, "bytes"],
      [this.protocol, TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(
    params: {
      video?: true;
      id: bigint;
      accessHash: bigint;
      date: number;
      adminId: bigint;
      participantId: bigint;
      gAHash: Uint8Array;
      protocol: TypePhoneCallProtocol;
    },
  ) {
    super();
    this.video = params.video;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.date = params.date;
    this.adminId = params.adminId;
    this.participantId = params.participantId;
    this.gAHash = params.gAHash;
    this.protocol = params.protocol;
  }
}

export class PhoneCallAccepted extends TypePhoneCall {
  video?: true;
  id: bigint;
  accessHash: bigint;
  date: number;
  adminId: bigint;
  participantId: bigint;
  gB: Uint8Array;
  protocol: TypePhoneCallProtocol;

  protected get [id]() {
    return 0x3660c311;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["video", "true", "flags.6?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["date", "number", "int"],
      ["adminId", "bigint", "long"],
      ["participantId", "bigint", "long"],
      ["gB", Uint8Array, "bytes"],
      ["protocol", TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.video ?? null, "true", "flags.6?true"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.date, "number", "int"],
      [this.adminId, "bigint", "long"],
      [this.participantId, "bigint", "long"],
      [this.gB, Uint8Array, "bytes"],
      [this.protocol, TypePhoneCallProtocol, "PhoneCallProtocol"],
    ];
  }

  constructor(
    params: {
      video?: true;
      id: bigint;
      accessHash: bigint;
      date: number;
      adminId: bigint;
      participantId: bigint;
      gB: Uint8Array;
      protocol: TypePhoneCallProtocol;
    },
  ) {
    super();
    this.video = params.video;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.date = params.date;
    this.adminId = params.adminId;
    this.participantId = params.participantId;
    this.gB = params.gB;
    this.protocol = params.protocol;
  }
}

export class PhoneCall extends Constructor {
  p2pAllowed?: true;
  video?: true;
  id: bigint;
  accessHash: bigint;
  date: number;
  adminId: bigint;
  participantId: bigint;
  gAOrB: Uint8Array;
  keyFingerprint: bigint;
  protocol: TypePhoneCallProtocol;
  connections: Array<TypePhoneConnection>;
  startDate: number;

  protected get [id]() {
    return 0x967f7c67;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["p2pAllowed", "true", "flags.5?true"],
      ["video", "true", "flags.6?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["date", "number", "int"],
      ["adminId", "bigint", "long"],
      ["participantId", "bigint", "long"],
      ["gAOrB", Uint8Array, "bytes"],
      ["keyFingerprint", "bigint", "long"],
      ["protocol", TypePhoneCallProtocol, "PhoneCallProtocol"],
      ["connections", [TypePhoneConnection], "Vector<PhoneConnection>"],
      ["startDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.p2pAllowed ?? null, "true", "flags.5?true"],
      [this.video ?? null, "true", "flags.6?true"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.date, "number", "int"],
      [this.adminId, "bigint", "long"],
      [this.participantId, "bigint", "long"],
      [this.gAOrB, Uint8Array, "bytes"],
      [this.keyFingerprint, "bigint", "long"],
      [this.protocol, TypePhoneCallProtocol, "PhoneCallProtocol"],
      [this.connections, [TypePhoneConnection], "Vector<PhoneConnection>"],
      [this.startDate, "number", "int"],
    ];
  }

  constructor(
    params: {
      p2pAllowed?: true;
      video?: true;
      id: bigint;
      accessHash: bigint;
      date: number;
      adminId: bigint;
      participantId: bigint;
      gAOrB: Uint8Array;
      keyFingerprint: bigint;
      protocol: TypePhoneCallProtocol;
      connections: Array<TypePhoneConnection>;
      startDate: number;
    },
  ) {
    super();
    this.p2pAllowed = params.p2pAllowed;
    this.video = params.video;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.date = params.date;
    this.adminId = params.adminId;
    this.participantId = params.participantId;
    this.gAOrB = params.gAOrB;
    this.keyFingerprint = params.keyFingerprint;
    this.protocol = params.protocol;
    this.connections = params.connections;
    this.startDate = params.startDate;
  }
}

export class PhoneCallDiscarded extends TypePhoneCall {
  needRating?: true;
  needDebug?: true;
  video?: true;
  id: bigint;
  reason?: TypePhoneCallDiscardReason;
  duration?: number;

  protected get [id]() {
    return 0x50ca4de1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["needRating", "true", "flags.2?true"],
      ["needDebug", "true", "flags.3?true"],
      ["video", "true", "flags.6?true"],
      ["id", "bigint", "long"],
      ["reason", TypePhoneCallDiscardReason, "flags.0?PhoneCallDiscardReason"],
      ["duration", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.needRating ?? null, "true", "flags.2?true"],
      [this.needDebug ?? null, "true", "flags.3?true"],
      [this.video ?? null, "true", "flags.6?true"],
      [this.id, "bigint", "long"],
      [
        this.reason ?? null,
        TypePhoneCallDiscardReason,
        "flags.0?PhoneCallDiscardReason",
      ],
      [this.duration ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(
    params: {
      needRating?: true;
      needDebug?: true;
      video?: true;
      id: bigint;
      reason?: TypePhoneCallDiscardReason;
      duration?: number;
    },
  ) {
    super();
    this.needRating = params.needRating;
    this.needDebug = params.needDebug;
    this.video = params.video;
    this.id = params.id;
    this.reason = params.reason;
    this.duration = params.duration;
  }
}

export class PhoneConnection extends Constructor {
  tcp?: true;
  id: bigint;
  ip: string;
  ipv6: string;
  port: number;
  peerTag: Uint8Array;

  protected get [id]() {
    return 0x9cc123c7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["tcp", "true", "flags.0?true"],
      ["id", "bigint", "long"],
      ["ip", "string", "string"],
      ["ipv6", "string", "string"],
      ["port", "number", "int"],
      ["peerTag", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.tcp ?? null, "true", "flags.0?true"],
      [this.id, "bigint", "long"],
      [this.ip, "string", "string"],
      [this.ipv6, "string", "string"],
      [this.port, "number", "int"],
      [this.peerTag, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      tcp?: true;
      id: bigint;
      ip: string;
      ipv6: string;
      port: number;
      peerTag: Uint8Array;
    },
  ) {
    super();
    this.tcp = params.tcp;
    this.id = params.id;
    this.ip = params.ip;
    this.ipv6 = params.ipv6;
    this.port = params.port;
    this.peerTag = params.peerTag;
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

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["turn", "true", "flags.0?true"],
      ["stun", "true", "flags.1?true"],
      ["id", "bigint", "long"],
      ["ip", "string", "string"],
      ["ipv6", "string", "string"],
      ["port", "number", "int"],
      ["username", "string", "string"],
      ["password", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.turn ?? null, "true", "flags.0?true"],
      [this.stun ?? null, "true", "flags.1?true"],
      [this.id, "bigint", "long"],
      [this.ip, "string", "string"],
      [this.ipv6, "string", "string"],
      [this.port, "number", "int"],
      [this.username, "string", "string"],
      [this.password, "string", "string"],
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

export class PhoneCallProtocol extends Constructor {
  udpP2p?: true;
  udpReflector?: true;
  minLayer: number;
  maxLayer: number;
  libraryVersions: Array<string>;

  protected get [id]() {
    return 0xfc878fc8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["udpP2p", "true", "flags.0?true"],
      ["udpReflector", "true", "flags.1?true"],
      ["minLayer", "number", "int"],
      ["maxLayer", "number", "int"],
      ["libraryVersions", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.udpP2p ?? null, "true", "flags.0?true"],
      [this.udpReflector ?? null, "true", "flags.1?true"],
      [this.minLayer, "number", "int"],
      [this.maxLayer, "number", "int"],
      [this.libraryVersions, ["string"], "Vector<string>"],
    ];
  }

  constructor(
    params: {
      udpP2p?: true;
      udpReflector?: true;
      minLayer: number;
      maxLayer: number;
      libraryVersions: Array<string>;
    },
  ) {
    super();
    this.udpP2p = params.udpP2p;
    this.udpReflector = params.udpReflector;
    this.minLayer = params.minLayer;
    this.maxLayer = params.maxLayer;
    this.libraryVersions = params.libraryVersions;
  }
}

export class PhonePhoneCall extends Constructor {
  phoneCall: TypePhoneCall;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xec82e140;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneCall", TypePhoneCall, "PhoneCall"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneCall, TypePhoneCall, "PhoneCall"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { phoneCall: TypePhoneCall; users: Array<TypeUser> }) {
    super();
    this.phoneCall = params.phoneCall;
    this.users = params.users;
  }
}

export class UploadCdnFileReuploadNeeded extends TypeUploadCdnFile {
  requestToken: Uint8Array;

  protected get [id]() {
    return 0xeea8e46e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["requestToken", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.requestToken, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { requestToken: Uint8Array }) {
    super();
    this.requestToken = params.requestToken;
  }
}

export class UploadCdnFile extends Constructor {
  bytes: Uint8Array;

  protected get [id]() {
    return 0xa99fca4f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bytes", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bytes, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { bytes: Uint8Array }) {
    super();
    this.bytes = params.bytes;
  }
}

export class CdnPublicKey extends Constructor {
  dcId: number;
  publicKey: string;

  protected get [id]() {
    return 0xc982eaba;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dcId", "number", "int"],
      ["publicKey", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dcId, "number", "int"],
      [this.publicKey, "string", "string"],
    ];
  }

  constructor(params: { dcId: number; publicKey: string }) {
    super();
    this.dcId = params.dcId;
    this.publicKey = params.publicKey;
  }
}

export class CdnConfig extends Constructor {
  publicKeys: Array<TypeCdnPublicKey>;

  protected get [id]() {
    return 0x5725e40a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["publicKeys", [TypeCdnPublicKey], "Vector<CdnPublicKey>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.publicKeys, [TypeCdnPublicKey], "Vector<CdnPublicKey>"],
    ];
  }

  constructor(params: { publicKeys: Array<TypeCdnPublicKey> }) {
    super();
    this.publicKeys = params.publicKeys;
  }
}

export class LangPackString extends Constructor {
  key: string;
  value: string;

  protected get [id]() {
    return 0xcad181f6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", "string", "string"],
      ["value", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, "string", "string"],
      [this.value, "string", "string"],
    ];
  }

  constructor(params: { key: string; value: string }) {
    super();
    this.key = params.key;
    this.value = params.value;
  }
}

export class LangPackStringPluralized extends TypeLangPackString {
  key: string;
  zeroValue?: string;
  oneValue?: string;
  twoValue?: string;
  fewValue?: string;
  manyValue?: string;
  otherValue: string;

  protected get [id]() {
    return 0x6c47ac9f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["key", "string", "string"],
      ["zeroValue", "string", "flags.0?string"],
      ["oneValue", "string", "flags.1?string"],
      ["twoValue", "string", "flags.2?string"],
      ["fewValue", "string", "flags.3?string"],
      ["manyValue", "string", "flags.4?string"],
      ["otherValue", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.key, "string", "string"],
      [this.zeroValue ?? null, "string", "flags.0?string"],
      [this.oneValue ?? null, "string", "flags.1?string"],
      [this.twoValue ?? null, "string", "flags.2?string"],
      [this.fewValue ?? null, "string", "flags.3?string"],
      [this.manyValue ?? null, "string", "flags.4?string"],
      [this.otherValue, "string", "string"],
    ];
  }

  constructor(
    params: {
      key: string;
      zeroValue?: string;
      oneValue?: string;
      twoValue?: string;
      fewValue?: string;
      manyValue?: string;
      otherValue: string;
    },
  ) {
    super();
    this.key = params.key;
    this.zeroValue = params.zeroValue;
    this.oneValue = params.oneValue;
    this.twoValue = params.twoValue;
    this.fewValue = params.fewValue;
    this.manyValue = params.manyValue;
    this.otherValue = params.otherValue;
  }
}

export class LangPackStringDeleted extends TypeLangPackString {
  key: string;

  protected get [id]() {
    return 0x2979eeb2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, "string", "string"],
    ];
  }

  constructor(params: { key: string }) {
    super();
    this.key = params.key;
  }
}

export class LangPackDifference extends Constructor {
  langCode: string;
  fromVersion: number;
  version: number;
  strings: Array<TypeLangPackString>;

  protected get [id]() {
    return 0xf385c1f6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCode", "string", "string"],
      ["fromVersion", "number", "int"],
      ["version", "number", "int"],
      ["strings", [TypeLangPackString], "Vector<LangPackString>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCode, "string", "string"],
      [this.fromVersion, "number", "int"],
      [this.version, "number", "int"],
      [this.strings, [TypeLangPackString], "Vector<LangPackString>"],
    ];
  }

  constructor(
    params: {
      langCode: string;
      fromVersion: number;
      version: number;
      strings: Array<TypeLangPackString>;
    },
  ) {
    super();
    this.langCode = params.langCode;
    this.fromVersion = params.fromVersion;
    this.version = params.version;
    this.strings = params.strings;
  }
}

export class LangPackLanguage extends Constructor {
  official?: true;
  rtl?: true;
  beta?: true;
  name: string;
  nativeName: string;
  langCode: string;
  baseLangCode?: string;
  pluralCode: string;
  stringsCount: number;
  translatedCount: number;
  translationsUrl: string;

  protected get [id]() {
    return 0xeeca5ce3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["official", "true", "flags.0?true"],
      ["rtl", "true", "flags.2?true"],
      ["beta", "true", "flags.3?true"],
      ["name", "string", "string"],
      ["nativeName", "string", "string"],
      ["langCode", "string", "string"],
      ["baseLangCode", "string", "flags.1?string"],
      ["pluralCode", "string", "string"],
      ["stringsCount", "number", "int"],
      ["translatedCount", "number", "int"],
      ["translationsUrl", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.official ?? null, "true", "flags.0?true"],
      [this.rtl ?? null, "true", "flags.2?true"],
      [this.beta ?? null, "true", "flags.3?true"],
      [this.name, "string", "string"],
      [this.nativeName, "string", "string"],
      [this.langCode, "string", "string"],
      [this.baseLangCode ?? null, "string", "flags.1?string"],
      [this.pluralCode, "string", "string"],
      [this.stringsCount, "number", "int"],
      [this.translatedCount, "number", "int"],
      [this.translationsUrl, "string", "string"],
    ];
  }

  constructor(
    params: {
      official?: true;
      rtl?: true;
      beta?: true;
      name: string;
      nativeName: string;
      langCode: string;
      baseLangCode?: string;
      pluralCode: string;
      stringsCount: number;
      translatedCount: number;
      translationsUrl: string;
    },
  ) {
    super();
    this.official = params.official;
    this.rtl = params.rtl;
    this.beta = params.beta;
    this.name = params.name;
    this.nativeName = params.nativeName;
    this.langCode = params.langCode;
    this.baseLangCode = params.baseLangCode;
    this.pluralCode = params.pluralCode;
    this.stringsCount = params.stringsCount;
    this.translatedCount = params.translatedCount;
    this.translationsUrl = params.translationsUrl;
  }
}

export class ChannelAdminLogEventActionChangeTitle
  extends TypeChannelAdminLogEventAction {
  prevValue: string;
  newValue: string;

  protected get [id]() {
    return 0xe6dfb825;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", "string", "string"],
      ["newValue", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, "string", "string"],
      [this.newValue, "string", "string"],
    ];
  }

  constructor(params: { prevValue: string; newValue: string }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionChangeAbout
  extends TypeChannelAdminLogEventAction {
  prevValue: string;
  newValue: string;

  protected get [id]() {
    return 0x55188a2e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", "string", "string"],
      ["newValue", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, "string", "string"],
      [this.newValue, "string", "string"],
    ];
  }

  constructor(params: { prevValue: string; newValue: string }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionChangeUsername
  extends TypeChannelAdminLogEventAction {
  prevValue: string;
  newValue: string;

  protected get [id]() {
    return 0x6a4afc38;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", "string", "string"],
      ["newValue", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, "string", "string"],
      [this.newValue, "string", "string"],
    ];
  }

  constructor(params: { prevValue: string; newValue: string }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionChangePhoto
  extends TypeChannelAdminLogEventAction {
  prevPhoto: TypePhoto;
  newPhoto: TypePhoto;

  protected get [id]() {
    return 0x434bd2af;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevPhoto", TypePhoto, "Photo"],
      ["newPhoto", TypePhoto, "Photo"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevPhoto, TypePhoto, "Photo"],
      [this.newPhoto, TypePhoto, "Photo"],
    ];
  }

  constructor(params: { prevPhoto: TypePhoto; newPhoto: TypePhoto }) {
    super();
    this.prevPhoto = params.prevPhoto;
    this.newPhoto = params.newPhoto;
  }
}

export class ChannelAdminLogEventActionToggleInvites
  extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x1b7907ae;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newValue", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newValue, "boolean", "Bool"],
    ];
  }

  constructor(params: { newValue: boolean }) {
    super();
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionToggleSignatures
  extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x26ae0971;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newValue", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newValue, "boolean", "Bool"],
    ];
  }

  constructor(params: { newValue: boolean }) {
    super();
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionUpdatePinned
  extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0xe9e82c18;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
    ];
  }

  constructor(params: { message: TypeMessage }) {
    super();
    this.message = params.message;
  }
}

export class ChannelAdminLogEventActionEditMessage
  extends TypeChannelAdminLogEventAction {
  prevMessage: TypeMessage;
  newMessage: TypeMessage;

  protected get [id]() {
    return 0x709b2405;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevMessage", TypeMessage, "Message"],
      ["newMessage", TypeMessage, "Message"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevMessage, TypeMessage, "Message"],
      [this.newMessage, TypeMessage, "Message"],
    ];
  }

  constructor(params: { prevMessage: TypeMessage; newMessage: TypeMessage }) {
    super();
    this.prevMessage = params.prevMessage;
    this.newMessage = params.newMessage;
  }
}

export class ChannelAdminLogEventActionDeleteMessage
  extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x42e047bb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["participant", TypeChannelParticipant, "ChannelParticipant"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.participant, TypeChannelParticipant, "ChannelParticipant"],
    ];
  }

  constructor(params: { participant: TypeChannelParticipant }) {
    super();
    this.participant = params.participant;
  }
}

export class ChannelAdminLogEventActionParticipantToggleBan
  extends TypeChannelAdminLogEventAction {
  prevParticipant: TypeChannelParticipant;
  newParticipant: TypeChannelParticipant;

  protected get [id]() {
    return 0xe6d83d7e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevParticipant", TypeChannelParticipant, "ChannelParticipant"],
      ["newParticipant", TypeChannelParticipant, "ChannelParticipant"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevParticipant, TypeChannelParticipant, "ChannelParticipant"],
      [this.newParticipant, TypeChannelParticipant, "ChannelParticipant"],
    ];
  }

  constructor(
    params: {
      prevParticipant: TypeChannelParticipant;
      newParticipant: TypeChannelParticipant;
    },
  ) {
    super();
    this.prevParticipant = params.prevParticipant;
    this.newParticipant = params.newParticipant;
  }
}

export class ChannelAdminLogEventActionParticipantToggleAdmin
  extends TypeChannelAdminLogEventAction {
  prevParticipant: TypeChannelParticipant;
  newParticipant: TypeChannelParticipant;

  protected get [id]() {
    return 0xd5676710;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevParticipant", TypeChannelParticipant, "ChannelParticipant"],
      ["newParticipant", TypeChannelParticipant, "ChannelParticipant"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevParticipant, TypeChannelParticipant, "ChannelParticipant"],
      [this.newParticipant, TypeChannelParticipant, "ChannelParticipant"],
    ];
  }

  constructor(
    params: {
      prevParticipant: TypeChannelParticipant;
      newParticipant: TypeChannelParticipant;
    },
  ) {
    super();
    this.prevParticipant = params.prevParticipant;
    this.newParticipant = params.newParticipant;
  }
}

export class ChannelAdminLogEventActionChangeStickerSet
  extends TypeChannelAdminLogEventAction {
  prevStickerset: TypeInputStickerSet;
  newStickerset: TypeInputStickerSet;

  protected get [id]() {
    return 0xb1c3caa7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevStickerset", TypeInputStickerSet, "InputStickerSet"],
      ["newStickerset", TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevStickerset, TypeInputStickerSet, "InputStickerSet"],
      [this.newStickerset, TypeInputStickerSet, "InputStickerSet"],
    ];
  }

  constructor(
    params: {
      prevStickerset: TypeInputStickerSet;
      newStickerset: TypeInputStickerSet;
    },
  ) {
    super();
    this.prevStickerset = params.prevStickerset;
    this.newStickerset = params.newStickerset;
  }
}

export class ChannelAdminLogEventActionTogglePreHistoryHidden
  extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x5f5c95f1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newValue", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newValue, "boolean", "Bool"],
    ];
  }

  constructor(params: { newValue: boolean }) {
    super();
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionDefaultBannedRights
  extends TypeChannelAdminLogEventAction {
  prevBannedRights: TypeChatBannedRights;
  newBannedRights: TypeChatBannedRights;

  protected get [id]() {
    return 0x2df5fc0a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevBannedRights", TypeChatBannedRights, "ChatBannedRights"],
      ["newBannedRights", TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevBannedRights, TypeChatBannedRights, "ChatBannedRights"],
      [this.newBannedRights, TypeChatBannedRights, "ChatBannedRights"],
    ];
  }

  constructor(
    params: {
      prevBannedRights: TypeChatBannedRights;
      newBannedRights: TypeChatBannedRights;
    },
  ) {
    super();
    this.prevBannedRights = params.prevBannedRights;
    this.newBannedRights = params.newBannedRights;
  }
}

export class ChannelAdminLogEventActionStopPoll
  extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x8f079643;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
    ];
  }

  constructor(params: { message: TypeMessage }) {
    super();
    this.message = params.message;
  }
}

export class ChannelAdminLogEventActionChangeLinkedChat
  extends TypeChannelAdminLogEventAction {
  prevValue: bigint;
  newValue: bigint;

  protected get [id]() {
    return 0x050c7ac8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", "bigint", "long"],
      ["newValue", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, "bigint", "long"],
      [this.newValue, "bigint", "long"],
    ];
  }

  constructor(params: { prevValue: bigint; newValue: bigint }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionChangeLocation
  extends TypeChannelAdminLogEventAction {
  prevValue: TypeChannelLocation;
  newValue: TypeChannelLocation;

  protected get [id]() {
    return 0x0e6b76ae;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", TypeChannelLocation, "ChannelLocation"],
      ["newValue", TypeChannelLocation, "ChannelLocation"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, TypeChannelLocation, "ChannelLocation"],
      [this.newValue, TypeChannelLocation, "ChannelLocation"],
    ];
  }

  constructor(
    params: { prevValue: TypeChannelLocation; newValue: TypeChannelLocation },
  ) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionToggleSlowMode
  extends TypeChannelAdminLogEventAction {
  prevValue: number;
  newValue: number;

  protected get [id]() {
    return 0x53909779;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", "number", "int"],
      ["newValue", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, "number", "int"],
      [this.newValue, "number", "int"],
    ];
  }

  constructor(params: { prevValue: number; newValue: number }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionStartGroupCall
  extends TypeChannelAdminLogEventAction {
  call: TypeInputGroupCall;

  protected get [id]() {
    return 0x23209745;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, TypeInputGroupCall, "InputGroupCall"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["call", TypeInputGroupCall, "InputGroupCall"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, TypeInputGroupCall, "InputGroupCall"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["participant", TypeGroupCallParticipant, "GroupCallParticipant"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.participant, TypeGroupCallParticipant, "GroupCallParticipant"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["participant", TypeGroupCallParticipant, "GroupCallParticipant"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.participant, TypeGroupCallParticipant, "GroupCallParticipant"],
    ];
  }

  constructor(params: { participant: TypeGroupCallParticipant }) {
    super();
    this.participant = params.participant;
  }
}

export class ChannelAdminLogEventActionToggleGroupCallSetting
  extends TypeChannelAdminLogEventAction {
  joinMuted: boolean;

  protected get [id]() {
    return 0x56d6a247;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["joinMuted", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.joinMuted, "boolean", "Bool"],
    ];
  }

  constructor(params: { joinMuted: boolean }) {
    super();
    this.joinMuted = params.joinMuted;
  }
}

export class ChannelAdminLogEventActionParticipantJoinByInvite
  extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;

  protected get [id]() {
    return 0x5cdada77;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["invite", TypeExportedChatInvite, "ExportedChatInvite"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invite, TypeExportedChatInvite, "ExportedChatInvite"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["invite", TypeExportedChatInvite, "ExportedChatInvite"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invite, TypeExportedChatInvite, "ExportedChatInvite"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["invite", TypeExportedChatInvite, "ExportedChatInvite"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invite, TypeExportedChatInvite, "ExportedChatInvite"],
    ];
  }

  constructor(params: { invite: TypeExportedChatInvite }) {
    super();
    this.invite = params.invite;
  }
}

export class ChannelAdminLogEventActionExportedInviteEdit
  extends TypeChannelAdminLogEventAction {
  prevInvite: TypeExportedChatInvite;
  newInvite: TypeExportedChatInvite;

  protected get [id]() {
    return 0xe90ebb59;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevInvite", TypeExportedChatInvite, "ExportedChatInvite"],
      ["newInvite", TypeExportedChatInvite, "ExportedChatInvite"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevInvite, TypeExportedChatInvite, "ExportedChatInvite"],
      [this.newInvite, TypeExportedChatInvite, "ExportedChatInvite"],
    ];
  }

  constructor(
    params: {
      prevInvite: TypeExportedChatInvite;
      newInvite: TypeExportedChatInvite;
    },
  ) {
    super();
    this.prevInvite = params.prevInvite;
    this.newInvite = params.newInvite;
  }
}

export class ChannelAdminLogEventActionParticipantVolume
  extends TypeChannelAdminLogEventAction {
  participant: TypeGroupCallParticipant;

  protected get [id]() {
    return 0x3e7f6847;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["participant", TypeGroupCallParticipant, "GroupCallParticipant"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.participant, TypeGroupCallParticipant, "GroupCallParticipant"],
    ];
  }

  constructor(params: { participant: TypeGroupCallParticipant }) {
    super();
    this.participant = params.participant;
  }
}

export class ChannelAdminLogEventActionChangeHistoryTTL
  extends TypeChannelAdminLogEventAction {
  prevValue: number;
  newValue: number;

  protected get [id]() {
    return 0x6e941a38;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", "number", "int"],
      ["newValue", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, "number", "int"],
      [this.newValue, "number", "int"],
    ];
  }

  constructor(params: { prevValue: number; newValue: number }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionParticipantJoinByRequest
  extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;
  approvedBy: bigint;

  protected get [id]() {
    return 0xafb6144a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["invite", TypeExportedChatInvite, "ExportedChatInvite"],
      ["approvedBy", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invite, TypeExportedChatInvite, "ExportedChatInvite"],
      [this.approvedBy, "bigint", "long"],
    ];
  }

  constructor(params: { invite: TypeExportedChatInvite; approvedBy: bigint }) {
    super();
    this.invite = params.invite;
    this.approvedBy = params.approvedBy;
  }
}

export class ChannelAdminLogEventActionToggleNoForwards
  extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0xcb2ac766;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newValue", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newValue, "boolean", "Bool"],
    ];
  }

  constructor(params: { newValue: boolean }) {
    super();
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionSendMessage
  extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x278f2868;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", TypeMessage, "Message"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, TypeMessage, "Message"],
    ];
  }

  constructor(params: { message: TypeMessage }) {
    super();
    this.message = params.message;
  }
}

export class ChannelAdminLogEventActionChangeAvailableReactions
  extends TypeChannelAdminLogEventAction {
  prevValue: TypeChatReactions;
  newValue: TypeChatReactions;

  protected get [id]() {
    return 0xbe4e0ef8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", TypeChatReactions, "ChatReactions"],
      ["newValue", TypeChatReactions, "ChatReactions"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, TypeChatReactions, "ChatReactions"],
      [this.newValue, TypeChatReactions, "ChatReactions"],
    ];
  }

  constructor(
    params: { prevValue: TypeChatReactions; newValue: TypeChatReactions },
  ) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionChangeUsernames
  extends TypeChannelAdminLogEventAction {
  prevValue: Array<string>;
  newValue: Array<string>;

  protected get [id]() {
    return 0xf04fb3a9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevValue", ["string"], "Vector<string>"],
      ["newValue", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevValue, ["string"], "Vector<string>"],
      [this.newValue, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { prevValue: Array<string>; newValue: Array<string> }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionToggleForum
  extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x02cc6383;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newValue", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newValue, "boolean", "Bool"],
    ];
  }

  constructor(params: { newValue: boolean }) {
    super();
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionCreateTopic
  extends TypeChannelAdminLogEventAction {
  topic: TypeForumTopic;

  protected get [id]() {
    return 0x58707d28;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["topic", TypeForumTopic, "ForumTopic"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.topic, TypeForumTopic, "ForumTopic"],
    ];
  }

  constructor(params: { topic: TypeForumTopic }) {
    super();
    this.topic = params.topic;
  }
}

export class ChannelAdminLogEventActionEditTopic
  extends TypeChannelAdminLogEventAction {
  prevTopic: TypeForumTopic;
  newTopic: TypeForumTopic;

  protected get [id]() {
    return 0xf06fe208;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["prevTopic", TypeForumTopic, "ForumTopic"],
      ["newTopic", TypeForumTopic, "ForumTopic"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.prevTopic, TypeForumTopic, "ForumTopic"],
      [this.newTopic, TypeForumTopic, "ForumTopic"],
    ];
  }

  constructor(params: { prevTopic: TypeForumTopic; newTopic: TypeForumTopic }) {
    super();
    this.prevTopic = params.prevTopic;
    this.newTopic = params.newTopic;
  }
}

export class ChannelAdminLogEventActionDeleteTopic
  extends TypeChannelAdminLogEventAction {
  topic: TypeForumTopic;

  protected get [id]() {
    return 0xae168909;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["topic", TypeForumTopic, "ForumTopic"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.topic, TypeForumTopic, "ForumTopic"],
    ];
  }

  constructor(params: { topic: TypeForumTopic }) {
    super();
    this.topic = params.topic;
  }
}

export class ChannelAdminLogEventActionPinTopic
  extends TypeChannelAdminLogEventAction {
  prevTopic?: TypeForumTopic;
  newTopic?: TypeForumTopic;

  protected get [id]() {
    return 0x5d8d353b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["prevTopic", TypeForumTopic, "flags.0?ForumTopic"],
      ["newTopic", TypeForumTopic, "flags.1?ForumTopic"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.prevTopic ?? null, TypeForumTopic, "flags.0?ForumTopic"],
      [this.newTopic ?? null, TypeForumTopic, "flags.1?ForumTopic"],
    ];
  }

  constructor(
    params: { prevTopic?: TypeForumTopic; newTopic?: TypeForumTopic },
  ) {
    super();
    this.prevTopic = params.prevTopic;
    this.newTopic = params.newTopic;
  }
}

export class ChannelAdminLogEventActionToggleAntiSpam
  extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x64f36dfc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newValue", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newValue, "boolean", "Bool"],
    ];
  }

  constructor(params: { newValue: boolean }) {
    super();
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEvent extends Constructor {
  id: bigint;
  date: number;
  userId: bigint;
  action: TypeChannelAdminLogEventAction;

  protected get [id]() {
    return 0x1fad68cd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["date", "number", "int"],
      ["userId", "bigint", "long"],
      ["action", TypeChannelAdminLogEventAction, "ChannelAdminLogEventAction"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.date, "number", "int"],
      [this.userId, "bigint", "long"],
      [
        this.action,
        TypeChannelAdminLogEventAction,
        "ChannelAdminLogEventAction",
      ],
    ];
  }

  constructor(
    params: {
      id: bigint;
      date: number;
      userId: bigint;
      action: TypeChannelAdminLogEventAction;
    },
  ) {
    super();
    this.id = params.id;
    this.date = params.date;
    this.userId = params.userId;
    this.action = params.action;
  }
}

export class ChannelsAdminLogResults extends Constructor {
  events: Array<TypeChannelAdminLogEvent>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xed8af74d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["events", [TypeChannelAdminLogEvent], "Vector<ChannelAdminLogEvent>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.events, [TypeChannelAdminLogEvent], "Vector<ChannelAdminLogEvent>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      events: Array<TypeChannelAdminLogEvent>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.events = params.events;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChannelAdminLogEventsFilter extends Constructor {
  join?: true;
  leave?: true;
  invite?: true;
  ban?: true;
  unban?: true;
  kick?: true;
  unkick?: true;
  promote?: true;
  demote?: true;
  info?: true;
  settings?: true;
  pinned?: true;
  edit?: true;
  delete?: true;
  groupCall?: true;
  invites?: true;
  send?: true;
  forums?: true;

  protected get [id]() {
    return 0xea107ae4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["join", "true", "flags.0?true"],
      ["leave", "true", "flags.1?true"],
      ["invite", "true", "flags.2?true"],
      ["ban", "true", "flags.3?true"],
      ["unban", "true", "flags.4?true"],
      ["kick", "true", "flags.5?true"],
      ["unkick", "true", "flags.6?true"],
      ["promote", "true", "flags.7?true"],
      ["demote", "true", "flags.8?true"],
      ["info", "true", "flags.9?true"],
      ["settings", "true", "flags.10?true"],
      ["pinned", "true", "flags.11?true"],
      ["edit", "true", "flags.12?true"],
      ["delete", "true", "flags.13?true"],
      ["groupCall", "true", "flags.14?true"],
      ["invites", "true", "flags.15?true"],
      ["send", "true", "flags.16?true"],
      ["forums", "true", "flags.17?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.join ?? null, "true", "flags.0?true"],
      [this.leave ?? null, "true", "flags.1?true"],
      [this.invite ?? null, "true", "flags.2?true"],
      [this.ban ?? null, "true", "flags.3?true"],
      [this.unban ?? null, "true", "flags.4?true"],
      [this.kick ?? null, "true", "flags.5?true"],
      [this.unkick ?? null, "true", "flags.6?true"],
      [this.promote ?? null, "true", "flags.7?true"],
      [this.demote ?? null, "true", "flags.8?true"],
      [this.info ?? null, "true", "flags.9?true"],
      [this.settings ?? null, "true", "flags.10?true"],
      [this.pinned ?? null, "true", "flags.11?true"],
      [this.edit ?? null, "true", "flags.12?true"],
      [this.delete ?? null, "true", "flags.13?true"],
      [this.groupCall ?? null, "true", "flags.14?true"],
      [this.invites ?? null, "true", "flags.15?true"],
      [this.send ?? null, "true", "flags.16?true"],
      [this.forums ?? null, "true", "flags.17?true"],
    ];
  }

  constructor(
    params: {
      join?: true;
      leave?: true;
      invite?: true;
      ban?: true;
      unban?: true;
      kick?: true;
      unkick?: true;
      promote?: true;
      demote?: true;
      info?: true;
      settings?: true;
      pinned?: true;
      edit?: true;
      delete?: true;
      groupCall?: true;
      invites?: true;
      send?: true;
      forums?: true;
    },
  ) {
    super();
    this.join = params.join;
    this.leave = params.leave;
    this.invite = params.invite;
    this.ban = params.ban;
    this.unban = params.unban;
    this.kick = params.kick;
    this.unkick = params.unkick;
    this.promote = params.promote;
    this.demote = params.demote;
    this.info = params.info;
    this.settings = params.settings;
    this.pinned = params.pinned;
    this.edit = params.edit;
    this.delete = params.delete;
    this.groupCall = params.groupCall;
    this.invites = params.invites;
    this.send = params.send;
    this.forums = params.forums;
  }
}

export class PopularContact extends Constructor {
  clientId: bigint;
  importers: number;

  protected get [id]() {
    return 0x5ce14175;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["clientId", "bigint", "long"],
      ["importers", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.clientId, "bigint", "long"],
      [this.importers, "number", "int"],
    ];
  }

  constructor(params: { clientId: bigint; importers: number }) {
    super();
    this.clientId = params.clientId;
    this.importers = params.importers;
  }
}

export class MessagesFavedStickersNotModified
  extends TypeMessagesFavedStickers {
  protected get [id]() {
    return 0x9e8fa6d3;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesFavedStickers extends Constructor {
  hash: bigint;
  packs: Array<TypeStickerPack>;
  stickers: Array<TypeDocument>;

  protected get [id]() {
    return 0x2cb51097;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["packs", [TypeStickerPack], "Vector<StickerPack>"],
      ["stickers", [TypeDocument], "Vector<Document>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.packs, [TypeStickerPack], "Vector<StickerPack>"],
      [this.stickers, [TypeDocument], "Vector<Document>"],
    ];
  }

  constructor(
    params: {
      hash: bigint;
      packs: Array<TypeStickerPack>;
      stickers: Array<TypeDocument>;
    },
  ) {
    super();
    this.hash = params.hash;
    this.packs = params.packs;
    this.stickers = params.stickers;
  }
}

export class RecentMeUrlUnknown extends TypeRecentMeUrl {
  url: string;

  protected get [id]() {
    return 0x46e1d13d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class RecentMeUrlUser extends TypeRecentMeUrl {
  url: string;
  userId: bigint;

  protected get [id]() {
    return 0xb92c09e2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["userId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.userId, "bigint", "long"],
    ];
  }

  constructor(params: { url: string; userId: bigint }) {
    super();
    this.url = params.url;
    this.userId = params.userId;
  }
}

export class RecentMeUrlChat extends TypeRecentMeUrl {
  url: string;
  chatId: bigint;

  protected get [id]() {
    return 0xb2da71d2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["chatId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.chatId, "bigint", "long"],
    ];
  }

  constructor(params: { url: string; chatId: bigint }) {
    super();
    this.url = params.url;
    this.chatId = params.chatId;
  }
}

export class RecentMeUrlChatInvite extends TypeRecentMeUrl {
  url: string;
  chatInvite: TypeChatInvite;

  protected get [id]() {
    return 0xeb49081d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["chatInvite", TypeChatInvite, "ChatInvite"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.chatInvite, TypeChatInvite, "ChatInvite"],
    ];
  }

  constructor(params: { url: string; chatInvite: TypeChatInvite }) {
    super();
    this.url = params.url;
    this.chatInvite = params.chatInvite;
  }
}

export class RecentMeUrlStickerSet extends TypeRecentMeUrl {
  url: string;
  set: TypeStickerSetCovered;

  protected get [id]() {
    return 0xbc0a57dc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["set", TypeStickerSetCovered, "StickerSetCovered"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.set, TypeStickerSetCovered, "StickerSetCovered"],
    ];
  }

  constructor(params: { url: string; set: TypeStickerSetCovered }) {
    super();
    this.url = params.url;
    this.set = params.set;
  }
}

export class HelpRecentMeUrls extends Constructor {
  urls: Array<TypeRecentMeUrl>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x0e0310d7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["urls", [TypeRecentMeUrl], "Vector<RecentMeUrl>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.urls, [TypeRecentMeUrl], "Vector<RecentMeUrl>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      urls: Array<TypeRecentMeUrl>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.urls = params.urls;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class InputSingleMedia extends Constructor {
  media: TypeInputMedia;
  randomId: bigint;
  message: string;
  entities?: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x1cc6e91f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["media", TypeInputMedia, "InputMedia"],
      ["randomId", "bigint", "long"],
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "flags.0?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.media, TypeInputMedia, "InputMedia"],
      [this.randomId, "bigint", "long"],
      [this.message, "string", "string"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.0?Vector<MessageEntity>",
      ],
    ];
  }

  constructor(
    params: {
      media: TypeInputMedia;
      randomId: bigint;
      message: string;
      entities?: Array<TypeMessageEntity>;
    },
  ) {
    super();
    this.media = params.media;
    this.randomId = params.randomId;
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class WebAuthorization extends Constructor {
  hash: bigint;
  botId: bigint;
  domain: string;
  browser: string;
  platform: string;
  dateCreated: number;
  dateActive: number;
  ip: string;
  region: string;

  protected get [id]() {
    return 0xa6f8f452;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["botId", "bigint", "long"],
      ["domain", "string", "string"],
      ["browser", "string", "string"],
      ["platform", "string", "string"],
      ["dateCreated", "number", "int"],
      ["dateActive", "number", "int"],
      ["ip", "string", "string"],
      ["region", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.botId, "bigint", "long"],
      [this.domain, "string", "string"],
      [this.browser, "string", "string"],
      [this.platform, "string", "string"],
      [this.dateCreated, "number", "int"],
      [this.dateActive, "number", "int"],
      [this.ip, "string", "string"],
      [this.region, "string", "string"],
    ];
  }

  constructor(
    params: {
      hash: bigint;
      botId: bigint;
      domain: string;
      browser: string;
      platform: string;
      dateCreated: number;
      dateActive: number;
      ip: string;
      region: string;
    },
  ) {
    super();
    this.hash = params.hash;
    this.botId = params.botId;
    this.domain = params.domain;
    this.browser = params.browser;
    this.platform = params.platform;
    this.dateCreated = params.dateCreated;
    this.dateActive = params.dateActive;
    this.ip = params.ip;
    this.region = params.region;
  }
}

export class AccountWebAuthorizations extends Constructor {
  authorizations: Array<TypeWebAuthorization>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xed56c9fc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["authorizations", [TypeWebAuthorization], "Vector<WebAuthorization>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.authorizations, [TypeWebAuthorization], "Vector<WebAuthorization>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      authorizations: Array<TypeWebAuthorization>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.authorizations = params.authorizations;
    this.users = params.users;
  }
}

export class InputMessageID extends TypeInputMessage {
  id: number;

  protected get [id]() {
    return 0xa676a322;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputMessageCallbackQuery extends TypeInputMessage {
  id: number;
  queryId: bigint;

  protected get [id]() {
    return 0xacfa1a7e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
      ["queryId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
      [this.queryId, "bigint", "long"],
    ];
  }

  constructor(params: { id: number; queryId: bigint }) {
    super();
    this.id = params.id;
    this.queryId = params.queryId;
  }
}

export class InputDialogPeer extends Constructor {
  peer: TypeInputPeer;

  protected get [id]() {
    return 0xfcaafeb7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class InputDialogPeerFolder extends TypeInputDialogPeer {
  folderId: number;

  protected get [id]() {
    return 0x64600527;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["folderId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.folderId, "number", "int"],
    ];
  }

  constructor(params: { folderId: number }) {
    super();
    this.folderId = params.folderId;
  }
}

export class DialogPeer extends Constructor {
  peer: TypePeer;

  protected get [id]() {
    return 0xe56dbf05;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
    ];
  }

  constructor(params: { peer: TypePeer }) {
    super();
    this.peer = params.peer;
  }
}

export class DialogPeerFolder extends TypeDialogPeer {
  folderId: number;

  protected get [id]() {
    return 0x514519e2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["folderId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.folderId, "number", "int"],
    ];
  }

  constructor(params: { folderId: number }) {
    super();
    this.folderId = params.folderId;
  }
}

export class MessagesFoundStickerSetsNotModified
  extends TypeMessagesFoundStickerSets {
  protected get [id]() {
    return 0x0d54b65d;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesFoundStickerSets extends Constructor {
  hash: bigint;
  sets: Array<TypeStickerSetCovered>;

  protected get [id]() {
    return 0x8af09dd2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["sets", [TypeStickerSetCovered], "Vector<StickerSetCovered>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.sets, [TypeStickerSetCovered], "Vector<StickerSetCovered>"],
    ];
  }

  constructor(params: { hash: bigint; sets: Array<TypeStickerSetCovered> }) {
    super();
    this.hash = params.hash;
    this.sets = params.sets;
  }
}

export class FileHash extends Constructor {
  offset: bigint;
  limit: number;
  hash: Uint8Array;

  protected get [id]() {
    return 0xf39b035c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["offset", "bigint", "long"],
      ["limit", "number", "int"],
      ["hash", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.offset, "bigint", "long"],
      [this.limit, "number", "int"],
      [this.hash, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { offset: bigint; limit: number; hash: Uint8Array }) {
    super();
    this.offset = params.offset;
    this.limit = params.limit;
    this.hash = params.hash;
  }
}

export class InputClientProxy extends Constructor {
  address: string;
  port: number;

  protected get [id]() {
    return 0x75588b3f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["address", "string", "string"],
      ["port", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.address, "string", "string"],
      [this.port, "number", "int"],
    ];
  }

  constructor(params: { address: string; port: number }) {
    super();
    this.address = params.address;
    this.port = params.port;
  }
}

export class HelpTermsOfServiceUpdateEmpty
  extends TypeHelpTermsOfServiceUpdate {
  expires: number;

  protected get [id]() {
    return 0xe3309f7f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["expires", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.expires, "number", "int"],
    ];
  }

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class HelpTermsOfServiceUpdate extends Constructor {
  expires: number;
  termsOfService: TypeHelpTermsOfService;

  protected get [id]() {
    return 0x28ecf961;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["expires", "number", "int"],
      ["termsOfService", TypeHelpTermsOfService, "help.TermsOfService"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.expires, "number", "int"],
      [this.termsOfService, TypeHelpTermsOfService, "help.TermsOfService"],
    ];
  }

  constructor(
    params: { expires: number; termsOfService: TypeHelpTermsOfService },
  ) {
    super();
    this.expires = params.expires;
    this.termsOfService = params.termsOfService;
  }
}

export class InputSecureFileUploaded extends TypeInputSecureFile {
  id: bigint;
  parts: number;
  md5Checksum: string;
  fileHash: Uint8Array;
  secret: Uint8Array;

  protected get [id]() {
    return 0x3334b0f0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["parts", "number", "int"],
      ["md5Checksum", "string", "string"],
      ["fileHash", Uint8Array, "bytes"],
      ["secret", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.parts, "number", "int"],
      [this.md5Checksum, "string", "string"],
      [this.fileHash, Uint8Array, "bytes"],
      [this.secret, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      parts: number;
      md5Checksum: string;
      fileHash: Uint8Array;
      secret: Uint8Array;
    },
  ) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.md5Checksum = params.md5Checksum;
    this.fileHash = params.fileHash;
    this.secret = params.secret;
  }
}

export class InputSecureFile extends Constructor {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x5367e5be;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class SecureFileEmpty extends TypeSecureFile {
  protected get [id]() {
    return 0x64199744;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureFile extends Constructor {
  id: bigint;
  accessHash: bigint;
  size: bigint;
  dcId: number;
  date: number;
  fileHash: Uint8Array;
  secret: Uint8Array;

  protected get [id]() {
    return 0x7d09c27e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["size", "bigint", "long"],
      ["dcId", "number", "int"],
      ["date", "number", "int"],
      ["fileHash", Uint8Array, "bytes"],
      ["secret", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.size, "bigint", "long"],
      [this.dcId, "number", "int"],
      [this.date, "number", "int"],
      [this.fileHash, Uint8Array, "bytes"],
      [this.secret, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      accessHash: bigint;
      size: bigint;
      dcId: number;
      date: number;
      fileHash: Uint8Array;
      secret: Uint8Array;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.size = params.size;
    this.dcId = params.dcId;
    this.date = params.date;
    this.fileHash = params.fileHash;
    this.secret = params.secret;
  }
}

export class SecureData extends Constructor {
  data: Uint8Array;
  dataHash: Uint8Array;
  secret: Uint8Array;

  protected get [id]() {
    return 0x8aeabec3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["data", Uint8Array, "bytes"],
      ["dataHash", Uint8Array, "bytes"],
      ["secret", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.data, Uint8Array, "bytes"],
      [this.dataHash, Uint8Array, "bytes"],
      [this.secret, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: { data: Uint8Array; dataHash: Uint8Array; secret: Uint8Array },
  ) {
    super();
    this.data = params.data;
    this.dataHash = params.dataHash;
    this.secret = params.secret;
  }
}

export class SecurePlainPhone extends TypeSecurePlainData {
  phone: string;

  protected get [id]() {
    return 0x7d6099dd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["email", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.email, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SecureValue extends Constructor {
  type: TypeSecureValueType;
  data?: TypeSecureData;
  frontSide?: TypeSecureFile;
  reverseSide?: TypeSecureFile;
  selfie?: TypeSecureFile;
  translation?: Array<TypeSecureFile>;
  files?: Array<TypeSecureFile>;
  plainData?: TypeSecurePlainData;
  hash: Uint8Array;

  protected get [id]() {
    return 0x187fa0ca;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["type", TypeSecureValueType, "SecureValueType"],
      ["data", TypeSecureData, "flags.0?SecureData"],
      ["frontSide", TypeSecureFile, "flags.1?SecureFile"],
      ["reverseSide", TypeSecureFile, "flags.2?SecureFile"],
      ["selfie", TypeSecureFile, "flags.3?SecureFile"],
      ["translation", [TypeSecureFile], "flags.6?Vector<SecureFile>"],
      ["files", [TypeSecureFile], "flags.4?Vector<SecureFile>"],
      ["plainData", TypeSecurePlainData, "flags.5?SecurePlainData"],
      ["hash", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.data ?? null, TypeSecureData, "flags.0?SecureData"],
      [this.frontSide ?? null, TypeSecureFile, "flags.1?SecureFile"],
      [this.reverseSide ?? null, TypeSecureFile, "flags.2?SecureFile"],
      [this.selfie ?? null, TypeSecureFile, "flags.3?SecureFile"],
      [
        this.translation ?? null,
        [TypeSecureFile],
        "flags.6?Vector<SecureFile>",
      ],
      [this.files ?? null, [TypeSecureFile], "flags.4?Vector<SecureFile>"],
      [this.plainData ?? null, TypeSecurePlainData, "flags.5?SecurePlainData"],
      [this.hash, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: {
      type: TypeSecureValueType;
      data?: TypeSecureData;
      frontSide?: TypeSecureFile;
      reverseSide?: TypeSecureFile;
      selfie?: TypeSecureFile;
      translation?: Array<TypeSecureFile>;
      files?: Array<TypeSecureFile>;
      plainData?: TypeSecurePlainData;
      hash: Uint8Array;
    },
  ) {
    super();
    this.type = params.type;
    this.data = params.data;
    this.frontSide = params.frontSide;
    this.reverseSide = params.reverseSide;
    this.selfie = params.selfie;
    this.translation = params.translation;
    this.files = params.files;
    this.plainData = params.plainData;
    this.hash = params.hash;
  }
}

export class InputSecureValue extends Constructor {
  type: TypeSecureValueType;
  data?: TypeSecureData;
  frontSide?: TypeInputSecureFile;
  reverseSide?: TypeInputSecureFile;
  selfie?: TypeInputSecureFile;
  translation?: Array<TypeInputSecureFile>;
  files?: Array<TypeInputSecureFile>;
  plainData?: TypeSecurePlainData;

  protected get [id]() {
    return 0xdb21d0a7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["type", TypeSecureValueType, "SecureValueType"],
      ["data", TypeSecureData, "flags.0?SecureData"],
      ["frontSide", TypeInputSecureFile, "flags.1?InputSecureFile"],
      ["reverseSide", TypeInputSecureFile, "flags.2?InputSecureFile"],
      ["selfie", TypeInputSecureFile, "flags.3?InputSecureFile"],
      ["translation", [TypeInputSecureFile], "flags.6?Vector<InputSecureFile>"],
      ["files", [TypeInputSecureFile], "flags.4?Vector<InputSecureFile>"],
      ["plainData", TypeSecurePlainData, "flags.5?SecurePlainData"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.data ?? null, TypeSecureData, "flags.0?SecureData"],
      [this.frontSide ?? null, TypeInputSecureFile, "flags.1?InputSecureFile"],
      [
        this.reverseSide ?? null,
        TypeInputSecureFile,
        "flags.2?InputSecureFile",
      ],
      [this.selfie ?? null, TypeInputSecureFile, "flags.3?InputSecureFile"],
      [
        this.translation ?? null,
        [TypeInputSecureFile],
        "flags.6?Vector<InputSecureFile>",
      ],
      [
        this.files ?? null,
        [TypeInputSecureFile],
        "flags.4?Vector<InputSecureFile>",
      ],
      [this.plainData ?? null, TypeSecurePlainData, "flags.5?SecurePlainData"],
    ];
  }

  constructor(
    params: {
      type: TypeSecureValueType;
      data?: TypeSecureData;
      frontSide?: TypeInputSecureFile;
      reverseSide?: TypeInputSecureFile;
      selfie?: TypeInputSecureFile;
      translation?: Array<TypeInputSecureFile>;
      files?: Array<TypeInputSecureFile>;
      plainData?: TypeSecurePlainData;
    },
  ) {
    super();
    this.type = params.type;
    this.data = params.data;
    this.frontSide = params.frontSide;
    this.reverseSide = params.reverseSide;
    this.selfie = params.selfie;
    this.translation = params.translation;
    this.files = params.files;
    this.plainData = params.plainData;
  }
}

export class SecureValueHash extends Constructor {
  type: TypeSecureValueType;
  hash: Uint8Array;

  protected get [id]() {
    return 0xed1ecdb0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["hash", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.hash, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { type: TypeSecureValueType; hash: Uint8Array }) {
    super();
    this.type = params.type;
    this.hash = params.hash;
  }
}

export class SecureValueErrorData extends TypeSecureValueError {
  type: TypeSecureValueType;
  dataHash: Uint8Array;
  field: string;
  text: string;

  protected get [id]() {
    return 0xe8a40bd9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["dataHash", Uint8Array, "bytes"],
      ["field", "string", "string"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.dataHash, Uint8Array, "bytes"],
      [this.field, "string", "string"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: {
      type: TypeSecureValueType;
      dataHash: Uint8Array;
      field: string;
      text: string;
    },
  ) {
    super();
    this.type = params.type;
    this.dataHash = params.dataHash;
    this.field = params.field;
    this.text = params.text;
  }
}

export class SecureValueErrorFrontSide extends TypeSecureValueError {
  type: TypeSecureValueType;
  fileHash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0x00be3dfa;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["fileHash", Uint8Array, "bytes"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.fileHash, Uint8Array, "bytes"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureValueErrorReverseSide extends TypeSecureValueError {
  type: TypeSecureValueType;
  fileHash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0x868a2aa5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["fileHash", Uint8Array, "bytes"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.fileHash, Uint8Array, "bytes"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureValueErrorSelfie extends TypeSecureValueError {
  type: TypeSecureValueType;
  fileHash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0xe537ced6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["fileHash", Uint8Array, "bytes"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.fileHash, Uint8Array, "bytes"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureValueErrorFile extends TypeSecureValueError {
  type: TypeSecureValueType;
  fileHash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0x7a700873;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["fileHash", Uint8Array, "bytes"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.fileHash, Uint8Array, "bytes"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureValueErrorFiles extends TypeSecureValueError {
  type: TypeSecureValueType;
  fileHash: Array<Uint8Array>;
  text: string;

  protected get [id]() {
    return 0x666220e9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["fileHash", [Uint8Array], "Vector<bytes>"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.fileHash, [Uint8Array], "Vector<bytes>"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: {
      type: TypeSecureValueType;
      fileHash: Array<Uint8Array>;
      text: string;
    },
  ) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureValueError extends Constructor {
  type: TypeSecureValueType;
  hash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0x869d758f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["hash", Uint8Array, "bytes"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.hash, Uint8Array, "bytes"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; hash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.hash = params.hash;
    this.text = params.text;
  }
}

export class SecureValueErrorTranslationFile extends TypeSecureValueError {
  type: TypeSecureValueType;
  fileHash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0xa1144770;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["fileHash", Uint8Array, "bytes"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.fileHash, Uint8Array, "bytes"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string },
  ) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureValueErrorTranslationFiles extends TypeSecureValueError {
  type: TypeSecureValueType;
  fileHash: Array<Uint8Array>;
  text: string;

  protected get [id]() {
    return 0x34636dd8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["type", TypeSecureValueType, "SecureValueType"],
      ["fileHash", [Uint8Array], "Vector<bytes>"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.type, TypeSecureValueType, "SecureValueType"],
      [this.fileHash, [Uint8Array], "Vector<bytes>"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: {
      type: TypeSecureValueType;
      fileHash: Array<Uint8Array>;
      text: string;
    },
  ) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureCredentialsEncrypted extends Constructor {
  data: Uint8Array;
  hash: Uint8Array;
  secret: Uint8Array;

  protected get [id]() {
    return 0x33f0ea47;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["data", Uint8Array, "bytes"],
      ["hash", Uint8Array, "bytes"],
      ["secret", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.data, Uint8Array, "bytes"],
      [this.hash, Uint8Array, "bytes"],
      [this.secret, Uint8Array, "bytes"],
    ];
  }

  constructor(
    params: { data: Uint8Array; hash: Uint8Array; secret: Uint8Array },
  ) {
    super();
    this.data = params.data;
    this.hash = params.hash;
    this.secret = params.secret;
  }
}

export class AccountAuthorizationForm extends Constructor {
  requiredTypes: Array<TypeSecureRequiredType>;
  values: Array<TypeSecureValue>;
  errors: Array<TypeSecureValueError>;
  users: Array<TypeUser>;
  privacyPolicyUrl?: string;

  protected get [id]() {
    return 0xad2e1cd8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["requiredTypes", [TypeSecureRequiredType], "Vector<SecureRequiredType>"],
      ["values", [TypeSecureValue], "Vector<SecureValue>"],
      ["errors", [TypeSecureValueError], "Vector<SecureValueError>"],
      ["users", [TypeUser], "Vector<User>"],
      ["privacyPolicyUrl", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [
        this.requiredTypes,
        [TypeSecureRequiredType],
        "Vector<SecureRequiredType>",
      ],
      [this.values, [TypeSecureValue], "Vector<SecureValue>"],
      [this.errors, [TypeSecureValueError], "Vector<SecureValueError>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.privacyPolicyUrl ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(
    params: {
      requiredTypes: Array<TypeSecureRequiredType>;
      values: Array<TypeSecureValue>;
      errors: Array<TypeSecureValueError>;
      users: Array<TypeUser>;
      privacyPolicyUrl?: string;
    },
  ) {
    super();
    this.requiredTypes = params.requiredTypes;
    this.values = params.values;
    this.errors = params.errors;
    this.users = params.users;
    this.privacyPolicyUrl = params.privacyPolicyUrl;
  }
}

export class AccountSentEmailCode extends Constructor {
  emailPattern: string;
  length: number;

  protected get [id]() {
    return 0x811f854f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emailPattern", "string", "string"],
      ["length", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emailPattern, "string", "string"],
      [this.length, "number", "int"],
    ];
  }

  constructor(params: { emailPattern: string; length: number }) {
    super();
    this.emailPattern = params.emailPattern;
    this.length = params.length;
  }
}

export class HelpDeepLinkInfoEmpty extends TypeHelpDeepLinkInfo {
  protected get [id]() {
    return 0x66afa166;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class HelpDeepLinkInfo extends Constructor {
  updateApp?: true;
  message: string;
  entities?: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x6a4ee832;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["updateApp", "true", "flags.0?true"],
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.updateApp ?? null, "true", "flags.0?true"],
      [this.message, "string", "string"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.1?Vector<MessageEntity>",
      ],
    ];
  }

  constructor(
    params: {
      updateApp?: true;
      message: string;
      entities?: Array<TypeMessageEntity>;
    },
  ) {
    super();
    this.updateApp = params.updateApp;
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class SavedPhoneContact extends TypeSavedContact {
  phone: string;
  firstName: string;
  lastName: string;
  date: number;

  protected get [id]() {
    return 0x1142bd56;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phone", "string", "string"],
      ["firstName", "string", "string"],
      ["lastName", "string", "string"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phone, "string", "string"],
      [this.firstName, "string", "string"],
      [this.lastName, "string", "string"],
      [this.date, "number", "int"],
    ];
  }

  constructor(
    params: {
      phone: string;
      firstName: string;
      lastName: string;
      date: number;
    },
  ) {
    super();
    this.phone = params.phone;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.date = params.date;
  }
}

export class AccountTakeout extends Constructor {
  id: bigint;

  protected get [id]() {
    return 0x4dba4501;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class PasswordKdfAlgoUnknown extends TypePasswordKdfAlgo {
  protected get [id]() {
    return 0xd45ab096;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
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

  static get [paramDesc](): ParamDesc {
    return [
      ["salt1", Uint8Array, "bytes"],
      ["salt2", Uint8Array, "bytes"],
      ["g", "number", "int"],
      ["p", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.salt1, Uint8Array, "bytes"],
      [this.salt2, Uint8Array, "bytes"],
      [this.g, "number", "int"],
      [this.p, Uint8Array, "bytes"],
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

export class SecurePasswordKdfAlgoUnknown extends TypeSecurePasswordKdfAlgo {
  protected get [id]() {
    return 0x004a8537;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["salt", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.salt, Uint8Array, "bytes"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["salt", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.salt, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { salt: Uint8Array }) {
    super();
    this.salt = params.salt;
  }
}

export class SecureSecretSettings extends Constructor {
  secureAlgo: TypeSecurePasswordKdfAlgo;
  secureSecret: Uint8Array;
  secureSecretId: bigint;

  protected get [id]() {
    return 0x1527bcac;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["secureAlgo", TypeSecurePasswordKdfAlgo, "SecurePasswordKdfAlgo"],
      ["secureSecret", Uint8Array, "bytes"],
      ["secureSecretId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.secureAlgo, TypeSecurePasswordKdfAlgo, "SecurePasswordKdfAlgo"],
      [this.secureSecret, Uint8Array, "bytes"],
      [this.secureSecretId, "bigint", "long"],
    ];
  }

  constructor(
    params: {
      secureAlgo: TypeSecurePasswordKdfAlgo;
      secureSecret: Uint8Array;
      secureSecretId: bigint;
    },
  ) {
    super();
    this.secureAlgo = params.secureAlgo;
    this.secureSecret = params.secureSecret;
    this.secureSecretId = params.secureSecretId;
  }
}

export class InputCheckPasswordEmpty extends TypeInputCheckPasswordSRP {
  protected get [id]() {
    return 0x9880f658;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputCheckPasswordSRP extends Constructor {
  srpId: bigint;
  A: Uint8Array;
  M1: Uint8Array;

  protected get [id]() {
    return 0xd27ff082;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["srpId", "bigint", "long"],
      ["A", Uint8Array, "bytes"],
      ["M1", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.srpId, "bigint", "long"],
      [this.A, Uint8Array, "bytes"],
      [this.M1, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { srpId: bigint; A: Uint8Array; M1: Uint8Array }) {
    super();
    this.srpId = params.srpId;
    this.A = params.A;
    this.M1 = params.M1;
  }
}

export class SecureRequiredType extends Constructor {
  nativeNames?: true;
  selfieRequired?: true;
  translationRequired?: true;
  type: TypeSecureValueType;

  protected get [id]() {
    return 0x829d99da;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["nativeNames", "true", "flags.0?true"],
      ["selfieRequired", "true", "flags.1?true"],
      ["translationRequired", "true", "flags.2?true"],
      ["type", TypeSecureValueType, "SecureValueType"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.nativeNames ?? null, "true", "flags.0?true"],
      [this.selfieRequired ?? null, "true", "flags.1?true"],
      [this.translationRequired ?? null, "true", "flags.2?true"],
      [this.type, TypeSecureValueType, "SecureValueType"],
    ];
  }

  constructor(
    params: {
      nativeNames?: true;
      selfieRequired?: true;
      translationRequired?: true;
      type: TypeSecureValueType;
    },
  ) {
    super();
    this.nativeNames = params.nativeNames;
    this.selfieRequired = params.selfieRequired;
    this.translationRequired = params.translationRequired;
    this.type = params.type;
  }
}

export class SecureRequiredTypeOneOf extends TypeSecureRequiredType {
  types: Array<TypeSecureRequiredType>;

  protected get [id]() {
    return 0x027477b4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["types", [TypeSecureRequiredType], "Vector<SecureRequiredType>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.types, [TypeSecureRequiredType], "Vector<SecureRequiredType>"],
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class HelpPassportConfig extends Constructor {
  hash: number;
  countriesLangs: TypeDataJSON;

  protected get [id]() {
    return 0xa098d6af;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
      ["countriesLangs", TypeDataJSON, "DataJSON"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
      [this.countriesLangs, TypeDataJSON, "DataJSON"],
    ];
  }

  constructor(params: { hash: number; countriesLangs: TypeDataJSON }) {
    super();
    this.hash = params.hash;
    this.countriesLangs = params.countriesLangs;
  }
}

export class InputAppEvent extends Constructor {
  time: number;
  type: string;
  peer: bigint;
  data: TypeJSONValue;

  protected get [id]() {
    return 0x1d1b1245;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["time", "number", "double"],
      ["type", "string", "string"],
      ["peer", "bigint", "long"],
      ["data", TypeJSONValue, "JSONValue"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.time, "number", "double"],
      [this.type, "string", "string"],
      [this.peer, "bigint", "long"],
      [this.data, TypeJSONValue, "JSONValue"],
    ];
  }

  constructor(
    params: { time: number; type: string; peer: bigint; data: TypeJSONValue },
  ) {
    super();
    this.time = params.time;
    this.type = params.type;
    this.peer = params.peer;
    this.data = params.data;
  }
}

export class JsonObjectValue extends Constructor {
  key: string;
  value: TypeJSONValue;

  protected get [id]() {
    return 0xc0de1bd9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["key", "string", "string"],
      ["value", TypeJSONValue, "JSONValue"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.key, "string", "string"],
      [this.value, TypeJSONValue, "JSONValue"],
    ];
  }

  constructor(params: { key: string; value: TypeJSONValue }) {
    super();
    this.key = params.key;
    this.value = params.value;
  }
}

export class JsonNull extends TypeJSONValue {
  protected get [id]() {
    return 0x3f6d7b68;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["value", "boolean", "Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, "boolean", "Bool"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["value", "number", "double"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, "number", "double"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["value", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["value", [TypeJSONValue], "Vector<JSONValue>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, [TypeJSONValue], "Vector<JSONValue>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["value", [TypeJSONObjectValue], "Vector<JSONObjectValue>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.value, [TypeJSONObjectValue], "Vector<JSONObjectValue>"],
    ];
  }

  constructor(params: { value: Array<TypeJSONObjectValue> }) {
    super();
    this.value = params.value;
  }
}

export class PageTableCell extends Constructor {
  header?: true;
  alignCenter?: true;
  alignRight?: true;
  valignMiddle?: true;
  valignBottom?: true;
  text?: TypeRichText;
  colspan?: number;
  rowspan?: number;

  protected get [id]() {
    return 0x34566b6a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["header", "true", "flags.0?true"],
      ["alignCenter", "true", "flags.3?true"],
      ["alignRight", "true", "flags.4?true"],
      ["valignMiddle", "true", "flags.5?true"],
      ["valignBottom", "true", "flags.6?true"],
      ["text", TypeRichText, "flags.7?RichText"],
      ["colspan", "number", "flags.1?int"],
      ["rowspan", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.header ?? null, "true", "flags.0?true"],
      [this.alignCenter ?? null, "true", "flags.3?true"],
      [this.alignRight ?? null, "true", "flags.4?true"],
      [this.valignMiddle ?? null, "true", "flags.5?true"],
      [this.valignBottom ?? null, "true", "flags.6?true"],
      [this.text ?? null, TypeRichText, "flags.7?RichText"],
      [this.colspan ?? null, "number", "flags.1?int"],
      [this.rowspan ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(
    params: {
      header?: true;
      alignCenter?: true;
      alignRight?: true;
      valignMiddle?: true;
      valignBottom?: true;
      text?: TypeRichText;
      colspan?: number;
      rowspan?: number;
    },
  ) {
    super();
    this.header = params.header;
    this.alignCenter = params.alignCenter;
    this.alignRight = params.alignRight;
    this.valignMiddle = params.valignMiddle;
    this.valignBottom = params.valignBottom;
    this.text = params.text;
    this.colspan = params.colspan;
    this.rowspan = params.rowspan;
  }
}

export class PageTableRow extends Constructor {
  cells: Array<TypePageTableCell>;

  protected get [id]() {
    return 0xe0c0c5e5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["cells", [TypePageTableCell], "Vector<PageTableCell>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.cells, [TypePageTableCell], "Vector<PageTableCell>"],
    ];
  }

  constructor(params: { cells: Array<TypePageTableCell> }) {
    super();
    this.cells = params.cells;
  }
}

export class PageCaption extends Constructor {
  text: TypeRichText;
  credit: TypeRichText;

  protected get [id]() {
    return 0x6f747657;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
      ["credit", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
      [this.credit, TypeRichText, "RichText"],
    ];
  }

  constructor(params: { text: TypeRichText; credit: TypeRichText }) {
    super();
    this.text = params.text;
    this.credit = params.credit;
  }
}

export class PageListItemText extends TypePageListItem {
  text: TypeRichText;

  protected get [id]() {
    return 0xb92fb6cd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["blocks", [TypePageBlock], "Vector<PageBlock>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.blocks, [TypePageBlock], "Vector<PageBlock>"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["num", "string", "string"],
      ["text", TypeRichText, "RichText"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.num, "string", "string"],
      [this.text, TypeRichText, "RichText"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["num", "string", "string"],
      ["blocks", [TypePageBlock], "Vector<PageBlock>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.num, "string", "string"],
      [this.blocks, [TypePageBlock], "Vector<PageBlock>"],
    ];
  }

  constructor(params: { num: string; blocks: Array<TypePageBlock> }) {
    super();
    this.num = params.num;
    this.blocks = params.blocks;
  }
}

export class PageRelatedArticle extends Constructor {
  url: string;
  webpageId: bigint;
  title?: string;
  description?: string;
  photoId?: bigint;
  author?: string;
  publishedDate?: number;

  protected get [id]() {
    return 0xb390dc08;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["url", "string", "string"],
      ["webpageId", "bigint", "long"],
      ["title", "string", "flags.0?string"],
      ["description", "string", "flags.1?string"],
      ["photoId", "bigint", "flags.2?long"],
      ["author", "string", "flags.3?string"],
      ["publishedDate", "number", "flags.4?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.url, "string", "string"],
      [this.webpageId, "bigint", "long"],
      [this.title ?? null, "string", "flags.0?string"],
      [this.description ?? null, "string", "flags.1?string"],
      [this.photoId ?? null, "bigint", "flags.2?long"],
      [this.author ?? null, "string", "flags.3?string"],
      [this.publishedDate ?? null, "number", "flags.4?int"],
    ];
  }

  constructor(
    params: {
      url: string;
      webpageId: bigint;
      title?: string;
      description?: string;
      photoId?: bigint;
      author?: string;
      publishedDate?: number;
    },
  ) {
    super();
    this.url = params.url;
    this.webpageId = params.webpageId;
    this.title = params.title;
    this.description = params.description;
    this.photoId = params.photoId;
    this.author = params.author;
    this.publishedDate = params.publishedDate;
  }
}

export class Page extends Constructor {
  part?: true;
  rtl?: true;
  v2?: true;
  url: string;
  blocks: Array<TypePageBlock>;
  photos: Array<TypePhoto>;
  documents: Array<TypeDocument>;
  views?: number;

  protected get [id]() {
    return 0x98657f0d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["part", "true", "flags.0?true"],
      ["rtl", "true", "flags.1?true"],
      ["v2", "true", "flags.2?true"],
      ["url", "string", "string"],
      ["blocks", [TypePageBlock], "Vector<PageBlock>"],
      ["photos", [TypePhoto], "Vector<Photo>"],
      ["documents", [TypeDocument], "Vector<Document>"],
      ["views", "number", "flags.3?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.part ?? null, "true", "flags.0?true"],
      [this.rtl ?? null, "true", "flags.1?true"],
      [this.v2 ?? null, "true", "flags.2?true"],
      [this.url, "string", "string"],
      [this.blocks, [TypePageBlock], "Vector<PageBlock>"],
      [this.photos, [TypePhoto], "Vector<Photo>"],
      [this.documents, [TypeDocument], "Vector<Document>"],
      [this.views ?? null, "number", "flags.3?int"],
    ];
  }

  constructor(
    params: {
      part?: true;
      rtl?: true;
      v2?: true;
      url: string;
      blocks: Array<TypePageBlock>;
      photos: Array<TypePhoto>;
      documents: Array<TypeDocument>;
      views?: number;
    },
  ) {
    super();
    this.part = params.part;
    this.rtl = params.rtl;
    this.v2 = params.v2;
    this.url = params.url;
    this.blocks = params.blocks;
    this.photos = params.photos;
    this.documents = params.documents;
    this.views = params.views;
  }
}

export class HelpSupportName extends Constructor {
  name: string;

  protected get [id]() {
    return 0x8c05f1c9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["name", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.name, "string", "string"],
    ];
  }

  constructor(params: { name: string }) {
    super();
    this.name = params.name;
  }
}

export class HelpUserInfoEmpty extends TypeHelpUserInfo {
  protected get [id]() {
    return 0xf3ae2eed;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class HelpUserInfo extends Constructor {
  message: string;
  entities: Array<TypeMessageEntity>;
  author: string;
  date: number;

  protected get [id]() {
    return 0x01eb3758;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "Vector<MessageEntity>"],
      ["author", "string", "string"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.message, "string", "string"],
      [this.entities, [TypeMessageEntity], "Vector<MessageEntity>"],
      [this.author, "string", "string"],
      [this.date, "number", "int"],
    ];
  }

  constructor(
    params: {
      message: string;
      entities: Array<TypeMessageEntity>;
      author: string;
      date: number;
    },
  ) {
    super();
    this.message = params.message;
    this.entities = params.entities;
    this.author = params.author;
    this.date = params.date;
  }
}

export class PollAnswer extends Constructor {
  text: string;
  option: Uint8Array;

  protected get [id]() {
    return 0x6ca9c2e9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["option", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.option, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { text: string; option: Uint8Array }) {
    super();
    this.text = params.text;
    this.option = params.option;
  }
}

export class Poll extends Constructor {
  id: bigint;
  closed?: true;
  publicVoters?: true;
  multipleChoice?: true;
  quiz?: true;
  question: string;
  answers: Array<TypePollAnswer>;
  closePeriod?: number;
  closeDate?: number;

  protected get [id]() {
    return 0x86e18161;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["flags", flags, "#"],
      ["closed", "true", "flags.0?true"],
      ["publicVoters", "true", "flags.1?true"],
      ["multipleChoice", "true", "flags.2?true"],
      ["quiz", "true", "flags.3?true"],
      ["question", "string", "string"],
      ["answers", [TypePollAnswer], "Vector<PollAnswer>"],
      ["closePeriod", "number", "flags.4?int"],
      ["closeDate", "number", "flags.5?int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      ["flags", flags, "#"],
      [this.closed ?? null, "true", "flags.0?true"],
      [this.publicVoters ?? null, "true", "flags.1?true"],
      [this.multipleChoice ?? null, "true", "flags.2?true"],
      [this.quiz ?? null, "true", "flags.3?true"],
      [this.question, "string", "string"],
      [this.answers, [TypePollAnswer], "Vector<PollAnswer>"],
      [this.closePeriod ?? null, "number", "flags.4?int"],
      [this.closeDate ?? null, "number", "flags.5?int"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      closed?: true;
      publicVoters?: true;
      multipleChoice?: true;
      quiz?: true;
      question: string;
      answers: Array<TypePollAnswer>;
      closePeriod?: number;
      closeDate?: number;
    },
  ) {
    super();
    this.id = params.id;
    this.closed = params.closed;
    this.publicVoters = params.publicVoters;
    this.multipleChoice = params.multipleChoice;
    this.quiz = params.quiz;
    this.question = params.question;
    this.answers = params.answers;
    this.closePeriod = params.closePeriod;
    this.closeDate = params.closeDate;
  }
}

export class PollAnswerVoters extends Constructor {
  chosen?: true;
  correct?: true;
  option: Uint8Array;
  voters: number;

  protected get [id]() {
    return 0x3b6ddad2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["chosen", "true", "flags.0?true"],
      ["correct", "true", "flags.1?true"],
      ["option", Uint8Array, "bytes"],
      ["voters", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.chosen ?? null, "true", "flags.0?true"],
      [this.correct ?? null, "true", "flags.1?true"],
      [this.option, Uint8Array, "bytes"],
      [this.voters, "number", "int"],
    ];
  }

  constructor(
    params: {
      chosen?: true;
      correct?: true;
      option: Uint8Array;
      voters: number;
    },
  ) {
    super();
    this.chosen = params.chosen;
    this.correct = params.correct;
    this.option = params.option;
    this.voters = params.voters;
  }
}

export class PollResults extends Constructor {
  min?: true;
  results?: Array<TypePollAnswerVoters>;
  totalVoters?: number;
  recentVoters?: Array<bigint>;
  solution?: string;
  solutionEntities?: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0xdcb82ea3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["min", "true", "flags.0?true"],
      ["results", [TypePollAnswerVoters], "flags.1?Vector<PollAnswerVoters>"],
      ["totalVoters", "number", "flags.2?int"],
      ["recentVoters", ["bigint"], "flags.3?Vector<long>"],
      ["solution", "string", "flags.4?string"],
      [
        "solutionEntities",
        [TypeMessageEntity],
        "flags.4?Vector<MessageEntity>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.min ?? null, "true", "flags.0?true"],
      [
        this.results ?? null,
        [TypePollAnswerVoters],
        "flags.1?Vector<PollAnswerVoters>",
      ],
      [this.totalVoters ?? null, "number", "flags.2?int"],
      [this.recentVoters ?? null, ["bigint"], "flags.3?Vector<long>"],
      [this.solution ?? null, "string", "flags.4?string"],
      [
        this.solutionEntities ?? null,
        [TypeMessageEntity],
        "flags.4?Vector<MessageEntity>",
      ],
    ];
  }

  constructor(
    params: {
      min?: true;
      results?: Array<TypePollAnswerVoters>;
      totalVoters?: number;
      recentVoters?: Array<bigint>;
      solution?: string;
      solutionEntities?: Array<TypeMessageEntity>;
    },
  ) {
    super();
    this.min = params.min;
    this.results = params.results;
    this.totalVoters = params.totalVoters;
    this.recentVoters = params.recentVoters;
    this.solution = params.solution;
    this.solutionEntities = params.solutionEntities;
  }
}

export class ChatOnlines extends Constructor {
  onlines: number;

  protected get [id]() {
    return 0xf041e250;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["onlines", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.onlines, "number", "int"],
    ];
  }

  constructor(params: { onlines: number }) {
    super();
    this.onlines = params.onlines;
  }
}

export class StatsURL extends Constructor {
  url: string;

  protected get [id]() {
    return 0x47a971e0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class ChatAdminRights extends Constructor {
  changeInfo?: true;
  postMessages?: true;
  editMessages?: true;
  deleteMessages?: true;
  banUsers?: true;
  inviteUsers?: true;
  pinMessages?: true;
  addAdmins?: true;
  anonymous?: true;
  manageCall?: true;
  other?: true;
  manageTopics?: true;

  protected get [id]() {
    return 0x5fb224d5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["changeInfo", "true", "flags.0?true"],
      ["postMessages", "true", "flags.1?true"],
      ["editMessages", "true", "flags.2?true"],
      ["deleteMessages", "true", "flags.3?true"],
      ["banUsers", "true", "flags.4?true"],
      ["inviteUsers", "true", "flags.5?true"],
      ["pinMessages", "true", "flags.7?true"],
      ["addAdmins", "true", "flags.9?true"],
      ["anonymous", "true", "flags.10?true"],
      ["manageCall", "true", "flags.11?true"],
      ["other", "true", "flags.12?true"],
      ["manageTopics", "true", "flags.13?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.changeInfo ?? null, "true", "flags.0?true"],
      [this.postMessages ?? null, "true", "flags.1?true"],
      [this.editMessages ?? null, "true", "flags.2?true"],
      [this.deleteMessages ?? null, "true", "flags.3?true"],
      [this.banUsers ?? null, "true", "flags.4?true"],
      [this.inviteUsers ?? null, "true", "flags.5?true"],
      [this.pinMessages ?? null, "true", "flags.7?true"],
      [this.addAdmins ?? null, "true", "flags.9?true"],
      [this.anonymous ?? null, "true", "flags.10?true"],
      [this.manageCall ?? null, "true", "flags.11?true"],
      [this.other ?? null, "true", "flags.12?true"],
      [this.manageTopics ?? null, "true", "flags.13?true"],
    ];
  }

  constructor(
    params: {
      changeInfo?: true;
      postMessages?: true;
      editMessages?: true;
      deleteMessages?: true;
      banUsers?: true;
      inviteUsers?: true;
      pinMessages?: true;
      addAdmins?: true;
      anonymous?: true;
      manageCall?: true;
      other?: true;
      manageTopics?: true;
    },
  ) {
    super();
    this.changeInfo = params.changeInfo;
    this.postMessages = params.postMessages;
    this.editMessages = params.editMessages;
    this.deleteMessages = params.deleteMessages;
    this.banUsers = params.banUsers;
    this.inviteUsers = params.inviteUsers;
    this.pinMessages = params.pinMessages;
    this.addAdmins = params.addAdmins;
    this.anonymous = params.anonymous;
    this.manageCall = params.manageCall;
    this.other = params.other;
    this.manageTopics = params.manageTopics;
  }
}

export class ChatBannedRights extends Constructor {
  viewMessages?: true;
  sendMessages?: true;
  sendMedia?: true;
  sendStickers?: true;
  sendGifs?: true;
  sendGames?: true;
  sendInline?: true;
  embedLinks?: true;
  sendPolls?: true;
  changeInfo?: true;
  inviteUsers?: true;
  pinMessages?: true;
  manageTopics?: true;
  sendPhotos?: true;
  sendVideos?: true;
  sendRoundvideos?: true;
  sendAudios?: true;
  sendVoices?: true;
  sendDocs?: true;
  sendPlain?: true;
  untilDate: number;

  protected get [id]() {
    return 0x9f120418;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["viewMessages", "true", "flags.0?true"],
      ["sendMessages", "true", "flags.1?true"],
      ["sendMedia", "true", "flags.2?true"],
      ["sendStickers", "true", "flags.3?true"],
      ["sendGifs", "true", "flags.4?true"],
      ["sendGames", "true", "flags.5?true"],
      ["sendInline", "true", "flags.6?true"],
      ["embedLinks", "true", "flags.7?true"],
      ["sendPolls", "true", "flags.8?true"],
      ["changeInfo", "true", "flags.10?true"],
      ["inviteUsers", "true", "flags.15?true"],
      ["pinMessages", "true", "flags.17?true"],
      ["manageTopics", "true", "flags.18?true"],
      ["sendPhotos", "true", "flags.19?true"],
      ["sendVideos", "true", "flags.20?true"],
      ["sendRoundvideos", "true", "flags.21?true"],
      ["sendAudios", "true", "flags.22?true"],
      ["sendVoices", "true", "flags.23?true"],
      ["sendDocs", "true", "flags.24?true"],
      ["sendPlain", "true", "flags.25?true"],
      ["untilDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.viewMessages ?? null, "true", "flags.0?true"],
      [this.sendMessages ?? null, "true", "flags.1?true"],
      [this.sendMedia ?? null, "true", "flags.2?true"],
      [this.sendStickers ?? null, "true", "flags.3?true"],
      [this.sendGifs ?? null, "true", "flags.4?true"],
      [this.sendGames ?? null, "true", "flags.5?true"],
      [this.sendInline ?? null, "true", "flags.6?true"],
      [this.embedLinks ?? null, "true", "flags.7?true"],
      [this.sendPolls ?? null, "true", "flags.8?true"],
      [this.changeInfo ?? null, "true", "flags.10?true"],
      [this.inviteUsers ?? null, "true", "flags.15?true"],
      [this.pinMessages ?? null, "true", "flags.17?true"],
      [this.manageTopics ?? null, "true", "flags.18?true"],
      [this.sendPhotos ?? null, "true", "flags.19?true"],
      [this.sendVideos ?? null, "true", "flags.20?true"],
      [this.sendRoundvideos ?? null, "true", "flags.21?true"],
      [this.sendAudios ?? null, "true", "flags.22?true"],
      [this.sendVoices ?? null, "true", "flags.23?true"],
      [this.sendDocs ?? null, "true", "flags.24?true"],
      [this.sendPlain ?? null, "true", "flags.25?true"],
      [this.untilDate, "number", "int"],
    ];
  }

  constructor(
    params: {
      viewMessages?: true;
      sendMessages?: true;
      sendMedia?: true;
      sendStickers?: true;
      sendGifs?: true;
      sendGames?: true;
      sendInline?: true;
      embedLinks?: true;
      sendPolls?: true;
      changeInfo?: true;
      inviteUsers?: true;
      pinMessages?: true;
      manageTopics?: true;
      sendPhotos?: true;
      sendVideos?: true;
      sendRoundvideos?: true;
      sendAudios?: true;
      sendVoices?: true;
      sendDocs?: true;
      sendPlain?: true;
      untilDate: number;
    },
  ) {
    super();
    this.viewMessages = params.viewMessages;
    this.sendMessages = params.sendMessages;
    this.sendMedia = params.sendMedia;
    this.sendStickers = params.sendStickers;
    this.sendGifs = params.sendGifs;
    this.sendGames = params.sendGames;
    this.sendInline = params.sendInline;
    this.embedLinks = params.embedLinks;
    this.sendPolls = params.sendPolls;
    this.changeInfo = params.changeInfo;
    this.inviteUsers = params.inviteUsers;
    this.pinMessages = params.pinMessages;
    this.manageTopics = params.manageTopics;
    this.sendPhotos = params.sendPhotos;
    this.sendVideos = params.sendVideos;
    this.sendRoundvideos = params.sendRoundvideos;
    this.sendAudios = params.sendAudios;
    this.sendVoices = params.sendVoices;
    this.sendDocs = params.sendDocs;
    this.sendPlain = params.sendPlain;
    this.untilDate = params.untilDate;
  }
}

export class InputWallPaper extends Constructor {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xe630b979;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputWallPaperSlug extends TypeInputWallPaper {
  slug: string;

  protected get [id]() {
    return 0x72091c80;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["slug", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.slug, "string", "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class InputWallPaperNoFile extends TypeInputWallPaper {
  id: bigint;

  protected get [id]() {
    return 0x967a462e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class AccountWallPapersNotModified extends TypeAccountWallPapers {
  protected get [id]() {
    return 0x1c199183;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AccountWallPapers extends Constructor {
  hash: bigint;
  wallpapers: Array<TypeWallPaper>;

  protected get [id]() {
    return 0xcdc3858c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["wallpapers", [TypeWallPaper], "Vector<WallPaper>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.wallpapers, [TypeWallPaper], "Vector<WallPaper>"],
    ];
  }

  constructor(params: { hash: bigint; wallpapers: Array<TypeWallPaper> }) {
    super();
    this.hash = params.hash;
    this.wallpapers = params.wallpapers;
  }
}

export class CodeSettings extends Constructor {
  allowFlashcall?: true;
  currentNumber?: true;
  allowAppHash?: true;
  allowMissedCall?: true;
  allowFirebase?: true;
  logoutTokens?: Array<Uint8Array>;
  token?: string;
  appSandbox?: boolean;

  protected get [id]() {
    return 0xad253d78;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["allowFlashcall", "true", "flags.0?true"],
      ["currentNumber", "true", "flags.1?true"],
      ["allowAppHash", "true", "flags.4?true"],
      ["allowMissedCall", "true", "flags.5?true"],
      ["allowFirebase", "true", "flags.7?true"],
      ["logoutTokens", [Uint8Array], "flags.6?Vector<bytes>"],
      ["token", "string", "flags.8?string"],
      ["appSandbox", "boolean", "flags.8?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.allowFlashcall ?? null, "true", "flags.0?true"],
      [this.currentNumber ?? null, "true", "flags.1?true"],
      [this.allowAppHash ?? null, "true", "flags.4?true"],
      [this.allowMissedCall ?? null, "true", "flags.5?true"],
      [this.allowFirebase ?? null, "true", "flags.7?true"],
      [this.logoutTokens ?? null, [Uint8Array], "flags.6?Vector<bytes>"],
      [this.token ?? null, "string", "flags.8?string"],
      [this.appSandbox ?? null, "boolean", "flags.8?Bool"],
    ];
  }

  constructor(
    params: {
      allowFlashcall?: true;
      currentNumber?: true;
      allowAppHash?: true;
      allowMissedCall?: true;
      allowFirebase?: true;
      logoutTokens?: Array<Uint8Array>;
      token?: string;
      appSandbox?: boolean;
    },
  ) {
    super();
    this.allowFlashcall = params.allowFlashcall;
    this.currentNumber = params.currentNumber;
    this.allowAppHash = params.allowAppHash;
    this.allowMissedCall = params.allowMissedCall;
    this.allowFirebase = params.allowFirebase;
    this.logoutTokens = params.logoutTokens;
    this.token = params.token;
    this.appSandbox = params.appSandbox;
  }
}

export class WallPaperSettings extends Constructor {
  blur?: true;
  motion?: true;
  backgroundColor?: number;
  secondBackgroundColor?: number;
  thirdBackgroundColor?: number;
  fourthBackgroundColor?: number;
  intensity?: number;
  rotation?: number;

  protected get [id]() {
    return 0x1dc1bca4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["blur", "true", "flags.1?true"],
      ["motion", "true", "flags.2?true"],
      ["backgroundColor", "number", "flags.0?int"],
      ["secondBackgroundColor", "number", "flags.4?int"],
      ["thirdBackgroundColor", "number", "flags.5?int"],
      ["fourthBackgroundColor", "number", "flags.6?int"],
      ["intensity", "number", "flags.3?int"],
      ["rotation", "number", "flags.4?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.blur ?? null, "true", "flags.1?true"],
      [this.motion ?? null, "true", "flags.2?true"],
      [this.backgroundColor ?? null, "number", "flags.0?int"],
      [this.secondBackgroundColor ?? null, "number", "flags.4?int"],
      [this.thirdBackgroundColor ?? null, "number", "flags.5?int"],
      [this.fourthBackgroundColor ?? null, "number", "flags.6?int"],
      [this.intensity ?? null, "number", "flags.3?int"],
      [this.rotation ?? null, "number", "flags.4?int"],
    ];
  }

  constructor(
    params: {
      blur?: true;
      motion?: true;
      backgroundColor?: number;
      secondBackgroundColor?: number;
      thirdBackgroundColor?: number;
      fourthBackgroundColor?: number;
      intensity?: number;
      rotation?: number;
    },
  ) {
    super();
    this.blur = params.blur;
    this.motion = params.motion;
    this.backgroundColor = params.backgroundColor;
    this.secondBackgroundColor = params.secondBackgroundColor;
    this.thirdBackgroundColor = params.thirdBackgroundColor;
    this.fourthBackgroundColor = params.fourthBackgroundColor;
    this.intensity = params.intensity;
    this.rotation = params.rotation;
  }
}

export class AutoDownloadSettings extends Constructor {
  disabled?: true;
  videoPreloadLarge?: true;
  audioPreloadNext?: true;
  phonecallsLessData?: true;
  photoSizeMax: number;
  videoSizeMax: bigint;
  fileSizeMax: bigint;
  videoUploadMaxbitrate: number;

  protected get [id]() {
    return 0x8efab953;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["disabled", "true", "flags.0?true"],
      ["videoPreloadLarge", "true", "flags.1?true"],
      ["audioPreloadNext", "true", "flags.2?true"],
      ["phonecallsLessData", "true", "flags.3?true"],
      ["photoSizeMax", "number", "int"],
      ["videoSizeMax", "bigint", "long"],
      ["fileSizeMax", "bigint", "long"],
      ["videoUploadMaxbitrate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.disabled ?? null, "true", "flags.0?true"],
      [this.videoPreloadLarge ?? null, "true", "flags.1?true"],
      [this.audioPreloadNext ?? null, "true", "flags.2?true"],
      [this.phonecallsLessData ?? null, "true", "flags.3?true"],
      [this.photoSizeMax, "number", "int"],
      [this.videoSizeMax, "bigint", "long"],
      [this.fileSizeMax, "bigint", "long"],
      [this.videoUploadMaxbitrate, "number", "int"],
    ];
  }

  constructor(
    params: {
      disabled?: true;
      videoPreloadLarge?: true;
      audioPreloadNext?: true;
      phonecallsLessData?: true;
      photoSizeMax: number;
      videoSizeMax: bigint;
      fileSizeMax: bigint;
      videoUploadMaxbitrate: number;
    },
  ) {
    super();
    this.disabled = params.disabled;
    this.videoPreloadLarge = params.videoPreloadLarge;
    this.audioPreloadNext = params.audioPreloadNext;
    this.phonecallsLessData = params.phonecallsLessData;
    this.photoSizeMax = params.photoSizeMax;
    this.videoSizeMax = params.videoSizeMax;
    this.fileSizeMax = params.fileSizeMax;
    this.videoUploadMaxbitrate = params.videoUploadMaxbitrate;
  }
}

export class AccountAutoDownloadSettings extends Constructor {
  low: TypeAutoDownloadSettings;
  medium: TypeAutoDownloadSettings;
  high: TypeAutoDownloadSettings;

  protected get [id]() {
    return 0x63cacf26;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["low", TypeAutoDownloadSettings, "AutoDownloadSettings"],
      ["medium", TypeAutoDownloadSettings, "AutoDownloadSettings"],
      ["high", TypeAutoDownloadSettings, "AutoDownloadSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.low, TypeAutoDownloadSettings, "AutoDownloadSettings"],
      [this.medium, TypeAutoDownloadSettings, "AutoDownloadSettings"],
      [this.high, TypeAutoDownloadSettings, "AutoDownloadSettings"],
    ];
  }

  constructor(
    params: {
      low: TypeAutoDownloadSettings;
      medium: TypeAutoDownloadSettings;
      high: TypeAutoDownloadSettings;
    },
  ) {
    super();
    this.low = params.low;
    this.medium = params.medium;
    this.high = params.high;
  }
}

export class EmojiKeyword extends Constructor {
  keyword: string;
  emoticons: Array<string>;

  protected get [id]() {
    return 0xd5b3b9f9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["keyword", "string", "string"],
      ["emoticons", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.keyword, "string", "string"],
      [this.emoticons, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { keyword: string; emoticons: Array<string> }) {
    super();
    this.keyword = params.keyword;
    this.emoticons = params.emoticons;
  }
}

export class EmojiKeywordDeleted extends TypeEmojiKeyword {
  keyword: string;
  emoticons: Array<string>;

  protected get [id]() {
    return 0x236df622;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["keyword", "string", "string"],
      ["emoticons", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.keyword, "string", "string"],
      [this.emoticons, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { keyword: string; emoticons: Array<string> }) {
    super();
    this.keyword = params.keyword;
    this.emoticons = params.emoticons;
  }
}

export class EmojiKeywordsDifference extends Constructor {
  langCode: string;
  fromVersion: number;
  version: number;
  keywords: Array<TypeEmojiKeyword>;

  protected get [id]() {
    return 0x5cc761bd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCode", "string", "string"],
      ["fromVersion", "number", "int"],
      ["version", "number", "int"],
      ["keywords", [TypeEmojiKeyword], "Vector<EmojiKeyword>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCode, "string", "string"],
      [this.fromVersion, "number", "int"],
      [this.version, "number", "int"],
      [this.keywords, [TypeEmojiKeyword], "Vector<EmojiKeyword>"],
    ];
  }

  constructor(
    params: {
      langCode: string;
      fromVersion: number;
      version: number;
      keywords: Array<TypeEmojiKeyword>;
    },
  ) {
    super();
    this.langCode = params.langCode;
    this.fromVersion = params.fromVersion;
    this.version = params.version;
    this.keywords = params.keywords;
  }
}

export class EmojiURL extends Constructor {
  url: string;

  protected get [id]() {
    return 0xa575739d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class EmojiLanguage extends Constructor {
  langCode: string;

  protected get [id]() {
    return 0xb3fb5361;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["langCode", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.langCode, "string", "string"],
    ];
  }

  constructor(params: { langCode: string }) {
    super();
    this.langCode = params.langCode;
  }
}

export class Folder extends Constructor {
  autofillNewBroadcasts?: true;
  autofillPublicGroups?: true;
  autofillNewCorrespondents?: true;
  id: number;
  title: string;
  photo?: TypeChatPhoto;

  protected get [id]() {
    return 0xff544e65;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["autofillNewBroadcasts", "true", "flags.0?true"],
      ["autofillPublicGroups", "true", "flags.1?true"],
      ["autofillNewCorrespondents", "true", "flags.2?true"],
      ["id", "number", "int"],
      ["title", "string", "string"],
      ["photo", TypeChatPhoto, "flags.3?ChatPhoto"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.autofillNewBroadcasts ?? null, "true", "flags.0?true"],
      [this.autofillPublicGroups ?? null, "true", "flags.1?true"],
      [this.autofillNewCorrespondents ?? null, "true", "flags.2?true"],
      [this.id, "number", "int"],
      [this.title, "string", "string"],
      [this.photo ?? null, TypeChatPhoto, "flags.3?ChatPhoto"],
    ];
  }

  constructor(
    params: {
      autofillNewBroadcasts?: true;
      autofillPublicGroups?: true;
      autofillNewCorrespondents?: true;
      id: number;
      title: string;
      photo?: TypeChatPhoto;
    },
  ) {
    super();
    this.autofillNewBroadcasts = params.autofillNewBroadcasts;
    this.autofillPublicGroups = params.autofillPublicGroups;
    this.autofillNewCorrespondents = params.autofillNewCorrespondents;
    this.id = params.id;
    this.title = params.title;
    this.photo = params.photo;
  }
}

export class InputFolderPeer extends Constructor {
  peer: TypeInputPeer;
  folderId: number;

  protected get [id]() {
    return 0xfbd2c296;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
      ["folderId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.folderId, "number", "int"],
    ];
  }

  constructor(params: { peer: TypeInputPeer; folderId: number }) {
    super();
    this.peer = params.peer;
    this.folderId = params.folderId;
  }
}

export class FolderPeer extends Constructor {
  peer: TypePeer;
  folderId: number;

  protected get [id]() {
    return 0xe9baa668;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["folderId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.folderId, "number", "int"],
    ];
  }

  constructor(params: { peer: TypePeer; folderId: number }) {
    super();
    this.peer = params.peer;
    this.folderId = params.folderId;
  }
}

export class MessagesSearchCounter extends Constructor {
  inexact?: true;
  filter: TypeMessagesFilter;
  count: number;

  protected get [id]() {
    return 0xe844ebff;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["inexact", "true", "flags.1?true"],
      ["filter", TypeMessagesFilter, "MessagesFilter"],
      ["count", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.inexact ?? null, "true", "flags.1?true"],
      [this.filter, TypeMessagesFilter, "MessagesFilter"],
      [this.count, "number", "int"],
    ];
  }

  constructor(
    params: { inexact?: true; filter: TypeMessagesFilter; count: number },
  ) {
    super();
    this.inexact = params.inexact;
    this.filter = params.filter;
    this.count = params.count;
  }
}

export class UrlAuthResultRequest extends TypeUrlAuthResult {
  requestWriteAccess?: true;
  bot: TypeUser;
  domain: string;

  protected get [id]() {
    return 0x92d33a0e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["requestWriteAccess", "true", "flags.0?true"],
      ["bot", TypeUser, "User"],
      ["domain", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.requestWriteAccess ?? null, "true", "flags.0?true"],
      [this.bot, TypeUser, "User"],
      [this.domain, "string", "string"],
    ];
  }

  constructor(
    params: { requestWriteAccess?: true; bot: TypeUser; domain: string },
  ) {
    super();
    this.requestWriteAccess = params.requestWriteAccess;
    this.bot = params.bot;
    this.domain = params.domain;
  }
}

export class UrlAuthResultAccepted extends TypeUrlAuthResult {
  url: string;

  protected get [id]() {
    return 0x8f8c0e4e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelLocationEmpty extends TypeChannelLocation {
  protected get [id]() {
    return 0xbfb5ad8b;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChannelLocation extends Constructor {
  geoPoint: TypeGeoPoint;
  address: string;

  protected get [id]() {
    return 0x209b82db;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["geoPoint", TypeGeoPoint, "GeoPoint"],
      ["address", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.geoPoint, TypeGeoPoint, "GeoPoint"],
      [this.address, "string", "string"],
    ];
  }

  constructor(params: { geoPoint: TypeGeoPoint; address: string }) {
    super();
    this.geoPoint = params.geoPoint;
    this.address = params.address;
  }
}

export class PeerLocated extends Constructor {
  peer: TypePeer;
  expires: number;
  distance: number;

  protected get [id]() {
    return 0xca461b5d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["expires", "number", "int"],
      ["distance", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.expires, "number", "int"],
      [this.distance, "number", "int"],
    ];
  }

  constructor(params: { peer: TypePeer; expires: number; distance: number }) {
    super();
    this.peer = params.peer;
    this.expires = params.expires;
    this.distance = params.distance;
  }
}

export class PeerSelfLocated extends TypePeerLocated {
  expires: number;

  protected get [id]() {
    return 0xf8ec284b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["expires", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.expires, "number", "int"],
    ];
  }

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class RestrictionReason extends Constructor {
  platform: string;
  reason: string;
  text: string;

  protected get [id]() {
    return 0xd072acb4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["platform", "string", "string"],
      ["reason", "string", "string"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.platform, "string", "string"],
      [this.reason, "string", "string"],
      [this.text, "string", "string"],
    ];
  }

  constructor(params: { platform: string; reason: string; text: string }) {
    super();
    this.platform = params.platform;
    this.reason = params.reason;
    this.text = params.text;
  }
}

export class InputTheme extends Constructor {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x3c5693e9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputThemeSlug extends TypeInputTheme {
  slug: string;

  protected get [id]() {
    return 0xf5890df1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["slug", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.slug, "string", "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class Theme extends Constructor {
  creator?: true;
  default?: true;
  forChat?: true;
  id: bigint;
  accessHash: bigint;
  slug: string;
  title: string;
  document?: TypeDocument;
  settings?: Array<TypeThemeSettings>;
  emoticon?: string;
  installsCount?: number;

  protected get [id]() {
    return 0xa00e67d6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["creator", "true", "flags.0?true"],
      ["default", "true", "flags.1?true"],
      ["forChat", "true", "flags.5?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["slug", "string", "string"],
      ["title", "string", "string"],
      ["document", TypeDocument, "flags.2?Document"],
      ["settings", [TypeThemeSettings], "flags.3?Vector<ThemeSettings>"],
      ["emoticon", "string", "flags.6?string"],
      ["installsCount", "number", "flags.4?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.creator ?? null, "true", "flags.0?true"],
      [this.default ?? null, "true", "flags.1?true"],
      [this.forChat ?? null, "true", "flags.5?true"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.slug, "string", "string"],
      [this.title, "string", "string"],
      [this.document ?? null, TypeDocument, "flags.2?Document"],
      [
        this.settings ?? null,
        [TypeThemeSettings],
        "flags.3?Vector<ThemeSettings>",
      ],
      [this.emoticon ?? null, "string", "flags.6?string"],
      [this.installsCount ?? null, "number", "flags.4?int"],
    ];
  }

  constructor(
    params: {
      creator?: true;
      default?: true;
      forChat?: true;
      id: bigint;
      accessHash: bigint;
      slug: string;
      title: string;
      document?: TypeDocument;
      settings?: Array<TypeThemeSettings>;
      emoticon?: string;
      installsCount?: number;
    },
  ) {
    super();
    this.creator = params.creator;
    this.default = params.default;
    this.forChat = params.forChat;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.slug = params.slug;
    this.title = params.title;
    this.document = params.document;
    this.settings = params.settings;
    this.emoticon = params.emoticon;
    this.installsCount = params.installsCount;
  }
}

export class AccountThemesNotModified extends TypeAccountThemes {
  protected get [id]() {
    return 0xf41eb622;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AccountThemes extends Constructor {
  hash: bigint;
  themes: Array<TypeTheme>;

  protected get [id]() {
    return 0x9a3d8c6d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["themes", [TypeTheme], "Vector<Theme>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.themes, [TypeTheme], "Vector<Theme>"],
    ];
  }

  constructor(params: { hash: bigint; themes: Array<TypeTheme> }) {
    super();
    this.hash = params.hash;
    this.themes = params.themes;
  }
}

export class AuthLoginToken extends Constructor {
  expires: number;
  token: Uint8Array;

  protected get [id]() {
    return 0x629f1980;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["expires", "number", "int"],
      ["token", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.expires, "number", "int"],
      [this.token, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { expires: number; token: Uint8Array }) {
    super();
    this.expires = params.expires;
    this.token = params.token;
  }
}

export class AuthLoginTokenMigrateTo extends TypeAuthLoginToken {
  dcId: number;
  token: Uint8Array;

  protected get [id]() {
    return 0x068e9916;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dcId", "number", "int"],
      ["token", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dcId, "number", "int"],
      [this.token, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { dcId: number; token: Uint8Array }) {
    super();
    this.dcId = params.dcId;
    this.token = params.token;
  }
}

export class AuthLoginTokenSuccess extends TypeAuthLoginToken {
  authorization: TypeAuthAuthorization;

  protected get [id]() {
    return 0x390d5c5e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["authorization", TypeAuthAuthorization, "auth.Authorization"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.authorization, TypeAuthAuthorization, "auth.Authorization"],
    ];
  }

  constructor(params: { authorization: TypeAuthAuthorization }) {
    super();
    this.authorization = params.authorization;
  }
}

export class AccountContentSettings extends Constructor {
  sensitiveEnabled?: true;
  sensitiveCanChange?: true;

  protected get [id]() {
    return 0x57e28221;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["sensitiveEnabled", "true", "flags.0?true"],
      ["sensitiveCanChange", "true", "flags.1?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.sensitiveEnabled ?? null, "true", "flags.0?true"],
      [this.sensitiveCanChange ?? null, "true", "flags.1?true"],
    ];
  }

  constructor(params: { sensitiveEnabled?: true; sensitiveCanChange?: true }) {
    super();
    this.sensitiveEnabled = params.sensitiveEnabled;
    this.sensitiveCanChange = params.sensitiveCanChange;
  }
}

export class MessagesInactiveChats extends Constructor {
  dates: Array<number>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xa927fec5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["dates", ["number"], "Vector<int>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.dates, ["number"], "Vector<int>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      dates: Array<number>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.dates = params.dates;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class BaseThemeClassic extends TypeBaseTheme {
  protected get [id]() {
    return 0xc3a12462;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class InputThemeSettings extends Constructor {
  messageColorsAnimated?: true;
  baseTheme: TypeBaseTheme;
  accentColor: number;
  outboxAccentColor?: number;
  messageColors?: Array<number>;
  wallpaper?: TypeInputWallPaper;
  wallpaperSettings?: TypeWallPaperSettings;

  protected get [id]() {
    return 0x8fde504f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["messageColorsAnimated", "true", "flags.2?true"],
      ["baseTheme", TypeBaseTheme, "BaseTheme"],
      ["accentColor", "number", "int"],
      ["outboxAccentColor", "number", "flags.3?int"],
      ["messageColors", ["number"], "flags.0?Vector<int>"],
      ["wallpaper", TypeInputWallPaper, "flags.1?InputWallPaper"],
      ["wallpaperSettings", TypeWallPaperSettings, "flags.1?WallPaperSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.messageColorsAnimated ?? null, "true", "flags.2?true"],
      [this.baseTheme, TypeBaseTheme, "BaseTheme"],
      [this.accentColor, "number", "int"],
      [this.outboxAccentColor ?? null, "number", "flags.3?int"],
      [this.messageColors ?? null, ["number"], "flags.0?Vector<int>"],
      [this.wallpaper ?? null, TypeInputWallPaper, "flags.1?InputWallPaper"],
      [
        this.wallpaperSettings ?? null,
        TypeWallPaperSettings,
        "flags.1?WallPaperSettings",
      ],
    ];
  }

  constructor(
    params: {
      messageColorsAnimated?: true;
      baseTheme: TypeBaseTheme;
      accentColor: number;
      outboxAccentColor?: number;
      messageColors?: Array<number>;
      wallpaper?: TypeInputWallPaper;
      wallpaperSettings?: TypeWallPaperSettings;
    },
  ) {
    super();
    this.messageColorsAnimated = params.messageColorsAnimated;
    this.baseTheme = params.baseTheme;
    this.accentColor = params.accentColor;
    this.outboxAccentColor = params.outboxAccentColor;
    this.messageColors = params.messageColors;
    this.wallpaper = params.wallpaper;
    this.wallpaperSettings = params.wallpaperSettings;
  }
}

export class ThemeSettings extends Constructor {
  messageColorsAnimated?: true;
  baseTheme: TypeBaseTheme;
  accentColor: number;
  outboxAccentColor?: number;
  messageColors?: Array<number>;
  wallpaper?: TypeWallPaper;

  protected get [id]() {
    return 0xfa58b6d4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["messageColorsAnimated", "true", "flags.2?true"],
      ["baseTheme", TypeBaseTheme, "BaseTheme"],
      ["accentColor", "number", "int"],
      ["outboxAccentColor", "number", "flags.3?int"],
      ["messageColors", ["number"], "flags.0?Vector<int>"],
      ["wallpaper", TypeWallPaper, "flags.1?WallPaper"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.messageColorsAnimated ?? null, "true", "flags.2?true"],
      [this.baseTheme, TypeBaseTheme, "BaseTheme"],
      [this.accentColor, "number", "int"],
      [this.outboxAccentColor ?? null, "number", "flags.3?int"],
      [this.messageColors ?? null, ["number"], "flags.0?Vector<int>"],
      [this.wallpaper ?? null, TypeWallPaper, "flags.1?WallPaper"],
    ];
  }

  constructor(
    params: {
      messageColorsAnimated?: true;
      baseTheme: TypeBaseTheme;
      accentColor: number;
      outboxAccentColor?: number;
      messageColors?: Array<number>;
      wallpaper?: TypeWallPaper;
    },
  ) {
    super();
    this.messageColorsAnimated = params.messageColorsAnimated;
    this.baseTheme = params.baseTheme;
    this.accentColor = params.accentColor;
    this.outboxAccentColor = params.outboxAccentColor;
    this.messageColors = params.messageColors;
    this.wallpaper = params.wallpaper;
  }
}

export class WebPageAttributeTheme extends TypeWebPageAttribute {
  documents?: Array<TypeDocument>;
  settings?: TypeThemeSettings;

  protected get [id]() {
    return 0x54b56617;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["documents", [TypeDocument], "flags.0?Vector<Document>"],
      ["settings", TypeThemeSettings, "flags.1?ThemeSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.documents ?? null, [TypeDocument], "flags.0?Vector<Document>"],
      [this.settings ?? null, TypeThemeSettings, "flags.1?ThemeSettings"],
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

export class MessageUserVote extends Constructor {
  userId: bigint;
  option: Uint8Array;
  date: number;

  protected get [id]() {
    return 0x34d247b4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["option", Uint8Array, "bytes"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.option, Uint8Array, "bytes"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; option: Uint8Array; date: number }) {
    super();
    this.userId = params.userId;
    this.option = params.option;
    this.date = params.date;
  }
}

export class MessageUserVoteInputOption extends TypeMessageUserVote {
  userId: bigint;
  date: number;

  protected get [id]() {
    return 0x3ca5b0ec;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; date: number }) {
    super();
    this.userId = params.userId;
    this.date = params.date;
  }
}

export class MessageUserVoteMultiple extends TypeMessageUserVote {
  userId: bigint;
  options: Array<Uint8Array>;
  date: number;

  protected get [id]() {
    return 0x8a65e557;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["options", [Uint8Array], "Vector<bytes>"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.options, [Uint8Array], "Vector<bytes>"],
      [this.date, "number", "int"],
    ];
  }

  constructor(
    params: { userId: bigint; options: Array<Uint8Array>; date: number },
  ) {
    super();
    this.userId = params.userId;
    this.options = params.options;
    this.date = params.date;
  }
}

export class MessagesVotesList extends Constructor {
  count: number;
  votes: Array<TypeMessageUserVote>;
  users: Array<TypeUser>;
  nextOffset?: string;

  protected get [id]() {
    return 0x0823f649;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["count", "number", "int"],
      ["votes", [TypeMessageUserVote], "Vector<MessageUserVote>"],
      ["users", [TypeUser], "Vector<User>"],
      ["nextOffset", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.count, "number", "int"],
      [this.votes, [TypeMessageUserVote], "Vector<MessageUserVote>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.nextOffset ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(
    params: {
      count: number;
      votes: Array<TypeMessageUserVote>;
      users: Array<TypeUser>;
      nextOffset?: string;
    },
  ) {
    super();
    this.count = params.count;
    this.votes = params.votes;
    this.users = params.users;
    this.nextOffset = params.nextOffset;
  }
}

export class BankCardOpenUrl extends Constructor {
  url: string;
  name: string;

  protected get [id]() {
    return 0xf568028a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["name", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.name, "string", "string"],
    ];
  }

  constructor(params: { url: string; name: string }) {
    super();
    this.url = params.url;
    this.name = params.name;
  }
}

export class PaymentsBankCardData extends Constructor {
  title: string;
  openUrls: Array<TypeBankCardOpenUrl>;

  protected get [id]() {
    return 0x3e24e573;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
      ["openUrls", [TypeBankCardOpenUrl], "Vector<BankCardOpenUrl>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
      [this.openUrls, [TypeBankCardOpenUrl], "Vector<BankCardOpenUrl>"],
    ];
  }

  constructor(params: { title: string; openUrls: Array<TypeBankCardOpenUrl> }) {
    super();
    this.title = params.title;
    this.openUrls = params.openUrls;
  }
}

export class DialogFilter extends Constructor {
  contacts?: true;
  nonContacts?: true;
  groups?: true;
  broadcasts?: true;
  bots?: true;
  excludeMuted?: true;
  excludeRead?: true;
  excludeArchived?: true;
  id: number;
  title: string;
  emoticon?: string;
  pinnedPeers: Array<TypeInputPeer>;
  includePeers: Array<TypeInputPeer>;
  excludePeers: Array<TypeInputPeer>;

  protected get [id]() {
    return 0x7438f7e8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["contacts", "true", "flags.0?true"],
      ["nonContacts", "true", "flags.1?true"],
      ["groups", "true", "flags.2?true"],
      ["broadcasts", "true", "flags.3?true"],
      ["bots", "true", "flags.4?true"],
      ["excludeMuted", "true", "flags.11?true"],
      ["excludeRead", "true", "flags.12?true"],
      ["excludeArchived", "true", "flags.13?true"],
      ["id", "number", "int"],
      ["title", "string", "string"],
      ["emoticon", "string", "flags.25?string"],
      ["pinnedPeers", [TypeInputPeer], "Vector<InputPeer>"],
      ["includePeers", [TypeInputPeer], "Vector<InputPeer>"],
      ["excludePeers", [TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.contacts ?? null, "true", "flags.0?true"],
      [this.nonContacts ?? null, "true", "flags.1?true"],
      [this.groups ?? null, "true", "flags.2?true"],
      [this.broadcasts ?? null, "true", "flags.3?true"],
      [this.bots ?? null, "true", "flags.4?true"],
      [this.excludeMuted ?? null, "true", "flags.11?true"],
      [this.excludeRead ?? null, "true", "flags.12?true"],
      [this.excludeArchived ?? null, "true", "flags.13?true"],
      [this.id, "number", "int"],
      [this.title, "string", "string"],
      [this.emoticon ?? null, "string", "flags.25?string"],
      [this.pinnedPeers, [TypeInputPeer], "Vector<InputPeer>"],
      [this.includePeers, [TypeInputPeer], "Vector<InputPeer>"],
      [this.excludePeers, [TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(
    params: {
      contacts?: true;
      nonContacts?: true;
      groups?: true;
      broadcasts?: true;
      bots?: true;
      excludeMuted?: true;
      excludeRead?: true;
      excludeArchived?: true;
      id: number;
      title: string;
      emoticon?: string;
      pinnedPeers: Array<TypeInputPeer>;
      includePeers: Array<TypeInputPeer>;
      excludePeers: Array<TypeInputPeer>;
    },
  ) {
    super();
    this.contacts = params.contacts;
    this.nonContacts = params.nonContacts;
    this.groups = params.groups;
    this.broadcasts = params.broadcasts;
    this.bots = params.bots;
    this.excludeMuted = params.excludeMuted;
    this.excludeRead = params.excludeRead;
    this.excludeArchived = params.excludeArchived;
    this.id = params.id;
    this.title = params.title;
    this.emoticon = params.emoticon;
    this.pinnedPeers = params.pinnedPeers;
    this.includePeers = params.includePeers;
    this.excludePeers = params.excludePeers;
  }
}

export class DialogFilterDefault extends TypeDialogFilter {
  protected get [id]() {
    return 0x363293ae;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class DialogFilterSuggested extends Constructor {
  filter: TypeDialogFilter;
  description: string;

  protected get [id]() {
    return 0x77744d4a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["filter", TypeDialogFilter, "DialogFilter"],
      ["description", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.filter, TypeDialogFilter, "DialogFilter"],
      [this.description, "string", "string"],
    ];
  }

  constructor(params: { filter: TypeDialogFilter; description: string }) {
    super();
    this.filter = params.filter;
    this.description = params.description;
  }
}

export class StatsDateRangeDays extends Constructor {
  minDate: number;
  maxDate: number;

  protected get [id]() {
    return 0xb637edaf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["minDate", "number", "int"],
      ["maxDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.minDate, "number", "int"],
      [this.maxDate, "number", "int"],
    ];
  }

  constructor(params: { minDate: number; maxDate: number }) {
    super();
    this.minDate = params.minDate;
    this.maxDate = params.maxDate;
  }
}

export class StatsAbsValueAndPrev extends Constructor {
  current: number;
  previous: number;

  protected get [id]() {
    return 0xcb43acde;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["current", "number", "double"],
      ["previous", "number", "double"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.current, "number", "double"],
      [this.previous, "number", "double"],
    ];
  }

  constructor(params: { current: number; previous: number }) {
    super();
    this.current = params.current;
    this.previous = params.previous;
  }
}

export class StatsPercentValue extends Constructor {
  part: number;
  total: number;

  protected get [id]() {
    return 0xcbce2fe0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["part", "number", "double"],
      ["total", "number", "double"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.part, "number", "double"],
      [this.total, "number", "double"],
    ];
  }

  constructor(params: { part: number; total: number }) {
    super();
    this.part = params.part;
    this.total = params.total;
  }
}

export class StatsGraphAsync extends TypeStatsGraph {
  token: string;

  protected get [id]() {
    return 0x4a27eb2d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["token", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.token, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["error", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.error, "string", "string"],
    ];
  }

  constructor(params: { error: string }) {
    super();
    this.error = params.error;
  }
}

export class StatsGraph extends Constructor {
  json: TypeDataJSON;
  zoomToken?: string;

  protected get [id]() {
    return 0x8ea464b6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["json", TypeDataJSON, "DataJSON"],
      ["zoomToken", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.json, TypeDataJSON, "DataJSON"],
      [this.zoomToken ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(params: { json: TypeDataJSON; zoomToken?: string }) {
    super();
    this.json = params.json;
    this.zoomToken = params.zoomToken;
  }
}

export class MessageInteractionCounters extends Constructor {
  msgId: number;
  views: number;
  forwards: number;

  protected get [id]() {
    return 0xad4fc9bd;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgId", "number", "int"],
      ["views", "number", "int"],
      ["forwards", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgId, "number", "int"],
      [this.views, "number", "int"],
      [this.forwards, "number", "int"],
    ];
  }

  constructor(params: { msgId: number; views: number; forwards: number }) {
    super();
    this.msgId = params.msgId;
    this.views = params.views;
    this.forwards = params.forwards;
  }
}

export class StatsBroadcastStats extends Constructor {
  period: TypeStatsDateRangeDays;
  followers: TypeStatsAbsValueAndPrev;
  viewsPerPost: TypeStatsAbsValueAndPrev;
  sharesPerPost: TypeStatsAbsValueAndPrev;
  enabledNotifications: TypeStatsPercentValue;
  growthGraph: TypeStatsGraph;
  followersGraph: TypeStatsGraph;
  muteGraph: TypeStatsGraph;
  topHoursGraph: TypeStatsGraph;
  interactionsGraph: TypeStatsGraph;
  ivInteractionsGraph: TypeStatsGraph;
  viewsBySourceGraph: TypeStatsGraph;
  newFollowersBySourceGraph: TypeStatsGraph;
  languagesGraph: TypeStatsGraph;
  recentMessageInteractions: Array<TypeMessageInteractionCounters>;

  protected get [id]() {
    return 0xbdf78394;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["period", TypeStatsDateRangeDays, "StatsDateRangeDays"],
      ["followers", TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      ["viewsPerPost", TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      ["sharesPerPost", TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      ["enabledNotifications", TypeStatsPercentValue, "StatsPercentValue"],
      ["growthGraph", TypeStatsGraph, "StatsGraph"],
      ["followersGraph", TypeStatsGraph, "StatsGraph"],
      ["muteGraph", TypeStatsGraph, "StatsGraph"],
      ["topHoursGraph", TypeStatsGraph, "StatsGraph"],
      ["interactionsGraph", TypeStatsGraph, "StatsGraph"],
      ["ivInteractionsGraph", TypeStatsGraph, "StatsGraph"],
      ["viewsBySourceGraph", TypeStatsGraph, "StatsGraph"],
      ["newFollowersBySourceGraph", TypeStatsGraph, "StatsGraph"],
      ["languagesGraph", TypeStatsGraph, "StatsGraph"],
      [
        "recentMessageInteractions",
        [TypeMessageInteractionCounters],
        "Vector<MessageInteractionCounters>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      [this.period, TypeStatsDateRangeDays, "StatsDateRangeDays"],
      [this.followers, TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      [this.viewsPerPost, TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      [this.sharesPerPost, TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      [this.enabledNotifications, TypeStatsPercentValue, "StatsPercentValue"],
      [this.growthGraph, TypeStatsGraph, "StatsGraph"],
      [this.followersGraph, TypeStatsGraph, "StatsGraph"],
      [this.muteGraph, TypeStatsGraph, "StatsGraph"],
      [this.topHoursGraph, TypeStatsGraph, "StatsGraph"],
      [this.interactionsGraph, TypeStatsGraph, "StatsGraph"],
      [this.ivInteractionsGraph, TypeStatsGraph, "StatsGraph"],
      [this.viewsBySourceGraph, TypeStatsGraph, "StatsGraph"],
      [this.newFollowersBySourceGraph, TypeStatsGraph, "StatsGraph"],
      [this.languagesGraph, TypeStatsGraph, "StatsGraph"],
      [
        this.recentMessageInteractions,
        [TypeMessageInteractionCounters],
        "Vector<MessageInteractionCounters>",
      ],
    ];
  }

  constructor(
    params: {
      period: TypeStatsDateRangeDays;
      followers: TypeStatsAbsValueAndPrev;
      viewsPerPost: TypeStatsAbsValueAndPrev;
      sharesPerPost: TypeStatsAbsValueAndPrev;
      enabledNotifications: TypeStatsPercentValue;
      growthGraph: TypeStatsGraph;
      followersGraph: TypeStatsGraph;
      muteGraph: TypeStatsGraph;
      topHoursGraph: TypeStatsGraph;
      interactionsGraph: TypeStatsGraph;
      ivInteractionsGraph: TypeStatsGraph;
      viewsBySourceGraph: TypeStatsGraph;
      newFollowersBySourceGraph: TypeStatsGraph;
      languagesGraph: TypeStatsGraph;
      recentMessageInteractions: Array<TypeMessageInteractionCounters>;
    },
  ) {
    super();
    this.period = params.period;
    this.followers = params.followers;
    this.viewsPerPost = params.viewsPerPost;
    this.sharesPerPost = params.sharesPerPost;
    this.enabledNotifications = params.enabledNotifications;
    this.growthGraph = params.growthGraph;
    this.followersGraph = params.followersGraph;
    this.muteGraph = params.muteGraph;
    this.topHoursGraph = params.topHoursGraph;
    this.interactionsGraph = params.interactionsGraph;
    this.ivInteractionsGraph = params.ivInteractionsGraph;
    this.viewsBySourceGraph = params.viewsBySourceGraph;
    this.newFollowersBySourceGraph = params.newFollowersBySourceGraph;
    this.languagesGraph = params.languagesGraph;
    this.recentMessageInteractions = params.recentMessageInteractions;
  }
}

export class HelpPromoDataEmpty extends TypeHelpPromoData {
  expires: number;

  protected get [id]() {
    return 0x98f6ac75;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["expires", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.expires, "number", "int"],
    ];
  }

  constructor(params: { expires: number }) {
    super();
    this.expires = params.expires;
  }
}

export class HelpPromoData extends Constructor {
  proxy?: true;
  expires: number;
  peer: TypePeer;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  psaType?: string;
  psaMessage?: string;

  protected get [id]() {
    return 0x8c39793f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["proxy", "true", "flags.0?true"],
      ["expires", "number", "int"],
      ["peer", TypePeer, "Peer"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["psaType", "string", "flags.1?string"],
      ["psaMessage", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.proxy ?? null, "true", "flags.0?true"],
      [this.expires, "number", "int"],
      [this.peer, TypePeer, "Peer"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.psaType ?? null, "string", "flags.1?string"],
      [this.psaMessage ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(
    params: {
      proxy?: true;
      expires: number;
      peer: TypePeer;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
      psaType?: string;
      psaMessage?: string;
    },
  ) {
    super();
    this.proxy = params.proxy;
    this.expires = params.expires;
    this.peer = params.peer;
    this.chats = params.chats;
    this.users = params.users;
    this.psaType = params.psaType;
    this.psaMessage = params.psaMessage;
  }
}

export class VideoSize extends Constructor {
  type: string;
  w: number;
  h: number;
  size: number;
  videoStartTs?: number;

  protected get [id]() {
    return 0xde33b094;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["type", "string", "string"],
      ["w", "number", "int"],
      ["h", "number", "int"],
      ["size", "number", "int"],
      ["videoStartTs", "number", "flags.0?double"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.type, "string", "string"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
      [this.size, "number", "int"],
      [this.videoStartTs ?? null, "number", "flags.0?double"],
    ];
  }

  constructor(
    params: {
      type: string;
      w: number;
      h: number;
      size: number;
      videoStartTs?: number;
    },
  ) {
    super();
    this.type = params.type;
    this.w = params.w;
    this.h = params.h;
    this.size = params.size;
    this.videoStartTs = params.videoStartTs;
  }
}

export class VideoSizeEmojiMarkup extends TypeVideoSize {
  emojiId: bigint;
  backgroundColors: Array<number>;

  protected get [id]() {
    return 0xf85c413c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["emojiId", "bigint", "long"],
      ["backgroundColors", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emojiId, "bigint", "long"],
      [this.backgroundColors, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { emojiId: bigint; backgroundColors: Array<number> }) {
    super();
    this.emojiId = params.emojiId;
    this.backgroundColors = params.backgroundColors;
  }
}

export class VideoSizeStickerMarkup extends TypeVideoSize {
  stickerset: TypeInputStickerSet;
  stickerId: bigint;
  backgroundColors: Array<number>;

  protected get [id]() {
    return 0x0da082fe;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stickerset", TypeInputStickerSet, "InputStickerSet"],
      ["stickerId", "bigint", "long"],
      ["backgroundColors", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stickerset, TypeInputStickerSet, "InputStickerSet"],
      [this.stickerId, "bigint", "long"],
      [this.backgroundColors, ["number"], "Vector<int>"],
    ];
  }

  constructor(
    params: {
      stickerset: TypeInputStickerSet;
      stickerId: bigint;
      backgroundColors: Array<number>;
    },
  ) {
    super();
    this.stickerset = params.stickerset;
    this.stickerId = params.stickerId;
    this.backgroundColors = params.backgroundColors;
  }
}

export class StatsGroupTopPoster extends Constructor {
  userId: bigint;
  messages: number;
  avgChars: number;

  protected get [id]() {
    return 0x9d04af9b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["messages", "number", "int"],
      ["avgChars", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.messages, "number", "int"],
      [this.avgChars, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; messages: number; avgChars: number }) {
    super();
    this.userId = params.userId;
    this.messages = params.messages;
    this.avgChars = params.avgChars;
  }
}

export class StatsGroupTopAdmin extends Constructor {
  userId: bigint;
  deleted: number;
  kicked: number;
  banned: number;

  protected get [id]() {
    return 0xd7584c87;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["deleted", "number", "int"],
      ["kicked", "number", "int"],
      ["banned", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.deleted, "number", "int"],
      [this.kicked, "number", "int"],
      [this.banned, "number", "int"],
    ];
  }

  constructor(
    params: { userId: bigint; deleted: number; kicked: number; banned: number },
  ) {
    super();
    this.userId = params.userId;
    this.deleted = params.deleted;
    this.kicked = params.kicked;
    this.banned = params.banned;
  }
}

export class StatsGroupTopInviter extends Constructor {
  userId: bigint;
  invitations: number;

  protected get [id]() {
    return 0x535f779d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["invitations", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.invitations, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; invitations: number }) {
    super();
    this.userId = params.userId;
    this.invitations = params.invitations;
  }
}

export class StatsMegagroupStats extends Constructor {
  period: TypeStatsDateRangeDays;
  members: TypeStatsAbsValueAndPrev;
  messages: TypeStatsAbsValueAndPrev;
  viewers: TypeStatsAbsValueAndPrev;
  posters: TypeStatsAbsValueAndPrev;
  growthGraph: TypeStatsGraph;
  membersGraph: TypeStatsGraph;
  newMembersBySourceGraph: TypeStatsGraph;
  languagesGraph: TypeStatsGraph;
  messagesGraph: TypeStatsGraph;
  actionsGraph: TypeStatsGraph;
  topHoursGraph: TypeStatsGraph;
  weekdaysGraph: TypeStatsGraph;
  topPosters: Array<TypeStatsGroupTopPoster>;
  topAdmins: Array<TypeStatsGroupTopAdmin>;
  topInviters: Array<TypeStatsGroupTopInviter>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xef7ff916;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["period", TypeStatsDateRangeDays, "StatsDateRangeDays"],
      ["members", TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      ["messages", TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      ["viewers", TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      ["posters", TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      ["growthGraph", TypeStatsGraph, "StatsGraph"],
      ["membersGraph", TypeStatsGraph, "StatsGraph"],
      ["newMembersBySourceGraph", TypeStatsGraph, "StatsGraph"],
      ["languagesGraph", TypeStatsGraph, "StatsGraph"],
      ["messagesGraph", TypeStatsGraph, "StatsGraph"],
      ["actionsGraph", TypeStatsGraph, "StatsGraph"],
      ["topHoursGraph", TypeStatsGraph, "StatsGraph"],
      ["weekdaysGraph", TypeStatsGraph, "StatsGraph"],
      ["topPosters", [TypeStatsGroupTopPoster], "Vector<StatsGroupTopPoster>"],
      ["topAdmins", [TypeStatsGroupTopAdmin], "Vector<StatsGroupTopAdmin>"],
      [
        "topInviters",
        [TypeStatsGroupTopInviter],
        "Vector<StatsGroupTopInviter>",
      ],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.period, TypeStatsDateRangeDays, "StatsDateRangeDays"],
      [this.members, TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      [this.messages, TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      [this.viewers, TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      [this.posters, TypeStatsAbsValueAndPrev, "StatsAbsValueAndPrev"],
      [this.growthGraph, TypeStatsGraph, "StatsGraph"],
      [this.membersGraph, TypeStatsGraph, "StatsGraph"],
      [this.newMembersBySourceGraph, TypeStatsGraph, "StatsGraph"],
      [this.languagesGraph, TypeStatsGraph, "StatsGraph"],
      [this.messagesGraph, TypeStatsGraph, "StatsGraph"],
      [this.actionsGraph, TypeStatsGraph, "StatsGraph"],
      [this.topHoursGraph, TypeStatsGraph, "StatsGraph"],
      [this.weekdaysGraph, TypeStatsGraph, "StatsGraph"],
      [
        this.topPosters,
        [TypeStatsGroupTopPoster],
        "Vector<StatsGroupTopPoster>",
      ],
      [this.topAdmins, [TypeStatsGroupTopAdmin], "Vector<StatsGroupTopAdmin>"],
      [
        this.topInviters,
        [TypeStatsGroupTopInviter],
        "Vector<StatsGroupTopInviter>",
      ],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      period: TypeStatsDateRangeDays;
      members: TypeStatsAbsValueAndPrev;
      messages: TypeStatsAbsValueAndPrev;
      viewers: TypeStatsAbsValueAndPrev;
      posters: TypeStatsAbsValueAndPrev;
      growthGraph: TypeStatsGraph;
      membersGraph: TypeStatsGraph;
      newMembersBySourceGraph: TypeStatsGraph;
      languagesGraph: TypeStatsGraph;
      messagesGraph: TypeStatsGraph;
      actionsGraph: TypeStatsGraph;
      topHoursGraph: TypeStatsGraph;
      weekdaysGraph: TypeStatsGraph;
      topPosters: Array<TypeStatsGroupTopPoster>;
      topAdmins: Array<TypeStatsGroupTopAdmin>;
      topInviters: Array<TypeStatsGroupTopInviter>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.period = params.period;
    this.members = params.members;
    this.messages = params.messages;
    this.viewers = params.viewers;
    this.posters = params.posters;
    this.growthGraph = params.growthGraph;
    this.membersGraph = params.membersGraph;
    this.newMembersBySourceGraph = params.newMembersBySourceGraph;
    this.languagesGraph = params.languagesGraph;
    this.messagesGraph = params.messagesGraph;
    this.actionsGraph = params.actionsGraph;
    this.topHoursGraph = params.topHoursGraph;
    this.weekdaysGraph = params.weekdaysGraph;
    this.topPosters = params.topPosters;
    this.topAdmins = params.topAdmins;
    this.topInviters = params.topInviters;
    this.users = params.users;
  }
}

export class GlobalPrivacySettings extends Constructor {
  archiveAndMuteNewNoncontactPeers?: boolean;

  protected get [id]() {
    return 0xbea2f424;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["archiveAndMuteNewNoncontactPeers", "boolean", "flags.0?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [
        this.archiveAndMuteNewNoncontactPeers ?? null,
        "boolean",
        "flags.0?Bool",
      ],
    ];
  }

  constructor(params: { archiveAndMuteNewNoncontactPeers?: boolean }) {
    super();
    this.archiveAndMuteNewNoncontactPeers =
      params.archiveAndMuteNewNoncontactPeers;
  }
}

export class HelpCountryCode extends Constructor {
  countryCode: string;
  prefixes?: Array<string>;
  patterns?: Array<string>;

  protected get [id]() {
    return 0x4203c5ef;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["countryCode", "string", "string"],
      ["prefixes", ["string"], "flags.0?Vector<string>"],
      ["patterns", ["string"], "flags.1?Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.countryCode, "string", "string"],
      [this.prefixes ?? null, ["string"], "flags.0?Vector<string>"],
      [this.patterns ?? null, ["string"], "flags.1?Vector<string>"],
    ];
  }

  constructor(
    params: {
      countryCode: string;
      prefixes?: Array<string>;
      patterns?: Array<string>;
    },
  ) {
    super();
    this.countryCode = params.countryCode;
    this.prefixes = params.prefixes;
    this.patterns = params.patterns;
  }
}

export class HelpCountry extends Constructor {
  hidden?: true;
  iso2: string;
  defaultName: string;
  name?: string;
  countryCodes: Array<TypeHelpCountryCode>;

  protected get [id]() {
    return 0xc3878e23;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hidden", "true", "flags.0?true"],
      ["iso2", "string", "string"],
      ["defaultName", "string", "string"],
      ["name", "string", "flags.1?string"],
      ["countryCodes", [TypeHelpCountryCode], "Vector<help.CountryCode>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hidden ?? null, "true", "flags.0?true"],
      [this.iso2, "string", "string"],
      [this.defaultName, "string", "string"],
      [this.name ?? null, "string", "flags.1?string"],
      [this.countryCodes, [TypeHelpCountryCode], "Vector<help.CountryCode>"],
    ];
  }

  constructor(
    params: {
      hidden?: true;
      iso2: string;
      defaultName: string;
      name?: string;
      countryCodes: Array<TypeHelpCountryCode>;
    },
  ) {
    super();
    this.hidden = params.hidden;
    this.iso2 = params.iso2;
    this.defaultName = params.defaultName;
    this.name = params.name;
    this.countryCodes = params.countryCodes;
  }
}

export class HelpCountriesListNotModified extends TypeHelpCountriesList {
  protected get [id]() {
    return 0x93cc1f32;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class HelpCountriesList extends Constructor {
  countries: Array<TypeHelpCountry>;
  hash: number;

  protected get [id]() {
    return 0x87d0759e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["countries", [TypeHelpCountry], "Vector<help.Country>"],
      ["hash", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.countries, [TypeHelpCountry], "Vector<help.Country>"],
      [this.hash, "number", "int"],
    ];
  }

  constructor(params: { countries: Array<TypeHelpCountry>; hash: number }) {
    super();
    this.countries = params.countries;
    this.hash = params.hash;
  }
}

export class MessageViews extends Constructor {
  views?: number;
  forwards?: number;
  replies?: TypeMessageReplies;

  protected get [id]() {
    return 0x455b853d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["views", "number", "flags.0?int"],
      ["forwards", "number", "flags.1?int"],
      ["replies", TypeMessageReplies, "flags.2?MessageReplies"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.views ?? null, "number", "flags.0?int"],
      [this.forwards ?? null, "number", "flags.1?int"],
      [this.replies ?? null, TypeMessageReplies, "flags.2?MessageReplies"],
    ];
  }

  constructor(
    params: { views?: number; forwards?: number; replies?: TypeMessageReplies },
  ) {
    super();
    this.views = params.views;
    this.forwards = params.forwards;
    this.replies = params.replies;
  }
}

export class MessagesMessageViews extends Constructor {
  views: Array<TypeMessageViews>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xb6c4f543;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["views", [TypeMessageViews], "Vector<MessageViews>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.views, [TypeMessageViews], "Vector<MessageViews>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      views: Array<TypeMessageViews>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.views = params.views;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesDiscussionMessage extends Constructor {
  messages: Array<TypeMessage>;
  maxId?: number;
  readInboxMaxId?: number;
  readOutboxMaxId?: number;
  unreadCount: number;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xa6341782;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["maxId", "number", "flags.0?int"],
      ["readInboxMaxId", "number", "flags.1?int"],
      ["readOutboxMaxId", "number", "flags.2?int"],
      ["unreadCount", "number", "int"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.maxId ?? null, "number", "flags.0?int"],
      [this.readInboxMaxId ?? null, "number", "flags.1?int"],
      [this.readOutboxMaxId ?? null, "number", "flags.2?int"],
      [this.unreadCount, "number", "int"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      messages: Array<TypeMessage>;
      maxId?: number;
      readInboxMaxId?: number;
      readOutboxMaxId?: number;
      unreadCount: number;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.messages = params.messages;
    this.maxId = params.maxId;
    this.readInboxMaxId = params.readInboxMaxId;
    this.readOutboxMaxId = params.readOutboxMaxId;
    this.unreadCount = params.unreadCount;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessageReplyHeader extends Constructor {
  replyToScheduled?: true;
  forumTopic?: true;
  replyToMsgId: number;
  replyToPeerId?: TypePeer;
  replyToTopId?: number;

  protected get [id]() {
    return 0xa6d57763;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["replyToScheduled", "true", "flags.2?true"],
      ["forumTopic", "true", "flags.3?true"],
      ["replyToMsgId", "number", "int"],
      ["replyToPeerId", TypePeer, "flags.0?Peer"],
      ["replyToTopId", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.replyToScheduled ?? null, "true", "flags.2?true"],
      [this.forumTopic ?? null, "true", "flags.3?true"],
      [this.replyToMsgId, "number", "int"],
      [this.replyToPeerId ?? null, TypePeer, "flags.0?Peer"],
      [this.replyToTopId ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(
    params: {
      replyToScheduled?: true;
      forumTopic?: true;
      replyToMsgId: number;
      replyToPeerId?: TypePeer;
      replyToTopId?: number;
    },
  ) {
    super();
    this.replyToScheduled = params.replyToScheduled;
    this.forumTopic = params.forumTopic;
    this.replyToMsgId = params.replyToMsgId;
    this.replyToPeerId = params.replyToPeerId;
    this.replyToTopId = params.replyToTopId;
  }
}

export class MessageReplies extends Constructor {
  comments?: true;
  replies: number;
  repliesPts: number;
  recentRepliers?: Array<TypePeer>;
  channelId?: bigint;
  maxId?: number;
  readMaxId?: number;

  protected get [id]() {
    return 0x83d60fc2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["comments", "true", "flags.0?true"],
      ["replies", "number", "int"],
      ["repliesPts", "number", "int"],
      ["recentRepliers", [TypePeer], "flags.1?Vector<Peer>"],
      ["channelId", "bigint", "flags.0?long"],
      ["maxId", "number", "flags.2?int"],
      ["readMaxId", "number", "flags.3?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.comments ?? null, "true", "flags.0?true"],
      [this.replies, "number", "int"],
      [this.repliesPts, "number", "int"],
      [this.recentRepliers ?? null, [TypePeer], "flags.1?Vector<Peer>"],
      [this.channelId ?? null, "bigint", "flags.0?long"],
      [this.maxId ?? null, "number", "flags.2?int"],
      [this.readMaxId ?? null, "number", "flags.3?int"],
    ];
  }

  constructor(
    params: {
      comments?: true;
      replies: number;
      repliesPts: number;
      recentRepliers?: Array<TypePeer>;
      channelId?: bigint;
      maxId?: number;
      readMaxId?: number;
    },
  ) {
    super();
    this.comments = params.comments;
    this.replies = params.replies;
    this.repliesPts = params.repliesPts;
    this.recentRepliers = params.recentRepliers;
    this.channelId = params.channelId;
    this.maxId = params.maxId;
    this.readMaxId = params.readMaxId;
  }
}

export class PeerBlocked extends Constructor {
  peerId: TypePeer;
  date: number;

  protected get [id]() {
    return 0xe8fd8014;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peerId", TypePeer, "Peer"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peerId, TypePeer, "Peer"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { peerId: TypePeer; date: number }) {
    super();
    this.peerId = params.peerId;
    this.date = params.date;
  }
}

export class StatsMessageStats extends Constructor {
  viewsGraph: TypeStatsGraph;

  protected get [id]() {
    return 0x8999f295;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["viewsGraph", TypeStatsGraph, "StatsGraph"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.viewsGraph, TypeStatsGraph, "StatsGraph"],
    ];
  }

  constructor(params: { viewsGraph: TypeStatsGraph }) {
    super();
    this.viewsGraph = params.viewsGraph;
  }
}

export class GroupCallDiscarded extends TypeGroupCall {
  id: bigint;
  accessHash: bigint;
  duration: number;

  protected get [id]() {
    return 0x7780bcb4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["duration", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.duration, "number", "int"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint; duration: number }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.duration = params.duration;
  }
}

export class GroupCall extends Constructor {
  joinMuted?: true;
  canChangeJoinMuted?: true;
  joinDateAsc?: true;
  scheduleStartSubscribed?: true;
  canStartVideo?: true;
  recordVideoActive?: true;
  rtmpStream?: true;
  listenersHidden?: true;
  id: bigint;
  accessHash: bigint;
  participantsCount: number;
  title?: string;
  streamDcId?: number;
  recordStartDate?: number;
  scheduleDate?: number;
  unmutedVideoCount?: number;
  unmutedVideoLimit: number;
  version: number;

  protected get [id]() {
    return 0xd597650c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["joinMuted", "true", "flags.1?true"],
      ["canChangeJoinMuted", "true", "flags.2?true"],
      ["joinDateAsc", "true", "flags.6?true"],
      ["scheduleStartSubscribed", "true", "flags.8?true"],
      ["canStartVideo", "true", "flags.9?true"],
      ["recordVideoActive", "true", "flags.11?true"],
      ["rtmpStream", "true", "flags.12?true"],
      ["listenersHidden", "true", "flags.13?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["participantsCount", "number", "int"],
      ["title", "string", "flags.3?string"],
      ["streamDcId", "number", "flags.4?int"],
      ["recordStartDate", "number", "flags.5?int"],
      ["scheduleDate", "number", "flags.7?int"],
      ["unmutedVideoCount", "number", "flags.10?int"],
      ["unmutedVideoLimit", "number", "int"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.joinMuted ?? null, "true", "flags.1?true"],
      [this.canChangeJoinMuted ?? null, "true", "flags.2?true"],
      [this.joinDateAsc ?? null, "true", "flags.6?true"],
      [this.scheduleStartSubscribed ?? null, "true", "flags.8?true"],
      [this.canStartVideo ?? null, "true", "flags.9?true"],
      [this.recordVideoActive ?? null, "true", "flags.11?true"],
      [this.rtmpStream ?? null, "true", "flags.12?true"],
      [this.listenersHidden ?? null, "true", "flags.13?true"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.participantsCount, "number", "int"],
      [this.title ?? null, "string", "flags.3?string"],
      [this.streamDcId ?? null, "number", "flags.4?int"],
      [this.recordStartDate ?? null, "number", "flags.5?int"],
      [this.scheduleDate ?? null, "number", "flags.7?int"],
      [this.unmutedVideoCount ?? null, "number", "flags.10?int"],
      [this.unmutedVideoLimit, "number", "int"],
      [this.version, "number", "int"],
    ];
  }

  constructor(
    params: {
      joinMuted?: true;
      canChangeJoinMuted?: true;
      joinDateAsc?: true;
      scheduleStartSubscribed?: true;
      canStartVideo?: true;
      recordVideoActive?: true;
      rtmpStream?: true;
      listenersHidden?: true;
      id: bigint;
      accessHash: bigint;
      participantsCount: number;
      title?: string;
      streamDcId?: number;
      recordStartDate?: number;
      scheduleDate?: number;
      unmutedVideoCount?: number;
      unmutedVideoLimit: number;
      version: number;
    },
  ) {
    super();
    this.joinMuted = params.joinMuted;
    this.canChangeJoinMuted = params.canChangeJoinMuted;
    this.joinDateAsc = params.joinDateAsc;
    this.scheduleStartSubscribed = params.scheduleStartSubscribed;
    this.canStartVideo = params.canStartVideo;
    this.recordVideoActive = params.recordVideoActive;
    this.rtmpStream = params.rtmpStream;
    this.listenersHidden = params.listenersHidden;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.participantsCount = params.participantsCount;
    this.title = params.title;
    this.streamDcId = params.streamDcId;
    this.recordStartDate = params.recordStartDate;
    this.scheduleDate = params.scheduleDate;
    this.unmutedVideoCount = params.unmutedVideoCount;
    this.unmutedVideoLimit = params.unmutedVideoLimit;
    this.version = params.version;
  }
}

export class InputGroupCall extends Constructor {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xd8aa840f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class GroupCallParticipant extends Constructor {
  muted?: true;
  left?: true;
  canSelfUnmute?: true;
  justJoined?: true;
  versioned?: true;
  min?: true;
  mutedByYou?: true;
  volumeByAdmin?: true;
  self?: true;
  videoJoined?: true;
  peer: TypePeer;
  date: number;
  activeDate?: number;
  source: number;
  volume?: number;
  about?: string;
  raiseHandRating?: bigint;
  video?: TypeGroupCallParticipantVideo;
  presentation?: TypeGroupCallParticipantVideo;

  protected get [id]() {
    return 0xeba636fe;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["muted", "true", "flags.0?true"],
      ["left", "true", "flags.1?true"],
      ["canSelfUnmute", "true", "flags.2?true"],
      ["justJoined", "true", "flags.4?true"],
      ["versioned", "true", "flags.5?true"],
      ["min", "true", "flags.8?true"],
      ["mutedByYou", "true", "flags.9?true"],
      ["volumeByAdmin", "true", "flags.10?true"],
      ["self", "true", "flags.12?true"],
      ["videoJoined", "true", "flags.15?true"],
      ["peer", TypePeer, "Peer"],
      ["date", "number", "int"],
      ["activeDate", "number", "flags.3?int"],
      ["source", "number", "int"],
      ["volume", "number", "flags.7?int"],
      ["about", "string", "flags.11?string"],
      ["raiseHandRating", "bigint", "flags.13?long"],
      [
        "video",
        TypeGroupCallParticipantVideo,
        "flags.6?GroupCallParticipantVideo",
      ],
      [
        "presentation",
        TypeGroupCallParticipantVideo,
        "flags.14?GroupCallParticipantVideo",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.muted ?? null, "true", "flags.0?true"],
      [this.left ?? null, "true", "flags.1?true"],
      [this.canSelfUnmute ?? null, "true", "flags.2?true"],
      [this.justJoined ?? null, "true", "flags.4?true"],
      [this.versioned ?? null, "true", "flags.5?true"],
      [this.min ?? null, "true", "flags.8?true"],
      [this.mutedByYou ?? null, "true", "flags.9?true"],
      [this.volumeByAdmin ?? null, "true", "flags.10?true"],
      [this.self ?? null, "true", "flags.12?true"],
      [this.videoJoined ?? null, "true", "flags.15?true"],
      [this.peer, TypePeer, "Peer"],
      [this.date, "number", "int"],
      [this.activeDate ?? null, "number", "flags.3?int"],
      [this.source, "number", "int"],
      [this.volume ?? null, "number", "flags.7?int"],
      [this.about ?? null, "string", "flags.11?string"],
      [this.raiseHandRating ?? null, "bigint", "flags.13?long"],
      [
        this.video ?? null,
        TypeGroupCallParticipantVideo,
        "flags.6?GroupCallParticipantVideo",
      ],
      [
        this.presentation ?? null,
        TypeGroupCallParticipantVideo,
        "flags.14?GroupCallParticipantVideo",
      ],
    ];
  }

  constructor(
    params: {
      muted?: true;
      left?: true;
      canSelfUnmute?: true;
      justJoined?: true;
      versioned?: true;
      min?: true;
      mutedByYou?: true;
      volumeByAdmin?: true;
      self?: true;
      videoJoined?: true;
      peer: TypePeer;
      date: number;
      activeDate?: number;
      source: number;
      volume?: number;
      about?: string;
      raiseHandRating?: bigint;
      video?: TypeGroupCallParticipantVideo;
      presentation?: TypeGroupCallParticipantVideo;
    },
  ) {
    super();
    this.muted = params.muted;
    this.left = params.left;
    this.canSelfUnmute = params.canSelfUnmute;
    this.justJoined = params.justJoined;
    this.versioned = params.versioned;
    this.min = params.min;
    this.mutedByYou = params.mutedByYou;
    this.volumeByAdmin = params.volumeByAdmin;
    this.self = params.self;
    this.videoJoined = params.videoJoined;
    this.peer = params.peer;
    this.date = params.date;
    this.activeDate = params.activeDate;
    this.source = params.source;
    this.volume = params.volume;
    this.about = params.about;
    this.raiseHandRating = params.raiseHandRating;
    this.video = params.video;
    this.presentation = params.presentation;
  }
}

export class PhoneGroupCall extends Constructor {
  call: TypeGroupCall;
  participants: Array<TypeGroupCallParticipant>;
  participantsNextOffset: string;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x9e727aad;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", TypeGroupCall, "GroupCall"],
      [
        "participants",
        [TypeGroupCallParticipant],
        "Vector<GroupCallParticipant>",
      ],
      ["participantsNextOffset", "string", "string"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, TypeGroupCall, "GroupCall"],
      [
        this.participants,
        [TypeGroupCallParticipant],
        "Vector<GroupCallParticipant>",
      ],
      [this.participantsNextOffset, "string", "string"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      call: TypeGroupCall;
      participants: Array<TypeGroupCallParticipant>;
      participantsNextOffset: string;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.call = params.call;
    this.participants = params.participants;
    this.participantsNextOffset = params.participantsNextOffset;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class PhoneGroupParticipants extends Constructor {
  count: number;
  participants: Array<TypeGroupCallParticipant>;
  nextOffset: string;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  version: number;

  protected get [id]() {
    return 0xf47751b6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      [
        "participants",
        [TypeGroupCallParticipant],
        "Vector<GroupCallParticipant>",
      ],
      ["nextOffset", "string", "string"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [
        this.participants,
        [TypeGroupCallParticipant],
        "Vector<GroupCallParticipant>",
      ],
      [this.nextOffset, "string", "string"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.version, "number", "int"],
    ];
  }

  constructor(
    params: {
      count: number;
      participants: Array<TypeGroupCallParticipant>;
      nextOffset: string;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
      version: number;
    },
  ) {
    super();
    this.count = params.count;
    this.participants = params.participants;
    this.nextOffset = params.nextOffset;
    this.chats = params.chats;
    this.users = params.users;
    this.version = params.version;
  }
}

export class InlineQueryPeerTypeSameBotPM extends TypeInlineQueryPeerType {
  protected get [id]() {
    return 0x3081ed9d;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesHistoryImport extends Constructor {
  id: bigint;

  protected get [id]() {
    return 0x1662af0b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class MessagesHistoryImportParsed extends Constructor {
  pm?: true;
  group?: true;
  title?: string;

  protected get [id]() {
    return 0x5e0fb7b9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pm", "true", "flags.0?true"],
      ["group", "true", "flags.1?true"],
      ["title", "string", "flags.2?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pm ?? null, "true", "flags.0?true"],
      [this.group ?? null, "true", "flags.1?true"],
      [this.title ?? null, "string", "flags.2?string"],
    ];
  }

  constructor(params: { pm?: true; group?: true; title?: string }) {
    super();
    this.pm = params.pm;
    this.group = params.group;
    this.title = params.title;
  }
}

export class MessagesAffectedFoundMessages extends Constructor {
  pts: number;
  ptsCount: number;
  offset: number;
  messages: Array<number>;

  protected get [id]() {
    return 0xef8d3e6c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pts", "number", "int"],
      ["ptsCount", "number", "int"],
      ["offset", "number", "int"],
      ["messages", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pts, "number", "int"],
      [this.ptsCount, "number", "int"],
      [this.offset, "number", "int"],
      [this.messages, ["number"], "Vector<int>"],
    ];
  }

  constructor(
    params: {
      pts: number;
      ptsCount: number;
      offset: number;
      messages: Array<number>;
    },
  ) {
    super();
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
    this.offset = params.offset;
    this.messages = params.messages;
  }
}

export class ChatInviteImporter extends Constructor {
  requested?: true;
  viaChatlist?: true;
  userId: bigint;
  date: number;
  about?: string;
  approvedBy?: bigint;

  protected get [id]() {
    return 0x8c5adfd9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["requested", "true", "flags.0?true"],
      ["viaChatlist", "true", "flags.3?true"],
      ["userId", "bigint", "long"],
      ["date", "number", "int"],
      ["about", "string", "flags.2?string"],
      ["approvedBy", "bigint", "flags.1?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.requested ?? null, "true", "flags.0?true"],
      [this.viaChatlist ?? null, "true", "flags.3?true"],
      [this.userId, "bigint", "long"],
      [this.date, "number", "int"],
      [this.about ?? null, "string", "flags.2?string"],
      [this.approvedBy ?? null, "bigint", "flags.1?long"],
    ];
  }

  constructor(
    params: {
      requested?: true;
      viaChatlist?: true;
      userId: bigint;
      date: number;
      about?: string;
      approvedBy?: bigint;
    },
  ) {
    super();
    this.requested = params.requested;
    this.viaChatlist = params.viaChatlist;
    this.userId = params.userId;
    this.date = params.date;
    this.about = params.about;
    this.approvedBy = params.approvedBy;
  }
}

export class MessagesExportedChatInvites extends Constructor {
  count: number;
  invites: Array<TypeExportedChatInvite>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xbdc62dcc;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["invites", [TypeExportedChatInvite], "Vector<ExportedChatInvite>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.invites, [TypeExportedChatInvite], "Vector<ExportedChatInvite>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      count: number;
      invites: Array<TypeExportedChatInvite>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.count = params.count;
    this.invites = params.invites;
    this.users = params.users;
  }
}

export class MessagesExportedChatInvite extends Constructor {
  invite: TypeExportedChatInvite;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x1871be50;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["invite", TypeExportedChatInvite, "ExportedChatInvite"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invite, TypeExportedChatInvite, "ExportedChatInvite"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: { invite: TypeExportedChatInvite; users: Array<TypeUser> },
  ) {
    super();
    this.invite = params.invite;
    this.users = params.users;
  }
}

export class MessagesExportedChatInviteReplaced
  extends TypeMessagesExportedChatInvite {
  invite: TypeExportedChatInvite;
  newInvite: TypeExportedChatInvite;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x222600ef;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["invite", TypeExportedChatInvite, "ExportedChatInvite"],
      ["newInvite", TypeExportedChatInvite, "ExportedChatInvite"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invite, TypeExportedChatInvite, "ExportedChatInvite"],
      [this.newInvite, TypeExportedChatInvite, "ExportedChatInvite"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      invite: TypeExportedChatInvite;
      newInvite: TypeExportedChatInvite;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.invite = params.invite;
    this.newInvite = params.newInvite;
    this.users = params.users;
  }
}

export class MessagesChatInviteImporters extends Constructor {
  count: number;
  importers: Array<TypeChatInviteImporter>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x81b6b00a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["importers", [TypeChatInviteImporter], "Vector<ChatInviteImporter>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.importers, [TypeChatInviteImporter], "Vector<ChatInviteImporter>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      count: number;
      importers: Array<TypeChatInviteImporter>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.count = params.count;
    this.importers = params.importers;
    this.users = params.users;
  }
}

export class ChatAdminWithInvites extends Constructor {
  adminId: bigint;
  invitesCount: number;
  revokedInvitesCount: number;

  protected get [id]() {
    return 0xf2ecef23;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["adminId", "bigint", "long"],
      ["invitesCount", "number", "int"],
      ["revokedInvitesCount", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.adminId, "bigint", "long"],
      [this.invitesCount, "number", "int"],
      [this.revokedInvitesCount, "number", "int"],
    ];
  }

  constructor(
    params: {
      adminId: bigint;
      invitesCount: number;
      revokedInvitesCount: number;
    },
  ) {
    super();
    this.adminId = params.adminId;
    this.invitesCount = params.invitesCount;
    this.revokedInvitesCount = params.revokedInvitesCount;
  }
}

export class MessagesChatAdminsWithInvites extends Constructor {
  admins: Array<TypeChatAdminWithInvites>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xb69b72d7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["admins", [TypeChatAdminWithInvites], "Vector<ChatAdminWithInvites>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.admins, [TypeChatAdminWithInvites], "Vector<ChatAdminWithInvites>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: { admins: Array<TypeChatAdminWithInvites>; users: Array<TypeUser> },
  ) {
    super();
    this.admins = params.admins;
    this.users = params.users;
  }
}

export class MessagesCheckedHistoryImportPeer extends Constructor {
  confirmText: string;

  protected get [id]() {
    return 0xa24de717;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["confirmText", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.confirmText, "string", "string"],
    ];
  }

  constructor(params: { confirmText: string }) {
    super();
    this.confirmText = params.confirmText;
  }
}

export class PhoneJoinAsPeers extends Constructor {
  peers: Array<TypePeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xafe5623f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peers", [TypePeer], "Vector<Peer>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peers, [TypePeer], "Vector<Peer>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      peers: Array<TypePeer>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.peers = params.peers;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class PhoneExportedGroupCallInvite extends Constructor {
  link: string;

  protected get [id]() {
    return 0x204bd158;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["link", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.link, "string", "string"],
    ];
  }

  constructor(params: { link: string }) {
    super();
    this.link = params.link;
  }
}

export class GroupCallParticipantVideoSourceGroup extends Constructor {
  semantics: string;
  sources: Array<number>;

  protected get [id]() {
    return 0xdcb118b7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["semantics", "string", "string"],
      ["sources", ["number"], "Vector<int>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.semantics, "string", "string"],
      [this.sources, ["number"], "Vector<int>"],
    ];
  }

  constructor(params: { semantics: string; sources: Array<number> }) {
    super();
    this.semantics = params.semantics;
    this.sources = params.sources;
  }
}

export class GroupCallParticipantVideo extends Constructor {
  paused?: true;
  endpoint: string;
  sourceGroups: Array<TypeGroupCallParticipantVideoSourceGroup>;
  audioSource?: number;

  protected get [id]() {
    return 0x67753ac8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["paused", "true", "flags.0?true"],
      ["endpoint", "string", "string"],
      [
        "sourceGroups",
        [TypeGroupCallParticipantVideoSourceGroup],
        "Vector<GroupCallParticipantVideoSourceGroup>",
      ],
      ["audioSource", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.paused ?? null, "true", "flags.0?true"],
      [this.endpoint, "string", "string"],
      [
        this.sourceGroups,
        [TypeGroupCallParticipantVideoSourceGroup],
        "Vector<GroupCallParticipantVideoSourceGroup>",
      ],
      [this.audioSource ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(
    params: {
      paused?: true;
      endpoint: string;
      sourceGroups: Array<TypeGroupCallParticipantVideoSourceGroup>;
      audioSource?: number;
    },
  ) {
    super();
    this.paused = params.paused;
    this.endpoint = params.endpoint;
    this.sourceGroups = params.sourceGroups;
    this.audioSource = params.audioSource;
  }
}

export class StickersSuggestedShortName extends Constructor {
  shortName: string;

  protected get [id]() {
    return 0x85fea03f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["shortName", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.shortName, "string", "string"],
    ];
  }

  constructor(params: { shortName: string }) {
    super();
    this.shortName = params.shortName;
  }
}

export class BotCommandScopeDefault extends TypeBotCommandScope {
  protected get [id]() {
    return 0x2f6cb2ab;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
    ];
  }

  constructor(params: { peer: TypeInputPeer }) {
    super();
    this.peer = params.peer;
  }
}

export class BotCommandScopePeerUser extends TypeBotCommandScope {
  peer: TypeInputPeer;
  userId: TypeInputUser;

  protected get [id]() {
    return 0x0a1321f3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
      ["userId", TypeInputUser, "InputUser"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.userId, TypeInputUser, "InputUser"],
    ];
  }

  constructor(params: { peer: TypeInputPeer; userId: TypeInputUser }) {
    super();
    this.peer = params.peer;
    this.userId = params.userId;
  }
}

export class AccountResetPasswordFailedWait
  extends TypeAccountResetPasswordResult {
  retryDate: number;

  protected get [id]() {
    return 0xe3779861;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["retryDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.retryDate, "number", "int"],
    ];
  }

  constructor(params: { retryDate: number }) {
    super();
    this.retryDate = params.retryDate;
  }
}

export class AccountResetPasswordRequestedWait
  extends TypeAccountResetPasswordResult {
  untilDate: number;

  protected get [id]() {
    return 0xe9effc7d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["untilDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.untilDate, "number", "int"],
    ];
  }

  constructor(params: { untilDate: number }) {
    super();
    this.untilDate = params.untilDate;
  }
}

export class AccountResetPasswordOk extends TypeAccountResetPasswordResult {
  protected get [id]() {
    return 0xe926d63e;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SponsoredMessage extends Constructor {
  recommended?: true;
  showPeerPhoto?: true;
  randomId: Uint8Array;
  fromId?: TypePeer;
  chatInvite?: TypeChatInvite;
  chatInviteHash?: string;
  channelPost?: number;
  startParam?: string;
  message: string;
  entities?: Array<TypeMessageEntity>;
  sponsorInfo?: string;
  additionalInfo?: string;

  protected get [id]() {
    return 0xfc25b828;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["recommended", "true", "flags.5?true"],
      ["showPeerPhoto", "true", "flags.6?true"],
      ["randomId", Uint8Array, "bytes"],
      ["fromId", TypePeer, "flags.3?Peer"],
      ["chatInvite", TypeChatInvite, "flags.4?ChatInvite"],
      ["chatInviteHash", "string", "flags.4?string"],
      ["channelPost", "number", "flags.2?int"],
      ["startParam", "string", "flags.0?string"],
      ["message", "string", "string"],
      ["entities", [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      ["sponsorInfo", "string", "flags.7?string"],
      ["additionalInfo", "string", "flags.8?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.recommended ?? null, "true", "flags.5?true"],
      [this.showPeerPhoto ?? null, "true", "flags.6?true"],
      [this.randomId, Uint8Array, "bytes"],
      [this.fromId ?? null, TypePeer, "flags.3?Peer"],
      [this.chatInvite ?? null, TypeChatInvite, "flags.4?ChatInvite"],
      [this.chatInviteHash ?? null, "string", "flags.4?string"],
      [this.channelPost ?? null, "number", "flags.2?int"],
      [this.startParam ?? null, "string", "flags.0?string"],
      [this.message, "string", "string"],
      [
        this.entities ?? null,
        [TypeMessageEntity],
        "flags.1?Vector<MessageEntity>",
      ],
      [this.sponsorInfo ?? null, "string", "flags.7?string"],
      [this.additionalInfo ?? null, "string", "flags.8?string"],
    ];
  }

  constructor(
    params: {
      recommended?: true;
      showPeerPhoto?: true;
      randomId: Uint8Array;
      fromId?: TypePeer;
      chatInvite?: TypeChatInvite;
      chatInviteHash?: string;
      channelPost?: number;
      startParam?: string;
      message: string;
      entities?: Array<TypeMessageEntity>;
      sponsorInfo?: string;
      additionalInfo?: string;
    },
  ) {
    super();
    this.recommended = params.recommended;
    this.showPeerPhoto = params.showPeerPhoto;
    this.randomId = params.randomId;
    this.fromId = params.fromId;
    this.chatInvite = params.chatInvite;
    this.chatInviteHash = params.chatInviteHash;
    this.channelPost = params.channelPost;
    this.startParam = params.startParam;
    this.message = params.message;
    this.entities = params.entities;
    this.sponsorInfo = params.sponsorInfo;
    this.additionalInfo = params.additionalInfo;
  }
}

export class MessagesSponsoredMessages extends Constructor {
  postsBetween?: number;
  messages: Array<TypeSponsoredMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xc9ee1d87;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["postsBetween", "number", "flags.0?int"],
      ["messages", [TypeSponsoredMessage], "Vector<SponsoredMessage>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.postsBetween ?? null, "number", "flags.0?int"],
      [this.messages, [TypeSponsoredMessage], "Vector<SponsoredMessage>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      postsBetween?: number;
      messages: Array<TypeSponsoredMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.postsBetween = params.postsBetween;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesSponsoredMessagesEmpty
  extends TypeMessagesSponsoredMessages {
  protected get [id]() {
    return 0x1839490f;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class SearchResultsCalendarPeriod extends Constructor {
  date: number;
  minMsgId: number;
  maxMsgId: number;
  count: number;

  protected get [id]() {
    return 0xc9b0539f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["date", "number", "int"],
      ["minMsgId", "number", "int"],
      ["maxMsgId", "number", "int"],
      ["count", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.date, "number", "int"],
      [this.minMsgId, "number", "int"],
      [this.maxMsgId, "number", "int"],
      [this.count, "number", "int"],
    ];
  }

  constructor(
    params: { date: number; minMsgId: number; maxMsgId: number; count: number },
  ) {
    super();
    this.date = params.date;
    this.minMsgId = params.minMsgId;
    this.maxMsgId = params.maxMsgId;
    this.count = params.count;
  }
}

export class MessagesSearchResultsCalendar extends Constructor {
  inexact?: true;
  count: number;
  minDate: number;
  minMsgId: number;
  offsetIdOffset?: number;
  periods: Array<TypeSearchResultsCalendarPeriod>;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x147ee23c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["inexact", "true", "flags.0?true"],
      ["count", "number", "int"],
      ["minDate", "number", "int"],
      ["minMsgId", "number", "int"],
      ["offsetIdOffset", "number", "flags.1?int"],
      [
        "periods",
        [TypeSearchResultsCalendarPeriod],
        "Vector<SearchResultsCalendarPeriod>",
      ],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.inexact ?? null, "true", "flags.0?true"],
      [this.count, "number", "int"],
      [this.minDate, "number", "int"],
      [this.minMsgId, "number", "int"],
      [this.offsetIdOffset ?? null, "number", "flags.1?int"],
      [
        this.periods,
        [TypeSearchResultsCalendarPeriod],
        "Vector<SearchResultsCalendarPeriod>",
      ],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      inexact?: true;
      count: number;
      minDate: number;
      minMsgId: number;
      offsetIdOffset?: number;
      periods: Array<TypeSearchResultsCalendarPeriod>;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.inexact = params.inexact;
    this.count = params.count;
    this.minDate = params.minDate;
    this.minMsgId = params.minMsgId;
    this.offsetIdOffset = params.offsetIdOffset;
    this.periods = params.periods;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class SearchResultPosition extends TypeSearchResultsPosition {
  msgId: number;
  date: number;
  offset: number;

  protected get [id]() {
    return 0x7f648b67;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["msgId", "number", "int"],
      ["date", "number", "int"],
      ["offset", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.msgId, "number", "int"],
      [this.date, "number", "int"],
      [this.offset, "number", "int"],
    ];
  }

  constructor(params: { msgId: number; date: number; offset: number }) {
    super();
    this.msgId = params.msgId;
    this.date = params.date;
    this.offset = params.offset;
  }
}

export class MessagesSearchResultsPositions extends Constructor {
  count: number;
  positions: Array<TypeSearchResultsPosition>;

  protected get [id]() {
    return 0x53b22baf;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      [
        "positions",
        [TypeSearchResultsPosition],
        "Vector<SearchResultsPosition>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [
        this.positions,
        [TypeSearchResultsPosition],
        "Vector<SearchResultsPosition>",
      ],
    ];
  }

  constructor(
    params: { count: number; positions: Array<TypeSearchResultsPosition> },
  ) {
    super();
    this.count = params.count;
    this.positions = params.positions;
  }
}

export class ChannelsSendAsPeers extends Constructor {
  peers: Array<TypeSendAsPeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xf496b0c6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peers", [TypeSendAsPeer], "Vector<SendAsPeer>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peers, [TypeSendAsPeer], "Vector<SendAsPeer>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      peers: Array<TypeSendAsPeer>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.peers = params.peers;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class UsersUserFull extends Constructor {
  fullUser: TypeUserFull;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x3b6d152e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["fullUser", TypeUserFull, "UserFull"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.fullUser, TypeUserFull, "UserFull"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      fullUser: TypeUserFull;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.fullUser = params.fullUser;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesPeerSettings extends Constructor {
  settings: TypePeerSettings;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x6880b94d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["settings", TypePeerSettings, "PeerSettings"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.settings, TypePeerSettings, "PeerSettings"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      settings: TypePeerSettings;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.settings = params.settings;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class AuthLoggedOut extends Constructor {
  futureAuthToken?: Uint8Array;

  protected get [id]() {
    return 0xc3a2835f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["futureAuthToken", Uint8Array, "flags.0?bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.futureAuthToken ?? null, Uint8Array, "flags.0?bytes"],
    ];
  }

  constructor(params: { futureAuthToken?: Uint8Array }) {
    super();
    this.futureAuthToken = params.futureAuthToken;
  }
}

export class ReactionCount extends Constructor {
  chosenOrder?: number;
  reaction: TypeReaction;
  count: number;

  protected get [id]() {
    return 0xa3d1cb80;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["chosenOrder", "number", "flags.0?int"],
      ["reaction", TypeReaction, "Reaction"],
      ["count", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.chosenOrder ?? null, "number", "flags.0?int"],
      [this.reaction, TypeReaction, "Reaction"],
      [this.count, "number", "int"],
    ];
  }

  constructor(
    params: { chosenOrder?: number; reaction: TypeReaction; count: number },
  ) {
    super();
    this.chosenOrder = params.chosenOrder;
    this.reaction = params.reaction;
    this.count = params.count;
  }
}

export class MessageReactions extends Constructor {
  min?: true;
  canSeeList?: true;
  results: Array<TypeReactionCount>;
  recentReactions?: Array<TypeMessagePeerReaction>;

  protected get [id]() {
    return 0x4f2b9479;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["min", "true", "flags.0?true"],
      ["canSeeList", "true", "flags.2?true"],
      ["results", [TypeReactionCount], "Vector<ReactionCount>"],
      [
        "recentReactions",
        [TypeMessagePeerReaction],
        "flags.1?Vector<MessagePeerReaction>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.min ?? null, "true", "flags.0?true"],
      [this.canSeeList ?? null, "true", "flags.2?true"],
      [this.results, [TypeReactionCount], "Vector<ReactionCount>"],
      [
        this.recentReactions ?? null,
        [TypeMessagePeerReaction],
        "flags.1?Vector<MessagePeerReaction>",
      ],
    ];
  }

  constructor(
    params: {
      min?: true;
      canSeeList?: true;
      results: Array<TypeReactionCount>;
      recentReactions?: Array<TypeMessagePeerReaction>;
    },
  ) {
    super();
    this.min = params.min;
    this.canSeeList = params.canSeeList;
    this.results = params.results;
    this.recentReactions = params.recentReactions;
  }
}

export class MessagesMessageReactionsList extends Constructor {
  count: number;
  reactions: Array<TypeMessagePeerReaction>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  nextOffset?: string;

  protected get [id]() {
    return 0x31bd492d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["count", "number", "int"],
      ["reactions", [TypeMessagePeerReaction], "Vector<MessagePeerReaction>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["nextOffset", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.count, "number", "int"],
      [
        this.reactions,
        [TypeMessagePeerReaction],
        "Vector<MessagePeerReaction>",
      ],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.nextOffset ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(
    params: {
      count: number;
      reactions: Array<TypeMessagePeerReaction>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
      nextOffset?: string;
    },
  ) {
    super();
    this.count = params.count;
    this.reactions = params.reactions;
    this.chats = params.chats;
    this.users = params.users;
    this.nextOffset = params.nextOffset;
  }
}

export class AvailableReaction extends Constructor {
  inactive?: true;
  premium?: true;
  reaction: string;
  title: string;
  staticIcon: TypeDocument;
  appearAnimation: TypeDocument;
  selectAnimation: TypeDocument;
  activateAnimation: TypeDocument;
  effectAnimation: TypeDocument;
  aroundAnimation?: TypeDocument;
  centerIcon?: TypeDocument;

  protected get [id]() {
    return 0xc077ec01;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["inactive", "true", "flags.0?true"],
      ["premium", "true", "flags.2?true"],
      ["reaction", "string", "string"],
      ["title", "string", "string"],
      ["staticIcon", TypeDocument, "Document"],
      ["appearAnimation", TypeDocument, "Document"],
      ["selectAnimation", TypeDocument, "Document"],
      ["activateAnimation", TypeDocument, "Document"],
      ["effectAnimation", TypeDocument, "Document"],
      ["aroundAnimation", TypeDocument, "flags.1?Document"],
      ["centerIcon", TypeDocument, "flags.1?Document"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.inactive ?? null, "true", "flags.0?true"],
      [this.premium ?? null, "true", "flags.2?true"],
      [this.reaction, "string", "string"],
      [this.title, "string", "string"],
      [this.staticIcon, TypeDocument, "Document"],
      [this.appearAnimation, TypeDocument, "Document"],
      [this.selectAnimation, TypeDocument, "Document"],
      [this.activateAnimation, TypeDocument, "Document"],
      [this.effectAnimation, TypeDocument, "Document"],
      [this.aroundAnimation ?? null, TypeDocument, "flags.1?Document"],
      [this.centerIcon ?? null, TypeDocument, "flags.1?Document"],
    ];
  }

  constructor(
    params: {
      inactive?: true;
      premium?: true;
      reaction: string;
      title: string;
      staticIcon: TypeDocument;
      appearAnimation: TypeDocument;
      selectAnimation: TypeDocument;
      activateAnimation: TypeDocument;
      effectAnimation: TypeDocument;
      aroundAnimation?: TypeDocument;
      centerIcon?: TypeDocument;
    },
  ) {
    super();
    this.inactive = params.inactive;
    this.premium = params.premium;
    this.reaction = params.reaction;
    this.title = params.title;
    this.staticIcon = params.staticIcon;
    this.appearAnimation = params.appearAnimation;
    this.selectAnimation = params.selectAnimation;
    this.activateAnimation = params.activateAnimation;
    this.effectAnimation = params.effectAnimation;
    this.aroundAnimation = params.aroundAnimation;
    this.centerIcon = params.centerIcon;
  }
}

export class MessagesAvailableReactionsNotModified
  extends TypeMessagesAvailableReactions {
  protected get [id]() {
    return 0x9f071957;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesAvailableReactions extends Constructor {
  hash: number;
  reactions: Array<TypeAvailableReaction>;

  protected get [id]() {
    return 0x768e3aad;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
      ["reactions", [TypeAvailableReaction], "Vector<AvailableReaction>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
      [this.reactions, [TypeAvailableReaction], "Vector<AvailableReaction>"],
    ];
  }

  constructor(
    params: { hash: number; reactions: Array<TypeAvailableReaction> },
  ) {
    super();
    this.hash = params.hash;
    this.reactions = params.reactions;
  }
}

export class MessagePeerReaction extends Constructor {
  big?: true;
  unread?: true;
  peerId: TypePeer;
  date: number;
  reaction: TypeReaction;

  protected get [id]() {
    return 0x8c79b63c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["big", "true", "flags.0?true"],
      ["unread", "true", "flags.1?true"],
      ["peerId", TypePeer, "Peer"],
      ["date", "number", "int"],
      ["reaction", TypeReaction, "Reaction"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.big ?? null, "true", "flags.0?true"],
      [this.unread ?? null, "true", "flags.1?true"],
      [this.peerId, TypePeer, "Peer"],
      [this.date, "number", "int"],
      [this.reaction, TypeReaction, "Reaction"],
    ];
  }

  constructor(
    params: {
      big?: true;
      unread?: true;
      peerId: TypePeer;
      date: number;
      reaction: TypeReaction;
    },
  ) {
    super();
    this.big = params.big;
    this.unread = params.unread;
    this.peerId = params.peerId;
    this.date = params.date;
    this.reaction = params.reaction;
  }
}

export class GroupCallStreamChannel extends Constructor {
  channel: number;
  scale: number;
  lastTimestampMs: bigint;

  protected get [id]() {
    return 0x80eb48af;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channel", "number", "int"],
      ["scale", "number", "int"],
      ["lastTimestampMs", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channel, "number", "int"],
      [this.scale, "number", "int"],
      [this.lastTimestampMs, "bigint", "long"],
    ];
  }

  constructor(
    params: { channel: number; scale: number; lastTimestampMs: bigint },
  ) {
    super();
    this.channel = params.channel;
    this.scale = params.scale;
    this.lastTimestampMs = params.lastTimestampMs;
  }
}

export class PhoneGroupCallStreamChannels extends Constructor {
  channels: Array<TypeGroupCallStreamChannel>;

  protected get [id]() {
    return 0xd0e482b2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      [
        "channels",
        [TypeGroupCallStreamChannel],
        "Vector<GroupCallStreamChannel>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      [
        this.channels,
        [TypeGroupCallStreamChannel],
        "Vector<GroupCallStreamChannel>",
      ],
    ];
  }

  constructor(params: { channels: Array<TypeGroupCallStreamChannel> }) {
    super();
    this.channels = params.channels;
  }
}

export class PhoneGroupCallStreamRtmpUrl extends Constructor {
  url: string;
  key: string;

  protected get [id]() {
    return 0x2dbf3432;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["key", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.key, "string", "string"],
    ];
  }

  constructor(params: { url: string; key: string }) {
    super();
    this.url = params.url;
    this.key = params.key;
  }
}

export class AttachMenuBotIconColor extends Constructor {
  name: string;
  color: number;

  protected get [id]() {
    return 0x4576f3f0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["name", "string", "string"],
      ["color", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.name, "string", "string"],
      [this.color, "number", "int"],
    ];
  }

  constructor(params: { name: string; color: number }) {
    super();
    this.name = params.name;
    this.color = params.color;
  }
}

export class AttachMenuBotIcon extends Constructor {
  name: string;
  icon: TypeDocument;
  colors?: Array<TypeAttachMenuBotIconColor>;

  protected get [id]() {
    return 0xb2a7386b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["name", "string", "string"],
      ["icon", TypeDocument, "Document"],
      [
        "colors",
        [TypeAttachMenuBotIconColor],
        "flags.0?Vector<AttachMenuBotIconColor>",
      ],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.name, "string", "string"],
      [this.icon, TypeDocument, "Document"],
      [
        this.colors ?? null,
        [TypeAttachMenuBotIconColor],
        "flags.0?Vector<AttachMenuBotIconColor>",
      ],
    ];
  }

  constructor(
    params: {
      name: string;
      icon: TypeDocument;
      colors?: Array<TypeAttachMenuBotIconColor>;
    },
  ) {
    super();
    this.name = params.name;
    this.icon = params.icon;
    this.colors = params.colors;
  }
}

export class AttachMenuBot extends Constructor {
  inactive?: true;
  hasSettings?: true;
  requestWriteAccess?: true;
  botId: bigint;
  shortName: string;
  peerTypes: Array<TypeAttachMenuPeerType>;
  icons: Array<TypeAttachMenuBotIcon>;

  protected get [id]() {
    return 0xc8aa2cd2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["inactive", "true", "flags.0?true"],
      ["hasSettings", "true", "flags.1?true"],
      ["requestWriteAccess", "true", "flags.2?true"],
      ["botId", "bigint", "long"],
      ["shortName", "string", "string"],
      ["peerTypes", [TypeAttachMenuPeerType], "Vector<AttachMenuPeerType>"],
      ["icons", [TypeAttachMenuBotIcon], "Vector<AttachMenuBotIcon>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.inactive ?? null, "true", "flags.0?true"],
      [this.hasSettings ?? null, "true", "flags.1?true"],
      [this.requestWriteAccess ?? null, "true", "flags.2?true"],
      [this.botId, "bigint", "long"],
      [this.shortName, "string", "string"],
      [this.peerTypes, [TypeAttachMenuPeerType], "Vector<AttachMenuPeerType>"],
      [this.icons, [TypeAttachMenuBotIcon], "Vector<AttachMenuBotIcon>"],
    ];
  }

  constructor(
    params: {
      inactive?: true;
      hasSettings?: true;
      requestWriteAccess?: true;
      botId: bigint;
      shortName: string;
      peerTypes: Array<TypeAttachMenuPeerType>;
      icons: Array<TypeAttachMenuBotIcon>;
    },
  ) {
    super();
    this.inactive = params.inactive;
    this.hasSettings = params.hasSettings;
    this.requestWriteAccess = params.requestWriteAccess;
    this.botId = params.botId;
    this.shortName = params.shortName;
    this.peerTypes = params.peerTypes;
    this.icons = params.icons;
  }
}

export class AttachMenuBotsNotModified extends TypeAttachMenuBots {
  protected get [id]() {
    return 0xf1d88a5c;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AttachMenuBots extends Constructor {
  hash: bigint;
  bots: Array<TypeAttachMenuBot>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x3c4301c0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["bots", [TypeAttachMenuBot], "Vector<AttachMenuBot>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.bots, [TypeAttachMenuBot], "Vector<AttachMenuBot>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      hash: bigint;
      bots: Array<TypeAttachMenuBot>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.hash = params.hash;
    this.bots = params.bots;
    this.users = params.users;
  }
}

export class AttachMenuBotsBot extends Constructor {
  bot: TypeAttachMenuBot;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x93bf667f;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["bot", TypeAttachMenuBot, "AttachMenuBot"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.bot, TypeAttachMenuBot, "AttachMenuBot"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { bot: TypeAttachMenuBot; users: Array<TypeUser> }) {
    super();
    this.bot = params.bot;
    this.users = params.users;
  }
}

export class WebViewResultUrl extends TypeWebViewResult {
  queryId: bigint;
  url: string;

  protected get [id]() {
    return 0x0c14557c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["queryId", "bigint", "long"],
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.queryId, "bigint", "long"],
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { queryId: bigint; url: string }) {
    super();
    this.queryId = params.queryId;
    this.url = params.url;
  }
}

export class SimpleWebViewResultUrl extends TypeSimpleWebViewResult {
  url: string;

  protected get [id]() {
    return 0x882f76bb;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class WebViewMessageSent extends Constructor {
  msgId?: TypeInputBotInlineMessageID;

  protected get [id]() {
    return 0x0c94511c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["msgId", TypeInputBotInlineMessageID, "flags.0?InputBotInlineMessageID"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [
        this.msgId ?? null,
        TypeInputBotInlineMessageID,
        "flags.0?InputBotInlineMessageID",
      ],
    ];
  }

  constructor(params: { msgId?: TypeInputBotInlineMessageID }) {
    super();
    this.msgId = params.msgId;
  }
}

export class BotMenuButtonDefault extends TypeBotMenuButton {
  protected get [id]() {
    return 0x7533a588;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BotMenuButton extends Constructor {
  text: string;
  url: string;

  protected get [id]() {
    return 0xc7b57ce6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { text: string; url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class AccountSavedRingtonesNotModified
  extends TypeAccountSavedRingtones {
  protected get [id]() {
    return 0xfbf6e8b1;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AccountSavedRingtones extends Constructor {
  hash: bigint;
  ringtones: Array<TypeDocument>;

  protected get [id]() {
    return 0xc1e92cc5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["ringtones", [TypeDocument], "Vector<Document>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.ringtones, [TypeDocument], "Vector<Document>"],
    ];
  }

  constructor(params: { hash: bigint; ringtones: Array<TypeDocument> }) {
    super();
    this.hash = params.hash;
    this.ringtones = params.ringtones;
  }
}

export class NotificationSoundDefault extends TypeNotificationSound {
  protected get [id]() {
    return 0x97e8bebe;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
      ["data", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
      [this.data, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint }) {
    super();
    this.id = params.id;
  }
}

export class AccountSavedRingtone extends Constructor {
  protected get [id]() {
    return 0xb7263f6d;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AccountSavedRingtoneConverted extends TypeAccountSavedRingtone {
  document: TypeDocument;

  protected get [id]() {
    return 0x1f307eb7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["document", TypeDocument, "Document"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.document, TypeDocument, "Document"],
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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
  msgId: number;

  protected get [id]() {
    return 0xc5b56859;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypeInputPeer, "InputPeer"],
      ["msgId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypeInputPeer, "InputPeer"],
      [this.msgId, "number", "int"],
    ];
  }

  constructor(params: { peer: TypeInputPeer; msgId: number }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
  }
}

export class InputInvoiceSlug extends TypeInputInvoice {
  slug: string;

  protected get [id]() {
    return 0xc326caef;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["slug", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.slug, "string", "string"],
    ];
  }

  constructor(params: { slug: string }) {
    super();
    this.slug = params.slug;
  }
}

export class PaymentsExportedInvoice extends Constructor {
  url: string;

  protected get [id]() {
    return 0xaed0cbd9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class MessagesTranscribedAudio extends Constructor {
  pending?: true;
  transcriptionId: bigint;
  text: string;

  protected get [id]() {
    return 0x93752c52;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pending", "true", "flags.0?true"],
      ["transcriptionId", "bigint", "long"],
      ["text", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pending ?? null, "true", "flags.0?true"],
      [this.transcriptionId, "bigint", "long"],
      [this.text, "string", "string"],
    ];
  }

  constructor(
    params: { pending?: true; transcriptionId: bigint; text: string },
  ) {
    super();
    this.pending = params.pending;
    this.transcriptionId = params.transcriptionId;
    this.text = params.text;
  }
}

export class HelpPremiumPromo extends Constructor {
  statusText: string;
  statusEntities: Array<TypeMessageEntity>;
  videoSections: Array<string>;
  videos: Array<TypeDocument>;
  periodOptions: Array<TypePremiumSubscriptionOption>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x5334759c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["statusText", "string", "string"],
      ["statusEntities", [TypeMessageEntity], "Vector<MessageEntity>"],
      ["videoSections", ["string"], "Vector<string>"],
      ["videos", [TypeDocument], "Vector<Document>"],
      [
        "periodOptions",
        [TypePremiumSubscriptionOption],
        "Vector<PremiumSubscriptionOption>",
      ],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.statusText, "string", "string"],
      [this.statusEntities, [TypeMessageEntity], "Vector<MessageEntity>"],
      [this.videoSections, ["string"], "Vector<string>"],
      [this.videos, [TypeDocument], "Vector<Document>"],
      [
        this.periodOptions,
        [TypePremiumSubscriptionOption],
        "Vector<PremiumSubscriptionOption>",
      ],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      statusText: string;
      statusEntities: Array<TypeMessageEntity>;
      videoSections: Array<string>;
      videos: Array<TypeDocument>;
      periodOptions: Array<TypePremiumSubscriptionOption>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.statusText = params.statusText;
    this.statusEntities = params.statusEntities;
    this.videoSections = params.videoSections;
    this.videos = params.videos;
    this.periodOptions = params.periodOptions;
    this.users = params.users;
  }
}

export class InputStorePaymentPremiumSubscription
  extends TypeInputStorePaymentPurpose {
  restore?: true;
  upgrade?: true;

  protected get [id]() {
    return 0xa6751e66;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["restore", "true", "flags.0?true"],
      ["upgrade", "true", "flags.1?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.restore ?? null, "true", "flags.0?true"],
      [this.upgrade ?? null, "true", "flags.1?true"],
    ];
  }

  constructor(params: { restore?: true; upgrade?: true }) {
    super();
    this.restore = params.restore;
    this.upgrade = params.upgrade;
  }
}

export class InputStorePaymentGiftPremium extends TypeInputStorePaymentPurpose {
  userId: TypeInputUser;
  currency: string;
  amount: bigint;

  protected get [id]() {
    return 0x616f7fe8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", TypeInputUser, "InputUser"],
      ["currency", "string", "string"],
      ["amount", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, TypeInputUser, "InputUser"],
      [this.currency, "string", "string"],
      [this.amount, "bigint", "long"],
    ];
  }

  constructor(
    params: { userId: TypeInputUser; currency: string; amount: bigint },
  ) {
    super();
    this.userId = params.userId;
    this.currency = params.currency;
    this.amount = params.amount;
  }
}

export class PremiumGiftOption extends Constructor {
  months: number;
  currency: string;
  amount: bigint;
  botUrl: string;
  storeProduct?: string;

  protected get [id]() {
    return 0x74c34319;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["months", "number", "int"],
      ["currency", "string", "string"],
      ["amount", "bigint", "long"],
      ["botUrl", "string", "string"],
      ["storeProduct", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.months, "number", "int"],
      [this.currency, "string", "string"],
      [this.amount, "bigint", "long"],
      [this.botUrl, "string", "string"],
      [this.storeProduct ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(
    params: {
      months: number;
      currency: string;
      amount: bigint;
      botUrl: string;
      storeProduct?: string;
    },
  ) {
    super();
    this.months = params.months;
    this.currency = params.currency;
    this.amount = params.amount;
    this.botUrl = params.botUrl;
    this.storeProduct = params.storeProduct;
  }
}

export class PaymentFormMethod extends Constructor {
  url: string;
  title: string;

  protected get [id]() {
    return 0x88f8f21b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["title", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.title, "string", "string"],
    ];
  }

  constructor(params: { url: string; title: string }) {
    super();
    this.url = params.url;
    this.title = params.title;
  }
}

export class EmojiStatusEmpty extends TypeEmojiStatus {
  protected get [id]() {
    return 0x2de11aae;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class EmojiStatus extends Constructor {
  documentId: bigint;

  protected get [id]() {
    return 0x929b619d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["documentId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.documentId, "bigint", "long"],
    ];
  }

  constructor(params: { documentId: bigint }) {
    super();
    this.documentId = params.documentId;
  }
}

export class EmojiStatusUntil extends TypeEmojiStatus {
  documentId: bigint;
  until: number;

  protected get [id]() {
    return 0xfa30a8c7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["documentId", "bigint", "long"],
      ["until", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.documentId, "bigint", "long"],
      [this.until, "number", "int"],
    ];
  }

  constructor(params: { documentId: bigint; until: number }) {
    super();
    this.documentId = params.documentId;
    this.until = params.until;
  }
}

export class AccountEmojiStatusesNotModified extends TypeAccountEmojiStatuses {
  protected get [id]() {
    return 0xd08ce645;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class AccountEmojiStatuses extends Constructor {
  hash: bigint;
  statuses: Array<TypeEmojiStatus>;

  protected get [id]() {
    return 0x90c467d1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["statuses", [TypeEmojiStatus], "Vector<EmojiStatus>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.statuses, [TypeEmojiStatus], "Vector<EmojiStatus>"],
    ];
  }

  constructor(params: { hash: bigint; statuses: Array<TypeEmojiStatus> }) {
    super();
    this.hash = params.hash;
    this.statuses = params.statuses;
  }
}

export class ReactionEmpty extends TypeReaction {
  protected get [id]() {
    return 0x79f5d419;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["emoticon", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.emoticon, "string", "string"],
    ];
  }

  constructor(params: { emoticon: string }) {
    super();
    this.emoticon = params.emoticon;
  }
}

export class ReactionCustomEmoji extends TypeReaction {
  documentId: bigint;

  protected get [id]() {
    return 0x8935fc73;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["documentId", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.documentId, "bigint", "long"],
    ];
  }

  constructor(params: { documentId: bigint }) {
    super();
    this.documentId = params.documentId;
  }
}

export class ChatReactionsNone extends TypeChatReactions {
  protected get [id]() {
    return 0xeafc32bc;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class ChatReactionsAll extends TypeChatReactions {
  allowCustom?: true;

  protected get [id]() {
    return 0x52928bca;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["allowCustom", "true", "flags.0?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.allowCustom ?? null, "true", "flags.0?true"],
    ];
  }

  constructor(params: { allowCustom?: true }) {
    super();
    this.allowCustom = params.allowCustom;
  }
}

export class ChatReactionsSome extends TypeChatReactions {
  reactions: Array<TypeReaction>;

  protected get [id]() {
    return 0x661d4037;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["reactions", [TypeReaction], "Vector<Reaction>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.reactions, [TypeReaction], "Vector<Reaction>"],
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

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesReactions extends Constructor {
  hash: bigint;
  reactions: Array<TypeReaction>;

  protected get [id]() {
    return 0xeafdf716;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["reactions", [TypeReaction], "Vector<Reaction>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.reactions, [TypeReaction], "Vector<Reaction>"],
    ];
  }

  constructor(params: { hash: bigint; reactions: Array<TypeReaction> }) {
    super();
    this.hash = params.hash;
    this.reactions = params.reactions;
  }
}

export class EmailVerifyPurposeLoginSetup extends TypeEmailVerifyPurpose {
  phoneNumber: string;
  phoneCodeHash: string;

  protected get [id]() {
    return 0x4345be73;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["phoneNumber", "string", "string"],
      ["phoneCodeHash", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.phoneNumber, "string", "string"],
      [this.phoneCodeHash, "string", "string"],
    ];
  }

  constructor(params: { phoneNumber: string; phoneCodeHash: string }) {
    super();
    this.phoneNumber = params.phoneNumber;
    this.phoneCodeHash = params.phoneCodeHash;
  }
}

export class EmailVerifyPurposeLoginChange extends TypeEmailVerifyPurpose {
  protected get [id]() {
    return 0x527d22eb;
  }

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [];
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

  static get [paramDesc](): ParamDesc {
    return [
      ["code", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.code, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["token", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.token, "string", "string"],
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

  static get [paramDesc](): ParamDesc {
    return [
      ["token", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.token, "string", "string"],
    ];
  }

  constructor(params: { token: string }) {
    super();
    this.token = params.token;
  }
}

export class AccountEmailVerified extends Constructor {
  email: string;

  protected get [id]() {
    return 0x2b96cd1b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["email", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.email, "string", "string"],
    ];
  }

  constructor(params: { email: string }) {
    super();
    this.email = params.email;
  }
}

export class AccountEmailVerifiedLogin extends TypeAccountEmailVerified {
  email: string;
  sentCode: TypeAuthSentCode;

  protected get [id]() {
    return 0xe1bb0d61;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["email", "string", "string"],
      ["sentCode", TypeAuthSentCode, "auth.SentCode"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.email, "string", "string"],
      [this.sentCode, TypeAuthSentCode, "auth.SentCode"],
    ];
  }

  constructor(params: { email: string; sentCode: TypeAuthSentCode }) {
    super();
    this.email = params.email;
    this.sentCode = params.sentCode;
  }
}

export class PremiumSubscriptionOption extends Constructor {
  current?: true;
  canPurchaseUpgrade?: true;
  transaction?: string;
  months: number;
  currency: string;
  amount: bigint;
  botUrl: string;
  storeProduct?: string;

  protected get [id]() {
    return 0x5f2d1df2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["current", "true", "flags.1?true"],
      ["canPurchaseUpgrade", "true", "flags.2?true"],
      ["transaction", "string", "flags.3?string"],
      ["months", "number", "int"],
      ["currency", "string", "string"],
      ["amount", "bigint", "long"],
      ["botUrl", "string", "string"],
      ["storeProduct", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.current ?? null, "true", "flags.1?true"],
      [this.canPurchaseUpgrade ?? null, "true", "flags.2?true"],
      [this.transaction ?? null, "string", "flags.3?string"],
      [this.months, "number", "int"],
      [this.currency, "string", "string"],
      [this.amount, "bigint", "long"],
      [this.botUrl, "string", "string"],
      [this.storeProduct ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(
    params: {
      current?: true;
      canPurchaseUpgrade?: true;
      transaction?: string;
      months: number;
      currency: string;
      amount: bigint;
      botUrl: string;
      storeProduct?: string;
    },
  ) {
    super();
    this.current = params.current;
    this.canPurchaseUpgrade = params.canPurchaseUpgrade;
    this.transaction = params.transaction;
    this.months = params.months;
    this.currency = params.currency;
    this.amount = params.amount;
    this.botUrl = params.botUrl;
    this.storeProduct = params.storeProduct;
  }
}

export class SendAsPeer extends Constructor {
  premiumRequired?: true;
  peer: TypePeer;

  protected get [id]() {
    return 0xb81c7034;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["premiumRequired", "true", "flags.0?true"],
      ["peer", TypePeer, "Peer"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.premiumRequired ?? null, "true", "flags.0?true"],
      [this.peer, TypePeer, "Peer"],
    ];
  }

  constructor(params: { premiumRequired?: true; peer: TypePeer }) {
    super();
    this.premiumRequired = params.premiumRequired;
    this.peer = params.peer;
  }
}

export class MessageExtendedMediaPreview extends TypeMessageExtendedMedia {
  w?: number;
  h?: number;
  thumb?: TypePhotoSize;
  videoDuration?: number;

  protected get [id]() {
    return 0xad628cc8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["w", "number", "flags.0?int"],
      ["h", "number", "flags.0?int"],
      ["thumb", TypePhotoSize, "flags.1?PhotoSize"],
      ["videoDuration", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.w ?? null, "number", "flags.0?int"],
      [this.h ?? null, "number", "flags.0?int"],
      [this.thumb ?? null, TypePhotoSize, "flags.1?PhotoSize"],
      [this.videoDuration ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(
    params: {
      w?: number;
      h?: number;
      thumb?: TypePhotoSize;
      videoDuration?: number;
    },
  ) {
    super();
    this.w = params.w;
    this.h = params.h;
    this.thumb = params.thumb;
    this.videoDuration = params.videoDuration;
  }
}

export class MessageExtendedMedia extends Constructor {
  media: TypeMessageMedia;

  protected get [id]() {
    return 0xee479c64;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["media", TypeMessageMedia, "MessageMedia"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.media, TypeMessageMedia, "MessageMedia"],
    ];
  }

  constructor(params: { media: TypeMessageMedia }) {
    super();
    this.media = params.media;
  }
}

export class StickerKeyword extends Constructor {
  documentId: bigint;
  keyword: Array<string>;

  protected get [id]() {
    return 0xfcfeb29c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["documentId", "bigint", "long"],
      ["keyword", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.documentId, "bigint", "long"],
      [this.keyword, ["string"], "Vector<string>"],
    ];
  }

  constructor(params: { documentId: bigint; keyword: Array<string> }) {
    super();
    this.documentId = params.documentId;
    this.keyword = params.keyword;
  }
}

export class Username extends Constructor {
  editable?: true;
  active?: true;
  username: string;

  protected get [id]() {
    return 0xb4073647;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["editable", "true", "flags.0?true"],
      ["active", "true", "flags.1?true"],
      ["username", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.editable ?? null, "true", "flags.0?true"],
      [this.active ?? null, "true", "flags.1?true"],
      [this.username, "string", "string"],
    ];
  }

  constructor(params: { editable?: true; active?: true; username: string }) {
    super();
    this.editable = params.editable;
    this.active = params.active;
    this.username = params.username;
  }
}

export class ForumTopicDeleted extends TypeForumTopic {
  id: number;

  protected get [id]() {
    return 0x023f109b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { id: number }) {
    super();
    this.id = params.id;
  }
}

export class ForumTopic extends Constructor {
  my?: true;
  closed?: true;
  pinned?: true;
  short?: true;
  hidden?: true;
  id: number;
  date: number;
  title: string;
  iconColor: number;
  iconEmojiId?: bigint;
  topMessage: number;
  readInboxMaxId: number;
  readOutboxMaxId: number;
  unreadCount: number;
  unreadMentionsCount: number;
  unreadReactionsCount: number;
  fromId: TypePeer;
  notifySettings: TypePeerNotifySettings;
  draft?: TypeDraftMessage;

  protected get [id]() {
    return 0x71701da9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["my", "true", "flags.1?true"],
      ["closed", "true", "flags.2?true"],
      ["pinned", "true", "flags.3?true"],
      ["short", "true", "flags.5?true"],
      ["hidden", "true", "flags.6?true"],
      ["id", "number", "int"],
      ["date", "number", "int"],
      ["title", "string", "string"],
      ["iconColor", "number", "int"],
      ["iconEmojiId", "bigint", "flags.0?long"],
      ["topMessage", "number", "int"],
      ["readInboxMaxId", "number", "int"],
      ["readOutboxMaxId", "number", "int"],
      ["unreadCount", "number", "int"],
      ["unreadMentionsCount", "number", "int"],
      ["unreadReactionsCount", "number", "int"],
      ["fromId", TypePeer, "Peer"],
      ["notifySettings", TypePeerNotifySettings, "PeerNotifySettings"],
      ["draft", TypeDraftMessage, "flags.4?DraftMessage"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.my ?? null, "true", "flags.1?true"],
      [this.closed ?? null, "true", "flags.2?true"],
      [this.pinned ?? null, "true", "flags.3?true"],
      [this.short ?? null, "true", "flags.5?true"],
      [this.hidden ?? null, "true", "flags.6?true"],
      [this.id, "number", "int"],
      [this.date, "number", "int"],
      [this.title, "string", "string"],
      [this.iconColor, "number", "int"],
      [this.iconEmojiId ?? null, "bigint", "flags.0?long"],
      [this.topMessage, "number", "int"],
      [this.readInboxMaxId, "number", "int"],
      [this.readOutboxMaxId, "number", "int"],
      [this.unreadCount, "number", "int"],
      [this.unreadMentionsCount, "number", "int"],
      [this.unreadReactionsCount, "number", "int"],
      [this.fromId, TypePeer, "Peer"],
      [this.notifySettings, TypePeerNotifySettings, "PeerNotifySettings"],
      [this.draft ?? null, TypeDraftMessage, "flags.4?DraftMessage"],
    ];
  }

  constructor(
    params: {
      my?: true;
      closed?: true;
      pinned?: true;
      short?: true;
      hidden?: true;
      id: number;
      date: number;
      title: string;
      iconColor: number;
      iconEmojiId?: bigint;
      topMessage: number;
      readInboxMaxId: number;
      readOutboxMaxId: number;
      unreadCount: number;
      unreadMentionsCount: number;
      unreadReactionsCount: number;
      fromId: TypePeer;
      notifySettings: TypePeerNotifySettings;
      draft?: TypeDraftMessage;
    },
  ) {
    super();
    this.my = params.my;
    this.closed = params.closed;
    this.pinned = params.pinned;
    this.short = params.short;
    this.hidden = params.hidden;
    this.id = params.id;
    this.date = params.date;
    this.title = params.title;
    this.iconColor = params.iconColor;
    this.iconEmojiId = params.iconEmojiId;
    this.topMessage = params.topMessage;
    this.readInboxMaxId = params.readInboxMaxId;
    this.readOutboxMaxId = params.readOutboxMaxId;
    this.unreadCount = params.unreadCount;
    this.unreadMentionsCount = params.unreadMentionsCount;
    this.unreadReactionsCount = params.unreadReactionsCount;
    this.fromId = params.fromId;
    this.notifySettings = params.notifySettings;
    this.draft = params.draft;
  }
}

export class MessagesForumTopics extends Constructor {
  orderByCreateDate?: true;
  count: number;
  topics: Array<TypeForumTopic>;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  pts: number;

  protected get [id]() {
    return 0x367617d3;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["orderByCreateDate", "true", "flags.0?true"],
      ["count", "number", "int"],
      ["topics", [TypeForumTopic], "Vector<ForumTopic>"],
      ["messages", [TypeMessage], "Vector<Message>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["pts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.orderByCreateDate ?? null, "true", "flags.0?true"],
      [this.count, "number", "int"],
      [this.topics, [TypeForumTopic], "Vector<ForumTopic>"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.pts, "number", "int"],
    ];
  }

  constructor(
    params: {
      orderByCreateDate?: true;
      count: number;
      topics: Array<TypeForumTopic>;
      messages: Array<TypeMessage>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
      pts: number;
    },
  ) {
    super();
    this.orderByCreateDate = params.orderByCreateDate;
    this.count = params.count;
    this.topics = params.topics;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
    this.pts = params.pts;
  }
}

export class DefaultHistoryTTL extends Constructor {
  period: number;

  protected get [id]() {
    return 0x43b46b20;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["period", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.period, "number", "int"],
    ];
  }

  constructor(params: { period: number }) {
    super();
    this.period = params.period;
  }
}

export class ExportedContactToken extends Constructor {
  url: string;
  expires: number;

  protected get [id]() {
    return 0x41bf109b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
      ["expires", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
      [this.expires, "number", "int"],
    ];
  }

  constructor(params: { url: string; expires: number }) {
    super();
    this.url = params.url;
    this.expires = params.expires;
  }
}

export class RequestPeerTypeUser extends TypeRequestPeerType {
  bot?: boolean;
  premium?: boolean;

  protected get [id]() {
    return 0x5f3b8a00;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["bot", "boolean", "flags.0?Bool"],
      ["premium", "boolean", "flags.1?Bool"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.bot ?? null, "boolean", "flags.0?Bool"],
      [this.premium ?? null, "boolean", "flags.1?Bool"],
    ];
  }

  constructor(params: { bot?: boolean; premium?: boolean }) {
    super();
    this.bot = params.bot;
    this.premium = params.premium;
  }
}

export class RequestPeerTypeChat extends TypeRequestPeerType {
  creator?: true;
  botParticipant?: true;
  hasUsername?: boolean;
  forum?: boolean;
  userAdminRights?: TypeChatAdminRights;
  botAdminRights?: TypeChatAdminRights;

  protected get [id]() {
    return 0xc9f06e1b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["creator", "true", "flags.0?true"],
      ["botParticipant", "true", "flags.5?true"],
      ["hasUsername", "boolean", "flags.3?Bool"],
      ["forum", "boolean", "flags.4?Bool"],
      ["userAdminRights", TypeChatAdminRights, "flags.1?ChatAdminRights"],
      ["botAdminRights", TypeChatAdminRights, "flags.2?ChatAdminRights"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.creator ?? null, "true", "flags.0?true"],
      [this.botParticipant ?? null, "true", "flags.5?true"],
      [this.hasUsername ?? null, "boolean", "flags.3?Bool"],
      [this.forum ?? null, "boolean", "flags.4?Bool"],
      [
        this.userAdminRights ?? null,
        TypeChatAdminRights,
        "flags.1?ChatAdminRights",
      ],
      [
        this.botAdminRights ?? null,
        TypeChatAdminRights,
        "flags.2?ChatAdminRights",
      ],
    ];
  }

  constructor(
    params: {
      creator?: true;
      botParticipant?: true;
      hasUsername?: boolean;
      forum?: boolean;
      userAdminRights?: TypeChatAdminRights;
      botAdminRights?: TypeChatAdminRights;
    },
  ) {
    super();
    this.creator = params.creator;
    this.botParticipant = params.botParticipant;
    this.hasUsername = params.hasUsername;
    this.forum = params.forum;
    this.userAdminRights = params.userAdminRights;
    this.botAdminRights = params.botAdminRights;
  }
}

export class RequestPeerTypeBroadcast extends TypeRequestPeerType {
  creator?: true;
  hasUsername?: boolean;
  userAdminRights?: TypeChatAdminRights;
  botAdminRights?: TypeChatAdminRights;

  protected get [id]() {
    return 0x339bef6c;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["creator", "true", "flags.0?true"],
      ["hasUsername", "boolean", "flags.3?Bool"],
      ["userAdminRights", TypeChatAdminRights, "flags.1?ChatAdminRights"],
      ["botAdminRights", TypeChatAdminRights, "flags.2?ChatAdminRights"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.creator ?? null, "true", "flags.0?true"],
      [this.hasUsername ?? null, "boolean", "flags.3?Bool"],
      [
        this.userAdminRights ?? null,
        TypeChatAdminRights,
        "flags.1?ChatAdminRights",
      ],
      [
        this.botAdminRights ?? null,
        TypeChatAdminRights,
        "flags.2?ChatAdminRights",
      ],
    ];
  }

  constructor(
    params: {
      creator?: true;
      hasUsername?: boolean;
      userAdminRights?: TypeChatAdminRights;
      botAdminRights?: TypeChatAdminRights;
    },
  ) {
    super();
    this.creator = params.creator;
    this.hasUsername = params.hasUsername;
    this.userAdminRights = params.userAdminRights;
    this.botAdminRights = params.botAdminRights;
  }
}

export class EmojiListNotModified extends TypeEmojiList {
  protected get [id]() {
    return 0x481eadfa;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class EmojiList extends Constructor {
  hash: bigint;
  documentId: Array<bigint>;

  protected get [id]() {
    return 0x7a1e11d1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "bigint", "long"],
      ["documentId", ["bigint"], "Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "bigint", "long"],
      [this.documentId, ["bigint"], "Vector<long>"],
    ];
  }

  constructor(params: { hash: bigint; documentId: Array<bigint> }) {
    super();
    this.hash = params.hash;
    this.documentId = params.documentId;
  }
}

export class EmojiGroup extends Constructor {
  title: string;
  iconEmojiId: bigint;
  emoticons: Array<string>;

  protected get [id]() {
    return 0x7a9abda9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
      ["iconEmojiId", "bigint", "long"],
      ["emoticons", ["string"], "Vector<string>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
      [this.iconEmojiId, "bigint", "long"],
      [this.emoticons, ["string"], "Vector<string>"],
    ];
  }

  constructor(
    params: { title: string; iconEmojiId: bigint; emoticons: Array<string> },
  ) {
    super();
    this.title = params.title;
    this.iconEmojiId = params.iconEmojiId;
    this.emoticons = params.emoticons;
  }
}

export class MessagesEmojiGroupsNotModified extends TypeMessagesEmojiGroups {
  protected get [id]() {
    return 0x6fb4ad87;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class MessagesEmojiGroups extends Constructor {
  hash: number;
  groups: Array<TypeEmojiGroup>;

  protected get [id]() {
    return 0x881fb94b;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
      ["groups", [TypeEmojiGroup], "Vector<EmojiGroup>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
      [this.groups, [TypeEmojiGroup], "Vector<EmojiGroup>"],
    ];
  }

  constructor(params: { hash: number; groups: Array<TypeEmojiGroup> }) {
    super();
    this.hash = params.hash;
    this.groups = params.groups;
  }
}

export class TextWithEntities extends Constructor {
  text: string;
  entities: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x751f3146;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["entities", [TypeMessageEntity], "Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.entities, [TypeMessageEntity], "Vector<MessageEntity>"],
    ];
  }

  constructor(params: { text: string; entities: Array<TypeMessageEntity> }) {
    super();
    this.text = params.text;
    this.entities = params.entities;
  }
}

export class MessagesTranslateResult extends TypeMessagesTranslatedText {
  result: Array<TypeTextWithEntities>;

  protected get [id]() {
    return 0x33db32f8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["result", [TypeTextWithEntities], "Vector<TextWithEntities>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.result, [TypeTextWithEntities], "Vector<TextWithEntities>"],
    ];
  }

  constructor(params: { result: Array<TypeTextWithEntities> }) {
    super();
    this.result = params.result;
  }
}

export class AutoSaveSettings extends Constructor {
  photos?: true;
  videos?: true;
  videoMaxSize?: bigint;

  protected get [id]() {
    return 0xc84834ce;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["photos", "true", "flags.0?true"],
      ["videos", "true", "flags.1?true"],
      ["videoMaxSize", "bigint", "flags.2?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.photos ?? null, "true", "flags.0?true"],
      [this.videos ?? null, "true", "flags.1?true"],
      [this.videoMaxSize ?? null, "bigint", "flags.2?long"],
    ];
  }

  constructor(params: { photos?: true; videos?: true; videoMaxSize?: bigint }) {
    super();
    this.photos = params.photos;
    this.videos = params.videos;
    this.videoMaxSize = params.videoMaxSize;
  }
}

export class AutoSaveException extends Constructor {
  peer: TypePeer;
  settings: TypeAutoSaveSettings;

  protected get [id]() {
    return 0x81602d47;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["settings", TypeAutoSaveSettings, "AutoSaveSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.settings, TypeAutoSaveSettings, "AutoSaveSettings"],
    ];
  }

  constructor(params: { peer: TypePeer; settings: TypeAutoSaveSettings }) {
    super();
    this.peer = params.peer;
    this.settings = params.settings;
  }
}

export class AccountAutoSaveSettings extends Constructor {
  usersSettings: TypeAutoSaveSettings;
  chatsSettings: TypeAutoSaveSettings;
  broadcastsSettings: TypeAutoSaveSettings;
  exceptions: Array<TypeAutoSaveException>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x4c3e069d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["usersSettings", TypeAutoSaveSettings, "AutoSaveSettings"],
      ["chatsSettings", TypeAutoSaveSettings, "AutoSaveSettings"],
      ["broadcastsSettings", TypeAutoSaveSettings, "AutoSaveSettings"],
      ["exceptions", [TypeAutoSaveException], "Vector<AutoSaveException>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.usersSettings, TypeAutoSaveSettings, "AutoSaveSettings"],
      [this.chatsSettings, TypeAutoSaveSettings, "AutoSaveSettings"],
      [this.broadcastsSettings, TypeAutoSaveSettings, "AutoSaveSettings"],
      [this.exceptions, [TypeAutoSaveException], "Vector<AutoSaveException>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(
    params: {
      usersSettings: TypeAutoSaveSettings;
      chatsSettings: TypeAutoSaveSettings;
      broadcastsSettings: TypeAutoSaveSettings;
      exceptions: Array<TypeAutoSaveException>;
      chats: Array<TypeChat>;
      users: Array<TypeUser>;
    },
  ) {
    super();
    this.usersSettings = params.usersSettings;
    this.chatsSettings = params.chatsSettings;
    this.broadcastsSettings = params.broadcastsSettings;
    this.exceptions = params.exceptions;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class HelpAppConfigNotModified extends TypeHelpAppConfig {
  protected get [id]() {
    return 0x7cde641d;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class HelpAppConfig extends Constructor {
  hash: number;
  config: TypeJSONValue;

  protected get [id]() {
    return 0xdd18782e;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["hash", "number", "int"],
      ["config", TypeJSONValue, "JSONValue"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.hash, "number", "int"],
      [this.config, TypeJSONValue, "JSONValue"],
    ];
  }

  constructor(params: { hash: number; config: TypeJSONValue }) {
    super();
    this.hash = params.hash;
    this.config = params.config;
  }
}

export class InputBotAppID extends TypeInputBotApp {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xa920bd7a;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
    ];
  }

  constructor(params: { id: bigint; accessHash: bigint }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InputBotAppShortName extends TypeInputBotApp {
  botId: TypeInputUser;
  shortName: string;

  protected get [id]() {
    return 0x908c0407;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["botId", TypeInputUser, "InputUser"],
      ["shortName", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.botId, TypeInputUser, "InputUser"],
      [this.shortName, "string", "string"],
    ];
  }

  constructor(params: { botId: TypeInputUser; shortName: string }) {
    super();
    this.botId = params.botId;
    this.shortName = params.shortName;
  }
}

export class BotAppNotModified extends TypeBotApp {
  protected get [id]() {
    return 0x5da674b7;
  }

  static get [paramDesc](): ParamDesc {
    return [];
  }

  protected get [params](): Params {
    return [];
  }

  constructor() {
    super();
  }
}

export class BotApp extends Constructor {
  id: bigint;
  accessHash: bigint;
  shortName: string;
  title: string;
  description: string;
  photo: TypePhoto;
  document?: TypeDocument;
  hash: bigint;

  protected get [id]() {
    return 0x95fcd1d6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "long"],
      ["shortName", "string", "string"],
      ["title", "string", "string"],
      ["description", "string", "string"],
      ["photo", TypePhoto, "Photo"],
      ["document", TypeDocument, "flags.0?Document"],
      ["hash", "bigint", "long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id, "bigint", "long"],
      [this.accessHash, "bigint", "long"],
      [this.shortName, "string", "string"],
      [this.title, "string", "string"],
      [this.description, "string", "string"],
      [this.photo, TypePhoto, "Photo"],
      [this.document ?? null, TypeDocument, "flags.0?Document"],
      [this.hash, "bigint", "long"],
    ];
  }

  constructor(
    params: {
      id: bigint;
      accessHash: bigint;
      shortName: string;
      title: string;
      description: string;
      photo: TypePhoto;
      document?: TypeDocument;
      hash: bigint;
    },
  ) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.shortName = params.shortName;
    this.title = params.title;
    this.description = params.description;
    this.photo = params.photo;
    this.document = params.document;
    this.hash = params.hash;
  }
}

export class MessagesBotApp extends Constructor {
  inactive?: true;
  requestWriteAccess?: true;
  app: TypeBotApp;

  protected get [id]() {
    return 0xeb50adf5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["inactive", "true", "flags.0?true"],
      ["requestWriteAccess", "true", "flags.1?true"],
      ["app", TypeBotApp, "BotApp"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.inactive ?? null, "true", "flags.0?true"],
      [this.requestWriteAccess ?? null, "true", "flags.1?true"],
      [this.app, TypeBotApp, "BotApp"],
    ];
  }

  constructor(
    params: { inactive?: true; requestWriteAccess?: true; app: TypeBotApp },
  ) {
    super();
    this.inactive = params.inactive;
    this.requestWriteAccess = params.requestWriteAccess;
    this.app = params.app;
  }
}

export class AppWebViewResultUrl extends TypeAppWebViewResult {
  url: string;

  protected get [id]() {
    return 0x3c1b4f0d;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { url: string }) {
    super();
    this.url = params.url;
  }
}

export class InlineBotWebView extends Constructor {
  text: string;
  url: string;

  protected get [id]() {
    return 0xb57295d5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["text", "string", "string"],
      ["url", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.text, "string", "string"],
      [this.url, "string", "string"],
    ];
  }

  constructor(params: { text: string; url: string }) {
    super();
    this.text = params.text;
    this.url = params.url;
  }
}

export class ReadParticipantDate extends Constructor {
  userId: bigint;
  date: number;

  protected get [id]() {
    return 0x4a4ff172;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; date: number }) {
    super();
    this.userId = params.userId;
    this.date = params.date;
  }
}

export const map = new Map<number, TLObjectConstructor>(
  [
    [0x05162463, ResPQ],
    [0xa9f55f95, PQInnerDataDc],
    [0x56fddf88, PQInnerDataTempDc],
    [0xd0e8075c, ServerDHParamsOk],
    [0xb5890dba, ServerDHInnerData],
    [0x6643b654, ClientDHInnerData],
    [0x3bcbf734, DhGenOk],
    [0x46dc1fb9, DhGenRetry],
    [0xa69dae02, DhGenFail],
    [0x75a3f765, BindAuthKeyInner],
    [0x2144ca19, RpcError],
    [0x5e2ad36e, RpcAnswerUnknown],
    [0xcd78e586, RpcAnswerDroppedRunning],
    [0xa43ad8b7, RpcAnswerDropped],
    [0x0949d9dc, FutureSalt],
    [0xae500895, FutureSalts],
    [0x347773c5, Pong],
    [0xe22045fc, DestroySessionOk],
    [0x62d350c9, DestroySessionNone],
    [0x9ec20908, NewSessionCreated],
    [0x62d6b459, MsgsAck],
    [0xa7eff811, BadMsgNotification],
    [0xedab447b, BadServerSalt],
    [0x7d861a08, MsgResendReq],
    [0xda69fb52, MsgsStateReq],
    [0x04deb57d, MsgsStateInfo],
    [0x8cc0d131, MsgsAllInfo],
    [0x276d3ec6, MsgDetailedInfo],
    [0x809db6df, MsgNewDetailedInfo],
    [0xf660e1d4, DestroyAuthKeyOk],
    [0x0a9f2259, DestroyAuthKeyNone],
    [0xea109b13, DestroyAuthKeyFail],
    [0x9299359f, HttpWait],
    [0x3fedd339, True],
    [0xc4b9f9bb, Error],
    [0x56730bcc, Null],
    [0x7f3b18ea, InputPeerEmpty],
    [0x7da07ec9, InputPeerSelf],
    [0x35a95cb9, InputPeerChat],
    [0xdde8a54c, InputPeerUser],
    [0x27bcbbfc, InputPeerChannel],
    [0xa87b0a1c, InputPeerUserFromMessage],
    [0xbd2a0840, InputPeerChannelFromMessage],
    [0xb98886cf, InputUserEmpty],
    [0xf7c1b13f, InputUserSelf],
    [0xf21158c6, InputUser],
    [0x1da448e2, InputUserFromMessage],
    [0xf392b7f4, InputPhoneContact],
    [0xf52ff27f, InputFile],
    [0xfa4f0bb5, InputFileBig],
    [0x9664f57f, InputMediaEmpty],
    [0x1e287d04, InputMediaUploadedPhoto],
    [0xb3ba0635, InputMediaPhoto],
    [0xf9c44144, InputMediaGeoPoint],
    [0xf8ab7dfb, InputMediaContact],
    [0x5b38c6c1, InputMediaUploadedDocument],
    [0x33473058, InputMediaDocument],
    [0xc13d1c11, InputMediaVenue],
    [0xe5bbfe1a, InputMediaPhotoExternal],
    [0xfb52dc99, InputMediaDocumentExternal],
    [0xd33f43f3, InputMediaGame],
    [0x8eb5a6d5, InputMediaInvoice],
    [0x971fa843, InputMediaGeoLive],
    [0x0f94e5f1, InputMediaPoll],
    [0xe66fbf7b, InputMediaDice],
    [0x1ca48f57, InputChatPhotoEmpty],
    [0xbdcdaec0, InputChatUploadedPhoto],
    [0x8953ad37, InputChatPhoto],
    [0xe4c123d6, InputGeoPointEmpty],
    [0x48222faf, InputGeoPoint],
    [0x1cd7bf0d, InputPhotoEmpty],
    [0x3bb3b94a, InputPhoto],
    [0xdfdaabe1, InputFileLocation],
    [0xf5235d55, InputEncryptedFileLocation],
    [0xbad07584, InputDocumentFileLocation],
    [0xcbc7ee28, InputSecureFileLocation],
    [0x29be5899, InputTakeoutFileLocation],
    [0x40181ffe, InputPhotoFileLocation],
    [0xd83466f3, InputPhotoLegacyFileLocation],
    [0x37257e99, InputPeerPhotoFileLocation],
    [0x9d84f3db, InputStickerSetThumb],
    [0x0598a92a, InputGroupCallStream],
    [0x59511722, PeerUser],
    [0x36c6019a, PeerChat],
    [0xa2a5371e, PeerChannel],
    [0xaa963b05, StorageFileUnknown],
    [0x40bc6f52, StorageFilePartial],
    [0x007efe0e, StorageFileJpeg],
    [0xcae1aadf, StorageFileGif],
    [0x0a4f63c0, StorageFilePng],
    [0xae1e508d, StorageFilePdf],
    [0x528a0677, StorageFileMp3],
    [0x4b09ebbc, StorageFileMov],
    [0xb3cea0e4, StorageFileMp4],
    [0x1081464c, StorageFileWebp],
    [0xd3bc4b7a, UserEmpty],
    [0x8f97c628, User],
    [0x4f11bae1, UserProfilePhotoEmpty],
    [0x82d1f706, UserProfilePhoto],
    [0x09d05049, UserStatusEmpty],
    [0xedb93949, UserStatusOnline],
    [0x008c703f, UserStatusOffline],
    [0xe26f42f1, UserStatusRecently],
    [0x07bf09fc, UserStatusLastWeek],
    [0x77ebc742, UserStatusLastMonth],
    [0x29562865, ChatEmpty],
    [0x41cbf256, Chat],
    [0x6592a1a7, ChatForbidden],
    [0x83259464, Channel],
    [0x17d493d5, ChannelForbidden],
    [0xc9d31138, ChatFull],
    [0xf2355507, ChannelFull],
    [0xc02d4007, ChatParticipant],
    [0xe46bcee4, ChatParticipantCreator],
    [0xa0933f5b, ChatParticipantAdmin],
    [0x8763d3e1, ChatParticipantsForbidden],
    [0x3cbc93f8, ChatParticipants],
    [0x37c1011c, ChatPhotoEmpty],
    [0x1c6e1c11, ChatPhoto],
    [0x90a6ca84, MessageEmpty],
    [0x38116ee0, Message],
    [0x2b085862, MessageService],
    [0x3ded6320, MessageMediaEmpty],
    [0x695150d7, MessageMediaPhoto],
    [0x56e0d474, MessageMediaGeo],
    [0x70322949, MessageMediaContact],
    [0x9f84f49e, MessageMediaUnsupported],
    [0x9cb070d7, MessageMediaDocument],
    [0xa32dd600, MessageMediaWebPage],
    [0x2ec0533f, MessageMediaVenue],
    [0xfdb19008, MessageMediaGame],
    [0xf6a548d3, MessageMediaInvoice],
    [0xb940c666, MessageMediaGeoLive],
    [0x4bd6e798, MessageMediaPoll],
    [0x3f7ee58b, MessageMediaDice],
    [0xb6aef7b0, MessageActionEmpty],
    [0xbd47cbad, MessageActionChatCreate],
    [0xb5a1ce5a, MessageActionChatEditTitle],
    [0x7fcb13a8, MessageActionChatEditPhoto],
    [0x95e3fbef, MessageActionChatDeletePhoto],
    [0x15cefd00, MessageActionChatAddUser],
    [0xa43f30cc, MessageActionChatDeleteUser],
    [0x031224c3, MessageActionChatJoinedByLink],
    [0x95d2ac92, MessageActionChannelCreate],
    [0xe1037f92, MessageActionChatMigrateTo],
    [0xea3948e9, MessageActionChannelMigrateFrom],
    [0x94bd38ed, MessageActionPinMessage],
    [0x9fbab604, MessageActionHistoryClear],
    [0x92a72876, MessageActionGameScore],
    [0x8f31b327, MessageActionPaymentSentMe],
    [0x96163f56, MessageActionPaymentSent],
    [0x80e11a7f, MessageActionPhoneCall],
    [0x4792929b, MessageActionScreenshotTaken],
    [0xfae69f56, MessageActionCustomAction],
    [0xc516d679, MessageActionBotAllowed],
    [0x1b287353, MessageActionSecureValuesSentMe],
    [0xd95c6154, MessageActionSecureValuesSent],
    [0xf3f25f76, MessageActionContactSignUp],
    [0x98e0d697, MessageActionGeoProximityReached],
    [0x7a0d7f42, MessageActionGroupCall],
    [0x502f92f7, MessageActionInviteToGroupCall],
    [0x3c134d7b, MessageActionSetMessagesTTL],
    [0xb3a07661, MessageActionGroupCallScheduled],
    [0xaa786345, MessageActionSetChatTheme],
    [0xebbca3cb, MessageActionChatJoinedByRequest],
    [0x47dd8079, MessageActionWebViewDataSentMe],
    [0xb4c38cb5, MessageActionWebViewDataSent],
    [0xaba0f5c6, MessageActionGiftPremium],
    [0x0d999256, MessageActionTopicCreate],
    [0xc0944820, MessageActionTopicEdit],
    [0x57de635e, MessageActionSuggestProfilePhoto],
    [0xfe77345d, MessageActionRequestedPeer],
    [0xd58a08c6, Dialog],
    [0x71bd134c, DialogFolder],
    [0x2331b22d, PhotoEmpty],
    [0xfb197a65, Photo],
    [0x0e17e23c, PhotoSizeEmpty],
    [0x75c78e60, PhotoSize],
    [0x021e1ad6, PhotoCachedSize],
    [0xe0b0bc2e, PhotoStrippedSize],
    [0xfa3efb95, PhotoSizeProgressive],
    [0xd8214d41, PhotoPathSize],
    [0x1117dd5f, GeoPointEmpty],
    [0xb2a2f663, GeoPoint],
    [0x5e002502, AuthSentCode],
    [0x2390fe44, AuthSentCodeSuccess],
    [0x2ea2c0d4, AuthAuthorization],
    [0x44747e9a, AuthAuthorizationSignUpRequired],
    [0xb434e2b8, AuthExportedAuthorization],
    [0xb8bc5b0c, InputNotifyPeer],
    [0x193b4417, InputNotifyUsers],
    [0x4a95e84e, InputNotifyChats],
    [0xb1db7c7e, InputNotifyBroadcasts],
    [0x5c467992, InputNotifyForumTopic],
    [0xdf1f002b, InputPeerNotifySettings],
    [0xa83b0426, PeerNotifySettings],
    [0xa518110d, PeerSettings],
    [0xa437c3ed, WallPaper],
    [0xe0804116, WallPaperNoFile],
    [0x58dbcab8, InputReportReasonSpam],
    [0x1e22c78d, InputReportReasonViolence],
    [0x2e59d922, InputReportReasonPornography],
    [0xadf44ee3, InputReportReasonChildAbuse],
    [0xc1e4a2b1, InputReportReasonOther],
    [0x9b89f93a, InputReportReasonCopyright],
    [0xdbd4feed, InputReportReasonGeoIrrelevant],
    [0xf5ddd6e7, InputReportReasonFake],
    [0x0a8eb2be, InputReportReasonIllegalDrugs],
    [0x9ec7863d, InputReportReasonPersonalDetails],
    [0xf8d32aed, UserFull],
    [0x145ade0b, Contact],
    [0xc13e3c50, ImportedContact],
    [0x16d9703b, ContactStatus],
    [0xb74ba9d2, ContactsContactsNotModified],
    [0xeae87e42, ContactsContacts],
    [0x77d01c3b, ContactsImportedContacts],
    [0x0ade1591, ContactsBlocked],
    [0xe1664194, ContactsBlockedSlice],
    [0x15ba6c40, MessagesDialogs],
    [0x71e094f3, MessagesDialogsSlice],
    [0xf0e3e596, MessagesDialogsNotModified],
    [0x8c718e87, MessagesMessages],
    [0x3a54685e, MessagesMessagesSlice],
    [0xc776ba4e, MessagesChannelMessages],
    [0x74535f21, MessagesMessagesNotModified],
    [0x64ff9fd5, MessagesChats],
    [0x9cd81144, MessagesChatsSlice],
    [0xe5d7d19c, MessagesChatFull],
    [0xb45c69d1, MessagesAffectedHistory],
    [0x57e2f66c, InputMessagesFilterEmpty],
    [0x9609a51c, InputMessagesFilterPhotos],
    [0x9fc00e65, InputMessagesFilterVideo],
    [0x56e9f0e4, InputMessagesFilterPhotoVideo],
    [0x9eddf188, InputMessagesFilterDocument],
    [0x7ef0dd87, InputMessagesFilterUrl],
    [0xffc86587, InputMessagesFilterGif],
    [0x50f5c392, InputMessagesFilterVoice],
    [0x3751b49e, InputMessagesFilterMusic],
    [0x3a20ecb8, InputMessagesFilterChatPhotos],
    [0x80c99768, InputMessagesFilterPhoneCalls],
    [0x7a7c17a4, InputMessagesFilterRoundVoice],
    [0xb549da53, InputMessagesFilterRoundVideo],
    [0xc1f8e69a, InputMessagesFilterMyMentions],
    [0xe7026d0d, InputMessagesFilterGeo],
    [0xe062db83, InputMessagesFilterContacts],
    [0x1bb00451, InputMessagesFilterPinned],
    [0x1f2b0afd, UpdateNewMessage],
    [0x4e90bfd6, UpdateMessageID],
    [0xa20db0e5, UpdateDeleteMessages],
    [0xc01e857f, UpdateUserTyping],
    [0x83487af0, UpdateChatUserTyping],
    [0x07761198, UpdateChatParticipants],
    [0xe5bdf8de, UpdateUserStatus],
    [0xa7848924, UpdateUserName],
    [0x12bcbd9a, UpdateNewEncryptedMessage],
    [0x1710f156, UpdateEncryptedChatTyping],
    [0xb4a2e88d, UpdateEncryption],
    [0x38fe25b7, UpdateEncryptedMessagesRead],
    [0x3dda5451, UpdateChatParticipantAdd],
    [0xe32f3d77, UpdateChatParticipantDelete],
    [0x8e5e9873, UpdateDcOptions],
    [0xbec268ef, UpdateNotifySettings],
    [0xebe46819, UpdateServiceNotification],
    [0xee3b272a, UpdatePrivacy],
    [0x05492a13, UpdateUserPhone],
    [0x9c974fdf, UpdateReadHistoryInbox],
    [0x2f2f21bf, UpdateReadHistoryOutbox],
    [0x7f891213, UpdateWebPage],
    [0x68c13933, UpdateReadMessagesContents],
    [0x108d941f, UpdateChannelTooLong],
    [0x635b4c09, UpdateChannel],
    [0x62ba04d9, UpdateNewChannelMessage],
    [0x922e6e10, UpdateReadChannelInbox],
    [0xc32d5b12, UpdateDeleteChannelMessages],
    [0xf226ac08, UpdateChannelMessageViews],
    [0xd7ca61a2, UpdateChatParticipantAdmin],
    [0x688a30aa, UpdateNewStickerSet],
    [0x0bb2d201, UpdateStickerSetsOrder],
    [0x31c24808, UpdateStickerSets],
    [0x9375341e, UpdateSavedGifs],
    [0x496f379c, UpdateBotInlineQuery],
    [0x12f12a07, UpdateBotInlineSend],
    [0x1b3f4df7, UpdateEditChannelMessage],
    [0xb9cfc48d, UpdateBotCallbackQuery],
    [0xe40370a3, UpdateEditMessage],
    [0x691e9052, UpdateInlineBotCallbackQuery],
    [0xb75f99a9, UpdateReadChannelOutbox],
    [0x1b49ec6d, UpdateDraftMessage],
    [0x571d2742, UpdateReadFeaturedStickers],
    [0x9a422c20, UpdateRecentStickers],
    [0xa229dd06, UpdateConfig],
    [0x3354678f, UpdatePtsChanged],
    [0x2f2ba99f, UpdateChannelWebPage],
    [0x6e6fe51c, UpdateDialogPinned],
    [0xfa0f3ca2, UpdatePinnedDialogs],
    [0x8317c0c3, UpdateBotWebhookJSON],
    [0x9b9240a6, UpdateBotWebhookJSONQuery],
    [0xb5aefd7d, UpdateBotShippingQuery],
    [0x8caa9a96, UpdateBotPrecheckoutQuery],
    [0xab0f6b1e, UpdatePhoneCall],
    [0x46560264, UpdateLangPackTooLong],
    [0x56022f4d, UpdateLangPack],
    [0xe511996d, UpdateFavedStickers],
    [0xea29055d, UpdateChannelReadMessagesContents],
    [0x7084a7be, UpdateContactsReset],
    [0xb23fc698, UpdateChannelAvailableMessages],
    [0xe16459c3, UpdateDialogUnreadMark],
    [0xaca1657b, UpdateMessagePoll],
    [0x54c01850, UpdateChatDefaultBannedRights],
    [0x19360dc0, UpdateFolderPeers],
    [0x6a7e7366, UpdatePeerSettings],
    [0xb4afcfb0, UpdatePeerLocated],
    [0x39a51dfb, UpdateNewScheduledMessage],
    [0x90866cee, UpdateDeleteScheduledMessages],
    [0x8216fba3, UpdateTheme],
    [0x871fb939, UpdateGeoLiveViewed],
    [0x564fe691, UpdateLoginToken],
    [0x106395c9, UpdateMessagePollVote],
    [0x26ffde7d, UpdateDialogFilter],
    [0xa5d72105, UpdateDialogFilterOrder],
    [0x3504914f, UpdateDialogFilters],
    [0x2661bf09, UpdatePhoneCallSignalingData],
    [0xd29a27f4, UpdateChannelMessageForwards],
    [0xd6b19546, UpdateReadChannelDiscussionInbox],
    [0x695c9e7c, UpdateReadChannelDiscussionOutbox],
    [0x246a4b22, UpdatePeerBlocked],
    [0x8c88c923, UpdateChannelUserTyping],
    [0xed85eab5, UpdatePinnedMessages],
    [0x5bb98608, UpdatePinnedChannelMessages],
    [0xf89a6a4e, UpdateChat],
    [0xf2ebdb4e, UpdateGroupCallParticipants],
    [0x14b24500, UpdateGroupCall],
    [0xbb9bb9a5, UpdatePeerHistoryTTL],
    [0xd087663a, UpdateChatParticipant],
    [0x985d3abb, UpdateChannelParticipant],
    [0xc4870a49, UpdateBotStopped],
    [0x0b783982, UpdateGroupCallConnection],
    [0x4d712f2e, UpdateBotCommands],
    [0x7063c3db, UpdatePendingJoinRequests],
    [0x11dfa986, UpdateBotChatInviteRequester],
    [0x5e1b3cb8, UpdateMessageReactions],
    [0x17b7a20b, UpdateAttachMenuBots],
    [0x1592b79d, UpdateWebViewResultSent],
    [0x14b85813, UpdateBotMenuButton],
    [0x74d8be99, UpdateSavedRingtones],
    [0x0084cd5a, UpdateTranscribedAudio],
    [0xfb4c496c, UpdateReadFeaturedEmojiStickers],
    [0x28373599, UpdateUserEmojiStatus],
    [0x30f443db, UpdateRecentEmojiStatuses],
    [0x6f7863f4, UpdateRecentReactions],
    [0x86fccf85, UpdateMoveStickerSetToTop],
    [0x5a73a98c, UpdateMessageExtendedMedia],
    [0x192efbe3, UpdateChannelPinnedTopic],
    [0xfe198602, UpdateChannelPinnedTopics],
    [0x20529438, UpdateUser],
    [0xec05b097, UpdateAutoSaveSettings],
    [0xccf08ad6, UpdateGroupInvitePrivacyForbidden],
    [0xa56c2a3e, UpdatesState],
    [0x5d75a138, UpdatesDifferenceEmpty],
    [0x00f49ca0, UpdatesDifference],
    [0xa8fb1981, UpdatesDifferenceSlice],
    [0x4afe8f6d, UpdatesDifferenceTooLong],
    [0xe317af7e, UpdatesTooLong],
    [0x313bc7f8, UpdateShortMessage],
    [0x4d6deea5, UpdateShortChatMessage],
    [0x78d4dec1, UpdateShort],
    [0x725b04c3, UpdatesCombined],
    [0x74ae4240, Updates],
    [0x9015e101, UpdateShortSentMessage],
    [0x8dca6aa5, PhotosPhotos],
    [0x15051f54, PhotosPhotosSlice],
    [0x20212ca8, PhotosPhoto],
    [0x096a18d5, UploadFile],
    [0xf18cda44, UploadFileCdnRedirect],
    [0x18b7a10d, DcOption],
    [0xcc1a241e, Config],
    [0x8e1a1775, NearestDc],
    [0xccbbce30, HelpAppUpdate],
    [0xc45a6536, HelpNoAppUpdate],
    [0x18cb9f78, HelpInviteText],
    [0xab7ec0a0, EncryptedChatEmpty],
    [0x66b25953, EncryptedChatWaiting],
    [0x48f1d94c, EncryptedChatRequested],
    [0x61f0d4c7, EncryptedChat],
    [0x1e1c7c45, EncryptedChatDiscarded],
    [0xf141b5e1, InputEncryptedChat],
    [0xc21f497e, EncryptedFileEmpty],
    [0xa8008cd8, EncryptedFile],
    [0x1837c364, InputEncryptedFileEmpty],
    [0x64bd0306, InputEncryptedFileUploaded],
    [0x5a17b5e5, InputEncryptedFile],
    [0x2dc173c8, InputEncryptedFileBigUploaded],
    [0xed18c118, EncryptedMessage],
    [0x23734b06, EncryptedMessageService],
    [0xc0e24635, MessagesDhConfigNotModified],
    [0x2c221edd, MessagesDhConfig],
    [0x560f8935, MessagesSentEncryptedMessage],
    [0x9493ff32, MessagesSentEncryptedFile],
    [0x72f0eaae, InputDocumentEmpty],
    [0x1abfb575, InputDocument],
    [0x36f8c871, DocumentEmpty],
    [0x8fd4c4d8, Document],
    [0x17c6b5f6, HelpSupport],
    [0x9fd40bd8, NotifyPeer],
    [0xb4c83b4c, NotifyUsers],
    [0xc007cec3, NotifyChats],
    [0xd612e8ef, NotifyBroadcasts],
    [0x226e6308, NotifyForumTopic],
    [0x16bf744e, SendMessageTypingAction],
    [0xfd5ec8f5, SendMessageCancelAction],
    [0xa187d66f, SendMessageRecordVideoAction],
    [0xe9763aec, SendMessageUploadVideoAction],
    [0xd52f73f7, SendMessageRecordAudioAction],
    [0xf351d7ab, SendMessageUploadAudioAction],
    [0xd1d34a26, SendMessageUploadPhotoAction],
    [0xaa0cd9e4, SendMessageUploadDocumentAction],
    [0x176f8ba1, SendMessageGeoLocationAction],
    [0x628cbc6f, SendMessageChooseContactAction],
    [0xdd6a8f48, SendMessageGamePlayAction],
    [0x88f27fbc, SendMessageRecordRoundAction],
    [0x243e1c66, SendMessageUploadRoundAction],
    [0xd92c2285, SpeakingInGroupCallAction],
    [0xdbda9246, SendMessageHistoryImportAction],
    [0xb05ac6b1, SendMessageChooseStickerAction],
    [0x25972bcb, SendMessageEmojiInteraction],
    [0xb665902e, SendMessageEmojiInteractionSeen],
    [0xb3134d9d, ContactsFound],
    [0x4f96cb18, InputPrivacyKeyStatusTimestamp],
    [0xbdfb0426, InputPrivacyKeyChatInvite],
    [0xfabadc5f, InputPrivacyKeyPhoneCall],
    [0xdb9e70d2, InputPrivacyKeyPhoneP2P],
    [0xa4dd4c08, InputPrivacyKeyForwards],
    [0x5719bacc, InputPrivacyKeyProfilePhoto],
    [0x0352dafa, InputPrivacyKeyPhoneNumber],
    [0xd1219bdd, InputPrivacyKeyAddedByPhone],
    [0xaee69d68, InputPrivacyKeyVoiceMessages],
    [0xbc2eab30, PrivacyKeyStatusTimestamp],
    [0x500e6dfa, PrivacyKeyChatInvite],
    [0x3d662b7b, PrivacyKeyPhoneCall],
    [0x39491cc8, PrivacyKeyPhoneP2P],
    [0x69ec56a3, PrivacyKeyForwards],
    [0x96151fed, PrivacyKeyProfilePhoto],
    [0xd19ae46d, PrivacyKeyPhoneNumber],
    [0x42ffd42b, PrivacyKeyAddedByPhone],
    [0x0697f414, PrivacyKeyVoiceMessages],
    [0x0d09e07b, InputPrivacyValueAllowContacts],
    [0x184b35ce, InputPrivacyValueAllowAll],
    [0x131cc67f, InputPrivacyValueAllowUsers],
    [0x0ba52007, InputPrivacyValueDisallowContacts],
    [0xd66b66c9, InputPrivacyValueDisallowAll],
    [0x90110467, InputPrivacyValueDisallowUsers],
    [0x840649cf, InputPrivacyValueAllowChatParticipants],
    [0xe94f0f86, InputPrivacyValueDisallowChatParticipants],
    [0xfffe1bac, PrivacyValueAllowContacts],
    [0x65427b82, PrivacyValueAllowAll],
    [0xb8905fb2, PrivacyValueAllowUsers],
    [0xf888fa1a, PrivacyValueDisallowContacts],
    [0x8b73e763, PrivacyValueDisallowAll],
    [0xe4621141, PrivacyValueDisallowUsers],
    [0x6b134e8e, PrivacyValueAllowChatParticipants],
    [0x41c87565, PrivacyValueDisallowChatParticipants],
    [0x50a04e45, AccountPrivacyRules],
    [0xb8d0afdf, AccountDaysTTL],
    [0x6c37c15c, DocumentAttributeImageSize],
    [0x11b58939, DocumentAttributeAnimated],
    [0x6319d612, DocumentAttributeSticker],
    [0x0ef02ce6, DocumentAttributeVideo],
    [0x9852f9c6, DocumentAttributeAudio],
    [0x15590068, DocumentAttributeFilename],
    [0x9801d2f7, DocumentAttributeHasStickers],
    [0xfd149899, DocumentAttributeCustomEmoji],
    [0xf1749a22, MessagesStickersNotModified],
    [0x30a6ec7e, MessagesStickers],
    [0x12b299d4, StickerPack],
    [0xe86602c3, MessagesAllStickersNotModified],
    [0xcdbbcebb, MessagesAllStickers],
    [0x84d19185, MessagesAffectedMessages],
    [0xeb1477e8, WebPageEmpty],
    [0xc586da1c, WebPagePending],
    [0xe89c45b2, WebPage],
    [0x7311ca11, WebPageNotModified],
    [0xad01d61d, Authorization],
    [0x4bff8ea0, AccountAuthorizations],
    [0x957b50fb, AccountPassword],
    [0x9a5c33e5, AccountPasswordSettings],
    [0xc23727c9, AccountPasswordInputSettings],
    [0x137948a5, AuthPasswordRecovery],
    [0xa384b779, ReceivedNotifyMessage],
    [0x0ab4a819, ChatInviteExported],
    [0xed107ab7, ChatInvitePublicJoinRequests],
    [0x5a686d7c, ChatInviteAlready],
    [0x300c44c1, ChatInvite],
    [0x61695cb0, ChatInvitePeek],
    [0xffb62b95, InputStickerSetEmpty],
    [0x9de7a269, InputStickerSetID],
    [0x861cc8a0, InputStickerSetShortName],
    [0x028703c8, InputStickerSetAnimatedEmoji],
    [0xe67f520e, InputStickerSetDice],
    [0x0cde3739, InputStickerSetAnimatedEmojiAnimations],
    [0xc88b3b02, InputStickerSetPremiumGifts],
    [0x04c4d4ce, InputStickerSetEmojiGenericAnimations],
    [0x29d0f5ee, InputStickerSetEmojiDefaultStatuses],
    [0x44c1f8e9, InputStickerSetEmojiDefaultTopicIcons],
    [0x2dd14edc, StickerSet],
    [0x6e153f16, MessagesStickerSet],
    [0xd3f924eb, MessagesStickerSetNotModified],
    [0xc27ac8c7, BotCommand],
    [0x8f300b57, BotInfo],
    [0xa2fa4880, KeyboardButton],
    [0x258aff05, KeyboardButtonUrl],
    [0x35bbdb6b, KeyboardButtonCallback],
    [0xb16a6c29, KeyboardButtonRequestPhone],
    [0xfc796b3f, KeyboardButtonRequestGeoLocation],
    [0x0568a748, KeyboardButtonSwitchInline],
    [0x50f41ccf, KeyboardButtonGame],
    [0xafd93fbb, KeyboardButtonBuy],
    [0x10b78d29, KeyboardButtonUrlAuth],
    [0xd02e7fd4, InputKeyboardButtonUrlAuth],
    [0xbbc7515d, KeyboardButtonRequestPoll],
    [0xe988037b, InputKeyboardButtonUserProfile],
    [0x308660c1, KeyboardButtonUserProfile],
    [0x13767230, KeyboardButtonWebView],
    [0xa0c0505c, KeyboardButtonSimpleWebView],
    [0x0d0b468c, KeyboardButtonRequestPeer],
    [0x77608b83, KeyboardButtonRow],
    [0xa03e5b85, ReplyKeyboardHide],
    [0x86b40b08, ReplyKeyboardForceReply],
    [0x85dd99d1, ReplyKeyboardMarkup],
    [0x48a30254, ReplyInlineMarkup],
    [0xbb92ba95, MessageEntityUnknown],
    [0xfa04579d, MessageEntityMention],
    [0x6f635b0d, MessageEntityHashtag],
    [0x6cef8ac7, MessageEntityBotCommand],
    [0x6ed02538, MessageEntityUrl],
    [0x64e475c2, MessageEntityEmail],
    [0xbd610bc9, MessageEntityBold],
    [0x826f8b60, MessageEntityItalic],
    [0x28a20571, MessageEntityCode],
    [0x73924be0, MessageEntityPre],
    [0x76a6d327, MessageEntityTextUrl],
    [0xdc7b1140, MessageEntityMentionName],
    [0x208e68c9, InputMessageEntityMentionName],
    [0x9b69e34b, MessageEntityPhone],
    [0x4c4e743f, MessageEntityCashtag],
    [0x9c4e7e8b, MessageEntityUnderline],
    [0xbf0693d4, MessageEntityStrike],
    [0x020df5d0, MessageEntityBlockquote],
    [0x761e6af4, MessageEntityBankCard],
    [0x32ca960f, MessageEntitySpoiler],
    [0xc8cf05f8, MessageEntityCustomEmoji],
    [0xee8c1e86, InputChannelEmpty],
    [0xf35aec28, InputChannel],
    [0x5b934f9d, InputChannelFromMessage],
    [0x7f077ad9, ContactsResolvedPeer],
    [0x0ae30253, MessageRange],
    [0x3e11affb, UpdatesChannelDifferenceEmpty],
    [0xa4bcc6fe, UpdatesChannelDifferenceTooLong],
    [0x2064674e, UpdatesChannelDifference],
    [0x94d42ee7, ChannelMessagesFilterEmpty],
    [0xcd77d957, ChannelMessagesFilter],
    [0xc00c07c0, ChannelParticipant],
    [0x35a8bfa7, ChannelParticipantSelf],
    [0x2fe601d3, ChannelParticipantCreator],
    [0x34c3bb53, ChannelParticipantAdmin],
    [0x6df8014e, ChannelParticipantBanned],
    [0x1b03f006, ChannelParticipantLeft],
    [0xde3f3c79, ChannelParticipantsRecent],
    [0xb4608969, ChannelParticipantsAdmins],
    [0xa3b54985, ChannelParticipantsKicked],
    [0xb0d1865b, ChannelParticipantsBots],
    [0x1427a5e1, ChannelParticipantsBanned],
    [0x0656ac4b, ChannelParticipantsSearch],
    [0xbb6ae88d, ChannelParticipantsContacts],
    [0xe04b5ceb, ChannelParticipantsMentions],
    [0x9ab0feaf, ChannelsChannelParticipants],
    [0xf0173fe9, ChannelsChannelParticipantsNotModified],
    [0xdfb80317, ChannelsChannelParticipant],
    [0x780a0310, HelpTermsOfService],
    [0xe8025ca2, MessagesSavedGifsNotModified],
    [0x84a02a0d, MessagesSavedGifs],
    [0x3380c786, InputBotInlineMessageMediaAuto],
    [0x3dcd7a87, InputBotInlineMessageText],
    [0x96929a85, InputBotInlineMessageMediaGeo],
    [0x417bbf11, InputBotInlineMessageMediaVenue],
    [0xa6edbffd, InputBotInlineMessageMediaContact],
    [0x4b425864, InputBotInlineMessageGame],
    [0xd7e78225, InputBotInlineMessageMediaInvoice],
    [0x88bf9319, InputBotInlineResult],
    [0xa8d864a7, InputBotInlineResultPhoto],
    [0xfff8fdc4, InputBotInlineResultDocument],
    [0x4fa417f2, InputBotInlineResultGame],
    [0x764cf810, BotInlineMessageMediaAuto],
    [0x8c7f65e2, BotInlineMessageText],
    [0x051846fd, BotInlineMessageMediaGeo],
    [0x8a86659c, BotInlineMessageMediaVenue],
    [0x18d1cdc2, BotInlineMessageMediaContact],
    [0x354a9b09, BotInlineMessageMediaInvoice],
    [0x11965f3a, BotInlineResult],
    [0x17db940b, BotInlineMediaResult],
    [0xe021f2f6, MessagesBotResults],
    [0x5dab1af4, ExportedMessageLink],
    [0x5f777dce, MessageFwdHeader],
    [0x72a3158c, AuthCodeTypeSms],
    [0x741cd3e3, AuthCodeTypeCall],
    [0x226ccefb, AuthCodeTypeFlashCall],
    [0xd61ad6ee, AuthCodeTypeMissedCall],
    [0x06ed998c, AuthCodeTypeFragmentSms],
    [0x3dbb5986, AuthSentCodeTypeApp],
    [0xc000bba2, AuthSentCodeTypeSms],
    [0x5353e5a7, AuthSentCodeTypeCall],
    [0xab03c6d9, AuthSentCodeTypeFlashCall],
    [0x82006484, AuthSentCodeTypeMissedCall],
    [0x5a159841, AuthSentCodeTypeEmailCode],
    [0xa5491dea, AuthSentCodeTypeSetUpEmailRequired],
    [0xd9565c39, AuthSentCodeTypeFragmentSms],
    [0xe57b1432, AuthSentCodeTypeFirebaseSms],
    [0x36585ea4, MessagesBotCallbackAnswer],
    [0x26b5dde6, MessagesMessageEditData],
    [0x890c3d89, InputBotInlineMessageID],
    [0xb6d915d7, InputBotInlineMessageID64],
    [0x3c20629f, InlineBotSwitchPM],
    [0x3371c354, MessagesPeerDialogs],
    [0xedcdc05b, TopPeer],
    [0xab661b5b, TopPeerCategoryBotsPM],
    [0x148677e2, TopPeerCategoryBotsInline],
    [0x0637b7ed, TopPeerCategoryCorrespondents],
    [0xbd17a14a, TopPeerCategoryGroups],
    [0x161d9628, TopPeerCategoryChannels],
    [0x1e76a78c, TopPeerCategoryPhoneCalls],
    [0xa8406ca9, TopPeerCategoryForwardUsers],
    [0xfbeec0f0, TopPeerCategoryForwardChats],
    [0xfb834291, TopPeerCategoryPeers],
    [0xde266ef5, ContactsTopPeersNotModified],
    [0x70b772a8, ContactsTopPeers],
    [0xb52c939d, ContactsTopPeersDisabled],
    [0x1b0c841a, DraftMessageEmpty],
    [0xfd8e711f, DraftMessage],
    [0xc6dc0c66, MessagesFeaturedStickersNotModified],
    [0xbe382906, MessagesFeaturedStickers],
    [0x0b17f890, MessagesRecentStickersNotModified],
    [0x88d37c56, MessagesRecentStickers],
    [0x4fcba9c8, MessagesArchivedStickers],
    [0x38641628, MessagesStickerSetInstallResultSuccess],
    [0x35e410a8, MessagesStickerSetInstallResultArchive],
    [0x6410a5d2, StickerSetCovered],
    [0x3407e51b, StickerSetMultiCovered],
    [0x40d13c0e, StickerSetFullCovered],
    [0x77b15d1c, StickerSetNoCovered],
    [0xaed6dbb2, MaskCoords],
    [0x4a992157, InputStickeredMediaPhoto],
    [0x0438865b, InputStickeredMediaDocument],
    [0xbdf9653b, Game],
    [0x032c3e77, InputGameID],
    [0xc331e80a, InputGameShortName],
    [0x73a379eb, HighScore],
    [0x9a3bfd99, MessagesHighScores],
    [0xdc3d824f, TextEmpty],
    [0x744694e0, TextPlain],
    [0x6724abc4, TextBold],
    [0xd912a59c, TextItalic],
    [0xc12622c4, TextUnderline],
    [0x9bf8bb95, TextStrike],
    [0x6c3f19b9, TextFixed],
    [0x3c2884c1, TextUrl],
    [0xde5a0dd6, TextEmail],
    [0x7e6260d7, TextConcat],
    [0xed6a8504, TextSubscript],
    [0xc7fb5e01, TextSuperscript],
    [0x034b8621, TextMarked],
    [0x1ccb966a, TextPhone],
    [0x081ccf4f, TextImage],
    [0x35553762, TextAnchor],
    [0x13567e8a, PageBlockUnsupported],
    [0x70abc3fd, PageBlockTitle],
    [0x8ffa9a1f, PageBlockSubtitle],
    [0xbaafe5e0, PageBlockAuthorDate],
    [0xbfd064ec, PageBlockHeader],
    [0xf12bb6e1, PageBlockSubheader],
    [0x467a0766, PageBlockParagraph],
    [0xc070d93e, PageBlockPreformatted],
    [0x48870999, PageBlockFooter],
    [0xdb20b188, PageBlockDivider],
    [0xce0d37b0, PageBlockAnchor],
    [0xe4e88011, PageBlockList],
    [0x263d7c26, PageBlockBlockquote],
    [0x4f4456d3, PageBlockPullquote],
    [0x1759c560, PageBlockPhoto],
    [0x7c8fe7b6, PageBlockVideo],
    [0x39f23300, PageBlockCover],
    [0xa8718dc5, PageBlockEmbed],
    [0xf259a80b, PageBlockEmbedPost],
    [0x65a0fa4d, PageBlockCollage],
    [0x031f9590, PageBlockSlideshow],
    [0xef1751b5, PageBlockChannel],
    [0x804361ea, PageBlockAudio],
    [0x1e148390, PageBlockKicker],
    [0xbf4dea82, PageBlockTable],
    [0x9a8ae1e1, PageBlockOrderedList],
    [0x76768bed, PageBlockDetails],
    [0x16115a96, PageBlockRelatedArticles],
    [0xa44f3ef6, PageBlockMap],
    [0x85e42301, PhoneCallDiscardReasonMissed],
    [0xe095c1a0, PhoneCallDiscardReasonDisconnect],
    [0x57adc690, PhoneCallDiscardReasonHangup],
    [0xfaf7e8c9, PhoneCallDiscardReasonBusy],
    [0x7d748d04, DataJSON],
    [0xcb296bf8, LabeledPrice],
    [0x3e85a91b, Invoice],
    [0xea02c27e, PaymentCharge],
    [0x1e8caaeb, PostAddress],
    [0x909c3f94, PaymentRequestedInfo],
    [0xcdc27a1f, PaymentSavedCredentialsCard],
    [0x1c570ed1, WebDocument],
    [0xf9c8bcc6, WebDocumentNoProxy],
    [0x9bed434d, InputWebDocument],
    [0xc239d686, InputWebFileLocation],
    [0x9f2221c9, InputWebFileGeoPointLocation],
    [0xf46fe924, InputWebFileAudioAlbumThumbLocation],
    [0x21e753bc, UploadWebFile],
    [0xa0058751, PaymentsPaymentForm],
    [0xd1451883, PaymentsValidatedRequestedInfo],
    [0x4e5f810d, PaymentsPaymentResult],
    [0xd8411139, PaymentsPaymentVerificationNeeded],
    [0x70c4fe03, PaymentsPaymentReceipt],
    [0xfb8fe43c, PaymentsSavedInfo],
    [0xc10eb2cf, InputPaymentCredentialsSaved],
    [0x3417d728, InputPaymentCredentials],
    [0x0aa1c39f, InputPaymentCredentialsApplePay],
    [0x8ac32801, InputPaymentCredentialsGooglePay],
    [0xdb64fd34, AccountTmpPassword],
    [0xb6213cdf, ShippingOption],
    [0x32da9e9c, InputStickerSetItem],
    [0x1e36fded, InputPhoneCall],
    [0x5366c915, PhoneCallEmpty],
    [0xc5226f17, PhoneCallWaiting],
    [0x14b0ed0c, PhoneCallRequested],
    [0x3660c311, PhoneCallAccepted],
    [0x967f7c67, PhoneCall],
    [0x50ca4de1, PhoneCallDiscarded],
    [0x9cc123c7, PhoneConnection],
    [0x635fe375, PhoneConnectionWebrtc],
    [0xfc878fc8, PhoneCallProtocol],
    [0xec82e140, PhonePhoneCall],
    [0xeea8e46e, UploadCdnFileReuploadNeeded],
    [0xa99fca4f, UploadCdnFile],
    [0xc982eaba, CdnPublicKey],
    [0x5725e40a, CdnConfig],
    [0xcad181f6, LangPackString],
    [0x6c47ac9f, LangPackStringPluralized],
    [0x2979eeb2, LangPackStringDeleted],
    [0xf385c1f6, LangPackDifference],
    [0xeeca5ce3, LangPackLanguage],
    [0xe6dfb825, ChannelAdminLogEventActionChangeTitle],
    [0x55188a2e, ChannelAdminLogEventActionChangeAbout],
    [0x6a4afc38, ChannelAdminLogEventActionChangeUsername],
    [0x434bd2af, ChannelAdminLogEventActionChangePhoto],
    [0x1b7907ae, ChannelAdminLogEventActionToggleInvites],
    [0x26ae0971, ChannelAdminLogEventActionToggleSignatures],
    [0xe9e82c18, ChannelAdminLogEventActionUpdatePinned],
    [0x709b2405, ChannelAdminLogEventActionEditMessage],
    [0x42e047bb, ChannelAdminLogEventActionDeleteMessage],
    [0x183040d3, ChannelAdminLogEventActionParticipantJoin],
    [0xf89777f2, ChannelAdminLogEventActionParticipantLeave],
    [0xe31c34d8, ChannelAdminLogEventActionParticipantInvite],
    [0xe6d83d7e, ChannelAdminLogEventActionParticipantToggleBan],
    [0xd5676710, ChannelAdminLogEventActionParticipantToggleAdmin],
    [0xb1c3caa7, ChannelAdminLogEventActionChangeStickerSet],
    [0x5f5c95f1, ChannelAdminLogEventActionTogglePreHistoryHidden],
    [0x2df5fc0a, ChannelAdminLogEventActionDefaultBannedRights],
    [0x8f079643, ChannelAdminLogEventActionStopPoll],
    [0x050c7ac8, ChannelAdminLogEventActionChangeLinkedChat],
    [0x0e6b76ae, ChannelAdminLogEventActionChangeLocation],
    [0x53909779, ChannelAdminLogEventActionToggleSlowMode],
    [0x23209745, ChannelAdminLogEventActionStartGroupCall],
    [0xdb9f9140, ChannelAdminLogEventActionDiscardGroupCall],
    [0xf92424d2, ChannelAdminLogEventActionParticipantMute],
    [0xe64429c0, ChannelAdminLogEventActionParticipantUnmute],
    [0x56d6a247, ChannelAdminLogEventActionToggleGroupCallSetting],
    [0x5cdada77, ChannelAdminLogEventActionParticipantJoinByInvite],
    [0x5a50fca4, ChannelAdminLogEventActionExportedInviteDelete],
    [0x410a134e, ChannelAdminLogEventActionExportedInviteRevoke],
    [0xe90ebb59, ChannelAdminLogEventActionExportedInviteEdit],
    [0x3e7f6847, ChannelAdminLogEventActionParticipantVolume],
    [0x6e941a38, ChannelAdminLogEventActionChangeHistoryTTL],
    [0xafb6144a, ChannelAdminLogEventActionParticipantJoinByRequest],
    [0xcb2ac766, ChannelAdminLogEventActionToggleNoForwards],
    [0x278f2868, ChannelAdminLogEventActionSendMessage],
    [0xbe4e0ef8, ChannelAdminLogEventActionChangeAvailableReactions],
    [0xf04fb3a9, ChannelAdminLogEventActionChangeUsernames],
    [0x02cc6383, ChannelAdminLogEventActionToggleForum],
    [0x58707d28, ChannelAdminLogEventActionCreateTopic],
    [0xf06fe208, ChannelAdminLogEventActionEditTopic],
    [0xae168909, ChannelAdminLogEventActionDeleteTopic],
    [0x5d8d353b, ChannelAdminLogEventActionPinTopic],
    [0x64f36dfc, ChannelAdminLogEventActionToggleAntiSpam],
    [0x1fad68cd, ChannelAdminLogEvent],
    [0xed8af74d, ChannelsAdminLogResults],
    [0xea107ae4, ChannelAdminLogEventsFilter],
    [0x5ce14175, PopularContact],
    [0x9e8fa6d3, MessagesFavedStickersNotModified],
    [0x2cb51097, MessagesFavedStickers],
    [0x46e1d13d, RecentMeUrlUnknown],
    [0xb92c09e2, RecentMeUrlUser],
    [0xb2da71d2, RecentMeUrlChat],
    [0xeb49081d, RecentMeUrlChatInvite],
    [0xbc0a57dc, RecentMeUrlStickerSet],
    [0x0e0310d7, HelpRecentMeUrls],
    [0x1cc6e91f, InputSingleMedia],
    [0xa6f8f452, WebAuthorization],
    [0xed56c9fc, AccountWebAuthorizations],
    [0xa676a322, InputMessageID],
    [0xbad88395, InputMessageReplyTo],
    [0x86872538, InputMessagePinned],
    [0xacfa1a7e, InputMessageCallbackQuery],
    [0xfcaafeb7, InputDialogPeer],
    [0x64600527, InputDialogPeerFolder],
    [0xe56dbf05, DialogPeer],
    [0x514519e2, DialogPeerFolder],
    [0x0d54b65d, MessagesFoundStickerSetsNotModified],
    [0x8af09dd2, MessagesFoundStickerSets],
    [0xf39b035c, FileHash],
    [0x75588b3f, InputClientProxy],
    [0xe3309f7f, HelpTermsOfServiceUpdateEmpty],
    [0x28ecf961, HelpTermsOfServiceUpdate],
    [0x3334b0f0, InputSecureFileUploaded],
    [0x5367e5be, InputSecureFile],
    [0x64199744, SecureFileEmpty],
    [0x7d09c27e, SecureFile],
    [0x8aeabec3, SecureData],
    [0x7d6099dd, SecurePlainPhone],
    [0x21ec5a5f, SecurePlainEmail],
    [0x9d2a81e3, SecureValueTypePersonalDetails],
    [0x3dac6a00, SecureValueTypePassport],
    [0x06e425c4, SecureValueTypeDriverLicense],
    [0xa0d0744b, SecureValueTypeIdentityCard],
    [0x99a48f23, SecureValueTypeInternalPassport],
    [0xcbe31e26, SecureValueTypeAddress],
    [0xfc36954e, SecureValueTypeUtilityBill],
    [0x89137c0d, SecureValueTypeBankStatement],
    [0x8b883488, SecureValueTypeRentalAgreement],
    [0x99e3806a, SecureValueTypePassportRegistration],
    [0xea02ec33, SecureValueTypeTemporaryRegistration],
    [0xb320aadb, SecureValueTypePhone],
    [0x8e3ca7ee, SecureValueTypeEmail],
    [0x187fa0ca, SecureValue],
    [0xdb21d0a7, InputSecureValue],
    [0xed1ecdb0, SecureValueHash],
    [0xe8a40bd9, SecureValueErrorData],
    [0x00be3dfa, SecureValueErrorFrontSide],
    [0x868a2aa5, SecureValueErrorReverseSide],
    [0xe537ced6, SecureValueErrorSelfie],
    [0x7a700873, SecureValueErrorFile],
    [0x666220e9, SecureValueErrorFiles],
    [0x869d758f, SecureValueError],
    [0xa1144770, SecureValueErrorTranslationFile],
    [0x34636dd8, SecureValueErrorTranslationFiles],
    [0x33f0ea47, SecureCredentialsEncrypted],
    [0xad2e1cd8, AccountAuthorizationForm],
    [0x811f854f, AccountSentEmailCode],
    [0x66afa166, HelpDeepLinkInfoEmpty],
    [0x6a4ee832, HelpDeepLinkInfo],
    [0x1142bd56, SavedPhoneContact],
    [0x4dba4501, AccountTakeout],
    [0xd45ab096, PasswordKdfAlgoUnknown],
    [
      0x3a912d4a,
      PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow,
    ],
    [0x004a8537, SecurePasswordKdfAlgoUnknown],
    [0xbbf2dda0, SecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000],
    [0x86471d92, SecurePasswordKdfAlgoSHA512],
    [0x1527bcac, SecureSecretSettings],
    [0x9880f658, InputCheckPasswordEmpty],
    [0xd27ff082, InputCheckPasswordSRP],
    [0x829d99da, SecureRequiredType],
    [0x027477b4, SecureRequiredTypeOneOf],
    [0xbfb9f457, HelpPassportConfigNotModified],
    [0xa098d6af, HelpPassportConfig],
    [0x1d1b1245, InputAppEvent],
    [0xc0de1bd9, JsonObjectValue],
    [0x3f6d7b68, JsonNull],
    [0xc7345e6a, JsonBool],
    [0x2be0dfa4, JsonNumber],
    [0xb71e767a, JsonString],
    [0xf7444763, JsonArray],
    [0x99c1d49d, JsonObject],
    [0x34566b6a, PageTableCell],
    [0xe0c0c5e5, PageTableRow],
    [0x6f747657, PageCaption],
    [0xb92fb6cd, PageListItemText],
    [0x25e073fc, PageListItemBlocks],
    [0x5e068047, PageListOrderedItemText],
    [0x98dd8936, PageListOrderedItemBlocks],
    [0xb390dc08, PageRelatedArticle],
    [0x98657f0d, Page],
    [0x8c05f1c9, HelpSupportName],
    [0xf3ae2eed, HelpUserInfoEmpty],
    [0x01eb3758, HelpUserInfo],
    [0x6ca9c2e9, PollAnswer],
    [0x86e18161, Poll],
    [0x3b6ddad2, PollAnswerVoters],
    [0xdcb82ea3, PollResults],
    [0xf041e250, ChatOnlines],
    [0x47a971e0, StatsURL],
    [0x5fb224d5, ChatAdminRights],
    [0x9f120418, ChatBannedRights],
    [0xe630b979, InputWallPaper],
    [0x72091c80, InputWallPaperSlug],
    [0x967a462e, InputWallPaperNoFile],
    [0x1c199183, AccountWallPapersNotModified],
    [0xcdc3858c, AccountWallPapers],
    [0xad253d78, CodeSettings],
    [0x1dc1bca4, WallPaperSettings],
    [0x8efab953, AutoDownloadSettings],
    [0x63cacf26, AccountAutoDownloadSettings],
    [0xd5b3b9f9, EmojiKeyword],
    [0x236df622, EmojiKeywordDeleted],
    [0x5cc761bd, EmojiKeywordsDifference],
    [0xa575739d, EmojiURL],
    [0xb3fb5361, EmojiLanguage],
    [0xff544e65, Folder],
    [0xfbd2c296, InputFolderPeer],
    [0xe9baa668, FolderPeer],
    [0xe844ebff, MessagesSearchCounter],
    [0x92d33a0e, UrlAuthResultRequest],
    [0x8f8c0e4e, UrlAuthResultAccepted],
    [0xa9d6db1f, UrlAuthResultDefault],
    [0xbfb5ad8b, ChannelLocationEmpty],
    [0x209b82db, ChannelLocation],
    [0xca461b5d, PeerLocated],
    [0xf8ec284b, PeerSelfLocated],
    [0xd072acb4, RestrictionReason],
    [0x3c5693e9, InputTheme],
    [0xf5890df1, InputThemeSlug],
    [0xa00e67d6, Theme],
    [0xf41eb622, AccountThemesNotModified],
    [0x9a3d8c6d, AccountThemes],
    [0x629f1980, AuthLoginToken],
    [0x068e9916, AuthLoginTokenMigrateTo],
    [0x390d5c5e, AuthLoginTokenSuccess],
    [0x57e28221, AccountContentSettings],
    [0xa927fec5, MessagesInactiveChats],
    [0xc3a12462, BaseThemeClassic],
    [0xfbd81688, BaseThemeDay],
    [0xb7b31ea8, BaseThemeNight],
    [0x6d5f77ee, BaseThemeTinted],
    [0x5b11125a, BaseThemeArctic],
    [0x8fde504f, InputThemeSettings],
    [0xfa58b6d4, ThemeSettings],
    [0x54b56617, WebPageAttributeTheme],
    [0x34d247b4, MessageUserVote],
    [0x3ca5b0ec, MessageUserVoteInputOption],
    [0x8a65e557, MessageUserVoteMultiple],
    [0x0823f649, MessagesVotesList],
    [0xf568028a, BankCardOpenUrl],
    [0x3e24e573, PaymentsBankCardData],
    [0x7438f7e8, DialogFilter],
    [0x363293ae, DialogFilterDefault],
    [0x77744d4a, DialogFilterSuggested],
    [0xb637edaf, StatsDateRangeDays],
    [0xcb43acde, StatsAbsValueAndPrev],
    [0xcbce2fe0, StatsPercentValue],
    [0x4a27eb2d, StatsGraphAsync],
    [0xbedc9822, StatsGraphError],
    [0x8ea464b6, StatsGraph],
    [0xad4fc9bd, MessageInteractionCounters],
    [0xbdf78394, StatsBroadcastStats],
    [0x98f6ac75, HelpPromoDataEmpty],
    [0x8c39793f, HelpPromoData],
    [0xde33b094, VideoSize],
    [0xf85c413c, VideoSizeEmojiMarkup],
    [0x0da082fe, VideoSizeStickerMarkup],
    [0x9d04af9b, StatsGroupTopPoster],
    [0xd7584c87, StatsGroupTopAdmin],
    [0x535f779d, StatsGroupTopInviter],
    [0xef7ff916, StatsMegagroupStats],
    [0xbea2f424, GlobalPrivacySettings],
    [0x4203c5ef, HelpCountryCode],
    [0xc3878e23, HelpCountry],
    [0x93cc1f32, HelpCountriesListNotModified],
    [0x87d0759e, HelpCountriesList],
    [0x455b853d, MessageViews],
    [0xb6c4f543, MessagesMessageViews],
    [0xa6341782, MessagesDiscussionMessage],
    [0xa6d57763, MessageReplyHeader],
    [0x83d60fc2, MessageReplies],
    [0xe8fd8014, PeerBlocked],
    [0x8999f295, StatsMessageStats],
    [0x7780bcb4, GroupCallDiscarded],
    [0xd597650c, GroupCall],
    [0xd8aa840f, InputGroupCall],
    [0xeba636fe, GroupCallParticipant],
    [0x9e727aad, PhoneGroupCall],
    [0xf47751b6, PhoneGroupParticipants],
    [0x3081ed9d, InlineQueryPeerTypeSameBotPM],
    [0x833c0fac, InlineQueryPeerTypePM],
    [0xd766c50a, InlineQueryPeerTypeChat],
    [0x5ec4be43, InlineQueryPeerTypeMegagroup],
    [0x6334ee9a, InlineQueryPeerTypeBroadcast],
    [0x1662af0b, MessagesHistoryImport],
    [0x5e0fb7b9, MessagesHistoryImportParsed],
    [0xef8d3e6c, MessagesAffectedFoundMessages],
    [0x8c5adfd9, ChatInviteImporter],
    [0xbdc62dcc, MessagesExportedChatInvites],
    [0x1871be50, MessagesExportedChatInvite],
    [0x222600ef, MessagesExportedChatInviteReplaced],
    [0x81b6b00a, MessagesChatInviteImporters],
    [0xf2ecef23, ChatAdminWithInvites],
    [0xb69b72d7, MessagesChatAdminsWithInvites],
    [0xa24de717, MessagesCheckedHistoryImportPeer],
    [0xafe5623f, PhoneJoinAsPeers],
    [0x204bd158, PhoneExportedGroupCallInvite],
    [0xdcb118b7, GroupCallParticipantVideoSourceGroup],
    [0x67753ac8, GroupCallParticipantVideo],
    [0x85fea03f, StickersSuggestedShortName],
    [0x2f6cb2ab, BotCommandScopeDefault],
    [0x3c4f04d8, BotCommandScopeUsers],
    [0x6fe1a881, BotCommandScopeChats],
    [0xb9aa606a, BotCommandScopeChatAdmins],
    [0xdb9d897d, BotCommandScopePeer],
    [0x3fd863d1, BotCommandScopePeerAdmins],
    [0x0a1321f3, BotCommandScopePeerUser],
    [0xe3779861, AccountResetPasswordFailedWait],
    [0xe9effc7d, AccountResetPasswordRequestedWait],
    [0xe926d63e, AccountResetPasswordOk],
    [0xfc25b828, SponsoredMessage],
    [0xc9ee1d87, MessagesSponsoredMessages],
    [0x1839490f, MessagesSponsoredMessagesEmpty],
    [0xc9b0539f, SearchResultsCalendarPeriod],
    [0x147ee23c, MessagesSearchResultsCalendar],
    [0x7f648b67, SearchResultPosition],
    [0x53b22baf, MessagesSearchResultsPositions],
    [0xf496b0c6, ChannelsSendAsPeers],
    [0x3b6d152e, UsersUserFull],
    [0x6880b94d, MessagesPeerSettings],
    [0xc3a2835f, AuthLoggedOut],
    [0xa3d1cb80, ReactionCount],
    [0x4f2b9479, MessageReactions],
    [0x31bd492d, MessagesMessageReactionsList],
    [0xc077ec01, AvailableReaction],
    [0x9f071957, MessagesAvailableReactionsNotModified],
    [0x768e3aad, MessagesAvailableReactions],
    [0x8c79b63c, MessagePeerReaction],
    [0x80eb48af, GroupCallStreamChannel],
    [0xd0e482b2, PhoneGroupCallStreamChannels],
    [0x2dbf3432, PhoneGroupCallStreamRtmpUrl],
    [0x4576f3f0, AttachMenuBotIconColor],
    [0xb2a7386b, AttachMenuBotIcon],
    [0xc8aa2cd2, AttachMenuBot],
    [0xf1d88a5c, AttachMenuBotsNotModified],
    [0x3c4301c0, AttachMenuBots],
    [0x93bf667f, AttachMenuBotsBot],
    [0x0c14557c, WebViewResultUrl],
    [0x882f76bb, SimpleWebViewResultUrl],
    [0x0c94511c, WebViewMessageSent],
    [0x7533a588, BotMenuButtonDefault],
    [0x4258c205, BotMenuButtonCommands],
    [0xc7b57ce6, BotMenuButton],
    [0xfbf6e8b1, AccountSavedRingtonesNotModified],
    [0xc1e92cc5, AccountSavedRingtones],
    [0x97e8bebe, NotificationSoundDefault],
    [0x6f0c34df, NotificationSoundNone],
    [0x830b9ae4, NotificationSoundLocal],
    [0xff6c8049, NotificationSoundRingtone],
    [0xb7263f6d, AccountSavedRingtone],
    [0x1f307eb7, AccountSavedRingtoneConverted],
    [0x7d6be90e, AttachMenuPeerTypeSameBotPM],
    [0xc32bfa1a, AttachMenuPeerTypeBotPM],
    [0xf146d31f, AttachMenuPeerTypePM],
    [0x0509113f, AttachMenuPeerTypeChat],
    [0x7bfbdefc, AttachMenuPeerTypeBroadcast],
    [0xc5b56859, InputInvoiceMessage],
    [0xc326caef, InputInvoiceSlug],
    [0xaed0cbd9, PaymentsExportedInvoice],
    [0x93752c52, MessagesTranscribedAudio],
    [0x5334759c, HelpPremiumPromo],
    [0xa6751e66, InputStorePaymentPremiumSubscription],
    [0x616f7fe8, InputStorePaymentGiftPremium],
    [0x74c34319, PremiumGiftOption],
    [0x88f8f21b, PaymentFormMethod],
    [0x2de11aae, EmojiStatusEmpty],
    [0x929b619d, EmojiStatus],
    [0xfa30a8c7, EmojiStatusUntil],
    [0xd08ce645, AccountEmojiStatusesNotModified],
    [0x90c467d1, AccountEmojiStatuses],
    [0x79f5d419, ReactionEmpty],
    [0x1b2286b8, ReactionEmoji],
    [0x8935fc73, ReactionCustomEmoji],
    [0xeafc32bc, ChatReactionsNone],
    [0x52928bca, ChatReactionsAll],
    [0x661d4037, ChatReactionsSome],
    [0xb06fdbdf, MessagesReactionsNotModified],
    [0xeafdf716, MessagesReactions],
    [0x4345be73, EmailVerifyPurposeLoginSetup],
    [0x527d22eb, EmailVerifyPurposeLoginChange],
    [0xbbf51685, EmailVerifyPurposePassport],
    [0x922e55a9, EmailVerificationCode],
    [0xdb909ec2, EmailVerificationGoogle],
    [0x96d074fd, EmailVerificationApple],
    [0x2b96cd1b, AccountEmailVerified],
    [0xe1bb0d61, AccountEmailVerifiedLogin],
    [0x5f2d1df2, PremiumSubscriptionOption],
    [0xb81c7034, SendAsPeer],
    [0xad628cc8, MessageExtendedMediaPreview],
    [0xee479c64, MessageExtendedMedia],
    [0xfcfeb29c, StickerKeyword],
    [0xb4073647, Username],
    [0x023f109b, ForumTopicDeleted],
    [0x71701da9, ForumTopic],
    [0x367617d3, MessagesForumTopics],
    [0x43b46b20, DefaultHistoryTTL],
    [0x41bf109b, ExportedContactToken],
    [0x5f3b8a00, RequestPeerTypeUser],
    [0xc9f06e1b, RequestPeerTypeChat],
    [0x339bef6c, RequestPeerTypeBroadcast],
    [0x481eadfa, EmojiListNotModified],
    [0x7a1e11d1, EmojiList],
    [0x7a9abda9, EmojiGroup],
    [0x6fb4ad87, MessagesEmojiGroupsNotModified],
    [0x881fb94b, MessagesEmojiGroups],
    [0x751f3146, TextWithEntities],
    [0x33db32f8, MessagesTranslateResult],
    [0xc84834ce, AutoSaveSettings],
    [0x81602d47, AutoSaveException],
    [0x4c3e069d, AccountAutoSaveSettings],
    [0x7cde641d, HelpAppConfigNotModified],
    [0xdd18782e, HelpAppConfig],
    [0xa920bd7a, InputBotAppID],
    [0x908c0407, InputBotAppShortName],
    [0x5da674b7, BotAppNotModified],
    [0x95fcd1d6, BotApp],
    [0xeb50adf5, MessagesBotApp],
    [0x3c1b4f0d, AppWebViewResultUrl],
    [0xb57295d5, InlineBotWebView],
    [0x4a4ff172, ReadParticipantDate],
    // deno-lint-ignore no-explicit-any
  ] as const as any,
);
