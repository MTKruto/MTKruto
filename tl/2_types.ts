// deno-fmt-ignore-file
import { id, params, TLObject, Params, TLObjectConstructor, ParamDesc, paramDesc, flags } from "./1_tl_object.ts";

export abstract class Type extends TLObject {
}

// Unknown type (generic)
export abstract class TypeX extends Type {
}

export abstract class TypeResPQ extends Type {
}

export abstract class TypePQInnerData extends Type {
}

export abstract class TypeServerDHParams extends Type {
}

export abstract class TypeServerDHInnerData extends Type {
}

export abstract class TypeClientDHInnerData extends Type {
}

export abstract class TypeSetClientDHParamsAnswer extends Type {
}

export abstract class TypeBindAuthKeyInner extends Type {
}

export abstract class TypeRpcError extends Type {
}

export abstract class TypeRpcDropAnswer extends Type {
}

export abstract class TypeFutureSalt extends Type {
}

export abstract class TypeFutureSalts extends Type {
}

export abstract class TypePong extends Type {
}

export abstract class TypeDestroySessionRes extends Type {
}

export abstract class TypeNewSession extends Type {
}

export abstract class TypeObject extends Type {
}

export abstract class TypeMsgsAck extends Type {
}

export abstract class TypeBadMsgNotification extends Type {
}

export abstract class TypeMsgResendReq extends Type {
}

export abstract class TypeMsgsStateReq extends Type {
}

export abstract class TypeMsgsStateInfo extends Type {
}

export abstract class TypeMsgsAllInfo extends Type {
}

export abstract class TypeMsgDetailedInfo extends Type {
}

export abstract class TypeDestroyAuthKeyRes extends Type {
}

export abstract class TypeHttpWait extends Type {
}

export abstract class TypeTrue extends Type {
}

export abstract class TypeError extends Type {
}

export abstract class TypeNull extends Type {
}

export abstract class TypeInputPeer extends Type {
}

export abstract class TypeInputUser extends Type {
}

export abstract class TypeInputContact extends Type {
}

export abstract class TypeInputFile extends Type {
}

export abstract class TypeInputMedia extends Type {
}

export abstract class TypeInputChatPhoto extends Type {
}

export abstract class TypeInputGeoPoint extends Type {
}

export abstract class TypeInputPhoto extends Type {
}

export abstract class TypeInputFileLocation extends Type {
}

export abstract class TypePeer extends Type {
}

export abstract class TypeStorageFileType extends Type {
}

export abstract class TypeUser extends Type {
}

export abstract class TypeUserProfilePhoto extends Type {
}

export abstract class TypeUserStatus extends Type {
}

export abstract class TypeChat extends Type {
}

export abstract class TypeChatFull extends Type {
}

export abstract class TypeChatParticipant extends Type {
}

export abstract class TypeChatParticipants extends Type {
}

export abstract class TypeChatPhoto extends Type {
}

export abstract class TypeMessage extends Type {
}

export abstract class TypeMessageMedia extends Type {
}

export abstract class TypeMessageAction extends Type {
}

export abstract class TypeDialog extends Type {
}

export abstract class TypePhoto extends Type {
}

export abstract class TypePhotoSize extends Type {
}

export abstract class TypeGeoPoint extends Type {
}

export abstract class TypeAuthSentCode extends Type {
}

export abstract class TypeAuthAuthorization extends Type {
}

export abstract class TypeAuthExportedAuthorization extends Type {
}

export abstract class TypeInputNotifyPeer extends Type {
}

export abstract class TypeInputPeerNotifySettings extends Type {
}

export abstract class TypePeerNotifySettings extends Type {
}

export abstract class TypePeerSettings extends Type {
}

export abstract class TypeWallPaper extends Type {
}

export abstract class TypeReportReason extends Type {
}

export abstract class TypeUserFull extends Type {
}

export abstract class TypeContact extends Type {
}

export abstract class TypeImportedContact extends Type {
}

export abstract class TypeContactStatus extends Type {
}

export abstract class TypeContactsContacts extends Type {
}

export abstract class TypeContactsImportedContacts extends Type {
}

export abstract class TypeContactsBlocked extends Type {
}

export abstract class TypeMessagesDialogs extends Type {
}

export abstract class TypeMessagesMessages extends Type {
}

export abstract class TypeMessagesChats extends Type {
}

export abstract class TypeMessagesChatFull extends Type {
}

export abstract class TypeMessagesAffectedHistory extends Type {
}

export abstract class TypeMessagesFilter extends Type {
}

export abstract class TypeUpdate extends Type {
}

export abstract class TypeUpdatesState extends Type {
}

export abstract class TypeUpdatesDifference extends Type {
}

export abstract class TypeUpdates extends Type {
}

export abstract class TypePhotosPhotos extends Type {
}

export abstract class TypePhotosPhoto extends Type {
}

export abstract class TypeUploadFile extends Type {
}

export abstract class TypeDcOption extends Type {
}

export abstract class TypeConfig extends Type {
}

export abstract class TypeNearestDc extends Type {
}

export abstract class TypeHelpAppUpdate extends Type {
}

export abstract class TypeHelpInviteText extends Type {
}

export abstract class TypeEncryptedChat extends Type {
}

export abstract class TypeInputEncryptedChat extends Type {
}

export abstract class TypeEncryptedFile extends Type {
}

export abstract class TypeInputEncryptedFile extends Type {
}

export abstract class TypeEncryptedMessage extends Type {
}

export abstract class TypeMessagesDhConfig extends Type {
}

export abstract class TypeMessagesSentEncryptedMessage extends Type {
}

export abstract class TypeInputDocument extends Type {
}

export abstract class TypeDocument extends Type {
}

export abstract class TypeHelpSupport extends Type {
}

export abstract class TypeNotifyPeer extends Type {
}

export abstract class TypeSendMessageAction extends Type {
}

export abstract class TypeContactsFound extends Type {
}

export abstract class TypeInputPrivacyKey extends Type {
}

export abstract class TypePrivacyKey extends Type {
}

export abstract class TypeInputPrivacyRule extends Type {
}

export abstract class TypePrivacyRule extends Type {
}

export abstract class TypeAccountPrivacyRules extends Type {
}

export abstract class TypeAccountDaysTTL extends Type {
}

export abstract class TypeDocumentAttribute extends Type {
}

export abstract class TypeMessagesStickers extends Type {
}

export abstract class TypeStickerPack extends Type {
}

export abstract class TypeMessagesAllStickers extends Type {
}

export abstract class TypeMessagesAffectedMessages extends Type {
}

export abstract class TypeWebPage extends Type {
}

export abstract class TypeAuthorization extends Type {
}

export abstract class TypeAccountAuthorizations extends Type {
}

export abstract class TypeAccountPassword extends Type {
}

export abstract class TypeAccountPasswordSettings extends Type {
}

export abstract class TypeAccountPasswordInputSettings extends Type {
}

export abstract class TypeAuthPasswordRecovery extends Type {
}

export abstract class TypeReceivedNotifyMessage extends Type {
}

export abstract class TypeExportedChatInvite extends Type {
}

export abstract class TypeChatInvite extends Type {
}

export abstract class TypeInputStickerSet extends Type {
}

export abstract class TypeStickerSet extends Type {
}

export abstract class TypeMessagesStickerSet extends Type {
}

export abstract class TypeBotCommand extends Type {
}

export abstract class TypeBotInfo extends Type {
}

export abstract class TypeKeyboardButton extends Type {
}

export abstract class TypeKeyboardButtonRow extends Type {
}

export abstract class TypeReplyMarkup extends Type {
}

export abstract class TypeMessageEntity extends Type {
}

export abstract class TypeInputChannel extends Type {
}

export abstract class TypeContactsResolvedPeer extends Type {
}

export abstract class TypeMessageRange extends Type {
}

export abstract class TypeUpdatesChannelDifference extends Type {
}

export abstract class TypeChannelMessagesFilter extends Type {
}

export abstract class TypeChannelParticipant extends Type {
}

export abstract class TypeChannelParticipantsFilter extends Type {
}

export abstract class TypeChannelsChannelParticipants extends Type {
}

export abstract class TypeChannelsChannelParticipant extends Type {
}

export abstract class TypeHelpTermsOfService extends Type {
}

export abstract class TypeMessagesSavedGifs extends Type {
}

export abstract class TypeInputBotInlineMessage extends Type {
}

export abstract class TypeInputBotInlineResult extends Type {
}

export abstract class TypeBotInlineMessage extends Type {
}

export abstract class TypeBotInlineResult extends Type {
}

export abstract class TypeMessagesBotResults extends Type {
}

export abstract class TypeExportedMessageLink extends Type {
}

export abstract class TypeMessageFwdHeader extends Type {
}

export abstract class TypeAuthCodeType extends Type {
}

export abstract class TypeAuthSentCodeType extends Type {
}

export abstract class TypeMessagesBotCallbackAnswer extends Type {
}

export abstract class TypeMessagesMessageEditData extends Type {
}

export abstract class TypeInputBotInlineMessageID extends Type {
}

export abstract class TypeInlineBotSwitchPM extends Type {
}

export abstract class TypeMessagesPeerDialogs extends Type {
}

export abstract class TypeTopPeer extends Type {
}

export abstract class TypeTopPeerCategory extends Type {
}

export abstract class TypeTopPeerCategoryPeers extends Type {
}

export abstract class TypeContactsTopPeers extends Type {
}

export abstract class TypeDraftMessage extends Type {
}

export abstract class TypeMessagesFeaturedStickers extends Type {
}

export abstract class TypeMessagesRecentStickers extends Type {
}

export abstract class TypeMessagesArchivedStickers extends Type {
}

export abstract class TypeMessagesStickerSetInstallResult extends Type {
}

export abstract class TypeStickerSetCovered extends Type {
}

export abstract class TypeMaskCoords extends Type {
}

export abstract class TypeInputStickeredMedia extends Type {
}

export abstract class TypeGame extends Type {
}

export abstract class TypeInputGame extends Type {
}

export abstract class TypeHighScore extends Type {
}

export abstract class TypeMessagesHighScores extends Type {
}

export abstract class TypeRichText extends Type {
}

export abstract class TypePageBlock extends Type {
}

export abstract class TypePhoneCallDiscardReason extends Type {
}

export abstract class TypeDataJSON extends Type {
}

export abstract class TypeLabeledPrice extends Type {
}

export abstract class TypeInvoice extends Type {
}

export abstract class TypePaymentCharge extends Type {
}

export abstract class TypePostAddress extends Type {
}

export abstract class TypePaymentRequestedInfo extends Type {
}

export abstract class TypePaymentSavedCredentials extends Type {
}

export abstract class TypeWebDocument extends Type {
}

export abstract class TypeInputWebDocument extends Type {
}

export abstract class TypeInputWebFileLocation extends Type {
}

export abstract class TypeUploadWebFile extends Type {
}

export abstract class TypePaymentsPaymentForm extends Type {
}

export abstract class TypePaymentsValidatedRequestedInfo extends Type {
}

export abstract class TypePaymentsPaymentResult extends Type {
}

export abstract class TypePaymentsPaymentReceipt extends Type {
}

export abstract class TypePaymentsSavedInfo extends Type {
}

export abstract class TypeInputPaymentCredentials extends Type {
}

export abstract class TypeAccountTmpPassword extends Type {
}

export abstract class TypeShippingOption extends Type {
}

export abstract class TypeInputStickerSetItem extends Type {
}

export abstract class TypeInputPhoneCall extends Type {
}

export abstract class TypePhoneCall extends Type {
}

export abstract class TypePhoneConnection extends Type {
}

export abstract class TypePhoneCallProtocol extends Type {
}

export abstract class TypePhonePhoneCall extends Type {
}

export abstract class TypeUploadCdnFile extends Type {
}

export abstract class TypeCdnPublicKey extends Type {
}

export abstract class TypeCdnConfig extends Type {
}

export abstract class TypeLangPackString extends Type {
}

export abstract class TypeLangPackDifference extends Type {
}

export abstract class TypeLangPackLanguage extends Type {
}

export abstract class TypeChannelAdminLogEventAction extends Type {
}

export abstract class TypeChannelAdminLogEvent extends Type {
}

export abstract class TypeChannelsAdminLogResults extends Type {
}

export abstract class TypeChannelAdminLogEventsFilter extends Type {
}

export abstract class TypePopularContact extends Type {
}

export abstract class TypeMessagesFavedStickers extends Type {
}

export abstract class TypeRecentMeURL extends Type {
}

export abstract class TypeHelpRecentMeURLs extends Type {
}

export abstract class TypeInputSingleMedia extends Type {
}

export abstract class TypeWebAuthorization extends Type {
}

export abstract class TypeAccountWebAuthorizations extends Type {
}

export abstract class TypeInputMessage extends Type {
}

export abstract class TypeInputDialogPeer extends Type {
}

export abstract class TypeDialogPeer extends Type {
}

export abstract class TypeMessagesFoundStickerSets extends Type {
}

export abstract class TypeFileHash extends Type {
}

export abstract class TypeInputClientProxy extends Type {
}

export abstract class TypeHelpTermsOfServiceUpdate extends Type {
}

export abstract class TypeInputSecureFile extends Type {
}

export abstract class TypeSecureFile extends Type {
}

export abstract class TypeSecureData extends Type {
}

export abstract class TypeSecurePlainData extends Type {
}

export abstract class TypeSecureValueType extends Type {
}

export abstract class TypeSecureValue extends Type {
}

export abstract class TypeInputSecureValue extends Type {
}

export abstract class TypeSecureValueHash extends Type {
}

export abstract class TypeSecureValueError extends Type {
}

export abstract class TypeSecureCredentialsEncrypted extends Type {
}

export abstract class TypeAccountAuthorizationForm extends Type {
}

export abstract class TypeAccountSentEmailCode extends Type {
}

export abstract class TypeHelpDeepLinkInfo extends Type {
}

export abstract class TypeSavedContact extends Type {
}

export abstract class TypeAccountTakeout extends Type {
}

export abstract class TypePasswordKdfAlgo extends Type {
}

export abstract class TypeSecurePasswordKdfAlgo extends Type {
}

export abstract class TypeSecureSecretSettings extends Type {
}

export abstract class TypeInputCheckPasswordSRP extends Type {
}

export abstract class TypeSecureRequiredType extends Type {
}

export abstract class TypeHelpPassportConfig extends Type {
}

export abstract class TypeInputAppEvent extends Type {
}

export abstract class TypeJSONObjectValue extends Type {
}

export abstract class TypeJSONValue extends Type {
}

export abstract class TypePageTableCell extends Type {
}

export abstract class TypePageTableRow extends Type {
}

export abstract class TypePageCaption extends Type {
}

export abstract class TypePageListItem extends Type {
}

export abstract class TypePageListOrderedItem extends Type {
}

export abstract class TypePageRelatedArticle extends Type {
}

export abstract class TypePage extends Type {
}

export abstract class TypeHelpSupportName extends Type {
}

export abstract class TypeHelpUserInfo extends Type {
}

export abstract class TypePollAnswer extends Type {
}

export abstract class TypePoll extends Type {
}

export abstract class TypePollAnswerVoters extends Type {
}

export abstract class TypePollResults extends Type {
}

export abstract class TypeChatOnlines extends Type {
}

export abstract class TypeStatsURL extends Type {
}

export abstract class TypeChatAdminRights extends Type {
}

export abstract class TypeChatBannedRights extends Type {
}

export abstract class TypeInputWallPaper extends Type {
}

export abstract class TypeAccountWallPapers extends Type {
}

export abstract class TypeCodeSettings extends Type {
}

export abstract class TypeWallPaperSettings extends Type {
}

export abstract class TypeAutoDownloadSettings extends Type {
}

export abstract class TypeAccountAutoDownloadSettings extends Type {
}

export abstract class TypeEmojiKeyword extends Type {
}

export abstract class TypeEmojiKeywordsDifference extends Type {
}

export abstract class TypeEmojiURL extends Type {
}

export abstract class TypeEmojiLanguage extends Type {
}

export abstract class TypeFolder extends Type {
}

export abstract class TypeInputFolderPeer extends Type {
}

export abstract class TypeFolderPeer extends Type {
}

export abstract class TypeMessagesSearchCounter extends Type {
}

export abstract class TypeURLAuthResult extends Type {
}

export abstract class TypeChannelLocation extends Type {
}

export abstract class TypePeerLocated extends Type {
}

export abstract class TypeRestrictionReason extends Type {
}

export abstract class TypeInputTheme extends Type {
}

export abstract class TypeTheme extends Type {
}

export abstract class TypeAccountThemes extends Type {
}

export abstract class TypeAuthLoginToken extends Type {
}

export abstract class TypeAccountContentSettings extends Type {
}

export abstract class TypeMessagesInactiveChats extends Type {
}

export abstract class TypeBaseTheme extends Type {
}

export abstract class TypeInputThemeSettings extends Type {
}

export abstract class TypeThemeSettings extends Type {
}

export abstract class TypeWebPageAttribute extends Type {
}

export abstract class TypeMessagesVotesList extends Type {
}

export abstract class TypeBankCardOpenURL extends Type {
}

export abstract class TypePaymentsBankCardData extends Type {
}

export abstract class TypeDialogFilter extends Type {
}

export abstract class TypeDialogFilterSuggested extends Type {
}

export abstract class TypeStatsDateRangeDays extends Type {
}

export abstract class TypeStatsAbsValueAndPrev extends Type {
}

export abstract class TypeStatsPercentValue extends Type {
}

export abstract class TypeStatsGraph extends Type {
}

export abstract class TypeMessageInteractionCounters extends Type {
}

export abstract class TypeStatsBroadcastStats extends Type {
}

export abstract class TypeHelpPromoData extends Type {
}

export abstract class TypeVideoSize extends Type {
}

export abstract class TypeStatsGroupTopPoster extends Type {
}

export abstract class TypeStatsGroupTopAdmin extends Type {
}

export abstract class TypeStatsGroupTopInviter extends Type {
}

export abstract class TypeStatsMegagroupStats extends Type {
}

export abstract class TypeGlobalPrivacySettings extends Type {
}

export abstract class TypeHelpCountryCode extends Type {
}

export abstract class TypeHelpCountry extends Type {
}

export abstract class TypeHelpCountriesList extends Type {
}

export abstract class TypeMessageViews extends Type {
}

export abstract class TypeMessagesMessageViews extends Type {
}

export abstract class TypeMessagesDiscussionMessage extends Type {
}

export abstract class TypeMessageReplyHeader extends Type {
}

export abstract class TypeMessageReplies extends Type {
}

export abstract class TypePeerBlocked extends Type {
}

export abstract class TypeStatsMessageStats extends Type {
}

export abstract class TypeGroupCall extends Type {
}

export abstract class TypeInputGroupCall extends Type {
}

export abstract class TypeGroupCallParticipant extends Type {
}

export abstract class TypePhoneGroupCall extends Type {
}

export abstract class TypePhoneGroupParticipants extends Type {
}

export abstract class TypeInlineQueryPeerType extends Type {
}

export abstract class TypeMessagesHistoryImport extends Type {
}

export abstract class TypeMessagesHistoryImportParsed extends Type {
}

export abstract class TypeMessagesAffectedFoundMessages extends Type {
}

export abstract class TypeChatInviteImporter extends Type {
}

export abstract class TypeMessagesExportedChatInvites extends Type {
}

export abstract class TypeMessagesExportedChatInvite extends Type {
}

export abstract class TypeMessagesChatInviteImporters extends Type {
}

export abstract class TypeChatAdminWithInvites extends Type {
}

export abstract class TypeMessagesChatAdminsWithInvites extends Type {
}

export abstract class TypeMessagesCheckedHistoryImportPeer extends Type {
}

export abstract class TypePhoneJoinAsPeers extends Type {
}

export abstract class TypePhoneExportedGroupCallInvite extends Type {
}

export abstract class TypeGroupCallParticipantVideoSourceGroup extends Type {
}

export abstract class TypeGroupCallParticipantVideo extends Type {
}

export abstract class TypeStickersSuggestedShortName extends Type {
}

export abstract class TypeBotCommandScope extends Type {
}

export abstract class TypeAccountResetPasswordResult extends Type {
}

export abstract class TypeSponsoredMessage extends Type {
}

export abstract class TypeMessagesSponsoredMessages extends Type {
}

export abstract class TypeSearchResultsCalendarPeriod extends Type {
}

export abstract class TypeMessagesSearchResultsCalendar extends Type {
}

export abstract class TypeSearchResultsPosition extends Type {
}

export abstract class TypeMessagesSearchResultsPositions extends Type {
}

export abstract class TypeChannelsSendAsPeers extends Type {
}

export abstract class TypeUsersUserFull extends Type {
}

export abstract class TypeMessagesPeerSettings extends Type {
}

export abstract class TypeAuthLoggedOut extends Type {
}

export abstract class TypeReactionCount extends Type {
}

export abstract class TypeMessageReactions extends Type {
}

export abstract class TypeMessagesMessageReactionsList extends Type {
}

export abstract class TypeAvailableReaction extends Type {
}

export abstract class TypeMessagesAvailableReactions extends Type {
}

export abstract class TypeMessagePeerReaction extends Type {
}

export abstract class TypeGroupCallStreamChannel extends Type {
}

export abstract class TypePhoneGroupCallStreamChannels extends Type {
}

export abstract class TypePhoneGroupCallStreamRtmpURL extends Type {
}

export abstract class TypeAttachMenuBotIconColor extends Type {
}

export abstract class TypeAttachMenuBotIcon extends Type {
}

export abstract class TypeAttachMenuBot extends Type {
}

export abstract class TypeAttachMenuBots extends Type {
}

export abstract class TypeAttachMenuBotsBot extends Type {
}

export abstract class TypeWebViewResult extends Type {
}

export abstract class TypeSimpleWebViewResult extends Type {
}

export abstract class TypeWebViewMessageSent extends Type {
}

export abstract class TypeBotMenuButton extends Type {
}

export abstract class TypeAccountSavedRingtones extends Type {
}

export abstract class TypeNotificationSound extends Type {
}

export abstract class TypeAccountSavedRingtone extends Type {
}

export abstract class TypeAttachMenuPeerType extends Type {
}

export abstract class TypeInputInvoice extends Type {
}

export abstract class TypePaymentsExportedInvoice extends Type {
}

export abstract class TypeMessagesTranscribedAudio extends Type {
}

export abstract class TypeHelpPremiumPromo extends Type {
}

export abstract class TypeInputStorePaymentPurpose extends Type {
}

export abstract class TypePremiumGiftOption extends Type {
}

export abstract class TypePaymentFormMethod extends Type {
}

export abstract class TypeEmojiStatus extends Type {
}

export abstract class TypeAccountEmojiStatuses extends Type {
}

export abstract class TypeReaction extends Type {
}

export abstract class TypeChatReactions extends Type {
}

export abstract class TypeMessagesReactions extends Type {
}

export abstract class TypeEmailVerifyPurpose extends Type {
}

export abstract class TypeEmailVerification extends Type {
}

export abstract class TypeAccountEmailVerified extends Type {
}

export abstract class TypePremiumSubscriptionOption extends Type {
}

export abstract class TypeSendAsPeer extends Type {
}

export abstract class TypeMessageExtendedMedia extends Type {
}

export abstract class TypeStickerKeyword extends Type {
}

export abstract class TypeUsername extends Type {
}

export abstract class TypeForumTopic extends Type {
}

export abstract class TypeMessagesForumTopics extends Type {
}

export abstract class TypeDefaultHistoryTTL extends Type {
}

export abstract class TypeExportedContactToken extends Type {
}

export abstract class TypeRequestPeerType extends Type {
}

export abstract class TypeEmojiList extends Type {
}

export abstract class TypeEmojiGroup extends Type {
}

export abstract class TypeMessagesEmojiGroups extends Type {
}

export abstract class TypeTextWithEntities extends Type {
}

export abstract class TypeMessagesTranslatedText extends Type {
}

export abstract class TypeAutoSaveSettings extends Type {
}

export abstract class TypeAutoSaveException extends Type {
}

export abstract class TypeAccountAutoSaveSettings extends Type {
}

export abstract class TypeHelpAppConfig extends Type {
}

export abstract class TypeInputBotApp extends Type {
}

export abstract class TypeBotApp extends Type {
}

export abstract class TypeMessagesBotApp extends Type {
}

export abstract class TypeAppWebViewResult extends Type {
}

export abstract class TypeInlineBotWebView extends Type {
}

export abstract class TypeReadParticipantDate extends Type {
}

export abstract class TypeInputChatlist extends Type {
}

export abstract class TypeExportedChatlistInvite extends Type {
}

export abstract class TypeChatlistsExportedChatlistInvite extends Type {
}

export abstract class TypeChatlistsExportedInvites extends Type {
}

export abstract class TypeChatlistsChatlistInvite extends Type {
}

export abstract class TypeChatlistsChatlistUpdates extends Type {
}

export abstract class TypeBotsBotInfo extends Type {
}

export abstract class TypeMessagePeerVote extends Type {
}

export abstract class TypeSponsoredWebPage extends Type {
}

export abstract class TypeStoryViews extends Type {
}

export abstract class TypeStoryItem extends Type {
}

export abstract class TypeUserStories extends Type {
}

export abstract class TypeStoriesAllStories extends Type {
}

export abstract class TypeStoriesStories extends Type {
}

export abstract class TypeStoriesUserStories extends Type {
}

export abstract class TypeStoryView extends Type {
}

export abstract class TypeStoriesStoryViewsList extends Type {
}

export abstract class TypeStoriesStoryViews extends Type {
}

export abstract class TypeInputReplyTo extends Type {
}

export abstract class TypeExportedStoryLink extends Type {
}

export class ResPQ extends TypeResPQ {
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

  constructor(params: { nonce: bigint; serverNonce: bigint; pq: Uint8Array; serverPublicKeyFingerprints: Array<bigint> }) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.pq = params.pq;
    this.serverPublicKeyFingerprints = params.serverPublicKeyFingerprints;
  }
}

export class PQInnerDataDC extends TypePQInnerData {
  pq: Uint8Array;
  p: Uint8Array;
  q: Uint8Array;
  nonce: bigint;
  serverNonce: bigint;
  newNonce: bigint;
  dc: number;

  protected get [id]() {
    return 0xA9F55F95;
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

  constructor(params: { pq: Uint8Array; p: Uint8Array; q: Uint8Array; nonce: bigint; serverNonce: bigint; newNonce: bigint; dc: number }) {
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

export class PQInnerDataTempDC extends TypePQInnerData {
  pq: Uint8Array;
  p: Uint8Array;
  q: Uint8Array;
  nonce: bigint;
  serverNonce: bigint;
  newNonce: bigint;
  dc: number;
  expiresIn: number;

  protected get [id]() {
    return 0x56FDDF88;
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

  constructor(params: { pq: Uint8Array; p: Uint8Array; q: Uint8Array; nonce: bigint; serverNonce: bigint; newNonce: bigint; dc: number; expiresIn: number }) {
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

export class ServerDHParamsOK extends TypeServerDHParams {
  nonce: bigint;
  serverNonce: bigint;
  encryptedAnswer: Uint8Array;

  protected get [id]() {
    return 0xD0E8075C;
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

  constructor(params: { nonce: bigint; serverNonce: bigint; encryptedAnswer: Uint8Array }) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.encryptedAnswer = params.encryptedAnswer;
  }
}

export class ServerDHInnerData extends TypeServerDHInnerData {
  nonce: bigint;
  serverNonce: bigint;
  g: number;
  dhPrime: Uint8Array;
  gA: Uint8Array;
  serverTime: number;

  protected get [id]() {
    return 0xB5890DBA;
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

  constructor(params: { nonce: bigint; serverNonce: bigint; g: number; dhPrime: Uint8Array; gA: Uint8Array; serverTime: number }) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.g = params.g;
    this.dhPrime = params.dhPrime;
    this.gA = params.gA;
    this.serverTime = params.serverTime;
  }
}

export class ClientDHInnerData extends TypeClientDHInnerData {
  nonce: bigint;
  serverNonce: bigint;
  retryId: bigint;
  gB: Uint8Array;

  protected get [id]() {
    return 0x6643B654;
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

  constructor(params: { nonce: bigint; serverNonce: bigint; retryId: bigint; gB: Uint8Array }) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.retryId = params.retryId;
    this.gB = params.gB;
  }
}

export class DHGenOK extends TypeSetClientDHParamsAnswer {
  nonce: bigint;
  serverNonce: bigint;
  newNonceHash1: bigint;

  protected get [id]() {
    return 0x3BCBF734;
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

  constructor(params: { nonce: bigint; serverNonce: bigint; newNonceHash1: bigint }) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.newNonceHash1 = params.newNonceHash1;
  }
}

export class DHGenRetry extends TypeSetClientDHParamsAnswer {
  nonce: bigint;
  serverNonce: bigint;
  newNonceHash2: bigint;

  protected get [id]() {
    return 0x46DC1FB9;
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

  constructor(params: { nonce: bigint; serverNonce: bigint; newNonceHash2: bigint }) {
    super();
    this.nonce = params.nonce;
    this.serverNonce = params.serverNonce;
    this.newNonceHash2 = params.newNonceHash2;
  }
}

export class DHGenFail extends TypeSetClientDHParamsAnswer {
  nonce: bigint;
  serverNonce: bigint;
  newNonceHash3: bigint;

  protected get [id]() {
    return 0xA69DAE02;
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

  constructor(params: { nonce: bigint; serverNonce: bigint; newNonceHash3: bigint }) {
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
    return 0x75A3F765;
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

  constructor(params: { nonce: bigint; tempAuthKeyId: bigint; permAuthKeyId: bigint; tempSessionId: bigint; expiresAt: number }) {
    super();
    this.nonce = params.nonce;
    this.tempAuthKeyId = params.tempAuthKeyId;
    this.permAuthKeyId = params.permAuthKeyId;
    this.tempSessionId = params.tempSessionId;
    this.expiresAt = params.expiresAt;
  }
}

export class RPCError extends TypeRpcError {
  errorCode: number;
  errorMessage: string;

  protected get [id]() {
    return 0x2144CA19;
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

export class RPCAnswerUnknown extends TypeRpcDropAnswer {
  protected get [id]() {
    return 0x5E2AD36E;
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

export class RPCAnswerDroppedRunning extends TypeRpcDropAnswer {
  protected get [id]() {
    return 0xCD78E586;
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

export class RPCAnswerDropped extends TypeRpcDropAnswer {
  msgId: bigint;
  seqNo: number;
  bytes: number;

  protected get [id]() {
    return 0xA43AD8B7;
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
    return 0x0949D9DC;
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

  constructor(params: { validSince: number; validUntil: number; salt: bigint }) {
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
    return 0xAE500895;
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

  constructor(params: { reqMsgId: bigint; now: number; salts: Array<TypeFutureSalt> }) {
    super();
    this.reqMsgId = params.reqMsgId;
    this.now = params.now;
    this.salts = params.salts;
  }
}

export class Pong extends TypePong {
  msgId: bigint;
  pingId: bigint;

  protected get [id]() {
    return 0x347773C5;
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

export class DestroySessionOK extends TypeDestroySessionRes {
  sessionId: bigint;

  protected get [id]() {
    return 0xE22045FC;
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
    return 0x62D350C9;
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
    return 0x9EC20908;
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

  constructor(params: { firstMsgId: bigint; uniqueId: bigint; serverSalt: bigint }) {
    super();
    this.firstMsgId = params.firstMsgId;
    this.uniqueId = params.uniqueId;
    this.serverSalt = params.serverSalt;
  }
}

export class GZIPPacked extends TypeObject {
  packedData: Uint8Array;

  protected get [id]() {
    return 0x3072CFA1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["packedData", Uint8Array, "bytes"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.packedData, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { packedData: Uint8Array }) {
    super();
    this.packedData = params.packedData;
  }
}

export class MsgsAck extends TypeMsgsAck {
  msgIds: Array<bigint>;

  protected get [id]() {
    return 0x62D6B459;
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
    return 0xA7EFF811;
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

  constructor(params: { badMsgId: bigint; badMsgSeqno: number; errorCode: number }) {
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
    return 0xEDAB447B;
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

  constructor(params: { badMsgId: bigint; badMsgSeqno: number; errorCode: number; newServerSalt: bigint }) {
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
    return 0x7D861A08;
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
    return 0xDA69FB52;
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
    return 0x04DEB57D;
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
    return 0x8CC0D131;
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
    return 0x276D3EC6;
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

  constructor(params: { msgId: bigint; answerMsgId: bigint; bytes: number; status: number }) {
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
    return 0x809DB6DF;
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

export class DestroyAuthKeyOK extends TypeDestroyAuthKeyRes {
  protected get [id]() {
    return 0xF660E1D4;
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
    return 0x0A9F2259;
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
    return 0xEA109B13;
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

export class HTTPWait extends TypeHttpWait {
  maxDelay: number;
  waitAfter: number;
  maxWait: number;

  protected get [id]() {
    return 0x9299359F;
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

  constructor(params: { maxDelay: number; waitAfter: number; maxWait: number }) {
    super();
    this.maxDelay = params.maxDelay;
    this.waitAfter = params.waitAfter;
    this.maxWait = params.maxWait;
  }
}

export class True extends TypeTrue {
  protected get [id]() {
    return 0x3FEDD339;
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

export class Error extends TypeError {
  code: number;
  text: string;

  protected get [id]() {
    return 0xC4B9F9BB;
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

export class Null extends TypeNull {
  protected get [id]() {
    return 0x56730BCC;
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
    return 0x7F3B18EA;
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
    return 0x7DA07EC9;
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
    return 0x35A95CB9;
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
    return 0xDDE8A54C;
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
    return 0x27BCBBFC;
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
    return 0xA87B0A1C;
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
    return 0xBD2A0840;
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

  constructor(params: { peer: TypeInputPeer; msgId: number; channelId: bigint }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.channelId = params.channelId;
  }
}

export class InputUserEmpty extends TypeInputUser {
  protected get [id]() {
    return 0xB98886CF;
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
    return 0xF7C1B13F;
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

export class InputUser extends TypeInputUser {
  userId: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xF21158C6;
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
    return 0x1DA448E2;
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
    return 0xF392B7F4;
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

  constructor(params: { clientId: bigint; phone: string; firstName: string; lastName: string }) {
    super();
    this.clientId = params.clientId;
    this.phone = params.phone;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
  }
}

export class InputFile extends TypeInputFile {
  id: bigint;
  parts: number;
  name: string;
  md5Checksum: string;

  protected get [id]() {
    return 0xF52FF27F;
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

  constructor(params: { id: bigint; parts: number; name: string; md5Checksum: string }) {
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
    return 0xFA4F0BB5;
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
    return 0x9664F57F;
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
    return 0x1E287D04;
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
      [this.stickers ?? null, [TypeInputDocument], "flags.0?Vector<InputDocument>"],
      [this.ttlSeconds ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { spoiler?: true; file: TypeInputFile; stickers?: Array<TypeInputDocument>; ttlSeconds?: number }) {
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
    return 0xB3BA0635;
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

  constructor(params: { spoiler?: true; id: TypeInputPhoto; ttlSeconds?: number }) {
    super();
    this.spoiler = params.spoiler;
    this.id = params.id;
    this.ttlSeconds = params.ttlSeconds;
  }
}

export class InputMediaGeoPoint extends TypeInputMedia {
  geoPoint: TypeInputGeoPoint;

  protected get [id]() {
    return 0xF9C44144;
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
    return 0xF8AB7DFB;
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

  constructor(params: { phoneNumber: string; firstName: string; lastName: string; vcard: string }) {
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
    return 0x5B38C6C1;
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
      [this.stickers ?? null, [TypeInputDocument], "flags.0?Vector<InputDocument>"],
      [this.ttlSeconds ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { nosoundVideo?: true; forceFile?: true; spoiler?: true; file: TypeInputFile; thumb?: TypeInputFile; mimeType: string; attributes: Array<TypeDocumentAttribute>; stickers?: Array<TypeInputDocument>; ttlSeconds?: number }) {
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

  constructor(params: { spoiler?: true; id: TypeInputDocument; ttlSeconds?: number; query?: string }) {
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
    return 0xC13D1C11;
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

  constructor(params: { geoPoint: TypeInputGeoPoint; title: string; address: string; provider: string; venueId: string; venueType: string }) {
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
    return 0xE5BBFE1A;
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
    return 0xFB52DC99;
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
    return 0xD33F43F3;
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
    return 0x8EB5A6D5;
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

  constructor(params: { title: string; description: string; photo?: TypeInputWebDocument; invoice: TypeInvoice; payload: Uint8Array; provider: string; providerData: TypeDataJSON; startParam?: string; extendedMedia?: TypeInputMedia }) {
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
    return 0x971FA843;
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

  constructor(params: { stopped?: true; geoPoint: TypeInputGeoPoint; heading?: number; period?: number; proximityNotificationRadius?: number }) {
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
    return 0x0F94E5F1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["poll", TypePoll, "Poll"],
      ["correctAnswers", [Uint8Array], "flags.0?Vector<bytes>"],
      ["solution", "string", "flags.1?string"],
      ["solutionEntities", [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.poll, TypePoll, "Poll"],
      [this.correctAnswers ?? null, [Uint8Array], "flags.0?Vector<bytes>"],
      [this.solution ?? null, "string", "flags.1?string"],
      [this.solutionEntities ?? null, [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { poll: TypePoll; correctAnswers?: Array<Uint8Array>; solution?: string; solutionEntities?: Array<TypeMessageEntity> }) {
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
    return 0xE66FBF7B;
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

export class InputMediaStory extends TypeInputMedia {
  userId: TypeInputUser;
  id: number;

  protected get [id]() {
    return 0x9A86B58F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", TypeInputUser, "InputUser"],
      ["id", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, TypeInputUser, "InputUser"],
      [this.id, "number", "int"],
    ];
  }

  constructor(params: { userId: TypeInputUser; id: number }) {
    super();
    this.userId = params.userId;
    this.id = params.id;
  }
}

export class InputChatPhotoEmpty extends TypeInputChatPhoto {
  protected get [id]() {
    return 0x1CA48F57;
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
    return 0xBDCDAEC0;
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

  constructor(params?: { file?: TypeInputFile; video?: TypeInputFile; videoStartTs?: number; videoEmojiMarkup?: TypeVideoSize }) {
    super();
    this.file = params?.file;
    this.video = params?.video;
    this.videoStartTs = params?.videoStartTs;
    this.videoEmojiMarkup = params?.videoEmojiMarkup;
  }
}

export class InputChatPhoto extends TypeInputChatPhoto {
  id: TypeInputPhoto;

  protected get [id]() {
    return 0x8953AD37;
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
    return 0xE4C123D6;
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

export class InputGeoPoint extends TypeInputGeoPoint {
  lat: number;
  long: number;
  accuracyRadius?: number;

  protected get [id]() {
    return 0x48222FAF;
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
    return 0x1CD7BF0D;
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

export class InputPhoto extends TypeInputPhoto {
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;

  protected get [id]() {
    return 0x3BB3B94A;
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

  constructor(params: { id: bigint; accessHash: bigint; fileReference: Uint8Array }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
  }
}

export class InputFileLocation extends TypeInputFileLocation {
  volumeId: bigint;
  localId: number;
  secret: bigint;
  fileReference: Uint8Array;

  protected get [id]() {
    return 0xDFDAABE1;
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

  constructor(params: { volumeId: bigint; localId: number; secret: bigint; fileReference: Uint8Array }) {
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
    return 0xF5235D55;
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
    return 0xBAD07584;
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

  constructor(params: { id: bigint; accessHash: bigint; fileReference: Uint8Array; thumbSize: string }) {
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
    return 0xCBC7EE28;
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
    return 0x29BE5899;
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
    return 0x40181FFE;
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

  constructor(params: { id: bigint; accessHash: bigint; fileReference: Uint8Array; thumbSize: string }) {
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
    return 0xD83466F3;
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

  constructor(params: { id: bigint; accessHash: bigint; fileReference: Uint8Array; volumeId: bigint; localId: number; secret: bigint }) {
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
    return 0x37257E99;
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
    return 0x9D84F3DB;
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

  constructor(params: { stickerset: TypeInputStickerSet; thumbVersion: number }) {
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
    return 0x0598A92A;
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

  constructor(params: { call: TypeInputGroupCall; timeMs: bigint; scale: number; videoChannel?: number; videoQuality?: number }) {
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
    return 0x36C6019A;
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
    return 0xA2A5371E;
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
    return 0xAA963B05;
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
    return 0x40BC6F52;
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
    return 0x007EFE0E;
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
    return 0xCAE1AADF;
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
    return 0x0A4F63C0;
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
    return 0xAE1E508D;
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
    return 0x528A0677;
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
    return 0x4B09EBBC;
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
    return 0xB3CEA0E4;
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
    return 0x1081464C;
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
    return 0xD3BC4B7A;
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

export class User extends TypeUser {
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
  closeFriend?: true;
  storiesHidden?: true;
  storiesUnavailable?: true;
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
  storiesMaxId?: number;

  protected get [id]() {
    return 0xABB5F120;
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
      ["closeFriend", "true", "flags2.2?true"],
      ["storiesHidden", "true", "flags2.3?true"],
      ["storiesUnavailable", "true", "flags2.4?true"],
      ["id", "bigint", "long"],
      ["accessHash", "bigint", "flags.0?long"],
      ["firstName", "string", "flags.1?string"],
      ["lastName", "string", "flags.2?string"],
      ["username", "string", "flags.3?string"],
      ["phone", "string", "flags.4?string"],
      ["photo", TypeUserProfilePhoto, "flags.5?UserProfilePhoto"],
      ["status", TypeUserStatus, "flags.6?UserStatus"],
      ["botInfoVersion", "number", "flags.14?int"],
      ["restrictionReason", [TypeRestrictionReason], "flags.18?Vector<RestrictionReason>"],
      ["botInlinePlaceholder", "string", "flags.19?string"],
      ["langCode", "string", "flags.22?string"],
      ["emojiStatus", TypeEmojiStatus, "flags.30?EmojiStatus"],
      ["usernames", [TypeUsername], "flags2.0?Vector<Username>"],
      ["storiesMaxId", "number", "flags2.5?int"],
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
      [this.closeFriend ?? null, "true", "flags2.2?true"],
      [this.storiesHidden ?? null, "true", "flags2.3?true"],
      [this.storiesUnavailable ?? null, "true", "flags2.4?true"],
      [this.id, "bigint", "long"],
      [this.accessHash ?? null, "bigint", "flags.0?long"],
      [this.firstName ?? null, "string", "flags.1?string"],
      [this.lastName ?? null, "string", "flags.2?string"],
      [this.username ?? null, "string", "flags.3?string"],
      [this.phone ?? null, "string", "flags.4?string"],
      [this.photo ?? null, TypeUserProfilePhoto, "flags.5?UserProfilePhoto"],
      [this.status ?? null, TypeUserStatus, "flags.6?UserStatus"],
      [this.botInfoVersion ?? null, "number", "flags.14?int"],
      [this.restrictionReason ?? null, [TypeRestrictionReason], "flags.18?Vector<RestrictionReason>"],
      [this.botInlinePlaceholder ?? null, "string", "flags.19?string"],
      [this.langCode ?? null, "string", "flags.22?string"],
      [this.emojiStatus ?? null, TypeEmojiStatus, "flags.30?EmojiStatus"],
      [this.usernames ?? null, [TypeUsername], "flags2.0?Vector<Username>"],
      [this.storiesMaxId ?? null, "number", "flags2.5?int"],
    ];
  }

  constructor(params: { self?: true; contact?: true; mutualContact?: true; deleted?: true; bot?: true; botChatHistory?: true; botNochats?: true; verified?: true; restricted?: true; min?: true; botInlineGeo?: true; support?: true; scam?: true; applyMinPhoto?: true; fake?: true; botAttachMenu?: true; premium?: true; attachMenuEnabled?: true; botCanEdit?: true; closeFriend?: true; storiesHidden?: true; storiesUnavailable?: true; id: bigint; accessHash?: bigint; firstName?: string; lastName?: string; username?: string; phone?: string; photo?: TypeUserProfilePhoto; status?: TypeUserStatus; botInfoVersion?: number; restrictionReason?: Array<TypeRestrictionReason>; botInlinePlaceholder?: string; langCode?: string; emojiStatus?: TypeEmojiStatus; usernames?: Array<TypeUsername>; storiesMaxId?: number }) {
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
    this.closeFriend = params.closeFriend;
    this.storiesHidden = params.storiesHidden;
    this.storiesUnavailable = params.storiesUnavailable;
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
    this.storiesMaxId = params.storiesMaxId;
  }
}

export class UserProfilePhotoEmpty extends TypeUserProfilePhoto {
  protected get [id]() {
    return 0x4F11BAE1;
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

export class UserProfilePhoto extends TypeUserProfilePhoto {
  hasVideo?: true;
  personal?: true;
  photoId: bigint;
  strippedThumb?: Uint8Array;
  dcId: number;

  protected get [id]() {
    return 0x82D1F706;
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

  constructor(params: { hasVideo?: true; personal?: true; photoId: bigint; strippedThumb?: Uint8Array; dcId: number }) {
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
    return 0x09D05049;
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
    return 0xEDB93949;
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
    return 0x008C703F;
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
    return 0xE26F42F1;
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
    return 0x07BF09FC;
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
    return 0x77EBC742;
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

export class Chat extends TypeChat {
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
    return 0x41CBF256;
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
      ["defaultBannedRights", TypeChatBannedRights, "flags.18?ChatBannedRights"],
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
      [this.adminRights ?? null, TypeChatAdminRights, "flags.14?ChatAdminRights"],
      [this.defaultBannedRights ?? null, TypeChatBannedRights, "flags.18?ChatBannedRights"],
    ];
  }

  constructor(params: { creator?: true; left?: true; deactivated?: true; callActive?: true; callNotEmpty?: true; noforwards?: true; id: bigint; title: string; photo: TypeChatPhoto; participantsCount: number; date: number; version: number; migratedTo?: TypeInputChannel; adminRights?: TypeChatAdminRights; defaultBannedRights?: TypeChatBannedRights }) {
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
    return 0x6592A1A7;
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
      ["restrictionReason", [TypeRestrictionReason], "flags.9?Vector<RestrictionReason>"],
      ["adminRights", TypeChatAdminRights, "flags.14?ChatAdminRights"],
      ["bannedRights", TypeChatBannedRights, "flags.15?ChatBannedRights"],
      ["defaultBannedRights", TypeChatBannedRights, "flags.18?ChatBannedRights"],
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
      [this.restrictionReason ?? null, [TypeRestrictionReason], "flags.9?Vector<RestrictionReason>"],
      [this.adminRights ?? null, TypeChatAdminRights, "flags.14?ChatAdminRights"],
      [this.bannedRights ?? null, TypeChatBannedRights, "flags.15?ChatBannedRights"],
      [this.defaultBannedRights ?? null, TypeChatBannedRights, "flags.18?ChatBannedRights"],
      [this.participantsCount ?? null, "number", "flags.17?int"],
      [this.usernames ?? null, [TypeUsername], "flags2.0?Vector<Username>"],
    ];
  }

  constructor(params: { creator?: true; left?: true; broadcast?: true; verified?: true; megagroup?: true; restricted?: true; signatures?: true; min?: true; scam?: true; hasLink?: true; hasGeo?: true; slowmodeEnabled?: true; callActive?: true; callNotEmpty?: true; fake?: true; gigagroup?: true; noforwards?: true; joinToSend?: true; joinRequest?: true; forum?: true; id: bigint; accessHash?: bigint; title: string; username?: string; photo: TypeChatPhoto; date: number; restrictionReason?: Array<TypeRestrictionReason>; adminRights?: TypeChatAdminRights; bannedRights?: TypeChatBannedRights; defaultBannedRights?: TypeChatBannedRights; participantsCount?: number; usernames?: Array<TypeUsername> }) {
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
    return 0x17D493D5;
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

  constructor(params: { broadcast?: true; megagroup?: true; id: bigint; accessHash: bigint; title: string; untilDate?: number }) {
    super();
    this.broadcast = params.broadcast;
    this.megagroup = params.megagroup;
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.title = params.title;
    this.untilDate = params.untilDate;
  }
}

export class ChatFull extends TypeChatFull {
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
    return 0xC9D31138;
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
      [this.exportedInvite ?? null, TypeExportedChatInvite, "flags.13?ExportedChatInvite"],
      [this.botInfo ?? null, [TypeBotInfo], "flags.3?Vector<BotInfo>"],
      [this.pinnedMsgId ?? null, "number", "flags.6?int"],
      [this.folderId ?? null, "number", "flags.11?int"],
      [this.call ?? null, TypeInputGroupCall, "flags.12?InputGroupCall"],
      [this.ttlPeriod ?? null, "number", "flags.14?int"],
      [this.groupcallDefaultJoinAs ?? null, TypePeer, "flags.15?Peer"],
      [this.themeEmoticon ?? null, "string", "flags.16?string"],
      [this.requestsPending ?? null, "number", "flags.17?int"],
      [this.recentRequesters ?? null, ["bigint"], "flags.17?Vector<long>"],
      [this.availableReactions ?? null, TypeChatReactions, "flags.18?ChatReactions"],
    ];
  }

  constructor(params: { canSetUsername?: true; hasScheduled?: true; translationsDisabled?: true; id: bigint; about: string; participants: TypeChatParticipants; chatPhoto?: TypePhoto; notifySettings: TypePeerNotifySettings; exportedInvite?: TypeExportedChatInvite; botInfo?: Array<TypeBotInfo>; pinnedMsgId?: number; folderId?: number; call?: TypeInputGroupCall; ttlPeriod?: number; groupcallDefaultJoinAs?: TypePeer; themeEmoticon?: string; requestsPending?: number; recentRequesters?: Array<bigint>; availableReactions?: TypeChatReactions }) {
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
    return 0xF2355507;
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
      [this.exportedInvite ?? null, TypeExportedChatInvite, "flags.23?ExportedChatInvite"],
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
      [this.availableReactions ?? null, TypeChatReactions, "flags.30?ChatReactions"],
    ];
  }

  constructor(params: { canViewParticipants?: true; canSetUsername?: true; canSetStickers?: true; hiddenPrehistory?: true; canSetLocation?: true; hasScheduled?: true; canViewStats?: true; blocked?: true; canDeleteChannel?: true; antispam?: true; participantsHidden?: true; translationsDisabled?: true; id: bigint; about: string; participantsCount?: number; adminsCount?: number; kickedCount?: number; bannedCount?: number; onlineCount?: number; readInboxMaxId: number; readOutboxMaxId: number; unreadCount: number; chatPhoto: TypePhoto; notifySettings: TypePeerNotifySettings; exportedInvite?: TypeExportedChatInvite; botInfo: Array<TypeBotInfo>; migratedFromChatId?: bigint; migratedFromMaxId?: number; pinnedMsgId?: number; stickerset?: TypeStickerSet; availableMinId?: number; folderId?: number; linkedChatId?: bigint; location?: TypeChannelLocation; slowmodeSeconds?: number; slowmodeNextSendDate?: number; statsDc?: number; pts: number; call?: TypeInputGroupCall; ttlPeriod?: number; pendingSuggestions?: Array<string>; groupcallDefaultJoinAs?: TypePeer; themeEmoticon?: string; requestsPending?: number; recentRequesters?: Array<bigint>; defaultSendAs?: TypePeer; availableReactions?: TypeChatReactions }) {
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

export class ChatParticipant extends TypeChatParticipant {
  userId: bigint;
  inviterId: bigint;
  date: number;

  protected get [id]() {
    return 0xC02D4007;
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
    return 0xE46BCEE4;
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
    return 0xA0933F5B;
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
    return 0x8763D3E1;
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
      [this.selfParticipant ?? null, TypeChatParticipant, "flags.0?ChatParticipant"],
    ];
  }

  constructor(params: { chatId: bigint; selfParticipant?: TypeChatParticipant }) {
    super();
    this.chatId = params.chatId;
    this.selfParticipant = params.selfParticipant;
  }
}

export class ChatParticipants extends TypeChatParticipants {
  chatId: bigint;
  participants: Array<TypeChatParticipant>;
  version: number;

  protected get [id]() {
    return 0x3CBC93F8;
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

  constructor(params: { chatId: bigint; participants: Array<TypeChatParticipant>; version: number }) {
    super();
    this.chatId = params.chatId;
    this.participants = params.participants;
    this.version = params.version;
  }
}

export class ChatPhotoEmpty extends TypeChatPhoto {
  protected get [id]() {
    return 0x37C1011C;
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

export class ChatPhoto extends TypeChatPhoto {
  hasVideo?: true;
  photoId: bigint;
  strippedThumb?: Uint8Array;
  dcId: number;

  protected get [id]() {
    return 0x1C6E1C11;
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

  constructor(params: { hasVideo?: true; photoId: bigint; strippedThumb?: Uint8Array; dcId: number }) {
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
    return 0x90A6CA84;
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

export class Message extends TypeMessage {
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
    return 0x38116EE0;
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
      ["restrictionReason", [TypeRestrictionReason], "flags.22?Vector<RestrictionReason>"],
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
      [this.replyTo ?? null, TypeMessageReplyHeader, "flags.3?MessageReplyHeader"],
      [this.date, "number", "int"],
      [this.message, "string", "string"],
      [this.media ?? null, TypeMessageMedia, "flags.9?MessageMedia"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.6?ReplyMarkup"],
      [this.entities ?? null, [TypeMessageEntity], "flags.7?Vector<MessageEntity>"],
      [this.views ?? null, "number", "flags.10?int"],
      [this.forwards ?? null, "number", "flags.10?int"],
      [this.replies ?? null, TypeMessageReplies, "flags.23?MessageReplies"],
      [this.editDate ?? null, "number", "flags.15?int"],
      [this.postAuthor ?? null, "string", "flags.16?string"],
      [this.groupedId ?? null, "bigint", "flags.17?long"],
      [this.reactions ?? null, TypeMessageReactions, "flags.20?MessageReactions"],
      [this.restrictionReason ?? null, [TypeRestrictionReason], "flags.22?Vector<RestrictionReason>"],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(params: { out?: true; mentioned?: true; mediaUnread?: true; silent?: true; post?: true; fromScheduled?: true; legacy?: true; editHide?: true; pinned?: true; noforwards?: true; id: number; fromId?: TypePeer; peerId: TypePeer; fwdFrom?: TypeMessageFwdHeader; viaBotId?: bigint; replyTo?: TypeMessageReplyHeader; date: number; message: string; media?: TypeMessageMedia; replyMarkup?: TypeReplyMarkup; entities?: Array<TypeMessageEntity>; views?: number; forwards?: number; replies?: TypeMessageReplies; editDate?: number; postAuthor?: string; groupedId?: bigint; reactions?: TypeMessageReactions; restrictionReason?: Array<TypeRestrictionReason>; ttlPeriod?: number }) {
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
    return 0x2B085862;
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
      [this.replyTo ?? null, TypeMessageReplyHeader, "flags.3?MessageReplyHeader"],
      [this.date, "number", "int"],
      [this.action, TypeMessageAction, "MessageAction"],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(params: { out?: true; mentioned?: true; mediaUnread?: true; silent?: true; post?: true; legacy?: true; id: number; fromId?: TypePeer; peerId: TypePeer; replyTo?: TypeMessageReplyHeader; date: number; action: TypeMessageAction; ttlPeriod?: number }) {
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
    return 0x3DED6320;
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
    return 0x695150D7;
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

  constructor(params?: { spoiler?: true; photo?: TypePhoto; ttlSeconds?: number }) {
    super();
    this.spoiler = params?.spoiler;
    this.photo = params?.photo;
    this.ttlSeconds = params?.ttlSeconds;
  }
}

export class MessageMediaGeo extends TypeMessageMedia {
  geo: TypeGeoPoint;

  protected get [id]() {
    return 0x56E0D474;
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

  constructor(params: { phoneNumber: string; firstName: string; lastName: string; vcard: string; userId: bigint }) {
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
    return 0x9F84F49E;
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
  altDocument?: TypeDocument;
  ttlSeconds?: number;

  protected get [id]() {
    return 0x4CF4D72D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["nopremium", "true", "flags.3?true"],
      ["spoiler", "true", "flags.4?true"],
      ["document", TypeDocument, "flags.0?Document"],
      ["altDocument", TypeDocument, "flags.5?Document"],
      ["ttlSeconds", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.nopremium ?? null, "true", "flags.3?true"],
      [this.spoiler ?? null, "true", "flags.4?true"],
      [this.document ?? null, TypeDocument, "flags.0?Document"],
      [this.altDocument ?? null, TypeDocument, "flags.5?Document"],
      [this.ttlSeconds ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(params?: { nopremium?: true; spoiler?: true; document?: TypeDocument; altDocument?: TypeDocument; ttlSeconds?: number }) {
    super();
    this.nopremium = params?.nopremium;
    this.spoiler = params?.spoiler;
    this.document = params?.document;
    this.altDocument = params?.altDocument;
    this.ttlSeconds = params?.ttlSeconds;
  }
}

export class MessageMediaWebPage extends TypeMessageMedia {
  webpage: TypeWebPage;

  protected get [id]() {
    return 0xA32DD600;
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
    return 0x2EC0533F;
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

  constructor(params: { geo: TypeGeoPoint; title: string; address: string; provider: string; venueId: string; venueType: string }) {
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
    return 0xFDB19008;
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
    return 0xF6A548D3;
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
      ["extendedMedia", TypeMessageExtendedMedia, "flags.4?MessageExtendedMedia"],
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
      [this.extendedMedia ?? null, TypeMessageExtendedMedia, "flags.4?MessageExtendedMedia"],
    ];
  }

  constructor(params: { shippingAddressRequested?: true; test?: true; title: string; description: string; photo?: TypeWebDocument; receiptMsgId?: number; currency: string; totalAmount: bigint; startParam: string; extendedMedia?: TypeMessageExtendedMedia }) {
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
    return 0xB940C666;
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

  constructor(params: { geo: TypeGeoPoint; heading?: number; period: number; proximityNotificationRadius?: number }) {
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
    return 0x4BD6E798;
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
    return 0x3F7EE58B;
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

export class MessageMediaStory extends TypeMessageMedia {
  viaMention?: true;
  userId: bigint;
  id: number;
  story?: TypeStoryItem;

  protected get [id]() {
    return 0xCBB20D88;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["viaMention", "true", "flags.1?true"],
      ["userId", "bigint", "long"],
      ["id", "number", "int"],
      ["story", TypeStoryItem, "flags.0?StoryItem"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.viaMention ?? null, "true", "flags.1?true"],
      [this.userId, "bigint", "long"],
      [this.id, "number", "int"],
      [this.story ?? null, TypeStoryItem, "flags.0?StoryItem"],
    ];
  }

  constructor(params: { viaMention?: true; userId: bigint; id: number; story?: TypeStoryItem }) {
    super();
    this.viaMention = params.viaMention;
    this.userId = params.userId;
    this.id = params.id;
    this.story = params.story;
  }
}

export class MessageActionEmpty extends TypeMessageAction {
  protected get [id]() {
    return 0xB6AEF7B0;
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
    return 0xBD47CBAD;
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
    return 0xB5A1CE5A;
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
    return 0x7FCB13A8;
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
    return 0x95E3FBEF;
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
    return 0x15CEFD00;
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
    return 0xA43F30CC;
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
    return 0x031224C3;
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
    return 0x95D2AC92;
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
    return 0xE1037F92;
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
    return 0xEA3948E9;
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
    return 0x94BD38ED;
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
    return 0x9FBAB604;
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
    return 0x92A72876;
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
    return 0x8F31B327;
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
      [this.info ?? null, TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      [this.shippingOptionId ?? null, "string", "flags.1?string"],
      [this.charge, TypePaymentCharge, "PaymentCharge"],
    ];
  }

  constructor(params: { recurringInit?: true; recurringUsed?: true; currency: string; totalAmount: bigint; payload: Uint8Array; info?: TypePaymentRequestedInfo; shippingOptionId?: string; charge: TypePaymentCharge }) {
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
    return 0x96163F56;
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

  constructor(params: { recurringInit?: true; recurringUsed?: true; currency: string; totalAmount: bigint; invoiceSlug?: string }) {
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
    return 0x80E11A7F;
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
      [this.reason ?? null, TypePhoneCallDiscardReason, "flags.0?PhoneCallDiscardReason"],
      [this.duration ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { video?: true; callId: bigint; reason?: TypePhoneCallDiscardReason; duration?: number }) {
    super();
    this.video = params.video;
    this.callId = params.callId;
    this.reason = params.reason;
    this.duration = params.duration;
  }
}

export class MessageActionScreenshotTaken extends TypeMessageAction {
  protected get [id]() {
    return 0x4792929B;
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
    return 0xFAE69F56;
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
    return 0xC516D679;
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

  constructor(params?: { attachMenu?: true; domain?: string; app?: TypeBotApp }) {
    super();
    this.attachMenu = params?.attachMenu;
    this.domain = params?.domain;
    this.app = params?.app;
  }
}

export class MessageActionSecureValuesSentMe extends TypeMessageAction {
  values: Array<TypeSecureValue>;
  credentials: TypeSecureCredentialsEncrypted;

  protected get [id]() {
    return 0x1B287353;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["values", [TypeSecureValue], "Vector<SecureValue>"],
      ["credentials", TypeSecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.values, [TypeSecureValue], "Vector<SecureValue>"],
      [this.credentials, TypeSecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
    ];
  }

  constructor(params: { values: Array<TypeSecureValue>; credentials: TypeSecureCredentialsEncrypted }) {
    super();
    this.values = params.values;
    this.credentials = params.credentials;
  }
}

export class MessageActionSecureValuesSent extends TypeMessageAction {
  types: Array<TypeSecureValueType>;

  protected get [id]() {
    return 0xD95C6154;
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
    return 0xF3F25F76;
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
    return 0x98E0D697;
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
    return 0x7A0D7F42;
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
    return 0x502F92F7;
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
    return 0x3C134D7B;
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
    return 0xB3A07661;
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
    return 0xAA786345;
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
    return 0xEBBCA3CB;
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
    return 0x47DD8079;
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
    return 0xB4C38CB5;
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
  cryptoCurrency?: string;
  cryptoAmount?: bigint;

  protected get [id]() {
    return 0xC83D6AEC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["currency", "string", "string"],
      ["amount", "bigint", "long"],
      ["months", "number", "int"],
      ["cryptoCurrency", "string", "flags.0?string"],
      ["cryptoAmount", "bigint", "flags.0?long"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.currency, "string", "string"],
      [this.amount, "bigint", "long"],
      [this.months, "number", "int"],
      [this.cryptoCurrency ?? null, "string", "flags.0?string"],
      [this.cryptoAmount ?? null, "bigint", "flags.0?long"],
    ];
  }

  constructor(params: { currency: string; amount: bigint; months: number; cryptoCurrency?: string; cryptoAmount?: bigint }) {
    super();
    this.currency = params.currency;
    this.amount = params.amount;
    this.months = params.months;
    this.cryptoCurrency = params.cryptoCurrency;
    this.cryptoAmount = params.cryptoAmount;
  }
}

export class MessageActionTopicCreate extends TypeMessageAction {
  title: string;
  iconColor: number;
  iconEmojiId?: bigint;

  protected get [id]() {
    return 0x0D999256;
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

  constructor(params: { title: string; iconColor: number; iconEmojiId?: bigint }) {
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
    return 0xC0944820;
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

  constructor(params?: { title?: string; iconEmojiId?: bigint; closed?: boolean; hidden?: boolean }) {
    super();
    this.title = params?.title;
    this.iconEmojiId = params?.iconEmojiId;
    this.closed = params?.closed;
    this.hidden = params?.hidden;
  }
}

export class MessageActionSuggestProfilePhoto extends TypeMessageAction {
  photo: TypePhoto;

  protected get [id]() {
    return 0x57DE635E;
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
    return 0xFE77345D;
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

export class MessageActionSetChatWallPaper extends TypeMessageAction {
  wallpaper: TypeWallPaper;

  protected get [id]() {
    return 0xBC44A927;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", TypeWallPaper, "WallPaper"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, TypeWallPaper, "WallPaper"],
    ];
  }

  constructor(params: { wallpaper: TypeWallPaper }) {
    super();
    this.wallpaper = params.wallpaper;
  }
}

export class MessageActionSetSameChatWallPaper extends TypeMessageAction {
  wallpaper: TypeWallPaper;

  protected get [id]() {
    return 0xC0787D6D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["wallpaper", TypeWallPaper, "WallPaper"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.wallpaper, TypeWallPaper, "WallPaper"],
    ];
  }

  constructor(params: { wallpaper: TypeWallPaper }) {
    super();
    this.wallpaper = params.wallpaper;
  }
}

export class Dialog extends TypeDialog {
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
    return 0xD58A08C6;
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

  constructor(params: { pinned?: true; unreadMark?: true; peer: TypePeer; topMessage: number; readInboxMaxId: number; readOutboxMaxId: number; unreadCount: number; unreadMentionsCount: number; unreadReactionsCount: number; notifySettings: TypePeerNotifySettings; pts?: number; draft?: TypeDraftMessage; folderId?: number; ttlPeriod?: number }) {
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
    return 0x71BD134C;
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

  constructor(params: { pinned?: true; folder: TypeFolder; peer: TypePeer; topMessage: number; unreadMutedPeersCount: number; unreadUnmutedPeersCount: number; unreadMutedMessagesCount: number; unreadUnmutedMessagesCount: number }) {
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
    return 0x2331B22D;
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

export class Photo extends TypePhoto {
  hasStickers?: true;
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;
  date: number;
  sizes: Array<TypePhotoSize>;
  videoSizes?: Array<TypeVideoSize>;
  dcId: number;

  protected get [id]() {
    return 0xFB197A65;
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

  constructor(params: { hasStickers?: true; id: bigint; accessHash: bigint; fileReference: Uint8Array; date: number; sizes: Array<TypePhotoSize>; videoSizes?: Array<TypeVideoSize>; dcId: number }) {
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
    return 0x0E17E23C;
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

export class PhotoSize extends TypePhotoSize {
  type: string;
  w: number;
  h: number;
  size: number;

  protected get [id]() {
    return 0x75C78E60;
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
    return 0x021E1AD6;
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

  constructor(params: { type: string; w: number; h: number; bytes: Uint8Array }) {
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
    return 0xE0B0BC2E;
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
    return 0xFA3EFB95;
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

  constructor(params: { type: string; w: number; h: number; sizes: Array<number> }) {
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
    return 0xD8214D41;
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
    return 0x1117DD5F;
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

export class GeoPoint extends TypeGeoPoint {
  long: number;
  lat: number;
  accessHash: bigint;
  accuracyRadius?: number;

  protected get [id]() {
    return 0xB2A2F663;
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

  constructor(params: { long: number; lat: number; accessHash: bigint; accuracyRadius?: number }) {
    super();
    this.long = params.long;
    this.lat = params.lat;
    this.accessHash = params.accessHash;
    this.accuracyRadius = params.accuracyRadius;
  }
}

export class AuthSentCode extends TypeAuthSentCode {
  type: TypeAuthSentCodeType;
  phoneCodeHash: string;
  nextType?: TypeAuthCodeType;
  timeout?: number;

  protected get [id]() {
    return 0x5E002502;
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

  constructor(params: { type: TypeAuthSentCodeType; phoneCodeHash: string; nextType?: TypeAuthCodeType; timeout?: number }) {
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
    return 0x2390FE44;
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

export class AuthAuthorization extends TypeAuthAuthorization {
  setupPasswordRequired?: true;
  otherwiseReloginDays?: number;
  tmpSessions?: number;
  futureAuthToken?: Uint8Array;
  user: TypeUser;

  protected get [id]() {
    return 0x2EA2C0D4;
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

  constructor(params: { setupPasswordRequired?: true; otherwiseReloginDays?: number; tmpSessions?: number; futureAuthToken?: Uint8Array; user: TypeUser }) {
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
    return 0x44747E9A;
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
      [this.termsOfService ?? null, TypeHelpTermsOfService, "flags.0?help.TermsOfService"],
    ];
  }

  constructor(params?: { termsOfService?: TypeHelpTermsOfService }) {
    super();
    this.termsOfService = params?.termsOfService;
  }
}

export class AuthExportedAuthorization extends TypeAuthExportedAuthorization {
  id: bigint;
  bytes: Uint8Array;

  protected get [id]() {
    return 0xB434E2B8;
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

export class InputNotifyPeer extends TypeInputNotifyPeer {
  peer: TypeInputPeer;

  protected get [id]() {
    return 0xB8BC5B0C;
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
    return 0x193B4417;
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
    return 0x4A95E84E;
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
    return 0xB1DB7C7E;
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
    return 0x5C467992;
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

export class InputPeerNotifySettings extends TypeInputPeerNotifySettings {
  showPreviews?: boolean;
  silent?: boolean;
  muteUntil?: number;
  sound?: TypeNotificationSound;
  storiesMuted?: boolean;
  storiesHideSender?: boolean;
  storiesSound?: TypeNotificationSound;

  protected get [id]() {
    return 0xCACB6AE2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["showPreviews", "boolean", "flags.0?Bool"],
      ["silent", "boolean", "flags.1?Bool"],
      ["muteUntil", "number", "flags.2?int"],
      ["sound", TypeNotificationSound, "flags.3?NotificationSound"],
      ["storiesMuted", "boolean", "flags.6?Bool"],
      ["storiesHideSender", "boolean", "flags.7?Bool"],
      ["storiesSound", TypeNotificationSound, "flags.8?NotificationSound"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.showPreviews ?? null, "boolean", "flags.0?Bool"],
      [this.silent ?? null, "boolean", "flags.1?Bool"],
      [this.muteUntil ?? null, "number", "flags.2?int"],
      [this.sound ?? null, TypeNotificationSound, "flags.3?NotificationSound"],
      [this.storiesMuted ?? null, "boolean", "flags.6?Bool"],
      [this.storiesHideSender ?? null, "boolean", "flags.7?Bool"],
      [this.storiesSound ?? null, TypeNotificationSound, "flags.8?NotificationSound"],
    ];
  }

  constructor(params?: { showPreviews?: boolean; silent?: boolean; muteUntil?: number; sound?: TypeNotificationSound; storiesMuted?: boolean; storiesHideSender?: boolean; storiesSound?: TypeNotificationSound }) {
    super();
    this.showPreviews = params?.showPreviews;
    this.silent = params?.silent;
    this.muteUntil = params?.muteUntil;
    this.sound = params?.sound;
    this.storiesMuted = params?.storiesMuted;
    this.storiesHideSender = params?.storiesHideSender;
    this.storiesSound = params?.storiesSound;
  }
}

export class PeerNotifySettings extends TypePeerNotifySettings {
  showPreviews?: boolean;
  silent?: boolean;
  muteUntil?: number;
  iosSound?: TypeNotificationSound;
  androidSound?: TypeNotificationSound;
  otherSound?: TypeNotificationSound;
  storiesMuted?: boolean;
  storiesHideSender?: boolean;
  storiesIosSound?: TypeNotificationSound;
  storiesAndroidSound?: TypeNotificationSound;
  storiesOtherSound?: TypeNotificationSound;

  protected get [id]() {
    return 0x99622C0C;
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
      ["storiesMuted", "boolean", "flags.6?Bool"],
      ["storiesHideSender", "boolean", "flags.7?Bool"],
      ["storiesIosSound", TypeNotificationSound, "flags.8?NotificationSound"],
      ["storiesAndroidSound", TypeNotificationSound, "flags.9?NotificationSound"],
      ["storiesOtherSound", TypeNotificationSound, "flags.10?NotificationSound"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.showPreviews ?? null, "boolean", "flags.0?Bool"],
      [this.silent ?? null, "boolean", "flags.1?Bool"],
      [this.muteUntil ?? null, "number", "flags.2?int"],
      [this.iosSound ?? null, TypeNotificationSound, "flags.3?NotificationSound"],
      [this.androidSound ?? null, TypeNotificationSound, "flags.4?NotificationSound"],
      [this.otherSound ?? null, TypeNotificationSound, "flags.5?NotificationSound"],
      [this.storiesMuted ?? null, "boolean", "flags.6?Bool"],
      [this.storiesHideSender ?? null, "boolean", "flags.7?Bool"],
      [this.storiesIosSound ?? null, TypeNotificationSound, "flags.8?NotificationSound"],
      [this.storiesAndroidSound ?? null, TypeNotificationSound, "flags.9?NotificationSound"],
      [this.storiesOtherSound ?? null, TypeNotificationSound, "flags.10?NotificationSound"],
    ];
  }

  constructor(params?: { showPreviews?: boolean; silent?: boolean; muteUntil?: number; iosSound?: TypeNotificationSound; androidSound?: TypeNotificationSound; otherSound?: TypeNotificationSound; storiesMuted?: boolean; storiesHideSender?: boolean; storiesIosSound?: TypeNotificationSound; storiesAndroidSound?: TypeNotificationSound; storiesOtherSound?: TypeNotificationSound }) {
    super();
    this.showPreviews = params?.showPreviews;
    this.silent = params?.silent;
    this.muteUntil = params?.muteUntil;
    this.iosSound = params?.iosSound;
    this.androidSound = params?.androidSound;
    this.otherSound = params?.otherSound;
    this.storiesMuted = params?.storiesMuted;
    this.storiesHideSender = params?.storiesHideSender;
    this.storiesIosSound = params?.storiesIosSound;
    this.storiesAndroidSound = params?.storiesAndroidSound;
    this.storiesOtherSound = params?.storiesOtherSound;
  }
}

export class PeerSettings extends TypePeerSettings {
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
    return 0xA518110D;
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

  constructor(params?: { reportSpam?: true; addContact?: true; blockContact?: true; shareContact?: true; needContactsException?: true; reportGeo?: true; autoarchived?: true; inviteMembers?: true; requestChatBroadcast?: true; geoDistance?: number; requestChatTitle?: string; requestChatDate?: number }) {
    super();
    this.reportSpam = params?.reportSpam;
    this.addContact = params?.addContact;
    this.blockContact = params?.blockContact;
    this.shareContact = params?.shareContact;
    this.needContactsException = params?.needContactsException;
    this.reportGeo = params?.reportGeo;
    this.autoarchived = params?.autoarchived;
    this.inviteMembers = params?.inviteMembers;
    this.requestChatBroadcast = params?.requestChatBroadcast;
    this.geoDistance = params?.geoDistance;
    this.requestChatTitle = params?.requestChatTitle;
    this.requestChatDate = params?.requestChatDate;
  }
}

export class WallPaper extends TypeWallPaper {
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
    return 0xA437C3ED;
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
      [this.settings ?? null, TypeWallPaperSettings, "flags.2?WallPaperSettings"],
    ];
  }

  constructor(params: { id: bigint; creator?: true; default?: true; pattern?: true; dark?: true; accessHash: bigint; slug: string; document: TypeDocument; settings?: TypeWallPaperSettings }) {
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
    return 0xE0804116;
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
      [this.settings ?? null, TypeWallPaperSettings, "flags.2?WallPaperSettings"],
    ];
  }

  constructor(params: { id: bigint; default?: true; dark?: true; settings?: TypeWallPaperSettings }) {
    super();
    this.id = params.id;
    this.default = params.default;
    this.dark = params.dark;
    this.settings = params.settings;
  }
}

export class InputReportReasonSpam extends TypeReportReason {
  protected get [id]() {
    return 0x58DBCAB8;
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
    return 0x1E22C78D;
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
    return 0x2E59D922;
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
    return 0xADF44EE3;
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
    return 0xC1E4A2B1;
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
    return 0x9B89F93A;
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
    return 0xDBD4FEED;
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
    return 0xF5DDD6E7;
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
    return 0x0A8EB2BE;
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
    return 0x9EC7863D;
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

export class UserFull extends TypeUserFull {
  blocked?: true;
  phoneCallsAvailable?: true;
  phoneCallsPrivate?: true;
  canPinMessage?: true;
  hasScheduled?: true;
  videoCallsAvailable?: true;
  voiceMessagesForbidden?: true;
  translationsDisabled?: true;
  storiesPinnedAvailable?: true;
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
  wallpaper?: TypeWallPaper;
  stories?: TypeUserStories;

  protected get [id]() {
    return 0x4FE1CC86;
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
      ["storiesPinnedAvailable", "true", "flags.26?true"],
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
      ["botBroadcastAdminRights", TypeChatAdminRights, "flags.18?ChatAdminRights"],
      ["premiumGifts", [TypePremiumGiftOption], "flags.19?Vector<PremiumGiftOption>"],
      ["wallpaper", TypeWallPaper, "flags.24?WallPaper"],
      ["stories", TypeUserStories, "flags.25?UserStories"],
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
      [this.storiesPinnedAvailable ?? null, "true", "flags.26?true"],
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
      [this.botGroupAdminRights ?? null, TypeChatAdminRights, "flags.17?ChatAdminRights"],
      [this.botBroadcastAdminRights ?? null, TypeChatAdminRights, "flags.18?ChatAdminRights"],
      [this.premiumGifts ?? null, [TypePremiumGiftOption], "flags.19?Vector<PremiumGiftOption>"],
      [this.wallpaper ?? null, TypeWallPaper, "flags.24?WallPaper"],
      [this.stories ?? null, TypeUserStories, "flags.25?UserStories"],
    ];
  }

  constructor(params: { blocked?: true; phoneCallsAvailable?: true; phoneCallsPrivate?: true; canPinMessage?: true; hasScheduled?: true; videoCallsAvailable?: true; voiceMessagesForbidden?: true; translationsDisabled?: true; storiesPinnedAvailable?: true; id: bigint; about?: string; settings: TypePeerSettings; personalPhoto?: TypePhoto; profilePhoto?: TypePhoto; fallbackPhoto?: TypePhoto; notifySettings: TypePeerNotifySettings; botInfo?: TypeBotInfo; pinnedMsgId?: number; commonChatsCount: number; folderId?: number; ttlPeriod?: number; themeEmoticon?: string; privateForwardName?: string; botGroupAdminRights?: TypeChatAdminRights; botBroadcastAdminRights?: TypeChatAdminRights; premiumGifts?: Array<TypePremiumGiftOption>; wallpaper?: TypeWallPaper; stories?: TypeUserStories }) {
    super();
    this.blocked = params.blocked;
    this.phoneCallsAvailable = params.phoneCallsAvailable;
    this.phoneCallsPrivate = params.phoneCallsPrivate;
    this.canPinMessage = params.canPinMessage;
    this.hasScheduled = params.hasScheduled;
    this.videoCallsAvailable = params.videoCallsAvailable;
    this.voiceMessagesForbidden = params.voiceMessagesForbidden;
    this.translationsDisabled = params.translationsDisabled;
    this.storiesPinnedAvailable = params.storiesPinnedAvailable;
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
    this.wallpaper = params.wallpaper;
    this.stories = params.stories;
  }
}

export class Contact extends TypeContact {
  userId: bigint;
  mutual: boolean;

  protected get [id]() {
    return 0x145ADE0B;
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

export class ImportedContact extends TypeImportedContact {
  userId: bigint;
  clientId: bigint;

  protected get [id]() {
    return 0xC13E3C50;
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

export class ContactStatus extends TypeContactStatus {
  userId: bigint;
  status: TypeUserStatus;

  protected get [id]() {
    return 0x16D9703B;
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
    return 0xB74BA9D2;
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

export class ContactsContacts extends TypeContactsContacts {
  contacts: Array<TypeContact>;
  savedCount: number;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xEAE87E42;
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

  constructor(params: { contacts: Array<TypeContact>; savedCount: number; users: Array<TypeUser> }) {
    super();
    this.contacts = params.contacts;
    this.savedCount = params.savedCount;
    this.users = params.users;
  }
}

export class ContactsImportedContacts extends TypeContactsImportedContacts {
  imported: Array<TypeImportedContact>;
  popularInvites: Array<TypePopularContact>;
  retryContacts: Array<bigint>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x77D01C3B;
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

  constructor(params: { imported: Array<TypeImportedContact>; popularInvites: Array<TypePopularContact>; retryContacts: Array<bigint>; users: Array<TypeUser> }) {
    super();
    this.imported = params.imported;
    this.popularInvites = params.popularInvites;
    this.retryContacts = params.retryContacts;
    this.users = params.users;
  }
}

export class ContactsBlocked extends TypeContactsBlocked {
  blocked: Array<TypePeerBlocked>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x0ADE1591;
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

  constructor(params: { blocked: Array<TypePeerBlocked>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0xE1664194;
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

  constructor(params: { count: number; blocked: Array<TypePeerBlocked>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.count = params.count;
    this.blocked = params.blocked;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesDialogs extends TypeMessagesDialogs {
  dialogs: Array<TypeDialog>;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x15BA6C40;
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

  constructor(params: { dialogs: Array<TypeDialog>; messages: Array<TypeMessage>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0x71E094F3;
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

  constructor(params: { count: number; dialogs: Array<TypeDialog>; messages: Array<TypeMessage>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0xF0E3E596;
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

export class MessagesMessages extends TypeMessagesMessages {
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x8C718E87;
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

  constructor(params: { messages: Array<TypeMessage>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0x3A54685E;
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

  constructor(params: { inexact?: true; count: number; nextRate?: number; offsetIdOffset?: number; messages: Array<TypeMessage>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0xC776BA4E;
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

  constructor(params: { inexact?: true; pts: number; count: number; offsetIdOffset?: number; messages: Array<TypeMessage>; topics: Array<TypeForumTopic>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0x74535F21;
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

export class MessagesChats extends TypeMessagesChats {
  chats: Array<TypeChat>;

  protected get [id]() {
    return 0x64FF9FD5;
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
    return 0x9CD81144;
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

export class MessagesChatFull extends TypeMessagesChatFull {
  fullChat: TypeChatFull;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xE5D7D19C;
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

  constructor(params: { fullChat: TypeChatFull; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.fullChat = params.fullChat;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesAffectedHistory extends TypeMessagesAffectedHistory {
  pts: number;
  ptsCount: number;
  offset: number;

  protected get [id]() {
    return 0xB45C69D1;
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
    return 0x57E2F66C;
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
    return 0x9609A51C;
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
    return 0x9FC00E65;
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
    return 0x56E9F0E4;
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
    return 0x9EDDF188;
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

export class InputMessagesFilterURL extends TypeMessagesFilter {
  protected get [id]() {
    return 0x7EF0DD87;
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
    return 0xFFC86587;
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
    return 0x50F5C392;
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
    return 0x3751B49E;
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
    return 0x3A20ECB8;
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
    return 0x80C99768;
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

  constructor(params?: { missed?: true }) {
    super();
    this.missed = params?.missed;
  }
}

export class InputMessagesFilterRoundVoice extends TypeMessagesFilter {
  protected get [id]() {
    return 0x7A7C17A4;
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
    return 0xB549DA53;
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
    return 0xC1F8E69A;
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
    return 0xE7026D0D;
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
    return 0xE062DB83;
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
    return 0x1BB00451;
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
    return 0x1F2B0AFD;
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
    return 0x4E90BFD6;
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
    return 0xA20DB0E5;
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

  constructor(params: { messages: Array<number>; pts: number; ptsCount: number }) {
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
    return 0xC01E857F;
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
    return 0x83487AF0;
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

  constructor(params: { chatId: bigint; fromId: TypePeer; action: TypeSendMessageAction }) {
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
    return 0xE5BDF8DE;
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
    return 0xA7848924;
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

  constructor(params: { userId: bigint; firstName: string; lastName: string; usernames: Array<TypeUsername> }) {
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
    return 0x12BCBD9A;
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
    return 0x1710F156;
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
    return 0xB4A2E88D;
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
    return 0x38FE25B7;
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
    return 0x3DDA5451;
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

  constructor(params: { chatId: bigint; userId: bigint; inviterId: bigint; date: number; version: number }) {
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
    return 0xE32F3D77;
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
    return 0x8E5E9873;
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
    return 0xBEC268EF;
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

  constructor(params: { peer: TypeNotifyPeer; notifySettings: TypePeerNotifySettings }) {
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
    return 0xEBE46819;
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

  constructor(params: { popup?: true; inboxDate?: number; type: string; message: string; media: TypeMessageMedia; entities: Array<TypeMessageEntity> }) {
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
    return 0xEE3B272A;
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
    return 0x05492A13;
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
    return 0x9C974FDF;
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

  constructor(params: { folderId?: number; peer: TypePeer; maxId: number; stillUnreadCount: number; pts: number; ptsCount: number }) {
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
    return 0x2F2F21BF;
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

  constructor(params: { peer: TypePeer; maxId: number; pts: number; ptsCount: number }) {
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
    return 0x7F891213;
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
    return 0x68C13933;
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

  constructor(params: { messages: Array<number>; pts: number; ptsCount: number }) {
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
    return 0x108D941F;
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
    return 0x635B4C09;
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
    return 0x62BA04D9;
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
    return 0x922E6E10;
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

  constructor(params: { folderId?: number; channelId: bigint; maxId: number; stillUnreadCount: number; pts: number }) {
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
    return 0xC32D5B12;
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

  constructor(params: { channelId: bigint; messages: Array<number>; pts: number; ptsCount: number }) {
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
    return 0xF226AC08;
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
    return 0xD7CA61A2;
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

  constructor(params: { chatId: bigint; userId: bigint; isAdmin: boolean; version: number }) {
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
    return 0x688A30AA;
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
    return 0x0BB2D201;
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
    return 0x31C24808;
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

  constructor(params?: { masks?: true; emojis?: true }) {
    super();
    this.masks = params?.masks;
    this.emojis = params?.emojis;
  }
}

export class UpdateSavedGifs extends TypeUpdate {
  protected get [id]() {
    return 0x9375341E;
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
    return 0x496F379C;
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
      [this.peerType ?? null, TypeInlineQueryPeerType, "flags.1?InlineQueryPeerType"],
      [this.offset, "string", "string"],
    ];
  }

  constructor(params: { queryId: bigint; userId: bigint; query: string; geo?: TypeGeoPoint; peerType?: TypeInlineQueryPeerType; offset: string }) {
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
    return 0x12F12A07;
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
      [this.msgId ?? null, TypeInputBotInlineMessageID, "flags.1?InputBotInlineMessageID"],
    ];
  }

  constructor(params: { userId: bigint; query: string; geo?: TypeGeoPoint; id: string; msgId?: TypeInputBotInlineMessageID }) {
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
    return 0x1B3F4DF7;
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
    return 0xB9CFC48D;
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

  constructor(params: { queryId: bigint; userId: bigint; peer: TypePeer; msgId: number; chatInstance: bigint; data?: Uint8Array; gameShortName?: string }) {
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
    return 0xE40370A3;
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
    return 0x691E9052;
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

  constructor(params: { queryId: bigint; userId: bigint; msgId: TypeInputBotInlineMessageID; chatInstance: bigint; data?: Uint8Array; gameShortName?: string }) {
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
    return 0xB75F99A9;
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
    return 0x1B49EC6D;
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

  constructor(params: { peer: TypePeer; topMsgId?: number; draft: TypeDraftMessage }) {
    super();
    this.peer = params.peer;
    this.topMsgId = params.topMsgId;
    this.draft = params.draft;
  }
}

export class UpdateReadFeaturedStickers extends TypeUpdate {
  protected get [id]() {
    return 0x571D2742;
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
    return 0x9A422C20;
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
    return 0xA229DD06;
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
    return 0x3354678F;
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
    return 0x2F2BA99F;
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

  constructor(params: { channelId: bigint; webpage: TypeWebPage; pts: number; ptsCount: number }) {
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
    return 0x6E6FE51C;
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

  constructor(params: { pinned?: true; folderId?: number; peer: TypeDialogPeer }) {
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
    return 0xFA0F3CA2;
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

  constructor(params?: { folderId?: number; order?: Array<TypeDialogPeer> }) {
    super();
    this.folderId = params?.folderId;
    this.order = params?.order;
  }
}

export class UpdateBotWebhookJSON extends TypeUpdate {
  data: TypeDataJSON;

  protected get [id]() {
    return 0x8317C0C3;
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
    return 0x9B9240A6;
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

  constructor(params: { queryId: bigint; data: TypeDataJSON; timeout: number }) {
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
    return 0xB5AEFD7D;
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

  constructor(params: { queryId: bigint; userId: bigint; payload: Uint8Array; shippingAddress: TypePostAddress }) {
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
    return 0x8CAA9A96;
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
      [this.info ?? null, TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      [this.shippingOptionId ?? null, "string", "flags.1?string"],
      [this.currency, "string", "string"],
      [this.totalAmount, "bigint", "long"],
    ];
  }

  constructor(params: { queryId: bigint; userId: bigint; payload: Uint8Array; info?: TypePaymentRequestedInfo; shippingOptionId?: string; currency: string; totalAmount: bigint }) {
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
    return 0xAB0F6B1E;
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
    return 0x56022F4D;
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
    return 0xE511996D;
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
    return 0xEA29055D;
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

  constructor(params: { channelId: bigint; topMsgId?: number; messages: Array<number> }) {
    super();
    this.channelId = params.channelId;
    this.topMsgId = params.topMsgId;
    this.messages = params.messages;
  }
}

export class UpdateContactsReset extends TypeUpdate {
  protected get [id]() {
    return 0x7084A7BE;
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
    return 0xB23FC698;
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
    return 0xE16459C3;
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
    return 0xACA1657B;
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

  constructor(params: { pollId: bigint; poll?: TypePoll; results: TypePollResults }) {
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
    return 0x54C01850;
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

  constructor(params: { peer: TypePeer; defaultBannedRights: TypeChatBannedRights; version: number }) {
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
    return 0x19360DC0;
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

  constructor(params: { folderPeers: Array<TypeFolderPeer>; pts: number; ptsCount: number }) {
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
    return 0x6A7E7366;
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
    return 0xB4AFCFB0;
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
    return 0x39A51DFB;
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
    return 0x90866CEE;
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
    return 0x8216FBA3;
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
    return 0x871FB939;
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
    return 0x564FE691;
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
  peer: TypePeer;
  options: Array<Uint8Array>;
  qts: number;

  protected get [id]() {
    return 0x24F40E77;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["pollId", "bigint", "long"],
      ["peer", TypePeer, "Peer"],
      ["options", [Uint8Array], "Vector<bytes>"],
      ["qts", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.pollId, "bigint", "long"],
      [this.peer, TypePeer, "Peer"],
      [this.options, [Uint8Array], "Vector<bytes>"],
      [this.qts, "number", "int"],
    ];
  }

  constructor(params: { pollId: bigint; peer: TypePeer; options: Array<Uint8Array>; qts: number }) {
    super();
    this.pollId = params.pollId;
    this.peer = params.peer;
    this.options = params.options;
    this.qts = params.qts;
  }
}

export class UpdateDialogFilter extends TypeUpdate {
  id: number;
  filter?: TypeDialogFilter;

  protected get [id]() {
    return 0x26FFDE7D;
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
    return 0xA5D72105;
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
    return 0x3504914F;
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
    return 0x2661BF09;
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
    return 0xD29A27F4;
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
    return 0xD6B19546;
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

  constructor(params: { channelId: bigint; topMsgId: number; readMaxId: number; broadcastId?: bigint; broadcastPost?: number }) {
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
    return 0x695C9E7C;
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

  constructor(params: { channelId: bigint; topMsgId: number; readMaxId: number }) {
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
    return 0x246A4B22;
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
    return 0x8C88C923;
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

  constructor(params: { channelId: bigint; topMsgId?: number; fromId: TypePeer; action: TypeSendMessageAction }) {
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
    return 0xED85EAB5;
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

  constructor(params: { pinned?: true; peer: TypePeer; messages: Array<number>; pts: number; ptsCount: number }) {
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
    return 0x5BB98608;
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

  constructor(params: { pinned?: true; channelId: bigint; messages: Array<number>; pts: number; ptsCount: number }) {
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
    return 0xF89A6A4E;
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
    return 0xF2EBDB4E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", TypeInputGroupCall, "InputGroupCall"],
      ["participants", [TypeGroupCallParticipant], "Vector<GroupCallParticipant>"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, TypeInputGroupCall, "InputGroupCall"],
      [this.participants, [TypeGroupCallParticipant], "Vector<GroupCallParticipant>"],
      [this.version, "number", "int"],
    ];
  }

  constructor(params: { call: TypeInputGroupCall; participants: Array<TypeGroupCallParticipant>; version: number }) {
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
    return 0x14B24500;
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
    return 0xBB9BB9A5;
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
    return 0xD087663A;
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
      [this.prevParticipant ?? null, TypeChatParticipant, "flags.0?ChatParticipant"],
      [this.newParticipant ?? null, TypeChatParticipant, "flags.1?ChatParticipant"],
      [this.invite ?? null, TypeExportedChatInvite, "flags.2?ExportedChatInvite"],
      [this.qts, "number", "int"],
    ];
  }

  constructor(params: { chatId: bigint; date: number; actorId: bigint; userId: bigint; prevParticipant?: TypeChatParticipant; newParticipant?: TypeChatParticipant; invite?: TypeExportedChatInvite; qts: number }) {
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
    return 0x985D3ABB;
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
      [this.prevParticipant ?? null, TypeChannelParticipant, "flags.0?ChannelParticipant"],
      [this.newParticipant ?? null, TypeChannelParticipant, "flags.1?ChannelParticipant"],
      [this.invite ?? null, TypeExportedChatInvite, "flags.2?ExportedChatInvite"],
      [this.qts, "number", "int"],
    ];
  }

  constructor(params: { viaChatlist?: true; channelId: bigint; date: number; actorId: bigint; userId: bigint; prevParticipant?: TypeChannelParticipant; newParticipant?: TypeChannelParticipant; invite?: TypeExportedChatInvite; qts: number }) {
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
    return 0xC4870A49;
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

  constructor(params: { userId: bigint; date: number; stopped: boolean; qts: number }) {
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
    return 0x0B783982;
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
    return 0x4D712F2E;
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

  constructor(params: { peer: TypePeer; botId: bigint; commands: Array<TypeBotCommand> }) {
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
    return 0x7063C3DB;
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

  constructor(params: { peer: TypePeer; requestsPending: number; recentRequesters: Array<bigint> }) {
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
    return 0x11DFA986;
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

  constructor(params: { peer: TypePeer; date: number; userId: bigint; about: string; invite: TypeExportedChatInvite; qts: number }) {
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
    return 0x5E1B3CB8;
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

  constructor(params: { peer: TypePeer; msgId: number; topMsgId?: number; reactions: TypeMessageReactions }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.topMsgId = params.topMsgId;
    this.reactions = params.reactions;
  }
}

export class UpdateAttachMenuBots extends TypeUpdate {
  protected get [id]() {
    return 0x17B7A20B;
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
    return 0x1592B79D;
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
    return 0x14B85813;
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
    return 0x74D8BE99;
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
    return 0x0084CD5A;
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

  constructor(params: { pending?: true; peer: TypePeer; msgId: number; transcriptionId: bigint; text: string }) {
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
    return 0xFB4C496C;
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
    return 0x30F443DB;
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
    return 0x6F7863F4;
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
    return 0x86FCCF85;
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
    return 0x5A73A98C;
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

  constructor(params: { peer: TypePeer; msgId: number; extendedMedia: TypeMessageExtendedMedia }) {
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
    return 0x192EFBE3;
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
    return 0xFE198602;
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
    return 0xEC05B097;
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
    return 0xCCF08AD6;
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

export class UpdateStory extends TypeUpdate {
  userId: bigint;
  story: TypeStoryItem;

  protected get [id]() {
    return 0x205A4133;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["story", TypeStoryItem, "StoryItem"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.story, TypeStoryItem, "StoryItem"],
    ];
  }

  constructor(params: { userId: bigint; story: TypeStoryItem }) {
    super();
    this.userId = params.userId;
    this.story = params.story;
  }
}

export class UpdateReadStories extends TypeUpdate {
  userId: bigint;
  maxId: number;

  protected get [id]() {
    return 0xFEB5345A;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["maxId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.maxId, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; maxId: number }) {
    super();
    this.userId = params.userId;
    this.maxId = params.maxId;
  }
}

export class UpdateStoryID extends TypeUpdate {
  id: number;
  randomId: bigint;

  protected get [id]() {
    return 0x1BF335B9;
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

export class UpdatesState extends TypeUpdatesState {
  pts: number;
  qts: number;
  date: number;
  seq: number;
  unreadCount: number;

  protected get [id]() {
    return 0xA56C2A3E;
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

  constructor(params: { pts: number; qts: number; date: number; seq: number; unreadCount: number }) {
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
    return 0x5D75A138;
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

export class UpdatesDifference extends TypeUpdatesDifference {
  newMessages: Array<TypeMessage>;
  newEncryptedMessages: Array<TypeEncryptedMessage>;
  otherUpdates: Array<TypeUpdate>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  state: TypeUpdatesState;

  protected get [id]() {
    return 0x00F49CA0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newMessages", [TypeMessage], "Vector<Message>"],
      ["newEncryptedMessages", [TypeEncryptedMessage], "Vector<EncryptedMessage>"],
      ["otherUpdates", [TypeUpdate], "Vector<Update>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["state", TypeUpdatesState, "updates.State"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newMessages, [TypeMessage], "Vector<Message>"],
      [this.newEncryptedMessages, [TypeEncryptedMessage], "Vector<EncryptedMessage>"],
      [this.otherUpdates, [TypeUpdate], "Vector<Update>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.state, TypeUpdatesState, "updates.State"],
    ];
  }

  constructor(params: { newMessages: Array<TypeMessage>; newEncryptedMessages: Array<TypeEncryptedMessage>; otherUpdates: Array<TypeUpdate>; chats: Array<TypeChat>; users: Array<TypeUser>; state: TypeUpdatesState }) {
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
    return 0xA8FB1981;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["newMessages", [TypeMessage], "Vector<Message>"],
      ["newEncryptedMessages", [TypeEncryptedMessage], "Vector<EncryptedMessage>"],
      ["otherUpdates", [TypeUpdate], "Vector<Update>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["intermediateState", TypeUpdatesState, "updates.State"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.newMessages, [TypeMessage], "Vector<Message>"],
      [this.newEncryptedMessages, [TypeEncryptedMessage], "Vector<EncryptedMessage>"],
      [this.otherUpdates, [TypeUpdate], "Vector<Update>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.intermediateState, TypeUpdatesState, "updates.State"],
    ];
  }

  constructor(params: { newMessages: Array<TypeMessage>; newEncryptedMessages: Array<TypeEncryptedMessage>; otherUpdates: Array<TypeUpdate>; chats: Array<TypeChat>; users: Array<TypeUser>; intermediateState: TypeUpdatesState }) {
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
    return 0x4AFE8F6D;
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
    return 0xE317AF7E;
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
    return 0x313BC7F8;
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
      [this.replyTo ?? null, TypeMessageReplyHeader, "flags.3?MessageReplyHeader"],
      [this.entities ?? null, [TypeMessageEntity], "flags.7?Vector<MessageEntity>"],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(params: { out?: true; mentioned?: true; mediaUnread?: true; silent?: true; id: number; userId: bigint; message: string; pts: number; ptsCount: number; date: number; fwdFrom?: TypeMessageFwdHeader; viaBotId?: bigint; replyTo?: TypeMessageReplyHeader; entities?: Array<TypeMessageEntity>; ttlPeriod?: number }) {
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
    return 0x4D6DEEA5;
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
      [this.replyTo ?? null, TypeMessageReplyHeader, "flags.3?MessageReplyHeader"],
      [this.entities ?? null, [TypeMessageEntity], "flags.7?Vector<MessageEntity>"],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(params: { out?: true; mentioned?: true; mediaUnread?: true; silent?: true; id: number; fromId: bigint; chatId: bigint; message: string; pts: number; ptsCount: number; date: number; fwdFrom?: TypeMessageFwdHeader; viaBotId?: bigint; replyTo?: TypeMessageReplyHeader; entities?: Array<TypeMessageEntity>; ttlPeriod?: number }) {
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
    return 0x78D4DEC1;
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
    return 0x725B04C3;
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

  constructor(params: { updates: Array<TypeUpdate>; users: Array<TypeUser>; chats: Array<TypeChat>; date: number; seqStart: number; seq: number }) {
    super();
    this.updates = params.updates;
    this.users = params.users;
    this.chats = params.chats;
    this.date = params.date;
    this.seqStart = params.seqStart;
    this.seq = params.seq;
  }
}

export class Updates extends TypeUpdates {
  updates: Array<TypeUpdate>;
  users: Array<TypeUser>;
  chats: Array<TypeChat>;
  date: number;
  seq: number;

  protected get [id]() {
    return 0x74AE4240;
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

  constructor(params: { updates: Array<TypeUpdate>; users: Array<TypeUser>; chats: Array<TypeChat>; date: number; seq: number }) {
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
    return 0x9015E101;
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
      [this.entities ?? null, [TypeMessageEntity], "flags.7?Vector<MessageEntity>"],
      [this.ttlPeriod ?? null, "number", "flags.25?int"],
    ];
  }

  constructor(params: { out?: true; id: number; pts: number; ptsCount: number; date: number; media?: TypeMessageMedia; entities?: Array<TypeMessageEntity>; ttlPeriod?: number }) {
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

export class PhotosPhotos extends TypePhotosPhotos {
  photos: Array<TypePhoto>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x8DCA6AA5;
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
    return 0x15051F54;
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

  constructor(params: { count: number; photos: Array<TypePhoto>; users: Array<TypeUser> }) {
    super();
    this.count = params.count;
    this.photos = params.photos;
    this.users = params.users;
  }
}

export class PhotosPhoto extends TypePhotosPhoto {
  photo: TypePhoto;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x20212CA8;
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

export class UploadFile extends TypeUploadFile {
  type: TypeStorageFileType;
  mtime: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0x096A18D5;
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

  constructor(params: { type: TypeStorageFileType; mtime: number; bytes: Uint8Array }) {
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
    return 0xF18CDA44;
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

  constructor(params: { dcId: number; fileToken: Uint8Array; encryptionKey: Uint8Array; encryptionIv: Uint8Array; fileHashes: Array<TypeFileHash> }) {
    super();
    this.dcId = params.dcId;
    this.fileToken = params.fileToken;
    this.encryptionKey = params.encryptionKey;
    this.encryptionIv = params.encryptionIv;
    this.fileHashes = params.fileHashes;
  }
}

export class DcOption extends TypeDcOption {
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
    return 0x18B7A10D;
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

  constructor(params: { ipv6?: true; mediaOnly?: true; tcpoOnly?: true; cdn?: true; static?: true; thisPortOnly?: true; id: number; ipAddress: string; port: number; secret?: Uint8Array }) {
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

export class Config extends TypeConfig {
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
    return 0xCC1A241E;
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

  constructor(params: { defaultP2pContacts?: true; preloadFeaturedStickers?: true; revokePmInbox?: true; blockedMode?: true; forceTryIpv6?: true; date: number; expires: number; testMode: boolean; thisDc: number; dcOptions: Array<TypeDcOption>; dcTxtDomainName: string; chatSizeMax: number; megagroupSizeMax: number; forwardedCountMax: number; onlineUpdatePeriodMs: number; offlineBlurTimeoutMs: number; offlineIdleTimeoutMs: number; onlineCloudTimeoutMs: number; notifyCloudDelayMs: number; notifyDefaultDelayMs: number; pushChatPeriodMs: number; pushChatLimit: number; editTimeLimit: number; revokeTimeLimit: number; revokePmTimeLimit: number; ratingEDecay: number; stickersRecentLimit: number; channelsReadMediaPeriod: number; tmpSessions?: number; callReceiveTimeoutMs: number; callRingTimeoutMs: number; callConnectTimeoutMs: number; callPacketTimeoutMs: number; meUrlPrefix: string; autoupdateUrlPrefix?: string; gifSearchUsername?: string; venueSearchUsername?: string; imgSearchUsername?: string; staticMapsProvider?: string; captionLengthMax: number; messageLengthMax: number; webfileDcId: number; suggestedLangCode?: string; langPackVersion?: number; baseLangPackVersion?: number; reactionsDefault?: TypeReaction; autologinToken?: string }) {
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

export class NearestDc extends TypeNearestDc {
  country: string;
  thisDc: number;
  nearestDc: number;

  protected get [id]() {
    return 0x8E1A1775;
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

export class HelpAppUpdate extends TypeHelpAppUpdate {
  canNotSkip?: true;
  id: number;
  version: string;
  text: string;
  entities: Array<TypeMessageEntity>;
  document?: TypeDocument;
  url?: string;
  sticker?: TypeDocument;

  protected get [id]() {
    return 0xCCBBCE30;
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

  constructor(params: { canNotSkip?: true; id: number; version: string; text: string; entities: Array<TypeMessageEntity>; document?: TypeDocument; url?: string; sticker?: TypeDocument }) {
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
    return 0xC45A6536;
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

export class HelpInviteText extends TypeHelpInviteText {
  message: string;

  protected get [id]() {
    return 0x18CB9F78;
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
    return 0xAB7EC0A0;
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
    return 0x66B25953;
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

  constructor(params: { id: number; accessHash: bigint; date: number; adminId: bigint; participantId: bigint }) {
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
    return 0x48F1D94C;
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

  constructor(params: { folderId?: number; id: number; accessHash: bigint; date: number; adminId: bigint; participantId: bigint; gA: Uint8Array }) {
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

export class EncryptedChat extends TypeEncryptedChat {
  id: number;
  accessHash: bigint;
  date: number;
  adminId: bigint;
  participantId: bigint;
  gAOrB: Uint8Array;
  keyFingerprint: bigint;

  protected get [id]() {
    return 0x61F0D4C7;
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

  constructor(params: { id: number; accessHash: bigint; date: number; adminId: bigint; participantId: bigint; gAOrB: Uint8Array; keyFingerprint: bigint }) {
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
    return 0x1E1C7C45;
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

export class InputEncryptedChat extends TypeInputEncryptedChat {
  chatId: number;
  accessHash: bigint;

  protected get [id]() {
    return 0xF141B5E1;
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
    return 0xC21F497E;
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

export class EncryptedFile extends TypeEncryptedFile {
  id: bigint;
  accessHash: bigint;
  size: bigint;
  dcId: number;
  keyFingerprint: number;

  protected get [id]() {
    return 0xA8008CD8;
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

  constructor(params: { id: bigint; accessHash: bigint; size: bigint; dcId: number; keyFingerprint: number }) {
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
    return 0x1837C364;
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
    return 0x64BD0306;
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

  constructor(params: { id: bigint; parts: number; md5Checksum: string; keyFingerprint: number }) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.md5Checksum = params.md5Checksum;
    this.keyFingerprint = params.keyFingerprint;
  }
}

export class InputEncryptedFile extends TypeInputEncryptedFile {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x5A17B5E5;
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
    return 0x2DC173C8;
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

export class EncryptedMessage extends TypeEncryptedMessage {
  randomId: bigint;
  chatId: number;
  date: number;
  bytes: Uint8Array;
  file: TypeEncryptedFile;

  protected get [id]() {
    return 0xED18C118;
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

  constructor(params: { randomId: bigint; chatId: number; date: number; bytes: Uint8Array; file: TypeEncryptedFile }) {
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
    return 0x23734B06;
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

  constructor(params: { randomId: bigint; chatId: number; date: number; bytes: Uint8Array }) {
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
    return 0xC0E24635;
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

export class MessagesDhConfig extends TypeMessagesDhConfig {
  g: number;
  p: Uint8Array;
  version: number;
  random: Uint8Array;

  protected get [id]() {
    return 0x2C221EDD;
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

  constructor(params: { g: number; p: Uint8Array; version: number; random: Uint8Array }) {
    super();
    this.g = params.g;
    this.p = params.p;
    this.version = params.version;
    this.random = params.random;
  }
}

export class MessagesSentEncryptedMessage extends TypeMessagesSentEncryptedMessage {
  date: number;

  protected get [id]() {
    return 0x560F8935;
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

export class MessagesSentEncryptedFile extends TypeMessagesSentEncryptedMessage {
  date: number;
  file: TypeEncryptedFile;

  protected get [id]() {
    return 0x9493FF32;
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
    return 0x72F0EAAE;
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

export class InputDocument extends TypeInputDocument {
  id: bigint;
  accessHash: bigint;
  fileReference: Uint8Array;

  protected get [id]() {
    return 0x1ABFB575;
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

  constructor(params: { id: bigint; accessHash: bigint; fileReference: Uint8Array }) {
    super();
    this.id = params.id;
    this.accessHash = params.accessHash;
    this.fileReference = params.fileReference;
  }
}

export class DocumentEmpty extends TypeDocument {
  id: bigint;

  protected get [id]() {
    return 0x36F8C871;
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

export class Document extends TypeDocument {
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
    return 0x8FD4C4D8;
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

  constructor(params: { id: bigint; accessHash: bigint; fileReference: Uint8Array; date: number; mimeType: string; size: bigint; thumbs?: Array<TypePhotoSize>; videoThumbs?: Array<TypeVideoSize>; dcId: number; attributes: Array<TypeDocumentAttribute> }) {
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

export class HelpSupport extends TypeHelpSupport {
  phoneNumber: string;
  user: TypeUser;

  protected get [id]() {
    return 0x17C6B5F6;
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

export class NotifyPeer extends TypeNotifyPeer {
  peer: TypePeer;

  protected get [id]() {
    return 0x9FD40BD8;
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
    return 0xB4C83B4C;
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
    return 0xC007CEC3;
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
    return 0xD612E8EF;
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
    return 0x226E6308;
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
    return 0x16BF744E;
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
    return 0xFD5EC8F5;
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
    return 0xA187D66F;
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
    return 0xE9763AEC;
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
    return 0xD52F73F7;
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
    return 0xF351D7AB;
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
    return 0xD1D34A26;
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
    return 0xAA0CD9E4;
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
    return 0x176F8BA1;
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
    return 0x628CBC6F;
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
    return 0xDD6A8F48;
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
    return 0x88F27FBC;
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
    return 0x243E1C66;
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
    return 0xD92C2285;
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
    return 0xDBDA9246;
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
    return 0xB05AC6B1;
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
    return 0x25972BCB;
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

  constructor(params: { emoticon: string; msgId: number; interaction: TypeDataJSON }) {
    super();
    this.emoticon = params.emoticon;
    this.msgId = params.msgId;
    this.interaction = params.interaction;
  }
}

export class SendMessageEmojiInteractionSeen extends TypeSendMessageAction {
  emoticon: string;

  protected get [id]() {
    return 0xB665902E;
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

export class ContactsFound extends TypeContactsFound {
  myResults: Array<TypePeer>;
  results: Array<TypePeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xB3134D9D;
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

  constructor(params: { myResults: Array<TypePeer>; results: Array<TypePeer>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.myResults = params.myResults;
    this.results = params.results;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class InputPrivacyKeyStatusTimestamp extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0x4F96CB18;
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
    return 0xBDFB0426;
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
    return 0xFABADC5F;
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
    return 0xDB9E70D2;
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
    return 0xA4DD4C08;
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
    return 0x5719BACC;
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
    return 0x0352DAFA;
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
    return 0xD1219BDD;
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
    return 0xAEE69D68;
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

export class InputPrivacyKeyAbout extends TypeInputPrivacyKey {
  protected get [id]() {
    return 0x3823CC40;
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
    return 0xBC2EAB30;
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
    return 0x500E6DFA;
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
    return 0x3D662B7B;
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
    return 0x39491CC8;
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
    return 0x69EC56A3;
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
    return 0x96151FED;
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
    return 0xD19AE46D;
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
    return 0x42FFD42B;
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
    return 0x0697F414;
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

export class PrivacyKeyAbout extends TypePrivacyKey {
  protected get [id]() {
    return 0xA486B761;
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
    return 0x0D09E07B;
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
    return 0x184B35CE;
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
    return 0x131CC67F;
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
    return 0x0BA52007;
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
    return 0xD66B66C9;
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

export class InputPrivacyValueAllowChatParticipants extends TypeInputPrivacyRule {
  chats: Array<bigint>;

  protected get [id]() {
    return 0x840649CF;
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

export class InputPrivacyValueDisallowChatParticipants extends TypeInputPrivacyRule {
  chats: Array<bigint>;

  protected get [id]() {
    return 0xE94F0F86;
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

export class InputPrivacyValueAllowCloseFriends extends TypeInputPrivacyRule {
  protected get [id]() {
    return 0x2F453E49;
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

export class PrivacyValueAllowContacts extends TypePrivacyRule {
  protected get [id]() {
    return 0xFFFE1BAC;
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
    return 0x65427B82;
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
    return 0xB8905FB2;
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
    return 0xF888FA1A;
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
    return 0x8B73E763;
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
    return 0xE4621141;
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
    return 0x6B134E8E;
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
    return 0x41C87565;
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

export class PrivacyValueAllowCloseFriends extends TypePrivacyRule {
  protected get [id]() {
    return 0xF7E8D89B;
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

export class AccountPrivacyRules extends TypeAccountPrivacyRules {
  rules: Array<TypePrivacyRule>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x50A04E45;
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

  constructor(params: { rules: Array<TypePrivacyRule>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.rules = params.rules;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class AccountDaysTTL extends TypeAccountDaysTTL {
  days: number;

  protected get [id]() {
    return 0xB8D0AFDF;
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
    return 0x6C37C15C;
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
    return 0x11B58939;
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
    return 0x6319D612;
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

  constructor(params: { mask?: true; alt: string; stickerset: TypeInputStickerSet; maskCoords?: TypeMaskCoords }) {
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
  nosound?: true;
  duration: number;
  w: number;
  h: number;
  preloadPrefixSize?: number;

  protected get [id]() {
    return 0xD38FF1C2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["roundMessage", "true", "flags.0?true"],
      ["supportsStreaming", "true", "flags.1?true"],
      ["nosound", "true", "flags.3?true"],
      ["duration", "number", "double"],
      ["w", "number", "int"],
      ["h", "number", "int"],
      ["preloadPrefixSize", "number", "flags.2?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.roundMessage ?? null, "true", "flags.0?true"],
      [this.supportsStreaming ?? null, "true", "flags.1?true"],
      [this.nosound ?? null, "true", "flags.3?true"],
      [this.duration, "number", "double"],
      [this.w, "number", "int"],
      [this.h, "number", "int"],
      [this.preloadPrefixSize ?? null, "number", "flags.2?int"],
    ];
  }

  constructor(params: { roundMessage?: true; supportsStreaming?: true; nosound?: true; duration: number; w: number; h: number; preloadPrefixSize?: number }) {
    super();
    this.roundMessage = params.roundMessage;
    this.supportsStreaming = params.supportsStreaming;
    this.nosound = params.nosound;
    this.duration = params.duration;
    this.w = params.w;
    this.h = params.h;
    this.preloadPrefixSize = params.preloadPrefixSize;
  }
}

export class DocumentAttributeAudio extends TypeDocumentAttribute {
  voice?: true;
  duration: number;
  title?: string;
  performer?: string;
  waveform?: Uint8Array;

  protected get [id]() {
    return 0x9852F9C6;
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

  constructor(params: { voice?: true; duration: number; title?: string; performer?: string; waveform?: Uint8Array }) {
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
    return 0x9801D2F7;
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
    return 0xFD149899;
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

  constructor(params: { free?: true; textColor?: true; alt: string; stickerset: TypeInputStickerSet }) {
    super();
    this.free = params.free;
    this.textColor = params.textColor;
    this.alt = params.alt;
    this.stickerset = params.stickerset;
  }
}

export class MessagesStickersNotModified extends TypeMessagesStickers {
  protected get [id]() {
    return 0xF1749A22;
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

export class MessagesStickers extends TypeMessagesStickers {
  hash: bigint;
  stickers: Array<TypeDocument>;

  protected get [id]() {
    return 0x30A6EC7E;
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

export class StickerPack extends TypeStickerPack {
  emoticon: string;
  documents: Array<bigint>;

  protected get [id]() {
    return 0x12B299D4;
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
    return 0xE86602C3;
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

export class MessagesAllStickers extends TypeMessagesAllStickers {
  hash: bigint;
  sets: Array<TypeStickerSet>;

  protected get [id]() {
    return 0xCDBBCEBB;
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

export class MessagesAffectedMessages extends TypeMessagesAffectedMessages {
  pts: number;
  ptsCount: number;

  protected get [id]() {
    return 0x84D19185;
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
    return 0xEB1477E8;
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
    return 0xC586DA1C;
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

export class WebPage extends TypeWebPage {
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
    return 0xE89C45B2;
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
      ["attributes", [TypeWebPageAttribute], "flags.12?Vector<WebPageAttribute>"],
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
      [this.attributes ?? null, [TypeWebPageAttribute], "flags.12?Vector<WebPageAttribute>"],
    ];
  }

  constructor(params: { id: bigint; url: string; displayUrl: string; hash: number; type?: string; siteName?: string; title?: string; description?: string; photo?: TypePhoto; embedUrl?: string; embedType?: string; embedWidth?: number; embedHeight?: number; duration?: number; author?: string; document?: TypeDocument; cachedPage?: TypePage; attributes?: Array<TypeWebPageAttribute> }) {
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
    return 0x7311CA11;
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

  constructor(params?: { cachedPageViews?: number }) {
    super();
    this.cachedPageViews = params?.cachedPageViews;
  }
}

export class Authorization extends TypeAuthorization {
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
    return 0xAD01D61D;
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

  constructor(params: { current?: true; officialApp?: true; passwordPending?: true; encryptedRequestsDisabled?: true; callRequestsDisabled?: true; hash: bigint; deviceModel: string; platform: string; systemVersion: string; apiId: number; appName: string; appVersion: string; dateCreated: number; dateActive: number; ip: string; country: string; region: string }) {
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

export class AccountAuthorizations extends TypeAccountAuthorizations {
  authorizationTtlDays: number;
  authorizations: Array<TypeAuthorization>;

  protected get [id]() {
    return 0x4BFF8EA0;
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

  constructor(params: { authorizationTtlDays: number; authorizations: Array<TypeAuthorization> }) {
    super();
    this.authorizationTtlDays = params.authorizationTtlDays;
    this.authorizations = params.authorizations;
  }
}

export class AccountPassword extends TypeAccountPassword {
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
    return 0x957B50FB;
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
      [this.currentAlgo ?? null, TypePasswordKdfAlgo, "flags.2?PasswordKdfAlgo"],
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

  constructor(params: { hasRecovery?: true; hasSecureValues?: true; hasPassword?: true; currentAlgo?: TypePasswordKdfAlgo; srpB?: Uint8Array; srpId?: bigint; hint?: string; emailUnconfirmedPattern?: string; newAlgo: TypePasswordKdfAlgo; newSecureAlgo: TypeSecurePasswordKdfAlgo; secureRandom: Uint8Array; pendingResetDate?: number; loginEmailPattern?: string }) {
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

export class AccountPasswordSettings extends TypeAccountPasswordSettings {
  email?: string;
  secureSettings?: TypeSecureSecretSettings;

  protected get [id]() {
    return 0x9A5C33E5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["email", "string", "flags.0?string"],
      ["secureSettings", TypeSecureSecretSettings, "flags.1?SecureSecretSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.email ?? null, "string", "flags.0?string"],
      [this.secureSettings ?? null, TypeSecureSecretSettings, "flags.1?SecureSecretSettings"],
    ];
  }

  constructor(params?: { email?: string; secureSettings?: TypeSecureSecretSettings }) {
    super();
    this.email = params?.email;
    this.secureSettings = params?.secureSettings;
  }
}

export class AccountPasswordInputSettings extends TypeAccountPasswordInputSettings {
  newAlgo?: TypePasswordKdfAlgo;
  newPasswordHash?: Uint8Array;
  hint?: string;
  email?: string;
  newSecureSettings?: TypeSecureSecretSettings;

  protected get [id]() {
    return 0xC23727C9;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["newAlgo", TypePasswordKdfAlgo, "flags.0?PasswordKdfAlgo"],
      ["newPasswordHash", Uint8Array, "flags.0?bytes"],
      ["hint", "string", "flags.0?string"],
      ["email", "string", "flags.1?string"],
      ["newSecureSettings", TypeSecureSecretSettings, "flags.2?SecureSecretSettings"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.newAlgo ?? null, TypePasswordKdfAlgo, "flags.0?PasswordKdfAlgo"],
      [this.newPasswordHash ?? null, Uint8Array, "flags.0?bytes"],
      [this.hint ?? null, "string", "flags.0?string"],
      [this.email ?? null, "string", "flags.1?string"],
      [this.newSecureSettings ?? null, TypeSecureSecretSettings, "flags.2?SecureSecretSettings"],
    ];
  }

  constructor(params?: { newAlgo?: TypePasswordKdfAlgo; newPasswordHash?: Uint8Array; hint?: string; email?: string; newSecureSettings?: TypeSecureSecretSettings }) {
    super();
    this.newAlgo = params?.newAlgo;
    this.newPasswordHash = params?.newPasswordHash;
    this.hint = params?.hint;
    this.email = params?.email;
    this.newSecureSettings = params?.newSecureSettings;
  }
}

export class AuthPasswordRecovery extends TypeAuthPasswordRecovery {
  emailPattern: string;

  protected get [id]() {
    return 0x137948A5;
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

export class ReceivedNotifyMessage extends TypeReceivedNotifyMessage {
  id: number;
  flags: number;

  protected get [id]() {
    return 0xA384B779;
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
    return 0x0AB4A819;
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

  constructor(params: { revoked?: true; permanent?: true; requestNeeded?: true; link: string; adminId: bigint; date: number; startDate?: number; expireDate?: number; usageLimit?: number; usage?: number; requested?: number; title?: string }) {
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
    return 0xED107AB7;
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
    return 0x5A686D7C;
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

export class ChatInvite extends TypeChatInvite {
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
    return 0x300C44C1;
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

  constructor(params: { channel?: true; broadcast?: true; public?: true; megagroup?: true; requestNeeded?: true; title: string; about?: string; photo: TypePhoto; participantsCount: number; participants?: Array<TypeUser> }) {
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
    return 0x61695CB0;
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
    return 0xFFB62B95;
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
    return 0x9DE7A269;
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
    return 0x861CC8A0;
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
    return 0x028703C8;
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
    return 0xE67F520E;
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

export class InputStickerSetAnimatedEmojiAnimations extends TypeInputStickerSet {
  protected get [id]() {
    return 0x0CDE3739;
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
    return 0xC88B3B02;
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
    return 0x04C4D4CE;
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
    return 0x29D0F5EE;
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
    return 0x44C1F8E9;
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

export class StickerSet extends TypeStickerSet {
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
    return 0x2DD14EDC;
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

  constructor(params: { archived?: true; official?: true; masks?: true; animated?: true; videos?: true; emojis?: true; installedDate?: number; id: bigint; accessHash: bigint; title: string; shortName: string; thumbs?: Array<TypePhotoSize>; thumbDcId?: number; thumbVersion?: number; thumbDocumentId?: bigint; count: number; hash: number }) {
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

export class MessagesStickerSet extends TypeMessagesStickerSet {
  set: TypeStickerSet;
  packs: Array<TypeStickerPack>;
  keywords: Array<TypeStickerKeyword>;
  documents: Array<TypeDocument>;

  protected get [id]() {
    return 0x6E153F16;
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

  constructor(params: { set: TypeStickerSet; packs: Array<TypeStickerPack>; keywords: Array<TypeStickerKeyword>; documents: Array<TypeDocument> }) {
    super();
    this.set = params.set;
    this.packs = params.packs;
    this.keywords = params.keywords;
    this.documents = params.documents;
  }
}

export class MessagesStickerSetNotModified extends TypeMessagesStickerSet {
  protected get [id]() {
    return 0xD3F924EB;
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

export class BotCommand extends TypeBotCommand {
  command: string;
  description: string;

  protected get [id]() {
    return 0xC27AC8C7;
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

export class BotInfo extends TypeBotInfo {
  userId?: bigint;
  description?: string;
  descriptionPhoto?: TypePhoto;
  descriptionDocument?: TypeDocument;
  commands?: Array<TypeBotCommand>;
  menuButton?: TypeBotMenuButton;

  protected get [id]() {
    return 0x8F300B57;
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

  constructor(params?: { userId?: bigint; description?: string; descriptionPhoto?: TypePhoto; descriptionDocument?: TypeDocument; commands?: Array<TypeBotCommand>; menuButton?: TypeBotMenuButton }) {
    super();
    this.userId = params?.userId;
    this.description = params?.description;
    this.descriptionPhoto = params?.descriptionPhoto;
    this.descriptionDocument = params?.descriptionDocument;
    this.commands = params?.commands;
    this.menuButton = params?.menuButton;
  }
}

export class KeyboardButton extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0xA2FA4880;
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

export class KeyboardButtonURL extends TypeKeyboardButton {
  text: string;
  url: string;

  protected get [id]() {
    return 0x258AFF05;
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
    return 0x35BBDB6B;
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

  constructor(params: { requiresPassword?: true; text: string; data: Uint8Array }) {
    super();
    this.requiresPassword = params.requiresPassword;
    this.text = params.text;
    this.data = params.data;
  }
}

export class KeyboardButtonRequestPhone extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0xB16A6C29;
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
    return 0xFC796B3F;
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
  peerTypes?: Array<TypeInlineQueryPeerType>;

  protected get [id]() {
    return 0x93B9FBB5;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["samePeer", "true", "flags.0?true"],
      ["text", "string", "string"],
      ["query", "string", "string"],
      ["peerTypes", [TypeInlineQueryPeerType], "flags.1?Vector<InlineQueryPeerType>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.samePeer ?? null, "true", "flags.0?true"],
      [this.text, "string", "string"],
      [this.query, "string", "string"],
      [this.peerTypes ?? null, [TypeInlineQueryPeerType], "flags.1?Vector<InlineQueryPeerType>"],
    ];
  }

  constructor(params: { samePeer?: true; text: string; query: string; peerTypes?: Array<TypeInlineQueryPeerType> }) {
    super();
    this.samePeer = params.samePeer;
    this.text = params.text;
    this.query = params.query;
    this.peerTypes = params.peerTypes;
  }
}

export class KeyboardButtonGame extends TypeKeyboardButton {
  text: string;

  protected get [id]() {
    return 0x50F41CCF;
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
    return 0xAFD93FBB;
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

export class KeyboardButtonURLAuth extends TypeKeyboardButton {
  text: string;
  fwdText?: string;
  url: string;
  buttonId: number;

  protected get [id]() {
    return 0x10B78D29;
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

  constructor(params: { text: string; fwdText?: string; url: string; buttonId: number }) {
    super();
    this.text = params.text;
    this.fwdText = params.fwdText;
    this.url = params.url;
    this.buttonId = params.buttonId;
  }
}

export class InputKeyboardButtonURLAuth extends TypeKeyboardButton {
  requestWriteAccess?: true;
  text: string;
  fwdText?: string;
  url: string;
  bot: TypeInputUser;

  protected get [id]() {
    return 0xD02E7FD4;
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

  constructor(params: { requestWriteAccess?: true; text: string; fwdText?: string; url: string; bot: TypeInputUser }) {
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
    return 0xBBC7515D;
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
    return 0xE988037B;
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
    return 0x308660C1;
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
    return 0xA0C0505C;
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
    return 0x0D0B468C;
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

  constructor(params: { text: string; buttonId: number; peerType: TypeRequestPeerType }) {
    super();
    this.text = params.text;
    this.buttonId = params.buttonId;
    this.peerType = params.peerType;
  }
}

export class KeyboardButtonRow extends TypeKeyboardButtonRow {
  buttons: Array<TypeKeyboardButton>;

  protected get [id]() {
    return 0x77608B83;
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
    return 0xA03E5B85;
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

  constructor(params?: { selective?: true }) {
    super();
    this.selective = params?.selective;
  }
}

export class ReplyKeyboardForceReply extends TypeReplyMarkup {
  singleUse?: true;
  selective?: true;
  placeholder?: string;

  protected get [id]() {
    return 0x86B40B08;
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

  constructor(params?: { singleUse?: true; selective?: true; placeholder?: string }) {
    super();
    this.singleUse = params?.singleUse;
    this.selective = params?.selective;
    this.placeholder = params?.placeholder;
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
    return 0x85DD99D1;
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

  constructor(params: { resize?: true; singleUse?: true; selective?: true; persistent?: true; rows: Array<TypeKeyboardButtonRow>; placeholder?: string }) {
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
    return 0x48A30254;
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
    return 0xBB92BA95;
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
    return 0xFA04579D;
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
    return 0x6F635B0D;
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
    return 0x6CEF8AC7;
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

export class MessageEntityURL extends TypeMessageEntity {
  offset: number;
  length: number;

  protected get [id]() {
    return 0x6ED02538;
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
    return 0x64E475C2;
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
    return 0xBD610BC9;
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
    return 0x826F8B60;
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
    return 0x28A20571;
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
    return 0x73924BE0;
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

export class MessageEntityTextURL extends TypeMessageEntity {
  offset: number;
  length: number;
  url: string;

  protected get [id]() {
    return 0x76A6D327;
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
    return 0xDC7B1140;
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
    return 0x208E68C9;
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

  constructor(params: { offset: number; length: number; userId: TypeInputUser }) {
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
    return 0x9B69E34B;
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
    return 0x4C4E743F;
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
    return 0x9C4E7E8B;
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
    return 0xBF0693D4;
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
    return 0x020DF5D0;
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
    return 0x761E6AF4;
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
    return 0x32CA960F;
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
    return 0xC8CF05F8;
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
    return 0xEE8C1E86;
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

export class InputChannel extends TypeInputChannel {
  channelId: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xF35AEC28;
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
    return 0x5B934F9D;
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

  constructor(params: { peer: TypeInputPeer; msgId: number; channelId: bigint }) {
    super();
    this.peer = params.peer;
    this.msgId = params.msgId;
    this.channelId = params.channelId;
  }
}

export class ContactsResolvedPeer extends TypeContactsResolvedPeer {
  peer: TypePeer;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x7F077AD9;
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

  constructor(params: { peer: TypePeer; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.peer = params.peer;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessageRange extends TypeMessageRange {
  minId: number;
  maxId: number;

  protected get [id]() {
    return 0x0AE30253;
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

export class UpdatesChannelDifferenceEmpty extends TypeUpdatesChannelDifference {
  final?: true;
  pts: number;
  timeout?: number;

  protected get [id]() {
    return 0x3E11AFFB;
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

export class UpdatesChannelDifferenceTooLong extends TypeUpdatesChannelDifference {
  final?: true;
  timeout?: number;
  dialog: TypeDialog;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xA4BCC6FE;
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

  constructor(params: { final?: true; timeout?: number; dialog: TypeDialog; messages: Array<TypeMessage>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.final = params.final;
    this.timeout = params.timeout;
    this.dialog = params.dialog;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class UpdatesChannelDifference extends TypeUpdatesChannelDifference {
  final?: true;
  pts: number;
  timeout?: number;
  newMessages: Array<TypeMessage>;
  otherUpdates: Array<TypeUpdate>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x2064674E;
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

  constructor(params: { final?: true; pts: number; timeout?: number; newMessages: Array<TypeMessage>; otherUpdates: Array<TypeUpdate>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0x94D42EE7;
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

export class ChannelMessagesFilter extends TypeChannelMessagesFilter {
  excludeNewMessages?: true;
  ranges: Array<TypeMessageRange>;

  protected get [id]() {
    return 0xCD77D957;
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

  constructor(params: { excludeNewMessages?: true; ranges: Array<TypeMessageRange> }) {
    super();
    this.excludeNewMessages = params.excludeNewMessages;
    this.ranges = params.ranges;
  }
}

export class ChannelParticipant extends TypeChannelParticipant {
  userId: bigint;
  date: number;

  protected get [id]() {
    return 0xC00C07C0;
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
    return 0x35A8BFA7;
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

  constructor(params: { viaRequest?: true; userId: bigint; inviterId: bigint; date: number }) {
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
    return 0x2FE601D3;
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

  constructor(params: { userId: bigint; adminRights: TypeChatAdminRights; rank?: string }) {
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
    return 0x34C3BB53;
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

  constructor(params: { canEdit?: true; self?: true; userId: bigint; inviterId?: bigint; promotedBy: bigint; date: number; adminRights: TypeChatAdminRights; rank?: string }) {
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
    return 0x6DF8014E;
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

  constructor(params: { left?: true; peer: TypePeer; kickedBy: bigint; date: number; bannedRights: TypeChatBannedRights }) {
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
    return 0x1B03F006;
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
    return 0xDE3F3C79;
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
    return 0xB4608969;
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
    return 0xA3B54985;
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
    return 0xB0D1865B;
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
    return 0x1427A5E1;
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
    return 0x0656AC4B;
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
    return 0xBB6AE88D;
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
    return 0xE04B5CEB;
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

  constructor(params?: { q?: string; topMsgId?: number }) {
    super();
    this.q = params?.q;
    this.topMsgId = params?.topMsgId;
  }
}

export class ChannelsChannelParticipants extends TypeChannelsChannelParticipants {
  count: number;
  participants: Array<TypeChannelParticipant>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x9AB0FEAF;
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
      [this.participants, [TypeChannelParticipant], "Vector<ChannelParticipant>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { count: number; participants: Array<TypeChannelParticipant>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.count = params.count;
    this.participants = params.participants;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChannelsChannelParticipantsNotModified extends TypeChannelsChannelParticipants {
  protected get [id]() {
    return 0xF0173FE9;
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

export class ChannelsChannelParticipant extends TypeChannelsChannelParticipant {
  participant: TypeChannelParticipant;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xDFB80317;
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

  constructor(params: { participant: TypeChannelParticipant; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.participant = params.participant;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class HelpTermsOfService extends TypeHelpTermsOfService {
  popup?: true;
  id: TypeDataJSON;
  text: string;
  entities: Array<TypeMessageEntity>;
  minAgeConfirm?: number;

  protected get [id]() {
    return 0x780A0310;
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

  constructor(params: { popup?: true; id: TypeDataJSON; text: string; entities: Array<TypeMessageEntity>; minAgeConfirm?: number }) {
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
    return 0xE8025CA2;
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

export class MessagesSavedGifs extends TypeMessagesSavedGifs {
  hash: bigint;
  gifs: Array<TypeDocument>;

  protected get [id]() {
    return 0x84A02A0D;
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
    return 0x3380C786;
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
      [this.entities ?? null, [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(params: { message: string; entities?: Array<TypeMessageEntity>; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x3DCD7A87;
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
      [this.entities ?? null, [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(params: { noWebpage?: true; message: string; entities?: Array<TypeMessageEntity>; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x96929A85;
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

  constructor(params: { geoPoint: TypeInputGeoPoint; heading?: number; period?: number; proximityNotificationRadius?: number; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x417BBF11;
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

  constructor(params: { geoPoint: TypeInputGeoPoint; title: string; address: string; provider: string; venueId: string; venueType: string; replyMarkup?: TypeReplyMarkup }) {
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

export class InputBotInlineMessageMediaContact extends TypeInputBotInlineMessage {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  vcard: string;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0xA6EDBFFD;
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

  constructor(params: { phoneNumber: string; firstName: string; lastName: string; vcard: string; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x4B425864;
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

  constructor(params?: { replyMarkup?: TypeReplyMarkup }) {
    super();
    this.replyMarkup = params?.replyMarkup;
  }
}

export class InputBotInlineMessageMediaInvoice extends TypeInputBotInlineMessage {
  title: string;
  description: string;
  photo?: TypeInputWebDocument;
  invoice: TypeInvoice;
  payload: Uint8Array;
  provider: string;
  providerData: TypeDataJSON;
  replyMarkup?: TypeReplyMarkup;

  protected get [id]() {
    return 0xD7E78225;
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

  constructor(params: { title: string; description: string; photo?: TypeInputWebDocument; invoice: TypeInvoice; payload: Uint8Array; provider: string; providerData: TypeDataJSON; replyMarkup?: TypeReplyMarkup }) {
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

export class InputBotInlineResult extends TypeInputBotInlineResult {
  id: string;
  type: string;
  title?: string;
  description?: string;
  url?: string;
  thumb?: TypeInputWebDocument;
  content?: TypeInputWebDocument;
  sendMessage: TypeInputBotInlineMessage;

  protected get [id]() {
    return 0x88BF9319;
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

  constructor(params: { id: string; type: string; title?: string; description?: string; url?: string; thumb?: TypeInputWebDocument; content?: TypeInputWebDocument; sendMessage: TypeInputBotInlineMessage }) {
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
    return 0xA8D864A7;
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

  constructor(params: { id: string; type: string; photo: TypeInputPhoto; sendMessage: TypeInputBotInlineMessage }) {
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
    return 0xFFF8FDC4;
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

  constructor(params: { id: string; type: string; title?: string; description?: string; document: TypeInputDocument; sendMessage: TypeInputBotInlineMessage }) {
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
    return 0x4FA417F2;
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

  constructor(params: { id: string; shortName: string; sendMessage: TypeInputBotInlineMessage }) {
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
    return 0x764CF810;
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
      [this.entities ?? null, [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(params: { message: string; entities?: Array<TypeMessageEntity>; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x8C7F65E2;
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
      [this.entities ?? null, [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.replyMarkup ?? null, TypeReplyMarkup, "flags.2?ReplyMarkup"],
    ];
  }

  constructor(params: { noWebpage?: true; message: string; entities?: Array<TypeMessageEntity>; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x051846FD;
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

  constructor(params: { geo: TypeGeoPoint; heading?: number; period?: number; proximityNotificationRadius?: number; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x8A86659C;
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

  constructor(params: { geo: TypeGeoPoint; title: string; address: string; provider: string; venueId: string; venueType: string; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x18D1CDC2;
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

  constructor(params: { phoneNumber: string; firstName: string; lastName: string; vcard: string; replyMarkup?: TypeReplyMarkup }) {
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
    return 0x354A9B09;
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

  constructor(params: { shippingAddressRequested?: true; test?: true; title: string; description: string; photo?: TypeWebDocument; currency: string; totalAmount: bigint; replyMarkup?: TypeReplyMarkup }) {
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

export class BotInlineResult extends TypeBotInlineResult {
  id: string;
  type: string;
  title?: string;
  description?: string;
  url?: string;
  thumb?: TypeWebDocument;
  content?: TypeWebDocument;
  sendMessage: TypeBotInlineMessage;

  protected get [id]() {
    return 0x11965F3A;
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

  constructor(params: { id: string; type: string; title?: string; description?: string; url?: string; thumb?: TypeWebDocument; content?: TypeWebDocument; sendMessage: TypeBotInlineMessage }) {
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
    return 0x17DB940B;
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

  constructor(params: { id: string; type: string; photo?: TypePhoto; document?: TypeDocument; title?: string; description?: string; sendMessage: TypeBotInlineMessage }) {
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

export class MessagesBotResults extends TypeMessagesBotResults {
  gallery?: true;
  queryId: bigint;
  nextOffset?: string;
  switchPm?: TypeInlineBotSwitchPM;
  switchWebview?: TypeInlineBotWebView;
  results: Array<TypeBotInlineResult>;
  cacheTime: number;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xE021F2F6;
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
      [this.switchPm ?? null, TypeInlineBotSwitchPM, "flags.2?InlineBotSwitchPM"],
      [this.switchWebview ?? null, TypeInlineBotWebView, "flags.3?InlineBotWebView"],
      [this.results, [TypeBotInlineResult], "Vector<BotInlineResult>"],
      [this.cacheTime, "number", "int"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { gallery?: true; queryId: bigint; nextOffset?: string; switchPm?: TypeInlineBotSwitchPM; switchWebview?: TypeInlineBotWebView; results: Array<TypeBotInlineResult>; cacheTime: number; users: Array<TypeUser> }) {
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

export class ExportedMessageLink extends TypeExportedMessageLink {
  link: string;
  html: string;

  protected get [id]() {
    return 0x5DAB1AF4;
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

export class MessageFwdHeader extends TypeMessageFwdHeader {
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
    return 0x5F777DCE;
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

  constructor(params: { imported?: true; fromId?: TypePeer; fromName?: string; date: number; channelPost?: number; postAuthor?: string; savedFromPeer?: TypePeer; savedFromMsgId?: number; psaType?: string }) {
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
    return 0x72A3158C;
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
    return 0x741CD3E3;
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
    return 0x226CCEFB;
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
    return 0xD61AD6EE;
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
    return 0x06ED998C;
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
    return 0x3DBB5986;
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
    return 0xC000BBA2;
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
    return 0x5353E5A7;
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
    return 0xAB03C6D9;
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
  resetAvailablePeriod?: number;
  resetPendingDate?: number;

  protected get [id]() {
    return 0xF450F59B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["appleSigninAllowed", "true", "flags.0?true"],
      ["googleSigninAllowed", "true", "flags.1?true"],
      ["emailPattern", "string", "string"],
      ["length", "number", "int"],
      ["resetAvailablePeriod", "number", "flags.3?int"],
      ["resetPendingDate", "number", "flags.4?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.appleSigninAllowed ?? null, "true", "flags.0?true"],
      [this.googleSigninAllowed ?? null, "true", "flags.1?true"],
      [this.emailPattern, "string", "string"],
      [this.length, "number", "int"],
      [this.resetAvailablePeriod ?? null, "number", "flags.3?int"],
      [this.resetPendingDate ?? null, "number", "flags.4?int"],
    ];
  }

  constructor(params: { appleSigninAllowed?: true; googleSigninAllowed?: true; emailPattern: string; length: number; resetAvailablePeriod?: number; resetPendingDate?: number }) {
    super();
    this.appleSigninAllowed = params.appleSigninAllowed;
    this.googleSigninAllowed = params.googleSigninAllowed;
    this.emailPattern = params.emailPattern;
    this.length = params.length;
    this.resetAvailablePeriod = params.resetAvailablePeriod;
    this.resetPendingDate = params.resetPendingDate;
  }
}

export class AuthSentCodeTypeSetUpEmailRequired extends TypeAuthSentCodeType {
  appleSigninAllowed?: true;
  googleSigninAllowed?: true;

  protected get [id]() {
    return 0xA5491DEA;
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

  constructor(params?: { appleSigninAllowed?: true; googleSigninAllowed?: true }) {
    super();
    this.appleSigninAllowed = params?.appleSigninAllowed;
    this.googleSigninAllowed = params?.googleSigninAllowed;
  }
}

export class AuthSentCodeTypeFragmentSms extends TypeAuthSentCodeType {
  url: string;
  length: number;

  protected get [id]() {
    return 0xD9565C39;
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
    return 0xE57B1432;
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

  constructor(params: { nonce?: Uint8Array; receipt?: string; pushTimeout?: number; length: number }) {
    super();
    this.nonce = params.nonce;
    this.receipt = params.receipt;
    this.pushTimeout = params.pushTimeout;
    this.length = params.length;
  }
}

export class MessagesBotCallbackAnswer extends TypeMessagesBotCallbackAnswer {
  alert?: true;
  hasUrl?: true;
  nativeUi?: true;
  message?: string;
  url?: string;
  cacheTime: number;

  protected get [id]() {
    return 0x36585EA4;
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

  constructor(params: { alert?: true; hasUrl?: true; nativeUi?: true; message?: string; url?: string; cacheTime: number }) {
    super();
    this.alert = params.alert;
    this.hasUrl = params.hasUrl;
    this.nativeUi = params.nativeUi;
    this.message = params.message;
    this.url = params.url;
    this.cacheTime = params.cacheTime;
  }
}

export class MessagesMessageEditData extends TypeMessagesMessageEditData {
  caption?: true;

  protected get [id]() {
    return 0x26B5DDE6;
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

  constructor(params?: { caption?: true }) {
    super();
    this.caption = params?.caption;
  }
}

export class InputBotInlineMessageID extends TypeInputBotInlineMessageID {
  dcId: number;
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x890C3D89;
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
    return 0xB6D915D7;
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

  constructor(params: { dcId: number; ownerId: bigint; id: number; accessHash: bigint }) {
    super();
    this.dcId = params.dcId;
    this.ownerId = params.ownerId;
    this.id = params.id;
    this.accessHash = params.accessHash;
  }
}

export class InlineBotSwitchPM extends TypeInlineBotSwitchPM {
  text: string;
  startParam: string;

  protected get [id]() {
    return 0x3C20629F;
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

export class MessagesPeerDialogs extends TypeMessagesPeerDialogs {
  dialogs: Array<TypeDialog>;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  state: TypeUpdatesState;

  protected get [id]() {
    return 0x3371C354;
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

  constructor(params: { dialogs: Array<TypeDialog>; messages: Array<TypeMessage>; chats: Array<TypeChat>; users: Array<TypeUser>; state: TypeUpdatesState }) {
    super();
    this.dialogs = params.dialogs;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
    this.state = params.state;
  }
}

export class TopPeer extends TypeTopPeer {
  peer: TypePeer;
  rating: number;

  protected get [id]() {
    return 0xEDCDC05B;
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
    return 0xAB661B5B;
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
    return 0x148677E2;
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
    return 0x0637B7ED;
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
    return 0xBD17A14A;
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
    return 0x161D9628;
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
    return 0x1E76A78C;
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
    return 0xA8406CA9;
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
    return 0xFBEEC0F0;
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

export class TopPeerCategoryPeers extends TypeTopPeerCategoryPeers {
  category: TypeTopPeerCategory;
  count: number;
  peers: Array<TypeTopPeer>;

  protected get [id]() {
    return 0xFB834291;
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

  constructor(params: { category: TypeTopPeerCategory; count: number; peers: Array<TypeTopPeer> }) {
    super();
    this.category = params.category;
    this.count = params.count;
    this.peers = params.peers;
  }
}

export class ContactsTopPeersNotModified extends TypeContactsTopPeers {
  protected get [id]() {
    return 0xDE266EF5;
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

export class ContactsTopPeers extends TypeContactsTopPeers {
  categories: Array<TypeTopPeerCategoryPeers>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x70B772A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["categories", [TypeTopPeerCategoryPeers], "Vector<TopPeerCategoryPeers>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.categories, [TypeTopPeerCategoryPeers], "Vector<TopPeerCategoryPeers>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { categories: Array<TypeTopPeerCategoryPeers>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.categories = params.categories;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ContactsTopPeersDisabled extends TypeContactsTopPeers {
  protected get [id]() {
    return 0xB52C939D;
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
    return 0x1B0C841A;
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

  constructor(params?: { date?: number }) {
    super();
    this.date = params?.date;
  }
}

export class DraftMessage extends TypeDraftMessage {
  noWebpage?: true;
  replyToMsgId?: number;
  message: string;
  entities?: Array<TypeMessageEntity>;
  date: number;

  protected get [id]() {
    return 0xFD8E711F;
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
      [this.entities ?? null, [TypeMessageEntity], "flags.3?Vector<MessageEntity>"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { noWebpage?: true; replyToMsgId?: number; message: string; entities?: Array<TypeMessageEntity>; date: number }) {
    super();
    this.noWebpage = params.noWebpage;
    this.replyToMsgId = params.replyToMsgId;
    this.message = params.message;
    this.entities = params.entities;
    this.date = params.date;
  }
}

export class MessagesFeaturedStickersNotModified extends TypeMessagesFeaturedStickers {
  count: number;

  protected get [id]() {
    return 0xC6DC0C66;
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

export class MessagesFeaturedStickers extends TypeMessagesFeaturedStickers {
  premium?: true;
  hash: bigint;
  count: number;
  sets: Array<TypeStickerSetCovered>;
  unread: Array<bigint>;

  protected get [id]() {
    return 0xBE382906;
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

  constructor(params: { premium?: true; hash: bigint; count: number; sets: Array<TypeStickerSetCovered>; unread: Array<bigint> }) {
    super();
    this.premium = params.premium;
    this.hash = params.hash;
    this.count = params.count;
    this.sets = params.sets;
    this.unread = params.unread;
  }
}

export class MessagesRecentStickersNotModified extends TypeMessagesRecentStickers {
  protected get [id]() {
    return 0x0B17F890;
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

export class MessagesRecentStickers extends TypeMessagesRecentStickers {
  hash: bigint;
  packs: Array<TypeStickerPack>;
  stickers: Array<TypeDocument>;
  dates: Array<number>;

  protected get [id]() {
    return 0x88D37C56;
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

  constructor(params: { hash: bigint; packs: Array<TypeStickerPack>; stickers: Array<TypeDocument>; dates: Array<number> }) {
    super();
    this.hash = params.hash;
    this.packs = params.packs;
    this.stickers = params.stickers;
    this.dates = params.dates;
  }
}

export class MessagesArchivedStickers extends TypeMessagesArchivedStickers {
  count: number;
  sets: Array<TypeStickerSetCovered>;

  protected get [id]() {
    return 0x4FCBA9C8;
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

export class MessagesStickerSetInstallResultSuccess extends TypeMessagesStickerSetInstallResult {
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

export class MessagesStickerSetInstallResultArchive extends TypeMessagesStickerSetInstallResult {
  sets: Array<TypeStickerSetCovered>;

  protected get [id]() {
    return 0x35E410A8;
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

export class StickerSetCovered extends TypeStickerSetCovered {
  set: TypeStickerSet;
  cover: TypeDocument;

  protected get [id]() {
    return 0x6410A5D2;
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
    return 0x3407E51B;
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
    return 0x40D13C0E;
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

  constructor(params: { set: TypeStickerSet; packs: Array<TypeStickerPack>; keywords: Array<TypeStickerKeyword>; documents: Array<TypeDocument> }) {
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
    return 0x77B15D1C;
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

export class MaskCoords extends TypeMaskCoords {
  n: number;
  x: number;
  y: number;
  zoom: number;

  protected get [id]() {
    return 0xAED6DBB2;
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
    return 0x4A992157;
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
    return 0x0438865B;
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

export class Game extends TypeGame {
  id: bigint;
  accessHash: bigint;
  shortName: string;
  title: string;
  description: string;
  photo: TypePhoto;
  document?: TypeDocument;

  protected get [id]() {
    return 0xBDF9653B;
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

  constructor(params: { id: bigint; accessHash: bigint; shortName: string; title: string; description: string; photo: TypePhoto; document?: TypeDocument }) {
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
    return 0x032C3E77;
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
    return 0xC331E80A;
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

export class HighScore extends TypeHighScore {
  pos: number;
  userId: bigint;
  score: number;

  protected get [id]() {
    return 0x73A379EB;
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

export class MessagesHighScores extends TypeMessagesHighScores {
  scores: Array<TypeHighScore>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x9A3BFD99;
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

  constructor(params: { scores: Array<TypeHighScore>; users: Array<TypeUser> }) {
    super();
    this.scores = params.scores;
    this.users = params.users;
  }
}

export class TextEmpty extends TypeRichText {
  protected get [id]() {
    return 0xDC3D824F;
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
    return 0x744694E0;
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
    return 0x6724ABC4;
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
    return 0xD912A59C;
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
    return 0xC12622C4;
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
    return 0x9BF8BB95;
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
    return 0x6C3F19B9;
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

export class TextURL extends TypeRichText {
  text: TypeRichText;
  url: string;
  webpageId: bigint;

  protected get [id]() {
    return 0x3C2884C1;
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
    return 0xDE5A0DD6;
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
    return 0x7E6260D7;
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
    return 0xED6A8504;
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
    return 0xC7FB5E01;
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
    return 0x034B8621;
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
    return 0x1CCB966A;
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
    return 0x081CCF4F;
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
    return 0x13567E8A;
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
    return 0x70ABC3FD;
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
    return 0x8FFA9A1F;
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
    return 0xBAAFE5E0;
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
    return 0xBFD064EC;
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
    return 0xF12BB6E1;
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
    return 0x467A0766;
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
    return 0xC070D93E;
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
    return 0xDB20B188;
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
    return 0xCE0D37B0;
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
    return 0xE4E88011;
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
    return 0x263D7C26;
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
    return 0x4F4456D3;
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
    return 0x1759C560;
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

  constructor(params: { photoId: bigint; caption: TypePageCaption; url?: string; webpageId?: bigint }) {
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
    return 0x7C8FE7B6;
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

  constructor(params: { autoplay?: true; loop?: true; videoId: bigint; caption: TypePageCaption }) {
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
    return 0x39F23300;
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
    return 0xA8718DC5;
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

  constructor(params: { fullWidth?: true; allowScrolling?: true; url?: string; html?: string; posterPhotoId?: bigint; w?: number; h?: number; caption: TypePageCaption }) {
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
    return 0xF259A80B;
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

  constructor(params: { url: string; webpageId: bigint; authorPhotoId: bigint; author: string; date: number; blocks: Array<TypePageBlock>; caption: TypePageCaption }) {
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
    return 0x65A0FA4D;
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

  constructor(params: { items: Array<TypePageBlock>; caption: TypePageCaption }) {
    super();
    this.items = params.items;
    this.caption = params.caption;
  }
}

export class PageBlockSlideshow extends TypePageBlock {
  items: Array<TypePageBlock>;
  caption: TypePageCaption;

  protected get [id]() {
    return 0x031F9590;
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

  constructor(params: { items: Array<TypePageBlock>; caption: TypePageCaption }) {
    super();
    this.items = params.items;
    this.caption = params.caption;
  }
}

export class PageBlockChannel extends TypePageBlock {
  channel: TypeChat;

  protected get [id]() {
    return 0xEF1751B5;
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
    return 0x804361EA;
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
    return 0x1E148390;
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
    return 0xBF4DEA82;
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

  constructor(params: { bordered?: true; striped?: true; title: TypeRichText; rows: Array<TypePageTableRow> }) {
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
    return 0x9A8AE1E1;
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
    return 0x76768BED;
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

  constructor(params: { open?: true; blocks: Array<TypePageBlock>; title: TypeRichText }) {
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
    return 0x16115A96;
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

  constructor(params: { title: TypeRichText; articles: Array<TypePageRelatedArticle> }) {
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
    return 0xA44F3EF6;
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

  constructor(params: { geo: TypeGeoPoint; zoom: number; w: number; h: number; caption: TypePageCaption }) {
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
    return 0x85E42301;
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

export class PhoneCallDiscardReasonDisconnect extends TypePhoneCallDiscardReason {
  protected get [id]() {
    return 0xE095C1A0;
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
    return 0x57ADC690;
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
    return 0xFAF7E8C9;
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

export class DataJSON extends TypeDataJSON {
  data: string;

  protected get [id]() {
    return 0x7D748D04;
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

export class LabeledPrice extends TypeLabeledPrice {
  label: string;
  amount: bigint;

  protected get [id]() {
    return 0xCB296BF8;
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

export class Invoice extends TypeInvoice {
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
    return 0x3E85A91B;
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

  constructor(params: { test?: true; nameRequested?: true; phoneRequested?: true; emailRequested?: true; shippingAddressRequested?: true; flexible?: true; phoneToProvider?: true; emailToProvider?: true; recurring?: true; currency: string; prices: Array<TypeLabeledPrice>; maxTipAmount?: bigint; suggestedTipAmounts?: Array<bigint>; recurringTermsUrl?: string }) {
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

export class PaymentCharge extends TypePaymentCharge {
  id: string;
  providerChargeId: string;

  protected get [id]() {
    return 0xEA02C27E;
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

export class PostAddress extends TypePostAddress {
  streetLine1: string;
  streetLine2: string;
  city: string;
  state: string;
  countryIso2: string;
  postCode: string;

  protected get [id]() {
    return 0x1E8CAAEB;
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

  constructor(params: { streetLine1: string; streetLine2: string; city: string; state: string; countryIso2: string; postCode: string }) {
    super();
    this.streetLine1 = params.streetLine1;
    this.streetLine2 = params.streetLine2;
    this.city = params.city;
    this.state = params.state;
    this.countryIso2 = params.countryIso2;
    this.postCode = params.postCode;
  }
}

export class PaymentRequestedInfo extends TypePaymentRequestedInfo {
  name?: string;
  phone?: string;
  email?: string;
  shippingAddress?: TypePostAddress;

  protected get [id]() {
    return 0x909C3F94;
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

  constructor(params?: { name?: string; phone?: string; email?: string; shippingAddress?: TypePostAddress }) {
    super();
    this.name = params?.name;
    this.phone = params?.phone;
    this.email = params?.email;
    this.shippingAddress = params?.shippingAddress;
  }
}

export class PaymentSavedCredentialsCard extends TypePaymentSavedCredentials {
  id: string;
  title: string;

  protected get [id]() {
    return 0xCDC27A1F;
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

export class WebDocument extends TypeWebDocument {
  url: string;
  accessHash: bigint;
  size: number;
  mimeType: string;
  attributes: Array<TypeDocumentAttribute>;

  protected get [id]() {
    return 0x1C570ED1;
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

  constructor(params: { url: string; accessHash: bigint; size: number; mimeType: string; attributes: Array<TypeDocumentAttribute> }) {
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
    return 0xF9C8BCC6;
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

  constructor(params: { url: string; size: number; mimeType: string; attributes: Array<TypeDocumentAttribute> }) {
    super();
    this.url = params.url;
    this.size = params.size;
    this.mimeType = params.mimeType;
    this.attributes = params.attributes;
  }
}

export class InputWebDocument extends TypeInputWebDocument {
  url: string;
  size: number;
  mimeType: string;
  attributes: Array<TypeDocumentAttribute>;

  protected get [id]() {
    return 0x9BED434D;
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

  constructor(params: { url: string; size: number; mimeType: string; attributes: Array<TypeDocumentAttribute> }) {
    super();
    this.url = params.url;
    this.size = params.size;
    this.mimeType = params.mimeType;
    this.attributes = params.attributes;
  }
}

export class InputWebFileLocation extends TypeInputWebFileLocation {
  url: string;
  accessHash: bigint;

  protected get [id]() {
    return 0xC239D686;
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
    return 0x9F2221C9;
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

  constructor(params: { geoPoint: TypeInputGeoPoint; accessHash: bigint; w: number; h: number; zoom: number; scale: number }) {
    super();
    this.geoPoint = params.geoPoint;
    this.accessHash = params.accessHash;
    this.w = params.w;
    this.h = params.h;
    this.zoom = params.zoom;
    this.scale = params.scale;
  }
}

export class InputWebFileAudioAlbumThumbLocation extends TypeInputWebFileLocation {
  small?: true;
  document?: TypeInputDocument;
  title?: string;
  performer?: string;

  protected get [id]() {
    return 0xF46FE924;
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

  constructor(params?: { small?: true; document?: TypeInputDocument; title?: string; performer?: string }) {
    super();
    this.small = params?.small;
    this.document = params?.document;
    this.title = params?.title;
    this.performer = params?.performer;
  }
}

export class UploadWebFile extends TypeUploadWebFile {
  size: number;
  mimeType: string;
  fileType: TypeStorageFileType;
  mtime: number;
  bytes: Uint8Array;

  protected get [id]() {
    return 0x21E753BC;
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

  constructor(params: { size: number; mimeType: string; fileType: TypeStorageFileType; mtime: number; bytes: Uint8Array }) {
    super();
    this.size = params.size;
    this.mimeType = params.mimeType;
    this.fileType = params.fileType;
    this.mtime = params.mtime;
    this.bytes = params.bytes;
  }
}

export class PaymentsPaymentForm extends TypePaymentsPaymentForm {
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
    return 0xA0058751;
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
      ["additionalMethods", [TypePaymentFormMethod], "flags.6?Vector<PaymentFormMethod>"],
      ["savedInfo", TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      ["savedCredentials", [TypePaymentSavedCredentials], "flags.1?Vector<PaymentSavedCredentials>"],
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
      [this.additionalMethods ?? null, [TypePaymentFormMethod], "flags.6?Vector<PaymentFormMethod>"],
      [this.savedInfo ?? null, TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      [this.savedCredentials ?? null, [TypePaymentSavedCredentials], "flags.1?Vector<PaymentSavedCredentials>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { canSaveCredentials?: true; passwordMissing?: true; formId: bigint; botId: bigint; title: string; description: string; photo?: TypeWebDocument; invoice: TypeInvoice; providerId: bigint; url: string; nativeProvider?: string; nativeParams?: TypeDataJSON; additionalMethods?: Array<TypePaymentFormMethod>; savedInfo?: TypePaymentRequestedInfo; savedCredentials?: Array<TypePaymentSavedCredentials>; users: Array<TypeUser> }) {
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

export class PaymentsValidatedRequestedInfo extends TypePaymentsValidatedRequestedInfo {
  id?: string;
  shippingOptions?: Array<TypeShippingOption>;

  protected get [id]() {
    return 0xD1451883;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["id", "string", "flags.0?string"],
      ["shippingOptions", [TypeShippingOption], "flags.1?Vector<ShippingOption>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.id ?? null, "string", "flags.0?string"],
      [this.shippingOptions ?? null, [TypeShippingOption], "flags.1?Vector<ShippingOption>"],
    ];
  }

  constructor(params?: { id?: string; shippingOptions?: Array<TypeShippingOption> }) {
    super();
    this.id = params?.id;
    this.shippingOptions = params?.shippingOptions;
  }
}

export class PaymentsPaymentResult extends TypePaymentsPaymentResult {
  updates: TypeUpdates;

  protected get [id]() {
    return 0x4E5F810D;
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

export class PaymentsPaymentVerificationNeeded extends TypePaymentsPaymentResult {
  url: string;

  protected get [id]() {
    return 0xD8411139;
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

export class PaymentsPaymentReceipt extends TypePaymentsPaymentReceipt {
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
    return 0x70C4FE03;
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
      [this.info ?? null, TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
      [this.shipping ?? null, TypeShippingOption, "flags.1?ShippingOption"],
      [this.tipAmount ?? null, "bigint", "flags.3?long"],
      [this.currency, "string", "string"],
      [this.totalAmount, "bigint", "long"],
      [this.credentialsTitle, "string", "string"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { date: number; botId: bigint; providerId: bigint; title: string; description: string; photo?: TypeWebDocument; invoice: TypeInvoice; info?: TypePaymentRequestedInfo; shipping?: TypeShippingOption; tipAmount?: bigint; currency: string; totalAmount: bigint; credentialsTitle: string; users: Array<TypeUser> }) {
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

export class PaymentsSavedInfo extends TypePaymentsSavedInfo {
  hasSavedCredentials?: true;
  savedInfo?: TypePaymentRequestedInfo;

  protected get [id]() {
    return 0xFB8FE43C;
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
      [this.savedInfo ?? null, TypePaymentRequestedInfo, "flags.0?PaymentRequestedInfo"],
    ];
  }

  constructor(params?: { hasSavedCredentials?: true; savedInfo?: TypePaymentRequestedInfo }) {
    super();
    this.hasSavedCredentials = params?.hasSavedCredentials;
    this.savedInfo = params?.savedInfo;
  }
}

export class InputPaymentCredentialsSaved extends TypeInputPaymentCredentials {
  id: string;
  tmpPassword: Uint8Array;

  protected get [id]() {
    return 0xC10EB2CF;
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

export class InputPaymentCredentials extends TypeInputPaymentCredentials {
  save?: true;
  data: TypeDataJSON;

  protected get [id]() {
    return 0x3417D728;
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

export class InputPaymentCredentialsApplePay extends TypeInputPaymentCredentials {
  paymentData: TypeDataJSON;

  protected get [id]() {
    return 0x0AA1C39F;
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

export class InputPaymentCredentialsGooglePay extends TypeInputPaymentCredentials {
  paymentToken: TypeDataJSON;

  protected get [id]() {
    return 0x8AC32801;
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

export class AccountTmpPassword extends TypeAccountTmpPassword {
  tmpPassword: Uint8Array;
  validUntil: number;

  protected get [id]() {
    return 0xDB64FD34;
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

export class ShippingOption extends TypeShippingOption {
  id: string;
  title: string;
  prices: Array<TypeLabeledPrice>;

  protected get [id]() {
    return 0xB6213CDF;
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

  constructor(params: { id: string; title: string; prices: Array<TypeLabeledPrice> }) {
    super();
    this.id = params.id;
    this.title = params.title;
    this.prices = params.prices;
  }
}

export class InputStickerSetItem extends TypeInputStickerSetItem {
  document: TypeInputDocument;
  emoji: string;
  maskCoords?: TypeMaskCoords;
  keywords?: string;

  protected get [id]() {
    return 0x32DA9E9C;
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

  constructor(params: { document: TypeInputDocument; emoji: string; maskCoords?: TypeMaskCoords; keywords?: string }) {
    super();
    this.document = params.document;
    this.emoji = params.emoji;
    this.maskCoords = params.maskCoords;
    this.keywords = params.keywords;
  }
}

export class InputPhoneCall extends TypeInputPhoneCall {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x1E36FDED;
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
    return 0x5366C915;
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
    return 0xC5226F17;
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

  constructor(params: { video?: true; id: bigint; accessHash: bigint; date: number; adminId: bigint; participantId: bigint; protocol: TypePhoneCallProtocol; receiveDate?: number }) {
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
    return 0x14B0ED0C;
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

  constructor(params: { video?: true; id: bigint; accessHash: bigint; date: number; adminId: bigint; participantId: bigint; gAHash: Uint8Array; protocol: TypePhoneCallProtocol }) {
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
    return 0x3660C311;
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

  constructor(params: { video?: true; id: bigint; accessHash: bigint; date: number; adminId: bigint; participantId: bigint; gB: Uint8Array; protocol: TypePhoneCallProtocol }) {
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

export class PhoneCall extends TypePhoneCall {
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
    return 0x967F7C67;
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

  constructor(params: { p2pAllowed?: true; video?: true; id: bigint; accessHash: bigint; date: number; adminId: bigint; participantId: bigint; gAOrB: Uint8Array; keyFingerprint: bigint; protocol: TypePhoneCallProtocol; connections: Array<TypePhoneConnection>; startDate: number }) {
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
    return 0x50CA4DE1;
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
      [this.reason ?? null, TypePhoneCallDiscardReason, "flags.0?PhoneCallDiscardReason"],
      [this.duration ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { needRating?: true; needDebug?: true; video?: true; id: bigint; reason?: TypePhoneCallDiscardReason; duration?: number }) {
    super();
    this.needRating = params.needRating;
    this.needDebug = params.needDebug;
    this.video = params.video;
    this.id = params.id;
    this.reason = params.reason;
    this.duration = params.duration;
  }
}

export class PhoneConnection extends TypePhoneConnection {
  tcp?: true;
  id: bigint;
  ip: string;
  ipv6: string;
  port: number;
  peerTag: Uint8Array;

  protected get [id]() {
    return 0x9CC123C7;
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

  constructor(params: { tcp?: true; id: bigint; ip: string; ipv6: string; port: number; peerTag: Uint8Array }) {
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
    return 0x635FE375;
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

  constructor(params: { turn?: true; stun?: true; id: bigint; ip: string; ipv6: string; port: number; username: string; password: string }) {
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

export class PhoneCallProtocol extends TypePhoneCallProtocol {
  udpP2p?: true;
  udpReflector?: true;
  minLayer: number;
  maxLayer: number;
  libraryVersions: Array<string>;

  protected get [id]() {
    return 0xFC878FC8;
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

  constructor(params: { udpP2p?: true; udpReflector?: true; minLayer: number; maxLayer: number; libraryVersions: Array<string> }) {
    super();
    this.udpP2p = params.udpP2p;
    this.udpReflector = params.udpReflector;
    this.minLayer = params.minLayer;
    this.maxLayer = params.maxLayer;
    this.libraryVersions = params.libraryVersions;
  }
}

export class PhonePhoneCall extends TypePhonePhoneCall {
  phoneCall: TypePhoneCall;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xEC82E140;
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
    return 0xEEA8E46E;
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

export class UploadCdnFile extends TypeUploadCdnFile {
  bytes: Uint8Array;

  protected get [id]() {
    return 0xA99FCA4F;
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

export class CdnPublicKey extends TypeCdnPublicKey {
  dcId: number;
  publicKey: string;

  protected get [id]() {
    return 0xC982EABA;
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

export class CdnConfig extends TypeCdnConfig {
  publicKeys: Array<TypeCdnPublicKey>;

  protected get [id]() {
    return 0x5725E40A;
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

export class LangPackString extends TypeLangPackString {
  key: string;
  value: string;

  protected get [id]() {
    return 0xCAD181F6;
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
    return 0x6C47AC9F;
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

  constructor(params: { key: string; zeroValue?: string; oneValue?: string; twoValue?: string; fewValue?: string; manyValue?: string; otherValue: string }) {
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
    return 0x2979EEB2;
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

export class LangPackDifference extends TypeLangPackDifference {
  langCode: string;
  fromVersion: number;
  version: number;
  strings: Array<TypeLangPackString>;

  protected get [id]() {
    return 0xF385C1F6;
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

  constructor(params: { langCode: string; fromVersion: number; version: number; strings: Array<TypeLangPackString> }) {
    super();
    this.langCode = params.langCode;
    this.fromVersion = params.fromVersion;
    this.version = params.version;
    this.strings = params.strings;
  }
}

export class LangPackLanguage extends TypeLangPackLanguage {
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
    return 0xEECA5CE3;
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

  constructor(params: { official?: true; rtl?: true; beta?: true; name: string; nativeName: string; langCode: string; baseLangCode?: string; pluralCode: string; stringsCount: number; translatedCount: number; translationsUrl: string }) {
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

export class ChannelAdminLogEventActionChangeTitle extends TypeChannelAdminLogEventAction {
  prevValue: string;
  newValue: string;

  protected get [id]() {
    return 0xE6DFB825;
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

export class ChannelAdminLogEventActionChangeAbout extends TypeChannelAdminLogEventAction {
  prevValue: string;
  newValue: string;

  protected get [id]() {
    return 0x55188A2E;
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

export class ChannelAdminLogEventActionChangeUsername extends TypeChannelAdminLogEventAction {
  prevValue: string;
  newValue: string;

  protected get [id]() {
    return 0x6A4AFC38;
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

export class ChannelAdminLogEventActionChangePhoto extends TypeChannelAdminLogEventAction {
  prevPhoto: TypePhoto;
  newPhoto: TypePhoto;

  protected get [id]() {
    return 0x434BD2AF;
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

export class ChannelAdminLogEventActionToggleInvites extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x1B7907AE;
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

export class ChannelAdminLogEventActionToggleSignatures extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x26AE0971;
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

export class ChannelAdminLogEventActionUpdatePinned extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0xE9E82C18;
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

export class ChannelAdminLogEventActionEditMessage extends TypeChannelAdminLogEventAction {
  prevMessage: TypeMessage;
  newMessage: TypeMessage;

  protected get [id]() {
    return 0x709B2405;
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

export class ChannelAdminLogEventActionDeleteMessage extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x42E047BB;
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

export class ChannelAdminLogEventActionParticipantJoin extends TypeChannelAdminLogEventAction {
  protected get [id]() {
    return 0x183040D3;
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

export class ChannelAdminLogEventActionParticipantLeave extends TypeChannelAdminLogEventAction {
  protected get [id]() {
    return 0xF89777F2;
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

export class ChannelAdminLogEventActionParticipantInvite extends TypeChannelAdminLogEventAction {
  participant: TypeChannelParticipant;

  protected get [id]() {
    return 0xE31C34D8;
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

export class ChannelAdminLogEventActionParticipantToggleBan extends TypeChannelAdminLogEventAction {
  prevParticipant: TypeChannelParticipant;
  newParticipant: TypeChannelParticipant;

  protected get [id]() {
    return 0xE6D83D7E;
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

  constructor(params: { prevParticipant: TypeChannelParticipant; newParticipant: TypeChannelParticipant }) {
    super();
    this.prevParticipant = params.prevParticipant;
    this.newParticipant = params.newParticipant;
  }
}

export class ChannelAdminLogEventActionParticipantToggleAdmin extends TypeChannelAdminLogEventAction {
  prevParticipant: TypeChannelParticipant;
  newParticipant: TypeChannelParticipant;

  protected get [id]() {
    return 0xD5676710;
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

  constructor(params: { prevParticipant: TypeChannelParticipant; newParticipant: TypeChannelParticipant }) {
    super();
    this.prevParticipant = params.prevParticipant;
    this.newParticipant = params.newParticipant;
  }
}

export class ChannelAdminLogEventActionChangeStickerSet extends TypeChannelAdminLogEventAction {
  prevStickerset: TypeInputStickerSet;
  newStickerset: TypeInputStickerSet;

  protected get [id]() {
    return 0xB1C3CAA7;
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

  constructor(params: { prevStickerset: TypeInputStickerSet; newStickerset: TypeInputStickerSet }) {
    super();
    this.prevStickerset = params.prevStickerset;
    this.newStickerset = params.newStickerset;
  }
}

export class ChannelAdminLogEventActionTogglePreHistoryHidden extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x5F5C95F1;
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

export class ChannelAdminLogEventActionDefaultBannedRights extends TypeChannelAdminLogEventAction {
  prevBannedRights: TypeChatBannedRights;
  newBannedRights: TypeChatBannedRights;

  protected get [id]() {
    return 0x2DF5FC0A;
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

  constructor(params: { prevBannedRights: TypeChatBannedRights; newBannedRights: TypeChatBannedRights }) {
    super();
    this.prevBannedRights = params.prevBannedRights;
    this.newBannedRights = params.newBannedRights;
  }
}

export class ChannelAdminLogEventActionStopPoll extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x8F079643;
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

export class ChannelAdminLogEventActionChangeLinkedChat extends TypeChannelAdminLogEventAction {
  prevValue: bigint;
  newValue: bigint;

  protected get [id]() {
    return 0x050C7AC8;
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

export class ChannelAdminLogEventActionChangeLocation extends TypeChannelAdminLogEventAction {
  prevValue: TypeChannelLocation;
  newValue: TypeChannelLocation;

  protected get [id]() {
    return 0x0E6B76AE;
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

  constructor(params: { prevValue: TypeChannelLocation; newValue: TypeChannelLocation }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionToggleSlowMode extends TypeChannelAdminLogEventAction {
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

export class ChannelAdminLogEventActionStartGroupCall extends TypeChannelAdminLogEventAction {
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

export class ChannelAdminLogEventActionDiscardGroupCall extends TypeChannelAdminLogEventAction {
  call: TypeInputGroupCall;

  protected get [id]() {
    return 0xDB9F9140;
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

export class ChannelAdminLogEventActionParticipantMute extends TypeChannelAdminLogEventAction {
  participant: TypeGroupCallParticipant;

  protected get [id]() {
    return 0xF92424D2;
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

export class ChannelAdminLogEventActionParticipantUnmute extends TypeChannelAdminLogEventAction {
  participant: TypeGroupCallParticipant;

  protected get [id]() {
    return 0xE64429C0;
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

export class ChannelAdminLogEventActionToggleGroupCallSetting extends TypeChannelAdminLogEventAction {
  joinMuted: boolean;

  protected get [id]() {
    return 0x56D6A247;
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

export class ChannelAdminLogEventActionParticipantJoinByInvite extends TypeChannelAdminLogEventAction {
  viaChatlist?: true;
  invite: TypeExportedChatInvite;

  protected get [id]() {
    return 0xFE9FC158;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["viaChatlist", "true", "flags.0?true"],
      ["invite", TypeExportedChatInvite, "ExportedChatInvite"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.viaChatlist ?? null, "true", "flags.0?true"],
      [this.invite, TypeExportedChatInvite, "ExportedChatInvite"],
    ];
  }

  constructor(params: { viaChatlist?: true; invite: TypeExportedChatInvite }) {
    super();
    this.viaChatlist = params.viaChatlist;
    this.invite = params.invite;
  }
}

export class ChannelAdminLogEventActionExportedInviteDelete extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;

  protected get [id]() {
    return 0x5A50FCA4;
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

export class ChannelAdminLogEventActionExportedInviteRevoke extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;

  protected get [id]() {
    return 0x410A134E;
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

export class ChannelAdminLogEventActionExportedInviteEdit extends TypeChannelAdminLogEventAction {
  prevInvite: TypeExportedChatInvite;
  newInvite: TypeExportedChatInvite;

  protected get [id]() {
    return 0xE90EBB59;
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

  constructor(params: { prevInvite: TypeExportedChatInvite; newInvite: TypeExportedChatInvite }) {
    super();
    this.prevInvite = params.prevInvite;
    this.newInvite = params.newInvite;
  }
}

export class ChannelAdminLogEventActionParticipantVolume extends TypeChannelAdminLogEventAction {
  participant: TypeGroupCallParticipant;

  protected get [id]() {
    return 0x3E7F6847;
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

export class ChannelAdminLogEventActionChangeHistoryTTL extends TypeChannelAdminLogEventAction {
  prevValue: number;
  newValue: number;

  protected get [id]() {
    return 0x6E941A38;
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

export class ChannelAdminLogEventActionParticipantJoinByRequest extends TypeChannelAdminLogEventAction {
  invite: TypeExportedChatInvite;
  approvedBy: bigint;

  protected get [id]() {
    return 0xAFB6144A;
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

export class ChannelAdminLogEventActionToggleNoForwards extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0xCB2AC766;
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

export class ChannelAdminLogEventActionSendMessage extends TypeChannelAdminLogEventAction {
  message: TypeMessage;

  protected get [id]() {
    return 0x278F2868;
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

export class ChannelAdminLogEventActionChangeAvailableReactions extends TypeChannelAdminLogEventAction {
  prevValue: TypeChatReactions;
  newValue: TypeChatReactions;

  protected get [id]() {
    return 0xBE4E0EF8;
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

  constructor(params: { prevValue: TypeChatReactions; newValue: TypeChatReactions }) {
    super();
    this.prevValue = params.prevValue;
    this.newValue = params.newValue;
  }
}

export class ChannelAdminLogEventActionChangeUsernames extends TypeChannelAdminLogEventAction {
  prevValue: Array<string>;
  newValue: Array<string>;

  protected get [id]() {
    return 0xF04FB3A9;
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

export class ChannelAdminLogEventActionToggleForum extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x02CC6383;
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

export class ChannelAdminLogEventActionCreateTopic extends TypeChannelAdminLogEventAction {
  topic: TypeForumTopic;

  protected get [id]() {
    return 0x58707D28;
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

export class ChannelAdminLogEventActionEditTopic extends TypeChannelAdminLogEventAction {
  prevTopic: TypeForumTopic;
  newTopic: TypeForumTopic;

  protected get [id]() {
    return 0xF06FE208;
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

export class ChannelAdminLogEventActionDeleteTopic extends TypeChannelAdminLogEventAction {
  topic: TypeForumTopic;

  protected get [id]() {
    return 0xAE168909;
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

export class ChannelAdminLogEventActionPinTopic extends TypeChannelAdminLogEventAction {
  prevTopic?: TypeForumTopic;
  newTopic?: TypeForumTopic;

  protected get [id]() {
    return 0x5D8D353B;
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

  constructor(params?: { prevTopic?: TypeForumTopic; newTopic?: TypeForumTopic }) {
    super();
    this.prevTopic = params?.prevTopic;
    this.newTopic = params?.newTopic;
  }
}

export class ChannelAdminLogEventActionToggleAntiSpam extends TypeChannelAdminLogEventAction {
  newValue: boolean;

  protected get [id]() {
    return 0x64F36DFC;
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

export class ChannelAdminLogEvent extends TypeChannelAdminLogEvent {
  id: bigint;
  date: number;
  userId: bigint;
  action: TypeChannelAdminLogEventAction;

  protected get [id]() {
    return 0x1FAD68CD;
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
      [this.action, TypeChannelAdminLogEventAction, "ChannelAdminLogEventAction"],
    ];
  }

  constructor(params: { id: bigint; date: number; userId: bigint; action: TypeChannelAdminLogEventAction }) {
    super();
    this.id = params.id;
    this.date = params.date;
    this.userId = params.userId;
    this.action = params.action;
  }
}

export class ChannelsAdminLogResults extends TypeChannelsAdminLogResults {
  events: Array<TypeChannelAdminLogEvent>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xED8AF74D;
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

  constructor(params: { events: Array<TypeChannelAdminLogEvent>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.events = params.events;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChannelAdminLogEventsFilter extends TypeChannelAdminLogEventsFilter {
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
    return 0xEA107AE4;
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

  constructor(params?: { join?: true; leave?: true; invite?: true; ban?: true; unban?: true; kick?: true; unkick?: true; promote?: true; demote?: true; info?: true; settings?: true; pinned?: true; edit?: true; delete?: true; groupCall?: true; invites?: true; send?: true; forums?: true }) {
    super();
    this.join = params?.join;
    this.leave = params?.leave;
    this.invite = params?.invite;
    this.ban = params?.ban;
    this.unban = params?.unban;
    this.kick = params?.kick;
    this.unkick = params?.unkick;
    this.promote = params?.promote;
    this.demote = params?.demote;
    this.info = params?.info;
    this.settings = params?.settings;
    this.pinned = params?.pinned;
    this.edit = params?.edit;
    this.delete = params?.delete;
    this.groupCall = params?.groupCall;
    this.invites = params?.invites;
    this.send = params?.send;
    this.forums = params?.forums;
  }
}

export class PopularContact extends TypePopularContact {
  clientId: bigint;
  importers: number;

  protected get [id]() {
    return 0x5CE14175;
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

export class MessagesFavedStickersNotModified extends TypeMessagesFavedStickers {
  protected get [id]() {
    return 0x9E8FA6D3;
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

export class MessagesFavedStickers extends TypeMessagesFavedStickers {
  hash: bigint;
  packs: Array<TypeStickerPack>;
  stickers: Array<TypeDocument>;

  protected get [id]() {
    return 0x2CB51097;
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

  constructor(params: { hash: bigint; packs: Array<TypeStickerPack>; stickers: Array<TypeDocument> }) {
    super();
    this.hash = params.hash;
    this.packs = params.packs;
    this.stickers = params.stickers;
  }
}

export class RecentMeURLUnknown extends TypeRecentMeURL {
  url: string;

  protected get [id]() {
    return 0x46E1D13D;
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

export class RecentMeURLUser extends TypeRecentMeURL {
  url: string;
  userId: bigint;

  protected get [id]() {
    return 0xB92C09E2;
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

export class RecentMeURLChat extends TypeRecentMeURL {
  url: string;
  chatId: bigint;

  protected get [id]() {
    return 0xB2DA71D2;
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

export class RecentMeURLChatInvite extends TypeRecentMeURL {
  url: string;
  chatInvite: TypeChatInvite;

  protected get [id]() {
    return 0xEB49081D;
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

export class RecentMeURLStickerSet extends TypeRecentMeURL {
  url: string;
  set: TypeStickerSetCovered;

  protected get [id]() {
    return 0xBC0A57DC;
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

export class HelpRecentMeURLs extends TypeHelpRecentMeURLs {
  urls: Array<TypeRecentMeURL>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x0E0310D7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["urls", [TypeRecentMeURL], "Vector<RecentMeUrl>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.urls, [TypeRecentMeURL], "Vector<RecentMeUrl>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { urls: Array<TypeRecentMeURL>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.urls = params.urls;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class InputSingleMedia extends TypeInputSingleMedia {
  media: TypeInputMedia;
  randomId: bigint;
  message: string;
  entities?: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x1CC6E91F;
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
      [this.entities ?? null, [TypeMessageEntity], "flags.0?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { media: TypeInputMedia; randomId: bigint; message: string; entities?: Array<TypeMessageEntity> }) {
    super();
    this.media = params.media;
    this.randomId = params.randomId;
    this.message = params.message;
    this.entities = params.entities;
  }
}

export class WebAuthorization extends TypeWebAuthorization {
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
    return 0xA6F8F452;
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

  constructor(params: { hash: bigint; botId: bigint; domain: string; browser: string; platform: string; dateCreated: number; dateActive: number; ip: string; region: string }) {
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

export class AccountWebAuthorizations extends TypeAccountWebAuthorizations {
  authorizations: Array<TypeWebAuthorization>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xED56C9FC;
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

  constructor(params: { authorizations: Array<TypeWebAuthorization>; users: Array<TypeUser> }) {
    super();
    this.authorizations = params.authorizations;
    this.users = params.users;
  }
}

export class InputMessageID extends TypeInputMessage {
  id: number;

  protected get [id]() {
    return 0xA676A322;
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
    return 0xBAD88395;
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
    return 0xACFA1A7E;
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

export class InputDialogPeer extends TypeInputDialogPeer {
  peer: TypeInputPeer;

  protected get [id]() {
    return 0xFCAAFEB7;
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

export class DialogPeer extends TypeDialogPeer {
  peer: TypePeer;

  protected get [id]() {
    return 0xE56DBF05;
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
    return 0x514519E2;
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

export class MessagesFoundStickerSetsNotModified extends TypeMessagesFoundStickerSets {
  protected get [id]() {
    return 0x0D54B65D;
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

export class MessagesFoundStickerSets extends TypeMessagesFoundStickerSets {
  hash: bigint;
  sets: Array<TypeStickerSetCovered>;

  protected get [id]() {
    return 0x8AF09DD2;
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

export class FileHash extends TypeFileHash {
  offset: bigint;
  limit: number;
  hash: Uint8Array;

  protected get [id]() {
    return 0xF39B035C;
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

export class InputClientProxy extends TypeInputClientProxy {
  address: string;
  port: number;

  protected get [id]() {
    return 0x75588B3F;
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

export class HelpTermsOfServiceUpdateEmpty extends TypeHelpTermsOfServiceUpdate {
  expires: number;

  protected get [id]() {
    return 0xE3309F7F;
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

export class HelpTermsOfServiceUpdate extends TypeHelpTermsOfServiceUpdate {
  expires: number;
  termsOfService: TypeHelpTermsOfService;

  protected get [id]() {
    return 0x28ECF961;
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

  constructor(params: { expires: number; termsOfService: TypeHelpTermsOfService }) {
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
    return 0x3334B0F0;
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

  constructor(params: { id: bigint; parts: number; md5Checksum: string; fileHash: Uint8Array; secret: Uint8Array }) {
    super();
    this.id = params.id;
    this.parts = params.parts;
    this.md5Checksum = params.md5Checksum;
    this.fileHash = params.fileHash;
    this.secret = params.secret;
  }
}

export class InputSecureFile extends TypeInputSecureFile {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x5367E5BE;
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

export class SecureFile extends TypeSecureFile {
  id: bigint;
  accessHash: bigint;
  size: bigint;
  dcId: number;
  date: number;
  fileHash: Uint8Array;
  secret: Uint8Array;

  protected get [id]() {
    return 0x7D09C27E;
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

  constructor(params: { id: bigint; accessHash: bigint; size: bigint; dcId: number; date: number; fileHash: Uint8Array; secret: Uint8Array }) {
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

export class SecureData extends TypeSecureData {
  data: Uint8Array;
  dataHash: Uint8Array;
  secret: Uint8Array;

  protected get [id]() {
    return 0x8AEABEC3;
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

  constructor(params: { data: Uint8Array; dataHash: Uint8Array; secret: Uint8Array }) {
    super();
    this.data = params.data;
    this.dataHash = params.dataHash;
    this.secret = params.secret;
  }
}

export class SecurePlainPhone extends TypeSecurePlainData {
  phone: string;

  protected get [id]() {
    return 0x7D6099DD;
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
    return 0x21EC5A5F;
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
    return 0x9D2A81E3;
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
    return 0x3DAC6A00;
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
    return 0x06E425C4;
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
    return 0xA0D0744B;
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
    return 0x99A48F23;
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
    return 0xCBE31E26;
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
    return 0xFC36954E;
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
    return 0x89137C0D;
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
    return 0x8B883488;
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
    return 0x99E3806A;
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
    return 0xEA02EC33;
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
    return 0xB320AADB;
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
    return 0x8E3CA7EE;
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

export class SecureValue extends TypeSecureValue {
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
    return 0x187FA0CA;
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
      [this.translation ?? null, [TypeSecureFile], "flags.6?Vector<SecureFile>"],
      [this.files ?? null, [TypeSecureFile], "flags.4?Vector<SecureFile>"],
      [this.plainData ?? null, TypeSecurePlainData, "flags.5?SecurePlainData"],
      [this.hash, Uint8Array, "bytes"],
    ];
  }

  constructor(params: { type: TypeSecureValueType; data?: TypeSecureData; frontSide?: TypeSecureFile; reverseSide?: TypeSecureFile; selfie?: TypeSecureFile; translation?: Array<TypeSecureFile>; files?: Array<TypeSecureFile>; plainData?: TypeSecurePlainData; hash: Uint8Array }) {
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

export class InputSecureValue extends TypeInputSecureValue {
  type: TypeSecureValueType;
  data?: TypeSecureData;
  frontSide?: TypeInputSecureFile;
  reverseSide?: TypeInputSecureFile;
  selfie?: TypeInputSecureFile;
  translation?: Array<TypeInputSecureFile>;
  files?: Array<TypeInputSecureFile>;
  plainData?: TypeSecurePlainData;

  protected get [id]() {
    return 0xDB21D0A7;
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
      [this.reverseSide ?? null, TypeInputSecureFile, "flags.2?InputSecureFile"],
      [this.selfie ?? null, TypeInputSecureFile, "flags.3?InputSecureFile"],
      [this.translation ?? null, [TypeInputSecureFile], "flags.6?Vector<InputSecureFile>"],
      [this.files ?? null, [TypeInputSecureFile], "flags.4?Vector<InputSecureFile>"],
      [this.plainData ?? null, TypeSecurePlainData, "flags.5?SecurePlainData"],
    ];
  }

  constructor(params: { type: TypeSecureValueType; data?: TypeSecureData; frontSide?: TypeInputSecureFile; reverseSide?: TypeInputSecureFile; selfie?: TypeInputSecureFile; translation?: Array<TypeInputSecureFile>; files?: Array<TypeInputSecureFile>; plainData?: TypeSecurePlainData }) {
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

export class SecureValueHash extends TypeSecureValueHash {
  type: TypeSecureValueType;
  hash: Uint8Array;

  protected get [id]() {
    return 0xED1ECDB0;
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
    return 0xE8A40BD9;
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

  constructor(params: { type: TypeSecureValueType; dataHash: Uint8Array; field: string; text: string }) {
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
    return 0x00BE3DFA;
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

  constructor(params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string }) {
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
    return 0x868A2AA5;
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

  constructor(params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string }) {
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
    return 0xE537CED6;
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

  constructor(params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string }) {
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
    return 0x7A700873;
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

  constructor(params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string }) {
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
    return 0x666220E9;
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

  constructor(params: { type: TypeSecureValueType; fileHash: Array<Uint8Array>; text: string }) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureValueError extends TypeSecureValueError {
  type: TypeSecureValueType;
  hash: Uint8Array;
  text: string;

  protected get [id]() {
    return 0x869D758F;
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

  constructor(params: { type: TypeSecureValueType; hash: Uint8Array; text: string }) {
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
    return 0xA1144770;
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

  constructor(params: { type: TypeSecureValueType; fileHash: Uint8Array; text: string }) {
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
    return 0x34636DD8;
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

  constructor(params: { type: TypeSecureValueType; fileHash: Array<Uint8Array>; text: string }) {
    super();
    this.type = params.type;
    this.fileHash = params.fileHash;
    this.text = params.text;
  }
}

export class SecureCredentialsEncrypted extends TypeSecureCredentialsEncrypted {
  data: Uint8Array;
  hash: Uint8Array;
  secret: Uint8Array;

  protected get [id]() {
    return 0x33F0EA47;
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

  constructor(params: { data: Uint8Array; hash: Uint8Array; secret: Uint8Array }) {
    super();
    this.data = params.data;
    this.hash = params.hash;
    this.secret = params.secret;
  }
}

export class AccountAuthorizationForm extends TypeAccountAuthorizationForm {
  requiredTypes: Array<TypeSecureRequiredType>;
  values: Array<TypeSecureValue>;
  errors: Array<TypeSecureValueError>;
  users: Array<TypeUser>;
  privacyPolicyUrl?: string;

  protected get [id]() {
    return 0xAD2E1CD8;
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
      [this.requiredTypes, [TypeSecureRequiredType], "Vector<SecureRequiredType>"],
      [this.values, [TypeSecureValue], "Vector<SecureValue>"],
      [this.errors, [TypeSecureValueError], "Vector<SecureValueError>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.privacyPolicyUrl ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(params: { requiredTypes: Array<TypeSecureRequiredType>; values: Array<TypeSecureValue>; errors: Array<TypeSecureValueError>; users: Array<TypeUser>; privacyPolicyUrl?: string }) {
    super();
    this.requiredTypes = params.requiredTypes;
    this.values = params.values;
    this.errors = params.errors;
    this.users = params.users;
    this.privacyPolicyUrl = params.privacyPolicyUrl;
  }
}

export class AccountSentEmailCode extends TypeAccountSentEmailCode {
  emailPattern: string;
  length: number;

  protected get [id]() {
    return 0x811F854F;
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
    return 0x66AFA166;
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

export class HelpDeepLinkInfo extends TypeHelpDeepLinkInfo {
  updateApp?: true;
  message: string;
  entities?: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x6A4EE832;
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
      [this.entities ?? null, [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
    ];
  }

  constructor(params: { updateApp?: true; message: string; entities?: Array<TypeMessageEntity> }) {
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
    return 0x1142BD56;
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

  constructor(params: { phone: string; firstName: string; lastName: string; date: number }) {
    super();
    this.phone = params.phone;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.date = params.date;
  }
}

export class AccountTakeout extends TypeAccountTakeout {
  id: bigint;

  protected get [id]() {
    return 0x4DBA4501;
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
    return 0xD45AB096;
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

export class PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow extends TypePasswordKdfAlgo {
  salt1: Uint8Array;
  salt2: Uint8Array;
  g: number;
  p: Uint8Array;

  protected get [id]() {
    return 0x3A912D4A;
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

  constructor(params: { salt1: Uint8Array; salt2: Uint8Array; g: number; p: Uint8Array }) {
    super();
    this.salt1 = params.salt1;
    this.salt2 = params.salt2;
    this.g = params.g;
    this.p = params.p;
  }
}

export class SecurePasswordKdfAlgoUnknown extends TypeSecurePasswordKdfAlgo {
  protected get [id]() {
    return 0x004A8537;
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

export class SecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000 extends TypeSecurePasswordKdfAlgo {
  salt: Uint8Array;

  protected get [id]() {
    return 0xBBF2DDA0;
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
    return 0x86471D92;
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

export class SecureSecretSettings extends TypeSecureSecretSettings {
  secureAlgo: TypeSecurePasswordKdfAlgo;
  secureSecret: Uint8Array;
  secureSecretId: bigint;

  protected get [id]() {
    return 0x1527BCAC;
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

  constructor(params: { secureAlgo: TypeSecurePasswordKdfAlgo; secureSecret: Uint8Array; secureSecretId: bigint }) {
    super();
    this.secureAlgo = params.secureAlgo;
    this.secureSecret = params.secureSecret;
    this.secureSecretId = params.secureSecretId;
  }
}

export class InputCheckPasswordEmpty extends TypeInputCheckPasswordSRP {
  protected get [id]() {
    return 0x9880F658;
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

export class InputCheckPasswordSRP extends TypeInputCheckPasswordSRP {
  srpId: bigint;
  A: Uint8Array;
  M1: Uint8Array;

  protected get [id]() {
    return 0xD27FF082;
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

export class SecureRequiredType extends TypeSecureRequiredType {
  nativeNames?: true;
  selfieRequired?: true;
  translationRequired?: true;
  type: TypeSecureValueType;

  protected get [id]() {
    return 0x829D99DA;
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

  constructor(params: { nativeNames?: true; selfieRequired?: true; translationRequired?: true; type: TypeSecureValueType }) {
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
    return 0x027477B4;
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
    return 0xBFB9F457;
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

export class HelpPassportConfig extends TypeHelpPassportConfig {
  hash: number;
  countriesLangs: TypeDataJSON;

  protected get [id]() {
    return 0xA098D6AF;
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

export class InputAppEvent extends TypeInputAppEvent {
  time: number;
  type: string;
  peer: bigint;
  data: TypeJSONValue;

  protected get [id]() {
    return 0x1D1B1245;
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

  constructor(params: { time: number; type: string; peer: bigint; data: TypeJSONValue }) {
    super();
    this.time = params.time;
    this.type = params.type;
    this.peer = params.peer;
    this.data = params.data;
  }
}

export class JsonObjectValue extends TypeJSONObjectValue {
  key: string;
  value: TypeJSONValue;

  protected get [id]() {
    return 0xC0DE1BD9;
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
    return 0x3F6D7B68;
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
    return 0xC7345E6A;
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
    return 0x2BE0DFA4;
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
    return 0xB71E767A;
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
    return 0xF7444763;
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
    return 0x99C1D49D;
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

export class PageTableCell extends TypePageTableCell {
  header?: true;
  alignCenter?: true;
  alignRight?: true;
  valignMiddle?: true;
  valignBottom?: true;
  text?: TypeRichText;
  colspan?: number;
  rowspan?: number;

  protected get [id]() {
    return 0x34566B6A;
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

  constructor(params?: { header?: true; alignCenter?: true; alignRight?: true; valignMiddle?: true; valignBottom?: true; text?: TypeRichText; colspan?: number; rowspan?: number }) {
    super();
    this.header = params?.header;
    this.alignCenter = params?.alignCenter;
    this.alignRight = params?.alignRight;
    this.valignMiddle = params?.valignMiddle;
    this.valignBottom = params?.valignBottom;
    this.text = params?.text;
    this.colspan = params?.colspan;
    this.rowspan = params?.rowspan;
  }
}

export class PageTableRow extends TypePageTableRow {
  cells: Array<TypePageTableCell>;

  protected get [id]() {
    return 0xE0C0C5E5;
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

export class PageCaption extends TypePageCaption {
  text: TypeRichText;
  credit: TypeRichText;

  protected get [id]() {
    return 0x6F747657;
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
    return 0xB92FB6CD;
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
    return 0x25E073FC;
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
    return 0x5E068047;
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
    return 0x98DD8936;
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

export class PageRelatedArticle extends TypePageRelatedArticle {
  url: string;
  webpageId: bigint;
  title?: string;
  description?: string;
  photoId?: bigint;
  author?: string;
  publishedDate?: number;

  protected get [id]() {
    return 0xB390DC08;
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

  constructor(params: { url: string; webpageId: bigint; title?: string; description?: string; photoId?: bigint; author?: string; publishedDate?: number }) {
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

export class Page extends TypePage {
  part?: true;
  rtl?: true;
  v2?: true;
  url: string;
  blocks: Array<TypePageBlock>;
  photos: Array<TypePhoto>;
  documents: Array<TypeDocument>;
  views?: number;

  protected get [id]() {
    return 0x98657F0D;
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

  constructor(params: { part?: true; rtl?: true; v2?: true; url: string; blocks: Array<TypePageBlock>; photos: Array<TypePhoto>; documents: Array<TypeDocument>; views?: number }) {
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

export class HelpSupportName extends TypeHelpSupportName {
  name: string;

  protected get [id]() {
    return 0x8C05F1C9;
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
    return 0xF3AE2EED;
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

export class HelpUserInfo extends TypeHelpUserInfo {
  message: string;
  entities: Array<TypeMessageEntity>;
  author: string;
  date: number;

  protected get [id]() {
    return 0x01EB3758;
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

  constructor(params: { message: string; entities: Array<TypeMessageEntity>; author: string; date: number }) {
    super();
    this.message = params.message;
    this.entities = params.entities;
    this.author = params.author;
    this.date = params.date;
  }
}

export class PollAnswer extends TypePollAnswer {
  text: string;
  option: Uint8Array;

  protected get [id]() {
    return 0x6CA9C2E9;
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

export class Poll extends TypePoll {
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
    return 0x86E18161;
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

  constructor(params: { id: bigint; closed?: true; publicVoters?: true; multipleChoice?: true; quiz?: true; question: string; answers: Array<TypePollAnswer>; closePeriod?: number; closeDate?: number }) {
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

export class PollAnswerVoters extends TypePollAnswerVoters {
  chosen?: true;
  correct?: true;
  option: Uint8Array;
  voters: number;

  protected get [id]() {
    return 0x3B6DDAD2;
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

  constructor(params: { chosen?: true; correct?: true; option: Uint8Array; voters: number }) {
    super();
    this.chosen = params.chosen;
    this.correct = params.correct;
    this.option = params.option;
    this.voters = params.voters;
  }
}

export class PollResults extends TypePollResults {
  min?: true;
  results?: Array<TypePollAnswerVoters>;
  totalVoters?: number;
  recentVoters?: Array<TypePeer>;
  solution?: string;
  solutionEntities?: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x7ADF2420;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["min", "true", "flags.0?true"],
      ["results", [TypePollAnswerVoters], "flags.1?Vector<PollAnswerVoters>"],
      ["totalVoters", "number", "flags.2?int"],
      ["recentVoters", [TypePeer], "flags.3?Vector<Peer>"],
      ["solution", "string", "flags.4?string"],
      ["solutionEntities", [TypeMessageEntity], "flags.4?Vector<MessageEntity>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.min ?? null, "true", "flags.0?true"],
      [this.results ?? null, [TypePollAnswerVoters], "flags.1?Vector<PollAnswerVoters>"],
      [this.totalVoters ?? null, "number", "flags.2?int"],
      [this.recentVoters ?? null, [TypePeer], "flags.3?Vector<Peer>"],
      [this.solution ?? null, "string", "flags.4?string"],
      [this.solutionEntities ?? null, [TypeMessageEntity], "flags.4?Vector<MessageEntity>"],
    ];
  }

  constructor(params?: { min?: true; results?: Array<TypePollAnswerVoters>; totalVoters?: number; recentVoters?: Array<TypePeer>; solution?: string; solutionEntities?: Array<TypeMessageEntity> }) {
    super();
    this.min = params?.min;
    this.results = params?.results;
    this.totalVoters = params?.totalVoters;
    this.recentVoters = params?.recentVoters;
    this.solution = params?.solution;
    this.solutionEntities = params?.solutionEntities;
  }
}

export class ChatOnlines extends TypeChatOnlines {
  onlines: number;

  protected get [id]() {
    return 0xF041E250;
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

export class StatsURL extends TypeStatsURL {
  url: string;

  protected get [id]() {
    return 0x47A971E0;
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

export class ChatAdminRights extends TypeChatAdminRights {
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
    return 0x5FB224D5;
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

  constructor(params?: { changeInfo?: true; postMessages?: true; editMessages?: true; deleteMessages?: true; banUsers?: true; inviteUsers?: true; pinMessages?: true; addAdmins?: true; anonymous?: true; manageCall?: true; other?: true; manageTopics?: true }) {
    super();
    this.changeInfo = params?.changeInfo;
    this.postMessages = params?.postMessages;
    this.editMessages = params?.editMessages;
    this.deleteMessages = params?.deleteMessages;
    this.banUsers = params?.banUsers;
    this.inviteUsers = params?.inviteUsers;
    this.pinMessages = params?.pinMessages;
    this.addAdmins = params?.addAdmins;
    this.anonymous = params?.anonymous;
    this.manageCall = params?.manageCall;
    this.other = params?.other;
    this.manageTopics = params?.manageTopics;
  }
}

export class ChatBannedRights extends TypeChatBannedRights {
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
    return 0x9F120418;
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

  constructor(params: { viewMessages?: true; sendMessages?: true; sendMedia?: true; sendStickers?: true; sendGifs?: true; sendGames?: true; sendInline?: true; embedLinks?: true; sendPolls?: true; changeInfo?: true; inviteUsers?: true; pinMessages?: true; manageTopics?: true; sendPhotos?: true; sendVideos?: true; sendRoundvideos?: true; sendAudios?: true; sendVoices?: true; sendDocs?: true; sendPlain?: true; untilDate: number }) {
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

export class InputWallPaper extends TypeInputWallPaper {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xE630B979;
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
    return 0x72091C80;
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
    return 0x967A462E;
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
    return 0x1C199183;
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

export class AccountWallPapers extends TypeAccountWallPapers {
  hash: bigint;
  wallpapers: Array<TypeWallPaper>;

  protected get [id]() {
    return 0xCDC3858C;
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

export class CodeSettings extends TypeCodeSettings {
  allowFlashcall?: true;
  currentNumber?: true;
  allowAppHash?: true;
  allowMissedCall?: true;
  allowFirebase?: true;
  logoutTokens?: Array<Uint8Array>;
  token?: string;
  appSandbox?: boolean;

  protected get [id]() {
    return 0xAD253D78;
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

  constructor(params?: { allowFlashcall?: true; currentNumber?: true; allowAppHash?: true; allowMissedCall?: true; allowFirebase?: true; logoutTokens?: Array<Uint8Array>; token?: string; appSandbox?: boolean }) {
    super();
    this.allowFlashcall = params?.allowFlashcall;
    this.currentNumber = params?.currentNumber;
    this.allowAppHash = params?.allowAppHash;
    this.allowMissedCall = params?.allowMissedCall;
    this.allowFirebase = params?.allowFirebase;
    this.logoutTokens = params?.logoutTokens;
    this.token = params?.token;
    this.appSandbox = params?.appSandbox;
  }
}

export class WallPaperSettings extends TypeWallPaperSettings {
  blur?: true;
  motion?: true;
  backgroundColor?: number;
  secondBackgroundColor?: number;
  thirdBackgroundColor?: number;
  fourthBackgroundColor?: number;
  intensity?: number;
  rotation?: number;

  protected get [id]() {
    return 0x1DC1BCA4;
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

  constructor(params?: { blur?: true; motion?: true; backgroundColor?: number; secondBackgroundColor?: number; thirdBackgroundColor?: number; fourthBackgroundColor?: number; intensity?: number; rotation?: number }) {
    super();
    this.blur = params?.blur;
    this.motion = params?.motion;
    this.backgroundColor = params?.backgroundColor;
    this.secondBackgroundColor = params?.secondBackgroundColor;
    this.thirdBackgroundColor = params?.thirdBackgroundColor;
    this.fourthBackgroundColor = params?.fourthBackgroundColor;
    this.intensity = params?.intensity;
    this.rotation = params?.rotation;
  }
}

export class AutoDownloadSettings extends TypeAutoDownloadSettings {
  disabled?: true;
  videoPreloadLarge?: true;
  audioPreloadNext?: true;
  phonecallsLessData?: true;
  storiesPreload?: true;
  photoSizeMax: number;
  videoSizeMax: bigint;
  fileSizeMax: bigint;
  videoUploadMaxbitrate: number;
  smallQueueActiveOperationsMax: number;
  largeQueueActiveOperationsMax: number;

  protected get [id]() {
    return 0xBAA57628;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["disabled", "true", "flags.0?true"],
      ["videoPreloadLarge", "true", "flags.1?true"],
      ["audioPreloadNext", "true", "flags.2?true"],
      ["phonecallsLessData", "true", "flags.3?true"],
      ["storiesPreload", "true", "flags.4?true"],
      ["photoSizeMax", "number", "int"],
      ["videoSizeMax", "bigint", "long"],
      ["fileSizeMax", "bigint", "long"],
      ["videoUploadMaxbitrate", "number", "int"],
      ["smallQueueActiveOperationsMax", "number", "int"],
      ["largeQueueActiveOperationsMax", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.disabled ?? null, "true", "flags.0?true"],
      [this.videoPreloadLarge ?? null, "true", "flags.1?true"],
      [this.audioPreloadNext ?? null, "true", "flags.2?true"],
      [this.phonecallsLessData ?? null, "true", "flags.3?true"],
      [this.storiesPreload ?? null, "true", "flags.4?true"],
      [this.photoSizeMax, "number", "int"],
      [this.videoSizeMax, "bigint", "long"],
      [this.fileSizeMax, "bigint", "long"],
      [this.videoUploadMaxbitrate, "number", "int"],
      [this.smallQueueActiveOperationsMax, "number", "int"],
      [this.largeQueueActiveOperationsMax, "number", "int"],
    ];
  }

  constructor(params: { disabled?: true; videoPreloadLarge?: true; audioPreloadNext?: true; phonecallsLessData?: true; storiesPreload?: true; photoSizeMax: number; videoSizeMax: bigint; fileSizeMax: bigint; videoUploadMaxbitrate: number; smallQueueActiveOperationsMax: number; largeQueueActiveOperationsMax: number }) {
    super();
    this.disabled = params.disabled;
    this.videoPreloadLarge = params.videoPreloadLarge;
    this.audioPreloadNext = params.audioPreloadNext;
    this.phonecallsLessData = params.phonecallsLessData;
    this.storiesPreload = params.storiesPreload;
    this.photoSizeMax = params.photoSizeMax;
    this.videoSizeMax = params.videoSizeMax;
    this.fileSizeMax = params.fileSizeMax;
    this.videoUploadMaxbitrate = params.videoUploadMaxbitrate;
    this.smallQueueActiveOperationsMax = params.smallQueueActiveOperationsMax;
    this.largeQueueActiveOperationsMax = params.largeQueueActiveOperationsMax;
  }
}

export class AccountAutoDownloadSettings extends TypeAccountAutoDownloadSettings {
  low: TypeAutoDownloadSettings;
  medium: TypeAutoDownloadSettings;
  high: TypeAutoDownloadSettings;

  protected get [id]() {
    return 0x63CACF26;
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

  constructor(params: { low: TypeAutoDownloadSettings; medium: TypeAutoDownloadSettings; high: TypeAutoDownloadSettings }) {
    super();
    this.low = params.low;
    this.medium = params.medium;
    this.high = params.high;
  }
}

export class EmojiKeyword extends TypeEmojiKeyword {
  keyword: string;
  emoticons: Array<string>;

  protected get [id]() {
    return 0xD5B3B9F9;
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
    return 0x236DF622;
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

export class EmojiKeywordsDifference extends TypeEmojiKeywordsDifference {
  langCode: string;
  fromVersion: number;
  version: number;
  keywords: Array<TypeEmojiKeyword>;

  protected get [id]() {
    return 0x5CC761BD;
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

  constructor(params: { langCode: string; fromVersion: number; version: number; keywords: Array<TypeEmojiKeyword> }) {
    super();
    this.langCode = params.langCode;
    this.fromVersion = params.fromVersion;
    this.version = params.version;
    this.keywords = params.keywords;
  }
}

export class EmojiURL extends TypeEmojiURL {
  url: string;

  protected get [id]() {
    return 0xA575739D;
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

export class EmojiLanguage extends TypeEmojiLanguage {
  langCode: string;

  protected get [id]() {
    return 0xB3FB5361;
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

export class Folder extends TypeFolder {
  autofillNewBroadcasts?: true;
  autofillPublicGroups?: true;
  autofillNewCorrespondents?: true;
  id: number;
  title: string;
  photo?: TypeChatPhoto;

  protected get [id]() {
    return 0xFF544E65;
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

  constructor(params: { autofillNewBroadcasts?: true; autofillPublicGroups?: true; autofillNewCorrespondents?: true; id: number; title: string; photo?: TypeChatPhoto }) {
    super();
    this.autofillNewBroadcasts = params.autofillNewBroadcasts;
    this.autofillPublicGroups = params.autofillPublicGroups;
    this.autofillNewCorrespondents = params.autofillNewCorrespondents;
    this.id = params.id;
    this.title = params.title;
    this.photo = params.photo;
  }
}

export class InputFolderPeer extends TypeInputFolderPeer {
  peer: TypeInputPeer;
  folderId: number;

  protected get [id]() {
    return 0xFBD2C296;
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

export class FolderPeer extends TypeFolderPeer {
  peer: TypePeer;
  folderId: number;

  protected get [id]() {
    return 0xE9BAA668;
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

export class MessagesSearchCounter extends TypeMessagesSearchCounter {
  inexact?: true;
  filter: TypeMessagesFilter;
  count: number;

  protected get [id]() {
    return 0xE844EBFF;
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

  constructor(params: { inexact?: true; filter: TypeMessagesFilter; count: number }) {
    super();
    this.inexact = params.inexact;
    this.filter = params.filter;
    this.count = params.count;
  }
}

export class URLAuthResultRequest extends TypeURLAuthResult {
  requestWriteAccess?: true;
  bot: TypeUser;
  domain: string;

  protected get [id]() {
    return 0x92D33A0E;
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

  constructor(params: { requestWriteAccess?: true; bot: TypeUser; domain: string }) {
    super();
    this.requestWriteAccess = params.requestWriteAccess;
    this.bot = params.bot;
    this.domain = params.domain;
  }
}

export class URLAuthResultAccepted extends TypeURLAuthResult {
  url: string;

  protected get [id]() {
    return 0x8F8C0E4E;
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

export class URLAuthResultDefault extends TypeURLAuthResult {
  protected get [id]() {
    return 0xA9D6DB1F;
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
    return 0xBFB5AD8B;
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

export class ChannelLocation extends TypeChannelLocation {
  geoPoint: TypeGeoPoint;
  address: string;

  protected get [id]() {
    return 0x209B82DB;
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

export class PeerLocated extends TypePeerLocated {
  peer: TypePeer;
  expires: number;
  distance: number;

  protected get [id]() {
    return 0xCA461B5D;
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
    return 0xF8EC284B;
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

export class RestrictionReason extends TypeRestrictionReason {
  platform: string;
  reason: string;
  text: string;

  protected get [id]() {
    return 0xD072ACB4;
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

export class InputTheme extends TypeInputTheme {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0x3C5693E9;
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
    return 0xF5890DF1;
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

export class Theme extends TypeTheme {
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
    return 0xA00E67D6;
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
      [this.settings ?? null, [TypeThemeSettings], "flags.3?Vector<ThemeSettings>"],
      [this.emoticon ?? null, "string", "flags.6?string"],
      [this.installsCount ?? null, "number", "flags.4?int"],
    ];
  }

  constructor(params: { creator?: true; default?: true; forChat?: true; id: bigint; accessHash: bigint; slug: string; title: string; document?: TypeDocument; settings?: Array<TypeThemeSettings>; emoticon?: string; installsCount?: number }) {
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
    return 0xF41EB622;
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

export class AccountThemes extends TypeAccountThemes {
  hash: bigint;
  themes: Array<TypeTheme>;

  protected get [id]() {
    return 0x9A3D8C6D;
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

export class AuthLoginToken extends TypeAuthLoginToken {
  expires: number;
  token: Uint8Array;

  protected get [id]() {
    return 0x629F1980;
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
    return 0x068E9916;
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
    return 0x390D5C5E;
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

export class AccountContentSettings extends TypeAccountContentSettings {
  sensitiveEnabled?: true;
  sensitiveCanChange?: true;

  protected get [id]() {
    return 0x57E28221;
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

  constructor(params?: { sensitiveEnabled?: true; sensitiveCanChange?: true }) {
    super();
    this.sensitiveEnabled = params?.sensitiveEnabled;
    this.sensitiveCanChange = params?.sensitiveCanChange;
  }
}

export class MessagesInactiveChats extends TypeMessagesInactiveChats {
  dates: Array<number>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xA927FEC5;
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

  constructor(params: { dates: Array<number>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.dates = params.dates;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class BaseThemeClassic extends TypeBaseTheme {
  protected get [id]() {
    return 0xC3A12462;
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
    return 0xFBD81688;
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
    return 0xB7B31EA8;
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
    return 0x6D5F77EE;
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
    return 0x5B11125A;
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

export class InputThemeSettings extends TypeInputThemeSettings {
  messageColorsAnimated?: true;
  baseTheme: TypeBaseTheme;
  accentColor: number;
  outboxAccentColor?: number;
  messageColors?: Array<number>;
  wallpaper?: TypeInputWallPaper;
  wallpaperSettings?: TypeWallPaperSettings;

  protected get [id]() {
    return 0x8FDE504F;
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
      [this.wallpaperSettings ?? null, TypeWallPaperSettings, "flags.1?WallPaperSettings"],
    ];
  }

  constructor(params: { messageColorsAnimated?: true; baseTheme: TypeBaseTheme; accentColor: number; outboxAccentColor?: number; messageColors?: Array<number>; wallpaper?: TypeInputWallPaper; wallpaperSettings?: TypeWallPaperSettings }) {
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

export class ThemeSettings extends TypeThemeSettings {
  messageColorsAnimated?: true;
  baseTheme: TypeBaseTheme;
  accentColor: number;
  outboxAccentColor?: number;
  messageColors?: Array<number>;
  wallpaper?: TypeWallPaper;

  protected get [id]() {
    return 0xFA58B6D4;
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

  constructor(params: { messageColorsAnimated?: true; baseTheme: TypeBaseTheme; accentColor: number; outboxAccentColor?: number; messageColors?: Array<number>; wallpaper?: TypeWallPaper }) {
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
    return 0x54B56617;
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

  constructor(params?: { documents?: Array<TypeDocument>; settings?: TypeThemeSettings }) {
    super();
    this.documents = params?.documents;
    this.settings = params?.settings;
  }
}

export class WebPageAttributeStory extends TypeWebPageAttribute {
  userId: bigint;
  id: number;
  story?: TypeStoryItem;

  protected get [id]() {
    return 0x939A4671;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["userId", "bigint", "long"],
      ["id", "number", "int"],
      ["story", TypeStoryItem, "flags.0?StoryItem"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.userId, "bigint", "long"],
      [this.id, "number", "int"],
      [this.story ?? null, TypeStoryItem, "flags.0?StoryItem"],
    ];
  }

  constructor(params: { userId: bigint; id: number; story?: TypeStoryItem }) {
    super();
    this.userId = params.userId;
    this.id = params.id;
    this.story = params.story;
  }
}

export class MessagesVotesList extends TypeMessagesVotesList {
  count: number;
  votes: Array<TypeMessagePeerVote>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  nextOffset?: string;

  protected get [id]() {
    return 0x4899484E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["count", "number", "int"],
      ["votes", [TypeMessagePeerVote], "Vector<MessagePeerVote>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["nextOffset", "string", "flags.0?string"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.count, "number", "int"],
      [this.votes, [TypeMessagePeerVote], "Vector<MessagePeerVote>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.nextOffset ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(params: { count: number; votes: Array<TypeMessagePeerVote>; chats: Array<TypeChat>; users: Array<TypeUser>; nextOffset?: string }) {
    super();
    this.count = params.count;
    this.votes = params.votes;
    this.chats = params.chats;
    this.users = params.users;
    this.nextOffset = params.nextOffset;
  }
}

export class BankCardOpenURL extends TypeBankCardOpenURL {
  url: string;
  name: string;

  protected get [id]() {
    return 0xF568028A;
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

export class PaymentsBankCardData extends TypePaymentsBankCardData {
  title: string;
  openUrls: Array<TypeBankCardOpenURL>;

  protected get [id]() {
    return 0x3E24E573;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["title", "string", "string"],
      ["openUrls", [TypeBankCardOpenURL], "Vector<BankCardOpenUrl>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.title, "string", "string"],
      [this.openUrls, [TypeBankCardOpenURL], "Vector<BankCardOpenUrl>"],
    ];
  }

  constructor(params: { title: string; openUrls: Array<TypeBankCardOpenURL> }) {
    super();
    this.title = params.title;
    this.openUrls = params.openUrls;
  }
}

export class DialogFilter extends TypeDialogFilter {
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
    return 0x7438F7E8;
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

  constructor(params: { contacts?: true; nonContacts?: true; groups?: true; broadcasts?: true; bots?: true; excludeMuted?: true; excludeRead?: true; excludeArchived?: true; id: number; title: string; emoticon?: string; pinnedPeers: Array<TypeInputPeer>; includePeers: Array<TypeInputPeer>; excludePeers: Array<TypeInputPeer> }) {
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
    return 0x363293AE;
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

export class DialogFilterChatlist extends TypeDialogFilter {
  hasMyInvites?: true;
  id: number;
  title: string;
  emoticon?: string;
  pinnedPeers: Array<TypeInputPeer>;
  includePeers: Array<TypeInputPeer>;

  protected get [id]() {
    return 0xD64A04A8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hasMyInvites", "true", "flags.26?true"],
      ["id", "number", "int"],
      ["title", "string", "string"],
      ["emoticon", "string", "flags.25?string"],
      ["pinnedPeers", [TypeInputPeer], "Vector<InputPeer>"],
      ["includePeers", [TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hasMyInvites ?? null, "true", "flags.26?true"],
      [this.id, "number", "int"],
      [this.title, "string", "string"],
      [this.emoticon ?? null, "string", "flags.25?string"],
      [this.pinnedPeers, [TypeInputPeer], "Vector<InputPeer>"],
      [this.includePeers, [TypeInputPeer], "Vector<InputPeer>"],
    ];
  }

  constructor(params: { hasMyInvites?: true; id: number; title: string; emoticon?: string; pinnedPeers: Array<TypeInputPeer>; includePeers: Array<TypeInputPeer> }) {
    super();
    this.hasMyInvites = params.hasMyInvites;
    this.id = params.id;
    this.title = params.title;
    this.emoticon = params.emoticon;
    this.pinnedPeers = params.pinnedPeers;
    this.includePeers = params.includePeers;
  }
}

export class DialogFilterSuggested extends TypeDialogFilterSuggested {
  filter: TypeDialogFilter;
  description: string;

  protected get [id]() {
    return 0x77744D4A;
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

export class StatsDateRangeDays extends TypeStatsDateRangeDays {
  minDate: number;
  maxDate: number;

  protected get [id]() {
    return 0xB637EDAF;
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

export class StatsAbsValueAndPrev extends TypeStatsAbsValueAndPrev {
  current: number;
  previous: number;

  protected get [id]() {
    return 0xCB43ACDE;
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

export class StatsPercentValue extends TypeStatsPercentValue {
  part: number;
  total: number;

  protected get [id]() {
    return 0xCBCE2FE0;
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
    return 0x4A27EB2D;
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
    return 0xBEDC9822;
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

export class StatsGraph extends TypeStatsGraph {
  json: TypeDataJSON;
  zoomToken?: string;

  protected get [id]() {
    return 0x8EA464B6;
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

export class MessageInteractionCounters extends TypeMessageInteractionCounters {
  msgId: number;
  views: number;
  forwards: number;

  protected get [id]() {
    return 0xAD4FC9BD;
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

export class StatsBroadcastStats extends TypeStatsBroadcastStats {
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
    return 0xBDF78394;
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
      ["recentMessageInteractions", [TypeMessageInteractionCounters], "Vector<MessageInteractionCounters>"],
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
      [this.recentMessageInteractions, [TypeMessageInteractionCounters], "Vector<MessageInteractionCounters>"],
    ];
  }

  constructor(params: { period: TypeStatsDateRangeDays; followers: TypeStatsAbsValueAndPrev; viewsPerPost: TypeStatsAbsValueAndPrev; sharesPerPost: TypeStatsAbsValueAndPrev; enabledNotifications: TypeStatsPercentValue; growthGraph: TypeStatsGraph; followersGraph: TypeStatsGraph; muteGraph: TypeStatsGraph; topHoursGraph: TypeStatsGraph; interactionsGraph: TypeStatsGraph; ivInteractionsGraph: TypeStatsGraph; viewsBySourceGraph: TypeStatsGraph; newFollowersBySourceGraph: TypeStatsGraph; languagesGraph: TypeStatsGraph; recentMessageInteractions: Array<TypeMessageInteractionCounters> }) {
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
    return 0x98F6AC75;
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

export class HelpPromoData extends TypeHelpPromoData {
  proxy?: true;
  expires: number;
  peer: TypePeer;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  psaType?: string;
  psaMessage?: string;

  protected get [id]() {
    return 0x8C39793F;
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

  constructor(params: { proxy?: true; expires: number; peer: TypePeer; chats: Array<TypeChat>; users: Array<TypeUser>; psaType?: string; psaMessage?: string }) {
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

export class VideoSize extends TypeVideoSize {
  type: string;
  w: number;
  h: number;
  size: number;
  videoStartTs?: number;

  protected get [id]() {
    return 0xDE33B094;
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

  constructor(params: { type: string; w: number; h: number; size: number; videoStartTs?: number }) {
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
    return 0xF85C413C;
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
    return 0x0DA082FE;
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

  constructor(params: { stickerset: TypeInputStickerSet; stickerId: bigint; backgroundColors: Array<number> }) {
    super();
    this.stickerset = params.stickerset;
    this.stickerId = params.stickerId;
    this.backgroundColors = params.backgroundColors;
  }
}

export class StatsGroupTopPoster extends TypeStatsGroupTopPoster {
  userId: bigint;
  messages: number;
  avgChars: number;

  protected get [id]() {
    return 0x9D04AF9B;
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

export class StatsGroupTopAdmin extends TypeStatsGroupTopAdmin {
  userId: bigint;
  deleted: number;
  kicked: number;
  banned: number;

  protected get [id]() {
    return 0xD7584C87;
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

  constructor(params: { userId: bigint; deleted: number; kicked: number; banned: number }) {
    super();
    this.userId = params.userId;
    this.deleted = params.deleted;
    this.kicked = params.kicked;
    this.banned = params.banned;
  }
}

export class StatsGroupTopInviter extends TypeStatsGroupTopInviter {
  userId: bigint;
  invitations: number;

  protected get [id]() {
    return 0x535F779D;
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

export class StatsMegagroupStats extends TypeStatsMegagroupStats {
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
    return 0xEF7FF916;
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
      ["topInviters", [TypeStatsGroupTopInviter], "Vector<StatsGroupTopInviter>"],
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
      [this.topPosters, [TypeStatsGroupTopPoster], "Vector<StatsGroupTopPoster>"],
      [this.topAdmins, [TypeStatsGroupTopAdmin], "Vector<StatsGroupTopAdmin>"],
      [this.topInviters, [TypeStatsGroupTopInviter], "Vector<StatsGroupTopInviter>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { period: TypeStatsDateRangeDays; members: TypeStatsAbsValueAndPrev; messages: TypeStatsAbsValueAndPrev; viewers: TypeStatsAbsValueAndPrev; posters: TypeStatsAbsValueAndPrev; growthGraph: TypeStatsGraph; membersGraph: TypeStatsGraph; newMembersBySourceGraph: TypeStatsGraph; languagesGraph: TypeStatsGraph; messagesGraph: TypeStatsGraph; actionsGraph: TypeStatsGraph; topHoursGraph: TypeStatsGraph; weekdaysGraph: TypeStatsGraph; topPosters: Array<TypeStatsGroupTopPoster>; topAdmins: Array<TypeStatsGroupTopAdmin>; topInviters: Array<TypeStatsGroupTopInviter>; users: Array<TypeUser> }) {
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

export class GlobalPrivacySettings extends TypeGlobalPrivacySettings {
  archiveAndMuteNewNoncontactPeers?: true;
  keepArchivedUnmuted?: true;
  keepArchivedFolders?: true;

  protected get [id]() {
    return 0x734C4CCB;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["archiveAndMuteNewNoncontactPeers", "true", "flags.0?true"],
      ["keepArchivedUnmuted", "true", "flags.1?true"],
      ["keepArchivedFolders", "true", "flags.2?true"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.archiveAndMuteNewNoncontactPeers ?? null, "true", "flags.0?true"],
      [this.keepArchivedUnmuted ?? null, "true", "flags.1?true"],
      [this.keepArchivedFolders ?? null, "true", "flags.2?true"],
    ];
  }

  constructor(params?: { archiveAndMuteNewNoncontactPeers?: true; keepArchivedUnmuted?: true; keepArchivedFolders?: true }) {
    super();
    this.archiveAndMuteNewNoncontactPeers = params?.archiveAndMuteNewNoncontactPeers;
    this.keepArchivedUnmuted = params?.keepArchivedUnmuted;
    this.keepArchivedFolders = params?.keepArchivedFolders;
  }
}

export class HelpCountryCode extends TypeHelpCountryCode {
  countryCode: string;
  prefixes?: Array<string>;
  patterns?: Array<string>;

  protected get [id]() {
    return 0x4203C5EF;
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

  constructor(params: { countryCode: string; prefixes?: Array<string>; patterns?: Array<string> }) {
    super();
    this.countryCode = params.countryCode;
    this.prefixes = params.prefixes;
    this.patterns = params.patterns;
  }
}

export class HelpCountry extends TypeHelpCountry {
  hidden?: true;
  iso2: string;
  defaultName: string;
  name?: string;
  countryCodes: Array<TypeHelpCountryCode>;

  protected get [id]() {
    return 0xC3878E23;
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

  constructor(params: { hidden?: true; iso2: string; defaultName: string; name?: string; countryCodes: Array<TypeHelpCountryCode> }) {
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
    return 0x93CC1F32;
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

export class HelpCountriesList extends TypeHelpCountriesList {
  countries: Array<TypeHelpCountry>;
  hash: number;

  protected get [id]() {
    return 0x87D0759E;
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

export class MessageViews extends TypeMessageViews {
  views?: number;
  forwards?: number;
  replies?: TypeMessageReplies;

  protected get [id]() {
    return 0x455B853D;
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

  constructor(params?: { views?: number; forwards?: number; replies?: TypeMessageReplies }) {
    super();
    this.views = params?.views;
    this.forwards = params?.forwards;
    this.replies = params?.replies;
  }
}

export class MessagesMessageViews extends TypeMessagesMessageViews {
  views: Array<TypeMessageViews>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xB6C4F543;
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

  constructor(params: { views: Array<TypeMessageViews>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.views = params.views;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesDiscussionMessage extends TypeMessagesDiscussionMessage {
  messages: Array<TypeMessage>;
  maxId?: number;
  readInboxMaxId?: number;
  readOutboxMaxId?: number;
  unreadCount: number;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xA6341782;
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

  constructor(params: { messages: Array<TypeMessage>; maxId?: number; readInboxMaxId?: number; readOutboxMaxId?: number; unreadCount: number; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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

export class MessageReplyHeader extends TypeMessageReplyHeader {
  replyToScheduled?: true;
  forumTopic?: true;
  replyToMsgId: number;
  replyToPeerId?: TypePeer;
  replyToTopId?: number;

  protected get [id]() {
    return 0xA6D57763;
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

  constructor(params: { replyToScheduled?: true; forumTopic?: true; replyToMsgId: number; replyToPeerId?: TypePeer; replyToTopId?: number }) {
    super();
    this.replyToScheduled = params.replyToScheduled;
    this.forumTopic = params.forumTopic;
    this.replyToMsgId = params.replyToMsgId;
    this.replyToPeerId = params.replyToPeerId;
    this.replyToTopId = params.replyToTopId;
  }
}

export class MessageReplyStoryHeader extends TypeMessageReplyHeader {
  userId: bigint;
  storyId: number;

  protected get [id]() {
    return 0x9C98BFC1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", "bigint", "long"],
      ["storyId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, "bigint", "long"],
      [this.storyId, "number", "int"],
    ];
  }

  constructor(params: { userId: bigint; storyId: number }) {
    super();
    this.userId = params.userId;
    this.storyId = params.storyId;
  }
}

export class MessageReplies extends TypeMessageReplies {
  comments?: true;
  replies: number;
  repliesPts: number;
  recentRepliers?: Array<TypePeer>;
  channelId?: bigint;
  maxId?: number;
  readMaxId?: number;

  protected get [id]() {
    return 0x83D60FC2;
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

  constructor(params: { comments?: true; replies: number; repliesPts: number; recentRepliers?: Array<TypePeer>; channelId?: bigint; maxId?: number; readMaxId?: number }) {
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

export class PeerBlocked extends TypePeerBlocked {
  peerId: TypePeer;
  date: number;

  protected get [id]() {
    return 0xE8FD8014;
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

export class StatsMessageStats extends TypeStatsMessageStats {
  viewsGraph: TypeStatsGraph;

  protected get [id]() {
    return 0x8999F295;
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
    return 0x7780BCB4;
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

export class GroupCall extends TypeGroupCall {
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
    return 0xD597650C;
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

  constructor(params: { joinMuted?: true; canChangeJoinMuted?: true; joinDateAsc?: true; scheduleStartSubscribed?: true; canStartVideo?: true; recordVideoActive?: true; rtmpStream?: true; listenersHidden?: true; id: bigint; accessHash: bigint; participantsCount: number; title?: string; streamDcId?: number; recordStartDate?: number; scheduleDate?: number; unmutedVideoCount?: number; unmutedVideoLimit: number; version: number }) {
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

export class InputGroupCall extends TypeInputGroupCall {
  id: bigint;
  accessHash: bigint;

  protected get [id]() {
    return 0xD8AA840F;
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

export class GroupCallParticipant extends TypeGroupCallParticipant {
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
    return 0xEBA636FE;
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
      ["video", TypeGroupCallParticipantVideo, "flags.6?GroupCallParticipantVideo"],
      ["presentation", TypeGroupCallParticipantVideo, "flags.14?GroupCallParticipantVideo"],
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
      [this.video ?? null, TypeGroupCallParticipantVideo, "flags.6?GroupCallParticipantVideo"],
      [this.presentation ?? null, TypeGroupCallParticipantVideo, "flags.14?GroupCallParticipantVideo"],
    ];
  }

  constructor(params: { muted?: true; left?: true; canSelfUnmute?: true; justJoined?: true; versioned?: true; min?: true; mutedByYou?: true; volumeByAdmin?: true; self?: true; videoJoined?: true; peer: TypePeer; date: number; activeDate?: number; source: number; volume?: number; about?: string; raiseHandRating?: bigint; video?: TypeGroupCallParticipantVideo; presentation?: TypeGroupCallParticipantVideo }) {
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

export class PhoneGroupCall extends TypePhoneGroupCall {
  call: TypeGroupCall;
  participants: Array<TypeGroupCallParticipant>;
  participantsNextOffset: string;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x9E727AAD;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["call", TypeGroupCall, "GroupCall"],
      ["participants", [TypeGroupCallParticipant], "Vector<GroupCallParticipant>"],
      ["participantsNextOffset", "string", "string"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.call, TypeGroupCall, "GroupCall"],
      [this.participants, [TypeGroupCallParticipant], "Vector<GroupCallParticipant>"],
      [this.participantsNextOffset, "string", "string"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { call: TypeGroupCall; participants: Array<TypeGroupCallParticipant>; participantsNextOffset: string; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.call = params.call;
    this.participants = params.participants;
    this.participantsNextOffset = params.participantsNextOffset;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class PhoneGroupParticipants extends TypePhoneGroupParticipants {
  count: number;
  participants: Array<TypeGroupCallParticipant>;
  nextOffset: string;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  version: number;

  protected get [id]() {
    return 0xF47751B6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["participants", [TypeGroupCallParticipant], "Vector<GroupCallParticipant>"],
      ["nextOffset", "string", "string"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
      ["version", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.participants, [TypeGroupCallParticipant], "Vector<GroupCallParticipant>"],
      [this.nextOffset, "string", "string"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.version, "number", "int"],
    ];
  }

  constructor(params: { count: number; participants: Array<TypeGroupCallParticipant>; nextOffset: string; chats: Array<TypeChat>; users: Array<TypeUser>; version: number }) {
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
    return 0x3081ED9D;
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
    return 0x833C0FAC;
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
    return 0xD766C50A;
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
    return 0x5EC4BE43;
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
    return 0x6334EE9A;
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

export class InlineQueryPeerTypeBotPM extends TypeInlineQueryPeerType {
  protected get [id]() {
    return 0x0E3B2D0C;
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

export class MessagesHistoryImport extends TypeMessagesHistoryImport {
  id: bigint;

  protected get [id]() {
    return 0x1662AF0B;
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

export class MessagesHistoryImportParsed extends TypeMessagesHistoryImportParsed {
  pm?: true;
  group?: true;
  title?: string;

  protected get [id]() {
    return 0x5E0FB7B9;
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

  constructor(params?: { pm?: true; group?: true; title?: string }) {
    super();
    this.pm = params?.pm;
    this.group = params?.group;
    this.title = params?.title;
  }
}

export class MessagesAffectedFoundMessages extends TypeMessagesAffectedFoundMessages {
  pts: number;
  ptsCount: number;
  offset: number;
  messages: Array<number>;

  protected get [id]() {
    return 0xEF8D3E6C;
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

  constructor(params: { pts: number; ptsCount: number; offset: number; messages: Array<number> }) {
    super();
    this.pts = params.pts;
    this.ptsCount = params.ptsCount;
    this.offset = params.offset;
    this.messages = params.messages;
  }
}

export class ChatInviteImporter extends TypeChatInviteImporter {
  requested?: true;
  viaChatlist?: true;
  userId: bigint;
  date: number;
  about?: string;
  approvedBy?: bigint;

  protected get [id]() {
    return 0x8C5ADFD9;
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

  constructor(params: { requested?: true; viaChatlist?: true; userId: bigint; date: number; about?: string; approvedBy?: bigint }) {
    super();
    this.requested = params.requested;
    this.viaChatlist = params.viaChatlist;
    this.userId = params.userId;
    this.date = params.date;
    this.about = params.about;
    this.approvedBy = params.approvedBy;
  }
}

export class MessagesExportedChatInvites extends TypeMessagesExportedChatInvites {
  count: number;
  invites: Array<TypeExportedChatInvite>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xBDC62DCC;
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

  constructor(params: { count: number; invites: Array<TypeExportedChatInvite>; users: Array<TypeUser> }) {
    super();
    this.count = params.count;
    this.invites = params.invites;
    this.users = params.users;
  }
}

export class MessagesExportedChatInvite extends TypeMessagesExportedChatInvite {
  invite: TypeExportedChatInvite;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x1871BE50;
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

  constructor(params: { invite: TypeExportedChatInvite; users: Array<TypeUser> }) {
    super();
    this.invite = params.invite;
    this.users = params.users;
  }
}

export class MessagesExportedChatInviteReplaced extends TypeMessagesExportedChatInvite {
  invite: TypeExportedChatInvite;
  newInvite: TypeExportedChatInvite;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x222600EF;
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

  constructor(params: { invite: TypeExportedChatInvite; newInvite: TypeExportedChatInvite; users: Array<TypeUser> }) {
    super();
    this.invite = params.invite;
    this.newInvite = params.newInvite;
    this.users = params.users;
  }
}

export class MessagesChatInviteImporters extends TypeMessagesChatInviteImporters {
  count: number;
  importers: Array<TypeChatInviteImporter>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x81B6B00A;
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

  constructor(params: { count: number; importers: Array<TypeChatInviteImporter>; users: Array<TypeUser> }) {
    super();
    this.count = params.count;
    this.importers = params.importers;
    this.users = params.users;
  }
}

export class ChatAdminWithInvites extends TypeChatAdminWithInvites {
  adminId: bigint;
  invitesCount: number;
  revokedInvitesCount: number;

  protected get [id]() {
    return 0xF2ECEF23;
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

  constructor(params: { adminId: bigint; invitesCount: number; revokedInvitesCount: number }) {
    super();
    this.adminId = params.adminId;
    this.invitesCount = params.invitesCount;
    this.revokedInvitesCount = params.revokedInvitesCount;
  }
}

export class MessagesChatAdminsWithInvites extends TypeMessagesChatAdminsWithInvites {
  admins: Array<TypeChatAdminWithInvites>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xB69B72D7;
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

  constructor(params: { admins: Array<TypeChatAdminWithInvites>; users: Array<TypeUser> }) {
    super();
    this.admins = params.admins;
    this.users = params.users;
  }
}

export class MessagesCheckedHistoryImportPeer extends TypeMessagesCheckedHistoryImportPeer {
  confirmText: string;

  protected get [id]() {
    return 0xA24DE717;
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

export class PhoneJoinAsPeers extends TypePhoneJoinAsPeers {
  peers: Array<TypePeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xAFE5623F;
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

  constructor(params: { peers: Array<TypePeer>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.peers = params.peers;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class PhoneExportedGroupCallInvite extends TypePhoneExportedGroupCallInvite {
  link: string;

  protected get [id]() {
    return 0x204BD158;
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

export class GroupCallParticipantVideoSourceGroup extends TypeGroupCallParticipantVideoSourceGroup {
  semantics: string;
  sources: Array<number>;

  protected get [id]() {
    return 0xDCB118B7;
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

export class GroupCallParticipantVideo extends TypeGroupCallParticipantVideo {
  paused?: true;
  endpoint: string;
  sourceGroups: Array<TypeGroupCallParticipantVideoSourceGroup>;
  audioSource?: number;

  protected get [id]() {
    return 0x67753AC8;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["paused", "true", "flags.0?true"],
      ["endpoint", "string", "string"],
      ["sourceGroups", [TypeGroupCallParticipantVideoSourceGroup], "Vector<GroupCallParticipantVideoSourceGroup>"],
      ["audioSource", "number", "flags.1?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.paused ?? null, "true", "flags.0?true"],
      [this.endpoint, "string", "string"],
      [this.sourceGroups, [TypeGroupCallParticipantVideoSourceGroup], "Vector<GroupCallParticipantVideoSourceGroup>"],
      [this.audioSource ?? null, "number", "flags.1?int"],
    ];
  }

  constructor(params: { paused?: true; endpoint: string; sourceGroups: Array<TypeGroupCallParticipantVideoSourceGroup>; audioSource?: number }) {
    super();
    this.paused = params.paused;
    this.endpoint = params.endpoint;
    this.sourceGroups = params.sourceGroups;
    this.audioSource = params.audioSource;
  }
}

export class StickersSuggestedShortName extends TypeStickersSuggestedShortName {
  shortName: string;

  protected get [id]() {
    return 0x85FEA03F;
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
    return 0x2F6CB2AB;
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
    return 0x3C4F04D8;
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
    return 0x6FE1A881;
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
    return 0xB9AA606A;
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
    return 0xDB9D897D;
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
    return 0x3FD863D1;
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
    return 0x0A1321F3;
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

export class AccountResetPasswordFailedWait extends TypeAccountResetPasswordResult {
  retryDate: number;

  protected get [id]() {
    return 0xE3779861;
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

export class AccountResetPasswordRequestedWait extends TypeAccountResetPasswordResult {
  untilDate: number;

  protected get [id]() {
    return 0xE9EFFC7D;
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
    return 0xE926D63E;
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

export class SponsoredMessage extends TypeSponsoredMessage {
  recommended?: true;
  showPeerPhoto?: true;
  randomId: Uint8Array;
  fromId?: TypePeer;
  chatInvite?: TypeChatInvite;
  chatInviteHash?: string;
  channelPost?: number;
  startParam?: string;
  webpage?: TypeSponsoredWebPage;
  message: string;
  entities?: Array<TypeMessageEntity>;
  sponsorInfo?: string;
  additionalInfo?: string;

  protected get [id]() {
    return 0xDAAFFF6B;
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
      ["webpage", TypeSponsoredWebPage, "flags.9?SponsoredWebPage"],
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
      [this.webpage ?? null, TypeSponsoredWebPage, "flags.9?SponsoredWebPage"],
      [this.message, "string", "string"],
      [this.entities ?? null, [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.sponsorInfo ?? null, "string", "flags.7?string"],
      [this.additionalInfo ?? null, "string", "flags.8?string"],
    ];
  }

  constructor(params: { recommended?: true; showPeerPhoto?: true; randomId: Uint8Array; fromId?: TypePeer; chatInvite?: TypeChatInvite; chatInviteHash?: string; channelPost?: number; startParam?: string; webpage?: TypeSponsoredWebPage; message: string; entities?: Array<TypeMessageEntity>; sponsorInfo?: string; additionalInfo?: string }) {
    super();
    this.recommended = params.recommended;
    this.showPeerPhoto = params.showPeerPhoto;
    this.randomId = params.randomId;
    this.fromId = params.fromId;
    this.chatInvite = params.chatInvite;
    this.chatInviteHash = params.chatInviteHash;
    this.channelPost = params.channelPost;
    this.startParam = params.startParam;
    this.webpage = params.webpage;
    this.message = params.message;
    this.entities = params.entities;
    this.sponsorInfo = params.sponsorInfo;
    this.additionalInfo = params.additionalInfo;
  }
}

export class MessagesSponsoredMessages extends TypeMessagesSponsoredMessages {
  postsBetween?: number;
  messages: Array<TypeSponsoredMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xC9EE1D87;
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

  constructor(params: { postsBetween?: number; messages: Array<TypeSponsoredMessage>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.postsBetween = params.postsBetween;
    this.messages = params.messages;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesSponsoredMessagesEmpty extends TypeMessagesSponsoredMessages {
  protected get [id]() {
    return 0x1839490F;
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

export class SearchResultsCalendarPeriod extends TypeSearchResultsCalendarPeriod {
  date: number;
  minMsgId: number;
  maxMsgId: number;
  count: number;

  protected get [id]() {
    return 0xC9B0539F;
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

  constructor(params: { date: number; minMsgId: number; maxMsgId: number; count: number }) {
    super();
    this.date = params.date;
    this.minMsgId = params.minMsgId;
    this.maxMsgId = params.maxMsgId;
    this.count = params.count;
  }
}

export class MessagesSearchResultsCalendar extends TypeMessagesSearchResultsCalendar {
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
    return 0x147EE23C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["inexact", "true", "flags.0?true"],
      ["count", "number", "int"],
      ["minDate", "number", "int"],
      ["minMsgId", "number", "int"],
      ["offsetIdOffset", "number", "flags.1?int"],
      ["periods", [TypeSearchResultsCalendarPeriod], "Vector<SearchResultsCalendarPeriod>"],
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
      [this.periods, [TypeSearchResultsCalendarPeriod], "Vector<SearchResultsCalendarPeriod>"],
      [this.messages, [TypeMessage], "Vector<Message>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { inexact?: true; count: number; minDate: number; minMsgId: number; offsetIdOffset?: number; periods: Array<TypeSearchResultsCalendarPeriod>; messages: Array<TypeMessage>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0x7F648B67;
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

export class MessagesSearchResultsPositions extends TypeMessagesSearchResultsPositions {
  count: number;
  positions: Array<TypeSearchResultsPosition>;

  protected get [id]() {
    return 0x53B22BAF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["positions", [TypeSearchResultsPosition], "Vector<SearchResultsPosition>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.positions, [TypeSearchResultsPosition], "Vector<SearchResultsPosition>"],
    ];
  }

  constructor(params: { count: number; positions: Array<TypeSearchResultsPosition> }) {
    super();
    this.count = params.count;
    this.positions = params.positions;
  }
}

export class ChannelsSendAsPeers extends TypeChannelsSendAsPeers {
  peers: Array<TypeSendAsPeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xF496B0C6;
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

  constructor(params: { peers: Array<TypeSendAsPeer>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.peers = params.peers;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class UsersUserFull extends TypeUsersUserFull {
  fullUser: TypeUserFull;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x3B6D152E;
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

  constructor(params: { fullUser: TypeUserFull; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.fullUser = params.fullUser;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class MessagesPeerSettings extends TypeMessagesPeerSettings {
  settings: TypePeerSettings;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x6880B94D;
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

  constructor(params: { settings: TypePeerSettings; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.settings = params.settings;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class AuthLoggedOut extends TypeAuthLoggedOut {
  futureAuthToken?: Uint8Array;

  protected get [id]() {
    return 0xC3A2835F;
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

  constructor(params?: { futureAuthToken?: Uint8Array }) {
    super();
    this.futureAuthToken = params?.futureAuthToken;
  }
}

export class ReactionCount extends TypeReactionCount {
  chosenOrder?: number;
  reaction: TypeReaction;
  count: number;

  protected get [id]() {
    return 0xA3D1CB80;
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

  constructor(params: { chosenOrder?: number; reaction: TypeReaction; count: number }) {
    super();
    this.chosenOrder = params.chosenOrder;
    this.reaction = params.reaction;
    this.count = params.count;
  }
}

export class MessageReactions extends TypeMessageReactions {
  min?: true;
  canSeeList?: true;
  results: Array<TypeReactionCount>;
  recentReactions?: Array<TypeMessagePeerReaction>;

  protected get [id]() {
    return 0x4F2B9479;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["min", "true", "flags.0?true"],
      ["canSeeList", "true", "flags.2?true"],
      ["results", [TypeReactionCount], "Vector<ReactionCount>"],
      ["recentReactions", [TypeMessagePeerReaction], "flags.1?Vector<MessagePeerReaction>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.min ?? null, "true", "flags.0?true"],
      [this.canSeeList ?? null, "true", "flags.2?true"],
      [this.results, [TypeReactionCount], "Vector<ReactionCount>"],
      [this.recentReactions ?? null, [TypeMessagePeerReaction], "flags.1?Vector<MessagePeerReaction>"],
    ];
  }

  constructor(params: { min?: true; canSeeList?: true; results: Array<TypeReactionCount>; recentReactions?: Array<TypeMessagePeerReaction> }) {
    super();
    this.min = params.min;
    this.canSeeList = params.canSeeList;
    this.results = params.results;
    this.recentReactions = params.recentReactions;
  }
}

export class MessagesMessageReactionsList extends TypeMessagesMessageReactionsList {
  count: number;
  reactions: Array<TypeMessagePeerReaction>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  nextOffset?: string;

  protected get [id]() {
    return 0x31BD492D;
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
      [this.reactions, [TypeMessagePeerReaction], "Vector<MessagePeerReaction>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
      [this.nextOffset ?? null, "string", "flags.0?string"],
    ];
  }

  constructor(params: { count: number; reactions: Array<TypeMessagePeerReaction>; chats: Array<TypeChat>; users: Array<TypeUser>; nextOffset?: string }) {
    super();
    this.count = params.count;
    this.reactions = params.reactions;
    this.chats = params.chats;
    this.users = params.users;
    this.nextOffset = params.nextOffset;
  }
}

export class AvailableReaction extends TypeAvailableReaction {
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
    return 0xC077EC01;
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

  constructor(params: { inactive?: true; premium?: true; reaction: string; title: string; staticIcon: TypeDocument; appearAnimation: TypeDocument; selectAnimation: TypeDocument; activateAnimation: TypeDocument; effectAnimation: TypeDocument; aroundAnimation?: TypeDocument; centerIcon?: TypeDocument }) {
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

export class MessagesAvailableReactionsNotModified extends TypeMessagesAvailableReactions {
  protected get [id]() {
    return 0x9F071957;
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

export class MessagesAvailableReactions extends TypeMessagesAvailableReactions {
  hash: number;
  reactions: Array<TypeAvailableReaction>;

  protected get [id]() {
    return 0x768E3AAD;
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

  constructor(params: { hash: number; reactions: Array<TypeAvailableReaction> }) {
    super();
    this.hash = params.hash;
    this.reactions = params.reactions;
  }
}

export class MessagePeerReaction extends TypeMessagePeerReaction {
  big?: true;
  unread?: true;
  my?: true;
  peerId: TypePeer;
  date: number;
  reaction: TypeReaction;

  protected get [id]() {
    return 0x8C79B63C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["big", "true", "flags.0?true"],
      ["unread", "true", "flags.1?true"],
      ["my", "true", "flags.2?true"],
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
      [this.my ?? null, "true", "flags.2?true"],
      [this.peerId, TypePeer, "Peer"],
      [this.date, "number", "int"],
      [this.reaction, TypeReaction, "Reaction"],
    ];
  }

  constructor(params: { big?: true; unread?: true; my?: true; peerId: TypePeer; date: number; reaction: TypeReaction }) {
    super();
    this.big = params.big;
    this.unread = params.unread;
    this.my = params.my;
    this.peerId = params.peerId;
    this.date = params.date;
    this.reaction = params.reaction;
  }
}

export class GroupCallStreamChannel extends TypeGroupCallStreamChannel {
  channel: number;
  scale: number;
  lastTimestampMs: bigint;

  protected get [id]() {
    return 0x80EB48AF;
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

  constructor(params: { channel: number; scale: number; lastTimestampMs: bigint }) {
    super();
    this.channel = params.channel;
    this.scale = params.scale;
    this.lastTimestampMs = params.lastTimestampMs;
  }
}

export class PhoneGroupCallStreamChannels extends TypePhoneGroupCallStreamChannels {
  channels: Array<TypeGroupCallStreamChannel>;

  protected get [id]() {
    return 0xD0E482B2;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["channels", [TypeGroupCallStreamChannel], "Vector<GroupCallStreamChannel>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.channels, [TypeGroupCallStreamChannel], "Vector<GroupCallStreamChannel>"],
    ];
  }

  constructor(params: { channels: Array<TypeGroupCallStreamChannel> }) {
    super();
    this.channels = params.channels;
  }
}

export class PhoneGroupCallStreamRtmpURL extends TypePhoneGroupCallStreamRtmpURL {
  url: string;
  key: string;

  protected get [id]() {
    return 0x2DBF3432;
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

export class AttachMenuBotIconColor extends TypeAttachMenuBotIconColor {
  name: string;
  color: number;

  protected get [id]() {
    return 0x4576F3F0;
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

export class AttachMenuBotIcon extends TypeAttachMenuBotIcon {
  name: string;
  icon: TypeDocument;
  colors?: Array<TypeAttachMenuBotIconColor>;

  protected get [id]() {
    return 0xB2A7386B;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["name", "string", "string"],
      ["icon", TypeDocument, "Document"],
      ["colors", [TypeAttachMenuBotIconColor], "flags.0?Vector<AttachMenuBotIconColor>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.name, "string", "string"],
      [this.icon, TypeDocument, "Document"],
      [this.colors ?? null, [TypeAttachMenuBotIconColor], "flags.0?Vector<AttachMenuBotIconColor>"],
    ];
  }

  constructor(params: { name: string; icon: TypeDocument; colors?: Array<TypeAttachMenuBotIconColor> }) {
    super();
    this.name = params.name;
    this.icon = params.icon;
    this.colors = params.colors;
  }
}

export class AttachMenuBot extends TypeAttachMenuBot {
  inactive?: true;
  hasSettings?: true;
  requestWriteAccess?: true;
  botId: bigint;
  shortName: string;
  peerTypes: Array<TypeAttachMenuPeerType>;
  icons: Array<TypeAttachMenuBotIcon>;

  protected get [id]() {
    return 0xC8AA2CD2;
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

  constructor(params: { inactive?: true; hasSettings?: true; requestWriteAccess?: true; botId: bigint; shortName: string; peerTypes: Array<TypeAttachMenuPeerType>; icons: Array<TypeAttachMenuBotIcon> }) {
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
    return 0xF1D88A5C;
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

export class AttachMenuBots extends TypeAttachMenuBots {
  hash: bigint;
  bots: Array<TypeAttachMenuBot>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x3C4301C0;
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

  constructor(params: { hash: bigint; bots: Array<TypeAttachMenuBot>; users: Array<TypeUser> }) {
    super();
    this.hash = params.hash;
    this.bots = params.bots;
    this.users = params.users;
  }
}

export class AttachMenuBotsBot extends TypeAttachMenuBotsBot {
  bot: TypeAttachMenuBot;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x93BF667F;
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

export class WebViewResultURL extends TypeWebViewResult {
  queryId: bigint;
  url: string;

  protected get [id]() {
    return 0x0C14557C;
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

export class SimpleWebViewResultURL extends TypeSimpleWebViewResult {
  url: string;

  protected get [id]() {
    return 0x882F76BB;
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

export class WebViewMessageSent extends TypeWebViewMessageSent {
  msgId?: TypeInputBotInlineMessageID;

  protected get [id]() {
    return 0x0C94511C;
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
      [this.msgId ?? null, TypeInputBotInlineMessageID, "flags.0?InputBotInlineMessageID"],
    ];
  }

  constructor(params?: { msgId?: TypeInputBotInlineMessageID }) {
    super();
    this.msgId = params?.msgId;
  }
}

export class BotMenuButtonDefault extends TypeBotMenuButton {
  protected get [id]() {
    return 0x7533A588;
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
    return 0x4258C205;
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

export class BotMenuButton extends TypeBotMenuButton {
  text: string;
  url: string;

  protected get [id]() {
    return 0xC7B57CE6;
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

export class AccountSavedRingtonesNotModified extends TypeAccountSavedRingtones {
  protected get [id]() {
    return 0xFBF6E8B1;
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

export class AccountSavedRingtones extends TypeAccountSavedRingtones {
  hash: bigint;
  ringtones: Array<TypeDocument>;

  protected get [id]() {
    return 0xC1E92CC5;
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
    return 0x97E8BEBE;
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
    return 0x6F0C34DF;
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
    return 0x830B9AE4;
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
    return 0xFF6C8049;
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

export class AccountSavedRingtone extends TypeAccountSavedRingtone {
  protected get [id]() {
    return 0xB7263F6D;
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
    return 0x1F307EB7;
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
    return 0x7D6BE90E;
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
    return 0xC32BFA1A;
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
    return 0xF146D31F;
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
    return 0x0509113F;
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
    return 0x7BFBDEFC;
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
    return 0xC5B56859;
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
    return 0xC326CAEF;
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

export class PaymentsExportedInvoice extends TypePaymentsExportedInvoice {
  url: string;

  protected get [id]() {
    return 0xAED0CBD9;
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

export class MessagesTranscribedAudio extends TypeMessagesTranscribedAudio {
  pending?: true;
  transcriptionId: bigint;
  text: string;

  protected get [id]() {
    return 0x93752C52;
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

  constructor(params: { pending?: true; transcriptionId: bigint; text: string }) {
    super();
    this.pending = params.pending;
    this.transcriptionId = params.transcriptionId;
    this.text = params.text;
  }
}

export class HelpPremiumPromo extends TypeHelpPremiumPromo {
  statusText: string;
  statusEntities: Array<TypeMessageEntity>;
  videoSections: Array<string>;
  videos: Array<TypeDocument>;
  periodOptions: Array<TypePremiumSubscriptionOption>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x5334759C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["statusText", "string", "string"],
      ["statusEntities", [TypeMessageEntity], "Vector<MessageEntity>"],
      ["videoSections", ["string"], "Vector<string>"],
      ["videos", [TypeDocument], "Vector<Document>"],
      ["periodOptions", [TypePremiumSubscriptionOption], "Vector<PremiumSubscriptionOption>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.statusText, "string", "string"],
      [this.statusEntities, [TypeMessageEntity], "Vector<MessageEntity>"],
      [this.videoSections, ["string"], "Vector<string>"],
      [this.videos, [TypeDocument], "Vector<Document>"],
      [this.periodOptions, [TypePremiumSubscriptionOption], "Vector<PremiumSubscriptionOption>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { statusText: string; statusEntities: Array<TypeMessageEntity>; videoSections: Array<string>; videos: Array<TypeDocument>; periodOptions: Array<TypePremiumSubscriptionOption>; users: Array<TypeUser> }) {
    super();
    this.statusText = params.statusText;
    this.statusEntities = params.statusEntities;
    this.videoSections = params.videoSections;
    this.videos = params.videos;
    this.periodOptions = params.periodOptions;
    this.users = params.users;
  }
}

export class InputStorePaymentPremiumSubscription extends TypeInputStorePaymentPurpose {
  restore?: true;
  upgrade?: true;

  protected get [id]() {
    return 0xA6751E66;
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

  constructor(params?: { restore?: true; upgrade?: true }) {
    super();
    this.restore = params?.restore;
    this.upgrade = params?.upgrade;
  }
}

export class InputStorePaymentGiftPremium extends TypeInputStorePaymentPurpose {
  userId: TypeInputUser;
  currency: string;
  amount: bigint;

  protected get [id]() {
    return 0x616F7FE8;
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

  constructor(params: { userId: TypeInputUser; currency: string; amount: bigint }) {
    super();
    this.userId = params.userId;
    this.currency = params.currency;
    this.amount = params.amount;
  }
}

export class PremiumGiftOption extends TypePremiumGiftOption {
  months: number;
  currency: string;
  amount: bigint;
  botUrl: string;
  storeProduct?: string;

  protected get [id]() {
    return 0x74C34319;
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

  constructor(params: { months: number; currency: string; amount: bigint; botUrl: string; storeProduct?: string }) {
    super();
    this.months = params.months;
    this.currency = params.currency;
    this.amount = params.amount;
    this.botUrl = params.botUrl;
    this.storeProduct = params.storeProduct;
  }
}

export class PaymentFormMethod extends TypePaymentFormMethod {
  url: string;
  title: string;

  protected get [id]() {
    return 0x88F8F21B;
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
    return 0x2DE11AAE;
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

export class EmojiStatus extends TypeEmojiStatus {
  documentId: bigint;

  protected get [id]() {
    return 0x929B619D;
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
    return 0xFA30A8C7;
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
    return 0xD08CE645;
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

export class AccountEmojiStatuses extends TypeAccountEmojiStatuses {
  hash: bigint;
  statuses: Array<TypeEmojiStatus>;

  protected get [id]() {
    return 0x90C467D1;
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
    return 0x79F5D419;
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
    return 0x1B2286B8;
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
    return 0x8935FC73;
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
    return 0xEAFC32BC;
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
    return 0x52928BCA;
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

  constructor(params?: { allowCustom?: true }) {
    super();
    this.allowCustom = params?.allowCustom;
  }
}

export class ChatReactionsSome extends TypeChatReactions {
  reactions: Array<TypeReaction>;

  protected get [id]() {
    return 0x661D4037;
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
    return 0xB06FDBDF;
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

export class MessagesReactions extends TypeMessagesReactions {
  hash: bigint;
  reactions: Array<TypeReaction>;

  protected get [id]() {
    return 0xEAFDF716;
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
    return 0x4345BE73;
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
    return 0x527D22EB;
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
    return 0xBBF51685;
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
    return 0x922E55A9;
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
    return 0xDB909EC2;
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
    return 0x96D074FD;
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

export class AccountEmailVerified extends TypeAccountEmailVerified {
  email: string;

  protected get [id]() {
    return 0x2B96CD1B;
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
    return 0xE1BB0D61;
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

export class PremiumSubscriptionOption extends TypePremiumSubscriptionOption {
  current?: true;
  canPurchaseUpgrade?: true;
  transaction?: string;
  months: number;
  currency: string;
  amount: bigint;
  botUrl: string;
  storeProduct?: string;

  protected get [id]() {
    return 0x5F2D1DF2;
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

  constructor(params: { current?: true; canPurchaseUpgrade?: true; transaction?: string; months: number; currency: string; amount: bigint; botUrl: string; storeProduct?: string }) {
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

export class SendAsPeer extends TypeSendAsPeer {
  premiumRequired?: true;
  peer: TypePeer;

  protected get [id]() {
    return 0xB81C7034;
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
    return 0xAD628CC8;
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

  constructor(params?: { w?: number; h?: number; thumb?: TypePhotoSize; videoDuration?: number }) {
    super();
    this.w = params?.w;
    this.h = params?.h;
    this.thumb = params?.thumb;
    this.videoDuration = params?.videoDuration;
  }
}

export class MessageExtendedMedia extends TypeMessageExtendedMedia {
  media: TypeMessageMedia;

  protected get [id]() {
    return 0xEE479C64;
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

export class StickerKeyword extends TypeStickerKeyword {
  documentId: bigint;
  keyword: Array<string>;

  protected get [id]() {
    return 0xFCFEB29C;
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

export class Username extends TypeUsername {
  editable?: true;
  active?: true;
  username: string;

  protected get [id]() {
    return 0xB4073647;
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
    return 0x023F109B;
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

export class ForumTopic extends TypeForumTopic {
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
    return 0x71701DA9;
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

  constructor(params: { my?: true; closed?: true; pinned?: true; short?: true; hidden?: true; id: number; date: number; title: string; iconColor: number; iconEmojiId?: bigint; topMessage: number; readInboxMaxId: number; readOutboxMaxId: number; unreadCount: number; unreadMentionsCount: number; unreadReactionsCount: number; fromId: TypePeer; notifySettings: TypePeerNotifySettings; draft?: TypeDraftMessage }) {
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

export class MessagesForumTopics extends TypeMessagesForumTopics {
  orderByCreateDate?: true;
  count: number;
  topics: Array<TypeForumTopic>;
  messages: Array<TypeMessage>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;
  pts: number;

  protected get [id]() {
    return 0x367617D3;
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

  constructor(params: { orderByCreateDate?: true; count: number; topics: Array<TypeForumTopic>; messages: Array<TypeMessage>; chats: Array<TypeChat>; users: Array<TypeUser>; pts: number }) {
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

export class DefaultHistoryTTL extends TypeDefaultHistoryTTL {
  period: number;

  protected get [id]() {
    return 0x43B46B20;
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

export class ExportedContactToken extends TypeExportedContactToken {
  url: string;
  expires: number;

  protected get [id]() {
    return 0x41BF109B;
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
    return 0x5F3B8A00;
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

  constructor(params?: { bot?: boolean; premium?: boolean }) {
    super();
    this.bot = params?.bot;
    this.premium = params?.premium;
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
    return 0xC9F06E1B;
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
      [this.userAdminRights ?? null, TypeChatAdminRights, "flags.1?ChatAdminRights"],
      [this.botAdminRights ?? null, TypeChatAdminRights, "flags.2?ChatAdminRights"],
    ];
  }

  constructor(params?: { creator?: true; botParticipant?: true; hasUsername?: boolean; forum?: boolean; userAdminRights?: TypeChatAdminRights; botAdminRights?: TypeChatAdminRights }) {
    super();
    this.creator = params?.creator;
    this.botParticipant = params?.botParticipant;
    this.hasUsername = params?.hasUsername;
    this.forum = params?.forum;
    this.userAdminRights = params?.userAdminRights;
    this.botAdminRights = params?.botAdminRights;
  }
}

export class RequestPeerTypeBroadcast extends TypeRequestPeerType {
  creator?: true;
  hasUsername?: boolean;
  userAdminRights?: TypeChatAdminRights;
  botAdminRights?: TypeChatAdminRights;

  protected get [id]() {
    return 0x339BEF6C;
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
      [this.userAdminRights ?? null, TypeChatAdminRights, "flags.1?ChatAdminRights"],
      [this.botAdminRights ?? null, TypeChatAdminRights, "flags.2?ChatAdminRights"],
    ];
  }

  constructor(params?: { creator?: true; hasUsername?: boolean; userAdminRights?: TypeChatAdminRights; botAdminRights?: TypeChatAdminRights }) {
    super();
    this.creator = params?.creator;
    this.hasUsername = params?.hasUsername;
    this.userAdminRights = params?.userAdminRights;
    this.botAdminRights = params?.botAdminRights;
  }
}

export class EmojiListNotModified extends TypeEmojiList {
  protected get [id]() {
    return 0x481EADFA;
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

export class EmojiList extends TypeEmojiList {
  hash: bigint;
  documentId: Array<bigint>;

  protected get [id]() {
    return 0x7A1E11D1;
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

export class EmojiGroup extends TypeEmojiGroup {
  title: string;
  iconEmojiId: bigint;
  emoticons: Array<string>;

  protected get [id]() {
    return 0x7A9ABDA9;
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

  constructor(params: { title: string; iconEmojiId: bigint; emoticons: Array<string> }) {
    super();
    this.title = params.title;
    this.iconEmojiId = params.iconEmojiId;
    this.emoticons = params.emoticons;
  }
}

export class MessagesEmojiGroupsNotModified extends TypeMessagesEmojiGroups {
  protected get [id]() {
    return 0x6FB4AD87;
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

export class MessagesEmojiGroups extends TypeMessagesEmojiGroups {
  hash: number;
  groups: Array<TypeEmojiGroup>;

  protected get [id]() {
    return 0x881FB94B;
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

export class TextWithEntities extends TypeTextWithEntities {
  text: string;
  entities: Array<TypeMessageEntity>;

  protected get [id]() {
    return 0x751F3146;
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
    return 0x33DB32F8;
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

export class AutoSaveSettings extends TypeAutoSaveSettings {
  photos?: true;
  videos?: true;
  videoMaxSize?: bigint;

  protected get [id]() {
    return 0xC84834CE;
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

  constructor(params?: { photos?: true; videos?: true; videoMaxSize?: bigint }) {
    super();
    this.photos = params?.photos;
    this.videos = params?.videos;
    this.videoMaxSize = params?.videoMaxSize;
  }
}

export class AutoSaveException extends TypeAutoSaveException {
  peer: TypePeer;
  settings: TypeAutoSaveSettings;

  protected get [id]() {
    return 0x81602D47;
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

export class AccountAutoSaveSettings extends TypeAccountAutoSaveSettings {
  usersSettings: TypeAutoSaveSettings;
  chatsSettings: TypeAutoSaveSettings;
  broadcastsSettings: TypeAutoSaveSettings;
  exceptions: Array<TypeAutoSaveException>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x4C3E069D;
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

  constructor(params: { usersSettings: TypeAutoSaveSettings; chatsSettings: TypeAutoSaveSettings; broadcastsSettings: TypeAutoSaveSettings; exceptions: Array<TypeAutoSaveException>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
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
    return 0x7CDE641D;
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

export class HelpAppConfig extends TypeHelpAppConfig {
  hash: number;
  config: TypeJSONValue;

  protected get [id]() {
    return 0xDD18782E;
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
    return 0xA920BD7A;
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
    return 0x908C0407;
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
    return 0x5DA674B7;
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

export class BotApp extends TypeBotApp {
  id: bigint;
  accessHash: bigint;
  shortName: string;
  title: string;
  description: string;
  photo: TypePhoto;
  document?: TypeDocument;
  hash: bigint;

  protected get [id]() {
    return 0x95FCD1D6;
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

  constructor(params: { id: bigint; accessHash: bigint; shortName: string; title: string; description: string; photo: TypePhoto; document?: TypeDocument; hash: bigint }) {
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

export class MessagesBotApp extends TypeMessagesBotApp {
  inactive?: true;
  requestWriteAccess?: true;
  app: TypeBotApp;

  protected get [id]() {
    return 0xEB50ADF5;
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

  constructor(params: { inactive?: true; requestWriteAccess?: true; app: TypeBotApp }) {
    super();
    this.inactive = params.inactive;
    this.requestWriteAccess = params.requestWriteAccess;
    this.app = params.app;
  }
}

export class AppWebViewResultURL extends TypeAppWebViewResult {
  url: string;

  protected get [id]() {
    return 0x3C1B4F0D;
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

export class InlineBotWebView extends TypeInlineBotWebView {
  text: string;
  url: string;

  protected get [id]() {
    return 0xB57295D5;
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

export class ReadParticipantDate extends TypeReadParticipantDate {
  userId: bigint;
  date: number;

  protected get [id]() {
    return 0x4A4FF172;
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

export class InputChatlistDialogFilter extends TypeInputChatlist {
  filterId: number;

  protected get [id]() {
    return 0xF3E0DA33;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["filterId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.filterId, "number", "int"],
    ];
  }

  constructor(params: { filterId: number }) {
    super();
    this.filterId = params.filterId;
  }
}

export class ExportedChatlistInvite extends TypeExportedChatlistInvite {
  title: string;
  url: string;
  peers: Array<TypePeer>;

  protected get [id]() {
    return 0x0C5181AC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["title", "string", "string"],
      ["url", "string", "string"],
      ["peers", [TypePeer], "Vector<Peer>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.title, "string", "string"],
      [this.url, "string", "string"],
      [this.peers, [TypePeer], "Vector<Peer>"],
    ];
  }

  constructor(params: { title: string; url: string; peers: Array<TypePeer> }) {
    super();
    this.title = params.title;
    this.url = params.url;
    this.peers = params.peers;
  }
}

export class ChatlistsExportedChatlistInvite extends TypeChatlistsExportedChatlistInvite {
  filter: TypeDialogFilter;
  invite: TypeExportedChatlistInvite;

  protected get [id]() {
    return 0x10E6E3A6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["filter", TypeDialogFilter, "DialogFilter"],
      ["invite", TypeExportedChatlistInvite, "ExportedChatlistInvite"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.filter, TypeDialogFilter, "DialogFilter"],
      [this.invite, TypeExportedChatlistInvite, "ExportedChatlistInvite"],
    ];
  }

  constructor(params: { filter: TypeDialogFilter; invite: TypeExportedChatlistInvite }) {
    super();
    this.filter = params.filter;
    this.invite = params.invite;
  }
}

export class ChatlistsExportedInvites extends TypeChatlistsExportedInvites {
  invites: Array<TypeExportedChatlistInvite>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x10AB6DC7;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["invites", [TypeExportedChatlistInvite], "Vector<ExportedChatlistInvite>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.invites, [TypeExportedChatlistInvite], "Vector<ExportedChatlistInvite>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { invites: Array<TypeExportedChatlistInvite>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.invites = params.invites;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChatlistsChatlistInviteAlready extends TypeChatlistsChatlistInvite {
  filterId: number;
  missingPeers: Array<TypePeer>;
  alreadyPeers: Array<TypePeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xFA87F659;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["filterId", "number", "int"],
      ["missingPeers", [TypePeer], "Vector<Peer>"],
      ["alreadyPeers", [TypePeer], "Vector<Peer>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.filterId, "number", "int"],
      [this.missingPeers, [TypePeer], "Vector<Peer>"],
      [this.alreadyPeers, [TypePeer], "Vector<Peer>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { filterId: number; missingPeers: Array<TypePeer>; alreadyPeers: Array<TypePeer>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.filterId = params.filterId;
    this.missingPeers = params.missingPeers;
    this.alreadyPeers = params.alreadyPeers;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChatlistsChatlistInvite extends TypeChatlistsChatlistInvite {
  title: string;
  emoticon?: string;
  peers: Array<TypePeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x1DCD839D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["title", "string", "string"],
      ["emoticon", "string", "flags.0?string"],
      ["peers", [TypePeer], "Vector<Peer>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.title, "string", "string"],
      [this.emoticon ?? null, "string", "flags.0?string"],
      [this.peers, [TypePeer], "Vector<Peer>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { title: string; emoticon?: string; peers: Array<TypePeer>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.title = params.title;
    this.emoticon = params.emoticon;
    this.peers = params.peers;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class ChatlistsChatlistUpdates extends TypeChatlistsChatlistUpdates {
  missingPeers: Array<TypePeer>;
  chats: Array<TypeChat>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x93BD878D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["missingPeers", [TypePeer], "Vector<Peer>"],
      ["chats", [TypeChat], "Vector<Chat>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.missingPeers, [TypePeer], "Vector<Peer>"],
      [this.chats, [TypeChat], "Vector<Chat>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { missingPeers: Array<TypePeer>; chats: Array<TypeChat>; users: Array<TypeUser> }) {
    super();
    this.missingPeers = params.missingPeers;
    this.chats = params.chats;
    this.users = params.users;
  }
}

export class BotsBotInfo extends TypeBotsBotInfo {
  name: string;
  about: string;
  description: string;

  protected get [id]() {
    return 0xE8A775B0;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["name", "string", "string"],
      ["about", "string", "string"],
      ["description", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.name, "string", "string"],
      [this.about, "string", "string"],
      [this.description, "string", "string"],
    ];
  }

  constructor(params: { name: string; about: string; description: string }) {
    super();
    this.name = params.name;
    this.about = params.about;
    this.description = params.description;
  }
}

export class MessagePeerVote extends TypeMessagePeerVote {
  peer: TypePeer;
  option: Uint8Array;
  date: number;

  protected get [id]() {
    return 0xB6CC2D5C;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["option", Uint8Array, "bytes"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.option, Uint8Array, "bytes"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { peer: TypePeer; option: Uint8Array; date: number }) {
    super();
    this.peer = params.peer;
    this.option = params.option;
    this.date = params.date;
  }
}

export class MessagePeerVoteInputOption extends TypeMessagePeerVote {
  peer: TypePeer;
  date: number;

  protected get [id]() {
    return 0x74CDA504;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { peer: TypePeer; date: number }) {
    super();
    this.peer = params.peer;
    this.date = params.date;
  }
}

export class MessagePeerVoteMultiple extends TypeMessagePeerVote {
  peer: TypePeer;
  options: Array<Uint8Array>;
  date: number;

  protected get [id]() {
    return 0x4628F6E6;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["peer", TypePeer, "Peer"],
      ["options", [Uint8Array], "Vector<bytes>"],
      ["date", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.peer, TypePeer, "Peer"],
      [this.options, [Uint8Array], "Vector<bytes>"],
      [this.date, "number", "int"],
    ];
  }

  constructor(params: { peer: TypePeer; options: Array<Uint8Array>; date: number }) {
    super();
    this.peer = params.peer;
    this.options = params.options;
    this.date = params.date;
  }
}

export class SponsoredWebPage extends TypeSponsoredWebPage {
  url: string;
  siteName: string;
  photo?: TypePhoto;

  protected get [id]() {
    return 0x3DB8EC63;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["url", "string", "string"],
      ["siteName", "string", "string"],
      ["photo", TypePhoto, "flags.0?Photo"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.url, "string", "string"],
      [this.siteName, "string", "string"],
      [this.photo ?? null, TypePhoto, "flags.0?Photo"],
    ];
  }

  constructor(params: { url: string; siteName: string; photo?: TypePhoto }) {
    super();
    this.url = params.url;
    this.siteName = params.siteName;
    this.photo = params.photo;
  }
}

export class StoryViews extends TypeStoryViews {
  viewsCount: number;
  recentViewers?: Array<bigint>;

  protected get [id]() {
    return 0xD36760CF;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["viewsCount", "number", "int"],
      ["recentViewers", ["bigint"], "flags.0?Vector<long>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.viewsCount, "number", "int"],
      [this.recentViewers ?? null, ["bigint"], "flags.0?Vector<long>"],
    ];
  }

  constructor(params: { viewsCount: number; recentViewers?: Array<bigint> }) {
    super();
    this.viewsCount = params.viewsCount;
    this.recentViewers = params.recentViewers;
  }
}

export class StoryItemDeleted extends TypeStoryItem {
  id: number;

  protected get [id]() {
    return 0x51E6EE4F;
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

export class StoryItemSkipped extends TypeStoryItem {
  closeFriends?: true;
  id: number;
  date: number;
  expireDate: number;

  protected get [id]() {
    return 0xFFADC913;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["closeFriends", "true", "flags.8?true"],
      ["id", "number", "int"],
      ["date", "number", "int"],
      ["expireDate", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.closeFriends ?? null, "true", "flags.8?true"],
      [this.id, "number", "int"],
      [this.date, "number", "int"],
      [this.expireDate, "number", "int"],
    ];
  }

  constructor(params: { closeFriends?: true; id: number; date: number; expireDate: number }) {
    super();
    this.closeFriends = params.closeFriends;
    this.id = params.id;
    this.date = params.date;
    this.expireDate = params.expireDate;
  }
}

export class StoryItem extends TypeStoryItem {
  pinned?: true;
  public?: true;
  closeFriends?: true;
  min?: true;
  noforwards?: true;
  edited?: true;
  contacts?: true;
  selectedContacts?: true;
  id: number;
  date: number;
  expireDate: number;
  caption?: string;
  entities?: Array<TypeMessageEntity>;
  media: TypeMessageMedia;
  privacy?: Array<TypePrivacyRule>;
  views?: TypeStoryViews;

  protected get [id]() {
    return 0x562AA637;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["pinned", "true", "flags.5?true"],
      ["public", "true", "flags.7?true"],
      ["closeFriends", "true", "flags.8?true"],
      ["min", "true", "flags.9?true"],
      ["noforwards", "true", "flags.10?true"],
      ["edited", "true", "flags.11?true"],
      ["contacts", "true", "flags.12?true"],
      ["selectedContacts", "true", "flags.13?true"],
      ["id", "number", "int"],
      ["date", "number", "int"],
      ["expireDate", "number", "int"],
      ["caption", "string", "flags.0?string"],
      ["entities", [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      ["media", TypeMessageMedia, "MessageMedia"],
      ["privacy", [TypePrivacyRule], "flags.2?Vector<PrivacyRule>"],
      ["views", TypeStoryViews, "flags.3?StoryViews"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.pinned ?? null, "true", "flags.5?true"],
      [this.public ?? null, "true", "flags.7?true"],
      [this.closeFriends ?? null, "true", "flags.8?true"],
      [this.min ?? null, "true", "flags.9?true"],
      [this.noforwards ?? null, "true", "flags.10?true"],
      [this.edited ?? null, "true", "flags.11?true"],
      [this.contacts ?? null, "true", "flags.12?true"],
      [this.selectedContacts ?? null, "true", "flags.13?true"],
      [this.id, "number", "int"],
      [this.date, "number", "int"],
      [this.expireDate, "number", "int"],
      [this.caption ?? null, "string", "flags.0?string"],
      [this.entities ?? null, [TypeMessageEntity], "flags.1?Vector<MessageEntity>"],
      [this.media, TypeMessageMedia, "MessageMedia"],
      [this.privacy ?? null, [TypePrivacyRule], "flags.2?Vector<PrivacyRule>"],
      [this.views ?? null, TypeStoryViews, "flags.3?StoryViews"],
    ];
  }

  constructor(params: { pinned?: true; public?: true; closeFriends?: true; min?: true; noforwards?: true; edited?: true; contacts?: true; selectedContacts?: true; id: number; date: number; expireDate: number; caption?: string; entities?: Array<TypeMessageEntity>; media: TypeMessageMedia; privacy?: Array<TypePrivacyRule>; views?: TypeStoryViews }) {
    super();
    this.pinned = params.pinned;
    this.public = params.public;
    this.closeFriends = params.closeFriends;
    this.min = params.min;
    this.noforwards = params.noforwards;
    this.edited = params.edited;
    this.contacts = params.contacts;
    this.selectedContacts = params.selectedContacts;
    this.id = params.id;
    this.date = params.date;
    this.expireDate = params.expireDate;
    this.caption = params.caption;
    this.entities = params.entities;
    this.media = params.media;
    this.privacy = params.privacy;
    this.views = params.views;
  }
}

export class UserStories extends TypeUserStories {
  userId: bigint;
  maxReadId?: number;
  stories: Array<TypeStoryItem>;

  protected get [id]() {
    return 0x8611A200;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["userId", "bigint", "long"],
      ["maxReadId", "number", "flags.0?int"],
      ["stories", [TypeStoryItem], "Vector<StoryItem>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.userId, "bigint", "long"],
      [this.maxReadId ?? null, "number", "flags.0?int"],
      [this.stories, [TypeStoryItem], "Vector<StoryItem>"],
    ];
  }

  constructor(params: { userId: bigint; maxReadId?: number; stories: Array<TypeStoryItem> }) {
    super();
    this.userId = params.userId;
    this.maxReadId = params.maxReadId;
    this.stories = params.stories;
  }
}

export class StoriesAllStoriesNotModified extends TypeStoriesAllStories {
  state: string;

  protected get [id]() {
    return 0x47E0A07E;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["state", "string", "string"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.state, "string", "string"],
    ];
  }

  constructor(params: { state: string }) {
    super();
    this.state = params.state;
  }
}

export class StoriesAllStories extends TypeStoriesAllStories {
  hasMore?: true;
  count: number;
  state: string;
  userStories: Array<TypeUserStories>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x839E0428;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["hasMore", "true", "flags.0?true"],
      ["count", "number", "int"],
      ["state", "string", "string"],
      ["userStories", [TypeUserStories], "Vector<UserStories>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.hasMore ?? null, "true", "flags.0?true"],
      [this.count, "number", "int"],
      [this.state, "string", "string"],
      [this.userStories, [TypeUserStories], "Vector<UserStories>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { hasMore?: true; count: number; state: string; userStories: Array<TypeUserStories>; users: Array<TypeUser> }) {
    super();
    this.hasMore = params.hasMore;
    this.count = params.count;
    this.state = params.state;
    this.userStories = params.userStories;
    this.users = params.users;
  }
}

export class StoriesStories extends TypeStoriesStories {
  count: number;
  stories: Array<TypeStoryItem>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x4FE57DF1;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["stories", [TypeStoryItem], "Vector<StoryItem>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.stories, [TypeStoryItem], "Vector<StoryItem>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { count: number; stories: Array<TypeStoryItem>; users: Array<TypeUser> }) {
    super();
    this.count = params.count;
    this.stories = params.stories;
    this.users = params.users;
  }
}

export class StoriesUserStories extends TypeStoriesUserStories {
  stories: TypeUserStories;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0x37A6FF5F;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["stories", TypeUserStories, "UserStories"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.stories, TypeUserStories, "UserStories"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { stories: TypeUserStories; users: Array<TypeUser> }) {
    super();
    this.stories = params.stories;
    this.users = params.users;
  }
}

export class StoryView extends TypeStoryView {
  userId: bigint;
  date: number;

  protected get [id]() {
    return 0xA71AACC2;
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

export class StoriesStoryViewsList extends TypeStoriesStoryViewsList {
  count: number;
  views: Array<TypeStoryView>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xFB3F77AC;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["count", "number", "int"],
      ["views", [TypeStoryView], "Vector<StoryView>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.count, "number", "int"],
      [this.views, [TypeStoryView], "Vector<StoryView>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { count: number; views: Array<TypeStoryView>; users: Array<TypeUser> }) {
    super();
    this.count = params.count;
    this.views = params.views;
    this.users = params.users;
  }
}

export class StoriesStoryViews extends TypeStoriesStoryViews {
  views: Array<TypeStoryViews>;
  users: Array<TypeUser>;

  protected get [id]() {
    return 0xDE9EED1D;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["views", [TypeStoryViews], "Vector<StoryViews>"],
      ["users", [TypeUser], "Vector<User>"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.views, [TypeStoryViews], "Vector<StoryViews>"],
      [this.users, [TypeUser], "Vector<User>"],
    ];
  }

  constructor(params: { views: Array<TypeStoryViews>; users: Array<TypeUser> }) {
    super();
    this.views = params.views;
    this.users = params.users;
  }
}

export class InputReplyToMessage extends TypeInputReplyTo {
  replyToMsgId: number;
  topMsgId?: number;

  protected get [id]() {
    return 0x9C5386E4;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["flags", flags, "#"],
      ["replyToMsgId", "number", "int"],
      ["topMsgId", "number", "flags.0?int"],
    ];
  }

  protected get [params](): Params {
    return [
      ["flags", flags, "#"],
      [this.replyToMsgId, "number", "int"],
      [this.topMsgId ?? null, "number", "flags.0?int"],
    ];
  }

  constructor(params: { replyToMsgId: number; topMsgId?: number }) {
    super();
    this.replyToMsgId = params.replyToMsgId;
    this.topMsgId = params.topMsgId;
  }
}

export class InputReplyToStory extends TypeInputReplyTo {
  userId: TypeInputUser;
  storyId: number;

  protected get [id]() {
    return 0x15B0F283;
  }

  static get [paramDesc](): ParamDesc {
    return [
      ["userId", TypeInputUser, "InputUser"],
      ["storyId", "number", "int"],
    ];
  }

  protected get [params](): Params {
    return [
      [this.userId, TypeInputUser, "InputUser"],
      [this.storyId, "number", "int"],
    ];
  }

  constructor(params: { userId: TypeInputUser; storyId: number }) {
    super();
    this.userId = params.userId;
    this.storyId = params.storyId;
  }
}

export class ExportedStoryLink extends TypeExportedStoryLink {
  link: string;

  protected get [id]() {
    return 0x3FC9053B;
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

export const map = new Map<number, TLObjectConstructor>([
[0x05162463, ResPQ],

[0xA9F55F95, PQInnerDataDC],

[0x56FDDF88, PQInnerDataTempDC],

[0xD0E8075C, ServerDHParamsOK],

[0xB5890DBA, ServerDHInnerData],

[0x6643B654, ClientDHInnerData],

[0x3BCBF734, DHGenOK],

[0x46DC1FB9, DHGenRetry],

[0xA69DAE02, DHGenFail],

[0x75A3F765, BindAuthKeyInner],

[0x2144CA19, RPCError],

[0x5E2AD36E, RPCAnswerUnknown],

[0xCD78E586, RPCAnswerDroppedRunning],

[0xA43AD8B7, RPCAnswerDropped],

[0x0949D9DC, FutureSalt],

[0xAE500895, FutureSalts],

[0x347773C5, Pong],

[0xE22045FC, DestroySessionOK],

[0x62D350C9, DestroySessionNone],

[0x9EC20908, NewSessionCreated],

[0x3072CFA1, GZIPPacked],

[0x62D6B459, MsgsAck],

[0xA7EFF811, BadMsgNotification],

[0xEDAB447B, BadServerSalt],

[0x7D861A08, MsgResendReq],

[0xDA69FB52, MsgsStateReq],

[0x04DEB57D, MsgsStateInfo],

[0x8CC0D131, MsgsAllInfo],

[0x276D3EC6, MsgDetailedInfo],

[0x809DB6DF, MsgNewDetailedInfo],

[0xF660E1D4, DestroyAuthKeyOK],

[0x0A9F2259, DestroyAuthKeyNone],

[0xEA109B13, DestroyAuthKeyFail],

[0x9299359F, HTTPWait],

[0x3FEDD339, True],

[0xC4B9F9BB, Error],

[0x56730BCC, Null],

[0x7F3B18EA, InputPeerEmpty],

[0x7DA07EC9, InputPeerSelf],

[0x35A95CB9, InputPeerChat],

[0xDDE8A54C, InputPeerUser],

[0x27BCBBFC, InputPeerChannel],

[0xA87B0A1C, InputPeerUserFromMessage],

[0xBD2A0840, InputPeerChannelFromMessage],

[0xB98886CF, InputUserEmpty],

[0xF7C1B13F, InputUserSelf],

[0xF21158C6, InputUser],

[0x1DA448E2, InputUserFromMessage],

[0xF392B7F4, InputPhoneContact],

[0xF52FF27F, InputFile],

[0xFA4F0BB5, InputFileBig],

[0x9664F57F, InputMediaEmpty],

[0x1E287D04, InputMediaUploadedPhoto],

[0xB3BA0635, InputMediaPhoto],

[0xF9C44144, InputMediaGeoPoint],

[0xF8AB7DFB, InputMediaContact],

[0x5B38C6C1, InputMediaUploadedDocument],

[0x33473058, InputMediaDocument],

[0xC13D1C11, InputMediaVenue],

[0xE5BBFE1A, InputMediaPhotoExternal],

[0xFB52DC99, InputMediaDocumentExternal],

[0xD33F43F3, InputMediaGame],

[0x8EB5A6D5, InputMediaInvoice],

[0x971FA843, InputMediaGeoLive],

[0x0F94E5F1, InputMediaPoll],

[0xE66FBF7B, InputMediaDice],

[0x9A86B58F, InputMediaStory],

[0x1CA48F57, InputChatPhotoEmpty],

[0xBDCDAEC0, InputChatUploadedPhoto],

[0x8953AD37, InputChatPhoto],

[0xE4C123D6, InputGeoPointEmpty],

[0x48222FAF, InputGeoPoint],

[0x1CD7BF0D, InputPhotoEmpty],

[0x3BB3B94A, InputPhoto],

[0xDFDAABE1, InputFileLocation],

[0xF5235D55, InputEncryptedFileLocation],

[0xBAD07584, InputDocumentFileLocation],

[0xCBC7EE28, InputSecureFileLocation],

[0x29BE5899, InputTakeoutFileLocation],

[0x40181FFE, InputPhotoFileLocation],

[0xD83466F3, InputPhotoLegacyFileLocation],

[0x37257E99, InputPeerPhotoFileLocation],

[0x9D84F3DB, InputStickerSetThumb],

[0x0598A92A, InputGroupCallStream],

[0x59511722, PeerUser],

[0x36C6019A, PeerChat],

[0xA2A5371E, PeerChannel],

[0xAA963B05, StorageFileUnknown],

[0x40BC6F52, StorageFilePartial],

[0x007EFE0E, StorageFileJpeg],

[0xCAE1AADF, StorageFileGif],

[0x0A4F63C0, StorageFilePng],

[0xAE1E508D, StorageFilePdf],

[0x528A0677, StorageFileMp3],

[0x4B09EBBC, StorageFileMov],

[0xB3CEA0E4, StorageFileMp4],

[0x1081464C, StorageFileWebp],

[0xD3BC4B7A, UserEmpty],

[0xABB5F120, User],

[0x4F11BAE1, UserProfilePhotoEmpty],

[0x82D1F706, UserProfilePhoto],

[0x09D05049, UserStatusEmpty],

[0xEDB93949, UserStatusOnline],

[0x008C703F, UserStatusOffline],

[0xE26F42F1, UserStatusRecently],

[0x07BF09FC, UserStatusLastWeek],

[0x77EBC742, UserStatusLastMonth],

[0x29562865, ChatEmpty],

[0x41CBF256, Chat],

[0x6592A1A7, ChatForbidden],

[0x83259464, Channel],

[0x17D493D5, ChannelForbidden],

[0xC9D31138, ChatFull],

[0xF2355507, ChannelFull],

[0xC02D4007, ChatParticipant],

[0xE46BCEE4, ChatParticipantCreator],

[0xA0933F5B, ChatParticipantAdmin],

[0x8763D3E1, ChatParticipantsForbidden],

[0x3CBC93F8, ChatParticipants],

[0x37C1011C, ChatPhotoEmpty],

[0x1C6E1C11, ChatPhoto],

[0x90A6CA84, MessageEmpty],

[0x38116EE0, Message],

[0x2B085862, MessageService],

[0x3DED6320, MessageMediaEmpty],

[0x695150D7, MessageMediaPhoto],

[0x56E0D474, MessageMediaGeo],

[0x70322949, MessageMediaContact],

[0x9F84F49E, MessageMediaUnsupported],

[0x4CF4D72D, MessageMediaDocument],

[0xA32DD600, MessageMediaWebPage],

[0x2EC0533F, MessageMediaVenue],

[0xFDB19008, MessageMediaGame],

[0xF6A548D3, MessageMediaInvoice],

[0xB940C666, MessageMediaGeoLive],

[0x4BD6E798, MessageMediaPoll],

[0x3F7EE58B, MessageMediaDice],

[0xCBB20D88, MessageMediaStory],

[0xB6AEF7B0, MessageActionEmpty],

[0xBD47CBAD, MessageActionChatCreate],

[0xB5A1CE5A, MessageActionChatEditTitle],

[0x7FCB13A8, MessageActionChatEditPhoto],

[0x95E3FBEF, MessageActionChatDeletePhoto],

[0x15CEFD00, MessageActionChatAddUser],

[0xA43F30CC, MessageActionChatDeleteUser],

[0x031224C3, MessageActionChatJoinedByLink],

[0x95D2AC92, MessageActionChannelCreate],

[0xE1037F92, MessageActionChatMigrateTo],

[0xEA3948E9, MessageActionChannelMigrateFrom],

[0x94BD38ED, MessageActionPinMessage],

[0x9FBAB604, MessageActionHistoryClear],

[0x92A72876, MessageActionGameScore],

[0x8F31B327, MessageActionPaymentSentMe],

[0x96163F56, MessageActionPaymentSent],

[0x80E11A7F, MessageActionPhoneCall],

[0x4792929B, MessageActionScreenshotTaken],

[0xFAE69F56, MessageActionCustomAction],

[0xC516D679, MessageActionBotAllowed],

[0x1B287353, MessageActionSecureValuesSentMe],

[0xD95C6154, MessageActionSecureValuesSent],

[0xF3F25F76, MessageActionContactSignUp],

[0x98E0D697, MessageActionGeoProximityReached],

[0x7A0D7F42, MessageActionGroupCall],

[0x502F92F7, MessageActionInviteToGroupCall],

[0x3C134D7B, MessageActionSetMessagesTTL],

[0xB3A07661, MessageActionGroupCallScheduled],

[0xAA786345, MessageActionSetChatTheme],

[0xEBBCA3CB, MessageActionChatJoinedByRequest],

[0x47DD8079, MessageActionWebViewDataSentMe],

[0xB4C38CB5, MessageActionWebViewDataSent],

[0xC83D6AEC, MessageActionGiftPremium],

[0x0D999256, MessageActionTopicCreate],

[0xC0944820, MessageActionTopicEdit],

[0x57DE635E, MessageActionSuggestProfilePhoto],

[0xFE77345D, MessageActionRequestedPeer],

[0xBC44A927, MessageActionSetChatWallPaper],

[0xC0787D6D, MessageActionSetSameChatWallPaper],

[0xD58A08C6, Dialog],

[0x71BD134C, DialogFolder],

[0x2331B22D, PhotoEmpty],

[0xFB197A65, Photo],

[0x0E17E23C, PhotoSizeEmpty],

[0x75C78E60, PhotoSize],

[0x021E1AD6, PhotoCachedSize],

[0xE0B0BC2E, PhotoStrippedSize],

[0xFA3EFB95, PhotoSizeProgressive],

[0xD8214D41, PhotoPathSize],

[0x1117DD5F, GeoPointEmpty],

[0xB2A2F663, GeoPoint],

[0x5E002502, AuthSentCode],

[0x2390FE44, AuthSentCodeSuccess],

[0x2EA2C0D4, AuthAuthorization],

[0x44747E9A, AuthAuthorizationSignUpRequired],

[0xB434E2B8, AuthExportedAuthorization],

[0xB8BC5B0C, InputNotifyPeer],

[0x193B4417, InputNotifyUsers],

[0x4A95E84E, InputNotifyChats],

[0xB1DB7C7E, InputNotifyBroadcasts],

[0x5C467992, InputNotifyForumTopic],

[0xCACB6AE2, InputPeerNotifySettings],

[0x99622C0C, PeerNotifySettings],

[0xA518110D, PeerSettings],

[0xA437C3ED, WallPaper],

[0xE0804116, WallPaperNoFile],

[0x58DBCAB8, InputReportReasonSpam],

[0x1E22C78D, InputReportReasonViolence],

[0x2E59D922, InputReportReasonPornography],

[0xADF44EE3, InputReportReasonChildAbuse],

[0xC1E4A2B1, InputReportReasonOther],

[0x9B89F93A, InputReportReasonCopyright],

[0xDBD4FEED, InputReportReasonGeoIrrelevant],

[0xF5DDD6E7, InputReportReasonFake],

[0x0A8EB2BE, InputReportReasonIllegalDrugs],

[0x9EC7863D, InputReportReasonPersonalDetails],

[0x4FE1CC86, UserFull],

[0x145ADE0B, Contact],

[0xC13E3C50, ImportedContact],

[0x16D9703B, ContactStatus],

[0xB74BA9D2, ContactsContactsNotModified],

[0xEAE87E42, ContactsContacts],

[0x77D01C3B, ContactsImportedContacts],

[0x0ADE1591, ContactsBlocked],

[0xE1664194, ContactsBlockedSlice],

[0x15BA6C40, MessagesDialogs],

[0x71E094F3, MessagesDialogsSlice],

[0xF0E3E596, MessagesDialogsNotModified],

[0x8C718E87, MessagesMessages],

[0x3A54685E, MessagesMessagesSlice],

[0xC776BA4E, MessagesChannelMessages],

[0x74535F21, MessagesMessagesNotModified],

[0x64FF9FD5, MessagesChats],

[0x9CD81144, MessagesChatsSlice],

[0xE5D7D19C, MessagesChatFull],

[0xB45C69D1, MessagesAffectedHistory],

[0x57E2F66C, InputMessagesFilterEmpty],

[0x9609A51C, InputMessagesFilterPhotos],

[0x9FC00E65, InputMessagesFilterVideo],

[0x56E9F0E4, InputMessagesFilterPhotoVideo],

[0x9EDDF188, InputMessagesFilterDocument],

[0x7EF0DD87, InputMessagesFilterURL],

[0xFFC86587, InputMessagesFilterGif],

[0x50F5C392, InputMessagesFilterVoice],

[0x3751B49E, InputMessagesFilterMusic],

[0x3A20ECB8, InputMessagesFilterChatPhotos],

[0x80C99768, InputMessagesFilterPhoneCalls],

[0x7A7C17A4, InputMessagesFilterRoundVoice],

[0xB549DA53, InputMessagesFilterRoundVideo],

[0xC1F8E69A, InputMessagesFilterMyMentions],

[0xE7026D0D, InputMessagesFilterGeo],

[0xE062DB83, InputMessagesFilterContacts],

[0x1BB00451, InputMessagesFilterPinned],

[0x1F2B0AFD, UpdateNewMessage],

[0x4E90BFD6, UpdateMessageID],

[0xA20DB0E5, UpdateDeleteMessages],

[0xC01E857F, UpdateUserTyping],

[0x83487AF0, UpdateChatUserTyping],

[0x07761198, UpdateChatParticipants],

[0xE5BDF8DE, UpdateUserStatus],

[0xA7848924, UpdateUserName],

[0x12BCBD9A, UpdateNewEncryptedMessage],

[0x1710F156, UpdateEncryptedChatTyping],

[0xB4A2E88D, UpdateEncryption],

[0x38FE25B7, UpdateEncryptedMessagesRead],

[0x3DDA5451, UpdateChatParticipantAdd],

[0xE32F3D77, UpdateChatParticipantDelete],

[0x8E5E9873, UpdateDcOptions],

[0xBEC268EF, UpdateNotifySettings],

[0xEBE46819, UpdateServiceNotification],

[0xEE3B272A, UpdatePrivacy],

[0x05492A13, UpdateUserPhone],

[0x9C974FDF, UpdateReadHistoryInbox],

[0x2F2F21BF, UpdateReadHistoryOutbox],

[0x7F891213, UpdateWebPage],

[0x68C13933, UpdateReadMessagesContents],

[0x108D941F, UpdateChannelTooLong],

[0x635B4C09, UpdateChannel],

[0x62BA04D9, UpdateNewChannelMessage],

[0x922E6E10, UpdateReadChannelInbox],

[0xC32D5B12, UpdateDeleteChannelMessages],

[0xF226AC08, UpdateChannelMessageViews],

[0xD7CA61A2, UpdateChatParticipantAdmin],

[0x688A30AA, UpdateNewStickerSet],

[0x0BB2D201, UpdateStickerSetsOrder],

[0x31C24808, UpdateStickerSets],

[0x9375341E, UpdateSavedGifs],

[0x496F379C, UpdateBotInlineQuery],

[0x12F12A07, UpdateBotInlineSend],

[0x1B3F4DF7, UpdateEditChannelMessage],

[0xB9CFC48D, UpdateBotCallbackQuery],

[0xE40370A3, UpdateEditMessage],

[0x691E9052, UpdateInlineBotCallbackQuery],

[0xB75F99A9, UpdateReadChannelOutbox],

[0x1B49EC6D, UpdateDraftMessage],

[0x571D2742, UpdateReadFeaturedStickers],

[0x9A422C20, UpdateRecentStickers],

[0xA229DD06, UpdateConfig],

[0x3354678F, UpdatePtsChanged],

[0x2F2BA99F, UpdateChannelWebPage],

[0x6E6FE51C, UpdateDialogPinned],

[0xFA0F3CA2, UpdatePinnedDialogs],

[0x8317C0C3, UpdateBotWebhookJSON],

[0x9B9240A6, UpdateBotWebhookJSONQuery],

[0xB5AEFD7D, UpdateBotShippingQuery],

[0x8CAA9A96, UpdateBotPrecheckoutQuery],

[0xAB0F6B1E, UpdatePhoneCall],

[0x46560264, UpdateLangPackTooLong],

[0x56022F4D, UpdateLangPack],

[0xE511996D, UpdateFavedStickers],

[0xEA29055D, UpdateChannelReadMessagesContents],

[0x7084A7BE, UpdateContactsReset],

[0xB23FC698, UpdateChannelAvailableMessages],

[0xE16459C3, UpdateDialogUnreadMark],

[0xACA1657B, UpdateMessagePoll],

[0x54C01850, UpdateChatDefaultBannedRights],

[0x19360DC0, UpdateFolderPeers],

[0x6A7E7366, UpdatePeerSettings],

[0xB4AFCFB0, UpdatePeerLocated],

[0x39A51DFB, UpdateNewScheduledMessage],

[0x90866CEE, UpdateDeleteScheduledMessages],

[0x8216FBA3, UpdateTheme],

[0x871FB939, UpdateGeoLiveViewed],

[0x564FE691, UpdateLoginToken],

[0x24F40E77, UpdateMessagePollVote],

[0x26FFDE7D, UpdateDialogFilter],

[0xA5D72105, UpdateDialogFilterOrder],

[0x3504914F, UpdateDialogFilters],

[0x2661BF09, UpdatePhoneCallSignalingData],

[0xD29A27F4, UpdateChannelMessageForwards],

[0xD6B19546, UpdateReadChannelDiscussionInbox],

[0x695C9E7C, UpdateReadChannelDiscussionOutbox],

[0x246A4B22, UpdatePeerBlocked],

[0x8C88C923, UpdateChannelUserTyping],

[0xED85EAB5, UpdatePinnedMessages],

[0x5BB98608, UpdatePinnedChannelMessages],

[0xF89A6A4E, UpdateChat],

[0xF2EBDB4E, UpdateGroupCallParticipants],

[0x14B24500, UpdateGroupCall],

[0xBB9BB9A5, UpdatePeerHistoryTTL],

[0xD087663A, UpdateChatParticipant],

[0x985D3ABB, UpdateChannelParticipant],

[0xC4870A49, UpdateBotStopped],

[0x0B783982, UpdateGroupCallConnection],

[0x4D712F2E, UpdateBotCommands],

[0x7063C3DB, UpdatePendingJoinRequests],

[0x11DFA986, UpdateBotChatInviteRequester],

[0x5E1B3CB8, UpdateMessageReactions],

[0x17B7A20B, UpdateAttachMenuBots],

[0x1592B79D, UpdateWebViewResultSent],

[0x14B85813, UpdateBotMenuButton],

[0x74D8BE99, UpdateSavedRingtones],

[0x0084CD5A, UpdateTranscribedAudio],

[0xFB4C496C, UpdateReadFeaturedEmojiStickers],

[0x28373599, UpdateUserEmojiStatus],

[0x30F443DB, UpdateRecentEmojiStatuses],

[0x6F7863F4, UpdateRecentReactions],

[0x86FCCF85, UpdateMoveStickerSetToTop],

[0x5A73A98C, UpdateMessageExtendedMedia],

[0x192EFBE3, UpdateChannelPinnedTopic],

[0xFE198602, UpdateChannelPinnedTopics],

[0x20529438, UpdateUser],

[0xEC05B097, UpdateAutoSaveSettings],

[0xCCF08AD6, UpdateGroupInvitePrivacyForbidden],

[0x205A4133, UpdateStory],

[0xFEB5345A, UpdateReadStories],

[0x1BF335B9, UpdateStoryID],

[0xA56C2A3E, UpdatesState],

[0x5D75A138, UpdatesDifferenceEmpty],

[0x00F49CA0, UpdatesDifference],

[0xA8FB1981, UpdatesDifferenceSlice],

[0x4AFE8F6D, UpdatesDifferenceTooLong],

[0xE317AF7E, UpdatesTooLong],

[0x313BC7F8, UpdateShortMessage],

[0x4D6DEEA5, UpdateShortChatMessage],

[0x78D4DEC1, UpdateShort],

[0x725B04C3, UpdatesCombined],

[0x74AE4240, Updates],

[0x9015E101, UpdateShortSentMessage],

[0x8DCA6AA5, PhotosPhotos],

[0x15051F54, PhotosPhotosSlice],

[0x20212CA8, PhotosPhoto],

[0x096A18D5, UploadFile],

[0xF18CDA44, UploadFileCdnRedirect],

[0x18B7A10D, DcOption],

[0xCC1A241E, Config],

[0x8E1A1775, NearestDc],

[0xCCBBCE30, HelpAppUpdate],

[0xC45A6536, HelpNoAppUpdate],

[0x18CB9F78, HelpInviteText],

[0xAB7EC0A0, EncryptedChatEmpty],

[0x66B25953, EncryptedChatWaiting],

[0x48F1D94C, EncryptedChatRequested],

[0x61F0D4C7, EncryptedChat],

[0x1E1C7C45, EncryptedChatDiscarded],

[0xF141B5E1, InputEncryptedChat],

[0xC21F497E, EncryptedFileEmpty],

[0xA8008CD8, EncryptedFile],

[0x1837C364, InputEncryptedFileEmpty],

[0x64BD0306, InputEncryptedFileUploaded],

[0x5A17B5E5, InputEncryptedFile],

[0x2DC173C8, InputEncryptedFileBigUploaded],

[0xED18C118, EncryptedMessage],

[0x23734B06, EncryptedMessageService],

[0xC0E24635, MessagesDhConfigNotModified],

[0x2C221EDD, MessagesDhConfig],

[0x560F8935, MessagesSentEncryptedMessage],

[0x9493FF32, MessagesSentEncryptedFile],

[0x72F0EAAE, InputDocumentEmpty],

[0x1ABFB575, InputDocument],

[0x36F8C871, DocumentEmpty],

[0x8FD4C4D8, Document],

[0x17C6B5F6, HelpSupport],

[0x9FD40BD8, NotifyPeer],

[0xB4C83B4C, NotifyUsers],

[0xC007CEC3, NotifyChats],

[0xD612E8EF, NotifyBroadcasts],

[0x226E6308, NotifyForumTopic],

[0x16BF744E, SendMessageTypingAction],

[0xFD5EC8F5, SendMessageCancelAction],

[0xA187D66F, SendMessageRecordVideoAction],

[0xE9763AEC, SendMessageUploadVideoAction],

[0xD52F73F7, SendMessageRecordAudioAction],

[0xF351D7AB, SendMessageUploadAudioAction],

[0xD1D34A26, SendMessageUploadPhotoAction],

[0xAA0CD9E4, SendMessageUploadDocumentAction],

[0x176F8BA1, SendMessageGeoLocationAction],

[0x628CBC6F, SendMessageChooseContactAction],

[0xDD6A8F48, SendMessageGamePlayAction],

[0x88F27FBC, SendMessageRecordRoundAction],

[0x243E1C66, SendMessageUploadRoundAction],

[0xD92C2285, SpeakingInGroupCallAction],

[0xDBDA9246, SendMessageHistoryImportAction],

[0xB05AC6B1, SendMessageChooseStickerAction],

[0x25972BCB, SendMessageEmojiInteraction],

[0xB665902E, SendMessageEmojiInteractionSeen],

[0xB3134D9D, ContactsFound],

[0x4F96CB18, InputPrivacyKeyStatusTimestamp],

[0xBDFB0426, InputPrivacyKeyChatInvite],

[0xFABADC5F, InputPrivacyKeyPhoneCall],

[0xDB9E70D2, InputPrivacyKeyPhoneP2P],

[0xA4DD4C08, InputPrivacyKeyForwards],

[0x5719BACC, InputPrivacyKeyProfilePhoto],

[0x0352DAFA, InputPrivacyKeyPhoneNumber],

[0xD1219BDD, InputPrivacyKeyAddedByPhone],

[0xAEE69D68, InputPrivacyKeyVoiceMessages],

[0x3823CC40, InputPrivacyKeyAbout],

[0xBC2EAB30, PrivacyKeyStatusTimestamp],

[0x500E6DFA, PrivacyKeyChatInvite],

[0x3D662B7B, PrivacyKeyPhoneCall],

[0x39491CC8, PrivacyKeyPhoneP2P],

[0x69EC56A3, PrivacyKeyForwards],

[0x96151FED, PrivacyKeyProfilePhoto],

[0xD19AE46D, PrivacyKeyPhoneNumber],

[0x42FFD42B, PrivacyKeyAddedByPhone],

[0x0697F414, PrivacyKeyVoiceMessages],

[0xA486B761, PrivacyKeyAbout],

[0x0D09E07B, InputPrivacyValueAllowContacts],

[0x184B35CE, InputPrivacyValueAllowAll],

[0x131CC67F, InputPrivacyValueAllowUsers],

[0x0BA52007, InputPrivacyValueDisallowContacts],

[0xD66B66C9, InputPrivacyValueDisallowAll],

[0x90110467, InputPrivacyValueDisallowUsers],

[0x840649CF, InputPrivacyValueAllowChatParticipants],

[0xE94F0F86, InputPrivacyValueDisallowChatParticipants],

[0x2F453E49, InputPrivacyValueAllowCloseFriends],

[0xFFFE1BAC, PrivacyValueAllowContacts],

[0x65427B82, PrivacyValueAllowAll],

[0xB8905FB2, PrivacyValueAllowUsers],

[0xF888FA1A, PrivacyValueDisallowContacts],

[0x8B73E763, PrivacyValueDisallowAll],

[0xE4621141, PrivacyValueDisallowUsers],

[0x6B134E8E, PrivacyValueAllowChatParticipants],

[0x41C87565, PrivacyValueDisallowChatParticipants],

[0xF7E8D89B, PrivacyValueAllowCloseFriends],

[0x50A04E45, AccountPrivacyRules],

[0xB8D0AFDF, AccountDaysTTL],

[0x6C37C15C, DocumentAttributeImageSize],

[0x11B58939, DocumentAttributeAnimated],

[0x6319D612, DocumentAttributeSticker],

[0xD38FF1C2, DocumentAttributeVideo],

[0x9852F9C6, DocumentAttributeAudio],

[0x15590068, DocumentAttributeFilename],

[0x9801D2F7, DocumentAttributeHasStickers],

[0xFD149899, DocumentAttributeCustomEmoji],

[0xF1749A22, MessagesStickersNotModified],

[0x30A6EC7E, MessagesStickers],

[0x12B299D4, StickerPack],

[0xE86602C3, MessagesAllStickersNotModified],

[0xCDBBCEBB, MessagesAllStickers],

[0x84D19185, MessagesAffectedMessages],

[0xEB1477E8, WebPageEmpty],

[0xC586DA1C, WebPagePending],

[0xE89C45B2, WebPage],

[0x7311CA11, WebPageNotModified],

[0xAD01D61D, Authorization],

[0x4BFF8EA0, AccountAuthorizations],

[0x957B50FB, AccountPassword],

[0x9A5C33E5, AccountPasswordSettings],

[0xC23727C9, AccountPasswordInputSettings],

[0x137948A5, AuthPasswordRecovery],

[0xA384B779, ReceivedNotifyMessage],

[0x0AB4A819, ChatInviteExported],

[0xED107AB7, ChatInvitePublicJoinRequests],

[0x5A686D7C, ChatInviteAlready],

[0x300C44C1, ChatInvite],

[0x61695CB0, ChatInvitePeek],

[0xFFB62B95, InputStickerSetEmpty],

[0x9DE7A269, InputStickerSetID],

[0x861CC8A0, InputStickerSetShortName],

[0x028703C8, InputStickerSetAnimatedEmoji],

[0xE67F520E, InputStickerSetDice],

[0x0CDE3739, InputStickerSetAnimatedEmojiAnimations],

[0xC88B3B02, InputStickerSetPremiumGifts],

[0x04C4D4CE, InputStickerSetEmojiGenericAnimations],

[0x29D0F5EE, InputStickerSetEmojiDefaultStatuses],

[0x44C1F8E9, InputStickerSetEmojiDefaultTopicIcons],

[0x2DD14EDC, StickerSet],

[0x6E153F16, MessagesStickerSet],

[0xD3F924EB, MessagesStickerSetNotModified],

[0xC27AC8C7, BotCommand],

[0x8F300B57, BotInfo],

[0xA2FA4880, KeyboardButton],

[0x258AFF05, KeyboardButtonURL],

[0x35BBDB6B, KeyboardButtonCallback],

[0xB16A6C29, KeyboardButtonRequestPhone],

[0xFC796B3F, KeyboardButtonRequestGeoLocation],

[0x93B9FBB5, KeyboardButtonSwitchInline],

[0x50F41CCF, KeyboardButtonGame],

[0xAFD93FBB, KeyboardButtonBuy],

[0x10B78D29, KeyboardButtonURLAuth],

[0xD02E7FD4, InputKeyboardButtonURLAuth],

[0xBBC7515D, KeyboardButtonRequestPoll],

[0xE988037B, InputKeyboardButtonUserProfile],

[0x308660C1, KeyboardButtonUserProfile],

[0x13767230, KeyboardButtonWebView],

[0xA0C0505C, KeyboardButtonSimpleWebView],

[0x0D0B468C, KeyboardButtonRequestPeer],

[0x77608B83, KeyboardButtonRow],

[0xA03E5B85, ReplyKeyboardHide],

[0x86B40B08, ReplyKeyboardForceReply],

[0x85DD99D1, ReplyKeyboardMarkup],

[0x48A30254, ReplyInlineMarkup],

[0xBB92BA95, MessageEntityUnknown],

[0xFA04579D, MessageEntityMention],

[0x6F635B0D, MessageEntityHashtag],

[0x6CEF8AC7, MessageEntityBotCommand],

[0x6ED02538, MessageEntityURL],

[0x64E475C2, MessageEntityEmail],

[0xBD610BC9, MessageEntityBold],

[0x826F8B60, MessageEntityItalic],

[0x28A20571, MessageEntityCode],

[0x73924BE0, MessageEntityPre],

[0x76A6D327, MessageEntityTextURL],

[0xDC7B1140, MessageEntityMentionName],

[0x208E68C9, InputMessageEntityMentionName],

[0x9B69E34B, MessageEntityPhone],

[0x4C4E743F, MessageEntityCashtag],

[0x9C4E7E8B, MessageEntityUnderline],

[0xBF0693D4, MessageEntityStrike],

[0x020DF5D0, MessageEntityBlockquote],

[0x761E6AF4, MessageEntityBankCard],

[0x32CA960F, MessageEntitySpoiler],

[0xC8CF05F8, MessageEntityCustomEmoji],

[0xEE8C1E86, InputChannelEmpty],

[0xF35AEC28, InputChannel],

[0x5B934F9D, InputChannelFromMessage],

[0x7F077AD9, ContactsResolvedPeer],

[0x0AE30253, MessageRange],

[0x3E11AFFB, UpdatesChannelDifferenceEmpty],

[0xA4BCC6FE, UpdatesChannelDifferenceTooLong],

[0x2064674E, UpdatesChannelDifference],

[0x94D42EE7, ChannelMessagesFilterEmpty],

[0xCD77D957, ChannelMessagesFilter],

[0xC00C07C0, ChannelParticipant],

[0x35A8BFA7, ChannelParticipantSelf],

[0x2FE601D3, ChannelParticipantCreator],

[0x34C3BB53, ChannelParticipantAdmin],

[0x6DF8014E, ChannelParticipantBanned],

[0x1B03F006, ChannelParticipantLeft],

[0xDE3F3C79, ChannelParticipantsRecent],

[0xB4608969, ChannelParticipantsAdmins],

[0xA3B54985, ChannelParticipantsKicked],

[0xB0D1865B, ChannelParticipantsBots],

[0x1427A5E1, ChannelParticipantsBanned],

[0x0656AC4B, ChannelParticipantsSearch],

[0xBB6AE88D, ChannelParticipantsContacts],

[0xE04B5CEB, ChannelParticipantsMentions],

[0x9AB0FEAF, ChannelsChannelParticipants],

[0xF0173FE9, ChannelsChannelParticipantsNotModified],

[0xDFB80317, ChannelsChannelParticipant],

[0x780A0310, HelpTermsOfService],

[0xE8025CA2, MessagesSavedGifsNotModified],

[0x84A02A0D, MessagesSavedGifs],

[0x3380C786, InputBotInlineMessageMediaAuto],

[0x3DCD7A87, InputBotInlineMessageText],

[0x96929A85, InputBotInlineMessageMediaGeo],

[0x417BBF11, InputBotInlineMessageMediaVenue],

[0xA6EDBFFD, InputBotInlineMessageMediaContact],

[0x4B425864, InputBotInlineMessageGame],

[0xD7E78225, InputBotInlineMessageMediaInvoice],

[0x88BF9319, InputBotInlineResult],

[0xA8D864A7, InputBotInlineResultPhoto],

[0xFFF8FDC4, InputBotInlineResultDocument],

[0x4FA417F2, InputBotInlineResultGame],

[0x764CF810, BotInlineMessageMediaAuto],

[0x8C7F65E2, BotInlineMessageText],

[0x051846FD, BotInlineMessageMediaGeo],

[0x8A86659C, BotInlineMessageMediaVenue],

[0x18D1CDC2, BotInlineMessageMediaContact],

[0x354A9B09, BotInlineMessageMediaInvoice],

[0x11965F3A, BotInlineResult],

[0x17DB940B, BotInlineMediaResult],

[0xE021F2F6, MessagesBotResults],

[0x5DAB1AF4, ExportedMessageLink],

[0x5F777DCE, MessageFwdHeader],

[0x72A3158C, AuthCodeTypeSms],

[0x741CD3E3, AuthCodeTypeCall],

[0x226CCEFB, AuthCodeTypeFlashCall],

[0xD61AD6EE, AuthCodeTypeMissedCall],

[0x06ED998C, AuthCodeTypeFragmentSms],

[0x3DBB5986, AuthSentCodeTypeApp],

[0xC000BBA2, AuthSentCodeTypeSms],

[0x5353E5A7, AuthSentCodeTypeCall],

[0xAB03C6D9, AuthSentCodeTypeFlashCall],

[0x82006484, AuthSentCodeTypeMissedCall],

[0xF450F59B, AuthSentCodeTypeEmailCode],

[0xA5491DEA, AuthSentCodeTypeSetUpEmailRequired],

[0xD9565C39, AuthSentCodeTypeFragmentSms],

[0xE57B1432, AuthSentCodeTypeFirebaseSms],

[0x36585EA4, MessagesBotCallbackAnswer],

[0x26B5DDE6, MessagesMessageEditData],

[0x890C3D89, InputBotInlineMessageID],

[0xB6D915D7, InputBotInlineMessageID64],

[0x3C20629F, InlineBotSwitchPM],

[0x3371C354, MessagesPeerDialogs],

[0xEDCDC05B, TopPeer],

[0xAB661B5B, TopPeerCategoryBotsPM],

[0x148677E2, TopPeerCategoryBotsInline],

[0x0637B7ED, TopPeerCategoryCorrespondents],

[0xBD17A14A, TopPeerCategoryGroups],

[0x161D9628, TopPeerCategoryChannels],

[0x1E76A78C, TopPeerCategoryPhoneCalls],

[0xA8406CA9, TopPeerCategoryForwardUsers],

[0xFBEEC0F0, TopPeerCategoryForwardChats],

[0xFB834291, TopPeerCategoryPeers],

[0xDE266EF5, ContactsTopPeersNotModified],

[0x70B772A8, ContactsTopPeers],

[0xB52C939D, ContactsTopPeersDisabled],

[0x1B0C841A, DraftMessageEmpty],

[0xFD8E711F, DraftMessage],

[0xC6DC0C66, MessagesFeaturedStickersNotModified],

[0xBE382906, MessagesFeaturedStickers],

[0x0B17F890, MessagesRecentStickersNotModified],

[0x88D37C56, MessagesRecentStickers],

[0x4FCBA9C8, MessagesArchivedStickers],

[0x38641628, MessagesStickerSetInstallResultSuccess],

[0x35E410A8, MessagesStickerSetInstallResultArchive],

[0x6410A5D2, StickerSetCovered],

[0x3407E51B, StickerSetMultiCovered],

[0x40D13C0E, StickerSetFullCovered],

[0x77B15D1C, StickerSetNoCovered],

[0xAED6DBB2, MaskCoords],

[0x4A992157, InputStickeredMediaPhoto],

[0x0438865B, InputStickeredMediaDocument],

[0xBDF9653B, Game],

[0x032C3E77, InputGameID],

[0xC331E80A, InputGameShortName],

[0x73A379EB, HighScore],

[0x9A3BFD99, MessagesHighScores],

[0xDC3D824F, TextEmpty],

[0x744694E0, TextPlain],

[0x6724ABC4, TextBold],

[0xD912A59C, TextItalic],

[0xC12622C4, TextUnderline],

[0x9BF8BB95, TextStrike],

[0x6C3F19B9, TextFixed],

[0x3C2884C1, TextURL],

[0xDE5A0DD6, TextEmail],

[0x7E6260D7, TextConcat],

[0xED6A8504, TextSubscript],

[0xC7FB5E01, TextSuperscript],

[0x034B8621, TextMarked],

[0x1CCB966A, TextPhone],

[0x081CCF4F, TextImage],

[0x35553762, TextAnchor],

[0x13567E8A, PageBlockUnsupported],

[0x70ABC3FD, PageBlockTitle],

[0x8FFA9A1F, PageBlockSubtitle],

[0xBAAFE5E0, PageBlockAuthorDate],

[0xBFD064EC, PageBlockHeader],

[0xF12BB6E1, PageBlockSubheader],

[0x467A0766, PageBlockParagraph],

[0xC070D93E, PageBlockPreformatted],

[0x48870999, PageBlockFooter],

[0xDB20B188, PageBlockDivider],

[0xCE0D37B0, PageBlockAnchor],

[0xE4E88011, PageBlockList],

[0x263D7C26, PageBlockBlockquote],

[0x4F4456D3, PageBlockPullquote],

[0x1759C560, PageBlockPhoto],

[0x7C8FE7B6, PageBlockVideo],

[0x39F23300, PageBlockCover],

[0xA8718DC5, PageBlockEmbed],

[0xF259A80B, PageBlockEmbedPost],

[0x65A0FA4D, PageBlockCollage],

[0x031F9590, PageBlockSlideshow],

[0xEF1751B5, PageBlockChannel],

[0x804361EA, PageBlockAudio],

[0x1E148390, PageBlockKicker],

[0xBF4DEA82, PageBlockTable],

[0x9A8AE1E1, PageBlockOrderedList],

[0x76768BED, PageBlockDetails],

[0x16115A96, PageBlockRelatedArticles],

[0xA44F3EF6, PageBlockMap],

[0x85E42301, PhoneCallDiscardReasonMissed],

[0xE095C1A0, PhoneCallDiscardReasonDisconnect],

[0x57ADC690, PhoneCallDiscardReasonHangup],

[0xFAF7E8C9, PhoneCallDiscardReasonBusy],

[0x7D748D04, DataJSON],

[0xCB296BF8, LabeledPrice],

[0x3E85A91B, Invoice],

[0xEA02C27E, PaymentCharge],

[0x1E8CAAEB, PostAddress],

[0x909C3F94, PaymentRequestedInfo],

[0xCDC27A1F, PaymentSavedCredentialsCard],

[0x1C570ED1, WebDocument],

[0xF9C8BCC6, WebDocumentNoProxy],

[0x9BED434D, InputWebDocument],

[0xC239D686, InputWebFileLocation],

[0x9F2221C9, InputWebFileGeoPointLocation],

[0xF46FE924, InputWebFileAudioAlbumThumbLocation],

[0x21E753BC, UploadWebFile],

[0xA0058751, PaymentsPaymentForm],

[0xD1451883, PaymentsValidatedRequestedInfo],

[0x4E5F810D, PaymentsPaymentResult],

[0xD8411139, PaymentsPaymentVerificationNeeded],

[0x70C4FE03, PaymentsPaymentReceipt],

[0xFB8FE43C, PaymentsSavedInfo],

[0xC10EB2CF, InputPaymentCredentialsSaved],

[0x3417D728, InputPaymentCredentials],

[0x0AA1C39F, InputPaymentCredentialsApplePay],

[0x8AC32801, InputPaymentCredentialsGooglePay],

[0xDB64FD34, AccountTmpPassword],

[0xB6213CDF, ShippingOption],

[0x32DA9E9C, InputStickerSetItem],

[0x1E36FDED, InputPhoneCall],

[0x5366C915, PhoneCallEmpty],

[0xC5226F17, PhoneCallWaiting],

[0x14B0ED0C, PhoneCallRequested],

[0x3660C311, PhoneCallAccepted],

[0x967F7C67, PhoneCall],

[0x50CA4DE1, PhoneCallDiscarded],

[0x9CC123C7, PhoneConnection],

[0x635FE375, PhoneConnectionWebrtc],

[0xFC878FC8, PhoneCallProtocol],

[0xEC82E140, PhonePhoneCall],

[0xEEA8E46E, UploadCdnFileReuploadNeeded],

[0xA99FCA4F, UploadCdnFile],

[0xC982EABA, CdnPublicKey],

[0x5725E40A, CdnConfig],

[0xCAD181F6, LangPackString],

[0x6C47AC9F, LangPackStringPluralized],

[0x2979EEB2, LangPackStringDeleted],

[0xF385C1F6, LangPackDifference],

[0xEECA5CE3, LangPackLanguage],

[0xE6DFB825, ChannelAdminLogEventActionChangeTitle],

[0x55188A2E, ChannelAdminLogEventActionChangeAbout],

[0x6A4AFC38, ChannelAdminLogEventActionChangeUsername],

[0x434BD2AF, ChannelAdminLogEventActionChangePhoto],

[0x1B7907AE, ChannelAdminLogEventActionToggleInvites],

[0x26AE0971, ChannelAdminLogEventActionToggleSignatures],

[0xE9E82C18, ChannelAdminLogEventActionUpdatePinned],

[0x709B2405, ChannelAdminLogEventActionEditMessage],

[0x42E047BB, ChannelAdminLogEventActionDeleteMessage],

[0x183040D3, ChannelAdminLogEventActionParticipantJoin],

[0xF89777F2, ChannelAdminLogEventActionParticipantLeave],

[0xE31C34D8, ChannelAdminLogEventActionParticipantInvite],

[0xE6D83D7E, ChannelAdminLogEventActionParticipantToggleBan],

[0xD5676710, ChannelAdminLogEventActionParticipantToggleAdmin],

[0xB1C3CAA7, ChannelAdminLogEventActionChangeStickerSet],

[0x5F5C95F1, ChannelAdminLogEventActionTogglePreHistoryHidden],

[0x2DF5FC0A, ChannelAdminLogEventActionDefaultBannedRights],

[0x8F079643, ChannelAdminLogEventActionStopPoll],

[0x050C7AC8, ChannelAdminLogEventActionChangeLinkedChat],

[0x0E6B76AE, ChannelAdminLogEventActionChangeLocation],

[0x53909779, ChannelAdminLogEventActionToggleSlowMode],

[0x23209745, ChannelAdminLogEventActionStartGroupCall],

[0xDB9F9140, ChannelAdminLogEventActionDiscardGroupCall],

[0xF92424D2, ChannelAdminLogEventActionParticipantMute],

[0xE64429C0, ChannelAdminLogEventActionParticipantUnmute],

[0x56D6A247, ChannelAdminLogEventActionToggleGroupCallSetting],

[0xFE9FC158, ChannelAdminLogEventActionParticipantJoinByInvite],

[0x5A50FCA4, ChannelAdminLogEventActionExportedInviteDelete],

[0x410A134E, ChannelAdminLogEventActionExportedInviteRevoke],

[0xE90EBB59, ChannelAdminLogEventActionExportedInviteEdit],

[0x3E7F6847, ChannelAdminLogEventActionParticipantVolume],

[0x6E941A38, ChannelAdminLogEventActionChangeHistoryTTL],

[0xAFB6144A, ChannelAdminLogEventActionParticipantJoinByRequest],

[0xCB2AC766, ChannelAdminLogEventActionToggleNoForwards],

[0x278F2868, ChannelAdminLogEventActionSendMessage],

[0xBE4E0EF8, ChannelAdminLogEventActionChangeAvailableReactions],

[0xF04FB3A9, ChannelAdminLogEventActionChangeUsernames],

[0x02CC6383, ChannelAdminLogEventActionToggleForum],

[0x58707D28, ChannelAdminLogEventActionCreateTopic],

[0xF06FE208, ChannelAdminLogEventActionEditTopic],

[0xAE168909, ChannelAdminLogEventActionDeleteTopic],

[0x5D8D353B, ChannelAdminLogEventActionPinTopic],

[0x64F36DFC, ChannelAdminLogEventActionToggleAntiSpam],

[0x1FAD68CD, ChannelAdminLogEvent],

[0xED8AF74D, ChannelsAdminLogResults],

[0xEA107AE4, ChannelAdminLogEventsFilter],

[0x5CE14175, PopularContact],

[0x9E8FA6D3, MessagesFavedStickersNotModified],

[0x2CB51097, MessagesFavedStickers],

[0x46E1D13D, RecentMeURLUnknown],

[0xB92C09E2, RecentMeURLUser],

[0xB2DA71D2, RecentMeURLChat],

[0xEB49081D, RecentMeURLChatInvite],

[0xBC0A57DC, RecentMeURLStickerSet],

[0x0E0310D7, HelpRecentMeURLs],

[0x1CC6E91F, InputSingleMedia],

[0xA6F8F452, WebAuthorization],

[0xED56C9FC, AccountWebAuthorizations],

[0xA676A322, InputMessageID],

[0xBAD88395, InputMessageReplyTo],

[0x86872538, InputMessagePinned],

[0xACFA1A7E, InputMessageCallbackQuery],

[0xFCAAFEB7, InputDialogPeer],

[0x64600527, InputDialogPeerFolder],

[0xE56DBF05, DialogPeer],

[0x514519E2, DialogPeerFolder],

[0x0D54B65D, MessagesFoundStickerSetsNotModified],

[0x8AF09DD2, MessagesFoundStickerSets],

[0xF39B035C, FileHash],

[0x75588B3F, InputClientProxy],

[0xE3309F7F, HelpTermsOfServiceUpdateEmpty],

[0x28ECF961, HelpTermsOfServiceUpdate],

[0x3334B0F0, InputSecureFileUploaded],

[0x5367E5BE, InputSecureFile],

[0x64199744, SecureFileEmpty],

[0x7D09C27E, SecureFile],

[0x8AEABEC3, SecureData],

[0x7D6099DD, SecurePlainPhone],

[0x21EC5A5F, SecurePlainEmail],

[0x9D2A81E3, SecureValueTypePersonalDetails],

[0x3DAC6A00, SecureValueTypePassport],

[0x06E425C4, SecureValueTypeDriverLicense],

[0xA0D0744B, SecureValueTypeIdentityCard],

[0x99A48F23, SecureValueTypeInternalPassport],

[0xCBE31E26, SecureValueTypeAddress],

[0xFC36954E, SecureValueTypeUtilityBill],

[0x89137C0D, SecureValueTypeBankStatement],

[0x8B883488, SecureValueTypeRentalAgreement],

[0x99E3806A, SecureValueTypePassportRegistration],

[0xEA02EC33, SecureValueTypeTemporaryRegistration],

[0xB320AADB, SecureValueTypePhone],

[0x8E3CA7EE, SecureValueTypeEmail],

[0x187FA0CA, SecureValue],

[0xDB21D0A7, InputSecureValue],

[0xED1ECDB0, SecureValueHash],

[0xE8A40BD9, SecureValueErrorData],

[0x00BE3DFA, SecureValueErrorFrontSide],

[0x868A2AA5, SecureValueErrorReverseSide],

[0xE537CED6, SecureValueErrorSelfie],

[0x7A700873, SecureValueErrorFile],

[0x666220E9, SecureValueErrorFiles],

[0x869D758F, SecureValueError],

[0xA1144770, SecureValueErrorTranslationFile],

[0x34636DD8, SecureValueErrorTranslationFiles],

[0x33F0EA47, SecureCredentialsEncrypted],

[0xAD2E1CD8, AccountAuthorizationForm],

[0x811F854F, AccountSentEmailCode],

[0x66AFA166, HelpDeepLinkInfoEmpty],

[0x6A4EE832, HelpDeepLinkInfo],

[0x1142BD56, SavedPhoneContact],

[0x4DBA4501, AccountTakeout],

[0xD45AB096, PasswordKdfAlgoUnknown],

[0x3A912D4A, PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow],

[0x004A8537, SecurePasswordKdfAlgoUnknown],

[0xBBF2DDA0, SecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000],

[0x86471D92, SecurePasswordKdfAlgoSHA512],

[0x1527BCAC, SecureSecretSettings],

[0x9880F658, InputCheckPasswordEmpty],

[0xD27FF082, InputCheckPasswordSRP],

[0x829D99DA, SecureRequiredType],

[0x027477B4, SecureRequiredTypeOneOf],

[0xBFB9F457, HelpPassportConfigNotModified],

[0xA098D6AF, HelpPassportConfig],

[0x1D1B1245, InputAppEvent],

[0xC0DE1BD9, JsonObjectValue],

[0x3F6D7B68, JsonNull],

[0xC7345E6A, JsonBool],

[0x2BE0DFA4, JsonNumber],

[0xB71E767A, JsonString],

[0xF7444763, JsonArray],

[0x99C1D49D, JsonObject],

[0x34566B6A, PageTableCell],

[0xE0C0C5E5, PageTableRow],

[0x6F747657, PageCaption],

[0xB92FB6CD, PageListItemText],

[0x25E073FC, PageListItemBlocks],

[0x5E068047, PageListOrderedItemText],

[0x98DD8936, PageListOrderedItemBlocks],

[0xB390DC08, PageRelatedArticle],

[0x98657F0D, Page],

[0x8C05F1C9, HelpSupportName],

[0xF3AE2EED, HelpUserInfoEmpty],

[0x01EB3758, HelpUserInfo],

[0x6CA9C2E9, PollAnswer],

[0x86E18161, Poll],

[0x3B6DDAD2, PollAnswerVoters],

[0x7ADF2420, PollResults],

[0xF041E250, ChatOnlines],

[0x47A971E0, StatsURL],

[0x5FB224D5, ChatAdminRights],

[0x9F120418, ChatBannedRights],

[0xE630B979, InputWallPaper],

[0x72091C80, InputWallPaperSlug],

[0x967A462E, InputWallPaperNoFile],

[0x1C199183, AccountWallPapersNotModified],

[0xCDC3858C, AccountWallPapers],

[0xAD253D78, CodeSettings],

[0x1DC1BCA4, WallPaperSettings],

[0xBAA57628, AutoDownloadSettings],

[0x63CACF26, AccountAutoDownloadSettings],

[0xD5B3B9F9, EmojiKeyword],

[0x236DF622, EmojiKeywordDeleted],

[0x5CC761BD, EmojiKeywordsDifference],

[0xA575739D, EmojiURL],

[0xB3FB5361, EmojiLanguage],

[0xFF544E65, Folder],

[0xFBD2C296, InputFolderPeer],

[0xE9BAA668, FolderPeer],

[0xE844EBFF, MessagesSearchCounter],

[0x92D33A0E, URLAuthResultRequest],

[0x8F8C0E4E, URLAuthResultAccepted],

[0xA9D6DB1F, URLAuthResultDefault],

[0xBFB5AD8B, ChannelLocationEmpty],

[0x209B82DB, ChannelLocation],

[0xCA461B5D, PeerLocated],

[0xF8EC284B, PeerSelfLocated],

[0xD072ACB4, RestrictionReason],

[0x3C5693E9, InputTheme],

[0xF5890DF1, InputThemeSlug],

[0xA00E67D6, Theme],

[0xF41EB622, AccountThemesNotModified],

[0x9A3D8C6D, AccountThemes],

[0x629F1980, AuthLoginToken],

[0x068E9916, AuthLoginTokenMigrateTo],

[0x390D5C5E, AuthLoginTokenSuccess],

[0x57E28221, AccountContentSettings],

[0xA927FEC5, MessagesInactiveChats],

[0xC3A12462, BaseThemeClassic],

[0xFBD81688, BaseThemeDay],

[0xB7B31EA8, BaseThemeNight],

[0x6D5F77EE, BaseThemeTinted],

[0x5B11125A, BaseThemeArctic],

[0x8FDE504F, InputThemeSettings],

[0xFA58B6D4, ThemeSettings],

[0x54B56617, WebPageAttributeTheme],

[0x939A4671, WebPageAttributeStory],

[0x4899484E, MessagesVotesList],

[0xF568028A, BankCardOpenURL],

[0x3E24E573, PaymentsBankCardData],

[0x7438F7E8, DialogFilter],

[0x363293AE, DialogFilterDefault],

[0xD64A04A8, DialogFilterChatlist],

[0x77744D4A, DialogFilterSuggested],

[0xB637EDAF, StatsDateRangeDays],

[0xCB43ACDE, StatsAbsValueAndPrev],

[0xCBCE2FE0, StatsPercentValue],

[0x4A27EB2D, StatsGraphAsync],

[0xBEDC9822, StatsGraphError],

[0x8EA464B6, StatsGraph],

[0xAD4FC9BD, MessageInteractionCounters],

[0xBDF78394, StatsBroadcastStats],

[0x98F6AC75, HelpPromoDataEmpty],

[0x8C39793F, HelpPromoData],

[0xDE33B094, VideoSize],

[0xF85C413C, VideoSizeEmojiMarkup],

[0x0DA082FE, VideoSizeStickerMarkup],

[0x9D04AF9B, StatsGroupTopPoster],

[0xD7584C87, StatsGroupTopAdmin],

[0x535F779D, StatsGroupTopInviter],

[0xEF7FF916, StatsMegagroupStats],

[0x734C4CCB, GlobalPrivacySettings],

[0x4203C5EF, HelpCountryCode],

[0xC3878E23, HelpCountry],

[0x93CC1F32, HelpCountriesListNotModified],

[0x87D0759E, HelpCountriesList],

[0x455B853D, MessageViews],

[0xB6C4F543, MessagesMessageViews],

[0xA6341782, MessagesDiscussionMessage],

[0xA6D57763, MessageReplyHeader],

[0x9C98BFC1, MessageReplyStoryHeader],

[0x83D60FC2, MessageReplies],

[0xE8FD8014, PeerBlocked],

[0x8999F295, StatsMessageStats],

[0x7780BCB4, GroupCallDiscarded],

[0xD597650C, GroupCall],

[0xD8AA840F, InputGroupCall],

[0xEBA636FE, GroupCallParticipant],

[0x9E727AAD, PhoneGroupCall],

[0xF47751B6, PhoneGroupParticipants],

[0x3081ED9D, InlineQueryPeerTypeSameBotPM],

[0x833C0FAC, InlineQueryPeerTypePM],

[0xD766C50A, InlineQueryPeerTypeChat],

[0x5EC4BE43, InlineQueryPeerTypeMegagroup],

[0x6334EE9A, InlineQueryPeerTypeBroadcast],

[0x0E3B2D0C, InlineQueryPeerTypeBotPM],

[0x1662AF0B, MessagesHistoryImport],

[0x5E0FB7B9, MessagesHistoryImportParsed],

[0xEF8D3E6C, MessagesAffectedFoundMessages],

[0x8C5ADFD9, ChatInviteImporter],

[0xBDC62DCC, MessagesExportedChatInvites],

[0x1871BE50, MessagesExportedChatInvite],

[0x222600EF, MessagesExportedChatInviteReplaced],

[0x81B6B00A, MessagesChatInviteImporters],

[0xF2ECEF23, ChatAdminWithInvites],

[0xB69B72D7, MessagesChatAdminsWithInvites],

[0xA24DE717, MessagesCheckedHistoryImportPeer],

[0xAFE5623F, PhoneJoinAsPeers],

[0x204BD158, PhoneExportedGroupCallInvite],

[0xDCB118B7, GroupCallParticipantVideoSourceGroup],

[0x67753AC8, GroupCallParticipantVideo],

[0x85FEA03F, StickersSuggestedShortName],

[0x2F6CB2AB, BotCommandScopeDefault],

[0x3C4F04D8, BotCommandScopeUsers],

[0x6FE1A881, BotCommandScopeChats],

[0xB9AA606A, BotCommandScopeChatAdmins],

[0xDB9D897D, BotCommandScopePeer],

[0x3FD863D1, BotCommandScopePeerAdmins],

[0x0A1321F3, BotCommandScopePeerUser],

[0xE3779861, AccountResetPasswordFailedWait],

[0xE9EFFC7D, AccountResetPasswordRequestedWait],

[0xE926D63E, AccountResetPasswordOk],

[0xDAAFFF6B, SponsoredMessage],

[0xC9EE1D87, MessagesSponsoredMessages],

[0x1839490F, MessagesSponsoredMessagesEmpty],

[0xC9B0539F, SearchResultsCalendarPeriod],

[0x147EE23C, MessagesSearchResultsCalendar],

[0x7F648B67, SearchResultPosition],

[0x53B22BAF, MessagesSearchResultsPositions],

[0xF496B0C6, ChannelsSendAsPeers],

[0x3B6D152E, UsersUserFull],

[0x6880B94D, MessagesPeerSettings],

[0xC3A2835F, AuthLoggedOut],

[0xA3D1CB80, ReactionCount],

[0x4F2B9479, MessageReactions],

[0x31BD492D, MessagesMessageReactionsList],

[0xC077EC01, AvailableReaction],

[0x9F071957, MessagesAvailableReactionsNotModified],

[0x768E3AAD, MessagesAvailableReactions],

[0x8C79B63C, MessagePeerReaction],

[0x80EB48AF, GroupCallStreamChannel],

[0xD0E482B2, PhoneGroupCallStreamChannels],

[0x2DBF3432, PhoneGroupCallStreamRtmpURL],

[0x4576F3F0, AttachMenuBotIconColor],

[0xB2A7386B, AttachMenuBotIcon],

[0xC8AA2CD2, AttachMenuBot],

[0xF1D88A5C, AttachMenuBotsNotModified],

[0x3C4301C0, AttachMenuBots],

[0x93BF667F, AttachMenuBotsBot],

[0x0C14557C, WebViewResultURL],

[0x882F76BB, SimpleWebViewResultURL],

[0x0C94511C, WebViewMessageSent],

[0x7533A588, BotMenuButtonDefault],

[0x4258C205, BotMenuButtonCommands],

[0xC7B57CE6, BotMenuButton],

[0xFBF6E8B1, AccountSavedRingtonesNotModified],

[0xC1E92CC5, AccountSavedRingtones],

[0x97E8BEBE, NotificationSoundDefault],

[0x6F0C34DF, NotificationSoundNone],

[0x830B9AE4, NotificationSoundLocal],

[0xFF6C8049, NotificationSoundRingtone],

[0xB7263F6D, AccountSavedRingtone],

[0x1F307EB7, AccountSavedRingtoneConverted],

[0x7D6BE90E, AttachMenuPeerTypeSameBotPM],

[0xC32BFA1A, AttachMenuPeerTypeBotPM],

[0xF146D31F, AttachMenuPeerTypePM],

[0x0509113F, AttachMenuPeerTypeChat],

[0x7BFBDEFC, AttachMenuPeerTypeBroadcast],

[0xC5B56859, InputInvoiceMessage],

[0xC326CAEF, InputInvoiceSlug],

[0xAED0CBD9, PaymentsExportedInvoice],

[0x93752C52, MessagesTranscribedAudio],

[0x5334759C, HelpPremiumPromo],

[0xA6751E66, InputStorePaymentPremiumSubscription],

[0x616F7FE8, InputStorePaymentGiftPremium],

[0x74C34319, PremiumGiftOption],

[0x88F8F21B, PaymentFormMethod],

[0x2DE11AAE, EmojiStatusEmpty],

[0x929B619D, EmojiStatus],

[0xFA30A8C7, EmojiStatusUntil],

[0xD08CE645, AccountEmojiStatusesNotModified],

[0x90C467D1, AccountEmojiStatuses],

[0x79F5D419, ReactionEmpty],

[0x1B2286B8, ReactionEmoji],

[0x8935FC73, ReactionCustomEmoji],

[0xEAFC32BC, ChatReactionsNone],

[0x52928BCA, ChatReactionsAll],

[0x661D4037, ChatReactionsSome],

[0xB06FDBDF, MessagesReactionsNotModified],

[0xEAFDF716, MessagesReactions],

[0x4345BE73, EmailVerifyPurposeLoginSetup],

[0x527D22EB, EmailVerifyPurposeLoginChange],

[0xBBF51685, EmailVerifyPurposePassport],

[0x922E55A9, EmailVerificationCode],

[0xDB909EC2, EmailVerificationGoogle],

[0x96D074FD, EmailVerificationApple],

[0x2B96CD1B, AccountEmailVerified],

[0xE1BB0D61, AccountEmailVerifiedLogin],

[0x5F2D1DF2, PremiumSubscriptionOption],

[0xB81C7034, SendAsPeer],

[0xAD628CC8, MessageExtendedMediaPreview],

[0xEE479C64, MessageExtendedMedia],

[0xFCFEB29C, StickerKeyword],

[0xB4073647, Username],

[0x023F109B, ForumTopicDeleted],

[0x71701DA9, ForumTopic],

[0x367617D3, MessagesForumTopics],

[0x43B46B20, DefaultHistoryTTL],

[0x41BF109B, ExportedContactToken],

[0x5F3B8A00, RequestPeerTypeUser],

[0xC9F06E1B, RequestPeerTypeChat],

[0x339BEF6C, RequestPeerTypeBroadcast],

[0x481EADFA, EmojiListNotModified],

[0x7A1E11D1, EmojiList],

[0x7A9ABDA9, EmojiGroup],

[0x6FB4AD87, MessagesEmojiGroupsNotModified],

[0x881FB94B, MessagesEmojiGroups],

[0x751F3146, TextWithEntities],

[0x33DB32F8, MessagesTranslateResult],

[0xC84834CE, AutoSaveSettings],

[0x81602D47, AutoSaveException],

[0x4C3E069D, AccountAutoSaveSettings],

[0x7CDE641D, HelpAppConfigNotModified],

[0xDD18782E, HelpAppConfig],

[0xA920BD7A, InputBotAppID],

[0x908C0407, InputBotAppShortName],

[0x5DA674B7, BotAppNotModified],

[0x95FCD1D6, BotApp],

[0xEB50ADF5, MessagesBotApp],

[0x3C1B4F0D, AppWebViewResultURL],

[0xB57295D5, InlineBotWebView],

[0x4A4FF172, ReadParticipantDate],

[0xF3E0DA33, InputChatlistDialogFilter],

[0x0C5181AC, ExportedChatlistInvite],

[0x10E6E3A6, ChatlistsExportedChatlistInvite],

[0x10AB6DC7, ChatlistsExportedInvites],

[0xFA87F659, ChatlistsChatlistInviteAlready],

[0x1DCD839D, ChatlistsChatlistInvite],

[0x93BD878D, ChatlistsChatlistUpdates],

[0xE8A775B0, BotsBotInfo],

[0xB6CC2D5C, MessagePeerVote],

[0x74CDA504, MessagePeerVoteInputOption],

[0x4628F6E6, MessagePeerVoteMultiple],

[0x3DB8EC63, SponsoredWebPage],

[0xD36760CF, StoryViews],

[0x51E6EE4F, StoryItemDeleted],

[0xFFADC913, StoryItemSkipped],

[0x562AA637, StoryItem],

[0x8611A200, UserStories],

[0x47E0A07E, StoriesAllStoriesNotModified],

[0x839E0428, StoriesAllStories],

[0x4FE57DF1, StoriesStories],

[0x37A6FF5F, StoriesUserStories],

[0xA71AACC2, StoryView],

[0xFB3F77AC, StoriesStoryViewsList],

[0xDE9EED1D, StoriesStoryViews],

[0x9C5386E4, InputReplyToMessage],

[0x15B0F283, InputReplyToStory],

[0x3FC9053B, ExportedStoryLink],

// deno-lint-ignore no-explicit-any
] as const as any);
