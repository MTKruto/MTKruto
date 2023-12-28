import { TLObject, types } from "./2_tl.ts";

export interface ErrorWithCallParams {
  error_code: number;
  error_message: string;
  call: TLObject;
}

export class ErrorWithCall extends types.Rpc_error {
  call: TLObject;

  constructor(params: ErrorWithCallParams) {
    super(params);
    this.call = params.call;
  }
}

export class AboutTooLong extends ErrorWithCall {
  //
}

export class AccessTokenExpired extends ErrorWithCall {
  //
}

export class AccessTokenInvalid extends ErrorWithCall {
  //
}

export class ActiveUserRequired extends ErrorWithCall {
  //
}

export class AdminsTooMuch extends ErrorWithCall {
  //
}

export class AdminIdInvalid extends ErrorWithCall {
  //
}

export class AdminRankEmojiNotAllowed extends ErrorWithCall {
  //
}

export class AdminRankInvalid extends ErrorWithCall {
  //
}

export class AlbumPhotosTooMany extends ErrorWithCall {
  //
}

export class ApiIdInvalid extends ErrorWithCall {
  //
}

export class ApiIdPublishedFlood extends ErrorWithCall {
  //
}

export class ArticleTitleEmpty extends ErrorWithCall {
  //
}

export class AudioContentUrlEmpty extends ErrorWithCall {
  //
}

export class AudioTitleEmpty extends ErrorWithCall {
  //
}

export class AuthBytesInvalid extends ErrorWithCall {
  //
}

export class AuthKeyDuplicated extends ErrorWithCall {
  //
}

export class AuthKeyInvalid extends ErrorWithCall {
  //
}

export class AuthKeyPermEmpty extends ErrorWithCall {
  //
}

export class AuthKeyUnregistered extends ErrorWithCall {
  //
}

export class AuthRestart extends ErrorWithCall {
  //
}

export class AuthTokenAlreadyAccepted extends ErrorWithCall {
  //
}

export class AuthTokenException extends ErrorWithCall {
  //
}

export class AuthTokenExpired extends ErrorWithCall {
  //
}

export class AuthTokenInvalid extends ErrorWithCall {
  //
}

export class AutoarchiveNotAvailable extends ErrorWithCall {
  //
}

export class BankCardNumberInvalid extends ErrorWithCall {
  //
}

export class BannedRightsInvalid extends ErrorWithCall {
  //
}

export class BasePortLocInvalid extends ErrorWithCall {
  //
}

export class BotsTooMuch extends ErrorWithCall {
  //
}

export class BotChannelsNa extends ErrorWithCall {
  //
}

export class BotCommandDescriptionInvalid extends ErrorWithCall {
  //
}

export class BotCommandInvalid extends ErrorWithCall {
  //
}

export class BotDomainInvalid extends ErrorWithCall {
  //
}

export class BotGamesDisabled extends ErrorWithCall {
  //
}

export class BotGroupsBlocked extends ErrorWithCall {
  //
}

export class BotInlineDisabled extends ErrorWithCall {
  //
}

export class BotInvalid extends ErrorWithCall {
  //
}

export class BotMethodInvalid extends ErrorWithCall {
  //
}

export class BotMissing extends ErrorWithCall {
  //
}

export class BotOnesideNotAvail extends ErrorWithCall {
  //
}

export class BotPaymentsDisabled extends ErrorWithCall {
  //
}

export class BotPollsDisabled extends ErrorWithCall {
  //
}

export class BotResponseTimeout extends ErrorWithCall {
  //
}

export class BotScoreNotModified extends ErrorWithCall {
  //
}

export class BroadcastCallsDisabled extends ErrorWithCall {
  //
}

export class BroadcastForbidden extends ErrorWithCall {
  //
}

export class BroadcastIdInvalid extends ErrorWithCall {
  //
}

export class BroadcastPublicVotersForbidden extends ErrorWithCall {
  //
}

export class BroadcastRequired extends ErrorWithCall {
  //
}

export class ButtonDataInvalid extends ErrorWithCall {
  //
}

export class ButtonTextInvalid extends ErrorWithCall {
  //
}

export class ButtonTypeInvalid extends ErrorWithCall {
  //
}

export class ButtonUrlInvalid extends ErrorWithCall {
  //
}

export class ButtonUserPrivacyRestricted extends ErrorWithCall {
  //
}

export class CallAlreadyAccepted extends ErrorWithCall {
  //
}

export class CallAlreadyDeclined extends ErrorWithCall {
  //
}

export class CallOccupyFailed extends ErrorWithCall {
  //
}

export class CallPeerInvalid extends ErrorWithCall {
  //
}

export class CallProtocolFlagsInvalid extends ErrorWithCall {
  //
}

export class CdnMethodInvalid extends ErrorWithCall {
  //
}

export class CdnUploadTimeout extends ErrorWithCall {
  //
}

export class ChannelsAdminLocatedTooMuch extends ErrorWithCall {
  //
}

export class ChannelsAdminPublicTooMuch extends ErrorWithCall {
  //
}

export class ChannelsTooMuch extends ErrorWithCall {
  //
}

export class ChannelBanned extends ErrorWithCall {
  //
}

export class ChannelForumMissing extends ErrorWithCall {
  //
}

export class ChannelIdInvalid extends ErrorWithCall {
  //
}

export class ChannelInvalid extends ErrorWithCall {
  //
}

export class ChannelParicipantMissing extends ErrorWithCall {
  //
}

export class ChannelPrivate extends ErrorWithCall {
  //
}

export class ChannelPublicGroupNa extends ErrorWithCall {
  //
}

export class ChannelTooBig extends ErrorWithCall {
  //
}

export class ChannelTooLarge extends ErrorWithCall {
  //
}

export class ChatAboutNotModified extends ErrorWithCall {
  //
}

export class ChatAboutTooLong extends ErrorWithCall {
  //
}

export class ChatAdminInviteRequired extends ErrorWithCall {
  //
}

export class ChatAdminRequired extends ErrorWithCall {
  //
}

export class ChatDiscussionUnallowed extends ErrorWithCall {
  //
}

export class ChatForbidden extends ErrorWithCall {
  //
}

export class ChatForwardsRestricted extends ErrorWithCall {
  //
}

export class ChatGetFailed extends ErrorWithCall {
  //
}

export class ChatGuestSendForbidden extends ErrorWithCall {
  //
}

export class ChatIdEmpty extends ErrorWithCall {
  //
}

export class ChatIdGenerateFailed extends ErrorWithCall {
  //
}

export class ChatIdInvalid extends ErrorWithCall {
  //
}

export class ChatInvalid extends ErrorWithCall {
  //
}

export class ChatInvitePermanent extends ErrorWithCall {
  //
}

export class ChatLinkExists extends ErrorWithCall {
  //
}

export class ChatNotModified extends ErrorWithCall {
  //
}

export class ChatRestricted extends ErrorWithCall {
  //
}

export class ChatRevokeDateUnsupported extends ErrorWithCall {
  //
}

export class ChatSendGameForbidden extends ErrorWithCall {
  //
}

export class ChatSendGifsForbidden extends ErrorWithCall {
  //
}

export class ChatSendInlineForbidden extends ErrorWithCall {
  //
}

export class ChatSendMediaForbidden extends ErrorWithCall {
  //
}

export class ChatSendPollForbidden extends ErrorWithCall {
  //
}

export class ChatSendStickersForbidden extends ErrorWithCall {
  //
}

export class ChatTitleEmpty extends ErrorWithCall {
  //
}

export class ChatTooBig extends ErrorWithCall {
  //
}

export class ChatWriteForbidden extends ErrorWithCall {
  //
}

export class ChpCallFail extends ErrorWithCall {
  //
}

export class CodeEmpty extends ErrorWithCall {
  //
}

export class CodeHashInvalid extends ErrorWithCall {
  //
}

export class CodeInvalid extends ErrorWithCall {
  //
}

export class ConnectionApiIdInvalid extends ErrorWithCall {
  //
}

export class ConnectionAppVersionEmpty extends ErrorWithCall {
  //
}

export class ConnectionDeviceModelEmpty extends ErrorWithCall {
  //
}

export class ConnectionLangPackInvalid extends ErrorWithCall {
  //
}

export class ConnectionLayerInvalid extends ErrorWithCall {
  //
}

export class ConnectionNotInited extends ErrorWithCall {
  //
}

export class ConnectionSystemEmpty extends ErrorWithCall {
  //
}

export class ConnectionSystemLangCodeEmpty extends ErrorWithCall {
  //
}

export class ContactAddMissing extends ErrorWithCall {
  //
}

export class ContactIdInvalid extends ErrorWithCall {
  //
}

export class ContactNameEmpty extends ErrorWithCall {
  //
}

export class ContactReqMissing extends ErrorWithCall {
  //
}

export class CreateCallFailed extends ErrorWithCall {
  //
}

export class CurrencyTotalAmountInvalid extends ErrorWithCall {
  //
}

export class DataInvalid extends ErrorWithCall {
  //
}

export class DataJsonInvalid extends ErrorWithCall {
  //
}

export class DataTooLong extends ErrorWithCall {
  //
}

export class DateEmpty extends ErrorWithCall {
  //
}

export class DcIdInvalid extends ErrorWithCall {
  //
}

export class DhGAInvalid extends ErrorWithCall {
  //
}

export class DocumentInvalid extends ErrorWithCall {
  //
}

export class EditBotInviteForbidden extends ErrorWithCall {
  //
}

export class EmailHashExpired extends ErrorWithCall {
  //
}

export class EmailInvalid extends ErrorWithCall {
  //
}

export class EmailUnconfirmed extends ErrorWithCall {
  //
}

export class EmailVerifyExpired extends ErrorWithCall {
  //
}

export class EmojiInvalid extends ErrorWithCall {
  //
}

export class EmojiNotModified extends ErrorWithCall {
  //
}

export class EmoticonEmpty extends ErrorWithCall {
  //
}

export class EmoticonInvalid extends ErrorWithCall {
  //
}

export class EmoticonStickerpackMissing extends ErrorWithCall {
  //
}

export class EncryptedMessageInvalid extends ErrorWithCall {
  //
}

export class EncryptionAlreadyAccepted extends ErrorWithCall {
  //
}

export class EncryptionAlreadyDeclined extends ErrorWithCall {
  //
}

export class EncryptionDeclined extends ErrorWithCall {
  //
}

export class EncryptionIdInvalid extends ErrorWithCall {
  //
}

export class EncryptionOccupyFailed extends ErrorWithCall {
  //
}

export class EntitiesTooLong extends ErrorWithCall {
  //
}

export class EntityBoundsInvalid extends ErrorWithCall {
  //
}

export class EntityMentionUserInvalid extends ErrorWithCall {
  //
}

export class ErrorTextEmpty extends ErrorWithCall {
  //
}

export class ExpireDateInvalid extends ErrorWithCall {
  //
}

export class ExpireForbidden extends ErrorWithCall {
  //
}

export class ExportCardInvalid extends ErrorWithCall {
  //
}

export class ExternalUrlInvalid extends ErrorWithCall {
  //
}

export class FieldNameEmpty extends ErrorWithCall {
  //
}

export class FieldNameInvalid extends ErrorWithCall {
  //
}

export class FilerefUpgradeNeeded extends ErrorWithCall {
  //
}

export class FileContentTypeInvalid extends ErrorWithCall {
  //
}

export class FileEmtpy extends ErrorWithCall {
  //
}

export class FileIdInvalid extends ErrorWithCall {
  //
}

export class FilePartsInvalid extends ErrorWithCall {
  //
}

export class FilePart_0Missing extends ErrorWithCall {
  //
}

export class FilePartEmpty extends ErrorWithCall {
  //
}

export class FilePartInvalid extends ErrorWithCall {
  //
}

export class FilePartLengthInvalid extends ErrorWithCall {
  //
}

export class FilePartSizeChanged extends ErrorWithCall {
  //
}

export class FilePartSizeInvalid extends ErrorWithCall {
  //
}

export class FilePartTooBig extends ErrorWithCall {
  //
}

export class FilePartXMissing extends ErrorWithCall {
  //
}

export class FileReferenceEmpty extends ErrorWithCall {
  //
}

export class FileReferenceExpired extends ErrorWithCall {
  //
}

export class FileReferenceInvalid extends ErrorWithCall {
  //
}

export class FileTitleEmpty extends ErrorWithCall {
  //
}

export class FilterIdInvalid extends ErrorWithCall {
  //
}

export class FilterIncludeEmpty extends ErrorWithCall {
  //
}

export class FilterNotSupported extends ErrorWithCall {
  //
}

export class FilterTitleEmpty extends ErrorWithCall {
  //
}

export class FirstnameInvalid extends ErrorWithCall {
  //
}

export class FolderIdEmpty extends ErrorWithCall {
  //
}

export class FolderIdInvalid extends ErrorWithCall {
  //
}

export class FreshChangeAdminsForbidden extends ErrorWithCall {
  //
}

export class FreshChangePhoneForbidden extends ErrorWithCall {
  //
}

export class FreshResetAuthorisationForbidden extends ErrorWithCall {
  //
}

export class FromMessageBotDisabled extends ErrorWithCall {
  //
}

export class FromPeerInvalid extends ErrorWithCall {
  //
}

export class GameBotInvalid extends ErrorWithCall {
  //
}

export class GeoPointInvalid extends ErrorWithCall {
  //
}

export class GifContentTypeInvalid extends ErrorWithCall {
  //
}

export class GifIdInvalid extends ErrorWithCall {
  //
}

export class GraphExpiredReload extends ErrorWithCall {
  //
}

export class GraphInvalidReload extends ErrorWithCall {
  //
}

export class GraphOutdatedReload extends ErrorWithCall {
  //
}

export class GroupcallAddParticipantsFailed extends ErrorWithCall {
  //
}

export class GroupcallAlreadyDiscarded extends ErrorWithCall {
  //
}

export class GroupcallAlreadyStarted extends ErrorWithCall {
  //
}

export class GroupcallForbidden extends ErrorWithCall {
  //
}

export class GroupcallInvalid extends ErrorWithCall {
  //
}

export class GroupcallJoinMissing extends ErrorWithCall {
  //
}

export class GroupcallNotModified extends ErrorWithCall {
  //
}

export class GroupcallSsrcDuplicateMuch extends ErrorWithCall {
  //
}

export class GroupedMediaInvalid extends ErrorWithCall {
  //
}

export class GroupCallInvalid extends ErrorWithCall {
  //
}

export class HashInvalid extends ErrorWithCall {
  //
}

export class HideRequesterMissing extends ErrorWithCall {
  //
}

export class HistoryGetFailed extends ErrorWithCall {
  //
}

export class ImageProcessFailed extends ErrorWithCall {
  //
}

export class ImportFileInvalid extends ErrorWithCall {
  //
}

export class ImportFormatUnrecognized extends ErrorWithCall {
  //
}

export class ImportIdInvalid extends ErrorWithCall {
  //
}

export class InlineBotRequired extends ErrorWithCall {
  //
}

export class InlineResultExpired extends ErrorWithCall {
  //
}

export class InputConstructorInvalid extends ErrorWithCall {
  //
}

export class InputFetchError extends ErrorWithCall {
  //
}

export class InputFetchFail extends ErrorWithCall {
  //
}

export class InputFilterInvalid extends ErrorWithCall {
  //
}

export class InputLayerInvalid extends ErrorWithCall {
  //
}

export class InputMethodInvalid extends ErrorWithCall {
  //
}

export class InputRequestTooLong extends ErrorWithCall {
  //
}

export class InputTextEmpty extends ErrorWithCall {
  //
}

export class InputUserDeactivated extends ErrorWithCall {
  //
}

export class InterdcXCallError extends ErrorWithCall {
  //
}

export class InterdcXCallRichError extends ErrorWithCall {
  //
}

export class InviteForbiddenWithJoinas extends ErrorWithCall {
  //
}

export class InviteHashEmpty extends ErrorWithCall {
  //
}

export class InviteHashExpired extends ErrorWithCall {
  //
}

export class InviteHashInvalid extends ErrorWithCall {
  //
}

export class InviteRequestSent extends ErrorWithCall {
  //
}

export class InviteRevokedMissing extends ErrorWithCall {
  //
}

export class InvoicePayloadInvalid extends ErrorWithCall {
  //
}

export class JoinAsPeerInvalid extends ErrorWithCall {
  //
}

export class LangCodeInvalid extends ErrorWithCall {
  //
}

export class LangCodeNotSupported extends ErrorWithCall {
  //
}

export class LangPackInvalid extends ErrorWithCall {
  //
}

export class LastnameInvalid extends ErrorWithCall {
  //
}

export class LimitInvalid extends ErrorWithCall {
  //
}

export class LinkNotModified extends ErrorWithCall {
  //
}

export class LocationInvalid extends ErrorWithCall {
  //
}

export class MaxDateInvalid extends ErrorWithCall {
  //
}

export class MaxIdInvalid extends ErrorWithCall {
  //
}

export class MaxQtsInvalid extends ErrorWithCall {
  //
}

export class Md5ChecksumInvalid extends ErrorWithCall {
  //
}

export class MediaCaptionTooLong extends ErrorWithCall {
  //
}

export class MediaEmpty extends ErrorWithCall {
  //
}

export class MediaGroupedInvalid extends ErrorWithCall {
  //
}

export class MediaInvalid extends ErrorWithCall {
  //
}

export class MediaNewInvalid extends ErrorWithCall {
  //
}

export class MediaPrevInvalid extends ErrorWithCall {
  //
}

export class MediaTtlInvalid extends ErrorWithCall {
  //
}

export class MegagroupIdInvalid extends ErrorWithCall {
  //
}

export class MegagroupPrehistoryHidden extends ErrorWithCall {
  //
}

export class MegagroupRequired extends ErrorWithCall {
  //
}

export class MemberNoLocation extends ErrorWithCall {
  //
}

export class MemberOccupyPrimaryLocFailed extends ErrorWithCall {
  //
}

export class MessageAuthorRequired extends ErrorWithCall {
  //
}

export class MessageDeleteForbidden extends ErrorWithCall {
  //
}

export class MessageEditTimeExpired extends ErrorWithCall {
  //
}

export class MessageEmpty extends ErrorWithCall {
  //
}

export class MessageIdsEmpty extends ErrorWithCall {
  //
}

export class MessageIdInvalid extends ErrorWithCall {
  //
}

export class MessageNotModified extends ErrorWithCall {
  //
}

export class MessagePollClosed extends ErrorWithCall {
  //
}

export class MessageTooLong extends ErrorWithCall {
  //
}

export class MethodInvalid extends ErrorWithCall {
  //
}

export class MinDateInvalid extends ErrorWithCall {
  //
}

export class MsgidDecreaseRetry extends ErrorWithCall {
  //
}

export class MsgIdInvalid extends ErrorWithCall {
  //
}

export class MsgTooOld extends ErrorWithCall {
  //
}

export class MsgWaitFailed extends ErrorWithCall {
  //
}

export class MtSendQueueTooLong extends ErrorWithCall {
  //
}

export class MultiMediaTooLong extends ErrorWithCall {
  //
}

export class NeedChatInvalid extends ErrorWithCall {
  //
}

export class NeedMemberInvalid extends ErrorWithCall {
  //
}

export class NewSaltInvalid extends ErrorWithCall {
  //
}

export class NewSettingsEmpty extends ErrorWithCall {
  //
}

export class NewSettingsInvalid extends ErrorWithCall {
  //
}

export class NextOffsetInvalid extends ErrorWithCall {
  //
}

export class NotAllowed extends ErrorWithCall {
  //
}

export class OffsetInvalid extends ErrorWithCall {
  //
}

export class OffsetPeerIdInvalid extends ErrorWithCall {
  //
}

export class OptionsTooMuch extends ErrorWithCall {
  //
}

export class OptionInvalid extends ErrorWithCall {
  //
}

export class PackShortNameInvalid extends ErrorWithCall {
  //
}

export class PackShortNameOccupied extends ErrorWithCall {
  //
}

export class PackTitleInvalid extends ErrorWithCall {
  //
}

export class ParticipantsTooFew extends ErrorWithCall {
  //
}

export class ParticipantCallFailed extends ErrorWithCall {
  //
}

export class ParticipantIdInvalid extends ErrorWithCall {
  //
}

export class ParticipantJoinMissing extends ErrorWithCall {
  //
}

export class ParticipantVersionOutdated extends ErrorWithCall {
  //
}

export class PasswordEmpty extends ErrorWithCall {
  //
}

export class PasswordHashInvalid extends ErrorWithCall {
  //
}

export class PasswordMissing extends ErrorWithCall {
  //
}

export class PasswordRecoveryExpired extends ErrorWithCall {
  //
}

export class PasswordRecoveryNa extends ErrorWithCall {
  //
}

export class PasswordRequired extends ErrorWithCall {
  //
}

export class PaymentProviderInvalid extends ErrorWithCall {
  //
}

export class PeerFlood extends ErrorWithCall {
  //
}

export class PeerHistoryEmpty extends ErrorWithCall {
  //
}

export class PeerIdInvalid extends ErrorWithCall {
  //
}

export class PeerIdNotSupported extends ErrorWithCall {
  //
}

export class PersistentTimestampEmpty extends ErrorWithCall {
  //
}

export class PersistentTimestampInvalid extends ErrorWithCall {
  //
}

export class PersistentTimestampOutdated extends ErrorWithCall {
  //
}

export class PhoneCodeEmpty extends ErrorWithCall {
  //
}

export class PhoneCodeExpired extends ErrorWithCall {
  //
}

export class PhoneCodeHashEmpty extends ErrorWithCall {
  //
}

export class PhoneCodeInvalid extends ErrorWithCall {
  //
}

export class PhoneHashExpired extends ErrorWithCall {
  //
}

export class PhoneNotOccupied extends ErrorWithCall {
  //
}

export class PhoneNumberAppSignupForbidden extends ErrorWithCall {
  //
}

export class PhoneNumberBanned extends ErrorWithCall {
  //
}

export class PhoneNumberFlood extends ErrorWithCall {
  //
}

export class PhoneNumberInvalid extends ErrorWithCall {
  //
}

export class PhoneNumberOccupied extends ErrorWithCall {
  //
}

export class PhoneNumberUnoccupied extends ErrorWithCall {
  //
}

export class PhonePasswordFlood extends ErrorWithCall {
  //
}

export class PhonePasswordProtected extends ErrorWithCall {
  //
}

export class PhotoContentTypeInvalid extends ErrorWithCall {
  //
}

export class PhotoContentUrlEmpty extends ErrorWithCall {
  //
}

export class PhotoCropFileMissing extends ErrorWithCall {
  //
}

export class PhotoCropSizeSmall extends ErrorWithCall {
  //
}

export class PhotoExtInvalid extends ErrorWithCall {
  //
}

export class PhotoFileMissing extends ErrorWithCall {
  //
}

export class PhotoIdInvalid extends ErrorWithCall {
  //
}

export class PhotoInvalid extends ErrorWithCall {
  //
}

export class PhotoInvalidDimensions extends ErrorWithCall {
  //
}

export class PhotoSaveFileInvalid extends ErrorWithCall {
  //
}

export class PhotoThumbUrlEmpty extends ErrorWithCall {
  //
}

export class PinnedDialogsTooMuch extends ErrorWithCall {
  //
}

export class PinRestricted extends ErrorWithCall {
  //
}

export class PollAnswersInvalid extends ErrorWithCall {
  //
}

export class PollAnswerInvalid extends ErrorWithCall {
  //
}

export class PollOptionDuplicate extends ErrorWithCall {
  //
}

export class PollOptionInvalid extends ErrorWithCall {
  //
}

export class PollQuestionInvalid extends ErrorWithCall {
  //
}

export class PollUnsupported extends ErrorWithCall {
  //
}

export class PollVoteRequired extends ErrorWithCall {
  //
}

export class PostponedTimeout extends ErrorWithCall {
  //
}

export class PremiumAccountRequired extends ErrorWithCall {
  //
}

export class PremiumCurrentlyUnavailable extends ErrorWithCall {
  //
}

export class PreviousChatImportActiveWaitXmin extends ErrorWithCall {
  //
}

export class PrivacyKeyInvalid extends ErrorWithCall {
  //
}

export class PrivacyTooLong extends ErrorWithCall {
  //
}

export class PrivacyValueInvalid extends ErrorWithCall {
  //
}

export class PtsChangeEmpty extends ErrorWithCall {
  //
}

export class PublicChannelMissing extends ErrorWithCall {
  //
}

export class PublicKeyRequired extends ErrorWithCall {
  //
}

export class QueryIdEmpty extends ErrorWithCall {
  //
}

export class QueryIdInvalid extends ErrorWithCall {
  //
}

export class QueryTooShort extends ErrorWithCall {
  //
}

export class QuizAnswerMissing extends ErrorWithCall {
  //
}

export class QuizCorrectAnswersEmpty extends ErrorWithCall {
  //
}

export class QuizCorrectAnswersTooMuch extends ErrorWithCall {
  //
}

export class QuizCorrectAnswerInvalid extends ErrorWithCall {
  //
}

export class QuizMultipleInvalid extends ErrorWithCall {
  //
}

export class RandomIdDuplicate extends ErrorWithCall {
  //
}

export class RandomIdEmpty extends ErrorWithCall {
  //
}

export class RandomIdInvalid extends ErrorWithCall {
  //
}

export class RandomLengthInvalid extends ErrorWithCall {
  //
}

export class RangesInvalid extends ErrorWithCall {
  //
}

export class ReactionsTooMany extends ErrorWithCall {
  //
}

export class ReactionEmpty extends ErrorWithCall {
  //
}

export class ReactionInvalid extends ErrorWithCall {
  //
}

export class ReflectorNotAvailable extends ErrorWithCall {
  //
}

export class RegIdGenerateFailed extends ErrorWithCall {
  //
}

export class ReplyMarkupBuyEmpty extends ErrorWithCall {
  //
}

export class ReplyMarkupGameEmpty extends ErrorWithCall {
  //
}

export class ReplyMarkupInvalid extends ErrorWithCall {
  //
}

export class ReplyMarkupTooLong extends ErrorWithCall {
  //
}

export class ResetRequestMissing extends ErrorWithCall {
  //
}

export class ResultsTooMuch extends ErrorWithCall {
  //
}

export class ResultIdDuplicate extends ErrorWithCall {
  //
}

export class ResultIdEmpty extends ErrorWithCall {
  //
}

export class ResultIdInvalid extends ErrorWithCall {
  //
}

export class ResultTypeInvalid extends ErrorWithCall {
  //
}

export class RevoteNotAllowed extends ErrorWithCall {
  //
}

export class RightsNotModified extends ErrorWithCall {
  //
}

export class RightForbidden extends ErrorWithCall {
  //
}

export class RpcCallFail extends ErrorWithCall {
  //
}

export class RpcMcgetFail extends ErrorWithCall {
  //
}

export class RsaDecryptFailed extends ErrorWithCall {
  //
}

export class ScheduleBotNotAllowed extends ErrorWithCall {
  //
}

export class ScheduleDateInvalid extends ErrorWithCall {
  //
}

export class ScheduleDateTooLate extends ErrorWithCall {
  //
}

export class ScheduleStatusPrivate extends ErrorWithCall {
  //
}

export class ScheduleTooMuch extends ErrorWithCall {
  //
}

export class ScoreInvalid extends ErrorWithCall {
  //
}

export class SearchQueryEmpty extends ErrorWithCall {
  //
}

export class SearchWithLinkNotSupported extends ErrorWithCall {
  //
}

export class SecondsInvalid extends ErrorWithCall {
  //
}

export class SendAsPeerInvalid extends ErrorWithCall {
  //
}

export class SendCodeUnavailable extends ErrorWithCall {
  //
}

export class SendMessageMediaInvalid extends ErrorWithCall {
  //
}

export class SendMessageTypeInvalid extends ErrorWithCall {
  //
}

export class SensitiveChangeForbidden extends ErrorWithCall {
  //
}

export class SessionExpired extends ErrorWithCall {
  //
}

export class SessionPasswordNeeded extends ErrorWithCall {
  //
}

export class SessionRevoked extends ErrorWithCall {
  //
}

export class SettingsInvalid extends ErrorWithCall {
  //
}

export class Sha256HashInvalid extends ErrorWithCall {
  //
}

export class ShortnameOccupyFailed extends ErrorWithCall {
  //
}

export class ShortNameInvalid extends ErrorWithCall {
  //
}

export class ShortNameOccupied extends ErrorWithCall {
  //
}

export class SignInFailed extends ErrorWithCall {
  //
}

export class SlowmodeMultiMsgsDisabled extends ErrorWithCall {
  //
}

export class SmsCodeCreateFailed extends ErrorWithCall {
  //
}

export class SrpIdInvalid extends ErrorWithCall {
  //
}

export class SrpPasswordChanged extends ErrorWithCall {
  //
}

export class StartParamEmpty extends ErrorWithCall {
  //
}

export class StartParamInvalid extends ErrorWithCall {
  //
}

export class StartParamTooLong extends ErrorWithCall {
  //
}

export class StickerpackStickersTooMuch extends ErrorWithCall {
  //
}

export class StickersetInvalid extends ErrorWithCall {
  //
}

export class StickersetOwnerAnonymous extends ErrorWithCall {
  //
}

export class StickersEmpty extends ErrorWithCall {
  //
}

export class StickersTooMuch extends ErrorWithCall {
  //
}

export class StickerDocumentInvalid extends ErrorWithCall {
  //
}

export class StickerEmojiInvalid extends ErrorWithCall {
  //
}

export class StickerFileInvalid extends ErrorWithCall {
  //
}

export class StickerGifDimensions extends ErrorWithCall {
  //
}

export class StickerIdInvalid extends ErrorWithCall {
  //
}

export class StickerInvalid extends ErrorWithCall {
  //
}

export class StickerMimeInvalid extends ErrorWithCall {
  //
}

export class StickerPngDimensions extends ErrorWithCall {
  //
}

export class StickerPngNopng extends ErrorWithCall {
  //
}

export class StickerTgsNodoc extends ErrorWithCall {
  //
}

export class StickerTgsNotgs extends ErrorWithCall {
  //
}

export class StickerThumbPngNopng extends ErrorWithCall {
  //
}

export class StickerThumbTgsNotgs extends ErrorWithCall {
  //
}

export class StickerVideoBig extends ErrorWithCall {
  //
}

export class StickerVideoNodoc extends ErrorWithCall {
  //
}

export class StickerVideoNowebm extends ErrorWithCall {
  //
}

export class StorageCheckFailed extends ErrorWithCall {
  //
}

export class StoreInvalidScalarType extends ErrorWithCall {
  //
}

export class SwitchPmTextEmpty extends ErrorWithCall {
  //
}

export class TakeoutInvalid extends ErrorWithCall {
  //
}

export class TakeoutRequired extends ErrorWithCall {
  //
}

export class TempAuthKeyAlreadyBound extends ErrorWithCall {
  //
}

export class TempAuthKeyEmpty extends ErrorWithCall {
  //
}

export class ThemeFileInvalid extends ErrorWithCall {
  //
}

export class ThemeFormatInvalid extends ErrorWithCall {
  //
}

export class ThemeInvalid extends ErrorWithCall {
  //
}

export class ThemeMimeInvalid extends ErrorWithCall {
  //
}

export class ThemeTitleInvalid extends ErrorWithCall {
  //
}

export class Timeout extends ErrorWithCall {
  //
}

export class TitleInvalid extends ErrorWithCall {
  //
}

export class TmpPasswordDisabled extends ErrorWithCall {
  //
}

export class TmpPasswordInvalid extends ErrorWithCall {
  //
}

export class TokenInvalid extends ErrorWithCall {
  //
}

export class TopicDeleted extends ErrorWithCall {
  //
}

export class ToLangInvalid extends ErrorWithCall {
  //
}

export class TtlDaysInvalid extends ErrorWithCall {
  //
}

export class TtlMediaInvalid extends ErrorWithCall {
  //
}

export class TtlPeriodInvalid extends ErrorWithCall {
  //
}

export class TypesEmpty extends ErrorWithCall {
  //
}

export class TypeConstructorInvalid extends ErrorWithCall {
  //
}

export class Timedout extends ErrorWithCall {
  //
}

export class UnknownError extends ErrorWithCall {
  //
}

export class UnknownMethod extends ErrorWithCall {
  //
}

export class UntilDateInvalid extends ErrorWithCall {
  //
}

export class UpdateAppToLogin extends ErrorWithCall {
  //
}

export class UrlInvalid extends ErrorWithCall {
  //
}

export class UsageLimitInvalid extends ErrorWithCall {
  //
}

export class UsernameInvalid extends ErrorWithCall {
  //
}

export class UsernameNotModified extends ErrorWithCall {
  //
}

export class UsernameNotOccupied extends ErrorWithCall {
  //
}

export class UsernameOccupied extends ErrorWithCall {
  //
}

export class UsernamePurchaseAvailable extends ErrorWithCall {
  //
}

export class UserpicPrivacyRequired extends ErrorWithCall {
  //
}

export class UserpicUploadRequired extends ErrorWithCall {
  //
}

export class UsersTooFew extends ErrorWithCall {
  //
}

export class UsersTooMuch extends ErrorWithCall {
  //
}

export class UserAdminInvalid extends ErrorWithCall {
  //
}

export class UserAlreadyInvited extends ErrorWithCall {
  //
}

export class UserAlreadyParticipant extends ErrorWithCall {
  //
}

export class UserBannedInChannel extends ErrorWithCall {
  //
}

export class UserBlocked extends ErrorWithCall {
  //
}

export class UserBot extends ErrorWithCall {
  //
}

export class UserBotInvalid extends ErrorWithCall {
  //
}

export class UserBotRequired extends ErrorWithCall {
  //
}

export class UserChannelsTooMuch extends ErrorWithCall {
  //
}

export class UserCreator extends ErrorWithCall {
  //
}

export class UserDeactivated extends ErrorWithCall {
  //
}

export class UserDeactivatedBan extends ErrorWithCall {
  //
}

export class UserDeleted extends ErrorWithCall {
  //
}

export class UserIdInvalid extends ErrorWithCall {
  //
}

export class UserInvalid extends ErrorWithCall {
  //
}

export class UserIsBlocked extends ErrorWithCall {
  //
}

export class UserIsBot extends ErrorWithCall {
  //
}

export class UserKicked extends ErrorWithCall {
  //
}

export class UserNotMutualContact extends ErrorWithCall {
  //
}

export class UserNotParticipant extends ErrorWithCall {
  //
}

export class UserPrivacyRestricted extends ErrorWithCall {
  //
}

export class UserRestricted extends ErrorWithCall {
  //
}

export class UserVolumeInvalid extends ErrorWithCall {
  //
}

export class VideoContentTypeInvalid extends ErrorWithCall {
  //
}

export class VideoFileInvalid extends ErrorWithCall {
  //
}

export class VideoTitleEmpty extends ErrorWithCall {
  //
}

export class VoiceMessagesForbidden extends ErrorWithCall {
  //
}

export class WallpaperFileInvalid extends ErrorWithCall {
  //
}

export class WallpaperInvalid extends ErrorWithCall {
  //
}

export class WallpaperMimeInvalid extends ErrorWithCall {
  //
}

export class WcConvertUrlInvalid extends ErrorWithCall {
  //
}

export class WebdocumentInvalid extends ErrorWithCall {
  //
}

export class WebdocumentMimeInvalid extends ErrorWithCall {
  //
}

export class WebdocumentSizeTooBig extends ErrorWithCall {
  //
}

export class WebdocumentUrlInvalid extends ErrorWithCall {
  //
}

export class WebpageCurlFailed extends ErrorWithCall {
  //
}

export class WebpageMediaEmpty extends ErrorWithCall {
  //
}

export class WebpushAuthInvalid extends ErrorWithCall {
  //
}

export class WebpushKeyInvalid extends ErrorWithCall {
  //
}

export class WebpushTokenInvalid extends ErrorWithCall {
  //
}

export class WorkerBusyTooLongRetry extends ErrorWithCall {
  //
}

export class YouBlockedUser extends ErrorWithCall {
  //
}

export const map = {
  ABOUT_TOO_LONG: AboutTooLong,
  ACCESS_TOKEN_EXPIRED: AccessTokenExpired,
  ACCESS_TOKEN_INVALID: AccessTokenInvalid,
  ACTIVE_USER_REQUIRED: ActiveUserRequired,
  ADMINS_TOO_MUCH: AdminsTooMuch,
  ADMIN_ID_INVALID: AdminIdInvalid,
  ADMIN_RANK_EMOJI_NOT_ALLOWED: AdminRankEmojiNotAllowed,
  ADMIN_RANK_INVALID: AdminRankInvalid,
  ALBUM_PHOTOS_TOO_MANY: AlbumPhotosTooMany,
  API_ID_INVALID: ApiIdInvalid,
  API_ID_PUBLISHED_FLOOD: ApiIdPublishedFlood,
  ARTICLE_TITLE_EMPTY: ArticleTitleEmpty,
  AUDIO_CONTENT_URL_EMPTY: AudioContentUrlEmpty,
  AUDIO_TITLE_EMPTY: AudioTitleEmpty,
  AUTH_BYTES_INVALID: AuthBytesInvalid,
  AUTH_KEY_DUPLICATED: AuthKeyDuplicated,
  AUTH_KEY_INVALID: AuthKeyInvalid,
  AUTH_KEY_PERM_EMPTY: AuthKeyPermEmpty,
  AUTH_KEY_UNREGISTERED: AuthKeyUnregistered,
  AUTH_RESTART: AuthRestart,
  AUTH_TOKEN_ALREADY_ACCEPTED: AuthTokenAlreadyAccepted,
  AUTH_TOKEN_EXCEPTION: AuthTokenException,
  AUTH_TOKEN_EXPIRED: AuthTokenExpired,
  AUTH_TOKEN_INVALID: AuthTokenInvalid,
  AUTOARCHIVE_NOT_AVAILABLE: AutoarchiveNotAvailable,
  BANK_CARD_NUMBER_INVALID: BankCardNumberInvalid,
  BANNED_RIGHTS_INVALID: BannedRightsInvalid,
  BASE_PORT_LOC_INVALID: BasePortLocInvalid,
  BOTS_TOO_MUCH: BotsTooMuch,
  BOT_CHANNELS_NA: BotChannelsNa,
  BOT_COMMAND_DESCRIPTION_INVALID: BotCommandDescriptionInvalid,
  BOT_COMMAND_INVALID: BotCommandInvalid,
  BOT_DOMAIN_INVALID: BotDomainInvalid,
  BOT_GAMES_DISABLED: BotGamesDisabled,
  BOT_GROUPS_BLOCKED: BotGroupsBlocked,
  BOT_INLINE_DISABLED: BotInlineDisabled,
  BOT_INVALID: BotInvalid,
  BOT_METHOD_INVALID: BotMethodInvalid,
  BOT_MISSING: BotMissing,
  BOT_ONESIDE_NOT_AVAIL: BotOnesideNotAvail,
  BOT_PAYMENTS_DISABLED: BotPaymentsDisabled,
  BOT_POLLS_DISABLED: BotPollsDisabled,
  BOT_RESPONSE_TIMEOUT: BotResponseTimeout,
  BOT_SCORE_NOT_MODIFIED: BotScoreNotModified,
  BROADCAST_CALLS_DISABLED: BroadcastCallsDisabled,
  BROADCAST_FORBIDDEN: BroadcastForbidden,
  BROADCAST_ID_INVALID: BroadcastIdInvalid,
  BROADCAST_PUBLIC_VOTERS_FORBIDDEN: BroadcastPublicVotersForbidden,
  BROADCAST_REQUIRED: BroadcastRequired,
  BUTTON_DATA_INVALID: ButtonDataInvalid,
  BUTTON_TEXT_INVALID: ButtonTextInvalid,
  BUTTON_TYPE_INVALID: ButtonTypeInvalid,
  BUTTON_URL_INVALID: ButtonUrlInvalid,
  BUTTON_USER_PRIVACY_RESTRICTED: ButtonUserPrivacyRestricted,
  CALL_ALREADY_ACCEPTED: CallAlreadyAccepted,
  CALL_ALREADY_DECLINED: CallAlreadyDeclined,
  CALL_OCCUPY_FAILED: CallOccupyFailed,
  CALL_PEER_INVALID: CallPeerInvalid,
  CALL_PROTOCOL_FLAGS_INVALID: CallProtocolFlagsInvalid,
  CDN_METHOD_INVALID: CdnMethodInvalid,
  CDN_UPLOAD_TIMEOUT: CdnUploadTimeout,
  CHANNELS_ADMIN_LOCATED_TOO_MUCH: ChannelsAdminLocatedTooMuch,
  CHANNELS_ADMIN_PUBLIC_TOO_MUCH: ChannelsAdminPublicTooMuch,
  CHANNELS_TOO_MUCH: ChannelsTooMuch,
  CHANNEL_BANNED: ChannelBanned,
  CHANNEL_FORUM_MISSING: ChannelForumMissing,
  CHANNEL_ID_INVALID: ChannelIdInvalid,
  CHANNEL_INVALID: ChannelInvalid,
  CHANNEL_PARICIPANT_MISSING: ChannelParicipantMissing,
  CHANNEL_PRIVATE: ChannelPrivate,
  CHANNEL_PUBLIC_GROUP_NA: ChannelPublicGroupNa,
  CHANNEL_TOO_BIG: ChannelTooBig,
  CHANNEL_TOO_LARGE: ChannelTooLarge,
  CHAT_ABOUT_NOT_MODIFIED: ChatAboutNotModified,
  CHAT_ABOUT_TOO_LONG: ChatAboutTooLong,
  CHAT_ADMIN_INVITE_REQUIRED: ChatAdminInviteRequired,
  CHAT_ADMIN_REQUIRED: ChatAdminRequired,
  CHAT_DISCUSSION_UNALLOWED: ChatDiscussionUnallowed,
  CHAT_FORBIDDEN: ChatForbidden,
  CHAT_FORWARDS_RESTRICTED: ChatForwardsRestricted,
  CHAT_GET_FAILED: ChatGetFailed,
  CHAT_GUEST_SEND_FORBIDDEN: ChatGuestSendForbidden,
  CHAT_ID_EMPTY: ChatIdEmpty,
  CHAT_ID_GENERATE_FAILED: ChatIdGenerateFailed,
  CHAT_ID_INVALID: ChatIdInvalid,
  CHAT_INVALID: ChatInvalid,
  CHAT_INVITE_PERMANENT: ChatInvitePermanent,
  CHAT_LINK_EXISTS: ChatLinkExists,
  CHAT_NOT_MODIFIED: ChatNotModified,
  CHAT_RESTRICTED: ChatRestricted,
  CHAT_REVOKE_DATE_UNSUPPORTED: ChatRevokeDateUnsupported,
  CHAT_SEND_GAME_FORBIDDEN: ChatSendGameForbidden,
  CHAT_SEND_GIFS_FORBIDDEN: ChatSendGifsForbidden,
  CHAT_SEND_INLINE_FORBIDDEN: ChatSendInlineForbidden,
  CHAT_SEND_MEDIA_FORBIDDEN: ChatSendMediaForbidden,
  CHAT_SEND_POLL_FORBIDDEN: ChatSendPollForbidden,
  CHAT_SEND_STICKERS_FORBIDDEN: ChatSendStickersForbidden,
  CHAT_TITLE_EMPTY: ChatTitleEmpty,
  CHAT_TOO_BIG: ChatTooBig,
  CHAT_WRITE_FORBIDDEN: ChatWriteForbidden,
  CHP_CALL_FAIL: ChpCallFail,
  CODE_EMPTY: CodeEmpty,
  CODE_HASH_INVALID: CodeHashInvalid,
  CODE_INVALID: CodeInvalid,
  CONNECTION_API_ID_INVALID: ConnectionApiIdInvalid,
  CONNECTION_APP_VERSION_EMPTY: ConnectionAppVersionEmpty,
  CONNECTION_DEVICE_MODEL_EMPTY: ConnectionDeviceModelEmpty,
  CONNECTION_LANG_PACK_INVALID: ConnectionLangPackInvalid,
  CONNECTION_LAYER_INVALID: ConnectionLayerInvalid,
  CONNECTION_NOT_INITED: ConnectionNotInited,
  CONNECTION_SYSTEM_EMPTY: ConnectionSystemEmpty,
  CONNECTION_SYSTEM_LANG_CODE_EMPTY: ConnectionSystemLangCodeEmpty,
  CONTACT_ADD_MISSING: ContactAddMissing,
  CONTACT_ID_INVALID: ContactIdInvalid,
  CONTACT_NAME_EMPTY: ContactNameEmpty,
  CONTACT_REQ_MISSING: ContactReqMissing,
  CREATE_CALL_FAILED: CreateCallFailed,
  CURRENCY_TOTAL_AMOUNT_INVALID: CurrencyTotalAmountInvalid,
  DATA_INVALID: DataInvalid,
  DATA_JSON_INVALID: DataJsonInvalid,
  DATA_TOO_LONG: DataTooLong,
  DATE_EMPTY: DateEmpty,
  DC_ID_INVALID: DcIdInvalid,
  DH_G_A_INVALID: DhGAInvalid,
  DOCUMENT_INVALID: DocumentInvalid,
  EDIT_BOT_INVITE_FORBIDDEN: EditBotInviteForbidden,
  EMAIL_HASH_EXPIRED: EmailHashExpired,
  EMAIL_INVALID: EmailInvalid,
  EMAIL_UNCONFIRMED: EmailUnconfirmed,
  EMAIL_VERIFY_EXPIRED: EmailVerifyExpired,
  EMOJI_INVALID: EmojiInvalid,
  EMOJI_NOT_MODIFIED: EmojiNotModified,
  EMOTICON_EMPTY: EmoticonEmpty,
  EMOTICON_INVALID: EmoticonInvalid,
  EMOTICON_STICKERPACK_MISSING: EmoticonStickerpackMissing,
  ENCRYPTED_MESSAGE_INVALID: EncryptedMessageInvalid,
  ENCRYPTION_ALREADY_ACCEPTED: EncryptionAlreadyAccepted,
  ENCRYPTION_ALREADY_DECLINED: EncryptionAlreadyDeclined,
  ENCRYPTION_DECLINED: EncryptionDeclined,
  ENCRYPTION_ID_INVALID: EncryptionIdInvalid,
  ENCRYPTION_OCCUPY_FAILED: EncryptionOccupyFailed,
  ENTITIES_TOO_LONG: EntitiesTooLong,
  ENTITY_BOUNDS_INVALID: EntityBoundsInvalid,
  ENTITY_MENTION_USER_INVALID: EntityMentionUserInvalid,
  ERROR_TEXT_EMPTY: ErrorTextEmpty,
  EXPIRE_DATE_INVALID: ExpireDateInvalid,
  EXPIRE_FORBIDDEN: ExpireForbidden,
  EXPORT_CARD_INVALID: ExportCardInvalid,
  EXTERNAL_URL_INVALID: ExternalUrlInvalid,
  FIELD_NAME_EMPTY: FieldNameEmpty,
  FIELD_NAME_INVALID: FieldNameInvalid,
  FILEREF_UPGRADE_NEEDED: FilerefUpgradeNeeded,
  FILE_CONTENT_TYPE_INVALID: FileContentTypeInvalid,
  FILE_EMTPY: FileEmtpy,
  FILE_ID_INVALID: FileIdInvalid,
  FILE_PARTS_INVALID: FilePartsInvalid,
  FILE_PART_0_MISSING: FilePart_0Missing,
  FILE_PART_EMPTY: FilePartEmpty,
  FILE_PART_INVALID: FilePartInvalid,
  FILE_PART_LENGTH_INVALID: FilePartLengthInvalid,
  FILE_PART_SIZE_CHANGED: FilePartSizeChanged,
  FILE_PART_SIZE_INVALID: FilePartSizeInvalid,
  FILE_PART_TOO_BIG: FilePartTooBig,
  FILE_PART_X_MISSING: FilePartXMissing,
  FILE_REFERENCE_EMPTY: FileReferenceEmpty,
  FILE_REFERENCE_EXPIRED: FileReferenceExpired,
  FILE_REFERENCE_INVALID: FileReferenceInvalid,
  FILE_TITLE_EMPTY: FileTitleEmpty,
  FILTER_ID_INVALID: FilterIdInvalid,
  FILTER_INCLUDE_EMPTY: FilterIncludeEmpty,
  FILTER_NOT_SUPPORTED: FilterNotSupported,
  FILTER_TITLE_EMPTY: FilterTitleEmpty,
  FIRSTNAME_INVALID: FirstnameInvalid,
  FOLDER_ID_EMPTY: FolderIdEmpty,
  FOLDER_ID_INVALID: FolderIdInvalid,
  FRESH_CHANGE_ADMINS_FORBIDDEN: FreshChangeAdminsForbidden,
  FRESH_CHANGE_PHONE_FORBIDDEN: FreshChangePhoneForbidden,
  FRESH_RESET_AUTHORISATION_FORBIDDEN: FreshResetAuthorisationForbidden,
  FROM_MESSAGE_BOT_DISABLED: FromMessageBotDisabled,
  FROM_PEER_INVALID: FromPeerInvalid,
  GAME_BOT_INVALID: GameBotInvalid,
  GEO_POINT_INVALID: GeoPointInvalid,
  GIF_CONTENT_TYPE_INVALID: GifContentTypeInvalid,
  GIF_ID_INVALID: GifIdInvalid,
  GRAPH_EXPIRED_RELOAD: GraphExpiredReload,
  GRAPH_INVALID_RELOAD: GraphInvalidReload,
  GRAPH_OUTDATED_RELOAD: GraphOutdatedReload,
  GROUPCALL_ADD_PARTICIPANTS_FAILED: GroupcallAddParticipantsFailed,
  GROUPCALL_ALREADY_DISCARDED: GroupcallAlreadyDiscarded,
  GROUPCALL_ALREADY_STARTED: GroupcallAlreadyStarted,
  GROUPCALL_FORBIDDEN: GroupcallForbidden,
  GROUPCALL_INVALID: GroupcallInvalid,
  GROUPCALL_JOIN_MISSING: GroupcallJoinMissing,
  GROUPCALL_NOT_MODIFIED: GroupcallNotModified,
  GROUPCALL_SSRC_DUPLICATE_MUCH: GroupcallSsrcDuplicateMuch,
  GROUPED_MEDIA_INVALID: GroupedMediaInvalid,
  GROUP_CALL_INVALID: GroupCallInvalid,
  HASH_INVALID: HashInvalid,
  HIDE_REQUESTER_MISSING: HideRequesterMissing,
  HISTORY_GET_FAILED: HistoryGetFailed,
  IMAGE_PROCESS_FAILED: ImageProcessFailed,
  IMPORT_FILE_INVALID: ImportFileInvalid,
  IMPORT_FORMAT_UNRECOGNIZED: ImportFormatUnrecognized,
  IMPORT_ID_INVALID: ImportIdInvalid,
  INLINE_BOT_REQUIRED: InlineBotRequired,
  INLINE_RESULT_EXPIRED: InlineResultExpired,
  INPUT_CONSTRUCTOR_INVALID: InputConstructorInvalid,
  INPUT_FETCH_ERROR: InputFetchError,
  INPUT_FETCH_FAIL: InputFetchFail,
  INPUT_FILTER_INVALID: InputFilterInvalid,
  INPUT_LAYER_INVALID: InputLayerInvalid,
  INPUT_METHOD_INVALID: InputMethodInvalid,
  INPUT_REQUEST_TOO_LONG: InputRequestTooLong,
  INPUT_TEXT_EMPTY: InputTextEmpty,
  INPUT_USER_DEACTIVATED: InputUserDeactivated,
  INTERDC_X_CALL_ERROR: InterdcXCallError,
  INTERDC_X_CALL_RICH_ERROR: InterdcXCallRichError,
  INVITE_FORBIDDEN_WITH_JOINAS: InviteForbiddenWithJoinas,
  INVITE_HASH_EMPTY: InviteHashEmpty,
  INVITE_HASH_EXPIRED: InviteHashExpired,
  INVITE_HASH_INVALID: InviteHashInvalid,
  INVITE_REQUEST_SENT: InviteRequestSent,
  INVITE_REVOKED_MISSING: InviteRevokedMissing,
  INVOICE_PAYLOAD_INVALID: InvoicePayloadInvalid,
  JOIN_AS_PEER_INVALID: JoinAsPeerInvalid,
  LANG_CODE_INVALID: LangCodeInvalid,
  LANG_CODE_NOT_SUPPORTED: LangCodeNotSupported,
  LANG_PACK_INVALID: LangPackInvalid,
  LASTNAME_INVALID: LastnameInvalid,
  LIMIT_INVALID: LimitInvalid,
  LINK_NOT_MODIFIED: LinkNotModified,
  LOCATION_INVALID: LocationInvalid,
  MAX_DATE_INVALID: MaxDateInvalid,
  MAX_ID_INVALID: MaxIdInvalid,
  MAX_QTS_INVALID: MaxQtsInvalid,
  MD5_CHECKSUM_INVALID: Md5ChecksumInvalid,
  MEDIA_CAPTION_TOO_LONG: MediaCaptionTooLong,
  MEDIA_EMPTY: MediaEmpty,
  MEDIA_GROUPED_INVALID: MediaGroupedInvalid,
  MEDIA_INVALID: MediaInvalid,
  MEDIA_NEW_INVALID: MediaNewInvalid,
  MEDIA_PREV_INVALID: MediaPrevInvalid,
  MEDIA_TTL_INVALID: MediaTtlInvalid,
  MEGAGROUP_ID_INVALID: MegagroupIdInvalid,
  MEGAGROUP_PREHISTORY_HIDDEN: MegagroupPrehistoryHidden,
  MEGAGROUP_REQUIRED: MegagroupRequired,
  MEMBER_NO_LOCATION: MemberNoLocation,
  MEMBER_OCCUPY_PRIMARY_LOC_FAILED: MemberOccupyPrimaryLocFailed,
  MESSAGE_AUTHOR_REQUIRED: MessageAuthorRequired,
  MESSAGE_DELETE_FORBIDDEN: MessageDeleteForbidden,
  MESSAGE_EDIT_TIME_EXPIRED: MessageEditTimeExpired,
  MESSAGE_EMPTY: MessageEmpty,
  MESSAGE_IDS_EMPTY: MessageIdsEmpty,
  MESSAGE_ID_INVALID: MessageIdInvalid,
  MESSAGE_NOT_MODIFIED: MessageNotModified,
  MESSAGE_POLL_CLOSED: MessagePollClosed,
  MESSAGE_TOO_LONG: MessageTooLong,
  METHOD_INVALID: MethodInvalid,
  MIN_DATE_INVALID: MinDateInvalid,
  MSGID_DECREASE_RETRY: MsgidDecreaseRetry,
  MSG_ID_INVALID: MsgIdInvalid,
  MSG_TOO_OLD: MsgTooOld,
  MSG_WAIT_FAILED: MsgWaitFailed,
  MT_SEND_QUEUE_TOO_LONG: MtSendQueueTooLong,
  MULTI_MEDIA_TOO_LONG: MultiMediaTooLong,
  NEED_CHAT_INVALID: NeedChatInvalid,
  NEED_MEMBER_INVALID: NeedMemberInvalid,
  NEW_SALT_INVALID: NewSaltInvalid,
  NEW_SETTINGS_EMPTY: NewSettingsEmpty,
  NEW_SETTINGS_INVALID: NewSettingsInvalid,
  NEXT_OFFSET_INVALID: NextOffsetInvalid,
  NOT_ALLOWED: NotAllowed,
  OFFSET_INVALID: OffsetInvalid,
  OFFSET_PEER_ID_INVALID: OffsetPeerIdInvalid,
  OPTIONS_TOO_MUCH: OptionsTooMuch,
  OPTION_INVALID: OptionInvalid,
  PACK_SHORT_NAME_INVALID: PackShortNameInvalid,
  PACK_SHORT_NAME_OCCUPIED: PackShortNameOccupied,
  PACK_TITLE_INVALID: PackTitleInvalid,
  PARTICIPANTS_TOO_FEW: ParticipantsTooFew,
  PARTICIPANT_CALL_FAILED: ParticipantCallFailed,
  PARTICIPANT_ID_INVALID: ParticipantIdInvalid,
  PARTICIPANT_JOIN_MISSING: ParticipantJoinMissing,
  PARTICIPANT_VERSION_OUTDATED: ParticipantVersionOutdated,
  PASSWORD_EMPTY: PasswordEmpty,
  PASSWORD_HASH_INVALID: PasswordHashInvalid,
  PASSWORD_MISSING: PasswordMissing,
  PASSWORD_RECOVERY_EXPIRED: PasswordRecoveryExpired,
  PASSWORD_RECOVERY_NA: PasswordRecoveryNa,
  PASSWORD_REQUIRED: PasswordRequired,
  PAYMENT_PROVIDER_INVALID: PaymentProviderInvalid,
  PEER_FLOOD: PeerFlood,
  PEER_HISTORY_EMPTY: PeerHistoryEmpty,
  PEER_ID_INVALID: PeerIdInvalid,
  PEER_ID_NOT_SUPPORTED: PeerIdNotSupported,
  PERSISTENT_TIMESTAMP_EMPTY: PersistentTimestampEmpty,
  PERSISTENT_TIMESTAMP_INVALID: PersistentTimestampInvalid,
  PERSISTENT_TIMESTAMP_OUTDATED: PersistentTimestampOutdated,
  PHONE_CODE_EMPTY: PhoneCodeEmpty,
  PHONE_CODE_EXPIRED: PhoneCodeExpired,
  PHONE_CODE_HASH_EMPTY: PhoneCodeHashEmpty,
  PHONE_CODE_INVALID: PhoneCodeInvalid,
  PHONE_HASH_EXPIRED: PhoneHashExpired,
  PHONE_NOT_OCCUPIED: PhoneNotOccupied,
  PHONE_NUMBER_APP_SIGNUP_FORBIDDEN: PhoneNumberAppSignupForbidden,
  PHONE_NUMBER_BANNED: PhoneNumberBanned,
  PHONE_NUMBER_FLOOD: PhoneNumberFlood,
  PHONE_NUMBER_INVALID: PhoneNumberInvalid,
  PHONE_NUMBER_OCCUPIED: PhoneNumberOccupied,
  PHONE_NUMBER_UNOCCUPIED: PhoneNumberUnoccupied,
  PHONE_PASSWORD_FLOOD: PhonePasswordFlood,
  PHONE_PASSWORD_PROTECTED: PhonePasswordProtected,
  PHOTO_CONTENT_TYPE_INVALID: PhotoContentTypeInvalid,
  PHOTO_CONTENT_URL_EMPTY: PhotoContentUrlEmpty,
  PHOTO_CROP_FILE_MISSING: PhotoCropFileMissing,
  PHOTO_CROP_SIZE_SMALL: PhotoCropSizeSmall,
  PHOTO_EXT_INVALID: PhotoExtInvalid,
  PHOTO_FILE_MISSING: PhotoFileMissing,
  PHOTO_ID_INVALID: PhotoIdInvalid,
  PHOTO_INVALID: PhotoInvalid,
  PHOTO_INVALID_DIMENSIONS: PhotoInvalidDimensions,
  PHOTO_SAVE_FILE_INVALID: PhotoSaveFileInvalid,
  PHOTO_THUMB_URL_EMPTY: PhotoThumbUrlEmpty,
  PINNED_DIALOGS_TOO_MUCH: PinnedDialogsTooMuch,
  PIN_RESTRICTED: PinRestricted,
  POLL_ANSWERS_INVALID: PollAnswersInvalid,
  POLL_ANSWER_INVALID: PollAnswerInvalid,
  POLL_OPTION_DUPLICATE: PollOptionDuplicate,
  POLL_OPTION_INVALID: PollOptionInvalid,
  POLL_QUESTION_INVALID: PollQuestionInvalid,
  POLL_UNSUPPORTED: PollUnsupported,
  POLL_VOTE_REQUIRED: PollVoteRequired,
  POSTPONED_TIMEOUT: PostponedTimeout,
  PREMIUM_ACCOUNT_REQUIRED: PremiumAccountRequired,
  PREMIUM_CURRENTLY_UNAVAILABLE: PremiumCurrentlyUnavailable,
  PREVIOUS_CHAT_IMPORT_ACTIVE_WAIT_XMIN: PreviousChatImportActiveWaitXmin,
  PRIVACY_KEY_INVALID: PrivacyKeyInvalid,
  PRIVACY_TOO_LONG: PrivacyTooLong,
  PRIVACY_VALUE_INVALID: PrivacyValueInvalid,
  PTS_CHANGE_EMPTY: PtsChangeEmpty,
  PUBLIC_CHANNEL_MISSING: PublicChannelMissing,
  PUBLIC_KEY_REQUIRED: PublicKeyRequired,
  QUERY_ID_EMPTY: QueryIdEmpty,
  QUERY_ID_INVALID: QueryIdInvalid,
  QUERY_TOO_SHORT: QueryTooShort,
  QUIZ_ANSWER_MISSING: QuizAnswerMissing,
  QUIZ_CORRECT_ANSWERS_EMPTY: QuizCorrectAnswersEmpty,
  QUIZ_CORRECT_ANSWERS_TOO_MUCH: QuizCorrectAnswersTooMuch,
  QUIZ_CORRECT_ANSWER_INVALID: QuizCorrectAnswerInvalid,
  QUIZ_MULTIPLE_INVALID: QuizMultipleInvalid,
  RANDOM_ID_DUPLICATE: RandomIdDuplicate,
  RANDOM_ID_EMPTY: RandomIdEmpty,
  RANDOM_ID_INVALID: RandomIdInvalid,
  RANDOM_LENGTH_INVALID: RandomLengthInvalid,
  RANGES_INVALID: RangesInvalid,
  REACTIONS_TOO_MANY: ReactionsTooMany,
  REACTION_EMPTY: ReactionEmpty,
  REACTION_INVALID: ReactionInvalid,
  REFLECTOR_NOT_AVAILABLE: ReflectorNotAvailable,
  REG_ID_GENERATE_FAILED: RegIdGenerateFailed,
  REPLY_MARKUP_BUY_EMPTY: ReplyMarkupBuyEmpty,
  REPLY_MARKUP_GAME_EMPTY: ReplyMarkupGameEmpty,
  REPLY_MARKUP_INVALID: ReplyMarkupInvalid,
  REPLY_MARKUP_TOO_LONG: ReplyMarkupTooLong,
  RESET_REQUEST_MISSING: ResetRequestMissing,
  RESULTS_TOO_MUCH: ResultsTooMuch,
  RESULT_ID_DUPLICATE: ResultIdDuplicate,
  RESULT_ID_EMPTY: ResultIdEmpty,
  RESULT_ID_INVALID: ResultIdInvalid,
  RESULT_TYPE_INVALID: ResultTypeInvalid,
  REVOTE_NOT_ALLOWED: RevoteNotAllowed,
  RIGHTS_NOT_MODIFIED: RightsNotModified,
  RIGHT_FORBIDDEN: RightForbidden,
  RPC_CALL_FAIL: RpcCallFail,
  RPC_MCGET_FAIL: RpcMcgetFail,
  RSA_DECRYPT_FAILED: RsaDecryptFailed,
  SCHEDULE_BOT_NOT_ALLOWED: ScheduleBotNotAllowed,
  SCHEDULE_DATE_INVALID: ScheduleDateInvalid,
  SCHEDULE_DATE_TOO_LATE: ScheduleDateTooLate,
  SCHEDULE_STATUS_PRIVATE: ScheduleStatusPrivate,
  SCHEDULE_TOO_MUCH: ScheduleTooMuch,
  SCORE_INVALID: ScoreInvalid,
  SEARCH_QUERY_EMPTY: SearchQueryEmpty,
  SEARCH_WITH_LINK_NOT_SUPPORTED: SearchWithLinkNotSupported,
  SECONDS_INVALID: SecondsInvalid,
  SEND_AS_PEER_INVALID: SendAsPeerInvalid,
  SEND_CODE_UNAVAILABLE: SendCodeUnavailable,
  SEND_MESSAGE_MEDIA_INVALID: SendMessageMediaInvalid,
  SEND_MESSAGE_TYPE_INVALID: SendMessageTypeInvalid,
  SENSITIVE_CHANGE_FORBIDDEN: SensitiveChangeForbidden,
  SESSION_EXPIRED: SessionExpired,
  SESSION_PASSWORD_NEEDED: SessionPasswordNeeded,
  SESSION_REVOKED: SessionRevoked,
  SETTINGS_INVALID: SettingsInvalid,
  SHA256_HASH_INVALID: Sha256HashInvalid,
  SHORTNAME_OCCUPY_FAILED: ShortnameOccupyFailed,
  SHORT_NAME_INVALID: ShortNameInvalid,
  SHORT_NAME_OCCUPIED: ShortNameOccupied,
  SIGN_IN_FAILED: SignInFailed,
  SLOWMODE_MULTI_MSGS_DISABLED: SlowmodeMultiMsgsDisabled,
  SMS_CODE_CREATE_FAILED: SmsCodeCreateFailed,
  SRP_ID_INVALID: SrpIdInvalid,
  SRP_PASSWORD_CHANGED: SrpPasswordChanged,
  START_PARAM_EMPTY: StartParamEmpty,
  START_PARAM_INVALID: StartParamInvalid,
  START_PARAM_TOO_LONG: StartParamTooLong,
  STICKERPACK_STICKERS_TOO_MUCH: StickerpackStickersTooMuch,
  STICKERSET_INVALID: StickersetInvalid,
  STICKERSET_OWNER_ANONYMOUS: StickersetOwnerAnonymous,
  STICKERS_EMPTY: StickersEmpty,
  STICKERS_TOO_MUCH: StickersTooMuch,
  STICKER_DOCUMENT_INVALID: StickerDocumentInvalid,
  STICKER_EMOJI_INVALID: StickerEmojiInvalid,
  STICKER_FILE_INVALID: StickerFileInvalid,
  STICKER_GIF_DIMENSIONS: StickerGifDimensions,
  STICKER_ID_INVALID: StickerIdInvalid,
  STICKER_INVALID: StickerInvalid,
  STICKER_MIME_INVALID: StickerMimeInvalid,
  STICKER_PNG_DIMENSIONS: StickerPngDimensions,
  STICKER_PNG_NOPNG: StickerPngNopng,
  STICKER_TGS_NODOC: StickerTgsNodoc,
  STICKER_TGS_NOTGS: StickerTgsNotgs,
  STICKER_THUMB_PNG_NOPNG: StickerThumbPngNopng,
  STICKER_THUMB_TGS_NOTGS: StickerThumbTgsNotgs,
  STICKER_VIDEO_BIG: StickerVideoBig,
  STICKER_VIDEO_NODOC: StickerVideoNodoc,
  STICKER_VIDEO_NOWEBM: StickerVideoNowebm,
  STORAGE_CHECK_FAILED: StorageCheckFailed,
  STORE_INVALID_SCALAR_TYPE: StoreInvalidScalarType,
  SWITCH_PM_TEXT_EMPTY: SwitchPmTextEmpty,
  TAKEOUT_INVALID: TakeoutInvalid,
  TAKEOUT_REQUIRED: TakeoutRequired,
  TEMP_AUTH_KEY_ALREADY_BOUND: TempAuthKeyAlreadyBound,
  TEMP_AUTH_KEY_EMPTY: TempAuthKeyEmpty,
  THEME_FILE_INVALID: ThemeFileInvalid,
  THEME_FORMAT_INVALID: ThemeFormatInvalid,
  THEME_INVALID: ThemeInvalid,
  THEME_MIME_INVALID: ThemeMimeInvalid,
  THEME_TITLE_INVALID: ThemeTitleInvalid,
  TIMEOUT: Timeout,
  TITLE_INVALID: TitleInvalid,
  TMP_PASSWORD_DISABLED: TmpPasswordDisabled,
  TMP_PASSWORD_INVALID: TmpPasswordInvalid,
  TOKEN_INVALID: TokenInvalid,
  TOPIC_DELETED: TopicDeleted,
  TO_LANG_INVALID: ToLangInvalid,
  TTL_DAYS_INVALID: TtlDaysInvalid,
  TTL_MEDIA_INVALID: TtlMediaInvalid,
  TTL_PERIOD_INVALID: TtlPeriodInvalid,
  TYPES_EMPTY: TypesEmpty,
  TYPE_CONSTRUCTOR_INVALID: TypeConstructorInvalid,
  Timedout: Timedout,
  Timeout: Timeout,
  UNKNOWN_ERROR: UnknownError,
  UNKNOWN_METHOD: UnknownMethod,
  UNTIL_DATE_INVALID: UntilDateInvalid,
  UPDATE_APP_TO_LOGIN: UpdateAppToLogin,
  URL_INVALID: UrlInvalid,
  USAGE_LIMIT_INVALID: UsageLimitInvalid,
  USERNAME_INVALID: UsernameInvalid,
  USERNAME_NOT_MODIFIED: UsernameNotModified,
  USERNAME_NOT_OCCUPIED: UsernameNotOccupied,
  USERNAME_OCCUPIED: UsernameOccupied,
  USERNAME_PURCHASE_AVAILABLE: UsernamePurchaseAvailable,
  USERPIC_PRIVACY_REQUIRED: UserpicPrivacyRequired,
  USERPIC_UPLOAD_REQUIRED: UserpicUploadRequired,
  USERS_TOO_FEW: UsersTooFew,
  USERS_TOO_MUCH: UsersTooMuch,
  USER_ADMIN_INVALID: UserAdminInvalid,
  USER_ALREADY_INVITED: UserAlreadyInvited,
  USER_ALREADY_PARTICIPANT: UserAlreadyParticipant,
  USER_BANNED_IN_CHANNEL: UserBannedInChannel,
  USER_BLOCKED: UserBlocked,
  USER_BOT: UserBot,
  USER_BOT_INVALID: UserBotInvalid,
  USER_BOT_REQUIRED: UserBotRequired,
  USER_CHANNELS_TOO_MUCH: UserChannelsTooMuch,
  USER_CREATOR: UserCreator,
  USER_DEACTIVATED: UserDeactivated,
  USER_DEACTIVATED_BAN: UserDeactivatedBan,
  USER_DELETED: UserDeleted,
  USER_ID_INVALID: UserIdInvalid,
  USER_INVALID: UserInvalid,
  USER_IS_BLOCKED: UserIsBlocked,
  USER_IS_BOT: UserIsBot,
  USER_KICKED: UserKicked,
  USER_NOT_MUTUAL_CONTACT: UserNotMutualContact,
  USER_NOT_PARTICIPANT: UserNotParticipant,
  USER_PRIVACY_RESTRICTED: UserPrivacyRestricted,
  USER_RESTRICTED: UserRestricted,
  USER_VOLUME_INVALID: UserVolumeInvalid,
  VIDEO_CONTENT_TYPE_INVALID: VideoContentTypeInvalid,
  VIDEO_FILE_INVALID: VideoFileInvalid,
  VIDEO_TITLE_EMPTY: VideoTitleEmpty,
  VOICE_MESSAGES_FORBIDDEN: VoiceMessagesForbidden,
  WALLPAPER_FILE_INVALID: WallpaperFileInvalid,
  WALLPAPER_INVALID: WallpaperInvalid,
  WALLPAPER_MIME_INVALID: WallpaperMimeInvalid,
  WC_CONVERT_URL_INVALID: WcConvertUrlInvalid,
  WEBDOCUMENT_INVALID: WebdocumentInvalid,
  WEBDOCUMENT_MIME_INVALID: WebdocumentMimeInvalid,
  WEBDOCUMENT_SIZE_TOO_BIG: WebdocumentSizeTooBig,
  WEBDOCUMENT_URL_INVALID: WebdocumentUrlInvalid,
  WEBPAGE_CURL_FAILED: WebpageCurlFailed,
  WEBPAGE_MEDIA_EMPTY: WebpageMediaEmpty,
  WEBPUSH_AUTH_INVALID: WebpushAuthInvalid,
  WEBPUSH_KEY_INVALID: WebpushKeyInvalid,
  WEBPUSH_TOKEN_INVALID: WebpushTokenInvalid,
  WORKER_BUSY_TOO_LONG_RETRY: WorkerBusyTooLongRetry,
  YOU_BLOCKED_USER: YouBlockedUser,
};
