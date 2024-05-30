/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Api } from "./2_tl.ts";
import { MtkrutoError } from "./0_errors.ts";

export * from "./0_errors.ts";

export interface TelegramErrorParams {
  error_code: number;
  error_message: string;
  call: Api.AnyObject;
}

export class TelegramError extends MtkrutoError {
  errorCode: number;
  errorMessage: string;

  constructor(params: TelegramErrorParams) {
    super(`${params.error_code}: ${params.error_message} (${params.call._})`);
    this.name = "TelegramError";
    this.errorCode = params.error_code;
    this.errorMessage = params.error_message;
    this.cause = params.call;
  }
}

export class AboutTooLong extends TelegramError {
  //
}

export class AccessTokenExpired extends TelegramError {
  //
}

export class AccessTokenInvalid extends TelegramError {
  //
}

export class ActiveUserRequired extends TelegramError {
  //
}

export class AdminsTooMuch extends TelegramError {
  //
}

export class AdminIdInvalid extends TelegramError {
  //
}

export class AdminRankEmojiNotAllowed extends TelegramError {
  //
}

export class AdminRankInvalid extends TelegramError {
  //
}

export class AlbumPhotosTooMany extends TelegramError {
  //
}

export class ApiIdInvalid extends TelegramError {
  //
}

export class ApiIdPublishedFlood extends TelegramError {
  //
}

export class ArticleTitleEmpty extends TelegramError {
  //
}

export class AudioContentUrlEmpty extends TelegramError {
  //
}

export class AudioTitleEmpty extends TelegramError {
  //
}

export class AuthBytesInvalid extends TelegramError {
  //
}

export class AuthKeyDuplicated extends TelegramError {
  //
}

export class AuthKeyInvalid extends TelegramError {
  //
}

export class AuthKeyPermEmpty extends TelegramError {
  //
}

export class AuthKeyUnregistered extends TelegramError {
  //
}

export class AuthRestart extends TelegramError {
  //
}

export class AuthTokenAlreadyAccepted extends TelegramError {
  //
}

export class AuthTokenException extends TelegramError {
  //
}

export class AuthTokenExpired extends TelegramError {
  //
}

export class AuthTokenInvalid extends TelegramError {
  //
}

export class AutoarchiveNotAvailable extends TelegramError {
  //
}

export class BankCardNumberInvalid extends TelegramError {
  //
}

export class BannedRightsInvalid extends TelegramError {
  //
}

export class BasePortLocInvalid extends TelegramError {
  //
}

export class BotsTooMuch extends TelegramError {
  //
}

export class BotChannelsNa extends TelegramError {
  //
}

export class BotCommandDescriptionInvalid extends TelegramError {
  //
}

export class BotCommandInvalid extends TelegramError {
  //
}

export class BotDomainInvalid extends TelegramError {
  //
}

export class BotGamesDisabled extends TelegramError {
  //
}

export class BotGroupsBlocked extends TelegramError {
  //
}

export class BotInlineDisabled extends TelegramError {
  //
}

export class BotInvalid extends TelegramError {
  //
}

export class BotMethodInvalid extends TelegramError {
  //
}

export class BotMissing extends TelegramError {
  //
}

export class BotOnesideNotAvail extends TelegramError {
  //
}

export class BotPaymentsDisabled extends TelegramError {
  //
}

export class BotPollsDisabled extends TelegramError {
  //
}

export class BotResponseTimeout extends TelegramError {
  //
}

export class BotScoreNotModified extends TelegramError {
  //
}

export class BroadcastCallsDisabled extends TelegramError {
  //
}

export class BroadcastForbidden extends TelegramError {
  //
}

export class BroadcastIdInvalid extends TelegramError {
  //
}

export class BroadcastPublicVotersForbidden extends TelegramError {
  //
}

export class BroadcastRequired extends TelegramError {
  //
}

export class ButtonDataInvalid extends TelegramError {
  //
}

export class ButtonTextInvalid extends TelegramError {
  //
}

export class ButtonTypeInvalid extends TelegramError {
  //
}

export class ButtonUrlInvalid extends TelegramError {
  //
}

export class ButtonUserPrivacyRestricted extends TelegramError {
  //
}

export class CallAlreadyAccepted extends TelegramError {
  //
}

export class CallAlreadyDeclined extends TelegramError {
  //
}

export class CallOccupyFailed extends TelegramError {
  //
}

export class CallPeerInvalid extends TelegramError {
  //
}

export class CallProtocolFlagsInvalid extends TelegramError {
  //
}

export class CdnMethodInvalid extends TelegramError {
  //
}

export class CdnUploadTimeout extends TelegramError {
  //
}

export class ChannelsAdminLocatedTooMuch extends TelegramError {
  //
}

export class ChannelsAdminPublicTooMuch extends TelegramError {
  //
}

export class ChannelsTooMuch extends TelegramError {
  //
}

export class ChannelBanned extends TelegramError {
  //
}

export class ChannelForumMissing extends TelegramError {
  //
}

export class ChannelIdInvalid extends TelegramError {
  //
}

export class ChannelInvalid extends TelegramError {
  //
}

export class ChannelParicipantMissing extends TelegramError {
  //
}

export class ChannelPrivate extends TelegramError {
  //
}

export class ChannelPublicGroupNa extends TelegramError {
  //
}

export class ChannelTooBig extends TelegramError {
  //
}

export class ChannelTooLarge extends TelegramError {
  //
}

export class ChatAboutNotModified extends TelegramError {
  //
}

export class ChatAboutTooLong extends TelegramError {
  //
}

export class ChatAdminInviteRequired extends TelegramError {
  //
}

export class ChatAdminRequired extends TelegramError {
  //
}

export class ChatDiscussionUnallowed extends TelegramError {
  //
}

export class ChatForbidden extends TelegramError {
  //
}

export class ChatForwardsRestricted extends TelegramError {
  //
}

export class ChatGetFailed extends TelegramError {
  //
}

export class ChatGuestSendForbidden extends TelegramError {
  //
}

export class ChatIdEmpty extends TelegramError {
  //
}

export class ChatIdGenerateFailed extends TelegramError {
  //
}

export class ChatIdInvalid extends TelegramError {
  //
}

export class ChatInvalid extends TelegramError {
  //
}

export class ChatInvitePermanent extends TelegramError {
  //
}

export class ChatLinkExists extends TelegramError {
  //
}

export class ChatNotModified extends TelegramError {
  //
}

export class ChatRestricted extends TelegramError {
  //
}

export class ChatRevokeDateUnsupported extends TelegramError {
  //
}

export class ChatSendGameForbidden extends TelegramError {
  //
}

export class ChatSendGifsForbidden extends TelegramError {
  //
}

export class ChatSendInlineForbidden extends TelegramError {
  //
}

export class ChatSendMediaForbidden extends TelegramError {
  //
}

export class ChatSendPollForbidden extends TelegramError {
  //
}

export class ChatSendStickersForbidden extends TelegramError {
  //
}

export class ChatTitleEmpty extends TelegramError {
  //
}

export class ChatTooBig extends TelegramError {
  //
}

export class ChatWriteForbidden extends TelegramError {
  //
}

export class ChpCallFail extends TelegramError {
  //
}

export class CodeEmpty extends TelegramError {
  //
}

export class CodeHashInvalid extends TelegramError {
  //
}

export class CodeInvalid extends TelegramError {
  //
}

export class ConnectionApiIdInvalid extends TelegramError {
  //
}

export class ConnectionAppVersionEmpty extends TelegramError {
  //
}

export class ConnectionDeviceModelEmpty extends TelegramError {
  //
}

export class ConnectionLangPackInvalid extends TelegramError {
  //
}

export class ConnectionLayerInvalid extends TelegramError {
  //
}

export class ConnectionNotInited extends TelegramError {
  //
}

export class ConnectionSystemEmpty extends TelegramError {
  //
}

export class ConnectionSystemLangCodeEmpty extends TelegramError {
  //
}

export class ContactAddMissing extends TelegramError {
  //
}

export class ContactIdInvalid extends TelegramError {
  //
}

export class ContactNameEmpty extends TelegramError {
  //
}

export class ContactReqMissing extends TelegramError {
  //
}

export class CreateCallFailed extends TelegramError {
  //
}

export class CurrencyTotalAmountInvalid extends TelegramError {
  //
}

export class DataInvalid extends TelegramError {
  //
}

export class DataJsonInvalid extends TelegramError {
  //
}

export class DataTooLong extends TelegramError {
  //
}

export class DateEmpty extends TelegramError {
  //
}

export class DcIdInvalid extends TelegramError {
  //
}

export class DhGAInvalid extends TelegramError {
  //
}

export class DocumentInvalid extends TelegramError {
  //
}

export class EditBotInviteForbidden extends TelegramError {
  //
}

export class EmailHashExpired extends TelegramError {
  //
}

export class EmailInvalid extends TelegramError {
  //
}

export class EmailUnconfirmed extends TelegramError {
  //
}

export class EmailVerifyExpired extends TelegramError {
  //
}

export class EmojiInvalid extends TelegramError {
  //
}

export class EmojiNotModified extends TelegramError {
  //
}

export class EmoticonEmpty extends TelegramError {
  //
}

export class EmoticonInvalid extends TelegramError {
  //
}

export class EmoticonStickerpackMissing extends TelegramError {
  //
}

export class EncryptedMessageInvalid extends TelegramError {
  //
}

export class EncryptionAlreadyAccepted extends TelegramError {
  //
}

export class EncryptionAlreadyDeclined extends TelegramError {
  //
}

export class EncryptionDeclined extends TelegramError {
  //
}

export class EncryptionIdInvalid extends TelegramError {
  //
}

export class EncryptionOccupyFailed extends TelegramError {
  //
}

export class EntitiesTooLong extends TelegramError {
  //
}

export class EntityBoundsInvalid extends TelegramError {
  //
}

export class EntityMentionUserInvalid extends TelegramError {
  //
}

export class ErrorTextEmpty extends TelegramError {
  //
}

export class ExpireDateInvalid extends TelegramError {
  //
}

export class ExpireForbidden extends TelegramError {
  //
}

export class ExportCardInvalid extends TelegramError {
  //
}

export class ExternalUrlInvalid extends TelegramError {
  //
}

export class FieldNameEmpty extends TelegramError {
  //
}

export class FieldNameInvalid extends TelegramError {
  //
}

export class FilerefUpgradeNeeded extends TelegramError {
  //
}

export class FileContentTypeInvalid extends TelegramError {
  //
}

export class FileEmtpy extends TelegramError {
  //
}

export class FileIdInvalid extends TelegramError {
  //
}

export class FilePartsInvalid extends TelegramError {
  //
}

export class FilePart_0Missing extends TelegramError {
  //
}

export class FilePartEmpty extends TelegramError {
  //
}

export class FilePartInvalid extends TelegramError {
  //
}

export class FilePartLengthInvalid extends TelegramError {
  //
}

export class FilePartSizeChanged extends TelegramError {
  //
}

export class FilePartSizeInvalid extends TelegramError {
  //
}

export class FilePartTooBig extends TelegramError {
  //
}

export class FilePartXMissing extends TelegramError {
  //
}

export class FileReferenceEmpty extends TelegramError {
  //
}

export class FileReferenceExpired extends TelegramError {
  //
}

export class FileReferenceInvalid extends TelegramError {
  //
}

export class FileTitleEmpty extends TelegramError {
  //
}

export class FilterIdInvalid extends TelegramError {
  //
}

export class FilterIncludeEmpty extends TelegramError {
  //
}

export class FilterNotSupported extends TelegramError {
  //
}

export class FilterTitleEmpty extends TelegramError {
  //
}

export class FirstnameInvalid extends TelegramError {
  //
}

export class FolderIdEmpty extends TelegramError {
  //
}

export class FolderIdInvalid extends TelegramError {
  //
}

export class FreshChangeAdminsForbidden extends TelegramError {
  //
}

export class FreshChangePhoneForbidden extends TelegramError {
  //
}

export class FreshResetAuthorisationForbidden extends TelegramError {
  //
}

export class FromMessageBotDisabled extends TelegramError {
  //
}

export class FromPeerInvalid extends TelegramError {
  //
}

export class GameBotInvalid extends TelegramError {
  //
}

export class GeoPointInvalid extends TelegramError {
  //
}

export class GifContentTypeInvalid extends TelegramError {
  //
}

export class GifIdInvalid extends TelegramError {
  //
}

export class GraphExpiredReload extends TelegramError {
  //
}

export class GraphInvalidReload extends TelegramError {
  //
}

export class GraphOutdatedReload extends TelegramError {
  //
}

export class GroupcallAddParticipantsFailed extends TelegramError {
  //
}

export class GroupcallAlreadyDiscarded extends TelegramError {
  //
}

export class GroupcallAlreadyStarted extends TelegramError {
  //
}

export class GroupcallForbidden extends TelegramError {
  //
}

export class GroupcallInvalid extends TelegramError {
  //
}

export class GroupcallJoinMissing extends TelegramError {
  //
}

export class GroupcallNotModified extends TelegramError {
  //
}

export class GroupcallSsrcDuplicateMuch extends TelegramError {
  //
}

export class GroupedMediaInvalid extends TelegramError {
  //
}

export class GroupCallInvalid extends TelegramError {
  //
}

export class HashInvalid extends TelegramError {
  //
}

export class HideRequesterMissing extends TelegramError {
  //
}

export class HistoryGetFailed extends TelegramError {
  //
}

export class ImageProcessFailed extends TelegramError {
  //
}

export class ImportFileInvalid extends TelegramError {
  //
}

export class ImportFormatUnrecognized extends TelegramError {
  //
}

export class ImportIdInvalid extends TelegramError {
  //
}

export class InlineBotRequired extends TelegramError {
  //
}

export class InlineResultExpired extends TelegramError {
  //
}

export class InputConstructorInvalid extends TelegramError {
  //
}

export class InputFetchError extends TelegramError {
  //
}

export class InputFetchFail extends TelegramError {
  //
}

export class InputFilterInvalid extends TelegramError {
  //
}

export class InputLayerInvalid extends TelegramError {
  //
}

export class InputMethodInvalid extends TelegramError {
  //
}

export class InputRequestTooLong extends TelegramError {
  //
}

export class InputTextEmpty extends TelegramError {
  //
}

export class InputUserDeactivated extends TelegramError {
  //
}

export class InterdcXCallError extends TelegramError {
  //
}

export class InterdcXCallRichError extends TelegramError {
  //
}

export class InviteForbiddenWithJoinas extends TelegramError {
  //
}

export class InviteHashEmpty extends TelegramError {
  //
}

export class InviteHashExpired extends TelegramError {
  //
}

export class InviteHashInvalid extends TelegramError {
  //
}

export class InviteRequestSent extends TelegramError {
  //
}

export class InviteRevokedMissing extends TelegramError {
  //
}

export class InvoicePayloadInvalid extends TelegramError {
  //
}

export class JoinAsPeerInvalid extends TelegramError {
  //
}

export class LangCodeInvalid extends TelegramError {
  //
}

export class LangCodeNotSupported extends TelegramError {
  //
}

export class LangPackInvalid extends TelegramError {
  //
}

export class LastnameInvalid extends TelegramError {
  //
}

export class LimitInvalid extends TelegramError {
  //
}

export class LinkNotModified extends TelegramError {
  //
}

export class LocationInvalid extends TelegramError {
  //
}

export class MaxDateInvalid extends TelegramError {
  //
}

export class MaxIdInvalid extends TelegramError {
  //
}

export class MaxQtsInvalid extends TelegramError {
  //
}

export class Md5ChecksumInvalid extends TelegramError {
  //
}

export class MediaCaptionTooLong extends TelegramError {
  //
}

export class MediaEmpty extends TelegramError {
  //
}

export class MediaGroupedInvalid extends TelegramError {
  //
}

export class MediaInvalid extends TelegramError {
  //
}

export class MediaNewInvalid extends TelegramError {
  //
}

export class MediaPrevInvalid extends TelegramError {
  //
}

export class MediaTtlInvalid extends TelegramError {
  //
}

export class MegagroupIdInvalid extends TelegramError {
  //
}

export class MegagroupPrehistoryHidden extends TelegramError {
  //
}

export class MegagroupRequired extends TelegramError {
  //
}

export class MemberNoLocation extends TelegramError {
  //
}

export class MemberOccupyPrimaryLocFailed extends TelegramError {
  //
}

export class MessageAuthorRequired extends TelegramError {
  //
}

export class MessageDeleteForbidden extends TelegramError {
  //
}

export class MessageEditTimeExpired extends TelegramError {
  //
}

export class MessageEmpty extends TelegramError {
  //
}

export class MessageIdsEmpty extends TelegramError {
  //
}

export class MessageIdInvalid extends TelegramError {
  //
}

export class MessageNotModified extends TelegramError {
  //
}

export class MessagePollClosed extends TelegramError {
  //
}

export class MessageTooLong extends TelegramError {
  //
}

export class MethodInvalid extends TelegramError {
  //
}

export class MinDateInvalid extends TelegramError {
  //
}

export class MsgidDecreaseRetry extends TelegramError {
  //
}

export class MsgIdInvalid extends TelegramError {
  //
}

export class MsgTooOld extends TelegramError {
  //
}

export class MsgWaitFailed extends TelegramError {
  //
}

export class MtSendQueueTooLong extends TelegramError {
  //
}

export class MultiMediaTooLong extends TelegramError {
  //
}

export class NeedChatInvalid extends TelegramError {
  //
}

export class NeedMemberInvalid extends TelegramError {
  //
}

export class NewSaltInvalid extends TelegramError {
  //
}

export class NewSettingsEmpty extends TelegramError {
  //
}

export class NewSettingsInvalid extends TelegramError {
  //
}

export class NextOffsetInvalid extends TelegramError {
  //
}

export class NotAllowed extends TelegramError {
  //
}

export class OffsetInvalid extends TelegramError {
  //
}

export class OffsetPeerIdInvalid extends TelegramError {
  //
}

export class OptionsTooMuch extends TelegramError {
  //
}

export class OptionInvalid extends TelegramError {
  //
}

export class PackShortNameInvalid extends TelegramError {
  //
}

export class PackShortNameOccupied extends TelegramError {
  //
}

export class PackTitleInvalid extends TelegramError {
  //
}

export class ParticipantsTooFew extends TelegramError {
  //
}

export class ParticipantCallFailed extends TelegramError {
  //
}

export class ParticipantIdInvalid extends TelegramError {
  //
}

export class ParticipantJoinMissing extends TelegramError {
  //
}

export class ParticipantVersionOutdated extends TelegramError {
  //
}

export class PasswordEmpty extends TelegramError {
  //
}

export class PasswordHashInvalid extends TelegramError {
  //
}

export class PasswordMissing extends TelegramError {
  //
}

export class PasswordRecoveryExpired extends TelegramError {
  //
}

export class PasswordRecoveryNa extends TelegramError {
  //
}

export class PasswordRequired extends TelegramError {
  //
}

export class PaymentProviderInvalid extends TelegramError {
  //
}

export class PeerFlood extends TelegramError {
  //
}

export class PeerHistoryEmpty extends TelegramError {
  //
}

export class PeerIdInvalid extends TelegramError {
  //
}

export class PeerIdNotSupported extends TelegramError {
  //
}

export class PersistentTimestampEmpty extends TelegramError {
  //
}

export class PersistentTimestampInvalid extends TelegramError {
  //
}

export class PersistentTimestampOutdated extends TelegramError {
  //
}

export class PhoneCodeEmpty extends TelegramError {
  //
}

export class PhoneCodeExpired extends TelegramError {
  //
}

export class PhoneCodeHashEmpty extends TelegramError {
  //
}

export class PhoneCodeInvalid extends TelegramError {
  //
}

export class PhoneHashExpired extends TelegramError {
  //
}

export class PhoneNotOccupied extends TelegramError {
  //
}

export class PhoneNumberAppSignupForbidden extends TelegramError {
  //
}

export class PhoneNumberBanned extends TelegramError {
  //
}

export class PhoneNumberFlood extends TelegramError {
  //
}

export class PhoneNumberInvalid extends TelegramError {
  //
}

export class PhoneNumberOccupied extends TelegramError {
  //
}

export class PhoneNumberUnoccupied extends TelegramError {
  //
}

export class PhonePasswordFlood extends TelegramError {
  //
}

export class PhonePasswordProtected extends TelegramError {
  //
}

export class PhotoContentTypeInvalid extends TelegramError {
  //
}

export class PhotoContentUrlEmpty extends TelegramError {
  //
}

export class PhotoCropFileMissing extends TelegramError {
  //
}

export class PhotoCropSizeSmall extends TelegramError {
  //
}

export class PhotoExtInvalid extends TelegramError {
  //
}

export class PhotoFileMissing extends TelegramError {
  //
}

export class PhotoIdInvalid extends TelegramError {
  //
}

export class PhotoInvalid extends TelegramError {
  //
}

export class PhotoInvalidDimensions extends TelegramError {
  //
}

export class PhotoSaveFileInvalid extends TelegramError {
  //
}

export class PhotoThumbUrlEmpty extends TelegramError {
  //
}

export class PinnedDialogsTooMuch extends TelegramError {
  //
}

export class PinRestricted extends TelegramError {
  //
}

export class PollAnswersInvalid extends TelegramError {
  //
}

export class PollAnswerInvalid extends TelegramError {
  //
}

export class PollOptionDuplicate extends TelegramError {
  //
}

export class PollOptionInvalid extends TelegramError {
  //
}

export class PollQuestionInvalid extends TelegramError {
  //
}

export class PollUnsupported extends TelegramError {
  //
}

export class PollVoteRequired extends TelegramError {
  //
}

export class PostponedTimeout extends TelegramError {
  //
}

export class PremiumAccountRequired extends TelegramError {
  //
}

export class PremiumCurrentlyUnavailable extends TelegramError {
  //
}

export class PreviousChatImportActiveWaitXmin extends TelegramError {
  //
}

export class PrivacyKeyInvalid extends TelegramError {
  //
}

export class PrivacyTooLong extends TelegramError {
  //
}

export class PrivacyValueInvalid extends TelegramError {
  //
}

export class PtsChangeEmpty extends TelegramError {
  //
}

export class PublicChannelMissing extends TelegramError {
  //
}

export class PublicKeyRequired extends TelegramError {
  //
}

export class QueryIdEmpty extends TelegramError {
  //
}

export class QueryIdInvalid extends TelegramError {
  //
}

export class QueryTooShort extends TelegramError {
  //
}

export class QuizAnswerMissing extends TelegramError {
  //
}

export class QuizCorrectAnswersEmpty extends TelegramError {
  //
}

export class QuizCorrectAnswersTooMuch extends TelegramError {
  //
}

export class QuizCorrectAnswerInvalid extends TelegramError {
  //
}

export class QuizMultipleInvalid extends TelegramError {
  //
}

export class RandomIdDuplicate extends TelegramError {
  //
}

export class RandomIdEmpty extends TelegramError {
  //
}

export class RandomIdInvalid extends TelegramError {
  //
}

export class RandomLengthInvalid extends TelegramError {
  //
}

export class RangesInvalid extends TelegramError {
  //
}

export class ReactionsTooMany extends TelegramError {
  //
}

export class ReactionEmpty extends TelegramError {
  //
}

export class ReactionInvalid extends TelegramError {
  //
}

export class ReflectorNotAvailable extends TelegramError {
  //
}

export class RegIdGenerateFailed extends TelegramError {
  //
}

export class ReplyMarkupBuyEmpty extends TelegramError {
  //
}

export class ReplyMarkupGameEmpty extends TelegramError {
  //
}

export class ReplyMarkupInvalid extends TelegramError {
  //
}

export class ReplyMarkupTooLong extends TelegramError {
  //
}

export class ResetRequestMissing extends TelegramError {
  //
}

export class ResultsTooMuch extends TelegramError {
  //
}

export class ResultIdDuplicate extends TelegramError {
  //
}

export class ResultIdEmpty extends TelegramError {
  //
}

export class ResultIdInvalid extends TelegramError {
  //
}

export class ResultTypeInvalid extends TelegramError {
  //
}

export class RevoteNotAllowed extends TelegramError {
  //
}

export class RightsNotModified extends TelegramError {
  //
}

export class RightForbidden extends TelegramError {
  //
}

export class RpcCallFail extends TelegramError {
  //
}

export class RpcMcgetFail extends TelegramError {
  //
}

export class RsaDecryptFailed extends TelegramError {
  //
}

export class ScheduleBotNotAllowed extends TelegramError {
  //
}

export class ScheduleDateInvalid extends TelegramError {
  //
}

export class ScheduleDateTooLate extends TelegramError {
  //
}

export class ScheduleStatusPrivate extends TelegramError {
  //
}

export class ScheduleTooMuch extends TelegramError {
  //
}

export class ScoreInvalid extends TelegramError {
  //
}

export class SearchQueryEmpty extends TelegramError {
  //
}

export class SearchWithLinkNotSupported extends TelegramError {
  //
}

export class SecondsInvalid extends TelegramError {
  //
}

export class SendAsPeerInvalid extends TelegramError {
  //
}

export class SendCodeUnavailable extends TelegramError {
  //
}

export class SendMessageMediaInvalid extends TelegramError {
  //
}

export class SendMessageTypeInvalid extends TelegramError {
  //
}

export class SensitiveChangeForbidden extends TelegramError {
  //
}

export class SessionExpired extends TelegramError {
  //
}

export class SessionPasswordNeeded extends TelegramError {
  //
}

export class SessionRevoked extends TelegramError {
  //
}

export class SettingsInvalid extends TelegramError {
  //
}

export class Sha256HashInvalid extends TelegramError {
  //
}

export class ShortnameOccupyFailed extends TelegramError {
  //
}

export class ShortNameInvalid extends TelegramError {
  //
}

export class ShortNameOccupied extends TelegramError {
  //
}

export class SignInFailed extends TelegramError {
  //
}

export class SlowmodeMultiMsgsDisabled extends TelegramError {
  //
}

export class SmsCodeCreateFailed extends TelegramError {
  //
}

export class SrpIdInvalid extends TelegramError {
  //
}

export class SrpPasswordChanged extends TelegramError {
  //
}

export class StartParamEmpty extends TelegramError {
  //
}

export class StartParamInvalid extends TelegramError {
  //
}

export class StartParamTooLong extends TelegramError {
  //
}

export class StickerpackStickersTooMuch extends TelegramError {
  //
}

export class StickersetInvalid extends TelegramError {
  //
}

export class StickersetOwnerAnonymous extends TelegramError {
  //
}

export class StickersEmpty extends TelegramError {
  //
}

export class StickersTooMuch extends TelegramError {
  //
}

export class StickerDocumentInvalid extends TelegramError {
  //
}

export class StickerEmojiInvalid extends TelegramError {
  //
}

export class StickerFileInvalid extends TelegramError {
  //
}

export class StickerGifDimensions extends TelegramError {
  //
}

export class StickerIdInvalid extends TelegramError {
  //
}

export class StickerInvalid extends TelegramError {
  //
}

export class StickerMimeInvalid extends TelegramError {
  //
}

export class StickerPngDimensions extends TelegramError {
  //
}

export class StickerPngNopng extends TelegramError {
  //
}

export class StickerTgsNodoc extends TelegramError {
  //
}

export class StickerTgsNotgs extends TelegramError {
  //
}

export class StickerThumbPngNopng extends TelegramError {
  //
}

export class StickerThumbTgsNotgs extends TelegramError {
  //
}

export class StickerVideoBig extends TelegramError {
  //
}

export class StickerVideoNodoc extends TelegramError {
  //
}

export class StickerVideoNowebm extends TelegramError {
  //
}

export class StorageCheckFailed extends TelegramError {
  //
}

export class StoreInvalidScalarType extends TelegramError {
  //
}

export class SwitchPmTextEmpty extends TelegramError {
  //
}

export class TakeoutInvalid extends TelegramError {
  //
}

export class TakeoutRequired extends TelegramError {
  //
}

export class TempAuthKeyAlreadyBound extends TelegramError {
  //
}

export class TempAuthKeyEmpty extends TelegramError {
  //
}

export class ThemeFileInvalid extends TelegramError {
  //
}

export class ThemeFormatInvalid extends TelegramError {
  //
}

export class ThemeInvalid extends TelegramError {
  //
}

export class ThemeMimeInvalid extends TelegramError {
  //
}

export class ThemeTitleInvalid extends TelegramError {
  //
}

export class Timeout extends TelegramError {
  //
}

export class TitleInvalid extends TelegramError {
  //
}

export class TmpPasswordDisabled extends TelegramError {
  //
}

export class TmpPasswordInvalid extends TelegramError {
  //
}

export class TokenInvalid extends TelegramError {
  //
}

export class TopicDeleted extends TelegramError {
  //
}

export class ToLangInvalid extends TelegramError {
  //
}

export class TtlDaysInvalid extends TelegramError {
  //
}

export class TtlMediaInvalid extends TelegramError {
  //
}

export class TtlPeriodInvalid extends TelegramError {
  //
}

export class TypesEmpty extends TelegramError {
  //
}

export class TypeConstructorInvalid extends TelegramError {
  //
}

export class Timedout extends TelegramError {
  //
}

export class UnknownError extends TelegramError {
  //
}

export class UnknownMethod extends TelegramError {
  //
}

export class UntilDateInvalid extends TelegramError {
  //
}

export class UpdateAppToLogin extends TelegramError {
  //
}

export class UrlInvalid extends TelegramError {
  //
}

export class UsageLimitInvalid extends TelegramError {
  //
}

export class UsernameInvalid extends TelegramError {
  //
}

export class UsernameNotModified extends TelegramError {
  //
}

export class UsernameNotOccupied extends TelegramError {
  //
}

export class UsernameOccupied extends TelegramError {
  //
}

export class UsernamePurchaseAvailable extends TelegramError {
  //
}

export class UserpicPrivacyRequired extends TelegramError {
  //
}

export class UserpicUploadRequired extends TelegramError {
  //
}

export class UsersTooFew extends TelegramError {
  //
}

export class UsersTooMuch extends TelegramError {
  //
}

export class UserAdminInvalid extends TelegramError {
  //
}

export class UserAlreadyInvited extends TelegramError {
  //
}

export class UserAlreadyParticipant extends TelegramError {
  //
}

export class UserBannedInChannel extends TelegramError {
  //
}

export class UserBlocked extends TelegramError {
  //
}

export class UserBot extends TelegramError {
  //
}

export class UserBotInvalid extends TelegramError {
  //
}

export class UserBotRequired extends TelegramError {
  //
}

export class UserChannelsTooMuch extends TelegramError {
  //
}

export class UserCreator extends TelegramError {
  //
}

export class UserDeactivated extends TelegramError {
  //
}

export class UserDeactivatedBan extends TelegramError {
  //
}

export class UserDeleted extends TelegramError {
  //
}

export class UserIdInvalid extends TelegramError {
  //
}

export class UserInvalid extends TelegramError {
  //
}

export class UserIsBlocked extends TelegramError {
  //
}

export class UserIsBot extends TelegramError {
  //
}

export class UserKicked extends TelegramError {
  //
}

export class UserNotMutualContact extends TelegramError {
  //
}

export class UserNotParticipant extends TelegramError {
  //
}

export class UserPrivacyRestricted extends TelegramError {
  //
}

export class UserRestricted extends TelegramError {
  //
}

export class UserVolumeInvalid extends TelegramError {
  //
}

export class VideoContentTypeInvalid extends TelegramError {
  //
}

export class VideoFileInvalid extends TelegramError {
  //
}

export class VideoTitleEmpty extends TelegramError {
  //
}

export class VoiceMessagesForbidden extends TelegramError {
  //
}

export class WallpaperFileInvalid extends TelegramError {
  //
}

export class WallpaperInvalid extends TelegramError {
  //
}

export class WallpaperMimeInvalid extends TelegramError {
  //
}

export class WcConvertUrlInvalid extends TelegramError {
  //
}

export class WebdocumentInvalid extends TelegramError {
  //
}

export class WebdocumentMimeInvalid extends TelegramError {
  //
}

export class WebdocumentSizeTooBig extends TelegramError {
  //
}

export class WebdocumentUrlInvalid extends TelegramError {
  //
}

export class WebpageCurlFailed extends TelegramError {
  //
}

export class WebpageMediaEmpty extends TelegramError {
  //
}

export class WebpushAuthInvalid extends TelegramError {
  //
}

export class WebpushKeyInvalid extends TelegramError {
  //
}

export class WebpushTokenInvalid extends TelegramError {
  //
}

export class WorkerBusyTooLongRetry extends TelegramError {
  //
}

export class YouBlockedUser extends TelegramError {
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
