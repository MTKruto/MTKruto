/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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

// object#number string:string... = string;
export type ObjectDefinition = [number, /* ID */ [string, string][], string];

export type Schema = Record<string, ObjectDefinition>;

declare const R: unique symbol;

export type Function = { [R]?: unknown };

export type ReturnType<T> = T extends Function ? NonNullable<T[typeof R]> : never;

export interface resPQ {
  _: "resPQ";
  nonce: bigint;
  server_nonce: bigint;
  pq: Uint8Array;
  server_public_key_fingerprints: Array<bigint>;
}

export interface p_q_inner_data_dc {
  _: "p_q_inner_data_dc";
  pq: Uint8Array;
  p: Uint8Array;
  q: Uint8Array;
  nonce: bigint;
  server_nonce: bigint;
  new_nonce: bigint;
  dc: number;
}

export interface p_q_inner_data_temp_dc {
  _: "p_q_inner_data_temp_dc";
  pq: Uint8Array;
  p: Uint8Array;
  q: Uint8Array;
  nonce: bigint;
  server_nonce: bigint;
  new_nonce: bigint;
  dc: number;
  expires_in: number;
}

export interface server_DH_params_ok {
  _: "server_DH_params_ok";
  nonce: bigint;
  server_nonce: bigint;
  encrypted_answer: Uint8Array;
}

export interface server_DH_inner_data {
  _: "server_DH_inner_data";
  nonce: bigint;
  server_nonce: bigint;
  g: number;
  dh_prime: Uint8Array;
  g_a: Uint8Array;
  server_time: number;
}

export interface client_DH_inner_data {
  _: "client_DH_inner_data";
  nonce: bigint;
  server_nonce: bigint;
  retry_id: bigint;
  g_b: Uint8Array;
}

export interface dh_gen_ok {
  _: "dh_gen_ok";
  nonce: bigint;
  server_nonce: bigint;
  new_nonce_hash1: bigint;
}

export interface dh_gen_retry {
  _: "dh_gen_retry";
  nonce: bigint;
  server_nonce: bigint;
  new_nonce_hash2: bigint;
}

export interface dh_gen_fail {
  _: "dh_gen_fail";
  nonce: bigint;
  server_nonce: bigint;
  new_nonce_hash3: bigint;
}

export interface bind_auth_key_inner {
  _: "bind_auth_key_inner";
  nonce: bigint;
  temp_auth_key_id: bigint;
  perm_auth_key_id: bigint;
  temp_session_id: bigint;
  expires_at: number;
}

export interface rpc_error {
  _: "rpc_error";
  error_code: number;
  error_message: string;
}

export interface rpc_answer_unknown {
  _: "rpc_answer_unknown";
}

export interface rpc_answer_dropped_running {
  _: "rpc_answer_dropped_running";
}

export interface rpc_answer_dropped {
  _: "rpc_answer_dropped";
  msg_id: bigint;
  seq_no: number;
  bytes: number;
}

export interface future_salt {
  _: "future_salt";
  valid_since: number;
  valid_until: number;
  salt: bigint;
}

export interface future_salts {
  _: "future_salts";
  req_msg_id: bigint;
  now: number;
  salts: Array<FutureSalt>;
}

export interface pong {
  _: "pong";
  msg_id: bigint;
  ping_id: bigint;
}

export interface destroy_session_ok {
  _: "destroy_session_ok";
  session_id: bigint;
}

export interface destroy_session_none {
  _: "destroy_session_none";
  session_id: bigint;
}

export interface new_session_created {
  _: "new_session_created";
  first_msg_id: bigint;
  unique_id: bigint;
  server_salt: bigint;
}

export interface gzip_packed {
  _: "gzip_packed";
  packed_data: Uint8Array;
}

export interface msgs_ack {
  _: "msgs_ack";
  msg_ids: Array<bigint>;
}

export interface bad_msg_notification {
  _: "bad_msg_notification";
  bad_msg_id: bigint;
  bad_msg_seqno: number;
  error_code: number;
}

export interface bad_server_salt {
  _: "bad_server_salt";
  bad_msg_id: bigint;
  bad_msg_seqno: number;
  error_code: number;
  new_server_salt: bigint;
}

export interface msg_resend_req {
  _: "msg_resend_req";
  msg_ids: Array<bigint>;
}

export interface msgs_state_req {
  _: "msgs_state_req";
  msg_ids: Array<bigint>;
}

export interface msgs_state_info {
  _: "msgs_state_info";
  req_msg_id: bigint;
  info: Uint8Array;
}

export interface msgs_all_info {
  _: "msgs_all_info";
  msg_ids: Array<bigint>;
  info: Uint8Array;
}

export interface msg_detailed_info {
  _: "msg_detailed_info";
  msg_id: bigint;
  answer_msg_id: bigint;
  bytes: number;
  status: number;
}

export interface msg_new_detailed_info {
  _: "msg_new_detailed_info";
  answer_msg_id: bigint;
  bytes: number;
  status: number;
}

export interface destroy_auth_key_ok {
  _: "destroy_auth_key_ok";
}

export interface destroy_auth_key_none {
  _: "destroy_auth_key_none";
}

export interface destroy_auth_key_fail {
  _: "destroy_auth_key_fail";
}

export interface http_wait {
  _: "http_wait";
  max_delay: number;
  wait_after: number;
  max_wait: number;
}

export interface true_ {
  _: "true";
}

export interface error {
  _: "error";
  code: number;
  text: string;
}

export interface ipPort {
  _: "ipPort";
  ipv4: number;
  port: number;
}

export interface ipPortSecret {
  _: "ipPortSecret";
  ipv4: number;
  port: number;
  secret: Uint8Array;
}

export interface accessPointRule {
  _: "accessPointRule";
  phone_prefix_rules: string;
  dc_id: number;
  ips: Array<IpPort>;
}

export interface help_configSimple {
  _: "help.configSimple";
  date: number;
  expires: number;
  rules: Array<AccessPointRule>;
}

export interface inputPeerPhotoFileLocationLegacy {
  _: "inputPeerPhotoFileLocationLegacy";
  big?: true;
  peer: InputPeer;
  volume_id: bigint;
  local_id: number;
}

export interface inputStickerSetThumbLegacy {
  _: "inputStickerSetThumbLegacy";
  stickerset: InputStickerSet;
  volume_id: bigint;
  local_id: number;
}

export interface inputPeerEmpty {
  _: "inputPeerEmpty";
}

export interface inputPeerSelf {
  _: "inputPeerSelf";
}

export interface inputPeerChat {
  _: "inputPeerChat";
  chat_id: bigint;
}

export interface inputPeerUser {
  _: "inputPeerUser";
  user_id: bigint;
  access_hash: bigint;
}

export interface inputPeerChannel {
  _: "inputPeerChannel";
  channel_id: bigint;
  access_hash: bigint;
}

export interface inputPeerUserFromMessage {
  _: "inputPeerUserFromMessage";
  peer: InputPeer;
  msg_id: number;
  user_id: bigint;
}

export interface inputPeerChannelFromMessage {
  _: "inputPeerChannelFromMessage";
  peer: InputPeer;
  msg_id: number;
  channel_id: bigint;
}

export interface inputUserEmpty {
  _: "inputUserEmpty";
}

export interface inputUserSelf {
  _: "inputUserSelf";
}

export interface inputUser {
  _: "inputUser";
  user_id: bigint;
  access_hash: bigint;
}

export interface inputUserFromMessage {
  _: "inputUserFromMessage";
  peer: InputPeer;
  msg_id: number;
  user_id: bigint;
}

export interface inputPhoneContact {
  _: "inputPhoneContact";
  client_id: bigint;
  phone: string;
  first_name: string;
  last_name: string;
}

export interface inputFile {
  _: "inputFile";
  id: bigint;
  parts: number;
  name: string;
  md5_checksum: string;
}

export interface inputFileBig {
  _: "inputFileBig";
  id: bigint;
  parts: number;
  name: string;
}

export interface inputFileStoryDocument {
  _: "inputFileStoryDocument";
  id: InputDocument;
}

export interface inputMediaEmpty {
  _: "inputMediaEmpty";
}

export interface inputMediaUploadedPhoto {
  _: "inputMediaUploadedPhoto";
  spoiler?: true;
  file: InputFile;
  stickers?: Array<InputDocument>;
  ttl_seconds?: number;
}

export interface inputMediaPhoto {
  _: "inputMediaPhoto";
  spoiler?: true;
  id: InputPhoto;
  ttl_seconds?: number;
}

export interface inputMediaGeoPoint {
  _: "inputMediaGeoPoint";
  geo_point: InputGeoPoint;
}

export interface inputMediaContact {
  _: "inputMediaContact";
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
}

export interface inputMediaUploadedDocument {
  _: "inputMediaUploadedDocument";
  nosound_video?: true;
  force_file?: true;
  spoiler?: true;
  file: InputFile;
  thumb?: InputFile;
  mime_type: string;
  attributes: Array<DocumentAttribute>;
  stickers?: Array<InputDocument>;
  video_cover?: InputPhoto;
  video_timestamp?: number;
  ttl_seconds?: number;
}

export interface inputMediaDocument {
  _: "inputMediaDocument";
  spoiler?: true;
  id: InputDocument;
  video_cover?: InputPhoto;
  video_timestamp?: number;
  ttl_seconds?: number;
  query?: string;
}

export interface inputMediaVenue {
  _: "inputMediaVenue";
  geo_point: InputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
}

export interface inputMediaPhotoExternal {
  _: "inputMediaPhotoExternal";
  spoiler?: true;
  url: string;
  ttl_seconds?: number;
}

export interface inputMediaDocumentExternal {
  _: "inputMediaDocumentExternal";
  spoiler?: true;
  url: string;
  ttl_seconds?: number;
  video_cover?: InputPhoto;
  video_timestamp?: number;
}

export interface inputMediaGame {
  _: "inputMediaGame";
  id: InputGame;
}

export interface inputMediaInvoice {
  _: "inputMediaInvoice";
  title: string;
  description: string;
  photo?: InputWebDocument;
  invoice: Invoice;
  payload: Uint8Array;
  provider?: string;
  provider_data: DataJSON;
  start_param?: string;
  extended_media?: InputMedia;
}

export interface inputMediaGeoLive {
  _: "inputMediaGeoLive";
  stopped?: true;
  geo_point: InputGeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;
}

export interface inputMediaPoll {
  _: "inputMediaPoll";
  poll: Poll;
  correct_answers?: Array<Uint8Array>;
  solution?: string;
  solution_entities?: Array<MessageEntity>;
}

export interface inputMediaDice {
  _: "inputMediaDice";
  emoticon: string;
}

export interface inputMediaStory {
  _: "inputMediaStory";
  peer: InputPeer;
  id: number;
}

export interface inputMediaWebPage {
  _: "inputMediaWebPage";
  force_large_media?: true;
  force_small_media?: true;
  optional?: true;
  url: string;
}

export interface inputMediaPaidMedia {
  _: "inputMediaPaidMedia";
  stars_amount: bigint;
  extended_media: Array<InputMedia>;
  payload?: string;
}

export interface inputChatPhotoEmpty {
  _: "inputChatPhotoEmpty";
}

export interface inputChatUploadedPhoto {
  _: "inputChatUploadedPhoto";
  file?: InputFile;
  video?: InputFile;
  video_start_ts?: number;
  video_emoji_markup?: VideoSize;
}

export interface inputChatPhoto {
  _: "inputChatPhoto";
  id: InputPhoto;
}

export interface inputGeoPointEmpty {
  _: "inputGeoPointEmpty";
}

export interface inputGeoPoint {
  _: "inputGeoPoint";
  lat: number;
  long: number;
  accuracy_radius?: number;
}

export interface inputPhotoEmpty {
  _: "inputPhotoEmpty";
}

export interface inputPhoto {
  _: "inputPhoto";
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
}

export interface inputFileLocation {
  _: "inputFileLocation";
  volume_id: bigint;
  local_id: number;
  secret: bigint;
  file_reference: Uint8Array;
}

export interface inputEncryptedFileLocation {
  _: "inputEncryptedFileLocation";
  id: bigint;
  access_hash: bigint;
}

export interface inputDocumentFileLocation {
  _: "inputDocumentFileLocation";
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
  thumb_size: string;
}

export interface inputSecureFileLocation {
  _: "inputSecureFileLocation";
  id: bigint;
  access_hash: bigint;
}

export interface inputTakeoutFileLocation {
  _: "inputTakeoutFileLocation";
}

export interface inputPhotoFileLocation {
  _: "inputPhotoFileLocation";
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
  thumb_size: string;
}

export interface inputPhotoLegacyFileLocation {
  _: "inputPhotoLegacyFileLocation";
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
  volume_id: bigint;
  local_id: number;
  secret: bigint;
}

export interface inputPeerPhotoFileLocation {
  _: "inputPeerPhotoFileLocation";
  big?: true;
  peer: InputPeer;
  photo_id: bigint;
}

export interface inputStickerSetThumb {
  _: "inputStickerSetThumb";
  stickerset: InputStickerSet;
  thumb_version: number;
}

export interface inputGroupCallStream {
  _: "inputGroupCallStream";
  call: InputGroupCall;
  time_ms: bigint;
  scale: number;
  video_channel?: number;
  video_quality?: number;
}

export interface peerUser {
  _: "peerUser";
  user_id: bigint;
}

export interface peerChat {
  _: "peerChat";
  chat_id: bigint;
}

export interface peerChannel {
  _: "peerChannel";
  channel_id: bigint;
}

export interface storage_fileUnknown {
  _: "storage.fileUnknown";
}

export interface storage_filePartial {
  _: "storage.filePartial";
}

export interface storage_fileJpeg {
  _: "storage.fileJpeg";
}

export interface storage_fileGif {
  _: "storage.fileGif";
}

export interface storage_filePng {
  _: "storage.filePng";
}

export interface storage_filePdf {
  _: "storage.filePdf";
}

export interface storage_fileMp3 {
  _: "storage.fileMp3";
}

export interface storage_fileMov {
  _: "storage.fileMov";
}

export interface storage_fileMp4 {
  _: "storage.fileMp4";
}

export interface storage_fileWebp {
  _: "storage.fileWebp";
}

export interface userEmpty {
  _: "userEmpty";
  id: bigint;
}

export interface user {
  _: "user";
  self?: true;
  contact?: true;
  mutual_contact?: true;
  deleted?: true;
  bot?: true;
  bot_chat_history?: true;
  bot_nochats?: true;
  verified?: true;
  restricted?: true;
  min?: true;
  bot_inline_geo?: true;
  support?: true;
  scam?: true;
  apply_min_photo?: true;
  fake?: true;
  bot_attach_menu?: true;
  premium?: true;
  attach_menu_enabled?: true;
  bot_can_edit?: true;
  close_friend?: true;
  stories_hidden?: true;
  stories_unavailable?: true;
  contact_require_premium?: true;
  bot_business?: true;
  bot_has_main_app?: true;
  id: bigint;
  access_hash?: bigint;
  first_name?: string;
  last_name?: string;
  username?: string;
  phone?: string;
  photo?: UserProfilePhoto;
  status?: UserStatus;
  bot_info_version?: number;
  restriction_reason?: Array<RestrictionReason>;
  bot_inline_placeholder?: string;
  lang_code?: string;
  emoji_status?: EmojiStatus;
  usernames?: Array<Username>;
  stories_max_id?: number;
  color?: PeerColor;
  profile_color?: PeerColor;
  bot_active_users?: number;
  bot_verification_icon?: bigint;
  send_paid_messages_stars?: bigint;
}

export interface userProfilePhotoEmpty {
  _: "userProfilePhotoEmpty";
}

export interface userProfilePhoto {
  _: "userProfilePhoto";
  has_video?: true;
  personal?: true;
  photo_id: bigint;
  stripped_thumb?: Uint8Array;
  dc_id: number;
}

export interface userStatusEmpty {
  _: "userStatusEmpty";
}

export interface userStatusOnline {
  _: "userStatusOnline";
  expires: number;
}

export interface userStatusOffline {
  _: "userStatusOffline";
  was_online: number;
}

export interface userStatusRecently {
  _: "userStatusRecently";
  by_me?: true;
}

export interface userStatusLastWeek {
  _: "userStatusLastWeek";
  by_me?: true;
}

export interface userStatusLastMonth {
  _: "userStatusLastMonth";
  by_me?: true;
}

export interface chatEmpty {
  _: "chatEmpty";
  id: bigint;
}

export interface chat {
  _: "chat";
  creator?: true;
  left?: true;
  deactivated?: true;
  call_active?: true;
  call_not_empty?: true;
  noforwards?: true;
  id: bigint;
  title: string;
  photo: ChatPhoto;
  participants_count: number;
  date: number;
  version: number;
  migrated_to?: InputChannel;
  admin_rights?: ChatAdminRights;
  default_banned_rights?: ChatBannedRights;
}

export interface chatForbidden {
  _: "chatForbidden";
  id: bigint;
  title: string;
}

export interface channel {
  _: "channel";
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
  forum?: true;
  stories_hidden?: true;
  stories_hidden_min?: true;
  stories_unavailable?: true;
  signature_profiles?: true;
  id: bigint;
  access_hash?: bigint;
  title: string;
  username?: string;
  photo: ChatPhoto;
  date: number;
  restriction_reason?: Array<RestrictionReason>;
  admin_rights?: ChatAdminRights;
  banned_rights?: ChatBannedRights;
  default_banned_rights?: ChatBannedRights;
  participants_count?: number;
  usernames?: Array<Username>;
  stories_max_id?: number;
  color?: PeerColor;
  profile_color?: PeerColor;
  emoji_status?: EmojiStatus;
  level?: number;
  subscription_until_date?: number;
  bot_verification_icon?: bigint;
  send_paid_messages_stars?: bigint;
}

export interface channelForbidden {
  _: "channelForbidden";
  broadcast?: true;
  megagroup?: true;
  id: bigint;
  access_hash: bigint;
  title: string;
  until_date?: number;
}

export interface chatFull {
  _: "chatFull";
  can_set_username?: true;
  has_scheduled?: true;
  translations_disabled?: true;
  id: bigint;
  about: string;
  participants: ChatParticipants;
  chat_photo?: Photo;
  notify_settings: PeerNotifySettings;
  exported_invite?: ExportedChatInvite;
  bot_info?: Array<BotInfo>;
  pinned_msg_id?: number;
  folder_id?: number;
  call?: InputGroupCall;
  ttl_period?: number;
  groupcall_default_join_as?: Peer;
  theme_emoticon?: string;
  requests_pending?: number;
  recent_requesters?: Array<bigint>;
  available_reactions?: ChatReactions;
  reactions_limit?: number;
}

export interface channelFull {
  _: "channelFull";
  can_view_participants?: true;
  can_set_username?: true;
  can_set_stickers?: true;
  hidden_prehistory?: true;
  can_set_location?: true;
  has_scheduled?: true;
  can_view_stats?: true;
  blocked?: true;
  can_delete_channel?: true;
  antispam?: true;
  participants_hidden?: true;
  translations_disabled?: true;
  stories_pinned_available?: true;
  view_forum_as_messages?: true;
  restricted_sponsored?: true;
  can_view_revenue?: true;
  paid_media_allowed?: true;
  can_view_stars_revenue?: true;
  paid_reactions_available?: true;
  stargifts_available?: true;
  paid_messages_available?: true;
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
  chat_photo: Photo;
  notify_settings: PeerNotifySettings;
  exported_invite?: ExportedChatInvite;
  bot_info: Array<BotInfo>;
  migrated_from_chat_id?: bigint;
  migrated_from_max_id?: number;
  pinned_msg_id?: number;
  stickerset?: StickerSet;
  available_min_id?: number;
  folder_id?: number;
  linked_chat_id?: bigint;
  location?: ChannelLocation;
  slowmode_seconds?: number;
  slowmode_next_send_date?: number;
  stats_dc?: number;
  pts: number;
  call?: InputGroupCall;
  ttl_period?: number;
  pending_suggestions?: Array<string>;
  groupcall_default_join_as?: Peer;
  theme_emoticon?: string;
  requests_pending?: number;
  recent_requesters?: Array<bigint>;
  default_send_as?: Peer;
  available_reactions?: ChatReactions;
  reactions_limit?: number;
  stories?: PeerStories;
  wallpaper?: WallPaper;
  boosts_applied?: number;
  boosts_unrestrict?: number;
  emojiset?: StickerSet;
  bot_verification?: BotVerification;
  stargifts_count?: number;
}

export interface chatParticipant {
  _: "chatParticipant";
  user_id: bigint;
  inviter_id: bigint;
  date: number;
}

export interface chatParticipantCreator {
  _: "chatParticipantCreator";
  user_id: bigint;
}

export interface chatParticipantAdmin {
  _: "chatParticipantAdmin";
  user_id: bigint;
  inviter_id: bigint;
  date: number;
}

export interface chatParticipantsForbidden {
  _: "chatParticipantsForbidden";
  chat_id: bigint;
  self_participant?: ChatParticipant;
}

export interface chatParticipants {
  _: "chatParticipants";
  chat_id: bigint;
  participants: Array<ChatParticipant>;
  version: number;
}

export interface chatPhotoEmpty {
  _: "chatPhotoEmpty";
}

export interface chatPhoto {
  _: "chatPhoto";
  has_video?: true;
  photo_id: bigint;
  stripped_thumb?: Uint8Array;
  dc_id: number;
}

export interface messageEmpty {
  _: "messageEmpty";
  id: number;
  peer_id?: Peer;
}

export interface message {
  _: "message";
  out?: true;
  mentioned?: true;
  media_unread?: true;
  silent?: true;
  post?: true;
  from_scheduled?: true;
  legacy?: true;
  edit_hide?: true;
  pinned?: true;
  noforwards?: true;
  invert_media?: true;
  offline?: true;
  video_processing_pending?: true;
  id: number;
  from_id?: Peer;
  from_boosts_applied?: number;
  peer_id: Peer;
  saved_peer_id?: Peer;
  fwd_from?: MessageFwdHeader;
  via_bot_id?: bigint;
  via_business_bot_id?: bigint;
  reply_to?: MessageReplyHeader;
  date: number;
  message: string;
  media?: MessageMedia;
  reply_markup?: ReplyMarkup;
  entities?: Array<MessageEntity>;
  views?: number;
  forwards?: number;
  replies?: MessageReplies;
  edit_date?: number;
  post_author?: string;
  grouped_id?: bigint;
  reactions?: MessageReactions;
  restriction_reason?: Array<RestrictionReason>;
  ttl_period?: number;
  quick_reply_shortcut_id?: number;
  effect?: bigint;
  factcheck?: FactCheck;
  report_delivery_until_date?: number;
  paid_message_stars?: bigint;
}

export interface messageService {
  _: "messageService";
  out?: true;
  mentioned?: true;
  media_unread?: true;
  reactions_are_possible?: true;
  silent?: true;
  post?: true;
  legacy?: true;
  id: number;
  from_id?: Peer;
  peer_id: Peer;
  reply_to?: MessageReplyHeader;
  date: number;
  action: MessageAction;
  reactions?: MessageReactions;
  ttl_period?: number;
}

export interface messageMediaEmpty {
  _: "messageMediaEmpty";
}

export interface messageMediaPhoto {
  _: "messageMediaPhoto";
  spoiler?: true;
  photo?: Photo;
  ttl_seconds?: number;
}

export interface messageMediaGeo {
  _: "messageMediaGeo";
  geo: GeoPoint;
}

export interface messageMediaContact {
  _: "messageMediaContact";
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  user_id: bigint;
}

export interface messageMediaUnsupported {
  _: "messageMediaUnsupported";
}

export interface messageMediaDocument {
  _: "messageMediaDocument";
  nopremium?: true;
  spoiler?: true;
  video?: true;
  round?: true;
  voice?: true;
  document?: Document;
  alt_documents?: Array<Document>;
  video_cover?: Photo;
  video_timestamp?: number;
  ttl_seconds?: number;
}

export interface messageMediaWebPage {
  _: "messageMediaWebPage";
  force_large_media?: true;
  force_small_media?: true;
  manual?: true;
  safe?: true;
  webpage: WebPage;
}

export interface messageMediaVenue {
  _: "messageMediaVenue";
  geo: GeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
}

export interface messageMediaGame {
  _: "messageMediaGame";
  game: Game;
}

export interface messageMediaInvoice {
  _: "messageMediaInvoice";
  shipping_address_requested?: true;
  test?: true;
  title: string;
  description: string;
  photo?: WebDocument;
  receipt_msg_id?: number;
  currency: string;
  total_amount: bigint;
  start_param: string;
  extended_media?: MessageExtendedMedia;
}

export interface messageMediaGeoLive {
  _: "messageMediaGeoLive";
  geo: GeoPoint;
  heading?: number;
  period: number;
  proximity_notification_radius?: number;
}

export interface messageMediaPoll {
  _: "messageMediaPoll";
  poll: Poll;
  results: PollResults;
}

export interface messageMediaDice {
  _: "messageMediaDice";
  value: number;
  emoticon: string;
}

export interface messageMediaStory {
  _: "messageMediaStory";
  via_mention?: true;
  peer: Peer;
  id: number;
  story?: StoryItem;
}

export interface messageMediaGiveaway {
  _: "messageMediaGiveaway";
  only_new_subscribers?: true;
  winners_are_visible?: true;
  channels: Array<bigint>;
  countries_iso2?: Array<string>;
  prize_description?: string;
  quantity: number;
  months?: number;
  stars?: bigint;
  until_date: number;
}

export interface messageMediaGiveawayResults {
  _: "messageMediaGiveawayResults";
  only_new_subscribers?: true;
  refunded?: true;
  channel_id: bigint;
  additional_peers_count?: number;
  launch_msg_id: number;
  winners_count: number;
  unclaimed_count: number;
  winners: Array<bigint>;
  months?: number;
  stars?: bigint;
  prize_description?: string;
  until_date: number;
}

export interface messageMediaPaidMedia {
  _: "messageMediaPaidMedia";
  stars_amount: bigint;
  extended_media: Array<MessageExtendedMedia>;
}

export interface messageActionEmpty {
  _: "messageActionEmpty";
}

export interface messageActionChatCreate {
  _: "messageActionChatCreate";
  title: string;
  users: Array<bigint>;
}

export interface messageActionChatEditTitle {
  _: "messageActionChatEditTitle";
  title: string;
}

export interface messageActionChatEditPhoto {
  _: "messageActionChatEditPhoto";
  photo: Photo;
}

export interface messageActionChatDeletePhoto {
  _: "messageActionChatDeletePhoto";
}

export interface messageActionChatAddUser {
  _: "messageActionChatAddUser";
  users: Array<bigint>;
}

export interface messageActionChatDeleteUser {
  _: "messageActionChatDeleteUser";
  user_id: bigint;
}

export interface messageActionChatJoinedByLink {
  _: "messageActionChatJoinedByLink";
  inviter_id: bigint;
}

export interface messageActionChannelCreate {
  _: "messageActionChannelCreate";
  title: string;
}

export interface messageActionChatMigrateTo {
  _: "messageActionChatMigrateTo";
  channel_id: bigint;
}

export interface messageActionChannelMigrateFrom {
  _: "messageActionChannelMigrateFrom";
  title: string;
  chat_id: bigint;
}

export interface messageActionPinMessage {
  _: "messageActionPinMessage";
}

export interface messageActionHistoryClear {
  _: "messageActionHistoryClear";
}

export interface messageActionGameScore {
  _: "messageActionGameScore";
  game_id: bigint;
  score: number;
}

export interface messageActionPaymentSentMe {
  _: "messageActionPaymentSentMe";
  recurring_init?: true;
  recurring_used?: true;
  currency: string;
  total_amount: bigint;
  payload: Uint8Array;
  info?: PaymentRequestedInfo;
  shipping_option_id?: string;
  charge: PaymentCharge;
  subscription_until_date?: number;
}

export interface messageActionPaymentSent {
  _: "messageActionPaymentSent";
  recurring_init?: true;
  recurring_used?: true;
  currency: string;
  total_amount: bigint;
  invoice_slug?: string;
  subscription_until_date?: number;
}

export interface messageActionPhoneCall {
  _: "messageActionPhoneCall";
  video?: true;
  call_id: bigint;
  reason?: PhoneCallDiscardReason;
  duration?: number;
}

export interface messageActionScreenshotTaken {
  _: "messageActionScreenshotTaken";
}

export interface messageActionCustomAction {
  _: "messageActionCustomAction";
  message: string;
}

export interface messageActionBotAllowed {
  _: "messageActionBotAllowed";
  attach_menu?: true;
  from_request?: true;
  domain?: string;
  app?: BotApp;
}

export interface messageActionSecureValuesSentMe {
  _: "messageActionSecureValuesSentMe";
  values: Array<SecureValue>;
  credentials: SecureCredentialsEncrypted;
}

export interface messageActionSecureValuesSent {
  _: "messageActionSecureValuesSent";
  types: Array<SecureValueType>;
}

export interface messageActionContactSignUp {
  _: "messageActionContactSignUp";
}

export interface messageActionGeoProximityReached {
  _: "messageActionGeoProximityReached";
  from_id: Peer;
  to_id: Peer;
  distance: number;
}

export interface messageActionGroupCall {
  _: "messageActionGroupCall";
  call: InputGroupCall;
  duration?: number;
}

export interface messageActionInviteToGroupCall {
  _: "messageActionInviteToGroupCall";
  call: InputGroupCall;
  users: Array<bigint>;
}

export interface messageActionSetMessagesTTL {
  _: "messageActionSetMessagesTTL";
  period: number;
  auto_setting_from?: bigint;
}

export interface messageActionGroupCallScheduled {
  _: "messageActionGroupCallScheduled";
  call: InputGroupCall;
  schedule_date: number;
}

export interface messageActionSetChatTheme {
  _: "messageActionSetChatTheme";
  emoticon: string;
}

export interface messageActionChatJoinedByRequest {
  _: "messageActionChatJoinedByRequest";
}

export interface messageActionWebViewDataSentMe {
  _: "messageActionWebViewDataSentMe";
  text: string;
  data: string;
}

export interface messageActionWebViewDataSent {
  _: "messageActionWebViewDataSent";
  text: string;
}

export interface messageActionGiftPremium {
  _: "messageActionGiftPremium";
  currency: string;
  amount: bigint;
  months: number;
  crypto_currency?: string;
  crypto_amount?: bigint;
  message?: TextWithEntities;
}

export interface messageActionTopicCreate {
  _: "messageActionTopicCreate";
  title: string;
  icon_color: number;
  icon_emoji_id?: bigint;
}

export interface messageActionTopicEdit {
  _: "messageActionTopicEdit";
  title?: string;
  icon_emoji_id?: bigint;
  closed?: boolean;
  hidden?: boolean;
}

export interface messageActionSuggestProfilePhoto {
  _: "messageActionSuggestProfilePhoto";
  photo: Photo;
}

export interface messageActionRequestedPeer {
  _: "messageActionRequestedPeer";
  button_id: number;
  peers: Array<Peer>;
}

export interface messageActionSetChatWallPaper {
  _: "messageActionSetChatWallPaper";
  same?: true;
  for_both?: true;
  wallpaper: WallPaper;
}

export interface messageActionGiftCode {
  _: "messageActionGiftCode";
  via_giveaway?: true;
  unclaimed?: true;
  boost_peer?: Peer;
  months: number;
  slug: string;
  currency?: string;
  amount?: bigint;
  crypto_currency?: string;
  crypto_amount?: bigint;
  message?: TextWithEntities;
}

export interface messageActionGiveawayLaunch {
  _: "messageActionGiveawayLaunch";
  stars?: bigint;
}

export interface messageActionGiveawayResults {
  _: "messageActionGiveawayResults";
  stars?: true;
  winners_count: number;
  unclaimed_count: number;
}

export interface messageActionBoostApply {
  _: "messageActionBoostApply";
  boosts: number;
}

export interface messageActionRequestedPeerSentMe {
  _: "messageActionRequestedPeerSentMe";
  button_id: number;
  peers: Array<RequestedPeer>;
}

export interface messageActionPaymentRefunded {
  _: "messageActionPaymentRefunded";
  peer: Peer;
  currency: string;
  total_amount: bigint;
  payload?: Uint8Array;
  charge: PaymentCharge;
}

export interface messageActionGiftStars {
  _: "messageActionGiftStars";
  currency: string;
  amount: bigint;
  stars: bigint;
  crypto_currency?: string;
  crypto_amount?: bigint;
  transaction_id?: string;
}

export interface messageActionPrizeStars {
  _: "messageActionPrizeStars";
  unclaimed?: true;
  stars: bigint;
  transaction_id: string;
  boost_peer: Peer;
  giveaway_msg_id: number;
}

export interface messageActionStarGift {
  _: "messageActionStarGift";
  name_hidden?: true;
  saved?: true;
  converted?: true;
  upgraded?: true;
  refunded?: true;
  can_upgrade?: true;
  gift: StarGift;
  message?: TextWithEntities;
  convert_stars?: bigint;
  upgrade_msg_id?: number;
  upgrade_stars?: bigint;
  from_id?: Peer;
  peer?: Peer;
  saved_id?: bigint;
}

export interface messageActionStarGiftUnique {
  _: "messageActionStarGiftUnique";
  upgrade?: true;
  transferred?: true;
  saved?: true;
  refunded?: true;
  gift: StarGift;
  can_export_at?: number;
  transfer_stars?: bigint;
  from_id?: Peer;
  peer?: Peer;
  saved_id?: bigint;
}

export interface dialog {
  _: "dialog";
  pinned?: true;
  unread_mark?: true;
  view_forum_as_messages?: true;
  peer: Peer;
  top_message: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  unread_mentions_count: number;
  unread_reactions_count: number;
  notify_settings: PeerNotifySettings;
  pts?: number;
  draft?: DraftMessage;
  folder_id?: number;
  ttl_period?: number;
}

export interface dialogFolder {
  _: "dialogFolder";
  pinned?: true;
  folder: Folder;
  peer: Peer;
  top_message: number;
  unread_muted_peers_count: number;
  unread_unmuted_peers_count: number;
  unread_muted_messages_count: number;
  unread_unmuted_messages_count: number;
}

export interface photoEmpty {
  _: "photoEmpty";
  id: bigint;
}

export interface photo {
  _: "photo";
  has_stickers?: true;
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
  date: number;
  sizes: Array<PhotoSize>;
  video_sizes?: Array<VideoSize>;
  dc_id: number;
}

export interface photoSizeEmpty {
  _: "photoSizeEmpty";
  type: string;
}

export interface photoSize {
  _: "photoSize";
  type: string;
  w: number;
  h: number;
  size: number;
}

export interface photoCachedSize {
  _: "photoCachedSize";
  type: string;
  w: number;
  h: number;
  bytes: Uint8Array;
}

export interface photoStrippedSize {
  _: "photoStrippedSize";
  type: string;
  bytes: Uint8Array;
}

export interface photoSizeProgressive {
  _: "photoSizeProgressive";
  type: string;
  w: number;
  h: number;
  sizes: Array<number>;
}

export interface photoPathSize {
  _: "photoPathSize";
  type: string;
  bytes: Uint8Array;
}

export interface geoPointEmpty {
  _: "geoPointEmpty";
}

export interface geoPoint {
  _: "geoPoint";
  long: number;
  lat: number;
  access_hash: bigint;
  accuracy_radius?: number;
}

export interface auth_sentCode {
  _: "auth.sentCode";
  type: auth_SentCodeType;
  phone_code_hash: string;
  next_type?: auth_CodeType;
  timeout?: number;
}

export interface auth_sentCodeSuccess {
  _: "auth.sentCodeSuccess";
  authorization: auth_Authorization;
}

export interface auth_authorization {
  _: "auth.authorization";
  setup_password_required?: true;
  otherwise_relogin_days?: number;
  tmp_sessions?: number;
  future_auth_token?: Uint8Array;
  user: User;
}

export interface auth_authorizationSignUpRequired {
  _: "auth.authorizationSignUpRequired";
  terms_of_service?: help_TermsOfService;
}

export interface auth_exportedAuthorization {
  _: "auth.exportedAuthorization";
  id: bigint;
  bytes: Uint8Array;
}

export interface inputNotifyPeer {
  _: "inputNotifyPeer";
  peer: InputPeer;
}

export interface inputNotifyUsers {
  _: "inputNotifyUsers";
}

export interface inputNotifyChats {
  _: "inputNotifyChats";
}

export interface inputNotifyBroadcasts {
  _: "inputNotifyBroadcasts";
}

export interface inputNotifyForumTopic {
  _: "inputNotifyForumTopic";
  peer: InputPeer;
  top_msg_id: number;
}

export interface inputPeerNotifySettings {
  _: "inputPeerNotifySettings";
  show_previews?: boolean;
  silent?: boolean;
  mute_until?: number;
  sound?: NotificationSound;
  stories_muted?: boolean;
  stories_hide_sender?: boolean;
  stories_sound?: NotificationSound;
}

export interface peerNotifySettings {
  _: "peerNotifySettings";
  show_previews?: boolean;
  silent?: boolean;
  mute_until?: number;
  ios_sound?: NotificationSound;
  android_sound?: NotificationSound;
  other_sound?: NotificationSound;
  stories_muted?: boolean;
  stories_hide_sender?: boolean;
  stories_ios_sound?: NotificationSound;
  stories_android_sound?: NotificationSound;
  stories_other_sound?: NotificationSound;
}

export interface peerSettings {
  _: "peerSettings";
  report_spam?: true;
  add_contact?: true;
  block_contact?: true;
  share_contact?: true;
  need_contacts_exception?: true;
  report_geo?: true;
  autoarchived?: true;
  invite_members?: true;
  request_chat_broadcast?: true;
  business_bot_paused?: true;
  business_bot_can_reply?: true;
  geo_distance?: number;
  request_chat_title?: string;
  request_chat_date?: number;
  business_bot_id?: bigint;
  business_bot_manage_url?: string;
  charge_paid_message_stars?: bigint;
  registration_month?: string;
  phone_country?: string;
  name_change_date?: number;
  photo_change_date?: number;
}

export interface wallPaper {
  _: "wallPaper";
  id: bigint;
  creator?: true;
  default?: true;
  pattern?: true;
  dark?: true;
  access_hash: bigint;
  slug: string;
  document: Document;
  settings?: WallPaperSettings;
}

export interface wallPaperNoFile {
  _: "wallPaperNoFile";
  id: bigint;
  default?: true;
  dark?: true;
  settings?: WallPaperSettings;
}

export interface inputReportReasonSpam {
  _: "inputReportReasonSpam";
}

export interface inputReportReasonViolence {
  _: "inputReportReasonViolence";
}

export interface inputReportReasonPornography {
  _: "inputReportReasonPornography";
}

export interface inputReportReasonChildAbuse {
  _: "inputReportReasonChildAbuse";
}

export interface inputReportReasonOther {
  _: "inputReportReasonOther";
}

export interface inputReportReasonCopyright {
  _: "inputReportReasonCopyright";
}

export interface inputReportReasonGeoIrrelevant {
  _: "inputReportReasonGeoIrrelevant";
}

export interface inputReportReasonFake {
  _: "inputReportReasonFake";
}

export interface inputReportReasonIllegalDrugs {
  _: "inputReportReasonIllegalDrugs";
}

export interface inputReportReasonPersonalDetails {
  _: "inputReportReasonPersonalDetails";
}

export interface userFull {
  _: "userFull";
  blocked?: true;
  phone_calls_available?: true;
  phone_calls_private?: true;
  can_pin_message?: true;
  has_scheduled?: true;
  video_calls_available?: true;
  voice_messages_forbidden?: true;
  translations_disabled?: true;
  stories_pinned_available?: true;
  blocked_my_stories_from?: true;
  wallpaper_overridden?: true;
  contact_require_premium?: true;
  read_dates_private?: true;
  sponsored_enabled?: true;
  can_view_revenue?: true;
  bot_can_manage_emoji_status?: true;
  id: bigint;
  about?: string;
  settings: PeerSettings;
  personal_photo?: Photo;
  profile_photo?: Photo;
  fallback_photo?: Photo;
  notify_settings: PeerNotifySettings;
  bot_info?: BotInfo;
  pinned_msg_id?: number;
  common_chats_count: number;
  folder_id?: number;
  ttl_period?: number;
  theme_emoticon?: string;
  private_forward_name?: string;
  bot_group_admin_rights?: ChatAdminRights;
  bot_broadcast_admin_rights?: ChatAdminRights;
  wallpaper?: WallPaper;
  stories?: PeerStories;
  business_work_hours?: BusinessWorkHours;
  business_location?: BusinessLocation;
  business_greeting_message?: BusinessGreetingMessage;
  business_away_message?: BusinessAwayMessage;
  business_intro?: BusinessIntro;
  birthday?: Birthday;
  personal_channel_id?: bigint;
  personal_channel_message?: number;
  stargifts_count?: number;
  starref_program?: StarRefProgram;
  bot_verification?: BotVerification;
  send_paid_messages_stars?: bigint;
}

export interface contact {
  _: "contact";
  user_id: bigint;
  mutual: boolean;
}

export interface importedContact {
  _: "importedContact";
  user_id: bigint;
  client_id: bigint;
}

export interface contactStatus {
  _: "contactStatus";
  user_id: bigint;
  status: UserStatus;
}

export interface contacts_contactsNotModified {
  _: "contacts.contactsNotModified";
}

export interface contacts_contacts {
  _: "contacts.contacts";
  contacts: Array<Contact>;
  saved_count: number;
  users: Array<User>;
}

export interface contacts_importedContacts {
  _: "contacts.importedContacts";
  imported: Array<ImportedContact>;
  popular_invites: Array<PopularContact>;
  retry_contacts: Array<bigint>;
  users: Array<User>;
}

export interface contacts_blocked {
  _: "contacts.blocked";
  blocked: Array<PeerBlocked>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface contacts_blockedSlice {
  _: "contacts.blockedSlice";
  count: number;
  blocked: Array<PeerBlocked>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_dialogs {
  _: "messages.dialogs";
  dialogs: Array<Dialog>;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_dialogsSlice {
  _: "messages.dialogsSlice";
  count: number;
  dialogs: Array<Dialog>;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_dialogsNotModified {
  _: "messages.dialogsNotModified";
  count: number;
}

export interface messages_messages {
  _: "messages.messages";
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_messagesSlice {
  _: "messages.messagesSlice";
  inexact?: true;
  count: number;
  next_rate?: number;
  offset_id_offset?: number;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_channelMessages {
  _: "messages.channelMessages";
  inexact?: true;
  pts: number;
  count: number;
  offset_id_offset?: number;
  messages: Array<Message>;
  topics: Array<ForumTopic>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_messagesNotModified {
  _: "messages.messagesNotModified";
  count: number;
}

export interface messages_chats {
  _: "messages.chats";
  chats: Array<Chat>;
}

export interface messages_chatsSlice {
  _: "messages.chatsSlice";
  count: number;
  chats: Array<Chat>;
}

export interface messages_chatFull {
  _: "messages.chatFull";
  full_chat: ChatFull;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_affectedHistory {
  _: "messages.affectedHistory";
  pts: number;
  pts_count: number;
  offset: number;
}

export interface inputMessagesFilterEmpty {
  _: "inputMessagesFilterEmpty";
}

export interface inputMessagesFilterPhotos {
  _: "inputMessagesFilterPhotos";
}

export interface inputMessagesFilterVideo {
  _: "inputMessagesFilterVideo";
}

export interface inputMessagesFilterPhotoVideo {
  _: "inputMessagesFilterPhotoVideo";
}

export interface inputMessagesFilterDocument {
  _: "inputMessagesFilterDocument";
}

export interface inputMessagesFilterUrl {
  _: "inputMessagesFilterUrl";
}

export interface inputMessagesFilterGif {
  _: "inputMessagesFilterGif";
}

export interface inputMessagesFilterVoice {
  _: "inputMessagesFilterVoice";
}

export interface inputMessagesFilterMusic {
  _: "inputMessagesFilterMusic";
}

export interface inputMessagesFilterChatPhotos {
  _: "inputMessagesFilterChatPhotos";
}

export interface inputMessagesFilterPhoneCalls {
  _: "inputMessagesFilterPhoneCalls";
  missed?: true;
}

export interface inputMessagesFilterRoundVoice {
  _: "inputMessagesFilterRoundVoice";
}

export interface inputMessagesFilterRoundVideo {
  _: "inputMessagesFilterRoundVideo";
}

export interface inputMessagesFilterMyMentions {
  _: "inputMessagesFilterMyMentions";
}

export interface inputMessagesFilterGeo {
  _: "inputMessagesFilterGeo";
}

export interface inputMessagesFilterContacts {
  _: "inputMessagesFilterContacts";
}

export interface inputMessagesFilterPinned {
  _: "inputMessagesFilterPinned";
}

export interface updateNewMessage {
  _: "updateNewMessage";
  message: Message;
  pts: number;
  pts_count: number;
}

export interface updateMessageID {
  _: "updateMessageID";
  id: number;
  random_id: bigint;
}

export interface updateDeleteMessages {
  _: "updateDeleteMessages";
  messages: Array<number>;
  pts: number;
  pts_count: number;
}

export interface updateUserTyping {
  _: "updateUserTyping";
  user_id: bigint;
  action: SendMessageAction;
}

export interface updateChatUserTyping {
  _: "updateChatUserTyping";
  chat_id: bigint;
  from_id: Peer;
  action: SendMessageAction;
}

export interface updateChatParticipants {
  _: "updateChatParticipants";
  participants: ChatParticipants;
}

export interface updateUserStatus {
  _: "updateUserStatus";
  user_id: bigint;
  status: UserStatus;
}

export interface updateUserName {
  _: "updateUserName";
  user_id: bigint;
  first_name: string;
  last_name: string;
  usernames: Array<Username>;
}

export interface updateNewAuthorization {
  _: "updateNewAuthorization";
  unconfirmed?: true;
  hash: bigint;
  date?: number;
  device?: string;
  location?: string;
}

export interface updateNewEncryptedMessage {
  _: "updateNewEncryptedMessage";
  message: EncryptedMessage;
  qts: number;
}

export interface updateEncryptedChatTyping {
  _: "updateEncryptedChatTyping";
  chat_id: number;
}

export interface updateEncryption {
  _: "updateEncryption";
  chat: EncryptedChat;
  date: number;
}

export interface updateEncryptedMessagesRead {
  _: "updateEncryptedMessagesRead";
  chat_id: number;
  max_date: number;
  date: number;
}

export interface updateChatParticipantAdd {
  _: "updateChatParticipantAdd";
  chat_id: bigint;
  user_id: bigint;
  inviter_id: bigint;
  date: number;
  version: number;
}

export interface updateChatParticipantDelete {
  _: "updateChatParticipantDelete";
  chat_id: bigint;
  user_id: bigint;
  version: number;
}

export interface updateDcOptions {
  _: "updateDcOptions";
  dc_options: Array<DcOption>;
}

export interface updateNotifySettings {
  _: "updateNotifySettings";
  peer: NotifyPeer;
  notify_settings: PeerNotifySettings;
}

export interface updateServiceNotification {
  _: "updateServiceNotification";
  popup?: true;
  invert_media?: true;
  inbox_date?: number;
  type: string;
  message: string;
  media: MessageMedia;
  entities: Array<MessageEntity>;
}

export interface updatePrivacy {
  _: "updatePrivacy";
  key: PrivacyKey;
  rules: Array<PrivacyRule>;
}

export interface updateUserPhone {
  _: "updateUserPhone";
  user_id: bigint;
  phone: string;
}

export interface updateReadHistoryInbox {
  _: "updateReadHistoryInbox";
  folder_id?: number;
  peer: Peer;
  max_id: number;
  still_unread_count: number;
  pts: number;
  pts_count: number;
}

export interface updateReadHistoryOutbox {
  _: "updateReadHistoryOutbox";
  peer: Peer;
  max_id: number;
  pts: number;
  pts_count: number;
}

export interface updateWebPage {
  _: "updateWebPage";
  webpage: WebPage;
  pts: number;
  pts_count: number;
}

export interface updateReadMessagesContents {
  _: "updateReadMessagesContents";
  messages: Array<number>;
  pts: number;
  pts_count: number;
  date?: number;
}

export interface updateChannelTooLong {
  _: "updateChannelTooLong";
  channel_id: bigint;
  pts?: number;
}

export interface updateChannel {
  _: "updateChannel";
  channel_id: bigint;
}

export interface updateNewChannelMessage {
  _: "updateNewChannelMessage";
  message: Message;
  pts: number;
  pts_count: number;
}

export interface updateReadChannelInbox {
  _: "updateReadChannelInbox";
  folder_id?: number;
  channel_id: bigint;
  max_id: number;
  still_unread_count: number;
  pts: number;
}

export interface updateDeleteChannelMessages {
  _: "updateDeleteChannelMessages";
  channel_id: bigint;
  messages: Array<number>;
  pts: number;
  pts_count: number;
}

export interface updateChannelMessageViews {
  _: "updateChannelMessageViews";
  channel_id: bigint;
  id: number;
  views: number;
}

export interface updateChatParticipantAdmin {
  _: "updateChatParticipantAdmin";
  chat_id: bigint;
  user_id: bigint;
  is_admin: boolean;
  version: number;
}

export interface updateNewStickerSet {
  _: "updateNewStickerSet";
  stickerset: messages_StickerSet;
}

export interface updateStickerSetsOrder {
  _: "updateStickerSetsOrder";
  masks?: true;
  emojis?: true;
  order: Array<bigint>;
}

export interface updateStickerSets {
  _: "updateStickerSets";
  masks?: true;
  emojis?: true;
}

export interface updateSavedGifs {
  _: "updateSavedGifs";
}

export interface updateBotInlineQuery {
  _: "updateBotInlineQuery";
  query_id: bigint;
  user_id: bigint;
  query: string;
  geo?: GeoPoint;
  peer_type?: InlineQueryPeerType;
  offset: string;
}

export interface updateBotInlineSend {
  _: "updateBotInlineSend";
  user_id: bigint;
  query: string;
  geo?: GeoPoint;
  id: string;
  msg_id?: InputBotInlineMessageID;
}

export interface updateEditChannelMessage {
  _: "updateEditChannelMessage";
  message: Message;
  pts: number;
  pts_count: number;
}

export interface updateBotCallbackQuery {
  _: "updateBotCallbackQuery";
  query_id: bigint;
  user_id: bigint;
  peer: Peer;
  msg_id: number;
  chat_instance: bigint;
  data?: Uint8Array;
  game_short_name?: string;
}

export interface updateEditMessage {
  _: "updateEditMessage";
  message: Message;
  pts: number;
  pts_count: number;
}

export interface updateInlineBotCallbackQuery {
  _: "updateInlineBotCallbackQuery";
  query_id: bigint;
  user_id: bigint;
  msg_id: InputBotInlineMessageID;
  chat_instance: bigint;
  data?: Uint8Array;
  game_short_name?: string;
}

export interface updateReadChannelOutbox {
  _: "updateReadChannelOutbox";
  channel_id: bigint;
  max_id: number;
}

export interface updateDraftMessage {
  _: "updateDraftMessage";
  peer: Peer;
  top_msg_id?: number;
  draft: DraftMessage;
}

export interface updateReadFeaturedStickers {
  _: "updateReadFeaturedStickers";
}

export interface updateRecentStickers {
  _: "updateRecentStickers";
}

export interface updateConfig {
  _: "updateConfig";
}

export interface updatePtsChanged {
  _: "updatePtsChanged";
}

export interface updateChannelWebPage {
  _: "updateChannelWebPage";
  channel_id: bigint;
  webpage: WebPage;
  pts: number;
  pts_count: number;
}

export interface updateDialogPinned {
  _: "updateDialogPinned";
  pinned?: true;
  folder_id?: number;
  peer: DialogPeer;
}

export interface updatePinnedDialogs {
  _: "updatePinnedDialogs";
  folder_id?: number;
  order?: Array<DialogPeer>;
}

export interface updateBotWebhookJSON {
  _: "updateBotWebhookJSON";
  data: DataJSON;
}

export interface updateBotWebhookJSONQuery {
  _: "updateBotWebhookJSONQuery";
  query_id: bigint;
  data: DataJSON;
  timeout: number;
}

export interface updateBotShippingQuery {
  _: "updateBotShippingQuery";
  query_id: bigint;
  user_id: bigint;
  payload: Uint8Array;
  shipping_address: PostAddress;
}

export interface updateBotPrecheckoutQuery {
  _: "updateBotPrecheckoutQuery";
  query_id: bigint;
  user_id: bigint;
  payload: Uint8Array;
  info?: PaymentRequestedInfo;
  shipping_option_id?: string;
  currency: string;
  total_amount: bigint;
}

export interface updatePhoneCall {
  _: "updatePhoneCall";
  phone_call: PhoneCall;
}

export interface updateLangPackTooLong {
  _: "updateLangPackTooLong";
  lang_code: string;
}

export interface updateLangPack {
  _: "updateLangPack";
  difference: LangPackDifference;
}

export interface updateFavedStickers {
  _: "updateFavedStickers";
}

export interface updateChannelReadMessagesContents {
  _: "updateChannelReadMessagesContents";
  channel_id: bigint;
  top_msg_id?: number;
  messages: Array<number>;
}

export interface updateContactsReset {
  _: "updateContactsReset";
}

export interface updateChannelAvailableMessages {
  _: "updateChannelAvailableMessages";
  channel_id: bigint;
  available_min_id: number;
}

export interface updateDialogUnreadMark {
  _: "updateDialogUnreadMark";
  unread?: true;
  peer: DialogPeer;
}

export interface updateMessagePoll {
  _: "updateMessagePoll";
  poll_id: bigint;
  poll?: Poll;
  results: PollResults;
}

export interface updateChatDefaultBannedRights {
  _: "updateChatDefaultBannedRights";
  peer: Peer;
  default_banned_rights: ChatBannedRights;
  version: number;
}

export interface updateFolderPeers {
  _: "updateFolderPeers";
  folder_peers: Array<FolderPeer>;
  pts: number;
  pts_count: number;
}

export interface updatePeerSettings {
  _: "updatePeerSettings";
  peer: Peer;
  settings: PeerSettings;
}

export interface updatePeerLocated {
  _: "updatePeerLocated";
  peers: Array<PeerLocated>;
}

export interface updateNewScheduledMessage {
  _: "updateNewScheduledMessage";
  message: Message;
}

export interface updateDeleteScheduledMessages {
  _: "updateDeleteScheduledMessages";
  peer: Peer;
  messages: Array<number>;
  sent_messages?: Array<number>;
}

export interface updateTheme {
  _: "updateTheme";
  theme: Theme;
}

export interface updateGeoLiveViewed {
  _: "updateGeoLiveViewed";
  peer: Peer;
  msg_id: number;
}

export interface updateLoginToken {
  _: "updateLoginToken";
}

export interface updateMessagePollVote {
  _: "updateMessagePollVote";
  poll_id: bigint;
  peer: Peer;
  options: Array<Uint8Array>;
  qts: number;
}

export interface updateDialogFilter {
  _: "updateDialogFilter";
  id: number;
  filter?: DialogFilter;
}

export interface updateDialogFilterOrder {
  _: "updateDialogFilterOrder";
  order: Array<number>;
}

export interface updateDialogFilters {
  _: "updateDialogFilters";
}

export interface updatePhoneCallSignalingData {
  _: "updatePhoneCallSignalingData";
  phone_call_id: bigint;
  data: Uint8Array;
}

export interface updateChannelMessageForwards {
  _: "updateChannelMessageForwards";
  channel_id: bigint;
  id: number;
  forwards: number;
}

export interface updateReadChannelDiscussionInbox {
  _: "updateReadChannelDiscussionInbox";
  channel_id: bigint;
  top_msg_id: number;
  read_max_id: number;
  broadcast_id?: bigint;
  broadcast_post?: number;
}

export interface updateReadChannelDiscussionOutbox {
  _: "updateReadChannelDiscussionOutbox";
  channel_id: bigint;
  top_msg_id: number;
  read_max_id: number;
}

export interface updatePeerBlocked {
  _: "updatePeerBlocked";
  blocked?: true;
  blocked_my_stories_from?: true;
  peer_id: Peer;
}

export interface updateChannelUserTyping {
  _: "updateChannelUserTyping";
  channel_id: bigint;
  top_msg_id?: number;
  from_id: Peer;
  action: SendMessageAction;
}

export interface updatePinnedMessages {
  _: "updatePinnedMessages";
  pinned?: true;
  peer: Peer;
  messages: Array<number>;
  pts: number;
  pts_count: number;
}

export interface updatePinnedChannelMessages {
  _: "updatePinnedChannelMessages";
  pinned?: true;
  channel_id: bigint;
  messages: Array<number>;
  pts: number;
  pts_count: number;
}

export interface updateChat {
  _: "updateChat";
  chat_id: bigint;
}

export interface updateGroupCallParticipants {
  _: "updateGroupCallParticipants";
  call: InputGroupCall;
  participants: Array<GroupCallParticipant>;
  version: number;
}

export interface updateGroupCall {
  _: "updateGroupCall";
  chat_id?: bigint;
  call: GroupCall;
}

export interface updatePeerHistoryTTL {
  _: "updatePeerHistoryTTL";
  peer: Peer;
  ttl_period?: number;
}

export interface updateChatParticipant {
  _: "updateChatParticipant";
  chat_id: bigint;
  date: number;
  actor_id: bigint;
  user_id: bigint;
  prev_participant?: ChatParticipant;
  new_participant?: ChatParticipant;
  invite?: ExportedChatInvite;
  qts: number;
}

export interface updateChannelParticipant {
  _: "updateChannelParticipant";
  via_chatlist?: true;
  channel_id: bigint;
  date: number;
  actor_id: bigint;
  user_id: bigint;
  prev_participant?: ChannelParticipant;
  new_participant?: ChannelParticipant;
  invite?: ExportedChatInvite;
  qts: number;
}

export interface updateBotStopped {
  _: "updateBotStopped";
  user_id: bigint;
  date: number;
  stopped: boolean;
  qts: number;
}

export interface updateGroupCallConnection {
  _: "updateGroupCallConnection";
  presentation?: true;
  params: DataJSON;
}

export interface updateBotCommands {
  _: "updateBotCommands";
  peer: Peer;
  bot_id: bigint;
  commands: Array<BotCommand>;
}

export interface updatePendingJoinRequests {
  _: "updatePendingJoinRequests";
  peer: Peer;
  requests_pending: number;
  recent_requesters: Array<bigint>;
}

export interface updateBotChatInviteRequester {
  _: "updateBotChatInviteRequester";
  peer: Peer;
  date: number;
  user_id: bigint;
  about: string;
  invite: ExportedChatInvite;
  qts: number;
}

export interface updateMessageReactions {
  _: "updateMessageReactions";
  peer: Peer;
  msg_id: number;
  top_msg_id?: number;
  reactions: MessageReactions;
}

export interface updateAttachMenuBots {
  _: "updateAttachMenuBots";
}

export interface updateWebViewResultSent {
  _: "updateWebViewResultSent";
  query_id: bigint;
}

export interface updateBotMenuButton {
  _: "updateBotMenuButton";
  bot_id: bigint;
  button: BotMenuButton;
}

export interface updateSavedRingtones {
  _: "updateSavedRingtones";
}

export interface updateTranscribedAudio {
  _: "updateTranscribedAudio";
  pending?: true;
  peer: Peer;
  msg_id: number;
  transcription_id: bigint;
  text: string;
}

export interface updateReadFeaturedEmojiStickers {
  _: "updateReadFeaturedEmojiStickers";
}

export interface updateUserEmojiStatus {
  _: "updateUserEmojiStatus";
  user_id: bigint;
  emoji_status: EmojiStatus;
}

export interface updateRecentEmojiStatuses {
  _: "updateRecentEmojiStatuses";
}

export interface updateRecentReactions {
  _: "updateRecentReactions";
}

export interface updateMoveStickerSetToTop {
  _: "updateMoveStickerSetToTop";
  masks?: true;
  emojis?: true;
  stickerset: bigint;
}

export interface updateMessageExtendedMedia {
  _: "updateMessageExtendedMedia";
  peer: Peer;
  msg_id: number;
  extended_media: Array<MessageExtendedMedia>;
}

export interface updateChannelPinnedTopic {
  _: "updateChannelPinnedTopic";
  pinned?: true;
  channel_id: bigint;
  topic_id: number;
}

export interface updateChannelPinnedTopics {
  _: "updateChannelPinnedTopics";
  channel_id: bigint;
  order?: Array<number>;
}

export interface updateUser {
  _: "updateUser";
  user_id: bigint;
}

export interface updateAutoSaveSettings {
  _: "updateAutoSaveSettings";
}

export interface updateStory {
  _: "updateStory";
  peer: Peer;
  story: StoryItem;
}

export interface updateReadStories {
  _: "updateReadStories";
  peer: Peer;
  max_id: number;
}

export interface updateStoryID {
  _: "updateStoryID";
  id: number;
  random_id: bigint;
}

export interface updateStoriesStealthMode {
  _: "updateStoriesStealthMode";
  stealth_mode: StoriesStealthMode;
}

export interface updateSentStoryReaction {
  _: "updateSentStoryReaction";
  peer: Peer;
  story_id: number;
  reaction: Reaction;
}

export interface updateBotChatBoost {
  _: "updateBotChatBoost";
  peer: Peer;
  boost: Boost;
  qts: number;
}

export interface updateChannelViewForumAsMessages {
  _: "updateChannelViewForumAsMessages";
  channel_id: bigint;
  enabled: boolean;
}

export interface updatePeerWallpaper {
  _: "updatePeerWallpaper";
  wallpaper_overridden?: true;
  peer: Peer;
  wallpaper?: WallPaper;
}

export interface updateBotMessageReaction {
  _: "updateBotMessageReaction";
  peer: Peer;
  msg_id: number;
  date: number;
  actor: Peer;
  old_reactions: Array<Reaction>;
  new_reactions: Array<Reaction>;
  qts: number;
}

export interface updateBotMessageReactions {
  _: "updateBotMessageReactions";
  peer: Peer;
  msg_id: number;
  date: number;
  reactions: Array<ReactionCount>;
  qts: number;
}

export interface updateSavedDialogPinned {
  _: "updateSavedDialogPinned";
  pinned?: true;
  peer: DialogPeer;
}

export interface updatePinnedSavedDialogs {
  _: "updatePinnedSavedDialogs";
  order?: Array<DialogPeer>;
}

export interface updateSavedReactionTags {
  _: "updateSavedReactionTags";
}

export interface updateSmsJob {
  _: "updateSmsJob";
  job_id: string;
}

export interface updateQuickReplies {
  _: "updateQuickReplies";
  quick_replies: Array<QuickReply>;
}

export interface updateNewQuickReply {
  _: "updateNewQuickReply";
  quick_reply: QuickReply;
}

export interface updateDeleteQuickReply {
  _: "updateDeleteQuickReply";
  shortcut_id: number;
}

export interface updateQuickReplyMessage {
  _: "updateQuickReplyMessage";
  message: Message;
}

export interface updateDeleteQuickReplyMessages {
  _: "updateDeleteQuickReplyMessages";
  shortcut_id: number;
  messages: Array<number>;
}

export interface updateBotBusinessConnect {
  _: "updateBotBusinessConnect";
  connection: BotBusinessConnection;
  qts: number;
}

export interface updateBotNewBusinessMessage {
  _: "updateBotNewBusinessMessage";
  connection_id: string;
  message: Message;
  reply_to_message?: Message;
  qts: number;
}

export interface updateBotEditBusinessMessage {
  _: "updateBotEditBusinessMessage";
  connection_id: string;
  message: Message;
  reply_to_message?: Message;
  qts: number;
}

export interface updateBotDeleteBusinessMessage {
  _: "updateBotDeleteBusinessMessage";
  connection_id: string;
  peer: Peer;
  messages: Array<number>;
  qts: number;
}

export interface updateNewStoryReaction {
  _: "updateNewStoryReaction";
  story_id: number;
  peer: Peer;
  reaction: Reaction;
}

export interface updateBroadcastRevenueTransactions {
  _: "updateBroadcastRevenueTransactions";
  peer: Peer;
  balances: BroadcastRevenueBalances;
}

export interface updateStarsBalance {
  _: "updateStarsBalance";
  balance: StarsAmount;
}

export interface updateBusinessBotCallbackQuery {
  _: "updateBusinessBotCallbackQuery";
  query_id: bigint;
  user_id: bigint;
  connection_id: string;
  message: Message;
  reply_to_message?: Message;
  chat_instance: bigint;
  data?: Uint8Array;
}

export interface updateStarsRevenueStatus {
  _: "updateStarsRevenueStatus";
  peer: Peer;
  status: StarsRevenueStatus;
}

export interface updateBotPurchasedPaidMedia {
  _: "updateBotPurchasedPaidMedia";
  user_id: bigint;
  payload: string;
  qts: number;
}

export interface updatePaidReactionPrivacy {
  _: "updatePaidReactionPrivacy";
  private: PaidReactionPrivacy;
}

export interface updates_state {
  _: "updates.state";
  pts: number;
  qts: number;
  date: number;
  seq: number;
  unread_count: number;
}

export interface updates_differenceEmpty {
  _: "updates.differenceEmpty";
  date: number;
  seq: number;
}

export interface updates_difference {
  _: "updates.difference";
  new_messages: Array<Message>;
  new_encrypted_messages: Array<EncryptedMessage>;
  other_updates: Array<Update>;
  chats: Array<Chat>;
  users: Array<User>;
  state: updates_State;
}

export interface updates_differenceSlice {
  _: "updates.differenceSlice";
  new_messages: Array<Message>;
  new_encrypted_messages: Array<EncryptedMessage>;
  other_updates: Array<Update>;
  chats: Array<Chat>;
  users: Array<User>;
  intermediate_state: updates_State;
}

export interface updates_differenceTooLong {
  _: "updates.differenceTooLong";
  pts: number;
}

export interface updatesTooLong {
  _: "updatesTooLong";
}

export interface updateShortMessage {
  _: "updateShortMessage";
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
  fwd_from?: MessageFwdHeader;
  via_bot_id?: bigint;
  reply_to?: MessageReplyHeader;
  entities?: Array<MessageEntity>;
  ttl_period?: number;
}

export interface updateShortChatMessage {
  _: "updateShortChatMessage";
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
  fwd_from?: MessageFwdHeader;
  via_bot_id?: bigint;
  reply_to?: MessageReplyHeader;
  entities?: Array<MessageEntity>;
  ttl_period?: number;
}

export interface updateShort {
  _: "updateShort";
  update: Update;
  date: number;
}

export interface updatesCombined {
  _: "updatesCombined";
  updates: Array<Update>;
  users: Array<User>;
  chats: Array<Chat>;
  date: number;
  seq_start: number;
  seq: number;
}

export interface updates {
  _: "updates";
  updates: Array<Update>;
  users: Array<User>;
  chats: Array<Chat>;
  date: number;
  seq: number;
}

export interface updateShortSentMessage {
  _: "updateShortSentMessage";
  out?: true;
  id: number;
  pts: number;
  pts_count: number;
  date: number;
  media?: MessageMedia;
  entities?: Array<MessageEntity>;
  ttl_period?: number;
}

export interface photos_photos {
  _: "photos.photos";
  photos: Array<Photo>;
  users: Array<User>;
}

export interface photos_photosSlice {
  _: "photos.photosSlice";
  count: number;
  photos: Array<Photo>;
  users: Array<User>;
}

export interface photos_photo {
  _: "photos.photo";
  photo: Photo;
  users: Array<User>;
}

export interface upload_file {
  _: "upload.file";
  type: storage_FileType;
  mtime: number;
  bytes: Uint8Array;
}

export interface upload_fileCdnRedirect {
  _: "upload.fileCdnRedirect";
  dc_id: number;
  file_token: Uint8Array;
  encryption_key: Uint8Array;
  encryption_iv: Uint8Array;
  file_hashes: Array<FileHash>;
}

export interface dcOption {
  _: "dcOption";
  ipv6?: true;
  media_only?: true;
  tcpo_only?: true;
  cdn?: true;
  static?: true;
  this_port_only?: true;
  id: number;
  ip_address: string;
  port: number;
  secret?: Uint8Array;
}

export interface config {
  _: "config";
  default_p2p_contacts?: true;
  preload_featured_stickers?: true;
  revoke_pm_inbox?: true;
  blocked_mode?: true;
  force_try_ipv6?: true;
  date: number;
  expires: number;
  test_mode: boolean;
  this_dc: number;
  dc_options: Array<DcOption>;
  dc_txt_domain_name: string;
  chat_size_max: number;
  megagroup_size_max: number;
  forwarded_count_max: number;
  online_update_period_ms: number;
  offline_blur_timeout_ms: number;
  offline_idle_timeout_ms: number;
  online_cloud_timeout_ms: number;
  notify_cloud_delay_ms: number;
  notify_default_delay_ms: number;
  push_chat_period_ms: number;
  push_chat_limit: number;
  edit_time_limit: number;
  revoke_time_limit: number;
  revoke_pm_time_limit: number;
  rating_e_decay: number;
  stickers_recent_limit: number;
  channels_read_media_period: number;
  tmp_sessions?: number;
  call_receive_timeout_ms: number;
  call_ring_timeout_ms: number;
  call_connect_timeout_ms: number;
  call_packet_timeout_ms: number;
  me_url_prefix: string;
  autoupdate_url_prefix?: string;
  gif_search_username?: string;
  venue_search_username?: string;
  img_search_username?: string;
  static_maps_provider?: string;
  caption_length_max: number;
  message_length_max: number;
  webfile_dc_id: number;
  suggested_lang_code?: string;
  lang_pack_version?: number;
  base_lang_pack_version?: number;
  reactions_default?: Reaction;
  autologin_token?: string;
}

export interface nearestDc {
  _: "nearestDc";
  country: string;
  this_dc: number;
  nearest_dc: number;
}

export interface help_appUpdate {
  _: "help.appUpdate";
  can_not_skip?: true;
  id: number;
  version: string;
  text: string;
  entities: Array<MessageEntity>;
  document?: Document;
  url?: string;
  sticker?: Document;
}

export interface help_noAppUpdate {
  _: "help.noAppUpdate";
}

export interface help_inviteText {
  _: "help.inviteText";
  message: string;
}

export interface encryptedChatEmpty {
  _: "encryptedChatEmpty";
  id: number;
}

export interface encryptedChatWaiting {
  _: "encryptedChatWaiting";
  id: number;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
}

export interface encryptedChatRequested {
  _: "encryptedChatRequested";
  folder_id?: number;
  id: number;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  g_a: Uint8Array;
}

export interface encryptedChat {
  _: "encryptedChat";
  id: number;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  g_a_or_b: Uint8Array;
  key_fingerprint: bigint;
}

export interface encryptedChatDiscarded {
  _: "encryptedChatDiscarded";
  history_deleted?: true;
  id: number;
}

export interface inputEncryptedChat {
  _: "inputEncryptedChat";
  chat_id: number;
  access_hash: bigint;
}

export interface encryptedFileEmpty {
  _: "encryptedFileEmpty";
}

export interface encryptedFile {
  _: "encryptedFile";
  id: bigint;
  access_hash: bigint;
  size: bigint;
  dc_id: number;
  key_fingerprint: number;
}

export interface inputEncryptedFileEmpty {
  _: "inputEncryptedFileEmpty";
}

export interface inputEncryptedFileUploaded {
  _: "inputEncryptedFileUploaded";
  id: bigint;
  parts: number;
  md5_checksum: string;
  key_fingerprint: number;
}

export interface inputEncryptedFile {
  _: "inputEncryptedFile";
  id: bigint;
  access_hash: bigint;
}

export interface inputEncryptedFileBigUploaded {
  _: "inputEncryptedFileBigUploaded";
  id: bigint;
  parts: number;
  key_fingerprint: number;
}

export interface encryptedMessage {
  _: "encryptedMessage";
  random_id: bigint;
  chat_id: number;
  date: number;
  bytes: Uint8Array;
  file: EncryptedFile;
}

export interface encryptedMessageService {
  _: "encryptedMessageService";
  random_id: bigint;
  chat_id: number;
  date: number;
  bytes: Uint8Array;
}

export interface messages_dhConfigNotModified {
  _: "messages.dhConfigNotModified";
  random: Uint8Array;
}

export interface messages_dhConfig {
  _: "messages.dhConfig";
  g: number;
  p: Uint8Array;
  version: number;
  random: Uint8Array;
}

export interface messages_sentEncryptedMessage {
  _: "messages.sentEncryptedMessage";
  date: number;
}

export interface messages_sentEncryptedFile {
  _: "messages.sentEncryptedFile";
  date: number;
  file: EncryptedFile;
}

export interface inputDocumentEmpty {
  _: "inputDocumentEmpty";
}

export interface inputDocument {
  _: "inputDocument";
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
}

export interface documentEmpty {
  _: "documentEmpty";
  id: bigint;
}

export interface document {
  _: "document";
  id: bigint;
  access_hash: bigint;
  file_reference: Uint8Array;
  date: number;
  mime_type: string;
  size: bigint;
  thumbs?: Array<PhotoSize>;
  video_thumbs?: Array<VideoSize>;
  dc_id: number;
  attributes: Array<DocumentAttribute>;
}

export interface help_support {
  _: "help.support";
  phone_number: string;
  user: User;
}

export interface notifyPeer {
  _: "notifyPeer";
  peer: Peer;
}

export interface notifyUsers {
  _: "notifyUsers";
}

export interface notifyChats {
  _: "notifyChats";
}

export interface notifyBroadcasts {
  _: "notifyBroadcasts";
}

export interface notifyForumTopic {
  _: "notifyForumTopic";
  peer: Peer;
  top_msg_id: number;
}

export interface sendMessageTypingAction {
  _: "sendMessageTypingAction";
}

export interface sendMessageCancelAction {
  _: "sendMessageCancelAction";
}

export interface sendMessageRecordVideoAction {
  _: "sendMessageRecordVideoAction";
}

export interface sendMessageUploadVideoAction {
  _: "sendMessageUploadVideoAction";
  progress: number;
}

export interface sendMessageRecordAudioAction {
  _: "sendMessageRecordAudioAction";
}

export interface sendMessageUploadAudioAction {
  _: "sendMessageUploadAudioAction";
  progress: number;
}

export interface sendMessageUploadPhotoAction {
  _: "sendMessageUploadPhotoAction";
  progress: number;
}

export interface sendMessageUploadDocumentAction {
  _: "sendMessageUploadDocumentAction";
  progress: number;
}

export interface sendMessageGeoLocationAction {
  _: "sendMessageGeoLocationAction";
}

export interface sendMessageChooseContactAction {
  _: "sendMessageChooseContactAction";
}

export interface sendMessageGamePlayAction {
  _: "sendMessageGamePlayAction";
}

export interface sendMessageRecordRoundAction {
  _: "sendMessageRecordRoundAction";
}

export interface sendMessageUploadRoundAction {
  _: "sendMessageUploadRoundAction";
  progress: number;
}

export interface speakingInGroupCallAction {
  _: "speakingInGroupCallAction";
}

export interface sendMessageHistoryImportAction {
  _: "sendMessageHistoryImportAction";
  progress: number;
}

export interface sendMessageChooseStickerAction {
  _: "sendMessageChooseStickerAction";
}

export interface sendMessageEmojiInteraction {
  _: "sendMessageEmojiInteraction";
  emoticon: string;
  msg_id: number;
  interaction: DataJSON;
}

export interface sendMessageEmojiInteractionSeen {
  _: "sendMessageEmojiInteractionSeen";
  emoticon: string;
}

export interface contacts_found {
  _: "contacts.found";
  my_results: Array<Peer>;
  results: Array<Peer>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface inputPrivacyKeyStatusTimestamp {
  _: "inputPrivacyKeyStatusTimestamp";
}

export interface inputPrivacyKeyChatInvite {
  _: "inputPrivacyKeyChatInvite";
}

export interface inputPrivacyKeyPhoneCall {
  _: "inputPrivacyKeyPhoneCall";
}

export interface inputPrivacyKeyPhoneP2P {
  _: "inputPrivacyKeyPhoneP2P";
}

export interface inputPrivacyKeyForwards {
  _: "inputPrivacyKeyForwards";
}

export interface inputPrivacyKeyProfilePhoto {
  _: "inputPrivacyKeyProfilePhoto";
}

export interface inputPrivacyKeyPhoneNumber {
  _: "inputPrivacyKeyPhoneNumber";
}

export interface inputPrivacyKeyAddedByPhone {
  _: "inputPrivacyKeyAddedByPhone";
}

export interface inputPrivacyKeyVoiceMessages {
  _: "inputPrivacyKeyVoiceMessages";
}

export interface inputPrivacyKeyAbout {
  _: "inputPrivacyKeyAbout";
}

export interface inputPrivacyKeyBirthday {
  _: "inputPrivacyKeyBirthday";
}

export interface inputPrivacyKeyStarGiftsAutoSave {
  _: "inputPrivacyKeyStarGiftsAutoSave";
}

export interface inputPrivacyKeyNoPaidMessages {
  _: "inputPrivacyKeyNoPaidMessages";
}

export interface privacyKeyStatusTimestamp {
  _: "privacyKeyStatusTimestamp";
}

export interface privacyKeyChatInvite {
  _: "privacyKeyChatInvite";
}

export interface privacyKeyPhoneCall {
  _: "privacyKeyPhoneCall";
}

export interface privacyKeyPhoneP2P {
  _: "privacyKeyPhoneP2P";
}

export interface privacyKeyForwards {
  _: "privacyKeyForwards";
}

export interface privacyKeyProfilePhoto {
  _: "privacyKeyProfilePhoto";
}

export interface privacyKeyPhoneNumber {
  _: "privacyKeyPhoneNumber";
}

export interface privacyKeyAddedByPhone {
  _: "privacyKeyAddedByPhone";
}

export interface privacyKeyVoiceMessages {
  _: "privacyKeyVoiceMessages";
}

export interface privacyKeyAbout {
  _: "privacyKeyAbout";
}

export interface privacyKeyBirthday {
  _: "privacyKeyBirthday";
}

export interface privacyKeyStarGiftsAutoSave {
  _: "privacyKeyStarGiftsAutoSave";
}

export interface privacyKeyNoPaidMessages {
  _: "privacyKeyNoPaidMessages";
}

export interface inputPrivacyValueAllowContacts {
  _: "inputPrivacyValueAllowContacts";
}

export interface inputPrivacyValueAllowAll {
  _: "inputPrivacyValueAllowAll";
}

export interface inputPrivacyValueAllowUsers {
  _: "inputPrivacyValueAllowUsers";
  users: Array<InputUser>;
}

export interface inputPrivacyValueDisallowContacts {
  _: "inputPrivacyValueDisallowContacts";
}

export interface inputPrivacyValueDisallowAll {
  _: "inputPrivacyValueDisallowAll";
}

export interface inputPrivacyValueDisallowUsers {
  _: "inputPrivacyValueDisallowUsers";
  users: Array<InputUser>;
}

export interface inputPrivacyValueAllowChatParticipants {
  _: "inputPrivacyValueAllowChatParticipants";
  chats: Array<bigint>;
}

export interface inputPrivacyValueDisallowChatParticipants {
  _: "inputPrivacyValueDisallowChatParticipants";
  chats: Array<bigint>;
}

export interface inputPrivacyValueAllowCloseFriends {
  _: "inputPrivacyValueAllowCloseFriends";
}

export interface inputPrivacyValueAllowPremium {
  _: "inputPrivacyValueAllowPremium";
}

export interface inputPrivacyValueAllowBots {
  _: "inputPrivacyValueAllowBots";
}

export interface inputPrivacyValueDisallowBots {
  _: "inputPrivacyValueDisallowBots";
}

export interface privacyValueAllowContacts {
  _: "privacyValueAllowContacts";
}

export interface privacyValueAllowAll {
  _: "privacyValueAllowAll";
}

export interface privacyValueAllowUsers {
  _: "privacyValueAllowUsers";
  users: Array<bigint>;
}

export interface privacyValueDisallowContacts {
  _: "privacyValueDisallowContacts";
}

export interface privacyValueDisallowAll {
  _: "privacyValueDisallowAll";
}

export interface privacyValueDisallowUsers {
  _: "privacyValueDisallowUsers";
  users: Array<bigint>;
}

export interface privacyValueAllowChatParticipants {
  _: "privacyValueAllowChatParticipants";
  chats: Array<bigint>;
}

export interface privacyValueDisallowChatParticipants {
  _: "privacyValueDisallowChatParticipants";
  chats: Array<bigint>;
}

export interface privacyValueAllowCloseFriends {
  _: "privacyValueAllowCloseFriends";
}

export interface privacyValueAllowPremium {
  _: "privacyValueAllowPremium";
}

export interface privacyValueAllowBots {
  _: "privacyValueAllowBots";
}

export interface privacyValueDisallowBots {
  _: "privacyValueDisallowBots";
}

export interface account_privacyRules {
  _: "account.privacyRules";
  rules: Array<PrivacyRule>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface accountDaysTTL {
  _: "accountDaysTTL";
  days: number;
}

export interface documentAttributeImageSize {
  _: "documentAttributeImageSize";
  w: number;
  h: number;
}

export interface documentAttributeAnimated {
  _: "documentAttributeAnimated";
}

export interface documentAttributeSticker {
  _: "documentAttributeSticker";
  mask?: true;
  alt: string;
  stickerset: InputStickerSet;
  mask_coords?: MaskCoords;
}

export interface documentAttributeVideo {
  _: "documentAttributeVideo";
  round_message?: true;
  supports_streaming?: true;
  nosound?: true;
  duration: number;
  w: number;
  h: number;
  preload_prefix_size?: number;
  video_start_ts?: number;
  video_codec?: string;
}

export interface documentAttributeAudio {
  _: "documentAttributeAudio";
  voice?: true;
  duration: number;
  title?: string;
  performer?: string;
  waveform?: Uint8Array;
}

export interface documentAttributeFilename {
  _: "documentAttributeFilename";
  file_name: string;
}

export interface documentAttributeHasStickers {
  _: "documentAttributeHasStickers";
}

export interface documentAttributeCustomEmoji {
  _: "documentAttributeCustomEmoji";
  free?: true;
  text_color?: true;
  alt: string;
  stickerset: InputStickerSet;
}

export interface messages_stickersNotModified {
  _: "messages.stickersNotModified";
}

export interface messages_stickers {
  _: "messages.stickers";
  hash: bigint;
  stickers: Array<Document>;
}

export interface stickerPack {
  _: "stickerPack";
  emoticon: string;
  documents: Array<bigint>;
}

export interface messages_allStickersNotModified {
  _: "messages.allStickersNotModified";
}

export interface messages_allStickers {
  _: "messages.allStickers";
  hash: bigint;
  sets: Array<StickerSet>;
}

export interface messages_affectedMessages {
  _: "messages.affectedMessages";
  pts: number;
  pts_count: number;
}

export interface webPageEmpty {
  _: "webPageEmpty";
  id: bigint;
  url?: string;
}

export interface webPagePending {
  _: "webPagePending";
  id: bigint;
  url?: string;
  date: number;
}

export interface webPage {
  _: "webPage";
  has_large_media?: true;
  video_cover_photo?: true;
  id: bigint;
  url: string;
  display_url: string;
  hash: number;
  type?: string;
  site_name?: string;
  title?: string;
  description?: string;
  photo?: Photo;
  embed_url?: string;
  embed_type?: string;
  embed_width?: number;
  embed_height?: number;
  duration?: number;
  author?: string;
  document?: Document;
  cached_page?: Page;
  attributes?: Array<WebPageAttribute>;
}

export interface webPageNotModified {
  _: "webPageNotModified";
  cached_page_views?: number;
}

export interface authorization {
  _: "authorization";
  current?: true;
  official_app?: true;
  password_pending?: true;
  encrypted_requests_disabled?: true;
  call_requests_disabled?: true;
  unconfirmed?: true;
  hash: bigint;
  device_model: string;
  platform: string;
  system_version: string;
  api_id: number;
  app_name: string;
  app_version: string;
  date_created: number;
  date_active: number;
  ip: string;
  country: string;
  region: string;
}

export interface account_authorizations {
  _: "account.authorizations";
  authorization_ttl_days: number;
  authorizations: Array<Authorization>;
}

export interface account_password {
  _: "account.password";
  has_recovery?: true;
  has_secure_values?: true;
  has_password?: true;
  current_algo?: PasswordKdfAlgo;
  srp_B?: Uint8Array;
  srp_id?: bigint;
  hint?: string;
  email_unconfirmed_pattern?: string;
  new_algo: PasswordKdfAlgo;
  new_secure_algo: SecurePasswordKdfAlgo;
  secure_random: Uint8Array;
  pending_reset_date?: number;
  login_email_pattern?: string;
}

export interface account_passwordSettings {
  _: "account.passwordSettings";
  email?: string;
  secure_settings?: SecureSecretSettings;
}

export interface account_passwordInputSettings {
  _: "account.passwordInputSettings";
  new_algo?: PasswordKdfAlgo;
  new_password_hash?: Uint8Array;
  hint?: string;
  email?: string;
  new_secure_settings?: SecureSecretSettings;
}

export interface auth_passwordRecovery {
  _: "auth.passwordRecovery";
  email_pattern: string;
}

export interface receivedNotifyMessage {
  _: "receivedNotifyMessage";
  id: number;
  flags: number;
}

export interface chatInviteExported {
  _: "chatInviteExported";
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
  subscription_expired?: number;
  title?: string;
  subscription_pricing?: StarsSubscriptionPricing;
}

export interface chatInvitePublicJoinRequests {
  _: "chatInvitePublicJoinRequests";
}

export interface chatInviteAlready {
  _: "chatInviteAlready";
  chat: Chat;
}

export interface chatInvite {
  _: "chatInvite";
  channel?: true;
  broadcast?: true;
  public?: true;
  megagroup?: true;
  request_needed?: true;
  verified?: true;
  scam?: true;
  fake?: true;
  can_refulfill_subscription?: true;
  title: string;
  about?: string;
  photo: Photo;
  participants_count: number;
  participants?: Array<User>;
  color: number;
  subscription_pricing?: StarsSubscriptionPricing;
  subscription_form_id?: bigint;
  bot_verification?: BotVerification;
}

export interface chatInvitePeek {
  _: "chatInvitePeek";
  chat: Chat;
  expires: number;
}

export interface inputStickerSetEmpty {
  _: "inputStickerSetEmpty";
}

export interface inputStickerSetID {
  _: "inputStickerSetID";
  id: bigint;
  access_hash: bigint;
}

export interface inputStickerSetShortName {
  _: "inputStickerSetShortName";
  short_name: string;
}

export interface inputStickerSetAnimatedEmoji {
  _: "inputStickerSetAnimatedEmoji";
}

export interface inputStickerSetDice {
  _: "inputStickerSetDice";
  emoticon: string;
}

export interface inputStickerSetAnimatedEmojiAnimations {
  _: "inputStickerSetAnimatedEmojiAnimations";
}

export interface inputStickerSetPremiumGifts {
  _: "inputStickerSetPremiumGifts";
}

export interface inputStickerSetEmojiGenericAnimations {
  _: "inputStickerSetEmojiGenericAnimations";
}

export interface inputStickerSetEmojiDefaultStatuses {
  _: "inputStickerSetEmojiDefaultStatuses";
}

export interface inputStickerSetEmojiDefaultTopicIcons {
  _: "inputStickerSetEmojiDefaultTopicIcons";
}

export interface inputStickerSetEmojiChannelDefaultStatuses {
  _: "inputStickerSetEmojiChannelDefaultStatuses";
}

export interface stickerSet {
  _: "stickerSet";
  archived?: true;
  official?: true;
  masks?: true;
  emojis?: true;
  text_color?: true;
  channel_emoji_status?: true;
  creator?: true;
  installed_date?: number;
  id: bigint;
  access_hash: bigint;
  title: string;
  short_name: string;
  thumbs?: Array<PhotoSize>;
  thumb_dc_id?: number;
  thumb_version?: number;
  thumb_document_id?: bigint;
  count: number;
  hash: number;
}

export interface messages_stickerSet {
  _: "messages.stickerSet";
  set: StickerSet;
  packs: Array<StickerPack>;
  keywords: Array<StickerKeyword>;
  documents: Array<Document>;
}

export interface messages_stickerSetNotModified {
  _: "messages.stickerSetNotModified";
}

export interface botCommand {
  _: "botCommand";
  command: string;
  description: string;
}

export interface botInfo {
  _: "botInfo";
  has_preview_medias?: true;
  user_id?: bigint;
  description?: string;
  description_photo?: Photo;
  description_document?: Document;
  commands?: Array<BotCommand>;
  menu_button?: BotMenuButton;
  privacy_policy_url?: string;
  app_settings?: BotAppSettings;
  verifier_settings?: BotVerifierSettings;
}

export interface keyboardButton {
  _: "keyboardButton";
  text: string;
}

export interface keyboardButtonUrl {
  _: "keyboardButtonUrl";
  text: string;
  url: string;
}

export interface keyboardButtonCallback {
  _: "keyboardButtonCallback";
  requires_password?: true;
  text: string;
  data: Uint8Array;
}

export interface keyboardButtonRequestPhone {
  _: "keyboardButtonRequestPhone";
  text: string;
}

export interface keyboardButtonRequestGeoLocation {
  _: "keyboardButtonRequestGeoLocation";
  text: string;
}

export interface keyboardButtonSwitchInline {
  _: "keyboardButtonSwitchInline";
  same_peer?: true;
  text: string;
  query: string;
  peer_types?: Array<InlineQueryPeerType>;
}

export interface keyboardButtonGame {
  _: "keyboardButtonGame";
  text: string;
}

export interface keyboardButtonBuy {
  _: "keyboardButtonBuy";
  text: string;
}

export interface keyboardButtonUrlAuth {
  _: "keyboardButtonUrlAuth";
  text: string;
  fwd_text?: string;
  url: string;
  button_id: number;
}

export interface inputKeyboardButtonUrlAuth {
  _: "inputKeyboardButtonUrlAuth";
  request_write_access?: true;
  text: string;
  fwd_text?: string;
  url: string;
  bot: InputUser;
}

export interface keyboardButtonRequestPoll {
  _: "keyboardButtonRequestPoll";
  quiz?: boolean;
  text: string;
}

export interface inputKeyboardButtonUserProfile {
  _: "inputKeyboardButtonUserProfile";
  text: string;
  user_id: InputUser;
}

export interface keyboardButtonUserProfile {
  _: "keyboardButtonUserProfile";
  text: string;
  user_id: bigint;
}

export interface keyboardButtonWebView {
  _: "keyboardButtonWebView";
  text: string;
  url: string;
}

export interface keyboardButtonSimpleWebView {
  _: "keyboardButtonSimpleWebView";
  text: string;
  url: string;
}

export interface keyboardButtonRequestPeer {
  _: "keyboardButtonRequestPeer";
  text: string;
  button_id: number;
  peer_type: RequestPeerType;
  max_quantity: number;
}

export interface inputKeyboardButtonRequestPeer {
  _: "inputKeyboardButtonRequestPeer";
  name_requested?: true;
  username_requested?: true;
  photo_requested?: true;
  text: string;
  button_id: number;
  peer_type: RequestPeerType;
  max_quantity: number;
}

export interface keyboardButtonCopy {
  _: "keyboardButtonCopy";
  text: string;
  copy_text: string;
}

export interface keyboardButtonRow {
  _: "keyboardButtonRow";
  buttons: Array<KeyboardButton>;
}

export interface replyKeyboardHide {
  _: "replyKeyboardHide";
  selective?: true;
}

export interface replyKeyboardForceReply {
  _: "replyKeyboardForceReply";
  single_use?: true;
  selective?: true;
  placeholder?: string;
}

export interface replyKeyboardMarkup {
  _: "replyKeyboardMarkup";
  resize?: true;
  single_use?: true;
  selective?: true;
  persistent?: true;
  rows: Array<KeyboardButtonRow>;
  placeholder?: string;
}

export interface replyInlineMarkup {
  _: "replyInlineMarkup";
  rows: Array<KeyboardButtonRow>;
}

export interface messageEntityUnknown {
  _: "messageEntityUnknown";
  offset: number;
  length: number;
}

export interface messageEntityMention {
  _: "messageEntityMention";
  offset: number;
  length: number;
}

export interface messageEntityHashtag {
  _: "messageEntityHashtag";
  offset: number;
  length: number;
}

export interface messageEntityBotCommand {
  _: "messageEntityBotCommand";
  offset: number;
  length: number;
}

export interface messageEntityUrl {
  _: "messageEntityUrl";
  offset: number;
  length: number;
}

export interface messageEntityEmail {
  _: "messageEntityEmail";
  offset: number;
  length: number;
}

export interface messageEntityBold {
  _: "messageEntityBold";
  offset: number;
  length: number;
}

export interface messageEntityItalic {
  _: "messageEntityItalic";
  offset: number;
  length: number;
}

export interface messageEntityCode {
  _: "messageEntityCode";
  offset: number;
  length: number;
}

export interface messageEntityPre {
  _: "messageEntityPre";
  offset: number;
  length: number;
  language: string;
}

export interface messageEntityTextUrl {
  _: "messageEntityTextUrl";
  offset: number;
  length: number;
  url: string;
}

export interface messageEntityMentionName {
  _: "messageEntityMentionName";
  offset: number;
  length: number;
  user_id: bigint;
}

export interface inputMessageEntityMentionName {
  _: "inputMessageEntityMentionName";
  offset: number;
  length: number;
  user_id: InputUser;
}

export interface messageEntityPhone {
  _: "messageEntityPhone";
  offset: number;
  length: number;
}

export interface messageEntityCashtag {
  _: "messageEntityCashtag";
  offset: number;
  length: number;
}

export interface messageEntityUnderline {
  _: "messageEntityUnderline";
  offset: number;
  length: number;
}

export interface messageEntityStrike {
  _: "messageEntityStrike";
  offset: number;
  length: number;
}

export interface messageEntityBankCard {
  _: "messageEntityBankCard";
  offset: number;
  length: number;
}

export interface messageEntitySpoiler {
  _: "messageEntitySpoiler";
  offset: number;
  length: number;
}

export interface messageEntityCustomEmoji {
  _: "messageEntityCustomEmoji";
  offset: number;
  length: number;
  document_id: bigint;
}

export interface messageEntityBlockquote {
  _: "messageEntityBlockquote";
  collapsed?: true;
  offset: number;
  length: number;
}

export interface inputChannelEmpty {
  _: "inputChannelEmpty";
}

export interface inputChannel {
  _: "inputChannel";
  channel_id: bigint;
  access_hash: bigint;
}

export interface inputChannelFromMessage {
  _: "inputChannelFromMessage";
  peer: InputPeer;
  msg_id: number;
  channel_id: bigint;
}

export interface contacts_resolvedPeer {
  _: "contacts.resolvedPeer";
  peer: Peer;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messageRange {
  _: "messageRange";
  min_id: number;
  max_id: number;
}

export interface updates_channelDifferenceEmpty {
  _: "updates.channelDifferenceEmpty";
  final?: true;
  pts: number;
  timeout?: number;
}

export interface updates_channelDifferenceTooLong {
  _: "updates.channelDifferenceTooLong";
  final?: true;
  timeout?: number;
  dialog: Dialog;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface updates_channelDifference {
  _: "updates.channelDifference";
  final?: true;
  pts: number;
  timeout?: number;
  new_messages: Array<Message>;
  other_updates: Array<Update>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface channelMessagesFilterEmpty {
  _: "channelMessagesFilterEmpty";
}

export interface channelMessagesFilter {
  _: "channelMessagesFilter";
  exclude_new_messages?: true;
  ranges: Array<MessageRange>;
}

export interface channelParticipant {
  _: "channelParticipant";
  user_id: bigint;
  date: number;
  subscription_until_date?: number;
}

export interface channelParticipantSelf {
  _: "channelParticipantSelf";
  via_request?: true;
  user_id: bigint;
  inviter_id: bigint;
  date: number;
  subscription_until_date?: number;
}

export interface channelParticipantCreator {
  _: "channelParticipantCreator";
  user_id: bigint;
  admin_rights: ChatAdminRights;
  rank?: string;
}

export interface channelParticipantAdmin {
  _: "channelParticipantAdmin";
  can_edit?: true;
  self?: true;
  user_id: bigint;
  inviter_id?: bigint;
  promoted_by: bigint;
  date: number;
  admin_rights: ChatAdminRights;
  rank?: string;
}

export interface channelParticipantBanned {
  _: "channelParticipantBanned";
  left?: true;
  peer: Peer;
  kicked_by: bigint;
  date: number;
  banned_rights: ChatBannedRights;
}

export interface channelParticipantLeft {
  _: "channelParticipantLeft";
  peer: Peer;
}

export interface channelParticipantsRecent {
  _: "channelParticipantsRecent";
}

export interface channelParticipantsAdmins {
  _: "channelParticipantsAdmins";
}

export interface channelParticipantsKicked {
  _: "channelParticipantsKicked";
  q: string;
}

export interface channelParticipantsBots {
  _: "channelParticipantsBots";
}

export interface channelParticipantsBanned {
  _: "channelParticipantsBanned";
  q: string;
}

export interface channelParticipantsSearch {
  _: "channelParticipantsSearch";
  q: string;
}

export interface channelParticipantsContacts {
  _: "channelParticipantsContacts";
  q: string;
}

export interface channelParticipantsMentions {
  _: "channelParticipantsMentions";
  q?: string;
  top_msg_id?: number;
}

export interface channels_channelParticipants {
  _: "channels.channelParticipants";
  count: number;
  participants: Array<ChannelParticipant>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface channels_channelParticipantsNotModified {
  _: "channels.channelParticipantsNotModified";
}

export interface channels_channelParticipant {
  _: "channels.channelParticipant";
  participant: ChannelParticipant;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface help_termsOfService {
  _: "help.termsOfService";
  popup?: true;
  id: DataJSON;
  text: string;
  entities: Array<MessageEntity>;
  min_age_confirm?: number;
}

export interface messages_savedGifsNotModified {
  _: "messages.savedGifsNotModified";
}

export interface messages_savedGifs {
  _: "messages.savedGifs";
  hash: bigint;
  gifs: Array<Document>;
}

export interface inputBotInlineMessageMediaAuto {
  _: "inputBotInlineMessageMediaAuto";
  invert_media?: true;
  message: string;
  entities?: Array<MessageEntity>;
  reply_markup?: ReplyMarkup;
}

export interface inputBotInlineMessageText {
  _: "inputBotInlineMessageText";
  no_webpage?: true;
  invert_media?: true;
  message: string;
  entities?: Array<MessageEntity>;
  reply_markup?: ReplyMarkup;
}

export interface inputBotInlineMessageMediaGeo {
  _: "inputBotInlineMessageMediaGeo";
  geo_point: InputGeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;
  reply_markup?: ReplyMarkup;
}

export interface inputBotInlineMessageMediaVenue {
  _: "inputBotInlineMessageMediaVenue";
  geo_point: InputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
  reply_markup?: ReplyMarkup;
}

export interface inputBotInlineMessageMediaContact {
  _: "inputBotInlineMessageMediaContact";
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  reply_markup?: ReplyMarkup;
}

export interface inputBotInlineMessageGame {
  _: "inputBotInlineMessageGame";
  reply_markup?: ReplyMarkup;
}

export interface inputBotInlineMessageMediaInvoice {
  _: "inputBotInlineMessageMediaInvoice";
  title: string;
  description: string;
  photo?: InputWebDocument;
  invoice: Invoice;
  payload: Uint8Array;
  provider: string;
  provider_data: DataJSON;
  reply_markup?: ReplyMarkup;
}

export interface inputBotInlineMessageMediaWebPage {
  _: "inputBotInlineMessageMediaWebPage";
  invert_media?: true;
  force_large_media?: true;
  force_small_media?: true;
  optional?: true;
  message: string;
  entities?: Array<MessageEntity>;
  url: string;
  reply_markup?: ReplyMarkup;
}

export interface inputBotInlineResult {
  _: "inputBotInlineResult";
  id: string;
  type: string;
  title?: string;
  description?: string;
  url?: string;
  thumb?: InputWebDocument;
  content?: InputWebDocument;
  send_message: InputBotInlineMessage;
}

export interface inputBotInlineResultPhoto {
  _: "inputBotInlineResultPhoto";
  id: string;
  type: string;
  photo: InputPhoto;
  send_message: InputBotInlineMessage;
}

export interface inputBotInlineResultDocument {
  _: "inputBotInlineResultDocument";
  id: string;
  type: string;
  title?: string;
  description?: string;
  document: InputDocument;
  send_message: InputBotInlineMessage;
}

export interface inputBotInlineResultGame {
  _: "inputBotInlineResultGame";
  id: string;
  short_name: string;
  send_message: InputBotInlineMessage;
}

export interface botInlineMessageMediaAuto {
  _: "botInlineMessageMediaAuto";
  invert_media?: true;
  message: string;
  entities?: Array<MessageEntity>;
  reply_markup?: ReplyMarkup;
}

export interface botInlineMessageText {
  _: "botInlineMessageText";
  no_webpage?: true;
  invert_media?: true;
  message: string;
  entities?: Array<MessageEntity>;
  reply_markup?: ReplyMarkup;
}

export interface botInlineMessageMediaGeo {
  _: "botInlineMessageMediaGeo";
  geo: GeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;
  reply_markup?: ReplyMarkup;
}

export interface botInlineMessageMediaVenue {
  _: "botInlineMessageMediaVenue";
  geo: GeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
  reply_markup?: ReplyMarkup;
}

export interface botInlineMessageMediaContact {
  _: "botInlineMessageMediaContact";
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  reply_markup?: ReplyMarkup;
}

export interface botInlineMessageMediaInvoice {
  _: "botInlineMessageMediaInvoice";
  shipping_address_requested?: true;
  test?: true;
  title: string;
  description: string;
  photo?: WebDocument;
  currency: string;
  total_amount: bigint;
  reply_markup?: ReplyMarkup;
}

export interface botInlineMessageMediaWebPage {
  _: "botInlineMessageMediaWebPage";
  invert_media?: true;
  force_large_media?: true;
  force_small_media?: true;
  manual?: true;
  safe?: true;
  message: string;
  entities?: Array<MessageEntity>;
  url: string;
  reply_markup?: ReplyMarkup;
}

export interface botInlineResult {
  _: "botInlineResult";
  id: string;
  type: string;
  title?: string;
  description?: string;
  url?: string;
  thumb?: WebDocument;
  content?: WebDocument;
  send_message: BotInlineMessage;
}

export interface botInlineMediaResult {
  _: "botInlineMediaResult";
  id: string;
  type: string;
  photo?: Photo;
  document?: Document;
  title?: string;
  description?: string;
  send_message: BotInlineMessage;
}

export interface messages_botResults {
  _: "messages.botResults";
  gallery?: true;
  query_id: bigint;
  next_offset?: string;
  switch_pm?: InlineBotSwitchPM;
  switch_webview?: InlineBotWebView;
  results: Array<BotInlineResult>;
  cache_time: number;
  users: Array<User>;
}

export interface exportedMessageLink {
  _: "exportedMessageLink";
  link: string;
  html: string;
}

export interface messageFwdHeader {
  _: "messageFwdHeader";
  imported?: true;
  saved_out?: true;
  from_id?: Peer;
  from_name?: string;
  date: number;
  channel_post?: number;
  post_author?: string;
  saved_from_peer?: Peer;
  saved_from_msg_id?: number;
  saved_from_id?: Peer;
  saved_from_name?: string;
  saved_date?: number;
  psa_type?: string;
}

export interface auth_codeTypeSms {
  _: "auth.codeTypeSms";
}

export interface auth_codeTypeCall {
  _: "auth.codeTypeCall";
}

export interface auth_codeTypeFlashCall {
  _: "auth.codeTypeFlashCall";
}

export interface auth_codeTypeMissedCall {
  _: "auth.codeTypeMissedCall";
}

export interface auth_codeTypeFragmentSms {
  _: "auth.codeTypeFragmentSms";
}

export interface auth_sentCodeTypeApp {
  _: "auth.sentCodeTypeApp";
  length: number;
}

export interface auth_sentCodeTypeSms {
  _: "auth.sentCodeTypeSms";
  length: number;
}

export interface auth_sentCodeTypeCall {
  _: "auth.sentCodeTypeCall";
  length: number;
}

export interface auth_sentCodeTypeFlashCall {
  _: "auth.sentCodeTypeFlashCall";
  pattern: string;
}

export interface auth_sentCodeTypeMissedCall {
  _: "auth.sentCodeTypeMissedCall";
  prefix: string;
  length: number;
}

export interface auth_sentCodeTypeEmailCode {
  _: "auth.sentCodeTypeEmailCode";
  apple_signin_allowed?: true;
  google_signin_allowed?: true;
  email_pattern: string;
  length: number;
  reset_available_period?: number;
  reset_pending_date?: number;
}

export interface auth_sentCodeTypeSetUpEmailRequired {
  _: "auth.sentCodeTypeSetUpEmailRequired";
  apple_signin_allowed?: true;
  google_signin_allowed?: true;
}

export interface auth_sentCodeTypeFragmentSms {
  _: "auth.sentCodeTypeFragmentSms";
  url: string;
  length: number;
}

export interface auth_sentCodeTypeFirebaseSms {
  _: "auth.sentCodeTypeFirebaseSms";
  nonce?: Uint8Array;
  play_integrity_project_id?: bigint;
  play_integrity_nonce?: Uint8Array;
  receipt?: string;
  push_timeout?: number;
  length: number;
}

export interface auth_sentCodeTypeSmsWord {
  _: "auth.sentCodeTypeSmsWord";
  beginning?: string;
}

export interface auth_sentCodeTypeSmsPhrase {
  _: "auth.sentCodeTypeSmsPhrase";
  beginning?: string;
}

export interface messages_botCallbackAnswer {
  _: "messages.botCallbackAnswer";
  alert?: true;
  has_url?: true;
  native_ui?: true;
  message?: string;
  url?: string;
  cache_time: number;
}

export interface messages_messageEditData {
  _: "messages.messageEditData";
  caption?: true;
}

export interface inputBotInlineMessageID {
  _: "inputBotInlineMessageID";
  dc_id: number;
  id: bigint;
  access_hash: bigint;
}

export interface inputBotInlineMessageID64 {
  _: "inputBotInlineMessageID64";
  dc_id: number;
  owner_id: bigint;
  id: number;
  access_hash: bigint;
}

export interface inlineBotSwitchPM {
  _: "inlineBotSwitchPM";
  text: string;
  start_param: string;
}

export interface messages_peerDialogs {
  _: "messages.peerDialogs";
  dialogs: Array<Dialog>;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
  state: updates_State;
}

export interface topPeer {
  _: "topPeer";
  peer: Peer;
  rating: number;
}

export interface topPeerCategoryBotsPM {
  _: "topPeerCategoryBotsPM";
}

export interface topPeerCategoryBotsInline {
  _: "topPeerCategoryBotsInline";
}

export interface topPeerCategoryCorrespondents {
  _: "topPeerCategoryCorrespondents";
}

export interface topPeerCategoryGroups {
  _: "topPeerCategoryGroups";
}

export interface topPeerCategoryChannels {
  _: "topPeerCategoryChannels";
}

export interface topPeerCategoryPhoneCalls {
  _: "topPeerCategoryPhoneCalls";
}

export interface topPeerCategoryForwardUsers {
  _: "topPeerCategoryForwardUsers";
}

export interface topPeerCategoryForwardChats {
  _: "topPeerCategoryForwardChats";
}

export interface topPeerCategoryBotsApp {
  _: "topPeerCategoryBotsApp";
}

export interface topPeerCategoryPeers {
  _: "topPeerCategoryPeers";
  category: TopPeerCategory;
  count: number;
  peers: Array<TopPeer>;
}

export interface contacts_topPeersNotModified {
  _: "contacts.topPeersNotModified";
}

export interface contacts_topPeers {
  _: "contacts.topPeers";
  categories: Array<TopPeerCategoryPeers>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface contacts_topPeersDisabled {
  _: "contacts.topPeersDisabled";
}

export interface draftMessageEmpty {
  _: "draftMessageEmpty";
  date?: number;
}

export interface draftMessage {
  _: "draftMessage";
  no_webpage?: true;
  invert_media?: true;
  reply_to?: InputReplyTo;
  message: string;
  entities?: Array<MessageEntity>;
  media?: InputMedia;
  date: number;
  effect?: bigint;
}

export interface messages_featuredStickersNotModified {
  _: "messages.featuredStickersNotModified";
  count: number;
}

export interface messages_featuredStickers {
  _: "messages.featuredStickers";
  premium?: true;
  hash: bigint;
  count: number;
  sets: Array<StickerSetCovered>;
  unread: Array<bigint>;
}

export interface messages_recentStickersNotModified {
  _: "messages.recentStickersNotModified";
}

export interface messages_recentStickers {
  _: "messages.recentStickers";
  hash: bigint;
  packs: Array<StickerPack>;
  stickers: Array<Document>;
  dates: Array<number>;
}

export interface messages_archivedStickers {
  _: "messages.archivedStickers";
  count: number;
  sets: Array<StickerSetCovered>;
}

export interface messages_stickerSetInstallResultSuccess {
  _: "messages.stickerSetInstallResultSuccess";
}

export interface messages_stickerSetInstallResultArchive {
  _: "messages.stickerSetInstallResultArchive";
  sets: Array<StickerSetCovered>;
}

export interface stickerSetCovered {
  _: "stickerSetCovered";
  set: StickerSet;
  cover: Document;
}

export interface stickerSetMultiCovered {
  _: "stickerSetMultiCovered";
  set: StickerSet;
  covers: Array<Document>;
}

export interface stickerSetFullCovered {
  _: "stickerSetFullCovered";
  set: StickerSet;
  packs: Array<StickerPack>;
  keywords: Array<StickerKeyword>;
  documents: Array<Document>;
}

export interface stickerSetNoCovered {
  _: "stickerSetNoCovered";
  set: StickerSet;
}

export interface maskCoords {
  _: "maskCoords";
  n: number;
  x: number;
  y: number;
  zoom: number;
}

export interface inputStickeredMediaPhoto {
  _: "inputStickeredMediaPhoto";
  id: InputPhoto;
}

export interface inputStickeredMediaDocument {
  _: "inputStickeredMediaDocument";
  id: InputDocument;
}

export interface game {
  _: "game";
  id: bigint;
  access_hash: bigint;
  short_name: string;
  title: string;
  description: string;
  photo: Photo;
  document?: Document;
}

export interface inputGameID {
  _: "inputGameID";
  id: bigint;
  access_hash: bigint;
}

export interface inputGameShortName {
  _: "inputGameShortName";
  bot_id: InputUser;
  short_name: string;
}

export interface highScore {
  _: "highScore";
  pos: number;
  user_id: bigint;
  score: number;
}

export interface messages_highScores {
  _: "messages.highScores";
  scores: Array<HighScore>;
  users: Array<User>;
}

export interface textEmpty {
  _: "textEmpty";
}

export interface textPlain {
  _: "textPlain";
  text: string;
}

export interface textBold {
  _: "textBold";
  text: RichText;
}

export interface textItalic {
  _: "textItalic";
  text: RichText;
}

export interface textUnderline {
  _: "textUnderline";
  text: RichText;
}

export interface textStrike {
  _: "textStrike";
  text: RichText;
}

export interface textFixed {
  _: "textFixed";
  text: RichText;
}

export interface textUrl {
  _: "textUrl";
  text: RichText;
  url: string;
  webpage_id: bigint;
}

export interface textEmail {
  _: "textEmail";
  text: RichText;
  email: string;
}

export interface textConcat {
  _: "textConcat";
  texts: Array<RichText>;
}

export interface textSubscript {
  _: "textSubscript";
  text: RichText;
}

export interface textSuperscript {
  _: "textSuperscript";
  text: RichText;
}

export interface textMarked {
  _: "textMarked";
  text: RichText;
}

export interface textPhone {
  _: "textPhone";
  text: RichText;
  phone: string;
}

export interface textImage {
  _: "textImage";
  document_id: bigint;
  w: number;
  h: number;
}

export interface textAnchor {
  _: "textAnchor";
  text: RichText;
  name: string;
}

export interface pageBlockUnsupported {
  _: "pageBlockUnsupported";
}

export interface pageBlockTitle {
  _: "pageBlockTitle";
  text: RichText;
}

export interface pageBlockSubtitle {
  _: "pageBlockSubtitle";
  text: RichText;
}

export interface pageBlockAuthorDate {
  _: "pageBlockAuthorDate";
  author: RichText;
  published_date: number;
}

export interface pageBlockHeader {
  _: "pageBlockHeader";
  text: RichText;
}

export interface pageBlockSubheader {
  _: "pageBlockSubheader";
  text: RichText;
}

export interface pageBlockParagraph {
  _: "pageBlockParagraph";
  text: RichText;
}

export interface pageBlockPreformatted {
  _: "pageBlockPreformatted";
  text: RichText;
  language: string;
}

export interface pageBlockFooter {
  _: "pageBlockFooter";
  text: RichText;
}

export interface pageBlockDivider {
  _: "pageBlockDivider";
}

export interface pageBlockAnchor {
  _: "pageBlockAnchor";
  name: string;
}

export interface pageBlockList {
  _: "pageBlockList";
  items: Array<PageListItem>;
}

export interface pageBlockBlockquote {
  _: "pageBlockBlockquote";
  text: RichText;
  caption: RichText;
}

export interface pageBlockPullquote {
  _: "pageBlockPullquote";
  text: RichText;
  caption: RichText;
}

export interface pageBlockPhoto {
  _: "pageBlockPhoto";
  photo_id: bigint;
  caption: PageCaption;
  url?: string;
  webpage_id?: bigint;
}

export interface pageBlockVideo {
  _: "pageBlockVideo";
  autoplay?: true;
  loop?: true;
  video_id: bigint;
  caption: PageCaption;
}

export interface pageBlockCover {
  _: "pageBlockCover";
  cover: PageBlock;
}

export interface pageBlockEmbed {
  _: "pageBlockEmbed";
  full_width?: true;
  allow_scrolling?: true;
  url?: string;
  html?: string;
  poster_photo_id?: bigint;
  w?: number;
  h?: number;
  caption: PageCaption;
}

export interface pageBlockEmbedPost {
  _: "pageBlockEmbedPost";
  url: string;
  webpage_id: bigint;
  author_photo_id: bigint;
  author: string;
  date: number;
  blocks: Array<PageBlock>;
  caption: PageCaption;
}

export interface pageBlockCollage {
  _: "pageBlockCollage";
  items: Array<PageBlock>;
  caption: PageCaption;
}

export interface pageBlockSlideshow {
  _: "pageBlockSlideshow";
  items: Array<PageBlock>;
  caption: PageCaption;
}

export interface pageBlockChannel {
  _: "pageBlockChannel";
  channel: Chat;
}

export interface pageBlockAudio {
  _: "pageBlockAudio";
  audio_id: bigint;
  caption: PageCaption;
}

export interface pageBlockKicker {
  _: "pageBlockKicker";
  text: RichText;
}

export interface pageBlockTable {
  _: "pageBlockTable";
  bordered?: true;
  striped?: true;
  title: RichText;
  rows: Array<PageTableRow>;
}

export interface pageBlockOrderedList {
  _: "pageBlockOrderedList";
  items: Array<PageListOrderedItem>;
}

export interface pageBlockDetails {
  _: "pageBlockDetails";
  open?: true;
  blocks: Array<PageBlock>;
  title: RichText;
}

export interface pageBlockRelatedArticles {
  _: "pageBlockRelatedArticles";
  title: RichText;
  articles: Array<PageRelatedArticle>;
}

export interface pageBlockMap {
  _: "pageBlockMap";
  geo: GeoPoint;
  zoom: number;
  w: number;
  h: number;
  caption: PageCaption;
}

export interface phoneCallDiscardReasonMissed {
  _: "phoneCallDiscardReasonMissed";
}

export interface phoneCallDiscardReasonDisconnect {
  _: "phoneCallDiscardReasonDisconnect";
}

export interface phoneCallDiscardReasonHangup {
  _: "phoneCallDiscardReasonHangup";
}

export interface phoneCallDiscardReasonBusy {
  _: "phoneCallDiscardReasonBusy";
}

export interface phoneCallDiscardReasonAllowGroupCall {
  _: "phoneCallDiscardReasonAllowGroupCall";
  encrypted_key: Uint8Array;
}

export interface dataJSON {
  _: "dataJSON";
  data: string;
}

export interface labeledPrice {
  _: "labeledPrice";
  label: string;
  amount: bigint;
}

export interface invoice {
  _: "invoice";
  test?: true;
  name_requested?: true;
  phone_requested?: true;
  email_requested?: true;
  shipping_address_requested?: true;
  flexible?: true;
  phone_to_provider?: true;
  email_to_provider?: true;
  recurring?: true;
  currency: string;
  prices: Array<LabeledPrice>;
  max_tip_amount?: bigint;
  suggested_tip_amounts?: Array<bigint>;
  terms_url?: string;
  subscription_period?: number;
}

export interface paymentCharge {
  _: "paymentCharge";
  id: string;
  provider_charge_id: string;
}

export interface postAddress {
  _: "postAddress";
  street_line1: string;
  street_line2: string;
  city: string;
  state: string;
  country_iso2: string;
  post_code: string;
}

export interface paymentRequestedInfo {
  _: "paymentRequestedInfo";
  name?: string;
  phone?: string;
  email?: string;
  shipping_address?: PostAddress;
}

export interface paymentSavedCredentialsCard {
  _: "paymentSavedCredentialsCard";
  id: string;
  title: string;
}

export interface webDocument {
  _: "webDocument";
  url: string;
  access_hash: bigint;
  size: number;
  mime_type: string;
  attributes: Array<DocumentAttribute>;
}

export interface webDocumentNoProxy {
  _: "webDocumentNoProxy";
  url: string;
  size: number;
  mime_type: string;
  attributes: Array<DocumentAttribute>;
}

export interface inputWebDocument {
  _: "inputWebDocument";
  url: string;
  size: number;
  mime_type: string;
  attributes: Array<DocumentAttribute>;
}

export interface inputWebFileLocation {
  _: "inputWebFileLocation";
  url: string;
  access_hash: bigint;
}

export interface inputWebFileGeoPointLocation {
  _: "inputWebFileGeoPointLocation";
  geo_point: InputGeoPoint;
  access_hash: bigint;
  w: number;
  h: number;
  zoom: number;
  scale: number;
}

export interface inputWebFileAudioAlbumThumbLocation {
  _: "inputWebFileAudioAlbumThumbLocation";
  small?: true;
  document?: InputDocument;
  title?: string;
  performer?: string;
}

export interface upload_webFile {
  _: "upload.webFile";
  size: number;
  mime_type: string;
  file_type: storage_FileType;
  mtime: number;
  bytes: Uint8Array;
}

export interface payments_paymentForm {
  _: "payments.paymentForm";
  can_save_credentials?: true;
  password_missing?: true;
  form_id: bigint;
  bot_id: bigint;
  title: string;
  description: string;
  photo?: WebDocument;
  invoice: Invoice;
  provider_id: bigint;
  url: string;
  native_provider?: string;
  native_params?: DataJSON;
  additional_methods?: Array<PaymentFormMethod>;
  saved_info?: PaymentRequestedInfo;
  saved_credentials?: Array<PaymentSavedCredentials>;
  users: Array<User>;
}

export interface payments_paymentFormStars {
  _: "payments.paymentFormStars";
  form_id: bigint;
  bot_id: bigint;
  title: string;
  description: string;
  photo?: WebDocument;
  invoice: Invoice;
  users: Array<User>;
}

export interface payments_paymentFormStarGift {
  _: "payments.paymentFormStarGift";
  form_id: bigint;
  invoice: Invoice;
}

export interface payments_validatedRequestedInfo {
  _: "payments.validatedRequestedInfo";
  id?: string;
  shipping_options?: Array<ShippingOption>;
}

export interface payments_paymentResult {
  _: "payments.paymentResult";
  updates: Updates;
}

export interface payments_paymentVerificationNeeded {
  _: "payments.paymentVerificationNeeded";
  url: string;
}

export interface payments_paymentReceipt {
  _: "payments.paymentReceipt";
  date: number;
  bot_id: bigint;
  provider_id: bigint;
  title: string;
  description: string;
  photo?: WebDocument;
  invoice: Invoice;
  info?: PaymentRequestedInfo;
  shipping?: ShippingOption;
  tip_amount?: bigint;
  currency: string;
  total_amount: bigint;
  credentials_title: string;
  users: Array<User>;
}

export interface payments_paymentReceiptStars {
  _: "payments.paymentReceiptStars";
  date: number;
  bot_id: bigint;
  title: string;
  description: string;
  photo?: WebDocument;
  invoice: Invoice;
  currency: string;
  total_amount: bigint;
  transaction_id: string;
  users: Array<User>;
}

export interface payments_savedInfo {
  _: "payments.savedInfo";
  has_saved_credentials?: true;
  saved_info?: PaymentRequestedInfo;
}

export interface inputPaymentCredentialsSaved {
  _: "inputPaymentCredentialsSaved";
  id: string;
  tmp_password: Uint8Array;
}

export interface inputPaymentCredentials {
  _: "inputPaymentCredentials";
  save?: true;
  data: DataJSON;
}

export interface inputPaymentCredentialsApplePay {
  _: "inputPaymentCredentialsApplePay";
  payment_data: DataJSON;
}

export interface inputPaymentCredentialsGooglePay {
  _: "inputPaymentCredentialsGooglePay";
  payment_token: DataJSON;
}

export interface account_tmpPassword {
  _: "account.tmpPassword";
  tmp_password: Uint8Array;
  valid_until: number;
}

export interface shippingOption {
  _: "shippingOption";
  id: string;
  title: string;
  prices: Array<LabeledPrice>;
}

export interface inputStickerSetItem {
  _: "inputStickerSetItem";
  document: InputDocument;
  emoji: string;
  mask_coords?: MaskCoords;
  keywords?: string;
}

export interface inputPhoneCall {
  _: "inputPhoneCall";
  id: bigint;
  access_hash: bigint;
}

export interface phoneCallEmpty {
  _: "phoneCallEmpty";
  id: bigint;
}

export interface phoneCallWaiting {
  _: "phoneCallWaiting";
  video?: true;
  id: bigint;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  protocol: PhoneCallProtocol;
  receive_date?: number;
  conference_call?: InputGroupCall;
}

export interface phoneCallRequested {
  _: "phoneCallRequested";
  video?: true;
  id: bigint;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  g_a_hash: Uint8Array;
  protocol: PhoneCallProtocol;
  conference_call?: InputGroupCall;
}

export interface phoneCallAccepted {
  _: "phoneCallAccepted";
  video?: true;
  id: bigint;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  g_b: Uint8Array;
  protocol: PhoneCallProtocol;
  conference_call?: InputGroupCall;
}

export interface phoneCall {
  _: "phoneCall";
  p2p_allowed?: true;
  video?: true;
  id: bigint;
  access_hash: bigint;
  date: number;
  admin_id: bigint;
  participant_id: bigint;
  g_a_or_b: Uint8Array;
  key_fingerprint: bigint;
  protocol: PhoneCallProtocol;
  connections: Array<PhoneConnection>;
  start_date: number;
  custom_parameters?: DataJSON;
  conference_call?: InputGroupCall;
}

export interface phoneCallDiscarded {
  _: "phoneCallDiscarded";
  need_rating?: true;
  need_debug?: true;
  video?: true;
  id: bigint;
  reason?: PhoneCallDiscardReason;
  duration?: number;
  conference_call?: InputGroupCall;
}

export interface phoneConnection {
  _: "phoneConnection";
  tcp?: true;
  id: bigint;
  ip: string;
  ipv6: string;
  port: number;
  peer_tag: Uint8Array;
}

export interface phoneConnectionWebrtc {
  _: "phoneConnectionWebrtc";
  turn?: true;
  stun?: true;
  id: bigint;
  ip: string;
  ipv6: string;
  port: number;
  username: string;
  password: string;
}

export interface phoneCallProtocol {
  _: "phoneCallProtocol";
  udp_p2p?: true;
  udp_reflector?: true;
  min_layer: number;
  max_layer: number;
  library_versions: Array<string>;
}

export interface phone_phoneCall {
  _: "phone.phoneCall";
  phone_call: PhoneCall;
  users: Array<User>;
}

export interface upload_cdnFileReuploadNeeded {
  _: "upload.cdnFileReuploadNeeded";
  request_token: Uint8Array;
}

export interface upload_cdnFile {
  _: "upload.cdnFile";
  bytes: Uint8Array;
}

export interface cdnPublicKey {
  _: "cdnPublicKey";
  dc_id: number;
  public_key: string;
}

export interface cdnConfig {
  _: "cdnConfig";
  public_keys: Array<CdnPublicKey>;
}

export interface langPackString {
  _: "langPackString";
  key: string;
  value: string;
}

export interface langPackStringPluralized {
  _: "langPackStringPluralized";
  key: string;
  zero_value?: string;
  one_value?: string;
  two_value?: string;
  few_value?: string;
  many_value?: string;
  other_value: string;
}

export interface langPackStringDeleted {
  _: "langPackStringDeleted";
  key: string;
}

export interface langPackDifference {
  _: "langPackDifference";
  lang_code: string;
  from_version: number;
  version: number;
  strings: Array<LangPackString>;
}

export interface langPackLanguage {
  _: "langPackLanguage";
  official?: true;
  rtl?: true;
  beta?: true;
  name: string;
  native_name: string;
  lang_code: string;
  base_lang_code?: string;
  plural_code: string;
  strings_count: number;
  translated_count: number;
  translations_url: string;
}

export interface channelAdminLogEventActionChangeTitle {
  _: "channelAdminLogEventActionChangeTitle";
  prev_value: string;
  new_value: string;
}

export interface channelAdminLogEventActionChangeAbout {
  _: "channelAdminLogEventActionChangeAbout";
  prev_value: string;
  new_value: string;
}

export interface channelAdminLogEventActionChangeUsername {
  _: "channelAdminLogEventActionChangeUsername";
  prev_value: string;
  new_value: string;
}

export interface channelAdminLogEventActionChangePhoto {
  _: "channelAdminLogEventActionChangePhoto";
  prev_photo: Photo;
  new_photo: Photo;
}

export interface channelAdminLogEventActionToggleInvites {
  _: "channelAdminLogEventActionToggleInvites";
  new_value: boolean;
}

export interface channelAdminLogEventActionToggleSignatures {
  _: "channelAdminLogEventActionToggleSignatures";
  new_value: boolean;
}

export interface channelAdminLogEventActionUpdatePinned {
  _: "channelAdminLogEventActionUpdatePinned";
  message: Message;
}

export interface channelAdminLogEventActionEditMessage {
  _: "channelAdminLogEventActionEditMessage";
  prev_message: Message;
  new_message: Message;
}

export interface channelAdminLogEventActionDeleteMessage {
  _: "channelAdminLogEventActionDeleteMessage";
  message: Message;
}

export interface channelAdminLogEventActionParticipantJoin {
  _: "channelAdminLogEventActionParticipantJoin";
}

export interface channelAdminLogEventActionParticipantLeave {
  _: "channelAdminLogEventActionParticipantLeave";
}

export interface channelAdminLogEventActionParticipantInvite {
  _: "channelAdminLogEventActionParticipantInvite";
  participant: ChannelParticipant;
}

export interface channelAdminLogEventActionParticipantToggleBan {
  _: "channelAdminLogEventActionParticipantToggleBan";
  prev_participant: ChannelParticipant;
  new_participant: ChannelParticipant;
}

export interface channelAdminLogEventActionParticipantToggleAdmin {
  _: "channelAdminLogEventActionParticipantToggleAdmin";
  prev_participant: ChannelParticipant;
  new_participant: ChannelParticipant;
}

export interface channelAdminLogEventActionChangeStickerSet {
  _: "channelAdminLogEventActionChangeStickerSet";
  prev_stickerset: InputStickerSet;
  new_stickerset: InputStickerSet;
}

export interface channelAdminLogEventActionTogglePreHistoryHidden {
  _: "channelAdminLogEventActionTogglePreHistoryHidden";
  new_value: boolean;
}

export interface channelAdminLogEventActionDefaultBannedRights {
  _: "channelAdminLogEventActionDefaultBannedRights";
  prev_banned_rights: ChatBannedRights;
  new_banned_rights: ChatBannedRights;
}

export interface channelAdminLogEventActionStopPoll {
  _: "channelAdminLogEventActionStopPoll";
  message: Message;
}

export interface channelAdminLogEventActionChangeLinkedChat {
  _: "channelAdminLogEventActionChangeLinkedChat";
  prev_value: bigint;
  new_value: bigint;
}

export interface channelAdminLogEventActionChangeLocation {
  _: "channelAdminLogEventActionChangeLocation";
  prev_value: ChannelLocation;
  new_value: ChannelLocation;
}

export interface channelAdminLogEventActionToggleSlowMode {
  _: "channelAdminLogEventActionToggleSlowMode";
  prev_value: number;
  new_value: number;
}

export interface channelAdminLogEventActionStartGroupCall {
  _: "channelAdminLogEventActionStartGroupCall";
  call: InputGroupCall;
}

export interface channelAdminLogEventActionDiscardGroupCall {
  _: "channelAdminLogEventActionDiscardGroupCall";
  call: InputGroupCall;
}

export interface channelAdminLogEventActionParticipantMute {
  _: "channelAdminLogEventActionParticipantMute";
  participant: GroupCallParticipant;
}

export interface channelAdminLogEventActionParticipantUnmute {
  _: "channelAdminLogEventActionParticipantUnmute";
  participant: GroupCallParticipant;
}

export interface channelAdminLogEventActionToggleGroupCallSetting {
  _: "channelAdminLogEventActionToggleGroupCallSetting";
  join_muted: boolean;
}

export interface channelAdminLogEventActionParticipantJoinByInvite {
  _: "channelAdminLogEventActionParticipantJoinByInvite";
  via_chatlist?: true;
  invite: ExportedChatInvite;
}

export interface channelAdminLogEventActionExportedInviteDelete {
  _: "channelAdminLogEventActionExportedInviteDelete";
  invite: ExportedChatInvite;
}

export interface channelAdminLogEventActionExportedInviteRevoke {
  _: "channelAdminLogEventActionExportedInviteRevoke";
  invite: ExportedChatInvite;
}

export interface channelAdminLogEventActionExportedInviteEdit {
  _: "channelAdminLogEventActionExportedInviteEdit";
  prev_invite: ExportedChatInvite;
  new_invite: ExportedChatInvite;
}

export interface channelAdminLogEventActionParticipantVolume {
  _: "channelAdminLogEventActionParticipantVolume";
  participant: GroupCallParticipant;
}

export interface channelAdminLogEventActionChangeHistoryTTL {
  _: "channelAdminLogEventActionChangeHistoryTTL";
  prev_value: number;
  new_value: number;
}

export interface channelAdminLogEventActionParticipantJoinByRequest {
  _: "channelAdminLogEventActionParticipantJoinByRequest";
  invite: ExportedChatInvite;
  approved_by: bigint;
}

export interface channelAdminLogEventActionToggleNoForwards {
  _: "channelAdminLogEventActionToggleNoForwards";
  new_value: boolean;
}

export interface channelAdminLogEventActionSendMessage {
  _: "channelAdminLogEventActionSendMessage";
  message: Message;
}

export interface channelAdminLogEventActionChangeAvailableReactions {
  _: "channelAdminLogEventActionChangeAvailableReactions";
  prev_value: ChatReactions;
  new_value: ChatReactions;
}

export interface channelAdminLogEventActionChangeUsernames {
  _: "channelAdminLogEventActionChangeUsernames";
  prev_value: Array<string>;
  new_value: Array<string>;
}

export interface channelAdminLogEventActionToggleForum {
  _: "channelAdminLogEventActionToggleForum";
  new_value: boolean;
}

export interface channelAdminLogEventActionCreateTopic {
  _: "channelAdminLogEventActionCreateTopic";
  topic: ForumTopic;
}

export interface channelAdminLogEventActionEditTopic {
  _: "channelAdminLogEventActionEditTopic";
  prev_topic: ForumTopic;
  new_topic: ForumTopic;
}

export interface channelAdminLogEventActionDeleteTopic {
  _: "channelAdminLogEventActionDeleteTopic";
  topic: ForumTopic;
}

export interface channelAdminLogEventActionPinTopic {
  _: "channelAdminLogEventActionPinTopic";
  prev_topic?: ForumTopic;
  new_topic?: ForumTopic;
}

export interface channelAdminLogEventActionToggleAntiSpam {
  _: "channelAdminLogEventActionToggleAntiSpam";
  new_value: boolean;
}

export interface channelAdminLogEventActionChangePeerColor {
  _: "channelAdminLogEventActionChangePeerColor";
  prev_value: PeerColor;
  new_value: PeerColor;
}

export interface channelAdminLogEventActionChangeProfilePeerColor {
  _: "channelAdminLogEventActionChangeProfilePeerColor";
  prev_value: PeerColor;
  new_value: PeerColor;
}

export interface channelAdminLogEventActionChangeWallpaper {
  _: "channelAdminLogEventActionChangeWallpaper";
  prev_value: WallPaper;
  new_value: WallPaper;
}

export interface channelAdminLogEventActionChangeEmojiStatus {
  _: "channelAdminLogEventActionChangeEmojiStatus";
  prev_value: EmojiStatus;
  new_value: EmojiStatus;
}

export interface channelAdminLogEventActionChangeEmojiStickerSet {
  _: "channelAdminLogEventActionChangeEmojiStickerSet";
  prev_stickerset: InputStickerSet;
  new_stickerset: InputStickerSet;
}

export interface channelAdminLogEventActionToggleSignatureProfiles {
  _: "channelAdminLogEventActionToggleSignatureProfiles";
  new_value: boolean;
}

export interface channelAdminLogEventActionParticipantSubExtend {
  _: "channelAdminLogEventActionParticipantSubExtend";
  prev_participant: ChannelParticipant;
  new_participant: ChannelParticipant;
}

export interface channelAdminLogEvent {
  _: "channelAdminLogEvent";
  id: bigint;
  date: number;
  user_id: bigint;
  action: ChannelAdminLogEventAction;
}

export interface channels_adminLogResults {
  _: "channels.adminLogResults";
  events: Array<ChannelAdminLogEvent>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface channelAdminLogEventsFilter {
  _: "channelAdminLogEventsFilter";
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
  group_call?: true;
  invites?: true;
  send?: true;
  forums?: true;
  sub_extend?: true;
}

export interface popularContact {
  _: "popularContact";
  client_id: bigint;
  importers: number;
}

export interface messages_favedStickersNotModified {
  _: "messages.favedStickersNotModified";
}

export interface messages_favedStickers {
  _: "messages.favedStickers";
  hash: bigint;
  packs: Array<StickerPack>;
  stickers: Array<Document>;
}

export interface recentMeUrlUnknown {
  _: "recentMeUrlUnknown";
  url: string;
}

export interface recentMeUrlUser {
  _: "recentMeUrlUser";
  url: string;
  user_id: bigint;
}

export interface recentMeUrlChat {
  _: "recentMeUrlChat";
  url: string;
  chat_id: bigint;
}

export interface recentMeUrlChatInvite {
  _: "recentMeUrlChatInvite";
  url: string;
  chat_invite: ChatInvite;
}

export interface recentMeUrlStickerSet {
  _: "recentMeUrlStickerSet";
  url: string;
  set: StickerSetCovered;
}

export interface help_recentMeUrls {
  _: "help.recentMeUrls";
  urls: Array<RecentMeUrl>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface inputSingleMedia {
  _: "inputSingleMedia";
  media: InputMedia;
  random_id: bigint;
  message: string;
  entities?: Array<MessageEntity>;
}

export interface webAuthorization {
  _: "webAuthorization";
  hash: bigint;
  bot_id: bigint;
  domain: string;
  browser: string;
  platform: string;
  date_created: number;
  date_active: number;
  ip: string;
  region: string;
}

export interface account_webAuthorizations {
  _: "account.webAuthorizations";
  authorizations: Array<WebAuthorization>;
  users: Array<User>;
}

export interface inputMessageID {
  _: "inputMessageID";
  id: number;
}

export interface inputMessageReplyTo {
  _: "inputMessageReplyTo";
  id: number;
}

export interface inputMessagePinned {
  _: "inputMessagePinned";
}

export interface inputMessageCallbackQuery {
  _: "inputMessageCallbackQuery";
  id: number;
  query_id: bigint;
}

export interface inputDialogPeer {
  _: "inputDialogPeer";
  peer: InputPeer;
}

export interface inputDialogPeerFolder {
  _: "inputDialogPeerFolder";
  folder_id: number;
}

export interface dialogPeer {
  _: "dialogPeer";
  peer: Peer;
}

export interface dialogPeerFolder {
  _: "dialogPeerFolder";
  folder_id: number;
}

export interface messages_foundStickerSetsNotModified {
  _: "messages.foundStickerSetsNotModified";
}

export interface messages_foundStickerSets {
  _: "messages.foundStickerSets";
  hash: bigint;
  sets: Array<StickerSetCovered>;
}

export interface fileHash {
  _: "fileHash";
  offset: bigint;
  limit: number;
  hash: Uint8Array;
}

export interface inputClientProxy {
  _: "inputClientProxy";
  address: string;
  port: number;
}

export interface help_termsOfServiceUpdateEmpty {
  _: "help.termsOfServiceUpdateEmpty";
  expires: number;
}

export interface help_termsOfServiceUpdate {
  _: "help.termsOfServiceUpdate";
  expires: number;
  terms_of_service: help_TermsOfService;
}

export interface inputSecureFileUploaded {
  _: "inputSecureFileUploaded";
  id: bigint;
  parts: number;
  md5_checksum: string;
  file_hash: Uint8Array;
  secret: Uint8Array;
}

export interface inputSecureFile {
  _: "inputSecureFile";
  id: bigint;
  access_hash: bigint;
}

export interface secureFileEmpty {
  _: "secureFileEmpty";
}

export interface secureFile {
  _: "secureFile";
  id: bigint;
  access_hash: bigint;
  size: bigint;
  dc_id: number;
  date: number;
  file_hash: Uint8Array;
  secret: Uint8Array;
}

export interface secureData {
  _: "secureData";
  data: Uint8Array;
  data_hash: Uint8Array;
  secret: Uint8Array;
}

export interface securePlainPhone {
  _: "securePlainPhone";
  phone: string;
}

export interface securePlainEmail {
  _: "securePlainEmail";
  email: string;
}

export interface secureValueTypePersonalDetails {
  _: "secureValueTypePersonalDetails";
}

export interface secureValueTypePassport {
  _: "secureValueTypePassport";
}

export interface secureValueTypeDriverLicense {
  _: "secureValueTypeDriverLicense";
}

export interface secureValueTypeIdentityCard {
  _: "secureValueTypeIdentityCard";
}

export interface secureValueTypeInternalPassport {
  _: "secureValueTypeInternalPassport";
}

export interface secureValueTypeAddress {
  _: "secureValueTypeAddress";
}

export interface secureValueTypeUtilityBill {
  _: "secureValueTypeUtilityBill";
}

export interface secureValueTypeBankStatement {
  _: "secureValueTypeBankStatement";
}

export interface secureValueTypeRentalAgreement {
  _: "secureValueTypeRentalAgreement";
}

export interface secureValueTypePassportRegistration {
  _: "secureValueTypePassportRegistration";
}

export interface secureValueTypeTemporaryRegistration {
  _: "secureValueTypeTemporaryRegistration";
}

export interface secureValueTypePhone {
  _: "secureValueTypePhone";
}

export interface secureValueTypeEmail {
  _: "secureValueTypeEmail";
}

export interface secureValue {
  _: "secureValue";
  type: SecureValueType;
  data?: SecureData;
  front_side?: SecureFile;
  reverse_side?: SecureFile;
  selfie?: SecureFile;
  translation?: Array<SecureFile>;
  files?: Array<SecureFile>;
  plain_data?: SecurePlainData;
  hash: Uint8Array;
}

export interface inputSecureValue {
  _: "inputSecureValue";
  type: SecureValueType;
  data?: SecureData;
  front_side?: InputSecureFile;
  reverse_side?: InputSecureFile;
  selfie?: InputSecureFile;
  translation?: Array<InputSecureFile>;
  files?: Array<InputSecureFile>;
  plain_data?: SecurePlainData;
}

export interface secureValueHash {
  _: "secureValueHash";
  type: SecureValueType;
  hash: Uint8Array;
}

export interface secureValueErrorData {
  _: "secureValueErrorData";
  type: SecureValueType;
  data_hash: Uint8Array;
  field: string;
  text: string;
}

export interface secureValueErrorFrontSide {
  _: "secureValueErrorFrontSide";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface secureValueErrorReverseSide {
  _: "secureValueErrorReverseSide";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface secureValueErrorSelfie {
  _: "secureValueErrorSelfie";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface secureValueErrorFile {
  _: "secureValueErrorFile";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface secureValueErrorFiles {
  _: "secureValueErrorFiles";
  type: SecureValueType;
  file_hash: Array<Uint8Array>;
  text: string;
}

export interface secureValueError {
  _: "secureValueError";
  type: SecureValueType;
  hash: Uint8Array;
  text: string;
}

export interface secureValueErrorTranslationFile {
  _: "secureValueErrorTranslationFile";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface secureValueErrorTranslationFiles {
  _: "secureValueErrorTranslationFiles";
  type: SecureValueType;
  file_hash: Array<Uint8Array>;
  text: string;
}

export interface secureCredentialsEncrypted {
  _: "secureCredentialsEncrypted";
  data: Uint8Array;
  hash: Uint8Array;
  secret: Uint8Array;
}

export interface account_authorizationForm {
  _: "account.authorizationForm";
  required_types: Array<SecureRequiredType>;
  values: Array<SecureValue>;
  errors: Array<SecureValueError>;
  users: Array<User>;
  privacy_policy_url?: string;
}

export interface account_sentEmailCode {
  _: "account.sentEmailCode";
  email_pattern: string;
  length: number;
}

export interface help_deepLinkInfoEmpty {
  _: "help.deepLinkInfoEmpty";
}

export interface help_deepLinkInfo {
  _: "help.deepLinkInfo";
  update_app?: true;
  message: string;
  entities?: Array<MessageEntity>;
}

export interface savedPhoneContact {
  _: "savedPhoneContact";
  phone: string;
  first_name: string;
  last_name: string;
  date: number;
}

export interface account_takeout {
  _: "account.takeout";
  id: bigint;
}

export interface passwordKdfAlgoUnknown {
  _: "passwordKdfAlgoUnknown";
}

export interface passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow {
  _: "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow";
  salt1: Uint8Array;
  salt2: Uint8Array;
  g: number;
  p: Uint8Array;
}

export interface securePasswordKdfAlgoUnknown {
  _: "securePasswordKdfAlgoUnknown";
}

export interface securePasswordKdfAlgoPBKDF2HMACSHA512iter100000 {
  _: "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000";
  salt: Uint8Array;
}

export interface securePasswordKdfAlgoSHA512 {
  _: "securePasswordKdfAlgoSHA512";
  salt: Uint8Array;
}

export interface secureSecretSettings {
  _: "secureSecretSettings";
  secure_algo: SecurePasswordKdfAlgo;
  secure_secret: Uint8Array;
  secure_secret_id: bigint;
}

export interface inputCheckPasswordEmpty {
  _: "inputCheckPasswordEmpty";
}

export interface inputCheckPasswordSRP {
  _: "inputCheckPasswordSRP";
  srp_id: bigint;
  A: Uint8Array;
  M1: Uint8Array;
}

export interface secureRequiredType {
  _: "secureRequiredType";
  native_names?: true;
  selfie_required?: true;
  translation_required?: true;
  type: SecureValueType;
}

export interface secureRequiredTypeOneOf {
  _: "secureRequiredTypeOneOf";
  types: Array<SecureRequiredType>;
}

export interface help_passportConfigNotModified {
  _: "help.passportConfigNotModified";
}

export interface help_passportConfig {
  _: "help.passportConfig";
  hash: number;
  countries_langs: DataJSON;
}

export interface inputAppEvent {
  _: "inputAppEvent";
  time: number;
  type: string;
  peer: bigint;
  data: JSONValue;
}

export interface jsonObjectValue {
  _: "jsonObjectValue";
  key: string;
  value: JSONValue;
}

export interface jsonNull {
  _: "jsonNull";
}

export interface jsonBool {
  _: "jsonBool";
  value: boolean;
}

export interface jsonNumber {
  _: "jsonNumber";
  value: number;
}

export interface jsonString {
  _: "jsonString";
  value: string;
}

export interface jsonArray {
  _: "jsonArray";
  value: Array<JSONValue>;
}

export interface jsonObject {
  _: "jsonObject";
  value: Array<JSONObjectValue>;
}

export interface pageTableCell {
  _: "pageTableCell";
  header?: true;
  align_center?: true;
  align_right?: true;
  valign_middle?: true;
  valign_bottom?: true;
  text?: RichText;
  colspan?: number;
  rowspan?: number;
}

export interface pageTableRow {
  _: "pageTableRow";
  cells: Array<PageTableCell>;
}

export interface pageCaption {
  _: "pageCaption";
  text: RichText;
  credit: RichText;
}

export interface pageListItemText {
  _: "pageListItemText";
  text: RichText;
}

export interface pageListItemBlocks {
  _: "pageListItemBlocks";
  blocks: Array<PageBlock>;
}

export interface pageListOrderedItemText {
  _: "pageListOrderedItemText";
  num: string;
  text: RichText;
}

export interface pageListOrderedItemBlocks {
  _: "pageListOrderedItemBlocks";
  num: string;
  blocks: Array<PageBlock>;
}

export interface pageRelatedArticle {
  _: "pageRelatedArticle";
  url: string;
  webpage_id: bigint;
  title?: string;
  description?: string;
  photo_id?: bigint;
  author?: string;
  published_date?: number;
}

export interface page {
  _: "page";
  part?: true;
  rtl?: true;
  v2?: true;
  url: string;
  blocks: Array<PageBlock>;
  photos: Array<Photo>;
  documents: Array<Document>;
  views?: number;
}

export interface help_supportName {
  _: "help.supportName";
  name: string;
}

export interface help_userInfoEmpty {
  _: "help.userInfoEmpty";
}

export interface help_userInfo {
  _: "help.userInfo";
  message: string;
  entities: Array<MessageEntity>;
  author: string;
  date: number;
}

export interface pollAnswer {
  _: "pollAnswer";
  text: TextWithEntities;
  option: Uint8Array;
}

export interface poll {
  _: "poll";
  id: bigint;
  closed?: true;
  public_voters?: true;
  multiple_choice?: true;
  quiz?: true;
  question: TextWithEntities;
  answers: Array<PollAnswer>;
  close_period?: number;
  close_date?: number;
}

export interface pollAnswerVoters {
  _: "pollAnswerVoters";
  chosen?: true;
  correct?: true;
  option: Uint8Array;
  voters: number;
}

export interface pollResults {
  _: "pollResults";
  min?: true;
  results?: Array<PollAnswerVoters>;
  total_voters?: number;
  recent_voters?: Array<Peer>;
  solution?: string;
  solution_entities?: Array<MessageEntity>;
}

export interface chatOnlines {
  _: "chatOnlines";
  onlines: number;
}

export interface statsURL {
  _: "statsURL";
  url: string;
}

export interface chatAdminRights {
  _: "chatAdminRights";
  change_info?: true;
  post_messages?: true;
  edit_messages?: true;
  delete_messages?: true;
  ban_users?: true;
  invite_users?: true;
  pin_messages?: true;
  add_admins?: true;
  anonymous?: true;
  manage_call?: true;
  other?: true;
  manage_topics?: true;
  post_stories?: true;
  edit_stories?: true;
  delete_stories?: true;
}

export interface chatBannedRights {
  _: "chatBannedRights";
  view_messages?: true;
  send_messages?: true;
  send_media?: true;
  send_stickers?: true;
  send_gifs?: true;
  send_games?: true;
  send_inline?: true;
  embed_links?: true;
  send_polls?: true;
  change_info?: true;
  invite_users?: true;
  pin_messages?: true;
  manage_topics?: true;
  send_photos?: true;
  send_videos?: true;
  send_roundvideos?: true;
  send_audios?: true;
  send_voices?: true;
  send_docs?: true;
  send_plain?: true;
  until_date: number;
}

export interface inputWallPaper {
  _: "inputWallPaper";
  id: bigint;
  access_hash: bigint;
}

export interface inputWallPaperSlug {
  _: "inputWallPaperSlug";
  slug: string;
}

export interface inputWallPaperNoFile {
  _: "inputWallPaperNoFile";
  id: bigint;
}

export interface account_wallPapersNotModified {
  _: "account.wallPapersNotModified";
}

export interface account_wallPapers {
  _: "account.wallPapers";
  hash: bigint;
  wallpapers: Array<WallPaper>;
}

export interface codeSettings {
  _: "codeSettings";
  allow_flashcall?: true;
  current_number?: true;
  allow_app_hash?: true;
  allow_missed_call?: true;
  allow_firebase?: true;
  unknown_number?: true;
  logout_tokens?: Array<Uint8Array>;
  token?: string;
  app_sandbox?: boolean;
}

export interface wallPaperSettings {
  _: "wallPaperSettings";
  blur?: true;
  motion?: true;
  background_color?: number;
  second_background_color?: number;
  third_background_color?: number;
  fourth_background_color?: number;
  intensity?: number;
  rotation?: number;
  emoticon?: string;
}

export interface autoDownloadSettings {
  _: "autoDownloadSettings";
  disabled?: true;
  video_preload_large?: true;
  audio_preload_next?: true;
  phonecalls_less_data?: true;
  stories_preload?: true;
  photo_size_max: number;
  video_size_max: bigint;
  file_size_max: bigint;
  video_upload_maxbitrate: number;
  small_queue_active_operations_max: number;
  large_queue_active_operations_max: number;
}

export interface account_autoDownloadSettings {
  _: "account.autoDownloadSettings";
  low: AutoDownloadSettings;
  medium: AutoDownloadSettings;
  high: AutoDownloadSettings;
}

export interface emojiKeyword {
  _: "emojiKeyword";
  keyword: string;
  emoticons: Array<string>;
}

export interface emojiKeywordDeleted {
  _: "emojiKeywordDeleted";
  keyword: string;
  emoticons: Array<string>;
}

export interface emojiKeywordsDifference {
  _: "emojiKeywordsDifference";
  lang_code: string;
  from_version: number;
  version: number;
  keywords: Array<EmojiKeyword>;
}

export interface emojiURL {
  _: "emojiURL";
  url: string;
}

export interface emojiLanguage {
  _: "emojiLanguage";
  lang_code: string;
}

export interface folder {
  _: "folder";
  autofill_new_broadcasts?: true;
  autofill_public_groups?: true;
  autofill_new_correspondents?: true;
  id: number;
  title: string;
  photo?: ChatPhoto;
}

export interface inputFolderPeer {
  _: "inputFolderPeer";
  peer: InputPeer;
  folder_id: number;
}

export interface folderPeer {
  _: "folderPeer";
  peer: Peer;
  folder_id: number;
}

export interface messages_searchCounter {
  _: "messages.searchCounter";
  inexact?: true;
  filter: MessagesFilter;
  count: number;
}

export interface urlAuthResultRequest {
  _: "urlAuthResultRequest";
  request_write_access?: true;
  bot: User;
  domain: string;
}

export interface urlAuthResultAccepted {
  _: "urlAuthResultAccepted";
  url: string;
}

export interface urlAuthResultDefault {
  _: "urlAuthResultDefault";
}

export interface channelLocationEmpty {
  _: "channelLocationEmpty";
}

export interface channelLocation {
  _: "channelLocation";
  geo_point: GeoPoint;
  address: string;
}

export interface peerLocated {
  _: "peerLocated";
  peer: Peer;
  expires: number;
  distance: number;
}

export interface peerSelfLocated {
  _: "peerSelfLocated";
  expires: number;
}

export interface restrictionReason {
  _: "restrictionReason";
  platform: string;
  reason: string;
  text: string;
}

export interface inputTheme {
  _: "inputTheme";
  id: bigint;
  access_hash: bigint;
}

export interface inputThemeSlug {
  _: "inputThemeSlug";
  slug: string;
}

export interface theme {
  _: "theme";
  creator?: true;
  default?: true;
  for_chat?: true;
  id: bigint;
  access_hash: bigint;
  slug: string;
  title: string;
  document?: Document;
  settings?: Array<ThemeSettings>;
  emoticon?: string;
  installs_count?: number;
}

export interface account_themesNotModified {
  _: "account.themesNotModified";
}

export interface account_themes {
  _: "account.themes";
  hash: bigint;
  themes: Array<Theme>;
}

export interface auth_loginToken {
  _: "auth.loginToken";
  expires: number;
  token: Uint8Array;
}

export interface auth_loginTokenMigrateTo {
  _: "auth.loginTokenMigrateTo";
  dc_id: number;
  token: Uint8Array;
}

export interface auth_loginTokenSuccess {
  _: "auth.loginTokenSuccess";
  authorization: auth_Authorization;
}

export interface account_contentSettings {
  _: "account.contentSettings";
  sensitive_enabled?: true;
  sensitive_can_change?: true;
}

export interface messages_inactiveChats {
  _: "messages.inactiveChats";
  dates: Array<number>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface baseThemeClassic {
  _: "baseThemeClassic";
}

export interface baseThemeDay {
  _: "baseThemeDay";
}

export interface baseThemeNight {
  _: "baseThemeNight";
}

export interface baseThemeTinted {
  _: "baseThemeTinted";
}

export interface baseThemeArctic {
  _: "baseThemeArctic";
}

export interface inputThemeSettings {
  _: "inputThemeSettings";
  message_colors_animated?: true;
  base_theme: BaseTheme;
  accent_color: number;
  outbox_accent_color?: number;
  message_colors?: Array<number>;
  wallpaper?: InputWallPaper;
  wallpaper_settings?: WallPaperSettings;
}

export interface themeSettings {
  _: "themeSettings";
  message_colors_animated?: true;
  base_theme: BaseTheme;
  accent_color: number;
  outbox_accent_color?: number;
  message_colors?: Array<number>;
  wallpaper?: WallPaper;
}

export interface webPageAttributeTheme {
  _: "webPageAttributeTheme";
  documents?: Array<Document>;
  settings?: ThemeSettings;
}

export interface webPageAttributeStory {
  _: "webPageAttributeStory";
  peer: Peer;
  id: number;
  story?: StoryItem;
}

export interface webPageAttributeStickerSet {
  _: "webPageAttributeStickerSet";
  emojis?: true;
  text_color?: true;
  stickers: Array<Document>;
}

export interface webPageAttributeUniqueStarGift {
  _: "webPageAttributeUniqueStarGift";
  gift: StarGift;
}

export interface messages_votesList {
  _: "messages.votesList";
  count: number;
  votes: Array<MessagePeerVote>;
  chats: Array<Chat>;
  users: Array<User>;
  next_offset?: string;
}

export interface bankCardOpenUrl {
  _: "bankCardOpenUrl";
  url: string;
  name: string;
}

export interface payments_bankCardData {
  _: "payments.bankCardData";
  title: string;
  open_urls: Array<BankCardOpenUrl>;
}

export interface dialogFilter {
  _: "dialogFilter";
  contacts?: true;
  non_contacts?: true;
  groups?: true;
  broadcasts?: true;
  bots?: true;
  exclude_muted?: true;
  exclude_read?: true;
  exclude_archived?: true;
  title_noanimate?: true;
  id: number;
  title: TextWithEntities;
  emoticon?: string;
  color?: number;
  pinned_peers: Array<InputPeer>;
  include_peers: Array<InputPeer>;
  exclude_peers: Array<InputPeer>;
}

export interface dialogFilterDefault {
  _: "dialogFilterDefault";
}

export interface dialogFilterChatlist {
  _: "dialogFilterChatlist";
  has_my_invites?: true;
  title_noanimate?: true;
  id: number;
  title: TextWithEntities;
  emoticon?: string;
  color?: number;
  pinned_peers: Array<InputPeer>;
  include_peers: Array<InputPeer>;
}

export interface dialogFilterSuggested {
  _: "dialogFilterSuggested";
  filter: DialogFilter;
  description: string;
}

export interface statsDateRangeDays {
  _: "statsDateRangeDays";
  min_date: number;
  max_date: number;
}

export interface statsAbsValueAndPrev {
  _: "statsAbsValueAndPrev";
  current: number;
  previous: number;
}

export interface statsPercentValue {
  _: "statsPercentValue";
  part: number;
  total: number;
}

export interface statsGraphAsync {
  _: "statsGraphAsync";
  token: string;
}

export interface statsGraphError {
  _: "statsGraphError";
  error: string;
}

export interface statsGraph {
  _: "statsGraph";
  json: DataJSON;
  zoom_token?: string;
}

export interface stats_broadcastStats {
  _: "stats.broadcastStats";
  period: StatsDateRangeDays;
  followers: StatsAbsValueAndPrev;
  views_per_post: StatsAbsValueAndPrev;
  shares_per_post: StatsAbsValueAndPrev;
  reactions_per_post: StatsAbsValueAndPrev;
  views_per_story: StatsAbsValueAndPrev;
  shares_per_story: StatsAbsValueAndPrev;
  reactions_per_story: StatsAbsValueAndPrev;
  enabled_notifications: StatsPercentValue;
  growth_graph: StatsGraph;
  followers_graph: StatsGraph;
  mute_graph: StatsGraph;
  top_hours_graph: StatsGraph;
  interactions_graph: StatsGraph;
  iv_interactions_graph: StatsGraph;
  views_by_source_graph: StatsGraph;
  new_followers_by_source_graph: StatsGraph;
  languages_graph: StatsGraph;
  reactions_by_emotion_graph: StatsGraph;
  story_interactions_graph: StatsGraph;
  story_reactions_by_emotion_graph: StatsGraph;
  recent_posts_interactions: Array<PostInteractionCounters>;
}

export interface help_promoDataEmpty {
  _: "help.promoDataEmpty";
  expires: number;
}

export interface help_promoData {
  _: "help.promoData";
  proxy?: true;
  expires: number;
  peer: Peer;
  chats: Array<Chat>;
  users: Array<User>;
  psa_type?: string;
  psa_message?: string;
}

export interface videoSize {
  _: "videoSize";
  type: string;
  w: number;
  h: number;
  size: number;
  video_start_ts?: number;
}

export interface videoSizeEmojiMarkup {
  _: "videoSizeEmojiMarkup";
  emoji_id: bigint;
  background_colors: Array<number>;
}

export interface videoSizeStickerMarkup {
  _: "videoSizeStickerMarkup";
  stickerset: InputStickerSet;
  sticker_id: bigint;
  background_colors: Array<number>;
}

export interface statsGroupTopPoster {
  _: "statsGroupTopPoster";
  user_id: bigint;
  messages: number;
  avg_chars: number;
}

export interface statsGroupTopAdmin {
  _: "statsGroupTopAdmin";
  user_id: bigint;
  deleted: number;
  kicked: number;
  banned: number;
}

export interface statsGroupTopInviter {
  _: "statsGroupTopInviter";
  user_id: bigint;
  invitations: number;
}

export interface stats_megagroupStats {
  _: "stats.megagroupStats";
  period: StatsDateRangeDays;
  members: StatsAbsValueAndPrev;
  messages: StatsAbsValueAndPrev;
  viewers: StatsAbsValueAndPrev;
  posters: StatsAbsValueAndPrev;
  growth_graph: StatsGraph;
  members_graph: StatsGraph;
  new_members_by_source_graph: StatsGraph;
  languages_graph: StatsGraph;
  messages_graph: StatsGraph;
  actions_graph: StatsGraph;
  top_hours_graph: StatsGraph;
  weekdays_graph: StatsGraph;
  top_posters: Array<StatsGroupTopPoster>;
  top_admins: Array<StatsGroupTopAdmin>;
  top_inviters: Array<StatsGroupTopInviter>;
  users: Array<User>;
}

export interface globalPrivacySettings {
  _: "globalPrivacySettings";
  archive_and_mute_new_noncontact_peers?: true;
  keep_archived_unmuted?: true;
  keep_archived_folders?: true;
  hide_read_marks?: true;
  new_noncontact_peers_require_premium?: true;
  noncontact_peers_paid_stars?: bigint;
}

export interface help_countryCode {
  _: "help.countryCode";
  country_code: string;
  prefixes?: Array<string>;
  patterns?: Array<string>;
}

export interface help_country {
  _: "help.country";
  hidden?: true;
  iso2: string;
  default_name: string;
  name?: string;
  country_codes: Array<help_CountryCode>;
}

export interface help_countriesListNotModified {
  _: "help.countriesListNotModified";
}

export interface help_countriesList {
  _: "help.countriesList";
  countries: Array<help_Country>;
  hash: number;
}

export interface messageViews {
  _: "messageViews";
  views?: number;
  forwards?: number;
  replies?: MessageReplies;
}

export interface messages_messageViews {
  _: "messages.messageViews";
  views: Array<MessageViews>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_discussionMessage {
  _: "messages.discussionMessage";
  messages: Array<Message>;
  max_id?: number;
  read_inbox_max_id?: number;
  read_outbox_max_id?: number;
  unread_count: number;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messageReplyHeader {
  _: "messageReplyHeader";
  reply_to_scheduled?: true;
  forum_topic?: true;
  quote?: true;
  reply_to_msg_id?: number;
  reply_to_peer_id?: Peer;
  reply_from?: MessageFwdHeader;
  reply_media?: MessageMedia;
  reply_to_top_id?: number;
  quote_text?: string;
  quote_entities?: Array<MessageEntity>;
  quote_offset?: number;
}

export interface messageReplyStoryHeader {
  _: "messageReplyStoryHeader";
  peer: Peer;
  story_id: number;
}

export interface messageReplies {
  _: "messageReplies";
  comments?: true;
  replies: number;
  replies_pts: number;
  recent_repliers?: Array<Peer>;
  channel_id?: bigint;
  max_id?: number;
  read_max_id?: number;
}

export interface peerBlocked {
  _: "peerBlocked";
  peer_id: Peer;
  date: number;
}

export interface stats_messageStats {
  _: "stats.messageStats";
  views_graph: StatsGraph;
  reactions_by_emotion_graph: StatsGraph;
}

export interface groupCallDiscarded {
  _: "groupCallDiscarded";
  id: bigint;
  access_hash: bigint;
  duration: number;
}

export interface groupCall {
  _: "groupCall";
  join_muted?: true;
  can_change_join_muted?: true;
  join_date_asc?: true;
  schedule_start_subscribed?: true;
  can_start_video?: true;
  record_video_active?: true;
  rtmp_stream?: true;
  listeners_hidden?: true;
  id: bigint;
  access_hash: bigint;
  participants_count: number;
  title?: string;
  stream_dc_id?: number;
  record_start_date?: number;
  schedule_date?: number;
  unmuted_video_count?: number;
  unmuted_video_limit: number;
  version: number;
  conference_from_call?: bigint;
}

export interface inputGroupCall {
  _: "inputGroupCall";
  id: bigint;
  access_hash: bigint;
}

export interface groupCallParticipant {
  _: "groupCallParticipant";
  muted?: true;
  left?: true;
  can_self_unmute?: true;
  just_joined?: true;
  versioned?: true;
  min?: true;
  muted_by_you?: true;
  volume_by_admin?: true;
  self?: true;
  video_joined?: true;
  peer: Peer;
  date: number;
  active_date?: number;
  source: number;
  volume?: number;
  about?: string;
  raise_hand_rating?: bigint;
  video?: GroupCallParticipantVideo;
  presentation?: GroupCallParticipantVideo;
}

export interface phone_groupCall {
  _: "phone.groupCall";
  call: GroupCall;
  participants: Array<GroupCallParticipant>;
  participants_next_offset: string;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface phone_groupParticipants {
  _: "phone.groupParticipants";
  count: number;
  participants: Array<GroupCallParticipant>;
  next_offset: string;
  chats: Array<Chat>;
  users: Array<User>;
  version: number;
}

export interface inlineQueryPeerTypeSameBotPM {
  _: "inlineQueryPeerTypeSameBotPM";
}

export interface inlineQueryPeerTypePM {
  _: "inlineQueryPeerTypePM";
}

export interface inlineQueryPeerTypeChat {
  _: "inlineQueryPeerTypeChat";
}

export interface inlineQueryPeerTypeMegagroup {
  _: "inlineQueryPeerTypeMegagroup";
}

export interface inlineQueryPeerTypeBroadcast {
  _: "inlineQueryPeerTypeBroadcast";
}

export interface inlineQueryPeerTypeBotPM {
  _: "inlineQueryPeerTypeBotPM";
}

export interface messages_historyImport {
  _: "messages.historyImport";
  id: bigint;
}

export interface messages_historyImportParsed {
  _: "messages.historyImportParsed";
  pm?: true;
  group?: true;
  title?: string;
}

export interface messages_affectedFoundMessages {
  _: "messages.affectedFoundMessages";
  pts: number;
  pts_count: number;
  offset: number;
  messages: Array<number>;
}

export interface chatInviteImporter {
  _: "chatInviteImporter";
  requested?: true;
  via_chatlist?: true;
  user_id: bigint;
  date: number;
  about?: string;
  approved_by?: bigint;
}

export interface messages_exportedChatInvites {
  _: "messages.exportedChatInvites";
  count: number;
  invites: Array<ExportedChatInvite>;
  users: Array<User>;
}

export interface messages_exportedChatInvite {
  _: "messages.exportedChatInvite";
  invite: ExportedChatInvite;
  users: Array<User>;
}

export interface messages_exportedChatInviteReplaced {
  _: "messages.exportedChatInviteReplaced";
  invite: ExportedChatInvite;
  new_invite: ExportedChatInvite;
  users: Array<User>;
}

export interface messages_chatInviteImporters {
  _: "messages.chatInviteImporters";
  count: number;
  importers: Array<ChatInviteImporter>;
  users: Array<User>;
}

export interface chatAdminWithInvites {
  _: "chatAdminWithInvites";
  admin_id: bigint;
  invites_count: number;
  revoked_invites_count: number;
}

export interface messages_chatAdminsWithInvites {
  _: "messages.chatAdminsWithInvites";
  admins: Array<ChatAdminWithInvites>;
  users: Array<User>;
}

export interface messages_checkedHistoryImportPeer {
  _: "messages.checkedHistoryImportPeer";
  confirm_text: string;
}

export interface phone_joinAsPeers {
  _: "phone.joinAsPeers";
  peers: Array<Peer>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface phone_exportedGroupCallInvite {
  _: "phone.exportedGroupCallInvite";
  link: string;
}

export interface groupCallParticipantVideoSourceGroup {
  _: "groupCallParticipantVideoSourceGroup";
  semantics: string;
  sources: Array<number>;
}

export interface groupCallParticipantVideo {
  _: "groupCallParticipantVideo";
  paused?: true;
  endpoint: string;
  source_groups: Array<GroupCallParticipantVideoSourceGroup>;
  audio_source?: number;
}

export interface stickers_suggestedShortName {
  _: "stickers.suggestedShortName";
  short_name: string;
}

export interface botCommandScopeDefault {
  _: "botCommandScopeDefault";
}

export interface botCommandScopeUsers {
  _: "botCommandScopeUsers";
}

export interface botCommandScopeChats {
  _: "botCommandScopeChats";
}

export interface botCommandScopeChatAdmins {
  _: "botCommandScopeChatAdmins";
}

export interface botCommandScopePeer {
  _: "botCommandScopePeer";
  peer: InputPeer;
}

export interface botCommandScopePeerAdmins {
  _: "botCommandScopePeerAdmins";
  peer: InputPeer;
}

export interface botCommandScopePeerUser {
  _: "botCommandScopePeerUser";
  peer: InputPeer;
  user_id: InputUser;
}

export interface account_resetPasswordFailedWait {
  _: "account.resetPasswordFailedWait";
  retry_date: number;
}

export interface account_resetPasswordRequestedWait {
  _: "account.resetPasswordRequestedWait";
  until_date: number;
}

export interface account_resetPasswordOk {
  _: "account.resetPasswordOk";
}

export interface sponsoredMessage {
  _: "sponsoredMessage";
  recommended?: true;
  can_report?: true;
  random_id: Uint8Array;
  url: string;
  title: string;
  message: string;
  entities?: Array<MessageEntity>;
  photo?: Photo;
  media?: MessageMedia;
  color?: PeerColor;
  button_text: string;
  sponsor_info?: string;
  additional_info?: string;
}

export interface messages_sponsoredMessages {
  _: "messages.sponsoredMessages";
  posts_between?: number;
  messages: Array<SponsoredMessage>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_sponsoredMessagesEmpty {
  _: "messages.sponsoredMessagesEmpty";
}

export interface searchResultsCalendarPeriod {
  _: "searchResultsCalendarPeriod";
  date: number;
  min_msg_id: number;
  max_msg_id: number;
  count: number;
}

export interface messages_searchResultsCalendar {
  _: "messages.searchResultsCalendar";
  inexact?: true;
  count: number;
  min_date: number;
  min_msg_id: number;
  offset_id_offset?: number;
  periods: Array<SearchResultsCalendarPeriod>;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface searchResultPosition {
  _: "searchResultPosition";
  msg_id: number;
  date: number;
  offset: number;
}

export interface messages_searchResultsPositions {
  _: "messages.searchResultsPositions";
  count: number;
  positions: Array<SearchResultsPosition>;
}

export interface channels_sendAsPeers {
  _: "channels.sendAsPeers";
  peers: Array<SendAsPeer>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface users_userFull {
  _: "users.userFull";
  full_user: UserFull;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_peerSettings {
  _: "messages.peerSettings";
  settings: PeerSettings;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface auth_loggedOut {
  _: "auth.loggedOut";
  future_auth_token?: Uint8Array;
}

export interface reactionCount {
  _: "reactionCount";
  chosen_order?: number;
  reaction: Reaction;
  count: number;
}

export interface messageReactions {
  _: "messageReactions";
  min?: true;
  can_see_list?: true;
  reactions_as_tags?: true;
  results: Array<ReactionCount>;
  recent_reactions?: Array<MessagePeerReaction>;
  top_reactors?: Array<MessageReactor>;
}

export interface messages_messageReactionsList {
  _: "messages.messageReactionsList";
  count: number;
  reactions: Array<MessagePeerReaction>;
  chats: Array<Chat>;
  users: Array<User>;
  next_offset?: string;
}

export interface availableReaction {
  _: "availableReaction";
  inactive?: true;
  premium?: true;
  reaction: string;
  title: string;
  static_icon: Document;
  appear_animation: Document;
  select_animation: Document;
  activate_animation: Document;
  effect_animation: Document;
  around_animation?: Document;
  center_icon?: Document;
}

export interface messages_availableReactionsNotModified {
  _: "messages.availableReactionsNotModified";
}

export interface messages_availableReactions {
  _: "messages.availableReactions";
  hash: number;
  reactions: Array<AvailableReaction>;
}

export interface messagePeerReaction {
  _: "messagePeerReaction";
  big?: true;
  unread?: true;
  my?: true;
  peer_id: Peer;
  date: number;
  reaction: Reaction;
}

export interface groupCallStreamChannel {
  _: "groupCallStreamChannel";
  channel: number;
  scale: number;
  last_timestamp_ms: bigint;
}

export interface phone_groupCallStreamChannels {
  _: "phone.groupCallStreamChannels";
  channels: Array<GroupCallStreamChannel>;
}

export interface phone_groupCallStreamRtmpUrl {
  _: "phone.groupCallStreamRtmpUrl";
  url: string;
  key: string;
}

export interface attachMenuBotIconColor {
  _: "attachMenuBotIconColor";
  name: string;
  color: number;
}

export interface attachMenuBotIcon {
  _: "attachMenuBotIcon";
  name: string;
  icon: Document;
  colors?: Array<AttachMenuBotIconColor>;
}

export interface attachMenuBot {
  _: "attachMenuBot";
  inactive?: true;
  has_settings?: true;
  request_write_access?: true;
  show_in_attach_menu?: true;
  show_in_side_menu?: true;
  side_menu_disclaimer_needed?: true;
  bot_id: bigint;
  short_name: string;
  peer_types?: Array<AttachMenuPeerType>;
  icons: Array<AttachMenuBotIcon>;
}

export interface attachMenuBotsNotModified {
  _: "attachMenuBotsNotModified";
}

export interface attachMenuBots {
  _: "attachMenuBots";
  hash: bigint;
  bots: Array<AttachMenuBot>;
  users: Array<User>;
}

export interface attachMenuBotsBot {
  _: "attachMenuBotsBot";
  bot: AttachMenuBot;
  users: Array<User>;
}

export interface webViewResultUrl {
  _: "webViewResultUrl";
  fullsize?: true;
  fullscreen?: true;
  query_id?: bigint;
  url: string;
}

export interface webViewMessageSent {
  _: "webViewMessageSent";
  msg_id?: InputBotInlineMessageID;
}

export interface botMenuButtonDefault {
  _: "botMenuButtonDefault";
}

export interface botMenuButtonCommands {
  _: "botMenuButtonCommands";
}

export interface botMenuButton {
  _: "botMenuButton";
  text: string;
  url: string;
}

export interface account_savedRingtonesNotModified {
  _: "account.savedRingtonesNotModified";
}

export interface account_savedRingtones {
  _: "account.savedRingtones";
  hash: bigint;
  ringtones: Array<Document>;
}

export interface notificationSoundDefault {
  _: "notificationSoundDefault";
}

export interface notificationSoundNone {
  _: "notificationSoundNone";
}

export interface notificationSoundLocal {
  _: "notificationSoundLocal";
  title: string;
  data: string;
}

export interface notificationSoundRingtone {
  _: "notificationSoundRingtone";
  id: bigint;
}

export interface account_savedRingtone {
  _: "account.savedRingtone";
}

export interface account_savedRingtoneConverted {
  _: "account.savedRingtoneConverted";
  document: Document;
}

export interface attachMenuPeerTypeSameBotPM {
  _: "attachMenuPeerTypeSameBotPM";
}

export interface attachMenuPeerTypeBotPM {
  _: "attachMenuPeerTypeBotPM";
}

export interface attachMenuPeerTypePM {
  _: "attachMenuPeerTypePM";
}

export interface attachMenuPeerTypeChat {
  _: "attachMenuPeerTypeChat";
}

export interface attachMenuPeerTypeBroadcast {
  _: "attachMenuPeerTypeBroadcast";
}

export interface inputInvoiceMessage {
  _: "inputInvoiceMessage";
  peer: InputPeer;
  msg_id: number;
}

export interface inputInvoiceSlug {
  _: "inputInvoiceSlug";
  slug: string;
}

export interface inputInvoicePremiumGiftCode {
  _: "inputInvoicePremiumGiftCode";
  purpose: InputStorePaymentPurpose;
  option: PremiumGiftCodeOption;
}

export interface inputInvoiceStars {
  _: "inputInvoiceStars";
  purpose: InputStorePaymentPurpose;
}

export interface inputInvoiceChatInviteSubscription {
  _: "inputInvoiceChatInviteSubscription";
  hash: string;
}

export interface inputInvoiceStarGift {
  _: "inputInvoiceStarGift";
  hide_name?: true;
  include_upgrade?: true;
  peer: InputPeer;
  gift_id: bigint;
  message?: TextWithEntities;
}

export interface inputInvoiceStarGiftUpgrade {
  _: "inputInvoiceStarGiftUpgrade";
  keep_original_details?: true;
  stargift: InputSavedStarGift;
}

export interface inputInvoiceStarGiftTransfer {
  _: "inputInvoiceStarGiftTransfer";
  stargift: InputSavedStarGift;
  to_id: InputPeer;
}

export interface inputInvoicePremiumGiftStars {
  _: "inputInvoicePremiumGiftStars";
  user_id: InputUser;
  months: number;
  message?: TextWithEntities;
}

export interface payments_exportedInvoice {
  _: "payments.exportedInvoice";
  url: string;
}

export interface messages_transcribedAudio {
  _: "messages.transcribedAudio";
  pending?: true;
  transcription_id: bigint;
  text: string;
  trial_remains_num?: number;
  trial_remains_until_date?: number;
}

export interface help_premiumPromo {
  _: "help.premiumPromo";
  status_text: string;
  status_entities: Array<MessageEntity>;
  video_sections: Array<string>;
  videos: Array<Document>;
  period_options: Array<PremiumSubscriptionOption>;
  users: Array<User>;
}

export interface inputStorePaymentPremiumSubscription {
  _: "inputStorePaymentPremiumSubscription";
  restore?: true;
  upgrade?: true;
}

export interface inputStorePaymentGiftPremium {
  _: "inputStorePaymentGiftPremium";
  user_id: InputUser;
  currency: string;
  amount: bigint;
}

export interface inputStorePaymentPremiumGiftCode {
  _: "inputStorePaymentPremiumGiftCode";
  users: Array<InputUser>;
  boost_peer?: InputPeer;
  currency: string;
  amount: bigint;
  message?: TextWithEntities;
}

export interface inputStorePaymentPremiumGiveaway {
  _: "inputStorePaymentPremiumGiveaway";
  only_new_subscribers?: true;
  winners_are_visible?: true;
  boost_peer: InputPeer;
  additional_peers?: Array<InputPeer>;
  countries_iso2?: Array<string>;
  prize_description?: string;
  random_id: bigint;
  until_date: number;
  currency: string;
  amount: bigint;
}

export interface inputStorePaymentStarsTopup {
  _: "inputStorePaymentStarsTopup";
  stars: bigint;
  currency: string;
  amount: bigint;
}

export interface inputStorePaymentStarsGift {
  _: "inputStorePaymentStarsGift";
  user_id: InputUser;
  stars: bigint;
  currency: string;
  amount: bigint;
}

export interface inputStorePaymentStarsGiveaway {
  _: "inputStorePaymentStarsGiveaway";
  only_new_subscribers?: true;
  winners_are_visible?: true;
  stars: bigint;
  boost_peer: InputPeer;
  additional_peers?: Array<InputPeer>;
  countries_iso2?: Array<string>;
  prize_description?: string;
  random_id: bigint;
  until_date: number;
  currency: string;
  amount: bigint;
  users: number;
}

export interface paymentFormMethod {
  _: "paymentFormMethod";
  url: string;
  title: string;
}

export interface emojiStatusEmpty {
  _: "emojiStatusEmpty";
}

export interface emojiStatus {
  _: "emojiStatus";
  document_id: bigint;
  until?: number;
}

export interface emojiStatusCollectible {
  _: "emojiStatusCollectible";
  collectible_id: bigint;
  document_id: bigint;
  title: string;
  slug: string;
  pattern_document_id: bigint;
  center_color: number;
  edge_color: number;
  pattern_color: number;
  text_color: number;
  until?: number;
}

export interface inputEmojiStatusCollectible {
  _: "inputEmojiStatusCollectible";
  collectible_id: bigint;
  until?: number;
}

export interface account_emojiStatusesNotModified {
  _: "account.emojiStatusesNotModified";
}

export interface account_emojiStatuses {
  _: "account.emojiStatuses";
  hash: bigint;
  statuses: Array<EmojiStatus>;
}

export interface reactionEmpty {
  _: "reactionEmpty";
}

export interface reactionEmoji {
  _: "reactionEmoji";
  emoticon: string;
}

export interface reactionCustomEmoji {
  _: "reactionCustomEmoji";
  document_id: bigint;
}

export interface reactionPaid {
  _: "reactionPaid";
}

export interface chatReactionsNone {
  _: "chatReactionsNone";
}

export interface chatReactionsAll {
  _: "chatReactionsAll";
  allow_custom?: true;
}

export interface chatReactionsSome {
  _: "chatReactionsSome";
  reactions: Array<Reaction>;
}

export interface messages_reactionsNotModified {
  _: "messages.reactionsNotModified";
}

export interface messages_reactions {
  _: "messages.reactions";
  hash: bigint;
  reactions: Array<Reaction>;
}

export interface emailVerifyPurposeLoginSetup {
  _: "emailVerifyPurposeLoginSetup";
  phone_number: string;
  phone_code_hash: string;
}

export interface emailVerifyPurposeLoginChange {
  _: "emailVerifyPurposeLoginChange";
}

export interface emailVerifyPurposePassport {
  _: "emailVerifyPurposePassport";
}

export interface emailVerificationCode {
  _: "emailVerificationCode";
  code: string;
}

export interface emailVerificationGoogle {
  _: "emailVerificationGoogle";
  token: string;
}

export interface emailVerificationApple {
  _: "emailVerificationApple";
  token: string;
}

export interface account_emailVerified {
  _: "account.emailVerified";
  email: string;
}

export interface account_emailVerifiedLogin {
  _: "account.emailVerifiedLogin";
  email: string;
  sent_code: auth_SentCode;
}

export interface premiumSubscriptionOption {
  _: "premiumSubscriptionOption";
  current?: true;
  can_purchase_upgrade?: true;
  transaction?: string;
  months: number;
  currency: string;
  amount: bigint;
  bot_url: string;
  store_product?: string;
}

export interface sendAsPeer {
  _: "sendAsPeer";
  premium_required?: true;
  peer: Peer;
}

export interface messageExtendedMediaPreview {
  _: "messageExtendedMediaPreview";
  w?: number;
  h?: number;
  thumb?: PhotoSize;
  video_duration?: number;
}

export interface messageExtendedMedia {
  _: "messageExtendedMedia";
  media: MessageMedia;
}

export interface stickerKeyword {
  _: "stickerKeyword";
  document_id: bigint;
  keyword: Array<string>;
}

export interface username {
  _: "username";
  editable?: true;
  active?: true;
  username: string;
}

export interface forumTopicDeleted {
  _: "forumTopicDeleted";
  id: number;
}

export interface forumTopic {
  _: "forumTopic";
  my?: true;
  closed?: true;
  pinned?: true;
  short?: true;
  hidden?: true;
  id: number;
  date: number;
  title: string;
  icon_color: number;
  icon_emoji_id?: bigint;
  top_message: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  unread_mentions_count: number;
  unread_reactions_count: number;
  from_id: Peer;
  notify_settings: PeerNotifySettings;
  draft?: DraftMessage;
}

export interface messages_forumTopics {
  _: "messages.forumTopics";
  order_by_create_date?: true;
  count: number;
  topics: Array<ForumTopic>;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
  pts: number;
}

export interface defaultHistoryTTL {
  _: "defaultHistoryTTL";
  period: number;
}

export interface exportedContactToken {
  _: "exportedContactToken";
  url: string;
  expires: number;
}

export interface requestPeerTypeUser {
  _: "requestPeerTypeUser";
  bot?: boolean;
  premium?: boolean;
}

export interface requestPeerTypeChat {
  _: "requestPeerTypeChat";
  creator?: true;
  bot_participant?: true;
  has_username?: boolean;
  forum?: boolean;
  user_admin_rights?: ChatAdminRights;
  bot_admin_rights?: ChatAdminRights;
}

export interface requestPeerTypeBroadcast {
  _: "requestPeerTypeBroadcast";
  creator?: true;
  has_username?: boolean;
  user_admin_rights?: ChatAdminRights;
  bot_admin_rights?: ChatAdminRights;
}

export interface emojiListNotModified {
  _: "emojiListNotModified";
}

export interface emojiList {
  _: "emojiList";
  hash: bigint;
  document_id: Array<bigint>;
}

export interface emojiGroup {
  _: "emojiGroup";
  title: string;
  icon_emoji_id: bigint;
  emoticons: Array<string>;
}

export interface emojiGroupGreeting {
  _: "emojiGroupGreeting";
  title: string;
  icon_emoji_id: bigint;
  emoticons: Array<string>;
}

export interface emojiGroupPremium {
  _: "emojiGroupPremium";
  title: string;
  icon_emoji_id: bigint;
}

export interface messages_emojiGroupsNotModified {
  _: "messages.emojiGroupsNotModified";
}

export interface messages_emojiGroups {
  _: "messages.emojiGroups";
  hash: number;
  groups: Array<EmojiGroup>;
}

export interface textWithEntities {
  _: "textWithEntities";
  text: string;
  entities: Array<MessageEntity>;
}

export interface messages_translateResult {
  _: "messages.translateResult";
  result: Array<TextWithEntities>;
}

export interface autoSaveSettings {
  _: "autoSaveSettings";
  photos?: true;
  videos?: true;
  video_max_size?: bigint;
}

export interface autoSaveException {
  _: "autoSaveException";
  peer: Peer;
  settings: AutoSaveSettings;
}

export interface account_autoSaveSettings {
  _: "account.autoSaveSettings";
  users_settings: AutoSaveSettings;
  chats_settings: AutoSaveSettings;
  broadcasts_settings: AutoSaveSettings;
  exceptions: Array<AutoSaveException>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface help_appConfigNotModified {
  _: "help.appConfigNotModified";
}

export interface help_appConfig {
  _: "help.appConfig";
  hash: number;
  config: JSONValue;
}

export interface inputBotAppID {
  _: "inputBotAppID";
  id: bigint;
  access_hash: bigint;
}

export interface inputBotAppShortName {
  _: "inputBotAppShortName";
  bot_id: InputUser;
  short_name: string;
}

export interface botAppNotModified {
  _: "botAppNotModified";
}

export interface botApp {
  _: "botApp";
  id: bigint;
  access_hash: bigint;
  short_name: string;
  title: string;
  description: string;
  photo: Photo;
  document?: Document;
  hash: bigint;
}

export interface messages_botApp {
  _: "messages.botApp";
  inactive?: true;
  request_write_access?: true;
  has_settings?: true;
  app: BotApp;
}

export interface inlineBotWebView {
  _: "inlineBotWebView";
  text: string;
  url: string;
}

export interface readParticipantDate {
  _: "readParticipantDate";
  user_id: bigint;
  date: number;
}

export interface inputChatlistDialogFilter {
  _: "inputChatlistDialogFilter";
  filter_id: number;
}

export interface exportedChatlistInvite {
  _: "exportedChatlistInvite";
  title: string;
  url: string;
  peers: Array<Peer>;
}

export interface chatlists_exportedChatlistInvite {
  _: "chatlists.exportedChatlistInvite";
  filter: DialogFilter;
  invite: ExportedChatlistInvite;
}

export interface chatlists_exportedInvites {
  _: "chatlists.exportedInvites";
  invites: Array<ExportedChatlistInvite>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface chatlists_chatlistInviteAlready {
  _: "chatlists.chatlistInviteAlready";
  filter_id: number;
  missing_peers: Array<Peer>;
  already_peers: Array<Peer>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface chatlists_chatlistInvite {
  _: "chatlists.chatlistInvite";
  title_noanimate?: true;
  title: TextWithEntities;
  emoticon?: string;
  peers: Array<Peer>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface chatlists_chatlistUpdates {
  _: "chatlists.chatlistUpdates";
  missing_peers: Array<Peer>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface bots_botInfo {
  _: "bots.botInfo";
  name: string;
  about: string;
  description: string;
}

export interface messagePeerVote {
  _: "messagePeerVote";
  peer: Peer;
  option: Uint8Array;
  date: number;
}

export interface messagePeerVoteInputOption {
  _: "messagePeerVoteInputOption";
  peer: Peer;
  date: number;
}

export interface messagePeerVoteMultiple {
  _: "messagePeerVoteMultiple";
  peer: Peer;
  options: Array<Uint8Array>;
  date: number;
}

export interface storyViews {
  _: "storyViews";
  has_viewers?: true;
  views_count: number;
  forwards_count?: number;
  reactions?: Array<ReactionCount>;
  reactions_count?: number;
  recent_viewers?: Array<bigint>;
}

export interface storyItemDeleted {
  _: "storyItemDeleted";
  id: number;
}

export interface storyItemSkipped {
  _: "storyItemSkipped";
  close_friends?: true;
  id: number;
  date: number;
  expire_date: number;
}

export interface storyItem {
  _: "storyItem";
  pinned?: true;
  public?: true;
  close_friends?: true;
  min?: true;
  noforwards?: true;
  edited?: true;
  contacts?: true;
  selected_contacts?: true;
  out?: true;
  id: number;
  date: number;
  from_id?: Peer;
  fwd_from?: StoryFwdHeader;
  expire_date: number;
  caption?: string;
  entities?: Array<MessageEntity>;
  media: MessageMedia;
  media_areas?: Array<MediaArea>;
  privacy?: Array<PrivacyRule>;
  views?: StoryViews;
  sent_reaction?: Reaction;
}

export interface stories_allStoriesNotModified {
  _: "stories.allStoriesNotModified";
  state: string;
  stealth_mode: StoriesStealthMode;
}

export interface stories_allStories {
  _: "stories.allStories";
  has_more?: true;
  count: number;
  state: string;
  peer_stories: Array<PeerStories>;
  chats: Array<Chat>;
  users: Array<User>;
  stealth_mode: StoriesStealthMode;
}

export interface stories_stories {
  _: "stories.stories";
  count: number;
  stories: Array<StoryItem>;
  pinned_to_top?: Array<number>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface storyView {
  _: "storyView";
  blocked?: true;
  blocked_my_stories_from?: true;
  user_id: bigint;
  date: number;
  reaction?: Reaction;
}

export interface storyViewPublicForward {
  _: "storyViewPublicForward";
  blocked?: true;
  blocked_my_stories_from?: true;
  message: Message;
}

export interface storyViewPublicRepost {
  _: "storyViewPublicRepost";
  blocked?: true;
  blocked_my_stories_from?: true;
  peer_id: Peer;
  story: StoryItem;
}

export interface stories_storyViewsList {
  _: "stories.storyViewsList";
  count: number;
  views_count: number;
  forwards_count: number;
  reactions_count: number;
  views: Array<StoryView>;
  chats: Array<Chat>;
  users: Array<User>;
  next_offset?: string;
}

export interface stories_storyViews {
  _: "stories.storyViews";
  views: Array<StoryViews>;
  users: Array<User>;
}

export interface inputReplyToMessage {
  _: "inputReplyToMessage";
  reply_to_msg_id: number;
  top_msg_id?: number;
  reply_to_peer_id?: InputPeer;
  quote_text?: string;
  quote_entities?: Array<MessageEntity>;
  quote_offset?: number;
}

export interface inputReplyToStory {
  _: "inputReplyToStory";
  peer: InputPeer;
  story_id: number;
}

export interface exportedStoryLink {
  _: "exportedStoryLink";
  link: string;
}

export interface storiesStealthMode {
  _: "storiesStealthMode";
  active_until_date?: number;
  cooldown_until_date?: number;
}

export interface mediaAreaCoordinates {
  _: "mediaAreaCoordinates";
  x: number;
  y: number;
  w: number;
  h: number;
  rotation: number;
  radius?: number;
}

export interface mediaAreaVenue {
  _: "mediaAreaVenue";
  coordinates: MediaAreaCoordinates;
  geo: GeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
}

export interface inputMediaAreaVenue {
  _: "inputMediaAreaVenue";
  coordinates: MediaAreaCoordinates;
  query_id: bigint;
  result_id: string;
}

export interface mediaAreaGeoPoint {
  _: "mediaAreaGeoPoint";
  coordinates: MediaAreaCoordinates;
  geo: GeoPoint;
  address?: GeoPointAddress;
}

export interface mediaAreaSuggestedReaction {
  _: "mediaAreaSuggestedReaction";
  dark?: true;
  flipped?: true;
  coordinates: MediaAreaCoordinates;
  reaction: Reaction;
}

export interface mediaAreaChannelPost {
  _: "mediaAreaChannelPost";
  coordinates: MediaAreaCoordinates;
  channel_id: bigint;
  msg_id: number;
}

export interface inputMediaAreaChannelPost {
  _: "inputMediaAreaChannelPost";
  coordinates: MediaAreaCoordinates;
  channel: InputChannel;
  msg_id: number;
}

export interface mediaAreaUrl {
  _: "mediaAreaUrl";
  coordinates: MediaAreaCoordinates;
  url: string;
}

export interface mediaAreaWeather {
  _: "mediaAreaWeather";
  coordinates: MediaAreaCoordinates;
  emoji: string;
  temperature_c: number;
  color: number;
}

export interface mediaAreaStarGift {
  _: "mediaAreaStarGift";
  coordinates: MediaAreaCoordinates;
  slug: string;
}

export interface peerStories {
  _: "peerStories";
  peer: Peer;
  max_read_id?: number;
  stories: Array<StoryItem>;
}

export interface stories_peerStories {
  _: "stories.peerStories";
  stories: PeerStories;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_webPage {
  _: "messages.webPage";
  webpage: WebPage;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface premiumGiftCodeOption {
  _: "premiumGiftCodeOption";
  users: number;
  months: number;
  store_product?: string;
  store_quantity?: number;
  currency: string;
  amount: bigint;
}

export interface payments_checkedGiftCode {
  _: "payments.checkedGiftCode";
  via_giveaway?: true;
  from_id?: Peer;
  giveaway_msg_id?: number;
  to_id?: bigint;
  date: number;
  months: number;
  used_date?: number;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface payments_giveawayInfo {
  _: "payments.giveawayInfo";
  participating?: true;
  preparing_results?: true;
  start_date: number;
  joined_too_early_date?: number;
  admin_disallowed_chat_id?: bigint;
  disallowed_country?: string;
}

export interface payments_giveawayInfoResults {
  _: "payments.giveawayInfoResults";
  winner?: true;
  refunded?: true;
  start_date: number;
  gift_code_slug?: string;
  stars_prize?: bigint;
  finish_date: number;
  winners_count: number;
  activated_count?: number;
}

export interface prepaidGiveaway {
  _: "prepaidGiveaway";
  id: bigint;
  months: number;
  quantity: number;
  date: number;
}

export interface prepaidStarsGiveaway {
  _: "prepaidStarsGiveaway";
  id: bigint;
  stars: bigint;
  quantity: number;
  boosts: number;
  date: number;
}

export interface boost {
  _: "boost";
  gift?: true;
  giveaway?: true;
  unclaimed?: true;
  id: string;
  user_id?: bigint;
  giveaway_msg_id?: number;
  date: number;
  expires: number;
  used_gift_slug?: string;
  multiplier?: number;
  stars?: bigint;
}

export interface premium_boostsList {
  _: "premium.boostsList";
  count: number;
  boosts: Array<Boost>;
  next_offset?: string;
  users: Array<User>;
}

export interface myBoost {
  _: "myBoost";
  slot: number;
  peer?: Peer;
  date: number;
  expires: number;
  cooldown_until_date?: number;
}

export interface premium_myBoosts {
  _: "premium.myBoosts";
  my_boosts: Array<MyBoost>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface premium_boostsStatus {
  _: "premium.boostsStatus";
  my_boost?: true;
  level: number;
  current_level_boosts: number;
  boosts: number;
  gift_boosts?: number;
  next_level_boosts?: number;
  premium_audience?: StatsPercentValue;
  boost_url: string;
  prepaid_giveaways?: Array<PrepaidGiveaway>;
  my_boost_slots?: Array<number>;
}

export interface storyFwdHeader {
  _: "storyFwdHeader";
  modified?: true;
  from?: Peer;
  from_name?: string;
  story_id?: number;
}

export interface postInteractionCountersMessage {
  _: "postInteractionCountersMessage";
  msg_id: number;
  views: number;
  forwards: number;
  reactions: number;
}

export interface postInteractionCountersStory {
  _: "postInteractionCountersStory";
  story_id: number;
  views: number;
  forwards: number;
  reactions: number;
}

export interface stats_storyStats {
  _: "stats.storyStats";
  views_graph: StatsGraph;
  reactions_by_emotion_graph: StatsGraph;
}

export interface publicForwardMessage {
  _: "publicForwardMessage";
  message: Message;
}

export interface publicForwardStory {
  _: "publicForwardStory";
  peer: Peer;
  story: StoryItem;
}

export interface stats_publicForwards {
  _: "stats.publicForwards";
  count: number;
  forwards: Array<PublicForward>;
  next_offset?: string;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface peerColor {
  _: "peerColor";
  color?: number;
  background_emoji_id?: bigint;
}

export interface help_peerColorSet {
  _: "help.peerColorSet";
  colors: Array<number>;
}

export interface help_peerColorProfileSet {
  _: "help.peerColorProfileSet";
  palette_colors: Array<number>;
  bg_colors: Array<number>;
  story_colors: Array<number>;
}

export interface help_peerColorOption {
  _: "help.peerColorOption";
  hidden?: true;
  color_id: number;
  colors?: help_PeerColorSet;
  dark_colors?: help_PeerColorSet;
  channel_min_level?: number;
  group_min_level?: number;
}

export interface help_peerColorsNotModified {
  _: "help.peerColorsNotModified";
}

export interface help_peerColors {
  _: "help.peerColors";
  hash: number;
  colors: Array<help_PeerColorOption>;
}

export interface storyReaction {
  _: "storyReaction";
  peer_id: Peer;
  date: number;
  reaction: Reaction;
}

export interface storyReactionPublicForward {
  _: "storyReactionPublicForward";
  message: Message;
}

export interface storyReactionPublicRepost {
  _: "storyReactionPublicRepost";
  peer_id: Peer;
  story: StoryItem;
}

export interface stories_storyReactionsList {
  _: "stories.storyReactionsList";
  count: number;
  reactions: Array<StoryReaction>;
  chats: Array<Chat>;
  users: Array<User>;
  next_offset?: string;
}

export interface savedDialog {
  _: "savedDialog";
  pinned?: true;
  peer: Peer;
  top_message: number;
}

export interface messages_savedDialogs {
  _: "messages.savedDialogs";
  dialogs: Array<SavedDialog>;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_savedDialogsSlice {
  _: "messages.savedDialogsSlice";
  count: number;
  dialogs: Array<SavedDialog>;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_savedDialogsNotModified {
  _: "messages.savedDialogsNotModified";
  count: number;
}

export interface savedReactionTag {
  _: "savedReactionTag";
  reaction: Reaction;
  title?: string;
  count: number;
}

export interface messages_savedReactionTagsNotModified {
  _: "messages.savedReactionTagsNotModified";
}

export interface messages_savedReactionTags {
  _: "messages.savedReactionTags";
  tags: Array<SavedReactionTag>;
  hash: bigint;
}

export interface outboxReadDate {
  _: "outboxReadDate";
  date: number;
}

export interface smsjobs_eligibleToJoin {
  _: "smsjobs.eligibleToJoin";
  terms_url: string;
  monthly_sent_sms: number;
}

export interface smsjobs_status {
  _: "smsjobs.status";
  allow_international?: true;
  recent_sent: number;
  recent_since: number;
  recent_remains: number;
  total_sent: number;
  total_since: number;
  last_gift_slug?: string;
  terms_url: string;
}

export interface smsJob {
  _: "smsJob";
  job_id: string;
  phone_number: string;
  text: string;
}

export interface businessWeeklyOpen {
  _: "businessWeeklyOpen";
  start_minute: number;
  end_minute: number;
}

export interface businessWorkHours {
  _: "businessWorkHours";
  open_now?: true;
  timezone_id: string;
  weekly_open: Array<BusinessWeeklyOpen>;
}

export interface businessLocation {
  _: "businessLocation";
  geo_point?: GeoPoint;
  address: string;
}

export interface inputBusinessRecipients {
  _: "inputBusinessRecipients";
  existing_chats?: true;
  new_chats?: true;
  contacts?: true;
  non_contacts?: true;
  exclude_selected?: true;
  users?: Array<InputUser>;
}

export interface businessRecipients {
  _: "businessRecipients";
  existing_chats?: true;
  new_chats?: true;
  contacts?: true;
  non_contacts?: true;
  exclude_selected?: true;
  users?: Array<bigint>;
}

export interface businessAwayMessageScheduleAlways {
  _: "businessAwayMessageScheduleAlways";
}

export interface businessAwayMessageScheduleOutsideWorkHours {
  _: "businessAwayMessageScheduleOutsideWorkHours";
}

export interface businessAwayMessageScheduleCustom {
  _: "businessAwayMessageScheduleCustom";
  start_date: number;
  end_date: number;
}

export interface inputBusinessGreetingMessage {
  _: "inputBusinessGreetingMessage";
  shortcut_id: number;
  recipients: InputBusinessRecipients;
  no_activity_days: number;
}

export interface businessGreetingMessage {
  _: "businessGreetingMessage";
  shortcut_id: number;
  recipients: BusinessRecipients;
  no_activity_days: number;
}

export interface inputBusinessAwayMessage {
  _: "inputBusinessAwayMessage";
  offline_only?: true;
  shortcut_id: number;
  schedule: BusinessAwayMessageSchedule;
  recipients: InputBusinessRecipients;
}

export interface businessAwayMessage {
  _: "businessAwayMessage";
  offline_only?: true;
  shortcut_id: number;
  schedule: BusinessAwayMessageSchedule;
  recipients: BusinessRecipients;
}

export interface timezone {
  _: "timezone";
  id: string;
  name: string;
  utc_offset: number;
}

export interface help_timezonesListNotModified {
  _: "help.timezonesListNotModified";
}

export interface help_timezonesList {
  _: "help.timezonesList";
  timezones: Array<Timezone>;
  hash: number;
}

export interface quickReply {
  _: "quickReply";
  shortcut_id: number;
  shortcut: string;
  top_message: number;
  count: number;
}

export interface inputQuickReplyShortcut {
  _: "inputQuickReplyShortcut";
  shortcut: string;
}

export interface inputQuickReplyShortcutId {
  _: "inputQuickReplyShortcutId";
  shortcut_id: number;
}

export interface messages_quickReplies {
  _: "messages.quickReplies";
  quick_replies: Array<QuickReply>;
  messages: Array<Message>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface messages_quickRepliesNotModified {
  _: "messages.quickRepliesNotModified";
}

export interface connectedBot {
  _: "connectedBot";
  can_reply?: true;
  bot_id: bigint;
  recipients: BusinessBotRecipients;
}

export interface account_connectedBots {
  _: "account.connectedBots";
  connected_bots: Array<ConnectedBot>;
  users: Array<User>;
}

export interface messages_dialogFilters {
  _: "messages.dialogFilters";
  tags_enabled?: true;
  filters: Array<DialogFilter>;
}

export interface birthday {
  _: "birthday";
  day: number;
  month: number;
  year?: number;
}

export interface botBusinessConnection {
  _: "botBusinessConnection";
  can_reply?: true;
  disabled?: true;
  connection_id: string;
  user_id: bigint;
  dc_id: number;
  date: number;
}

export interface inputBusinessIntro {
  _: "inputBusinessIntro";
  title: string;
  description: string;
  sticker?: InputDocument;
}

export interface businessIntro {
  _: "businessIntro";
  title: string;
  description: string;
  sticker?: Document;
}

export interface messages_myStickers {
  _: "messages.myStickers";
  count: number;
  sets: Array<StickerSetCovered>;
}

export interface inputCollectibleUsername {
  _: "inputCollectibleUsername";
  username: string;
}

export interface inputCollectiblePhone {
  _: "inputCollectiblePhone";
  phone: string;
}

export interface fragment_collectibleInfo {
  _: "fragment.collectibleInfo";
  purchase_date: number;
  currency: string;
  amount: bigint;
  crypto_currency: string;
  crypto_amount: bigint;
  url: string;
}

export interface inputBusinessBotRecipients {
  _: "inputBusinessBotRecipients";
  existing_chats?: true;
  new_chats?: true;
  contacts?: true;
  non_contacts?: true;
  exclude_selected?: true;
  users?: Array<InputUser>;
  exclude_users?: Array<InputUser>;
}

export interface businessBotRecipients {
  _: "businessBotRecipients";
  existing_chats?: true;
  new_chats?: true;
  contacts?: true;
  non_contacts?: true;
  exclude_selected?: true;
  users?: Array<bigint>;
  exclude_users?: Array<bigint>;
}

export interface contactBirthday {
  _: "contactBirthday";
  contact_id: bigint;
  birthday: Birthday;
}

export interface contacts_contactBirthdays {
  _: "contacts.contactBirthdays";
  contacts: Array<ContactBirthday>;
  users: Array<User>;
}

export interface missingInvitee {
  _: "missingInvitee";
  premium_would_allow_invite?: true;
  premium_required_for_pm?: true;
  user_id: bigint;
}

export interface messages_invitedUsers {
  _: "messages.invitedUsers";
  updates: Updates;
  missing_invitees: Array<MissingInvitee>;
}

export interface inputBusinessChatLink {
  _: "inputBusinessChatLink";
  message: string;
  entities?: Array<MessageEntity>;
  title?: string;
}

export interface businessChatLink {
  _: "businessChatLink";
  link: string;
  message: string;
  entities?: Array<MessageEntity>;
  title?: string;
  views: number;
}

export interface account_businessChatLinks {
  _: "account.businessChatLinks";
  links: Array<BusinessChatLink>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface account_resolvedBusinessChatLinks {
  _: "account.resolvedBusinessChatLinks";
  peer: Peer;
  message: string;
  entities?: Array<MessageEntity>;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface requestedPeerUser {
  _: "requestedPeerUser";
  user_id: bigint;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo?: Photo;
}

export interface requestedPeerChat {
  _: "requestedPeerChat";
  chat_id: bigint;
  title?: string;
  photo?: Photo;
}

export interface requestedPeerChannel {
  _: "requestedPeerChannel";
  channel_id: bigint;
  title?: string;
  username?: string;
  photo?: Photo;
}

export interface sponsoredMessageReportOption {
  _: "sponsoredMessageReportOption";
  text: string;
  option: Uint8Array;
}

export interface channels_sponsoredMessageReportResultChooseOption {
  _: "channels.sponsoredMessageReportResultChooseOption";
  title: string;
  options: Array<SponsoredMessageReportOption>;
}

export interface channels_sponsoredMessageReportResultAdsHidden {
  _: "channels.sponsoredMessageReportResultAdsHidden";
}

export interface channels_sponsoredMessageReportResultReported {
  _: "channels.sponsoredMessageReportResultReported";
}

export interface stats_broadcastRevenueStats {
  _: "stats.broadcastRevenueStats";
  top_hours_graph: StatsGraph;
  revenue_graph: StatsGraph;
  balances: BroadcastRevenueBalances;
  usd_rate: number;
}

export interface stats_broadcastRevenueWithdrawalUrl {
  _: "stats.broadcastRevenueWithdrawalUrl";
  url: string;
}

export interface broadcastRevenueTransactionProceeds {
  _: "broadcastRevenueTransactionProceeds";
  amount: bigint;
  from_date: number;
  to_date: number;
}

export interface broadcastRevenueTransactionWithdrawal {
  _: "broadcastRevenueTransactionWithdrawal";
  pending?: true;
  failed?: true;
  amount: bigint;
  date: number;
  provider: string;
  transaction_date?: number;
  transaction_url?: string;
}

export interface broadcastRevenueTransactionRefund {
  _: "broadcastRevenueTransactionRefund";
  amount: bigint;
  date: number;
  provider: string;
}

export interface stats_broadcastRevenueTransactions {
  _: "stats.broadcastRevenueTransactions";
  count: number;
  transactions: Array<BroadcastRevenueTransaction>;
}

export interface reactionNotificationsFromContacts {
  _: "reactionNotificationsFromContacts";
}

export interface reactionNotificationsFromAll {
  _: "reactionNotificationsFromAll";
}

export interface reactionsNotifySettings {
  _: "reactionsNotifySettings";
  messages_notify_from?: ReactionNotificationsFrom;
  stories_notify_from?: ReactionNotificationsFrom;
  sound: NotificationSound;
  show_previews: boolean;
}

export interface broadcastRevenueBalances {
  _: "broadcastRevenueBalances";
  withdrawal_enabled?: true;
  current_balance: bigint;
  available_balance: bigint;
  overall_revenue: bigint;
}

export interface availableEffect {
  _: "availableEffect";
  premium_required?: true;
  id: bigint;
  emoticon: string;
  static_icon_id?: bigint;
  effect_sticker_id: bigint;
  effect_animation_id?: bigint;
}

export interface messages_availableEffectsNotModified {
  _: "messages.availableEffectsNotModified";
}

export interface messages_availableEffects {
  _: "messages.availableEffects";
  hash: number;
  effects: Array<AvailableEffect>;
  documents: Array<Document>;
}

export interface factCheck {
  _: "factCheck";
  need_check?: true;
  country?: string;
  text?: TextWithEntities;
  hash: bigint;
}

export interface starsTransactionPeerUnsupported {
  _: "starsTransactionPeerUnsupported";
}

export interface starsTransactionPeerAppStore {
  _: "starsTransactionPeerAppStore";
}

export interface starsTransactionPeerPlayMarket {
  _: "starsTransactionPeerPlayMarket";
}

export interface starsTransactionPeerPremiumBot {
  _: "starsTransactionPeerPremiumBot";
}

export interface starsTransactionPeerFragment {
  _: "starsTransactionPeerFragment";
}

export interface starsTransactionPeer {
  _: "starsTransactionPeer";
  peer: Peer;
}

export interface starsTransactionPeerAds {
  _: "starsTransactionPeerAds";
}

export interface starsTransactionPeerAPI {
  _: "starsTransactionPeerAPI";
}

export interface starsTopupOption {
  _: "starsTopupOption";
  extended?: true;
  stars: bigint;
  store_product?: string;
  currency: string;
  amount: bigint;
}

export interface starsTransaction {
  _: "starsTransaction";
  refund?: true;
  pending?: true;
  failed?: true;
  gift?: true;
  reaction?: true;
  stargift_upgrade?: true;
  id: string;
  stars: StarsAmount;
  date: number;
  peer: StarsTransactionPeer;
  title?: string;
  description?: string;
  photo?: WebDocument;
  transaction_date?: number;
  transaction_url?: string;
  bot_payload?: Uint8Array;
  msg_id?: number;
  extended_media?: Array<MessageMedia>;
  subscription_period?: number;
  giveaway_post_id?: number;
  stargift?: StarGift;
  floodskip_number?: number;
  starref_commission_permille?: number;
  starref_peer?: Peer;
  starref_amount?: StarsAmount;
  paid_messages?: number;
  premium_gift_months?: number;
}

export interface payments_starsStatus {
  _: "payments.starsStatus";
  balance: StarsAmount;
  subscriptions?: Array<StarsSubscription>;
  subscriptions_next_offset?: string;
  subscriptions_missing_balance?: bigint;
  history?: Array<StarsTransaction>;
  next_offset?: string;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface foundStory {
  _: "foundStory";
  peer: Peer;
  story: StoryItem;
}

export interface stories_foundStories {
  _: "stories.foundStories";
  count: number;
  stories: Array<FoundStory>;
  next_offset?: string;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface geoPointAddress {
  _: "geoPointAddress";
  country_iso2: string;
  state?: string;
  city?: string;
  street?: string;
}

export interface starsRevenueStatus {
  _: "starsRevenueStatus";
  withdrawal_enabled?: true;
  current_balance: StarsAmount;
  available_balance: StarsAmount;
  overall_revenue: StarsAmount;
  next_withdrawal_at?: number;
}

export interface payments_starsRevenueStats {
  _: "payments.starsRevenueStats";
  revenue_graph: StatsGraph;
  status: StarsRevenueStatus;
  usd_rate: number;
}

export interface payments_starsRevenueWithdrawalUrl {
  _: "payments.starsRevenueWithdrawalUrl";
  url: string;
}

export interface payments_starsRevenueAdsAccountUrl {
  _: "payments.starsRevenueAdsAccountUrl";
  url: string;
}

export interface inputStarsTransaction {
  _: "inputStarsTransaction";
  refund?: true;
  id: string;
}

export interface starsGiftOption {
  _: "starsGiftOption";
  extended?: true;
  stars: bigint;
  store_product?: string;
  currency: string;
  amount: bigint;
}

export interface bots_popularAppBots {
  _: "bots.popularAppBots";
  next_offset?: string;
  users: Array<User>;
}

export interface botPreviewMedia {
  _: "botPreviewMedia";
  date: number;
  media: MessageMedia;
}

export interface bots_previewInfo {
  _: "bots.previewInfo";
  media: Array<BotPreviewMedia>;
  lang_codes: Array<string>;
}

export interface starsSubscriptionPricing {
  _: "starsSubscriptionPricing";
  period: number;
  amount: bigint;
}

export interface starsSubscription {
  _: "starsSubscription";
  canceled?: true;
  can_refulfill?: true;
  missing_balance?: true;
  bot_canceled?: true;
  id: string;
  peer: Peer;
  until_date: number;
  pricing: StarsSubscriptionPricing;
  chat_invite_hash?: string;
  title?: string;
  photo?: WebDocument;
  invoice_slug?: string;
}

export interface messageReactor {
  _: "messageReactor";
  top?: true;
  my?: true;
  anonymous?: true;
  peer_id?: Peer;
  count: number;
}

export interface starsGiveawayOption {
  _: "starsGiveawayOption";
  extended?: true;
  default?: true;
  stars: bigint;
  yearly_boosts: number;
  store_product?: string;
  currency: string;
  amount: bigint;
  winners: Array<StarsGiveawayWinnersOption>;
}

export interface starsGiveawayWinnersOption {
  _: "starsGiveawayWinnersOption";
  default?: true;
  users: number;
  per_user_stars: bigint;
}

export interface starGift {
  _: "starGift";
  limited?: true;
  sold_out?: true;
  birthday?: true;
  id: bigint;
  sticker: Document;
  stars: bigint;
  availability_remains?: number;
  availability_total?: number;
  convert_stars: bigint;
  first_sale_date?: number;
  last_sale_date?: number;
  upgrade_stars?: bigint;
}

export interface starGiftUnique {
  _: "starGiftUnique";
  id: bigint;
  title: string;
  slug: string;
  num: number;
  owner_id?: Peer;
  owner_name?: string;
  owner_address?: string;
  attributes: Array<StarGiftAttribute>;
  availability_issued: number;
  availability_total: number;
  gift_address?: string;
}

export interface payments_starGiftsNotModified {
  _: "payments.starGiftsNotModified";
}

export interface payments_starGifts {
  _: "payments.starGifts";
  hash: number;
  gifts: Array<StarGift>;
}

export interface messageReportOption {
  _: "messageReportOption";
  text: string;
  option: Uint8Array;
}

export interface reportResultChooseOption {
  _: "reportResultChooseOption";
  title: string;
  options: Array<MessageReportOption>;
}

export interface reportResultAddComment {
  _: "reportResultAddComment";
  optional?: true;
  option: Uint8Array;
}

export interface reportResultReported {
  _: "reportResultReported";
}

export interface messages_botPreparedInlineMessage {
  _: "messages.botPreparedInlineMessage";
  id: string;
  expire_date: number;
}

export interface messages_preparedInlineMessage {
  _: "messages.preparedInlineMessage";
  query_id: bigint;
  result: BotInlineResult;
  peer_types: Array<InlineQueryPeerType>;
  cache_time: number;
  users: Array<User>;
}

export interface botAppSettings {
  _: "botAppSettings";
  placeholder_path?: Uint8Array;
  background_color?: number;
  background_dark_color?: number;
  header_color?: number;
  header_dark_color?: number;
}

export interface starRefProgram {
  _: "starRefProgram";
  bot_id: bigint;
  commission_permille: number;
  duration_months?: number;
  end_date?: number;
  daily_revenue_per_user?: StarsAmount;
}

export interface connectedBotStarRef {
  _: "connectedBotStarRef";
  revoked?: true;
  url: string;
  date: number;
  bot_id: bigint;
  commission_permille: number;
  duration_months?: number;
  participants: bigint;
  revenue: bigint;
}

export interface payments_connectedStarRefBots {
  _: "payments.connectedStarRefBots";
  count: number;
  connected_bots: Array<ConnectedBotStarRef>;
  users: Array<User>;
}

export interface payments_suggestedStarRefBots {
  _: "payments.suggestedStarRefBots";
  count: number;
  suggested_bots: Array<StarRefProgram>;
  users: Array<User>;
  next_offset?: string;
}

export interface starsAmount {
  _: "starsAmount";
  amount: bigint;
  nanos: number;
}

export interface messages_foundStickersNotModified {
  _: "messages.foundStickersNotModified";
  next_offset?: number;
}

export interface messages_foundStickers {
  _: "messages.foundStickers";
  next_offset?: number;
  hash: bigint;
  stickers: Array<Document>;
}

export interface botVerifierSettings {
  _: "botVerifierSettings";
  can_modify_custom_description?: true;
  icon: bigint;
  company: string;
  custom_description?: string;
}

export interface botVerification {
  _: "botVerification";
  bot_id: bigint;
  icon: bigint;
  description: string;
}

export interface starGiftAttributeModel {
  _: "starGiftAttributeModel";
  name: string;
  document: Document;
  rarity_permille: number;
}

export interface starGiftAttributePattern {
  _: "starGiftAttributePattern";
  name: string;
  document: Document;
  rarity_permille: number;
}

export interface starGiftAttributeBackdrop {
  _: "starGiftAttributeBackdrop";
  name: string;
  center_color: number;
  edge_color: number;
  pattern_color: number;
  text_color: number;
  rarity_permille: number;
}

export interface starGiftAttributeOriginalDetails {
  _: "starGiftAttributeOriginalDetails";
  sender_id?: Peer;
  recipient_id: Peer;
  date: number;
  message?: TextWithEntities;
}

export interface payments_starGiftUpgradePreview {
  _: "payments.starGiftUpgradePreview";
  sample_attributes: Array<StarGiftAttribute>;
}

export interface users_users {
  _: "users.users";
  users: Array<User>;
}

export interface users_usersSlice {
  _: "users.usersSlice";
  count: number;
  users: Array<User>;
}

export interface payments_uniqueStarGift {
  _: "payments.uniqueStarGift";
  gift: StarGift;
  users: Array<User>;
}

export interface messages_webPagePreview {
  _: "messages.webPagePreview";
  media: MessageMedia;
  users: Array<User>;
}

export interface savedStarGift {
  _: "savedStarGift";
  name_hidden?: true;
  unsaved?: true;
  refunded?: true;
  can_upgrade?: true;
  pinned_to_top?: true;
  from_id?: Peer;
  date: number;
  gift: StarGift;
  message?: TextWithEntities;
  msg_id?: number;
  saved_id?: bigint;
  convert_stars?: bigint;
  upgrade_stars?: bigint;
  can_export_at?: number;
  transfer_stars?: bigint;
}

export interface payments_savedStarGifts {
  _: "payments.savedStarGifts";
  count: number;
  chat_notifications_enabled?: boolean;
  gifts: Array<SavedStarGift>;
  next_offset?: string;
  chats: Array<Chat>;
  users: Array<User>;
}

export interface inputSavedStarGiftUser {
  _: "inputSavedStarGiftUser";
  msg_id: number;
}

export interface inputSavedStarGiftChat {
  _: "inputSavedStarGiftChat";
  peer: InputPeer;
  saved_id: bigint;
}

export interface payments_starGiftWithdrawalUrl {
  _: "payments.starGiftWithdrawalUrl";
  url: string;
}

export interface paidReactionPrivacyDefault {
  _: "paidReactionPrivacyDefault";
}

export interface paidReactionPrivacyAnonymous {
  _: "paidReactionPrivacyAnonymous";
}

export interface paidReactionPrivacyPeer {
  _: "paidReactionPrivacyPeer";
  peer: InputPeer;
}

export interface account_paidMessagesRevenue {
  _: "account.paidMessagesRevenue";
  stars_amount: bigint;
}

export interface requirementToContactEmpty {
  _: "requirementToContactEmpty";
}

export interface requirementToContactPremium {
  _: "requirementToContactPremium";
}

export interface requirementToContactPaidMessages {
  _: "requirementToContactPaidMessages";
  stars_amount: bigint;
}

export interface req_pq_multi {
  _: "req_pq_multi";
  nonce: bigint;
  [R]?: ResPQ;
}

export interface req_DH_params {
  _: "req_DH_params";
  nonce: bigint;
  server_nonce: bigint;
  p: Uint8Array;
  q: Uint8Array;
  public_key_fingerprint: bigint;
  encrypted_data: Uint8Array;
  [R]?: Server_DH_Params;
}

export interface set_client_DH_params {
  _: "set_client_DH_params";
  nonce: bigint;
  server_nonce: bigint;
  encrypted_data: Uint8Array;
  [R]?: Set_client_DH_params_answer;
}

export interface rpc_drop_answer {
  _: "rpc_drop_answer";
  req_msg_id: bigint;
  [R]?: RpcDropAnswer;
}

export interface get_future_salts {
  _: "get_future_salts";
  num: number;
  [R]?: FutureSalts;
}

export interface ping {
  _: "ping";
  ping_id: bigint;
  [R]?: Pong;
}

export interface ping_delay_disconnect {
  _: "ping_delay_disconnect";
  ping_id: bigint;
  disconnect_delay: number;
  [R]?: Pong;
}

export interface destroy_session {
  _: "destroy_session";
  session_id: bigint;
  [R]?: DestroySessionRes;
}

export interface destroy_auth_key {
  _: "destroy_auth_key";
  [R]?: DestroyAuthKeyRes;
}

export interface invokeWithBusinessConnectionPrefix {
  _: "invokeWithBusinessConnectionPrefix";
  connection_id: string;
  [R]?: Error;
}

export interface invokeWithGooglePlayIntegrityPrefix {
  _: "invokeWithGooglePlayIntegrityPrefix";
  nonce: string;
  token: string;
  [R]?: Error;
}

export interface invokeWithApnsSecretPrefix {
  _: "invokeWithApnsSecretPrefix";
  nonce: string;
  secret: string;
  [R]?: Error;
}

export interface invokeWithReCaptchaPrefix {
  _: "invokeWithReCaptchaPrefix";
  token: string;
  [R]?: Error;
}

export interface invokeAfterMsg<T> {
  _: "invokeAfterMsg";
  msg_id: bigint;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeAfterMsgs<T> {
  _: "invokeAfterMsgs";
  msg_ids: Array<bigint>;
  query: T;
  [R]?: ReturnType<T>;
}

export interface initConnection<T> {
  _: "initConnection";
  api_id: number;
  device_model: string;
  system_version: string;
  app_version: string;
  system_lang_code: string;
  lang_pack: string;
  lang_code: string;
  proxy?: InputClientProxy;
  params?: JSONValue;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithLayer<T> {
  _: "invokeWithLayer";
  layer: number;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithoutUpdates<T> {
  _: "invokeWithoutUpdates";
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithMessagesRange<T> {
  _: "invokeWithMessagesRange";
  range: MessageRange;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithTakeout<T> {
  _: "invokeWithTakeout";
  takeout_id: bigint;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithBusinessConnection<T> {
  _: "invokeWithBusinessConnection";
  connection_id: string;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithGooglePlayIntegrity<T> {
  _: "invokeWithGooglePlayIntegrity";
  nonce: string;
  token: string;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithApnsSecret<T> {
  _: "invokeWithApnsSecret";
  nonce: string;
  secret: string;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithReCaptcha<T> {
  _: "invokeWithReCaptcha";
  token: string;
  query: T;
  [R]?: ReturnType<T>;
}

export interface auth_sendCode {
  _: "auth.sendCode";
  phone_number: string;
  api_id: number;
  api_hash: string;
  settings: CodeSettings;
  [R]?: auth_SentCode;
}

export interface auth_signUp {
  _: "auth.signUp";
  no_joined_notifications?: true;
  phone_number: string;
  phone_code_hash: string;
  first_name: string;
  last_name: string;
  [R]?: auth_Authorization;
}

export interface auth_signIn {
  _: "auth.signIn";
  phone_number: string;
  phone_code_hash: string;
  phone_code?: string;
  email_verification?: EmailVerification;
  [R]?: auth_Authorization;
}

export interface auth_logOut {
  _: "auth.logOut";
  [R]?: auth_LoggedOut;
}

export interface auth_resetAuthorizations {
  _: "auth.resetAuthorizations";
  [R]?: boolean;
}

export interface auth_exportAuthorization {
  _: "auth.exportAuthorization";
  dc_id: number;
  [R]?: auth_ExportedAuthorization;
}

export interface auth_importAuthorization {
  _: "auth.importAuthorization";
  id: bigint;
  bytes: Uint8Array;
  [R]?: auth_Authorization;
}

export interface auth_bindTempAuthKey {
  _: "auth.bindTempAuthKey";
  perm_auth_key_id: bigint;
  nonce: bigint;
  expires_at: number;
  encrypted_message: Uint8Array;
  [R]?: boolean;
}

export interface auth_importBotAuthorization {
  _: "auth.importBotAuthorization";
  flags: number;
  api_id: number;
  api_hash: string;
  bot_auth_token: string;
  [R]?: auth_Authorization;
}

export interface auth_checkPassword {
  _: "auth.checkPassword";
  password: InputCheckPasswordSRP;
  [R]?: auth_Authorization;
}

export interface auth_requestPasswordRecovery {
  _: "auth.requestPasswordRecovery";
  [R]?: auth_PasswordRecovery;
}

export interface auth_recoverPassword {
  _: "auth.recoverPassword";
  code: string;
  new_settings?: account_PasswordInputSettings;
  [R]?: auth_Authorization;
}

export interface auth_resendCode {
  _: "auth.resendCode";
  phone_number: string;
  phone_code_hash: string;
  reason?: string;
  [R]?: auth_SentCode;
}

export interface auth_cancelCode {
  _: "auth.cancelCode";
  phone_number: string;
  phone_code_hash: string;
  [R]?: boolean;
}

export interface auth_dropTempAuthKeys {
  _: "auth.dropTempAuthKeys";
  except_auth_keys: Array<bigint>;
  [R]?: boolean;
}

export interface auth_exportLoginToken {
  _: "auth.exportLoginToken";
  api_id: number;
  api_hash: string;
  except_ids: Array<bigint>;
  [R]?: auth_LoginToken;
}

export interface auth_importLoginToken {
  _: "auth.importLoginToken";
  token: Uint8Array;
  [R]?: auth_LoginToken;
}

export interface auth_acceptLoginToken {
  _: "auth.acceptLoginToken";
  token: Uint8Array;
  [R]?: Authorization;
}

export interface auth_checkRecoveryPassword {
  _: "auth.checkRecoveryPassword";
  code: string;
  [R]?: boolean;
}

export interface auth_importWebTokenAuthorization {
  _: "auth.importWebTokenAuthorization";
  api_id: number;
  api_hash: string;
  web_auth_token: string;
  [R]?: auth_Authorization;
}

export interface auth_requestFirebaseSms {
  _: "auth.requestFirebaseSms";
  phone_number: string;
  phone_code_hash: string;
  safety_net_token?: string;
  play_integrity_token?: string;
  ios_push_secret?: string;
  [R]?: boolean;
}

export interface auth_resetLoginEmail {
  _: "auth.resetLoginEmail";
  phone_number: string;
  phone_code_hash: string;
  [R]?: auth_SentCode;
}

export interface auth_reportMissingCode {
  _: "auth.reportMissingCode";
  phone_number: string;
  phone_code_hash: string;
  mnc: string;
  [R]?: boolean;
}

export interface account_registerDevice {
  _: "account.registerDevice";
  no_muted?: true;
  token_type: number;
  token: string;
  app_sandbox: boolean;
  secret: Uint8Array;
  other_uids: Array<bigint>;
  [R]?: boolean;
}

export interface account_unregisterDevice {
  _: "account.unregisterDevice";
  token_type: number;
  token: string;
  other_uids: Array<bigint>;
  [R]?: boolean;
}

export interface account_updateNotifySettings {
  _: "account.updateNotifySettings";
  peer: InputNotifyPeer;
  settings: InputPeerNotifySettings;
  [R]?: boolean;
}

export interface account_getNotifySettings {
  _: "account.getNotifySettings";
  peer: InputNotifyPeer;
  [R]?: PeerNotifySettings;
}

export interface account_resetNotifySettings {
  _: "account.resetNotifySettings";
  [R]?: boolean;
}

export interface account_updateProfile {
  _: "account.updateProfile";
  first_name?: string;
  last_name?: string;
  about?: string;
  [R]?: User;
}

export interface account_updateStatus {
  _: "account.updateStatus";
  offline: boolean;
  [R]?: boolean;
}

export interface account_getWallPapers {
  _: "account.getWallPapers";
  hash: bigint;
  [R]?: account_WallPapers;
}

export interface account_reportPeer {
  _: "account.reportPeer";
  peer: InputPeer;
  reason: ReportReason;
  message: string;
  [R]?: boolean;
}

export interface account_checkUsername {
  _: "account.checkUsername";
  username: string;
  [R]?: boolean;
}

export interface account_updateUsername {
  _: "account.updateUsername";
  username: string;
  [R]?: User;
}

export interface account_getPrivacy {
  _: "account.getPrivacy";
  key: InputPrivacyKey;
  [R]?: account_PrivacyRules;
}

export interface account_setPrivacy {
  _: "account.setPrivacy";
  key: InputPrivacyKey;
  rules: Array<InputPrivacyRule>;
  [R]?: account_PrivacyRules;
}

export interface account_deleteAccount {
  _: "account.deleteAccount";
  reason: string;
  password?: InputCheckPasswordSRP;
  [R]?: boolean;
}

export interface account_getAccountTTL {
  _: "account.getAccountTTL";
  [R]?: AccountDaysTTL;
}

export interface account_setAccountTTL {
  _: "account.setAccountTTL";
  ttl: AccountDaysTTL;
  [R]?: boolean;
}

export interface account_sendChangePhoneCode {
  _: "account.sendChangePhoneCode";
  phone_number: string;
  settings: CodeSettings;
  [R]?: auth_SentCode;
}

export interface account_changePhone {
  _: "account.changePhone";
  phone_number: string;
  phone_code_hash: string;
  phone_code: string;
  [R]?: User;
}

export interface account_updateDeviceLocked {
  _: "account.updateDeviceLocked";
  period: number;
  [R]?: boolean;
}

export interface account_getAuthorizations {
  _: "account.getAuthorizations";
  [R]?: account_Authorizations;
}

export interface account_resetAuthorization {
  _: "account.resetAuthorization";
  hash: bigint;
  [R]?: boolean;
}

export interface account_getPassword {
  _: "account.getPassword";
  [R]?: account_Password;
}

export interface account_getPasswordSettings {
  _: "account.getPasswordSettings";
  password: InputCheckPasswordSRP;
  [R]?: account_PasswordSettings;
}

export interface account_updatePasswordSettings {
  _: "account.updatePasswordSettings";
  password: InputCheckPasswordSRP;
  new_settings: account_PasswordInputSettings;
  [R]?: boolean;
}

export interface account_sendConfirmPhoneCode {
  _: "account.sendConfirmPhoneCode";
  hash: string;
  settings: CodeSettings;
  [R]?: auth_SentCode;
}

export interface account_confirmPhone {
  _: "account.confirmPhone";
  phone_code_hash: string;
  phone_code: string;
  [R]?: boolean;
}

export interface account_getTmpPassword {
  _: "account.getTmpPassword";
  password: InputCheckPasswordSRP;
  period: number;
  [R]?: account_TmpPassword;
}

export interface account_getWebAuthorizations {
  _: "account.getWebAuthorizations";
  [R]?: account_WebAuthorizations;
}

export interface account_resetWebAuthorization {
  _: "account.resetWebAuthorization";
  hash: bigint;
  [R]?: boolean;
}

export interface account_resetWebAuthorizations {
  _: "account.resetWebAuthorizations";
  [R]?: boolean;
}

export interface account_getAllSecureValues {
  _: "account.getAllSecureValues";
  [R]?: Array<SecureValue>;
}

export interface account_getSecureValue {
  _: "account.getSecureValue";
  types: Array<SecureValueType>;
  [R]?: Array<SecureValue>;
}

export interface account_saveSecureValue {
  _: "account.saveSecureValue";
  value: InputSecureValue;
  secure_secret_id: bigint;
  [R]?: SecureValue;
}

export interface account_deleteSecureValue {
  _: "account.deleteSecureValue";
  types: Array<SecureValueType>;
  [R]?: boolean;
}

export interface account_getAuthorizationForm {
  _: "account.getAuthorizationForm";
  bot_id: bigint;
  scope: string;
  public_key: string;
  [R]?: account_AuthorizationForm;
}

export interface account_acceptAuthorization {
  _: "account.acceptAuthorization";
  bot_id: bigint;
  scope: string;
  public_key: string;
  value_hashes: Array<SecureValueHash>;
  credentials: SecureCredentialsEncrypted;
  [R]?: boolean;
}

export interface account_sendVerifyPhoneCode {
  _: "account.sendVerifyPhoneCode";
  phone_number: string;
  settings: CodeSettings;
  [R]?: auth_SentCode;
}

export interface account_verifyPhone {
  _: "account.verifyPhone";
  phone_number: string;
  phone_code_hash: string;
  phone_code: string;
  [R]?: boolean;
}

export interface account_sendVerifyEmailCode {
  _: "account.sendVerifyEmailCode";
  purpose: EmailVerifyPurpose;
  email: string;
  [R]?: account_SentEmailCode;
}

export interface account_verifyEmail {
  _: "account.verifyEmail";
  purpose: EmailVerifyPurpose;
  verification: EmailVerification;
  [R]?: account_EmailVerified;
}

export interface account_initTakeoutSession {
  _: "account.initTakeoutSession";
  contacts?: true;
  message_users?: true;
  message_chats?: true;
  message_megagroups?: true;
  message_channels?: true;
  files?: true;
  file_max_size?: bigint;
  [R]?: account_Takeout;
}

export interface account_finishTakeoutSession {
  _: "account.finishTakeoutSession";
  success?: true;
  [R]?: boolean;
}

export interface account_confirmPasswordEmail {
  _: "account.confirmPasswordEmail";
  code: string;
  [R]?: boolean;
}

export interface account_resendPasswordEmail {
  _: "account.resendPasswordEmail";
  [R]?: boolean;
}

export interface account_cancelPasswordEmail {
  _: "account.cancelPasswordEmail";
  [R]?: boolean;
}

export interface account_getContactSignUpNotification {
  _: "account.getContactSignUpNotification";
  [R]?: boolean;
}

export interface account_setContactSignUpNotification {
  _: "account.setContactSignUpNotification";
  silent: boolean;
  [R]?: boolean;
}

export interface account_getNotifyExceptions {
  _: "account.getNotifyExceptions";
  compare_sound?: true;
  compare_stories?: true;
  peer?: InputNotifyPeer;
  [R]?: Updates;
}

export interface account_getWallPaper {
  _: "account.getWallPaper";
  wallpaper: InputWallPaper;
  [R]?: WallPaper;
}

export interface account_uploadWallPaper {
  _: "account.uploadWallPaper";
  for_chat?: true;
  file: InputFile;
  mime_type: string;
  settings: WallPaperSettings;
  [R]?: WallPaper;
}

export interface account_saveWallPaper {
  _: "account.saveWallPaper";
  wallpaper: InputWallPaper;
  unsave: boolean;
  settings: WallPaperSettings;
  [R]?: boolean;
}

export interface account_installWallPaper {
  _: "account.installWallPaper";
  wallpaper: InputWallPaper;
  settings: WallPaperSettings;
  [R]?: boolean;
}

export interface account_resetWallPapers {
  _: "account.resetWallPapers";
  [R]?: boolean;
}

export interface account_getAutoDownloadSettings {
  _: "account.getAutoDownloadSettings";
  [R]?: account_AutoDownloadSettings;
}

export interface account_saveAutoDownloadSettings {
  _: "account.saveAutoDownloadSettings";
  low?: true;
  high?: true;
  settings: AutoDownloadSettings;
  [R]?: boolean;
}

export interface account_uploadTheme {
  _: "account.uploadTheme";
  file: InputFile;
  thumb?: InputFile;
  file_name: string;
  mime_type: string;
  [R]?: Document;
}

export interface account_createTheme {
  _: "account.createTheme";
  slug: string;
  title: string;
  document?: InputDocument;
  settings?: Array<InputThemeSettings>;
  [R]?: Theme;
}

export interface account_updateTheme {
  _: "account.updateTheme";
  format: string;
  theme: InputTheme;
  slug?: string;
  title?: string;
  document?: InputDocument;
  settings?: Array<InputThemeSettings>;
  [R]?: Theme;
}

export interface account_saveTheme {
  _: "account.saveTheme";
  theme: InputTheme;
  unsave: boolean;
  [R]?: boolean;
}

export interface account_installTheme {
  _: "account.installTheme";
  dark?: true;
  theme?: InputTheme;
  format?: string;
  base_theme?: BaseTheme;
  [R]?: boolean;
}

export interface account_getTheme {
  _: "account.getTheme";
  format: string;
  theme: InputTheme;
  [R]?: Theme;
}

export interface account_getThemes {
  _: "account.getThemes";
  format: string;
  hash: bigint;
  [R]?: account_Themes;
}

export interface account_setContentSettings {
  _: "account.setContentSettings";
  sensitive_enabled?: true;
  [R]?: boolean;
}

export interface account_getContentSettings {
  _: "account.getContentSettings";
  [R]?: account_ContentSettings;
}

export interface account_getMultiWallPapers {
  _: "account.getMultiWallPapers";
  wallpapers: Array<InputWallPaper>;
  [R]?: Array<WallPaper>;
}

export interface account_getGlobalPrivacySettings {
  _: "account.getGlobalPrivacySettings";
  [R]?: GlobalPrivacySettings;
}

export interface account_setGlobalPrivacySettings {
  _: "account.setGlobalPrivacySettings";
  settings: GlobalPrivacySettings;
  [R]?: GlobalPrivacySettings;
}

export interface account_reportProfilePhoto {
  _: "account.reportProfilePhoto";
  peer: InputPeer;
  photo_id: InputPhoto;
  reason: ReportReason;
  message: string;
  [R]?: boolean;
}

export interface account_resetPassword {
  _: "account.resetPassword";
  [R]?: account_ResetPasswordResult;
}

export interface account_declinePasswordReset {
  _: "account.declinePasswordReset";
  [R]?: boolean;
}

export interface account_getChatThemes {
  _: "account.getChatThemes";
  hash: bigint;
  [R]?: account_Themes;
}

export interface account_setAuthorizationTTL {
  _: "account.setAuthorizationTTL";
  authorization_ttl_days: number;
  [R]?: boolean;
}

export interface account_changeAuthorizationSettings {
  _: "account.changeAuthorizationSettings";
  confirmed?: true;
  hash: bigint;
  encrypted_requests_disabled?: boolean;
  call_requests_disabled?: boolean;
  [R]?: boolean;
}

export interface account_getSavedRingtones {
  _: "account.getSavedRingtones";
  hash: bigint;
  [R]?: account_SavedRingtones;
}

export interface account_saveRingtone {
  _: "account.saveRingtone";
  id: InputDocument;
  unsave: boolean;
  [R]?: account_SavedRingtone;
}

export interface account_uploadRingtone {
  _: "account.uploadRingtone";
  file: InputFile;
  file_name: string;
  mime_type: string;
  [R]?: Document;
}

export interface account_updateEmojiStatus {
  _: "account.updateEmojiStatus";
  emoji_status: EmojiStatus;
  [R]?: boolean;
}

export interface account_getDefaultEmojiStatuses {
  _: "account.getDefaultEmojiStatuses";
  hash: bigint;
  [R]?: account_EmojiStatuses;
}

export interface account_getRecentEmojiStatuses {
  _: "account.getRecentEmojiStatuses";
  hash: bigint;
  [R]?: account_EmojiStatuses;
}

export interface account_clearRecentEmojiStatuses {
  _: "account.clearRecentEmojiStatuses";
  [R]?: boolean;
}

export interface account_reorderUsernames {
  _: "account.reorderUsernames";
  order: Array<string>;
  [R]?: boolean;
}

export interface account_toggleUsername {
  _: "account.toggleUsername";
  username: string;
  active: boolean;
  [R]?: boolean;
}

export interface account_getDefaultProfilePhotoEmojis {
  _: "account.getDefaultProfilePhotoEmojis";
  hash: bigint;
  [R]?: EmojiList;
}

export interface account_getDefaultGroupPhotoEmojis {
  _: "account.getDefaultGroupPhotoEmojis";
  hash: bigint;
  [R]?: EmojiList;
}

export interface account_getAutoSaveSettings {
  _: "account.getAutoSaveSettings";
  [R]?: account_AutoSaveSettings;
}

export interface account_saveAutoSaveSettings {
  _: "account.saveAutoSaveSettings";
  users?: true;
  chats?: true;
  broadcasts?: true;
  peer?: InputPeer;
  settings: AutoSaveSettings;
  [R]?: boolean;
}

export interface account_deleteAutoSaveExceptions {
  _: "account.deleteAutoSaveExceptions";
  [R]?: boolean;
}

export interface account_invalidateSignInCodes {
  _: "account.invalidateSignInCodes";
  codes: Array<string>;
  [R]?: boolean;
}

export interface account_updateColor {
  _: "account.updateColor";
  for_profile?: true;
  color?: number;
  background_emoji_id?: bigint;
  [R]?: boolean;
}

export interface account_getDefaultBackgroundEmojis {
  _: "account.getDefaultBackgroundEmojis";
  hash: bigint;
  [R]?: EmojiList;
}

export interface account_getChannelDefaultEmojiStatuses {
  _: "account.getChannelDefaultEmojiStatuses";
  hash: bigint;
  [R]?: account_EmojiStatuses;
}

export interface account_getChannelRestrictedStatusEmojis {
  _: "account.getChannelRestrictedStatusEmojis";
  hash: bigint;
  [R]?: EmojiList;
}

export interface account_updateBusinessWorkHours {
  _: "account.updateBusinessWorkHours";
  business_work_hours?: BusinessWorkHours;
  [R]?: boolean;
}

export interface account_updateBusinessLocation {
  _: "account.updateBusinessLocation";
  geo_point?: InputGeoPoint;
  address?: string;
  [R]?: boolean;
}

export interface account_updateBusinessGreetingMessage {
  _: "account.updateBusinessGreetingMessage";
  message?: InputBusinessGreetingMessage;
  [R]?: boolean;
}

export interface account_updateBusinessAwayMessage {
  _: "account.updateBusinessAwayMessage";
  message?: InputBusinessAwayMessage;
  [R]?: boolean;
}

export interface account_updateConnectedBot {
  _: "account.updateConnectedBot";
  can_reply?: true;
  deleted?: true;
  bot: InputUser;
  recipients: InputBusinessBotRecipients;
  [R]?: Updates;
}

export interface account_getConnectedBots {
  _: "account.getConnectedBots";
  [R]?: account_ConnectedBots;
}

export interface account_getBotBusinessConnection {
  _: "account.getBotBusinessConnection";
  connection_id: string;
  [R]?: Updates;
}

export interface account_updateBusinessIntro {
  _: "account.updateBusinessIntro";
  intro?: InputBusinessIntro;
  [R]?: boolean;
}

export interface account_toggleConnectedBotPaused {
  _: "account.toggleConnectedBotPaused";
  peer: InputPeer;
  paused: boolean;
  [R]?: boolean;
}

export interface account_disablePeerConnectedBot {
  _: "account.disablePeerConnectedBot";
  peer: InputPeer;
  [R]?: boolean;
}

export interface account_updateBirthday {
  _: "account.updateBirthday";
  birthday?: Birthday;
  [R]?: boolean;
}

export interface account_createBusinessChatLink {
  _: "account.createBusinessChatLink";
  link: InputBusinessChatLink;
  [R]?: BusinessChatLink;
}

export interface account_editBusinessChatLink {
  _: "account.editBusinessChatLink";
  slug: string;
  link: InputBusinessChatLink;
  [R]?: BusinessChatLink;
}

export interface account_deleteBusinessChatLink {
  _: "account.deleteBusinessChatLink";
  slug: string;
  [R]?: boolean;
}

export interface account_getBusinessChatLinks {
  _: "account.getBusinessChatLinks";
  [R]?: account_BusinessChatLinks;
}

export interface account_resolveBusinessChatLink {
  _: "account.resolveBusinessChatLink";
  slug: string;
  [R]?: account_ResolvedBusinessChatLinks;
}

export interface account_updatePersonalChannel {
  _: "account.updatePersonalChannel";
  channel: InputChannel;
  [R]?: boolean;
}

export interface account_toggleSponsoredMessages {
  _: "account.toggleSponsoredMessages";
  enabled: boolean;
  [R]?: boolean;
}

export interface account_getReactionsNotifySettings {
  _: "account.getReactionsNotifySettings";
  [R]?: ReactionsNotifySettings;
}

export interface account_setReactionsNotifySettings {
  _: "account.setReactionsNotifySettings";
  settings: ReactionsNotifySettings;
  [R]?: ReactionsNotifySettings;
}

export interface account_getCollectibleEmojiStatuses {
  _: "account.getCollectibleEmojiStatuses";
  hash: bigint;
  [R]?: account_EmojiStatuses;
}

export interface account_addNoPaidMessagesException {
  _: "account.addNoPaidMessagesException";
  refund_charged?: true;
  user_id: InputUser;
  [R]?: boolean;
}

export interface account_getPaidMessagesRevenue {
  _: "account.getPaidMessagesRevenue";
  user_id: InputUser;
  [R]?: account_PaidMessagesRevenue;
}

export interface users_getUsers {
  _: "users.getUsers";
  id: Array<InputUser>;
  [R]?: Array<User>;
}

export interface users_getFullUser {
  _: "users.getFullUser";
  id: InputUser;
  [R]?: users_UserFull;
}

export interface users_setSecureValueErrors {
  _: "users.setSecureValueErrors";
  id: InputUser;
  errors: Array<SecureValueError>;
  [R]?: boolean;
}

export interface users_getRequirementsToContact {
  _: "users.getRequirementsToContact";
  id: Array<InputUser>;
  [R]?: Array<RequirementToContact>;
}

export interface contacts_getContactIDs {
  _: "contacts.getContactIDs";
  hash: bigint;
  [R]?: Array<number>;
}

export interface contacts_getStatuses {
  _: "contacts.getStatuses";
  [R]?: Array<ContactStatus>;
}

export interface contacts_getContacts {
  _: "contacts.getContacts";
  hash: bigint;
  [R]?: contacts_Contacts;
}

export interface contacts_importContacts {
  _: "contacts.importContacts";
  contacts: Array<InputContact>;
  [R]?: contacts_ImportedContacts;
}

export interface contacts_deleteContacts {
  _: "contacts.deleteContacts";
  id: Array<InputUser>;
  [R]?: Updates;
}

export interface contacts_deleteByPhones {
  _: "contacts.deleteByPhones";
  phones: Array<string>;
  [R]?: boolean;
}

export interface contacts_block {
  _: "contacts.block";
  my_stories_from?: true;
  id: InputPeer;
  [R]?: boolean;
}

export interface contacts_unblock {
  _: "contacts.unblock";
  my_stories_from?: true;
  id: InputPeer;
  [R]?: boolean;
}

export interface contacts_getBlocked {
  _: "contacts.getBlocked";
  my_stories_from?: true;
  offset: number;
  limit: number;
  [R]?: contacts_Blocked;
}

export interface contacts_search {
  _: "contacts.search";
  q: string;
  limit: number;
  [R]?: contacts_Found;
}

export interface contacts_resolveUsername {
  _: "contacts.resolveUsername";
  username: string;
  referer?: string;
  [R]?: contacts_ResolvedPeer;
}

export interface contacts_getTopPeers {
  _: "contacts.getTopPeers";
  correspondents?: true;
  bots_pm?: true;
  bots_inline?: true;
  phone_calls?: true;
  forward_users?: true;
  forward_chats?: true;
  groups?: true;
  channels?: true;
  bots_app?: true;
  offset: number;
  limit: number;
  hash: bigint;
  [R]?: contacts_TopPeers;
}

export interface contacts_resetTopPeerRating {
  _: "contacts.resetTopPeerRating";
  category: TopPeerCategory;
  peer: InputPeer;
  [R]?: boolean;
}

export interface contacts_resetSaved {
  _: "contacts.resetSaved";
  [R]?: boolean;
}

export interface contacts_getSaved {
  _: "contacts.getSaved";
  [R]?: Array<SavedContact>;
}

export interface contacts_toggleTopPeers {
  _: "contacts.toggleTopPeers";
  enabled: boolean;
  [R]?: boolean;
}

export interface contacts_addContact {
  _: "contacts.addContact";
  add_phone_privacy_exception?: true;
  id: InputUser;
  first_name: string;
  last_name: string;
  phone: string;
  [R]?: Updates;
}

export interface contacts_acceptContact {
  _: "contacts.acceptContact";
  id: InputUser;
  [R]?: Updates;
}

export interface contacts_getLocated {
  _: "contacts.getLocated";
  background?: true;
  geo_point: InputGeoPoint;
  self_expires?: number;
  [R]?: Updates;
}

export interface contacts_blockFromReplies {
  _: "contacts.blockFromReplies";
  delete_message?: true;
  delete_history?: true;
  report_spam?: true;
  msg_id: number;
  [R]?: Updates;
}

export interface contacts_resolvePhone {
  _: "contacts.resolvePhone";
  phone: string;
  [R]?: contacts_ResolvedPeer;
}

export interface contacts_exportContactToken {
  _: "contacts.exportContactToken";
  [R]?: ExportedContactToken;
}

export interface contacts_importContactToken {
  _: "contacts.importContactToken";
  token: string;
  [R]?: User;
}

export interface contacts_editCloseFriends {
  _: "contacts.editCloseFriends";
  id: Array<bigint>;
  [R]?: boolean;
}

export interface contacts_setBlocked {
  _: "contacts.setBlocked";
  my_stories_from?: true;
  id: Array<InputPeer>;
  limit: number;
  [R]?: boolean;
}

export interface contacts_getBirthdays {
  _: "contacts.getBirthdays";
  [R]?: contacts_ContactBirthdays;
}

export interface messages_getMessages {
  _: "messages.getMessages";
  id: Array<InputMessage>;
  [R]?: messages_Messages;
}

export interface messages_getDialogs {
  _: "messages.getDialogs";
  exclude_pinned?: true;
  folder_id?: number;
  offset_date: number;
  offset_id: number;
  offset_peer: InputPeer;
  limit: number;
  hash: bigint;
  [R]?: messages_Dialogs;
}

export interface messages_getHistory {
  _: "messages.getHistory";
  peer: InputPeer;
  offset_id: number;
  offset_date: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  hash: bigint;
  [R]?: messages_Messages;
}

export interface messages_search {
  _: "messages.search";
  peer: InputPeer;
  q: string;
  from_id?: InputPeer;
  saved_peer_id?: InputPeer;
  saved_reaction?: Array<Reaction>;
  top_msg_id?: number;
  filter: MessagesFilter;
  min_date: number;
  max_date: number;
  offset_id: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  hash: bigint;
  [R]?: messages_Messages;
}

export interface messages_readHistory {
  _: "messages.readHistory";
  peer: InputPeer;
  max_id: number;
  [R]?: messages_AffectedMessages;
}

export interface messages_deleteHistory {
  _: "messages.deleteHistory";
  just_clear?: true;
  revoke?: true;
  peer: InputPeer;
  max_id: number;
  min_date?: number;
  max_date?: number;
  [R]?: messages_AffectedHistory;
}

export interface messages_deleteMessages {
  _: "messages.deleteMessages";
  revoke?: true;
  id: Array<number>;
  [R]?: messages_AffectedMessages;
}

export interface messages_receivedMessages {
  _: "messages.receivedMessages";
  max_id: number;
  [R]?: Array<ReceivedNotifyMessage>;
}

export interface messages_setTyping {
  _: "messages.setTyping";
  peer: InputPeer;
  top_msg_id?: number;
  action: SendMessageAction;
  [R]?: boolean;
}

export interface messages_sendMessage {
  _: "messages.sendMessage";
  no_webpage?: true;
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  allow_paid_floodskip?: true;
  peer: InputPeer;
  reply_to?: InputReplyTo;
  message: string;
  random_id: bigint;
  reply_markup?: ReplyMarkup;
  entities?: Array<MessageEntity>;
  schedule_date?: number;
  send_as?: InputPeer;
  quick_reply_shortcut?: InputQuickReplyShortcut;
  effect?: bigint;
  allow_paid_stars?: bigint;
  [R]?: Updates;
}

export interface messages_sendMedia {
  _: "messages.sendMedia";
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  allow_paid_floodskip?: true;
  peer: InputPeer;
  reply_to?: InputReplyTo;
  media: InputMedia;
  message: string;
  random_id: bigint;
  reply_markup?: ReplyMarkup;
  entities?: Array<MessageEntity>;
  schedule_date?: number;
  send_as?: InputPeer;
  quick_reply_shortcut?: InputQuickReplyShortcut;
  effect?: bigint;
  allow_paid_stars?: bigint;
  [R]?: Updates;
}

export interface messages_forwardMessages {
  _: "messages.forwardMessages";
  silent?: true;
  background?: true;
  with_my_score?: true;
  drop_author?: true;
  drop_media_captions?: true;
  noforwards?: true;
  allow_paid_floodskip?: true;
  from_peer: InputPeer;
  id: Array<number>;
  random_id: Array<bigint>;
  to_peer: InputPeer;
  top_msg_id?: number;
  schedule_date?: number;
  send_as?: InputPeer;
  quick_reply_shortcut?: InputQuickReplyShortcut;
  video_timestamp?: number;
  allow_paid_stars?: bigint;
  [R]?: Updates;
}

export interface messages_reportSpam {
  _: "messages.reportSpam";
  peer: InputPeer;
  [R]?: boolean;
}

export interface messages_getPeerSettings {
  _: "messages.getPeerSettings";
  peer: InputPeer;
  [R]?: messages_PeerSettings;
}

export interface messages_report {
  _: "messages.report";
  peer: InputPeer;
  id: Array<number>;
  option: Uint8Array;
  message: string;
  [R]?: ReportResult;
}

export interface messages_getChats {
  _: "messages.getChats";
  id: Array<bigint>;
  [R]?: messages_Chats;
}

export interface messages_getFullChat {
  _: "messages.getFullChat";
  chat_id: bigint;
  [R]?: messages_ChatFull;
}

export interface messages_editChatTitle {
  _: "messages.editChatTitle";
  chat_id: bigint;
  title: string;
  [R]?: Updates;
}

export interface messages_editChatPhoto {
  _: "messages.editChatPhoto";
  chat_id: bigint;
  photo: InputChatPhoto;
  [R]?: Updates;
}

export interface messages_addChatUser {
  _: "messages.addChatUser";
  chat_id: bigint;
  user_id: InputUser;
  fwd_limit: number;
  [R]?: messages_InvitedUsers;
}

export interface messages_deleteChatUser {
  _: "messages.deleteChatUser";
  revoke_history?: true;
  chat_id: bigint;
  user_id: InputUser;
  [R]?: Updates;
}

export interface messages_createChat {
  _: "messages.createChat";
  users: Array<InputUser>;
  title: string;
  ttl_period?: number;
  [R]?: messages_InvitedUsers;
}

export interface messages_getDhConfig {
  _: "messages.getDhConfig";
  version: number;
  random_length: number;
  [R]?: messages_DhConfig;
}

export interface messages_requestEncryption {
  _: "messages.requestEncryption";
  user_id: InputUser;
  random_id: number;
  g_a: Uint8Array;
  [R]?: EncryptedChat;
}

export interface messages_acceptEncryption {
  _: "messages.acceptEncryption";
  peer: InputEncryptedChat;
  g_b: Uint8Array;
  key_fingerprint: bigint;
  [R]?: EncryptedChat;
}

export interface messages_discardEncryption {
  _: "messages.discardEncryption";
  delete_history?: true;
  chat_id: number;
  [R]?: boolean;
}

export interface messages_setEncryptedTyping {
  _: "messages.setEncryptedTyping";
  peer: InputEncryptedChat;
  typing: boolean;
  [R]?: boolean;
}

export interface messages_readEncryptedHistory {
  _: "messages.readEncryptedHistory";
  peer: InputEncryptedChat;
  max_date: number;
  [R]?: boolean;
}

export interface messages_sendEncrypted {
  _: "messages.sendEncrypted";
  silent?: true;
  peer: InputEncryptedChat;
  random_id: bigint;
  data: Uint8Array;
  [R]?: messages_SentEncryptedMessage;
}

export interface messages_sendEncryptedFile {
  _: "messages.sendEncryptedFile";
  silent?: true;
  peer: InputEncryptedChat;
  random_id: bigint;
  data: Uint8Array;
  file: InputEncryptedFile;
  [R]?: messages_SentEncryptedMessage;
}

export interface messages_sendEncryptedService {
  _: "messages.sendEncryptedService";
  peer: InputEncryptedChat;
  random_id: bigint;
  data: Uint8Array;
  [R]?: messages_SentEncryptedMessage;
}

export interface messages_receivedQueue {
  _: "messages.receivedQueue";
  max_qts: number;
  [R]?: Array<bigint>;
}

export interface messages_reportEncryptedSpam {
  _: "messages.reportEncryptedSpam";
  peer: InputEncryptedChat;
  [R]?: boolean;
}

export interface messages_readMessageContents {
  _: "messages.readMessageContents";
  id: Array<number>;
  [R]?: messages_AffectedMessages;
}

export interface messages_getStickers {
  _: "messages.getStickers";
  emoticon: string;
  hash: bigint;
  [R]?: messages_Stickers;
}

export interface messages_getAllStickers {
  _: "messages.getAllStickers";
  hash: bigint;
  [R]?: messages_AllStickers;
}

export interface messages_getWebPagePreview {
  _: "messages.getWebPagePreview";
  message: string;
  entities?: Array<MessageEntity>;
  [R]?: messages_WebPagePreview;
}

export interface messages_exportChatInvite {
  _: "messages.exportChatInvite";
  legacy_revoke_permanent?: true;
  request_needed?: true;
  peer: InputPeer;
  expire_date?: number;
  usage_limit?: number;
  title?: string;
  subscription_pricing?: StarsSubscriptionPricing;
  [R]?: ExportedChatInvite;
}

export interface messages_checkChatInvite {
  _: "messages.checkChatInvite";
  hash: string;
  [R]?: ChatInvite;
}

export interface messages_importChatInvite {
  _: "messages.importChatInvite";
  hash: string;
  [R]?: Updates;
}

export interface messages_getStickerSet {
  _: "messages.getStickerSet";
  stickerset: InputStickerSet;
  hash: number;
  [R]?: messages_StickerSet;
}

export interface messages_installStickerSet {
  _: "messages.installStickerSet";
  stickerset: InputStickerSet;
  archived: boolean;
  [R]?: messages_StickerSetInstallResult;
}

export interface messages_uninstallStickerSet {
  _: "messages.uninstallStickerSet";
  stickerset: InputStickerSet;
  [R]?: boolean;
}

export interface messages_startBot {
  _: "messages.startBot";
  bot: InputUser;
  peer: InputPeer;
  random_id: bigint;
  start_param: string;
  [R]?: Updates;
}

export interface messages_getMessagesViews {
  _: "messages.getMessagesViews";
  peer: InputPeer;
  id: Array<number>;
  increment: boolean;
  [R]?: messages_MessageViews;
}

export interface messages_editChatAdmin {
  _: "messages.editChatAdmin";
  chat_id: bigint;
  user_id: InputUser;
  is_admin: boolean;
  [R]?: boolean;
}

export interface messages_migrateChat {
  _: "messages.migrateChat";
  chat_id: bigint;
  [R]?: Updates;
}

export interface messages_searchGlobal {
  _: "messages.searchGlobal";
  broadcasts_only?: true;
  groups_only?: true;
  users_only?: true;
  folder_id?: number;
  q: string;
  filter: MessagesFilter;
  min_date: number;
  max_date: number;
  offset_rate: number;
  offset_peer: InputPeer;
  offset_id: number;
  limit: number;
  [R]?: messages_Messages;
}

export interface messages_reorderStickerSets {
  _: "messages.reorderStickerSets";
  masks?: true;
  emojis?: true;
  order: Array<bigint>;
  [R]?: boolean;
}

export interface messages_getDocumentByHash {
  _: "messages.getDocumentByHash";
  sha256: Uint8Array;
  size: bigint;
  mime_type: string;
  [R]?: Document;
}

export interface messages_getSavedGifs {
  _: "messages.getSavedGifs";
  hash: bigint;
  [R]?: messages_SavedGifs;
}

export interface messages_saveGif {
  _: "messages.saveGif";
  id: InputDocument;
  unsave: boolean;
  [R]?: boolean;
}

export interface messages_getInlineBotResults {
  _: "messages.getInlineBotResults";
  bot: InputUser;
  peer: InputPeer;
  geo_point?: InputGeoPoint;
  query: string;
  offset: string;
  [R]?: messages_BotResults;
}

export interface messages_setInlineBotResults {
  _: "messages.setInlineBotResults";
  gallery?: true;
  private?: true;
  query_id: bigint;
  results: Array<InputBotInlineResult>;
  cache_time: number;
  next_offset?: string;
  switch_pm?: InlineBotSwitchPM;
  switch_webview?: InlineBotWebView;
  [R]?: boolean;
}

export interface messages_sendInlineBotResult {
  _: "messages.sendInlineBotResult";
  silent?: true;
  background?: true;
  clear_draft?: true;
  hide_via?: true;
  peer: InputPeer;
  reply_to?: InputReplyTo;
  random_id: bigint;
  query_id: bigint;
  id: string;
  schedule_date?: number;
  send_as?: InputPeer;
  quick_reply_shortcut?: InputQuickReplyShortcut;
  allow_paid_stars?: bigint;
  [R]?: Updates;
}

export interface messages_getMessageEditData {
  _: "messages.getMessageEditData";
  peer: InputPeer;
  id: number;
  [R]?: messages_MessageEditData;
}

export interface messages_editMessage {
  _: "messages.editMessage";
  no_webpage?: true;
  invert_media?: true;
  peer: InputPeer;
  id: number;
  message?: string;
  media?: InputMedia;
  reply_markup?: ReplyMarkup;
  entities?: Array<MessageEntity>;
  schedule_date?: number;
  quick_reply_shortcut_id?: number;
  [R]?: Updates;
}

export interface messages_editInlineBotMessage {
  _: "messages.editInlineBotMessage";
  no_webpage?: true;
  invert_media?: true;
  id: InputBotInlineMessageID;
  message?: string;
  media?: InputMedia;
  reply_markup?: ReplyMarkup;
  entities?: Array<MessageEntity>;
  [R]?: boolean;
}

export interface messages_getBotCallbackAnswer {
  _: "messages.getBotCallbackAnswer";
  game?: true;
  peer: InputPeer;
  msg_id: number;
  data?: Uint8Array;
  password?: InputCheckPasswordSRP;
  [R]?: messages_BotCallbackAnswer;
}

export interface messages_setBotCallbackAnswer {
  _: "messages.setBotCallbackAnswer";
  alert?: true;
  query_id: bigint;
  message?: string;
  url?: string;
  cache_time: number;
  [R]?: boolean;
}

export interface messages_getPeerDialogs {
  _: "messages.getPeerDialogs";
  peers: Array<InputDialogPeer>;
  [R]?: messages_PeerDialogs;
}

export interface messages_saveDraft {
  _: "messages.saveDraft";
  no_webpage?: true;
  invert_media?: true;
  reply_to?: InputReplyTo;
  peer: InputPeer;
  message: string;
  entities?: Array<MessageEntity>;
  media?: InputMedia;
  effect?: bigint;
  [R]?: boolean;
}

export interface messages_getAllDrafts {
  _: "messages.getAllDrafts";
  [R]?: Updates;
}

export interface messages_getFeaturedStickers {
  _: "messages.getFeaturedStickers";
  hash: bigint;
  [R]?: messages_FeaturedStickers;
}

export interface messages_readFeaturedStickers {
  _: "messages.readFeaturedStickers";
  id: Array<bigint>;
  [R]?: boolean;
}

export interface messages_getRecentStickers {
  _: "messages.getRecentStickers";
  attached?: true;
  hash: bigint;
  [R]?: messages_RecentStickers;
}

export interface messages_saveRecentSticker {
  _: "messages.saveRecentSticker";
  attached?: true;
  id: InputDocument;
  unsave: boolean;
  [R]?: boolean;
}

export interface messages_clearRecentStickers {
  _: "messages.clearRecentStickers";
  attached?: true;
  [R]?: boolean;
}

export interface messages_getArchivedStickers {
  _: "messages.getArchivedStickers";
  masks?: true;
  emojis?: true;
  offset_id: bigint;
  limit: number;
  [R]?: messages_ArchivedStickers;
}

export interface messages_getMaskStickers {
  _: "messages.getMaskStickers";
  hash: bigint;
  [R]?: messages_AllStickers;
}

export interface messages_getAttachedStickers {
  _: "messages.getAttachedStickers";
  media: InputStickeredMedia;
  [R]?: Array<StickerSetCovered>;
}

export interface messages_setGameScore {
  _: "messages.setGameScore";
  edit_message?: true;
  force?: true;
  peer: InputPeer;
  id: number;
  user_id: InputUser;
  score: number;
  [R]?: Updates;
}

export interface messages_setInlineGameScore {
  _: "messages.setInlineGameScore";
  edit_message?: true;
  force?: true;
  id: InputBotInlineMessageID;
  user_id: InputUser;
  score: number;
  [R]?: boolean;
}

export interface messages_getGameHighScores {
  _: "messages.getGameHighScores";
  peer: InputPeer;
  id: number;
  user_id: InputUser;
  [R]?: messages_HighScores;
}

export interface messages_getInlineGameHighScores {
  _: "messages.getInlineGameHighScores";
  id: InputBotInlineMessageID;
  user_id: InputUser;
  [R]?: messages_HighScores;
}

export interface messages_getCommonChats {
  _: "messages.getCommonChats";
  user_id: InputUser;
  max_id: bigint;
  limit: number;
  [R]?: messages_Chats;
}

export interface messages_getWebPage {
  _: "messages.getWebPage";
  url: string;
  hash: number;
  [R]?: messages_WebPage;
}

export interface messages_toggleDialogPin {
  _: "messages.toggleDialogPin";
  pinned?: true;
  peer: InputDialogPeer;
  [R]?: boolean;
}

export interface messages_reorderPinnedDialogs {
  _: "messages.reorderPinnedDialogs";
  force?: true;
  folder_id: number;
  order: Array<InputDialogPeer>;
  [R]?: boolean;
}

export interface messages_getPinnedDialogs {
  _: "messages.getPinnedDialogs";
  folder_id: number;
  [R]?: messages_PeerDialogs;
}

export interface messages_setBotShippingResults {
  _: "messages.setBotShippingResults";
  query_id: bigint;
  error?: string;
  shipping_options?: Array<ShippingOption>;
  [R]?: boolean;
}

export interface messages_setBotPrecheckoutResults {
  _: "messages.setBotPrecheckoutResults";
  success?: true;
  query_id: bigint;
  error?: string;
  [R]?: boolean;
}

export interface messages_uploadMedia {
  _: "messages.uploadMedia";
  business_connection_id?: string;
  peer: InputPeer;
  media: InputMedia;
  [R]?: MessageMedia;
}

export interface messages_sendScreenshotNotification {
  _: "messages.sendScreenshotNotification";
  peer: InputPeer;
  reply_to: InputReplyTo;
  random_id: bigint;
  [R]?: Updates;
}

export interface messages_getFavedStickers {
  _: "messages.getFavedStickers";
  hash: bigint;
  [R]?: messages_FavedStickers;
}

export interface messages_faveSticker {
  _: "messages.faveSticker";
  id: InputDocument;
  unfave: boolean;
  [R]?: boolean;
}

export interface messages_getUnreadMentions {
  _: "messages.getUnreadMentions";
  peer: InputPeer;
  top_msg_id?: number;
  offset_id: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  [R]?: messages_Messages;
}

export interface messages_readMentions {
  _: "messages.readMentions";
  peer: InputPeer;
  top_msg_id?: number;
  [R]?: messages_AffectedHistory;
}

export interface messages_getRecentLocations {
  _: "messages.getRecentLocations";
  peer: InputPeer;
  limit: number;
  hash: bigint;
  [R]?: messages_Messages;
}

export interface messages_sendMultiMedia {
  _: "messages.sendMultiMedia";
  silent?: true;
  background?: true;
  clear_draft?: true;
  noforwards?: true;
  update_stickersets_order?: true;
  invert_media?: true;
  allow_paid_floodskip?: true;
  peer: InputPeer;
  reply_to?: InputReplyTo;
  multi_media: Array<InputSingleMedia>;
  schedule_date?: number;
  send_as?: InputPeer;
  quick_reply_shortcut?: InputQuickReplyShortcut;
  effect?: bigint;
  allow_paid_stars?: bigint;
  [R]?: Updates;
}

export interface messages_uploadEncryptedFile {
  _: "messages.uploadEncryptedFile";
  peer: InputEncryptedChat;
  file: InputEncryptedFile;
  [R]?: EncryptedFile;
}

export interface messages_searchStickerSets {
  _: "messages.searchStickerSets";
  exclude_featured?: true;
  q: string;
  hash: bigint;
  [R]?: messages_FoundStickerSets;
}

export interface messages_getSplitRanges {
  _: "messages.getSplitRanges";
  [R]?: Array<MessageRange>;
}

export interface messages_markDialogUnread {
  _: "messages.markDialogUnread";
  unread?: true;
  peer: InputDialogPeer;
  [R]?: boolean;
}

export interface messages_getDialogUnreadMarks {
  _: "messages.getDialogUnreadMarks";
  [R]?: Array<DialogPeer>;
}

export interface messages_clearAllDrafts {
  _: "messages.clearAllDrafts";
  [R]?: boolean;
}

export interface messages_updatePinnedMessage {
  _: "messages.updatePinnedMessage";
  silent?: true;
  unpin?: true;
  pm_oneside?: true;
  peer: InputPeer;
  id: number;
  [R]?: Updates;
}

export interface messages_sendVote {
  _: "messages.sendVote";
  peer: InputPeer;
  msg_id: number;
  options: Array<Uint8Array>;
  [R]?: Updates;
}

export interface messages_getPollResults {
  _: "messages.getPollResults";
  peer: InputPeer;
  msg_id: number;
  [R]?: Updates;
}

export interface messages_getOnlines {
  _: "messages.getOnlines";
  peer: InputPeer;
  [R]?: ChatOnlines;
}

export interface messages_editChatAbout {
  _: "messages.editChatAbout";
  peer: InputPeer;
  about: string;
  [R]?: boolean;
}

export interface messages_editChatDefaultBannedRights {
  _: "messages.editChatDefaultBannedRights";
  peer: InputPeer;
  banned_rights: ChatBannedRights;
  [R]?: Updates;
}

export interface messages_getEmojiKeywords {
  _: "messages.getEmojiKeywords";
  lang_code: string;
  [R]?: EmojiKeywordsDifference;
}

export interface messages_getEmojiKeywordsDifference {
  _: "messages.getEmojiKeywordsDifference";
  lang_code: string;
  from_version: number;
  [R]?: EmojiKeywordsDifference;
}

export interface messages_getEmojiKeywordsLanguages {
  _: "messages.getEmojiKeywordsLanguages";
  lang_codes: Array<string>;
  [R]?: Array<EmojiLanguage>;
}

export interface messages_getEmojiURL {
  _: "messages.getEmojiURL";
  lang_code: string;
  [R]?: EmojiURL;
}

export interface messages_getSearchCounters {
  _: "messages.getSearchCounters";
  peer: InputPeer;
  saved_peer_id?: InputPeer;
  top_msg_id?: number;
  filters: Array<MessagesFilter>;
  [R]?: Array<messages_SearchCounter>;
}

export interface messages_requestUrlAuth {
  _: "messages.requestUrlAuth";
  peer?: InputPeer;
  msg_id?: number;
  button_id?: number;
  url?: string;
  [R]?: UrlAuthResult;
}

export interface messages_acceptUrlAuth {
  _: "messages.acceptUrlAuth";
  write_allowed?: true;
  peer?: InputPeer;
  msg_id?: number;
  button_id?: number;
  url?: string;
  [R]?: UrlAuthResult;
}

export interface messages_hidePeerSettingsBar {
  _: "messages.hidePeerSettingsBar";
  peer: InputPeer;
  [R]?: boolean;
}

export interface messages_getScheduledHistory {
  _: "messages.getScheduledHistory";
  peer: InputPeer;
  hash: bigint;
  [R]?: messages_Messages;
}

export interface messages_getScheduledMessages {
  _: "messages.getScheduledMessages";
  peer: InputPeer;
  id: Array<number>;
  [R]?: messages_Messages;
}

export interface messages_sendScheduledMessages {
  _: "messages.sendScheduledMessages";
  peer: InputPeer;
  id: Array<number>;
  [R]?: Updates;
}

export interface messages_deleteScheduledMessages {
  _: "messages.deleteScheduledMessages";
  peer: InputPeer;
  id: Array<number>;
  [R]?: Updates;
}

export interface messages_getPollVotes {
  _: "messages.getPollVotes";
  peer: InputPeer;
  id: number;
  option?: Uint8Array;
  offset?: string;
  limit: number;
  [R]?: messages_VotesList;
}

export interface messages_toggleStickerSets {
  _: "messages.toggleStickerSets";
  uninstall?: true;
  archive?: true;
  unarchive?: true;
  stickersets: Array<InputStickerSet>;
  [R]?: boolean;
}

export interface messages_getDialogFilters {
  _: "messages.getDialogFilters";
  [R]?: messages_DialogFilters;
}

export interface messages_getSuggestedDialogFilters {
  _: "messages.getSuggestedDialogFilters";
  [R]?: Array<DialogFilterSuggested>;
}

export interface messages_updateDialogFilter {
  _: "messages.updateDialogFilter";
  id: number;
  filter?: DialogFilter;
  [R]?: boolean;
}

export interface messages_updateDialogFiltersOrder {
  _: "messages.updateDialogFiltersOrder";
  order: Array<number>;
  [R]?: boolean;
}

export interface messages_getOldFeaturedStickers {
  _: "messages.getOldFeaturedStickers";
  offset: number;
  limit: number;
  hash: bigint;
  [R]?: messages_FeaturedStickers;
}

export interface messages_getReplies {
  _: "messages.getReplies";
  peer: InputPeer;
  msg_id: number;
  offset_id: number;
  offset_date: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  hash: bigint;
  [R]?: messages_Messages;
}

export interface messages_getDiscussionMessage {
  _: "messages.getDiscussionMessage";
  peer: InputPeer;
  msg_id: number;
  [R]?: messages_DiscussionMessage;
}

export interface messages_readDiscussion {
  _: "messages.readDiscussion";
  peer: InputPeer;
  msg_id: number;
  read_max_id: number;
  [R]?: boolean;
}

export interface messages_unpinAllMessages {
  _: "messages.unpinAllMessages";
  peer: InputPeer;
  top_msg_id?: number;
  [R]?: messages_AffectedHistory;
}

export interface messages_deleteChat {
  _: "messages.deleteChat";
  chat_id: bigint;
  [R]?: boolean;
}

export interface messages_deletePhoneCallHistory {
  _: "messages.deletePhoneCallHistory";
  revoke?: true;
  [R]?: messages_AffectedFoundMessages;
}

export interface messages_checkHistoryImport {
  _: "messages.checkHistoryImport";
  import_head: string;
  [R]?: messages_HistoryImportParsed;
}

export interface messages_initHistoryImport {
  _: "messages.initHistoryImport";
  peer: InputPeer;
  file: InputFile;
  media_count: number;
  [R]?: messages_HistoryImport;
}

export interface messages_uploadImportedMedia {
  _: "messages.uploadImportedMedia";
  peer: InputPeer;
  import_id: bigint;
  file_name: string;
  media: InputMedia;
  [R]?: MessageMedia;
}

export interface messages_startHistoryImport {
  _: "messages.startHistoryImport";
  peer: InputPeer;
  import_id: bigint;
  [R]?: boolean;
}

export interface messages_getExportedChatInvites {
  _: "messages.getExportedChatInvites";
  revoked?: true;
  peer: InputPeer;
  admin_id: InputUser;
  offset_date?: number;
  offset_link?: string;
  limit: number;
  [R]?: messages_ExportedChatInvites;
}

export interface messages_getExportedChatInvite {
  _: "messages.getExportedChatInvite";
  peer: InputPeer;
  link: string;
  [R]?: messages_ExportedChatInvite;
}

export interface messages_editExportedChatInvite {
  _: "messages.editExportedChatInvite";
  revoked?: true;
  peer: InputPeer;
  link: string;
  expire_date?: number;
  usage_limit?: number;
  request_needed?: boolean;
  title?: string;
  [R]?: messages_ExportedChatInvite;
}

export interface messages_deleteRevokedExportedChatInvites {
  _: "messages.deleteRevokedExportedChatInvites";
  peer: InputPeer;
  admin_id: InputUser;
  [R]?: boolean;
}

export interface messages_deleteExportedChatInvite {
  _: "messages.deleteExportedChatInvite";
  peer: InputPeer;
  link: string;
  [R]?: boolean;
}

export interface messages_getAdminsWithInvites {
  _: "messages.getAdminsWithInvites";
  peer: InputPeer;
  [R]?: messages_ChatAdminsWithInvites;
}

export interface messages_getChatInviteImporters {
  _: "messages.getChatInviteImporters";
  requested?: true;
  subscription_expired?: true;
  peer: InputPeer;
  link?: string;
  q?: string;
  offset_date: number;
  offset_user: InputUser;
  limit: number;
  [R]?: messages_ChatInviteImporters;
}

export interface messages_setHistoryTTL {
  _: "messages.setHistoryTTL";
  peer: InputPeer;
  period: number;
  [R]?: Updates;
}

export interface messages_checkHistoryImportPeer {
  _: "messages.checkHistoryImportPeer";
  peer: InputPeer;
  [R]?: messages_CheckedHistoryImportPeer;
}

export interface messages_setChatTheme {
  _: "messages.setChatTheme";
  peer: InputPeer;
  emoticon: string;
  [R]?: Updates;
}

export interface messages_getMessageReadParticipants {
  _: "messages.getMessageReadParticipants";
  peer: InputPeer;
  msg_id: number;
  [R]?: Array<ReadParticipantDate>;
}

export interface messages_getSearchResultsCalendar {
  _: "messages.getSearchResultsCalendar";
  peer: InputPeer;
  saved_peer_id?: InputPeer;
  filter: MessagesFilter;
  offset_id: number;
  offset_date: number;
  [R]?: messages_SearchResultsCalendar;
}

export interface messages_getSearchResultsPositions {
  _: "messages.getSearchResultsPositions";
  peer: InputPeer;
  saved_peer_id?: InputPeer;
  filter: MessagesFilter;
  offset_id: number;
  limit: number;
  [R]?: messages_SearchResultsPositions;
}

export interface messages_hideChatJoinRequest {
  _: "messages.hideChatJoinRequest";
  approved?: true;
  peer: InputPeer;
  user_id: InputUser;
  [R]?: Updates;
}

export interface messages_hideAllChatJoinRequests {
  _: "messages.hideAllChatJoinRequests";
  approved?: true;
  peer: InputPeer;
  link?: string;
  [R]?: Updates;
}

export interface messages_toggleNoForwards {
  _: "messages.toggleNoForwards";
  peer: InputPeer;
  enabled: boolean;
  [R]?: Updates;
}

export interface messages_saveDefaultSendAs {
  _: "messages.saveDefaultSendAs";
  peer: InputPeer;
  send_as: InputPeer;
  [R]?: boolean;
}

export interface messages_sendReaction {
  _: "messages.sendReaction";
  big?: true;
  add_to_recent?: true;
  peer: InputPeer;
  msg_id: number;
  reaction?: Array<Reaction>;
  [R]?: Updates;
}

export interface messages_getMessagesReactions {
  _: "messages.getMessagesReactions";
  peer: InputPeer;
  id: Array<number>;
  [R]?: Updates;
}

export interface messages_getMessageReactionsList {
  _: "messages.getMessageReactionsList";
  peer: InputPeer;
  id: number;
  reaction?: Reaction;
  offset?: string;
  limit: number;
  [R]?: messages_MessageReactionsList;
}

export interface messages_setChatAvailableReactions {
  _: "messages.setChatAvailableReactions";
  peer: InputPeer;
  available_reactions: ChatReactions;
  reactions_limit?: number;
  paid_enabled?: boolean;
  [R]?: Updates;
}

export interface messages_getAvailableReactions {
  _: "messages.getAvailableReactions";
  hash: number;
  [R]?: messages_AvailableReactions;
}

export interface messages_setDefaultReaction {
  _: "messages.setDefaultReaction";
  reaction: Reaction;
  [R]?: boolean;
}

export interface messages_translateText {
  _: "messages.translateText";
  peer?: InputPeer;
  id?: Array<number>;
  text?: Array<TextWithEntities>;
  to_lang: string;
  [R]?: messages_TranslatedText;
}

export interface messages_getUnreadReactions {
  _: "messages.getUnreadReactions";
  peer: InputPeer;
  top_msg_id?: number;
  offset_id: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  [R]?: messages_Messages;
}

export interface messages_readReactions {
  _: "messages.readReactions";
  peer: InputPeer;
  top_msg_id?: number;
  [R]?: messages_AffectedHistory;
}

export interface messages_searchSentMedia {
  _: "messages.searchSentMedia";
  q: string;
  filter: MessagesFilter;
  limit: number;
  [R]?: messages_Messages;
}

export interface messages_getAttachMenuBots {
  _: "messages.getAttachMenuBots";
  hash: bigint;
  [R]?: AttachMenuBots;
}

export interface messages_getAttachMenuBot {
  _: "messages.getAttachMenuBot";
  bot: InputUser;
  [R]?: AttachMenuBotsBot;
}

export interface messages_toggleBotInAttachMenu {
  _: "messages.toggleBotInAttachMenu";
  write_allowed?: true;
  bot: InputUser;
  enabled: boolean;
  [R]?: boolean;
}

export interface messages_requestWebView {
  _: "messages.requestWebView";
  from_bot_menu?: true;
  silent?: true;
  compact?: true;
  fullscreen?: true;
  peer: InputPeer;
  bot: InputUser;
  url?: string;
  start_param?: string;
  theme_params?: DataJSON;
  platform: string;
  reply_to?: InputReplyTo;
  send_as?: InputPeer;
  [R]?: WebViewResult;
}

export interface messages_prolongWebView {
  _: "messages.prolongWebView";
  silent?: true;
  peer: InputPeer;
  bot: InputUser;
  query_id: bigint;
  reply_to?: InputReplyTo;
  send_as?: InputPeer;
  [R]?: boolean;
}

export interface messages_requestSimpleWebView {
  _: "messages.requestSimpleWebView";
  from_switch_webview?: true;
  from_side_menu?: true;
  compact?: true;
  fullscreen?: true;
  bot: InputUser;
  url?: string;
  start_param?: string;
  theme_params?: DataJSON;
  platform: string;
  [R]?: WebViewResult;
}

export interface messages_sendWebViewResultMessage {
  _: "messages.sendWebViewResultMessage";
  bot_query_id: string;
  result: InputBotInlineResult;
  [R]?: WebViewMessageSent;
}

export interface messages_sendWebViewData {
  _: "messages.sendWebViewData";
  bot: InputUser;
  random_id: bigint;
  button_text: string;
  data: string;
  [R]?: Updates;
}

export interface messages_transcribeAudio {
  _: "messages.transcribeAudio";
  peer: InputPeer;
  msg_id: number;
  [R]?: messages_TranscribedAudio;
}

export interface messages_rateTranscribedAudio {
  _: "messages.rateTranscribedAudio";
  peer: InputPeer;
  msg_id: number;
  transcription_id: bigint;
  good: boolean;
  [R]?: boolean;
}

export interface messages_getCustomEmojiDocuments {
  _: "messages.getCustomEmojiDocuments";
  document_id: Array<bigint>;
  [R]?: Array<Document>;
}

export interface messages_getEmojiStickers {
  _: "messages.getEmojiStickers";
  hash: bigint;
  [R]?: messages_AllStickers;
}

export interface messages_getFeaturedEmojiStickers {
  _: "messages.getFeaturedEmojiStickers";
  hash: bigint;
  [R]?: messages_FeaturedStickers;
}

export interface messages_reportReaction {
  _: "messages.reportReaction";
  peer: InputPeer;
  id: number;
  reaction_peer: InputPeer;
  [R]?: boolean;
}

export interface messages_getTopReactions {
  _: "messages.getTopReactions";
  limit: number;
  hash: bigint;
  [R]?: messages_Reactions;
}

export interface messages_getRecentReactions {
  _: "messages.getRecentReactions";
  limit: number;
  hash: bigint;
  [R]?: messages_Reactions;
}

export interface messages_clearRecentReactions {
  _: "messages.clearRecentReactions";
  [R]?: boolean;
}

export interface messages_getExtendedMedia {
  _: "messages.getExtendedMedia";
  peer: InputPeer;
  id: Array<number>;
  [R]?: Updates;
}

export interface messages_setDefaultHistoryTTL {
  _: "messages.setDefaultHistoryTTL";
  period: number;
  [R]?: boolean;
}

export interface messages_getDefaultHistoryTTL {
  _: "messages.getDefaultHistoryTTL";
  [R]?: DefaultHistoryTTL;
}

export interface messages_sendBotRequestedPeer {
  _: "messages.sendBotRequestedPeer";
  peer: InputPeer;
  msg_id: number;
  button_id: number;
  requested_peers: Array<InputPeer>;
  [R]?: Updates;
}

export interface messages_getEmojiGroups {
  _: "messages.getEmojiGroups";
  hash: number;
  [R]?: messages_EmojiGroups;
}

export interface messages_getEmojiStatusGroups {
  _: "messages.getEmojiStatusGroups";
  hash: number;
  [R]?: messages_EmojiGroups;
}

export interface messages_getEmojiProfilePhotoGroups {
  _: "messages.getEmojiProfilePhotoGroups";
  hash: number;
  [R]?: messages_EmojiGroups;
}

export interface messages_searchCustomEmoji {
  _: "messages.searchCustomEmoji";
  emoticon: string;
  hash: bigint;
  [R]?: EmojiList;
}

export interface messages_togglePeerTranslations {
  _: "messages.togglePeerTranslations";
  disabled?: true;
  peer: InputPeer;
  [R]?: boolean;
}

export interface messages_getBotApp {
  _: "messages.getBotApp";
  app: InputBotApp;
  hash: bigint;
  [R]?: messages_BotApp;
}

export interface messages_requestAppWebView {
  _: "messages.requestAppWebView";
  write_allowed?: true;
  compact?: true;
  fullscreen?: true;
  peer: InputPeer;
  app: InputBotApp;
  start_param?: string;
  theme_params?: DataJSON;
  platform: string;
  [R]?: WebViewResult;
}

export interface messages_setChatWallPaper {
  _: "messages.setChatWallPaper";
  for_both?: true;
  revert?: true;
  peer: InputPeer;
  wallpaper?: InputWallPaper;
  settings?: WallPaperSettings;
  id?: number;
  [R]?: Updates;
}

export interface messages_searchEmojiStickerSets {
  _: "messages.searchEmojiStickerSets";
  exclude_featured?: true;
  q: string;
  hash: bigint;
  [R]?: messages_FoundStickerSets;
}

export interface messages_getSavedDialogs {
  _: "messages.getSavedDialogs";
  exclude_pinned?: true;
  offset_date: number;
  offset_id: number;
  offset_peer: InputPeer;
  limit: number;
  hash: bigint;
  [R]?: messages_SavedDialogs;
}

export interface messages_getSavedHistory {
  _: "messages.getSavedHistory";
  peer: InputPeer;
  offset_id: number;
  offset_date: number;
  add_offset: number;
  limit: number;
  max_id: number;
  min_id: number;
  hash: bigint;
  [R]?: messages_Messages;
}

export interface messages_deleteSavedHistory {
  _: "messages.deleteSavedHistory";
  peer: InputPeer;
  max_id: number;
  min_date?: number;
  max_date?: number;
  [R]?: messages_AffectedHistory;
}

export interface messages_getPinnedSavedDialogs {
  _: "messages.getPinnedSavedDialogs";
  [R]?: messages_SavedDialogs;
}

export interface messages_toggleSavedDialogPin {
  _: "messages.toggleSavedDialogPin";
  pinned?: true;
  peer: InputDialogPeer;
  [R]?: boolean;
}

export interface messages_reorderPinnedSavedDialogs {
  _: "messages.reorderPinnedSavedDialogs";
  force?: true;
  order: Array<InputDialogPeer>;
  [R]?: boolean;
}

export interface messages_getSavedReactionTags {
  _: "messages.getSavedReactionTags";
  peer?: InputPeer;
  hash: bigint;
  [R]?: messages_SavedReactionTags;
}

export interface messages_updateSavedReactionTag {
  _: "messages.updateSavedReactionTag";
  reaction: Reaction;
  title?: string;
  [R]?: boolean;
}

export interface messages_getDefaultTagReactions {
  _: "messages.getDefaultTagReactions";
  hash: bigint;
  [R]?: messages_Reactions;
}

export interface messages_getOutboxReadDate {
  _: "messages.getOutboxReadDate";
  peer: InputPeer;
  msg_id: number;
  [R]?: OutboxReadDate;
}

export interface messages_getQuickReplies {
  _: "messages.getQuickReplies";
  hash: bigint;
  [R]?: messages_QuickReplies;
}

export interface messages_reorderQuickReplies {
  _: "messages.reorderQuickReplies";
  order: Array<number>;
  [R]?: boolean;
}

export interface messages_checkQuickReplyShortcut {
  _: "messages.checkQuickReplyShortcut";
  shortcut: string;
  [R]?: boolean;
}

export interface messages_editQuickReplyShortcut {
  _: "messages.editQuickReplyShortcut";
  shortcut_id: number;
  shortcut: string;
  [R]?: boolean;
}

export interface messages_deleteQuickReplyShortcut {
  _: "messages.deleteQuickReplyShortcut";
  shortcut_id: number;
  [R]?: boolean;
}

export interface messages_getQuickReplyMessages {
  _: "messages.getQuickReplyMessages";
  shortcut_id: number;
  id?: Array<number>;
  hash: bigint;
  [R]?: messages_Messages;
}

export interface messages_sendQuickReplyMessages {
  _: "messages.sendQuickReplyMessages";
  peer: InputPeer;
  shortcut_id: number;
  id: Array<number>;
  random_id: Array<bigint>;
  [R]?: Updates;
}

export interface messages_deleteQuickReplyMessages {
  _: "messages.deleteQuickReplyMessages";
  shortcut_id: number;
  id: Array<number>;
  [R]?: Updates;
}

export interface messages_toggleDialogFilterTags {
  _: "messages.toggleDialogFilterTags";
  enabled: boolean;
  [R]?: boolean;
}

export interface messages_getMyStickers {
  _: "messages.getMyStickers";
  offset_id: bigint;
  limit: number;
  [R]?: messages_MyStickers;
}

export interface messages_getEmojiStickerGroups {
  _: "messages.getEmojiStickerGroups";
  hash: number;
  [R]?: messages_EmojiGroups;
}

export interface messages_getAvailableEffects {
  _: "messages.getAvailableEffects";
  hash: number;
  [R]?: messages_AvailableEffects;
}

export interface messages_editFactCheck {
  _: "messages.editFactCheck";
  peer: InputPeer;
  msg_id: number;
  text: TextWithEntities;
  [R]?: Updates;
}

export interface messages_deleteFactCheck {
  _: "messages.deleteFactCheck";
  peer: InputPeer;
  msg_id: number;
  [R]?: Updates;
}

export interface messages_getFactCheck {
  _: "messages.getFactCheck";
  peer: InputPeer;
  msg_id: Array<number>;
  [R]?: Array<FactCheck>;
}

export interface messages_requestMainWebView {
  _: "messages.requestMainWebView";
  compact?: true;
  fullscreen?: true;
  peer: InputPeer;
  bot: InputUser;
  start_param?: string;
  theme_params?: DataJSON;
  platform: string;
  [R]?: WebViewResult;
}

export interface messages_sendPaidReaction {
  _: "messages.sendPaidReaction";
  peer: InputPeer;
  msg_id: number;
  count: number;
  random_id: bigint;
  private?: PaidReactionPrivacy;
  [R]?: Updates;
}

export interface messages_togglePaidReactionPrivacy {
  _: "messages.togglePaidReactionPrivacy";
  peer: InputPeer;
  msg_id: number;
  private: PaidReactionPrivacy;
  [R]?: boolean;
}

export interface messages_getPaidReactionPrivacy {
  _: "messages.getPaidReactionPrivacy";
  [R]?: Updates;
}

export interface messages_viewSponsoredMessage {
  _: "messages.viewSponsoredMessage";
  peer: InputPeer;
  random_id: Uint8Array;
  [R]?: boolean;
}

export interface messages_clickSponsoredMessage {
  _: "messages.clickSponsoredMessage";
  media?: true;
  fullscreen?: true;
  peer: InputPeer;
  random_id: Uint8Array;
  [R]?: boolean;
}

export interface messages_reportSponsoredMessage {
  _: "messages.reportSponsoredMessage";
  peer: InputPeer;
  random_id: Uint8Array;
  option: Uint8Array;
  [R]?: channels_SponsoredMessageReportResult;
}

export interface messages_getSponsoredMessages {
  _: "messages.getSponsoredMessages";
  peer: InputPeer;
  [R]?: messages_SponsoredMessages;
}

export interface messages_savePreparedInlineMessage {
  _: "messages.savePreparedInlineMessage";
  result: InputBotInlineResult;
  user_id: InputUser;
  peer_types?: Array<InlineQueryPeerType>;
  [R]?: messages_BotPreparedInlineMessage;
}

export interface messages_getPreparedInlineMessage {
  _: "messages.getPreparedInlineMessage";
  bot: InputUser;
  id: string;
  [R]?: messages_PreparedInlineMessage;
}

export interface messages_searchStickers {
  _: "messages.searchStickers";
  emojis?: true;
  q: string;
  emoticon: string;
  lang_code: Array<string>;
  offset: number;
  limit: number;
  hash: bigint;
  [R]?: messages_FoundStickers;
}

export interface messages_reportMessagesDelivery {
  _: "messages.reportMessagesDelivery";
  push?: true;
  peer: InputPeer;
  id: Array<number>;
  [R]?: boolean;
}

export interface updates_getState {
  _: "updates.getState";
  [R]?: updates_State;
}

export interface updates_getDifference {
  _: "updates.getDifference";
  pts: number;
  pts_limit?: number;
  pts_total_limit?: number;
  date: number;
  qts: number;
  qts_limit?: number;
  [R]?: updates_Difference;
}

export interface updates_getChannelDifference {
  _: "updates.getChannelDifference";
  force?: true;
  channel: InputChannel;
  filter: ChannelMessagesFilter;
  pts: number;
  limit: number;
  [R]?: updates_ChannelDifference;
}

export interface photos_updateProfilePhoto {
  _: "photos.updateProfilePhoto";
  fallback?: true;
  bot?: InputUser;
  id: InputPhoto;
  [R]?: photos_Photo;
}

export interface photos_uploadProfilePhoto {
  _: "photos.uploadProfilePhoto";
  fallback?: true;
  bot?: InputUser;
  file?: InputFile;
  video?: InputFile;
  video_start_ts?: number;
  video_emoji_markup?: VideoSize;
  [R]?: photos_Photo;
}

export interface photos_deletePhotos {
  _: "photos.deletePhotos";
  id: Array<InputPhoto>;
  [R]?: Array<bigint>;
}

export interface photos_getUserPhotos {
  _: "photos.getUserPhotos";
  user_id: InputUser;
  offset: number;
  max_id: bigint;
  limit: number;
  [R]?: photos_Photos;
}

export interface photos_uploadContactProfilePhoto {
  _: "photos.uploadContactProfilePhoto";
  suggest?: true;
  save?: true;
  user_id: InputUser;
  file?: InputFile;
  video?: InputFile;
  video_start_ts?: number;
  video_emoji_markup?: VideoSize;
  [R]?: photos_Photo;
}

export interface upload_saveFilePart {
  _: "upload.saveFilePart";
  file_id: bigint;
  file_part: number;
  bytes: Uint8Array;
  [R]?: boolean;
}

export interface upload_getFile {
  _: "upload.getFile";
  precise?: true;
  cdn_supported?: true;
  location: InputFileLocation;
  offset: bigint;
  limit: number;
  [R]?: upload_File;
}

export interface upload_saveBigFilePart {
  _: "upload.saveBigFilePart";
  file_id: bigint;
  file_part: number;
  file_total_parts: number;
  bytes: Uint8Array;
  [R]?: boolean;
}

export interface upload_getWebFile {
  _: "upload.getWebFile";
  location: InputWebFileLocation;
  offset: number;
  limit: number;
  [R]?: upload_WebFile;
}

export interface upload_getCdnFile {
  _: "upload.getCdnFile";
  file_token: Uint8Array;
  offset: bigint;
  limit: number;
  [R]?: upload_CdnFile;
}

export interface upload_reuploadCdnFile {
  _: "upload.reuploadCdnFile";
  file_token: Uint8Array;
  request_token: Uint8Array;
  [R]?: Array<FileHash>;
}

export interface upload_getCdnFileHashes {
  _: "upload.getCdnFileHashes";
  file_token: Uint8Array;
  offset: bigint;
  [R]?: Array<FileHash>;
}

export interface upload_getFileHashes {
  _: "upload.getFileHashes";
  location: InputFileLocation;
  offset: bigint;
  [R]?: Array<FileHash>;
}

export interface help_getConfig {
  _: "help.getConfig";
  [R]?: Config;
}

export interface help_getNearestDc {
  _: "help.getNearestDc";
  [R]?: NearestDc;
}

export interface help_getAppUpdate {
  _: "help.getAppUpdate";
  source: string;
  [R]?: help_AppUpdate;
}

export interface help_getInviteText {
  _: "help.getInviteText";
  [R]?: help_InviteText;
}

export interface help_getSupport {
  _: "help.getSupport";
  [R]?: help_Support;
}

export interface help_setBotUpdatesStatus {
  _: "help.setBotUpdatesStatus";
  pending_updates_count: number;
  message: string;
  [R]?: boolean;
}

export interface help_getCdnConfig {
  _: "help.getCdnConfig";
  [R]?: CdnConfig;
}

export interface help_getRecentMeUrls {
  _: "help.getRecentMeUrls";
  referer: string;
  [R]?: help_RecentMeUrls;
}

export interface help_getTermsOfServiceUpdate {
  _: "help.getTermsOfServiceUpdate";
  [R]?: help_TermsOfServiceUpdate;
}

export interface help_acceptTermsOfService {
  _: "help.acceptTermsOfService";
  id: DataJSON;
  [R]?: boolean;
}

export interface help_getDeepLinkInfo {
  _: "help.getDeepLinkInfo";
  path: string;
  [R]?: help_DeepLinkInfo;
}

export interface help_getAppConfig {
  _: "help.getAppConfig";
  hash: number;
  [R]?: help_AppConfig;
}

export interface help_saveAppLog {
  _: "help.saveAppLog";
  events: Array<InputAppEvent>;
  [R]?: boolean;
}

export interface help_getPassportConfig {
  _: "help.getPassportConfig";
  hash: number;
  [R]?: help_PassportConfig;
}

export interface help_getSupportName {
  _: "help.getSupportName";
  [R]?: help_SupportName;
}

export interface help_getUserInfo {
  _: "help.getUserInfo";
  user_id: InputUser;
  [R]?: help_UserInfo;
}

export interface help_editUserInfo {
  _: "help.editUserInfo";
  user_id: InputUser;
  message: string;
  entities: Array<MessageEntity>;
  [R]?: help_UserInfo;
}

export interface help_getPromoData {
  _: "help.getPromoData";
  [R]?: help_PromoData;
}

export interface help_hidePromoData {
  _: "help.hidePromoData";
  peer: InputPeer;
  [R]?: boolean;
}

export interface help_dismissSuggestion {
  _: "help.dismissSuggestion";
  peer: InputPeer;
  suggestion: string;
  [R]?: boolean;
}

export interface help_getCountriesList {
  _: "help.getCountriesList";
  lang_code: string;
  hash: number;
  [R]?: help_CountriesList;
}

export interface help_getPremiumPromo {
  _: "help.getPremiumPromo";
  [R]?: help_PremiumPromo;
}

export interface help_getPeerColors {
  _: "help.getPeerColors";
  hash: number;
  [R]?: help_PeerColors;
}

export interface help_getPeerProfileColors {
  _: "help.getPeerProfileColors";
  hash: number;
  [R]?: help_PeerColors;
}

export interface help_getTimezonesList {
  _: "help.getTimezonesList";
  hash: number;
  [R]?: help_TimezonesList;
}

export interface channels_readHistory {
  _: "channels.readHistory";
  channel: InputChannel;
  max_id: number;
  [R]?: boolean;
}

export interface channels_deleteMessages {
  _: "channels.deleteMessages";
  channel: InputChannel;
  id: Array<number>;
  [R]?: messages_AffectedMessages;
}

export interface channels_reportSpam {
  _: "channels.reportSpam";
  channel: InputChannel;
  participant: InputPeer;
  id: Array<number>;
  [R]?: boolean;
}

export interface channels_getMessages {
  _: "channels.getMessages";
  channel: InputChannel;
  id: Array<InputMessage>;
  [R]?: messages_Messages;
}

export interface channels_getParticipants {
  _: "channels.getParticipants";
  channel: InputChannel;
  filter: ChannelParticipantsFilter;
  offset: number;
  limit: number;
  hash: bigint;
  [R]?: channels_ChannelParticipants;
}

export interface channels_getParticipant {
  _: "channels.getParticipant";
  channel: InputChannel;
  participant: InputPeer;
  [R]?: channels_ChannelParticipant;
}

export interface channels_getChannels {
  _: "channels.getChannels";
  id: Array<InputChannel>;
  [R]?: messages_Chats;
}

export interface channels_getFullChannel {
  _: "channels.getFullChannel";
  channel: InputChannel;
  [R]?: messages_ChatFull;
}

export interface channels_createChannel {
  _: "channels.createChannel";
  broadcast?: true;
  megagroup?: true;
  for_import?: true;
  forum?: true;
  title: string;
  about: string;
  geo_point?: InputGeoPoint;
  address?: string;
  ttl_period?: number;
  [R]?: Updates;
}

export interface channels_editAdmin {
  _: "channels.editAdmin";
  channel: InputChannel;
  user_id: InputUser;
  admin_rights: ChatAdminRights;
  rank: string;
  [R]?: Updates;
}

export interface channels_editTitle {
  _: "channels.editTitle";
  channel: InputChannel;
  title: string;
  [R]?: Updates;
}

export interface channels_editPhoto {
  _: "channels.editPhoto";
  channel: InputChannel;
  photo: InputChatPhoto;
  [R]?: Updates;
}

export interface channels_checkUsername {
  _: "channels.checkUsername";
  channel: InputChannel;
  username: string;
  [R]?: boolean;
}

export interface channels_updateUsername {
  _: "channels.updateUsername";
  channel: InputChannel;
  username: string;
  [R]?: boolean;
}

export interface channels_joinChannel {
  _: "channels.joinChannel";
  channel: InputChannel;
  [R]?: Updates;
}

export interface channels_leaveChannel {
  _: "channels.leaveChannel";
  channel: InputChannel;
  [R]?: Updates;
}

export interface channels_inviteToChannel {
  _: "channels.inviteToChannel";
  channel: InputChannel;
  users: Array<InputUser>;
  [R]?: messages_InvitedUsers;
}

export interface channels_deleteChannel {
  _: "channels.deleteChannel";
  channel: InputChannel;
  [R]?: Updates;
}

export interface channels_exportMessageLink {
  _: "channels.exportMessageLink";
  grouped?: true;
  thread?: true;
  channel: InputChannel;
  id: number;
  [R]?: ExportedMessageLink;
}

export interface channels_toggleSignatures {
  _: "channels.toggleSignatures";
  signatures_enabled?: true;
  profiles_enabled?: true;
  channel: InputChannel;
  [R]?: Updates;
}

export interface channels_getAdminedPublicChannels {
  _: "channels.getAdminedPublicChannels";
  by_location?: true;
  check_limit?: true;
  for_personal?: true;
  [R]?: messages_Chats;
}

export interface channels_editBanned {
  _: "channels.editBanned";
  channel: InputChannel;
  participant: InputPeer;
  banned_rights: ChatBannedRights;
  [R]?: Updates;
}

export interface channels_getAdminLog {
  _: "channels.getAdminLog";
  channel: InputChannel;
  q: string;
  events_filter?: ChannelAdminLogEventsFilter;
  admins?: Array<InputUser>;
  max_id: bigint;
  min_id: bigint;
  limit: number;
  [R]?: channels_AdminLogResults;
}

export interface channels_setStickers {
  _: "channels.setStickers";
  channel: InputChannel;
  stickerset: InputStickerSet;
  [R]?: boolean;
}

export interface channels_readMessageContents {
  _: "channels.readMessageContents";
  channel: InputChannel;
  id: Array<number>;
  [R]?: boolean;
}

export interface channels_deleteHistory {
  _: "channels.deleteHistory";
  for_everyone?: true;
  channel: InputChannel;
  max_id: number;
  [R]?: Updates;
}

export interface channels_togglePreHistoryHidden {
  _: "channels.togglePreHistoryHidden";
  channel: InputChannel;
  enabled: boolean;
  [R]?: Updates;
}

export interface channels_getLeftChannels {
  _: "channels.getLeftChannels";
  offset: number;
  [R]?: messages_Chats;
}

export interface channels_getGroupsForDiscussion {
  _: "channels.getGroupsForDiscussion";
  [R]?: messages_Chats;
}

export interface channels_setDiscussionGroup {
  _: "channels.setDiscussionGroup";
  broadcast: InputChannel;
  group: InputChannel;
  [R]?: boolean;
}

export interface channels_editCreator {
  _: "channels.editCreator";
  channel: InputChannel;
  user_id: InputUser;
  password: InputCheckPasswordSRP;
  [R]?: Updates;
}

export interface channels_editLocation {
  _: "channels.editLocation";
  channel: InputChannel;
  geo_point: InputGeoPoint;
  address: string;
  [R]?: boolean;
}

export interface channels_toggleSlowMode {
  _: "channels.toggleSlowMode";
  channel: InputChannel;
  seconds: number;
  [R]?: Updates;
}

export interface channels_getInactiveChannels {
  _: "channels.getInactiveChannels";
  [R]?: messages_InactiveChats;
}

export interface channels_convertToGigagroup {
  _: "channels.convertToGigagroup";
  channel: InputChannel;
  [R]?: Updates;
}

export interface channels_getSendAs {
  _: "channels.getSendAs";
  for_paid_reactions?: true;
  peer: InputPeer;
  [R]?: channels_SendAsPeers;
}

export interface channels_deleteParticipantHistory {
  _: "channels.deleteParticipantHistory";
  channel: InputChannel;
  participant: InputPeer;
  [R]?: messages_AffectedHistory;
}

export interface channels_toggleJoinToSend {
  _: "channels.toggleJoinToSend";
  channel: InputChannel;
  enabled: boolean;
  [R]?: Updates;
}

export interface channels_toggleJoinRequest {
  _: "channels.toggleJoinRequest";
  channel: InputChannel;
  enabled: boolean;
  [R]?: Updates;
}

export interface channels_reorderUsernames {
  _: "channels.reorderUsernames";
  channel: InputChannel;
  order: Array<string>;
  [R]?: boolean;
}

export interface channels_toggleUsername {
  _: "channels.toggleUsername";
  channel: InputChannel;
  username: string;
  active: boolean;
  [R]?: boolean;
}

export interface channels_deactivateAllUsernames {
  _: "channels.deactivateAllUsernames";
  channel: InputChannel;
  [R]?: boolean;
}

export interface channels_toggleForum {
  _: "channels.toggleForum";
  channel: InputChannel;
  enabled: boolean;
  [R]?: Updates;
}

export interface channels_createForumTopic {
  _: "channels.createForumTopic";
  channel: InputChannel;
  title: string;
  icon_color?: number;
  icon_emoji_id?: bigint;
  random_id: bigint;
  send_as?: InputPeer;
  [R]?: Updates;
}

export interface channels_getForumTopics {
  _: "channels.getForumTopics";
  channel: InputChannel;
  q?: string;
  offset_date: number;
  offset_id: number;
  offset_topic: number;
  limit: number;
  [R]?: messages_ForumTopics;
}

export interface channels_getForumTopicsByID {
  _: "channels.getForumTopicsByID";
  channel: InputChannel;
  topics: Array<number>;
  [R]?: messages_ForumTopics;
}

export interface channels_editForumTopic {
  _: "channels.editForumTopic";
  channel: InputChannel;
  topic_id: number;
  title?: string;
  icon_emoji_id?: bigint;
  closed?: boolean;
  hidden?: boolean;
  [R]?: Updates;
}

export interface channels_updatePinnedForumTopic {
  _: "channels.updatePinnedForumTopic";
  channel: InputChannel;
  topic_id: number;
  pinned: boolean;
  [R]?: Updates;
}

export interface channels_deleteTopicHistory {
  _: "channels.deleteTopicHistory";
  channel: InputChannel;
  top_msg_id: number;
  [R]?: messages_AffectedHistory;
}

export interface channels_reorderPinnedForumTopics {
  _: "channels.reorderPinnedForumTopics";
  force?: true;
  channel: InputChannel;
  order: Array<number>;
  [R]?: Updates;
}

export interface channels_toggleAntiSpam {
  _: "channels.toggleAntiSpam";
  channel: InputChannel;
  enabled: boolean;
  [R]?: Updates;
}

export interface channels_reportAntiSpamFalsePositive {
  _: "channels.reportAntiSpamFalsePositive";
  channel: InputChannel;
  msg_id: number;
  [R]?: boolean;
}

export interface channels_toggleParticipantsHidden {
  _: "channels.toggleParticipantsHidden";
  channel: InputChannel;
  enabled: boolean;
  [R]?: Updates;
}

export interface channels_updateColor {
  _: "channels.updateColor";
  for_profile?: true;
  channel: InputChannel;
  color?: number;
  background_emoji_id?: bigint;
  [R]?: Updates;
}

export interface channels_toggleViewForumAsMessages {
  _: "channels.toggleViewForumAsMessages";
  channel: InputChannel;
  enabled: boolean;
  [R]?: Updates;
}

export interface channels_getChannelRecommendations {
  _: "channels.getChannelRecommendations";
  channel?: InputChannel;
  [R]?: messages_Chats;
}

export interface channels_updateEmojiStatus {
  _: "channels.updateEmojiStatus";
  channel: InputChannel;
  emoji_status: EmojiStatus;
  [R]?: Updates;
}

export interface channels_setBoostsToUnblockRestrictions {
  _: "channels.setBoostsToUnblockRestrictions";
  channel: InputChannel;
  boosts: number;
  [R]?: Updates;
}

export interface channels_setEmojiStickers {
  _: "channels.setEmojiStickers";
  channel: InputChannel;
  stickerset: InputStickerSet;
  [R]?: boolean;
}

export interface channels_restrictSponsoredMessages {
  _: "channels.restrictSponsoredMessages";
  channel: InputChannel;
  restricted: boolean;
  [R]?: Updates;
}

export interface channels_searchPosts {
  _: "channels.searchPosts";
  hashtag: string;
  offset_rate: number;
  offset_peer: InputPeer;
  offset_id: number;
  limit: number;
  [R]?: messages_Messages;
}

export interface channels_updatePaidMessagesPrice {
  _: "channels.updatePaidMessagesPrice";
  channel: InputChannel;
  send_paid_messages_stars: bigint;
  [R]?: Updates;
}

export interface bots_sendCustomRequest {
  _: "bots.sendCustomRequest";
  custom_method: string;
  params: DataJSON;
  [R]?: DataJSON;
}

export interface bots_answerWebhookJSONQuery {
  _: "bots.answerWebhookJSONQuery";
  query_id: bigint;
  data: DataJSON;
  [R]?: boolean;
}

export interface bots_setBotCommands {
  _: "bots.setBotCommands";
  scope: BotCommandScope;
  lang_code: string;
  commands: Array<BotCommand>;
  [R]?: boolean;
}

export interface bots_resetBotCommands {
  _: "bots.resetBotCommands";
  scope: BotCommandScope;
  lang_code: string;
  [R]?: boolean;
}

export interface bots_getBotCommands {
  _: "bots.getBotCommands";
  scope: BotCommandScope;
  lang_code: string;
  [R]?: Array<BotCommand>;
}

export interface bots_setBotMenuButton {
  _: "bots.setBotMenuButton";
  user_id: InputUser;
  button: BotMenuButton;
  [R]?: boolean;
}

export interface bots_getBotMenuButton {
  _: "bots.getBotMenuButton";
  user_id: InputUser;
  [R]?: BotMenuButton;
}

export interface bots_setBotBroadcastDefaultAdminRights {
  _: "bots.setBotBroadcastDefaultAdminRights";
  admin_rights: ChatAdminRights;
  [R]?: boolean;
}

export interface bots_setBotGroupDefaultAdminRights {
  _: "bots.setBotGroupDefaultAdminRights";
  admin_rights: ChatAdminRights;
  [R]?: boolean;
}

export interface bots_setBotInfo {
  _: "bots.setBotInfo";
  bot?: InputUser;
  lang_code: string;
  name?: string;
  about?: string;
  description?: string;
  [R]?: boolean;
}

export interface bots_getBotInfo {
  _: "bots.getBotInfo";
  bot?: InputUser;
  lang_code: string;
  [R]?: bots_BotInfo;
}

export interface bots_reorderUsernames {
  _: "bots.reorderUsernames";
  bot: InputUser;
  order: Array<string>;
  [R]?: boolean;
}

export interface bots_toggleUsername {
  _: "bots.toggleUsername";
  bot: InputUser;
  username: string;
  active: boolean;
  [R]?: boolean;
}

export interface bots_canSendMessage {
  _: "bots.canSendMessage";
  bot: InputUser;
  [R]?: boolean;
}

export interface bots_allowSendMessage {
  _: "bots.allowSendMessage";
  bot: InputUser;
  [R]?: Updates;
}

export interface bots_invokeWebViewCustomMethod {
  _: "bots.invokeWebViewCustomMethod";
  bot: InputUser;
  custom_method: string;
  params: DataJSON;
  [R]?: DataJSON;
}

export interface bots_getPopularAppBots {
  _: "bots.getPopularAppBots";
  offset: string;
  limit: number;
  [R]?: bots_PopularAppBots;
}

export interface bots_addPreviewMedia {
  _: "bots.addPreviewMedia";
  bot: InputUser;
  lang_code: string;
  media: InputMedia;
  [R]?: BotPreviewMedia;
}

export interface bots_editPreviewMedia {
  _: "bots.editPreviewMedia";
  bot: InputUser;
  lang_code: string;
  media: InputMedia;
  new_media: InputMedia;
  [R]?: BotPreviewMedia;
}

export interface bots_deletePreviewMedia {
  _: "bots.deletePreviewMedia";
  bot: InputUser;
  lang_code: string;
  media: Array<InputMedia>;
  [R]?: boolean;
}

export interface bots_reorderPreviewMedias {
  _: "bots.reorderPreviewMedias";
  bot: InputUser;
  lang_code: string;
  order: Array<InputMedia>;
  [R]?: boolean;
}

export interface bots_getPreviewInfo {
  _: "bots.getPreviewInfo";
  bot: InputUser;
  lang_code: string;
  [R]?: bots_PreviewInfo;
}

export interface bots_getPreviewMedias {
  _: "bots.getPreviewMedias";
  bot: InputUser;
  [R]?: Array<BotPreviewMedia>;
}

export interface bots_updateUserEmojiStatus {
  _: "bots.updateUserEmojiStatus";
  user_id: InputUser;
  emoji_status: EmojiStatus;
  [R]?: boolean;
}

export interface bots_toggleUserEmojiStatusPermission {
  _: "bots.toggleUserEmojiStatusPermission";
  bot: InputUser;
  enabled: boolean;
  [R]?: boolean;
}

export interface bots_checkDownloadFileParams {
  _: "bots.checkDownloadFileParams";
  bot: InputUser;
  file_name: string;
  url: string;
  [R]?: boolean;
}

export interface bots_getAdminedBots {
  _: "bots.getAdminedBots";
  [R]?: Array<User>;
}

export interface bots_updateStarRefProgram {
  _: "bots.updateStarRefProgram";
  bot: InputUser;
  commission_permille: number;
  duration_months?: number;
  [R]?: StarRefProgram;
}

export interface bots_setCustomVerification {
  _: "bots.setCustomVerification";
  enabled?: true;
  bot?: InputUser;
  peer: InputPeer;
  custom_description?: string;
  [R]?: boolean;
}

export interface bots_getBotRecommendations {
  _: "bots.getBotRecommendations";
  bot: InputUser;
  [R]?: users_Users;
}

export interface payments_getPaymentForm {
  _: "payments.getPaymentForm";
  invoice: InputInvoice;
  theme_params?: DataJSON;
  [R]?: payments_PaymentForm;
}

export interface payments_getPaymentReceipt {
  _: "payments.getPaymentReceipt";
  peer: InputPeer;
  msg_id: number;
  [R]?: payments_PaymentReceipt;
}

export interface payments_validateRequestedInfo {
  _: "payments.validateRequestedInfo";
  save?: true;
  invoice: InputInvoice;
  info: PaymentRequestedInfo;
  [R]?: payments_ValidatedRequestedInfo;
}

export interface payments_sendPaymentForm {
  _: "payments.sendPaymentForm";
  form_id: bigint;
  invoice: InputInvoice;
  requested_info_id?: string;
  shipping_option_id?: string;
  credentials: InputPaymentCredentials;
  tip_amount?: bigint;
  [R]?: payments_PaymentResult;
}

export interface payments_getSavedInfo {
  _: "payments.getSavedInfo";
  [R]?: payments_SavedInfo;
}

export interface payments_clearSavedInfo {
  _: "payments.clearSavedInfo";
  credentials?: true;
  info?: true;
  [R]?: boolean;
}

export interface payments_getBankCardData {
  _: "payments.getBankCardData";
  number: string;
  [R]?: payments_BankCardData;
}

export interface payments_exportInvoice {
  _: "payments.exportInvoice";
  invoice_media: InputMedia;
  [R]?: payments_ExportedInvoice;
}

export interface payments_assignAppStoreTransaction {
  _: "payments.assignAppStoreTransaction";
  receipt: Uint8Array;
  purpose: InputStorePaymentPurpose;
  [R]?: Updates;
}

export interface payments_assignPlayMarketTransaction {
  _: "payments.assignPlayMarketTransaction";
  receipt: DataJSON;
  purpose: InputStorePaymentPurpose;
  [R]?: Updates;
}

export interface payments_canPurchasePremium {
  _: "payments.canPurchasePremium";
  purpose: InputStorePaymentPurpose;
  [R]?: boolean;
}

export interface payments_getPremiumGiftCodeOptions {
  _: "payments.getPremiumGiftCodeOptions";
  boost_peer?: InputPeer;
  [R]?: Array<PremiumGiftCodeOption>;
}

export interface payments_checkGiftCode {
  _: "payments.checkGiftCode";
  slug: string;
  [R]?: payments_CheckedGiftCode;
}

export interface payments_applyGiftCode {
  _: "payments.applyGiftCode";
  slug: string;
  [R]?: Updates;
}

export interface payments_getGiveawayInfo {
  _: "payments.getGiveawayInfo";
  peer: InputPeer;
  msg_id: number;
  [R]?: payments_GiveawayInfo;
}

export interface payments_launchPrepaidGiveaway {
  _: "payments.launchPrepaidGiveaway";
  peer: InputPeer;
  giveaway_id: bigint;
  purpose: InputStorePaymentPurpose;
  [R]?: Updates;
}

export interface payments_getStarsTopupOptions {
  _: "payments.getStarsTopupOptions";
  [R]?: Array<StarsTopupOption>;
}

export interface payments_getStarsStatus {
  _: "payments.getStarsStatus";
  peer: InputPeer;
  [R]?: payments_StarsStatus;
}

export interface payments_getStarsTransactions {
  _: "payments.getStarsTransactions";
  inbound?: true;
  outbound?: true;
  ascending?: true;
  subscription_id?: string;
  peer: InputPeer;
  offset: string;
  limit: number;
  [R]?: payments_StarsStatus;
}

export interface payments_sendStarsForm {
  _: "payments.sendStarsForm";
  form_id: bigint;
  invoice: InputInvoice;
  [R]?: payments_PaymentResult;
}

export interface payments_refundStarsCharge {
  _: "payments.refundStarsCharge";
  user_id: InputUser;
  charge_id: string;
  [R]?: Updates;
}

export interface payments_getStarsRevenueStats {
  _: "payments.getStarsRevenueStats";
  dark?: true;
  peer: InputPeer;
  [R]?: payments_StarsRevenueStats;
}

export interface payments_getStarsRevenueWithdrawalUrl {
  _: "payments.getStarsRevenueWithdrawalUrl";
  peer: InputPeer;
  stars: bigint;
  password: InputCheckPasswordSRP;
  [R]?: payments_StarsRevenueWithdrawalUrl;
}

export interface payments_getStarsRevenueAdsAccountUrl {
  _: "payments.getStarsRevenueAdsAccountUrl";
  peer: InputPeer;
  [R]?: payments_StarsRevenueAdsAccountUrl;
}

export interface payments_getStarsTransactionsByID {
  _: "payments.getStarsTransactionsByID";
  peer: InputPeer;
  id: Array<InputStarsTransaction>;
  [R]?: payments_StarsStatus;
}

export interface payments_getStarsGiftOptions {
  _: "payments.getStarsGiftOptions";
  user_id?: InputUser;
  [R]?: Array<StarsGiftOption>;
}

export interface payments_getStarsSubscriptions {
  _: "payments.getStarsSubscriptions";
  missing_balance?: true;
  peer: InputPeer;
  offset: string;
  [R]?: payments_StarsStatus;
}

export interface payments_changeStarsSubscription {
  _: "payments.changeStarsSubscription";
  peer: InputPeer;
  subscription_id: string;
  canceled?: boolean;
  [R]?: boolean;
}

export interface payments_fulfillStarsSubscription {
  _: "payments.fulfillStarsSubscription";
  peer: InputPeer;
  subscription_id: string;
  [R]?: boolean;
}

export interface payments_getStarsGiveawayOptions {
  _: "payments.getStarsGiveawayOptions";
  [R]?: Array<StarsGiveawayOption>;
}

export interface payments_getStarGifts {
  _: "payments.getStarGifts";
  hash: number;
  [R]?: payments_StarGifts;
}

export interface payments_saveStarGift {
  _: "payments.saveStarGift";
  unsave?: true;
  stargift: InputSavedStarGift;
  [R]?: boolean;
}

export interface payments_convertStarGift {
  _: "payments.convertStarGift";
  stargift: InputSavedStarGift;
  [R]?: boolean;
}

export interface payments_botCancelStarsSubscription {
  _: "payments.botCancelStarsSubscription";
  restore?: true;
  user_id: InputUser;
  charge_id: string;
  [R]?: boolean;
}

export interface payments_getConnectedStarRefBots {
  _: "payments.getConnectedStarRefBots";
  peer: InputPeer;
  offset_date?: number;
  offset_link?: string;
  limit: number;
  [R]?: payments_ConnectedStarRefBots;
}

export interface payments_getConnectedStarRefBot {
  _: "payments.getConnectedStarRefBot";
  peer: InputPeer;
  bot: InputUser;
  [R]?: payments_ConnectedStarRefBots;
}

export interface payments_getSuggestedStarRefBots {
  _: "payments.getSuggestedStarRefBots";
  order_by_revenue?: true;
  order_by_date?: true;
  peer: InputPeer;
  offset: string;
  limit: number;
  [R]?: payments_SuggestedStarRefBots;
}

export interface payments_connectStarRefBot {
  _: "payments.connectStarRefBot";
  peer: InputPeer;
  bot: InputUser;
  [R]?: payments_ConnectedStarRefBots;
}

export interface payments_editConnectedStarRefBot {
  _: "payments.editConnectedStarRefBot";
  revoked?: true;
  peer: InputPeer;
  link: string;
  [R]?: payments_ConnectedStarRefBots;
}

export interface payments_getStarGiftUpgradePreview {
  _: "payments.getStarGiftUpgradePreview";
  gift_id: bigint;
  [R]?: payments_StarGiftUpgradePreview;
}

export interface payments_upgradeStarGift {
  _: "payments.upgradeStarGift";
  keep_original_details?: true;
  stargift: InputSavedStarGift;
  [R]?: Updates;
}

export interface payments_transferStarGift {
  _: "payments.transferStarGift";
  stargift: InputSavedStarGift;
  to_id: InputPeer;
  [R]?: Updates;
}

export interface payments_getUniqueStarGift {
  _: "payments.getUniqueStarGift";
  slug: string;
  [R]?: payments_UniqueStarGift;
}

export interface payments_getSavedStarGifts {
  _: "payments.getSavedStarGifts";
  exclude_unsaved?: true;
  exclude_saved?: true;
  exclude_unlimited?: true;
  exclude_limited?: true;
  exclude_unique?: true;
  sort_by_value?: true;
  peer: InputPeer;
  offset: string;
  limit: number;
  [R]?: payments_SavedStarGifts;
}

export interface payments_getSavedStarGift {
  _: "payments.getSavedStarGift";
  stargift: Array<InputSavedStarGift>;
  [R]?: payments_SavedStarGifts;
}

export interface payments_getStarGiftWithdrawalUrl {
  _: "payments.getStarGiftWithdrawalUrl";
  stargift: InputSavedStarGift;
  password: InputCheckPasswordSRP;
  [R]?: payments_StarGiftWithdrawalUrl;
}

export interface payments_toggleChatStarGiftNotifications {
  _: "payments.toggleChatStarGiftNotifications";
  enabled?: true;
  peer: InputPeer;
  [R]?: boolean;
}

export interface payments_toggleStarGiftsPinnedToTop {
  _: "payments.toggleStarGiftsPinnedToTop";
  peer: InputPeer;
  stargift: Array<InputSavedStarGift>;
  [R]?: boolean;
}

export interface stickers_createStickerSet {
  _: "stickers.createStickerSet";
  masks?: true;
  emojis?: true;
  text_color?: true;
  user_id: InputUser;
  title: string;
  short_name: string;
  thumb?: InputDocument;
  stickers: Array<InputStickerSetItem>;
  software?: string;
  [R]?: messages_StickerSet;
}

export interface stickers_removeStickerFromSet {
  _: "stickers.removeStickerFromSet";
  sticker: InputDocument;
  [R]?: messages_StickerSet;
}

export interface stickers_changeStickerPosition {
  _: "stickers.changeStickerPosition";
  sticker: InputDocument;
  position: number;
  [R]?: messages_StickerSet;
}

export interface stickers_addStickerToSet {
  _: "stickers.addStickerToSet";
  stickerset: InputStickerSet;
  sticker: InputStickerSetItem;
  [R]?: messages_StickerSet;
}

export interface stickers_setStickerSetThumb {
  _: "stickers.setStickerSetThumb";
  stickerset: InputStickerSet;
  thumb?: InputDocument;
  thumb_document_id?: bigint;
  [R]?: messages_StickerSet;
}

export interface stickers_checkShortName {
  _: "stickers.checkShortName";
  short_name: string;
  [R]?: boolean;
}

export interface stickers_suggestShortName {
  _: "stickers.suggestShortName";
  title: string;
  [R]?: stickers_SuggestedShortName;
}

export interface stickers_changeSticker {
  _: "stickers.changeSticker";
  sticker: InputDocument;
  emoji?: string;
  mask_coords?: MaskCoords;
  keywords?: string;
  [R]?: messages_StickerSet;
}

export interface stickers_renameStickerSet {
  _: "stickers.renameStickerSet";
  stickerset: InputStickerSet;
  title: string;
  [R]?: messages_StickerSet;
}

export interface stickers_deleteStickerSet {
  _: "stickers.deleteStickerSet";
  stickerset: InputStickerSet;
  [R]?: boolean;
}

export interface stickers_replaceSticker {
  _: "stickers.replaceSticker";
  sticker: InputDocument;
  new_sticker: InputStickerSetItem;
  [R]?: messages_StickerSet;
}

export interface phone_getCallConfig {
  _: "phone.getCallConfig";
  [R]?: DataJSON;
}

export interface phone_requestCall {
  _: "phone.requestCall";
  video?: true;
  user_id: InputUser;
  conference_call?: InputGroupCall;
  random_id: number;
  g_a_hash: Uint8Array;
  protocol: PhoneCallProtocol;
  [R]?: phone_PhoneCall;
}

export interface phone_acceptCall {
  _: "phone.acceptCall";
  peer: InputPhoneCall;
  g_b: Uint8Array;
  protocol: PhoneCallProtocol;
  [R]?: phone_PhoneCall;
}

export interface phone_confirmCall {
  _: "phone.confirmCall";
  peer: InputPhoneCall;
  g_a: Uint8Array;
  key_fingerprint: bigint;
  protocol: PhoneCallProtocol;
  [R]?: phone_PhoneCall;
}

export interface phone_receivedCall {
  _: "phone.receivedCall";
  peer: InputPhoneCall;
  [R]?: boolean;
}

export interface phone_discardCall {
  _: "phone.discardCall";
  video?: true;
  peer: InputPhoneCall;
  duration: number;
  reason: PhoneCallDiscardReason;
  connection_id: bigint;
  [R]?: Updates;
}

export interface phone_setCallRating {
  _: "phone.setCallRating";
  user_initiative?: true;
  peer: InputPhoneCall;
  rating: number;
  comment: string;
  [R]?: Updates;
}

export interface phone_saveCallDebug {
  _: "phone.saveCallDebug";
  peer: InputPhoneCall;
  debug: DataJSON;
  [R]?: boolean;
}

export interface phone_sendSignalingData {
  _: "phone.sendSignalingData";
  peer: InputPhoneCall;
  data: Uint8Array;
  [R]?: boolean;
}

export interface phone_createGroupCall {
  _: "phone.createGroupCall";
  rtmp_stream?: true;
  peer: InputPeer;
  random_id: number;
  title?: string;
  schedule_date?: number;
  [R]?: Updates;
}

export interface phone_joinGroupCall {
  _: "phone.joinGroupCall";
  muted?: true;
  video_stopped?: true;
  call: InputGroupCall;
  join_as: InputPeer;
  invite_hash?: string;
  key_fingerprint?: bigint;
  params: DataJSON;
  [R]?: Updates;
}

export interface phone_leaveGroupCall {
  _: "phone.leaveGroupCall";
  call: InputGroupCall;
  source: number;
  [R]?: Updates;
}

export interface phone_inviteToGroupCall {
  _: "phone.inviteToGroupCall";
  call: InputGroupCall;
  users: Array<InputUser>;
  [R]?: Updates;
}

export interface phone_discardGroupCall {
  _: "phone.discardGroupCall";
  call: InputGroupCall;
  [R]?: Updates;
}

export interface phone_toggleGroupCallSettings {
  _: "phone.toggleGroupCallSettings";
  reset_invite_hash?: true;
  call: InputGroupCall;
  join_muted?: boolean;
  [R]?: Updates;
}

export interface phone_getGroupCall {
  _: "phone.getGroupCall";
  call: InputGroupCall;
  limit: number;
  [R]?: phone_GroupCall;
}

export interface phone_getGroupParticipants {
  _: "phone.getGroupParticipants";
  call: InputGroupCall;
  ids: Array<InputPeer>;
  sources: Array<number>;
  offset: string;
  limit: number;
  [R]?: phone_GroupParticipants;
}

export interface phone_checkGroupCall {
  _: "phone.checkGroupCall";
  call: InputGroupCall;
  sources: Array<number>;
  [R]?: Array<number>;
}

export interface phone_toggleGroupCallRecord {
  _: "phone.toggleGroupCallRecord";
  start?: true;
  video?: true;
  call: InputGroupCall;
  title?: string;
  video_portrait?: boolean;
  [R]?: Updates;
}

export interface phone_editGroupCallParticipant {
  _: "phone.editGroupCallParticipant";
  call: InputGroupCall;
  participant: InputPeer;
  muted?: boolean;
  volume?: number;
  raise_hand?: boolean;
  video_stopped?: boolean;
  video_paused?: boolean;
  presentation_paused?: boolean;
  [R]?: Updates;
}

export interface phone_editGroupCallTitle {
  _: "phone.editGroupCallTitle";
  call: InputGroupCall;
  title: string;
  [R]?: Updates;
}

export interface phone_getGroupCallJoinAs {
  _: "phone.getGroupCallJoinAs";
  peer: InputPeer;
  [R]?: phone_JoinAsPeers;
}

export interface phone_exportGroupCallInvite {
  _: "phone.exportGroupCallInvite";
  can_self_unmute?: true;
  call: InputGroupCall;
  [R]?: phone_ExportedGroupCallInvite;
}

export interface phone_toggleGroupCallStartSubscription {
  _: "phone.toggleGroupCallStartSubscription";
  call: InputGroupCall;
  subscribed: boolean;
  [R]?: Updates;
}

export interface phone_startScheduledGroupCall {
  _: "phone.startScheduledGroupCall";
  call: InputGroupCall;
  [R]?: Updates;
}

export interface phone_saveDefaultGroupCallJoinAs {
  _: "phone.saveDefaultGroupCallJoinAs";
  peer: InputPeer;
  join_as: InputPeer;
  [R]?: boolean;
}

export interface phone_joinGroupCallPresentation {
  _: "phone.joinGroupCallPresentation";
  call: InputGroupCall;
  params: DataJSON;
  [R]?: Updates;
}

export interface phone_leaveGroupCallPresentation {
  _: "phone.leaveGroupCallPresentation";
  call: InputGroupCall;
  [R]?: Updates;
}

export interface phone_getGroupCallStreamChannels {
  _: "phone.getGroupCallStreamChannels";
  call: InputGroupCall;
  [R]?: phone_GroupCallStreamChannels;
}

export interface phone_getGroupCallStreamRtmpUrl {
  _: "phone.getGroupCallStreamRtmpUrl";
  peer: InputPeer;
  revoke: boolean;
  [R]?: phone_GroupCallStreamRtmpUrl;
}

export interface phone_saveCallLog {
  _: "phone.saveCallLog";
  peer: InputPhoneCall;
  file: InputFile;
  [R]?: boolean;
}

export interface phone_createConferenceCall {
  _: "phone.createConferenceCall";
  peer: InputPhoneCall;
  key_fingerprint: bigint;
  [R]?: phone_PhoneCall;
}

export interface langpack_getLangPack {
  _: "langpack.getLangPack";
  lang_pack: string;
  lang_code: string;
  [R]?: LangPackDifference;
}

export interface langpack_getStrings {
  _: "langpack.getStrings";
  lang_pack: string;
  lang_code: string;
  keys: Array<string>;
  [R]?: Array<LangPackString>;
}

export interface langpack_getDifference {
  _: "langpack.getDifference";
  lang_pack: string;
  lang_code: string;
  from_version: number;
  [R]?: LangPackDifference;
}

export interface langpack_getLanguages {
  _: "langpack.getLanguages";
  lang_pack: string;
  [R]?: Array<LangPackLanguage>;
}

export interface langpack_getLanguage {
  _: "langpack.getLanguage";
  lang_pack: string;
  lang_code: string;
  [R]?: LangPackLanguage;
}

export interface folders_editPeerFolders {
  _: "folders.editPeerFolders";
  folder_peers: Array<InputFolderPeer>;
  [R]?: Updates;
}

export interface stats_getBroadcastStats {
  _: "stats.getBroadcastStats";
  dark?: true;
  channel: InputChannel;
  [R]?: stats_BroadcastStats;
}

export interface stats_loadAsyncGraph {
  _: "stats.loadAsyncGraph";
  token: string;
  x?: bigint;
  [R]?: StatsGraph;
}

export interface stats_getMegagroupStats {
  _: "stats.getMegagroupStats";
  dark?: true;
  channel: InputChannel;
  [R]?: stats_MegagroupStats;
}

export interface stats_getMessagePublicForwards {
  _: "stats.getMessagePublicForwards";
  channel: InputChannel;
  msg_id: number;
  offset: string;
  limit: number;
  [R]?: stats_PublicForwards;
}

export interface stats_getMessageStats {
  _: "stats.getMessageStats";
  dark?: true;
  channel: InputChannel;
  msg_id: number;
  [R]?: stats_MessageStats;
}

export interface stats_getStoryStats {
  _: "stats.getStoryStats";
  dark?: true;
  peer: InputPeer;
  id: number;
  [R]?: stats_StoryStats;
}

export interface stats_getStoryPublicForwards {
  _: "stats.getStoryPublicForwards";
  peer: InputPeer;
  id: number;
  offset: string;
  limit: number;
  [R]?: stats_PublicForwards;
}

export interface stats_getBroadcastRevenueStats {
  _: "stats.getBroadcastRevenueStats";
  dark?: true;
  peer: InputPeer;
  [R]?: stats_BroadcastRevenueStats;
}

export interface stats_getBroadcastRevenueWithdrawalUrl {
  _: "stats.getBroadcastRevenueWithdrawalUrl";
  peer: InputPeer;
  password: InputCheckPasswordSRP;
  [R]?: stats_BroadcastRevenueWithdrawalUrl;
}

export interface stats_getBroadcastRevenueTransactions {
  _: "stats.getBroadcastRevenueTransactions";
  peer: InputPeer;
  offset: number;
  limit: number;
  [R]?: stats_BroadcastRevenueTransactions;
}

export interface chatlists_exportChatlistInvite {
  _: "chatlists.exportChatlistInvite";
  chatlist: InputChatlist;
  title: string;
  peers: Array<InputPeer>;
  [R]?: chatlists_ExportedChatlistInvite;
}

export interface chatlists_deleteExportedInvite {
  _: "chatlists.deleteExportedInvite";
  chatlist: InputChatlist;
  slug: string;
  [R]?: boolean;
}

export interface chatlists_editExportedInvite {
  _: "chatlists.editExportedInvite";
  chatlist: InputChatlist;
  slug: string;
  title?: string;
  peers?: Array<InputPeer>;
  [R]?: ExportedChatlistInvite;
}

export interface chatlists_getExportedInvites {
  _: "chatlists.getExportedInvites";
  chatlist: InputChatlist;
  [R]?: chatlists_ExportedInvites;
}

export interface chatlists_checkChatlistInvite {
  _: "chatlists.checkChatlistInvite";
  slug: string;
  [R]?: chatlists_ChatlistInvite;
}

export interface chatlists_joinChatlistInvite {
  _: "chatlists.joinChatlistInvite";
  slug: string;
  peers: Array<InputPeer>;
  [R]?: Updates;
}

export interface chatlists_getChatlistUpdates {
  _: "chatlists.getChatlistUpdates";
  chatlist: InputChatlist;
  [R]?: chatlists_ChatlistUpdates;
}

export interface chatlists_joinChatlistUpdates {
  _: "chatlists.joinChatlistUpdates";
  chatlist: InputChatlist;
  peers: Array<InputPeer>;
  [R]?: Updates;
}

export interface chatlists_hideChatlistUpdates {
  _: "chatlists.hideChatlistUpdates";
  chatlist: InputChatlist;
  [R]?: boolean;
}

export interface chatlists_getLeaveChatlistSuggestions {
  _: "chatlists.getLeaveChatlistSuggestions";
  chatlist: InputChatlist;
  [R]?: Array<Peer>;
}

export interface chatlists_leaveChatlist {
  _: "chatlists.leaveChatlist";
  chatlist: InputChatlist;
  peers: Array<InputPeer>;
  [R]?: Updates;
}

export interface stories_canSendStory {
  _: "stories.canSendStory";
  peer: InputPeer;
  [R]?: boolean;
}

export interface stories_sendStory {
  _: "stories.sendStory";
  pinned?: true;
  noforwards?: true;
  fwd_modified?: true;
  peer: InputPeer;
  media: InputMedia;
  media_areas?: Array<MediaArea>;
  caption?: string;
  entities?: Array<MessageEntity>;
  privacy_rules: Array<InputPrivacyRule>;
  random_id: bigint;
  period?: number;
  fwd_from_id?: InputPeer;
  fwd_from_story?: number;
  [R]?: Updates;
}

export interface stories_editStory {
  _: "stories.editStory";
  peer: InputPeer;
  id: number;
  media?: InputMedia;
  media_areas?: Array<MediaArea>;
  caption?: string;
  entities?: Array<MessageEntity>;
  privacy_rules?: Array<InputPrivacyRule>;
  [R]?: Updates;
}

export interface stories_deleteStories {
  _: "stories.deleteStories";
  peer: InputPeer;
  id: Array<number>;
  [R]?: Array<number>;
}

export interface stories_togglePinned {
  _: "stories.togglePinned";
  peer: InputPeer;
  id: Array<number>;
  pinned: boolean;
  [R]?: Array<number>;
}

export interface stories_getAllStories {
  _: "stories.getAllStories";
  next?: true;
  hidden?: true;
  state?: string;
  [R]?: stories_AllStories;
}

export interface stories_getPinnedStories {
  _: "stories.getPinnedStories";
  peer: InputPeer;
  offset_id: number;
  limit: number;
  [R]?: stories_Stories;
}

export interface stories_getStoriesArchive {
  _: "stories.getStoriesArchive";
  peer: InputPeer;
  offset_id: number;
  limit: number;
  [R]?: stories_Stories;
}

export interface stories_getStoriesByID {
  _: "stories.getStoriesByID";
  peer: InputPeer;
  id: Array<number>;
  [R]?: stories_Stories;
}

export interface stories_toggleAllStoriesHidden {
  _: "stories.toggleAllStoriesHidden";
  hidden: boolean;
  [R]?: boolean;
}

export interface stories_readStories {
  _: "stories.readStories";
  peer: InputPeer;
  max_id: number;
  [R]?: Array<number>;
}

export interface stories_incrementStoryViews {
  _: "stories.incrementStoryViews";
  peer: InputPeer;
  id: Array<number>;
  [R]?: boolean;
}

export interface stories_getStoryViewsList {
  _: "stories.getStoryViewsList";
  just_contacts?: true;
  reactions_first?: true;
  forwards_first?: true;
  peer: InputPeer;
  q?: string;
  id: number;
  offset: string;
  limit: number;
  [R]?: stories_StoryViewsList;
}

export interface stories_getStoriesViews {
  _: "stories.getStoriesViews";
  peer: InputPeer;
  id: Array<number>;
  [R]?: stories_StoryViews;
}

export interface stories_exportStoryLink {
  _: "stories.exportStoryLink";
  peer: InputPeer;
  id: number;
  [R]?: ExportedStoryLink;
}

export interface stories_report {
  _: "stories.report";
  peer: InputPeer;
  id: Array<number>;
  option: Uint8Array;
  message: string;
  [R]?: ReportResult;
}

export interface stories_activateStealthMode {
  _: "stories.activateStealthMode";
  past?: true;
  future?: true;
  [R]?: Updates;
}

export interface stories_sendReaction {
  _: "stories.sendReaction";
  add_to_recent?: true;
  peer: InputPeer;
  story_id: number;
  reaction: Reaction;
  [R]?: Updates;
}

export interface stories_getPeerStories {
  _: "stories.getPeerStories";
  peer: InputPeer;
  [R]?: stories_PeerStories;
}

export interface stories_getAllReadPeerStories {
  _: "stories.getAllReadPeerStories";
  [R]?: Updates;
}

export interface stories_getPeerMaxIDs {
  _: "stories.getPeerMaxIDs";
  id: Array<InputPeer>;
  [R]?: Array<number>;
}

export interface stories_getChatsToSend {
  _: "stories.getChatsToSend";
  [R]?: messages_Chats;
}

export interface stories_togglePeerStoriesHidden {
  _: "stories.togglePeerStoriesHidden";
  peer: InputPeer;
  hidden: boolean;
  [R]?: boolean;
}

export interface stories_getStoryReactionsList {
  _: "stories.getStoryReactionsList";
  forwards_first?: true;
  peer: InputPeer;
  id: number;
  reaction?: Reaction;
  offset?: string;
  limit: number;
  [R]?: stories_StoryReactionsList;
}

export interface stories_togglePinnedToTop {
  _: "stories.togglePinnedToTop";
  peer: InputPeer;
  id: Array<number>;
  [R]?: boolean;
}

export interface stories_searchPosts {
  _: "stories.searchPosts";
  hashtag?: string;
  area?: MediaArea;
  peer?: InputPeer;
  offset: string;
  limit: number;
  [R]?: stories_FoundStories;
}

export interface premium_getBoostsList {
  _: "premium.getBoostsList";
  gifts?: true;
  peer: InputPeer;
  offset: string;
  limit: number;
  [R]?: premium_BoostsList;
}

export interface premium_getMyBoosts {
  _: "premium.getMyBoosts";
  [R]?: premium_MyBoosts;
}

export interface premium_applyBoost {
  _: "premium.applyBoost";
  slots?: Array<number>;
  peer: InputPeer;
  [R]?: premium_MyBoosts;
}

export interface premium_getBoostsStatus {
  _: "premium.getBoostsStatus";
  peer: InputPeer;
  [R]?: premium_BoostsStatus;
}

export interface premium_getUserBoosts {
  _: "premium.getUserBoosts";
  peer: InputPeer;
  user_id: InputUser;
  [R]?: premium_BoostsList;
}

export interface smsjobs_isEligibleToJoin {
  _: "smsjobs.isEligibleToJoin";
  [R]?: smsjobs_EligibilityToJoin;
}

export interface smsjobs_join {
  _: "smsjobs.join";
  [R]?: boolean;
}

export interface smsjobs_leave {
  _: "smsjobs.leave";
  [R]?: boolean;
}

export interface smsjobs_updateSettings {
  _: "smsjobs.updateSettings";
  allow_international?: true;
  [R]?: boolean;
}

export interface smsjobs_getStatus {
  _: "smsjobs.getStatus";
  [R]?: smsjobs_Status;
}

export interface smsjobs_getSmsJob {
  _: "smsjobs.getSmsJob";
  job_id: string;
  [R]?: SmsJob;
}

export interface smsjobs_finishJob {
  _: "smsjobs.finishJob";
  job_id: string;
  error?: string;
  [R]?: boolean;
}

export interface fragment_getCollectibleInfo {
  _: "fragment.getCollectibleInfo";
  collectible: InputCollectible;
  [R]?: fragment_CollectibleInfo;
}

export interface Types {
  "resPQ": resPQ;
  "p_q_inner_data_dc": p_q_inner_data_dc;
  "p_q_inner_data_temp_dc": p_q_inner_data_temp_dc;
  "server_DH_params_ok": server_DH_params_ok;
  "server_DH_inner_data": server_DH_inner_data;
  "client_DH_inner_data": client_DH_inner_data;
  "dh_gen_ok": dh_gen_ok;
  "dh_gen_retry": dh_gen_retry;
  "dh_gen_fail": dh_gen_fail;
  "bind_auth_key_inner": bind_auth_key_inner;
  "rpc_error": rpc_error;
  "rpc_answer_unknown": rpc_answer_unknown;
  "rpc_answer_dropped_running": rpc_answer_dropped_running;
  "rpc_answer_dropped": rpc_answer_dropped;
  "future_salt": future_salt;
  "future_salts": future_salts;
  "pong": pong;
  "destroy_session_ok": destroy_session_ok;
  "destroy_session_none": destroy_session_none;
  "new_session_created": new_session_created;
  "gzip_packed": gzip_packed;
  "msgs_ack": msgs_ack;
  "bad_msg_notification": bad_msg_notification;
  "bad_server_salt": bad_server_salt;
  "msg_resend_req": msg_resend_req;
  "msgs_state_req": msgs_state_req;
  "msgs_state_info": msgs_state_info;
  "msgs_all_info": msgs_all_info;
  "msg_detailed_info": msg_detailed_info;
  "msg_new_detailed_info": msg_new_detailed_info;
  "destroy_auth_key_ok": destroy_auth_key_ok;
  "destroy_auth_key_none": destroy_auth_key_none;
  "destroy_auth_key_fail": destroy_auth_key_fail;
  "http_wait": http_wait;
  "true": true_;
  "error": error;
  "ipPort": ipPort;
  "ipPortSecret": ipPortSecret;
  "accessPointRule": accessPointRule;
  "help.configSimple": help_configSimple;
  "inputPeerPhotoFileLocationLegacy": inputPeerPhotoFileLocationLegacy;
  "inputStickerSetThumbLegacy": inputStickerSetThumbLegacy;
  "inputPeerEmpty": inputPeerEmpty;
  "inputPeerSelf": inputPeerSelf;
  "inputPeerChat": inputPeerChat;
  "inputPeerUser": inputPeerUser;
  "inputPeerChannel": inputPeerChannel;
  "inputPeerUserFromMessage": inputPeerUserFromMessage;
  "inputPeerChannelFromMessage": inputPeerChannelFromMessage;
  "inputUserEmpty": inputUserEmpty;
  "inputUserSelf": inputUserSelf;
  "inputUser": inputUser;
  "inputUserFromMessage": inputUserFromMessage;
  "inputPhoneContact": inputPhoneContact;
  "inputFile": inputFile;
  "inputFileBig": inputFileBig;
  "inputFileStoryDocument": inputFileStoryDocument;
  "inputMediaEmpty": inputMediaEmpty;
  "inputMediaUploadedPhoto": inputMediaUploadedPhoto;
  "inputMediaPhoto": inputMediaPhoto;
  "inputMediaGeoPoint": inputMediaGeoPoint;
  "inputMediaContact": inputMediaContact;
  "inputMediaUploadedDocument": inputMediaUploadedDocument;
  "inputMediaDocument": inputMediaDocument;
  "inputMediaVenue": inputMediaVenue;
  "inputMediaPhotoExternal": inputMediaPhotoExternal;
  "inputMediaDocumentExternal": inputMediaDocumentExternal;
  "inputMediaGame": inputMediaGame;
  "inputMediaInvoice": inputMediaInvoice;
  "inputMediaGeoLive": inputMediaGeoLive;
  "inputMediaPoll": inputMediaPoll;
  "inputMediaDice": inputMediaDice;
  "inputMediaStory": inputMediaStory;
  "inputMediaWebPage": inputMediaWebPage;
  "inputMediaPaidMedia": inputMediaPaidMedia;
  "inputChatPhotoEmpty": inputChatPhotoEmpty;
  "inputChatUploadedPhoto": inputChatUploadedPhoto;
  "inputChatPhoto": inputChatPhoto;
  "inputGeoPointEmpty": inputGeoPointEmpty;
  "inputGeoPoint": inputGeoPoint;
  "inputPhotoEmpty": inputPhotoEmpty;
  "inputPhoto": inputPhoto;
  "inputFileLocation": inputFileLocation;
  "inputEncryptedFileLocation": inputEncryptedFileLocation;
  "inputDocumentFileLocation": inputDocumentFileLocation;
  "inputSecureFileLocation": inputSecureFileLocation;
  "inputTakeoutFileLocation": inputTakeoutFileLocation;
  "inputPhotoFileLocation": inputPhotoFileLocation;
  "inputPhotoLegacyFileLocation": inputPhotoLegacyFileLocation;
  "inputPeerPhotoFileLocation": inputPeerPhotoFileLocation;
  "inputStickerSetThumb": inputStickerSetThumb;
  "inputGroupCallStream": inputGroupCallStream;
  "peerUser": peerUser;
  "peerChat": peerChat;
  "peerChannel": peerChannel;
  "storage.fileUnknown": storage_fileUnknown;
  "storage.filePartial": storage_filePartial;
  "storage.fileJpeg": storage_fileJpeg;
  "storage.fileGif": storage_fileGif;
  "storage.filePng": storage_filePng;
  "storage.filePdf": storage_filePdf;
  "storage.fileMp3": storage_fileMp3;
  "storage.fileMov": storage_fileMov;
  "storage.fileMp4": storage_fileMp4;
  "storage.fileWebp": storage_fileWebp;
  "userEmpty": userEmpty;
  "user": user;
  "userProfilePhotoEmpty": userProfilePhotoEmpty;
  "userProfilePhoto": userProfilePhoto;
  "userStatusEmpty": userStatusEmpty;
  "userStatusOnline": userStatusOnline;
  "userStatusOffline": userStatusOffline;
  "userStatusRecently": userStatusRecently;
  "userStatusLastWeek": userStatusLastWeek;
  "userStatusLastMonth": userStatusLastMonth;
  "chatEmpty": chatEmpty;
  "chat": chat;
  "chatForbidden": chatForbidden;
  "channel": channel;
  "channelForbidden": channelForbidden;
  "chatFull": chatFull;
  "channelFull": channelFull;
  "chatParticipant": chatParticipant;
  "chatParticipantCreator": chatParticipantCreator;
  "chatParticipantAdmin": chatParticipantAdmin;
  "chatParticipantsForbidden": chatParticipantsForbidden;
  "chatParticipants": chatParticipants;
  "chatPhotoEmpty": chatPhotoEmpty;
  "chatPhoto": chatPhoto;
  "messageEmpty": messageEmpty;
  "message": message;
  "messageService": messageService;
  "messageMediaEmpty": messageMediaEmpty;
  "messageMediaPhoto": messageMediaPhoto;
  "messageMediaGeo": messageMediaGeo;
  "messageMediaContact": messageMediaContact;
  "messageMediaUnsupported": messageMediaUnsupported;
  "messageMediaDocument": messageMediaDocument;
  "messageMediaWebPage": messageMediaWebPage;
  "messageMediaVenue": messageMediaVenue;
  "messageMediaGame": messageMediaGame;
  "messageMediaInvoice": messageMediaInvoice;
  "messageMediaGeoLive": messageMediaGeoLive;
  "messageMediaPoll": messageMediaPoll;
  "messageMediaDice": messageMediaDice;
  "messageMediaStory": messageMediaStory;
  "messageMediaGiveaway": messageMediaGiveaway;
  "messageMediaGiveawayResults": messageMediaGiveawayResults;
  "messageMediaPaidMedia": messageMediaPaidMedia;
  "messageActionEmpty": messageActionEmpty;
  "messageActionChatCreate": messageActionChatCreate;
  "messageActionChatEditTitle": messageActionChatEditTitle;
  "messageActionChatEditPhoto": messageActionChatEditPhoto;
  "messageActionChatDeletePhoto": messageActionChatDeletePhoto;
  "messageActionChatAddUser": messageActionChatAddUser;
  "messageActionChatDeleteUser": messageActionChatDeleteUser;
  "messageActionChatJoinedByLink": messageActionChatJoinedByLink;
  "messageActionChannelCreate": messageActionChannelCreate;
  "messageActionChatMigrateTo": messageActionChatMigrateTo;
  "messageActionChannelMigrateFrom": messageActionChannelMigrateFrom;
  "messageActionPinMessage": messageActionPinMessage;
  "messageActionHistoryClear": messageActionHistoryClear;
  "messageActionGameScore": messageActionGameScore;
  "messageActionPaymentSentMe": messageActionPaymentSentMe;
  "messageActionPaymentSent": messageActionPaymentSent;
  "messageActionPhoneCall": messageActionPhoneCall;
  "messageActionScreenshotTaken": messageActionScreenshotTaken;
  "messageActionCustomAction": messageActionCustomAction;
  "messageActionBotAllowed": messageActionBotAllowed;
  "messageActionSecureValuesSentMe": messageActionSecureValuesSentMe;
  "messageActionSecureValuesSent": messageActionSecureValuesSent;
  "messageActionContactSignUp": messageActionContactSignUp;
  "messageActionGeoProximityReached": messageActionGeoProximityReached;
  "messageActionGroupCall": messageActionGroupCall;
  "messageActionInviteToGroupCall": messageActionInviteToGroupCall;
  "messageActionSetMessagesTTL": messageActionSetMessagesTTL;
  "messageActionGroupCallScheduled": messageActionGroupCallScheduled;
  "messageActionSetChatTheme": messageActionSetChatTheme;
  "messageActionChatJoinedByRequest": messageActionChatJoinedByRequest;
  "messageActionWebViewDataSentMe": messageActionWebViewDataSentMe;
  "messageActionWebViewDataSent": messageActionWebViewDataSent;
  "messageActionGiftPremium": messageActionGiftPremium;
  "messageActionTopicCreate": messageActionTopicCreate;
  "messageActionTopicEdit": messageActionTopicEdit;
  "messageActionSuggestProfilePhoto": messageActionSuggestProfilePhoto;
  "messageActionRequestedPeer": messageActionRequestedPeer;
  "messageActionSetChatWallPaper": messageActionSetChatWallPaper;
  "messageActionGiftCode": messageActionGiftCode;
  "messageActionGiveawayLaunch": messageActionGiveawayLaunch;
  "messageActionGiveawayResults": messageActionGiveawayResults;
  "messageActionBoostApply": messageActionBoostApply;
  "messageActionRequestedPeerSentMe": messageActionRequestedPeerSentMe;
  "messageActionPaymentRefunded": messageActionPaymentRefunded;
  "messageActionGiftStars": messageActionGiftStars;
  "messageActionPrizeStars": messageActionPrizeStars;
  "messageActionStarGift": messageActionStarGift;
  "messageActionStarGiftUnique": messageActionStarGiftUnique;
  "dialog": dialog;
  "dialogFolder": dialogFolder;
  "photoEmpty": photoEmpty;
  "photo": photo;
  "photoSizeEmpty": photoSizeEmpty;
  "photoSize": photoSize;
  "photoCachedSize": photoCachedSize;
  "photoStrippedSize": photoStrippedSize;
  "photoSizeProgressive": photoSizeProgressive;
  "photoPathSize": photoPathSize;
  "geoPointEmpty": geoPointEmpty;
  "geoPoint": geoPoint;
  "auth.sentCode": auth_sentCode;
  "auth.sentCodeSuccess": auth_sentCodeSuccess;
  "auth.authorization": auth_authorization;
  "auth.authorizationSignUpRequired": auth_authorizationSignUpRequired;
  "auth.exportedAuthorization": auth_exportedAuthorization;
  "inputNotifyPeer": inputNotifyPeer;
  "inputNotifyUsers": inputNotifyUsers;
  "inputNotifyChats": inputNotifyChats;
  "inputNotifyBroadcasts": inputNotifyBroadcasts;
  "inputNotifyForumTopic": inputNotifyForumTopic;
  "inputPeerNotifySettings": inputPeerNotifySettings;
  "peerNotifySettings": peerNotifySettings;
  "peerSettings": peerSettings;
  "wallPaper": wallPaper;
  "wallPaperNoFile": wallPaperNoFile;
  "inputReportReasonSpam": inputReportReasonSpam;
  "inputReportReasonViolence": inputReportReasonViolence;
  "inputReportReasonPornography": inputReportReasonPornography;
  "inputReportReasonChildAbuse": inputReportReasonChildAbuse;
  "inputReportReasonOther": inputReportReasonOther;
  "inputReportReasonCopyright": inputReportReasonCopyright;
  "inputReportReasonGeoIrrelevant": inputReportReasonGeoIrrelevant;
  "inputReportReasonFake": inputReportReasonFake;
  "inputReportReasonIllegalDrugs": inputReportReasonIllegalDrugs;
  "inputReportReasonPersonalDetails": inputReportReasonPersonalDetails;
  "userFull": userFull;
  "contact": contact;
  "importedContact": importedContact;
  "contactStatus": contactStatus;
  "contacts.contactsNotModified": contacts_contactsNotModified;
  "contacts.contacts": contacts_contacts;
  "contacts.importedContacts": contacts_importedContacts;
  "contacts.blocked": contacts_blocked;
  "contacts.blockedSlice": contacts_blockedSlice;
  "messages.dialogs": messages_dialogs;
  "messages.dialogsSlice": messages_dialogsSlice;
  "messages.dialogsNotModified": messages_dialogsNotModified;
  "messages.messages": messages_messages;
  "messages.messagesSlice": messages_messagesSlice;
  "messages.channelMessages": messages_channelMessages;
  "messages.messagesNotModified": messages_messagesNotModified;
  "messages.chats": messages_chats;
  "messages.chatsSlice": messages_chatsSlice;
  "messages.chatFull": messages_chatFull;
  "messages.affectedHistory": messages_affectedHistory;
  "inputMessagesFilterEmpty": inputMessagesFilterEmpty;
  "inputMessagesFilterPhotos": inputMessagesFilterPhotos;
  "inputMessagesFilterVideo": inputMessagesFilterVideo;
  "inputMessagesFilterPhotoVideo": inputMessagesFilterPhotoVideo;
  "inputMessagesFilterDocument": inputMessagesFilterDocument;
  "inputMessagesFilterUrl": inputMessagesFilterUrl;
  "inputMessagesFilterGif": inputMessagesFilterGif;
  "inputMessagesFilterVoice": inputMessagesFilterVoice;
  "inputMessagesFilterMusic": inputMessagesFilterMusic;
  "inputMessagesFilterChatPhotos": inputMessagesFilterChatPhotos;
  "inputMessagesFilterPhoneCalls": inputMessagesFilterPhoneCalls;
  "inputMessagesFilterRoundVoice": inputMessagesFilterRoundVoice;
  "inputMessagesFilterRoundVideo": inputMessagesFilterRoundVideo;
  "inputMessagesFilterMyMentions": inputMessagesFilterMyMentions;
  "inputMessagesFilterGeo": inputMessagesFilterGeo;
  "inputMessagesFilterContacts": inputMessagesFilterContacts;
  "inputMessagesFilterPinned": inputMessagesFilterPinned;
  "updateNewMessage": updateNewMessage;
  "updateMessageID": updateMessageID;
  "updateDeleteMessages": updateDeleteMessages;
  "updateUserTyping": updateUserTyping;
  "updateChatUserTyping": updateChatUserTyping;
  "updateChatParticipants": updateChatParticipants;
  "updateUserStatus": updateUserStatus;
  "updateUserName": updateUserName;
  "updateNewAuthorization": updateNewAuthorization;
  "updateNewEncryptedMessage": updateNewEncryptedMessage;
  "updateEncryptedChatTyping": updateEncryptedChatTyping;
  "updateEncryption": updateEncryption;
  "updateEncryptedMessagesRead": updateEncryptedMessagesRead;
  "updateChatParticipantAdd": updateChatParticipantAdd;
  "updateChatParticipantDelete": updateChatParticipantDelete;
  "updateDcOptions": updateDcOptions;
  "updateNotifySettings": updateNotifySettings;
  "updateServiceNotification": updateServiceNotification;
  "updatePrivacy": updatePrivacy;
  "updateUserPhone": updateUserPhone;
  "updateReadHistoryInbox": updateReadHistoryInbox;
  "updateReadHistoryOutbox": updateReadHistoryOutbox;
  "updateWebPage": updateWebPage;
  "updateReadMessagesContents": updateReadMessagesContents;
  "updateChannelTooLong": updateChannelTooLong;
  "updateChannel": updateChannel;
  "updateNewChannelMessage": updateNewChannelMessage;
  "updateReadChannelInbox": updateReadChannelInbox;
  "updateDeleteChannelMessages": updateDeleteChannelMessages;
  "updateChannelMessageViews": updateChannelMessageViews;
  "updateChatParticipantAdmin": updateChatParticipantAdmin;
  "updateNewStickerSet": updateNewStickerSet;
  "updateStickerSetsOrder": updateStickerSetsOrder;
  "updateStickerSets": updateStickerSets;
  "updateSavedGifs": updateSavedGifs;
  "updateBotInlineQuery": updateBotInlineQuery;
  "updateBotInlineSend": updateBotInlineSend;
  "updateEditChannelMessage": updateEditChannelMessage;
  "updateBotCallbackQuery": updateBotCallbackQuery;
  "updateEditMessage": updateEditMessage;
  "updateInlineBotCallbackQuery": updateInlineBotCallbackQuery;
  "updateReadChannelOutbox": updateReadChannelOutbox;
  "updateDraftMessage": updateDraftMessage;
  "updateReadFeaturedStickers": updateReadFeaturedStickers;
  "updateRecentStickers": updateRecentStickers;
  "updateConfig": updateConfig;
  "updatePtsChanged": updatePtsChanged;
  "updateChannelWebPage": updateChannelWebPage;
  "updateDialogPinned": updateDialogPinned;
  "updatePinnedDialogs": updatePinnedDialogs;
  "updateBotWebhookJSON": updateBotWebhookJSON;
  "updateBotWebhookJSONQuery": updateBotWebhookJSONQuery;
  "updateBotShippingQuery": updateBotShippingQuery;
  "updateBotPrecheckoutQuery": updateBotPrecheckoutQuery;
  "updatePhoneCall": updatePhoneCall;
  "updateLangPackTooLong": updateLangPackTooLong;
  "updateLangPack": updateLangPack;
  "updateFavedStickers": updateFavedStickers;
  "updateChannelReadMessagesContents": updateChannelReadMessagesContents;
  "updateContactsReset": updateContactsReset;
  "updateChannelAvailableMessages": updateChannelAvailableMessages;
  "updateDialogUnreadMark": updateDialogUnreadMark;
  "updateMessagePoll": updateMessagePoll;
  "updateChatDefaultBannedRights": updateChatDefaultBannedRights;
  "updateFolderPeers": updateFolderPeers;
  "updatePeerSettings": updatePeerSettings;
  "updatePeerLocated": updatePeerLocated;
  "updateNewScheduledMessage": updateNewScheduledMessage;
  "updateDeleteScheduledMessages": updateDeleteScheduledMessages;
  "updateTheme": updateTheme;
  "updateGeoLiveViewed": updateGeoLiveViewed;
  "updateLoginToken": updateLoginToken;
  "updateMessagePollVote": updateMessagePollVote;
  "updateDialogFilter": updateDialogFilter;
  "updateDialogFilterOrder": updateDialogFilterOrder;
  "updateDialogFilters": updateDialogFilters;
  "updatePhoneCallSignalingData": updatePhoneCallSignalingData;
  "updateChannelMessageForwards": updateChannelMessageForwards;
  "updateReadChannelDiscussionInbox": updateReadChannelDiscussionInbox;
  "updateReadChannelDiscussionOutbox": updateReadChannelDiscussionOutbox;
  "updatePeerBlocked": updatePeerBlocked;
  "updateChannelUserTyping": updateChannelUserTyping;
  "updatePinnedMessages": updatePinnedMessages;
  "updatePinnedChannelMessages": updatePinnedChannelMessages;
  "updateChat": updateChat;
  "updateGroupCallParticipants": updateGroupCallParticipants;
  "updateGroupCall": updateGroupCall;
  "updatePeerHistoryTTL": updatePeerHistoryTTL;
  "updateChatParticipant": updateChatParticipant;
  "updateChannelParticipant": updateChannelParticipant;
  "updateBotStopped": updateBotStopped;
  "updateGroupCallConnection": updateGroupCallConnection;
  "updateBotCommands": updateBotCommands;
  "updatePendingJoinRequests": updatePendingJoinRequests;
  "updateBotChatInviteRequester": updateBotChatInviteRequester;
  "updateMessageReactions": updateMessageReactions;
  "updateAttachMenuBots": updateAttachMenuBots;
  "updateWebViewResultSent": updateWebViewResultSent;
  "updateBotMenuButton": updateBotMenuButton;
  "updateSavedRingtones": updateSavedRingtones;
  "updateTranscribedAudio": updateTranscribedAudio;
  "updateReadFeaturedEmojiStickers": updateReadFeaturedEmojiStickers;
  "updateUserEmojiStatus": updateUserEmojiStatus;
  "updateRecentEmojiStatuses": updateRecentEmojiStatuses;
  "updateRecentReactions": updateRecentReactions;
  "updateMoveStickerSetToTop": updateMoveStickerSetToTop;
  "updateMessageExtendedMedia": updateMessageExtendedMedia;
  "updateChannelPinnedTopic": updateChannelPinnedTopic;
  "updateChannelPinnedTopics": updateChannelPinnedTopics;
  "updateUser": updateUser;
  "updateAutoSaveSettings": updateAutoSaveSettings;
  "updateStory": updateStory;
  "updateReadStories": updateReadStories;
  "updateStoryID": updateStoryID;
  "updateStoriesStealthMode": updateStoriesStealthMode;
  "updateSentStoryReaction": updateSentStoryReaction;
  "updateBotChatBoost": updateBotChatBoost;
  "updateChannelViewForumAsMessages": updateChannelViewForumAsMessages;
  "updatePeerWallpaper": updatePeerWallpaper;
  "updateBotMessageReaction": updateBotMessageReaction;
  "updateBotMessageReactions": updateBotMessageReactions;
  "updateSavedDialogPinned": updateSavedDialogPinned;
  "updatePinnedSavedDialogs": updatePinnedSavedDialogs;
  "updateSavedReactionTags": updateSavedReactionTags;
  "updateSmsJob": updateSmsJob;
  "updateQuickReplies": updateQuickReplies;
  "updateNewQuickReply": updateNewQuickReply;
  "updateDeleteQuickReply": updateDeleteQuickReply;
  "updateQuickReplyMessage": updateQuickReplyMessage;
  "updateDeleteQuickReplyMessages": updateDeleteQuickReplyMessages;
  "updateBotBusinessConnect": updateBotBusinessConnect;
  "updateBotNewBusinessMessage": updateBotNewBusinessMessage;
  "updateBotEditBusinessMessage": updateBotEditBusinessMessage;
  "updateBotDeleteBusinessMessage": updateBotDeleteBusinessMessage;
  "updateNewStoryReaction": updateNewStoryReaction;
  "updateBroadcastRevenueTransactions": updateBroadcastRevenueTransactions;
  "updateStarsBalance": updateStarsBalance;
  "updateBusinessBotCallbackQuery": updateBusinessBotCallbackQuery;
  "updateStarsRevenueStatus": updateStarsRevenueStatus;
  "updateBotPurchasedPaidMedia": updateBotPurchasedPaidMedia;
  "updatePaidReactionPrivacy": updatePaidReactionPrivacy;
  "updates.state": updates_state;
  "updates.differenceEmpty": updates_differenceEmpty;
  "updates.difference": updates_difference;
  "updates.differenceSlice": updates_differenceSlice;
  "updates.differenceTooLong": updates_differenceTooLong;
  "updatesTooLong": updatesTooLong;
  "updateShortMessage": updateShortMessage;
  "updateShortChatMessage": updateShortChatMessage;
  "updateShort": updateShort;
  "updatesCombined": updatesCombined;
  "updates": updates;
  "updateShortSentMessage": updateShortSentMessage;
  "photos.photos": photos_photos;
  "photos.photosSlice": photos_photosSlice;
  "photos.photo": photos_photo;
  "upload.file": upload_file;
  "upload.fileCdnRedirect": upload_fileCdnRedirect;
  "dcOption": dcOption;
  "config": config;
  "nearestDc": nearestDc;
  "help.appUpdate": help_appUpdate;
  "help.noAppUpdate": help_noAppUpdate;
  "help.inviteText": help_inviteText;
  "encryptedChatEmpty": encryptedChatEmpty;
  "encryptedChatWaiting": encryptedChatWaiting;
  "encryptedChatRequested": encryptedChatRequested;
  "encryptedChat": encryptedChat;
  "encryptedChatDiscarded": encryptedChatDiscarded;
  "inputEncryptedChat": inputEncryptedChat;
  "encryptedFileEmpty": encryptedFileEmpty;
  "encryptedFile": encryptedFile;
  "inputEncryptedFileEmpty": inputEncryptedFileEmpty;
  "inputEncryptedFileUploaded": inputEncryptedFileUploaded;
  "inputEncryptedFile": inputEncryptedFile;
  "inputEncryptedFileBigUploaded": inputEncryptedFileBigUploaded;
  "encryptedMessage": encryptedMessage;
  "encryptedMessageService": encryptedMessageService;
  "messages.dhConfigNotModified": messages_dhConfigNotModified;
  "messages.dhConfig": messages_dhConfig;
  "messages.sentEncryptedMessage": messages_sentEncryptedMessage;
  "messages.sentEncryptedFile": messages_sentEncryptedFile;
  "inputDocumentEmpty": inputDocumentEmpty;
  "inputDocument": inputDocument;
  "documentEmpty": documentEmpty;
  "document": document;
  "help.support": help_support;
  "notifyPeer": notifyPeer;
  "notifyUsers": notifyUsers;
  "notifyChats": notifyChats;
  "notifyBroadcasts": notifyBroadcasts;
  "notifyForumTopic": notifyForumTopic;
  "sendMessageTypingAction": sendMessageTypingAction;
  "sendMessageCancelAction": sendMessageCancelAction;
  "sendMessageRecordVideoAction": sendMessageRecordVideoAction;
  "sendMessageUploadVideoAction": sendMessageUploadVideoAction;
  "sendMessageRecordAudioAction": sendMessageRecordAudioAction;
  "sendMessageUploadAudioAction": sendMessageUploadAudioAction;
  "sendMessageUploadPhotoAction": sendMessageUploadPhotoAction;
  "sendMessageUploadDocumentAction": sendMessageUploadDocumentAction;
  "sendMessageGeoLocationAction": sendMessageGeoLocationAction;
  "sendMessageChooseContactAction": sendMessageChooseContactAction;
  "sendMessageGamePlayAction": sendMessageGamePlayAction;
  "sendMessageRecordRoundAction": sendMessageRecordRoundAction;
  "sendMessageUploadRoundAction": sendMessageUploadRoundAction;
  "speakingInGroupCallAction": speakingInGroupCallAction;
  "sendMessageHistoryImportAction": sendMessageHistoryImportAction;
  "sendMessageChooseStickerAction": sendMessageChooseStickerAction;
  "sendMessageEmojiInteraction": sendMessageEmojiInteraction;
  "sendMessageEmojiInteractionSeen": sendMessageEmojiInteractionSeen;
  "contacts.found": contacts_found;
  "inputPrivacyKeyStatusTimestamp": inputPrivacyKeyStatusTimestamp;
  "inputPrivacyKeyChatInvite": inputPrivacyKeyChatInvite;
  "inputPrivacyKeyPhoneCall": inputPrivacyKeyPhoneCall;
  "inputPrivacyKeyPhoneP2P": inputPrivacyKeyPhoneP2P;
  "inputPrivacyKeyForwards": inputPrivacyKeyForwards;
  "inputPrivacyKeyProfilePhoto": inputPrivacyKeyProfilePhoto;
  "inputPrivacyKeyPhoneNumber": inputPrivacyKeyPhoneNumber;
  "inputPrivacyKeyAddedByPhone": inputPrivacyKeyAddedByPhone;
  "inputPrivacyKeyVoiceMessages": inputPrivacyKeyVoiceMessages;
  "inputPrivacyKeyAbout": inputPrivacyKeyAbout;
  "inputPrivacyKeyBirthday": inputPrivacyKeyBirthday;
  "inputPrivacyKeyStarGiftsAutoSave": inputPrivacyKeyStarGiftsAutoSave;
  "inputPrivacyKeyNoPaidMessages": inputPrivacyKeyNoPaidMessages;
  "privacyKeyStatusTimestamp": privacyKeyStatusTimestamp;
  "privacyKeyChatInvite": privacyKeyChatInvite;
  "privacyKeyPhoneCall": privacyKeyPhoneCall;
  "privacyKeyPhoneP2P": privacyKeyPhoneP2P;
  "privacyKeyForwards": privacyKeyForwards;
  "privacyKeyProfilePhoto": privacyKeyProfilePhoto;
  "privacyKeyPhoneNumber": privacyKeyPhoneNumber;
  "privacyKeyAddedByPhone": privacyKeyAddedByPhone;
  "privacyKeyVoiceMessages": privacyKeyVoiceMessages;
  "privacyKeyAbout": privacyKeyAbout;
  "privacyKeyBirthday": privacyKeyBirthday;
  "privacyKeyStarGiftsAutoSave": privacyKeyStarGiftsAutoSave;
  "privacyKeyNoPaidMessages": privacyKeyNoPaidMessages;
  "inputPrivacyValueAllowContacts": inputPrivacyValueAllowContacts;
  "inputPrivacyValueAllowAll": inputPrivacyValueAllowAll;
  "inputPrivacyValueAllowUsers": inputPrivacyValueAllowUsers;
  "inputPrivacyValueDisallowContacts": inputPrivacyValueDisallowContacts;
  "inputPrivacyValueDisallowAll": inputPrivacyValueDisallowAll;
  "inputPrivacyValueDisallowUsers": inputPrivacyValueDisallowUsers;
  "inputPrivacyValueAllowChatParticipants": inputPrivacyValueAllowChatParticipants;
  "inputPrivacyValueDisallowChatParticipants": inputPrivacyValueDisallowChatParticipants;
  "inputPrivacyValueAllowCloseFriends": inputPrivacyValueAllowCloseFriends;
  "inputPrivacyValueAllowPremium": inputPrivacyValueAllowPremium;
  "inputPrivacyValueAllowBots": inputPrivacyValueAllowBots;
  "inputPrivacyValueDisallowBots": inputPrivacyValueDisallowBots;
  "privacyValueAllowContacts": privacyValueAllowContacts;
  "privacyValueAllowAll": privacyValueAllowAll;
  "privacyValueAllowUsers": privacyValueAllowUsers;
  "privacyValueDisallowContacts": privacyValueDisallowContacts;
  "privacyValueDisallowAll": privacyValueDisallowAll;
  "privacyValueDisallowUsers": privacyValueDisallowUsers;
  "privacyValueAllowChatParticipants": privacyValueAllowChatParticipants;
  "privacyValueDisallowChatParticipants": privacyValueDisallowChatParticipants;
  "privacyValueAllowCloseFriends": privacyValueAllowCloseFriends;
  "privacyValueAllowPremium": privacyValueAllowPremium;
  "privacyValueAllowBots": privacyValueAllowBots;
  "privacyValueDisallowBots": privacyValueDisallowBots;
  "account.privacyRules": account_privacyRules;
  "accountDaysTTL": accountDaysTTL;
  "documentAttributeImageSize": documentAttributeImageSize;
  "documentAttributeAnimated": documentAttributeAnimated;
  "documentAttributeSticker": documentAttributeSticker;
  "documentAttributeVideo": documentAttributeVideo;
  "documentAttributeAudio": documentAttributeAudio;
  "documentAttributeFilename": documentAttributeFilename;
  "documentAttributeHasStickers": documentAttributeHasStickers;
  "documentAttributeCustomEmoji": documentAttributeCustomEmoji;
  "messages.stickersNotModified": messages_stickersNotModified;
  "messages.stickers": messages_stickers;
  "stickerPack": stickerPack;
  "messages.allStickersNotModified": messages_allStickersNotModified;
  "messages.allStickers": messages_allStickers;
  "messages.affectedMessages": messages_affectedMessages;
  "webPageEmpty": webPageEmpty;
  "webPagePending": webPagePending;
  "webPage": webPage;
  "webPageNotModified": webPageNotModified;
  "authorization": authorization;
  "account.authorizations": account_authorizations;
  "account.password": account_password;
  "account.passwordSettings": account_passwordSettings;
  "account.passwordInputSettings": account_passwordInputSettings;
  "auth.passwordRecovery": auth_passwordRecovery;
  "receivedNotifyMessage": receivedNotifyMessage;
  "chatInviteExported": chatInviteExported;
  "chatInvitePublicJoinRequests": chatInvitePublicJoinRequests;
  "chatInviteAlready": chatInviteAlready;
  "chatInvite": chatInvite;
  "chatInvitePeek": chatInvitePeek;
  "inputStickerSetEmpty": inputStickerSetEmpty;
  "inputStickerSetID": inputStickerSetID;
  "inputStickerSetShortName": inputStickerSetShortName;
  "inputStickerSetAnimatedEmoji": inputStickerSetAnimatedEmoji;
  "inputStickerSetDice": inputStickerSetDice;
  "inputStickerSetAnimatedEmojiAnimations": inputStickerSetAnimatedEmojiAnimations;
  "inputStickerSetPremiumGifts": inputStickerSetPremiumGifts;
  "inputStickerSetEmojiGenericAnimations": inputStickerSetEmojiGenericAnimations;
  "inputStickerSetEmojiDefaultStatuses": inputStickerSetEmojiDefaultStatuses;
  "inputStickerSetEmojiDefaultTopicIcons": inputStickerSetEmojiDefaultTopicIcons;
  "inputStickerSetEmojiChannelDefaultStatuses": inputStickerSetEmojiChannelDefaultStatuses;
  "stickerSet": stickerSet;
  "messages.stickerSet": messages_stickerSet;
  "messages.stickerSetNotModified": messages_stickerSetNotModified;
  "botCommand": botCommand;
  "botInfo": botInfo;
  "keyboardButton": keyboardButton;
  "keyboardButtonUrl": keyboardButtonUrl;
  "keyboardButtonCallback": keyboardButtonCallback;
  "keyboardButtonRequestPhone": keyboardButtonRequestPhone;
  "keyboardButtonRequestGeoLocation": keyboardButtonRequestGeoLocation;
  "keyboardButtonSwitchInline": keyboardButtonSwitchInline;
  "keyboardButtonGame": keyboardButtonGame;
  "keyboardButtonBuy": keyboardButtonBuy;
  "keyboardButtonUrlAuth": keyboardButtonUrlAuth;
  "inputKeyboardButtonUrlAuth": inputKeyboardButtonUrlAuth;
  "keyboardButtonRequestPoll": keyboardButtonRequestPoll;
  "inputKeyboardButtonUserProfile": inputKeyboardButtonUserProfile;
  "keyboardButtonUserProfile": keyboardButtonUserProfile;
  "keyboardButtonWebView": keyboardButtonWebView;
  "keyboardButtonSimpleWebView": keyboardButtonSimpleWebView;
  "keyboardButtonRequestPeer": keyboardButtonRequestPeer;
  "inputKeyboardButtonRequestPeer": inputKeyboardButtonRequestPeer;
  "keyboardButtonCopy": keyboardButtonCopy;
  "keyboardButtonRow": keyboardButtonRow;
  "replyKeyboardHide": replyKeyboardHide;
  "replyKeyboardForceReply": replyKeyboardForceReply;
  "replyKeyboardMarkup": replyKeyboardMarkup;
  "replyInlineMarkup": replyInlineMarkup;
  "messageEntityUnknown": messageEntityUnknown;
  "messageEntityMention": messageEntityMention;
  "messageEntityHashtag": messageEntityHashtag;
  "messageEntityBotCommand": messageEntityBotCommand;
  "messageEntityUrl": messageEntityUrl;
  "messageEntityEmail": messageEntityEmail;
  "messageEntityBold": messageEntityBold;
  "messageEntityItalic": messageEntityItalic;
  "messageEntityCode": messageEntityCode;
  "messageEntityPre": messageEntityPre;
  "messageEntityTextUrl": messageEntityTextUrl;
  "messageEntityMentionName": messageEntityMentionName;
  "inputMessageEntityMentionName": inputMessageEntityMentionName;
  "messageEntityPhone": messageEntityPhone;
  "messageEntityCashtag": messageEntityCashtag;
  "messageEntityUnderline": messageEntityUnderline;
  "messageEntityStrike": messageEntityStrike;
  "messageEntityBankCard": messageEntityBankCard;
  "messageEntitySpoiler": messageEntitySpoiler;
  "messageEntityCustomEmoji": messageEntityCustomEmoji;
  "messageEntityBlockquote": messageEntityBlockquote;
  "inputChannelEmpty": inputChannelEmpty;
  "inputChannel": inputChannel;
  "inputChannelFromMessage": inputChannelFromMessage;
  "contacts.resolvedPeer": contacts_resolvedPeer;
  "messageRange": messageRange;
  "updates.channelDifferenceEmpty": updates_channelDifferenceEmpty;
  "updates.channelDifferenceTooLong": updates_channelDifferenceTooLong;
  "updates.channelDifference": updates_channelDifference;
  "channelMessagesFilterEmpty": channelMessagesFilterEmpty;
  "channelMessagesFilter": channelMessagesFilter;
  "channelParticipant": channelParticipant;
  "channelParticipantSelf": channelParticipantSelf;
  "channelParticipantCreator": channelParticipantCreator;
  "channelParticipantAdmin": channelParticipantAdmin;
  "channelParticipantBanned": channelParticipantBanned;
  "channelParticipantLeft": channelParticipantLeft;
  "channelParticipantsRecent": channelParticipantsRecent;
  "channelParticipantsAdmins": channelParticipantsAdmins;
  "channelParticipantsKicked": channelParticipantsKicked;
  "channelParticipantsBots": channelParticipantsBots;
  "channelParticipantsBanned": channelParticipantsBanned;
  "channelParticipantsSearch": channelParticipantsSearch;
  "channelParticipantsContacts": channelParticipantsContacts;
  "channelParticipantsMentions": channelParticipantsMentions;
  "channels.channelParticipants": channels_channelParticipants;
  "channels.channelParticipantsNotModified": channels_channelParticipantsNotModified;
  "channels.channelParticipant": channels_channelParticipant;
  "help.termsOfService": help_termsOfService;
  "messages.savedGifsNotModified": messages_savedGifsNotModified;
  "messages.savedGifs": messages_savedGifs;
  "inputBotInlineMessageMediaAuto": inputBotInlineMessageMediaAuto;
  "inputBotInlineMessageText": inputBotInlineMessageText;
  "inputBotInlineMessageMediaGeo": inputBotInlineMessageMediaGeo;
  "inputBotInlineMessageMediaVenue": inputBotInlineMessageMediaVenue;
  "inputBotInlineMessageMediaContact": inputBotInlineMessageMediaContact;
  "inputBotInlineMessageGame": inputBotInlineMessageGame;
  "inputBotInlineMessageMediaInvoice": inputBotInlineMessageMediaInvoice;
  "inputBotInlineMessageMediaWebPage": inputBotInlineMessageMediaWebPage;
  "inputBotInlineResult": inputBotInlineResult;
  "inputBotInlineResultPhoto": inputBotInlineResultPhoto;
  "inputBotInlineResultDocument": inputBotInlineResultDocument;
  "inputBotInlineResultGame": inputBotInlineResultGame;
  "botInlineMessageMediaAuto": botInlineMessageMediaAuto;
  "botInlineMessageText": botInlineMessageText;
  "botInlineMessageMediaGeo": botInlineMessageMediaGeo;
  "botInlineMessageMediaVenue": botInlineMessageMediaVenue;
  "botInlineMessageMediaContact": botInlineMessageMediaContact;
  "botInlineMessageMediaInvoice": botInlineMessageMediaInvoice;
  "botInlineMessageMediaWebPage": botInlineMessageMediaWebPage;
  "botInlineResult": botInlineResult;
  "botInlineMediaResult": botInlineMediaResult;
  "messages.botResults": messages_botResults;
  "exportedMessageLink": exportedMessageLink;
  "messageFwdHeader": messageFwdHeader;
  "auth.codeTypeSms": auth_codeTypeSms;
  "auth.codeTypeCall": auth_codeTypeCall;
  "auth.codeTypeFlashCall": auth_codeTypeFlashCall;
  "auth.codeTypeMissedCall": auth_codeTypeMissedCall;
  "auth.codeTypeFragmentSms": auth_codeTypeFragmentSms;
  "auth.sentCodeTypeApp": auth_sentCodeTypeApp;
  "auth.sentCodeTypeSms": auth_sentCodeTypeSms;
  "auth.sentCodeTypeCall": auth_sentCodeTypeCall;
  "auth.sentCodeTypeFlashCall": auth_sentCodeTypeFlashCall;
  "auth.sentCodeTypeMissedCall": auth_sentCodeTypeMissedCall;
  "auth.sentCodeTypeEmailCode": auth_sentCodeTypeEmailCode;
  "auth.sentCodeTypeSetUpEmailRequired": auth_sentCodeTypeSetUpEmailRequired;
  "auth.sentCodeTypeFragmentSms": auth_sentCodeTypeFragmentSms;
  "auth.sentCodeTypeFirebaseSms": auth_sentCodeTypeFirebaseSms;
  "auth.sentCodeTypeSmsWord": auth_sentCodeTypeSmsWord;
  "auth.sentCodeTypeSmsPhrase": auth_sentCodeTypeSmsPhrase;
  "messages.botCallbackAnswer": messages_botCallbackAnswer;
  "messages.messageEditData": messages_messageEditData;
  "inputBotInlineMessageID": inputBotInlineMessageID;
  "inputBotInlineMessageID64": inputBotInlineMessageID64;
  "inlineBotSwitchPM": inlineBotSwitchPM;
  "messages.peerDialogs": messages_peerDialogs;
  "topPeer": topPeer;
  "topPeerCategoryBotsPM": topPeerCategoryBotsPM;
  "topPeerCategoryBotsInline": topPeerCategoryBotsInline;
  "topPeerCategoryCorrespondents": topPeerCategoryCorrespondents;
  "topPeerCategoryGroups": topPeerCategoryGroups;
  "topPeerCategoryChannels": topPeerCategoryChannels;
  "topPeerCategoryPhoneCalls": topPeerCategoryPhoneCalls;
  "topPeerCategoryForwardUsers": topPeerCategoryForwardUsers;
  "topPeerCategoryForwardChats": topPeerCategoryForwardChats;
  "topPeerCategoryBotsApp": topPeerCategoryBotsApp;
  "topPeerCategoryPeers": topPeerCategoryPeers;
  "contacts.topPeersNotModified": contacts_topPeersNotModified;
  "contacts.topPeers": contacts_topPeers;
  "contacts.topPeersDisabled": contacts_topPeersDisabled;
  "draftMessageEmpty": draftMessageEmpty;
  "draftMessage": draftMessage;
  "messages.featuredStickersNotModified": messages_featuredStickersNotModified;
  "messages.featuredStickers": messages_featuredStickers;
  "messages.recentStickersNotModified": messages_recentStickersNotModified;
  "messages.recentStickers": messages_recentStickers;
  "messages.archivedStickers": messages_archivedStickers;
  "messages.stickerSetInstallResultSuccess": messages_stickerSetInstallResultSuccess;
  "messages.stickerSetInstallResultArchive": messages_stickerSetInstallResultArchive;
  "stickerSetCovered": stickerSetCovered;
  "stickerSetMultiCovered": stickerSetMultiCovered;
  "stickerSetFullCovered": stickerSetFullCovered;
  "stickerSetNoCovered": stickerSetNoCovered;
  "maskCoords": maskCoords;
  "inputStickeredMediaPhoto": inputStickeredMediaPhoto;
  "inputStickeredMediaDocument": inputStickeredMediaDocument;
  "game": game;
  "inputGameID": inputGameID;
  "inputGameShortName": inputGameShortName;
  "highScore": highScore;
  "messages.highScores": messages_highScores;
  "textEmpty": textEmpty;
  "textPlain": textPlain;
  "textBold": textBold;
  "textItalic": textItalic;
  "textUnderline": textUnderline;
  "textStrike": textStrike;
  "textFixed": textFixed;
  "textUrl": textUrl;
  "textEmail": textEmail;
  "textConcat": textConcat;
  "textSubscript": textSubscript;
  "textSuperscript": textSuperscript;
  "textMarked": textMarked;
  "textPhone": textPhone;
  "textImage": textImage;
  "textAnchor": textAnchor;
  "pageBlockUnsupported": pageBlockUnsupported;
  "pageBlockTitle": pageBlockTitle;
  "pageBlockSubtitle": pageBlockSubtitle;
  "pageBlockAuthorDate": pageBlockAuthorDate;
  "pageBlockHeader": pageBlockHeader;
  "pageBlockSubheader": pageBlockSubheader;
  "pageBlockParagraph": pageBlockParagraph;
  "pageBlockPreformatted": pageBlockPreformatted;
  "pageBlockFooter": pageBlockFooter;
  "pageBlockDivider": pageBlockDivider;
  "pageBlockAnchor": pageBlockAnchor;
  "pageBlockList": pageBlockList;
  "pageBlockBlockquote": pageBlockBlockquote;
  "pageBlockPullquote": pageBlockPullquote;
  "pageBlockPhoto": pageBlockPhoto;
  "pageBlockVideo": pageBlockVideo;
  "pageBlockCover": pageBlockCover;
  "pageBlockEmbed": pageBlockEmbed;
  "pageBlockEmbedPost": pageBlockEmbedPost;
  "pageBlockCollage": pageBlockCollage;
  "pageBlockSlideshow": pageBlockSlideshow;
  "pageBlockChannel": pageBlockChannel;
  "pageBlockAudio": pageBlockAudio;
  "pageBlockKicker": pageBlockKicker;
  "pageBlockTable": pageBlockTable;
  "pageBlockOrderedList": pageBlockOrderedList;
  "pageBlockDetails": pageBlockDetails;
  "pageBlockRelatedArticles": pageBlockRelatedArticles;
  "pageBlockMap": pageBlockMap;
  "phoneCallDiscardReasonMissed": phoneCallDiscardReasonMissed;
  "phoneCallDiscardReasonDisconnect": phoneCallDiscardReasonDisconnect;
  "phoneCallDiscardReasonHangup": phoneCallDiscardReasonHangup;
  "phoneCallDiscardReasonBusy": phoneCallDiscardReasonBusy;
  "phoneCallDiscardReasonAllowGroupCall": phoneCallDiscardReasonAllowGroupCall;
  "dataJSON": dataJSON;
  "labeledPrice": labeledPrice;
  "invoice": invoice;
  "paymentCharge": paymentCharge;
  "postAddress": postAddress;
  "paymentRequestedInfo": paymentRequestedInfo;
  "paymentSavedCredentialsCard": paymentSavedCredentialsCard;
  "webDocument": webDocument;
  "webDocumentNoProxy": webDocumentNoProxy;
  "inputWebDocument": inputWebDocument;
  "inputWebFileLocation": inputWebFileLocation;
  "inputWebFileGeoPointLocation": inputWebFileGeoPointLocation;
  "inputWebFileAudioAlbumThumbLocation": inputWebFileAudioAlbumThumbLocation;
  "upload.webFile": upload_webFile;
  "payments.paymentForm": payments_paymentForm;
  "payments.paymentFormStars": payments_paymentFormStars;
  "payments.paymentFormStarGift": payments_paymentFormStarGift;
  "payments.validatedRequestedInfo": payments_validatedRequestedInfo;
  "payments.paymentResult": payments_paymentResult;
  "payments.paymentVerificationNeeded": payments_paymentVerificationNeeded;
  "payments.paymentReceipt": payments_paymentReceipt;
  "payments.paymentReceiptStars": payments_paymentReceiptStars;
  "payments.savedInfo": payments_savedInfo;
  "inputPaymentCredentialsSaved": inputPaymentCredentialsSaved;
  "inputPaymentCredentials": inputPaymentCredentials;
  "inputPaymentCredentialsApplePay": inputPaymentCredentialsApplePay;
  "inputPaymentCredentialsGooglePay": inputPaymentCredentialsGooglePay;
  "account.tmpPassword": account_tmpPassword;
  "shippingOption": shippingOption;
  "inputStickerSetItem": inputStickerSetItem;
  "inputPhoneCall": inputPhoneCall;
  "phoneCallEmpty": phoneCallEmpty;
  "phoneCallWaiting": phoneCallWaiting;
  "phoneCallRequested": phoneCallRequested;
  "phoneCallAccepted": phoneCallAccepted;
  "phoneCall": phoneCall;
  "phoneCallDiscarded": phoneCallDiscarded;
  "phoneConnection": phoneConnection;
  "phoneConnectionWebrtc": phoneConnectionWebrtc;
  "phoneCallProtocol": phoneCallProtocol;
  "phone.phoneCall": phone_phoneCall;
  "upload.cdnFileReuploadNeeded": upload_cdnFileReuploadNeeded;
  "upload.cdnFile": upload_cdnFile;
  "cdnPublicKey": cdnPublicKey;
  "cdnConfig": cdnConfig;
  "langPackString": langPackString;
  "langPackStringPluralized": langPackStringPluralized;
  "langPackStringDeleted": langPackStringDeleted;
  "langPackDifference": langPackDifference;
  "langPackLanguage": langPackLanguage;
  "channelAdminLogEventActionChangeTitle": channelAdminLogEventActionChangeTitle;
  "channelAdminLogEventActionChangeAbout": channelAdminLogEventActionChangeAbout;
  "channelAdminLogEventActionChangeUsername": channelAdminLogEventActionChangeUsername;
  "channelAdminLogEventActionChangePhoto": channelAdminLogEventActionChangePhoto;
  "channelAdminLogEventActionToggleInvites": channelAdminLogEventActionToggleInvites;
  "channelAdminLogEventActionToggleSignatures": channelAdminLogEventActionToggleSignatures;
  "channelAdminLogEventActionUpdatePinned": channelAdminLogEventActionUpdatePinned;
  "channelAdminLogEventActionEditMessage": channelAdminLogEventActionEditMessage;
  "channelAdminLogEventActionDeleteMessage": channelAdminLogEventActionDeleteMessage;
  "channelAdminLogEventActionParticipantJoin": channelAdminLogEventActionParticipantJoin;
  "channelAdminLogEventActionParticipantLeave": channelAdminLogEventActionParticipantLeave;
  "channelAdminLogEventActionParticipantInvite": channelAdminLogEventActionParticipantInvite;
  "channelAdminLogEventActionParticipantToggleBan": channelAdminLogEventActionParticipantToggleBan;
  "channelAdminLogEventActionParticipantToggleAdmin": channelAdminLogEventActionParticipantToggleAdmin;
  "channelAdminLogEventActionChangeStickerSet": channelAdminLogEventActionChangeStickerSet;
  "channelAdminLogEventActionTogglePreHistoryHidden": channelAdminLogEventActionTogglePreHistoryHidden;
  "channelAdminLogEventActionDefaultBannedRights": channelAdminLogEventActionDefaultBannedRights;
  "channelAdminLogEventActionStopPoll": channelAdminLogEventActionStopPoll;
  "channelAdminLogEventActionChangeLinkedChat": channelAdminLogEventActionChangeLinkedChat;
  "channelAdminLogEventActionChangeLocation": channelAdminLogEventActionChangeLocation;
  "channelAdminLogEventActionToggleSlowMode": channelAdminLogEventActionToggleSlowMode;
  "channelAdminLogEventActionStartGroupCall": channelAdminLogEventActionStartGroupCall;
  "channelAdminLogEventActionDiscardGroupCall": channelAdminLogEventActionDiscardGroupCall;
  "channelAdminLogEventActionParticipantMute": channelAdminLogEventActionParticipantMute;
  "channelAdminLogEventActionParticipantUnmute": channelAdminLogEventActionParticipantUnmute;
  "channelAdminLogEventActionToggleGroupCallSetting": channelAdminLogEventActionToggleGroupCallSetting;
  "channelAdminLogEventActionParticipantJoinByInvite": channelAdminLogEventActionParticipantJoinByInvite;
  "channelAdminLogEventActionExportedInviteDelete": channelAdminLogEventActionExportedInviteDelete;
  "channelAdminLogEventActionExportedInviteRevoke": channelAdminLogEventActionExportedInviteRevoke;
  "channelAdminLogEventActionExportedInviteEdit": channelAdminLogEventActionExportedInviteEdit;
  "channelAdminLogEventActionParticipantVolume": channelAdminLogEventActionParticipantVolume;
  "channelAdminLogEventActionChangeHistoryTTL": channelAdminLogEventActionChangeHistoryTTL;
  "channelAdminLogEventActionParticipantJoinByRequest": channelAdminLogEventActionParticipantJoinByRequest;
  "channelAdminLogEventActionToggleNoForwards": channelAdminLogEventActionToggleNoForwards;
  "channelAdminLogEventActionSendMessage": channelAdminLogEventActionSendMessage;
  "channelAdminLogEventActionChangeAvailableReactions": channelAdminLogEventActionChangeAvailableReactions;
  "channelAdminLogEventActionChangeUsernames": channelAdminLogEventActionChangeUsernames;
  "channelAdminLogEventActionToggleForum": channelAdminLogEventActionToggleForum;
  "channelAdminLogEventActionCreateTopic": channelAdminLogEventActionCreateTopic;
  "channelAdminLogEventActionEditTopic": channelAdminLogEventActionEditTopic;
  "channelAdminLogEventActionDeleteTopic": channelAdminLogEventActionDeleteTopic;
  "channelAdminLogEventActionPinTopic": channelAdminLogEventActionPinTopic;
  "channelAdminLogEventActionToggleAntiSpam": channelAdminLogEventActionToggleAntiSpam;
  "channelAdminLogEventActionChangePeerColor": channelAdminLogEventActionChangePeerColor;
  "channelAdminLogEventActionChangeProfilePeerColor": channelAdminLogEventActionChangeProfilePeerColor;
  "channelAdminLogEventActionChangeWallpaper": channelAdminLogEventActionChangeWallpaper;
  "channelAdminLogEventActionChangeEmojiStatus": channelAdminLogEventActionChangeEmojiStatus;
  "channelAdminLogEventActionChangeEmojiStickerSet": channelAdminLogEventActionChangeEmojiStickerSet;
  "channelAdminLogEventActionToggleSignatureProfiles": channelAdminLogEventActionToggleSignatureProfiles;
  "channelAdminLogEventActionParticipantSubExtend": channelAdminLogEventActionParticipantSubExtend;
  "channelAdminLogEvent": channelAdminLogEvent;
  "channels.adminLogResults": channels_adminLogResults;
  "channelAdminLogEventsFilter": channelAdminLogEventsFilter;
  "popularContact": popularContact;
  "messages.favedStickersNotModified": messages_favedStickersNotModified;
  "messages.favedStickers": messages_favedStickers;
  "recentMeUrlUnknown": recentMeUrlUnknown;
  "recentMeUrlUser": recentMeUrlUser;
  "recentMeUrlChat": recentMeUrlChat;
  "recentMeUrlChatInvite": recentMeUrlChatInvite;
  "recentMeUrlStickerSet": recentMeUrlStickerSet;
  "help.recentMeUrls": help_recentMeUrls;
  "inputSingleMedia": inputSingleMedia;
  "webAuthorization": webAuthorization;
  "account.webAuthorizations": account_webAuthorizations;
  "inputMessageID": inputMessageID;
  "inputMessageReplyTo": inputMessageReplyTo;
  "inputMessagePinned": inputMessagePinned;
  "inputMessageCallbackQuery": inputMessageCallbackQuery;
  "inputDialogPeer": inputDialogPeer;
  "inputDialogPeerFolder": inputDialogPeerFolder;
  "dialogPeer": dialogPeer;
  "dialogPeerFolder": dialogPeerFolder;
  "messages.foundStickerSetsNotModified": messages_foundStickerSetsNotModified;
  "messages.foundStickerSets": messages_foundStickerSets;
  "fileHash": fileHash;
  "inputClientProxy": inputClientProxy;
  "help.termsOfServiceUpdateEmpty": help_termsOfServiceUpdateEmpty;
  "help.termsOfServiceUpdate": help_termsOfServiceUpdate;
  "inputSecureFileUploaded": inputSecureFileUploaded;
  "inputSecureFile": inputSecureFile;
  "secureFileEmpty": secureFileEmpty;
  "secureFile": secureFile;
  "secureData": secureData;
  "securePlainPhone": securePlainPhone;
  "securePlainEmail": securePlainEmail;
  "secureValueTypePersonalDetails": secureValueTypePersonalDetails;
  "secureValueTypePassport": secureValueTypePassport;
  "secureValueTypeDriverLicense": secureValueTypeDriverLicense;
  "secureValueTypeIdentityCard": secureValueTypeIdentityCard;
  "secureValueTypeInternalPassport": secureValueTypeInternalPassport;
  "secureValueTypeAddress": secureValueTypeAddress;
  "secureValueTypeUtilityBill": secureValueTypeUtilityBill;
  "secureValueTypeBankStatement": secureValueTypeBankStatement;
  "secureValueTypeRentalAgreement": secureValueTypeRentalAgreement;
  "secureValueTypePassportRegistration": secureValueTypePassportRegistration;
  "secureValueTypeTemporaryRegistration": secureValueTypeTemporaryRegistration;
  "secureValueTypePhone": secureValueTypePhone;
  "secureValueTypeEmail": secureValueTypeEmail;
  "secureValue": secureValue;
  "inputSecureValue": inputSecureValue;
  "secureValueHash": secureValueHash;
  "secureValueErrorData": secureValueErrorData;
  "secureValueErrorFrontSide": secureValueErrorFrontSide;
  "secureValueErrorReverseSide": secureValueErrorReverseSide;
  "secureValueErrorSelfie": secureValueErrorSelfie;
  "secureValueErrorFile": secureValueErrorFile;
  "secureValueErrorFiles": secureValueErrorFiles;
  "secureValueError": secureValueError;
  "secureValueErrorTranslationFile": secureValueErrorTranslationFile;
  "secureValueErrorTranslationFiles": secureValueErrorTranslationFiles;
  "secureCredentialsEncrypted": secureCredentialsEncrypted;
  "account.authorizationForm": account_authorizationForm;
  "account.sentEmailCode": account_sentEmailCode;
  "help.deepLinkInfoEmpty": help_deepLinkInfoEmpty;
  "help.deepLinkInfo": help_deepLinkInfo;
  "savedPhoneContact": savedPhoneContact;
  "account.takeout": account_takeout;
  "passwordKdfAlgoUnknown": passwordKdfAlgoUnknown;
  "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow": passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow;
  "securePasswordKdfAlgoUnknown": securePasswordKdfAlgoUnknown;
  "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000": securePasswordKdfAlgoPBKDF2HMACSHA512iter100000;
  "securePasswordKdfAlgoSHA512": securePasswordKdfAlgoSHA512;
  "secureSecretSettings": secureSecretSettings;
  "inputCheckPasswordEmpty": inputCheckPasswordEmpty;
  "inputCheckPasswordSRP": inputCheckPasswordSRP;
  "secureRequiredType": secureRequiredType;
  "secureRequiredTypeOneOf": secureRequiredTypeOneOf;
  "help.passportConfigNotModified": help_passportConfigNotModified;
  "help.passportConfig": help_passportConfig;
  "inputAppEvent": inputAppEvent;
  "jsonObjectValue": jsonObjectValue;
  "jsonNull": jsonNull;
  "jsonBool": jsonBool;
  "jsonNumber": jsonNumber;
  "jsonString": jsonString;
  "jsonArray": jsonArray;
  "jsonObject": jsonObject;
  "pageTableCell": pageTableCell;
  "pageTableRow": pageTableRow;
  "pageCaption": pageCaption;
  "pageListItemText": pageListItemText;
  "pageListItemBlocks": pageListItemBlocks;
  "pageListOrderedItemText": pageListOrderedItemText;
  "pageListOrderedItemBlocks": pageListOrderedItemBlocks;
  "pageRelatedArticle": pageRelatedArticle;
  "page": page;
  "help.supportName": help_supportName;
  "help.userInfoEmpty": help_userInfoEmpty;
  "help.userInfo": help_userInfo;
  "pollAnswer": pollAnswer;
  "poll": poll;
  "pollAnswerVoters": pollAnswerVoters;
  "pollResults": pollResults;
  "chatOnlines": chatOnlines;
  "statsURL": statsURL;
  "chatAdminRights": chatAdminRights;
  "chatBannedRights": chatBannedRights;
  "inputWallPaper": inputWallPaper;
  "inputWallPaperSlug": inputWallPaperSlug;
  "inputWallPaperNoFile": inputWallPaperNoFile;
  "account.wallPapersNotModified": account_wallPapersNotModified;
  "account.wallPapers": account_wallPapers;
  "codeSettings": codeSettings;
  "wallPaperSettings": wallPaperSettings;
  "autoDownloadSettings": autoDownloadSettings;
  "account.autoDownloadSettings": account_autoDownloadSettings;
  "emojiKeyword": emojiKeyword;
  "emojiKeywordDeleted": emojiKeywordDeleted;
  "emojiKeywordsDifference": emojiKeywordsDifference;
  "emojiURL": emojiURL;
  "emojiLanguage": emojiLanguage;
  "folder": folder;
  "inputFolderPeer": inputFolderPeer;
  "folderPeer": folderPeer;
  "messages.searchCounter": messages_searchCounter;
  "urlAuthResultRequest": urlAuthResultRequest;
  "urlAuthResultAccepted": urlAuthResultAccepted;
  "urlAuthResultDefault": urlAuthResultDefault;
  "channelLocationEmpty": channelLocationEmpty;
  "channelLocation": channelLocation;
  "peerLocated": peerLocated;
  "peerSelfLocated": peerSelfLocated;
  "restrictionReason": restrictionReason;
  "inputTheme": inputTheme;
  "inputThemeSlug": inputThemeSlug;
  "theme": theme;
  "account.themesNotModified": account_themesNotModified;
  "account.themes": account_themes;
  "auth.loginToken": auth_loginToken;
  "auth.loginTokenMigrateTo": auth_loginTokenMigrateTo;
  "auth.loginTokenSuccess": auth_loginTokenSuccess;
  "account.contentSettings": account_contentSettings;
  "messages.inactiveChats": messages_inactiveChats;
  "baseThemeClassic": baseThemeClassic;
  "baseThemeDay": baseThemeDay;
  "baseThemeNight": baseThemeNight;
  "baseThemeTinted": baseThemeTinted;
  "baseThemeArctic": baseThemeArctic;
  "inputThemeSettings": inputThemeSettings;
  "themeSettings": themeSettings;
  "webPageAttributeTheme": webPageAttributeTheme;
  "webPageAttributeStory": webPageAttributeStory;
  "webPageAttributeStickerSet": webPageAttributeStickerSet;
  "webPageAttributeUniqueStarGift": webPageAttributeUniqueStarGift;
  "messages.votesList": messages_votesList;
  "bankCardOpenUrl": bankCardOpenUrl;
  "payments.bankCardData": payments_bankCardData;
  "dialogFilter": dialogFilter;
  "dialogFilterDefault": dialogFilterDefault;
  "dialogFilterChatlist": dialogFilterChatlist;
  "dialogFilterSuggested": dialogFilterSuggested;
  "statsDateRangeDays": statsDateRangeDays;
  "statsAbsValueAndPrev": statsAbsValueAndPrev;
  "statsPercentValue": statsPercentValue;
  "statsGraphAsync": statsGraphAsync;
  "statsGraphError": statsGraphError;
  "statsGraph": statsGraph;
  "stats.broadcastStats": stats_broadcastStats;
  "help.promoDataEmpty": help_promoDataEmpty;
  "help.promoData": help_promoData;
  "videoSize": videoSize;
  "videoSizeEmojiMarkup": videoSizeEmojiMarkup;
  "videoSizeStickerMarkup": videoSizeStickerMarkup;
  "statsGroupTopPoster": statsGroupTopPoster;
  "statsGroupTopAdmin": statsGroupTopAdmin;
  "statsGroupTopInviter": statsGroupTopInviter;
  "stats.megagroupStats": stats_megagroupStats;
  "globalPrivacySettings": globalPrivacySettings;
  "help.countryCode": help_countryCode;
  "help.country": help_country;
  "help.countriesListNotModified": help_countriesListNotModified;
  "help.countriesList": help_countriesList;
  "messageViews": messageViews;
  "messages.messageViews": messages_messageViews;
  "messages.discussionMessage": messages_discussionMessage;
  "messageReplyHeader": messageReplyHeader;
  "messageReplyStoryHeader": messageReplyStoryHeader;
  "messageReplies": messageReplies;
  "peerBlocked": peerBlocked;
  "stats.messageStats": stats_messageStats;
  "groupCallDiscarded": groupCallDiscarded;
  "groupCall": groupCall;
  "inputGroupCall": inputGroupCall;
  "groupCallParticipant": groupCallParticipant;
  "phone.groupCall": phone_groupCall;
  "phone.groupParticipants": phone_groupParticipants;
  "inlineQueryPeerTypeSameBotPM": inlineQueryPeerTypeSameBotPM;
  "inlineQueryPeerTypePM": inlineQueryPeerTypePM;
  "inlineQueryPeerTypeChat": inlineQueryPeerTypeChat;
  "inlineQueryPeerTypeMegagroup": inlineQueryPeerTypeMegagroup;
  "inlineQueryPeerTypeBroadcast": inlineQueryPeerTypeBroadcast;
  "inlineQueryPeerTypeBotPM": inlineQueryPeerTypeBotPM;
  "messages.historyImport": messages_historyImport;
  "messages.historyImportParsed": messages_historyImportParsed;
  "messages.affectedFoundMessages": messages_affectedFoundMessages;
  "chatInviteImporter": chatInviteImporter;
  "messages.exportedChatInvites": messages_exportedChatInvites;
  "messages.exportedChatInvite": messages_exportedChatInvite;
  "messages.exportedChatInviteReplaced": messages_exportedChatInviteReplaced;
  "messages.chatInviteImporters": messages_chatInviteImporters;
  "chatAdminWithInvites": chatAdminWithInvites;
  "messages.chatAdminsWithInvites": messages_chatAdminsWithInvites;
  "messages.checkedHistoryImportPeer": messages_checkedHistoryImportPeer;
  "phone.joinAsPeers": phone_joinAsPeers;
  "phone.exportedGroupCallInvite": phone_exportedGroupCallInvite;
  "groupCallParticipantVideoSourceGroup": groupCallParticipantVideoSourceGroup;
  "groupCallParticipantVideo": groupCallParticipantVideo;
  "stickers.suggestedShortName": stickers_suggestedShortName;
  "botCommandScopeDefault": botCommandScopeDefault;
  "botCommandScopeUsers": botCommandScopeUsers;
  "botCommandScopeChats": botCommandScopeChats;
  "botCommandScopeChatAdmins": botCommandScopeChatAdmins;
  "botCommandScopePeer": botCommandScopePeer;
  "botCommandScopePeerAdmins": botCommandScopePeerAdmins;
  "botCommandScopePeerUser": botCommandScopePeerUser;
  "account.resetPasswordFailedWait": account_resetPasswordFailedWait;
  "account.resetPasswordRequestedWait": account_resetPasswordRequestedWait;
  "account.resetPasswordOk": account_resetPasswordOk;
  "sponsoredMessage": sponsoredMessage;
  "messages.sponsoredMessages": messages_sponsoredMessages;
  "messages.sponsoredMessagesEmpty": messages_sponsoredMessagesEmpty;
  "searchResultsCalendarPeriod": searchResultsCalendarPeriod;
  "messages.searchResultsCalendar": messages_searchResultsCalendar;
  "searchResultPosition": searchResultPosition;
  "messages.searchResultsPositions": messages_searchResultsPositions;
  "channels.sendAsPeers": channels_sendAsPeers;
  "users.userFull": users_userFull;
  "messages.peerSettings": messages_peerSettings;
  "auth.loggedOut": auth_loggedOut;
  "reactionCount": reactionCount;
  "messageReactions": messageReactions;
  "messages.messageReactionsList": messages_messageReactionsList;
  "availableReaction": availableReaction;
  "messages.availableReactionsNotModified": messages_availableReactionsNotModified;
  "messages.availableReactions": messages_availableReactions;
  "messagePeerReaction": messagePeerReaction;
  "groupCallStreamChannel": groupCallStreamChannel;
  "phone.groupCallStreamChannels": phone_groupCallStreamChannels;
  "phone.groupCallStreamRtmpUrl": phone_groupCallStreamRtmpUrl;
  "attachMenuBotIconColor": attachMenuBotIconColor;
  "attachMenuBotIcon": attachMenuBotIcon;
  "attachMenuBot": attachMenuBot;
  "attachMenuBotsNotModified": attachMenuBotsNotModified;
  "attachMenuBots": attachMenuBots;
  "attachMenuBotsBot": attachMenuBotsBot;
  "webViewResultUrl": webViewResultUrl;
  "webViewMessageSent": webViewMessageSent;
  "botMenuButtonDefault": botMenuButtonDefault;
  "botMenuButtonCommands": botMenuButtonCommands;
  "botMenuButton": botMenuButton;
  "account.savedRingtonesNotModified": account_savedRingtonesNotModified;
  "account.savedRingtones": account_savedRingtones;
  "notificationSoundDefault": notificationSoundDefault;
  "notificationSoundNone": notificationSoundNone;
  "notificationSoundLocal": notificationSoundLocal;
  "notificationSoundRingtone": notificationSoundRingtone;
  "account.savedRingtone": account_savedRingtone;
  "account.savedRingtoneConverted": account_savedRingtoneConverted;
  "attachMenuPeerTypeSameBotPM": attachMenuPeerTypeSameBotPM;
  "attachMenuPeerTypeBotPM": attachMenuPeerTypeBotPM;
  "attachMenuPeerTypePM": attachMenuPeerTypePM;
  "attachMenuPeerTypeChat": attachMenuPeerTypeChat;
  "attachMenuPeerTypeBroadcast": attachMenuPeerTypeBroadcast;
  "inputInvoiceMessage": inputInvoiceMessage;
  "inputInvoiceSlug": inputInvoiceSlug;
  "inputInvoicePremiumGiftCode": inputInvoicePremiumGiftCode;
  "inputInvoiceStars": inputInvoiceStars;
  "inputInvoiceChatInviteSubscription": inputInvoiceChatInviteSubscription;
  "inputInvoiceStarGift": inputInvoiceStarGift;
  "inputInvoiceStarGiftUpgrade": inputInvoiceStarGiftUpgrade;
  "inputInvoiceStarGiftTransfer": inputInvoiceStarGiftTransfer;
  "inputInvoicePremiumGiftStars": inputInvoicePremiumGiftStars;
  "payments.exportedInvoice": payments_exportedInvoice;
  "messages.transcribedAudio": messages_transcribedAudio;
  "help.premiumPromo": help_premiumPromo;
  "inputStorePaymentPremiumSubscription": inputStorePaymentPremiumSubscription;
  "inputStorePaymentGiftPremium": inputStorePaymentGiftPremium;
  "inputStorePaymentPremiumGiftCode": inputStorePaymentPremiumGiftCode;
  "inputStorePaymentPremiumGiveaway": inputStorePaymentPremiumGiveaway;
  "inputStorePaymentStarsTopup": inputStorePaymentStarsTopup;
  "inputStorePaymentStarsGift": inputStorePaymentStarsGift;
  "inputStorePaymentStarsGiveaway": inputStorePaymentStarsGiveaway;
  "paymentFormMethod": paymentFormMethod;
  "emojiStatusEmpty": emojiStatusEmpty;
  "emojiStatus": emojiStatus;
  "emojiStatusCollectible": emojiStatusCollectible;
  "inputEmojiStatusCollectible": inputEmojiStatusCollectible;
  "account.emojiStatusesNotModified": account_emojiStatusesNotModified;
  "account.emojiStatuses": account_emojiStatuses;
  "reactionEmpty": reactionEmpty;
  "reactionEmoji": reactionEmoji;
  "reactionCustomEmoji": reactionCustomEmoji;
  "reactionPaid": reactionPaid;
  "chatReactionsNone": chatReactionsNone;
  "chatReactionsAll": chatReactionsAll;
  "chatReactionsSome": chatReactionsSome;
  "messages.reactionsNotModified": messages_reactionsNotModified;
  "messages.reactions": messages_reactions;
  "emailVerifyPurposeLoginSetup": emailVerifyPurposeLoginSetup;
  "emailVerifyPurposeLoginChange": emailVerifyPurposeLoginChange;
  "emailVerifyPurposePassport": emailVerifyPurposePassport;
  "emailVerificationCode": emailVerificationCode;
  "emailVerificationGoogle": emailVerificationGoogle;
  "emailVerificationApple": emailVerificationApple;
  "account.emailVerified": account_emailVerified;
  "account.emailVerifiedLogin": account_emailVerifiedLogin;
  "premiumSubscriptionOption": premiumSubscriptionOption;
  "sendAsPeer": sendAsPeer;
  "messageExtendedMediaPreview": messageExtendedMediaPreview;
  "messageExtendedMedia": messageExtendedMedia;
  "stickerKeyword": stickerKeyword;
  "username": username;
  "forumTopicDeleted": forumTopicDeleted;
  "forumTopic": forumTopic;
  "messages.forumTopics": messages_forumTopics;
  "defaultHistoryTTL": defaultHistoryTTL;
  "exportedContactToken": exportedContactToken;
  "requestPeerTypeUser": requestPeerTypeUser;
  "requestPeerTypeChat": requestPeerTypeChat;
  "requestPeerTypeBroadcast": requestPeerTypeBroadcast;
  "emojiListNotModified": emojiListNotModified;
  "emojiList": emojiList;
  "emojiGroup": emojiGroup;
  "emojiGroupGreeting": emojiGroupGreeting;
  "emojiGroupPremium": emojiGroupPremium;
  "messages.emojiGroupsNotModified": messages_emojiGroupsNotModified;
  "messages.emojiGroups": messages_emojiGroups;
  "textWithEntities": textWithEntities;
  "messages.translateResult": messages_translateResult;
  "autoSaveSettings": autoSaveSettings;
  "autoSaveException": autoSaveException;
  "account.autoSaveSettings": account_autoSaveSettings;
  "help.appConfigNotModified": help_appConfigNotModified;
  "help.appConfig": help_appConfig;
  "inputBotAppID": inputBotAppID;
  "inputBotAppShortName": inputBotAppShortName;
  "botAppNotModified": botAppNotModified;
  "botApp": botApp;
  "messages.botApp": messages_botApp;
  "inlineBotWebView": inlineBotWebView;
  "readParticipantDate": readParticipantDate;
  "inputChatlistDialogFilter": inputChatlistDialogFilter;
  "exportedChatlistInvite": exportedChatlistInvite;
  "chatlists.exportedChatlistInvite": chatlists_exportedChatlistInvite;
  "chatlists.exportedInvites": chatlists_exportedInvites;
  "chatlists.chatlistInviteAlready": chatlists_chatlistInviteAlready;
  "chatlists.chatlistInvite": chatlists_chatlistInvite;
  "chatlists.chatlistUpdates": chatlists_chatlistUpdates;
  "bots.botInfo": bots_botInfo;
  "messagePeerVote": messagePeerVote;
  "messagePeerVoteInputOption": messagePeerVoteInputOption;
  "messagePeerVoteMultiple": messagePeerVoteMultiple;
  "storyViews": storyViews;
  "storyItemDeleted": storyItemDeleted;
  "storyItemSkipped": storyItemSkipped;
  "storyItem": storyItem;
  "stories.allStoriesNotModified": stories_allStoriesNotModified;
  "stories.allStories": stories_allStories;
  "stories.stories": stories_stories;
  "storyView": storyView;
  "storyViewPublicForward": storyViewPublicForward;
  "storyViewPublicRepost": storyViewPublicRepost;
  "stories.storyViewsList": stories_storyViewsList;
  "stories.storyViews": stories_storyViews;
  "inputReplyToMessage": inputReplyToMessage;
  "inputReplyToStory": inputReplyToStory;
  "exportedStoryLink": exportedStoryLink;
  "storiesStealthMode": storiesStealthMode;
  "mediaAreaCoordinates": mediaAreaCoordinates;
  "mediaAreaVenue": mediaAreaVenue;
  "inputMediaAreaVenue": inputMediaAreaVenue;
  "mediaAreaGeoPoint": mediaAreaGeoPoint;
  "mediaAreaSuggestedReaction": mediaAreaSuggestedReaction;
  "mediaAreaChannelPost": mediaAreaChannelPost;
  "inputMediaAreaChannelPost": inputMediaAreaChannelPost;
  "mediaAreaUrl": mediaAreaUrl;
  "mediaAreaWeather": mediaAreaWeather;
  "mediaAreaStarGift": mediaAreaStarGift;
  "peerStories": peerStories;
  "stories.peerStories": stories_peerStories;
  "messages.webPage": messages_webPage;
  "premiumGiftCodeOption": premiumGiftCodeOption;
  "payments.checkedGiftCode": payments_checkedGiftCode;
  "payments.giveawayInfo": payments_giveawayInfo;
  "payments.giveawayInfoResults": payments_giveawayInfoResults;
  "prepaidGiveaway": prepaidGiveaway;
  "prepaidStarsGiveaway": prepaidStarsGiveaway;
  "boost": boost;
  "premium.boostsList": premium_boostsList;
  "myBoost": myBoost;
  "premium.myBoosts": premium_myBoosts;
  "premium.boostsStatus": premium_boostsStatus;
  "storyFwdHeader": storyFwdHeader;
  "postInteractionCountersMessage": postInteractionCountersMessage;
  "postInteractionCountersStory": postInteractionCountersStory;
  "stats.storyStats": stats_storyStats;
  "publicForwardMessage": publicForwardMessage;
  "publicForwardStory": publicForwardStory;
  "stats.publicForwards": stats_publicForwards;
  "peerColor": peerColor;
  "help.peerColorSet": help_peerColorSet;
  "help.peerColorProfileSet": help_peerColorProfileSet;
  "help.peerColorOption": help_peerColorOption;
  "help.peerColorsNotModified": help_peerColorsNotModified;
  "help.peerColors": help_peerColors;
  "storyReaction": storyReaction;
  "storyReactionPublicForward": storyReactionPublicForward;
  "storyReactionPublicRepost": storyReactionPublicRepost;
  "stories.storyReactionsList": stories_storyReactionsList;
  "savedDialog": savedDialog;
  "messages.savedDialogs": messages_savedDialogs;
  "messages.savedDialogsSlice": messages_savedDialogsSlice;
  "messages.savedDialogsNotModified": messages_savedDialogsNotModified;
  "savedReactionTag": savedReactionTag;
  "messages.savedReactionTagsNotModified": messages_savedReactionTagsNotModified;
  "messages.savedReactionTags": messages_savedReactionTags;
  "outboxReadDate": outboxReadDate;
  "smsjobs.eligibleToJoin": smsjobs_eligibleToJoin;
  "smsjobs.status": smsjobs_status;
  "smsJob": smsJob;
  "businessWeeklyOpen": businessWeeklyOpen;
  "businessWorkHours": businessWorkHours;
  "businessLocation": businessLocation;
  "inputBusinessRecipients": inputBusinessRecipients;
  "businessRecipients": businessRecipients;
  "businessAwayMessageScheduleAlways": businessAwayMessageScheduleAlways;
  "businessAwayMessageScheduleOutsideWorkHours": businessAwayMessageScheduleOutsideWorkHours;
  "businessAwayMessageScheduleCustom": businessAwayMessageScheduleCustom;
  "inputBusinessGreetingMessage": inputBusinessGreetingMessage;
  "businessGreetingMessage": businessGreetingMessage;
  "inputBusinessAwayMessage": inputBusinessAwayMessage;
  "businessAwayMessage": businessAwayMessage;
  "timezone": timezone;
  "help.timezonesListNotModified": help_timezonesListNotModified;
  "help.timezonesList": help_timezonesList;
  "quickReply": quickReply;
  "inputQuickReplyShortcut": inputQuickReplyShortcut;
  "inputQuickReplyShortcutId": inputQuickReplyShortcutId;
  "messages.quickReplies": messages_quickReplies;
  "messages.quickRepliesNotModified": messages_quickRepliesNotModified;
  "connectedBot": connectedBot;
  "account.connectedBots": account_connectedBots;
  "messages.dialogFilters": messages_dialogFilters;
  "birthday": birthday;
  "botBusinessConnection": botBusinessConnection;
  "inputBusinessIntro": inputBusinessIntro;
  "businessIntro": businessIntro;
  "messages.myStickers": messages_myStickers;
  "inputCollectibleUsername": inputCollectibleUsername;
  "inputCollectiblePhone": inputCollectiblePhone;
  "fragment.collectibleInfo": fragment_collectibleInfo;
  "inputBusinessBotRecipients": inputBusinessBotRecipients;
  "businessBotRecipients": businessBotRecipients;
  "contactBirthday": contactBirthday;
  "contacts.contactBirthdays": contacts_contactBirthdays;
  "missingInvitee": missingInvitee;
  "messages.invitedUsers": messages_invitedUsers;
  "inputBusinessChatLink": inputBusinessChatLink;
  "businessChatLink": businessChatLink;
  "account.businessChatLinks": account_businessChatLinks;
  "account.resolvedBusinessChatLinks": account_resolvedBusinessChatLinks;
  "requestedPeerUser": requestedPeerUser;
  "requestedPeerChat": requestedPeerChat;
  "requestedPeerChannel": requestedPeerChannel;
  "sponsoredMessageReportOption": sponsoredMessageReportOption;
  "channels.sponsoredMessageReportResultChooseOption": channels_sponsoredMessageReportResultChooseOption;
  "channels.sponsoredMessageReportResultAdsHidden": channels_sponsoredMessageReportResultAdsHidden;
  "channels.sponsoredMessageReportResultReported": channels_sponsoredMessageReportResultReported;
  "stats.broadcastRevenueStats": stats_broadcastRevenueStats;
  "stats.broadcastRevenueWithdrawalUrl": stats_broadcastRevenueWithdrawalUrl;
  "broadcastRevenueTransactionProceeds": broadcastRevenueTransactionProceeds;
  "broadcastRevenueTransactionWithdrawal": broadcastRevenueTransactionWithdrawal;
  "broadcastRevenueTransactionRefund": broadcastRevenueTransactionRefund;
  "stats.broadcastRevenueTransactions": stats_broadcastRevenueTransactions;
  "reactionNotificationsFromContacts": reactionNotificationsFromContacts;
  "reactionNotificationsFromAll": reactionNotificationsFromAll;
  "reactionsNotifySettings": reactionsNotifySettings;
  "broadcastRevenueBalances": broadcastRevenueBalances;
  "availableEffect": availableEffect;
  "messages.availableEffectsNotModified": messages_availableEffectsNotModified;
  "messages.availableEffects": messages_availableEffects;
  "factCheck": factCheck;
  "starsTransactionPeerUnsupported": starsTransactionPeerUnsupported;
  "starsTransactionPeerAppStore": starsTransactionPeerAppStore;
  "starsTransactionPeerPlayMarket": starsTransactionPeerPlayMarket;
  "starsTransactionPeerPremiumBot": starsTransactionPeerPremiumBot;
  "starsTransactionPeerFragment": starsTransactionPeerFragment;
  "starsTransactionPeer": starsTransactionPeer;
  "starsTransactionPeerAds": starsTransactionPeerAds;
  "starsTransactionPeerAPI": starsTransactionPeerAPI;
  "starsTopupOption": starsTopupOption;
  "starsTransaction": starsTransaction;
  "payments.starsStatus": payments_starsStatus;
  "foundStory": foundStory;
  "stories.foundStories": stories_foundStories;
  "geoPointAddress": geoPointAddress;
  "starsRevenueStatus": starsRevenueStatus;
  "payments.starsRevenueStats": payments_starsRevenueStats;
  "payments.starsRevenueWithdrawalUrl": payments_starsRevenueWithdrawalUrl;
  "payments.starsRevenueAdsAccountUrl": payments_starsRevenueAdsAccountUrl;
  "inputStarsTransaction": inputStarsTransaction;
  "starsGiftOption": starsGiftOption;
  "bots.popularAppBots": bots_popularAppBots;
  "botPreviewMedia": botPreviewMedia;
  "bots.previewInfo": bots_previewInfo;
  "starsSubscriptionPricing": starsSubscriptionPricing;
  "starsSubscription": starsSubscription;
  "messageReactor": messageReactor;
  "starsGiveawayOption": starsGiveawayOption;
  "starsGiveawayWinnersOption": starsGiveawayWinnersOption;
  "starGift": starGift;
  "starGiftUnique": starGiftUnique;
  "payments.starGiftsNotModified": payments_starGiftsNotModified;
  "payments.starGifts": payments_starGifts;
  "messageReportOption": messageReportOption;
  "reportResultChooseOption": reportResultChooseOption;
  "reportResultAddComment": reportResultAddComment;
  "reportResultReported": reportResultReported;
  "messages.botPreparedInlineMessage": messages_botPreparedInlineMessage;
  "messages.preparedInlineMessage": messages_preparedInlineMessage;
  "botAppSettings": botAppSettings;
  "starRefProgram": starRefProgram;
  "connectedBotStarRef": connectedBotStarRef;
  "payments.connectedStarRefBots": payments_connectedStarRefBots;
  "payments.suggestedStarRefBots": payments_suggestedStarRefBots;
  "starsAmount": starsAmount;
  "messages.foundStickersNotModified": messages_foundStickersNotModified;
  "messages.foundStickers": messages_foundStickers;
  "botVerifierSettings": botVerifierSettings;
  "botVerification": botVerification;
  "starGiftAttributeModel": starGiftAttributeModel;
  "starGiftAttributePattern": starGiftAttributePattern;
  "starGiftAttributeBackdrop": starGiftAttributeBackdrop;
  "starGiftAttributeOriginalDetails": starGiftAttributeOriginalDetails;
  "payments.starGiftUpgradePreview": payments_starGiftUpgradePreview;
  "users.users": users_users;
  "users.usersSlice": users_usersSlice;
  "payments.uniqueStarGift": payments_uniqueStarGift;
  "messages.webPagePreview": messages_webPagePreview;
  "savedStarGift": savedStarGift;
  "payments.savedStarGifts": payments_savedStarGifts;
  "inputSavedStarGiftUser": inputSavedStarGiftUser;
  "inputSavedStarGiftChat": inputSavedStarGiftChat;
  "payments.starGiftWithdrawalUrl": payments_starGiftWithdrawalUrl;
  "paidReactionPrivacyDefault": paidReactionPrivacyDefault;
  "paidReactionPrivacyAnonymous": paidReactionPrivacyAnonymous;
  "paidReactionPrivacyPeer": paidReactionPrivacyPeer;
  "account.paidMessagesRevenue": account_paidMessagesRevenue;
  "requirementToContactEmpty": requirementToContactEmpty;
  "requirementToContactPremium": requirementToContactPremium;
  "requirementToContactPaidMessages": requirementToContactPaidMessages;
}

export interface Functions<T = Function> {
  "req_pq_multi": req_pq_multi;
  "req_DH_params": req_DH_params;
  "set_client_DH_params": set_client_DH_params;
  "rpc_drop_answer": rpc_drop_answer;
  "get_future_salts": get_future_salts;
  "ping": ping;
  "ping_delay_disconnect": ping_delay_disconnect;
  "destroy_session": destroy_session;
  "destroy_auth_key": destroy_auth_key;
  "invokeWithBusinessConnectionPrefix": invokeWithBusinessConnectionPrefix;
  "invokeWithGooglePlayIntegrityPrefix": invokeWithGooglePlayIntegrityPrefix;
  "invokeWithApnsSecretPrefix": invokeWithApnsSecretPrefix;
  "invokeWithReCaptchaPrefix": invokeWithReCaptchaPrefix;
  "invokeAfterMsg": invokeAfterMsg<T>;
  "invokeAfterMsgs": invokeAfterMsgs<T>;
  "initConnection": initConnection<T>;
  "invokeWithLayer": invokeWithLayer<T>;
  "invokeWithoutUpdates": invokeWithoutUpdates<T>;
  "invokeWithMessagesRange": invokeWithMessagesRange<T>;
  "invokeWithTakeout": invokeWithTakeout<T>;
  "invokeWithBusinessConnection": invokeWithBusinessConnection<T>;
  "invokeWithGooglePlayIntegrity": invokeWithGooglePlayIntegrity<T>;
  "invokeWithApnsSecret": invokeWithApnsSecret<T>;
  "invokeWithReCaptcha": invokeWithReCaptcha<T>;
  "auth.sendCode": auth_sendCode;
  "auth.signUp": auth_signUp;
  "auth.signIn": auth_signIn;
  "auth.logOut": auth_logOut;
  "auth.resetAuthorizations": auth_resetAuthorizations;
  "auth.exportAuthorization": auth_exportAuthorization;
  "auth.importAuthorization": auth_importAuthorization;
  "auth.bindTempAuthKey": auth_bindTempAuthKey;
  "auth.importBotAuthorization": auth_importBotAuthorization;
  "auth.checkPassword": auth_checkPassword;
  "auth.requestPasswordRecovery": auth_requestPasswordRecovery;
  "auth.recoverPassword": auth_recoverPassword;
  "auth.resendCode": auth_resendCode;
  "auth.cancelCode": auth_cancelCode;
  "auth.dropTempAuthKeys": auth_dropTempAuthKeys;
  "auth.exportLoginToken": auth_exportLoginToken;
  "auth.importLoginToken": auth_importLoginToken;
  "auth.acceptLoginToken": auth_acceptLoginToken;
  "auth.checkRecoveryPassword": auth_checkRecoveryPassword;
  "auth.importWebTokenAuthorization": auth_importWebTokenAuthorization;
  "auth.requestFirebaseSms": auth_requestFirebaseSms;
  "auth.resetLoginEmail": auth_resetLoginEmail;
  "auth.reportMissingCode": auth_reportMissingCode;
  "account.registerDevice": account_registerDevice;
  "account.unregisterDevice": account_unregisterDevice;
  "account.updateNotifySettings": account_updateNotifySettings;
  "account.getNotifySettings": account_getNotifySettings;
  "account.resetNotifySettings": account_resetNotifySettings;
  "account.updateProfile": account_updateProfile;
  "account.updateStatus": account_updateStatus;
  "account.getWallPapers": account_getWallPapers;
  "account.reportPeer": account_reportPeer;
  "account.checkUsername": account_checkUsername;
  "account.updateUsername": account_updateUsername;
  "account.getPrivacy": account_getPrivacy;
  "account.setPrivacy": account_setPrivacy;
  "account.deleteAccount": account_deleteAccount;
  "account.getAccountTTL": account_getAccountTTL;
  "account.setAccountTTL": account_setAccountTTL;
  "account.sendChangePhoneCode": account_sendChangePhoneCode;
  "account.changePhone": account_changePhone;
  "account.updateDeviceLocked": account_updateDeviceLocked;
  "account.getAuthorizations": account_getAuthorizations;
  "account.resetAuthorization": account_resetAuthorization;
  "account.getPassword": account_getPassword;
  "account.getPasswordSettings": account_getPasswordSettings;
  "account.updatePasswordSettings": account_updatePasswordSettings;
  "account.sendConfirmPhoneCode": account_sendConfirmPhoneCode;
  "account.confirmPhone": account_confirmPhone;
  "account.getTmpPassword": account_getTmpPassword;
  "account.getWebAuthorizations": account_getWebAuthorizations;
  "account.resetWebAuthorization": account_resetWebAuthorization;
  "account.resetWebAuthorizations": account_resetWebAuthorizations;
  "account.getAllSecureValues": account_getAllSecureValues;
  "account.getSecureValue": account_getSecureValue;
  "account.saveSecureValue": account_saveSecureValue;
  "account.deleteSecureValue": account_deleteSecureValue;
  "account.getAuthorizationForm": account_getAuthorizationForm;
  "account.acceptAuthorization": account_acceptAuthorization;
  "account.sendVerifyPhoneCode": account_sendVerifyPhoneCode;
  "account.verifyPhone": account_verifyPhone;
  "account.sendVerifyEmailCode": account_sendVerifyEmailCode;
  "account.verifyEmail": account_verifyEmail;
  "account.initTakeoutSession": account_initTakeoutSession;
  "account.finishTakeoutSession": account_finishTakeoutSession;
  "account.confirmPasswordEmail": account_confirmPasswordEmail;
  "account.resendPasswordEmail": account_resendPasswordEmail;
  "account.cancelPasswordEmail": account_cancelPasswordEmail;
  "account.getContactSignUpNotification": account_getContactSignUpNotification;
  "account.setContactSignUpNotification": account_setContactSignUpNotification;
  "account.getNotifyExceptions": account_getNotifyExceptions;
  "account.getWallPaper": account_getWallPaper;
  "account.uploadWallPaper": account_uploadWallPaper;
  "account.saveWallPaper": account_saveWallPaper;
  "account.installWallPaper": account_installWallPaper;
  "account.resetWallPapers": account_resetWallPapers;
  "account.getAutoDownloadSettings": account_getAutoDownloadSettings;
  "account.saveAutoDownloadSettings": account_saveAutoDownloadSettings;
  "account.uploadTheme": account_uploadTheme;
  "account.createTheme": account_createTheme;
  "account.updateTheme": account_updateTheme;
  "account.saveTheme": account_saveTheme;
  "account.installTheme": account_installTheme;
  "account.getTheme": account_getTheme;
  "account.getThemes": account_getThemes;
  "account.setContentSettings": account_setContentSettings;
  "account.getContentSettings": account_getContentSettings;
  "account.getMultiWallPapers": account_getMultiWallPapers;
  "account.getGlobalPrivacySettings": account_getGlobalPrivacySettings;
  "account.setGlobalPrivacySettings": account_setGlobalPrivacySettings;
  "account.reportProfilePhoto": account_reportProfilePhoto;
  "account.resetPassword": account_resetPassword;
  "account.declinePasswordReset": account_declinePasswordReset;
  "account.getChatThemes": account_getChatThemes;
  "account.setAuthorizationTTL": account_setAuthorizationTTL;
  "account.changeAuthorizationSettings": account_changeAuthorizationSettings;
  "account.getSavedRingtones": account_getSavedRingtones;
  "account.saveRingtone": account_saveRingtone;
  "account.uploadRingtone": account_uploadRingtone;
  "account.updateEmojiStatus": account_updateEmojiStatus;
  "account.getDefaultEmojiStatuses": account_getDefaultEmojiStatuses;
  "account.getRecentEmojiStatuses": account_getRecentEmojiStatuses;
  "account.clearRecentEmojiStatuses": account_clearRecentEmojiStatuses;
  "account.reorderUsernames": account_reorderUsernames;
  "account.toggleUsername": account_toggleUsername;
  "account.getDefaultProfilePhotoEmojis": account_getDefaultProfilePhotoEmojis;
  "account.getDefaultGroupPhotoEmojis": account_getDefaultGroupPhotoEmojis;
  "account.getAutoSaveSettings": account_getAutoSaveSettings;
  "account.saveAutoSaveSettings": account_saveAutoSaveSettings;
  "account.deleteAutoSaveExceptions": account_deleteAutoSaveExceptions;
  "account.invalidateSignInCodes": account_invalidateSignInCodes;
  "account.updateColor": account_updateColor;
  "account.getDefaultBackgroundEmojis": account_getDefaultBackgroundEmojis;
  "account.getChannelDefaultEmojiStatuses": account_getChannelDefaultEmojiStatuses;
  "account.getChannelRestrictedStatusEmojis": account_getChannelRestrictedStatusEmojis;
  "account.updateBusinessWorkHours": account_updateBusinessWorkHours;
  "account.updateBusinessLocation": account_updateBusinessLocation;
  "account.updateBusinessGreetingMessage": account_updateBusinessGreetingMessage;
  "account.updateBusinessAwayMessage": account_updateBusinessAwayMessage;
  "account.updateConnectedBot": account_updateConnectedBot;
  "account.getConnectedBots": account_getConnectedBots;
  "account.getBotBusinessConnection": account_getBotBusinessConnection;
  "account.updateBusinessIntro": account_updateBusinessIntro;
  "account.toggleConnectedBotPaused": account_toggleConnectedBotPaused;
  "account.disablePeerConnectedBot": account_disablePeerConnectedBot;
  "account.updateBirthday": account_updateBirthday;
  "account.createBusinessChatLink": account_createBusinessChatLink;
  "account.editBusinessChatLink": account_editBusinessChatLink;
  "account.deleteBusinessChatLink": account_deleteBusinessChatLink;
  "account.getBusinessChatLinks": account_getBusinessChatLinks;
  "account.resolveBusinessChatLink": account_resolveBusinessChatLink;
  "account.updatePersonalChannel": account_updatePersonalChannel;
  "account.toggleSponsoredMessages": account_toggleSponsoredMessages;
  "account.getReactionsNotifySettings": account_getReactionsNotifySettings;
  "account.setReactionsNotifySettings": account_setReactionsNotifySettings;
  "account.getCollectibleEmojiStatuses": account_getCollectibleEmojiStatuses;
  "account.addNoPaidMessagesException": account_addNoPaidMessagesException;
  "account.getPaidMessagesRevenue": account_getPaidMessagesRevenue;
  "users.getUsers": users_getUsers;
  "users.getFullUser": users_getFullUser;
  "users.setSecureValueErrors": users_setSecureValueErrors;
  "users.getRequirementsToContact": users_getRequirementsToContact;
  "contacts.getContactIDs": contacts_getContactIDs;
  "contacts.getStatuses": contacts_getStatuses;
  "contacts.getContacts": contacts_getContacts;
  "contacts.importContacts": contacts_importContacts;
  "contacts.deleteContacts": contacts_deleteContacts;
  "contacts.deleteByPhones": contacts_deleteByPhones;
  "contacts.block": contacts_block;
  "contacts.unblock": contacts_unblock;
  "contacts.getBlocked": contacts_getBlocked;
  "contacts.search": contacts_search;
  "contacts.resolveUsername": contacts_resolveUsername;
  "contacts.getTopPeers": contacts_getTopPeers;
  "contacts.resetTopPeerRating": contacts_resetTopPeerRating;
  "contacts.resetSaved": contacts_resetSaved;
  "contacts.getSaved": contacts_getSaved;
  "contacts.toggleTopPeers": contacts_toggleTopPeers;
  "contacts.addContact": contacts_addContact;
  "contacts.acceptContact": contacts_acceptContact;
  "contacts.getLocated": contacts_getLocated;
  "contacts.blockFromReplies": contacts_blockFromReplies;
  "contacts.resolvePhone": contacts_resolvePhone;
  "contacts.exportContactToken": contacts_exportContactToken;
  "contacts.importContactToken": contacts_importContactToken;
  "contacts.editCloseFriends": contacts_editCloseFriends;
  "contacts.setBlocked": contacts_setBlocked;
  "contacts.getBirthdays": contacts_getBirthdays;
  "messages.getMessages": messages_getMessages;
  "messages.getDialogs": messages_getDialogs;
  "messages.getHistory": messages_getHistory;
  "messages.search": messages_search;
  "messages.readHistory": messages_readHistory;
  "messages.deleteHistory": messages_deleteHistory;
  "messages.deleteMessages": messages_deleteMessages;
  "messages.receivedMessages": messages_receivedMessages;
  "messages.setTyping": messages_setTyping;
  "messages.sendMessage": messages_sendMessage;
  "messages.sendMedia": messages_sendMedia;
  "messages.forwardMessages": messages_forwardMessages;
  "messages.reportSpam": messages_reportSpam;
  "messages.getPeerSettings": messages_getPeerSettings;
  "messages.report": messages_report;
  "messages.getChats": messages_getChats;
  "messages.getFullChat": messages_getFullChat;
  "messages.editChatTitle": messages_editChatTitle;
  "messages.editChatPhoto": messages_editChatPhoto;
  "messages.addChatUser": messages_addChatUser;
  "messages.deleteChatUser": messages_deleteChatUser;
  "messages.createChat": messages_createChat;
  "messages.getDhConfig": messages_getDhConfig;
  "messages.requestEncryption": messages_requestEncryption;
  "messages.acceptEncryption": messages_acceptEncryption;
  "messages.discardEncryption": messages_discardEncryption;
  "messages.setEncryptedTyping": messages_setEncryptedTyping;
  "messages.readEncryptedHistory": messages_readEncryptedHistory;
  "messages.sendEncrypted": messages_sendEncrypted;
  "messages.sendEncryptedFile": messages_sendEncryptedFile;
  "messages.sendEncryptedService": messages_sendEncryptedService;
  "messages.receivedQueue": messages_receivedQueue;
  "messages.reportEncryptedSpam": messages_reportEncryptedSpam;
  "messages.readMessageContents": messages_readMessageContents;
  "messages.getStickers": messages_getStickers;
  "messages.getAllStickers": messages_getAllStickers;
  "messages.getWebPagePreview": messages_getWebPagePreview;
  "messages.exportChatInvite": messages_exportChatInvite;
  "messages.checkChatInvite": messages_checkChatInvite;
  "messages.importChatInvite": messages_importChatInvite;
  "messages.getStickerSet": messages_getStickerSet;
  "messages.installStickerSet": messages_installStickerSet;
  "messages.uninstallStickerSet": messages_uninstallStickerSet;
  "messages.startBot": messages_startBot;
  "messages.getMessagesViews": messages_getMessagesViews;
  "messages.editChatAdmin": messages_editChatAdmin;
  "messages.migrateChat": messages_migrateChat;
  "messages.searchGlobal": messages_searchGlobal;
  "messages.reorderStickerSets": messages_reorderStickerSets;
  "messages.getDocumentByHash": messages_getDocumentByHash;
  "messages.getSavedGifs": messages_getSavedGifs;
  "messages.saveGif": messages_saveGif;
  "messages.getInlineBotResults": messages_getInlineBotResults;
  "messages.setInlineBotResults": messages_setInlineBotResults;
  "messages.sendInlineBotResult": messages_sendInlineBotResult;
  "messages.getMessageEditData": messages_getMessageEditData;
  "messages.editMessage": messages_editMessage;
  "messages.editInlineBotMessage": messages_editInlineBotMessage;
  "messages.getBotCallbackAnswer": messages_getBotCallbackAnswer;
  "messages.setBotCallbackAnswer": messages_setBotCallbackAnswer;
  "messages.getPeerDialogs": messages_getPeerDialogs;
  "messages.saveDraft": messages_saveDraft;
  "messages.getAllDrafts": messages_getAllDrafts;
  "messages.getFeaturedStickers": messages_getFeaturedStickers;
  "messages.readFeaturedStickers": messages_readFeaturedStickers;
  "messages.getRecentStickers": messages_getRecentStickers;
  "messages.saveRecentSticker": messages_saveRecentSticker;
  "messages.clearRecentStickers": messages_clearRecentStickers;
  "messages.getArchivedStickers": messages_getArchivedStickers;
  "messages.getMaskStickers": messages_getMaskStickers;
  "messages.getAttachedStickers": messages_getAttachedStickers;
  "messages.setGameScore": messages_setGameScore;
  "messages.setInlineGameScore": messages_setInlineGameScore;
  "messages.getGameHighScores": messages_getGameHighScores;
  "messages.getInlineGameHighScores": messages_getInlineGameHighScores;
  "messages.getCommonChats": messages_getCommonChats;
  "messages.getWebPage": messages_getWebPage;
  "messages.toggleDialogPin": messages_toggleDialogPin;
  "messages.reorderPinnedDialogs": messages_reorderPinnedDialogs;
  "messages.getPinnedDialogs": messages_getPinnedDialogs;
  "messages.setBotShippingResults": messages_setBotShippingResults;
  "messages.setBotPrecheckoutResults": messages_setBotPrecheckoutResults;
  "messages.uploadMedia": messages_uploadMedia;
  "messages.sendScreenshotNotification": messages_sendScreenshotNotification;
  "messages.getFavedStickers": messages_getFavedStickers;
  "messages.faveSticker": messages_faveSticker;
  "messages.getUnreadMentions": messages_getUnreadMentions;
  "messages.readMentions": messages_readMentions;
  "messages.getRecentLocations": messages_getRecentLocations;
  "messages.sendMultiMedia": messages_sendMultiMedia;
  "messages.uploadEncryptedFile": messages_uploadEncryptedFile;
  "messages.searchStickerSets": messages_searchStickerSets;
  "messages.getSplitRanges": messages_getSplitRanges;
  "messages.markDialogUnread": messages_markDialogUnread;
  "messages.getDialogUnreadMarks": messages_getDialogUnreadMarks;
  "messages.clearAllDrafts": messages_clearAllDrafts;
  "messages.updatePinnedMessage": messages_updatePinnedMessage;
  "messages.sendVote": messages_sendVote;
  "messages.getPollResults": messages_getPollResults;
  "messages.getOnlines": messages_getOnlines;
  "messages.editChatAbout": messages_editChatAbout;
  "messages.editChatDefaultBannedRights": messages_editChatDefaultBannedRights;
  "messages.getEmojiKeywords": messages_getEmojiKeywords;
  "messages.getEmojiKeywordsDifference": messages_getEmojiKeywordsDifference;
  "messages.getEmojiKeywordsLanguages": messages_getEmojiKeywordsLanguages;
  "messages.getEmojiURL": messages_getEmojiURL;
  "messages.getSearchCounters": messages_getSearchCounters;
  "messages.requestUrlAuth": messages_requestUrlAuth;
  "messages.acceptUrlAuth": messages_acceptUrlAuth;
  "messages.hidePeerSettingsBar": messages_hidePeerSettingsBar;
  "messages.getScheduledHistory": messages_getScheduledHistory;
  "messages.getScheduledMessages": messages_getScheduledMessages;
  "messages.sendScheduledMessages": messages_sendScheduledMessages;
  "messages.deleteScheduledMessages": messages_deleteScheduledMessages;
  "messages.getPollVotes": messages_getPollVotes;
  "messages.toggleStickerSets": messages_toggleStickerSets;
  "messages.getDialogFilters": messages_getDialogFilters;
  "messages.getSuggestedDialogFilters": messages_getSuggestedDialogFilters;
  "messages.updateDialogFilter": messages_updateDialogFilter;
  "messages.updateDialogFiltersOrder": messages_updateDialogFiltersOrder;
  "messages.getOldFeaturedStickers": messages_getOldFeaturedStickers;
  "messages.getReplies": messages_getReplies;
  "messages.getDiscussionMessage": messages_getDiscussionMessage;
  "messages.readDiscussion": messages_readDiscussion;
  "messages.unpinAllMessages": messages_unpinAllMessages;
  "messages.deleteChat": messages_deleteChat;
  "messages.deletePhoneCallHistory": messages_deletePhoneCallHistory;
  "messages.checkHistoryImport": messages_checkHistoryImport;
  "messages.initHistoryImport": messages_initHistoryImport;
  "messages.uploadImportedMedia": messages_uploadImportedMedia;
  "messages.startHistoryImport": messages_startHistoryImport;
  "messages.getExportedChatInvites": messages_getExportedChatInvites;
  "messages.getExportedChatInvite": messages_getExportedChatInvite;
  "messages.editExportedChatInvite": messages_editExportedChatInvite;
  "messages.deleteRevokedExportedChatInvites": messages_deleteRevokedExportedChatInvites;
  "messages.deleteExportedChatInvite": messages_deleteExportedChatInvite;
  "messages.getAdminsWithInvites": messages_getAdminsWithInvites;
  "messages.getChatInviteImporters": messages_getChatInviteImporters;
  "messages.setHistoryTTL": messages_setHistoryTTL;
  "messages.checkHistoryImportPeer": messages_checkHistoryImportPeer;
  "messages.setChatTheme": messages_setChatTheme;
  "messages.getMessageReadParticipants": messages_getMessageReadParticipants;
  "messages.getSearchResultsCalendar": messages_getSearchResultsCalendar;
  "messages.getSearchResultsPositions": messages_getSearchResultsPositions;
  "messages.hideChatJoinRequest": messages_hideChatJoinRequest;
  "messages.hideAllChatJoinRequests": messages_hideAllChatJoinRequests;
  "messages.toggleNoForwards": messages_toggleNoForwards;
  "messages.saveDefaultSendAs": messages_saveDefaultSendAs;
  "messages.sendReaction": messages_sendReaction;
  "messages.getMessagesReactions": messages_getMessagesReactions;
  "messages.getMessageReactionsList": messages_getMessageReactionsList;
  "messages.setChatAvailableReactions": messages_setChatAvailableReactions;
  "messages.getAvailableReactions": messages_getAvailableReactions;
  "messages.setDefaultReaction": messages_setDefaultReaction;
  "messages.translateText": messages_translateText;
  "messages.getUnreadReactions": messages_getUnreadReactions;
  "messages.readReactions": messages_readReactions;
  "messages.searchSentMedia": messages_searchSentMedia;
  "messages.getAttachMenuBots": messages_getAttachMenuBots;
  "messages.getAttachMenuBot": messages_getAttachMenuBot;
  "messages.toggleBotInAttachMenu": messages_toggleBotInAttachMenu;
  "messages.requestWebView": messages_requestWebView;
  "messages.prolongWebView": messages_prolongWebView;
  "messages.requestSimpleWebView": messages_requestSimpleWebView;
  "messages.sendWebViewResultMessage": messages_sendWebViewResultMessage;
  "messages.sendWebViewData": messages_sendWebViewData;
  "messages.transcribeAudio": messages_transcribeAudio;
  "messages.rateTranscribedAudio": messages_rateTranscribedAudio;
  "messages.getCustomEmojiDocuments": messages_getCustomEmojiDocuments;
  "messages.getEmojiStickers": messages_getEmojiStickers;
  "messages.getFeaturedEmojiStickers": messages_getFeaturedEmojiStickers;
  "messages.reportReaction": messages_reportReaction;
  "messages.getTopReactions": messages_getTopReactions;
  "messages.getRecentReactions": messages_getRecentReactions;
  "messages.clearRecentReactions": messages_clearRecentReactions;
  "messages.getExtendedMedia": messages_getExtendedMedia;
  "messages.setDefaultHistoryTTL": messages_setDefaultHistoryTTL;
  "messages.getDefaultHistoryTTL": messages_getDefaultHistoryTTL;
  "messages.sendBotRequestedPeer": messages_sendBotRequestedPeer;
  "messages.getEmojiGroups": messages_getEmojiGroups;
  "messages.getEmojiStatusGroups": messages_getEmojiStatusGroups;
  "messages.getEmojiProfilePhotoGroups": messages_getEmojiProfilePhotoGroups;
  "messages.searchCustomEmoji": messages_searchCustomEmoji;
  "messages.togglePeerTranslations": messages_togglePeerTranslations;
  "messages.getBotApp": messages_getBotApp;
  "messages.requestAppWebView": messages_requestAppWebView;
  "messages.setChatWallPaper": messages_setChatWallPaper;
  "messages.searchEmojiStickerSets": messages_searchEmojiStickerSets;
  "messages.getSavedDialogs": messages_getSavedDialogs;
  "messages.getSavedHistory": messages_getSavedHistory;
  "messages.deleteSavedHistory": messages_deleteSavedHistory;
  "messages.getPinnedSavedDialogs": messages_getPinnedSavedDialogs;
  "messages.toggleSavedDialogPin": messages_toggleSavedDialogPin;
  "messages.reorderPinnedSavedDialogs": messages_reorderPinnedSavedDialogs;
  "messages.getSavedReactionTags": messages_getSavedReactionTags;
  "messages.updateSavedReactionTag": messages_updateSavedReactionTag;
  "messages.getDefaultTagReactions": messages_getDefaultTagReactions;
  "messages.getOutboxReadDate": messages_getOutboxReadDate;
  "messages.getQuickReplies": messages_getQuickReplies;
  "messages.reorderQuickReplies": messages_reorderQuickReplies;
  "messages.checkQuickReplyShortcut": messages_checkQuickReplyShortcut;
  "messages.editQuickReplyShortcut": messages_editQuickReplyShortcut;
  "messages.deleteQuickReplyShortcut": messages_deleteQuickReplyShortcut;
  "messages.getQuickReplyMessages": messages_getQuickReplyMessages;
  "messages.sendQuickReplyMessages": messages_sendQuickReplyMessages;
  "messages.deleteQuickReplyMessages": messages_deleteQuickReplyMessages;
  "messages.toggleDialogFilterTags": messages_toggleDialogFilterTags;
  "messages.getMyStickers": messages_getMyStickers;
  "messages.getEmojiStickerGroups": messages_getEmojiStickerGroups;
  "messages.getAvailableEffects": messages_getAvailableEffects;
  "messages.editFactCheck": messages_editFactCheck;
  "messages.deleteFactCheck": messages_deleteFactCheck;
  "messages.getFactCheck": messages_getFactCheck;
  "messages.requestMainWebView": messages_requestMainWebView;
  "messages.sendPaidReaction": messages_sendPaidReaction;
  "messages.togglePaidReactionPrivacy": messages_togglePaidReactionPrivacy;
  "messages.getPaidReactionPrivacy": messages_getPaidReactionPrivacy;
  "messages.viewSponsoredMessage": messages_viewSponsoredMessage;
  "messages.clickSponsoredMessage": messages_clickSponsoredMessage;
  "messages.reportSponsoredMessage": messages_reportSponsoredMessage;
  "messages.getSponsoredMessages": messages_getSponsoredMessages;
  "messages.savePreparedInlineMessage": messages_savePreparedInlineMessage;
  "messages.getPreparedInlineMessage": messages_getPreparedInlineMessage;
  "messages.searchStickers": messages_searchStickers;
  "messages.reportMessagesDelivery": messages_reportMessagesDelivery;
  "updates.getState": updates_getState;
  "updates.getDifference": updates_getDifference;
  "updates.getChannelDifference": updates_getChannelDifference;
  "photos.updateProfilePhoto": photos_updateProfilePhoto;
  "photos.uploadProfilePhoto": photos_uploadProfilePhoto;
  "photos.deletePhotos": photos_deletePhotos;
  "photos.getUserPhotos": photos_getUserPhotos;
  "photos.uploadContactProfilePhoto": photos_uploadContactProfilePhoto;
  "upload.saveFilePart": upload_saveFilePart;
  "upload.getFile": upload_getFile;
  "upload.saveBigFilePart": upload_saveBigFilePart;
  "upload.getWebFile": upload_getWebFile;
  "upload.getCdnFile": upload_getCdnFile;
  "upload.reuploadCdnFile": upload_reuploadCdnFile;
  "upload.getCdnFileHashes": upload_getCdnFileHashes;
  "upload.getFileHashes": upload_getFileHashes;
  "help.getConfig": help_getConfig;
  "help.getNearestDc": help_getNearestDc;
  "help.getAppUpdate": help_getAppUpdate;
  "help.getInviteText": help_getInviteText;
  "help.getSupport": help_getSupport;
  "help.setBotUpdatesStatus": help_setBotUpdatesStatus;
  "help.getCdnConfig": help_getCdnConfig;
  "help.getRecentMeUrls": help_getRecentMeUrls;
  "help.getTermsOfServiceUpdate": help_getTermsOfServiceUpdate;
  "help.acceptTermsOfService": help_acceptTermsOfService;
  "help.getDeepLinkInfo": help_getDeepLinkInfo;
  "help.getAppConfig": help_getAppConfig;
  "help.saveAppLog": help_saveAppLog;
  "help.getPassportConfig": help_getPassportConfig;
  "help.getSupportName": help_getSupportName;
  "help.getUserInfo": help_getUserInfo;
  "help.editUserInfo": help_editUserInfo;
  "help.getPromoData": help_getPromoData;
  "help.hidePromoData": help_hidePromoData;
  "help.dismissSuggestion": help_dismissSuggestion;
  "help.getCountriesList": help_getCountriesList;
  "help.getPremiumPromo": help_getPremiumPromo;
  "help.getPeerColors": help_getPeerColors;
  "help.getPeerProfileColors": help_getPeerProfileColors;
  "help.getTimezonesList": help_getTimezonesList;
  "channels.readHistory": channels_readHistory;
  "channels.deleteMessages": channels_deleteMessages;
  "channels.reportSpam": channels_reportSpam;
  "channels.getMessages": channels_getMessages;
  "channels.getParticipants": channels_getParticipants;
  "channels.getParticipant": channels_getParticipant;
  "channels.getChannels": channels_getChannels;
  "channels.getFullChannel": channels_getFullChannel;
  "channels.createChannel": channels_createChannel;
  "channels.editAdmin": channels_editAdmin;
  "channels.editTitle": channels_editTitle;
  "channels.editPhoto": channels_editPhoto;
  "channels.checkUsername": channels_checkUsername;
  "channels.updateUsername": channels_updateUsername;
  "channels.joinChannel": channels_joinChannel;
  "channels.leaveChannel": channels_leaveChannel;
  "channels.inviteToChannel": channels_inviteToChannel;
  "channels.deleteChannel": channels_deleteChannel;
  "channels.exportMessageLink": channels_exportMessageLink;
  "channels.toggleSignatures": channels_toggleSignatures;
  "channels.getAdminedPublicChannels": channels_getAdminedPublicChannels;
  "channels.editBanned": channels_editBanned;
  "channels.getAdminLog": channels_getAdminLog;
  "channels.setStickers": channels_setStickers;
  "channels.readMessageContents": channels_readMessageContents;
  "channels.deleteHistory": channels_deleteHistory;
  "channels.togglePreHistoryHidden": channels_togglePreHistoryHidden;
  "channels.getLeftChannels": channels_getLeftChannels;
  "channels.getGroupsForDiscussion": channels_getGroupsForDiscussion;
  "channels.setDiscussionGroup": channels_setDiscussionGroup;
  "channels.editCreator": channels_editCreator;
  "channels.editLocation": channels_editLocation;
  "channels.toggleSlowMode": channels_toggleSlowMode;
  "channels.getInactiveChannels": channels_getInactiveChannels;
  "channels.convertToGigagroup": channels_convertToGigagroup;
  "channels.getSendAs": channels_getSendAs;
  "channels.deleteParticipantHistory": channels_deleteParticipantHistory;
  "channels.toggleJoinToSend": channels_toggleJoinToSend;
  "channels.toggleJoinRequest": channels_toggleJoinRequest;
  "channels.reorderUsernames": channels_reorderUsernames;
  "channels.toggleUsername": channels_toggleUsername;
  "channels.deactivateAllUsernames": channels_deactivateAllUsernames;
  "channels.toggleForum": channels_toggleForum;
  "channels.createForumTopic": channels_createForumTopic;
  "channels.getForumTopics": channels_getForumTopics;
  "channels.getForumTopicsByID": channels_getForumTopicsByID;
  "channels.editForumTopic": channels_editForumTopic;
  "channels.updatePinnedForumTopic": channels_updatePinnedForumTopic;
  "channels.deleteTopicHistory": channels_deleteTopicHistory;
  "channels.reorderPinnedForumTopics": channels_reorderPinnedForumTopics;
  "channels.toggleAntiSpam": channels_toggleAntiSpam;
  "channels.reportAntiSpamFalsePositive": channels_reportAntiSpamFalsePositive;
  "channels.toggleParticipantsHidden": channels_toggleParticipantsHidden;
  "channels.updateColor": channels_updateColor;
  "channels.toggleViewForumAsMessages": channels_toggleViewForumAsMessages;
  "channels.getChannelRecommendations": channels_getChannelRecommendations;
  "channels.updateEmojiStatus": channels_updateEmojiStatus;
  "channels.setBoostsToUnblockRestrictions": channels_setBoostsToUnblockRestrictions;
  "channels.setEmojiStickers": channels_setEmojiStickers;
  "channels.restrictSponsoredMessages": channels_restrictSponsoredMessages;
  "channels.searchPosts": channels_searchPosts;
  "channels.updatePaidMessagesPrice": channels_updatePaidMessagesPrice;
  "bots.sendCustomRequest": bots_sendCustomRequest;
  "bots.answerWebhookJSONQuery": bots_answerWebhookJSONQuery;
  "bots.setBotCommands": bots_setBotCommands;
  "bots.resetBotCommands": bots_resetBotCommands;
  "bots.getBotCommands": bots_getBotCommands;
  "bots.setBotMenuButton": bots_setBotMenuButton;
  "bots.getBotMenuButton": bots_getBotMenuButton;
  "bots.setBotBroadcastDefaultAdminRights": bots_setBotBroadcastDefaultAdminRights;
  "bots.setBotGroupDefaultAdminRights": bots_setBotGroupDefaultAdminRights;
  "bots.setBotInfo": bots_setBotInfo;
  "bots.getBotInfo": bots_getBotInfo;
  "bots.reorderUsernames": bots_reorderUsernames;
  "bots.toggleUsername": bots_toggleUsername;
  "bots.canSendMessage": bots_canSendMessage;
  "bots.allowSendMessage": bots_allowSendMessage;
  "bots.invokeWebViewCustomMethod": bots_invokeWebViewCustomMethod;
  "bots.getPopularAppBots": bots_getPopularAppBots;
  "bots.addPreviewMedia": bots_addPreviewMedia;
  "bots.editPreviewMedia": bots_editPreviewMedia;
  "bots.deletePreviewMedia": bots_deletePreviewMedia;
  "bots.reorderPreviewMedias": bots_reorderPreviewMedias;
  "bots.getPreviewInfo": bots_getPreviewInfo;
  "bots.getPreviewMedias": bots_getPreviewMedias;
  "bots.updateUserEmojiStatus": bots_updateUserEmojiStatus;
  "bots.toggleUserEmojiStatusPermission": bots_toggleUserEmojiStatusPermission;
  "bots.checkDownloadFileParams": bots_checkDownloadFileParams;
  "bots.getAdminedBots": bots_getAdminedBots;
  "bots.updateStarRefProgram": bots_updateStarRefProgram;
  "bots.setCustomVerification": bots_setCustomVerification;
  "bots.getBotRecommendations": bots_getBotRecommendations;
  "payments.getPaymentForm": payments_getPaymentForm;
  "payments.getPaymentReceipt": payments_getPaymentReceipt;
  "payments.validateRequestedInfo": payments_validateRequestedInfo;
  "payments.sendPaymentForm": payments_sendPaymentForm;
  "payments.getSavedInfo": payments_getSavedInfo;
  "payments.clearSavedInfo": payments_clearSavedInfo;
  "payments.getBankCardData": payments_getBankCardData;
  "payments.exportInvoice": payments_exportInvoice;
  "payments.assignAppStoreTransaction": payments_assignAppStoreTransaction;
  "payments.assignPlayMarketTransaction": payments_assignPlayMarketTransaction;
  "payments.canPurchasePremium": payments_canPurchasePremium;
  "payments.getPremiumGiftCodeOptions": payments_getPremiumGiftCodeOptions;
  "payments.checkGiftCode": payments_checkGiftCode;
  "payments.applyGiftCode": payments_applyGiftCode;
  "payments.getGiveawayInfo": payments_getGiveawayInfo;
  "payments.launchPrepaidGiveaway": payments_launchPrepaidGiveaway;
  "payments.getStarsTopupOptions": payments_getStarsTopupOptions;
  "payments.getStarsStatus": payments_getStarsStatus;
  "payments.getStarsTransactions": payments_getStarsTransactions;
  "payments.sendStarsForm": payments_sendStarsForm;
  "payments.refundStarsCharge": payments_refundStarsCharge;
  "payments.getStarsRevenueStats": payments_getStarsRevenueStats;
  "payments.getStarsRevenueWithdrawalUrl": payments_getStarsRevenueWithdrawalUrl;
  "payments.getStarsRevenueAdsAccountUrl": payments_getStarsRevenueAdsAccountUrl;
  "payments.getStarsTransactionsByID": payments_getStarsTransactionsByID;
  "payments.getStarsGiftOptions": payments_getStarsGiftOptions;
  "payments.getStarsSubscriptions": payments_getStarsSubscriptions;
  "payments.changeStarsSubscription": payments_changeStarsSubscription;
  "payments.fulfillStarsSubscription": payments_fulfillStarsSubscription;
  "payments.getStarsGiveawayOptions": payments_getStarsGiveawayOptions;
  "payments.getStarGifts": payments_getStarGifts;
  "payments.saveStarGift": payments_saveStarGift;
  "payments.convertStarGift": payments_convertStarGift;
  "payments.botCancelStarsSubscription": payments_botCancelStarsSubscription;
  "payments.getConnectedStarRefBots": payments_getConnectedStarRefBots;
  "payments.getConnectedStarRefBot": payments_getConnectedStarRefBot;
  "payments.getSuggestedStarRefBots": payments_getSuggestedStarRefBots;
  "payments.connectStarRefBot": payments_connectStarRefBot;
  "payments.editConnectedStarRefBot": payments_editConnectedStarRefBot;
  "payments.getStarGiftUpgradePreview": payments_getStarGiftUpgradePreview;
  "payments.upgradeStarGift": payments_upgradeStarGift;
  "payments.transferStarGift": payments_transferStarGift;
  "payments.getUniqueStarGift": payments_getUniqueStarGift;
  "payments.getSavedStarGifts": payments_getSavedStarGifts;
  "payments.getSavedStarGift": payments_getSavedStarGift;
  "payments.getStarGiftWithdrawalUrl": payments_getStarGiftWithdrawalUrl;
  "payments.toggleChatStarGiftNotifications": payments_toggleChatStarGiftNotifications;
  "payments.toggleStarGiftsPinnedToTop": payments_toggleStarGiftsPinnedToTop;
  "stickers.createStickerSet": stickers_createStickerSet;
  "stickers.removeStickerFromSet": stickers_removeStickerFromSet;
  "stickers.changeStickerPosition": stickers_changeStickerPosition;
  "stickers.addStickerToSet": stickers_addStickerToSet;
  "stickers.setStickerSetThumb": stickers_setStickerSetThumb;
  "stickers.checkShortName": stickers_checkShortName;
  "stickers.suggestShortName": stickers_suggestShortName;
  "stickers.changeSticker": stickers_changeSticker;
  "stickers.renameStickerSet": stickers_renameStickerSet;
  "stickers.deleteStickerSet": stickers_deleteStickerSet;
  "stickers.replaceSticker": stickers_replaceSticker;
  "phone.getCallConfig": phone_getCallConfig;
  "phone.requestCall": phone_requestCall;
  "phone.acceptCall": phone_acceptCall;
  "phone.confirmCall": phone_confirmCall;
  "phone.receivedCall": phone_receivedCall;
  "phone.discardCall": phone_discardCall;
  "phone.setCallRating": phone_setCallRating;
  "phone.saveCallDebug": phone_saveCallDebug;
  "phone.sendSignalingData": phone_sendSignalingData;
  "phone.createGroupCall": phone_createGroupCall;
  "phone.joinGroupCall": phone_joinGroupCall;
  "phone.leaveGroupCall": phone_leaveGroupCall;
  "phone.inviteToGroupCall": phone_inviteToGroupCall;
  "phone.discardGroupCall": phone_discardGroupCall;
  "phone.toggleGroupCallSettings": phone_toggleGroupCallSettings;
  "phone.getGroupCall": phone_getGroupCall;
  "phone.getGroupParticipants": phone_getGroupParticipants;
  "phone.checkGroupCall": phone_checkGroupCall;
  "phone.toggleGroupCallRecord": phone_toggleGroupCallRecord;
  "phone.editGroupCallParticipant": phone_editGroupCallParticipant;
  "phone.editGroupCallTitle": phone_editGroupCallTitle;
  "phone.getGroupCallJoinAs": phone_getGroupCallJoinAs;
  "phone.exportGroupCallInvite": phone_exportGroupCallInvite;
  "phone.toggleGroupCallStartSubscription": phone_toggleGroupCallStartSubscription;
  "phone.startScheduledGroupCall": phone_startScheduledGroupCall;
  "phone.saveDefaultGroupCallJoinAs": phone_saveDefaultGroupCallJoinAs;
  "phone.joinGroupCallPresentation": phone_joinGroupCallPresentation;
  "phone.leaveGroupCallPresentation": phone_leaveGroupCallPresentation;
  "phone.getGroupCallStreamChannels": phone_getGroupCallStreamChannels;
  "phone.getGroupCallStreamRtmpUrl": phone_getGroupCallStreamRtmpUrl;
  "phone.saveCallLog": phone_saveCallLog;
  "phone.createConferenceCall": phone_createConferenceCall;
  "langpack.getLangPack": langpack_getLangPack;
  "langpack.getStrings": langpack_getStrings;
  "langpack.getDifference": langpack_getDifference;
  "langpack.getLanguages": langpack_getLanguages;
  "langpack.getLanguage": langpack_getLanguage;
  "folders.editPeerFolders": folders_editPeerFolders;
  "stats.getBroadcastStats": stats_getBroadcastStats;
  "stats.loadAsyncGraph": stats_loadAsyncGraph;
  "stats.getMegagroupStats": stats_getMegagroupStats;
  "stats.getMessagePublicForwards": stats_getMessagePublicForwards;
  "stats.getMessageStats": stats_getMessageStats;
  "stats.getStoryStats": stats_getStoryStats;
  "stats.getStoryPublicForwards": stats_getStoryPublicForwards;
  "stats.getBroadcastRevenueStats": stats_getBroadcastRevenueStats;
  "stats.getBroadcastRevenueWithdrawalUrl": stats_getBroadcastRevenueWithdrawalUrl;
  "stats.getBroadcastRevenueTransactions": stats_getBroadcastRevenueTransactions;
  "chatlists.exportChatlistInvite": chatlists_exportChatlistInvite;
  "chatlists.deleteExportedInvite": chatlists_deleteExportedInvite;
  "chatlists.editExportedInvite": chatlists_editExportedInvite;
  "chatlists.getExportedInvites": chatlists_getExportedInvites;
  "chatlists.checkChatlistInvite": chatlists_checkChatlistInvite;
  "chatlists.joinChatlistInvite": chatlists_joinChatlistInvite;
  "chatlists.getChatlistUpdates": chatlists_getChatlistUpdates;
  "chatlists.joinChatlistUpdates": chatlists_joinChatlistUpdates;
  "chatlists.hideChatlistUpdates": chatlists_hideChatlistUpdates;
  "chatlists.getLeaveChatlistSuggestions": chatlists_getLeaveChatlistSuggestions;
  "chatlists.leaveChatlist": chatlists_leaveChatlist;
  "stories.canSendStory": stories_canSendStory;
  "stories.sendStory": stories_sendStory;
  "stories.editStory": stories_editStory;
  "stories.deleteStories": stories_deleteStories;
  "stories.togglePinned": stories_togglePinned;
  "stories.getAllStories": stories_getAllStories;
  "stories.getPinnedStories": stories_getPinnedStories;
  "stories.getStoriesArchive": stories_getStoriesArchive;
  "stories.getStoriesByID": stories_getStoriesByID;
  "stories.toggleAllStoriesHidden": stories_toggleAllStoriesHidden;
  "stories.readStories": stories_readStories;
  "stories.incrementStoryViews": stories_incrementStoryViews;
  "stories.getStoryViewsList": stories_getStoryViewsList;
  "stories.getStoriesViews": stories_getStoriesViews;
  "stories.exportStoryLink": stories_exportStoryLink;
  "stories.report": stories_report;
  "stories.activateStealthMode": stories_activateStealthMode;
  "stories.sendReaction": stories_sendReaction;
  "stories.getPeerStories": stories_getPeerStories;
  "stories.getAllReadPeerStories": stories_getAllReadPeerStories;
  "stories.getPeerMaxIDs": stories_getPeerMaxIDs;
  "stories.getChatsToSend": stories_getChatsToSend;
  "stories.togglePeerStoriesHidden": stories_togglePeerStoriesHidden;
  "stories.getStoryReactionsList": stories_getStoryReactionsList;
  "stories.togglePinnedToTop": stories_togglePinnedToTop;
  "stories.searchPosts": stories_searchPosts;
  "premium.getBoostsList": premium_getBoostsList;
  "premium.getMyBoosts": premium_getMyBoosts;
  "premium.applyBoost": premium_applyBoost;
  "premium.getBoostsStatus": premium_getBoostsStatus;
  "premium.getUserBoosts": premium_getUserBoosts;
  "smsjobs.isEligibleToJoin": smsjobs_isEligibleToJoin;
  "smsjobs.join": smsjobs_join;
  "smsjobs.leave": smsjobs_leave;
  "smsjobs.updateSettings": smsjobs_updateSettings;
  "smsjobs.getStatus": smsjobs_getStatus;
  "smsjobs.getSmsJob": smsjobs_getSmsJob;
  "smsjobs.finishJob": smsjobs_finishJob;
  "fragment.getCollectibleInfo": fragment_getCollectibleInfo;
}

export interface Enums {
  "ResPQ": ResPQ;
  "P_Q_inner_data": P_Q_inner_data;
  "Server_DH_Params": Server_DH_Params;
  "Server_DH_inner_data": Server_DH_inner_data;
  "Client_DH_Inner_Data": Client_DH_Inner_Data;
  "Set_client_DH_params_answer": Set_client_DH_params_answer;
  "BindAuthKeyInner": BindAuthKeyInner;
  "RpcError": RpcError;
  "RpcDropAnswer": RpcDropAnswer;
  "FutureSalt": FutureSalt;
  "FutureSalts": FutureSalts;
  "Pong": Pong;
  "DestroySessionRes": DestroySessionRes;
  "NewSession": NewSession;
  "Object": Object;
  "MsgsAck": MsgsAck;
  "BadMsgNotification": BadMsgNotification;
  "MsgResendReq": MsgResendReq;
  "MsgsStateReq": MsgsStateReq;
  "MsgsStateInfo": MsgsStateInfo;
  "MsgsAllInfo": MsgsAllInfo;
  "MsgDetailedInfo": MsgDetailedInfo;
  "DestroyAuthKeyRes": DestroyAuthKeyRes;
  "HttpWait": HttpWait;
  "True": True;
  "Error": Error;
  "IpPort": IpPort;
  "AccessPointRule": AccessPointRule;
  "help.ConfigSimple": help_ConfigSimple;
  "InputFileLocation": InputFileLocation;
  "InputPeer": InputPeer;
  "InputUser": InputUser;
  "InputContact": InputContact;
  "InputFile": InputFile;
  "InputMedia": InputMedia;
  "InputChatPhoto": InputChatPhoto;
  "InputGeoPoint": InputGeoPoint;
  "InputPhoto": InputPhoto;
  "Peer": Peer;
  "storage.FileType": storage_FileType;
  "User": User;
  "UserProfilePhoto": UserProfilePhoto;
  "UserStatus": UserStatus;
  "Chat": Chat;
  "ChatFull": ChatFull;
  "ChatParticipant": ChatParticipant;
  "ChatParticipants": ChatParticipants;
  "ChatPhoto": ChatPhoto;
  "Message": Message;
  "MessageMedia": MessageMedia;
  "MessageAction": MessageAction;
  "Dialog": Dialog;
  "Photo": Photo;
  "PhotoSize": PhotoSize;
  "GeoPoint": GeoPoint;
  "auth.SentCode": auth_SentCode;
  "auth.Authorization": auth_Authorization;
  "auth.ExportedAuthorization": auth_ExportedAuthorization;
  "InputNotifyPeer": InputNotifyPeer;
  "InputPeerNotifySettings": InputPeerNotifySettings;
  "PeerNotifySettings": PeerNotifySettings;
  "PeerSettings": PeerSettings;
  "WallPaper": WallPaper;
  "ReportReason": ReportReason;
  "UserFull": UserFull;
  "Contact": Contact;
  "ImportedContact": ImportedContact;
  "ContactStatus": ContactStatus;
  "contacts.Contacts": contacts_Contacts;
  "contacts.ImportedContacts": contacts_ImportedContacts;
  "contacts.Blocked": contacts_Blocked;
  "messages.Dialogs": messages_Dialogs;
  "messages.Messages": messages_Messages;
  "messages.Chats": messages_Chats;
  "messages.ChatFull": messages_ChatFull;
  "messages.AffectedHistory": messages_AffectedHistory;
  "MessagesFilter": MessagesFilter;
  "Update": Update;
  "updates.State": updates_State;
  "updates.Difference": updates_Difference;
  "Updates": Updates;
  "photos.Photos": photos_Photos;
  "photos.Photo": photos_Photo;
  "upload.File": upload_File;
  "DcOption": DcOption;
  "Config": Config;
  "NearestDc": NearestDc;
  "help.AppUpdate": help_AppUpdate;
  "help.InviteText": help_InviteText;
  "EncryptedChat": EncryptedChat;
  "InputEncryptedChat": InputEncryptedChat;
  "EncryptedFile": EncryptedFile;
  "InputEncryptedFile": InputEncryptedFile;
  "EncryptedMessage": EncryptedMessage;
  "messages.DhConfig": messages_DhConfig;
  "messages.SentEncryptedMessage": messages_SentEncryptedMessage;
  "InputDocument": InputDocument;
  "Document": Document;
  "help.Support": help_Support;
  "NotifyPeer": NotifyPeer;
  "SendMessageAction": SendMessageAction;
  "contacts.Found": contacts_Found;
  "InputPrivacyKey": InputPrivacyKey;
  "PrivacyKey": PrivacyKey;
  "InputPrivacyRule": InputPrivacyRule;
  "PrivacyRule": PrivacyRule;
  "account.PrivacyRules": account_PrivacyRules;
  "AccountDaysTTL": AccountDaysTTL;
  "DocumentAttribute": DocumentAttribute;
  "messages.Stickers": messages_Stickers;
  "StickerPack": StickerPack;
  "messages.AllStickers": messages_AllStickers;
  "messages.AffectedMessages": messages_AffectedMessages;
  "WebPage": WebPage;
  "Authorization": Authorization;
  "account.Authorizations": account_Authorizations;
  "account.Password": account_Password;
  "account.PasswordSettings": account_PasswordSettings;
  "account.PasswordInputSettings": account_PasswordInputSettings;
  "auth.PasswordRecovery": auth_PasswordRecovery;
  "ReceivedNotifyMessage": ReceivedNotifyMessage;
  "ExportedChatInvite": ExportedChatInvite;
  "ChatInvite": ChatInvite;
  "InputStickerSet": InputStickerSet;
  "StickerSet": StickerSet;
  "messages.StickerSet": messages_StickerSet;
  "BotCommand": BotCommand;
  "BotInfo": BotInfo;
  "KeyboardButton": KeyboardButton;
  "KeyboardButtonRow": KeyboardButtonRow;
  "ReplyMarkup": ReplyMarkup;
  "MessageEntity": MessageEntity;
  "InputChannel": InputChannel;
  "contacts.ResolvedPeer": contacts_ResolvedPeer;
  "MessageRange": MessageRange;
  "updates.ChannelDifference": updates_ChannelDifference;
  "ChannelMessagesFilter": ChannelMessagesFilter;
  "ChannelParticipant": ChannelParticipant;
  "ChannelParticipantsFilter": ChannelParticipantsFilter;
  "channels.ChannelParticipants": channels_ChannelParticipants;
  "channels.ChannelParticipant": channels_ChannelParticipant;
  "help.TermsOfService": help_TermsOfService;
  "messages.SavedGifs": messages_SavedGifs;
  "InputBotInlineMessage": InputBotInlineMessage;
  "InputBotInlineResult": InputBotInlineResult;
  "BotInlineMessage": BotInlineMessage;
  "BotInlineResult": BotInlineResult;
  "messages.BotResults": messages_BotResults;
  "ExportedMessageLink": ExportedMessageLink;
  "MessageFwdHeader": MessageFwdHeader;
  "auth.CodeType": auth_CodeType;
  "auth.SentCodeType": auth_SentCodeType;
  "messages.BotCallbackAnswer": messages_BotCallbackAnswer;
  "messages.MessageEditData": messages_MessageEditData;
  "InputBotInlineMessageID": InputBotInlineMessageID;
  "InlineBotSwitchPM": InlineBotSwitchPM;
  "messages.PeerDialogs": messages_PeerDialogs;
  "TopPeer": TopPeer;
  "TopPeerCategory": TopPeerCategory;
  "TopPeerCategoryPeers": TopPeerCategoryPeers;
  "contacts.TopPeers": contacts_TopPeers;
  "DraftMessage": DraftMessage;
  "messages.FeaturedStickers": messages_FeaturedStickers;
  "messages.RecentStickers": messages_RecentStickers;
  "messages.ArchivedStickers": messages_ArchivedStickers;
  "messages.StickerSetInstallResult": messages_StickerSetInstallResult;
  "StickerSetCovered": StickerSetCovered;
  "MaskCoords": MaskCoords;
  "InputStickeredMedia": InputStickeredMedia;
  "Game": Game;
  "InputGame": InputGame;
  "HighScore": HighScore;
  "messages.HighScores": messages_HighScores;
  "RichText": RichText;
  "PageBlock": PageBlock;
  "PhoneCallDiscardReason": PhoneCallDiscardReason;
  "DataJSON": DataJSON;
  "LabeledPrice": LabeledPrice;
  "Invoice": Invoice;
  "PaymentCharge": PaymentCharge;
  "PostAddress": PostAddress;
  "PaymentRequestedInfo": PaymentRequestedInfo;
  "PaymentSavedCredentials": PaymentSavedCredentials;
  "WebDocument": WebDocument;
  "InputWebDocument": InputWebDocument;
  "InputWebFileLocation": InputWebFileLocation;
  "upload.WebFile": upload_WebFile;
  "payments.PaymentForm": payments_PaymentForm;
  "payments.ValidatedRequestedInfo": payments_ValidatedRequestedInfo;
  "payments.PaymentResult": payments_PaymentResult;
  "payments.PaymentReceipt": payments_PaymentReceipt;
  "payments.SavedInfo": payments_SavedInfo;
  "InputPaymentCredentials": InputPaymentCredentials;
  "account.TmpPassword": account_TmpPassword;
  "ShippingOption": ShippingOption;
  "InputStickerSetItem": InputStickerSetItem;
  "InputPhoneCall": InputPhoneCall;
  "PhoneCall": PhoneCall;
  "PhoneConnection": PhoneConnection;
  "PhoneCallProtocol": PhoneCallProtocol;
  "phone.PhoneCall": phone_PhoneCall;
  "upload.CdnFile": upload_CdnFile;
  "CdnPublicKey": CdnPublicKey;
  "CdnConfig": CdnConfig;
  "LangPackString": LangPackString;
  "LangPackDifference": LangPackDifference;
  "LangPackLanguage": LangPackLanguage;
  "ChannelAdminLogEventAction": ChannelAdminLogEventAction;
  "ChannelAdminLogEvent": ChannelAdminLogEvent;
  "channels.AdminLogResults": channels_AdminLogResults;
  "ChannelAdminLogEventsFilter": ChannelAdminLogEventsFilter;
  "PopularContact": PopularContact;
  "messages.FavedStickers": messages_FavedStickers;
  "RecentMeUrl": RecentMeUrl;
  "help.RecentMeUrls": help_RecentMeUrls;
  "InputSingleMedia": InputSingleMedia;
  "WebAuthorization": WebAuthorization;
  "account.WebAuthorizations": account_WebAuthorizations;
  "InputMessage": InputMessage;
  "InputDialogPeer": InputDialogPeer;
  "DialogPeer": DialogPeer;
  "messages.FoundStickerSets": messages_FoundStickerSets;
  "FileHash": FileHash;
  "InputClientProxy": InputClientProxy;
  "help.TermsOfServiceUpdate": help_TermsOfServiceUpdate;
  "InputSecureFile": InputSecureFile;
  "SecureFile": SecureFile;
  "SecureData": SecureData;
  "SecurePlainData": SecurePlainData;
  "SecureValueType": SecureValueType;
  "SecureValue": SecureValue;
  "InputSecureValue": InputSecureValue;
  "SecureValueHash": SecureValueHash;
  "SecureValueError": SecureValueError;
  "SecureCredentialsEncrypted": SecureCredentialsEncrypted;
  "account.AuthorizationForm": account_AuthorizationForm;
  "account.SentEmailCode": account_SentEmailCode;
  "help.DeepLinkInfo": help_DeepLinkInfo;
  "SavedContact": SavedContact;
  "account.Takeout": account_Takeout;
  "PasswordKdfAlgo": PasswordKdfAlgo;
  "SecurePasswordKdfAlgo": SecurePasswordKdfAlgo;
  "SecureSecretSettings": SecureSecretSettings;
  "InputCheckPasswordSRP": InputCheckPasswordSRP;
  "SecureRequiredType": SecureRequiredType;
  "help.PassportConfig": help_PassportConfig;
  "InputAppEvent": InputAppEvent;
  "JSONObjectValue": JSONObjectValue;
  "JSONValue": JSONValue;
  "PageTableCell": PageTableCell;
  "PageTableRow": PageTableRow;
  "PageCaption": PageCaption;
  "PageListItem": PageListItem;
  "PageListOrderedItem": PageListOrderedItem;
  "PageRelatedArticle": PageRelatedArticle;
  "Page": Page;
  "help.SupportName": help_SupportName;
  "help.UserInfo": help_UserInfo;
  "PollAnswer": PollAnswer;
  "Poll": Poll;
  "PollAnswerVoters": PollAnswerVoters;
  "PollResults": PollResults;
  "ChatOnlines": ChatOnlines;
  "StatsURL": StatsURL;
  "ChatAdminRights": ChatAdminRights;
  "ChatBannedRights": ChatBannedRights;
  "InputWallPaper": InputWallPaper;
  "account.WallPapers": account_WallPapers;
  "CodeSettings": CodeSettings;
  "WallPaperSettings": WallPaperSettings;
  "AutoDownloadSettings": AutoDownloadSettings;
  "account.AutoDownloadSettings": account_AutoDownloadSettings;
  "EmojiKeyword": EmojiKeyword;
  "EmojiKeywordsDifference": EmojiKeywordsDifference;
  "EmojiURL": EmojiURL;
  "EmojiLanguage": EmojiLanguage;
  "Folder": Folder;
  "InputFolderPeer": InputFolderPeer;
  "FolderPeer": FolderPeer;
  "messages.SearchCounter": messages_SearchCounter;
  "UrlAuthResult": UrlAuthResult;
  "ChannelLocation": ChannelLocation;
  "PeerLocated": PeerLocated;
  "RestrictionReason": RestrictionReason;
  "InputTheme": InputTheme;
  "Theme": Theme;
  "account.Themes": account_Themes;
  "auth.LoginToken": auth_LoginToken;
  "account.ContentSettings": account_ContentSettings;
  "messages.InactiveChats": messages_InactiveChats;
  "BaseTheme": BaseTheme;
  "InputThemeSettings": InputThemeSettings;
  "ThemeSettings": ThemeSettings;
  "WebPageAttribute": WebPageAttribute;
  "messages.VotesList": messages_VotesList;
  "BankCardOpenUrl": BankCardOpenUrl;
  "payments.BankCardData": payments_BankCardData;
  "DialogFilter": DialogFilter;
  "DialogFilterSuggested": DialogFilterSuggested;
  "StatsDateRangeDays": StatsDateRangeDays;
  "StatsAbsValueAndPrev": StatsAbsValueAndPrev;
  "StatsPercentValue": StatsPercentValue;
  "StatsGraph": StatsGraph;
  "stats.BroadcastStats": stats_BroadcastStats;
  "help.PromoData": help_PromoData;
  "VideoSize": VideoSize;
  "StatsGroupTopPoster": StatsGroupTopPoster;
  "StatsGroupTopAdmin": StatsGroupTopAdmin;
  "StatsGroupTopInviter": StatsGroupTopInviter;
  "stats.MegagroupStats": stats_MegagroupStats;
  "GlobalPrivacySettings": GlobalPrivacySettings;
  "help.CountryCode": help_CountryCode;
  "help.Country": help_Country;
  "help.CountriesList": help_CountriesList;
  "MessageViews": MessageViews;
  "messages.MessageViews": messages_MessageViews;
  "messages.DiscussionMessage": messages_DiscussionMessage;
  "MessageReplyHeader": MessageReplyHeader;
  "MessageReplies": MessageReplies;
  "PeerBlocked": PeerBlocked;
  "stats.MessageStats": stats_MessageStats;
  "GroupCall": GroupCall;
  "InputGroupCall": InputGroupCall;
  "GroupCallParticipant": GroupCallParticipant;
  "phone.GroupCall": phone_GroupCall;
  "phone.GroupParticipants": phone_GroupParticipants;
  "InlineQueryPeerType": InlineQueryPeerType;
  "messages.HistoryImport": messages_HistoryImport;
  "messages.HistoryImportParsed": messages_HistoryImportParsed;
  "messages.AffectedFoundMessages": messages_AffectedFoundMessages;
  "ChatInviteImporter": ChatInviteImporter;
  "messages.ExportedChatInvites": messages_ExportedChatInvites;
  "messages.ExportedChatInvite": messages_ExportedChatInvite;
  "messages.ChatInviteImporters": messages_ChatInviteImporters;
  "ChatAdminWithInvites": ChatAdminWithInvites;
  "messages.ChatAdminsWithInvites": messages_ChatAdminsWithInvites;
  "messages.CheckedHistoryImportPeer": messages_CheckedHistoryImportPeer;
  "phone.JoinAsPeers": phone_JoinAsPeers;
  "phone.ExportedGroupCallInvite": phone_ExportedGroupCallInvite;
  "GroupCallParticipantVideoSourceGroup": GroupCallParticipantVideoSourceGroup;
  "GroupCallParticipantVideo": GroupCallParticipantVideo;
  "stickers.SuggestedShortName": stickers_SuggestedShortName;
  "BotCommandScope": BotCommandScope;
  "account.ResetPasswordResult": account_ResetPasswordResult;
  "SponsoredMessage": SponsoredMessage;
  "messages.SponsoredMessages": messages_SponsoredMessages;
  "SearchResultsCalendarPeriod": SearchResultsCalendarPeriod;
  "messages.SearchResultsCalendar": messages_SearchResultsCalendar;
  "SearchResultsPosition": SearchResultsPosition;
  "messages.SearchResultsPositions": messages_SearchResultsPositions;
  "channels.SendAsPeers": channels_SendAsPeers;
  "users.UserFull": users_UserFull;
  "messages.PeerSettings": messages_PeerSettings;
  "auth.LoggedOut": auth_LoggedOut;
  "ReactionCount": ReactionCount;
  "MessageReactions": MessageReactions;
  "messages.MessageReactionsList": messages_MessageReactionsList;
  "AvailableReaction": AvailableReaction;
  "messages.AvailableReactions": messages_AvailableReactions;
  "MessagePeerReaction": MessagePeerReaction;
  "GroupCallStreamChannel": GroupCallStreamChannel;
  "phone.GroupCallStreamChannels": phone_GroupCallStreamChannels;
  "phone.GroupCallStreamRtmpUrl": phone_GroupCallStreamRtmpUrl;
  "AttachMenuBotIconColor": AttachMenuBotIconColor;
  "AttachMenuBotIcon": AttachMenuBotIcon;
  "AttachMenuBot": AttachMenuBot;
  "AttachMenuBots": AttachMenuBots;
  "AttachMenuBotsBot": AttachMenuBotsBot;
  "WebViewResult": WebViewResult;
  "WebViewMessageSent": WebViewMessageSent;
  "BotMenuButton": BotMenuButton;
  "account.SavedRingtones": account_SavedRingtones;
  "NotificationSound": NotificationSound;
  "account.SavedRingtone": account_SavedRingtone;
  "AttachMenuPeerType": AttachMenuPeerType;
  "InputInvoice": InputInvoice;
  "payments.ExportedInvoice": payments_ExportedInvoice;
  "messages.TranscribedAudio": messages_TranscribedAudio;
  "help.PremiumPromo": help_PremiumPromo;
  "InputStorePaymentPurpose": InputStorePaymentPurpose;
  "PaymentFormMethod": PaymentFormMethod;
  "EmojiStatus": EmojiStatus;
  "account.EmojiStatuses": account_EmojiStatuses;
  "Reaction": Reaction;
  "ChatReactions": ChatReactions;
  "messages.Reactions": messages_Reactions;
  "EmailVerifyPurpose": EmailVerifyPurpose;
  "EmailVerification": EmailVerification;
  "account.EmailVerified": account_EmailVerified;
  "PremiumSubscriptionOption": PremiumSubscriptionOption;
  "SendAsPeer": SendAsPeer;
  "MessageExtendedMedia": MessageExtendedMedia;
  "StickerKeyword": StickerKeyword;
  "Username": Username;
  "ForumTopic": ForumTopic;
  "messages.ForumTopics": messages_ForumTopics;
  "DefaultHistoryTTL": DefaultHistoryTTL;
  "ExportedContactToken": ExportedContactToken;
  "RequestPeerType": RequestPeerType;
  "EmojiList": EmojiList;
  "EmojiGroup": EmojiGroup;
  "messages.EmojiGroups": messages_EmojiGroups;
  "TextWithEntities": TextWithEntities;
  "messages.TranslatedText": messages_TranslatedText;
  "AutoSaveSettings": AutoSaveSettings;
  "AutoSaveException": AutoSaveException;
  "account.AutoSaveSettings": account_AutoSaveSettings;
  "help.AppConfig": help_AppConfig;
  "InputBotApp": InputBotApp;
  "BotApp": BotApp;
  "messages.BotApp": messages_BotApp;
  "InlineBotWebView": InlineBotWebView;
  "ReadParticipantDate": ReadParticipantDate;
  "InputChatlist": InputChatlist;
  "ExportedChatlistInvite": ExportedChatlistInvite;
  "chatlists.ExportedChatlistInvite": chatlists_ExportedChatlistInvite;
  "chatlists.ExportedInvites": chatlists_ExportedInvites;
  "chatlists.ChatlistInvite": chatlists_ChatlistInvite;
  "chatlists.ChatlistUpdates": chatlists_ChatlistUpdates;
  "bots.BotInfo": bots_BotInfo;
  "MessagePeerVote": MessagePeerVote;
  "StoryViews": StoryViews;
  "StoryItem": StoryItem;
  "stories.AllStories": stories_AllStories;
  "stories.Stories": stories_Stories;
  "StoryView": StoryView;
  "stories.StoryViewsList": stories_StoryViewsList;
  "stories.StoryViews": stories_StoryViews;
  "InputReplyTo": InputReplyTo;
  "ExportedStoryLink": ExportedStoryLink;
  "StoriesStealthMode": StoriesStealthMode;
  "MediaAreaCoordinates": MediaAreaCoordinates;
  "MediaArea": MediaArea;
  "PeerStories": PeerStories;
  "stories.PeerStories": stories_PeerStories;
  "messages.WebPage": messages_WebPage;
  "PremiumGiftCodeOption": PremiumGiftCodeOption;
  "payments.CheckedGiftCode": payments_CheckedGiftCode;
  "payments.GiveawayInfo": payments_GiveawayInfo;
  "PrepaidGiveaway": PrepaidGiveaway;
  "Boost": Boost;
  "premium.BoostsList": premium_BoostsList;
  "MyBoost": MyBoost;
  "premium.MyBoosts": premium_MyBoosts;
  "premium.BoostsStatus": premium_BoostsStatus;
  "StoryFwdHeader": StoryFwdHeader;
  "PostInteractionCounters": PostInteractionCounters;
  "stats.StoryStats": stats_StoryStats;
  "PublicForward": PublicForward;
  "stats.PublicForwards": stats_PublicForwards;
  "PeerColor": PeerColor;
  "help.PeerColorSet": help_PeerColorSet;
  "help.PeerColorOption": help_PeerColorOption;
  "help.PeerColors": help_PeerColors;
  "StoryReaction": StoryReaction;
  "stories.StoryReactionsList": stories_StoryReactionsList;
  "SavedDialog": SavedDialog;
  "messages.SavedDialogs": messages_SavedDialogs;
  "SavedReactionTag": SavedReactionTag;
  "messages.SavedReactionTags": messages_SavedReactionTags;
  "OutboxReadDate": OutboxReadDate;
  "smsjobs.EligibilityToJoin": smsjobs_EligibilityToJoin;
  "smsjobs.Status": smsjobs_Status;
  "SmsJob": SmsJob;
  "BusinessWeeklyOpen": BusinessWeeklyOpen;
  "BusinessWorkHours": BusinessWorkHours;
  "BusinessLocation": BusinessLocation;
  "InputBusinessRecipients": InputBusinessRecipients;
  "BusinessRecipients": BusinessRecipients;
  "BusinessAwayMessageSchedule": BusinessAwayMessageSchedule;
  "InputBusinessGreetingMessage": InputBusinessGreetingMessage;
  "BusinessGreetingMessage": BusinessGreetingMessage;
  "InputBusinessAwayMessage": InputBusinessAwayMessage;
  "BusinessAwayMessage": BusinessAwayMessage;
  "Timezone": Timezone;
  "help.TimezonesList": help_TimezonesList;
  "QuickReply": QuickReply;
  "InputQuickReplyShortcut": InputQuickReplyShortcut;
  "messages.QuickReplies": messages_QuickReplies;
  "ConnectedBot": ConnectedBot;
  "account.ConnectedBots": account_ConnectedBots;
  "messages.DialogFilters": messages_DialogFilters;
  "Birthday": Birthday;
  "BotBusinessConnection": BotBusinessConnection;
  "InputBusinessIntro": InputBusinessIntro;
  "BusinessIntro": BusinessIntro;
  "messages.MyStickers": messages_MyStickers;
  "InputCollectible": InputCollectible;
  "fragment.CollectibleInfo": fragment_CollectibleInfo;
  "InputBusinessBotRecipients": InputBusinessBotRecipients;
  "BusinessBotRecipients": BusinessBotRecipients;
  "ContactBirthday": ContactBirthday;
  "contacts.ContactBirthdays": contacts_ContactBirthdays;
  "MissingInvitee": MissingInvitee;
  "messages.InvitedUsers": messages_InvitedUsers;
  "InputBusinessChatLink": InputBusinessChatLink;
  "BusinessChatLink": BusinessChatLink;
  "account.BusinessChatLinks": account_BusinessChatLinks;
  "account.ResolvedBusinessChatLinks": account_ResolvedBusinessChatLinks;
  "RequestedPeer": RequestedPeer;
  "SponsoredMessageReportOption": SponsoredMessageReportOption;
  "channels.SponsoredMessageReportResult": channels_SponsoredMessageReportResult;
  "stats.BroadcastRevenueStats": stats_BroadcastRevenueStats;
  "stats.BroadcastRevenueWithdrawalUrl": stats_BroadcastRevenueWithdrawalUrl;
  "BroadcastRevenueTransaction": BroadcastRevenueTransaction;
  "stats.BroadcastRevenueTransactions": stats_BroadcastRevenueTransactions;
  "ReactionNotificationsFrom": ReactionNotificationsFrom;
  "ReactionsNotifySettings": ReactionsNotifySettings;
  "BroadcastRevenueBalances": BroadcastRevenueBalances;
  "AvailableEffect": AvailableEffect;
  "messages.AvailableEffects": messages_AvailableEffects;
  "FactCheck": FactCheck;
  "StarsTransactionPeer": StarsTransactionPeer;
  "StarsTopupOption": StarsTopupOption;
  "StarsTransaction": StarsTransaction;
  "payments.StarsStatus": payments_StarsStatus;
  "FoundStory": FoundStory;
  "stories.FoundStories": stories_FoundStories;
  "GeoPointAddress": GeoPointAddress;
  "StarsRevenueStatus": StarsRevenueStatus;
  "payments.StarsRevenueStats": payments_StarsRevenueStats;
  "payments.StarsRevenueWithdrawalUrl": payments_StarsRevenueWithdrawalUrl;
  "payments.StarsRevenueAdsAccountUrl": payments_StarsRevenueAdsAccountUrl;
  "InputStarsTransaction": InputStarsTransaction;
  "StarsGiftOption": StarsGiftOption;
  "bots.PopularAppBots": bots_PopularAppBots;
  "BotPreviewMedia": BotPreviewMedia;
  "bots.PreviewInfo": bots_PreviewInfo;
  "StarsSubscriptionPricing": StarsSubscriptionPricing;
  "StarsSubscription": StarsSubscription;
  "MessageReactor": MessageReactor;
  "StarsGiveawayOption": StarsGiveawayOption;
  "StarsGiveawayWinnersOption": StarsGiveawayWinnersOption;
  "StarGift": StarGift;
  "payments.StarGifts": payments_StarGifts;
  "MessageReportOption": MessageReportOption;
  "ReportResult": ReportResult;
  "messages.BotPreparedInlineMessage": messages_BotPreparedInlineMessage;
  "messages.PreparedInlineMessage": messages_PreparedInlineMessage;
  "BotAppSettings": BotAppSettings;
  "StarRefProgram": StarRefProgram;
  "ConnectedBotStarRef": ConnectedBotStarRef;
  "payments.ConnectedStarRefBots": payments_ConnectedStarRefBots;
  "payments.SuggestedStarRefBots": payments_SuggestedStarRefBots;
  "StarsAmount": StarsAmount;
  "messages.FoundStickers": messages_FoundStickers;
  "BotVerifierSettings": BotVerifierSettings;
  "BotVerification": BotVerification;
  "StarGiftAttribute": StarGiftAttribute;
  "payments.StarGiftUpgradePreview": payments_StarGiftUpgradePreview;
  "users.Users": users_Users;
  "payments.UniqueStarGift": payments_UniqueStarGift;
  "messages.WebPagePreview": messages_WebPagePreview;
  "SavedStarGift": SavedStarGift;
  "payments.SavedStarGifts": payments_SavedStarGifts;
  "InputSavedStarGift": InputSavedStarGift;
  "payments.StarGiftWithdrawalUrl": payments_StarGiftWithdrawalUrl;
  "PaidReactionPrivacy": PaidReactionPrivacy;
  "account.PaidMessagesRevenue": account_PaidMessagesRevenue;
  "RequirementToContact": RequirementToContact;
}

export type AnyType = Types[keyof Types];

export type AnyFunction<T = Function> = Functions<T>[keyof Functions<T>];

export type AnyGenericFunction<T> = invokeAfterMsg<T> | invokeAfterMsgs<T> | initConnection<T> | invokeWithLayer<T> | invokeWithoutUpdates<T> | invokeWithMessagesRange<T> | invokeWithTakeout<T> | invokeWithBusinessConnection<T> | invokeWithGooglePlayIntegrity<T> | invokeWithApnsSecret<T> | invokeWithReCaptcha<T>;

export type AnyObject<T = Function> = AnyType | AnyFunction<T>;

export type ResPQ = resPQ;

export type P_Q_inner_data = p_q_inner_data_dc | p_q_inner_data_temp_dc;

export type Server_DH_Params = server_DH_params_ok;

export type Server_DH_inner_data = server_DH_inner_data;

export type Client_DH_Inner_Data = client_DH_inner_data;

export type Set_client_DH_params_answer = dh_gen_ok | dh_gen_retry | dh_gen_fail;

export type BindAuthKeyInner = bind_auth_key_inner;

export type RpcError = rpc_error;

export type RpcDropAnswer = rpc_answer_unknown | rpc_answer_dropped_running | rpc_answer_dropped;

export type FutureSalt = future_salt;

export type FutureSalts = future_salts;

export type Pong = pong;

export type DestroySessionRes = destroy_session_ok | destroy_session_none;

export type NewSession = new_session_created;

export type Object = gzip_packed;

export type MsgsAck = msgs_ack;

export type BadMsgNotification = bad_msg_notification | bad_server_salt;

export type MsgResendReq = msg_resend_req;

export type MsgsStateReq = msgs_state_req;

export type MsgsStateInfo = msgs_state_info;

export type MsgsAllInfo = msgs_all_info;

export type MsgDetailedInfo = msg_detailed_info | msg_new_detailed_info;

export type DestroyAuthKeyRes = destroy_auth_key_ok | destroy_auth_key_none | destroy_auth_key_fail;

export type HttpWait = http_wait;

export type True = true_;

export type Error = error;

export type IpPort = ipPort | ipPortSecret;

export type AccessPointRule = accessPointRule;

export type help_ConfigSimple = help_configSimple;

export type InputFileLocation = inputPeerPhotoFileLocationLegacy | inputStickerSetThumbLegacy | inputFileLocation | inputEncryptedFileLocation | inputDocumentFileLocation | inputSecureFileLocation | inputTakeoutFileLocation | inputPhotoFileLocation | inputPhotoLegacyFileLocation | inputPeerPhotoFileLocation | inputStickerSetThumb | inputGroupCallStream;

export type InputPeer = inputPeerEmpty | inputPeerSelf | inputPeerChat | inputPeerUser | inputPeerChannel | inputPeerUserFromMessage | inputPeerChannelFromMessage;

export type InputUser = inputUserEmpty | inputUserSelf | inputUser | inputUserFromMessage;

export type InputContact = inputPhoneContact;

export type InputFile = inputFile | inputFileBig | inputFileStoryDocument;

export type InputMedia = inputMediaEmpty | inputMediaUploadedPhoto | inputMediaPhoto | inputMediaGeoPoint | inputMediaContact | inputMediaUploadedDocument | inputMediaDocument | inputMediaVenue | inputMediaPhotoExternal | inputMediaDocumentExternal | inputMediaGame | inputMediaInvoice | inputMediaGeoLive | inputMediaPoll | inputMediaDice | inputMediaStory | inputMediaWebPage | inputMediaPaidMedia;

export type InputChatPhoto = inputChatPhotoEmpty | inputChatUploadedPhoto | inputChatPhoto;

export type InputGeoPoint = inputGeoPointEmpty | inputGeoPoint;

export type InputPhoto = inputPhotoEmpty | inputPhoto;

export type Peer = peerUser | peerChat | peerChannel;

export type storage_FileType = storage_fileUnknown | storage_filePartial | storage_fileJpeg | storage_fileGif | storage_filePng | storage_filePdf | storage_fileMp3 | storage_fileMov | storage_fileMp4 | storage_fileWebp;

export type User = userEmpty | user;

export type UserProfilePhoto = userProfilePhotoEmpty | userProfilePhoto;

export type UserStatus = userStatusEmpty | userStatusOnline | userStatusOffline | userStatusRecently | userStatusLastWeek | userStatusLastMonth;

export type Chat = chatEmpty | chat | chatForbidden | channel | channelForbidden;

export type ChatFull = chatFull | channelFull;

export type ChatParticipant = chatParticipant | chatParticipantCreator | chatParticipantAdmin;

export type ChatParticipants = chatParticipantsForbidden | chatParticipants;

export type ChatPhoto = chatPhotoEmpty | chatPhoto;

export type Message = messageEmpty | message | messageService;

export type MessageMedia = messageMediaEmpty | messageMediaPhoto | messageMediaGeo | messageMediaContact | messageMediaUnsupported | messageMediaDocument | messageMediaWebPage | messageMediaVenue | messageMediaGame | messageMediaInvoice | messageMediaGeoLive | messageMediaPoll | messageMediaDice | messageMediaStory | messageMediaGiveaway | messageMediaGiveawayResults | messageMediaPaidMedia;

export type MessageAction = messageActionEmpty | messageActionChatCreate | messageActionChatEditTitle | messageActionChatEditPhoto | messageActionChatDeletePhoto | messageActionChatAddUser | messageActionChatDeleteUser | messageActionChatJoinedByLink | messageActionChannelCreate | messageActionChatMigrateTo | messageActionChannelMigrateFrom | messageActionPinMessage | messageActionHistoryClear | messageActionGameScore | messageActionPaymentSentMe | messageActionPaymentSent | messageActionPhoneCall | messageActionScreenshotTaken | messageActionCustomAction | messageActionBotAllowed | messageActionSecureValuesSentMe | messageActionSecureValuesSent | messageActionContactSignUp | messageActionGeoProximityReached | messageActionGroupCall | messageActionInviteToGroupCall | messageActionSetMessagesTTL | messageActionGroupCallScheduled | messageActionSetChatTheme | messageActionChatJoinedByRequest | messageActionWebViewDataSentMe | messageActionWebViewDataSent | messageActionGiftPremium | messageActionTopicCreate | messageActionTopicEdit | messageActionSuggestProfilePhoto | messageActionRequestedPeer | messageActionSetChatWallPaper | messageActionGiftCode | messageActionGiveawayLaunch | messageActionGiveawayResults | messageActionBoostApply | messageActionRequestedPeerSentMe | messageActionPaymentRefunded | messageActionGiftStars | messageActionPrizeStars | messageActionStarGift | messageActionStarGiftUnique;

export type Dialog = dialog | dialogFolder;

export type Photo = photoEmpty | photo;

export type PhotoSize = photoSizeEmpty | photoSize | photoCachedSize | photoStrippedSize | photoSizeProgressive | photoPathSize;

export type GeoPoint = geoPointEmpty | geoPoint;

export type auth_SentCode = auth_sentCode | auth_sentCodeSuccess;

export type auth_Authorization = auth_authorization | auth_authorizationSignUpRequired;

export type auth_ExportedAuthorization = auth_exportedAuthorization;

export type InputNotifyPeer = inputNotifyPeer | inputNotifyUsers | inputNotifyChats | inputNotifyBroadcasts | inputNotifyForumTopic;

export type InputPeerNotifySettings = inputPeerNotifySettings;

export type PeerNotifySettings = peerNotifySettings;

export type PeerSettings = peerSettings;

export type WallPaper = wallPaper | wallPaperNoFile;

export type ReportReason = inputReportReasonSpam | inputReportReasonViolence | inputReportReasonPornography | inputReportReasonChildAbuse | inputReportReasonOther | inputReportReasonCopyright | inputReportReasonGeoIrrelevant | inputReportReasonFake | inputReportReasonIllegalDrugs | inputReportReasonPersonalDetails;

export type UserFull = userFull;

export type Contact = contact;

export type ImportedContact = importedContact;

export type ContactStatus = contactStatus;

export type contacts_Contacts = contacts_contactsNotModified | contacts_contacts;

export type contacts_ImportedContacts = contacts_importedContacts;

export type contacts_Blocked = contacts_blocked | contacts_blockedSlice;

export type messages_Dialogs = messages_dialogs | messages_dialogsSlice | messages_dialogsNotModified;

export type messages_Messages = messages_messages | messages_messagesSlice | messages_channelMessages | messages_messagesNotModified;

export type messages_Chats = messages_chats | messages_chatsSlice;

export type messages_ChatFull = messages_chatFull;

export type messages_AffectedHistory = messages_affectedHistory;

export type MessagesFilter = inputMessagesFilterEmpty | inputMessagesFilterPhotos | inputMessagesFilterVideo | inputMessagesFilterPhotoVideo | inputMessagesFilterDocument | inputMessagesFilterUrl | inputMessagesFilterGif | inputMessagesFilterVoice | inputMessagesFilterMusic | inputMessagesFilterChatPhotos | inputMessagesFilterPhoneCalls | inputMessagesFilterRoundVoice | inputMessagesFilterRoundVideo | inputMessagesFilterMyMentions | inputMessagesFilterGeo | inputMessagesFilterContacts | inputMessagesFilterPinned;

export type Update =
  | updateNewMessage
  | updateMessageID
  | updateDeleteMessages
  | updateUserTyping
  | updateChatUserTyping
  | updateChatParticipants
  | updateUserStatus
  | updateUserName
  | updateNewAuthorization
  | updateNewEncryptedMessage
  | updateEncryptedChatTyping
  | updateEncryption
  | updateEncryptedMessagesRead
  | updateChatParticipantAdd
  | updateChatParticipantDelete
  | updateDcOptions
  | updateNotifySettings
  | updateServiceNotification
  | updatePrivacy
  | updateUserPhone
  | updateReadHistoryInbox
  | updateReadHistoryOutbox
  | updateWebPage
  | updateReadMessagesContents
  | updateChannelTooLong
  | updateChannel
  | updateNewChannelMessage
  | updateReadChannelInbox
  | updateDeleteChannelMessages
  | updateChannelMessageViews
  | updateChatParticipantAdmin
  | updateNewStickerSet
  | updateStickerSetsOrder
  | updateStickerSets
  | updateSavedGifs
  | updateBotInlineQuery
  | updateBotInlineSend
  | updateEditChannelMessage
  | updateBotCallbackQuery
  | updateEditMessage
  | updateInlineBotCallbackQuery
  | updateReadChannelOutbox
  | updateDraftMessage
  | updateReadFeaturedStickers
  | updateRecentStickers
  | updateConfig
  | updatePtsChanged
  | updateChannelWebPage
  | updateDialogPinned
  | updatePinnedDialogs
  | updateBotWebhookJSON
  | updateBotWebhookJSONQuery
  | updateBotShippingQuery
  | updateBotPrecheckoutQuery
  | updatePhoneCall
  | updateLangPackTooLong
  | updateLangPack
  | updateFavedStickers
  | updateChannelReadMessagesContents
  | updateContactsReset
  | updateChannelAvailableMessages
  | updateDialogUnreadMark
  | updateMessagePoll
  | updateChatDefaultBannedRights
  | updateFolderPeers
  | updatePeerSettings
  | updatePeerLocated
  | updateNewScheduledMessage
  | updateDeleteScheduledMessages
  | updateTheme
  | updateGeoLiveViewed
  | updateLoginToken
  | updateMessagePollVote
  | updateDialogFilter
  | updateDialogFilterOrder
  | updateDialogFilters
  | updatePhoneCallSignalingData
  | updateChannelMessageForwards
  | updateReadChannelDiscussionInbox
  | updateReadChannelDiscussionOutbox
  | updatePeerBlocked
  | updateChannelUserTyping
  | updatePinnedMessages
  | updatePinnedChannelMessages
  | updateChat
  | updateGroupCallParticipants
  | updateGroupCall
  | updatePeerHistoryTTL
  | updateChatParticipant
  | updateChannelParticipant
  | updateBotStopped
  | updateGroupCallConnection
  | updateBotCommands
  | updatePendingJoinRequests
  | updateBotChatInviteRequester
  | updateMessageReactions
  | updateAttachMenuBots
  | updateWebViewResultSent
  | updateBotMenuButton
  | updateSavedRingtones
  | updateTranscribedAudio
  | updateReadFeaturedEmojiStickers
  | updateUserEmojiStatus
  | updateRecentEmojiStatuses
  | updateRecentReactions
  | updateMoveStickerSetToTop
  | updateMessageExtendedMedia
  | updateChannelPinnedTopic
  | updateChannelPinnedTopics
  | updateUser
  | updateAutoSaveSettings
  | updateStory
  | updateReadStories
  | updateStoryID
  | updateStoriesStealthMode
  | updateSentStoryReaction
  | updateBotChatBoost
  | updateChannelViewForumAsMessages
  | updatePeerWallpaper
  | updateBotMessageReaction
  | updateBotMessageReactions
  | updateSavedDialogPinned
  | updatePinnedSavedDialogs
  | updateSavedReactionTags
  | updateSmsJob
  | updateQuickReplies
  | updateNewQuickReply
  | updateDeleteQuickReply
  | updateQuickReplyMessage
  | updateDeleteQuickReplyMessages
  | updateBotBusinessConnect
  | updateBotNewBusinessMessage
  | updateBotEditBusinessMessage
  | updateBotDeleteBusinessMessage
  | updateNewStoryReaction
  | updateBroadcastRevenueTransactions
  | updateStarsBalance
  | updateBusinessBotCallbackQuery
  | updateStarsRevenueStatus
  | updateBotPurchasedPaidMedia
  | updatePaidReactionPrivacy;

export type updates_State = updates_state;

export type updates_Difference = updates_differenceEmpty | updates_difference | updates_differenceSlice | updates_differenceTooLong;

export type Updates = updatesTooLong | updateShortMessage | updateShortChatMessage | updateShort | updatesCombined | updates | updateShortSentMessage;

export type photos_Photos = photos_photos | photos_photosSlice;

export type photos_Photo = photos_photo;

export type upload_File = upload_file | upload_fileCdnRedirect;

export type DcOption = dcOption;

export type Config = config;

export type NearestDc = nearestDc;

export type help_AppUpdate = help_appUpdate | help_noAppUpdate;

export type help_InviteText = help_inviteText;

export type EncryptedChat = encryptedChatEmpty | encryptedChatWaiting | encryptedChatRequested | encryptedChat | encryptedChatDiscarded;

export type InputEncryptedChat = inputEncryptedChat;

export type EncryptedFile = encryptedFileEmpty | encryptedFile;

export type InputEncryptedFile = inputEncryptedFileEmpty | inputEncryptedFileUploaded | inputEncryptedFile | inputEncryptedFileBigUploaded;

export type EncryptedMessage = encryptedMessage | encryptedMessageService;

export type messages_DhConfig = messages_dhConfigNotModified | messages_dhConfig;

export type messages_SentEncryptedMessage = messages_sentEncryptedMessage | messages_sentEncryptedFile;

export type InputDocument = inputDocumentEmpty | inputDocument;

export type Document = documentEmpty | document;

export type help_Support = help_support;

export type NotifyPeer = notifyPeer | notifyUsers | notifyChats | notifyBroadcasts | notifyForumTopic;

export type SendMessageAction = sendMessageTypingAction | sendMessageCancelAction | sendMessageRecordVideoAction | sendMessageUploadVideoAction | sendMessageRecordAudioAction | sendMessageUploadAudioAction | sendMessageUploadPhotoAction | sendMessageUploadDocumentAction | sendMessageGeoLocationAction | sendMessageChooseContactAction | sendMessageGamePlayAction | sendMessageRecordRoundAction | sendMessageUploadRoundAction | speakingInGroupCallAction | sendMessageHistoryImportAction | sendMessageChooseStickerAction | sendMessageEmojiInteraction | sendMessageEmojiInteractionSeen;

export type contacts_Found = contacts_found;

export type InputPrivacyKey = inputPrivacyKeyStatusTimestamp | inputPrivacyKeyChatInvite | inputPrivacyKeyPhoneCall | inputPrivacyKeyPhoneP2P | inputPrivacyKeyForwards | inputPrivacyKeyProfilePhoto | inputPrivacyKeyPhoneNumber | inputPrivacyKeyAddedByPhone | inputPrivacyKeyVoiceMessages | inputPrivacyKeyAbout | inputPrivacyKeyBirthday | inputPrivacyKeyStarGiftsAutoSave | inputPrivacyKeyNoPaidMessages;

export type PrivacyKey = privacyKeyStatusTimestamp | privacyKeyChatInvite | privacyKeyPhoneCall | privacyKeyPhoneP2P | privacyKeyForwards | privacyKeyProfilePhoto | privacyKeyPhoneNumber | privacyKeyAddedByPhone | privacyKeyVoiceMessages | privacyKeyAbout | privacyKeyBirthday | privacyKeyStarGiftsAutoSave | privacyKeyNoPaidMessages;

export type InputPrivacyRule = inputPrivacyValueAllowContacts | inputPrivacyValueAllowAll | inputPrivacyValueAllowUsers | inputPrivacyValueDisallowContacts | inputPrivacyValueDisallowAll | inputPrivacyValueDisallowUsers | inputPrivacyValueAllowChatParticipants | inputPrivacyValueDisallowChatParticipants | inputPrivacyValueAllowCloseFriends | inputPrivacyValueAllowPremium | inputPrivacyValueAllowBots | inputPrivacyValueDisallowBots;

export type PrivacyRule = privacyValueAllowContacts | privacyValueAllowAll | privacyValueAllowUsers | privacyValueDisallowContacts | privacyValueDisallowAll | privacyValueDisallowUsers | privacyValueAllowChatParticipants | privacyValueDisallowChatParticipants | privacyValueAllowCloseFriends | privacyValueAllowPremium | privacyValueAllowBots | privacyValueDisallowBots;

export type account_PrivacyRules = account_privacyRules;

export type AccountDaysTTL = accountDaysTTL;

export type DocumentAttribute = documentAttributeImageSize | documentAttributeAnimated | documentAttributeSticker | documentAttributeVideo | documentAttributeAudio | documentAttributeFilename | documentAttributeHasStickers | documentAttributeCustomEmoji;

export type messages_Stickers = messages_stickersNotModified | messages_stickers;

export type StickerPack = stickerPack;

export type messages_AllStickers = messages_allStickersNotModified | messages_allStickers;

export type messages_AffectedMessages = messages_affectedMessages;

export type WebPage = webPageEmpty | webPagePending | webPage | webPageNotModified;

export type Authorization = authorization;

export type account_Authorizations = account_authorizations;

export type account_Password = account_password;

export type account_PasswordSettings = account_passwordSettings;

export type account_PasswordInputSettings = account_passwordInputSettings;

export type auth_PasswordRecovery = auth_passwordRecovery;

export type ReceivedNotifyMessage = receivedNotifyMessage;

export type ExportedChatInvite = chatInviteExported | chatInvitePublicJoinRequests;

export type ChatInvite = chatInviteAlready | chatInvite | chatInvitePeek;

export type InputStickerSet = inputStickerSetEmpty | inputStickerSetID | inputStickerSetShortName | inputStickerSetAnimatedEmoji | inputStickerSetDice | inputStickerSetAnimatedEmojiAnimations | inputStickerSetPremiumGifts | inputStickerSetEmojiGenericAnimations | inputStickerSetEmojiDefaultStatuses | inputStickerSetEmojiDefaultTopicIcons | inputStickerSetEmojiChannelDefaultStatuses;

export type StickerSet = stickerSet;

export type messages_StickerSet = messages_stickerSet | messages_stickerSetNotModified;

export type BotCommand = botCommand;

export type BotInfo = botInfo;

export type KeyboardButton = keyboardButton | keyboardButtonUrl | keyboardButtonCallback | keyboardButtonRequestPhone | keyboardButtonRequestGeoLocation | keyboardButtonSwitchInline | keyboardButtonGame | keyboardButtonBuy | keyboardButtonUrlAuth | inputKeyboardButtonUrlAuth | keyboardButtonRequestPoll | inputKeyboardButtonUserProfile | keyboardButtonUserProfile | keyboardButtonWebView | keyboardButtonSimpleWebView | keyboardButtonRequestPeer | inputKeyboardButtonRequestPeer | keyboardButtonCopy;

export type KeyboardButtonRow = keyboardButtonRow;

export type ReplyMarkup = replyKeyboardHide | replyKeyboardForceReply | replyKeyboardMarkup | replyInlineMarkup;

export type MessageEntity = messageEntityUnknown | messageEntityMention | messageEntityHashtag | messageEntityBotCommand | messageEntityUrl | messageEntityEmail | messageEntityBold | messageEntityItalic | messageEntityCode | messageEntityPre | messageEntityTextUrl | messageEntityMentionName | inputMessageEntityMentionName | messageEntityPhone | messageEntityCashtag | messageEntityUnderline | messageEntityStrike | messageEntityBankCard | messageEntitySpoiler | messageEntityCustomEmoji | messageEntityBlockquote;

export type InputChannel = inputChannelEmpty | inputChannel | inputChannelFromMessage;

export type contacts_ResolvedPeer = contacts_resolvedPeer;

export type MessageRange = messageRange;

export type updates_ChannelDifference = updates_channelDifferenceEmpty | updates_channelDifferenceTooLong | updates_channelDifference;

export type ChannelMessagesFilter = channelMessagesFilterEmpty | channelMessagesFilter;

export type ChannelParticipant = channelParticipant | channelParticipantSelf | channelParticipantCreator | channelParticipantAdmin | channelParticipantBanned | channelParticipantLeft;

export type ChannelParticipantsFilter = channelParticipantsRecent | channelParticipantsAdmins | channelParticipantsKicked | channelParticipantsBots | channelParticipantsBanned | channelParticipantsSearch | channelParticipantsContacts | channelParticipantsMentions;

export type channels_ChannelParticipants = channels_channelParticipants | channels_channelParticipantsNotModified;

export type channels_ChannelParticipant = channels_channelParticipant;

export type help_TermsOfService = help_termsOfService;

export type messages_SavedGifs = messages_savedGifsNotModified | messages_savedGifs;

export type InputBotInlineMessage = inputBotInlineMessageMediaAuto | inputBotInlineMessageText | inputBotInlineMessageMediaGeo | inputBotInlineMessageMediaVenue | inputBotInlineMessageMediaContact | inputBotInlineMessageGame | inputBotInlineMessageMediaInvoice | inputBotInlineMessageMediaWebPage;

export type InputBotInlineResult = inputBotInlineResult | inputBotInlineResultPhoto | inputBotInlineResultDocument | inputBotInlineResultGame;

export type BotInlineMessage = botInlineMessageMediaAuto | botInlineMessageText | botInlineMessageMediaGeo | botInlineMessageMediaVenue | botInlineMessageMediaContact | botInlineMessageMediaInvoice | botInlineMessageMediaWebPage;

export type BotInlineResult = botInlineResult | botInlineMediaResult;

export type messages_BotResults = messages_botResults;

export type ExportedMessageLink = exportedMessageLink;

export type MessageFwdHeader = messageFwdHeader;

export type auth_CodeType = auth_codeTypeSms | auth_codeTypeCall | auth_codeTypeFlashCall | auth_codeTypeMissedCall | auth_codeTypeFragmentSms;

export type auth_SentCodeType = auth_sentCodeTypeApp | auth_sentCodeTypeSms | auth_sentCodeTypeCall | auth_sentCodeTypeFlashCall | auth_sentCodeTypeMissedCall | auth_sentCodeTypeEmailCode | auth_sentCodeTypeSetUpEmailRequired | auth_sentCodeTypeFragmentSms | auth_sentCodeTypeFirebaseSms | auth_sentCodeTypeSmsWord | auth_sentCodeTypeSmsPhrase;

export type messages_BotCallbackAnswer = messages_botCallbackAnswer;

export type messages_MessageEditData = messages_messageEditData;

export type InputBotInlineMessageID = inputBotInlineMessageID | inputBotInlineMessageID64;

export type InlineBotSwitchPM = inlineBotSwitchPM;

export type messages_PeerDialogs = messages_peerDialogs;

export type TopPeer = topPeer;

export type TopPeerCategory = topPeerCategoryBotsPM | topPeerCategoryBotsInline | topPeerCategoryCorrespondents | topPeerCategoryGroups | topPeerCategoryChannels | topPeerCategoryPhoneCalls | topPeerCategoryForwardUsers | topPeerCategoryForwardChats | topPeerCategoryBotsApp;

export type TopPeerCategoryPeers = topPeerCategoryPeers;

export type contacts_TopPeers = contacts_topPeersNotModified | contacts_topPeers | contacts_topPeersDisabled;

export type DraftMessage = draftMessageEmpty | draftMessage;

export type messages_FeaturedStickers = messages_featuredStickersNotModified | messages_featuredStickers;

export type messages_RecentStickers = messages_recentStickersNotModified | messages_recentStickers;

export type messages_ArchivedStickers = messages_archivedStickers;

export type messages_StickerSetInstallResult = messages_stickerSetInstallResultSuccess | messages_stickerSetInstallResultArchive;

export type StickerSetCovered = stickerSetCovered | stickerSetMultiCovered | stickerSetFullCovered | stickerSetNoCovered;

export type MaskCoords = maskCoords;

export type InputStickeredMedia = inputStickeredMediaPhoto | inputStickeredMediaDocument;

export type Game = game;

export type InputGame = inputGameID | inputGameShortName;

export type HighScore = highScore;

export type messages_HighScores = messages_highScores;

export type RichText = textEmpty | textPlain | textBold | textItalic | textUnderline | textStrike | textFixed | textUrl | textEmail | textConcat | textSubscript | textSuperscript | textMarked | textPhone | textImage | textAnchor;

export type PageBlock = pageBlockUnsupported | pageBlockTitle | pageBlockSubtitle | pageBlockAuthorDate | pageBlockHeader | pageBlockSubheader | pageBlockParagraph | pageBlockPreformatted | pageBlockFooter | pageBlockDivider | pageBlockAnchor | pageBlockList | pageBlockBlockquote | pageBlockPullquote | pageBlockPhoto | pageBlockVideo | pageBlockCover | pageBlockEmbed | pageBlockEmbedPost | pageBlockCollage | pageBlockSlideshow | pageBlockChannel | pageBlockAudio | pageBlockKicker | pageBlockTable | pageBlockOrderedList | pageBlockDetails | pageBlockRelatedArticles | pageBlockMap;

export type PhoneCallDiscardReason = phoneCallDiscardReasonMissed | phoneCallDiscardReasonDisconnect | phoneCallDiscardReasonHangup | phoneCallDiscardReasonBusy | phoneCallDiscardReasonAllowGroupCall;

export type DataJSON = dataJSON;

export type LabeledPrice = labeledPrice;

export type Invoice = invoice;

export type PaymentCharge = paymentCharge;

export type PostAddress = postAddress;

export type PaymentRequestedInfo = paymentRequestedInfo;

export type PaymentSavedCredentials = paymentSavedCredentialsCard;

export type WebDocument = webDocument | webDocumentNoProxy;

export type InputWebDocument = inputWebDocument;

export type InputWebFileLocation = inputWebFileLocation | inputWebFileGeoPointLocation | inputWebFileAudioAlbumThumbLocation;

export type upload_WebFile = upload_webFile;

export type payments_PaymentForm = payments_paymentForm | payments_paymentFormStars | payments_paymentFormStarGift;

export type payments_ValidatedRequestedInfo = payments_validatedRequestedInfo;

export type payments_PaymentResult = payments_paymentResult | payments_paymentVerificationNeeded;

export type payments_PaymentReceipt = payments_paymentReceipt | payments_paymentReceiptStars;

export type payments_SavedInfo = payments_savedInfo;

export type InputPaymentCredentials = inputPaymentCredentialsSaved | inputPaymentCredentials | inputPaymentCredentialsApplePay | inputPaymentCredentialsGooglePay;

export type account_TmpPassword = account_tmpPassword;

export type ShippingOption = shippingOption;

export type InputStickerSetItem = inputStickerSetItem;

export type InputPhoneCall = inputPhoneCall;

export type PhoneCall = phoneCallEmpty | phoneCallWaiting | phoneCallRequested | phoneCallAccepted | phoneCall | phoneCallDiscarded;

export type PhoneConnection = phoneConnection | phoneConnectionWebrtc;

export type PhoneCallProtocol = phoneCallProtocol;

export type phone_PhoneCall = phone_phoneCall;

export type upload_CdnFile = upload_cdnFileReuploadNeeded | upload_cdnFile;

export type CdnPublicKey = cdnPublicKey;

export type CdnConfig = cdnConfig;

export type LangPackString = langPackString | langPackStringPluralized | langPackStringDeleted;

export type LangPackDifference = langPackDifference;

export type LangPackLanguage = langPackLanguage;

export type ChannelAdminLogEventAction =
  | channelAdminLogEventActionChangeTitle
  | channelAdminLogEventActionChangeAbout
  | channelAdminLogEventActionChangeUsername
  | channelAdminLogEventActionChangePhoto
  | channelAdminLogEventActionToggleInvites
  | channelAdminLogEventActionToggleSignatures
  | channelAdminLogEventActionUpdatePinned
  | channelAdminLogEventActionEditMessage
  | channelAdminLogEventActionDeleteMessage
  | channelAdminLogEventActionParticipantJoin
  | channelAdminLogEventActionParticipantLeave
  | channelAdminLogEventActionParticipantInvite
  | channelAdminLogEventActionParticipantToggleBan
  | channelAdminLogEventActionParticipantToggleAdmin
  | channelAdminLogEventActionChangeStickerSet
  | channelAdminLogEventActionTogglePreHistoryHidden
  | channelAdminLogEventActionDefaultBannedRights
  | channelAdminLogEventActionStopPoll
  | channelAdminLogEventActionChangeLinkedChat
  | channelAdminLogEventActionChangeLocation
  | channelAdminLogEventActionToggleSlowMode
  | channelAdminLogEventActionStartGroupCall
  | channelAdminLogEventActionDiscardGroupCall
  | channelAdminLogEventActionParticipantMute
  | channelAdminLogEventActionParticipantUnmute
  | channelAdminLogEventActionToggleGroupCallSetting
  | channelAdminLogEventActionParticipantJoinByInvite
  | channelAdminLogEventActionExportedInviteDelete
  | channelAdminLogEventActionExportedInviteRevoke
  | channelAdminLogEventActionExportedInviteEdit
  | channelAdminLogEventActionParticipantVolume
  | channelAdminLogEventActionChangeHistoryTTL
  | channelAdminLogEventActionParticipantJoinByRequest
  | channelAdminLogEventActionToggleNoForwards
  | channelAdminLogEventActionSendMessage
  | channelAdminLogEventActionChangeAvailableReactions
  | channelAdminLogEventActionChangeUsernames
  | channelAdminLogEventActionToggleForum
  | channelAdminLogEventActionCreateTopic
  | channelAdminLogEventActionEditTopic
  | channelAdminLogEventActionDeleteTopic
  | channelAdminLogEventActionPinTopic
  | channelAdminLogEventActionToggleAntiSpam
  | channelAdminLogEventActionChangePeerColor
  | channelAdminLogEventActionChangeProfilePeerColor
  | channelAdminLogEventActionChangeWallpaper
  | channelAdminLogEventActionChangeEmojiStatus
  | channelAdminLogEventActionChangeEmojiStickerSet
  | channelAdminLogEventActionToggleSignatureProfiles
  | channelAdminLogEventActionParticipantSubExtend;

export type ChannelAdminLogEvent = channelAdminLogEvent;

export type channels_AdminLogResults = channels_adminLogResults;

export type ChannelAdminLogEventsFilter = channelAdminLogEventsFilter;

export type PopularContact = popularContact;

export type messages_FavedStickers = messages_favedStickersNotModified | messages_favedStickers;

export type RecentMeUrl = recentMeUrlUnknown | recentMeUrlUser | recentMeUrlChat | recentMeUrlChatInvite | recentMeUrlStickerSet;

export type help_RecentMeUrls = help_recentMeUrls;

export type InputSingleMedia = inputSingleMedia;

export type WebAuthorization = webAuthorization;

export type account_WebAuthorizations = account_webAuthorizations;

export type InputMessage = inputMessageID | inputMessageReplyTo | inputMessagePinned | inputMessageCallbackQuery;

export type InputDialogPeer = inputDialogPeer | inputDialogPeerFolder;

export type DialogPeer = dialogPeer | dialogPeerFolder;

export type messages_FoundStickerSets = messages_foundStickerSetsNotModified | messages_foundStickerSets;

export type FileHash = fileHash;

export type InputClientProxy = inputClientProxy;

export type help_TermsOfServiceUpdate = help_termsOfServiceUpdateEmpty | help_termsOfServiceUpdate;

export type InputSecureFile = inputSecureFileUploaded | inputSecureFile;

export type SecureFile = secureFileEmpty | secureFile;

export type SecureData = secureData;

export type SecurePlainData = securePlainPhone | securePlainEmail;

export type SecureValueType = secureValueTypePersonalDetails | secureValueTypePassport | secureValueTypeDriverLicense | secureValueTypeIdentityCard | secureValueTypeInternalPassport | secureValueTypeAddress | secureValueTypeUtilityBill | secureValueTypeBankStatement | secureValueTypeRentalAgreement | secureValueTypePassportRegistration | secureValueTypeTemporaryRegistration | secureValueTypePhone | secureValueTypeEmail;

export type SecureValue = secureValue;

export type InputSecureValue = inputSecureValue;

export type SecureValueHash = secureValueHash;

export type SecureValueError = secureValueErrorData | secureValueErrorFrontSide | secureValueErrorReverseSide | secureValueErrorSelfie | secureValueErrorFile | secureValueErrorFiles | secureValueError | secureValueErrorTranslationFile | secureValueErrorTranslationFiles;

export type SecureCredentialsEncrypted = secureCredentialsEncrypted;

export type account_AuthorizationForm = account_authorizationForm;

export type account_SentEmailCode = account_sentEmailCode;

export type help_DeepLinkInfo = help_deepLinkInfoEmpty | help_deepLinkInfo;

export type SavedContact = savedPhoneContact;

export type account_Takeout = account_takeout;

export type PasswordKdfAlgo = passwordKdfAlgoUnknown | passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow;

export type SecurePasswordKdfAlgo = securePasswordKdfAlgoUnknown | securePasswordKdfAlgoPBKDF2HMACSHA512iter100000 | securePasswordKdfAlgoSHA512;

export type SecureSecretSettings = secureSecretSettings;

export type InputCheckPasswordSRP = inputCheckPasswordEmpty | inputCheckPasswordSRP;

export type SecureRequiredType = secureRequiredType | secureRequiredTypeOneOf;

export type help_PassportConfig = help_passportConfigNotModified | help_passportConfig;

export type InputAppEvent = inputAppEvent;

export type JSONObjectValue = jsonObjectValue;

export type JSONValue = jsonNull | jsonBool | jsonNumber | jsonString | jsonArray | jsonObject;

export type PageTableCell = pageTableCell;

export type PageTableRow = pageTableRow;

export type PageCaption = pageCaption;

export type PageListItem = pageListItemText | pageListItemBlocks;

export type PageListOrderedItem = pageListOrderedItemText | pageListOrderedItemBlocks;

export type PageRelatedArticle = pageRelatedArticle;

export type Page = page;

export type help_SupportName = help_supportName;

export type help_UserInfo = help_userInfoEmpty | help_userInfo;

export type PollAnswer = pollAnswer;

export type Poll = poll;

export type PollAnswerVoters = pollAnswerVoters;

export type PollResults = pollResults;

export type ChatOnlines = chatOnlines;

export type StatsURL = statsURL;

export type ChatAdminRights = chatAdminRights;

export type ChatBannedRights = chatBannedRights;

export type InputWallPaper = inputWallPaper | inputWallPaperSlug | inputWallPaperNoFile;

export type account_WallPapers = account_wallPapersNotModified | account_wallPapers;

export type CodeSettings = codeSettings;

export type WallPaperSettings = wallPaperSettings;

export type AutoDownloadSettings = autoDownloadSettings;

export type account_AutoDownloadSettings = account_autoDownloadSettings;

export type EmojiKeyword = emojiKeyword | emojiKeywordDeleted;

export type EmojiKeywordsDifference = emojiKeywordsDifference;

export type EmojiURL = emojiURL;

export type EmojiLanguage = emojiLanguage;

export type Folder = folder;

export type InputFolderPeer = inputFolderPeer;

export type FolderPeer = folderPeer;

export type messages_SearchCounter = messages_searchCounter;

export type UrlAuthResult = urlAuthResultRequest | urlAuthResultAccepted | urlAuthResultDefault;

export type ChannelLocation = channelLocationEmpty | channelLocation;

export type PeerLocated = peerLocated | peerSelfLocated;

export type RestrictionReason = restrictionReason;

export type InputTheme = inputTheme | inputThemeSlug;

export type Theme = theme;

export type account_Themes = account_themesNotModified | account_themes;

export type auth_LoginToken = auth_loginToken | auth_loginTokenMigrateTo | auth_loginTokenSuccess;

export type account_ContentSettings = account_contentSettings;

export type messages_InactiveChats = messages_inactiveChats;

export type BaseTheme = baseThemeClassic | baseThemeDay | baseThemeNight | baseThemeTinted | baseThemeArctic;

export type InputThemeSettings = inputThemeSettings;

export type ThemeSettings = themeSettings;

export type WebPageAttribute = webPageAttributeTheme | webPageAttributeStory | webPageAttributeStickerSet | webPageAttributeUniqueStarGift;

export type messages_VotesList = messages_votesList;

export type BankCardOpenUrl = bankCardOpenUrl;

export type payments_BankCardData = payments_bankCardData;

export type DialogFilter = dialogFilter | dialogFilterDefault | dialogFilterChatlist;

export type DialogFilterSuggested = dialogFilterSuggested;

export type StatsDateRangeDays = statsDateRangeDays;

export type StatsAbsValueAndPrev = statsAbsValueAndPrev;

export type StatsPercentValue = statsPercentValue;

export type StatsGraph = statsGraphAsync | statsGraphError | statsGraph;

export type stats_BroadcastStats = stats_broadcastStats;

export type help_PromoData = help_promoDataEmpty | help_promoData;

export type VideoSize = videoSize | videoSizeEmojiMarkup | videoSizeStickerMarkup;

export type StatsGroupTopPoster = statsGroupTopPoster;

export type StatsGroupTopAdmin = statsGroupTopAdmin;

export type StatsGroupTopInviter = statsGroupTopInviter;

export type stats_MegagroupStats = stats_megagroupStats;

export type GlobalPrivacySettings = globalPrivacySettings;

export type help_CountryCode = help_countryCode;

export type help_Country = help_country;

export type help_CountriesList = help_countriesListNotModified | help_countriesList;

export type MessageViews = messageViews;

export type messages_MessageViews = messages_messageViews;

export type messages_DiscussionMessage = messages_discussionMessage;

export type MessageReplyHeader = messageReplyHeader | messageReplyStoryHeader;

export type MessageReplies = messageReplies;

export type PeerBlocked = peerBlocked;

export type stats_MessageStats = stats_messageStats;

export type GroupCall = groupCallDiscarded | groupCall;

export type InputGroupCall = inputGroupCall;

export type GroupCallParticipant = groupCallParticipant;

export type phone_GroupCall = phone_groupCall;

export type phone_GroupParticipants = phone_groupParticipants;

export type InlineQueryPeerType = inlineQueryPeerTypeSameBotPM | inlineQueryPeerTypePM | inlineQueryPeerTypeChat | inlineQueryPeerTypeMegagroup | inlineQueryPeerTypeBroadcast | inlineQueryPeerTypeBotPM;

export type messages_HistoryImport = messages_historyImport;

export type messages_HistoryImportParsed = messages_historyImportParsed;

export type messages_AffectedFoundMessages = messages_affectedFoundMessages;

export type ChatInviteImporter = chatInviteImporter;

export type messages_ExportedChatInvites = messages_exportedChatInvites;

export type messages_ExportedChatInvite = messages_exportedChatInvite | messages_exportedChatInviteReplaced;

export type messages_ChatInviteImporters = messages_chatInviteImporters;

export type ChatAdminWithInvites = chatAdminWithInvites;

export type messages_ChatAdminsWithInvites = messages_chatAdminsWithInvites;

export type messages_CheckedHistoryImportPeer = messages_checkedHistoryImportPeer;

export type phone_JoinAsPeers = phone_joinAsPeers;

export type phone_ExportedGroupCallInvite = phone_exportedGroupCallInvite;

export type GroupCallParticipantVideoSourceGroup = groupCallParticipantVideoSourceGroup;

export type GroupCallParticipantVideo = groupCallParticipantVideo;

export type stickers_SuggestedShortName = stickers_suggestedShortName;

export type BotCommandScope = botCommandScopeDefault | botCommandScopeUsers | botCommandScopeChats | botCommandScopeChatAdmins | botCommandScopePeer | botCommandScopePeerAdmins | botCommandScopePeerUser;

export type account_ResetPasswordResult = account_resetPasswordFailedWait | account_resetPasswordRequestedWait | account_resetPasswordOk;

export type SponsoredMessage = sponsoredMessage;

export type messages_SponsoredMessages = messages_sponsoredMessages | messages_sponsoredMessagesEmpty;

export type SearchResultsCalendarPeriod = searchResultsCalendarPeriod;

export type messages_SearchResultsCalendar = messages_searchResultsCalendar;

export type SearchResultsPosition = searchResultPosition;

export type messages_SearchResultsPositions = messages_searchResultsPositions;

export type channels_SendAsPeers = channels_sendAsPeers;

export type users_UserFull = users_userFull;

export type messages_PeerSettings = messages_peerSettings;

export type auth_LoggedOut = auth_loggedOut;

export type ReactionCount = reactionCount;

export type MessageReactions = messageReactions;

export type messages_MessageReactionsList = messages_messageReactionsList;

export type AvailableReaction = availableReaction;

export type messages_AvailableReactions = messages_availableReactionsNotModified | messages_availableReactions;

export type MessagePeerReaction = messagePeerReaction;

export type GroupCallStreamChannel = groupCallStreamChannel;

export type phone_GroupCallStreamChannels = phone_groupCallStreamChannels;

export type phone_GroupCallStreamRtmpUrl = phone_groupCallStreamRtmpUrl;

export type AttachMenuBotIconColor = attachMenuBotIconColor;

export type AttachMenuBotIcon = attachMenuBotIcon;

export type AttachMenuBot = attachMenuBot;

export type AttachMenuBots = attachMenuBotsNotModified | attachMenuBots;

export type AttachMenuBotsBot = attachMenuBotsBot;

export type WebViewResult = webViewResultUrl;

export type WebViewMessageSent = webViewMessageSent;

export type BotMenuButton = botMenuButtonDefault | botMenuButtonCommands | botMenuButton;

export type account_SavedRingtones = account_savedRingtonesNotModified | account_savedRingtones;

export type NotificationSound = notificationSoundDefault | notificationSoundNone | notificationSoundLocal | notificationSoundRingtone;

export type account_SavedRingtone = account_savedRingtone | account_savedRingtoneConverted;

export type AttachMenuPeerType = attachMenuPeerTypeSameBotPM | attachMenuPeerTypeBotPM | attachMenuPeerTypePM | attachMenuPeerTypeChat | attachMenuPeerTypeBroadcast;

export type InputInvoice = inputInvoiceMessage | inputInvoiceSlug | inputInvoicePremiumGiftCode | inputInvoiceStars | inputInvoiceChatInviteSubscription | inputInvoiceStarGift | inputInvoiceStarGiftUpgrade | inputInvoiceStarGiftTransfer | inputInvoicePremiumGiftStars;

export type payments_ExportedInvoice = payments_exportedInvoice;

export type messages_TranscribedAudio = messages_transcribedAudio;

export type help_PremiumPromo = help_premiumPromo;

export type InputStorePaymentPurpose = inputStorePaymentPremiumSubscription | inputStorePaymentGiftPremium | inputStorePaymentPremiumGiftCode | inputStorePaymentPremiumGiveaway | inputStorePaymentStarsTopup | inputStorePaymentStarsGift | inputStorePaymentStarsGiveaway;

export type PaymentFormMethod = paymentFormMethod;

export type EmojiStatus = emojiStatusEmpty | emojiStatus | emojiStatusCollectible | inputEmojiStatusCollectible;

export type account_EmojiStatuses = account_emojiStatusesNotModified | account_emojiStatuses;

export type Reaction = reactionEmpty | reactionEmoji | reactionCustomEmoji | reactionPaid;

export type ChatReactions = chatReactionsNone | chatReactionsAll | chatReactionsSome;

export type messages_Reactions = messages_reactionsNotModified | messages_reactions;

export type EmailVerifyPurpose = emailVerifyPurposeLoginSetup | emailVerifyPurposeLoginChange | emailVerifyPurposePassport;

export type EmailVerification = emailVerificationCode | emailVerificationGoogle | emailVerificationApple;

export type account_EmailVerified = account_emailVerified | account_emailVerifiedLogin;

export type PremiumSubscriptionOption = premiumSubscriptionOption;

export type SendAsPeer = sendAsPeer;

export type MessageExtendedMedia = messageExtendedMediaPreview | messageExtendedMedia;

export type StickerKeyword = stickerKeyword;

export type Username = username;

export type ForumTopic = forumTopicDeleted | forumTopic;

export type messages_ForumTopics = messages_forumTopics;

export type DefaultHistoryTTL = defaultHistoryTTL;

export type ExportedContactToken = exportedContactToken;

export type RequestPeerType = requestPeerTypeUser | requestPeerTypeChat | requestPeerTypeBroadcast;

export type EmojiList = emojiListNotModified | emojiList;

export type EmojiGroup = emojiGroup | emojiGroupGreeting | emojiGroupPremium;

export type messages_EmojiGroups = messages_emojiGroupsNotModified | messages_emojiGroups;

export type TextWithEntities = textWithEntities;

export type messages_TranslatedText = messages_translateResult;

export type AutoSaveSettings = autoSaveSettings;

export type AutoSaveException = autoSaveException;

export type account_AutoSaveSettings = account_autoSaveSettings;

export type help_AppConfig = help_appConfigNotModified | help_appConfig;

export type InputBotApp = inputBotAppID | inputBotAppShortName;

export type BotApp = botAppNotModified | botApp;

export type messages_BotApp = messages_botApp;

export type InlineBotWebView = inlineBotWebView;

export type ReadParticipantDate = readParticipantDate;

export type InputChatlist = inputChatlistDialogFilter;

export type ExportedChatlistInvite = exportedChatlistInvite;

export type chatlists_ExportedChatlistInvite = chatlists_exportedChatlistInvite;

export type chatlists_ExportedInvites = chatlists_exportedInvites;

export type chatlists_ChatlistInvite = chatlists_chatlistInviteAlready | chatlists_chatlistInvite;

export type chatlists_ChatlistUpdates = chatlists_chatlistUpdates;

export type bots_BotInfo = bots_botInfo;

export type MessagePeerVote = messagePeerVote | messagePeerVoteInputOption | messagePeerVoteMultiple;

export type StoryViews = storyViews;

export type StoryItem = storyItemDeleted | storyItemSkipped | storyItem;

export type stories_AllStories = stories_allStoriesNotModified | stories_allStories;

export type stories_Stories = stories_stories;

export type StoryView = storyView | storyViewPublicForward | storyViewPublicRepost;

export type stories_StoryViewsList = stories_storyViewsList;

export type stories_StoryViews = stories_storyViews;

export type InputReplyTo = inputReplyToMessage | inputReplyToStory;

export type ExportedStoryLink = exportedStoryLink;

export type StoriesStealthMode = storiesStealthMode;

export type MediaAreaCoordinates = mediaAreaCoordinates;

export type MediaArea = mediaAreaVenue | inputMediaAreaVenue | mediaAreaGeoPoint | mediaAreaSuggestedReaction | mediaAreaChannelPost | inputMediaAreaChannelPost | mediaAreaUrl | mediaAreaWeather | mediaAreaStarGift;

export type PeerStories = peerStories;

export type stories_PeerStories = stories_peerStories;

export type messages_WebPage = messages_webPage;

export type PremiumGiftCodeOption = premiumGiftCodeOption;

export type payments_CheckedGiftCode = payments_checkedGiftCode;

export type payments_GiveawayInfo = payments_giveawayInfo | payments_giveawayInfoResults;

export type PrepaidGiveaway = prepaidGiveaway | prepaidStarsGiveaway;

export type Boost = boost;

export type premium_BoostsList = premium_boostsList;

export type MyBoost = myBoost;

export type premium_MyBoosts = premium_myBoosts;

export type premium_BoostsStatus = premium_boostsStatus;

export type StoryFwdHeader = storyFwdHeader;

export type PostInteractionCounters = postInteractionCountersMessage | postInteractionCountersStory;

export type stats_StoryStats = stats_storyStats;

export type PublicForward = publicForwardMessage | publicForwardStory;

export type stats_PublicForwards = stats_publicForwards;

export type PeerColor = peerColor;

export type help_PeerColorSet = help_peerColorSet | help_peerColorProfileSet;

export type help_PeerColorOption = help_peerColorOption;

export type help_PeerColors = help_peerColorsNotModified | help_peerColors;

export type StoryReaction = storyReaction | storyReactionPublicForward | storyReactionPublicRepost;

export type stories_StoryReactionsList = stories_storyReactionsList;

export type SavedDialog = savedDialog;

export type messages_SavedDialogs = messages_savedDialogs | messages_savedDialogsSlice | messages_savedDialogsNotModified;

export type SavedReactionTag = savedReactionTag;

export type messages_SavedReactionTags = messages_savedReactionTagsNotModified | messages_savedReactionTags;

export type OutboxReadDate = outboxReadDate;

export type smsjobs_EligibilityToJoin = smsjobs_eligibleToJoin;

export type smsjobs_Status = smsjobs_status;

export type SmsJob = smsJob;

export type BusinessWeeklyOpen = businessWeeklyOpen;

export type BusinessWorkHours = businessWorkHours;

export type BusinessLocation = businessLocation;

export type InputBusinessRecipients = inputBusinessRecipients;

export type BusinessRecipients = businessRecipients;

export type BusinessAwayMessageSchedule = businessAwayMessageScheduleAlways | businessAwayMessageScheduleOutsideWorkHours | businessAwayMessageScheduleCustom;

export type InputBusinessGreetingMessage = inputBusinessGreetingMessage;

export type BusinessGreetingMessage = businessGreetingMessage;

export type InputBusinessAwayMessage = inputBusinessAwayMessage;

export type BusinessAwayMessage = businessAwayMessage;

export type Timezone = timezone;

export type help_TimezonesList = help_timezonesListNotModified | help_timezonesList;

export type QuickReply = quickReply;

export type InputQuickReplyShortcut = inputQuickReplyShortcut | inputQuickReplyShortcutId;

export type messages_QuickReplies = messages_quickReplies | messages_quickRepliesNotModified;

export type ConnectedBot = connectedBot;

export type account_ConnectedBots = account_connectedBots;

export type messages_DialogFilters = messages_dialogFilters;

export type Birthday = birthday;

export type BotBusinessConnection = botBusinessConnection;

export type InputBusinessIntro = inputBusinessIntro;

export type BusinessIntro = businessIntro;

export type messages_MyStickers = messages_myStickers;

export type InputCollectible = inputCollectibleUsername | inputCollectiblePhone;

export type fragment_CollectibleInfo = fragment_collectibleInfo;

export type InputBusinessBotRecipients = inputBusinessBotRecipients;

export type BusinessBotRecipients = businessBotRecipients;

export type ContactBirthday = contactBirthday;

export type contacts_ContactBirthdays = contacts_contactBirthdays;

export type MissingInvitee = missingInvitee;

export type messages_InvitedUsers = messages_invitedUsers;

export type InputBusinessChatLink = inputBusinessChatLink;

export type BusinessChatLink = businessChatLink;

export type account_BusinessChatLinks = account_businessChatLinks;

export type account_ResolvedBusinessChatLinks = account_resolvedBusinessChatLinks;

export type RequestedPeer = requestedPeerUser | requestedPeerChat | requestedPeerChannel;

export type SponsoredMessageReportOption = sponsoredMessageReportOption;

export type channels_SponsoredMessageReportResult = channels_sponsoredMessageReportResultChooseOption | channels_sponsoredMessageReportResultAdsHidden | channels_sponsoredMessageReportResultReported;

export type stats_BroadcastRevenueStats = stats_broadcastRevenueStats;

export type stats_BroadcastRevenueWithdrawalUrl = stats_broadcastRevenueWithdrawalUrl;

export type BroadcastRevenueTransaction = broadcastRevenueTransactionProceeds | broadcastRevenueTransactionWithdrawal | broadcastRevenueTransactionRefund;

export type stats_BroadcastRevenueTransactions = stats_broadcastRevenueTransactions;

export type ReactionNotificationsFrom = reactionNotificationsFromContacts | reactionNotificationsFromAll;

export type ReactionsNotifySettings = reactionsNotifySettings;

export type BroadcastRevenueBalances = broadcastRevenueBalances;

export type AvailableEffect = availableEffect;

export type messages_AvailableEffects = messages_availableEffectsNotModified | messages_availableEffects;

export type FactCheck = factCheck;

export type StarsTransactionPeer = starsTransactionPeerUnsupported | starsTransactionPeerAppStore | starsTransactionPeerPlayMarket | starsTransactionPeerPremiumBot | starsTransactionPeerFragment | starsTransactionPeer | starsTransactionPeerAds | starsTransactionPeerAPI;

export type StarsTopupOption = starsTopupOption;

export type StarsTransaction = starsTransaction;

export type payments_StarsStatus = payments_starsStatus;

export type FoundStory = foundStory;

export type stories_FoundStories = stories_foundStories;

export type GeoPointAddress = geoPointAddress;

export type StarsRevenueStatus = starsRevenueStatus;

export type payments_StarsRevenueStats = payments_starsRevenueStats;

export type payments_StarsRevenueWithdrawalUrl = payments_starsRevenueWithdrawalUrl;

export type payments_StarsRevenueAdsAccountUrl = payments_starsRevenueAdsAccountUrl;

export type InputStarsTransaction = inputStarsTransaction;

export type StarsGiftOption = starsGiftOption;

export type bots_PopularAppBots = bots_popularAppBots;

export type BotPreviewMedia = botPreviewMedia;

export type bots_PreviewInfo = bots_previewInfo;

export type StarsSubscriptionPricing = starsSubscriptionPricing;

export type StarsSubscription = starsSubscription;

export type MessageReactor = messageReactor;

export type StarsGiveawayOption = starsGiveawayOption;

export type StarsGiveawayWinnersOption = starsGiveawayWinnersOption;

export type StarGift = starGift | starGiftUnique;

export type payments_StarGifts = payments_starGiftsNotModified | payments_starGifts;

export type MessageReportOption = messageReportOption;

export type ReportResult = reportResultChooseOption | reportResultAddComment | reportResultReported;

export type messages_BotPreparedInlineMessage = messages_botPreparedInlineMessage;

export type messages_PreparedInlineMessage = messages_preparedInlineMessage;

export type BotAppSettings = botAppSettings;

export type StarRefProgram = starRefProgram;

export type ConnectedBotStarRef = connectedBotStarRef;

export type payments_ConnectedStarRefBots = payments_connectedStarRefBots;

export type payments_SuggestedStarRefBots = payments_suggestedStarRefBots;

export type StarsAmount = starsAmount;

export type messages_FoundStickers = messages_foundStickersNotModified | messages_foundStickers;

export type BotVerifierSettings = botVerifierSettings;

export type BotVerification = botVerification;

export type StarGiftAttribute = starGiftAttributeModel | starGiftAttributePattern | starGiftAttributeBackdrop | starGiftAttributeOriginalDetails;

export type payments_StarGiftUpgradePreview = payments_starGiftUpgradePreview;

export type users_Users = users_users | users_usersSlice;

export type payments_UniqueStarGift = payments_uniqueStarGift;

export type messages_WebPagePreview = messages_webPagePreview;

export type SavedStarGift = savedStarGift;

export type payments_SavedStarGifts = payments_savedStarGifts;

export type InputSavedStarGift = inputSavedStarGiftUser | inputSavedStarGiftChat;

export type payments_StarGiftWithdrawalUrl = payments_starGiftWithdrawalUrl;

export type PaidReactionPrivacy = paidReactionPrivacyDefault | paidReactionPrivacyAnonymous | paidReactionPrivacyPeer;

export type account_PaidMessagesRevenue = account_paidMessagesRevenue;

export type RequirementToContact = requirementToContactEmpty | requirementToContactPremium | requirementToContactPaidMessages;

const idMap: Map<number, string> = new Map([
  [0x05162463, "resPQ"],
  [0xA9F55F95, "p_q_inner_data_dc"],
  [0x56FDDF88, "p_q_inner_data_temp_dc"],
  [0xD0E8075C, "server_DH_params_ok"],
  [0xB5890DBA, "server_DH_inner_data"],
  [0x6643B654, "client_DH_inner_data"],
  [0x3BCBF734, "dh_gen_ok"],
  [0x46DC1FB9, "dh_gen_retry"],
  [0xA69DAE02, "dh_gen_fail"],
  [0x75A3F765, "bind_auth_key_inner"],
  [0x2144CA19, "rpc_error"],
  [0x5E2AD36E, "rpc_answer_unknown"],
  [0xCD78E586, "rpc_answer_dropped_running"],
  [0xA43AD8B7, "rpc_answer_dropped"],
  [0x0949D9DC, "future_salt"],
  [0xAE500895, "future_salts"],
  [0x347773C5, "pong"],
  [0xE22045FC, "destroy_session_ok"],
  [0x62D350C9, "destroy_session_none"],
  [0x9EC20908, "new_session_created"],
  [0x3072CFA1, "gzip_packed"],
  [0x62D6B459, "msgs_ack"],
  [0xA7EFF811, "bad_msg_notification"],
  [0xEDAB447B, "bad_server_salt"],
  [0x7D861A08, "msg_resend_req"],
  [0xDA69FB52, "msgs_state_req"],
  [0x04DEB57D, "msgs_state_info"],
  [0x8CC0D131, "msgs_all_info"],
  [0x276D3EC6, "msg_detailed_info"],
  [0x809DB6DF, "msg_new_detailed_info"],
  [0xF660E1D4, "destroy_auth_key_ok"],
  [0x0A9F2259, "destroy_auth_key_none"],
  [0xEA109B13, "destroy_auth_key_fail"],
  [0x9299359F, "http_wait"],
  [0x3FEDD339, "true"],
  [0xC4B9F9BB, "error"],
  [0xD433AD73, "ipPort"],
  [0x37982646, "ipPortSecret"],
  [0x4679B65F, "accessPointRule"],
  [0x5A592A6C, "help.configSimple"],
  [0x27D69997, "inputPeerPhotoFileLocationLegacy"],
  [0x0DBAEAE9, "inputStickerSetThumbLegacy"],
  [0x7F3B18EA, "inputPeerEmpty"],
  [0x7DA07EC9, "inputPeerSelf"],
  [0x35A95CB9, "inputPeerChat"],
  [0xDDE8A54C, "inputPeerUser"],
  [0x27BCBBFC, "inputPeerChannel"],
  [0xA87B0A1C, "inputPeerUserFromMessage"],
  [0xBD2A0840, "inputPeerChannelFromMessage"],
  [0xB98886CF, "inputUserEmpty"],
  [0xF7C1B13F, "inputUserSelf"],
  [0xF21158C6, "inputUser"],
  [0x1DA448E2, "inputUserFromMessage"],
  [0xF392B7F4, "inputPhoneContact"],
  [0xF52FF27F, "inputFile"],
  [0xFA4F0BB5, "inputFileBig"],
  [0x62DC8B48, "inputFileStoryDocument"],
  [0x9664F57F, "inputMediaEmpty"],
  [0x1E287D04, "inputMediaUploadedPhoto"],
  [0xB3BA0635, "inputMediaPhoto"],
  [0xF9C44144, "inputMediaGeoPoint"],
  [0xF8AB7DFB, "inputMediaContact"],
  [0x037C9330, "inputMediaUploadedDocument"],
  [0xA8763AB5, "inputMediaDocument"],
  [0xC13D1C11, "inputMediaVenue"],
  [0xE5BBFE1A, "inputMediaPhotoExternal"],
  [0x779600F9, "inputMediaDocumentExternal"],
  [0xD33F43F3, "inputMediaGame"],
  [0x405FEF0D, "inputMediaInvoice"],
  [0x971FA843, "inputMediaGeoLive"],
  [0x0F94E5F1, "inputMediaPoll"],
  [0xE66FBF7B, "inputMediaDice"],
  [0x89FDD778, "inputMediaStory"],
  [0xC21B8849, "inputMediaWebPage"],
  [0xC4103386, "inputMediaPaidMedia"],
  [0x1CA48F57, "inputChatPhotoEmpty"],
  [0xBDCDAEC0, "inputChatUploadedPhoto"],
  [0x8953AD37, "inputChatPhoto"],
  [0xE4C123D6, "inputGeoPointEmpty"],
  [0x48222FAF, "inputGeoPoint"],
  [0x1CD7BF0D, "inputPhotoEmpty"],
  [0x3BB3B94A, "inputPhoto"],
  [0xDFDAABE1, "inputFileLocation"],
  [0xF5235D55, "inputEncryptedFileLocation"],
  [0xBAD07584, "inputDocumentFileLocation"],
  [0xCBC7EE28, "inputSecureFileLocation"],
  [0x29BE5899, "inputTakeoutFileLocation"],
  [0x40181FFE, "inputPhotoFileLocation"],
  [0xD83466F3, "inputPhotoLegacyFileLocation"],
  [0x37257E99, "inputPeerPhotoFileLocation"],
  [0x9D84F3DB, "inputStickerSetThumb"],
  [0x0598A92A, "inputGroupCallStream"],
  [0x59511722, "peerUser"],
  [0x36C6019A, "peerChat"],
  [0xA2A5371E, "peerChannel"],
  [0xAA963B05, "storage.fileUnknown"],
  [0x40BC6F52, "storage.filePartial"],
  [0x007EFE0E, "storage.fileJpeg"],
  [0xCAE1AADF, "storage.fileGif"],
  [0x0A4F63C0, "storage.filePng"],
  [0xAE1E508D, "storage.filePdf"],
  [0x528A0677, "storage.fileMp3"],
  [0x4B09EBBC, "storage.fileMov"],
  [0xB3CEA0E4, "storage.fileMp4"],
  [0x1081464C, "storage.fileWebp"],
  [0xD3BC4B7A, "userEmpty"],
  [0x020B1422, "user"],
  [0x4F11BAE1, "userProfilePhotoEmpty"],
  [0x82D1F706, "userProfilePhoto"],
  [0x09D05049, "userStatusEmpty"],
  [0xEDB93949, "userStatusOnline"],
  [0x008C703F, "userStatusOffline"],
  [0x7B197DC8, "userStatusRecently"],
  [0x541A1D1A, "userStatusLastWeek"],
  [0x65899777, "userStatusLastMonth"],
  [0x29562865, "chatEmpty"],
  [0x41CBF256, "chat"],
  [0x6592A1A7, "chatForbidden"],
  [0x7482147E, "channel"],
  [0x17D493D5, "channelForbidden"],
  [0x2633421B, "chatFull"],
  [0x52D6806B, "channelFull"],
  [0xC02D4007, "chatParticipant"],
  [0xE46BCEE4, "chatParticipantCreator"],
  [0xA0933F5B, "chatParticipantAdmin"],
  [0x8763D3E1, "chatParticipantsForbidden"],
  [0x3CBC93F8, "chatParticipants"],
  [0x37C1011C, "chatPhotoEmpty"],
  [0x1C6E1C11, "chatPhoto"],
  [0x90A6CA84, "messageEmpty"],
  [0xEABCDD4D, "message"],
  [0xD3D28540, "messageService"],
  [0x3DED6320, "messageMediaEmpty"],
  [0x695150D7, "messageMediaPhoto"],
  [0x56E0D474, "messageMediaGeo"],
  [0x70322949, "messageMediaContact"],
  [0x9F84F49E, "messageMediaUnsupported"],
  [0x52D8CCD9, "messageMediaDocument"],
  [0xDDF10C3B, "messageMediaWebPage"],
  [0x2EC0533F, "messageMediaVenue"],
  [0xFDB19008, "messageMediaGame"],
  [0xF6A548D3, "messageMediaInvoice"],
  [0xB940C666, "messageMediaGeoLive"],
  [0x4BD6E798, "messageMediaPoll"],
  [0x3F7EE58B, "messageMediaDice"],
  [0x68CB6283, "messageMediaStory"],
  [0xAA073BEB, "messageMediaGiveaway"],
  [0xCEAA3EA1, "messageMediaGiveawayResults"],
  [0xA8852491, "messageMediaPaidMedia"],
  [0xB6AEF7B0, "messageActionEmpty"],
  [0xBD47CBAD, "messageActionChatCreate"],
  [0xB5A1CE5A, "messageActionChatEditTitle"],
  [0x7FCB13A8, "messageActionChatEditPhoto"],
  [0x95E3FBEF, "messageActionChatDeletePhoto"],
  [0x15CEFD00, "messageActionChatAddUser"],
  [0xA43F30CC, "messageActionChatDeleteUser"],
  [0x031224C3, "messageActionChatJoinedByLink"],
  [0x95D2AC92, "messageActionChannelCreate"],
  [0xE1037F92, "messageActionChatMigrateTo"],
  [0xEA3948E9, "messageActionChannelMigrateFrom"],
  [0x94BD38ED, "messageActionPinMessage"],
  [0x9FBAB604, "messageActionHistoryClear"],
  [0x92A72876, "messageActionGameScore"],
  [0xFFA00CCC, "messageActionPaymentSentMe"],
  [0xC624B16E, "messageActionPaymentSent"],
  [0x80E11A7F, "messageActionPhoneCall"],
  [0x4792929B, "messageActionScreenshotTaken"],
  [0xFAE69F56, "messageActionCustomAction"],
  [0xC516D679, "messageActionBotAllowed"],
  [0x1B287353, "messageActionSecureValuesSentMe"],
  [0xD95C6154, "messageActionSecureValuesSent"],
  [0xF3F25F76, "messageActionContactSignUp"],
  [0x98E0D697, "messageActionGeoProximityReached"],
  [0x7A0D7F42, "messageActionGroupCall"],
  [0x502F92F7, "messageActionInviteToGroupCall"],
  [0x3C134D7B, "messageActionSetMessagesTTL"],
  [0xB3A07661, "messageActionGroupCallScheduled"],
  [0xAA786345, "messageActionSetChatTheme"],
  [0xEBBCA3CB, "messageActionChatJoinedByRequest"],
  [0x47DD8079, "messageActionWebViewDataSentMe"],
  [0xB4C38CB5, "messageActionWebViewDataSent"],
  [0x6C6274FA, "messageActionGiftPremium"],
  [0x0D999256, "messageActionTopicCreate"],
  [0xC0944820, "messageActionTopicEdit"],
  [0x57DE635E, "messageActionSuggestProfilePhoto"],
  [0x31518E9B, "messageActionRequestedPeer"],
  [0x5060A3F4, "messageActionSetChatWallPaper"],
  [0x56D03994, "messageActionGiftCode"],
  [0xA80F51E4, "messageActionGiveawayLaunch"],
  [0x87E2F155, "messageActionGiveawayResults"],
  [0xCC02AA6D, "messageActionBoostApply"],
  [0x93B31848, "messageActionRequestedPeerSentMe"],
  [0x41B3E202, "messageActionPaymentRefunded"],
  [0x45D5B021, "messageActionGiftStars"],
  [0xB00C47A2, "messageActionPrizeStars"],
  [0x4717E8A4, "messageActionStarGift"],
  [0xACDFCB81, "messageActionStarGiftUnique"],
  [0xD58A08C6, "dialog"],
  [0x71BD134C, "dialogFolder"],
  [0x2331B22D, "photoEmpty"],
  [0xFB197A65, "photo"],
  [0x0E17E23C, "photoSizeEmpty"],
  [0x75C78E60, "photoSize"],
  [0x021E1AD6, "photoCachedSize"],
  [0xE0B0BC2E, "photoStrippedSize"],
  [0xFA3EFB95, "photoSizeProgressive"],
  [0xD8214D41, "photoPathSize"],
  [0x1117DD5F, "geoPointEmpty"],
  [0xB2A2F663, "geoPoint"],
  [0x5E002502, "auth.sentCode"],
  [0x2390FE44, "auth.sentCodeSuccess"],
  [0x2EA2C0D4, "auth.authorization"],
  [0x44747E9A, "auth.authorizationSignUpRequired"],
  [0xB434E2B8, "auth.exportedAuthorization"],
  [0xB8BC5B0C, "inputNotifyPeer"],
  [0x193B4417, "inputNotifyUsers"],
  [0x4A95E84E, "inputNotifyChats"],
  [0xB1DB7C7E, "inputNotifyBroadcasts"],
  [0x5C467992, "inputNotifyForumTopic"],
  [0xCACB6AE2, "inputPeerNotifySettings"],
  [0x99622C0C, "peerNotifySettings"],
  [0xF47741F7, "peerSettings"],
  [0xA437C3ED, "wallPaper"],
  [0xE0804116, "wallPaperNoFile"],
  [0x58DBCAB8, "inputReportReasonSpam"],
  [0x1E22C78D, "inputReportReasonViolence"],
  [0x2E59D922, "inputReportReasonPornography"],
  [0xADF44EE3, "inputReportReasonChildAbuse"],
  [0xC1E4A2B1, "inputReportReasonOther"],
  [0x9B89F93A, "inputReportReasonCopyright"],
  [0xDBD4FEED, "inputReportReasonGeoIrrelevant"],
  [0xF5DDD6E7, "inputReportReasonFake"],
  [0x0A8EB2BE, "inputReportReasonIllegalDrugs"],
  [0x9EC7863D, "inputReportReasonPersonalDetails"],
  [0xD2234EA0, "userFull"],
  [0x145ADE0B, "contact"],
  [0xC13E3C50, "importedContact"],
  [0x16D9703B, "contactStatus"],
  [0xB74BA9D2, "contacts.contactsNotModified"],
  [0xEAE87E42, "contacts.contacts"],
  [0x77D01C3B, "contacts.importedContacts"],
  [0x0ADE1591, "contacts.blocked"],
  [0xE1664194, "contacts.blockedSlice"],
  [0x15BA6C40, "messages.dialogs"],
  [0x71E094F3, "messages.dialogsSlice"],
  [0xF0E3E596, "messages.dialogsNotModified"],
  [0x8C718E87, "messages.messages"],
  [0x3A54685E, "messages.messagesSlice"],
  [0xC776BA4E, "messages.channelMessages"],
  [0x74535F21, "messages.messagesNotModified"],
  [0x64FF9FD5, "messages.chats"],
  [0x9CD81144, "messages.chatsSlice"],
  [0xE5D7D19C, "messages.chatFull"],
  [0xB45C69D1, "messages.affectedHistory"],
  [0x57E2F66C, "inputMessagesFilterEmpty"],
  [0x9609A51C, "inputMessagesFilterPhotos"],
  [0x9FC00E65, "inputMessagesFilterVideo"],
  [0x56E9F0E4, "inputMessagesFilterPhotoVideo"],
  [0x9EDDF188, "inputMessagesFilterDocument"],
  [0x7EF0DD87, "inputMessagesFilterUrl"],
  [0xFFC86587, "inputMessagesFilterGif"],
  [0x50F5C392, "inputMessagesFilterVoice"],
  [0x3751B49E, "inputMessagesFilterMusic"],
  [0x3A20ECB8, "inputMessagesFilterChatPhotos"],
  [0x80C99768, "inputMessagesFilterPhoneCalls"],
  [0x7A7C17A4, "inputMessagesFilterRoundVoice"],
  [0xB549DA53, "inputMessagesFilterRoundVideo"],
  [0xC1F8E69A, "inputMessagesFilterMyMentions"],
  [0xE7026D0D, "inputMessagesFilterGeo"],
  [0xE062DB83, "inputMessagesFilterContacts"],
  [0x1BB00451, "inputMessagesFilterPinned"],
  [0x1F2B0AFD, "updateNewMessage"],
  [0x4E90BFD6, "updateMessageID"],
  [0xA20DB0E5, "updateDeleteMessages"],
  [0xC01E857F, "updateUserTyping"],
  [0x83487AF0, "updateChatUserTyping"],
  [0x07761198, "updateChatParticipants"],
  [0xE5BDF8DE, "updateUserStatus"],
  [0xA7848924, "updateUserName"],
  [0x8951ABEF, "updateNewAuthorization"],
  [0x12BCBD9A, "updateNewEncryptedMessage"],
  [0x1710F156, "updateEncryptedChatTyping"],
  [0xB4A2E88D, "updateEncryption"],
  [0x38FE25B7, "updateEncryptedMessagesRead"],
  [0x3DDA5451, "updateChatParticipantAdd"],
  [0xE32F3D77, "updateChatParticipantDelete"],
  [0x8E5E9873, "updateDcOptions"],
  [0xBEC268EF, "updateNotifySettings"],
  [0xEBE46819, "updateServiceNotification"],
  [0xEE3B272A, "updatePrivacy"],
  [0x05492A13, "updateUserPhone"],
  [0x9C974FDF, "updateReadHistoryInbox"],
  [0x2F2F21BF, "updateReadHistoryOutbox"],
  [0x7F891213, "updateWebPage"],
  [0xF8227181, "updateReadMessagesContents"],
  [0x108D941F, "updateChannelTooLong"],
  [0x635B4C09, "updateChannel"],
  [0x62BA04D9, "updateNewChannelMessage"],
  [0x922E6E10, "updateReadChannelInbox"],
  [0xC32D5B12, "updateDeleteChannelMessages"],
  [0xF226AC08, "updateChannelMessageViews"],
  [0xD7CA61A2, "updateChatParticipantAdmin"],
  [0x688A30AA, "updateNewStickerSet"],
  [0x0BB2D201, "updateStickerSetsOrder"],
  [0x31C24808, "updateStickerSets"],
  [0x9375341E, "updateSavedGifs"],
  [0x496F379C, "updateBotInlineQuery"],
  [0x12F12A07, "updateBotInlineSend"],
  [0x1B3F4DF7, "updateEditChannelMessage"],
  [0xB9CFC48D, "updateBotCallbackQuery"],
  [0xE40370A3, "updateEditMessage"],
  [0x691E9052, "updateInlineBotCallbackQuery"],
  [0xB75F99A9, "updateReadChannelOutbox"],
  [0x1B49EC6D, "updateDraftMessage"],
  [0x571D2742, "updateReadFeaturedStickers"],
  [0x9A422C20, "updateRecentStickers"],
  [0xA229DD06, "updateConfig"],
  [0x3354678F, "updatePtsChanged"],
  [0x2F2BA99F, "updateChannelWebPage"],
  [0x6E6FE51C, "updateDialogPinned"],
  [0xFA0F3CA2, "updatePinnedDialogs"],
  [0x8317C0C3, "updateBotWebhookJSON"],
  [0x9B9240A6, "updateBotWebhookJSONQuery"],
  [0xB5AEFD7D, "updateBotShippingQuery"],
  [0x8CAA9A96, "updateBotPrecheckoutQuery"],
  [0xAB0F6B1E, "updatePhoneCall"],
  [0x46560264, "updateLangPackTooLong"],
  [0x56022F4D, "updateLangPack"],
  [0xE511996D, "updateFavedStickers"],
  [0xEA29055D, "updateChannelReadMessagesContents"],
  [0x7084A7BE, "updateContactsReset"],
  [0xB23FC698, "updateChannelAvailableMessages"],
  [0xE16459C3, "updateDialogUnreadMark"],
  [0xACA1657B, "updateMessagePoll"],
  [0x54C01850, "updateChatDefaultBannedRights"],
  [0x19360DC0, "updateFolderPeers"],
  [0x6A7E7366, "updatePeerSettings"],
  [0xB4AFCFB0, "updatePeerLocated"],
  [0x39A51DFB, "updateNewScheduledMessage"],
  [0xF2A71983, "updateDeleteScheduledMessages"],
  [0x8216FBA3, "updateTheme"],
  [0x871FB939, "updateGeoLiveViewed"],
  [0x564FE691, "updateLoginToken"],
  [0x24F40E77, "updateMessagePollVote"],
  [0x26FFDE7D, "updateDialogFilter"],
  [0xA5D72105, "updateDialogFilterOrder"],
  [0x3504914F, "updateDialogFilters"],
  [0x2661BF09, "updatePhoneCallSignalingData"],
  [0xD29A27F4, "updateChannelMessageForwards"],
  [0xD6B19546, "updateReadChannelDiscussionInbox"],
  [0x695C9E7C, "updateReadChannelDiscussionOutbox"],
  [0xEBE07752, "updatePeerBlocked"],
  [0x8C88C923, "updateChannelUserTyping"],
  [0xED85EAB5, "updatePinnedMessages"],
  [0x5BB98608, "updatePinnedChannelMessages"],
  [0xF89A6A4E, "updateChat"],
  [0xF2EBDB4E, "updateGroupCallParticipants"],
  [0x97D64341, "updateGroupCall"],
  [0xBB9BB9A5, "updatePeerHistoryTTL"],
  [0xD087663A, "updateChatParticipant"],
  [0x985D3ABB, "updateChannelParticipant"],
  [0xC4870A49, "updateBotStopped"],
  [0x0B783982, "updateGroupCallConnection"],
  [0x4D712F2E, "updateBotCommands"],
  [0x7063C3DB, "updatePendingJoinRequests"],
  [0x11DFA986, "updateBotChatInviteRequester"],
  [0x5E1B3CB8, "updateMessageReactions"],
  [0x17B7A20B, "updateAttachMenuBots"],
  [0x1592B79D, "updateWebViewResultSent"],
  [0x14B85813, "updateBotMenuButton"],
  [0x74D8BE99, "updateSavedRingtones"],
  [0x0084CD5A, "updateTranscribedAudio"],
  [0xFB4C496C, "updateReadFeaturedEmojiStickers"],
  [0x28373599, "updateUserEmojiStatus"],
  [0x30F443DB, "updateRecentEmojiStatuses"],
  [0x6F7863F4, "updateRecentReactions"],
  [0x86FCCF85, "updateMoveStickerSetToTop"],
  [0xD5A41724, "updateMessageExtendedMedia"],
  [0x192EFBE3, "updateChannelPinnedTopic"],
  [0xFE198602, "updateChannelPinnedTopics"],
  [0x20529438, "updateUser"],
  [0xEC05B097, "updateAutoSaveSettings"],
  [0x75B3B798, "updateStory"],
  [0xF74E932B, "updateReadStories"],
  [0x1BF335B9, "updateStoryID"],
  [0x2C084DC1, "updateStoriesStealthMode"],
  [0x7D627683, "updateSentStoryReaction"],
  [0x904DD49C, "updateBotChatBoost"],
  [0x07B68920, "updateChannelViewForumAsMessages"],
  [0xAE3F101D, "updatePeerWallpaper"],
  [0xAC21D3CE, "updateBotMessageReaction"],
  [0x09CB7759, "updateBotMessageReactions"],
  [0xAEAF9E74, "updateSavedDialogPinned"],
  [0x686C85A6, "updatePinnedSavedDialogs"],
  [0x39C67432, "updateSavedReactionTags"],
  [0xF16269D4, "updateSmsJob"],
  [0xF9470AB2, "updateQuickReplies"],
  [0xF53DA717, "updateNewQuickReply"],
  [0x53E6F1EC, "updateDeleteQuickReply"],
  [0x3E050D0F, "updateQuickReplyMessage"],
  [0x566FE7CD, "updateDeleteQuickReplyMessages"],
  [0x8AE5C97A, "updateBotBusinessConnect"],
  [0x9DDB347C, "updateBotNewBusinessMessage"],
  [0x07DF587C, "updateBotEditBusinessMessage"],
  [0xA02A982E, "updateBotDeleteBusinessMessage"],
  [0x1824E40B, "updateNewStoryReaction"],
  [0xDFD961F5, "updateBroadcastRevenueTransactions"],
  [0x4E80A379, "updateStarsBalance"],
  [0x1EA2FDA7, "updateBusinessBotCallbackQuery"],
  [0xA584B019, "updateStarsRevenueStatus"],
  [0x283BD312, "updateBotPurchasedPaidMedia"],
  [0x8B725FCE, "updatePaidReactionPrivacy"],
  [0xA56C2A3E, "updates.state"],
  [0x5D75A138, "updates.differenceEmpty"],
  [0x00F49CA0, "updates.difference"],
  [0xA8FB1981, "updates.differenceSlice"],
  [0x4AFE8F6D, "updates.differenceTooLong"],
  [0xE317AF7E, "updatesTooLong"],
  [0x313BC7F8, "updateShortMessage"],
  [0x4D6DEEA5, "updateShortChatMessage"],
  [0x78D4DEC1, "updateShort"],
  [0x725B04C3, "updatesCombined"],
  [0x74AE4240, "updates"],
  [0x9015E101, "updateShortSentMessage"],
  [0x8DCA6AA5, "photos.photos"],
  [0x15051F54, "photos.photosSlice"],
  [0x20212CA8, "photos.photo"],
  [0x096A18D5, "upload.file"],
  [0xF18CDA44, "upload.fileCdnRedirect"],
  [0x18B7A10D, "dcOption"],
  [0xCC1A241E, "config"],
  [0x8E1A1775, "nearestDc"],
  [0xCCBBCE30, "help.appUpdate"],
  [0xC45A6536, "help.noAppUpdate"],
  [0x18CB9F78, "help.inviteText"],
  [0xAB7EC0A0, "encryptedChatEmpty"],
  [0x66B25953, "encryptedChatWaiting"],
  [0x48F1D94C, "encryptedChatRequested"],
  [0x61F0D4C7, "encryptedChat"],
  [0x1E1C7C45, "encryptedChatDiscarded"],
  [0xF141B5E1, "inputEncryptedChat"],
  [0xC21F497E, "encryptedFileEmpty"],
  [0xA8008CD8, "encryptedFile"],
  [0x1837C364, "inputEncryptedFileEmpty"],
  [0x64BD0306, "inputEncryptedFileUploaded"],
  [0x5A17B5E5, "inputEncryptedFile"],
  [0x2DC173C8, "inputEncryptedFileBigUploaded"],
  [0xED18C118, "encryptedMessage"],
  [0x23734B06, "encryptedMessageService"],
  [0xC0E24635, "messages.dhConfigNotModified"],
  [0x2C221EDD, "messages.dhConfig"],
  [0x560F8935, "messages.sentEncryptedMessage"],
  [0x9493FF32, "messages.sentEncryptedFile"],
  [0x72F0EAAE, "inputDocumentEmpty"],
  [0x1ABFB575, "inputDocument"],
  [0x36F8C871, "documentEmpty"],
  [0x8FD4C4D8, "document"],
  [0x17C6B5F6, "help.support"],
  [0x9FD40BD8, "notifyPeer"],
  [0xB4C83B4C, "notifyUsers"],
  [0xC007CEC3, "notifyChats"],
  [0xD612E8EF, "notifyBroadcasts"],
  [0x226E6308, "notifyForumTopic"],
  [0x16BF744E, "sendMessageTypingAction"],
  [0xFD5EC8F5, "sendMessageCancelAction"],
  [0xA187D66F, "sendMessageRecordVideoAction"],
  [0xE9763AEC, "sendMessageUploadVideoAction"],
  [0xD52F73F7, "sendMessageRecordAudioAction"],
  [0xF351D7AB, "sendMessageUploadAudioAction"],
  [0xD1D34A26, "sendMessageUploadPhotoAction"],
  [0xAA0CD9E4, "sendMessageUploadDocumentAction"],
  [0x176F8BA1, "sendMessageGeoLocationAction"],
  [0x628CBC6F, "sendMessageChooseContactAction"],
  [0xDD6A8F48, "sendMessageGamePlayAction"],
  [0x88F27FBC, "sendMessageRecordRoundAction"],
  [0x243E1C66, "sendMessageUploadRoundAction"],
  [0xD92C2285, "speakingInGroupCallAction"],
  [0xDBDA9246, "sendMessageHistoryImportAction"],
  [0xB05AC6B1, "sendMessageChooseStickerAction"],
  [0x25972BCB, "sendMessageEmojiInteraction"],
  [0xB665902E, "sendMessageEmojiInteractionSeen"],
  [0xB3134D9D, "contacts.found"],
  [0x4F96CB18, "inputPrivacyKeyStatusTimestamp"],
  [0xBDFB0426, "inputPrivacyKeyChatInvite"],
  [0xFABADC5F, "inputPrivacyKeyPhoneCall"],
  [0xDB9E70D2, "inputPrivacyKeyPhoneP2P"],
  [0xA4DD4C08, "inputPrivacyKeyForwards"],
  [0x5719BACC, "inputPrivacyKeyProfilePhoto"],
  [0x0352DAFA, "inputPrivacyKeyPhoneNumber"],
  [0xD1219BDD, "inputPrivacyKeyAddedByPhone"],
  [0xAEE69D68, "inputPrivacyKeyVoiceMessages"],
  [0x3823CC40, "inputPrivacyKeyAbout"],
  [0xD65A11CC, "inputPrivacyKeyBirthday"],
  [0xE1732341, "inputPrivacyKeyStarGiftsAutoSave"],
  [0xBDC597B4, "inputPrivacyKeyNoPaidMessages"],
  [0xBC2EAB30, "privacyKeyStatusTimestamp"],
  [0x500E6DFA, "privacyKeyChatInvite"],
  [0x3D662B7B, "privacyKeyPhoneCall"],
  [0x39491CC8, "privacyKeyPhoneP2P"],
  [0x69EC56A3, "privacyKeyForwards"],
  [0x96151FED, "privacyKeyProfilePhoto"],
  [0xD19AE46D, "privacyKeyPhoneNumber"],
  [0x42FFD42B, "privacyKeyAddedByPhone"],
  [0x0697F414, "privacyKeyVoiceMessages"],
  [0xA486B761, "privacyKeyAbout"],
  [0x2000A518, "privacyKeyBirthday"],
  [0x2CA4FDF8, "privacyKeyStarGiftsAutoSave"],
  [0x17D348D2, "privacyKeyNoPaidMessages"],
  [0x0D09E07B, "inputPrivacyValueAllowContacts"],
  [0x184B35CE, "inputPrivacyValueAllowAll"],
  [0x131CC67F, "inputPrivacyValueAllowUsers"],
  [0x0BA52007, "inputPrivacyValueDisallowContacts"],
  [0xD66B66C9, "inputPrivacyValueDisallowAll"],
  [0x90110467, "inputPrivacyValueDisallowUsers"],
  [0x840649CF, "inputPrivacyValueAllowChatParticipants"],
  [0xE94F0F86, "inputPrivacyValueDisallowChatParticipants"],
  [0x2F453E49, "inputPrivacyValueAllowCloseFriends"],
  [0x77CDC9F1, "inputPrivacyValueAllowPremium"],
  [0x5A4FCCE5, "inputPrivacyValueAllowBots"],
  [0xC4E57915, "inputPrivacyValueDisallowBots"],
  [0xFFFE1BAC, "privacyValueAllowContacts"],
  [0x65427B82, "privacyValueAllowAll"],
  [0xB8905FB2, "privacyValueAllowUsers"],
  [0xF888FA1A, "privacyValueDisallowContacts"],
  [0x8B73E763, "privacyValueDisallowAll"],
  [0xE4621141, "privacyValueDisallowUsers"],
  [0x6B134E8E, "privacyValueAllowChatParticipants"],
  [0x41C87565, "privacyValueDisallowChatParticipants"],
  [0xF7E8D89B, "privacyValueAllowCloseFriends"],
  [0xECE9814B, "privacyValueAllowPremium"],
  [0x21461B5D, "privacyValueAllowBots"],
  [0xF6A5F82F, "privacyValueDisallowBots"],
  [0x50A04E45, "account.privacyRules"],
  [0xB8D0AFDF, "accountDaysTTL"],
  [0x6C37C15C, "documentAttributeImageSize"],
  [0x11B58939, "documentAttributeAnimated"],
  [0x6319D612, "documentAttributeSticker"],
  [0x43C57C48, "documentAttributeVideo"],
  [0x9852F9C6, "documentAttributeAudio"],
  [0x15590068, "documentAttributeFilename"],
  [0x9801D2F7, "documentAttributeHasStickers"],
  [0xFD149899, "documentAttributeCustomEmoji"],
  [0xF1749A22, "messages.stickersNotModified"],
  [0x30A6EC7E, "messages.stickers"],
  [0x12B299D4, "stickerPack"],
  [0xE86602C3, "messages.allStickersNotModified"],
  [0xCDBBCEBB, "messages.allStickers"],
  [0x84D19185, "messages.affectedMessages"],
  [0x211A1788, "webPageEmpty"],
  [0xB0D13E47, "webPagePending"],
  [0xE89C45B2, "webPage"],
  [0x7311CA11, "webPageNotModified"],
  [0xAD01D61D, "authorization"],
  [0x4BFF8EA0, "account.authorizations"],
  [0x957B50FB, "account.password"],
  [0x9A5C33E5, "account.passwordSettings"],
  [0xC23727C9, "account.passwordInputSettings"],
  [0x137948A5, "auth.passwordRecovery"],
  [0xA384B779, "receivedNotifyMessage"],
  [0xA22CBD96, "chatInviteExported"],
  [0xED107AB7, "chatInvitePublicJoinRequests"],
  [0x5A686D7C, "chatInviteAlready"],
  [0x5C9D3702, "chatInvite"],
  [0x61695CB0, "chatInvitePeek"],
  [0xFFB62B95, "inputStickerSetEmpty"],
  [0x9DE7A269, "inputStickerSetID"],
  [0x861CC8A0, "inputStickerSetShortName"],
  [0x028703C8, "inputStickerSetAnimatedEmoji"],
  [0xE67F520E, "inputStickerSetDice"],
  [0x0CDE3739, "inputStickerSetAnimatedEmojiAnimations"],
  [0xC88B3B02, "inputStickerSetPremiumGifts"],
  [0x04C4D4CE, "inputStickerSetEmojiGenericAnimations"],
  [0x29D0F5EE, "inputStickerSetEmojiDefaultStatuses"],
  [0x44C1F8E9, "inputStickerSetEmojiDefaultTopicIcons"],
  [0x49748553, "inputStickerSetEmojiChannelDefaultStatuses"],
  [0x2DD14EDC, "stickerSet"],
  [0x6E153F16, "messages.stickerSet"],
  [0xD3F924EB, "messages.stickerSetNotModified"],
  [0xC27AC8C7, "botCommand"],
  [0x4D8A0299, "botInfo"],
  [0xA2FA4880, "keyboardButton"],
  [0x258AFF05, "keyboardButtonUrl"],
  [0x35BBDB6B, "keyboardButtonCallback"],
  [0xB16A6C29, "keyboardButtonRequestPhone"],
  [0xFC796B3F, "keyboardButtonRequestGeoLocation"],
  [0x93B9FBB5, "keyboardButtonSwitchInline"],
  [0x50F41CCF, "keyboardButtonGame"],
  [0xAFD93FBB, "keyboardButtonBuy"],
  [0x10B78D29, "keyboardButtonUrlAuth"],
  [0xD02E7FD4, "inputKeyboardButtonUrlAuth"],
  [0xBBC7515D, "keyboardButtonRequestPoll"],
  [0xE988037B, "inputKeyboardButtonUserProfile"],
  [0x308660C1, "keyboardButtonUserProfile"],
  [0x13767230, "keyboardButtonWebView"],
  [0xA0C0505C, "keyboardButtonSimpleWebView"],
  [0x53D7BFD8, "keyboardButtonRequestPeer"],
  [0xC9662D05, "inputKeyboardButtonRequestPeer"],
  [0x75D2698E, "keyboardButtonCopy"],
  [0x77608B83, "keyboardButtonRow"],
  [0xA03E5B85, "replyKeyboardHide"],
  [0x86B40B08, "replyKeyboardForceReply"],
  [0x85DD99D1, "replyKeyboardMarkup"],
  [0x48A30254, "replyInlineMarkup"],
  [0xBB92BA95, "messageEntityUnknown"],
  [0xFA04579D, "messageEntityMention"],
  [0x6F635B0D, "messageEntityHashtag"],
  [0x6CEF8AC7, "messageEntityBotCommand"],
  [0x6ED02538, "messageEntityUrl"],
  [0x64E475C2, "messageEntityEmail"],
  [0xBD610BC9, "messageEntityBold"],
  [0x826F8B60, "messageEntityItalic"],
  [0x28A20571, "messageEntityCode"],
  [0x73924BE0, "messageEntityPre"],
  [0x76A6D327, "messageEntityTextUrl"],
  [0xDC7B1140, "messageEntityMentionName"],
  [0x208E68C9, "inputMessageEntityMentionName"],
  [0x9B69E34B, "messageEntityPhone"],
  [0x4C4E743F, "messageEntityCashtag"],
  [0x9C4E7E8B, "messageEntityUnderline"],
  [0xBF0693D4, "messageEntityStrike"],
  [0x761E6AF4, "messageEntityBankCard"],
  [0x32CA960F, "messageEntitySpoiler"],
  [0xC8CF05F8, "messageEntityCustomEmoji"],
  [0xF1CCAAAC, "messageEntityBlockquote"],
  [0xEE8C1E86, "inputChannelEmpty"],
  [0xF35AEC28, "inputChannel"],
  [0x5B934F9D, "inputChannelFromMessage"],
  [0x7F077AD9, "contacts.resolvedPeer"],
  [0x0AE30253, "messageRange"],
  [0x3E11AFFB, "updates.channelDifferenceEmpty"],
  [0xA4BCC6FE, "updates.channelDifferenceTooLong"],
  [0x2064674E, "updates.channelDifference"],
  [0x94D42EE7, "channelMessagesFilterEmpty"],
  [0xCD77D957, "channelMessagesFilter"],
  [0xCB397619, "channelParticipant"],
  [0x4F607BEF, "channelParticipantSelf"],
  [0x2FE601D3, "channelParticipantCreator"],
  [0x34C3BB53, "channelParticipantAdmin"],
  [0x6DF8014E, "channelParticipantBanned"],
  [0x1B03F006, "channelParticipantLeft"],
  [0xDE3F3C79, "channelParticipantsRecent"],
  [0xB4608969, "channelParticipantsAdmins"],
  [0xA3B54985, "channelParticipantsKicked"],
  [0xB0D1865B, "channelParticipantsBots"],
  [0x1427A5E1, "channelParticipantsBanned"],
  [0x0656AC4B, "channelParticipantsSearch"],
  [0xBB6AE88D, "channelParticipantsContacts"],
  [0xE04B5CEB, "channelParticipantsMentions"],
  [0x9AB0FEAF, "channels.channelParticipants"],
  [0xF0173FE9, "channels.channelParticipantsNotModified"],
  [0xDFB80317, "channels.channelParticipant"],
  [0x780A0310, "help.termsOfService"],
  [0xE8025CA2, "messages.savedGifsNotModified"],
  [0x84A02A0D, "messages.savedGifs"],
  [0x3380C786, "inputBotInlineMessageMediaAuto"],
  [0x3DCD7A87, "inputBotInlineMessageText"],
  [0x96929A85, "inputBotInlineMessageMediaGeo"],
  [0x417BBF11, "inputBotInlineMessageMediaVenue"],
  [0xA6EDBFFD, "inputBotInlineMessageMediaContact"],
  [0x4B425864, "inputBotInlineMessageGame"],
  [0xD7E78225, "inputBotInlineMessageMediaInvoice"],
  [0xBDDCC510, "inputBotInlineMessageMediaWebPage"],
  [0x88BF9319, "inputBotInlineResult"],
  [0xA8D864A7, "inputBotInlineResultPhoto"],
  [0xFFF8FDC4, "inputBotInlineResultDocument"],
  [0x4FA417F2, "inputBotInlineResultGame"],
  [0x764CF810, "botInlineMessageMediaAuto"],
  [0x8C7F65E2, "botInlineMessageText"],
  [0x051846FD, "botInlineMessageMediaGeo"],
  [0x8A86659C, "botInlineMessageMediaVenue"],
  [0x18D1CDC2, "botInlineMessageMediaContact"],
  [0x354A9B09, "botInlineMessageMediaInvoice"],
  [0x809AD9A6, "botInlineMessageMediaWebPage"],
  [0x11965F3A, "botInlineResult"],
  [0x17DB940B, "botInlineMediaResult"],
  [0xE021F2F6, "messages.botResults"],
  [0x5DAB1AF4, "exportedMessageLink"],
  [0x4E4DF4BB, "messageFwdHeader"],
  [0x72A3158C, "auth.codeTypeSms"],
  [0x741CD3E3, "auth.codeTypeCall"],
  [0x226CCEFB, "auth.codeTypeFlashCall"],
  [0xD61AD6EE, "auth.codeTypeMissedCall"],
  [0x06ED998C, "auth.codeTypeFragmentSms"],
  [0x3DBB5986, "auth.sentCodeTypeApp"],
  [0xC000BBA2, "auth.sentCodeTypeSms"],
  [0x5353E5A7, "auth.sentCodeTypeCall"],
  [0xAB03C6D9, "auth.sentCodeTypeFlashCall"],
  [0x82006484, "auth.sentCodeTypeMissedCall"],
  [0xF450F59B, "auth.sentCodeTypeEmailCode"],
  [0xA5491DEA, "auth.sentCodeTypeSetUpEmailRequired"],
  [0xD9565C39, "auth.sentCodeTypeFragmentSms"],
  [0x009FD736, "auth.sentCodeTypeFirebaseSms"],
  [0xA416AC81, "auth.sentCodeTypeSmsWord"],
  [0xB37794AF, "auth.sentCodeTypeSmsPhrase"],
  [0x36585EA4, "messages.botCallbackAnswer"],
  [0x26B5DDE6, "messages.messageEditData"],
  [0x890C3D89, "inputBotInlineMessageID"],
  [0xB6D915D7, "inputBotInlineMessageID64"],
  [0x3C20629F, "inlineBotSwitchPM"],
  [0x3371C354, "messages.peerDialogs"],
  [0xEDCDC05B, "topPeer"],
  [0xAB661B5B, "topPeerCategoryBotsPM"],
  [0x148677E2, "topPeerCategoryBotsInline"],
  [0x0637B7ED, "topPeerCategoryCorrespondents"],
  [0xBD17A14A, "topPeerCategoryGroups"],
  [0x161D9628, "topPeerCategoryChannels"],
  [0x1E76A78C, "topPeerCategoryPhoneCalls"],
  [0xA8406CA9, "topPeerCategoryForwardUsers"],
  [0xFBEEC0F0, "topPeerCategoryForwardChats"],
  [0xFD9E7BEC, "topPeerCategoryBotsApp"],
  [0xFB834291, "topPeerCategoryPeers"],
  [0xDE266EF5, "contacts.topPeersNotModified"],
  [0x70B772A8, "contacts.topPeers"],
  [0xB52C939D, "contacts.topPeersDisabled"],
  [0x1B0C841A, "draftMessageEmpty"],
  [0x2D65321F, "draftMessage"],
  [0xC6DC0C66, "messages.featuredStickersNotModified"],
  [0xBE382906, "messages.featuredStickers"],
  [0x0B17F890, "messages.recentStickersNotModified"],
  [0x88D37C56, "messages.recentStickers"],
  [0x4FCBA9C8, "messages.archivedStickers"],
  [0x38641628, "messages.stickerSetInstallResultSuccess"],
  [0x35E410A8, "messages.stickerSetInstallResultArchive"],
  [0x6410A5D2, "stickerSetCovered"],
  [0x3407E51B, "stickerSetMultiCovered"],
  [0x40D13C0E, "stickerSetFullCovered"],
  [0x77B15D1C, "stickerSetNoCovered"],
  [0xAED6DBB2, "maskCoords"],
  [0x4A992157, "inputStickeredMediaPhoto"],
  [0x0438865B, "inputStickeredMediaDocument"],
  [0xBDF9653B, "game"],
  [0x032C3E77, "inputGameID"],
  [0xC331E80A, "inputGameShortName"],
  [0x73A379EB, "highScore"],
  [0x9A3BFD99, "messages.highScores"],
  [0xDC3D824F, "textEmpty"],
  [0x744694E0, "textPlain"],
  [0x6724ABC4, "textBold"],
  [0xD912A59C, "textItalic"],
  [0xC12622C4, "textUnderline"],
  [0x9BF8BB95, "textStrike"],
  [0x6C3F19B9, "textFixed"],
  [0x3C2884C1, "textUrl"],
  [0xDE5A0DD6, "textEmail"],
  [0x7E6260D7, "textConcat"],
  [0xED6A8504, "textSubscript"],
  [0xC7FB5E01, "textSuperscript"],
  [0x034B8621, "textMarked"],
  [0x1CCB966A, "textPhone"],
  [0x081CCF4F, "textImage"],
  [0x35553762, "textAnchor"],
  [0x13567E8A, "pageBlockUnsupported"],
  [0x70ABC3FD, "pageBlockTitle"],
  [0x8FFA9A1F, "pageBlockSubtitle"],
  [0xBAAFE5E0, "pageBlockAuthorDate"],
  [0xBFD064EC, "pageBlockHeader"],
  [0xF12BB6E1, "pageBlockSubheader"],
  [0x467A0766, "pageBlockParagraph"],
  [0xC070D93E, "pageBlockPreformatted"],
  [0x48870999, "pageBlockFooter"],
  [0xDB20B188, "pageBlockDivider"],
  [0xCE0D37B0, "pageBlockAnchor"],
  [0xE4E88011, "pageBlockList"],
  [0x263D7C26, "pageBlockBlockquote"],
  [0x4F4456D3, "pageBlockPullquote"],
  [0x1759C560, "pageBlockPhoto"],
  [0x7C8FE7B6, "pageBlockVideo"],
  [0x39F23300, "pageBlockCover"],
  [0xA8718DC5, "pageBlockEmbed"],
  [0xF259A80B, "pageBlockEmbedPost"],
  [0x65A0FA4D, "pageBlockCollage"],
  [0x031F9590, "pageBlockSlideshow"],
  [0xEF1751B5, "pageBlockChannel"],
  [0x804361EA, "pageBlockAudio"],
  [0x1E148390, "pageBlockKicker"],
  [0xBF4DEA82, "pageBlockTable"],
  [0x9A8AE1E1, "pageBlockOrderedList"],
  [0x76768BED, "pageBlockDetails"],
  [0x16115A96, "pageBlockRelatedArticles"],
  [0xA44F3EF6, "pageBlockMap"],
  [0x85E42301, "phoneCallDiscardReasonMissed"],
  [0xE095C1A0, "phoneCallDiscardReasonDisconnect"],
  [0x57ADC690, "phoneCallDiscardReasonHangup"],
  [0xFAF7E8C9, "phoneCallDiscardReasonBusy"],
  [0xAFE2B839, "phoneCallDiscardReasonAllowGroupCall"],
  [0x7D748D04, "dataJSON"],
  [0xCB296BF8, "labeledPrice"],
  [0x049EE584, "invoice"],
  [0xEA02C27E, "paymentCharge"],
  [0x1E8CAAEB, "postAddress"],
  [0x909C3F94, "paymentRequestedInfo"],
  [0xCDC27A1F, "paymentSavedCredentialsCard"],
  [0x1C570ED1, "webDocument"],
  [0xF9C8BCC6, "webDocumentNoProxy"],
  [0x9BED434D, "inputWebDocument"],
  [0xC239D686, "inputWebFileLocation"],
  [0x9F2221C9, "inputWebFileGeoPointLocation"],
  [0xF46FE924, "inputWebFileAudioAlbumThumbLocation"],
  [0x21E753BC, "upload.webFile"],
  [0xA0058751, "payments.paymentForm"],
  [0x7BF6B15C, "payments.paymentFormStars"],
  [0xB425CFE1, "payments.paymentFormStarGift"],
  [0xD1451883, "payments.validatedRequestedInfo"],
  [0x4E5F810D, "payments.paymentResult"],
  [0xD8411139, "payments.paymentVerificationNeeded"],
  [0x70C4FE03, "payments.paymentReceipt"],
  [0xDABBF83A, "payments.paymentReceiptStars"],
  [0xFB8FE43C, "payments.savedInfo"],
  [0xC10EB2CF, "inputPaymentCredentialsSaved"],
  [0x3417D728, "inputPaymentCredentials"],
  [0x0AA1C39F, "inputPaymentCredentialsApplePay"],
  [0x8AC32801, "inputPaymentCredentialsGooglePay"],
  [0xDB64FD34, "account.tmpPassword"],
  [0xB6213CDF, "shippingOption"],
  [0x32DA9E9C, "inputStickerSetItem"],
  [0x1E36FDED, "inputPhoneCall"],
  [0x5366C915, "phoneCallEmpty"],
  [0xEED42858, "phoneCallWaiting"],
  [0x45361C63, "phoneCallRequested"],
  [0x22FD7181, "phoneCallAccepted"],
  [0x3BA5940C, "phoneCall"],
  [0xF9D25503, "phoneCallDiscarded"],
  [0x9CC123C7, "phoneConnection"],
  [0x635FE375, "phoneConnectionWebrtc"],
  [0xFC878FC8, "phoneCallProtocol"],
  [0xEC82E140, "phone.phoneCall"],
  [0xEEA8E46E, "upload.cdnFileReuploadNeeded"],
  [0xA99FCA4F, "upload.cdnFile"],
  [0xC982EABA, "cdnPublicKey"],
  [0x5725E40A, "cdnConfig"],
  [0xCAD181F6, "langPackString"],
  [0x6C47AC9F, "langPackStringPluralized"],
  [0x2979EEB2, "langPackStringDeleted"],
  [0xF385C1F6, "langPackDifference"],
  [0xEECA5CE3, "langPackLanguage"],
  [0xE6DFB825, "channelAdminLogEventActionChangeTitle"],
  [0x55188A2E, "channelAdminLogEventActionChangeAbout"],
  [0x6A4AFC38, "channelAdminLogEventActionChangeUsername"],
  [0x434BD2AF, "channelAdminLogEventActionChangePhoto"],
  [0x1B7907AE, "channelAdminLogEventActionToggleInvites"],
  [0x26AE0971, "channelAdminLogEventActionToggleSignatures"],
  [0xE9E82C18, "channelAdminLogEventActionUpdatePinned"],
  [0x709B2405, "channelAdminLogEventActionEditMessage"],
  [0x42E047BB, "channelAdminLogEventActionDeleteMessage"],
  [0x183040D3, "channelAdminLogEventActionParticipantJoin"],
  [0xF89777F2, "channelAdminLogEventActionParticipantLeave"],
  [0xE31C34D8, "channelAdminLogEventActionParticipantInvite"],
  [0xE6D83D7E, "channelAdminLogEventActionParticipantToggleBan"],
  [0xD5676710, "channelAdminLogEventActionParticipantToggleAdmin"],
  [0xB1C3CAA7, "channelAdminLogEventActionChangeStickerSet"],
  [0x5F5C95F1, "channelAdminLogEventActionTogglePreHistoryHidden"],
  [0x2DF5FC0A, "channelAdminLogEventActionDefaultBannedRights"],
  [0x8F079643, "channelAdminLogEventActionStopPoll"],
  [0x050C7AC8, "channelAdminLogEventActionChangeLinkedChat"],
  [0x0E6B76AE, "channelAdminLogEventActionChangeLocation"],
  [0x53909779, "channelAdminLogEventActionToggleSlowMode"],
  [0x23209745, "channelAdminLogEventActionStartGroupCall"],
  [0xDB9F9140, "channelAdminLogEventActionDiscardGroupCall"],
  [0xF92424D2, "channelAdminLogEventActionParticipantMute"],
  [0xE64429C0, "channelAdminLogEventActionParticipantUnmute"],
  [0x56D6A247, "channelAdminLogEventActionToggleGroupCallSetting"],
  [0xFE9FC158, "channelAdminLogEventActionParticipantJoinByInvite"],
  [0x5A50FCA4, "channelAdminLogEventActionExportedInviteDelete"],
  [0x410A134E, "channelAdminLogEventActionExportedInviteRevoke"],
  [0xE90EBB59, "channelAdminLogEventActionExportedInviteEdit"],
  [0x3E7F6847, "channelAdminLogEventActionParticipantVolume"],
  [0x6E941A38, "channelAdminLogEventActionChangeHistoryTTL"],
  [0xAFB6144A, "channelAdminLogEventActionParticipantJoinByRequest"],
  [0xCB2AC766, "channelAdminLogEventActionToggleNoForwards"],
  [0x278F2868, "channelAdminLogEventActionSendMessage"],
  [0xBE4E0EF8, "channelAdminLogEventActionChangeAvailableReactions"],
  [0xF04FB3A9, "channelAdminLogEventActionChangeUsernames"],
  [0x02CC6383, "channelAdminLogEventActionToggleForum"],
  [0x58707D28, "channelAdminLogEventActionCreateTopic"],
  [0xF06FE208, "channelAdminLogEventActionEditTopic"],
  [0xAE168909, "channelAdminLogEventActionDeleteTopic"],
  [0x5D8D353B, "channelAdminLogEventActionPinTopic"],
  [0x64F36DFC, "channelAdminLogEventActionToggleAntiSpam"],
  [0x5796E780, "channelAdminLogEventActionChangePeerColor"],
  [0x5E477B25, "channelAdminLogEventActionChangeProfilePeerColor"],
  [0x31BB5D52, "channelAdminLogEventActionChangeWallpaper"],
  [0x3EA9FEB1, "channelAdminLogEventActionChangeEmojiStatus"],
  [0x46D840AB, "channelAdminLogEventActionChangeEmojiStickerSet"],
  [0x60A79C79, "channelAdminLogEventActionToggleSignatureProfiles"],
  [0x64642DB3, "channelAdminLogEventActionParticipantSubExtend"],
  [0x1FAD68CD, "channelAdminLogEvent"],
  [0xED8AF74D, "channels.adminLogResults"],
  [0xEA107AE4, "channelAdminLogEventsFilter"],
  [0x5CE14175, "popularContact"],
  [0x9E8FA6D3, "messages.favedStickersNotModified"],
  [0x2CB51097, "messages.favedStickers"],
  [0x46E1D13D, "recentMeUrlUnknown"],
  [0xB92C09E2, "recentMeUrlUser"],
  [0xB2DA71D2, "recentMeUrlChat"],
  [0xEB49081D, "recentMeUrlChatInvite"],
  [0xBC0A57DC, "recentMeUrlStickerSet"],
  [0x0E0310D7, "help.recentMeUrls"],
  [0x1CC6E91F, "inputSingleMedia"],
  [0xA6F8F452, "webAuthorization"],
  [0xED56C9FC, "account.webAuthorizations"],
  [0xA676A322, "inputMessageID"],
  [0xBAD88395, "inputMessageReplyTo"],
  [0x86872538, "inputMessagePinned"],
  [0xACFA1A7E, "inputMessageCallbackQuery"],
  [0xFCAAFEB7, "inputDialogPeer"],
  [0x64600527, "inputDialogPeerFolder"],
  [0xE56DBF05, "dialogPeer"],
  [0x514519E2, "dialogPeerFolder"],
  [0x0D54B65D, "messages.foundStickerSetsNotModified"],
  [0x8AF09DD2, "messages.foundStickerSets"],
  [0xF39B035C, "fileHash"],
  [0x75588B3F, "inputClientProxy"],
  [0xE3309F7F, "help.termsOfServiceUpdateEmpty"],
  [0x28ECF961, "help.termsOfServiceUpdate"],
  [0x3334B0F0, "inputSecureFileUploaded"],
  [0x5367E5BE, "inputSecureFile"],
  [0x64199744, "secureFileEmpty"],
  [0x7D09C27E, "secureFile"],
  [0x8AEABEC3, "secureData"],
  [0x7D6099DD, "securePlainPhone"],
  [0x21EC5A5F, "securePlainEmail"],
  [0x9D2A81E3, "secureValueTypePersonalDetails"],
  [0x3DAC6A00, "secureValueTypePassport"],
  [0x06E425C4, "secureValueTypeDriverLicense"],
  [0xA0D0744B, "secureValueTypeIdentityCard"],
  [0x99A48F23, "secureValueTypeInternalPassport"],
  [0xCBE31E26, "secureValueTypeAddress"],
  [0xFC36954E, "secureValueTypeUtilityBill"],
  [0x89137C0D, "secureValueTypeBankStatement"],
  [0x8B883488, "secureValueTypeRentalAgreement"],
  [0x99E3806A, "secureValueTypePassportRegistration"],
  [0xEA02EC33, "secureValueTypeTemporaryRegistration"],
  [0xB320AADB, "secureValueTypePhone"],
  [0x8E3CA7EE, "secureValueTypeEmail"],
  [0x187FA0CA, "secureValue"],
  [0xDB21D0A7, "inputSecureValue"],
  [0xED1ECDB0, "secureValueHash"],
  [0xE8A40BD9, "secureValueErrorData"],
  [0x00BE3DFA, "secureValueErrorFrontSide"],
  [0x868A2AA5, "secureValueErrorReverseSide"],
  [0xE537CED6, "secureValueErrorSelfie"],
  [0x7A700873, "secureValueErrorFile"],
  [0x666220E9, "secureValueErrorFiles"],
  [0x869D758F, "secureValueError"],
  [0xA1144770, "secureValueErrorTranslationFile"],
  [0x34636DD8, "secureValueErrorTranslationFiles"],
  [0x33F0EA47, "secureCredentialsEncrypted"],
  [0xAD2E1CD8, "account.authorizationForm"],
  [0x811F854F, "account.sentEmailCode"],
  [0x66AFA166, "help.deepLinkInfoEmpty"],
  [0x6A4EE832, "help.deepLinkInfo"],
  [0x1142BD56, "savedPhoneContact"],
  [0x4DBA4501, "account.takeout"],
  [0xD45AB096, "passwordKdfAlgoUnknown"],
  [0x3A912D4A, "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"],
  [0x004A8537, "securePasswordKdfAlgoUnknown"],
  [0xBBF2DDA0, "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000"],
  [0x86471D92, "securePasswordKdfAlgoSHA512"],
  [0x1527BCAC, "secureSecretSettings"],
  [0x9880F658, "inputCheckPasswordEmpty"],
  [0xD27FF082, "inputCheckPasswordSRP"],
  [0x829D99DA, "secureRequiredType"],
  [0x027477B4, "secureRequiredTypeOneOf"],
  [0xBFB9F457, "help.passportConfigNotModified"],
  [0xA098D6AF, "help.passportConfig"],
  [0x1D1B1245, "inputAppEvent"],
  [0xC0DE1BD9, "jsonObjectValue"],
  [0x3F6D7B68, "jsonNull"],
  [0xC7345E6A, "jsonBool"],
  [0x2BE0DFA4, "jsonNumber"],
  [0xB71E767A, "jsonString"],
  [0xF7444763, "jsonArray"],
  [0x99C1D49D, "jsonObject"],
  [0x34566B6A, "pageTableCell"],
  [0xE0C0C5E5, "pageTableRow"],
  [0x6F747657, "pageCaption"],
  [0xB92FB6CD, "pageListItemText"],
  [0x25E073FC, "pageListItemBlocks"],
  [0x5E068047, "pageListOrderedItemText"],
  [0x98DD8936, "pageListOrderedItemBlocks"],
  [0xB390DC08, "pageRelatedArticle"],
  [0x98657F0D, "page"],
  [0x8C05F1C9, "help.supportName"],
  [0xF3AE2EED, "help.userInfoEmpty"],
  [0x01EB3758, "help.userInfo"],
  [0xFF16E2CA, "pollAnswer"],
  [0x58747131, "poll"],
  [0x3B6DDAD2, "pollAnswerVoters"],
  [0x7ADF2420, "pollResults"],
  [0xF041E250, "chatOnlines"],
  [0x47A971E0, "statsURL"],
  [0x5FB224D5, "chatAdminRights"],
  [0x9F120418, "chatBannedRights"],
  [0xE630B979, "inputWallPaper"],
  [0x72091C80, "inputWallPaperSlug"],
  [0x967A462E, "inputWallPaperNoFile"],
  [0x1C199183, "account.wallPapersNotModified"],
  [0xCDC3858C, "account.wallPapers"],
  [0xAD253D78, "codeSettings"],
  [0x372EFCD0, "wallPaperSettings"],
  [0xBAA57628, "autoDownloadSettings"],
  [0x63CACF26, "account.autoDownloadSettings"],
  [0xD5B3B9F9, "emojiKeyword"],
  [0x236DF622, "emojiKeywordDeleted"],
  [0x5CC761BD, "emojiKeywordsDifference"],
  [0xA575739D, "emojiURL"],
  [0xB3FB5361, "emojiLanguage"],
  [0xFF544E65, "folder"],
  [0xFBD2C296, "inputFolderPeer"],
  [0xE9BAA668, "folderPeer"],
  [0xE844EBFF, "messages.searchCounter"],
  [0x92D33A0E, "urlAuthResultRequest"],
  [0x8F8C0E4E, "urlAuthResultAccepted"],
  [0xA9D6DB1F, "urlAuthResultDefault"],
  [0xBFB5AD8B, "channelLocationEmpty"],
  [0x209B82DB, "channelLocation"],
  [0xCA461B5D, "peerLocated"],
  [0xF8EC284B, "peerSelfLocated"],
  [0xD072ACB4, "restrictionReason"],
  [0x3C5693E9, "inputTheme"],
  [0xF5890DF1, "inputThemeSlug"],
  [0xA00E67D6, "theme"],
  [0xF41EB622, "account.themesNotModified"],
  [0x9A3D8C6D, "account.themes"],
  [0x629F1980, "auth.loginToken"],
  [0x068E9916, "auth.loginTokenMigrateTo"],
  [0x390D5C5E, "auth.loginTokenSuccess"],
  [0x57E28221, "account.contentSettings"],
  [0xA927FEC5, "messages.inactiveChats"],
  [0xC3A12462, "baseThemeClassic"],
  [0xFBD81688, "baseThemeDay"],
  [0xB7B31EA8, "baseThemeNight"],
  [0x6D5F77EE, "baseThemeTinted"],
  [0x5B11125A, "baseThemeArctic"],
  [0x8FDE504F, "inputThemeSettings"],
  [0xFA58B6D4, "themeSettings"],
  [0x54B56617, "webPageAttributeTheme"],
  [0x2E94C3E7, "webPageAttributeStory"],
  [0x50CC03D3, "webPageAttributeStickerSet"],
  [0xCF6F6DB8, "webPageAttributeUniqueStarGift"],
  [0x4899484E, "messages.votesList"],
  [0xF568028A, "bankCardOpenUrl"],
  [0x3E24E573, "payments.bankCardData"],
  [0xAA472651, "dialogFilter"],
  [0x363293AE, "dialogFilterDefault"],
  [0x96537BD7, "dialogFilterChatlist"],
  [0x77744D4A, "dialogFilterSuggested"],
  [0xB637EDAF, "statsDateRangeDays"],
  [0xCB43ACDE, "statsAbsValueAndPrev"],
  [0xCBCE2FE0, "statsPercentValue"],
  [0x4A27EB2D, "statsGraphAsync"],
  [0xBEDC9822, "statsGraphError"],
  [0x8EA464B6, "statsGraph"],
  [0x396CA5FC, "stats.broadcastStats"],
  [0x98F6AC75, "help.promoDataEmpty"],
  [0x8C39793F, "help.promoData"],
  [0xDE33B094, "videoSize"],
  [0xF85C413C, "videoSizeEmojiMarkup"],
  [0x0DA082FE, "videoSizeStickerMarkup"],
  [0x9D04AF9B, "statsGroupTopPoster"],
  [0xD7584C87, "statsGroupTopAdmin"],
  [0x535F779D, "statsGroupTopInviter"],
  [0xEF7FF916, "stats.megagroupStats"],
  [0xC9D8DF1C, "globalPrivacySettings"],
  [0x4203C5EF, "help.countryCode"],
  [0xC3878E23, "help.country"],
  [0x93CC1F32, "help.countriesListNotModified"],
  [0x87D0759E, "help.countriesList"],
  [0x455B853D, "messageViews"],
  [0xB6C4F543, "messages.messageViews"],
  [0xA6341782, "messages.discussionMessage"],
  [0xAFBC09DB, "messageReplyHeader"],
  [0x0E5AF939, "messageReplyStoryHeader"],
  [0x83D60FC2, "messageReplies"],
  [0xE8FD8014, "peerBlocked"],
  [0x7FE91C14, "stats.messageStats"],
  [0x7780BCB4, "groupCallDiscarded"],
  [0xCDF8D3E3, "groupCall"],
  [0xD8AA840F, "inputGroupCall"],
  [0xEBA636FE, "groupCallParticipant"],
  [0x9E727AAD, "phone.groupCall"],
  [0xF47751B6, "phone.groupParticipants"],
  [0x3081ED9D, "inlineQueryPeerTypeSameBotPM"],
  [0x833C0FAC, "inlineQueryPeerTypePM"],
  [0xD766C50A, "inlineQueryPeerTypeChat"],
  [0x5EC4BE43, "inlineQueryPeerTypeMegagroup"],
  [0x6334EE9A, "inlineQueryPeerTypeBroadcast"],
  [0x0E3B2D0C, "inlineQueryPeerTypeBotPM"],
  [0x1662AF0B, "messages.historyImport"],
  [0x5E0FB7B9, "messages.historyImportParsed"],
  [0xEF8D3E6C, "messages.affectedFoundMessages"],
  [0x8C5ADFD9, "chatInviteImporter"],
  [0xBDC62DCC, "messages.exportedChatInvites"],
  [0x1871BE50, "messages.exportedChatInvite"],
  [0x222600EF, "messages.exportedChatInviteReplaced"],
  [0x81B6B00A, "messages.chatInviteImporters"],
  [0xF2ECEF23, "chatAdminWithInvites"],
  [0xB69B72D7, "messages.chatAdminsWithInvites"],
  [0xA24DE717, "messages.checkedHistoryImportPeer"],
  [0xAFE5623F, "phone.joinAsPeers"],
  [0x204BD158, "phone.exportedGroupCallInvite"],
  [0xDCB118B7, "groupCallParticipantVideoSourceGroup"],
  [0x67753AC8, "groupCallParticipantVideo"],
  [0x85FEA03F, "stickers.suggestedShortName"],
  [0x2F6CB2AB, "botCommandScopeDefault"],
  [0x3C4F04D8, "botCommandScopeUsers"],
  [0x6FE1A881, "botCommandScopeChats"],
  [0xB9AA606A, "botCommandScopeChatAdmins"],
  [0xDB9D897D, "botCommandScopePeer"],
  [0x3FD863D1, "botCommandScopePeerAdmins"],
  [0x0A1321F3, "botCommandScopePeerUser"],
  [0xE3779861, "account.resetPasswordFailedWait"],
  [0xE9EFFC7D, "account.resetPasswordRequestedWait"],
  [0xE926D63E, "account.resetPasswordOk"],
  [0x4D93A990, "sponsoredMessage"],
  [0xC9EE1D87, "messages.sponsoredMessages"],
  [0x1839490F, "messages.sponsoredMessagesEmpty"],
  [0xC9B0539F, "searchResultsCalendarPeriod"],
  [0x147EE23C, "messages.searchResultsCalendar"],
  [0x7F648B67, "searchResultPosition"],
  [0x53B22BAF, "messages.searchResultsPositions"],
  [0xF496B0C6, "channels.sendAsPeers"],
  [0x3B6D152E, "users.userFull"],
  [0x6880B94D, "messages.peerSettings"],
  [0xC3A2835F, "auth.loggedOut"],
  [0xA3D1CB80, "reactionCount"],
  [0x0A339F0B, "messageReactions"],
  [0x31BD492D, "messages.messageReactionsList"],
  [0xC077EC01, "availableReaction"],
  [0x9F071957, "messages.availableReactionsNotModified"],
  [0x768E3AAD, "messages.availableReactions"],
  [0x8C79B63C, "messagePeerReaction"],
  [0x80EB48AF, "groupCallStreamChannel"],
  [0xD0E482B2, "phone.groupCallStreamChannels"],
  [0x2DBF3432, "phone.groupCallStreamRtmpUrl"],
  [0x4576F3F0, "attachMenuBotIconColor"],
  [0xB2A7386B, "attachMenuBotIcon"],
  [0xD90D8DFE, "attachMenuBot"],
  [0xF1D88A5C, "attachMenuBotsNotModified"],
  [0x3C4301C0, "attachMenuBots"],
  [0x93BF667F, "attachMenuBotsBot"],
  [0x4D22FF98, "webViewResultUrl"],
  [0x0C94511C, "webViewMessageSent"],
  [0x7533A588, "botMenuButtonDefault"],
  [0x4258C205, "botMenuButtonCommands"],
  [0xC7B57CE6, "botMenuButton"],
  [0xFBF6E8B1, "account.savedRingtonesNotModified"],
  [0xC1E92CC5, "account.savedRingtones"],
  [0x97E8BEBE, "notificationSoundDefault"],
  [0x6F0C34DF, "notificationSoundNone"],
  [0x830B9AE4, "notificationSoundLocal"],
  [0xFF6C8049, "notificationSoundRingtone"],
  [0xB7263F6D, "account.savedRingtone"],
  [0x1F307EB7, "account.savedRingtoneConverted"],
  [0x7D6BE90E, "attachMenuPeerTypeSameBotPM"],
  [0xC32BFA1A, "attachMenuPeerTypeBotPM"],
  [0xF146D31F, "attachMenuPeerTypePM"],
  [0x0509113F, "attachMenuPeerTypeChat"],
  [0x7BFBDEFC, "attachMenuPeerTypeBroadcast"],
  [0xC5B56859, "inputInvoiceMessage"],
  [0xC326CAEF, "inputInvoiceSlug"],
  [0x98986C0D, "inputInvoicePremiumGiftCode"],
  [0x65F00CE3, "inputInvoiceStars"],
  [0x34E793F1, "inputInvoiceChatInviteSubscription"],
  [0xE8625E92, "inputInvoiceStarGift"],
  [0x4D818D5D, "inputInvoiceStarGiftUpgrade"],
  [0x4A5F5BD9, "inputInvoiceStarGiftTransfer"],
  [0xDABAB2EF, "inputInvoicePremiumGiftStars"],
  [0xAED0CBD9, "payments.exportedInvoice"],
  [0xCFB9D957, "messages.transcribedAudio"],
  [0x5334759C, "help.premiumPromo"],
  [0xA6751E66, "inputStorePaymentPremiumSubscription"],
  [0x616F7FE8, "inputStorePaymentGiftPremium"],
  [0xFB790393, "inputStorePaymentPremiumGiftCode"],
  [0x160544CA, "inputStorePaymentPremiumGiveaway"],
  [0xDDDD0F56, "inputStorePaymentStarsTopup"],
  [0x1D741EF7, "inputStorePaymentStarsGift"],
  [0x751F08FA, "inputStorePaymentStarsGiveaway"],
  [0x88F8F21B, "paymentFormMethod"],
  [0x2DE11AAE, "emojiStatusEmpty"],
  [0xE7FF068A, "emojiStatus"],
  [0x7184603B, "emojiStatusCollectible"],
  [0x07141DBF, "inputEmojiStatusCollectible"],
  [0xD08CE645, "account.emojiStatusesNotModified"],
  [0x90C467D1, "account.emojiStatuses"],
  [0x79F5D419, "reactionEmpty"],
  [0x1B2286B8, "reactionEmoji"],
  [0x8935FC73, "reactionCustomEmoji"],
  [0x523DA4EB, "reactionPaid"],
  [0xEAFC32BC, "chatReactionsNone"],
  [0x52928BCA, "chatReactionsAll"],
  [0x661D4037, "chatReactionsSome"],
  [0xB06FDBDF, "messages.reactionsNotModified"],
  [0xEAFDF716, "messages.reactions"],
  [0x4345BE73, "emailVerifyPurposeLoginSetup"],
  [0x527D22EB, "emailVerifyPurposeLoginChange"],
  [0xBBF51685, "emailVerifyPurposePassport"],
  [0x922E55A9, "emailVerificationCode"],
  [0xDB909EC2, "emailVerificationGoogle"],
  [0x96D074FD, "emailVerificationApple"],
  [0x2B96CD1B, "account.emailVerified"],
  [0xE1BB0D61, "account.emailVerifiedLogin"],
  [0x5F2D1DF2, "premiumSubscriptionOption"],
  [0xB81C7034, "sendAsPeer"],
  [0xAD628CC8, "messageExtendedMediaPreview"],
  [0xEE479C64, "messageExtendedMedia"],
  [0xFCFEB29C, "stickerKeyword"],
  [0xB4073647, "username"],
  [0x023F109B, "forumTopicDeleted"],
  [0x71701DA9, "forumTopic"],
  [0x367617D3, "messages.forumTopics"],
  [0x43B46B20, "defaultHistoryTTL"],
  [0x41BF109B, "exportedContactToken"],
  [0x5F3B8A00, "requestPeerTypeUser"],
  [0xC9F06E1B, "requestPeerTypeChat"],
  [0x339BEF6C, "requestPeerTypeBroadcast"],
  [0x481EADFA, "emojiListNotModified"],
  [0x7A1E11D1, "emojiList"],
  [0x7A9ABDA9, "emojiGroup"],
  [0x80D26CC7, "emojiGroupGreeting"],
  [0x093BCF34, "emojiGroupPremium"],
  [0x6FB4AD87, "messages.emojiGroupsNotModified"],
  [0x881FB94B, "messages.emojiGroups"],
  [0x751F3146, "textWithEntities"],
  [0x33DB32F8, "messages.translateResult"],
  [0xC84834CE, "autoSaveSettings"],
  [0x81602D47, "autoSaveException"],
  [0x4C3E069D, "account.autoSaveSettings"],
  [0x7CDE641D, "help.appConfigNotModified"],
  [0xDD18782E, "help.appConfig"],
  [0xA920BD7A, "inputBotAppID"],
  [0x908C0407, "inputBotAppShortName"],
  [0x5DA674B7, "botAppNotModified"],
  [0x95FCD1D6, "botApp"],
  [0xEB50ADF5, "messages.botApp"],
  [0xB57295D5, "inlineBotWebView"],
  [0x4A4FF172, "readParticipantDate"],
  [0xF3E0DA33, "inputChatlistDialogFilter"],
  [0x0C5181AC, "exportedChatlistInvite"],
  [0x10E6E3A6, "chatlists.exportedChatlistInvite"],
  [0x10AB6DC7, "chatlists.exportedInvites"],
  [0xFA87F659, "chatlists.chatlistInviteAlready"],
  [0xF10ECE2F, "chatlists.chatlistInvite"],
  [0x93BD878D, "chatlists.chatlistUpdates"],
  [0xE8A775B0, "bots.botInfo"],
  [0xB6CC2D5C, "messagePeerVote"],
  [0x74CDA504, "messagePeerVoteInputOption"],
  [0x4628F6E6, "messagePeerVoteMultiple"],
  [0x8D595CD6, "storyViews"],
  [0x51E6EE4F, "storyItemDeleted"],
  [0xFFADC913, "storyItemSkipped"],
  [0x79B26A24, "storyItem"],
  [0x1158FE3E, "stories.allStoriesNotModified"],
  [0x6EFC5E81, "stories.allStories"],
  [0x63C3DD0A, "stories.stories"],
  [0xB0BDEAC5, "storyView"],
  [0x9083670B, "storyViewPublicForward"],
  [0xBD74CF49, "storyViewPublicRepost"],
  [0x59D78FC5, "stories.storyViewsList"],
  [0xDE9EED1D, "stories.storyViews"],
  [0x22C0F6D5, "inputReplyToMessage"],
  [0x5881323A, "inputReplyToStory"],
  [0x3FC9053B, "exportedStoryLink"],
  [0x712E27FD, "storiesStealthMode"],
  [0xCFC9E002, "mediaAreaCoordinates"],
  [0xBE82DB9C, "mediaAreaVenue"],
  [0xB282217F, "inputMediaAreaVenue"],
  [0xCAD5452D, "mediaAreaGeoPoint"],
  [0x14455871, "mediaAreaSuggestedReaction"],
  [0x770416AF, "mediaAreaChannelPost"],
  [0x2271F2BF, "inputMediaAreaChannelPost"],
  [0x37381085, "mediaAreaUrl"],
  [0x49A6549C, "mediaAreaWeather"],
  [0x5787686D, "mediaAreaStarGift"],
  [0x9A35E999, "peerStories"],
  [0xCAE68768, "stories.peerStories"],
  [0xFD5E12BD, "messages.webPage"],
  [0x257E962B, "premiumGiftCodeOption"],
  [0x284A1096, "payments.checkedGiftCode"],
  [0x4367DAA0, "payments.giveawayInfo"],
  [0xE175E66F, "payments.giveawayInfoResults"],
  [0xB2539D54, "prepaidGiveaway"],
  [0x9A9D77E0, "prepaidStarsGiveaway"],
  [0x4B3E14D6, "boost"],
  [0x86F8613C, "premium.boostsList"],
  [0xC448415C, "myBoost"],
  [0x9AE228E2, "premium.myBoosts"],
  [0x4959427A, "premium.boostsStatus"],
  [0xB826E150, "storyFwdHeader"],
  [0xE7058E7F, "postInteractionCountersMessage"],
  [0x8A480E27, "postInteractionCountersStory"],
  [0x50CD067C, "stats.storyStats"],
  [0x01F2BF4A, "publicForwardMessage"],
  [0xEDF3ADD0, "publicForwardStory"],
  [0x93037E20, "stats.publicForwards"],
  [0xB54B5ACF, "peerColor"],
  [0x26219A58, "help.peerColorSet"],
  [0x767D61EB, "help.peerColorProfileSet"],
  [0xADEC6EBE, "help.peerColorOption"],
  [0x2BA1F5CE, "help.peerColorsNotModified"],
  [0x00F8ED08, "help.peerColors"],
  [0x6090D6D5, "storyReaction"],
  [0xBBAB2643, "storyReactionPublicForward"],
  [0xCFCD0F13, "storyReactionPublicRepost"],
  [0xAA5F789C, "stories.storyReactionsList"],
  [0xBD87CB6C, "savedDialog"],
  [0xF83AE221, "messages.savedDialogs"],
  [0x44BA9DD9, "messages.savedDialogsSlice"],
  [0xC01F6FE8, "messages.savedDialogsNotModified"],
  [0xCB6FF828, "savedReactionTag"],
  [0x889B59EF, "messages.savedReactionTagsNotModified"],
  [0x3259950A, "messages.savedReactionTags"],
  [0x3BB842AC, "outboxReadDate"],
  [0xDC8B44CF, "smsjobs.eligibleToJoin"],
  [0x2AEE9191, "smsjobs.status"],
  [0xE6A1EEB8, "smsJob"],
  [0x120B1AB9, "businessWeeklyOpen"],
  [0x8C92B098, "businessWorkHours"],
  [0xAC5C1AF7, "businessLocation"],
  [0x6F8B32AA, "inputBusinessRecipients"],
  [0x21108FF7, "businessRecipients"],
  [0xC9B9E2B9, "businessAwayMessageScheduleAlways"],
  [0xC3F2F501, "businessAwayMessageScheduleOutsideWorkHours"],
  [0xCC4D9ECC, "businessAwayMessageScheduleCustom"],
  [0x0194CB3B, "inputBusinessGreetingMessage"],
  [0xE519ABAB, "businessGreetingMessage"],
  [0x832175E0, "inputBusinessAwayMessage"],
  [0xEF156A5C, "businessAwayMessage"],
  [0xFF9289F5, "timezone"],
  [0x970708CC, "help.timezonesListNotModified"],
  [0x7B74ED71, "help.timezonesList"],
  [0x0697102B, "quickReply"],
  [0x24596D41, "inputQuickReplyShortcut"],
  [0x01190CF1, "inputQuickReplyShortcutId"],
  [0xC68D6695, "messages.quickReplies"],
  [0x5F91EB5B, "messages.quickRepliesNotModified"],
  [0xBD068601, "connectedBot"],
  [0x17D7F87B, "account.connectedBots"],
  [0x2AD93719, "messages.dialogFilters"],
  [0x6C8E1E06, "birthday"],
  [0x896433B4, "botBusinessConnection"],
  [0x09C469CD, "inputBusinessIntro"],
  [0x5A0A066D, "businessIntro"],
  [0xFAFF629D, "messages.myStickers"],
  [0xE39460A9, "inputCollectibleUsername"],
  [0xA2E214A4, "inputCollectiblePhone"],
  [0x6EBDFF91, "fragment.collectibleInfo"],
  [0xC4E5921E, "inputBusinessBotRecipients"],
  [0xB88CF373, "businessBotRecipients"],
  [0x1D998733, "contactBirthday"],
  [0x114FF30D, "contacts.contactBirthdays"],
  [0x628C9224, "missingInvitee"],
  [0x7F5DEFA6, "messages.invitedUsers"],
  [0x11679FA7, "inputBusinessChatLink"],
  [0xB4AE666F, "businessChatLink"],
  [0xEC43A2D1, "account.businessChatLinks"],
  [0x9A23AF21, "account.resolvedBusinessChatLinks"],
  [0xD62FF46A, "requestedPeerUser"],
  [0x7307544F, "requestedPeerChat"],
  [0x8BA403E4, "requestedPeerChannel"],
  [0x430D3150, "sponsoredMessageReportOption"],
  [0x846F9E42, "channels.sponsoredMessageReportResultChooseOption"],
  [0x3E3BCF2F, "channels.sponsoredMessageReportResultAdsHidden"],
  [0xAD798849, "channels.sponsoredMessageReportResultReported"],
  [0x5407E297, "stats.broadcastRevenueStats"],
  [0xEC659737, "stats.broadcastRevenueWithdrawalUrl"],
  [0x557E2CC4, "broadcastRevenueTransactionProceeds"],
  [0x5A590978, "broadcastRevenueTransactionWithdrawal"],
  [0x42D30D2E, "broadcastRevenueTransactionRefund"],
  [0x87158466, "stats.broadcastRevenueTransactions"],
  [0xBAC3A61A, "reactionNotificationsFromContacts"],
  [0x4B9E22A0, "reactionNotificationsFromAll"],
  [0x56E34970, "reactionsNotifySettings"],
  [0xC3FF71E7, "broadcastRevenueBalances"],
  [0x93C3E27E, "availableEffect"],
  [0xD1ED9A5B, "messages.availableEffectsNotModified"],
  [0xBDDB616E, "messages.availableEffects"],
  [0xB89BFCCF, "factCheck"],
  [0x95F2BFE4, "starsTransactionPeerUnsupported"],
  [0xB457B375, "starsTransactionPeerAppStore"],
  [0x7B560A0B, "starsTransactionPeerPlayMarket"],
  [0x250DBAF8, "starsTransactionPeerPremiumBot"],
  [0xE92FD902, "starsTransactionPeerFragment"],
  [0xD80DA15D, "starsTransactionPeer"],
  [0x60682812, "starsTransactionPeerAds"],
  [0xF9677AAD, "starsTransactionPeerAPI"],
  [0x0BD915C0, "starsTopupOption"],
  [0xA39FD94A, "starsTransaction"],
  [0x6C9CE8ED, "payments.starsStatus"],
  [0xE87ACBC0, "foundStory"],
  [0xE2DE7737, "stories.foundStories"],
  [0xDE4C5D93, "geoPointAddress"],
  [0xFEBE5491, "starsRevenueStatus"],
  [0xC92BB73B, "payments.starsRevenueStats"],
  [0x1DAB80B7, "payments.starsRevenueWithdrawalUrl"],
  [0x394E7F21, "payments.starsRevenueAdsAccountUrl"],
  [0x206AE6D1, "inputStarsTransaction"],
  [0x5E0589F1, "starsGiftOption"],
  [0x1991B13B, "bots.popularAppBots"],
  [0x23E91BA3, "botPreviewMedia"],
  [0x0CA71D64, "bots.previewInfo"],
  [0x05416D58, "starsSubscriptionPricing"],
  [0x2E6EAB1A, "starsSubscription"],
  [0x4BA3A95A, "messageReactor"],
  [0x94CE852A, "starsGiveawayOption"],
  [0x54236209, "starsGiveawayWinnersOption"],
  [0x02CC73C8, "starGift"],
  [0x5C62D151, "starGiftUnique"],
  [0xA388A368, "payments.starGiftsNotModified"],
  [0x901689EA, "payments.starGifts"],
  [0x7903E3D9, "messageReportOption"],
  [0xF0E4E0B6, "reportResultChooseOption"],
  [0x6F09AC31, "reportResultAddComment"],
  [0x8DB33C4B, "reportResultReported"],
  [0x8ECF0511, "messages.botPreparedInlineMessage"],
  [0xFF57708D, "messages.preparedInlineMessage"],
  [0xC99B1950, "botAppSettings"],
  [0xDD0C66F2, "starRefProgram"],
  [0x19A13F71, "connectedBotStarRef"],
  [0x98D5EA1D, "payments.connectedStarRefBots"],
  [0xB4D5D859, "payments.suggestedStarRefBots"],
  [0xBBB6B4A3, "starsAmount"],
  [0x6010C534, "messages.foundStickersNotModified"],
  [0x82C9E290, "messages.foundStickers"],
  [0xB0CD6617, "botVerifierSettings"],
  [0xF93CD45C, "botVerification"],
  [0x39D99013, "starGiftAttributeModel"],
  [0x13ACFF19, "starGiftAttributePattern"],
  [0x94271762, "starGiftAttributeBackdrop"],
  [0xE0BFF26C, "starGiftAttributeOriginalDetails"],
  [0x167BD90B, "payments.starGiftUpgradePreview"],
  [0x62D706B8, "users.users"],
  [0x315A4974, "users.usersSlice"],
  [0xCAA2F60B, "payments.uniqueStarGift"],
  [0xB53E8B21, "messages.webPagePreview"],
  [0x6056DBA5, "savedStarGift"],
  [0x95F389B1, "payments.savedStarGifts"],
  [0x69279795, "inputSavedStarGiftUser"],
  [0xF101AA7F, "inputSavedStarGiftChat"],
  [0x84AA3A9C, "payments.starGiftWithdrawalUrl"],
  [0x206AD49E, "paidReactionPrivacyDefault"],
  [0x1F0C1AD9, "paidReactionPrivacyAnonymous"],
  [0xDC6CFCF0, "paidReactionPrivacyPeer"],
  [0x1E109708, "account.paidMessagesRevenue"],
  [0x050A9839, "requirementToContactEmpty"],
  [0xE581E4E9, "requirementToContactPremium"],
  [0xB4F67E93, "requirementToContactPaidMessages"],
]);

export const getObjectIdentifier: (id: number) => string | undefined = idMap.get.bind(idMap);

export const schema: Schema = Object.freeze({
  "resPQ": [
    0x05162463,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["pq", "bytes"],
      ["server_public_key_fingerprints", "Vector<long>"],
    ],
    "ResPQ",
  ],
  "p_q_inner_data_dc": [
    0xA9F55F95,
    [
      ["pq", "bytes"],
      ["p", "bytes"],
      ["q", "bytes"],
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["new_nonce", "int256"],
      ["dc", "int"],
    ],
    "P_Q_inner_data",
  ],
  "p_q_inner_data_temp_dc": [
    0x56FDDF88,
    [
      ["pq", "bytes"],
      ["p", "bytes"],
      ["q", "bytes"],
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["new_nonce", "int256"],
      ["dc", "int"],
      ["expires_in", "int"],
    ],
    "P_Q_inner_data",
  ],
  "server_DH_params_ok": [
    0xD0E8075C,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["encrypted_answer", "bytes"],
    ],
    "Server_DH_Params",
  ],
  "server_DH_inner_data": [
    0xB5890DBA,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["g", "int"],
      ["dh_prime", "bytes"],
      ["g_a", "bytes"],
      ["server_time", "int"],
    ],
    "Server_DH_inner_data",
  ],
  "client_DH_inner_data": [
    0x6643B654,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["retry_id", "long"],
      ["g_b", "bytes"],
    ],
    "Client_DH_Inner_Data",
  ],
  "dh_gen_ok": [
    0x3BCBF734,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["new_nonce_hash1", "int128"],
    ],
    "Set_client_DH_params_answer",
  ],
  "dh_gen_retry": [
    0x46DC1FB9,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["new_nonce_hash2", "int128"],
    ],
    "Set_client_DH_params_answer",
  ],
  "dh_gen_fail": [
    0xA69DAE02,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["new_nonce_hash3", "int128"],
    ],
    "Set_client_DH_params_answer",
  ],
  "bind_auth_key_inner": [
    0x75A3F765,
    [
      ["nonce", "long"],
      ["temp_auth_key_id", "long"],
      ["perm_auth_key_id", "long"],
      ["temp_session_id", "long"],
      ["expires_at", "int"],
    ],
    "BindAuthKeyInner",
  ],
  "rpc_error": [
    0x2144CA19,
    [
      ["error_code", "int"],
      ["error_message", "string"],
    ],
    "RpcError",
  ],
  "rpc_answer_unknown": [
    0x5E2AD36E,
    [],
    "RpcDropAnswer",
  ],
  "rpc_answer_dropped_running": [
    0xCD78E586,
    [],
    "RpcDropAnswer",
  ],
  "rpc_answer_dropped": [
    0xA43AD8B7,
    [
      ["msg_id", "long"],
      ["seq_no", "int"],
      ["bytes", "int"],
    ],
    "RpcDropAnswer",
  ],
  "future_salt": [
    0x0949D9DC,
    [
      ["valid_since", "int"],
      ["valid_until", "int"],
      ["salt", "long"],
    ],
    "FutureSalt",
  ],
  "future_salts": [
    0xAE500895,
    [
      ["req_msg_id", "long"],
      ["now", "int"],
      ["salts", "vector<FutureSalt>"],
    ],
    "FutureSalts",
  ],
  "pong": [
    0x347773C5,
    [
      ["msg_id", "long"],
      ["ping_id", "long"],
    ],
    "Pong",
  ],
  "destroy_session_ok": [
    0xE22045FC,
    [
      ["session_id", "long"],
    ],
    "DestroySessionRes",
  ],
  "destroy_session_none": [
    0x62D350C9,
    [
      ["session_id", "long"],
    ],
    "DestroySessionRes",
  ],
  "new_session_created": [
    0x9EC20908,
    [
      ["first_msg_id", "long"],
      ["unique_id", "long"],
      ["server_salt", "long"],
    ],
    "NewSession",
  ],
  "gzip_packed": [
    0x3072CFA1,
    [
      ["packed_data", "bytes"],
    ],
    "Object",
  ],
  "msgs_ack": [
    0x62D6B459,
    [
      ["msg_ids", "Vector<long>"],
    ],
    "MsgsAck",
  ],
  "bad_msg_notification": [
    0xA7EFF811,
    [
      ["bad_msg_id", "long"],
      ["bad_msg_seqno", "int"],
      ["error_code", "int"],
    ],
    "BadMsgNotification",
  ],
  "bad_server_salt": [
    0xEDAB447B,
    [
      ["bad_msg_id", "long"],
      ["bad_msg_seqno", "int"],
      ["error_code", "int"],
      ["new_server_salt", "long"],
    ],
    "BadMsgNotification",
  ],
  "msg_resend_req": [
    0x7D861A08,
    [
      ["msg_ids", "Vector<long>"],
    ],
    "MsgResendReq",
  ],
  "msgs_state_req": [
    0xDA69FB52,
    [
      ["msg_ids", "Vector<long>"],
    ],
    "MsgsStateReq",
  ],
  "msgs_state_info": [
    0x04DEB57D,
    [
      ["req_msg_id", "long"],
      ["info", "bytes"],
    ],
    "MsgsStateInfo",
  ],
  "msgs_all_info": [
    0x8CC0D131,
    [
      ["msg_ids", "Vector<long>"],
      ["info", "bytes"],
    ],
    "MsgsAllInfo",
  ],
  "msg_detailed_info": [
    0x276D3EC6,
    [
      ["msg_id", "long"],
      ["answer_msg_id", "long"],
      ["bytes", "int"],
      ["status", "int"],
    ],
    "MsgDetailedInfo",
  ],
  "msg_new_detailed_info": [
    0x809DB6DF,
    [
      ["answer_msg_id", "long"],
      ["bytes", "int"],
      ["status", "int"],
    ],
    "MsgDetailedInfo",
  ],
  "destroy_auth_key_ok": [
    0xF660E1D4,
    [],
    "DestroyAuthKeyRes",
  ],
  "destroy_auth_key_none": [
    0x0A9F2259,
    [],
    "DestroyAuthKeyRes",
  ],
  "destroy_auth_key_fail": [
    0xEA109B13,
    [],
    "DestroyAuthKeyRes",
  ],
  "http_wait": [
    0x9299359F,
    [
      ["max_delay", "int"],
      ["wait_after", "int"],
      ["max_wait", "int"],
    ],
    "HttpWait",
  ],
  "true": [
    0x3FEDD339,
    [],
    "True",
  ],
  "error": [
    0xC4B9F9BB,
    [
      ["code", "int"],
      ["text", "string"],
    ],
    "Error",
  ],
  "ipPort": [
    0xD433AD73,
    [
      ["ipv4", "int"],
      ["port", "int"],
    ],
    "IpPort",
  ],
  "ipPortSecret": [
    0x37982646,
    [
      ["ipv4", "int"],
      ["port", "int"],
      ["secret", "bytes"],
    ],
    "IpPort",
  ],
  "accessPointRule": [
    0x4679B65F,
    [
      ["phone_prefix_rules", "string"],
      ["dc_id", "int"],
      ["ips", "vector<IpPort>"],
    ],
    "AccessPointRule",
  ],
  "help.configSimple": [
    0x5A592A6C,
    [
      ["date", "int"],
      ["expires", "int"],
      ["rules", "vector<AccessPointRule>"],
    ],
    "help.ConfigSimple",
  ],
  "inputPeerPhotoFileLocationLegacy": [
    0x27D69997,
    [
      ["flags", "#"],
      ["big", "flags.0?true"],
      ["peer", "InputPeer"],
      ["volume_id", "long"],
      ["local_id", "int"],
    ],
    "InputFileLocation",
  ],
  "inputStickerSetThumbLegacy": [
    0x0DBAEAE9,
    [
      ["stickerset", "InputStickerSet"],
      ["volume_id", "long"],
      ["local_id", "int"],
    ],
    "InputFileLocation",
  ],
  "inputPeerEmpty": [
    0x7F3B18EA,
    [],
    "InputPeer",
  ],
  "inputPeerSelf": [
    0x7DA07EC9,
    [],
    "InputPeer",
  ],
  "inputPeerChat": [
    0x35A95CB9,
    [
      ["chat_id", "long"],
    ],
    "InputPeer",
  ],
  "inputPeerUser": [
    0xDDE8A54C,
    [
      ["user_id", "long"],
      ["access_hash", "long"],
    ],
    "InputPeer",
  ],
  "inputPeerChannel": [
    0x27BCBBFC,
    [
      ["channel_id", "long"],
      ["access_hash", "long"],
    ],
    "InputPeer",
  ],
  "inputPeerUserFromMessage": [
    0xA87B0A1C,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["user_id", "long"],
    ],
    "InputPeer",
  ],
  "inputPeerChannelFromMessage": [
    0xBD2A0840,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["channel_id", "long"],
    ],
    "InputPeer",
  ],
  "inputUserEmpty": [
    0xB98886CF,
    [],
    "InputUser",
  ],
  "inputUserSelf": [
    0xF7C1B13F,
    [],
    "InputUser",
  ],
  "inputUser": [
    0xF21158C6,
    [
      ["user_id", "long"],
      ["access_hash", "long"],
    ],
    "InputUser",
  ],
  "inputUserFromMessage": [
    0x1DA448E2,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["user_id", "long"],
    ],
    "InputUser",
  ],
  "inputPhoneContact": [
    0xF392B7F4,
    [
      ["client_id", "long"],
      ["phone", "string"],
      ["first_name", "string"],
      ["last_name", "string"],
    ],
    "InputContact",
  ],
  "inputFile": [
    0xF52FF27F,
    [
      ["id", "long"],
      ["parts", "int"],
      ["name", "string"],
      ["md5_checksum", "string"],
    ],
    "InputFile",
  ],
  "inputFileBig": [
    0xFA4F0BB5,
    [
      ["id", "long"],
      ["parts", "int"],
      ["name", "string"],
    ],
    "InputFile",
  ],
  "inputFileStoryDocument": [
    0x62DC8B48,
    [
      ["id", "InputDocument"],
    ],
    "InputFile",
  ],
  "inputMediaEmpty": [
    0x9664F57F,
    [],
    "InputMedia",
  ],
  "inputMediaUploadedPhoto": [
    0x1E287D04,
    [
      ["flags", "#"],
      ["spoiler", "flags.2?true"],
      ["file", "InputFile"],
      ["stickers", "flags.0?Vector<InputDocument>"],
      ["ttl_seconds", "flags.1?int"],
    ],
    "InputMedia",
  ],
  "inputMediaPhoto": [
    0xB3BA0635,
    [
      ["flags", "#"],
      ["spoiler", "flags.1?true"],
      ["id", "InputPhoto"],
      ["ttl_seconds", "flags.0?int"],
    ],
    "InputMedia",
  ],
  "inputMediaGeoPoint": [
    0xF9C44144,
    [
      ["geo_point", "InputGeoPoint"],
    ],
    "InputMedia",
  ],
  "inputMediaContact": [
    0xF8AB7DFB,
    [
      ["phone_number", "string"],
      ["first_name", "string"],
      ["last_name", "string"],
      ["vcard", "string"],
    ],
    "InputMedia",
  ],
  "inputMediaUploadedDocument": [
    0x037C9330,
    [
      ["flags", "#"],
      ["nosound_video", "flags.3?true"],
      ["force_file", "flags.4?true"],
      ["spoiler", "flags.5?true"],
      ["file", "InputFile"],
      ["thumb", "flags.2?InputFile"],
      ["mime_type", "string"],
      ["attributes", "Vector<DocumentAttribute>"],
      ["stickers", "flags.0?Vector<InputDocument>"],
      ["video_cover", "flags.6?InputPhoto"],
      ["video_timestamp", "flags.7?int"],
      ["ttl_seconds", "flags.1?int"],
    ],
    "InputMedia",
  ],
  "inputMediaDocument": [
    0xA8763AB5,
    [
      ["flags", "#"],
      ["spoiler", "flags.2?true"],
      ["id", "InputDocument"],
      ["video_cover", "flags.3?InputPhoto"],
      ["video_timestamp", "flags.4?int"],
      ["ttl_seconds", "flags.0?int"],
      ["query", "flags.1?string"],
    ],
    "InputMedia",
  ],
  "inputMediaVenue": [
    0xC13D1C11,
    [
      ["geo_point", "InputGeoPoint"],
      ["title", "string"],
      ["address", "string"],
      ["provider", "string"],
      ["venue_id", "string"],
      ["venue_type", "string"],
    ],
    "InputMedia",
  ],
  "inputMediaPhotoExternal": [
    0xE5BBFE1A,
    [
      ["flags", "#"],
      ["spoiler", "flags.1?true"],
      ["url", "string"],
      ["ttl_seconds", "flags.0?int"],
    ],
    "InputMedia",
  ],
  "inputMediaDocumentExternal": [
    0x779600F9,
    [
      ["flags", "#"],
      ["spoiler", "flags.1?true"],
      ["url", "string"],
      ["ttl_seconds", "flags.0?int"],
      ["video_cover", "flags.2?InputPhoto"],
      ["video_timestamp", "flags.3?int"],
    ],
    "InputMedia",
  ],
  "inputMediaGame": [
    0xD33F43F3,
    [
      ["id", "InputGame"],
    ],
    "InputMedia",
  ],
  "inputMediaInvoice": [
    0x405FEF0D,
    [
      ["flags", "#"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "flags.0?InputWebDocument"],
      ["invoice", "Invoice"],
      ["payload", "bytes"],
      ["provider", "flags.3?string"],
      ["provider_data", "DataJSON"],
      ["start_param", "flags.1?string"],
      ["extended_media", "flags.2?InputMedia"],
    ],
    "InputMedia",
  ],
  "inputMediaGeoLive": [
    0x971FA843,
    [
      ["flags", "#"],
      ["stopped", "flags.0?true"],
      ["geo_point", "InputGeoPoint"],
      ["heading", "flags.2?int"],
      ["period", "flags.1?int"],
      ["proximity_notification_radius", "flags.3?int"],
    ],
    "InputMedia",
  ],
  "inputMediaPoll": [
    0x0F94E5F1,
    [
      ["flags", "#"],
      ["poll", "Poll"],
      ["correct_answers", "flags.0?Vector<bytes>"],
      ["solution", "flags.1?string"],
      ["solution_entities", "flags.1?Vector<MessageEntity>"],
    ],
    "InputMedia",
  ],
  "inputMediaDice": [
    0xE66FBF7B,
    [
      ["emoticon", "string"],
    ],
    "InputMedia",
  ],
  "inputMediaStory": [
    0x89FDD778,
    [
      ["peer", "InputPeer"],
      ["id", "int"],
    ],
    "InputMedia",
  ],
  "inputMediaWebPage": [
    0xC21B8849,
    [
      ["flags", "#"],
      ["force_large_media", "flags.0?true"],
      ["force_small_media", "flags.1?true"],
      ["optional", "flags.2?true"],
      ["url", "string"],
    ],
    "InputMedia",
  ],
  "inputMediaPaidMedia": [
    0xC4103386,
    [
      ["flags", "#"],
      ["stars_amount", "long"],
      ["extended_media", "Vector<InputMedia>"],
      ["payload", "flags.0?string"],
    ],
    "InputMedia",
  ],
  "inputChatPhotoEmpty": [
    0x1CA48F57,
    [],
    "InputChatPhoto",
  ],
  "inputChatUploadedPhoto": [
    0xBDCDAEC0,
    [
      ["flags", "#"],
      ["file", "flags.0?InputFile"],
      ["video", "flags.1?InputFile"],
      ["video_start_ts", "flags.2?double"],
      ["video_emoji_markup", "flags.3?VideoSize"],
    ],
    "InputChatPhoto",
  ],
  "inputChatPhoto": [
    0x8953AD37,
    [
      ["id", "InputPhoto"],
    ],
    "InputChatPhoto",
  ],
  "inputGeoPointEmpty": [
    0xE4C123D6,
    [],
    "InputGeoPoint",
  ],
  "inputGeoPoint": [
    0x48222FAF,
    [
      ["flags", "#"],
      ["lat", "double"],
      ["long", "double"],
      ["accuracy_radius", "flags.0?int"],
    ],
    "InputGeoPoint",
  ],
  "inputPhotoEmpty": [
    0x1CD7BF0D,
    [],
    "InputPhoto",
  ],
  "inputPhoto": [
    0x3BB3B94A,
    [
      ["id", "long"],
      ["access_hash", "long"],
      ["file_reference", "bytes"],
    ],
    "InputPhoto",
  ],
  "inputFileLocation": [
    0xDFDAABE1,
    [
      ["volume_id", "long"],
      ["local_id", "int"],
      ["secret", "long"],
      ["file_reference", "bytes"],
    ],
    "InputFileLocation",
  ],
  "inputEncryptedFileLocation": [
    0xF5235D55,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputFileLocation",
  ],
  "inputDocumentFileLocation": [
    0xBAD07584,
    [
      ["id", "long"],
      ["access_hash", "long"],
      ["file_reference", "bytes"],
      ["thumb_size", "string"],
    ],
    "InputFileLocation",
  ],
  "inputSecureFileLocation": [
    0xCBC7EE28,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputFileLocation",
  ],
  "inputTakeoutFileLocation": [
    0x29BE5899,
    [],
    "InputFileLocation",
  ],
  "inputPhotoFileLocation": [
    0x40181FFE,
    [
      ["id", "long"],
      ["access_hash", "long"],
      ["file_reference", "bytes"],
      ["thumb_size", "string"],
    ],
    "InputFileLocation",
  ],
  "inputPhotoLegacyFileLocation": [
    0xD83466F3,
    [
      ["id", "long"],
      ["access_hash", "long"],
      ["file_reference", "bytes"],
      ["volume_id", "long"],
      ["local_id", "int"],
      ["secret", "long"],
    ],
    "InputFileLocation",
  ],
  "inputPeerPhotoFileLocation": [
    0x37257E99,
    [
      ["flags", "#"],
      ["big", "flags.0?true"],
      ["peer", "InputPeer"],
      ["photo_id", "long"],
    ],
    "InputFileLocation",
  ],
  "inputStickerSetThumb": [
    0x9D84F3DB,
    [
      ["stickerset", "InputStickerSet"],
      ["thumb_version", "int"],
    ],
    "InputFileLocation",
  ],
  "inputGroupCallStream": [
    0x0598A92A,
    [
      ["flags", "#"],
      ["call", "InputGroupCall"],
      ["time_ms", "long"],
      ["scale", "int"],
      ["video_channel", "flags.0?int"],
      ["video_quality", "flags.0?int"],
    ],
    "InputFileLocation",
  ],
  "peerUser": [
    0x59511722,
    [
      ["user_id", "long"],
    ],
    "Peer",
  ],
  "peerChat": [
    0x36C6019A,
    [
      ["chat_id", "long"],
    ],
    "Peer",
  ],
  "peerChannel": [
    0xA2A5371E,
    [
      ["channel_id", "long"],
    ],
    "Peer",
  ],
  "storage.fileUnknown": [
    0xAA963B05,
    [],
    "storage.FileType",
  ],
  "storage.filePartial": [
    0x40BC6F52,
    [],
    "storage.FileType",
  ],
  "storage.fileJpeg": [
    0x007EFE0E,
    [],
    "storage.FileType",
  ],
  "storage.fileGif": [
    0xCAE1AADF,
    [],
    "storage.FileType",
  ],
  "storage.filePng": [
    0x0A4F63C0,
    [],
    "storage.FileType",
  ],
  "storage.filePdf": [
    0xAE1E508D,
    [],
    "storage.FileType",
  ],
  "storage.fileMp3": [
    0x528A0677,
    [],
    "storage.FileType",
  ],
  "storage.fileMov": [
    0x4B09EBBC,
    [],
    "storage.FileType",
  ],
  "storage.fileMp4": [
    0xB3CEA0E4,
    [],
    "storage.FileType",
  ],
  "storage.fileWebp": [
    0x1081464C,
    [],
    "storage.FileType",
  ],
  "userEmpty": [
    0xD3BC4B7A,
    [
      ["id", "long"],
    ],
    "User",
  ],
  "user": [
    0x020B1422,
    [
      ["flags", "#"],
      ["self", "flags.10?true"],
      ["contact", "flags.11?true"],
      ["mutual_contact", "flags.12?true"],
      ["deleted", "flags.13?true"],
      ["bot", "flags.14?true"],
      ["bot_chat_history", "flags.15?true"],
      ["bot_nochats", "flags.16?true"],
      ["verified", "flags.17?true"],
      ["restricted", "flags.18?true"],
      ["min", "flags.20?true"],
      ["bot_inline_geo", "flags.21?true"],
      ["support", "flags.23?true"],
      ["scam", "flags.24?true"],
      ["apply_min_photo", "flags.25?true"],
      ["fake", "flags.26?true"],
      ["bot_attach_menu", "flags.27?true"],
      ["premium", "flags.28?true"],
      ["attach_menu_enabled", "flags.29?true"],
      ["flags2", "#"],
      ["bot_can_edit", "flags2.1?true"],
      ["close_friend", "flags2.2?true"],
      ["stories_hidden", "flags2.3?true"],
      ["stories_unavailable", "flags2.4?true"],
      ["contact_require_premium", "flags2.10?true"],
      ["bot_business", "flags2.11?true"],
      ["bot_has_main_app", "flags2.13?true"],
      ["id", "long"],
      ["access_hash", "flags.0?long"],
      ["first_name", "flags.1?string"],
      ["last_name", "flags.2?string"],
      ["username", "flags.3?string"],
      ["phone", "flags.4?string"],
      ["photo", "flags.5?UserProfilePhoto"],
      ["status", "flags.6?UserStatus"],
      ["bot_info_version", "flags.14?int"],
      ["restriction_reason", "flags.18?Vector<RestrictionReason>"],
      ["bot_inline_placeholder", "flags.19?string"],
      ["lang_code", "flags.22?string"],
      ["emoji_status", "flags.30?EmojiStatus"],
      ["usernames", "flags2.0?Vector<Username>"],
      ["stories_max_id", "flags2.5?int"],
      ["color", "flags2.8?PeerColor"],
      ["profile_color", "flags2.9?PeerColor"],
      ["bot_active_users", "flags2.12?int"],
      ["bot_verification_icon", "flags2.14?long"],
      ["send_paid_messages_stars", "flags2.15?long"],
    ],
    "User",
  ],
  "userProfilePhotoEmpty": [
    0x4F11BAE1,
    [],
    "UserProfilePhoto",
  ],
  "userProfilePhoto": [
    0x82D1F706,
    [
      ["flags", "#"],
      ["has_video", "flags.0?true"],
      ["personal", "flags.2?true"],
      ["photo_id", "long"],
      ["stripped_thumb", "flags.1?bytes"],
      ["dc_id", "int"],
    ],
    "UserProfilePhoto",
  ],
  "userStatusEmpty": [
    0x09D05049,
    [],
    "UserStatus",
  ],
  "userStatusOnline": [
    0xEDB93949,
    [
      ["expires", "int"],
    ],
    "UserStatus",
  ],
  "userStatusOffline": [
    0x008C703F,
    [
      ["was_online", "int"],
    ],
    "UserStatus",
  ],
  "userStatusRecently": [
    0x7B197DC8,
    [
      ["flags", "#"],
      ["by_me", "flags.0?true"],
    ],
    "UserStatus",
  ],
  "userStatusLastWeek": [
    0x541A1D1A,
    [
      ["flags", "#"],
      ["by_me", "flags.0?true"],
    ],
    "UserStatus",
  ],
  "userStatusLastMonth": [
    0x65899777,
    [
      ["flags", "#"],
      ["by_me", "flags.0?true"],
    ],
    "UserStatus",
  ],
  "chatEmpty": [
    0x29562865,
    [
      ["id", "long"],
    ],
    "Chat",
  ],
  "chat": [
    0x41CBF256,
    [
      ["flags", "#"],
      ["creator", "flags.0?true"],
      ["left", "flags.2?true"],
      ["deactivated", "flags.5?true"],
      ["call_active", "flags.23?true"],
      ["call_not_empty", "flags.24?true"],
      ["noforwards", "flags.25?true"],
      ["id", "long"],
      ["title", "string"],
      ["photo", "ChatPhoto"],
      ["participants_count", "int"],
      ["date", "int"],
      ["version", "int"],
      ["migrated_to", "flags.6?InputChannel"],
      ["admin_rights", "flags.14?ChatAdminRights"],
      ["default_banned_rights", "flags.18?ChatBannedRights"],
    ],
    "Chat",
  ],
  "chatForbidden": [
    0x6592A1A7,
    [
      ["id", "long"],
      ["title", "string"],
    ],
    "Chat",
  ],
  "channel": [
    0x7482147E,
    [
      ["flags", "#"],
      ["creator", "flags.0?true"],
      ["left", "flags.2?true"],
      ["broadcast", "flags.5?true"],
      ["verified", "flags.7?true"],
      ["megagroup", "flags.8?true"],
      ["restricted", "flags.9?true"],
      ["signatures", "flags.11?true"],
      ["min", "flags.12?true"],
      ["scam", "flags.19?true"],
      ["has_link", "flags.20?true"],
      ["has_geo", "flags.21?true"],
      ["slowmode_enabled", "flags.22?true"],
      ["call_active", "flags.23?true"],
      ["call_not_empty", "flags.24?true"],
      ["fake", "flags.25?true"],
      ["gigagroup", "flags.26?true"],
      ["noforwards", "flags.27?true"],
      ["join_to_send", "flags.28?true"],
      ["join_request", "flags.29?true"],
      ["forum", "flags.30?true"],
      ["flags2", "#"],
      ["stories_hidden", "flags2.1?true"],
      ["stories_hidden_min", "flags2.2?true"],
      ["stories_unavailable", "flags2.3?true"],
      ["signature_profiles", "flags2.12?true"],
      ["id", "long"],
      ["access_hash", "flags.13?long"],
      ["title", "string"],
      ["username", "flags.6?string"],
      ["photo", "ChatPhoto"],
      ["date", "int"],
      ["restriction_reason", "flags.9?Vector<RestrictionReason>"],
      ["admin_rights", "flags.14?ChatAdminRights"],
      ["banned_rights", "flags.15?ChatBannedRights"],
      ["default_banned_rights", "flags.18?ChatBannedRights"],
      ["participants_count", "flags.17?int"],
      ["usernames", "flags2.0?Vector<Username>"],
      ["stories_max_id", "flags2.4?int"],
      ["color", "flags2.7?PeerColor"],
      ["profile_color", "flags2.8?PeerColor"],
      ["emoji_status", "flags2.9?EmojiStatus"],
      ["level", "flags2.10?int"],
      ["subscription_until_date", "flags2.11?int"],
      ["bot_verification_icon", "flags2.13?long"],
      ["send_paid_messages_stars", "flags2.14?long"],
    ],
    "Chat",
  ],
  "channelForbidden": [
    0x17D493D5,
    [
      ["flags", "#"],
      ["broadcast", "flags.5?true"],
      ["megagroup", "flags.8?true"],
      ["id", "long"],
      ["access_hash", "long"],
      ["title", "string"],
      ["until_date", "flags.16?int"],
    ],
    "Chat",
  ],
  "chatFull": [
    0x2633421B,
    [
      ["flags", "#"],
      ["can_set_username", "flags.7?true"],
      ["has_scheduled", "flags.8?true"],
      ["translations_disabled", "flags.19?true"],
      ["id", "long"],
      ["about", "string"],
      ["participants", "ChatParticipants"],
      ["chat_photo", "flags.2?Photo"],
      ["notify_settings", "PeerNotifySettings"],
      ["exported_invite", "flags.13?ExportedChatInvite"],
      ["bot_info", "flags.3?Vector<BotInfo>"],
      ["pinned_msg_id", "flags.6?int"],
      ["folder_id", "flags.11?int"],
      ["call", "flags.12?InputGroupCall"],
      ["ttl_period", "flags.14?int"],
      ["groupcall_default_join_as", "flags.15?Peer"],
      ["theme_emoticon", "flags.16?string"],
      ["requests_pending", "flags.17?int"],
      ["recent_requesters", "flags.17?Vector<long>"],
      ["available_reactions", "flags.18?ChatReactions"],
      ["reactions_limit", "flags.20?int"],
    ],
    "ChatFull",
  ],
  "channelFull": [
    0x52D6806B,
    [
      ["flags", "#"],
      ["can_view_participants", "flags.3?true"],
      ["can_set_username", "flags.6?true"],
      ["can_set_stickers", "flags.7?true"],
      ["hidden_prehistory", "flags.10?true"],
      ["can_set_location", "flags.16?true"],
      ["has_scheduled", "flags.19?true"],
      ["can_view_stats", "flags.20?true"],
      ["blocked", "flags.22?true"],
      ["flags2", "#"],
      ["can_delete_channel", "flags2.0?true"],
      ["antispam", "flags2.1?true"],
      ["participants_hidden", "flags2.2?true"],
      ["translations_disabled", "flags2.3?true"],
      ["stories_pinned_available", "flags2.5?true"],
      ["view_forum_as_messages", "flags2.6?true"],
      ["restricted_sponsored", "flags2.11?true"],
      ["can_view_revenue", "flags2.12?true"],
      ["paid_media_allowed", "flags2.14?true"],
      ["can_view_stars_revenue", "flags2.15?true"],
      ["paid_reactions_available", "flags2.16?true"],
      ["stargifts_available", "flags2.19?true"],
      ["paid_messages_available", "flags2.20?true"],
      ["id", "long"],
      ["about", "string"],
      ["participants_count", "flags.0?int"],
      ["admins_count", "flags.1?int"],
      ["kicked_count", "flags.2?int"],
      ["banned_count", "flags.2?int"],
      ["online_count", "flags.13?int"],
      ["read_inbox_max_id", "int"],
      ["read_outbox_max_id", "int"],
      ["unread_count", "int"],
      ["chat_photo", "Photo"],
      ["notify_settings", "PeerNotifySettings"],
      ["exported_invite", "flags.23?ExportedChatInvite"],
      ["bot_info", "Vector<BotInfo>"],
      ["migrated_from_chat_id", "flags.4?long"],
      ["migrated_from_max_id", "flags.4?int"],
      ["pinned_msg_id", "flags.5?int"],
      ["stickerset", "flags.8?StickerSet"],
      ["available_min_id", "flags.9?int"],
      ["folder_id", "flags.11?int"],
      ["linked_chat_id", "flags.14?long"],
      ["location", "flags.15?ChannelLocation"],
      ["slowmode_seconds", "flags.17?int"],
      ["slowmode_next_send_date", "flags.18?int"],
      ["stats_dc", "flags.12?int"],
      ["pts", "int"],
      ["call", "flags.21?InputGroupCall"],
      ["ttl_period", "flags.24?int"],
      ["pending_suggestions", "flags.25?Vector<string>"],
      ["groupcall_default_join_as", "flags.26?Peer"],
      ["theme_emoticon", "flags.27?string"],
      ["requests_pending", "flags.28?int"],
      ["recent_requesters", "flags.28?Vector<long>"],
      ["default_send_as", "flags.29?Peer"],
      ["available_reactions", "flags.30?ChatReactions"],
      ["reactions_limit", "flags2.13?int"],
      ["stories", "flags2.4?PeerStories"],
      ["wallpaper", "flags2.7?WallPaper"],
      ["boosts_applied", "flags2.8?int"],
      ["boosts_unrestrict", "flags2.9?int"],
      ["emojiset", "flags2.10?StickerSet"],
      ["bot_verification", "flags2.17?BotVerification"],
      ["stargifts_count", "flags2.18?int"],
    ],
    "ChatFull",
  ],
  "chatParticipant": [
    0xC02D4007,
    [
      ["user_id", "long"],
      ["inviter_id", "long"],
      ["date", "int"],
    ],
    "ChatParticipant",
  ],
  "chatParticipantCreator": [
    0xE46BCEE4,
    [
      ["user_id", "long"],
    ],
    "ChatParticipant",
  ],
  "chatParticipantAdmin": [
    0xA0933F5B,
    [
      ["user_id", "long"],
      ["inviter_id", "long"],
      ["date", "int"],
    ],
    "ChatParticipant",
  ],
  "chatParticipantsForbidden": [
    0x8763D3E1,
    [
      ["flags", "#"],
      ["chat_id", "long"],
      ["self_participant", "flags.0?ChatParticipant"],
    ],
    "ChatParticipants",
  ],
  "chatParticipants": [
    0x3CBC93F8,
    [
      ["chat_id", "long"],
      ["participants", "Vector<ChatParticipant>"],
      ["version", "int"],
    ],
    "ChatParticipants",
  ],
  "chatPhotoEmpty": [
    0x37C1011C,
    [],
    "ChatPhoto",
  ],
  "chatPhoto": [
    0x1C6E1C11,
    [
      ["flags", "#"],
      ["has_video", "flags.0?true"],
      ["photo_id", "long"],
      ["stripped_thumb", "flags.1?bytes"],
      ["dc_id", "int"],
    ],
    "ChatPhoto",
  ],
  "messageEmpty": [
    0x90A6CA84,
    [
      ["flags", "#"],
      ["id", "int"],
      ["peer_id", "flags.0?Peer"],
    ],
    "Message",
  ],
  "message": [
    0xEABCDD4D,
    [
      ["flags", "#"],
      ["out", "flags.1?true"],
      ["mentioned", "flags.4?true"],
      ["media_unread", "flags.5?true"],
      ["silent", "flags.13?true"],
      ["post", "flags.14?true"],
      ["from_scheduled", "flags.18?true"],
      ["legacy", "flags.19?true"],
      ["edit_hide", "flags.21?true"],
      ["pinned", "flags.24?true"],
      ["noforwards", "flags.26?true"],
      ["invert_media", "flags.27?true"],
      ["flags2", "#"],
      ["offline", "flags2.1?true"],
      ["video_processing_pending", "flags2.4?true"],
      ["id", "int"],
      ["from_id", "flags.8?Peer"],
      ["from_boosts_applied", "flags.29?int"],
      ["peer_id", "Peer"],
      ["saved_peer_id", "flags.28?Peer"],
      ["fwd_from", "flags.2?MessageFwdHeader"],
      ["via_bot_id", "flags.11?long"],
      ["via_business_bot_id", "flags2.0?long"],
      ["reply_to", "flags.3?MessageReplyHeader"],
      ["date", "int"],
      ["message", "string"],
      ["media", "flags.9?MessageMedia"],
      ["reply_markup", "flags.6?ReplyMarkup"],
      ["entities", "flags.7?Vector<MessageEntity>"],
      ["views", "flags.10?int"],
      ["forwards", "flags.10?int"],
      ["replies", "flags.23?MessageReplies"],
      ["edit_date", "flags.15?int"],
      ["post_author", "flags.16?string"],
      ["grouped_id", "flags.17?long"],
      ["reactions", "flags.20?MessageReactions"],
      ["restriction_reason", "flags.22?Vector<RestrictionReason>"],
      ["ttl_period", "flags.25?int"],
      ["quick_reply_shortcut_id", "flags.30?int"],
      ["effect", "flags2.2?long"],
      ["factcheck", "flags2.3?FactCheck"],
      ["report_delivery_until_date", "flags2.5?int"],
      ["paid_message_stars", "flags2.6?long"],
    ],
    "Message",
  ],
  "messageService": [
    0xD3D28540,
    [
      ["flags", "#"],
      ["out", "flags.1?true"],
      ["mentioned", "flags.4?true"],
      ["media_unread", "flags.5?true"],
      ["reactions_are_possible", "flags.9?true"],
      ["silent", "flags.13?true"],
      ["post", "flags.14?true"],
      ["legacy", "flags.19?true"],
      ["id", "int"],
      ["from_id", "flags.8?Peer"],
      ["peer_id", "Peer"],
      ["reply_to", "flags.3?MessageReplyHeader"],
      ["date", "int"],
      ["action", "MessageAction"],
      ["reactions", "flags.20?MessageReactions"],
      ["ttl_period", "flags.25?int"],
    ],
    "Message",
  ],
  "messageMediaEmpty": [
    0x3DED6320,
    [],
    "MessageMedia",
  ],
  "messageMediaPhoto": [
    0x695150D7,
    [
      ["flags", "#"],
      ["spoiler", "flags.3?true"],
      ["photo", "flags.0?Photo"],
      ["ttl_seconds", "flags.2?int"],
    ],
    "MessageMedia",
  ],
  "messageMediaGeo": [
    0x56E0D474,
    [
      ["geo", "GeoPoint"],
    ],
    "MessageMedia",
  ],
  "messageMediaContact": [
    0x70322949,
    [
      ["phone_number", "string"],
      ["first_name", "string"],
      ["last_name", "string"],
      ["vcard", "string"],
      ["user_id", "long"],
    ],
    "MessageMedia",
  ],
  "messageMediaUnsupported": [
    0x9F84F49E,
    [],
    "MessageMedia",
  ],
  "messageMediaDocument": [
    0x52D8CCD9,
    [
      ["flags", "#"],
      ["nopremium", "flags.3?true"],
      ["spoiler", "flags.4?true"],
      ["video", "flags.6?true"],
      ["round", "flags.7?true"],
      ["voice", "flags.8?true"],
      ["document", "flags.0?Document"],
      ["alt_documents", "flags.5?Vector<Document>"],
      ["video_cover", "flags.9?Photo"],
      ["video_timestamp", "flags.10?int"],
      ["ttl_seconds", "flags.2?int"],
    ],
    "MessageMedia",
  ],
  "messageMediaWebPage": [
    0xDDF10C3B,
    [
      ["flags", "#"],
      ["force_large_media", "flags.0?true"],
      ["force_small_media", "flags.1?true"],
      ["manual", "flags.3?true"],
      ["safe", "flags.4?true"],
      ["webpage", "WebPage"],
    ],
    "MessageMedia",
  ],
  "messageMediaVenue": [
    0x2EC0533F,
    [
      ["geo", "GeoPoint"],
      ["title", "string"],
      ["address", "string"],
      ["provider", "string"],
      ["venue_id", "string"],
      ["venue_type", "string"],
    ],
    "MessageMedia",
  ],
  "messageMediaGame": [
    0xFDB19008,
    [
      ["game", "Game"],
    ],
    "MessageMedia",
  ],
  "messageMediaInvoice": [
    0xF6A548D3,
    [
      ["flags", "#"],
      ["shipping_address_requested", "flags.1?true"],
      ["test", "flags.3?true"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "flags.0?WebDocument"],
      ["receipt_msg_id", "flags.2?int"],
      ["currency", "string"],
      ["total_amount", "long"],
      ["start_param", "string"],
      ["extended_media", "flags.4?MessageExtendedMedia"],
    ],
    "MessageMedia",
  ],
  "messageMediaGeoLive": [
    0xB940C666,
    [
      ["flags", "#"],
      ["geo", "GeoPoint"],
      ["heading", "flags.0?int"],
      ["period", "int"],
      ["proximity_notification_radius", "flags.1?int"],
    ],
    "MessageMedia",
  ],
  "messageMediaPoll": [
    0x4BD6E798,
    [
      ["poll", "Poll"],
      ["results", "PollResults"],
    ],
    "MessageMedia",
  ],
  "messageMediaDice": [
    0x3F7EE58B,
    [
      ["value", "int"],
      ["emoticon", "string"],
    ],
    "MessageMedia",
  ],
  "messageMediaStory": [
    0x68CB6283,
    [
      ["flags", "#"],
      ["via_mention", "flags.1?true"],
      ["peer", "Peer"],
      ["id", "int"],
      ["story", "flags.0?StoryItem"],
    ],
    "MessageMedia",
  ],
  "messageMediaGiveaway": [
    0xAA073BEB,
    [
      ["flags", "#"],
      ["only_new_subscribers", "flags.0?true"],
      ["winners_are_visible", "flags.2?true"],
      ["channels", "Vector<long>"],
      ["countries_iso2", "flags.1?Vector<string>"],
      ["prize_description", "flags.3?string"],
      ["quantity", "int"],
      ["months", "flags.4?int"],
      ["stars", "flags.5?long"],
      ["until_date", "int"],
    ],
    "MessageMedia",
  ],
  "messageMediaGiveawayResults": [
    0xCEAA3EA1,
    [
      ["flags", "#"],
      ["only_new_subscribers", "flags.0?true"],
      ["refunded", "flags.2?true"],
      ["channel_id", "long"],
      ["additional_peers_count", "flags.3?int"],
      ["launch_msg_id", "int"],
      ["winners_count", "int"],
      ["unclaimed_count", "int"],
      ["winners", "Vector<long>"],
      ["months", "flags.4?int"],
      ["stars", "flags.5?long"],
      ["prize_description", "flags.1?string"],
      ["until_date", "int"],
    ],
    "MessageMedia",
  ],
  "messageMediaPaidMedia": [
    0xA8852491,
    [
      ["stars_amount", "long"],
      ["extended_media", "Vector<MessageExtendedMedia>"],
    ],
    "MessageMedia",
  ],
  "messageActionEmpty": [
    0xB6AEF7B0,
    [],
    "MessageAction",
  ],
  "messageActionChatCreate": [
    0xBD47CBAD,
    [
      ["title", "string"],
      ["users", "Vector<long>"],
    ],
    "MessageAction",
  ],
  "messageActionChatEditTitle": [
    0xB5A1CE5A,
    [
      ["title", "string"],
    ],
    "MessageAction",
  ],
  "messageActionChatEditPhoto": [
    0x7FCB13A8,
    [
      ["photo", "Photo"],
    ],
    "MessageAction",
  ],
  "messageActionChatDeletePhoto": [
    0x95E3FBEF,
    [],
    "MessageAction",
  ],
  "messageActionChatAddUser": [
    0x15CEFD00,
    [
      ["users", "Vector<long>"],
    ],
    "MessageAction",
  ],
  "messageActionChatDeleteUser": [
    0xA43F30CC,
    [
      ["user_id", "long"],
    ],
    "MessageAction",
  ],
  "messageActionChatJoinedByLink": [
    0x031224C3,
    [
      ["inviter_id", "long"],
    ],
    "MessageAction",
  ],
  "messageActionChannelCreate": [
    0x95D2AC92,
    [
      ["title", "string"],
    ],
    "MessageAction",
  ],
  "messageActionChatMigrateTo": [
    0xE1037F92,
    [
      ["channel_id", "long"],
    ],
    "MessageAction",
  ],
  "messageActionChannelMigrateFrom": [
    0xEA3948E9,
    [
      ["title", "string"],
      ["chat_id", "long"],
    ],
    "MessageAction",
  ],
  "messageActionPinMessage": [
    0x94BD38ED,
    [],
    "MessageAction",
  ],
  "messageActionHistoryClear": [
    0x9FBAB604,
    [],
    "MessageAction",
  ],
  "messageActionGameScore": [
    0x92A72876,
    [
      ["game_id", "long"],
      ["score", "int"],
    ],
    "MessageAction",
  ],
  "messageActionPaymentSentMe": [
    0xFFA00CCC,
    [
      ["flags", "#"],
      ["recurring_init", "flags.2?true"],
      ["recurring_used", "flags.3?true"],
      ["currency", "string"],
      ["total_amount", "long"],
      ["payload", "bytes"],
      ["info", "flags.0?PaymentRequestedInfo"],
      ["shipping_option_id", "flags.1?string"],
      ["charge", "PaymentCharge"],
      ["subscription_until_date", "flags.4?int"],
    ],
    "MessageAction",
  ],
  "messageActionPaymentSent": [
    0xC624B16E,
    [
      ["flags", "#"],
      ["recurring_init", "flags.2?true"],
      ["recurring_used", "flags.3?true"],
      ["currency", "string"],
      ["total_amount", "long"],
      ["invoice_slug", "flags.0?string"],
      ["subscription_until_date", "flags.4?int"],
    ],
    "MessageAction",
  ],
  "messageActionPhoneCall": [
    0x80E11A7F,
    [
      ["flags", "#"],
      ["video", "flags.2?true"],
      ["call_id", "long"],
      ["reason", "flags.0?PhoneCallDiscardReason"],
      ["duration", "flags.1?int"],
    ],
    "MessageAction",
  ],
  "messageActionScreenshotTaken": [
    0x4792929B,
    [],
    "MessageAction",
  ],
  "messageActionCustomAction": [
    0xFAE69F56,
    [
      ["message", "string"],
    ],
    "MessageAction",
  ],
  "messageActionBotAllowed": [
    0xC516D679,
    [
      ["flags", "#"],
      ["attach_menu", "flags.1?true"],
      ["from_request", "flags.3?true"],
      ["domain", "flags.0?string"],
      ["app", "flags.2?BotApp"],
    ],
    "MessageAction",
  ],
  "messageActionSecureValuesSentMe": [
    0x1B287353,
    [
      ["values", "Vector<SecureValue>"],
      ["credentials", "SecureCredentialsEncrypted"],
    ],
    "MessageAction",
  ],
  "messageActionSecureValuesSent": [
    0xD95C6154,
    [
      ["types", "Vector<SecureValueType>"],
    ],
    "MessageAction",
  ],
  "messageActionContactSignUp": [
    0xF3F25F76,
    [],
    "MessageAction",
  ],
  "messageActionGeoProximityReached": [
    0x98E0D697,
    [
      ["from_id", "Peer"],
      ["to_id", "Peer"],
      ["distance", "int"],
    ],
    "MessageAction",
  ],
  "messageActionGroupCall": [
    0x7A0D7F42,
    [
      ["flags", "#"],
      ["call", "InputGroupCall"],
      ["duration", "flags.0?int"],
    ],
    "MessageAction",
  ],
  "messageActionInviteToGroupCall": [
    0x502F92F7,
    [
      ["call", "InputGroupCall"],
      ["users", "Vector<long>"],
    ],
    "MessageAction",
  ],
  "messageActionSetMessagesTTL": [
    0x3C134D7B,
    [
      ["flags", "#"],
      ["period", "int"],
      ["auto_setting_from", "flags.0?long"],
    ],
    "MessageAction",
  ],
  "messageActionGroupCallScheduled": [
    0xB3A07661,
    [
      ["call", "InputGroupCall"],
      ["schedule_date", "int"],
    ],
    "MessageAction",
  ],
  "messageActionSetChatTheme": [
    0xAA786345,
    [
      ["emoticon", "string"],
    ],
    "MessageAction",
  ],
  "messageActionChatJoinedByRequest": [
    0xEBBCA3CB,
    [],
    "MessageAction",
  ],
  "messageActionWebViewDataSentMe": [
    0x47DD8079,
    [
      ["text", "string"],
      ["data", "string"],
    ],
    "MessageAction",
  ],
  "messageActionWebViewDataSent": [
    0xB4C38CB5,
    [
      ["text", "string"],
    ],
    "MessageAction",
  ],
  "messageActionGiftPremium": [
    0x6C6274FA,
    [
      ["flags", "#"],
      ["currency", "string"],
      ["amount", "long"],
      ["months", "int"],
      ["crypto_currency", "flags.0?string"],
      ["crypto_amount", "flags.0?long"],
      ["message", "flags.1?TextWithEntities"],
    ],
    "MessageAction",
  ],
  "messageActionTopicCreate": [
    0x0D999256,
    [
      ["flags", "#"],
      ["title", "string"],
      ["icon_color", "int"],
      ["icon_emoji_id", "flags.0?long"],
    ],
    "MessageAction",
  ],
  "messageActionTopicEdit": [
    0xC0944820,
    [
      ["flags", "#"],
      ["title", "flags.0?string"],
      ["icon_emoji_id", "flags.1?long"],
      ["closed", "flags.2?Bool"],
      ["hidden", "flags.3?Bool"],
    ],
    "MessageAction",
  ],
  "messageActionSuggestProfilePhoto": [
    0x57DE635E,
    [
      ["photo", "Photo"],
    ],
    "MessageAction",
  ],
  "messageActionRequestedPeer": [
    0x31518E9B,
    [
      ["button_id", "int"],
      ["peers", "Vector<Peer>"],
    ],
    "MessageAction",
  ],
  "messageActionSetChatWallPaper": [
    0x5060A3F4,
    [
      ["flags", "#"],
      ["same", "flags.0?true"],
      ["for_both", "flags.1?true"],
      ["wallpaper", "WallPaper"],
    ],
    "MessageAction",
  ],
  "messageActionGiftCode": [
    0x56D03994,
    [
      ["flags", "#"],
      ["via_giveaway", "flags.0?true"],
      ["unclaimed", "flags.5?true"],
      ["boost_peer", "flags.1?Peer"],
      ["months", "int"],
      ["slug", "string"],
      ["currency", "flags.2?string"],
      ["amount", "flags.2?long"],
      ["crypto_currency", "flags.3?string"],
      ["crypto_amount", "flags.3?long"],
      ["message", "flags.4?TextWithEntities"],
    ],
    "MessageAction",
  ],
  "messageActionGiveawayLaunch": [
    0xA80F51E4,
    [
      ["flags", "#"],
      ["stars", "flags.0?long"],
    ],
    "MessageAction",
  ],
  "messageActionGiveawayResults": [
    0x87E2F155,
    [
      ["flags", "#"],
      ["stars", "flags.0?true"],
      ["winners_count", "int"],
      ["unclaimed_count", "int"],
    ],
    "MessageAction",
  ],
  "messageActionBoostApply": [
    0xCC02AA6D,
    [
      ["boosts", "int"],
    ],
    "MessageAction",
  ],
  "messageActionRequestedPeerSentMe": [
    0x93B31848,
    [
      ["button_id", "int"],
      ["peers", "Vector<RequestedPeer>"],
    ],
    "MessageAction",
  ],
  "messageActionPaymentRefunded": [
    0x41B3E202,
    [
      ["flags", "#"],
      ["peer", "Peer"],
      ["currency", "string"],
      ["total_amount", "long"],
      ["payload", "flags.0?bytes"],
      ["charge", "PaymentCharge"],
    ],
    "MessageAction",
  ],
  "messageActionGiftStars": [
    0x45D5B021,
    [
      ["flags", "#"],
      ["currency", "string"],
      ["amount", "long"],
      ["stars", "long"],
      ["crypto_currency", "flags.0?string"],
      ["crypto_amount", "flags.0?long"],
      ["transaction_id", "flags.1?string"],
    ],
    "MessageAction",
  ],
  "messageActionPrizeStars": [
    0xB00C47A2,
    [
      ["flags", "#"],
      ["unclaimed", "flags.0?true"],
      ["stars", "long"],
      ["transaction_id", "string"],
      ["boost_peer", "Peer"],
      ["giveaway_msg_id", "int"],
    ],
    "MessageAction",
  ],
  "messageActionStarGift": [
    0x4717E8A4,
    [
      ["flags", "#"],
      ["name_hidden", "flags.0?true"],
      ["saved", "flags.2?true"],
      ["converted", "flags.3?true"],
      ["upgraded", "flags.5?true"],
      ["refunded", "flags.9?true"],
      ["can_upgrade", "flags.10?true"],
      ["gift", "StarGift"],
      ["message", "flags.1?TextWithEntities"],
      ["convert_stars", "flags.4?long"],
      ["upgrade_msg_id", "flags.5?int"],
      ["upgrade_stars", "flags.8?long"],
      ["from_id", "flags.11?Peer"],
      ["peer", "flags.12?Peer"],
      ["saved_id", "flags.12?long"],
    ],
    "MessageAction",
  ],
  "messageActionStarGiftUnique": [
    0xACDFCB81,
    [
      ["flags", "#"],
      ["upgrade", "flags.0?true"],
      ["transferred", "flags.1?true"],
      ["saved", "flags.2?true"],
      ["refunded", "flags.5?true"],
      ["gift", "StarGift"],
      ["can_export_at", "flags.3?int"],
      ["transfer_stars", "flags.4?long"],
      ["from_id", "flags.6?Peer"],
      ["peer", "flags.7?Peer"],
      ["saved_id", "flags.7?long"],
    ],
    "MessageAction",
  ],
  "dialog": [
    0xD58A08C6,
    [
      ["flags", "#"],
      ["pinned", "flags.2?true"],
      ["unread_mark", "flags.3?true"],
      ["view_forum_as_messages", "flags.6?true"],
      ["peer", "Peer"],
      ["top_message", "int"],
      ["read_inbox_max_id", "int"],
      ["read_outbox_max_id", "int"],
      ["unread_count", "int"],
      ["unread_mentions_count", "int"],
      ["unread_reactions_count", "int"],
      ["notify_settings", "PeerNotifySettings"],
      ["pts", "flags.0?int"],
      ["draft", "flags.1?DraftMessage"],
      ["folder_id", "flags.4?int"],
      ["ttl_period", "flags.5?int"],
    ],
    "Dialog",
  ],
  "dialogFolder": [
    0x71BD134C,
    [
      ["flags", "#"],
      ["pinned", "flags.2?true"],
      ["folder", "Folder"],
      ["peer", "Peer"],
      ["top_message", "int"],
      ["unread_muted_peers_count", "int"],
      ["unread_unmuted_peers_count", "int"],
      ["unread_muted_messages_count", "int"],
      ["unread_unmuted_messages_count", "int"],
    ],
    "Dialog",
  ],
  "photoEmpty": [
    0x2331B22D,
    [
      ["id", "long"],
    ],
    "Photo",
  ],
  "photo": [
    0xFB197A65,
    [
      ["flags", "#"],
      ["has_stickers", "flags.0?true"],
      ["id", "long"],
      ["access_hash", "long"],
      ["file_reference", "bytes"],
      ["date", "int"],
      ["sizes", "Vector<PhotoSize>"],
      ["video_sizes", "flags.1?Vector<VideoSize>"],
      ["dc_id", "int"],
    ],
    "Photo",
  ],
  "photoSizeEmpty": [
    0x0E17E23C,
    [
      ["type", "string"],
    ],
    "PhotoSize",
  ],
  "photoSize": [
    0x75C78E60,
    [
      ["type", "string"],
      ["w", "int"],
      ["h", "int"],
      ["size", "int"],
    ],
    "PhotoSize",
  ],
  "photoCachedSize": [
    0x021E1AD6,
    [
      ["type", "string"],
      ["w", "int"],
      ["h", "int"],
      ["bytes", "bytes"],
    ],
    "PhotoSize",
  ],
  "photoStrippedSize": [
    0xE0B0BC2E,
    [
      ["type", "string"],
      ["bytes", "bytes"],
    ],
    "PhotoSize",
  ],
  "photoSizeProgressive": [
    0xFA3EFB95,
    [
      ["type", "string"],
      ["w", "int"],
      ["h", "int"],
      ["sizes", "Vector<int>"],
    ],
    "PhotoSize",
  ],
  "photoPathSize": [
    0xD8214D41,
    [
      ["type", "string"],
      ["bytes", "bytes"],
    ],
    "PhotoSize",
  ],
  "geoPointEmpty": [
    0x1117DD5F,
    [],
    "GeoPoint",
  ],
  "geoPoint": [
    0xB2A2F663,
    [
      ["flags", "#"],
      ["long", "double"],
      ["lat", "double"],
      ["access_hash", "long"],
      ["accuracy_radius", "flags.0?int"],
    ],
    "GeoPoint",
  ],
  "auth.sentCode": [
    0x5E002502,
    [
      ["flags", "#"],
      ["type", "auth.SentCodeType"],
      ["phone_code_hash", "string"],
      ["next_type", "flags.1?auth.CodeType"],
      ["timeout", "flags.2?int"],
    ],
    "auth.SentCode",
  ],
  "auth.sentCodeSuccess": [
    0x2390FE44,
    [
      ["authorization", "auth.Authorization"],
    ],
    "auth.SentCode",
  ],
  "auth.authorization": [
    0x2EA2C0D4,
    [
      ["flags", "#"],
      ["setup_password_required", "flags.1?true"],
      ["otherwise_relogin_days", "flags.1?int"],
      ["tmp_sessions", "flags.0?int"],
      ["future_auth_token", "flags.2?bytes"],
      ["user", "User"],
    ],
    "auth.Authorization",
  ],
  "auth.authorizationSignUpRequired": [
    0x44747E9A,
    [
      ["flags", "#"],
      ["terms_of_service", "flags.0?help.TermsOfService"],
    ],
    "auth.Authorization",
  ],
  "auth.exportedAuthorization": [
    0xB434E2B8,
    [
      ["id", "long"],
      ["bytes", "bytes"],
    ],
    "auth.ExportedAuthorization",
  ],
  "inputNotifyPeer": [
    0xB8BC5B0C,
    [
      ["peer", "InputPeer"],
    ],
    "InputNotifyPeer",
  ],
  "inputNotifyUsers": [
    0x193B4417,
    [],
    "InputNotifyPeer",
  ],
  "inputNotifyChats": [
    0x4A95E84E,
    [],
    "InputNotifyPeer",
  ],
  "inputNotifyBroadcasts": [
    0xB1DB7C7E,
    [],
    "InputNotifyPeer",
  ],
  "inputNotifyForumTopic": [
    0x5C467992,
    [
      ["peer", "InputPeer"],
      ["top_msg_id", "int"],
    ],
    "InputNotifyPeer",
  ],
  "inputPeerNotifySettings": [
    0xCACB6AE2,
    [
      ["flags", "#"],
      ["show_previews", "flags.0?Bool"],
      ["silent", "flags.1?Bool"],
      ["mute_until", "flags.2?int"],
      ["sound", "flags.3?NotificationSound"],
      ["stories_muted", "flags.6?Bool"],
      ["stories_hide_sender", "flags.7?Bool"],
      ["stories_sound", "flags.8?NotificationSound"],
    ],
    "InputPeerNotifySettings",
  ],
  "peerNotifySettings": [
    0x99622C0C,
    [
      ["flags", "#"],
      ["show_previews", "flags.0?Bool"],
      ["silent", "flags.1?Bool"],
      ["mute_until", "flags.2?int"],
      ["ios_sound", "flags.3?NotificationSound"],
      ["android_sound", "flags.4?NotificationSound"],
      ["other_sound", "flags.5?NotificationSound"],
      ["stories_muted", "flags.6?Bool"],
      ["stories_hide_sender", "flags.7?Bool"],
      ["stories_ios_sound", "flags.8?NotificationSound"],
      ["stories_android_sound", "flags.9?NotificationSound"],
      ["stories_other_sound", "flags.10?NotificationSound"],
    ],
    "PeerNotifySettings",
  ],
  "peerSettings": [
    0xF47741F7,
    [
      ["flags", "#"],
      ["report_spam", "flags.0?true"],
      ["add_contact", "flags.1?true"],
      ["block_contact", "flags.2?true"],
      ["share_contact", "flags.3?true"],
      ["need_contacts_exception", "flags.4?true"],
      ["report_geo", "flags.5?true"],
      ["autoarchived", "flags.7?true"],
      ["invite_members", "flags.8?true"],
      ["request_chat_broadcast", "flags.10?true"],
      ["business_bot_paused", "flags.11?true"],
      ["business_bot_can_reply", "flags.12?true"],
      ["geo_distance", "flags.6?int"],
      ["request_chat_title", "flags.9?string"],
      ["request_chat_date", "flags.9?int"],
      ["business_bot_id", "flags.13?long"],
      ["business_bot_manage_url", "flags.13?string"],
      ["charge_paid_message_stars", "flags.14?long"],
      ["registration_month", "flags.15?string"],
      ["phone_country", "flags.16?string"],
      ["name_change_date", "flags.17?int"],
      ["photo_change_date", "flags.18?int"],
    ],
    "PeerSettings",
  ],
  "wallPaper": [
    0xA437C3ED,
    [
      ["id", "long"],
      ["flags", "#"],
      ["creator", "flags.0?true"],
      ["default", "flags.1?true"],
      ["pattern", "flags.3?true"],
      ["dark", "flags.4?true"],
      ["access_hash", "long"],
      ["slug", "string"],
      ["document", "Document"],
      ["settings", "flags.2?WallPaperSettings"],
    ],
    "WallPaper",
  ],
  "wallPaperNoFile": [
    0xE0804116,
    [
      ["id", "long"],
      ["flags", "#"],
      ["default", "flags.1?true"],
      ["dark", "flags.4?true"],
      ["settings", "flags.2?WallPaperSettings"],
    ],
    "WallPaper",
  ],
  "inputReportReasonSpam": [
    0x58DBCAB8,
    [],
    "ReportReason",
  ],
  "inputReportReasonViolence": [
    0x1E22C78D,
    [],
    "ReportReason",
  ],
  "inputReportReasonPornography": [
    0x2E59D922,
    [],
    "ReportReason",
  ],
  "inputReportReasonChildAbuse": [
    0xADF44EE3,
    [],
    "ReportReason",
  ],
  "inputReportReasonOther": [
    0xC1E4A2B1,
    [],
    "ReportReason",
  ],
  "inputReportReasonCopyright": [
    0x9B89F93A,
    [],
    "ReportReason",
  ],
  "inputReportReasonGeoIrrelevant": [
    0xDBD4FEED,
    [],
    "ReportReason",
  ],
  "inputReportReasonFake": [
    0xF5DDD6E7,
    [],
    "ReportReason",
  ],
  "inputReportReasonIllegalDrugs": [
    0x0A8EB2BE,
    [],
    "ReportReason",
  ],
  "inputReportReasonPersonalDetails": [
    0x9EC7863D,
    [],
    "ReportReason",
  ],
  "userFull": [
    0xD2234EA0,
    [
      ["flags", "#"],
      ["blocked", "flags.0?true"],
      ["phone_calls_available", "flags.4?true"],
      ["phone_calls_private", "flags.5?true"],
      ["can_pin_message", "flags.7?true"],
      ["has_scheduled", "flags.12?true"],
      ["video_calls_available", "flags.13?true"],
      ["voice_messages_forbidden", "flags.20?true"],
      ["translations_disabled", "flags.23?true"],
      ["stories_pinned_available", "flags.26?true"],
      ["blocked_my_stories_from", "flags.27?true"],
      ["wallpaper_overridden", "flags.28?true"],
      ["contact_require_premium", "flags.29?true"],
      ["read_dates_private", "flags.30?true"],
      ["flags2", "#"],
      ["sponsored_enabled", "flags2.7?true"],
      ["can_view_revenue", "flags2.9?true"],
      ["bot_can_manage_emoji_status", "flags2.10?true"],
      ["id", "long"],
      ["about", "flags.1?string"],
      ["settings", "PeerSettings"],
      ["personal_photo", "flags.21?Photo"],
      ["profile_photo", "flags.2?Photo"],
      ["fallback_photo", "flags.22?Photo"],
      ["notify_settings", "PeerNotifySettings"],
      ["bot_info", "flags.3?BotInfo"],
      ["pinned_msg_id", "flags.6?int"],
      ["common_chats_count", "int"],
      ["folder_id", "flags.11?int"],
      ["ttl_period", "flags.14?int"],
      ["theme_emoticon", "flags.15?string"],
      ["private_forward_name", "flags.16?string"],
      ["bot_group_admin_rights", "flags.17?ChatAdminRights"],
      ["bot_broadcast_admin_rights", "flags.18?ChatAdminRights"],
      ["wallpaper", "flags.24?WallPaper"],
      ["stories", "flags.25?PeerStories"],
      ["business_work_hours", "flags2.0?BusinessWorkHours"],
      ["business_location", "flags2.1?BusinessLocation"],
      ["business_greeting_message", "flags2.2?BusinessGreetingMessage"],
      ["business_away_message", "flags2.3?BusinessAwayMessage"],
      ["business_intro", "flags2.4?BusinessIntro"],
      ["birthday", "flags2.5?Birthday"],
      ["personal_channel_id", "flags2.6?long"],
      ["personal_channel_message", "flags2.6?int"],
      ["stargifts_count", "flags2.8?int"],
      ["starref_program", "flags2.11?StarRefProgram"],
      ["bot_verification", "flags2.12?BotVerification"],
      ["send_paid_messages_stars", "flags2.14?long"],
    ],
    "UserFull",
  ],
  "contact": [
    0x145ADE0B,
    [
      ["user_id", "long"],
      ["mutual", "Bool"],
    ],
    "Contact",
  ],
  "importedContact": [
    0xC13E3C50,
    [
      ["user_id", "long"],
      ["client_id", "long"],
    ],
    "ImportedContact",
  ],
  "contactStatus": [
    0x16D9703B,
    [
      ["user_id", "long"],
      ["status", "UserStatus"],
    ],
    "ContactStatus",
  ],
  "contacts.contactsNotModified": [
    0xB74BA9D2,
    [],
    "contacts.Contacts",
  ],
  "contacts.contacts": [
    0xEAE87E42,
    [
      ["contacts", "Vector<Contact>"],
      ["saved_count", "int"],
      ["users", "Vector<User>"],
    ],
    "contacts.Contacts",
  ],
  "contacts.importedContacts": [
    0x77D01C3B,
    [
      ["imported", "Vector<ImportedContact>"],
      ["popular_invites", "Vector<PopularContact>"],
      ["retry_contacts", "Vector<long>"],
      ["users", "Vector<User>"],
    ],
    "contacts.ImportedContacts",
  ],
  "contacts.blocked": [
    0x0ADE1591,
    [
      ["blocked", "Vector<PeerBlocked>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "contacts.Blocked",
  ],
  "contacts.blockedSlice": [
    0xE1664194,
    [
      ["count", "int"],
      ["blocked", "Vector<PeerBlocked>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "contacts.Blocked",
  ],
  "messages.dialogs": [
    0x15BA6C40,
    [
      ["dialogs", "Vector<Dialog>"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.Dialogs",
  ],
  "messages.dialogsSlice": [
    0x71E094F3,
    [
      ["count", "int"],
      ["dialogs", "Vector<Dialog>"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.Dialogs",
  ],
  "messages.dialogsNotModified": [
    0xF0E3E596,
    [
      ["count", "int"],
    ],
    "messages.Dialogs",
  ],
  "messages.messages": [
    0x8C718E87,
    [
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.Messages",
  ],
  "messages.messagesSlice": [
    0x3A54685E,
    [
      ["flags", "#"],
      ["inexact", "flags.1?true"],
      ["count", "int"],
      ["next_rate", "flags.0?int"],
      ["offset_id_offset", "flags.2?int"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.Messages",
  ],
  "messages.channelMessages": [
    0xC776BA4E,
    [
      ["flags", "#"],
      ["inexact", "flags.1?true"],
      ["pts", "int"],
      ["count", "int"],
      ["offset_id_offset", "flags.2?int"],
      ["messages", "Vector<Message>"],
      ["topics", "Vector<ForumTopic>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.Messages",
  ],
  "messages.messagesNotModified": [
    0x74535F21,
    [
      ["count", "int"],
    ],
    "messages.Messages",
  ],
  "messages.chats": [
    0x64FF9FD5,
    [
      ["chats", "Vector<Chat>"],
    ],
    "messages.Chats",
  ],
  "messages.chatsSlice": [
    0x9CD81144,
    [
      ["count", "int"],
      ["chats", "Vector<Chat>"],
    ],
    "messages.Chats",
  ],
  "messages.chatFull": [
    0xE5D7D19C,
    [
      ["full_chat", "ChatFull"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.ChatFull",
  ],
  "messages.affectedHistory": [
    0xB45C69D1,
    [
      ["pts", "int"],
      ["pts_count", "int"],
      ["offset", "int"],
    ],
    "messages.AffectedHistory",
  ],
  "inputMessagesFilterEmpty": [
    0x57E2F66C,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterPhotos": [
    0x9609A51C,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterVideo": [
    0x9FC00E65,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterPhotoVideo": [
    0x56E9F0E4,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterDocument": [
    0x9EDDF188,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterUrl": [
    0x7EF0DD87,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterGif": [
    0xFFC86587,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterVoice": [
    0x50F5C392,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterMusic": [
    0x3751B49E,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterChatPhotos": [
    0x3A20ECB8,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterPhoneCalls": [
    0x80C99768,
    [
      ["flags", "#"],
      ["missed", "flags.0?true"],
    ],
    "MessagesFilter",
  ],
  "inputMessagesFilterRoundVoice": [
    0x7A7C17A4,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterRoundVideo": [
    0xB549DA53,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterMyMentions": [
    0xC1F8E69A,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterGeo": [
    0xE7026D0D,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterContacts": [
    0xE062DB83,
    [],
    "MessagesFilter",
  ],
  "inputMessagesFilterPinned": [
    0x1BB00451,
    [],
    "MessagesFilter",
  ],
  "updateNewMessage": [
    0x1F2B0AFD,
    [
      ["message", "Message"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateMessageID": [
    0x4E90BFD6,
    [
      ["id", "int"],
      ["random_id", "long"],
    ],
    "Update",
  ],
  "updateDeleteMessages": [
    0xA20DB0E5,
    [
      ["messages", "Vector<int>"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateUserTyping": [
    0xC01E857F,
    [
      ["user_id", "long"],
      ["action", "SendMessageAction"],
    ],
    "Update",
  ],
  "updateChatUserTyping": [
    0x83487AF0,
    [
      ["chat_id", "long"],
      ["from_id", "Peer"],
      ["action", "SendMessageAction"],
    ],
    "Update",
  ],
  "updateChatParticipants": [
    0x07761198,
    [
      ["participants", "ChatParticipants"],
    ],
    "Update",
  ],
  "updateUserStatus": [
    0xE5BDF8DE,
    [
      ["user_id", "long"],
      ["status", "UserStatus"],
    ],
    "Update",
  ],
  "updateUserName": [
    0xA7848924,
    [
      ["user_id", "long"],
      ["first_name", "string"],
      ["last_name", "string"],
      ["usernames", "Vector<Username>"],
    ],
    "Update",
  ],
  "updateNewAuthorization": [
    0x8951ABEF,
    [
      ["flags", "#"],
      ["unconfirmed", "flags.0?true"],
      ["hash", "long"],
      ["date", "flags.0?int"],
      ["device", "flags.0?string"],
      ["location", "flags.0?string"],
    ],
    "Update",
  ],
  "updateNewEncryptedMessage": [
    0x12BCBD9A,
    [
      ["message", "EncryptedMessage"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateEncryptedChatTyping": [
    0x1710F156,
    [
      ["chat_id", "int"],
    ],
    "Update",
  ],
  "updateEncryption": [
    0xB4A2E88D,
    [
      ["chat", "EncryptedChat"],
      ["date", "int"],
    ],
    "Update",
  ],
  "updateEncryptedMessagesRead": [
    0x38FE25B7,
    [
      ["chat_id", "int"],
      ["max_date", "int"],
      ["date", "int"],
    ],
    "Update",
  ],
  "updateChatParticipantAdd": [
    0x3DDA5451,
    [
      ["chat_id", "long"],
      ["user_id", "long"],
      ["inviter_id", "long"],
      ["date", "int"],
      ["version", "int"],
    ],
    "Update",
  ],
  "updateChatParticipantDelete": [
    0xE32F3D77,
    [
      ["chat_id", "long"],
      ["user_id", "long"],
      ["version", "int"],
    ],
    "Update",
  ],
  "updateDcOptions": [
    0x8E5E9873,
    [
      ["dc_options", "Vector<DcOption>"],
    ],
    "Update",
  ],
  "updateNotifySettings": [
    0xBEC268EF,
    [
      ["peer", "NotifyPeer"],
      ["notify_settings", "PeerNotifySettings"],
    ],
    "Update",
  ],
  "updateServiceNotification": [
    0xEBE46819,
    [
      ["flags", "#"],
      ["popup", "flags.0?true"],
      ["invert_media", "flags.2?true"],
      ["inbox_date", "flags.1?int"],
      ["type", "string"],
      ["message", "string"],
      ["media", "MessageMedia"],
      ["entities", "Vector<MessageEntity>"],
    ],
    "Update",
  ],
  "updatePrivacy": [
    0xEE3B272A,
    [
      ["key", "PrivacyKey"],
      ["rules", "Vector<PrivacyRule>"],
    ],
    "Update",
  ],
  "updateUserPhone": [
    0x05492A13,
    [
      ["user_id", "long"],
      ["phone", "string"],
    ],
    "Update",
  ],
  "updateReadHistoryInbox": [
    0x9C974FDF,
    [
      ["flags", "#"],
      ["folder_id", "flags.0?int"],
      ["peer", "Peer"],
      ["max_id", "int"],
      ["still_unread_count", "int"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateReadHistoryOutbox": [
    0x2F2F21BF,
    [
      ["peer", "Peer"],
      ["max_id", "int"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateWebPage": [
    0x7F891213,
    [
      ["webpage", "WebPage"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateReadMessagesContents": [
    0xF8227181,
    [
      ["flags", "#"],
      ["messages", "Vector<int>"],
      ["pts", "int"],
      ["pts_count", "int"],
      ["date", "flags.0?int"],
    ],
    "Update",
  ],
  "updateChannelTooLong": [
    0x108D941F,
    [
      ["flags", "#"],
      ["channel_id", "long"],
      ["pts", "flags.0?int"],
    ],
    "Update",
  ],
  "updateChannel": [
    0x635B4C09,
    [
      ["channel_id", "long"],
    ],
    "Update",
  ],
  "updateNewChannelMessage": [
    0x62BA04D9,
    [
      ["message", "Message"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateReadChannelInbox": [
    0x922E6E10,
    [
      ["flags", "#"],
      ["folder_id", "flags.0?int"],
      ["channel_id", "long"],
      ["max_id", "int"],
      ["still_unread_count", "int"],
      ["pts", "int"],
    ],
    "Update",
  ],
  "updateDeleteChannelMessages": [
    0xC32D5B12,
    [
      ["channel_id", "long"],
      ["messages", "Vector<int>"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateChannelMessageViews": [
    0xF226AC08,
    [
      ["channel_id", "long"],
      ["id", "int"],
      ["views", "int"],
    ],
    "Update",
  ],
  "updateChatParticipantAdmin": [
    0xD7CA61A2,
    [
      ["chat_id", "long"],
      ["user_id", "long"],
      ["is_admin", "Bool"],
      ["version", "int"],
    ],
    "Update",
  ],
  "updateNewStickerSet": [
    0x688A30AA,
    [
      ["stickerset", "messages.StickerSet"],
    ],
    "Update",
  ],
  "updateStickerSetsOrder": [
    0x0BB2D201,
    [
      ["flags", "#"],
      ["masks", "flags.0?true"],
      ["emojis", "flags.1?true"],
      ["order", "Vector<long>"],
    ],
    "Update",
  ],
  "updateStickerSets": [
    0x31C24808,
    [
      ["flags", "#"],
      ["masks", "flags.0?true"],
      ["emojis", "flags.1?true"],
    ],
    "Update",
  ],
  "updateSavedGifs": [
    0x9375341E,
    [],
    "Update",
  ],
  "updateBotInlineQuery": [
    0x496F379C,
    [
      ["flags", "#"],
      ["query_id", "long"],
      ["user_id", "long"],
      ["query", "string"],
      ["geo", "flags.0?GeoPoint"],
      ["peer_type", "flags.1?InlineQueryPeerType"],
      ["offset", "string"],
    ],
    "Update",
  ],
  "updateBotInlineSend": [
    0x12F12A07,
    [
      ["flags", "#"],
      ["user_id", "long"],
      ["query", "string"],
      ["geo", "flags.0?GeoPoint"],
      ["id", "string"],
      ["msg_id", "flags.1?InputBotInlineMessageID"],
    ],
    "Update",
  ],
  "updateEditChannelMessage": [
    0x1B3F4DF7,
    [
      ["message", "Message"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateBotCallbackQuery": [
    0xB9CFC48D,
    [
      ["flags", "#"],
      ["query_id", "long"],
      ["user_id", "long"],
      ["peer", "Peer"],
      ["msg_id", "int"],
      ["chat_instance", "long"],
      ["data", "flags.0?bytes"],
      ["game_short_name", "flags.1?string"],
    ],
    "Update",
  ],
  "updateEditMessage": [
    0xE40370A3,
    [
      ["message", "Message"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateInlineBotCallbackQuery": [
    0x691E9052,
    [
      ["flags", "#"],
      ["query_id", "long"],
      ["user_id", "long"],
      ["msg_id", "InputBotInlineMessageID"],
      ["chat_instance", "long"],
      ["data", "flags.0?bytes"],
      ["game_short_name", "flags.1?string"],
    ],
    "Update",
  ],
  "updateReadChannelOutbox": [
    0xB75F99A9,
    [
      ["channel_id", "long"],
      ["max_id", "int"],
    ],
    "Update",
  ],
  "updateDraftMessage": [
    0x1B49EC6D,
    [
      ["flags", "#"],
      ["peer", "Peer"],
      ["top_msg_id", "flags.0?int"],
      ["draft", "DraftMessage"],
    ],
    "Update",
  ],
  "updateReadFeaturedStickers": [
    0x571D2742,
    [],
    "Update",
  ],
  "updateRecentStickers": [
    0x9A422C20,
    [],
    "Update",
  ],
  "updateConfig": [
    0xA229DD06,
    [],
    "Update",
  ],
  "updatePtsChanged": [
    0x3354678F,
    [],
    "Update",
  ],
  "updateChannelWebPage": [
    0x2F2BA99F,
    [
      ["channel_id", "long"],
      ["webpage", "WebPage"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateDialogPinned": [
    0x6E6FE51C,
    [
      ["flags", "#"],
      ["pinned", "flags.0?true"],
      ["folder_id", "flags.1?int"],
      ["peer", "DialogPeer"],
    ],
    "Update",
  ],
  "updatePinnedDialogs": [
    0xFA0F3CA2,
    [
      ["flags", "#"],
      ["folder_id", "flags.1?int"],
      ["order", "flags.0?Vector<DialogPeer>"],
    ],
    "Update",
  ],
  "updateBotWebhookJSON": [
    0x8317C0C3,
    [
      ["data", "DataJSON"],
    ],
    "Update",
  ],
  "updateBotWebhookJSONQuery": [
    0x9B9240A6,
    [
      ["query_id", "long"],
      ["data", "DataJSON"],
      ["timeout", "int"],
    ],
    "Update",
  ],
  "updateBotShippingQuery": [
    0xB5AEFD7D,
    [
      ["query_id", "long"],
      ["user_id", "long"],
      ["payload", "bytes"],
      ["shipping_address", "PostAddress"],
    ],
    "Update",
  ],
  "updateBotPrecheckoutQuery": [
    0x8CAA9A96,
    [
      ["flags", "#"],
      ["query_id", "long"],
      ["user_id", "long"],
      ["payload", "bytes"],
      ["info", "flags.0?PaymentRequestedInfo"],
      ["shipping_option_id", "flags.1?string"],
      ["currency", "string"],
      ["total_amount", "long"],
    ],
    "Update",
  ],
  "updatePhoneCall": [
    0xAB0F6B1E,
    [
      ["phone_call", "PhoneCall"],
    ],
    "Update",
  ],
  "updateLangPackTooLong": [
    0x46560264,
    [
      ["lang_code", "string"],
    ],
    "Update",
  ],
  "updateLangPack": [
    0x56022F4D,
    [
      ["difference", "LangPackDifference"],
    ],
    "Update",
  ],
  "updateFavedStickers": [
    0xE511996D,
    [],
    "Update",
  ],
  "updateChannelReadMessagesContents": [
    0xEA29055D,
    [
      ["flags", "#"],
      ["channel_id", "long"],
      ["top_msg_id", "flags.0?int"],
      ["messages", "Vector<int>"],
    ],
    "Update",
  ],
  "updateContactsReset": [
    0x7084A7BE,
    [],
    "Update",
  ],
  "updateChannelAvailableMessages": [
    0xB23FC698,
    [
      ["channel_id", "long"],
      ["available_min_id", "int"],
    ],
    "Update",
  ],
  "updateDialogUnreadMark": [
    0xE16459C3,
    [
      ["flags", "#"],
      ["unread", "flags.0?true"],
      ["peer", "DialogPeer"],
    ],
    "Update",
  ],
  "updateMessagePoll": [
    0xACA1657B,
    [
      ["flags", "#"],
      ["poll_id", "long"],
      ["poll", "flags.0?Poll"],
      ["results", "PollResults"],
    ],
    "Update",
  ],
  "updateChatDefaultBannedRights": [
    0x54C01850,
    [
      ["peer", "Peer"],
      ["default_banned_rights", "ChatBannedRights"],
      ["version", "int"],
    ],
    "Update",
  ],
  "updateFolderPeers": [
    0x19360DC0,
    [
      ["folder_peers", "Vector<FolderPeer>"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updatePeerSettings": [
    0x6A7E7366,
    [
      ["peer", "Peer"],
      ["settings", "PeerSettings"],
    ],
    "Update",
  ],
  "updatePeerLocated": [
    0xB4AFCFB0,
    [
      ["peers", "Vector<PeerLocated>"],
    ],
    "Update",
  ],
  "updateNewScheduledMessage": [
    0x39A51DFB,
    [
      ["message", "Message"],
    ],
    "Update",
  ],
  "updateDeleteScheduledMessages": [
    0xF2A71983,
    [
      ["flags", "#"],
      ["peer", "Peer"],
      ["messages", "Vector<int>"],
      ["sent_messages", "flags.0?Vector<int>"],
    ],
    "Update",
  ],
  "updateTheme": [
    0x8216FBA3,
    [
      ["theme", "Theme"],
    ],
    "Update",
  ],
  "updateGeoLiveViewed": [
    0x871FB939,
    [
      ["peer", "Peer"],
      ["msg_id", "int"],
    ],
    "Update",
  ],
  "updateLoginToken": [
    0x564FE691,
    [],
    "Update",
  ],
  "updateMessagePollVote": [
    0x24F40E77,
    [
      ["poll_id", "long"],
      ["peer", "Peer"],
      ["options", "Vector<bytes>"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateDialogFilter": [
    0x26FFDE7D,
    [
      ["flags", "#"],
      ["id", "int"],
      ["filter", "flags.0?DialogFilter"],
    ],
    "Update",
  ],
  "updateDialogFilterOrder": [
    0xA5D72105,
    [
      ["order", "Vector<int>"],
    ],
    "Update",
  ],
  "updateDialogFilters": [
    0x3504914F,
    [],
    "Update",
  ],
  "updatePhoneCallSignalingData": [
    0x2661BF09,
    [
      ["phone_call_id", "long"],
      ["data", "bytes"],
    ],
    "Update",
  ],
  "updateChannelMessageForwards": [
    0xD29A27F4,
    [
      ["channel_id", "long"],
      ["id", "int"],
      ["forwards", "int"],
    ],
    "Update",
  ],
  "updateReadChannelDiscussionInbox": [
    0xD6B19546,
    [
      ["flags", "#"],
      ["channel_id", "long"],
      ["top_msg_id", "int"],
      ["read_max_id", "int"],
      ["broadcast_id", "flags.0?long"],
      ["broadcast_post", "flags.0?int"],
    ],
    "Update",
  ],
  "updateReadChannelDiscussionOutbox": [
    0x695C9E7C,
    [
      ["channel_id", "long"],
      ["top_msg_id", "int"],
      ["read_max_id", "int"],
    ],
    "Update",
  ],
  "updatePeerBlocked": [
    0xEBE07752,
    [
      ["flags", "#"],
      ["blocked", "flags.0?true"],
      ["blocked_my_stories_from", "flags.1?true"],
      ["peer_id", "Peer"],
    ],
    "Update",
  ],
  "updateChannelUserTyping": [
    0x8C88C923,
    [
      ["flags", "#"],
      ["channel_id", "long"],
      ["top_msg_id", "flags.0?int"],
      ["from_id", "Peer"],
      ["action", "SendMessageAction"],
    ],
    "Update",
  ],
  "updatePinnedMessages": [
    0xED85EAB5,
    [
      ["flags", "#"],
      ["pinned", "flags.0?true"],
      ["peer", "Peer"],
      ["messages", "Vector<int>"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updatePinnedChannelMessages": [
    0x5BB98608,
    [
      ["flags", "#"],
      ["pinned", "flags.0?true"],
      ["channel_id", "long"],
      ["messages", "Vector<int>"],
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "Update",
  ],
  "updateChat": [
    0xF89A6A4E,
    [
      ["chat_id", "long"],
    ],
    "Update",
  ],
  "updateGroupCallParticipants": [
    0xF2EBDB4E,
    [
      ["call", "InputGroupCall"],
      ["participants", "Vector<GroupCallParticipant>"],
      ["version", "int"],
    ],
    "Update",
  ],
  "updateGroupCall": [
    0x97D64341,
    [
      ["flags", "#"],
      ["chat_id", "flags.0?long"],
      ["call", "GroupCall"],
    ],
    "Update",
  ],
  "updatePeerHistoryTTL": [
    0xBB9BB9A5,
    [
      ["flags", "#"],
      ["peer", "Peer"],
      ["ttl_period", "flags.0?int"],
    ],
    "Update",
  ],
  "updateChatParticipant": [
    0xD087663A,
    [
      ["flags", "#"],
      ["chat_id", "long"],
      ["date", "int"],
      ["actor_id", "long"],
      ["user_id", "long"],
      ["prev_participant", "flags.0?ChatParticipant"],
      ["new_participant", "flags.1?ChatParticipant"],
      ["invite", "flags.2?ExportedChatInvite"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateChannelParticipant": [
    0x985D3ABB,
    [
      ["flags", "#"],
      ["via_chatlist", "flags.3?true"],
      ["channel_id", "long"],
      ["date", "int"],
      ["actor_id", "long"],
      ["user_id", "long"],
      ["prev_participant", "flags.0?ChannelParticipant"],
      ["new_participant", "flags.1?ChannelParticipant"],
      ["invite", "flags.2?ExportedChatInvite"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateBotStopped": [
    0xC4870A49,
    [
      ["user_id", "long"],
      ["date", "int"],
      ["stopped", "Bool"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateGroupCallConnection": [
    0x0B783982,
    [
      ["flags", "#"],
      ["presentation", "flags.0?true"],
      ["params", "DataJSON"],
    ],
    "Update",
  ],
  "updateBotCommands": [
    0x4D712F2E,
    [
      ["peer", "Peer"],
      ["bot_id", "long"],
      ["commands", "Vector<BotCommand>"],
    ],
    "Update",
  ],
  "updatePendingJoinRequests": [
    0x7063C3DB,
    [
      ["peer", "Peer"],
      ["requests_pending", "int"],
      ["recent_requesters", "Vector<long>"],
    ],
    "Update",
  ],
  "updateBotChatInviteRequester": [
    0x11DFA986,
    [
      ["peer", "Peer"],
      ["date", "int"],
      ["user_id", "long"],
      ["about", "string"],
      ["invite", "ExportedChatInvite"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateMessageReactions": [
    0x5E1B3CB8,
    [
      ["flags", "#"],
      ["peer", "Peer"],
      ["msg_id", "int"],
      ["top_msg_id", "flags.0?int"],
      ["reactions", "MessageReactions"],
    ],
    "Update",
  ],
  "updateAttachMenuBots": [
    0x17B7A20B,
    [],
    "Update",
  ],
  "updateWebViewResultSent": [
    0x1592B79D,
    [
      ["query_id", "long"],
    ],
    "Update",
  ],
  "updateBotMenuButton": [
    0x14B85813,
    [
      ["bot_id", "long"],
      ["button", "BotMenuButton"],
    ],
    "Update",
  ],
  "updateSavedRingtones": [
    0x74D8BE99,
    [],
    "Update",
  ],
  "updateTranscribedAudio": [
    0x0084CD5A,
    [
      ["flags", "#"],
      ["pending", "flags.0?true"],
      ["peer", "Peer"],
      ["msg_id", "int"],
      ["transcription_id", "long"],
      ["text", "string"],
    ],
    "Update",
  ],
  "updateReadFeaturedEmojiStickers": [
    0xFB4C496C,
    [],
    "Update",
  ],
  "updateUserEmojiStatus": [
    0x28373599,
    [
      ["user_id", "long"],
      ["emoji_status", "EmojiStatus"],
    ],
    "Update",
  ],
  "updateRecentEmojiStatuses": [
    0x30F443DB,
    [],
    "Update",
  ],
  "updateRecentReactions": [
    0x6F7863F4,
    [],
    "Update",
  ],
  "updateMoveStickerSetToTop": [
    0x86FCCF85,
    [
      ["flags", "#"],
      ["masks", "flags.0?true"],
      ["emojis", "flags.1?true"],
      ["stickerset", "long"],
    ],
    "Update",
  ],
  "updateMessageExtendedMedia": [
    0xD5A41724,
    [
      ["peer", "Peer"],
      ["msg_id", "int"],
      ["extended_media", "Vector<MessageExtendedMedia>"],
    ],
    "Update",
  ],
  "updateChannelPinnedTopic": [
    0x192EFBE3,
    [
      ["flags", "#"],
      ["pinned", "flags.0?true"],
      ["channel_id", "long"],
      ["topic_id", "int"],
    ],
    "Update",
  ],
  "updateChannelPinnedTopics": [
    0xFE198602,
    [
      ["flags", "#"],
      ["channel_id", "long"],
      ["order", "flags.0?Vector<int>"],
    ],
    "Update",
  ],
  "updateUser": [
    0x20529438,
    [
      ["user_id", "long"],
    ],
    "Update",
  ],
  "updateAutoSaveSettings": [
    0xEC05B097,
    [],
    "Update",
  ],
  "updateStory": [
    0x75B3B798,
    [
      ["peer", "Peer"],
      ["story", "StoryItem"],
    ],
    "Update",
  ],
  "updateReadStories": [
    0xF74E932B,
    [
      ["peer", "Peer"],
      ["max_id", "int"],
    ],
    "Update",
  ],
  "updateStoryID": [
    0x1BF335B9,
    [
      ["id", "int"],
      ["random_id", "long"],
    ],
    "Update",
  ],
  "updateStoriesStealthMode": [
    0x2C084DC1,
    [
      ["stealth_mode", "StoriesStealthMode"],
    ],
    "Update",
  ],
  "updateSentStoryReaction": [
    0x7D627683,
    [
      ["peer", "Peer"],
      ["story_id", "int"],
      ["reaction", "Reaction"],
    ],
    "Update",
  ],
  "updateBotChatBoost": [
    0x904DD49C,
    [
      ["peer", "Peer"],
      ["boost", "Boost"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateChannelViewForumAsMessages": [
    0x07B68920,
    [
      ["channel_id", "long"],
      ["enabled", "Bool"],
    ],
    "Update",
  ],
  "updatePeerWallpaper": [
    0xAE3F101D,
    [
      ["flags", "#"],
      ["wallpaper_overridden", "flags.1?true"],
      ["peer", "Peer"],
      ["wallpaper", "flags.0?WallPaper"],
    ],
    "Update",
  ],
  "updateBotMessageReaction": [
    0xAC21D3CE,
    [
      ["peer", "Peer"],
      ["msg_id", "int"],
      ["date", "int"],
      ["actor", "Peer"],
      ["old_reactions", "Vector<Reaction>"],
      ["new_reactions", "Vector<Reaction>"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateBotMessageReactions": [
    0x09CB7759,
    [
      ["peer", "Peer"],
      ["msg_id", "int"],
      ["date", "int"],
      ["reactions", "Vector<ReactionCount>"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateSavedDialogPinned": [
    0xAEAF9E74,
    [
      ["flags", "#"],
      ["pinned", "flags.0?true"],
      ["peer", "DialogPeer"],
    ],
    "Update",
  ],
  "updatePinnedSavedDialogs": [
    0x686C85A6,
    [
      ["flags", "#"],
      ["order", "flags.0?Vector<DialogPeer>"],
    ],
    "Update",
  ],
  "updateSavedReactionTags": [
    0x39C67432,
    [],
    "Update",
  ],
  "updateSmsJob": [
    0xF16269D4,
    [
      ["job_id", "string"],
    ],
    "Update",
  ],
  "updateQuickReplies": [
    0xF9470AB2,
    [
      ["quick_replies", "Vector<QuickReply>"],
    ],
    "Update",
  ],
  "updateNewQuickReply": [
    0xF53DA717,
    [
      ["quick_reply", "QuickReply"],
    ],
    "Update",
  ],
  "updateDeleteQuickReply": [
    0x53E6F1EC,
    [
      ["shortcut_id", "int"],
    ],
    "Update",
  ],
  "updateQuickReplyMessage": [
    0x3E050D0F,
    [
      ["message", "Message"],
    ],
    "Update",
  ],
  "updateDeleteQuickReplyMessages": [
    0x566FE7CD,
    [
      ["shortcut_id", "int"],
      ["messages", "Vector<int>"],
    ],
    "Update",
  ],
  "updateBotBusinessConnect": [
    0x8AE5C97A,
    [
      ["connection", "BotBusinessConnection"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateBotNewBusinessMessage": [
    0x9DDB347C,
    [
      ["flags", "#"],
      ["connection_id", "string"],
      ["message", "Message"],
      ["reply_to_message", "flags.0?Message"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateBotEditBusinessMessage": [
    0x07DF587C,
    [
      ["flags", "#"],
      ["connection_id", "string"],
      ["message", "Message"],
      ["reply_to_message", "flags.0?Message"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateBotDeleteBusinessMessage": [
    0xA02A982E,
    [
      ["connection_id", "string"],
      ["peer", "Peer"],
      ["messages", "Vector<int>"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updateNewStoryReaction": [
    0x1824E40B,
    [
      ["story_id", "int"],
      ["peer", "Peer"],
      ["reaction", "Reaction"],
    ],
    "Update",
  ],
  "updateBroadcastRevenueTransactions": [
    0xDFD961F5,
    [
      ["peer", "Peer"],
      ["balances", "BroadcastRevenueBalances"],
    ],
    "Update",
  ],
  "updateStarsBalance": [
    0x4E80A379,
    [
      ["balance", "StarsAmount"],
    ],
    "Update",
  ],
  "updateBusinessBotCallbackQuery": [
    0x1EA2FDA7,
    [
      ["flags", "#"],
      ["query_id", "long"],
      ["user_id", "long"],
      ["connection_id", "string"],
      ["message", "Message"],
      ["reply_to_message", "flags.2?Message"],
      ["chat_instance", "long"],
      ["data", "flags.0?bytes"],
    ],
    "Update",
  ],
  "updateStarsRevenueStatus": [
    0xA584B019,
    [
      ["peer", "Peer"],
      ["status", "StarsRevenueStatus"],
    ],
    "Update",
  ],
  "updateBotPurchasedPaidMedia": [
    0x283BD312,
    [
      ["user_id", "long"],
      ["payload", "string"],
      ["qts", "int"],
    ],
    "Update",
  ],
  "updatePaidReactionPrivacy": [
    0x8B725FCE,
    [
      ["private", "PaidReactionPrivacy"],
    ],
    "Update",
  ],
  "updates.state": [
    0xA56C2A3E,
    [
      ["pts", "int"],
      ["qts", "int"],
      ["date", "int"],
      ["seq", "int"],
      ["unread_count", "int"],
    ],
    "updates.State",
  ],
  "updates.differenceEmpty": [
    0x5D75A138,
    [
      ["date", "int"],
      ["seq", "int"],
    ],
    "updates.Difference",
  ],
  "updates.difference": [
    0x00F49CA0,
    [
      ["new_messages", "Vector<Message>"],
      ["new_encrypted_messages", "Vector<EncryptedMessage>"],
      ["other_updates", "Vector<Update>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["state", "updates.State"],
    ],
    "updates.Difference",
  ],
  "updates.differenceSlice": [
    0xA8FB1981,
    [
      ["new_messages", "Vector<Message>"],
      ["new_encrypted_messages", "Vector<EncryptedMessage>"],
      ["other_updates", "Vector<Update>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["intermediate_state", "updates.State"],
    ],
    "updates.Difference",
  ],
  "updates.differenceTooLong": [
    0x4AFE8F6D,
    [
      ["pts", "int"],
    ],
    "updates.Difference",
  ],
  "updatesTooLong": [
    0xE317AF7E,
    [],
    "Updates",
  ],
  "updateShortMessage": [
    0x313BC7F8,
    [
      ["flags", "#"],
      ["out", "flags.1?true"],
      ["mentioned", "flags.4?true"],
      ["media_unread", "flags.5?true"],
      ["silent", "flags.13?true"],
      ["id", "int"],
      ["user_id", "long"],
      ["message", "string"],
      ["pts", "int"],
      ["pts_count", "int"],
      ["date", "int"],
      ["fwd_from", "flags.2?MessageFwdHeader"],
      ["via_bot_id", "flags.11?long"],
      ["reply_to", "flags.3?MessageReplyHeader"],
      ["entities", "flags.7?Vector<MessageEntity>"],
      ["ttl_period", "flags.25?int"],
    ],
    "Updates",
  ],
  "updateShortChatMessage": [
    0x4D6DEEA5,
    [
      ["flags", "#"],
      ["out", "flags.1?true"],
      ["mentioned", "flags.4?true"],
      ["media_unread", "flags.5?true"],
      ["silent", "flags.13?true"],
      ["id", "int"],
      ["from_id", "long"],
      ["chat_id", "long"],
      ["message", "string"],
      ["pts", "int"],
      ["pts_count", "int"],
      ["date", "int"],
      ["fwd_from", "flags.2?MessageFwdHeader"],
      ["via_bot_id", "flags.11?long"],
      ["reply_to", "flags.3?MessageReplyHeader"],
      ["entities", "flags.7?Vector<MessageEntity>"],
      ["ttl_period", "flags.25?int"],
    ],
    "Updates",
  ],
  "updateShort": [
    0x78D4DEC1,
    [
      ["update", "Update"],
      ["date", "int"],
    ],
    "Updates",
  ],
  "updatesCombined": [
    0x725B04C3,
    [
      ["updates", "Vector<Update>"],
      ["users", "Vector<User>"],
      ["chats", "Vector<Chat>"],
      ["date", "int"],
      ["seq_start", "int"],
      ["seq", "int"],
    ],
    "Updates",
  ],
  "updates": [
    0x74AE4240,
    [
      ["updates", "Vector<Update>"],
      ["users", "Vector<User>"],
      ["chats", "Vector<Chat>"],
      ["date", "int"],
      ["seq", "int"],
    ],
    "Updates",
  ],
  "updateShortSentMessage": [
    0x9015E101,
    [
      ["flags", "#"],
      ["out", "flags.1?true"],
      ["id", "int"],
      ["pts", "int"],
      ["pts_count", "int"],
      ["date", "int"],
      ["media", "flags.9?MessageMedia"],
      ["entities", "flags.7?Vector<MessageEntity>"],
      ["ttl_period", "flags.25?int"],
    ],
    "Updates",
  ],
  "photos.photos": [
    0x8DCA6AA5,
    [
      ["photos", "Vector<Photo>"],
      ["users", "Vector<User>"],
    ],
    "photos.Photos",
  ],
  "photos.photosSlice": [
    0x15051F54,
    [
      ["count", "int"],
      ["photos", "Vector<Photo>"],
      ["users", "Vector<User>"],
    ],
    "photos.Photos",
  ],
  "photos.photo": [
    0x20212CA8,
    [
      ["photo", "Photo"],
      ["users", "Vector<User>"],
    ],
    "photos.Photo",
  ],
  "upload.file": [
    0x096A18D5,
    [
      ["type", "storage.FileType"],
      ["mtime", "int"],
      ["bytes", "bytes"],
    ],
    "upload.File",
  ],
  "upload.fileCdnRedirect": [
    0xF18CDA44,
    [
      ["dc_id", "int"],
      ["file_token", "bytes"],
      ["encryption_key", "bytes"],
      ["encryption_iv", "bytes"],
      ["file_hashes", "Vector<FileHash>"],
    ],
    "upload.File",
  ],
  "dcOption": [
    0x18B7A10D,
    [
      ["flags", "#"],
      ["ipv6", "flags.0?true"],
      ["media_only", "flags.1?true"],
      ["tcpo_only", "flags.2?true"],
      ["cdn", "flags.3?true"],
      ["static", "flags.4?true"],
      ["this_port_only", "flags.5?true"],
      ["id", "int"],
      ["ip_address", "string"],
      ["port", "int"],
      ["secret", "flags.10?bytes"],
    ],
    "DcOption",
  ],
  "config": [
    0xCC1A241E,
    [
      ["flags", "#"],
      ["default_p2p_contacts", "flags.3?true"],
      ["preload_featured_stickers", "flags.4?true"],
      ["revoke_pm_inbox", "flags.6?true"],
      ["blocked_mode", "flags.8?true"],
      ["force_try_ipv6", "flags.14?true"],
      ["date", "int"],
      ["expires", "int"],
      ["test_mode", "Bool"],
      ["this_dc", "int"],
      ["dc_options", "Vector<DcOption>"],
      ["dc_txt_domain_name", "string"],
      ["chat_size_max", "int"],
      ["megagroup_size_max", "int"],
      ["forwarded_count_max", "int"],
      ["online_update_period_ms", "int"],
      ["offline_blur_timeout_ms", "int"],
      ["offline_idle_timeout_ms", "int"],
      ["online_cloud_timeout_ms", "int"],
      ["notify_cloud_delay_ms", "int"],
      ["notify_default_delay_ms", "int"],
      ["push_chat_period_ms", "int"],
      ["push_chat_limit", "int"],
      ["edit_time_limit", "int"],
      ["revoke_time_limit", "int"],
      ["revoke_pm_time_limit", "int"],
      ["rating_e_decay", "int"],
      ["stickers_recent_limit", "int"],
      ["channels_read_media_period", "int"],
      ["tmp_sessions", "flags.0?int"],
      ["call_receive_timeout_ms", "int"],
      ["call_ring_timeout_ms", "int"],
      ["call_connect_timeout_ms", "int"],
      ["call_packet_timeout_ms", "int"],
      ["me_url_prefix", "string"],
      ["autoupdate_url_prefix", "flags.7?string"],
      ["gif_search_username", "flags.9?string"],
      ["venue_search_username", "flags.10?string"],
      ["img_search_username", "flags.11?string"],
      ["static_maps_provider", "flags.12?string"],
      ["caption_length_max", "int"],
      ["message_length_max", "int"],
      ["webfile_dc_id", "int"],
      ["suggested_lang_code", "flags.2?string"],
      ["lang_pack_version", "flags.2?int"],
      ["base_lang_pack_version", "flags.2?int"],
      ["reactions_default", "flags.15?Reaction"],
      ["autologin_token", "flags.16?string"],
    ],
    "Config",
  ],
  "nearestDc": [
    0x8E1A1775,
    [
      ["country", "string"],
      ["this_dc", "int"],
      ["nearest_dc", "int"],
    ],
    "NearestDc",
  ],
  "help.appUpdate": [
    0xCCBBCE30,
    [
      ["flags", "#"],
      ["can_not_skip", "flags.0?true"],
      ["id", "int"],
      ["version", "string"],
      ["text", "string"],
      ["entities", "Vector<MessageEntity>"],
      ["document", "flags.1?Document"],
      ["url", "flags.2?string"],
      ["sticker", "flags.3?Document"],
    ],
    "help.AppUpdate",
  ],
  "help.noAppUpdate": [
    0xC45A6536,
    [],
    "help.AppUpdate",
  ],
  "help.inviteText": [
    0x18CB9F78,
    [
      ["message", "string"],
    ],
    "help.InviteText",
  ],
  "encryptedChatEmpty": [
    0xAB7EC0A0,
    [
      ["id", "int"],
    ],
    "EncryptedChat",
  ],
  "encryptedChatWaiting": [
    0x66B25953,
    [
      ["id", "int"],
      ["access_hash", "long"],
      ["date", "int"],
      ["admin_id", "long"],
      ["participant_id", "long"],
    ],
    "EncryptedChat",
  ],
  "encryptedChatRequested": [
    0x48F1D94C,
    [
      ["flags", "#"],
      ["folder_id", "flags.0?int"],
      ["id", "int"],
      ["access_hash", "long"],
      ["date", "int"],
      ["admin_id", "long"],
      ["participant_id", "long"],
      ["g_a", "bytes"],
    ],
    "EncryptedChat",
  ],
  "encryptedChat": [
    0x61F0D4C7,
    [
      ["id", "int"],
      ["access_hash", "long"],
      ["date", "int"],
      ["admin_id", "long"],
      ["participant_id", "long"],
      ["g_a_or_b", "bytes"],
      ["key_fingerprint", "long"],
    ],
    "EncryptedChat",
  ],
  "encryptedChatDiscarded": [
    0x1E1C7C45,
    [
      ["flags", "#"],
      ["history_deleted", "flags.0?true"],
      ["id", "int"],
    ],
    "EncryptedChat",
  ],
  "inputEncryptedChat": [
    0xF141B5E1,
    [
      ["chat_id", "int"],
      ["access_hash", "long"],
    ],
    "InputEncryptedChat",
  ],
  "encryptedFileEmpty": [
    0xC21F497E,
    [],
    "EncryptedFile",
  ],
  "encryptedFile": [
    0xA8008CD8,
    [
      ["id", "long"],
      ["access_hash", "long"],
      ["size", "long"],
      ["dc_id", "int"],
      ["key_fingerprint", "int"],
    ],
    "EncryptedFile",
  ],
  "inputEncryptedFileEmpty": [
    0x1837C364,
    [],
    "InputEncryptedFile",
  ],
  "inputEncryptedFileUploaded": [
    0x64BD0306,
    [
      ["id", "long"],
      ["parts", "int"],
      ["md5_checksum", "string"],
      ["key_fingerprint", "int"],
    ],
    "InputEncryptedFile",
  ],
  "inputEncryptedFile": [
    0x5A17B5E5,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputEncryptedFile",
  ],
  "inputEncryptedFileBigUploaded": [
    0x2DC173C8,
    [
      ["id", "long"],
      ["parts", "int"],
      ["key_fingerprint", "int"],
    ],
    "InputEncryptedFile",
  ],
  "encryptedMessage": [
    0xED18C118,
    [
      ["random_id", "long"],
      ["chat_id", "int"],
      ["date", "int"],
      ["bytes", "bytes"],
      ["file", "EncryptedFile"],
    ],
    "EncryptedMessage",
  ],
  "encryptedMessageService": [
    0x23734B06,
    [
      ["random_id", "long"],
      ["chat_id", "int"],
      ["date", "int"],
      ["bytes", "bytes"],
    ],
    "EncryptedMessage",
  ],
  "messages.dhConfigNotModified": [
    0xC0E24635,
    [
      ["random", "bytes"],
    ],
    "messages.DhConfig",
  ],
  "messages.dhConfig": [
    0x2C221EDD,
    [
      ["g", "int"],
      ["p", "bytes"],
      ["version", "int"],
      ["random", "bytes"],
    ],
    "messages.DhConfig",
  ],
  "messages.sentEncryptedMessage": [
    0x560F8935,
    [
      ["date", "int"],
    ],
    "messages.SentEncryptedMessage",
  ],
  "messages.sentEncryptedFile": [
    0x9493FF32,
    [
      ["date", "int"],
      ["file", "EncryptedFile"],
    ],
    "messages.SentEncryptedMessage",
  ],
  "inputDocumentEmpty": [
    0x72F0EAAE,
    [],
    "InputDocument",
  ],
  "inputDocument": [
    0x1ABFB575,
    [
      ["id", "long"],
      ["access_hash", "long"],
      ["file_reference", "bytes"],
    ],
    "InputDocument",
  ],
  "documentEmpty": [
    0x36F8C871,
    [
      ["id", "long"],
    ],
    "Document",
  ],
  "document": [
    0x8FD4C4D8,
    [
      ["flags", "#"],
      ["id", "long"],
      ["access_hash", "long"],
      ["file_reference", "bytes"],
      ["date", "int"],
      ["mime_type", "string"],
      ["size", "long"],
      ["thumbs", "flags.0?Vector<PhotoSize>"],
      ["video_thumbs", "flags.1?Vector<VideoSize>"],
      ["dc_id", "int"],
      ["attributes", "Vector<DocumentAttribute>"],
    ],
    "Document",
  ],
  "help.support": [
    0x17C6B5F6,
    [
      ["phone_number", "string"],
      ["user", "User"],
    ],
    "help.Support",
  ],
  "notifyPeer": [
    0x9FD40BD8,
    [
      ["peer", "Peer"],
    ],
    "NotifyPeer",
  ],
  "notifyUsers": [
    0xB4C83B4C,
    [],
    "NotifyPeer",
  ],
  "notifyChats": [
    0xC007CEC3,
    [],
    "NotifyPeer",
  ],
  "notifyBroadcasts": [
    0xD612E8EF,
    [],
    "NotifyPeer",
  ],
  "notifyForumTopic": [
    0x226E6308,
    [
      ["peer", "Peer"],
      ["top_msg_id", "int"],
    ],
    "NotifyPeer",
  ],
  "sendMessageTypingAction": [
    0x16BF744E,
    [],
    "SendMessageAction",
  ],
  "sendMessageCancelAction": [
    0xFD5EC8F5,
    [],
    "SendMessageAction",
  ],
  "sendMessageRecordVideoAction": [
    0xA187D66F,
    [],
    "SendMessageAction",
  ],
  "sendMessageUploadVideoAction": [
    0xE9763AEC,
    [
      ["progress", "int"],
    ],
    "SendMessageAction",
  ],
  "sendMessageRecordAudioAction": [
    0xD52F73F7,
    [],
    "SendMessageAction",
  ],
  "sendMessageUploadAudioAction": [
    0xF351D7AB,
    [
      ["progress", "int"],
    ],
    "SendMessageAction",
  ],
  "sendMessageUploadPhotoAction": [
    0xD1D34A26,
    [
      ["progress", "int"],
    ],
    "SendMessageAction",
  ],
  "sendMessageUploadDocumentAction": [
    0xAA0CD9E4,
    [
      ["progress", "int"],
    ],
    "SendMessageAction",
  ],
  "sendMessageGeoLocationAction": [
    0x176F8BA1,
    [],
    "SendMessageAction",
  ],
  "sendMessageChooseContactAction": [
    0x628CBC6F,
    [],
    "SendMessageAction",
  ],
  "sendMessageGamePlayAction": [
    0xDD6A8F48,
    [],
    "SendMessageAction",
  ],
  "sendMessageRecordRoundAction": [
    0x88F27FBC,
    [],
    "SendMessageAction",
  ],
  "sendMessageUploadRoundAction": [
    0x243E1C66,
    [
      ["progress", "int"],
    ],
    "SendMessageAction",
  ],
  "speakingInGroupCallAction": [
    0xD92C2285,
    [],
    "SendMessageAction",
  ],
  "sendMessageHistoryImportAction": [
    0xDBDA9246,
    [
      ["progress", "int"],
    ],
    "SendMessageAction",
  ],
  "sendMessageChooseStickerAction": [
    0xB05AC6B1,
    [],
    "SendMessageAction",
  ],
  "sendMessageEmojiInteraction": [
    0x25972BCB,
    [
      ["emoticon", "string"],
      ["msg_id", "int"],
      ["interaction", "DataJSON"],
    ],
    "SendMessageAction",
  ],
  "sendMessageEmojiInteractionSeen": [
    0xB665902E,
    [
      ["emoticon", "string"],
    ],
    "SendMessageAction",
  ],
  "contacts.found": [
    0xB3134D9D,
    [
      ["my_results", "Vector<Peer>"],
      ["results", "Vector<Peer>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "contacts.Found",
  ],
  "inputPrivacyKeyStatusTimestamp": [
    0x4F96CB18,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyChatInvite": [
    0xBDFB0426,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyPhoneCall": [
    0xFABADC5F,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyPhoneP2P": [
    0xDB9E70D2,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyForwards": [
    0xA4DD4C08,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyProfilePhoto": [
    0x5719BACC,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyPhoneNumber": [
    0x0352DAFA,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyAddedByPhone": [
    0xD1219BDD,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyVoiceMessages": [
    0xAEE69D68,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyAbout": [
    0x3823CC40,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyBirthday": [
    0xD65A11CC,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyStarGiftsAutoSave": [
    0xE1732341,
    [],
    "InputPrivacyKey",
  ],
  "inputPrivacyKeyNoPaidMessages": [
    0xBDC597B4,
    [],
    "InputPrivacyKey",
  ],
  "privacyKeyStatusTimestamp": [
    0xBC2EAB30,
    [],
    "PrivacyKey",
  ],
  "privacyKeyChatInvite": [
    0x500E6DFA,
    [],
    "PrivacyKey",
  ],
  "privacyKeyPhoneCall": [
    0x3D662B7B,
    [],
    "PrivacyKey",
  ],
  "privacyKeyPhoneP2P": [
    0x39491CC8,
    [],
    "PrivacyKey",
  ],
  "privacyKeyForwards": [
    0x69EC56A3,
    [],
    "PrivacyKey",
  ],
  "privacyKeyProfilePhoto": [
    0x96151FED,
    [],
    "PrivacyKey",
  ],
  "privacyKeyPhoneNumber": [
    0xD19AE46D,
    [],
    "PrivacyKey",
  ],
  "privacyKeyAddedByPhone": [
    0x42FFD42B,
    [],
    "PrivacyKey",
  ],
  "privacyKeyVoiceMessages": [
    0x0697F414,
    [],
    "PrivacyKey",
  ],
  "privacyKeyAbout": [
    0xA486B761,
    [],
    "PrivacyKey",
  ],
  "privacyKeyBirthday": [
    0x2000A518,
    [],
    "PrivacyKey",
  ],
  "privacyKeyStarGiftsAutoSave": [
    0x2CA4FDF8,
    [],
    "PrivacyKey",
  ],
  "privacyKeyNoPaidMessages": [
    0x17D348D2,
    [],
    "PrivacyKey",
  ],
  "inputPrivacyValueAllowContacts": [
    0x0D09E07B,
    [],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueAllowAll": [
    0x184B35CE,
    [],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueAllowUsers": [
    0x131CC67F,
    [
      ["users", "Vector<InputUser>"],
    ],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueDisallowContacts": [
    0x0BA52007,
    [],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueDisallowAll": [
    0xD66B66C9,
    [],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueDisallowUsers": [
    0x90110467,
    [
      ["users", "Vector<InputUser>"],
    ],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueAllowChatParticipants": [
    0x840649CF,
    [
      ["chats", "Vector<long>"],
    ],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueDisallowChatParticipants": [
    0xE94F0F86,
    [
      ["chats", "Vector<long>"],
    ],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueAllowCloseFriends": [
    0x2F453E49,
    [],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueAllowPremium": [
    0x77CDC9F1,
    [],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueAllowBots": [
    0x5A4FCCE5,
    [],
    "InputPrivacyRule",
  ],
  "inputPrivacyValueDisallowBots": [
    0xC4E57915,
    [],
    "InputPrivacyRule",
  ],
  "privacyValueAllowContacts": [
    0xFFFE1BAC,
    [],
    "PrivacyRule",
  ],
  "privacyValueAllowAll": [
    0x65427B82,
    [],
    "PrivacyRule",
  ],
  "privacyValueAllowUsers": [
    0xB8905FB2,
    [
      ["users", "Vector<long>"],
    ],
    "PrivacyRule",
  ],
  "privacyValueDisallowContacts": [
    0xF888FA1A,
    [],
    "PrivacyRule",
  ],
  "privacyValueDisallowAll": [
    0x8B73E763,
    [],
    "PrivacyRule",
  ],
  "privacyValueDisallowUsers": [
    0xE4621141,
    [
      ["users", "Vector<long>"],
    ],
    "PrivacyRule",
  ],
  "privacyValueAllowChatParticipants": [
    0x6B134E8E,
    [
      ["chats", "Vector<long>"],
    ],
    "PrivacyRule",
  ],
  "privacyValueDisallowChatParticipants": [
    0x41C87565,
    [
      ["chats", "Vector<long>"],
    ],
    "PrivacyRule",
  ],
  "privacyValueAllowCloseFriends": [
    0xF7E8D89B,
    [],
    "PrivacyRule",
  ],
  "privacyValueAllowPremium": [
    0xECE9814B,
    [],
    "PrivacyRule",
  ],
  "privacyValueAllowBots": [
    0x21461B5D,
    [],
    "PrivacyRule",
  ],
  "privacyValueDisallowBots": [
    0xF6A5F82F,
    [],
    "PrivacyRule",
  ],
  "account.privacyRules": [
    0x50A04E45,
    [
      ["rules", "Vector<PrivacyRule>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "account.PrivacyRules",
  ],
  "accountDaysTTL": [
    0xB8D0AFDF,
    [
      ["days", "int"],
    ],
    "AccountDaysTTL",
  ],
  "documentAttributeImageSize": [
    0x6C37C15C,
    [
      ["w", "int"],
      ["h", "int"],
    ],
    "DocumentAttribute",
  ],
  "documentAttributeAnimated": [
    0x11B58939,
    [],
    "DocumentAttribute",
  ],
  "documentAttributeSticker": [
    0x6319D612,
    [
      ["flags", "#"],
      ["mask", "flags.1?true"],
      ["alt", "string"],
      ["stickerset", "InputStickerSet"],
      ["mask_coords", "flags.0?MaskCoords"],
    ],
    "DocumentAttribute",
  ],
  "documentAttributeVideo": [
    0x43C57C48,
    [
      ["flags", "#"],
      ["round_message", "flags.0?true"],
      ["supports_streaming", "flags.1?true"],
      ["nosound", "flags.3?true"],
      ["duration", "double"],
      ["w", "int"],
      ["h", "int"],
      ["preload_prefix_size", "flags.2?int"],
      ["video_start_ts", "flags.4?double"],
      ["video_codec", "flags.5?string"],
    ],
    "DocumentAttribute",
  ],
  "documentAttributeAudio": [
    0x9852F9C6,
    [
      ["flags", "#"],
      ["voice", "flags.10?true"],
      ["duration", "int"],
      ["title", "flags.0?string"],
      ["performer", "flags.1?string"],
      ["waveform", "flags.2?bytes"],
    ],
    "DocumentAttribute",
  ],
  "documentAttributeFilename": [
    0x15590068,
    [
      ["file_name", "string"],
    ],
    "DocumentAttribute",
  ],
  "documentAttributeHasStickers": [
    0x9801D2F7,
    [],
    "DocumentAttribute",
  ],
  "documentAttributeCustomEmoji": [
    0xFD149899,
    [
      ["flags", "#"],
      ["free", "flags.0?true"],
      ["text_color", "flags.1?true"],
      ["alt", "string"],
      ["stickerset", "InputStickerSet"],
    ],
    "DocumentAttribute",
  ],
  "messages.stickersNotModified": [
    0xF1749A22,
    [],
    "messages.Stickers",
  ],
  "messages.stickers": [
    0x30A6EC7E,
    [
      ["hash", "long"],
      ["stickers", "Vector<Document>"],
    ],
    "messages.Stickers",
  ],
  "stickerPack": [
    0x12B299D4,
    [
      ["emoticon", "string"],
      ["documents", "Vector<long>"],
    ],
    "StickerPack",
  ],
  "messages.allStickersNotModified": [
    0xE86602C3,
    [],
    "messages.AllStickers",
  ],
  "messages.allStickers": [
    0xCDBBCEBB,
    [
      ["hash", "long"],
      ["sets", "Vector<StickerSet>"],
    ],
    "messages.AllStickers",
  ],
  "messages.affectedMessages": [
    0x84D19185,
    [
      ["pts", "int"],
      ["pts_count", "int"],
    ],
    "messages.AffectedMessages",
  ],
  "webPageEmpty": [
    0x211A1788,
    [
      ["flags", "#"],
      ["id", "long"],
      ["url", "flags.0?string"],
    ],
    "WebPage",
  ],
  "webPagePending": [
    0xB0D13E47,
    [
      ["flags", "#"],
      ["id", "long"],
      ["url", "flags.0?string"],
      ["date", "int"],
    ],
    "WebPage",
  ],
  "webPage": [
    0xE89C45B2,
    [
      ["flags", "#"],
      ["has_large_media", "flags.13?true"],
      ["video_cover_photo", "flags.14?true"],
      ["id", "long"],
      ["url", "string"],
      ["display_url", "string"],
      ["hash", "int"],
      ["type", "flags.0?string"],
      ["site_name", "flags.1?string"],
      ["title", "flags.2?string"],
      ["description", "flags.3?string"],
      ["photo", "flags.4?Photo"],
      ["embed_url", "flags.5?string"],
      ["embed_type", "flags.5?string"],
      ["embed_width", "flags.6?int"],
      ["embed_height", "flags.6?int"],
      ["duration", "flags.7?int"],
      ["author", "flags.8?string"],
      ["document", "flags.9?Document"],
      ["cached_page", "flags.10?Page"],
      ["attributes", "flags.12?Vector<WebPageAttribute>"],
    ],
    "WebPage",
  ],
  "webPageNotModified": [
    0x7311CA11,
    [
      ["flags", "#"],
      ["cached_page_views", "flags.0?int"],
    ],
    "WebPage",
  ],
  "authorization": [
    0xAD01D61D,
    [
      ["flags", "#"],
      ["current", "flags.0?true"],
      ["official_app", "flags.1?true"],
      ["password_pending", "flags.2?true"],
      ["encrypted_requests_disabled", "flags.3?true"],
      ["call_requests_disabled", "flags.4?true"],
      ["unconfirmed", "flags.5?true"],
      ["hash", "long"],
      ["device_model", "string"],
      ["platform", "string"],
      ["system_version", "string"],
      ["api_id", "int"],
      ["app_name", "string"],
      ["app_version", "string"],
      ["date_created", "int"],
      ["date_active", "int"],
      ["ip", "string"],
      ["country", "string"],
      ["region", "string"],
    ],
    "Authorization",
  ],
  "account.authorizations": [
    0x4BFF8EA0,
    [
      ["authorization_ttl_days", "int"],
      ["authorizations", "Vector<Authorization>"],
    ],
    "account.Authorizations",
  ],
  "account.password": [
    0x957B50FB,
    [
      ["flags", "#"],
      ["has_recovery", "flags.0?true"],
      ["has_secure_values", "flags.1?true"],
      ["has_password", "flags.2?true"],
      ["current_algo", "flags.2?PasswordKdfAlgo"],
      ["srp_B", "flags.2?bytes"],
      ["srp_id", "flags.2?long"],
      ["hint", "flags.3?string"],
      ["email_unconfirmed_pattern", "flags.4?string"],
      ["new_algo", "PasswordKdfAlgo"],
      ["new_secure_algo", "SecurePasswordKdfAlgo"],
      ["secure_random", "bytes"],
      ["pending_reset_date", "flags.5?int"],
      ["login_email_pattern", "flags.6?string"],
    ],
    "account.Password",
  ],
  "account.passwordSettings": [
    0x9A5C33E5,
    [
      ["flags", "#"],
      ["email", "flags.0?string"],
      ["secure_settings", "flags.1?SecureSecretSettings"],
    ],
    "account.PasswordSettings",
  ],
  "account.passwordInputSettings": [
    0xC23727C9,
    [
      ["flags", "#"],
      ["new_algo", "flags.0?PasswordKdfAlgo"],
      ["new_password_hash", "flags.0?bytes"],
      ["hint", "flags.0?string"],
      ["email", "flags.1?string"],
      ["new_secure_settings", "flags.2?SecureSecretSettings"],
    ],
    "account.PasswordInputSettings",
  ],
  "auth.passwordRecovery": [
    0x137948A5,
    [
      ["email_pattern", "string"],
    ],
    "auth.PasswordRecovery",
  ],
  "receivedNotifyMessage": [
    0xA384B779,
    [
      ["id", "int"],
      ["flags", "int"],
    ],
    "ReceivedNotifyMessage",
  ],
  "chatInviteExported": [
    0xA22CBD96,
    [
      ["flags", "#"],
      ["revoked", "flags.0?true"],
      ["permanent", "flags.5?true"],
      ["request_needed", "flags.6?true"],
      ["link", "string"],
      ["admin_id", "long"],
      ["date", "int"],
      ["start_date", "flags.4?int"],
      ["expire_date", "flags.1?int"],
      ["usage_limit", "flags.2?int"],
      ["usage", "flags.3?int"],
      ["requested", "flags.7?int"],
      ["subscription_expired", "flags.10?int"],
      ["title", "flags.8?string"],
      ["subscription_pricing", "flags.9?StarsSubscriptionPricing"],
    ],
    "ExportedChatInvite",
  ],
  "chatInvitePublicJoinRequests": [
    0xED107AB7,
    [],
    "ExportedChatInvite",
  ],
  "chatInviteAlready": [
    0x5A686D7C,
    [
      ["chat", "Chat"],
    ],
    "ChatInvite",
  ],
  "chatInvite": [
    0x5C9D3702,
    [
      ["flags", "#"],
      ["channel", "flags.0?true"],
      ["broadcast", "flags.1?true"],
      ["public", "flags.2?true"],
      ["megagroup", "flags.3?true"],
      ["request_needed", "flags.6?true"],
      ["verified", "flags.7?true"],
      ["scam", "flags.8?true"],
      ["fake", "flags.9?true"],
      ["can_refulfill_subscription", "flags.11?true"],
      ["title", "string"],
      ["about", "flags.5?string"],
      ["photo", "Photo"],
      ["participants_count", "int"],
      ["participants", "flags.4?Vector<User>"],
      ["color", "int"],
      ["subscription_pricing", "flags.10?StarsSubscriptionPricing"],
      ["subscription_form_id", "flags.12?long"],
      ["bot_verification", "flags.13?BotVerification"],
    ],
    "ChatInvite",
  ],
  "chatInvitePeek": [
    0x61695CB0,
    [
      ["chat", "Chat"],
      ["expires", "int"],
    ],
    "ChatInvite",
  ],
  "inputStickerSetEmpty": [
    0xFFB62B95,
    [],
    "InputStickerSet",
  ],
  "inputStickerSetID": [
    0x9DE7A269,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputStickerSet",
  ],
  "inputStickerSetShortName": [
    0x861CC8A0,
    [
      ["short_name", "string"],
    ],
    "InputStickerSet",
  ],
  "inputStickerSetAnimatedEmoji": [
    0x028703C8,
    [],
    "InputStickerSet",
  ],
  "inputStickerSetDice": [
    0xE67F520E,
    [
      ["emoticon", "string"],
    ],
    "InputStickerSet",
  ],
  "inputStickerSetAnimatedEmojiAnimations": [
    0x0CDE3739,
    [],
    "InputStickerSet",
  ],
  "inputStickerSetPremiumGifts": [
    0xC88B3B02,
    [],
    "InputStickerSet",
  ],
  "inputStickerSetEmojiGenericAnimations": [
    0x04C4D4CE,
    [],
    "InputStickerSet",
  ],
  "inputStickerSetEmojiDefaultStatuses": [
    0x29D0F5EE,
    [],
    "InputStickerSet",
  ],
  "inputStickerSetEmojiDefaultTopicIcons": [
    0x44C1F8E9,
    [],
    "InputStickerSet",
  ],
  "inputStickerSetEmojiChannelDefaultStatuses": [
    0x49748553,
    [],
    "InputStickerSet",
  ],
  "stickerSet": [
    0x2DD14EDC,
    [
      ["flags", "#"],
      ["archived", "flags.1?true"],
      ["official", "flags.2?true"],
      ["masks", "flags.3?true"],
      ["emojis", "flags.7?true"],
      ["text_color", "flags.9?true"],
      ["channel_emoji_status", "flags.10?true"],
      ["creator", "flags.11?true"],
      ["installed_date", "flags.0?int"],
      ["id", "long"],
      ["access_hash", "long"],
      ["title", "string"],
      ["short_name", "string"],
      ["thumbs", "flags.4?Vector<PhotoSize>"],
      ["thumb_dc_id", "flags.4?int"],
      ["thumb_version", "flags.4?int"],
      ["thumb_document_id", "flags.8?long"],
      ["count", "int"],
      ["hash", "int"],
    ],
    "StickerSet",
  ],
  "messages.stickerSet": [
    0x6E153F16,
    [
      ["set", "StickerSet"],
      ["packs", "Vector<StickerPack>"],
      ["keywords", "Vector<StickerKeyword>"],
      ["documents", "Vector<Document>"],
    ],
    "messages.StickerSet",
  ],
  "messages.stickerSetNotModified": [
    0xD3F924EB,
    [],
    "messages.StickerSet",
  ],
  "botCommand": [
    0xC27AC8C7,
    [
      ["command", "string"],
      ["description", "string"],
    ],
    "BotCommand",
  ],
  "botInfo": [
    0x4D8A0299,
    [
      ["flags", "#"],
      ["has_preview_medias", "flags.6?true"],
      ["user_id", "flags.0?long"],
      ["description", "flags.1?string"],
      ["description_photo", "flags.4?Photo"],
      ["description_document", "flags.5?Document"],
      ["commands", "flags.2?Vector<BotCommand>"],
      ["menu_button", "flags.3?BotMenuButton"],
      ["privacy_policy_url", "flags.7?string"],
      ["app_settings", "flags.8?BotAppSettings"],
      ["verifier_settings", "flags.9?BotVerifierSettings"],
    ],
    "BotInfo",
  ],
  "keyboardButton": [
    0xA2FA4880,
    [
      ["text", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonUrl": [
    0x258AFF05,
    [
      ["text", "string"],
      ["url", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonCallback": [
    0x35BBDB6B,
    [
      ["flags", "#"],
      ["requires_password", "flags.0?true"],
      ["text", "string"],
      ["data", "bytes"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonRequestPhone": [
    0xB16A6C29,
    [
      ["text", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonRequestGeoLocation": [
    0xFC796B3F,
    [
      ["text", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonSwitchInline": [
    0x93B9FBB5,
    [
      ["flags", "#"],
      ["same_peer", "flags.0?true"],
      ["text", "string"],
      ["query", "string"],
      ["peer_types", "flags.1?Vector<InlineQueryPeerType>"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonGame": [
    0x50F41CCF,
    [
      ["text", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonBuy": [
    0xAFD93FBB,
    [
      ["text", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonUrlAuth": [
    0x10B78D29,
    [
      ["flags", "#"],
      ["text", "string"],
      ["fwd_text", "flags.0?string"],
      ["url", "string"],
      ["button_id", "int"],
    ],
    "KeyboardButton",
  ],
  "inputKeyboardButtonUrlAuth": [
    0xD02E7FD4,
    [
      ["flags", "#"],
      ["request_write_access", "flags.0?true"],
      ["text", "string"],
      ["fwd_text", "flags.1?string"],
      ["url", "string"],
      ["bot", "InputUser"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonRequestPoll": [
    0xBBC7515D,
    [
      ["flags", "#"],
      ["quiz", "flags.0?Bool"],
      ["text", "string"],
    ],
    "KeyboardButton",
  ],
  "inputKeyboardButtonUserProfile": [
    0xE988037B,
    [
      ["text", "string"],
      ["user_id", "InputUser"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonUserProfile": [
    0x308660C1,
    [
      ["text", "string"],
      ["user_id", "long"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonWebView": [
    0x13767230,
    [
      ["text", "string"],
      ["url", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonSimpleWebView": [
    0xA0C0505C,
    [
      ["text", "string"],
      ["url", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonRequestPeer": [
    0x53D7BFD8,
    [
      ["text", "string"],
      ["button_id", "int"],
      ["peer_type", "RequestPeerType"],
      ["max_quantity", "int"],
    ],
    "KeyboardButton",
  ],
  "inputKeyboardButtonRequestPeer": [
    0xC9662D05,
    [
      ["flags", "#"],
      ["name_requested", "flags.0?true"],
      ["username_requested", "flags.1?true"],
      ["photo_requested", "flags.2?true"],
      ["text", "string"],
      ["button_id", "int"],
      ["peer_type", "RequestPeerType"],
      ["max_quantity", "int"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonCopy": [
    0x75D2698E,
    [
      ["text", "string"],
      ["copy_text", "string"],
    ],
    "KeyboardButton",
  ],
  "keyboardButtonRow": [
    0x77608B83,
    [
      ["buttons", "Vector<KeyboardButton>"],
    ],
    "KeyboardButtonRow",
  ],
  "replyKeyboardHide": [
    0xA03E5B85,
    [
      ["flags", "#"],
      ["selective", "flags.2?true"],
    ],
    "ReplyMarkup",
  ],
  "replyKeyboardForceReply": [
    0x86B40B08,
    [
      ["flags", "#"],
      ["single_use", "flags.1?true"],
      ["selective", "flags.2?true"],
      ["placeholder", "flags.3?string"],
    ],
    "ReplyMarkup",
  ],
  "replyKeyboardMarkup": [
    0x85DD99D1,
    [
      ["flags", "#"],
      ["resize", "flags.0?true"],
      ["single_use", "flags.1?true"],
      ["selective", "flags.2?true"],
      ["persistent", "flags.4?true"],
      ["rows", "Vector<KeyboardButtonRow>"],
      ["placeholder", "flags.3?string"],
    ],
    "ReplyMarkup",
  ],
  "replyInlineMarkup": [
    0x48A30254,
    [
      ["rows", "Vector<KeyboardButtonRow>"],
    ],
    "ReplyMarkup",
  ],
  "messageEntityUnknown": [
    0xBB92BA95,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityMention": [
    0xFA04579D,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityHashtag": [
    0x6F635B0D,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityBotCommand": [
    0x6CEF8AC7,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityUrl": [
    0x6ED02538,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityEmail": [
    0x64E475C2,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityBold": [
    0xBD610BC9,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityItalic": [
    0x826F8B60,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityCode": [
    0x28A20571,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityPre": [
    0x73924BE0,
    [
      ["offset", "int"],
      ["length", "int"],
      ["language", "string"],
    ],
    "MessageEntity",
  ],
  "messageEntityTextUrl": [
    0x76A6D327,
    [
      ["offset", "int"],
      ["length", "int"],
      ["url", "string"],
    ],
    "MessageEntity",
  ],
  "messageEntityMentionName": [
    0xDC7B1140,
    [
      ["offset", "int"],
      ["length", "int"],
      ["user_id", "long"],
    ],
    "MessageEntity",
  ],
  "inputMessageEntityMentionName": [
    0x208E68C9,
    [
      ["offset", "int"],
      ["length", "int"],
      ["user_id", "InputUser"],
    ],
    "MessageEntity",
  ],
  "messageEntityPhone": [
    0x9B69E34B,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityCashtag": [
    0x4C4E743F,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityUnderline": [
    0x9C4E7E8B,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityStrike": [
    0xBF0693D4,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityBankCard": [
    0x761E6AF4,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntitySpoiler": [
    0x32CA960F,
    [
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "messageEntityCustomEmoji": [
    0xC8CF05F8,
    [
      ["offset", "int"],
      ["length", "int"],
      ["document_id", "long"],
    ],
    "MessageEntity",
  ],
  "messageEntityBlockquote": [
    0xF1CCAAAC,
    [
      ["flags", "#"],
      ["collapsed", "flags.0?true"],
      ["offset", "int"],
      ["length", "int"],
    ],
    "MessageEntity",
  ],
  "inputChannelEmpty": [
    0xEE8C1E86,
    [],
    "InputChannel",
  ],
  "inputChannel": [
    0xF35AEC28,
    [
      ["channel_id", "long"],
      ["access_hash", "long"],
    ],
    "InputChannel",
  ],
  "inputChannelFromMessage": [
    0x5B934F9D,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["channel_id", "long"],
    ],
    "InputChannel",
  ],
  "contacts.resolvedPeer": [
    0x7F077AD9,
    [
      ["peer", "Peer"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "contacts.ResolvedPeer",
  ],
  "messageRange": [
    0x0AE30253,
    [
      ["min_id", "int"],
      ["max_id", "int"],
    ],
    "MessageRange",
  ],
  "updates.channelDifferenceEmpty": [
    0x3E11AFFB,
    [
      ["flags", "#"],
      ["final", "flags.0?true"],
      ["pts", "int"],
      ["timeout", "flags.1?int"],
    ],
    "updates.ChannelDifference",
  ],
  "updates.channelDifferenceTooLong": [
    0xA4BCC6FE,
    [
      ["flags", "#"],
      ["final", "flags.0?true"],
      ["timeout", "flags.1?int"],
      ["dialog", "Dialog"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "updates.ChannelDifference",
  ],
  "updates.channelDifference": [
    0x2064674E,
    [
      ["flags", "#"],
      ["final", "flags.0?true"],
      ["pts", "int"],
      ["timeout", "flags.1?int"],
      ["new_messages", "Vector<Message>"],
      ["other_updates", "Vector<Update>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "updates.ChannelDifference",
  ],
  "channelMessagesFilterEmpty": [
    0x94D42EE7,
    [],
    "ChannelMessagesFilter",
  ],
  "channelMessagesFilter": [
    0xCD77D957,
    [
      ["flags", "#"],
      ["exclude_new_messages", "flags.1?true"],
      ["ranges", "Vector<MessageRange>"],
    ],
    "ChannelMessagesFilter",
  ],
  "channelParticipant": [
    0xCB397619,
    [
      ["flags", "#"],
      ["user_id", "long"],
      ["date", "int"],
      ["subscription_until_date", "flags.0?int"],
    ],
    "ChannelParticipant",
  ],
  "channelParticipantSelf": [
    0x4F607BEF,
    [
      ["flags", "#"],
      ["via_request", "flags.0?true"],
      ["user_id", "long"],
      ["inviter_id", "long"],
      ["date", "int"],
      ["subscription_until_date", "flags.1?int"],
    ],
    "ChannelParticipant",
  ],
  "channelParticipantCreator": [
    0x2FE601D3,
    [
      ["flags", "#"],
      ["user_id", "long"],
      ["admin_rights", "ChatAdminRights"],
      ["rank", "flags.0?string"],
    ],
    "ChannelParticipant",
  ],
  "channelParticipantAdmin": [
    0x34C3BB53,
    [
      ["flags", "#"],
      ["can_edit", "flags.0?true"],
      ["self", "flags.1?true"],
      ["user_id", "long"],
      ["inviter_id", "flags.1?long"],
      ["promoted_by", "long"],
      ["date", "int"],
      ["admin_rights", "ChatAdminRights"],
      ["rank", "flags.2?string"],
    ],
    "ChannelParticipant",
  ],
  "channelParticipantBanned": [
    0x6DF8014E,
    [
      ["flags", "#"],
      ["left", "flags.0?true"],
      ["peer", "Peer"],
      ["kicked_by", "long"],
      ["date", "int"],
      ["banned_rights", "ChatBannedRights"],
    ],
    "ChannelParticipant",
  ],
  "channelParticipantLeft": [
    0x1B03F006,
    [
      ["peer", "Peer"],
    ],
    "ChannelParticipant",
  ],
  "channelParticipantsRecent": [
    0xDE3F3C79,
    [],
    "ChannelParticipantsFilter",
  ],
  "channelParticipantsAdmins": [
    0xB4608969,
    [],
    "ChannelParticipantsFilter",
  ],
  "channelParticipantsKicked": [
    0xA3B54985,
    [
      ["q", "string"],
    ],
    "ChannelParticipantsFilter",
  ],
  "channelParticipantsBots": [
    0xB0D1865B,
    [],
    "ChannelParticipantsFilter",
  ],
  "channelParticipantsBanned": [
    0x1427A5E1,
    [
      ["q", "string"],
    ],
    "ChannelParticipantsFilter",
  ],
  "channelParticipantsSearch": [
    0x0656AC4B,
    [
      ["q", "string"],
    ],
    "ChannelParticipantsFilter",
  ],
  "channelParticipantsContacts": [
    0xBB6AE88D,
    [
      ["q", "string"],
    ],
    "ChannelParticipantsFilter",
  ],
  "channelParticipantsMentions": [
    0xE04B5CEB,
    [
      ["flags", "#"],
      ["q", "flags.0?string"],
      ["top_msg_id", "flags.1?int"],
    ],
    "ChannelParticipantsFilter",
  ],
  "channels.channelParticipants": [
    0x9AB0FEAF,
    [
      ["count", "int"],
      ["participants", "Vector<ChannelParticipant>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "channels.ChannelParticipants",
  ],
  "channels.channelParticipantsNotModified": [
    0xF0173FE9,
    [],
    "channels.ChannelParticipants",
  ],
  "channels.channelParticipant": [
    0xDFB80317,
    [
      ["participant", "ChannelParticipant"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "channels.ChannelParticipant",
  ],
  "help.termsOfService": [
    0x780A0310,
    [
      ["flags", "#"],
      ["popup", "flags.0?true"],
      ["id", "DataJSON"],
      ["text", "string"],
      ["entities", "Vector<MessageEntity>"],
      ["min_age_confirm", "flags.1?int"],
    ],
    "help.TermsOfService",
  ],
  "messages.savedGifsNotModified": [
    0xE8025CA2,
    [],
    "messages.SavedGifs",
  ],
  "messages.savedGifs": [
    0x84A02A0D,
    [
      ["hash", "long"],
      ["gifs", "Vector<Document>"],
    ],
    "messages.SavedGifs",
  ],
  "inputBotInlineMessageMediaAuto": [
    0x3380C786,
    [
      ["flags", "#"],
      ["invert_media", "flags.3?true"],
      ["message", "string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "InputBotInlineMessage",
  ],
  "inputBotInlineMessageText": [
    0x3DCD7A87,
    [
      ["flags", "#"],
      ["no_webpage", "flags.0?true"],
      ["invert_media", "flags.3?true"],
      ["message", "string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "InputBotInlineMessage",
  ],
  "inputBotInlineMessageMediaGeo": [
    0x96929A85,
    [
      ["flags", "#"],
      ["geo_point", "InputGeoPoint"],
      ["heading", "flags.0?int"],
      ["period", "flags.1?int"],
      ["proximity_notification_radius", "flags.3?int"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "InputBotInlineMessage",
  ],
  "inputBotInlineMessageMediaVenue": [
    0x417BBF11,
    [
      ["flags", "#"],
      ["geo_point", "InputGeoPoint"],
      ["title", "string"],
      ["address", "string"],
      ["provider", "string"],
      ["venue_id", "string"],
      ["venue_type", "string"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "InputBotInlineMessage",
  ],
  "inputBotInlineMessageMediaContact": [
    0xA6EDBFFD,
    [
      ["flags", "#"],
      ["phone_number", "string"],
      ["first_name", "string"],
      ["last_name", "string"],
      ["vcard", "string"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "InputBotInlineMessage",
  ],
  "inputBotInlineMessageGame": [
    0x4B425864,
    [
      ["flags", "#"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "InputBotInlineMessage",
  ],
  "inputBotInlineMessageMediaInvoice": [
    0xD7E78225,
    [
      ["flags", "#"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "flags.0?InputWebDocument"],
      ["invoice", "Invoice"],
      ["payload", "bytes"],
      ["provider", "string"],
      ["provider_data", "DataJSON"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "InputBotInlineMessage",
  ],
  "inputBotInlineMessageMediaWebPage": [
    0xBDDCC510,
    [
      ["flags", "#"],
      ["invert_media", "flags.3?true"],
      ["force_large_media", "flags.4?true"],
      ["force_small_media", "flags.5?true"],
      ["optional", "flags.6?true"],
      ["message", "string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["url", "string"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "InputBotInlineMessage",
  ],
  "inputBotInlineResult": [
    0x88BF9319,
    [
      ["flags", "#"],
      ["id", "string"],
      ["type", "string"],
      ["title", "flags.1?string"],
      ["description", "flags.2?string"],
      ["url", "flags.3?string"],
      ["thumb", "flags.4?InputWebDocument"],
      ["content", "flags.5?InputWebDocument"],
      ["send_message", "InputBotInlineMessage"],
    ],
    "InputBotInlineResult",
  ],
  "inputBotInlineResultPhoto": [
    0xA8D864A7,
    [
      ["id", "string"],
      ["type", "string"],
      ["photo", "InputPhoto"],
      ["send_message", "InputBotInlineMessage"],
    ],
    "InputBotInlineResult",
  ],
  "inputBotInlineResultDocument": [
    0xFFF8FDC4,
    [
      ["flags", "#"],
      ["id", "string"],
      ["type", "string"],
      ["title", "flags.1?string"],
      ["description", "flags.2?string"],
      ["document", "InputDocument"],
      ["send_message", "InputBotInlineMessage"],
    ],
    "InputBotInlineResult",
  ],
  "inputBotInlineResultGame": [
    0x4FA417F2,
    [
      ["id", "string"],
      ["short_name", "string"],
      ["send_message", "InputBotInlineMessage"],
    ],
    "InputBotInlineResult",
  ],
  "botInlineMessageMediaAuto": [
    0x764CF810,
    [
      ["flags", "#"],
      ["invert_media", "flags.3?true"],
      ["message", "string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "BotInlineMessage",
  ],
  "botInlineMessageText": [
    0x8C7F65E2,
    [
      ["flags", "#"],
      ["no_webpage", "flags.0?true"],
      ["invert_media", "flags.3?true"],
      ["message", "string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "BotInlineMessage",
  ],
  "botInlineMessageMediaGeo": [
    0x051846FD,
    [
      ["flags", "#"],
      ["geo", "GeoPoint"],
      ["heading", "flags.0?int"],
      ["period", "flags.1?int"],
      ["proximity_notification_radius", "flags.3?int"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "BotInlineMessage",
  ],
  "botInlineMessageMediaVenue": [
    0x8A86659C,
    [
      ["flags", "#"],
      ["geo", "GeoPoint"],
      ["title", "string"],
      ["address", "string"],
      ["provider", "string"],
      ["venue_id", "string"],
      ["venue_type", "string"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "BotInlineMessage",
  ],
  "botInlineMessageMediaContact": [
    0x18D1CDC2,
    [
      ["flags", "#"],
      ["phone_number", "string"],
      ["first_name", "string"],
      ["last_name", "string"],
      ["vcard", "string"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "BotInlineMessage",
  ],
  "botInlineMessageMediaInvoice": [
    0x354A9B09,
    [
      ["flags", "#"],
      ["shipping_address_requested", "flags.1?true"],
      ["test", "flags.3?true"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "flags.0?WebDocument"],
      ["currency", "string"],
      ["total_amount", "long"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "BotInlineMessage",
  ],
  "botInlineMessageMediaWebPage": [
    0x809AD9A6,
    [
      ["flags", "#"],
      ["invert_media", "flags.3?true"],
      ["force_large_media", "flags.4?true"],
      ["force_small_media", "flags.5?true"],
      ["manual", "flags.7?true"],
      ["safe", "flags.8?true"],
      ["message", "string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["url", "string"],
      ["reply_markup", "flags.2?ReplyMarkup"],
    ],
    "BotInlineMessage",
  ],
  "botInlineResult": [
    0x11965F3A,
    [
      ["flags", "#"],
      ["id", "string"],
      ["type", "string"],
      ["title", "flags.1?string"],
      ["description", "flags.2?string"],
      ["url", "flags.3?string"],
      ["thumb", "flags.4?WebDocument"],
      ["content", "flags.5?WebDocument"],
      ["send_message", "BotInlineMessage"],
    ],
    "BotInlineResult",
  ],
  "botInlineMediaResult": [
    0x17DB940B,
    [
      ["flags", "#"],
      ["id", "string"],
      ["type", "string"],
      ["photo", "flags.0?Photo"],
      ["document", "flags.1?Document"],
      ["title", "flags.2?string"],
      ["description", "flags.3?string"],
      ["send_message", "BotInlineMessage"],
    ],
    "BotInlineResult",
  ],
  "messages.botResults": [
    0xE021F2F6,
    [
      ["flags", "#"],
      ["gallery", "flags.0?true"],
      ["query_id", "long"],
      ["next_offset", "flags.1?string"],
      ["switch_pm", "flags.2?InlineBotSwitchPM"],
      ["switch_webview", "flags.3?InlineBotWebView"],
      ["results", "Vector<BotInlineResult>"],
      ["cache_time", "int"],
      ["users", "Vector<User>"],
    ],
    "messages.BotResults",
  ],
  "exportedMessageLink": [
    0x5DAB1AF4,
    [
      ["link", "string"],
      ["html", "string"],
    ],
    "ExportedMessageLink",
  ],
  "messageFwdHeader": [
    0x4E4DF4BB,
    [
      ["flags", "#"],
      ["imported", "flags.7?true"],
      ["saved_out", "flags.11?true"],
      ["from_id", "flags.0?Peer"],
      ["from_name", "flags.5?string"],
      ["date", "int"],
      ["channel_post", "flags.2?int"],
      ["post_author", "flags.3?string"],
      ["saved_from_peer", "flags.4?Peer"],
      ["saved_from_msg_id", "flags.4?int"],
      ["saved_from_id", "flags.8?Peer"],
      ["saved_from_name", "flags.9?string"],
      ["saved_date", "flags.10?int"],
      ["psa_type", "flags.6?string"],
    ],
    "MessageFwdHeader",
  ],
  "auth.codeTypeSms": [
    0x72A3158C,
    [],
    "auth.CodeType",
  ],
  "auth.codeTypeCall": [
    0x741CD3E3,
    [],
    "auth.CodeType",
  ],
  "auth.codeTypeFlashCall": [
    0x226CCEFB,
    [],
    "auth.CodeType",
  ],
  "auth.codeTypeMissedCall": [
    0xD61AD6EE,
    [],
    "auth.CodeType",
  ],
  "auth.codeTypeFragmentSms": [
    0x06ED998C,
    [],
    "auth.CodeType",
  ],
  "auth.sentCodeTypeApp": [
    0x3DBB5986,
    [
      ["length", "int"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeSms": [
    0xC000BBA2,
    [
      ["length", "int"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeCall": [
    0x5353E5A7,
    [
      ["length", "int"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeFlashCall": [
    0xAB03C6D9,
    [
      ["pattern", "string"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeMissedCall": [
    0x82006484,
    [
      ["prefix", "string"],
      ["length", "int"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeEmailCode": [
    0xF450F59B,
    [
      ["flags", "#"],
      ["apple_signin_allowed", "flags.0?true"],
      ["google_signin_allowed", "flags.1?true"],
      ["email_pattern", "string"],
      ["length", "int"],
      ["reset_available_period", "flags.3?int"],
      ["reset_pending_date", "flags.4?int"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeSetUpEmailRequired": [
    0xA5491DEA,
    [
      ["flags", "#"],
      ["apple_signin_allowed", "flags.0?true"],
      ["google_signin_allowed", "flags.1?true"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeFragmentSms": [
    0xD9565C39,
    [
      ["url", "string"],
      ["length", "int"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeFirebaseSms": [
    0x009FD736,
    [
      ["flags", "#"],
      ["nonce", "flags.0?bytes"],
      ["play_integrity_project_id", "flags.2?long"],
      ["play_integrity_nonce", "flags.2?bytes"],
      ["receipt", "flags.1?string"],
      ["push_timeout", "flags.1?int"],
      ["length", "int"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeSmsWord": [
    0xA416AC81,
    [
      ["flags", "#"],
      ["beginning", "flags.0?string"],
    ],
    "auth.SentCodeType",
  ],
  "auth.sentCodeTypeSmsPhrase": [
    0xB37794AF,
    [
      ["flags", "#"],
      ["beginning", "flags.0?string"],
    ],
    "auth.SentCodeType",
  ],
  "messages.botCallbackAnswer": [
    0x36585EA4,
    [
      ["flags", "#"],
      ["alert", "flags.1?true"],
      ["has_url", "flags.3?true"],
      ["native_ui", "flags.4?true"],
      ["message", "flags.0?string"],
      ["url", "flags.2?string"],
      ["cache_time", "int"],
    ],
    "messages.BotCallbackAnswer",
  ],
  "messages.messageEditData": [
    0x26B5DDE6,
    [
      ["flags", "#"],
      ["caption", "flags.0?true"],
    ],
    "messages.MessageEditData",
  ],
  "inputBotInlineMessageID": [
    0x890C3D89,
    [
      ["dc_id", "int"],
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputBotInlineMessageID",
  ],
  "inputBotInlineMessageID64": [
    0xB6D915D7,
    [
      ["dc_id", "int"],
      ["owner_id", "long"],
      ["id", "int"],
      ["access_hash", "long"],
    ],
    "InputBotInlineMessageID",
  ],
  "inlineBotSwitchPM": [
    0x3C20629F,
    [
      ["text", "string"],
      ["start_param", "string"],
    ],
    "InlineBotSwitchPM",
  ],
  "messages.peerDialogs": [
    0x3371C354,
    [
      ["dialogs", "Vector<Dialog>"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["state", "updates.State"],
    ],
    "messages.PeerDialogs",
  ],
  "topPeer": [
    0xEDCDC05B,
    [
      ["peer", "Peer"],
      ["rating", "double"],
    ],
    "TopPeer",
  ],
  "topPeerCategoryBotsPM": [
    0xAB661B5B,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryBotsInline": [
    0x148677E2,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryCorrespondents": [
    0x0637B7ED,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryGroups": [
    0xBD17A14A,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryChannels": [
    0x161D9628,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryPhoneCalls": [
    0x1E76A78C,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryForwardUsers": [
    0xA8406CA9,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryForwardChats": [
    0xFBEEC0F0,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryBotsApp": [
    0xFD9E7BEC,
    [],
    "TopPeerCategory",
  ],
  "topPeerCategoryPeers": [
    0xFB834291,
    [
      ["category", "TopPeerCategory"],
      ["count", "int"],
      ["peers", "Vector<TopPeer>"],
    ],
    "TopPeerCategoryPeers",
  ],
  "contacts.topPeersNotModified": [
    0xDE266EF5,
    [],
    "contacts.TopPeers",
  ],
  "contacts.topPeers": [
    0x70B772A8,
    [
      ["categories", "Vector<TopPeerCategoryPeers>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "contacts.TopPeers",
  ],
  "contacts.topPeersDisabled": [
    0xB52C939D,
    [],
    "contacts.TopPeers",
  ],
  "draftMessageEmpty": [
    0x1B0C841A,
    [
      ["flags", "#"],
      ["date", "flags.0?int"],
    ],
    "DraftMessage",
  ],
  "draftMessage": [
    0x2D65321F,
    [
      ["flags", "#"],
      ["no_webpage", "flags.1?true"],
      ["invert_media", "flags.6?true"],
      ["reply_to", "flags.4?InputReplyTo"],
      ["message", "string"],
      ["entities", "flags.3?Vector<MessageEntity>"],
      ["media", "flags.5?InputMedia"],
      ["date", "int"],
      ["effect", "flags.7?long"],
    ],
    "DraftMessage",
  ],
  "messages.featuredStickersNotModified": [
    0xC6DC0C66,
    [
      ["count", "int"],
    ],
    "messages.FeaturedStickers",
  ],
  "messages.featuredStickers": [
    0xBE382906,
    [
      ["flags", "#"],
      ["premium", "flags.0?true"],
      ["hash", "long"],
      ["count", "int"],
      ["sets", "Vector<StickerSetCovered>"],
      ["unread", "Vector<long>"],
    ],
    "messages.FeaturedStickers",
  ],
  "messages.recentStickersNotModified": [
    0x0B17F890,
    [],
    "messages.RecentStickers",
  ],
  "messages.recentStickers": [
    0x88D37C56,
    [
      ["hash", "long"],
      ["packs", "Vector<StickerPack>"],
      ["stickers", "Vector<Document>"],
      ["dates", "Vector<int>"],
    ],
    "messages.RecentStickers",
  ],
  "messages.archivedStickers": [
    0x4FCBA9C8,
    [
      ["count", "int"],
      ["sets", "Vector<StickerSetCovered>"],
    ],
    "messages.ArchivedStickers",
  ],
  "messages.stickerSetInstallResultSuccess": [
    0x38641628,
    [],
    "messages.StickerSetInstallResult",
  ],
  "messages.stickerSetInstallResultArchive": [
    0x35E410A8,
    [
      ["sets", "Vector<StickerSetCovered>"],
    ],
    "messages.StickerSetInstallResult",
  ],
  "stickerSetCovered": [
    0x6410A5D2,
    [
      ["set", "StickerSet"],
      ["cover", "Document"],
    ],
    "StickerSetCovered",
  ],
  "stickerSetMultiCovered": [
    0x3407E51B,
    [
      ["set", "StickerSet"],
      ["covers", "Vector<Document>"],
    ],
    "StickerSetCovered",
  ],
  "stickerSetFullCovered": [
    0x40D13C0E,
    [
      ["set", "StickerSet"],
      ["packs", "Vector<StickerPack>"],
      ["keywords", "Vector<StickerKeyword>"],
      ["documents", "Vector<Document>"],
    ],
    "StickerSetCovered",
  ],
  "stickerSetNoCovered": [
    0x77B15D1C,
    [
      ["set", "StickerSet"],
    ],
    "StickerSetCovered",
  ],
  "maskCoords": [
    0xAED6DBB2,
    [
      ["n", "int"],
      ["x", "double"],
      ["y", "double"],
      ["zoom", "double"],
    ],
    "MaskCoords",
  ],
  "inputStickeredMediaPhoto": [
    0x4A992157,
    [
      ["id", "InputPhoto"],
    ],
    "InputStickeredMedia",
  ],
  "inputStickeredMediaDocument": [
    0x0438865B,
    [
      ["id", "InputDocument"],
    ],
    "InputStickeredMedia",
  ],
  "game": [
    0xBDF9653B,
    [
      ["flags", "#"],
      ["id", "long"],
      ["access_hash", "long"],
      ["short_name", "string"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "Photo"],
      ["document", "flags.0?Document"],
    ],
    "Game",
  ],
  "inputGameID": [
    0x032C3E77,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputGame",
  ],
  "inputGameShortName": [
    0xC331E80A,
    [
      ["bot_id", "InputUser"],
      ["short_name", "string"],
    ],
    "InputGame",
  ],
  "highScore": [
    0x73A379EB,
    [
      ["pos", "int"],
      ["user_id", "long"],
      ["score", "int"],
    ],
    "HighScore",
  ],
  "messages.highScores": [
    0x9A3BFD99,
    [
      ["scores", "Vector<HighScore>"],
      ["users", "Vector<User>"],
    ],
    "messages.HighScores",
  ],
  "textEmpty": [
    0xDC3D824F,
    [],
    "RichText",
  ],
  "textPlain": [
    0x744694E0,
    [
      ["text", "string"],
    ],
    "RichText",
  ],
  "textBold": [
    0x6724ABC4,
    [
      ["text", "RichText"],
    ],
    "RichText",
  ],
  "textItalic": [
    0xD912A59C,
    [
      ["text", "RichText"],
    ],
    "RichText",
  ],
  "textUnderline": [
    0xC12622C4,
    [
      ["text", "RichText"],
    ],
    "RichText",
  ],
  "textStrike": [
    0x9BF8BB95,
    [
      ["text", "RichText"],
    ],
    "RichText",
  ],
  "textFixed": [
    0x6C3F19B9,
    [
      ["text", "RichText"],
    ],
    "RichText",
  ],
  "textUrl": [
    0x3C2884C1,
    [
      ["text", "RichText"],
      ["url", "string"],
      ["webpage_id", "long"],
    ],
    "RichText",
  ],
  "textEmail": [
    0xDE5A0DD6,
    [
      ["text", "RichText"],
      ["email", "string"],
    ],
    "RichText",
  ],
  "textConcat": [
    0x7E6260D7,
    [
      ["texts", "Vector<RichText>"],
    ],
    "RichText",
  ],
  "textSubscript": [
    0xED6A8504,
    [
      ["text", "RichText"],
    ],
    "RichText",
  ],
  "textSuperscript": [
    0xC7FB5E01,
    [
      ["text", "RichText"],
    ],
    "RichText",
  ],
  "textMarked": [
    0x034B8621,
    [
      ["text", "RichText"],
    ],
    "RichText",
  ],
  "textPhone": [
    0x1CCB966A,
    [
      ["text", "RichText"],
      ["phone", "string"],
    ],
    "RichText",
  ],
  "textImage": [
    0x081CCF4F,
    [
      ["document_id", "long"],
      ["w", "int"],
      ["h", "int"],
    ],
    "RichText",
  ],
  "textAnchor": [
    0x35553762,
    [
      ["text", "RichText"],
      ["name", "string"],
    ],
    "RichText",
  ],
  "pageBlockUnsupported": [
    0x13567E8A,
    [],
    "PageBlock",
  ],
  "pageBlockTitle": [
    0x70ABC3FD,
    [
      ["text", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockSubtitle": [
    0x8FFA9A1F,
    [
      ["text", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockAuthorDate": [
    0xBAAFE5E0,
    [
      ["author", "RichText"],
      ["published_date", "int"],
    ],
    "PageBlock",
  ],
  "pageBlockHeader": [
    0xBFD064EC,
    [
      ["text", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockSubheader": [
    0xF12BB6E1,
    [
      ["text", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockParagraph": [
    0x467A0766,
    [
      ["text", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockPreformatted": [
    0xC070D93E,
    [
      ["text", "RichText"],
      ["language", "string"],
    ],
    "PageBlock",
  ],
  "pageBlockFooter": [
    0x48870999,
    [
      ["text", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockDivider": [
    0xDB20B188,
    [],
    "PageBlock",
  ],
  "pageBlockAnchor": [
    0xCE0D37B0,
    [
      ["name", "string"],
    ],
    "PageBlock",
  ],
  "pageBlockList": [
    0xE4E88011,
    [
      ["items", "Vector<PageListItem>"],
    ],
    "PageBlock",
  ],
  "pageBlockBlockquote": [
    0x263D7C26,
    [
      ["text", "RichText"],
      ["caption", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockPullquote": [
    0x4F4456D3,
    [
      ["text", "RichText"],
      ["caption", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockPhoto": [
    0x1759C560,
    [
      ["flags", "#"],
      ["photo_id", "long"],
      ["caption", "PageCaption"],
      ["url", "flags.0?string"],
      ["webpage_id", "flags.0?long"],
    ],
    "PageBlock",
  ],
  "pageBlockVideo": [
    0x7C8FE7B6,
    [
      ["flags", "#"],
      ["autoplay", "flags.0?true"],
      ["loop", "flags.1?true"],
      ["video_id", "long"],
      ["caption", "PageCaption"],
    ],
    "PageBlock",
  ],
  "pageBlockCover": [
    0x39F23300,
    [
      ["cover", "PageBlock"],
    ],
    "PageBlock",
  ],
  "pageBlockEmbed": [
    0xA8718DC5,
    [
      ["flags", "#"],
      ["full_width", "flags.0?true"],
      ["allow_scrolling", "flags.3?true"],
      ["url", "flags.1?string"],
      ["html", "flags.2?string"],
      ["poster_photo_id", "flags.4?long"],
      ["w", "flags.5?int"],
      ["h", "flags.5?int"],
      ["caption", "PageCaption"],
    ],
    "PageBlock",
  ],
  "pageBlockEmbedPost": [
    0xF259A80B,
    [
      ["url", "string"],
      ["webpage_id", "long"],
      ["author_photo_id", "long"],
      ["author", "string"],
      ["date", "int"],
      ["blocks", "Vector<PageBlock>"],
      ["caption", "PageCaption"],
    ],
    "PageBlock",
  ],
  "pageBlockCollage": [
    0x65A0FA4D,
    [
      ["items", "Vector<PageBlock>"],
      ["caption", "PageCaption"],
    ],
    "PageBlock",
  ],
  "pageBlockSlideshow": [
    0x031F9590,
    [
      ["items", "Vector<PageBlock>"],
      ["caption", "PageCaption"],
    ],
    "PageBlock",
  ],
  "pageBlockChannel": [
    0xEF1751B5,
    [
      ["channel", "Chat"],
    ],
    "PageBlock",
  ],
  "pageBlockAudio": [
    0x804361EA,
    [
      ["audio_id", "long"],
      ["caption", "PageCaption"],
    ],
    "PageBlock",
  ],
  "pageBlockKicker": [
    0x1E148390,
    [
      ["text", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockTable": [
    0xBF4DEA82,
    [
      ["flags", "#"],
      ["bordered", "flags.0?true"],
      ["striped", "flags.1?true"],
      ["title", "RichText"],
      ["rows", "Vector<PageTableRow>"],
    ],
    "PageBlock",
  ],
  "pageBlockOrderedList": [
    0x9A8AE1E1,
    [
      ["items", "Vector<PageListOrderedItem>"],
    ],
    "PageBlock",
  ],
  "pageBlockDetails": [
    0x76768BED,
    [
      ["flags", "#"],
      ["open", "flags.0?true"],
      ["blocks", "Vector<PageBlock>"],
      ["title", "RichText"],
    ],
    "PageBlock",
  ],
  "pageBlockRelatedArticles": [
    0x16115A96,
    [
      ["title", "RichText"],
      ["articles", "Vector<PageRelatedArticle>"],
    ],
    "PageBlock",
  ],
  "pageBlockMap": [
    0xA44F3EF6,
    [
      ["geo", "GeoPoint"],
      ["zoom", "int"],
      ["w", "int"],
      ["h", "int"],
      ["caption", "PageCaption"],
    ],
    "PageBlock",
  ],
  "phoneCallDiscardReasonMissed": [
    0x85E42301,
    [],
    "PhoneCallDiscardReason",
  ],
  "phoneCallDiscardReasonDisconnect": [
    0xE095C1A0,
    [],
    "PhoneCallDiscardReason",
  ],
  "phoneCallDiscardReasonHangup": [
    0x57ADC690,
    [],
    "PhoneCallDiscardReason",
  ],
  "phoneCallDiscardReasonBusy": [
    0xFAF7E8C9,
    [],
    "PhoneCallDiscardReason",
  ],
  "phoneCallDiscardReasonAllowGroupCall": [
    0xAFE2B839,
    [
      ["encrypted_key", "bytes"],
    ],
    "PhoneCallDiscardReason",
  ],
  "dataJSON": [
    0x7D748D04,
    [
      ["data", "string"],
    ],
    "DataJSON",
  ],
  "labeledPrice": [
    0xCB296BF8,
    [
      ["label", "string"],
      ["amount", "long"],
    ],
    "LabeledPrice",
  ],
  "invoice": [
    0x049EE584,
    [
      ["flags", "#"],
      ["test", "flags.0?true"],
      ["name_requested", "flags.1?true"],
      ["phone_requested", "flags.2?true"],
      ["email_requested", "flags.3?true"],
      ["shipping_address_requested", "flags.4?true"],
      ["flexible", "flags.5?true"],
      ["phone_to_provider", "flags.6?true"],
      ["email_to_provider", "flags.7?true"],
      ["recurring", "flags.9?true"],
      ["currency", "string"],
      ["prices", "Vector<LabeledPrice>"],
      ["max_tip_amount", "flags.8?long"],
      ["suggested_tip_amounts", "flags.8?Vector<long>"],
      ["terms_url", "flags.10?string"],
      ["subscription_period", "flags.11?int"],
    ],
    "Invoice",
  ],
  "paymentCharge": [
    0xEA02C27E,
    [
      ["id", "string"],
      ["provider_charge_id", "string"],
    ],
    "PaymentCharge",
  ],
  "postAddress": [
    0x1E8CAAEB,
    [
      ["street_line1", "string"],
      ["street_line2", "string"],
      ["city", "string"],
      ["state", "string"],
      ["country_iso2", "string"],
      ["post_code", "string"],
    ],
    "PostAddress",
  ],
  "paymentRequestedInfo": [
    0x909C3F94,
    [
      ["flags", "#"],
      ["name", "flags.0?string"],
      ["phone", "flags.1?string"],
      ["email", "flags.2?string"],
      ["shipping_address", "flags.3?PostAddress"],
    ],
    "PaymentRequestedInfo",
  ],
  "paymentSavedCredentialsCard": [
    0xCDC27A1F,
    [
      ["id", "string"],
      ["title", "string"],
    ],
    "PaymentSavedCredentials",
  ],
  "webDocument": [
    0x1C570ED1,
    [
      ["url", "string"],
      ["access_hash", "long"],
      ["size", "int"],
      ["mime_type", "string"],
      ["attributes", "Vector<DocumentAttribute>"],
    ],
    "WebDocument",
  ],
  "webDocumentNoProxy": [
    0xF9C8BCC6,
    [
      ["url", "string"],
      ["size", "int"],
      ["mime_type", "string"],
      ["attributes", "Vector<DocumentAttribute>"],
    ],
    "WebDocument",
  ],
  "inputWebDocument": [
    0x9BED434D,
    [
      ["url", "string"],
      ["size", "int"],
      ["mime_type", "string"],
      ["attributes", "Vector<DocumentAttribute>"],
    ],
    "InputWebDocument",
  ],
  "inputWebFileLocation": [
    0xC239D686,
    [
      ["url", "string"],
      ["access_hash", "long"],
    ],
    "InputWebFileLocation",
  ],
  "inputWebFileGeoPointLocation": [
    0x9F2221C9,
    [
      ["geo_point", "InputGeoPoint"],
      ["access_hash", "long"],
      ["w", "int"],
      ["h", "int"],
      ["zoom", "int"],
      ["scale", "int"],
    ],
    "InputWebFileLocation",
  ],
  "inputWebFileAudioAlbumThumbLocation": [
    0xF46FE924,
    [
      ["flags", "#"],
      ["small", "flags.2?true"],
      ["document", "flags.0?InputDocument"],
      ["title", "flags.1?string"],
      ["performer", "flags.1?string"],
    ],
    "InputWebFileLocation",
  ],
  "upload.webFile": [
    0x21E753BC,
    [
      ["size", "int"],
      ["mime_type", "string"],
      ["file_type", "storage.FileType"],
      ["mtime", "int"],
      ["bytes", "bytes"],
    ],
    "upload.WebFile",
  ],
  "payments.paymentForm": [
    0xA0058751,
    [
      ["flags", "#"],
      ["can_save_credentials", "flags.2?true"],
      ["password_missing", "flags.3?true"],
      ["form_id", "long"],
      ["bot_id", "long"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "flags.5?WebDocument"],
      ["invoice", "Invoice"],
      ["provider_id", "long"],
      ["url", "string"],
      ["native_provider", "flags.4?string"],
      ["native_params", "flags.4?DataJSON"],
      ["additional_methods", "flags.6?Vector<PaymentFormMethod>"],
      ["saved_info", "flags.0?PaymentRequestedInfo"],
      ["saved_credentials", "flags.1?Vector<PaymentSavedCredentials>"],
      ["users", "Vector<User>"],
    ],
    "payments.PaymentForm",
  ],
  "payments.paymentFormStars": [
    0x7BF6B15C,
    [
      ["flags", "#"],
      ["form_id", "long"],
      ["bot_id", "long"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "flags.5?WebDocument"],
      ["invoice", "Invoice"],
      ["users", "Vector<User>"],
    ],
    "payments.PaymentForm",
  ],
  "payments.paymentFormStarGift": [
    0xB425CFE1,
    [
      ["form_id", "long"],
      ["invoice", "Invoice"],
    ],
    "payments.PaymentForm",
  ],
  "payments.validatedRequestedInfo": [
    0xD1451883,
    [
      ["flags", "#"],
      ["id", "flags.0?string"],
      ["shipping_options", "flags.1?Vector<ShippingOption>"],
    ],
    "payments.ValidatedRequestedInfo",
  ],
  "payments.paymentResult": [
    0x4E5F810D,
    [
      ["updates", "Updates"],
    ],
    "payments.PaymentResult",
  ],
  "payments.paymentVerificationNeeded": [
    0xD8411139,
    [
      ["url", "string"],
    ],
    "payments.PaymentResult",
  ],
  "payments.paymentReceipt": [
    0x70C4FE03,
    [
      ["flags", "#"],
      ["date", "int"],
      ["bot_id", "long"],
      ["provider_id", "long"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "flags.2?WebDocument"],
      ["invoice", "Invoice"],
      ["info", "flags.0?PaymentRequestedInfo"],
      ["shipping", "flags.1?ShippingOption"],
      ["tip_amount", "flags.3?long"],
      ["currency", "string"],
      ["total_amount", "long"],
      ["credentials_title", "string"],
      ["users", "Vector<User>"],
    ],
    "payments.PaymentReceipt",
  ],
  "payments.paymentReceiptStars": [
    0xDABBF83A,
    [
      ["flags", "#"],
      ["date", "int"],
      ["bot_id", "long"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "flags.2?WebDocument"],
      ["invoice", "Invoice"],
      ["currency", "string"],
      ["total_amount", "long"],
      ["transaction_id", "string"],
      ["users", "Vector<User>"],
    ],
    "payments.PaymentReceipt",
  ],
  "payments.savedInfo": [
    0xFB8FE43C,
    [
      ["flags", "#"],
      ["has_saved_credentials", "flags.1?true"],
      ["saved_info", "flags.0?PaymentRequestedInfo"],
    ],
    "payments.SavedInfo",
  ],
  "inputPaymentCredentialsSaved": [
    0xC10EB2CF,
    [
      ["id", "string"],
      ["tmp_password", "bytes"],
    ],
    "InputPaymentCredentials",
  ],
  "inputPaymentCredentials": [
    0x3417D728,
    [
      ["flags", "#"],
      ["save", "flags.0?true"],
      ["data", "DataJSON"],
    ],
    "InputPaymentCredentials",
  ],
  "inputPaymentCredentialsApplePay": [
    0x0AA1C39F,
    [
      ["payment_data", "DataJSON"],
    ],
    "InputPaymentCredentials",
  ],
  "inputPaymentCredentialsGooglePay": [
    0x8AC32801,
    [
      ["payment_token", "DataJSON"],
    ],
    "InputPaymentCredentials",
  ],
  "account.tmpPassword": [
    0xDB64FD34,
    [
      ["tmp_password", "bytes"],
      ["valid_until", "int"],
    ],
    "account.TmpPassword",
  ],
  "shippingOption": [
    0xB6213CDF,
    [
      ["id", "string"],
      ["title", "string"],
      ["prices", "Vector<LabeledPrice>"],
    ],
    "ShippingOption",
  ],
  "inputStickerSetItem": [
    0x32DA9E9C,
    [
      ["flags", "#"],
      ["document", "InputDocument"],
      ["emoji", "string"],
      ["mask_coords", "flags.0?MaskCoords"],
      ["keywords", "flags.1?string"],
    ],
    "InputStickerSetItem",
  ],
  "inputPhoneCall": [
    0x1E36FDED,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputPhoneCall",
  ],
  "phoneCallEmpty": [
    0x5366C915,
    [
      ["id", "long"],
    ],
    "PhoneCall",
  ],
  "phoneCallWaiting": [
    0xEED42858,
    [
      ["flags", "#"],
      ["video", "flags.6?true"],
      ["id", "long"],
      ["access_hash", "long"],
      ["date", "int"],
      ["admin_id", "long"],
      ["participant_id", "long"],
      ["protocol", "PhoneCallProtocol"],
      ["receive_date", "flags.0?int"],
      ["conference_call", "flags.8?InputGroupCall"],
    ],
    "PhoneCall",
  ],
  "phoneCallRequested": [
    0x45361C63,
    [
      ["flags", "#"],
      ["video", "flags.6?true"],
      ["id", "long"],
      ["access_hash", "long"],
      ["date", "int"],
      ["admin_id", "long"],
      ["participant_id", "long"],
      ["g_a_hash", "bytes"],
      ["protocol", "PhoneCallProtocol"],
      ["conference_call", "flags.8?InputGroupCall"],
    ],
    "PhoneCall",
  ],
  "phoneCallAccepted": [
    0x22FD7181,
    [
      ["flags", "#"],
      ["video", "flags.6?true"],
      ["id", "long"],
      ["access_hash", "long"],
      ["date", "int"],
      ["admin_id", "long"],
      ["participant_id", "long"],
      ["g_b", "bytes"],
      ["protocol", "PhoneCallProtocol"],
      ["conference_call", "flags.8?InputGroupCall"],
    ],
    "PhoneCall",
  ],
  "phoneCall": [
    0x3BA5940C,
    [
      ["flags", "#"],
      ["p2p_allowed", "flags.5?true"],
      ["video", "flags.6?true"],
      ["id", "long"],
      ["access_hash", "long"],
      ["date", "int"],
      ["admin_id", "long"],
      ["participant_id", "long"],
      ["g_a_or_b", "bytes"],
      ["key_fingerprint", "long"],
      ["protocol", "PhoneCallProtocol"],
      ["connections", "Vector<PhoneConnection>"],
      ["start_date", "int"],
      ["custom_parameters", "flags.7?DataJSON"],
      ["conference_call", "flags.8?InputGroupCall"],
    ],
    "PhoneCall",
  ],
  "phoneCallDiscarded": [
    0xF9D25503,
    [
      ["flags", "#"],
      ["need_rating", "flags.2?true"],
      ["need_debug", "flags.3?true"],
      ["video", "flags.6?true"],
      ["id", "long"],
      ["reason", "flags.0?PhoneCallDiscardReason"],
      ["duration", "flags.1?int"],
      ["conference_call", "flags.8?InputGroupCall"],
    ],
    "PhoneCall",
  ],
  "phoneConnection": [
    0x9CC123C7,
    [
      ["flags", "#"],
      ["tcp", "flags.0?true"],
      ["id", "long"],
      ["ip", "string"],
      ["ipv6", "string"],
      ["port", "int"],
      ["peer_tag", "bytes"],
    ],
    "PhoneConnection",
  ],
  "phoneConnectionWebrtc": [
    0x635FE375,
    [
      ["flags", "#"],
      ["turn", "flags.0?true"],
      ["stun", "flags.1?true"],
      ["id", "long"],
      ["ip", "string"],
      ["ipv6", "string"],
      ["port", "int"],
      ["username", "string"],
      ["password", "string"],
    ],
    "PhoneConnection",
  ],
  "phoneCallProtocol": [
    0xFC878FC8,
    [
      ["flags", "#"],
      ["udp_p2p", "flags.0?true"],
      ["udp_reflector", "flags.1?true"],
      ["min_layer", "int"],
      ["max_layer", "int"],
      ["library_versions", "Vector<string>"],
    ],
    "PhoneCallProtocol",
  ],
  "phone.phoneCall": [
    0xEC82E140,
    [
      ["phone_call", "PhoneCall"],
      ["users", "Vector<User>"],
    ],
    "phone.PhoneCall",
  ],
  "upload.cdnFileReuploadNeeded": [
    0xEEA8E46E,
    [
      ["request_token", "bytes"],
    ],
    "upload.CdnFile",
  ],
  "upload.cdnFile": [
    0xA99FCA4F,
    [
      ["bytes", "bytes"],
    ],
    "upload.CdnFile",
  ],
  "cdnPublicKey": [
    0xC982EABA,
    [
      ["dc_id", "int"],
      ["public_key", "string"],
    ],
    "CdnPublicKey",
  ],
  "cdnConfig": [
    0x5725E40A,
    [
      ["public_keys", "Vector<CdnPublicKey>"],
    ],
    "CdnConfig",
  ],
  "langPackString": [
    0xCAD181F6,
    [
      ["key", "string"],
      ["value", "string"],
    ],
    "LangPackString",
  ],
  "langPackStringPluralized": [
    0x6C47AC9F,
    [
      ["flags", "#"],
      ["key", "string"],
      ["zero_value", "flags.0?string"],
      ["one_value", "flags.1?string"],
      ["two_value", "flags.2?string"],
      ["few_value", "flags.3?string"],
      ["many_value", "flags.4?string"],
      ["other_value", "string"],
    ],
    "LangPackString",
  ],
  "langPackStringDeleted": [
    0x2979EEB2,
    [
      ["key", "string"],
    ],
    "LangPackString",
  ],
  "langPackDifference": [
    0xF385C1F6,
    [
      ["lang_code", "string"],
      ["from_version", "int"],
      ["version", "int"],
      ["strings", "Vector<LangPackString>"],
    ],
    "LangPackDifference",
  ],
  "langPackLanguage": [
    0xEECA5CE3,
    [
      ["flags", "#"],
      ["official", "flags.0?true"],
      ["rtl", "flags.2?true"],
      ["beta", "flags.3?true"],
      ["name", "string"],
      ["native_name", "string"],
      ["lang_code", "string"],
      ["base_lang_code", "flags.1?string"],
      ["plural_code", "string"],
      ["strings_count", "int"],
      ["translated_count", "int"],
      ["translations_url", "string"],
    ],
    "LangPackLanguage",
  ],
  "channelAdminLogEventActionChangeTitle": [
    0xE6DFB825,
    [
      ["prev_value", "string"],
      ["new_value", "string"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeAbout": [
    0x55188A2E,
    [
      ["prev_value", "string"],
      ["new_value", "string"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeUsername": [
    0x6A4AFC38,
    [
      ["prev_value", "string"],
      ["new_value", "string"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangePhoto": [
    0x434BD2AF,
    [
      ["prev_photo", "Photo"],
      ["new_photo", "Photo"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionToggleInvites": [
    0x1B7907AE,
    [
      ["new_value", "Bool"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionToggleSignatures": [
    0x26AE0971,
    [
      ["new_value", "Bool"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionUpdatePinned": [
    0xE9E82C18,
    [
      ["message", "Message"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionEditMessage": [
    0x709B2405,
    [
      ["prev_message", "Message"],
      ["new_message", "Message"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionDeleteMessage": [
    0x42E047BB,
    [
      ["message", "Message"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantJoin": [
    0x183040D3,
    [],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantLeave": [
    0xF89777F2,
    [],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantInvite": [
    0xE31C34D8,
    [
      ["participant", "ChannelParticipant"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantToggleBan": [
    0xE6D83D7E,
    [
      ["prev_participant", "ChannelParticipant"],
      ["new_participant", "ChannelParticipant"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantToggleAdmin": [
    0xD5676710,
    [
      ["prev_participant", "ChannelParticipant"],
      ["new_participant", "ChannelParticipant"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeStickerSet": [
    0xB1C3CAA7,
    [
      ["prev_stickerset", "InputStickerSet"],
      ["new_stickerset", "InputStickerSet"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionTogglePreHistoryHidden": [
    0x5F5C95F1,
    [
      ["new_value", "Bool"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionDefaultBannedRights": [
    0x2DF5FC0A,
    [
      ["prev_banned_rights", "ChatBannedRights"],
      ["new_banned_rights", "ChatBannedRights"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionStopPoll": [
    0x8F079643,
    [
      ["message", "Message"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeLinkedChat": [
    0x050C7AC8,
    [
      ["prev_value", "long"],
      ["new_value", "long"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeLocation": [
    0x0E6B76AE,
    [
      ["prev_value", "ChannelLocation"],
      ["new_value", "ChannelLocation"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionToggleSlowMode": [
    0x53909779,
    [
      ["prev_value", "int"],
      ["new_value", "int"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionStartGroupCall": [
    0x23209745,
    [
      ["call", "InputGroupCall"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionDiscardGroupCall": [
    0xDB9F9140,
    [
      ["call", "InputGroupCall"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantMute": [
    0xF92424D2,
    [
      ["participant", "GroupCallParticipant"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantUnmute": [
    0xE64429C0,
    [
      ["participant", "GroupCallParticipant"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionToggleGroupCallSetting": [
    0x56D6A247,
    [
      ["join_muted", "Bool"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantJoinByInvite": [
    0xFE9FC158,
    [
      ["flags", "#"],
      ["via_chatlist", "flags.0?true"],
      ["invite", "ExportedChatInvite"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionExportedInviteDelete": [
    0x5A50FCA4,
    [
      ["invite", "ExportedChatInvite"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionExportedInviteRevoke": [
    0x410A134E,
    [
      ["invite", "ExportedChatInvite"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionExportedInviteEdit": [
    0xE90EBB59,
    [
      ["prev_invite", "ExportedChatInvite"],
      ["new_invite", "ExportedChatInvite"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantVolume": [
    0x3E7F6847,
    [
      ["participant", "GroupCallParticipant"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeHistoryTTL": [
    0x6E941A38,
    [
      ["prev_value", "int"],
      ["new_value", "int"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantJoinByRequest": [
    0xAFB6144A,
    [
      ["invite", "ExportedChatInvite"],
      ["approved_by", "long"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionToggleNoForwards": [
    0xCB2AC766,
    [
      ["new_value", "Bool"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionSendMessage": [
    0x278F2868,
    [
      ["message", "Message"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeAvailableReactions": [
    0xBE4E0EF8,
    [
      ["prev_value", "ChatReactions"],
      ["new_value", "ChatReactions"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeUsernames": [
    0xF04FB3A9,
    [
      ["prev_value", "Vector<string>"],
      ["new_value", "Vector<string>"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionToggleForum": [
    0x02CC6383,
    [
      ["new_value", "Bool"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionCreateTopic": [
    0x58707D28,
    [
      ["topic", "ForumTopic"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionEditTopic": [
    0xF06FE208,
    [
      ["prev_topic", "ForumTopic"],
      ["new_topic", "ForumTopic"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionDeleteTopic": [
    0xAE168909,
    [
      ["topic", "ForumTopic"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionPinTopic": [
    0x5D8D353B,
    [
      ["flags", "#"],
      ["prev_topic", "flags.0?ForumTopic"],
      ["new_topic", "flags.1?ForumTopic"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionToggleAntiSpam": [
    0x64F36DFC,
    [
      ["new_value", "Bool"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangePeerColor": [
    0x5796E780,
    [
      ["prev_value", "PeerColor"],
      ["new_value", "PeerColor"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeProfilePeerColor": [
    0x5E477B25,
    [
      ["prev_value", "PeerColor"],
      ["new_value", "PeerColor"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeWallpaper": [
    0x31BB5D52,
    [
      ["prev_value", "WallPaper"],
      ["new_value", "WallPaper"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeEmojiStatus": [
    0x3EA9FEB1,
    [
      ["prev_value", "EmojiStatus"],
      ["new_value", "EmojiStatus"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionChangeEmojiStickerSet": [
    0x46D840AB,
    [
      ["prev_stickerset", "InputStickerSet"],
      ["new_stickerset", "InputStickerSet"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionToggleSignatureProfiles": [
    0x60A79C79,
    [
      ["new_value", "Bool"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEventActionParticipantSubExtend": [
    0x64642DB3,
    [
      ["prev_participant", "ChannelParticipant"],
      ["new_participant", "ChannelParticipant"],
    ],
    "ChannelAdminLogEventAction",
  ],
  "channelAdminLogEvent": [
    0x1FAD68CD,
    [
      ["id", "long"],
      ["date", "int"],
      ["user_id", "long"],
      ["action", "ChannelAdminLogEventAction"],
    ],
    "ChannelAdminLogEvent",
  ],
  "channels.adminLogResults": [
    0xED8AF74D,
    [
      ["events", "Vector<ChannelAdminLogEvent>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "channels.AdminLogResults",
  ],
  "channelAdminLogEventsFilter": [
    0xEA107AE4,
    [
      ["flags", "#"],
      ["join", "flags.0?true"],
      ["leave", "flags.1?true"],
      ["invite", "flags.2?true"],
      ["ban", "flags.3?true"],
      ["unban", "flags.4?true"],
      ["kick", "flags.5?true"],
      ["unkick", "flags.6?true"],
      ["promote", "flags.7?true"],
      ["demote", "flags.8?true"],
      ["info", "flags.9?true"],
      ["settings", "flags.10?true"],
      ["pinned", "flags.11?true"],
      ["edit", "flags.12?true"],
      ["delete", "flags.13?true"],
      ["group_call", "flags.14?true"],
      ["invites", "flags.15?true"],
      ["send", "flags.16?true"],
      ["forums", "flags.17?true"],
      ["sub_extend", "flags.18?true"],
    ],
    "ChannelAdminLogEventsFilter",
  ],
  "popularContact": [
    0x5CE14175,
    [
      ["client_id", "long"],
      ["importers", "int"],
    ],
    "PopularContact",
  ],
  "messages.favedStickersNotModified": [
    0x9E8FA6D3,
    [],
    "messages.FavedStickers",
  ],
  "messages.favedStickers": [
    0x2CB51097,
    [
      ["hash", "long"],
      ["packs", "Vector<StickerPack>"],
      ["stickers", "Vector<Document>"],
    ],
    "messages.FavedStickers",
  ],
  "recentMeUrlUnknown": [
    0x46E1D13D,
    [
      ["url", "string"],
    ],
    "RecentMeUrl",
  ],
  "recentMeUrlUser": [
    0xB92C09E2,
    [
      ["url", "string"],
      ["user_id", "long"],
    ],
    "RecentMeUrl",
  ],
  "recentMeUrlChat": [
    0xB2DA71D2,
    [
      ["url", "string"],
      ["chat_id", "long"],
    ],
    "RecentMeUrl",
  ],
  "recentMeUrlChatInvite": [
    0xEB49081D,
    [
      ["url", "string"],
      ["chat_invite", "ChatInvite"],
    ],
    "RecentMeUrl",
  ],
  "recentMeUrlStickerSet": [
    0xBC0A57DC,
    [
      ["url", "string"],
      ["set", "StickerSetCovered"],
    ],
    "RecentMeUrl",
  ],
  "help.recentMeUrls": [
    0x0E0310D7,
    [
      ["urls", "Vector<RecentMeUrl>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "help.RecentMeUrls",
  ],
  "inputSingleMedia": [
    0x1CC6E91F,
    [
      ["flags", "#"],
      ["media", "InputMedia"],
      ["random_id", "long"],
      ["message", "string"],
      ["entities", "flags.0?Vector<MessageEntity>"],
    ],
    "InputSingleMedia",
  ],
  "webAuthorization": [
    0xA6F8F452,
    [
      ["hash", "long"],
      ["bot_id", "long"],
      ["domain", "string"],
      ["browser", "string"],
      ["platform", "string"],
      ["date_created", "int"],
      ["date_active", "int"],
      ["ip", "string"],
      ["region", "string"],
    ],
    "WebAuthorization",
  ],
  "account.webAuthorizations": [
    0xED56C9FC,
    [
      ["authorizations", "Vector<WebAuthorization>"],
      ["users", "Vector<User>"],
    ],
    "account.WebAuthorizations",
  ],
  "inputMessageID": [
    0xA676A322,
    [
      ["id", "int"],
    ],
    "InputMessage",
  ],
  "inputMessageReplyTo": [
    0xBAD88395,
    [
      ["id", "int"],
    ],
    "InputMessage",
  ],
  "inputMessagePinned": [
    0x86872538,
    [],
    "InputMessage",
  ],
  "inputMessageCallbackQuery": [
    0xACFA1A7E,
    [
      ["id", "int"],
      ["query_id", "long"],
    ],
    "InputMessage",
  ],
  "inputDialogPeer": [
    0xFCAAFEB7,
    [
      ["peer", "InputPeer"],
    ],
    "InputDialogPeer",
  ],
  "inputDialogPeerFolder": [
    0x64600527,
    [
      ["folder_id", "int"],
    ],
    "InputDialogPeer",
  ],
  "dialogPeer": [
    0xE56DBF05,
    [
      ["peer", "Peer"],
    ],
    "DialogPeer",
  ],
  "dialogPeerFolder": [
    0x514519E2,
    [
      ["folder_id", "int"],
    ],
    "DialogPeer",
  ],
  "messages.foundStickerSetsNotModified": [
    0x0D54B65D,
    [],
    "messages.FoundStickerSets",
  ],
  "messages.foundStickerSets": [
    0x8AF09DD2,
    [
      ["hash", "long"],
      ["sets", "Vector<StickerSetCovered>"],
    ],
    "messages.FoundStickerSets",
  ],
  "fileHash": [
    0xF39B035C,
    [
      ["offset", "long"],
      ["limit", "int"],
      ["hash", "bytes"],
    ],
    "FileHash",
  ],
  "inputClientProxy": [
    0x75588B3F,
    [
      ["address", "string"],
      ["port", "int"],
    ],
    "InputClientProxy",
  ],
  "help.termsOfServiceUpdateEmpty": [
    0xE3309F7F,
    [
      ["expires", "int"],
    ],
    "help.TermsOfServiceUpdate",
  ],
  "help.termsOfServiceUpdate": [
    0x28ECF961,
    [
      ["expires", "int"],
      ["terms_of_service", "help.TermsOfService"],
    ],
    "help.TermsOfServiceUpdate",
  ],
  "inputSecureFileUploaded": [
    0x3334B0F0,
    [
      ["id", "long"],
      ["parts", "int"],
      ["md5_checksum", "string"],
      ["file_hash", "bytes"],
      ["secret", "bytes"],
    ],
    "InputSecureFile",
  ],
  "inputSecureFile": [
    0x5367E5BE,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputSecureFile",
  ],
  "secureFileEmpty": [
    0x64199744,
    [],
    "SecureFile",
  ],
  "secureFile": [
    0x7D09C27E,
    [
      ["id", "long"],
      ["access_hash", "long"],
      ["size", "long"],
      ["dc_id", "int"],
      ["date", "int"],
      ["file_hash", "bytes"],
      ["secret", "bytes"],
    ],
    "SecureFile",
  ],
  "secureData": [
    0x8AEABEC3,
    [
      ["data", "bytes"],
      ["data_hash", "bytes"],
      ["secret", "bytes"],
    ],
    "SecureData",
  ],
  "securePlainPhone": [
    0x7D6099DD,
    [
      ["phone", "string"],
    ],
    "SecurePlainData",
  ],
  "securePlainEmail": [
    0x21EC5A5F,
    [
      ["email", "string"],
    ],
    "SecurePlainData",
  ],
  "secureValueTypePersonalDetails": [
    0x9D2A81E3,
    [],
    "SecureValueType",
  ],
  "secureValueTypePassport": [
    0x3DAC6A00,
    [],
    "SecureValueType",
  ],
  "secureValueTypeDriverLicense": [
    0x06E425C4,
    [],
    "SecureValueType",
  ],
  "secureValueTypeIdentityCard": [
    0xA0D0744B,
    [],
    "SecureValueType",
  ],
  "secureValueTypeInternalPassport": [
    0x99A48F23,
    [],
    "SecureValueType",
  ],
  "secureValueTypeAddress": [
    0xCBE31E26,
    [],
    "SecureValueType",
  ],
  "secureValueTypeUtilityBill": [
    0xFC36954E,
    [],
    "SecureValueType",
  ],
  "secureValueTypeBankStatement": [
    0x89137C0D,
    [],
    "SecureValueType",
  ],
  "secureValueTypeRentalAgreement": [
    0x8B883488,
    [],
    "SecureValueType",
  ],
  "secureValueTypePassportRegistration": [
    0x99E3806A,
    [],
    "SecureValueType",
  ],
  "secureValueTypeTemporaryRegistration": [
    0xEA02EC33,
    [],
    "SecureValueType",
  ],
  "secureValueTypePhone": [
    0xB320AADB,
    [],
    "SecureValueType",
  ],
  "secureValueTypeEmail": [
    0x8E3CA7EE,
    [],
    "SecureValueType",
  ],
  "secureValue": [
    0x187FA0CA,
    [
      ["flags", "#"],
      ["type", "SecureValueType"],
      ["data", "flags.0?SecureData"],
      ["front_side", "flags.1?SecureFile"],
      ["reverse_side", "flags.2?SecureFile"],
      ["selfie", "flags.3?SecureFile"],
      ["translation", "flags.6?Vector<SecureFile>"],
      ["files", "flags.4?Vector<SecureFile>"],
      ["plain_data", "flags.5?SecurePlainData"],
      ["hash", "bytes"],
    ],
    "SecureValue",
  ],
  "inputSecureValue": [
    0xDB21D0A7,
    [
      ["flags", "#"],
      ["type", "SecureValueType"],
      ["data", "flags.0?SecureData"],
      ["front_side", "flags.1?InputSecureFile"],
      ["reverse_side", "flags.2?InputSecureFile"],
      ["selfie", "flags.3?InputSecureFile"],
      ["translation", "flags.6?Vector<InputSecureFile>"],
      ["files", "flags.4?Vector<InputSecureFile>"],
      ["plain_data", "flags.5?SecurePlainData"],
    ],
    "InputSecureValue",
  ],
  "secureValueHash": [
    0xED1ECDB0,
    [
      ["type", "SecureValueType"],
      ["hash", "bytes"],
    ],
    "SecureValueHash",
  ],
  "secureValueErrorData": [
    0xE8A40BD9,
    [
      ["type", "SecureValueType"],
      ["data_hash", "bytes"],
      ["field", "string"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureValueErrorFrontSide": [
    0x00BE3DFA,
    [
      ["type", "SecureValueType"],
      ["file_hash", "bytes"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureValueErrorReverseSide": [
    0x868A2AA5,
    [
      ["type", "SecureValueType"],
      ["file_hash", "bytes"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureValueErrorSelfie": [
    0xE537CED6,
    [
      ["type", "SecureValueType"],
      ["file_hash", "bytes"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureValueErrorFile": [
    0x7A700873,
    [
      ["type", "SecureValueType"],
      ["file_hash", "bytes"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureValueErrorFiles": [
    0x666220E9,
    [
      ["type", "SecureValueType"],
      ["file_hash", "Vector<bytes>"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureValueError": [
    0x869D758F,
    [
      ["type", "SecureValueType"],
      ["hash", "bytes"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureValueErrorTranslationFile": [
    0xA1144770,
    [
      ["type", "SecureValueType"],
      ["file_hash", "bytes"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureValueErrorTranslationFiles": [
    0x34636DD8,
    [
      ["type", "SecureValueType"],
      ["file_hash", "Vector<bytes>"],
      ["text", "string"],
    ],
    "SecureValueError",
  ],
  "secureCredentialsEncrypted": [
    0x33F0EA47,
    [
      ["data", "bytes"],
      ["hash", "bytes"],
      ["secret", "bytes"],
    ],
    "SecureCredentialsEncrypted",
  ],
  "account.authorizationForm": [
    0xAD2E1CD8,
    [
      ["flags", "#"],
      ["required_types", "Vector<SecureRequiredType>"],
      ["values", "Vector<SecureValue>"],
      ["errors", "Vector<SecureValueError>"],
      ["users", "Vector<User>"],
      ["privacy_policy_url", "flags.0?string"],
    ],
    "account.AuthorizationForm",
  ],
  "account.sentEmailCode": [
    0x811F854F,
    [
      ["email_pattern", "string"],
      ["length", "int"],
    ],
    "account.SentEmailCode",
  ],
  "help.deepLinkInfoEmpty": [
    0x66AFA166,
    [],
    "help.DeepLinkInfo",
  ],
  "help.deepLinkInfo": [
    0x6A4EE832,
    [
      ["flags", "#"],
      ["update_app", "flags.0?true"],
      ["message", "string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
    ],
    "help.DeepLinkInfo",
  ],
  "savedPhoneContact": [
    0x1142BD56,
    [
      ["phone", "string"],
      ["first_name", "string"],
      ["last_name", "string"],
      ["date", "int"],
    ],
    "SavedContact",
  ],
  "account.takeout": [
    0x4DBA4501,
    [
      ["id", "long"],
    ],
    "account.Takeout",
  ],
  "passwordKdfAlgoUnknown": [
    0xD45AB096,
    [],
    "PasswordKdfAlgo",
  ],
  "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow": [
    0x3A912D4A,
    [
      ["salt1", "bytes"],
      ["salt2", "bytes"],
      ["g", "int"],
      ["p", "bytes"],
    ],
    "PasswordKdfAlgo",
  ],
  "securePasswordKdfAlgoUnknown": [
    0x004A8537,
    [],
    "SecurePasswordKdfAlgo",
  ],
  "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000": [
    0xBBF2DDA0,
    [
      ["salt", "bytes"],
    ],
    "SecurePasswordKdfAlgo",
  ],
  "securePasswordKdfAlgoSHA512": [
    0x86471D92,
    [
      ["salt", "bytes"],
    ],
    "SecurePasswordKdfAlgo",
  ],
  "secureSecretSettings": [
    0x1527BCAC,
    [
      ["secure_algo", "SecurePasswordKdfAlgo"],
      ["secure_secret", "bytes"],
      ["secure_secret_id", "long"],
    ],
    "SecureSecretSettings",
  ],
  "inputCheckPasswordEmpty": [
    0x9880F658,
    [],
    "InputCheckPasswordSRP",
  ],
  "inputCheckPasswordSRP": [
    0xD27FF082,
    [
      ["srp_id", "long"],
      ["A", "bytes"],
      ["M1", "bytes"],
    ],
    "InputCheckPasswordSRP",
  ],
  "secureRequiredType": [
    0x829D99DA,
    [
      ["flags", "#"],
      ["native_names", "flags.0?true"],
      ["selfie_required", "flags.1?true"],
      ["translation_required", "flags.2?true"],
      ["type", "SecureValueType"],
    ],
    "SecureRequiredType",
  ],
  "secureRequiredTypeOneOf": [
    0x027477B4,
    [
      ["types", "Vector<SecureRequiredType>"],
    ],
    "SecureRequiredType",
  ],
  "help.passportConfigNotModified": [
    0xBFB9F457,
    [],
    "help.PassportConfig",
  ],
  "help.passportConfig": [
    0xA098D6AF,
    [
      ["hash", "int"],
      ["countries_langs", "DataJSON"],
    ],
    "help.PassportConfig",
  ],
  "inputAppEvent": [
    0x1D1B1245,
    [
      ["time", "double"],
      ["type", "string"],
      ["peer", "long"],
      ["data", "JSONValue"],
    ],
    "InputAppEvent",
  ],
  "jsonObjectValue": [
    0xC0DE1BD9,
    [
      ["key", "string"],
      ["value", "JSONValue"],
    ],
    "JSONObjectValue",
  ],
  "jsonNull": [
    0x3F6D7B68,
    [],
    "JSONValue",
  ],
  "jsonBool": [
    0xC7345E6A,
    [
      ["value", "Bool"],
    ],
    "JSONValue",
  ],
  "jsonNumber": [
    0x2BE0DFA4,
    [
      ["value", "double"],
    ],
    "JSONValue",
  ],
  "jsonString": [
    0xB71E767A,
    [
      ["value", "string"],
    ],
    "JSONValue",
  ],
  "jsonArray": [
    0xF7444763,
    [
      ["value", "Vector<JSONValue>"],
    ],
    "JSONValue",
  ],
  "jsonObject": [
    0x99C1D49D,
    [
      ["value", "Vector<JSONObjectValue>"],
    ],
    "JSONValue",
  ],
  "pageTableCell": [
    0x34566B6A,
    [
      ["flags", "#"],
      ["header", "flags.0?true"],
      ["align_center", "flags.3?true"],
      ["align_right", "flags.4?true"],
      ["valign_middle", "flags.5?true"],
      ["valign_bottom", "flags.6?true"],
      ["text", "flags.7?RichText"],
      ["colspan", "flags.1?int"],
      ["rowspan", "flags.2?int"],
    ],
    "PageTableCell",
  ],
  "pageTableRow": [
    0xE0C0C5E5,
    [
      ["cells", "Vector<PageTableCell>"],
    ],
    "PageTableRow",
  ],
  "pageCaption": [
    0x6F747657,
    [
      ["text", "RichText"],
      ["credit", "RichText"],
    ],
    "PageCaption",
  ],
  "pageListItemText": [
    0xB92FB6CD,
    [
      ["text", "RichText"],
    ],
    "PageListItem",
  ],
  "pageListItemBlocks": [
    0x25E073FC,
    [
      ["blocks", "Vector<PageBlock>"],
    ],
    "PageListItem",
  ],
  "pageListOrderedItemText": [
    0x5E068047,
    [
      ["num", "string"],
      ["text", "RichText"],
    ],
    "PageListOrderedItem",
  ],
  "pageListOrderedItemBlocks": [
    0x98DD8936,
    [
      ["num", "string"],
      ["blocks", "Vector<PageBlock>"],
    ],
    "PageListOrderedItem",
  ],
  "pageRelatedArticle": [
    0xB390DC08,
    [
      ["flags", "#"],
      ["url", "string"],
      ["webpage_id", "long"],
      ["title", "flags.0?string"],
      ["description", "flags.1?string"],
      ["photo_id", "flags.2?long"],
      ["author", "flags.3?string"],
      ["published_date", "flags.4?int"],
    ],
    "PageRelatedArticle",
  ],
  "page": [
    0x98657F0D,
    [
      ["flags", "#"],
      ["part", "flags.0?true"],
      ["rtl", "flags.1?true"],
      ["v2", "flags.2?true"],
      ["url", "string"],
      ["blocks", "Vector<PageBlock>"],
      ["photos", "Vector<Photo>"],
      ["documents", "Vector<Document>"],
      ["views", "flags.3?int"],
    ],
    "Page",
  ],
  "help.supportName": [
    0x8C05F1C9,
    [
      ["name", "string"],
    ],
    "help.SupportName",
  ],
  "help.userInfoEmpty": [
    0xF3AE2EED,
    [],
    "help.UserInfo",
  ],
  "help.userInfo": [
    0x01EB3758,
    [
      ["message", "string"],
      ["entities", "Vector<MessageEntity>"],
      ["author", "string"],
      ["date", "int"],
    ],
    "help.UserInfo",
  ],
  "pollAnswer": [
    0xFF16E2CA,
    [
      ["text", "TextWithEntities"],
      ["option", "bytes"],
    ],
    "PollAnswer",
  ],
  "poll": [
    0x58747131,
    [
      ["id", "long"],
      ["flags", "#"],
      ["closed", "flags.0?true"],
      ["public_voters", "flags.1?true"],
      ["multiple_choice", "flags.2?true"],
      ["quiz", "flags.3?true"],
      ["question", "TextWithEntities"],
      ["answers", "Vector<PollAnswer>"],
      ["close_period", "flags.4?int"],
      ["close_date", "flags.5?int"],
    ],
    "Poll",
  ],
  "pollAnswerVoters": [
    0x3B6DDAD2,
    [
      ["flags", "#"],
      ["chosen", "flags.0?true"],
      ["correct", "flags.1?true"],
      ["option", "bytes"],
      ["voters", "int"],
    ],
    "PollAnswerVoters",
  ],
  "pollResults": [
    0x7ADF2420,
    [
      ["flags", "#"],
      ["min", "flags.0?true"],
      ["results", "flags.1?Vector<PollAnswerVoters>"],
      ["total_voters", "flags.2?int"],
      ["recent_voters", "flags.3?Vector<Peer>"],
      ["solution", "flags.4?string"],
      ["solution_entities", "flags.4?Vector<MessageEntity>"],
    ],
    "PollResults",
  ],
  "chatOnlines": [
    0xF041E250,
    [
      ["onlines", "int"],
    ],
    "ChatOnlines",
  ],
  "statsURL": [
    0x47A971E0,
    [
      ["url", "string"],
    ],
    "StatsURL",
  ],
  "chatAdminRights": [
    0x5FB224D5,
    [
      ["flags", "#"],
      ["change_info", "flags.0?true"],
      ["post_messages", "flags.1?true"],
      ["edit_messages", "flags.2?true"],
      ["delete_messages", "flags.3?true"],
      ["ban_users", "flags.4?true"],
      ["invite_users", "flags.5?true"],
      ["pin_messages", "flags.7?true"],
      ["add_admins", "flags.9?true"],
      ["anonymous", "flags.10?true"],
      ["manage_call", "flags.11?true"],
      ["other", "flags.12?true"],
      ["manage_topics", "flags.13?true"],
      ["post_stories", "flags.14?true"],
      ["edit_stories", "flags.15?true"],
      ["delete_stories", "flags.16?true"],
    ],
    "ChatAdminRights",
  ],
  "chatBannedRights": [
    0x9F120418,
    [
      ["flags", "#"],
      ["view_messages", "flags.0?true"],
      ["send_messages", "flags.1?true"],
      ["send_media", "flags.2?true"],
      ["send_stickers", "flags.3?true"],
      ["send_gifs", "flags.4?true"],
      ["send_games", "flags.5?true"],
      ["send_inline", "flags.6?true"],
      ["embed_links", "flags.7?true"],
      ["send_polls", "flags.8?true"],
      ["change_info", "flags.10?true"],
      ["invite_users", "flags.15?true"],
      ["pin_messages", "flags.17?true"],
      ["manage_topics", "flags.18?true"],
      ["send_photos", "flags.19?true"],
      ["send_videos", "flags.20?true"],
      ["send_roundvideos", "flags.21?true"],
      ["send_audios", "flags.22?true"],
      ["send_voices", "flags.23?true"],
      ["send_docs", "flags.24?true"],
      ["send_plain", "flags.25?true"],
      ["until_date", "int"],
    ],
    "ChatBannedRights",
  ],
  "inputWallPaper": [
    0xE630B979,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputWallPaper",
  ],
  "inputWallPaperSlug": [
    0x72091C80,
    [
      ["slug", "string"],
    ],
    "InputWallPaper",
  ],
  "inputWallPaperNoFile": [
    0x967A462E,
    [
      ["id", "long"],
    ],
    "InputWallPaper",
  ],
  "account.wallPapersNotModified": [
    0x1C199183,
    [],
    "account.WallPapers",
  ],
  "account.wallPapers": [
    0xCDC3858C,
    [
      ["hash", "long"],
      ["wallpapers", "Vector<WallPaper>"],
    ],
    "account.WallPapers",
  ],
  "codeSettings": [
    0xAD253D78,
    [
      ["flags", "#"],
      ["allow_flashcall", "flags.0?true"],
      ["current_number", "flags.1?true"],
      ["allow_app_hash", "flags.4?true"],
      ["allow_missed_call", "flags.5?true"],
      ["allow_firebase", "flags.7?true"],
      ["unknown_number", "flags.9?true"],
      ["logout_tokens", "flags.6?Vector<bytes>"],
      ["token", "flags.8?string"],
      ["app_sandbox", "flags.8?Bool"],
    ],
    "CodeSettings",
  ],
  "wallPaperSettings": [
    0x372EFCD0,
    [
      ["flags", "#"],
      ["blur", "flags.1?true"],
      ["motion", "flags.2?true"],
      ["background_color", "flags.0?int"],
      ["second_background_color", "flags.4?int"],
      ["third_background_color", "flags.5?int"],
      ["fourth_background_color", "flags.6?int"],
      ["intensity", "flags.3?int"],
      ["rotation", "flags.4?int"],
      ["emoticon", "flags.7?string"],
    ],
    "WallPaperSettings",
  ],
  "autoDownloadSettings": [
    0xBAA57628,
    [
      ["flags", "#"],
      ["disabled", "flags.0?true"],
      ["video_preload_large", "flags.1?true"],
      ["audio_preload_next", "flags.2?true"],
      ["phonecalls_less_data", "flags.3?true"],
      ["stories_preload", "flags.4?true"],
      ["photo_size_max", "int"],
      ["video_size_max", "long"],
      ["file_size_max", "long"],
      ["video_upload_maxbitrate", "int"],
      ["small_queue_active_operations_max", "int"],
      ["large_queue_active_operations_max", "int"],
    ],
    "AutoDownloadSettings",
  ],
  "account.autoDownloadSettings": [
    0x63CACF26,
    [
      ["low", "AutoDownloadSettings"],
      ["medium", "AutoDownloadSettings"],
      ["high", "AutoDownloadSettings"],
    ],
    "account.AutoDownloadSettings",
  ],
  "emojiKeyword": [
    0xD5B3B9F9,
    [
      ["keyword", "string"],
      ["emoticons", "Vector<string>"],
    ],
    "EmojiKeyword",
  ],
  "emojiKeywordDeleted": [
    0x236DF622,
    [
      ["keyword", "string"],
      ["emoticons", "Vector<string>"],
    ],
    "EmojiKeyword",
  ],
  "emojiKeywordsDifference": [
    0x5CC761BD,
    [
      ["lang_code", "string"],
      ["from_version", "int"],
      ["version", "int"],
      ["keywords", "Vector<EmojiKeyword>"],
    ],
    "EmojiKeywordsDifference",
  ],
  "emojiURL": [
    0xA575739D,
    [
      ["url", "string"],
    ],
    "EmojiURL",
  ],
  "emojiLanguage": [
    0xB3FB5361,
    [
      ["lang_code", "string"],
    ],
    "EmojiLanguage",
  ],
  "folder": [
    0xFF544E65,
    [
      ["flags", "#"],
      ["autofill_new_broadcasts", "flags.0?true"],
      ["autofill_public_groups", "flags.1?true"],
      ["autofill_new_correspondents", "flags.2?true"],
      ["id", "int"],
      ["title", "string"],
      ["photo", "flags.3?ChatPhoto"],
    ],
    "Folder",
  ],
  "inputFolderPeer": [
    0xFBD2C296,
    [
      ["peer", "InputPeer"],
      ["folder_id", "int"],
    ],
    "InputFolderPeer",
  ],
  "folderPeer": [
    0xE9BAA668,
    [
      ["peer", "Peer"],
      ["folder_id", "int"],
    ],
    "FolderPeer",
  ],
  "messages.searchCounter": [
    0xE844EBFF,
    [
      ["flags", "#"],
      ["inexact", "flags.1?true"],
      ["filter", "MessagesFilter"],
      ["count", "int"],
    ],
    "messages.SearchCounter",
  ],
  "urlAuthResultRequest": [
    0x92D33A0E,
    [
      ["flags", "#"],
      ["request_write_access", "flags.0?true"],
      ["bot", "User"],
      ["domain", "string"],
    ],
    "UrlAuthResult",
  ],
  "urlAuthResultAccepted": [
    0x8F8C0E4E,
    [
      ["url", "string"],
    ],
    "UrlAuthResult",
  ],
  "urlAuthResultDefault": [
    0xA9D6DB1F,
    [],
    "UrlAuthResult",
  ],
  "channelLocationEmpty": [
    0xBFB5AD8B,
    [],
    "ChannelLocation",
  ],
  "channelLocation": [
    0x209B82DB,
    [
      ["geo_point", "GeoPoint"],
      ["address", "string"],
    ],
    "ChannelLocation",
  ],
  "peerLocated": [
    0xCA461B5D,
    [
      ["peer", "Peer"],
      ["expires", "int"],
      ["distance", "int"],
    ],
    "PeerLocated",
  ],
  "peerSelfLocated": [
    0xF8EC284B,
    [
      ["expires", "int"],
    ],
    "PeerLocated",
  ],
  "restrictionReason": [
    0xD072ACB4,
    [
      ["platform", "string"],
      ["reason", "string"],
      ["text", "string"],
    ],
    "RestrictionReason",
  ],
  "inputTheme": [
    0x3C5693E9,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputTheme",
  ],
  "inputThemeSlug": [
    0xF5890DF1,
    [
      ["slug", "string"],
    ],
    "InputTheme",
  ],
  "theme": [
    0xA00E67D6,
    [
      ["flags", "#"],
      ["creator", "flags.0?true"],
      ["default", "flags.1?true"],
      ["for_chat", "flags.5?true"],
      ["id", "long"],
      ["access_hash", "long"],
      ["slug", "string"],
      ["title", "string"],
      ["document", "flags.2?Document"],
      ["settings", "flags.3?Vector<ThemeSettings>"],
      ["emoticon", "flags.6?string"],
      ["installs_count", "flags.4?int"],
    ],
    "Theme",
  ],
  "account.themesNotModified": [
    0xF41EB622,
    [],
    "account.Themes",
  ],
  "account.themes": [
    0x9A3D8C6D,
    [
      ["hash", "long"],
      ["themes", "Vector<Theme>"],
    ],
    "account.Themes",
  ],
  "auth.loginToken": [
    0x629F1980,
    [
      ["expires", "int"],
      ["token", "bytes"],
    ],
    "auth.LoginToken",
  ],
  "auth.loginTokenMigrateTo": [
    0x068E9916,
    [
      ["dc_id", "int"],
      ["token", "bytes"],
    ],
    "auth.LoginToken",
  ],
  "auth.loginTokenSuccess": [
    0x390D5C5E,
    [
      ["authorization", "auth.Authorization"],
    ],
    "auth.LoginToken",
  ],
  "account.contentSettings": [
    0x57E28221,
    [
      ["flags", "#"],
      ["sensitive_enabled", "flags.0?true"],
      ["sensitive_can_change", "flags.1?true"],
    ],
    "account.ContentSettings",
  ],
  "messages.inactiveChats": [
    0xA927FEC5,
    [
      ["dates", "Vector<int>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.InactiveChats",
  ],
  "baseThemeClassic": [
    0xC3A12462,
    [],
    "BaseTheme",
  ],
  "baseThemeDay": [
    0xFBD81688,
    [],
    "BaseTheme",
  ],
  "baseThemeNight": [
    0xB7B31EA8,
    [],
    "BaseTheme",
  ],
  "baseThemeTinted": [
    0x6D5F77EE,
    [],
    "BaseTheme",
  ],
  "baseThemeArctic": [
    0x5B11125A,
    [],
    "BaseTheme",
  ],
  "inputThemeSettings": [
    0x8FDE504F,
    [
      ["flags", "#"],
      ["message_colors_animated", "flags.2?true"],
      ["base_theme", "BaseTheme"],
      ["accent_color", "int"],
      ["outbox_accent_color", "flags.3?int"],
      ["message_colors", "flags.0?Vector<int>"],
      ["wallpaper", "flags.1?InputWallPaper"],
      ["wallpaper_settings", "flags.1?WallPaperSettings"],
    ],
    "InputThemeSettings",
  ],
  "themeSettings": [
    0xFA58B6D4,
    [
      ["flags", "#"],
      ["message_colors_animated", "flags.2?true"],
      ["base_theme", "BaseTheme"],
      ["accent_color", "int"],
      ["outbox_accent_color", "flags.3?int"],
      ["message_colors", "flags.0?Vector<int>"],
      ["wallpaper", "flags.1?WallPaper"],
    ],
    "ThemeSettings",
  ],
  "webPageAttributeTheme": [
    0x54B56617,
    [
      ["flags", "#"],
      ["documents", "flags.0?Vector<Document>"],
      ["settings", "flags.1?ThemeSettings"],
    ],
    "WebPageAttribute",
  ],
  "webPageAttributeStory": [
    0x2E94C3E7,
    [
      ["flags", "#"],
      ["peer", "Peer"],
      ["id", "int"],
      ["story", "flags.0?StoryItem"],
    ],
    "WebPageAttribute",
  ],
  "webPageAttributeStickerSet": [
    0x50CC03D3,
    [
      ["flags", "#"],
      ["emojis", "flags.0?true"],
      ["text_color", "flags.1?true"],
      ["stickers", "Vector<Document>"],
    ],
    "WebPageAttribute",
  ],
  "webPageAttributeUniqueStarGift": [
    0xCF6F6DB8,
    [
      ["gift", "StarGift"],
    ],
    "WebPageAttribute",
  ],
  "messages.votesList": [
    0x4899484E,
    [
      ["flags", "#"],
      ["count", "int"],
      ["votes", "Vector<MessagePeerVote>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["next_offset", "flags.0?string"],
    ],
    "messages.VotesList",
  ],
  "bankCardOpenUrl": [
    0xF568028A,
    [
      ["url", "string"],
      ["name", "string"],
    ],
    "BankCardOpenUrl",
  ],
  "payments.bankCardData": [
    0x3E24E573,
    [
      ["title", "string"],
      ["open_urls", "Vector<BankCardOpenUrl>"],
    ],
    "payments.BankCardData",
  ],
  "dialogFilter": [
    0xAA472651,
    [
      ["flags", "#"],
      ["contacts", "flags.0?true"],
      ["non_contacts", "flags.1?true"],
      ["groups", "flags.2?true"],
      ["broadcasts", "flags.3?true"],
      ["bots", "flags.4?true"],
      ["exclude_muted", "flags.11?true"],
      ["exclude_read", "flags.12?true"],
      ["exclude_archived", "flags.13?true"],
      ["title_noanimate", "flags.28?true"],
      ["id", "int"],
      ["title", "TextWithEntities"],
      ["emoticon", "flags.25?string"],
      ["color", "flags.27?int"],
      ["pinned_peers", "Vector<InputPeer>"],
      ["include_peers", "Vector<InputPeer>"],
      ["exclude_peers", "Vector<InputPeer>"],
    ],
    "DialogFilter",
  ],
  "dialogFilterDefault": [
    0x363293AE,
    [],
    "DialogFilter",
  ],
  "dialogFilterChatlist": [
    0x96537BD7,
    [
      ["flags", "#"],
      ["has_my_invites", "flags.26?true"],
      ["title_noanimate", "flags.28?true"],
      ["id", "int"],
      ["title", "TextWithEntities"],
      ["emoticon", "flags.25?string"],
      ["color", "flags.27?int"],
      ["pinned_peers", "Vector<InputPeer>"],
      ["include_peers", "Vector<InputPeer>"],
    ],
    "DialogFilter",
  ],
  "dialogFilterSuggested": [
    0x77744D4A,
    [
      ["filter", "DialogFilter"],
      ["description", "string"],
    ],
    "DialogFilterSuggested",
  ],
  "statsDateRangeDays": [
    0xB637EDAF,
    [
      ["min_date", "int"],
      ["max_date", "int"],
    ],
    "StatsDateRangeDays",
  ],
  "statsAbsValueAndPrev": [
    0xCB43ACDE,
    [
      ["current", "double"],
      ["previous", "double"],
    ],
    "StatsAbsValueAndPrev",
  ],
  "statsPercentValue": [
    0xCBCE2FE0,
    [
      ["part", "double"],
      ["total", "double"],
    ],
    "StatsPercentValue",
  ],
  "statsGraphAsync": [
    0x4A27EB2D,
    [
      ["token", "string"],
    ],
    "StatsGraph",
  ],
  "statsGraphError": [
    0xBEDC9822,
    [
      ["error", "string"],
    ],
    "StatsGraph",
  ],
  "statsGraph": [
    0x8EA464B6,
    [
      ["flags", "#"],
      ["json", "DataJSON"],
      ["zoom_token", "flags.0?string"],
    ],
    "StatsGraph",
  ],
  "stats.broadcastStats": [
    0x396CA5FC,
    [
      ["period", "StatsDateRangeDays"],
      ["followers", "StatsAbsValueAndPrev"],
      ["views_per_post", "StatsAbsValueAndPrev"],
      ["shares_per_post", "StatsAbsValueAndPrev"],
      ["reactions_per_post", "StatsAbsValueAndPrev"],
      ["views_per_story", "StatsAbsValueAndPrev"],
      ["shares_per_story", "StatsAbsValueAndPrev"],
      ["reactions_per_story", "StatsAbsValueAndPrev"],
      ["enabled_notifications", "StatsPercentValue"],
      ["growth_graph", "StatsGraph"],
      ["followers_graph", "StatsGraph"],
      ["mute_graph", "StatsGraph"],
      ["top_hours_graph", "StatsGraph"],
      ["interactions_graph", "StatsGraph"],
      ["iv_interactions_graph", "StatsGraph"],
      ["views_by_source_graph", "StatsGraph"],
      ["new_followers_by_source_graph", "StatsGraph"],
      ["languages_graph", "StatsGraph"],
      ["reactions_by_emotion_graph", "StatsGraph"],
      ["story_interactions_graph", "StatsGraph"],
      ["story_reactions_by_emotion_graph", "StatsGraph"],
      ["recent_posts_interactions", "Vector<PostInteractionCounters>"],
    ],
    "stats.BroadcastStats",
  ],
  "help.promoDataEmpty": [
    0x98F6AC75,
    [
      ["expires", "int"],
    ],
    "help.PromoData",
  ],
  "help.promoData": [
    0x8C39793F,
    [
      ["flags", "#"],
      ["proxy", "flags.0?true"],
      ["expires", "int"],
      ["peer", "Peer"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["psa_type", "flags.1?string"],
      ["psa_message", "flags.2?string"],
    ],
    "help.PromoData",
  ],
  "videoSize": [
    0xDE33B094,
    [
      ["flags", "#"],
      ["type", "string"],
      ["w", "int"],
      ["h", "int"],
      ["size", "int"],
      ["video_start_ts", "flags.0?double"],
    ],
    "VideoSize",
  ],
  "videoSizeEmojiMarkup": [
    0xF85C413C,
    [
      ["emoji_id", "long"],
      ["background_colors", "Vector<int>"],
    ],
    "VideoSize",
  ],
  "videoSizeStickerMarkup": [
    0x0DA082FE,
    [
      ["stickerset", "InputStickerSet"],
      ["sticker_id", "long"],
      ["background_colors", "Vector<int>"],
    ],
    "VideoSize",
  ],
  "statsGroupTopPoster": [
    0x9D04AF9B,
    [
      ["user_id", "long"],
      ["messages", "int"],
      ["avg_chars", "int"],
    ],
    "StatsGroupTopPoster",
  ],
  "statsGroupTopAdmin": [
    0xD7584C87,
    [
      ["user_id", "long"],
      ["deleted", "int"],
      ["kicked", "int"],
      ["banned", "int"],
    ],
    "StatsGroupTopAdmin",
  ],
  "statsGroupTopInviter": [
    0x535F779D,
    [
      ["user_id", "long"],
      ["invitations", "int"],
    ],
    "StatsGroupTopInviter",
  ],
  "stats.megagroupStats": [
    0xEF7FF916,
    [
      ["period", "StatsDateRangeDays"],
      ["members", "StatsAbsValueAndPrev"],
      ["messages", "StatsAbsValueAndPrev"],
      ["viewers", "StatsAbsValueAndPrev"],
      ["posters", "StatsAbsValueAndPrev"],
      ["growth_graph", "StatsGraph"],
      ["members_graph", "StatsGraph"],
      ["new_members_by_source_graph", "StatsGraph"],
      ["languages_graph", "StatsGraph"],
      ["messages_graph", "StatsGraph"],
      ["actions_graph", "StatsGraph"],
      ["top_hours_graph", "StatsGraph"],
      ["weekdays_graph", "StatsGraph"],
      ["top_posters", "Vector<StatsGroupTopPoster>"],
      ["top_admins", "Vector<StatsGroupTopAdmin>"],
      ["top_inviters", "Vector<StatsGroupTopInviter>"],
      ["users", "Vector<User>"],
    ],
    "stats.MegagroupStats",
  ],
  "globalPrivacySettings": [
    0xC9D8DF1C,
    [
      ["flags", "#"],
      ["archive_and_mute_new_noncontact_peers", "flags.0?true"],
      ["keep_archived_unmuted", "flags.1?true"],
      ["keep_archived_folders", "flags.2?true"],
      ["hide_read_marks", "flags.3?true"],
      ["new_noncontact_peers_require_premium", "flags.4?true"],
      ["noncontact_peers_paid_stars", "flags.5?long"],
    ],
    "GlobalPrivacySettings",
  ],
  "help.countryCode": [
    0x4203C5EF,
    [
      ["flags", "#"],
      ["country_code", "string"],
      ["prefixes", "flags.0?Vector<string>"],
      ["patterns", "flags.1?Vector<string>"],
    ],
    "help.CountryCode",
  ],
  "help.country": [
    0xC3878E23,
    [
      ["flags", "#"],
      ["hidden", "flags.0?true"],
      ["iso2", "string"],
      ["default_name", "string"],
      ["name", "flags.1?string"],
      ["country_codes", "Vector<help.CountryCode>"],
    ],
    "help.Country",
  ],
  "help.countriesListNotModified": [
    0x93CC1F32,
    [],
    "help.CountriesList",
  ],
  "help.countriesList": [
    0x87D0759E,
    [
      ["countries", "Vector<help.Country>"],
      ["hash", "int"],
    ],
    "help.CountriesList",
  ],
  "messageViews": [
    0x455B853D,
    [
      ["flags", "#"],
      ["views", "flags.0?int"],
      ["forwards", "flags.1?int"],
      ["replies", "flags.2?MessageReplies"],
    ],
    "MessageViews",
  ],
  "messages.messageViews": [
    0xB6C4F543,
    [
      ["views", "Vector<MessageViews>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.MessageViews",
  ],
  "messages.discussionMessage": [
    0xA6341782,
    [
      ["flags", "#"],
      ["messages", "Vector<Message>"],
      ["max_id", "flags.0?int"],
      ["read_inbox_max_id", "flags.1?int"],
      ["read_outbox_max_id", "flags.2?int"],
      ["unread_count", "int"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.DiscussionMessage",
  ],
  "messageReplyHeader": [
    0xAFBC09DB,
    [
      ["flags", "#"],
      ["reply_to_scheduled", "flags.2?true"],
      ["forum_topic", "flags.3?true"],
      ["quote", "flags.9?true"],
      ["reply_to_msg_id", "flags.4?int"],
      ["reply_to_peer_id", "flags.0?Peer"],
      ["reply_from", "flags.5?MessageFwdHeader"],
      ["reply_media", "flags.8?MessageMedia"],
      ["reply_to_top_id", "flags.1?int"],
      ["quote_text", "flags.6?string"],
      ["quote_entities", "flags.7?Vector<MessageEntity>"],
      ["quote_offset", "flags.10?int"],
    ],
    "MessageReplyHeader",
  ],
  "messageReplyStoryHeader": [
    0x0E5AF939,
    [
      ["peer", "Peer"],
      ["story_id", "int"],
    ],
    "MessageReplyHeader",
  ],
  "messageReplies": [
    0x83D60FC2,
    [
      ["flags", "#"],
      ["comments", "flags.0?true"],
      ["replies", "int"],
      ["replies_pts", "int"],
      ["recent_repliers", "flags.1?Vector<Peer>"],
      ["channel_id", "flags.0?long"],
      ["max_id", "flags.2?int"],
      ["read_max_id", "flags.3?int"],
    ],
    "MessageReplies",
  ],
  "peerBlocked": [
    0xE8FD8014,
    [
      ["peer_id", "Peer"],
      ["date", "int"],
    ],
    "PeerBlocked",
  ],
  "stats.messageStats": [
    0x7FE91C14,
    [
      ["views_graph", "StatsGraph"],
      ["reactions_by_emotion_graph", "StatsGraph"],
    ],
    "stats.MessageStats",
  ],
  "groupCallDiscarded": [
    0x7780BCB4,
    [
      ["id", "long"],
      ["access_hash", "long"],
      ["duration", "int"],
    ],
    "GroupCall",
  ],
  "groupCall": [
    0xCDF8D3E3,
    [
      ["flags", "#"],
      ["join_muted", "flags.1?true"],
      ["can_change_join_muted", "flags.2?true"],
      ["join_date_asc", "flags.6?true"],
      ["schedule_start_subscribed", "flags.8?true"],
      ["can_start_video", "flags.9?true"],
      ["record_video_active", "flags.11?true"],
      ["rtmp_stream", "flags.12?true"],
      ["listeners_hidden", "flags.13?true"],
      ["id", "long"],
      ["access_hash", "long"],
      ["participants_count", "int"],
      ["title", "flags.3?string"],
      ["stream_dc_id", "flags.4?int"],
      ["record_start_date", "flags.5?int"],
      ["schedule_date", "flags.7?int"],
      ["unmuted_video_count", "flags.10?int"],
      ["unmuted_video_limit", "int"],
      ["version", "int"],
      ["conference_from_call", "flags.14?long"],
    ],
    "GroupCall",
  ],
  "inputGroupCall": [
    0xD8AA840F,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputGroupCall",
  ],
  "groupCallParticipant": [
    0xEBA636FE,
    [
      ["flags", "#"],
      ["muted", "flags.0?true"],
      ["left", "flags.1?true"],
      ["can_self_unmute", "flags.2?true"],
      ["just_joined", "flags.4?true"],
      ["versioned", "flags.5?true"],
      ["min", "flags.8?true"],
      ["muted_by_you", "flags.9?true"],
      ["volume_by_admin", "flags.10?true"],
      ["self", "flags.12?true"],
      ["video_joined", "flags.15?true"],
      ["peer", "Peer"],
      ["date", "int"],
      ["active_date", "flags.3?int"],
      ["source", "int"],
      ["volume", "flags.7?int"],
      ["about", "flags.11?string"],
      ["raise_hand_rating", "flags.13?long"],
      ["video", "flags.6?GroupCallParticipantVideo"],
      ["presentation", "flags.14?GroupCallParticipantVideo"],
    ],
    "GroupCallParticipant",
  ],
  "phone.groupCall": [
    0x9E727AAD,
    [
      ["call", "GroupCall"],
      ["participants", "Vector<GroupCallParticipant>"],
      ["participants_next_offset", "string"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "phone.GroupCall",
  ],
  "phone.groupParticipants": [
    0xF47751B6,
    [
      ["count", "int"],
      ["participants", "Vector<GroupCallParticipant>"],
      ["next_offset", "string"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["version", "int"],
    ],
    "phone.GroupParticipants",
  ],
  "inlineQueryPeerTypeSameBotPM": [
    0x3081ED9D,
    [],
    "InlineQueryPeerType",
  ],
  "inlineQueryPeerTypePM": [
    0x833C0FAC,
    [],
    "InlineQueryPeerType",
  ],
  "inlineQueryPeerTypeChat": [
    0xD766C50A,
    [],
    "InlineQueryPeerType",
  ],
  "inlineQueryPeerTypeMegagroup": [
    0x5EC4BE43,
    [],
    "InlineQueryPeerType",
  ],
  "inlineQueryPeerTypeBroadcast": [
    0x6334EE9A,
    [],
    "InlineQueryPeerType",
  ],
  "inlineQueryPeerTypeBotPM": [
    0x0E3B2D0C,
    [],
    "InlineQueryPeerType",
  ],
  "messages.historyImport": [
    0x1662AF0B,
    [
      ["id", "long"],
    ],
    "messages.HistoryImport",
  ],
  "messages.historyImportParsed": [
    0x5E0FB7B9,
    [
      ["flags", "#"],
      ["pm", "flags.0?true"],
      ["group", "flags.1?true"],
      ["title", "flags.2?string"],
    ],
    "messages.HistoryImportParsed",
  ],
  "messages.affectedFoundMessages": [
    0xEF8D3E6C,
    [
      ["pts", "int"],
      ["pts_count", "int"],
      ["offset", "int"],
      ["messages", "Vector<int>"],
    ],
    "messages.AffectedFoundMessages",
  ],
  "chatInviteImporter": [
    0x8C5ADFD9,
    [
      ["flags", "#"],
      ["requested", "flags.0?true"],
      ["via_chatlist", "flags.3?true"],
      ["user_id", "long"],
      ["date", "int"],
      ["about", "flags.2?string"],
      ["approved_by", "flags.1?long"],
    ],
    "ChatInviteImporter",
  ],
  "messages.exportedChatInvites": [
    0xBDC62DCC,
    [
      ["count", "int"],
      ["invites", "Vector<ExportedChatInvite>"],
      ["users", "Vector<User>"],
    ],
    "messages.ExportedChatInvites",
  ],
  "messages.exportedChatInvite": [
    0x1871BE50,
    [
      ["invite", "ExportedChatInvite"],
      ["users", "Vector<User>"],
    ],
    "messages.ExportedChatInvite",
  ],
  "messages.exportedChatInviteReplaced": [
    0x222600EF,
    [
      ["invite", "ExportedChatInvite"],
      ["new_invite", "ExportedChatInvite"],
      ["users", "Vector<User>"],
    ],
    "messages.ExportedChatInvite",
  ],
  "messages.chatInviteImporters": [
    0x81B6B00A,
    [
      ["count", "int"],
      ["importers", "Vector<ChatInviteImporter>"],
      ["users", "Vector<User>"],
    ],
    "messages.ChatInviteImporters",
  ],
  "chatAdminWithInvites": [
    0xF2ECEF23,
    [
      ["admin_id", "long"],
      ["invites_count", "int"],
      ["revoked_invites_count", "int"],
    ],
    "ChatAdminWithInvites",
  ],
  "messages.chatAdminsWithInvites": [
    0xB69B72D7,
    [
      ["admins", "Vector<ChatAdminWithInvites>"],
      ["users", "Vector<User>"],
    ],
    "messages.ChatAdminsWithInvites",
  ],
  "messages.checkedHistoryImportPeer": [
    0xA24DE717,
    [
      ["confirm_text", "string"],
    ],
    "messages.CheckedHistoryImportPeer",
  ],
  "phone.joinAsPeers": [
    0xAFE5623F,
    [
      ["peers", "Vector<Peer>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "phone.JoinAsPeers",
  ],
  "phone.exportedGroupCallInvite": [
    0x204BD158,
    [
      ["link", "string"],
    ],
    "phone.ExportedGroupCallInvite",
  ],
  "groupCallParticipantVideoSourceGroup": [
    0xDCB118B7,
    [
      ["semantics", "string"],
      ["sources", "Vector<int>"],
    ],
    "GroupCallParticipantVideoSourceGroup",
  ],
  "groupCallParticipantVideo": [
    0x67753AC8,
    [
      ["flags", "#"],
      ["paused", "flags.0?true"],
      ["endpoint", "string"],
      ["source_groups", "Vector<GroupCallParticipantVideoSourceGroup>"],
      ["audio_source", "flags.1?int"],
    ],
    "GroupCallParticipantVideo",
  ],
  "stickers.suggestedShortName": [
    0x85FEA03F,
    [
      ["short_name", "string"],
    ],
    "stickers.SuggestedShortName",
  ],
  "botCommandScopeDefault": [
    0x2F6CB2AB,
    [],
    "BotCommandScope",
  ],
  "botCommandScopeUsers": [
    0x3C4F04D8,
    [],
    "BotCommandScope",
  ],
  "botCommandScopeChats": [
    0x6FE1A881,
    [],
    "BotCommandScope",
  ],
  "botCommandScopeChatAdmins": [
    0xB9AA606A,
    [],
    "BotCommandScope",
  ],
  "botCommandScopePeer": [
    0xDB9D897D,
    [
      ["peer", "InputPeer"],
    ],
    "BotCommandScope",
  ],
  "botCommandScopePeerAdmins": [
    0x3FD863D1,
    [
      ["peer", "InputPeer"],
    ],
    "BotCommandScope",
  ],
  "botCommandScopePeerUser": [
    0x0A1321F3,
    [
      ["peer", "InputPeer"],
      ["user_id", "InputUser"],
    ],
    "BotCommandScope",
  ],
  "account.resetPasswordFailedWait": [
    0xE3779861,
    [
      ["retry_date", "int"],
    ],
    "account.ResetPasswordResult",
  ],
  "account.resetPasswordRequestedWait": [
    0xE9EFFC7D,
    [
      ["until_date", "int"],
    ],
    "account.ResetPasswordResult",
  ],
  "account.resetPasswordOk": [
    0xE926D63E,
    [],
    "account.ResetPasswordResult",
  ],
  "sponsoredMessage": [
    0x4D93A990,
    [
      ["flags", "#"],
      ["recommended", "flags.5?true"],
      ["can_report", "flags.12?true"],
      ["random_id", "bytes"],
      ["url", "string"],
      ["title", "string"],
      ["message", "string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["photo", "flags.6?Photo"],
      ["media", "flags.14?MessageMedia"],
      ["color", "flags.13?PeerColor"],
      ["button_text", "string"],
      ["sponsor_info", "flags.7?string"],
      ["additional_info", "flags.8?string"],
    ],
    "SponsoredMessage",
  ],
  "messages.sponsoredMessages": [
    0xC9EE1D87,
    [
      ["flags", "#"],
      ["posts_between", "flags.0?int"],
      ["messages", "Vector<SponsoredMessage>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.SponsoredMessages",
  ],
  "messages.sponsoredMessagesEmpty": [
    0x1839490F,
    [],
    "messages.SponsoredMessages",
  ],
  "searchResultsCalendarPeriod": [
    0xC9B0539F,
    [
      ["date", "int"],
      ["min_msg_id", "int"],
      ["max_msg_id", "int"],
      ["count", "int"],
    ],
    "SearchResultsCalendarPeriod",
  ],
  "messages.searchResultsCalendar": [
    0x147EE23C,
    [
      ["flags", "#"],
      ["inexact", "flags.0?true"],
      ["count", "int"],
      ["min_date", "int"],
      ["min_msg_id", "int"],
      ["offset_id_offset", "flags.1?int"],
      ["periods", "Vector<SearchResultsCalendarPeriod>"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.SearchResultsCalendar",
  ],
  "searchResultPosition": [
    0x7F648B67,
    [
      ["msg_id", "int"],
      ["date", "int"],
      ["offset", "int"],
    ],
    "SearchResultsPosition",
  ],
  "messages.searchResultsPositions": [
    0x53B22BAF,
    [
      ["count", "int"],
      ["positions", "Vector<SearchResultsPosition>"],
    ],
    "messages.SearchResultsPositions",
  ],
  "channels.sendAsPeers": [
    0xF496B0C6,
    [
      ["peers", "Vector<SendAsPeer>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "channels.SendAsPeers",
  ],
  "users.userFull": [
    0x3B6D152E,
    [
      ["full_user", "UserFull"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "users.UserFull",
  ],
  "messages.peerSettings": [
    0x6880B94D,
    [
      ["settings", "PeerSettings"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.PeerSettings",
  ],
  "auth.loggedOut": [
    0xC3A2835F,
    [
      ["flags", "#"],
      ["future_auth_token", "flags.0?bytes"],
    ],
    "auth.LoggedOut",
  ],
  "reactionCount": [
    0xA3D1CB80,
    [
      ["flags", "#"],
      ["chosen_order", "flags.0?int"],
      ["reaction", "Reaction"],
      ["count", "int"],
    ],
    "ReactionCount",
  ],
  "messageReactions": [
    0x0A339F0B,
    [
      ["flags", "#"],
      ["min", "flags.0?true"],
      ["can_see_list", "flags.2?true"],
      ["reactions_as_tags", "flags.3?true"],
      ["results", "Vector<ReactionCount>"],
      ["recent_reactions", "flags.1?Vector<MessagePeerReaction>"],
      ["top_reactors", "flags.4?Vector<MessageReactor>"],
    ],
    "MessageReactions",
  ],
  "messages.messageReactionsList": [
    0x31BD492D,
    [
      ["flags", "#"],
      ["count", "int"],
      ["reactions", "Vector<MessagePeerReaction>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["next_offset", "flags.0?string"],
    ],
    "messages.MessageReactionsList",
  ],
  "availableReaction": [
    0xC077EC01,
    [
      ["flags", "#"],
      ["inactive", "flags.0?true"],
      ["premium", "flags.2?true"],
      ["reaction", "string"],
      ["title", "string"],
      ["static_icon", "Document"],
      ["appear_animation", "Document"],
      ["select_animation", "Document"],
      ["activate_animation", "Document"],
      ["effect_animation", "Document"],
      ["around_animation", "flags.1?Document"],
      ["center_icon", "flags.1?Document"],
    ],
    "AvailableReaction",
  ],
  "messages.availableReactionsNotModified": [
    0x9F071957,
    [],
    "messages.AvailableReactions",
  ],
  "messages.availableReactions": [
    0x768E3AAD,
    [
      ["hash", "int"],
      ["reactions", "Vector<AvailableReaction>"],
    ],
    "messages.AvailableReactions",
  ],
  "messagePeerReaction": [
    0x8C79B63C,
    [
      ["flags", "#"],
      ["big", "flags.0?true"],
      ["unread", "flags.1?true"],
      ["my", "flags.2?true"],
      ["peer_id", "Peer"],
      ["date", "int"],
      ["reaction", "Reaction"],
    ],
    "MessagePeerReaction",
  ],
  "groupCallStreamChannel": [
    0x80EB48AF,
    [
      ["channel", "int"],
      ["scale", "int"],
      ["last_timestamp_ms", "long"],
    ],
    "GroupCallStreamChannel",
  ],
  "phone.groupCallStreamChannels": [
    0xD0E482B2,
    [
      ["channels", "Vector<GroupCallStreamChannel>"],
    ],
    "phone.GroupCallStreamChannels",
  ],
  "phone.groupCallStreamRtmpUrl": [
    0x2DBF3432,
    [
      ["url", "string"],
      ["key", "string"],
    ],
    "phone.GroupCallStreamRtmpUrl",
  ],
  "attachMenuBotIconColor": [
    0x4576F3F0,
    [
      ["name", "string"],
      ["color", "int"],
    ],
    "AttachMenuBotIconColor",
  ],
  "attachMenuBotIcon": [
    0xB2A7386B,
    [
      ["flags", "#"],
      ["name", "string"],
      ["icon", "Document"],
      ["colors", "flags.0?Vector<AttachMenuBotIconColor>"],
    ],
    "AttachMenuBotIcon",
  ],
  "attachMenuBot": [
    0xD90D8DFE,
    [
      ["flags", "#"],
      ["inactive", "flags.0?true"],
      ["has_settings", "flags.1?true"],
      ["request_write_access", "flags.2?true"],
      ["show_in_attach_menu", "flags.3?true"],
      ["show_in_side_menu", "flags.4?true"],
      ["side_menu_disclaimer_needed", "flags.5?true"],
      ["bot_id", "long"],
      ["short_name", "string"],
      ["peer_types", "flags.3?Vector<AttachMenuPeerType>"],
      ["icons", "Vector<AttachMenuBotIcon>"],
    ],
    "AttachMenuBot",
  ],
  "attachMenuBotsNotModified": [
    0xF1D88A5C,
    [],
    "AttachMenuBots",
  ],
  "attachMenuBots": [
    0x3C4301C0,
    [
      ["hash", "long"],
      ["bots", "Vector<AttachMenuBot>"],
      ["users", "Vector<User>"],
    ],
    "AttachMenuBots",
  ],
  "attachMenuBotsBot": [
    0x93BF667F,
    [
      ["bot", "AttachMenuBot"],
      ["users", "Vector<User>"],
    ],
    "AttachMenuBotsBot",
  ],
  "webViewResultUrl": [
    0x4D22FF98,
    [
      ["flags", "#"],
      ["fullsize", "flags.1?true"],
      ["fullscreen", "flags.2?true"],
      ["query_id", "flags.0?long"],
      ["url", "string"],
    ],
    "WebViewResult",
  ],
  "webViewMessageSent": [
    0x0C94511C,
    [
      ["flags", "#"],
      ["msg_id", "flags.0?InputBotInlineMessageID"],
    ],
    "WebViewMessageSent",
  ],
  "botMenuButtonDefault": [
    0x7533A588,
    [],
    "BotMenuButton",
  ],
  "botMenuButtonCommands": [
    0x4258C205,
    [],
    "BotMenuButton",
  ],
  "botMenuButton": [
    0xC7B57CE6,
    [
      ["text", "string"],
      ["url", "string"],
    ],
    "BotMenuButton",
  ],
  "account.savedRingtonesNotModified": [
    0xFBF6E8B1,
    [],
    "account.SavedRingtones",
  ],
  "account.savedRingtones": [
    0xC1E92CC5,
    [
      ["hash", "long"],
      ["ringtones", "Vector<Document>"],
    ],
    "account.SavedRingtones",
  ],
  "notificationSoundDefault": [
    0x97E8BEBE,
    [],
    "NotificationSound",
  ],
  "notificationSoundNone": [
    0x6F0C34DF,
    [],
    "NotificationSound",
  ],
  "notificationSoundLocal": [
    0x830B9AE4,
    [
      ["title", "string"],
      ["data", "string"],
    ],
    "NotificationSound",
  ],
  "notificationSoundRingtone": [
    0xFF6C8049,
    [
      ["id", "long"],
    ],
    "NotificationSound",
  ],
  "account.savedRingtone": [
    0xB7263F6D,
    [],
    "account.SavedRingtone",
  ],
  "account.savedRingtoneConverted": [
    0x1F307EB7,
    [
      ["document", "Document"],
    ],
    "account.SavedRingtone",
  ],
  "attachMenuPeerTypeSameBotPM": [
    0x7D6BE90E,
    [],
    "AttachMenuPeerType",
  ],
  "attachMenuPeerTypeBotPM": [
    0xC32BFA1A,
    [],
    "AttachMenuPeerType",
  ],
  "attachMenuPeerTypePM": [
    0xF146D31F,
    [],
    "AttachMenuPeerType",
  ],
  "attachMenuPeerTypeChat": [
    0x0509113F,
    [],
    "AttachMenuPeerType",
  ],
  "attachMenuPeerTypeBroadcast": [
    0x7BFBDEFC,
    [],
    "AttachMenuPeerType",
  ],
  "inputInvoiceMessage": [
    0xC5B56859,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "InputInvoice",
  ],
  "inputInvoiceSlug": [
    0xC326CAEF,
    [
      ["slug", "string"],
    ],
    "InputInvoice",
  ],
  "inputInvoicePremiumGiftCode": [
    0x98986C0D,
    [
      ["purpose", "InputStorePaymentPurpose"],
      ["option", "PremiumGiftCodeOption"],
    ],
    "InputInvoice",
  ],
  "inputInvoiceStars": [
    0x65F00CE3,
    [
      ["purpose", "InputStorePaymentPurpose"],
    ],
    "InputInvoice",
  ],
  "inputInvoiceChatInviteSubscription": [
    0x34E793F1,
    [
      ["hash", "string"],
    ],
    "InputInvoice",
  ],
  "inputInvoiceStarGift": [
    0xE8625E92,
    [
      ["flags", "#"],
      ["hide_name", "flags.0?true"],
      ["include_upgrade", "flags.2?true"],
      ["peer", "InputPeer"],
      ["gift_id", "long"],
      ["message", "flags.1?TextWithEntities"],
    ],
    "InputInvoice",
  ],
  "inputInvoiceStarGiftUpgrade": [
    0x4D818D5D,
    [
      ["flags", "#"],
      ["keep_original_details", "flags.0?true"],
      ["stargift", "InputSavedStarGift"],
    ],
    "InputInvoice",
  ],
  "inputInvoiceStarGiftTransfer": [
    0x4A5F5BD9,
    [
      ["stargift", "InputSavedStarGift"],
      ["to_id", "InputPeer"],
    ],
    "InputInvoice",
  ],
  "inputInvoicePremiumGiftStars": [
    0xDABAB2EF,
    [
      ["flags", "#"],
      ["user_id", "InputUser"],
      ["months", "int"],
      ["message", "flags.0?TextWithEntities"],
    ],
    "InputInvoice",
  ],
  "payments.exportedInvoice": [
    0xAED0CBD9,
    [
      ["url", "string"],
    ],
    "payments.ExportedInvoice",
  ],
  "messages.transcribedAudio": [
    0xCFB9D957,
    [
      ["flags", "#"],
      ["pending", "flags.0?true"],
      ["transcription_id", "long"],
      ["text", "string"],
      ["trial_remains_num", "flags.1?int"],
      ["trial_remains_until_date", "flags.1?int"],
    ],
    "messages.TranscribedAudio",
  ],
  "help.premiumPromo": [
    0x5334759C,
    [
      ["status_text", "string"],
      ["status_entities", "Vector<MessageEntity>"],
      ["video_sections", "Vector<string>"],
      ["videos", "Vector<Document>"],
      ["period_options", "Vector<PremiumSubscriptionOption>"],
      ["users", "Vector<User>"],
    ],
    "help.PremiumPromo",
  ],
  "inputStorePaymentPremiumSubscription": [
    0xA6751E66,
    [
      ["flags", "#"],
      ["restore", "flags.0?true"],
      ["upgrade", "flags.1?true"],
    ],
    "InputStorePaymentPurpose",
  ],
  "inputStorePaymentGiftPremium": [
    0x616F7FE8,
    [
      ["user_id", "InputUser"],
      ["currency", "string"],
      ["amount", "long"],
    ],
    "InputStorePaymentPurpose",
  ],
  "inputStorePaymentPremiumGiftCode": [
    0xFB790393,
    [
      ["flags", "#"],
      ["users", "Vector<InputUser>"],
      ["boost_peer", "flags.0?InputPeer"],
      ["currency", "string"],
      ["amount", "long"],
      ["message", "flags.1?TextWithEntities"],
    ],
    "InputStorePaymentPurpose",
  ],
  "inputStorePaymentPremiumGiveaway": [
    0x160544CA,
    [
      ["flags", "#"],
      ["only_new_subscribers", "flags.0?true"],
      ["winners_are_visible", "flags.3?true"],
      ["boost_peer", "InputPeer"],
      ["additional_peers", "flags.1?Vector<InputPeer>"],
      ["countries_iso2", "flags.2?Vector<string>"],
      ["prize_description", "flags.4?string"],
      ["random_id", "long"],
      ["until_date", "int"],
      ["currency", "string"],
      ["amount", "long"],
    ],
    "InputStorePaymentPurpose",
  ],
  "inputStorePaymentStarsTopup": [
    0xDDDD0F56,
    [
      ["stars", "long"],
      ["currency", "string"],
      ["amount", "long"],
    ],
    "InputStorePaymentPurpose",
  ],
  "inputStorePaymentStarsGift": [
    0x1D741EF7,
    [
      ["user_id", "InputUser"],
      ["stars", "long"],
      ["currency", "string"],
      ["amount", "long"],
    ],
    "InputStorePaymentPurpose",
  ],
  "inputStorePaymentStarsGiveaway": [
    0x751F08FA,
    [
      ["flags", "#"],
      ["only_new_subscribers", "flags.0?true"],
      ["winners_are_visible", "flags.3?true"],
      ["stars", "long"],
      ["boost_peer", "InputPeer"],
      ["additional_peers", "flags.1?Vector<InputPeer>"],
      ["countries_iso2", "flags.2?Vector<string>"],
      ["prize_description", "flags.4?string"],
      ["random_id", "long"],
      ["until_date", "int"],
      ["currency", "string"],
      ["amount", "long"],
      ["users", "int"],
    ],
    "InputStorePaymentPurpose",
  ],
  "paymentFormMethod": [
    0x88F8F21B,
    [
      ["url", "string"],
      ["title", "string"],
    ],
    "PaymentFormMethod",
  ],
  "emojiStatusEmpty": [
    0x2DE11AAE,
    [],
    "EmojiStatus",
  ],
  "emojiStatus": [
    0xE7FF068A,
    [
      ["flags", "#"],
      ["document_id", "long"],
      ["until", "flags.0?int"],
    ],
    "EmojiStatus",
  ],
  "emojiStatusCollectible": [
    0x7184603B,
    [
      ["flags", "#"],
      ["collectible_id", "long"],
      ["document_id", "long"],
      ["title", "string"],
      ["slug", "string"],
      ["pattern_document_id", "long"],
      ["center_color", "int"],
      ["edge_color", "int"],
      ["pattern_color", "int"],
      ["text_color", "int"],
      ["until", "flags.0?int"],
    ],
    "EmojiStatus",
  ],
  "inputEmojiStatusCollectible": [
    0x07141DBF,
    [
      ["flags", "#"],
      ["collectible_id", "long"],
      ["until", "flags.0?int"],
    ],
    "EmojiStatus",
  ],
  "account.emojiStatusesNotModified": [
    0xD08CE645,
    [],
    "account.EmojiStatuses",
  ],
  "account.emojiStatuses": [
    0x90C467D1,
    [
      ["hash", "long"],
      ["statuses", "Vector<EmojiStatus>"],
    ],
    "account.EmojiStatuses",
  ],
  "reactionEmpty": [
    0x79F5D419,
    [],
    "Reaction",
  ],
  "reactionEmoji": [
    0x1B2286B8,
    [
      ["emoticon", "string"],
    ],
    "Reaction",
  ],
  "reactionCustomEmoji": [
    0x8935FC73,
    [
      ["document_id", "long"],
    ],
    "Reaction",
  ],
  "reactionPaid": [
    0x523DA4EB,
    [],
    "Reaction",
  ],
  "chatReactionsNone": [
    0xEAFC32BC,
    [],
    "ChatReactions",
  ],
  "chatReactionsAll": [
    0x52928BCA,
    [
      ["flags", "#"],
      ["allow_custom", "flags.0?true"],
    ],
    "ChatReactions",
  ],
  "chatReactionsSome": [
    0x661D4037,
    [
      ["reactions", "Vector<Reaction>"],
    ],
    "ChatReactions",
  ],
  "messages.reactionsNotModified": [
    0xB06FDBDF,
    [],
    "messages.Reactions",
  ],
  "messages.reactions": [
    0xEAFDF716,
    [
      ["hash", "long"],
      ["reactions", "Vector<Reaction>"],
    ],
    "messages.Reactions",
  ],
  "emailVerifyPurposeLoginSetup": [
    0x4345BE73,
    [
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
    ],
    "EmailVerifyPurpose",
  ],
  "emailVerifyPurposeLoginChange": [
    0x527D22EB,
    [],
    "EmailVerifyPurpose",
  ],
  "emailVerifyPurposePassport": [
    0xBBF51685,
    [],
    "EmailVerifyPurpose",
  ],
  "emailVerificationCode": [
    0x922E55A9,
    [
      ["code", "string"],
    ],
    "EmailVerification",
  ],
  "emailVerificationGoogle": [
    0xDB909EC2,
    [
      ["token", "string"],
    ],
    "EmailVerification",
  ],
  "emailVerificationApple": [
    0x96D074FD,
    [
      ["token", "string"],
    ],
    "EmailVerification",
  ],
  "account.emailVerified": [
    0x2B96CD1B,
    [
      ["email", "string"],
    ],
    "account.EmailVerified",
  ],
  "account.emailVerifiedLogin": [
    0xE1BB0D61,
    [
      ["email", "string"],
      ["sent_code", "auth.SentCode"],
    ],
    "account.EmailVerified",
  ],
  "premiumSubscriptionOption": [
    0x5F2D1DF2,
    [
      ["flags", "#"],
      ["current", "flags.1?true"],
      ["can_purchase_upgrade", "flags.2?true"],
      ["transaction", "flags.3?string"],
      ["months", "int"],
      ["currency", "string"],
      ["amount", "long"],
      ["bot_url", "string"],
      ["store_product", "flags.0?string"],
    ],
    "PremiumSubscriptionOption",
  ],
  "sendAsPeer": [
    0xB81C7034,
    [
      ["flags", "#"],
      ["premium_required", "flags.0?true"],
      ["peer", "Peer"],
    ],
    "SendAsPeer",
  ],
  "messageExtendedMediaPreview": [
    0xAD628CC8,
    [
      ["flags", "#"],
      ["w", "flags.0?int"],
      ["h", "flags.0?int"],
      ["thumb", "flags.1?PhotoSize"],
      ["video_duration", "flags.2?int"],
    ],
    "MessageExtendedMedia",
  ],
  "messageExtendedMedia": [
    0xEE479C64,
    [
      ["media", "MessageMedia"],
    ],
    "MessageExtendedMedia",
  ],
  "stickerKeyword": [
    0xFCFEB29C,
    [
      ["document_id", "long"],
      ["keyword", "Vector<string>"],
    ],
    "StickerKeyword",
  ],
  "username": [
    0xB4073647,
    [
      ["flags", "#"],
      ["editable", "flags.0?true"],
      ["active", "flags.1?true"],
      ["username", "string"],
    ],
    "Username",
  ],
  "forumTopicDeleted": [
    0x023F109B,
    [
      ["id", "int"],
    ],
    "ForumTopic",
  ],
  "forumTopic": [
    0x71701DA9,
    [
      ["flags", "#"],
      ["my", "flags.1?true"],
      ["closed", "flags.2?true"],
      ["pinned", "flags.3?true"],
      ["short", "flags.5?true"],
      ["hidden", "flags.6?true"],
      ["id", "int"],
      ["date", "int"],
      ["title", "string"],
      ["icon_color", "int"],
      ["icon_emoji_id", "flags.0?long"],
      ["top_message", "int"],
      ["read_inbox_max_id", "int"],
      ["read_outbox_max_id", "int"],
      ["unread_count", "int"],
      ["unread_mentions_count", "int"],
      ["unread_reactions_count", "int"],
      ["from_id", "Peer"],
      ["notify_settings", "PeerNotifySettings"],
      ["draft", "flags.4?DraftMessage"],
    ],
    "ForumTopic",
  ],
  "messages.forumTopics": [
    0x367617D3,
    [
      ["flags", "#"],
      ["order_by_create_date", "flags.0?true"],
      ["count", "int"],
      ["topics", "Vector<ForumTopic>"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["pts", "int"],
    ],
    "messages.ForumTopics",
  ],
  "defaultHistoryTTL": [
    0x43B46B20,
    [
      ["period", "int"],
    ],
    "DefaultHistoryTTL",
  ],
  "exportedContactToken": [
    0x41BF109B,
    [
      ["url", "string"],
      ["expires", "int"],
    ],
    "ExportedContactToken",
  ],
  "requestPeerTypeUser": [
    0x5F3B8A00,
    [
      ["flags", "#"],
      ["bot", "flags.0?Bool"],
      ["premium", "flags.1?Bool"],
    ],
    "RequestPeerType",
  ],
  "requestPeerTypeChat": [
    0xC9F06E1B,
    [
      ["flags", "#"],
      ["creator", "flags.0?true"],
      ["bot_participant", "flags.5?true"],
      ["has_username", "flags.3?Bool"],
      ["forum", "flags.4?Bool"],
      ["user_admin_rights", "flags.1?ChatAdminRights"],
      ["bot_admin_rights", "flags.2?ChatAdminRights"],
    ],
    "RequestPeerType",
  ],
  "requestPeerTypeBroadcast": [
    0x339BEF6C,
    [
      ["flags", "#"],
      ["creator", "flags.0?true"],
      ["has_username", "flags.3?Bool"],
      ["user_admin_rights", "flags.1?ChatAdminRights"],
      ["bot_admin_rights", "flags.2?ChatAdminRights"],
    ],
    "RequestPeerType",
  ],
  "emojiListNotModified": [
    0x481EADFA,
    [],
    "EmojiList",
  ],
  "emojiList": [
    0x7A1E11D1,
    [
      ["hash", "long"],
      ["document_id", "Vector<long>"],
    ],
    "EmojiList",
  ],
  "emojiGroup": [
    0x7A9ABDA9,
    [
      ["title", "string"],
      ["icon_emoji_id", "long"],
      ["emoticons", "Vector<string>"],
    ],
    "EmojiGroup",
  ],
  "emojiGroupGreeting": [
    0x80D26CC7,
    [
      ["title", "string"],
      ["icon_emoji_id", "long"],
      ["emoticons", "Vector<string>"],
    ],
    "EmojiGroup",
  ],
  "emojiGroupPremium": [
    0x093BCF34,
    [
      ["title", "string"],
      ["icon_emoji_id", "long"],
    ],
    "EmojiGroup",
  ],
  "messages.emojiGroupsNotModified": [
    0x6FB4AD87,
    [],
    "messages.EmojiGroups",
  ],
  "messages.emojiGroups": [
    0x881FB94B,
    [
      ["hash", "int"],
      ["groups", "Vector<EmojiGroup>"],
    ],
    "messages.EmojiGroups",
  ],
  "textWithEntities": [
    0x751F3146,
    [
      ["text", "string"],
      ["entities", "Vector<MessageEntity>"],
    ],
    "TextWithEntities",
  ],
  "messages.translateResult": [
    0x33DB32F8,
    [
      ["result", "Vector<TextWithEntities>"],
    ],
    "messages.TranslatedText",
  ],
  "autoSaveSettings": [
    0xC84834CE,
    [
      ["flags", "#"],
      ["photos", "flags.0?true"],
      ["videos", "flags.1?true"],
      ["video_max_size", "flags.2?long"],
    ],
    "AutoSaveSettings",
  ],
  "autoSaveException": [
    0x81602D47,
    [
      ["peer", "Peer"],
      ["settings", "AutoSaveSettings"],
    ],
    "AutoSaveException",
  ],
  "account.autoSaveSettings": [
    0x4C3E069D,
    [
      ["users_settings", "AutoSaveSettings"],
      ["chats_settings", "AutoSaveSettings"],
      ["broadcasts_settings", "AutoSaveSettings"],
      ["exceptions", "Vector<AutoSaveException>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "account.AutoSaveSettings",
  ],
  "help.appConfigNotModified": [
    0x7CDE641D,
    [],
    "help.AppConfig",
  ],
  "help.appConfig": [
    0xDD18782E,
    [
      ["hash", "int"],
      ["config", "JSONValue"],
    ],
    "help.AppConfig",
  ],
  "inputBotAppID": [
    0xA920BD7A,
    [
      ["id", "long"],
      ["access_hash", "long"],
    ],
    "InputBotApp",
  ],
  "inputBotAppShortName": [
    0x908C0407,
    [
      ["bot_id", "InputUser"],
      ["short_name", "string"],
    ],
    "InputBotApp",
  ],
  "botAppNotModified": [
    0x5DA674B7,
    [],
    "BotApp",
  ],
  "botApp": [
    0x95FCD1D6,
    [
      ["flags", "#"],
      ["id", "long"],
      ["access_hash", "long"],
      ["short_name", "string"],
      ["title", "string"],
      ["description", "string"],
      ["photo", "Photo"],
      ["document", "flags.0?Document"],
      ["hash", "long"],
    ],
    "BotApp",
  ],
  "messages.botApp": [
    0xEB50ADF5,
    [
      ["flags", "#"],
      ["inactive", "flags.0?true"],
      ["request_write_access", "flags.1?true"],
      ["has_settings", "flags.2?true"],
      ["app", "BotApp"],
    ],
    "messages.BotApp",
  ],
  "inlineBotWebView": [
    0xB57295D5,
    [
      ["text", "string"],
      ["url", "string"],
    ],
    "InlineBotWebView",
  ],
  "readParticipantDate": [
    0x4A4FF172,
    [
      ["user_id", "long"],
      ["date", "int"],
    ],
    "ReadParticipantDate",
  ],
  "inputChatlistDialogFilter": [
    0xF3E0DA33,
    [
      ["filter_id", "int"],
    ],
    "InputChatlist",
  ],
  "exportedChatlistInvite": [
    0x0C5181AC,
    [
      ["flags", "#"],
      ["title", "string"],
      ["url", "string"],
      ["peers", "Vector<Peer>"],
    ],
    "ExportedChatlistInvite",
  ],
  "chatlists.exportedChatlistInvite": [
    0x10E6E3A6,
    [
      ["filter", "DialogFilter"],
      ["invite", "ExportedChatlistInvite"],
    ],
    "chatlists.ExportedChatlistInvite",
  ],
  "chatlists.exportedInvites": [
    0x10AB6DC7,
    [
      ["invites", "Vector<ExportedChatlistInvite>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "chatlists.ExportedInvites",
  ],
  "chatlists.chatlistInviteAlready": [
    0xFA87F659,
    [
      ["filter_id", "int"],
      ["missing_peers", "Vector<Peer>"],
      ["already_peers", "Vector<Peer>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "chatlists.ChatlistInvite",
  ],
  "chatlists.chatlistInvite": [
    0xF10ECE2F,
    [
      ["flags", "#"],
      ["title_noanimate", "flags.1?true"],
      ["title", "TextWithEntities"],
      ["emoticon", "flags.0?string"],
      ["peers", "Vector<Peer>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "chatlists.ChatlistInvite",
  ],
  "chatlists.chatlistUpdates": [
    0x93BD878D,
    [
      ["missing_peers", "Vector<Peer>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "chatlists.ChatlistUpdates",
  ],
  "bots.botInfo": [
    0xE8A775B0,
    [
      ["name", "string"],
      ["about", "string"],
      ["description", "string"],
    ],
    "bots.BotInfo",
  ],
  "messagePeerVote": [
    0xB6CC2D5C,
    [
      ["peer", "Peer"],
      ["option", "bytes"],
      ["date", "int"],
    ],
    "MessagePeerVote",
  ],
  "messagePeerVoteInputOption": [
    0x74CDA504,
    [
      ["peer", "Peer"],
      ["date", "int"],
    ],
    "MessagePeerVote",
  ],
  "messagePeerVoteMultiple": [
    0x4628F6E6,
    [
      ["peer", "Peer"],
      ["options", "Vector<bytes>"],
      ["date", "int"],
    ],
    "MessagePeerVote",
  ],
  "storyViews": [
    0x8D595CD6,
    [
      ["flags", "#"],
      ["has_viewers", "flags.1?true"],
      ["views_count", "int"],
      ["forwards_count", "flags.2?int"],
      ["reactions", "flags.3?Vector<ReactionCount>"],
      ["reactions_count", "flags.4?int"],
      ["recent_viewers", "flags.0?Vector<long>"],
    ],
    "StoryViews",
  ],
  "storyItemDeleted": [
    0x51E6EE4F,
    [
      ["id", "int"],
    ],
    "StoryItem",
  ],
  "storyItemSkipped": [
    0xFFADC913,
    [
      ["flags", "#"],
      ["close_friends", "flags.8?true"],
      ["id", "int"],
      ["date", "int"],
      ["expire_date", "int"],
    ],
    "StoryItem",
  ],
  "storyItem": [
    0x79B26A24,
    [
      ["flags", "#"],
      ["pinned", "flags.5?true"],
      ["public", "flags.7?true"],
      ["close_friends", "flags.8?true"],
      ["min", "flags.9?true"],
      ["noforwards", "flags.10?true"],
      ["edited", "flags.11?true"],
      ["contacts", "flags.12?true"],
      ["selected_contacts", "flags.13?true"],
      ["out", "flags.16?true"],
      ["id", "int"],
      ["date", "int"],
      ["from_id", "flags.18?Peer"],
      ["fwd_from", "flags.17?StoryFwdHeader"],
      ["expire_date", "int"],
      ["caption", "flags.0?string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["media", "MessageMedia"],
      ["media_areas", "flags.14?Vector<MediaArea>"],
      ["privacy", "flags.2?Vector<PrivacyRule>"],
      ["views", "flags.3?StoryViews"],
      ["sent_reaction", "flags.15?Reaction"],
    ],
    "StoryItem",
  ],
  "stories.allStoriesNotModified": [
    0x1158FE3E,
    [
      ["flags", "#"],
      ["state", "string"],
      ["stealth_mode", "StoriesStealthMode"],
    ],
    "stories.AllStories",
  ],
  "stories.allStories": [
    0x6EFC5E81,
    [
      ["flags", "#"],
      ["has_more", "flags.0?true"],
      ["count", "int"],
      ["state", "string"],
      ["peer_stories", "Vector<PeerStories>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["stealth_mode", "StoriesStealthMode"],
    ],
    "stories.AllStories",
  ],
  "stories.stories": [
    0x63C3DD0A,
    [
      ["flags", "#"],
      ["count", "int"],
      ["stories", "Vector<StoryItem>"],
      ["pinned_to_top", "flags.0?Vector<int>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "stories.Stories",
  ],
  "storyView": [
    0xB0BDEAC5,
    [
      ["flags", "#"],
      ["blocked", "flags.0?true"],
      ["blocked_my_stories_from", "flags.1?true"],
      ["user_id", "long"],
      ["date", "int"],
      ["reaction", "flags.2?Reaction"],
    ],
    "StoryView",
  ],
  "storyViewPublicForward": [
    0x9083670B,
    [
      ["flags", "#"],
      ["blocked", "flags.0?true"],
      ["blocked_my_stories_from", "flags.1?true"],
      ["message", "Message"],
    ],
    "StoryView",
  ],
  "storyViewPublicRepost": [
    0xBD74CF49,
    [
      ["flags", "#"],
      ["blocked", "flags.0?true"],
      ["blocked_my_stories_from", "flags.1?true"],
      ["peer_id", "Peer"],
      ["story", "StoryItem"],
    ],
    "StoryView",
  ],
  "stories.storyViewsList": [
    0x59D78FC5,
    [
      ["flags", "#"],
      ["count", "int"],
      ["views_count", "int"],
      ["forwards_count", "int"],
      ["reactions_count", "int"],
      ["views", "Vector<StoryView>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["next_offset", "flags.0?string"],
    ],
    "stories.StoryViewsList",
  ],
  "stories.storyViews": [
    0xDE9EED1D,
    [
      ["views", "Vector<StoryViews>"],
      ["users", "Vector<User>"],
    ],
    "stories.StoryViews",
  ],
  "inputReplyToMessage": [
    0x22C0F6D5,
    [
      ["flags", "#"],
      ["reply_to_msg_id", "int"],
      ["top_msg_id", "flags.0?int"],
      ["reply_to_peer_id", "flags.1?InputPeer"],
      ["quote_text", "flags.2?string"],
      ["quote_entities", "flags.3?Vector<MessageEntity>"],
      ["quote_offset", "flags.4?int"],
    ],
    "InputReplyTo",
  ],
  "inputReplyToStory": [
    0x5881323A,
    [
      ["peer", "InputPeer"],
      ["story_id", "int"],
    ],
    "InputReplyTo",
  ],
  "exportedStoryLink": [
    0x3FC9053B,
    [
      ["link", "string"],
    ],
    "ExportedStoryLink",
  ],
  "storiesStealthMode": [
    0x712E27FD,
    [
      ["flags", "#"],
      ["active_until_date", "flags.0?int"],
      ["cooldown_until_date", "flags.1?int"],
    ],
    "StoriesStealthMode",
  ],
  "mediaAreaCoordinates": [
    0xCFC9E002,
    [
      ["flags", "#"],
      ["x", "double"],
      ["y", "double"],
      ["w", "double"],
      ["h", "double"],
      ["rotation", "double"],
      ["radius", "flags.0?double"],
    ],
    "MediaAreaCoordinates",
  ],
  "mediaAreaVenue": [
    0xBE82DB9C,
    [
      ["coordinates", "MediaAreaCoordinates"],
      ["geo", "GeoPoint"],
      ["title", "string"],
      ["address", "string"],
      ["provider", "string"],
      ["venue_id", "string"],
      ["venue_type", "string"],
    ],
    "MediaArea",
  ],
  "inputMediaAreaVenue": [
    0xB282217F,
    [
      ["coordinates", "MediaAreaCoordinates"],
      ["query_id", "long"],
      ["result_id", "string"],
    ],
    "MediaArea",
  ],
  "mediaAreaGeoPoint": [
    0xCAD5452D,
    [
      ["flags", "#"],
      ["coordinates", "MediaAreaCoordinates"],
      ["geo", "GeoPoint"],
      ["address", "flags.0?GeoPointAddress"],
    ],
    "MediaArea",
  ],
  "mediaAreaSuggestedReaction": [
    0x14455871,
    [
      ["flags", "#"],
      ["dark", "flags.0?true"],
      ["flipped", "flags.1?true"],
      ["coordinates", "MediaAreaCoordinates"],
      ["reaction", "Reaction"],
    ],
    "MediaArea",
  ],
  "mediaAreaChannelPost": [
    0x770416AF,
    [
      ["coordinates", "MediaAreaCoordinates"],
      ["channel_id", "long"],
      ["msg_id", "int"],
    ],
    "MediaArea",
  ],
  "inputMediaAreaChannelPost": [
    0x2271F2BF,
    [
      ["coordinates", "MediaAreaCoordinates"],
      ["channel", "InputChannel"],
      ["msg_id", "int"],
    ],
    "MediaArea",
  ],
  "mediaAreaUrl": [
    0x37381085,
    [
      ["coordinates", "MediaAreaCoordinates"],
      ["url", "string"],
    ],
    "MediaArea",
  ],
  "mediaAreaWeather": [
    0x49A6549C,
    [
      ["coordinates", "MediaAreaCoordinates"],
      ["emoji", "string"],
      ["temperature_c", "double"],
      ["color", "int"],
    ],
    "MediaArea",
  ],
  "mediaAreaStarGift": [
    0x5787686D,
    [
      ["coordinates", "MediaAreaCoordinates"],
      ["slug", "string"],
    ],
    "MediaArea",
  ],
  "peerStories": [
    0x9A35E999,
    [
      ["flags", "#"],
      ["peer", "Peer"],
      ["max_read_id", "flags.0?int"],
      ["stories", "Vector<StoryItem>"],
    ],
    "PeerStories",
  ],
  "stories.peerStories": [
    0xCAE68768,
    [
      ["stories", "PeerStories"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "stories.PeerStories",
  ],
  "messages.webPage": [
    0xFD5E12BD,
    [
      ["webpage", "WebPage"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.WebPage",
  ],
  "premiumGiftCodeOption": [
    0x257E962B,
    [
      ["flags", "#"],
      ["users", "int"],
      ["months", "int"],
      ["store_product", "flags.0?string"],
      ["store_quantity", "flags.1?int"],
      ["currency", "string"],
      ["amount", "long"],
    ],
    "PremiumGiftCodeOption",
  ],
  "payments.checkedGiftCode": [
    0x284A1096,
    [
      ["flags", "#"],
      ["via_giveaway", "flags.2?true"],
      ["from_id", "flags.4?Peer"],
      ["giveaway_msg_id", "flags.3?int"],
      ["to_id", "flags.0?long"],
      ["date", "int"],
      ["months", "int"],
      ["used_date", "flags.1?int"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "payments.CheckedGiftCode",
  ],
  "payments.giveawayInfo": [
    0x4367DAA0,
    [
      ["flags", "#"],
      ["participating", "flags.0?true"],
      ["preparing_results", "flags.3?true"],
      ["start_date", "int"],
      ["joined_too_early_date", "flags.1?int"],
      ["admin_disallowed_chat_id", "flags.2?long"],
      ["disallowed_country", "flags.4?string"],
    ],
    "payments.GiveawayInfo",
  ],
  "payments.giveawayInfoResults": [
    0xE175E66F,
    [
      ["flags", "#"],
      ["winner", "flags.0?true"],
      ["refunded", "flags.1?true"],
      ["start_date", "int"],
      ["gift_code_slug", "flags.3?string"],
      ["stars_prize", "flags.4?long"],
      ["finish_date", "int"],
      ["winners_count", "int"],
      ["activated_count", "flags.2?int"],
    ],
    "payments.GiveawayInfo",
  ],
  "prepaidGiveaway": [
    0xB2539D54,
    [
      ["id", "long"],
      ["months", "int"],
      ["quantity", "int"],
      ["date", "int"],
    ],
    "PrepaidGiveaway",
  ],
  "prepaidStarsGiveaway": [
    0x9A9D77E0,
    [
      ["id", "long"],
      ["stars", "long"],
      ["quantity", "int"],
      ["boosts", "int"],
      ["date", "int"],
    ],
    "PrepaidGiveaway",
  ],
  "boost": [
    0x4B3E14D6,
    [
      ["flags", "#"],
      ["gift", "flags.1?true"],
      ["giveaway", "flags.2?true"],
      ["unclaimed", "flags.3?true"],
      ["id", "string"],
      ["user_id", "flags.0?long"],
      ["giveaway_msg_id", "flags.2?int"],
      ["date", "int"],
      ["expires", "int"],
      ["used_gift_slug", "flags.4?string"],
      ["multiplier", "flags.5?int"],
      ["stars", "flags.6?long"],
    ],
    "Boost",
  ],
  "premium.boostsList": [
    0x86F8613C,
    [
      ["flags", "#"],
      ["count", "int"],
      ["boosts", "Vector<Boost>"],
      ["next_offset", "flags.0?string"],
      ["users", "Vector<User>"],
    ],
    "premium.BoostsList",
  ],
  "myBoost": [
    0xC448415C,
    [
      ["flags", "#"],
      ["slot", "int"],
      ["peer", "flags.0?Peer"],
      ["date", "int"],
      ["expires", "int"],
      ["cooldown_until_date", "flags.1?int"],
    ],
    "MyBoost",
  ],
  "premium.myBoosts": [
    0x9AE228E2,
    [
      ["my_boosts", "Vector<MyBoost>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "premium.MyBoosts",
  ],
  "premium.boostsStatus": [
    0x4959427A,
    [
      ["flags", "#"],
      ["my_boost", "flags.2?true"],
      ["level", "int"],
      ["current_level_boosts", "int"],
      ["boosts", "int"],
      ["gift_boosts", "flags.4?int"],
      ["next_level_boosts", "flags.0?int"],
      ["premium_audience", "flags.1?StatsPercentValue"],
      ["boost_url", "string"],
      ["prepaid_giveaways", "flags.3?Vector<PrepaidGiveaway>"],
      ["my_boost_slots", "flags.2?Vector<int>"],
    ],
    "premium.BoostsStatus",
  ],
  "storyFwdHeader": [
    0xB826E150,
    [
      ["flags", "#"],
      ["modified", "flags.3?true"],
      ["from", "flags.0?Peer"],
      ["from_name", "flags.1?string"],
      ["story_id", "flags.2?int"],
    ],
    "StoryFwdHeader",
  ],
  "postInteractionCountersMessage": [
    0xE7058E7F,
    [
      ["msg_id", "int"],
      ["views", "int"],
      ["forwards", "int"],
      ["reactions", "int"],
    ],
    "PostInteractionCounters",
  ],
  "postInteractionCountersStory": [
    0x8A480E27,
    [
      ["story_id", "int"],
      ["views", "int"],
      ["forwards", "int"],
      ["reactions", "int"],
    ],
    "PostInteractionCounters",
  ],
  "stats.storyStats": [
    0x50CD067C,
    [
      ["views_graph", "StatsGraph"],
      ["reactions_by_emotion_graph", "StatsGraph"],
    ],
    "stats.StoryStats",
  ],
  "publicForwardMessage": [
    0x01F2BF4A,
    [
      ["message", "Message"],
    ],
    "PublicForward",
  ],
  "publicForwardStory": [
    0xEDF3ADD0,
    [
      ["peer", "Peer"],
      ["story", "StoryItem"],
    ],
    "PublicForward",
  ],
  "stats.publicForwards": [
    0x93037E20,
    [
      ["flags", "#"],
      ["count", "int"],
      ["forwards", "Vector<PublicForward>"],
      ["next_offset", "flags.0?string"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "stats.PublicForwards",
  ],
  "peerColor": [
    0xB54B5ACF,
    [
      ["flags", "#"],
      ["color", "flags.0?int"],
      ["background_emoji_id", "flags.1?long"],
    ],
    "PeerColor",
  ],
  "help.peerColorSet": [
    0x26219A58,
    [
      ["colors", "Vector<int>"],
    ],
    "help.PeerColorSet",
  ],
  "help.peerColorProfileSet": [
    0x767D61EB,
    [
      ["palette_colors", "Vector<int>"],
      ["bg_colors", "Vector<int>"],
      ["story_colors", "Vector<int>"],
    ],
    "help.PeerColorSet",
  ],
  "help.peerColorOption": [
    0xADEC6EBE,
    [
      ["flags", "#"],
      ["hidden", "flags.0?true"],
      ["color_id", "int"],
      ["colors", "flags.1?help.PeerColorSet"],
      ["dark_colors", "flags.2?help.PeerColorSet"],
      ["channel_min_level", "flags.3?int"],
      ["group_min_level", "flags.4?int"],
    ],
    "help.PeerColorOption",
  ],
  "help.peerColorsNotModified": [
    0x2BA1F5CE,
    [],
    "help.PeerColors",
  ],
  "help.peerColors": [
    0x00F8ED08,
    [
      ["hash", "int"],
      ["colors", "Vector<help.PeerColorOption>"],
    ],
    "help.PeerColors",
  ],
  "storyReaction": [
    0x6090D6D5,
    [
      ["peer_id", "Peer"],
      ["date", "int"],
      ["reaction", "Reaction"],
    ],
    "StoryReaction",
  ],
  "storyReactionPublicForward": [
    0xBBAB2643,
    [
      ["message", "Message"],
    ],
    "StoryReaction",
  ],
  "storyReactionPublicRepost": [
    0xCFCD0F13,
    [
      ["peer_id", "Peer"],
      ["story", "StoryItem"],
    ],
    "StoryReaction",
  ],
  "stories.storyReactionsList": [
    0xAA5F789C,
    [
      ["flags", "#"],
      ["count", "int"],
      ["reactions", "Vector<StoryReaction>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
      ["next_offset", "flags.0?string"],
    ],
    "stories.StoryReactionsList",
  ],
  "savedDialog": [
    0xBD87CB6C,
    [
      ["flags", "#"],
      ["pinned", "flags.2?true"],
      ["peer", "Peer"],
      ["top_message", "int"],
    ],
    "SavedDialog",
  ],
  "messages.savedDialogs": [
    0xF83AE221,
    [
      ["dialogs", "Vector<SavedDialog>"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.SavedDialogs",
  ],
  "messages.savedDialogsSlice": [
    0x44BA9DD9,
    [
      ["count", "int"],
      ["dialogs", "Vector<SavedDialog>"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.SavedDialogs",
  ],
  "messages.savedDialogsNotModified": [
    0xC01F6FE8,
    [
      ["count", "int"],
    ],
    "messages.SavedDialogs",
  ],
  "savedReactionTag": [
    0xCB6FF828,
    [
      ["flags", "#"],
      ["reaction", "Reaction"],
      ["title", "flags.0?string"],
      ["count", "int"],
    ],
    "SavedReactionTag",
  ],
  "messages.savedReactionTagsNotModified": [
    0x889B59EF,
    [],
    "messages.SavedReactionTags",
  ],
  "messages.savedReactionTags": [
    0x3259950A,
    [
      ["tags", "Vector<SavedReactionTag>"],
      ["hash", "long"],
    ],
    "messages.SavedReactionTags",
  ],
  "outboxReadDate": [
    0x3BB842AC,
    [
      ["date", "int"],
    ],
    "OutboxReadDate",
  ],
  "smsjobs.eligibleToJoin": [
    0xDC8B44CF,
    [
      ["terms_url", "string"],
      ["monthly_sent_sms", "int"],
    ],
    "smsjobs.EligibilityToJoin",
  ],
  "smsjobs.status": [
    0x2AEE9191,
    [
      ["flags", "#"],
      ["allow_international", "flags.0?true"],
      ["recent_sent", "int"],
      ["recent_since", "int"],
      ["recent_remains", "int"],
      ["total_sent", "int"],
      ["total_since", "int"],
      ["last_gift_slug", "flags.1?string"],
      ["terms_url", "string"],
    ],
    "smsjobs.Status",
  ],
  "smsJob": [
    0xE6A1EEB8,
    [
      ["job_id", "string"],
      ["phone_number", "string"],
      ["text", "string"],
    ],
    "SmsJob",
  ],
  "businessWeeklyOpen": [
    0x120B1AB9,
    [
      ["start_minute", "int"],
      ["end_minute", "int"],
    ],
    "BusinessWeeklyOpen",
  ],
  "businessWorkHours": [
    0x8C92B098,
    [
      ["flags", "#"],
      ["open_now", "flags.0?true"],
      ["timezone_id", "string"],
      ["weekly_open", "Vector<BusinessWeeklyOpen>"],
    ],
    "BusinessWorkHours",
  ],
  "businessLocation": [
    0xAC5C1AF7,
    [
      ["flags", "#"],
      ["geo_point", "flags.0?GeoPoint"],
      ["address", "string"],
    ],
    "BusinessLocation",
  ],
  "inputBusinessRecipients": [
    0x6F8B32AA,
    [
      ["flags", "#"],
      ["existing_chats", "flags.0?true"],
      ["new_chats", "flags.1?true"],
      ["contacts", "flags.2?true"],
      ["non_contacts", "flags.3?true"],
      ["exclude_selected", "flags.5?true"],
      ["users", "flags.4?Vector<InputUser>"],
    ],
    "InputBusinessRecipients",
  ],
  "businessRecipients": [
    0x21108FF7,
    [
      ["flags", "#"],
      ["existing_chats", "flags.0?true"],
      ["new_chats", "flags.1?true"],
      ["contacts", "flags.2?true"],
      ["non_contacts", "flags.3?true"],
      ["exclude_selected", "flags.5?true"],
      ["users", "flags.4?Vector<long>"],
    ],
    "BusinessRecipients",
  ],
  "businessAwayMessageScheduleAlways": [
    0xC9B9E2B9,
    [],
    "BusinessAwayMessageSchedule",
  ],
  "businessAwayMessageScheduleOutsideWorkHours": [
    0xC3F2F501,
    [],
    "BusinessAwayMessageSchedule",
  ],
  "businessAwayMessageScheduleCustom": [
    0xCC4D9ECC,
    [
      ["start_date", "int"],
      ["end_date", "int"],
    ],
    "BusinessAwayMessageSchedule",
  ],
  "inputBusinessGreetingMessage": [
    0x0194CB3B,
    [
      ["shortcut_id", "int"],
      ["recipients", "InputBusinessRecipients"],
      ["no_activity_days", "int"],
    ],
    "InputBusinessGreetingMessage",
  ],
  "businessGreetingMessage": [
    0xE519ABAB,
    [
      ["shortcut_id", "int"],
      ["recipients", "BusinessRecipients"],
      ["no_activity_days", "int"],
    ],
    "BusinessGreetingMessage",
  ],
  "inputBusinessAwayMessage": [
    0x832175E0,
    [
      ["flags", "#"],
      ["offline_only", "flags.0?true"],
      ["shortcut_id", "int"],
      ["schedule", "BusinessAwayMessageSchedule"],
      ["recipients", "InputBusinessRecipients"],
    ],
    "InputBusinessAwayMessage",
  ],
  "businessAwayMessage": [
    0xEF156A5C,
    [
      ["flags", "#"],
      ["offline_only", "flags.0?true"],
      ["shortcut_id", "int"],
      ["schedule", "BusinessAwayMessageSchedule"],
      ["recipients", "BusinessRecipients"],
    ],
    "BusinessAwayMessage",
  ],
  "timezone": [
    0xFF9289F5,
    [
      ["id", "string"],
      ["name", "string"],
      ["utc_offset", "int"],
    ],
    "Timezone",
  ],
  "help.timezonesListNotModified": [
    0x970708CC,
    [],
    "help.TimezonesList",
  ],
  "help.timezonesList": [
    0x7B74ED71,
    [
      ["timezones", "Vector<Timezone>"],
      ["hash", "int"],
    ],
    "help.TimezonesList",
  ],
  "quickReply": [
    0x0697102B,
    [
      ["shortcut_id", "int"],
      ["shortcut", "string"],
      ["top_message", "int"],
      ["count", "int"],
    ],
    "QuickReply",
  ],
  "inputQuickReplyShortcut": [
    0x24596D41,
    [
      ["shortcut", "string"],
    ],
    "InputQuickReplyShortcut",
  ],
  "inputQuickReplyShortcutId": [
    0x01190CF1,
    [
      ["shortcut_id", "int"],
    ],
    "InputQuickReplyShortcut",
  ],
  "messages.quickReplies": [
    0xC68D6695,
    [
      ["quick_replies", "Vector<QuickReply>"],
      ["messages", "Vector<Message>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "messages.QuickReplies",
  ],
  "messages.quickRepliesNotModified": [
    0x5F91EB5B,
    [],
    "messages.QuickReplies",
  ],
  "connectedBot": [
    0xBD068601,
    [
      ["flags", "#"],
      ["can_reply", "flags.0?true"],
      ["bot_id", "long"],
      ["recipients", "BusinessBotRecipients"],
    ],
    "ConnectedBot",
  ],
  "account.connectedBots": [
    0x17D7F87B,
    [
      ["connected_bots", "Vector<ConnectedBot>"],
      ["users", "Vector<User>"],
    ],
    "account.ConnectedBots",
  ],
  "messages.dialogFilters": [
    0x2AD93719,
    [
      ["flags", "#"],
      ["tags_enabled", "flags.0?true"],
      ["filters", "Vector<DialogFilter>"],
    ],
    "messages.DialogFilters",
  ],
  "birthday": [
    0x6C8E1E06,
    [
      ["flags", "#"],
      ["day", "int"],
      ["month", "int"],
      ["year", "flags.0?int"],
    ],
    "Birthday",
  ],
  "botBusinessConnection": [
    0x896433B4,
    [
      ["flags", "#"],
      ["can_reply", "flags.0?true"],
      ["disabled", "flags.1?true"],
      ["connection_id", "string"],
      ["user_id", "long"],
      ["dc_id", "int"],
      ["date", "int"],
    ],
    "BotBusinessConnection",
  ],
  "inputBusinessIntro": [
    0x09C469CD,
    [
      ["flags", "#"],
      ["title", "string"],
      ["description", "string"],
      ["sticker", "flags.0?InputDocument"],
    ],
    "InputBusinessIntro",
  ],
  "businessIntro": [
    0x5A0A066D,
    [
      ["flags", "#"],
      ["title", "string"],
      ["description", "string"],
      ["sticker", "flags.0?Document"],
    ],
    "BusinessIntro",
  ],
  "messages.myStickers": [
    0xFAFF629D,
    [
      ["count", "int"],
      ["sets", "Vector<StickerSetCovered>"],
    ],
    "messages.MyStickers",
  ],
  "inputCollectibleUsername": [
    0xE39460A9,
    [
      ["username", "string"],
    ],
    "InputCollectible",
  ],
  "inputCollectiblePhone": [
    0xA2E214A4,
    [
      ["phone", "string"],
    ],
    "InputCollectible",
  ],
  "fragment.collectibleInfo": [
    0x6EBDFF91,
    [
      ["purchase_date", "int"],
      ["currency", "string"],
      ["amount", "long"],
      ["crypto_currency", "string"],
      ["crypto_amount", "long"],
      ["url", "string"],
    ],
    "fragment.CollectibleInfo",
  ],
  "inputBusinessBotRecipients": [
    0xC4E5921E,
    [
      ["flags", "#"],
      ["existing_chats", "flags.0?true"],
      ["new_chats", "flags.1?true"],
      ["contacts", "flags.2?true"],
      ["non_contacts", "flags.3?true"],
      ["exclude_selected", "flags.5?true"],
      ["users", "flags.4?Vector<InputUser>"],
      ["exclude_users", "flags.6?Vector<InputUser>"],
    ],
    "InputBusinessBotRecipients",
  ],
  "businessBotRecipients": [
    0xB88CF373,
    [
      ["flags", "#"],
      ["existing_chats", "flags.0?true"],
      ["new_chats", "flags.1?true"],
      ["contacts", "flags.2?true"],
      ["non_contacts", "flags.3?true"],
      ["exclude_selected", "flags.5?true"],
      ["users", "flags.4?Vector<long>"],
      ["exclude_users", "flags.6?Vector<long>"],
    ],
    "BusinessBotRecipients",
  ],
  "contactBirthday": [
    0x1D998733,
    [
      ["contact_id", "long"],
      ["birthday", "Birthday"],
    ],
    "ContactBirthday",
  ],
  "contacts.contactBirthdays": [
    0x114FF30D,
    [
      ["contacts", "Vector<ContactBirthday>"],
      ["users", "Vector<User>"],
    ],
    "contacts.ContactBirthdays",
  ],
  "missingInvitee": [
    0x628C9224,
    [
      ["flags", "#"],
      ["premium_would_allow_invite", "flags.0?true"],
      ["premium_required_for_pm", "flags.1?true"],
      ["user_id", "long"],
    ],
    "MissingInvitee",
  ],
  "messages.invitedUsers": [
    0x7F5DEFA6,
    [
      ["updates", "Updates"],
      ["missing_invitees", "Vector<MissingInvitee>"],
    ],
    "messages.InvitedUsers",
  ],
  "inputBusinessChatLink": [
    0x11679FA7,
    [
      ["flags", "#"],
      ["message", "string"],
      ["entities", "flags.0?Vector<MessageEntity>"],
      ["title", "flags.1?string"],
    ],
    "InputBusinessChatLink",
  ],
  "businessChatLink": [
    0xB4AE666F,
    [
      ["flags", "#"],
      ["link", "string"],
      ["message", "string"],
      ["entities", "flags.0?Vector<MessageEntity>"],
      ["title", "flags.1?string"],
      ["views", "int"],
    ],
    "BusinessChatLink",
  ],
  "account.businessChatLinks": [
    0xEC43A2D1,
    [
      ["links", "Vector<BusinessChatLink>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "account.BusinessChatLinks",
  ],
  "account.resolvedBusinessChatLinks": [
    0x9A23AF21,
    [
      ["flags", "#"],
      ["peer", "Peer"],
      ["message", "string"],
      ["entities", "flags.0?Vector<MessageEntity>"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "account.ResolvedBusinessChatLinks",
  ],
  "requestedPeerUser": [
    0xD62FF46A,
    [
      ["flags", "#"],
      ["user_id", "long"],
      ["first_name", "flags.0?string"],
      ["last_name", "flags.0?string"],
      ["username", "flags.1?string"],
      ["photo", "flags.2?Photo"],
    ],
    "RequestedPeer",
  ],
  "requestedPeerChat": [
    0x7307544F,
    [
      ["flags", "#"],
      ["chat_id", "long"],
      ["title", "flags.0?string"],
      ["photo", "flags.2?Photo"],
    ],
    "RequestedPeer",
  ],
  "requestedPeerChannel": [
    0x8BA403E4,
    [
      ["flags", "#"],
      ["channel_id", "long"],
      ["title", "flags.0?string"],
      ["username", "flags.1?string"],
      ["photo", "flags.2?Photo"],
    ],
    "RequestedPeer",
  ],
  "sponsoredMessageReportOption": [
    0x430D3150,
    [
      ["text", "string"],
      ["option", "bytes"],
    ],
    "SponsoredMessageReportOption",
  ],
  "channels.sponsoredMessageReportResultChooseOption": [
    0x846F9E42,
    [
      ["title", "string"],
      ["options", "Vector<SponsoredMessageReportOption>"],
    ],
    "channels.SponsoredMessageReportResult",
  ],
  "channels.sponsoredMessageReportResultAdsHidden": [
    0x3E3BCF2F,
    [],
    "channels.SponsoredMessageReportResult",
  ],
  "channels.sponsoredMessageReportResultReported": [
    0xAD798849,
    [],
    "channels.SponsoredMessageReportResult",
  ],
  "stats.broadcastRevenueStats": [
    0x5407E297,
    [
      ["top_hours_graph", "StatsGraph"],
      ["revenue_graph", "StatsGraph"],
      ["balances", "BroadcastRevenueBalances"],
      ["usd_rate", "double"],
    ],
    "stats.BroadcastRevenueStats",
  ],
  "stats.broadcastRevenueWithdrawalUrl": [
    0xEC659737,
    [
      ["url", "string"],
    ],
    "stats.BroadcastRevenueWithdrawalUrl",
  ],
  "broadcastRevenueTransactionProceeds": [
    0x557E2CC4,
    [
      ["amount", "long"],
      ["from_date", "int"],
      ["to_date", "int"],
    ],
    "BroadcastRevenueTransaction",
  ],
  "broadcastRevenueTransactionWithdrawal": [
    0x5A590978,
    [
      ["flags", "#"],
      ["pending", "flags.0?true"],
      ["failed", "flags.2?true"],
      ["amount", "long"],
      ["date", "int"],
      ["provider", "string"],
      ["transaction_date", "flags.1?int"],
      ["transaction_url", "flags.1?string"],
    ],
    "BroadcastRevenueTransaction",
  ],
  "broadcastRevenueTransactionRefund": [
    0x42D30D2E,
    [
      ["amount", "long"],
      ["date", "int"],
      ["provider", "string"],
    ],
    "BroadcastRevenueTransaction",
  ],
  "stats.broadcastRevenueTransactions": [
    0x87158466,
    [
      ["count", "int"],
      ["transactions", "Vector<BroadcastRevenueTransaction>"],
    ],
    "stats.BroadcastRevenueTransactions",
  ],
  "reactionNotificationsFromContacts": [
    0xBAC3A61A,
    [],
    "ReactionNotificationsFrom",
  ],
  "reactionNotificationsFromAll": [
    0x4B9E22A0,
    [],
    "ReactionNotificationsFrom",
  ],
  "reactionsNotifySettings": [
    0x56E34970,
    [
      ["flags", "#"],
      ["messages_notify_from", "flags.0?ReactionNotificationsFrom"],
      ["stories_notify_from", "flags.1?ReactionNotificationsFrom"],
      ["sound", "NotificationSound"],
      ["show_previews", "Bool"],
    ],
    "ReactionsNotifySettings",
  ],
  "broadcastRevenueBalances": [
    0xC3FF71E7,
    [
      ["flags", "#"],
      ["withdrawal_enabled", "flags.0?true"],
      ["current_balance", "long"],
      ["available_balance", "long"],
      ["overall_revenue", "long"],
    ],
    "BroadcastRevenueBalances",
  ],
  "availableEffect": [
    0x93C3E27E,
    [
      ["flags", "#"],
      ["premium_required", "flags.2?true"],
      ["id", "long"],
      ["emoticon", "string"],
      ["static_icon_id", "flags.0?long"],
      ["effect_sticker_id", "long"],
      ["effect_animation_id", "flags.1?long"],
    ],
    "AvailableEffect",
  ],
  "messages.availableEffectsNotModified": [
    0xD1ED9A5B,
    [],
    "messages.AvailableEffects",
  ],
  "messages.availableEffects": [
    0xBDDB616E,
    [
      ["hash", "int"],
      ["effects", "Vector<AvailableEffect>"],
      ["documents", "Vector<Document>"],
    ],
    "messages.AvailableEffects",
  ],
  "factCheck": [
    0xB89BFCCF,
    [
      ["flags", "#"],
      ["need_check", "flags.0?true"],
      ["country", "flags.1?string"],
      ["text", "flags.1?TextWithEntities"],
      ["hash", "long"],
    ],
    "FactCheck",
  ],
  "starsTransactionPeerUnsupported": [
    0x95F2BFE4,
    [],
    "StarsTransactionPeer",
  ],
  "starsTransactionPeerAppStore": [
    0xB457B375,
    [],
    "StarsTransactionPeer",
  ],
  "starsTransactionPeerPlayMarket": [
    0x7B560A0B,
    [],
    "StarsTransactionPeer",
  ],
  "starsTransactionPeerPremiumBot": [
    0x250DBAF8,
    [],
    "StarsTransactionPeer",
  ],
  "starsTransactionPeerFragment": [
    0xE92FD902,
    [],
    "StarsTransactionPeer",
  ],
  "starsTransactionPeer": [
    0xD80DA15D,
    [
      ["peer", "Peer"],
    ],
    "StarsTransactionPeer",
  ],
  "starsTransactionPeerAds": [
    0x60682812,
    [],
    "StarsTransactionPeer",
  ],
  "starsTransactionPeerAPI": [
    0xF9677AAD,
    [],
    "StarsTransactionPeer",
  ],
  "starsTopupOption": [
    0x0BD915C0,
    [
      ["flags", "#"],
      ["extended", "flags.1?true"],
      ["stars", "long"],
      ["store_product", "flags.0?string"],
      ["currency", "string"],
      ["amount", "long"],
    ],
    "StarsTopupOption",
  ],
  "starsTransaction": [
    0xA39FD94A,
    [
      ["flags", "#"],
      ["refund", "flags.3?true"],
      ["pending", "flags.4?true"],
      ["failed", "flags.6?true"],
      ["gift", "flags.10?true"],
      ["reaction", "flags.11?true"],
      ["stargift_upgrade", "flags.18?true"],
      ["id", "string"],
      ["stars", "StarsAmount"],
      ["date", "int"],
      ["peer", "StarsTransactionPeer"],
      ["title", "flags.0?string"],
      ["description", "flags.1?string"],
      ["photo", "flags.2?WebDocument"],
      ["transaction_date", "flags.5?int"],
      ["transaction_url", "flags.5?string"],
      ["bot_payload", "flags.7?bytes"],
      ["msg_id", "flags.8?int"],
      ["extended_media", "flags.9?Vector<MessageMedia>"],
      ["subscription_period", "flags.12?int"],
      ["giveaway_post_id", "flags.13?int"],
      ["stargift", "flags.14?StarGift"],
      ["floodskip_number", "flags.15?int"],
      ["starref_commission_permille", "flags.16?int"],
      ["starref_peer", "flags.17?Peer"],
      ["starref_amount", "flags.17?StarsAmount"],
      ["paid_messages", "flags.19?int"],
      ["premium_gift_months", "flags.20?int"],
    ],
    "StarsTransaction",
  ],
  "payments.starsStatus": [
    0x6C9CE8ED,
    [
      ["flags", "#"],
      ["balance", "StarsAmount"],
      ["subscriptions", "flags.1?Vector<StarsSubscription>"],
      ["subscriptions_next_offset", "flags.2?string"],
      ["subscriptions_missing_balance", "flags.4?long"],
      ["history", "flags.3?Vector<StarsTransaction>"],
      ["next_offset", "flags.0?string"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "payments.StarsStatus",
  ],
  "foundStory": [
    0xE87ACBC0,
    [
      ["peer", "Peer"],
      ["story", "StoryItem"],
    ],
    "FoundStory",
  ],
  "stories.foundStories": [
    0xE2DE7737,
    [
      ["flags", "#"],
      ["count", "int"],
      ["stories", "Vector<FoundStory>"],
      ["next_offset", "flags.0?string"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "stories.FoundStories",
  ],
  "geoPointAddress": [
    0xDE4C5D93,
    [
      ["flags", "#"],
      ["country_iso2", "string"],
      ["state", "flags.0?string"],
      ["city", "flags.1?string"],
      ["street", "flags.2?string"],
    ],
    "GeoPointAddress",
  ],
  "starsRevenueStatus": [
    0xFEBE5491,
    [
      ["flags", "#"],
      ["withdrawal_enabled", "flags.0?true"],
      ["current_balance", "StarsAmount"],
      ["available_balance", "StarsAmount"],
      ["overall_revenue", "StarsAmount"],
      ["next_withdrawal_at", "flags.1?int"],
    ],
    "StarsRevenueStatus",
  ],
  "payments.starsRevenueStats": [
    0xC92BB73B,
    [
      ["revenue_graph", "StatsGraph"],
      ["status", "StarsRevenueStatus"],
      ["usd_rate", "double"],
    ],
    "payments.StarsRevenueStats",
  ],
  "payments.starsRevenueWithdrawalUrl": [
    0x1DAB80B7,
    [
      ["url", "string"],
    ],
    "payments.StarsRevenueWithdrawalUrl",
  ],
  "payments.starsRevenueAdsAccountUrl": [
    0x394E7F21,
    [
      ["url", "string"],
    ],
    "payments.StarsRevenueAdsAccountUrl",
  ],
  "inputStarsTransaction": [
    0x206AE6D1,
    [
      ["flags", "#"],
      ["refund", "flags.0?true"],
      ["id", "string"],
    ],
    "InputStarsTransaction",
  ],
  "starsGiftOption": [
    0x5E0589F1,
    [
      ["flags", "#"],
      ["extended", "flags.1?true"],
      ["stars", "long"],
      ["store_product", "flags.0?string"],
      ["currency", "string"],
      ["amount", "long"],
    ],
    "StarsGiftOption",
  ],
  "bots.popularAppBots": [
    0x1991B13B,
    [
      ["flags", "#"],
      ["next_offset", "flags.0?string"],
      ["users", "Vector<User>"],
    ],
    "bots.PopularAppBots",
  ],
  "botPreviewMedia": [
    0x23E91BA3,
    [
      ["date", "int"],
      ["media", "MessageMedia"],
    ],
    "BotPreviewMedia",
  ],
  "bots.previewInfo": [
    0x0CA71D64,
    [
      ["media", "Vector<BotPreviewMedia>"],
      ["lang_codes", "Vector<string>"],
    ],
    "bots.PreviewInfo",
  ],
  "starsSubscriptionPricing": [
    0x05416D58,
    [
      ["period", "int"],
      ["amount", "long"],
    ],
    "StarsSubscriptionPricing",
  ],
  "starsSubscription": [
    0x2E6EAB1A,
    [
      ["flags", "#"],
      ["canceled", "flags.0?true"],
      ["can_refulfill", "flags.1?true"],
      ["missing_balance", "flags.2?true"],
      ["bot_canceled", "flags.7?true"],
      ["id", "string"],
      ["peer", "Peer"],
      ["until_date", "int"],
      ["pricing", "StarsSubscriptionPricing"],
      ["chat_invite_hash", "flags.3?string"],
      ["title", "flags.4?string"],
      ["photo", "flags.5?WebDocument"],
      ["invoice_slug", "flags.6?string"],
    ],
    "StarsSubscription",
  ],
  "messageReactor": [
    0x4BA3A95A,
    [
      ["flags", "#"],
      ["top", "flags.0?true"],
      ["my", "flags.1?true"],
      ["anonymous", "flags.2?true"],
      ["peer_id", "flags.3?Peer"],
      ["count", "int"],
    ],
    "MessageReactor",
  ],
  "starsGiveawayOption": [
    0x94CE852A,
    [
      ["flags", "#"],
      ["extended", "flags.0?true"],
      ["default", "flags.1?true"],
      ["stars", "long"],
      ["yearly_boosts", "int"],
      ["store_product", "flags.2?string"],
      ["currency", "string"],
      ["amount", "long"],
      ["winners", "Vector<StarsGiveawayWinnersOption>"],
    ],
    "StarsGiveawayOption",
  ],
  "starsGiveawayWinnersOption": [
    0x54236209,
    [
      ["flags", "#"],
      ["default", "flags.0?true"],
      ["users", "int"],
      ["per_user_stars", "long"],
    ],
    "StarsGiveawayWinnersOption",
  ],
  "starGift": [
    0x02CC73C8,
    [
      ["flags", "#"],
      ["limited", "flags.0?true"],
      ["sold_out", "flags.1?true"],
      ["birthday", "flags.2?true"],
      ["id", "long"],
      ["sticker", "Document"],
      ["stars", "long"],
      ["availability_remains", "flags.0?int"],
      ["availability_total", "flags.0?int"],
      ["convert_stars", "long"],
      ["first_sale_date", "flags.1?int"],
      ["last_sale_date", "flags.1?int"],
      ["upgrade_stars", "flags.3?long"],
    ],
    "StarGift",
  ],
  "starGiftUnique": [
    0x5C62D151,
    [
      ["flags", "#"],
      ["id", "long"],
      ["title", "string"],
      ["slug", "string"],
      ["num", "int"],
      ["owner_id", "flags.0?Peer"],
      ["owner_name", "flags.1?string"],
      ["owner_address", "flags.2?string"],
      ["attributes", "Vector<StarGiftAttribute>"],
      ["availability_issued", "int"],
      ["availability_total", "int"],
      ["gift_address", "flags.3?string"],
    ],
    "StarGift",
  ],
  "payments.starGiftsNotModified": [
    0xA388A368,
    [],
    "payments.StarGifts",
  ],
  "payments.starGifts": [
    0x901689EA,
    [
      ["hash", "int"],
      ["gifts", "Vector<StarGift>"],
    ],
    "payments.StarGifts",
  ],
  "messageReportOption": [
    0x7903E3D9,
    [
      ["text", "string"],
      ["option", "bytes"],
    ],
    "MessageReportOption",
  ],
  "reportResultChooseOption": [
    0xF0E4E0B6,
    [
      ["title", "string"],
      ["options", "Vector<MessageReportOption>"],
    ],
    "ReportResult",
  ],
  "reportResultAddComment": [
    0x6F09AC31,
    [
      ["flags", "#"],
      ["optional", "flags.0?true"],
      ["option", "bytes"],
    ],
    "ReportResult",
  ],
  "reportResultReported": [
    0x8DB33C4B,
    [],
    "ReportResult",
  ],
  "messages.botPreparedInlineMessage": [
    0x8ECF0511,
    [
      ["id", "string"],
      ["expire_date", "int"],
    ],
    "messages.BotPreparedInlineMessage",
  ],
  "messages.preparedInlineMessage": [
    0xFF57708D,
    [
      ["query_id", "long"],
      ["result", "BotInlineResult"],
      ["peer_types", "Vector<InlineQueryPeerType>"],
      ["cache_time", "int"],
      ["users", "Vector<User>"],
    ],
    "messages.PreparedInlineMessage",
  ],
  "botAppSettings": [
    0xC99B1950,
    [
      ["flags", "#"],
      ["placeholder_path", "flags.0?bytes"],
      ["background_color", "flags.1?int"],
      ["background_dark_color", "flags.2?int"],
      ["header_color", "flags.3?int"],
      ["header_dark_color", "flags.4?int"],
    ],
    "BotAppSettings",
  ],
  "starRefProgram": [
    0xDD0C66F2,
    [
      ["flags", "#"],
      ["bot_id", "long"],
      ["commission_permille", "int"],
      ["duration_months", "flags.0?int"],
      ["end_date", "flags.1?int"],
      ["daily_revenue_per_user", "flags.2?StarsAmount"],
    ],
    "StarRefProgram",
  ],
  "connectedBotStarRef": [
    0x19A13F71,
    [
      ["flags", "#"],
      ["revoked", "flags.1?true"],
      ["url", "string"],
      ["date", "int"],
      ["bot_id", "long"],
      ["commission_permille", "int"],
      ["duration_months", "flags.0?int"],
      ["participants", "long"],
      ["revenue", "long"],
    ],
    "ConnectedBotStarRef",
  ],
  "payments.connectedStarRefBots": [
    0x98D5EA1D,
    [
      ["count", "int"],
      ["connected_bots", "Vector<ConnectedBotStarRef>"],
      ["users", "Vector<User>"],
    ],
    "payments.ConnectedStarRefBots",
  ],
  "payments.suggestedStarRefBots": [
    0xB4D5D859,
    [
      ["flags", "#"],
      ["count", "int"],
      ["suggested_bots", "Vector<StarRefProgram>"],
      ["users", "Vector<User>"],
      ["next_offset", "flags.0?string"],
    ],
    "payments.SuggestedStarRefBots",
  ],
  "starsAmount": [
    0xBBB6B4A3,
    [
      ["amount", "long"],
      ["nanos", "int"],
    ],
    "StarsAmount",
  ],
  "messages.foundStickersNotModified": [
    0x6010C534,
    [
      ["flags", "#"],
      ["next_offset", "flags.0?int"],
    ],
    "messages.FoundStickers",
  ],
  "messages.foundStickers": [
    0x82C9E290,
    [
      ["flags", "#"],
      ["next_offset", "flags.0?int"],
      ["hash", "long"],
      ["stickers", "Vector<Document>"],
    ],
    "messages.FoundStickers",
  ],
  "botVerifierSettings": [
    0xB0CD6617,
    [
      ["flags", "#"],
      ["can_modify_custom_description", "flags.1?true"],
      ["icon", "long"],
      ["company", "string"],
      ["custom_description", "flags.0?string"],
    ],
    "BotVerifierSettings",
  ],
  "botVerification": [
    0xF93CD45C,
    [
      ["bot_id", "long"],
      ["icon", "long"],
      ["description", "string"],
    ],
    "BotVerification",
  ],
  "starGiftAttributeModel": [
    0x39D99013,
    [
      ["name", "string"],
      ["document", "Document"],
      ["rarity_permille", "int"],
    ],
    "StarGiftAttribute",
  ],
  "starGiftAttributePattern": [
    0x13ACFF19,
    [
      ["name", "string"],
      ["document", "Document"],
      ["rarity_permille", "int"],
    ],
    "StarGiftAttribute",
  ],
  "starGiftAttributeBackdrop": [
    0x94271762,
    [
      ["name", "string"],
      ["center_color", "int"],
      ["edge_color", "int"],
      ["pattern_color", "int"],
      ["text_color", "int"],
      ["rarity_permille", "int"],
    ],
    "StarGiftAttribute",
  ],
  "starGiftAttributeOriginalDetails": [
    0xE0BFF26C,
    [
      ["flags", "#"],
      ["sender_id", "flags.0?Peer"],
      ["recipient_id", "Peer"],
      ["date", "int"],
      ["message", "flags.1?TextWithEntities"],
    ],
    "StarGiftAttribute",
  ],
  "payments.starGiftUpgradePreview": [
    0x167BD90B,
    [
      ["sample_attributes", "Vector<StarGiftAttribute>"],
    ],
    "payments.StarGiftUpgradePreview",
  ],
  "users.users": [
    0x62D706B8,
    [
      ["users", "Vector<User>"],
    ],
    "users.Users",
  ],
  "users.usersSlice": [
    0x315A4974,
    [
      ["count", "int"],
      ["users", "Vector<User>"],
    ],
    "users.Users",
  ],
  "payments.uniqueStarGift": [
    0xCAA2F60B,
    [
      ["gift", "StarGift"],
      ["users", "Vector<User>"],
    ],
    "payments.UniqueStarGift",
  ],
  "messages.webPagePreview": [
    0xB53E8B21,
    [
      ["media", "MessageMedia"],
      ["users", "Vector<User>"],
    ],
    "messages.WebPagePreview",
  ],
  "savedStarGift": [
    0x6056DBA5,
    [
      ["flags", "#"],
      ["name_hidden", "flags.0?true"],
      ["unsaved", "flags.5?true"],
      ["refunded", "flags.9?true"],
      ["can_upgrade", "flags.10?true"],
      ["pinned_to_top", "flags.12?true"],
      ["from_id", "flags.1?Peer"],
      ["date", "int"],
      ["gift", "StarGift"],
      ["message", "flags.2?TextWithEntities"],
      ["msg_id", "flags.3?int"],
      ["saved_id", "flags.11?long"],
      ["convert_stars", "flags.4?long"],
      ["upgrade_stars", "flags.6?long"],
      ["can_export_at", "flags.7?int"],
      ["transfer_stars", "flags.8?long"],
    ],
    "SavedStarGift",
  ],
  "payments.savedStarGifts": [
    0x95F389B1,
    [
      ["flags", "#"],
      ["count", "int"],
      ["chat_notifications_enabled", "flags.1?Bool"],
      ["gifts", "Vector<SavedStarGift>"],
      ["next_offset", "flags.0?string"],
      ["chats", "Vector<Chat>"],
      ["users", "Vector<User>"],
    ],
    "payments.SavedStarGifts",
  ],
  "inputSavedStarGiftUser": [
    0x69279795,
    [
      ["msg_id", "int"],
    ],
    "InputSavedStarGift",
  ],
  "inputSavedStarGiftChat": [
    0xF101AA7F,
    [
      ["peer", "InputPeer"],
      ["saved_id", "long"],
    ],
    "InputSavedStarGift",
  ],
  "payments.starGiftWithdrawalUrl": [
    0x84AA3A9C,
    [
      ["url", "string"],
    ],
    "payments.StarGiftWithdrawalUrl",
  ],
  "paidReactionPrivacyDefault": [
    0x206AD49E,
    [],
    "PaidReactionPrivacy",
  ],
  "paidReactionPrivacyAnonymous": [
    0x1F0C1AD9,
    [],
    "PaidReactionPrivacy",
  ],
  "paidReactionPrivacyPeer": [
    0xDC6CFCF0,
    [
      ["peer", "InputPeer"],
    ],
    "PaidReactionPrivacy",
  ],
  "account.paidMessagesRevenue": [
    0x1E109708,
    [
      ["stars_amount", "long"],
    ],
    "account.PaidMessagesRevenue",
  ],
  "requirementToContactEmpty": [
    0x050A9839,
    [],
    "RequirementToContact",
  ],
  "requirementToContactPremium": [
    0xE581E4E9,
    [],
    "RequirementToContact",
  ],
  "requirementToContactPaidMessages": [
    0xB4F67E93,
    [
      ["stars_amount", "long"],
    ],
    "RequirementToContact",
  ],
  "req_pq_multi": [
    0xBE7E8EF1,
    [
      ["nonce", "int128"],
    ],
    "ResPQ",
  ],
  "req_DH_params": [
    0xD712E4BE,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["p", "bytes"],
      ["q", "bytes"],
      ["public_key_fingerprint", "long"],
      ["encrypted_data", "bytes"],
    ],
    "Server_DH_Params",
  ],
  "set_client_DH_params": [
    0xF5045F1F,
    [
      ["nonce", "int128"],
      ["server_nonce", "int128"],
      ["encrypted_data", "bytes"],
    ],
    "Set_client_DH_params_answer",
  ],
  "rpc_drop_answer": [
    0x58E4A740,
    [
      ["req_msg_id", "long"],
    ],
    "RpcDropAnswer",
  ],
  "get_future_salts": [
    0xB921BD04,
    [
      ["num", "int"],
    ],
    "FutureSalts",
  ],
  "ping": [
    0x7ABE77EC,
    [
      ["ping_id", "long"],
    ],
    "Pong",
  ],
  "ping_delay_disconnect": [
    0xF3427B8C,
    [
      ["ping_id", "long"],
      ["disconnect_delay", "int"],
    ],
    "Pong",
  ],
  "destroy_session": [
    0xE7512126,
    [
      ["session_id", "long"],
    ],
    "DestroySessionRes",
  ],
  "destroy_auth_key": [
    0xD1435160,
    [],
    "DestroyAuthKeyRes",
  ],
  "invokeWithBusinessConnectionPrefix": [
    0xDD289F8E,
    [
      ["connection_id", "string"],
    ],
    "Error",
  ],
  "invokeWithGooglePlayIntegrityPrefix": [
    0x1DF92984,
    [
      ["nonce", "string"],
      ["token", "string"],
    ],
    "Error",
  ],
  "invokeWithApnsSecretPrefix": [
    0x0DAE54F8,
    [
      ["nonce", "string"],
      ["secret", "string"],
    ],
    "Error",
  ],
  "invokeWithReCaptchaPrefix": [
    0xADBB0F94,
    [
      ["token", "string"],
    ],
    "Error",
  ],
  "invokeAfterMsg": [
    0xCB9F372D,
    [
      ["msg_id", "long"],
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeAfterMsgs": [
    0x3DC4B4F0,
    [
      ["msg_ids", "Vector<long>"],
      ["query", "!X"],
    ],
    "X",
  ],
  "initConnection": [
    0xC1CD5EA9,
    [
      ["flags", "#"],
      ["api_id", "int"],
      ["device_model", "string"],
      ["system_version", "string"],
      ["app_version", "string"],
      ["system_lang_code", "string"],
      ["lang_pack", "string"],
      ["lang_code", "string"],
      ["proxy", "flags.0?InputClientProxy"],
      ["params", "flags.1?JSONValue"],
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeWithLayer": [
    0xDA9B0D0D,
    [
      ["layer", "int"],
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeWithoutUpdates": [
    0xBF9459B7,
    [
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeWithMessagesRange": [
    0x365275F2,
    [
      ["range", "MessageRange"],
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeWithTakeout": [
    0xACA9FD2E,
    [
      ["takeout_id", "long"],
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeWithBusinessConnection": [
    0xDD289F8E,
    [
      ["connection_id", "string"],
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeWithGooglePlayIntegrity": [
    0x1DF92984,
    [
      ["nonce", "string"],
      ["token", "string"],
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeWithApnsSecret": [
    0x0DAE54F8,
    [
      ["nonce", "string"],
      ["secret", "string"],
      ["query", "!X"],
    ],
    "X",
  ],
  "invokeWithReCaptcha": [
    0xADBB0F94,
    [
      ["token", "string"],
      ["query", "!X"],
    ],
    "X",
  ],
  "auth.sendCode": [
    0xA677244F,
    [
      ["phone_number", "string"],
      ["api_id", "int"],
      ["api_hash", "string"],
      ["settings", "CodeSettings"],
    ],
    "auth.SentCode",
  ],
  "auth.signUp": [
    0xAAC7B717,
    [
      ["flags", "#"],
      ["no_joined_notifications", "flags.0?true"],
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
      ["first_name", "string"],
      ["last_name", "string"],
    ],
    "auth.Authorization",
  ],
  "auth.signIn": [
    0x8D52A951,
    [
      ["flags", "#"],
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
      ["phone_code", "flags.0?string"],
      ["email_verification", "flags.1?EmailVerification"],
    ],
    "auth.Authorization",
  ],
  "auth.logOut": [
    0x3E72BA19,
    [],
    "auth.LoggedOut",
  ],
  "auth.resetAuthorizations": [
    0x9FAB0D1A,
    [],
    "Bool",
  ],
  "auth.exportAuthorization": [
    0xE5BFFFCD,
    [
      ["dc_id", "int"],
    ],
    "auth.ExportedAuthorization",
  ],
  "auth.importAuthorization": [
    0xA57A7DAD,
    [
      ["id", "long"],
      ["bytes", "bytes"],
    ],
    "auth.Authorization",
  ],
  "auth.bindTempAuthKey": [
    0xCDD42A05,
    [
      ["perm_auth_key_id", "long"],
      ["nonce", "long"],
      ["expires_at", "int"],
      ["encrypted_message", "bytes"],
    ],
    "Bool",
  ],
  "auth.importBotAuthorization": [
    0x67A3FF2C,
    [
      ["flags", "int"],
      ["api_id", "int"],
      ["api_hash", "string"],
      ["bot_auth_token", "string"],
    ],
    "auth.Authorization",
  ],
  "auth.checkPassword": [
    0xD18B4D16,
    [
      ["password", "InputCheckPasswordSRP"],
    ],
    "auth.Authorization",
  ],
  "auth.requestPasswordRecovery": [
    0xD897BC66,
    [],
    "auth.PasswordRecovery",
  ],
  "auth.recoverPassword": [
    0x37096C70,
    [
      ["flags", "#"],
      ["code", "string"],
      ["new_settings", "flags.0?account.PasswordInputSettings"],
    ],
    "auth.Authorization",
  ],
  "auth.resendCode": [
    0xCAE47523,
    [
      ["flags", "#"],
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
      ["reason", "flags.0?string"],
    ],
    "auth.SentCode",
  ],
  "auth.cancelCode": [
    0x1F040578,
    [
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
    ],
    "Bool",
  ],
  "auth.dropTempAuthKeys": [
    0x8E48A188,
    [
      ["except_auth_keys", "Vector<long>"],
    ],
    "Bool",
  ],
  "auth.exportLoginToken": [
    0xB7E085FE,
    [
      ["api_id", "int"],
      ["api_hash", "string"],
      ["except_ids", "Vector<long>"],
    ],
    "auth.LoginToken",
  ],
  "auth.importLoginToken": [
    0x95AC5CE4,
    [
      ["token", "bytes"],
    ],
    "auth.LoginToken",
  ],
  "auth.acceptLoginToken": [
    0xE894AD4D,
    [
      ["token", "bytes"],
    ],
    "Authorization",
  ],
  "auth.checkRecoveryPassword": [
    0x0D36BF79,
    [
      ["code", "string"],
    ],
    "Bool",
  ],
  "auth.importWebTokenAuthorization": [
    0x2DB873A9,
    [
      ["api_id", "int"],
      ["api_hash", "string"],
      ["web_auth_token", "string"],
    ],
    "auth.Authorization",
  ],
  "auth.requestFirebaseSms": [
    0x8E39261E,
    [
      ["flags", "#"],
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
      ["safety_net_token", "flags.0?string"],
      ["play_integrity_token", "flags.2?string"],
      ["ios_push_secret", "flags.1?string"],
    ],
    "Bool",
  ],
  "auth.resetLoginEmail": [
    0x7E960193,
    [
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
    ],
    "auth.SentCode",
  ],
  "auth.reportMissingCode": [
    0xCB9DEFF6,
    [
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
      ["mnc", "string"],
    ],
    "Bool",
  ],
  "account.registerDevice": [
    0xEC86017A,
    [
      ["flags", "#"],
      ["no_muted", "flags.0?true"],
      ["token_type", "int"],
      ["token", "string"],
      ["app_sandbox", "Bool"],
      ["secret", "bytes"],
      ["other_uids", "Vector<long>"],
    ],
    "Bool",
  ],
  "account.unregisterDevice": [
    0x6A0D3206,
    [
      ["token_type", "int"],
      ["token", "string"],
      ["other_uids", "Vector<long>"],
    ],
    "Bool",
  ],
  "account.updateNotifySettings": [
    0x84BE5B93,
    [
      ["peer", "InputNotifyPeer"],
      ["settings", "InputPeerNotifySettings"],
    ],
    "Bool",
  ],
  "account.getNotifySettings": [
    0x12B3AD31,
    [
      ["peer", "InputNotifyPeer"],
    ],
    "PeerNotifySettings",
  ],
  "account.resetNotifySettings": [
    0xDB7E1747,
    [],
    "Bool",
  ],
  "account.updateProfile": [
    0x78515775,
    [
      ["flags", "#"],
      ["first_name", "flags.0?string"],
      ["last_name", "flags.1?string"],
      ["about", "flags.2?string"],
    ],
    "User",
  ],
  "account.updateStatus": [
    0x6628562C,
    [
      ["offline", "Bool"],
    ],
    "Bool",
  ],
  "account.getWallPapers": [
    0x07967D36,
    [
      ["hash", "long"],
    ],
    "account.WallPapers",
  ],
  "account.reportPeer": [
    0xC5BA3D86,
    [
      ["peer", "InputPeer"],
      ["reason", "ReportReason"],
      ["message", "string"],
    ],
    "Bool",
  ],
  "account.checkUsername": [
    0x2714D86C,
    [
      ["username", "string"],
    ],
    "Bool",
  ],
  "account.updateUsername": [
    0x3E0BDD7C,
    [
      ["username", "string"],
    ],
    "User",
  ],
  "account.getPrivacy": [
    0xDADBC950,
    [
      ["key", "InputPrivacyKey"],
    ],
    "account.PrivacyRules",
  ],
  "account.setPrivacy": [
    0xC9F81CE8,
    [
      ["key", "InputPrivacyKey"],
      ["rules", "Vector<InputPrivacyRule>"],
    ],
    "account.PrivacyRules",
  ],
  "account.deleteAccount": [
    0xA2C0CF74,
    [
      ["flags", "#"],
      ["reason", "string"],
      ["password", "flags.0?InputCheckPasswordSRP"],
    ],
    "Bool",
  ],
  "account.getAccountTTL": [
    0x08FC711D,
    [],
    "AccountDaysTTL",
  ],
  "account.setAccountTTL": [
    0x2442485E,
    [
      ["ttl", "AccountDaysTTL"],
    ],
    "Bool",
  ],
  "account.sendChangePhoneCode": [
    0x82574AE5,
    [
      ["phone_number", "string"],
      ["settings", "CodeSettings"],
    ],
    "auth.SentCode",
  ],
  "account.changePhone": [
    0x70C32EDB,
    [
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
      ["phone_code", "string"],
    ],
    "User",
  ],
  "account.updateDeviceLocked": [
    0x38DF3532,
    [
      ["period", "int"],
    ],
    "Bool",
  ],
  "account.getAuthorizations": [
    0xE320C158,
    [],
    "account.Authorizations",
  ],
  "account.resetAuthorization": [
    0xDF77F3BC,
    [
      ["hash", "long"],
    ],
    "Bool",
  ],
  "account.getPassword": [
    0x548A30F5,
    [],
    "account.Password",
  ],
  "account.getPasswordSettings": [
    0x9CD4EAF9,
    [
      ["password", "InputCheckPasswordSRP"],
    ],
    "account.PasswordSettings",
  ],
  "account.updatePasswordSettings": [
    0xA59B102F,
    [
      ["password", "InputCheckPasswordSRP"],
      ["new_settings", "account.PasswordInputSettings"],
    ],
    "Bool",
  ],
  "account.sendConfirmPhoneCode": [
    0x1B3FAA88,
    [
      ["hash", "string"],
      ["settings", "CodeSettings"],
    ],
    "auth.SentCode",
  ],
  "account.confirmPhone": [
    0x5F2178C3,
    [
      ["phone_code_hash", "string"],
      ["phone_code", "string"],
    ],
    "Bool",
  ],
  "account.getTmpPassword": [
    0x449E0B51,
    [
      ["password", "InputCheckPasswordSRP"],
      ["period", "int"],
    ],
    "account.TmpPassword",
  ],
  "account.getWebAuthorizations": [
    0x182E6D6F,
    [],
    "account.WebAuthorizations",
  ],
  "account.resetWebAuthorization": [
    0x2D01B9EF,
    [
      ["hash", "long"],
    ],
    "Bool",
  ],
  "account.resetWebAuthorizations": [
    0x682D2594,
    [],
    "Bool",
  ],
  "account.getAllSecureValues": [
    0xB288BC7D,
    [],
    "Vector<SecureValue>",
  ],
  "account.getSecureValue": [
    0x73665BC2,
    [
      ["types", "Vector<SecureValueType>"],
    ],
    "Vector<SecureValue>",
  ],
  "account.saveSecureValue": [
    0x899FE31D,
    [
      ["value", "InputSecureValue"],
      ["secure_secret_id", "long"],
    ],
    "SecureValue",
  ],
  "account.deleteSecureValue": [
    0xB880BC4B,
    [
      ["types", "Vector<SecureValueType>"],
    ],
    "Bool",
  ],
  "account.getAuthorizationForm": [
    0xA929597A,
    [
      ["bot_id", "long"],
      ["scope", "string"],
      ["public_key", "string"],
    ],
    "account.AuthorizationForm",
  ],
  "account.acceptAuthorization": [
    0xF3ED4C73,
    [
      ["bot_id", "long"],
      ["scope", "string"],
      ["public_key", "string"],
      ["value_hashes", "Vector<SecureValueHash>"],
      ["credentials", "SecureCredentialsEncrypted"],
    ],
    "Bool",
  ],
  "account.sendVerifyPhoneCode": [
    0xA5A356F9,
    [
      ["phone_number", "string"],
      ["settings", "CodeSettings"],
    ],
    "auth.SentCode",
  ],
  "account.verifyPhone": [
    0x4DD3A7F6,
    [
      ["phone_number", "string"],
      ["phone_code_hash", "string"],
      ["phone_code", "string"],
    ],
    "Bool",
  ],
  "account.sendVerifyEmailCode": [
    0x98E037BB,
    [
      ["purpose", "EmailVerifyPurpose"],
      ["email", "string"],
    ],
    "account.SentEmailCode",
  ],
  "account.verifyEmail": [
    0x032DA4CF,
    [
      ["purpose", "EmailVerifyPurpose"],
      ["verification", "EmailVerification"],
    ],
    "account.EmailVerified",
  ],
  "account.initTakeoutSession": [
    0x8EF3EAB0,
    [
      ["flags", "#"],
      ["contacts", "flags.0?true"],
      ["message_users", "flags.1?true"],
      ["message_chats", "flags.2?true"],
      ["message_megagroups", "flags.3?true"],
      ["message_channels", "flags.4?true"],
      ["files", "flags.5?true"],
      ["file_max_size", "flags.5?long"],
    ],
    "account.Takeout",
  ],
  "account.finishTakeoutSession": [
    0x1D2652EE,
    [
      ["flags", "#"],
      ["success", "flags.0?true"],
    ],
    "Bool",
  ],
  "account.confirmPasswordEmail": [
    0x8FDF1920,
    [
      ["code", "string"],
    ],
    "Bool",
  ],
  "account.resendPasswordEmail": [
    0x7A7F2A15,
    [],
    "Bool",
  ],
  "account.cancelPasswordEmail": [
    0xC1CBD5B6,
    [],
    "Bool",
  ],
  "account.getContactSignUpNotification": [
    0x9F07C728,
    [],
    "Bool",
  ],
  "account.setContactSignUpNotification": [
    0xCFF43F61,
    [
      ["silent", "Bool"],
    ],
    "Bool",
  ],
  "account.getNotifyExceptions": [
    0x53577479,
    [
      ["flags", "#"],
      ["compare_sound", "flags.1?true"],
      ["compare_stories", "flags.2?true"],
      ["peer", "flags.0?InputNotifyPeer"],
    ],
    "Updates",
  ],
  "account.getWallPaper": [
    0xFC8DDBEA,
    [
      ["wallpaper", "InputWallPaper"],
    ],
    "WallPaper",
  ],
  "account.uploadWallPaper": [
    0xE39A8F03,
    [
      ["flags", "#"],
      ["for_chat", "flags.0?true"],
      ["file", "InputFile"],
      ["mime_type", "string"],
      ["settings", "WallPaperSettings"],
    ],
    "WallPaper",
  ],
  "account.saveWallPaper": [
    0x6C5A5B37,
    [
      ["wallpaper", "InputWallPaper"],
      ["unsave", "Bool"],
      ["settings", "WallPaperSettings"],
    ],
    "Bool",
  ],
  "account.installWallPaper": [
    0xFEED5769,
    [
      ["wallpaper", "InputWallPaper"],
      ["settings", "WallPaperSettings"],
    ],
    "Bool",
  ],
  "account.resetWallPapers": [
    0xBB3B9804,
    [],
    "Bool",
  ],
  "account.getAutoDownloadSettings": [
    0x56DA0B3F,
    [],
    "account.AutoDownloadSettings",
  ],
  "account.saveAutoDownloadSettings": [
    0x76F36233,
    [
      ["flags", "#"],
      ["low", "flags.0?true"],
      ["high", "flags.1?true"],
      ["settings", "AutoDownloadSettings"],
    ],
    "Bool",
  ],
  "account.uploadTheme": [
    0x1C3DB333,
    [
      ["flags", "#"],
      ["file", "InputFile"],
      ["thumb", "flags.0?InputFile"],
      ["file_name", "string"],
      ["mime_type", "string"],
    ],
    "Document",
  ],
  "account.createTheme": [
    0x652E4400,
    [
      ["flags", "#"],
      ["slug", "string"],
      ["title", "string"],
      ["document", "flags.2?InputDocument"],
      ["settings", "flags.3?Vector<InputThemeSettings>"],
    ],
    "Theme",
  ],
  "account.updateTheme": [
    0x2BF40CCC,
    [
      ["flags", "#"],
      ["format", "string"],
      ["theme", "InputTheme"],
      ["slug", "flags.0?string"],
      ["title", "flags.1?string"],
      ["document", "flags.2?InputDocument"],
      ["settings", "flags.3?Vector<InputThemeSettings>"],
    ],
    "Theme",
  ],
  "account.saveTheme": [
    0xF257106C,
    [
      ["theme", "InputTheme"],
      ["unsave", "Bool"],
    ],
    "Bool",
  ],
  "account.installTheme": [
    0xC727BB3B,
    [
      ["flags", "#"],
      ["dark", "flags.0?true"],
      ["theme", "flags.1?InputTheme"],
      ["format", "flags.2?string"],
      ["base_theme", "flags.3?BaseTheme"],
    ],
    "Bool",
  ],
  "account.getTheme": [
    0x3A5869EC,
    [
      ["format", "string"],
      ["theme", "InputTheme"],
    ],
    "Theme",
  ],
  "account.getThemes": [
    0x7206E458,
    [
      ["format", "string"],
      ["hash", "long"],
    ],
    "account.Themes",
  ],
  "account.setContentSettings": [
    0xB574B16B,
    [
      ["flags", "#"],
      ["sensitive_enabled", "flags.0?true"],
    ],
    "Bool",
  ],
  "account.getContentSettings": [
    0x8B9B4DAE,
    [],
    "account.ContentSettings",
  ],
  "account.getMultiWallPapers": [
    0x65AD71DC,
    [
      ["wallpapers", "Vector<InputWallPaper>"],
    ],
    "Vector<WallPaper>",
  ],
  "account.getGlobalPrivacySettings": [
    0xEB2B4CF6,
    [],
    "GlobalPrivacySettings",
  ],
  "account.setGlobalPrivacySettings": [
    0x1EDAAAC2,
    [
      ["settings", "GlobalPrivacySettings"],
    ],
    "GlobalPrivacySettings",
  ],
  "account.reportProfilePhoto": [
    0xFA8CC6F5,
    [
      ["peer", "InputPeer"],
      ["photo_id", "InputPhoto"],
      ["reason", "ReportReason"],
      ["message", "string"],
    ],
    "Bool",
  ],
  "account.resetPassword": [
    0x9308CE1B,
    [],
    "account.ResetPasswordResult",
  ],
  "account.declinePasswordReset": [
    0x4C9409F6,
    [],
    "Bool",
  ],
  "account.getChatThemes": [
    0xD638DE89,
    [
      ["hash", "long"],
    ],
    "account.Themes",
  ],
  "account.setAuthorizationTTL": [
    0xBF899AA0,
    [
      ["authorization_ttl_days", "int"],
    ],
    "Bool",
  ],
  "account.changeAuthorizationSettings": [
    0x40F48462,
    [
      ["flags", "#"],
      ["confirmed", "flags.3?true"],
      ["hash", "long"],
      ["encrypted_requests_disabled", "flags.0?Bool"],
      ["call_requests_disabled", "flags.1?Bool"],
    ],
    "Bool",
  ],
  "account.getSavedRingtones": [
    0xE1902288,
    [
      ["hash", "long"],
    ],
    "account.SavedRingtones",
  ],
  "account.saveRingtone": [
    0x3DEA5B03,
    [
      ["id", "InputDocument"],
      ["unsave", "Bool"],
    ],
    "account.SavedRingtone",
  ],
  "account.uploadRingtone": [
    0x831A83A2,
    [
      ["file", "InputFile"],
      ["file_name", "string"],
      ["mime_type", "string"],
    ],
    "Document",
  ],
  "account.updateEmojiStatus": [
    0xFBD3DE6B,
    [
      ["emoji_status", "EmojiStatus"],
    ],
    "Bool",
  ],
  "account.getDefaultEmojiStatuses": [
    0xD6753386,
    [
      ["hash", "long"],
    ],
    "account.EmojiStatuses",
  ],
  "account.getRecentEmojiStatuses": [
    0x0F578105,
    [
      ["hash", "long"],
    ],
    "account.EmojiStatuses",
  ],
  "account.clearRecentEmojiStatuses": [
    0x18201AAE,
    [],
    "Bool",
  ],
  "account.reorderUsernames": [
    0xEF500EAB,
    [
      ["order", "Vector<string>"],
    ],
    "Bool",
  ],
  "account.toggleUsername": [
    0x58D6B376,
    [
      ["username", "string"],
      ["active", "Bool"],
    ],
    "Bool",
  ],
  "account.getDefaultProfilePhotoEmojis": [
    0xE2750328,
    [
      ["hash", "long"],
    ],
    "EmojiList",
  ],
  "account.getDefaultGroupPhotoEmojis": [
    0x915860AE,
    [
      ["hash", "long"],
    ],
    "EmojiList",
  ],
  "account.getAutoSaveSettings": [
    0xADCBBCDA,
    [],
    "account.AutoSaveSettings",
  ],
  "account.saveAutoSaveSettings": [
    0xD69B8361,
    [
      ["flags", "#"],
      ["users", "flags.0?true"],
      ["chats", "flags.1?true"],
      ["broadcasts", "flags.2?true"],
      ["peer", "flags.3?InputPeer"],
      ["settings", "AutoSaveSettings"],
    ],
    "Bool",
  ],
  "account.deleteAutoSaveExceptions": [
    0x53BC0020,
    [],
    "Bool",
  ],
  "account.invalidateSignInCodes": [
    0xCA8AE8BA,
    [
      ["codes", "Vector<string>"],
    ],
    "Bool",
  ],
  "account.updateColor": [
    0x7CEFA15D,
    [
      ["flags", "#"],
      ["for_profile", "flags.1?true"],
      ["color", "flags.2?int"],
      ["background_emoji_id", "flags.0?long"],
    ],
    "Bool",
  ],
  "account.getDefaultBackgroundEmojis": [
    0xA60AB9CE,
    [
      ["hash", "long"],
    ],
    "EmojiList",
  ],
  "account.getChannelDefaultEmojiStatuses": [
    0x7727A7D5,
    [
      ["hash", "long"],
    ],
    "account.EmojiStatuses",
  ],
  "account.getChannelRestrictedStatusEmojis": [
    0x35A9E0D5,
    [
      ["hash", "long"],
    ],
    "EmojiList",
  ],
  "account.updateBusinessWorkHours": [
    0x4B00E066,
    [
      ["flags", "#"],
      ["business_work_hours", "flags.0?BusinessWorkHours"],
    ],
    "Bool",
  ],
  "account.updateBusinessLocation": [
    0x9E6B131A,
    [
      ["flags", "#"],
      ["geo_point", "flags.1?InputGeoPoint"],
      ["address", "flags.0?string"],
    ],
    "Bool",
  ],
  "account.updateBusinessGreetingMessage": [
    0x66CDAFC4,
    [
      ["flags", "#"],
      ["message", "flags.0?InputBusinessGreetingMessage"],
    ],
    "Bool",
  ],
  "account.updateBusinessAwayMessage": [
    0xA26A7FA5,
    [
      ["flags", "#"],
      ["message", "flags.0?InputBusinessAwayMessage"],
    ],
    "Bool",
  ],
  "account.updateConnectedBot": [
    0x43D8521D,
    [
      ["flags", "#"],
      ["can_reply", "flags.0?true"],
      ["deleted", "flags.1?true"],
      ["bot", "InputUser"],
      ["recipients", "InputBusinessBotRecipients"],
    ],
    "Updates",
  ],
  "account.getConnectedBots": [
    0x4EA4C80F,
    [],
    "account.ConnectedBots",
  ],
  "account.getBotBusinessConnection": [
    0x76A86270,
    [
      ["connection_id", "string"],
    ],
    "Updates",
  ],
  "account.updateBusinessIntro": [
    0xA614D034,
    [
      ["flags", "#"],
      ["intro", "flags.0?InputBusinessIntro"],
    ],
    "Bool",
  ],
  "account.toggleConnectedBotPaused": [
    0x646E1097,
    [
      ["peer", "InputPeer"],
      ["paused", "Bool"],
    ],
    "Bool",
  ],
  "account.disablePeerConnectedBot": [
    0x5E437ED9,
    [
      ["peer", "InputPeer"],
    ],
    "Bool",
  ],
  "account.updateBirthday": [
    0xCC6E0C11,
    [
      ["flags", "#"],
      ["birthday", "flags.0?Birthday"],
    ],
    "Bool",
  ],
  "account.createBusinessChatLink": [
    0x8851E68E,
    [
      ["link", "InputBusinessChatLink"],
    ],
    "BusinessChatLink",
  ],
  "account.editBusinessChatLink": [
    0x8C3410AF,
    [
      ["slug", "string"],
      ["link", "InputBusinessChatLink"],
    ],
    "BusinessChatLink",
  ],
  "account.deleteBusinessChatLink": [
    0x60073674,
    [
      ["slug", "string"],
    ],
    "Bool",
  ],
  "account.getBusinessChatLinks": [
    0x6F70DDE1,
    [],
    "account.BusinessChatLinks",
  ],
  "account.resolveBusinessChatLink": [
    0x5492E5EE,
    [
      ["slug", "string"],
    ],
    "account.ResolvedBusinessChatLinks",
  ],
  "account.updatePersonalChannel": [
    0xD94305E0,
    [
      ["channel", "InputChannel"],
    ],
    "Bool",
  ],
  "account.toggleSponsoredMessages": [
    0xB9D9A38D,
    [
      ["enabled", "Bool"],
    ],
    "Bool",
  ],
  "account.getReactionsNotifySettings": [
    0x06DD654C,
    [],
    "ReactionsNotifySettings",
  ],
  "account.setReactionsNotifySettings": [
    0x316CE548,
    [
      ["settings", "ReactionsNotifySettings"],
    ],
    "ReactionsNotifySettings",
  ],
  "account.getCollectibleEmojiStatuses": [
    0x2E7B4543,
    [
      ["hash", "long"],
    ],
    "account.EmojiStatuses",
  ],
  "account.addNoPaidMessagesException": [
    0x6F688AA7,
    [
      ["flags", "#"],
      ["refund_charged", "flags.0?true"],
      ["user_id", "InputUser"],
    ],
    "Bool",
  ],
  "account.getPaidMessagesRevenue": [
    0xF1266F38,
    [
      ["user_id", "InputUser"],
    ],
    "account.PaidMessagesRevenue",
  ],
  "users.getUsers": [
    0x0D91A548,
    [
      ["id", "Vector<InputUser>"],
    ],
    "Vector<User>",
  ],
  "users.getFullUser": [
    0xB60F5918,
    [
      ["id", "InputUser"],
    ],
    "users.UserFull",
  ],
  "users.setSecureValueErrors": [
    0x90C894B5,
    [
      ["id", "InputUser"],
      ["errors", "Vector<SecureValueError>"],
    ],
    "Bool",
  ],
  "users.getRequirementsToContact": [
    0xD89A83A3,
    [
      ["id", "Vector<InputUser>"],
    ],
    "Vector<RequirementToContact>",
  ],
  "contacts.getContactIDs": [
    0x7ADC669D,
    [
      ["hash", "long"],
    ],
    "Vector<int>",
  ],
  "contacts.getStatuses": [
    0xC4A353EE,
    [],
    "Vector<ContactStatus>",
  ],
  "contacts.getContacts": [
    0x5DD69E12,
    [
      ["hash", "long"],
    ],
    "contacts.Contacts",
  ],
  "contacts.importContacts": [
    0x2C800BE5,
    [
      ["contacts", "Vector<InputContact>"],
    ],
    "contacts.ImportedContacts",
  ],
  "contacts.deleteContacts": [
    0x096A0E00,
    [
      ["id", "Vector<InputUser>"],
    ],
    "Updates",
  ],
  "contacts.deleteByPhones": [
    0x1013FD9E,
    [
      ["phones", "Vector<string>"],
    ],
    "Bool",
  ],
  "contacts.block": [
    0x2E2E8734,
    [
      ["flags", "#"],
      ["my_stories_from", "flags.0?true"],
      ["id", "InputPeer"],
    ],
    "Bool",
  ],
  "contacts.unblock": [
    0xB550D328,
    [
      ["flags", "#"],
      ["my_stories_from", "flags.0?true"],
      ["id", "InputPeer"],
    ],
    "Bool",
  ],
  "contacts.getBlocked": [
    0x9A868F80,
    [
      ["flags", "#"],
      ["my_stories_from", "flags.0?true"],
      ["offset", "int"],
      ["limit", "int"],
    ],
    "contacts.Blocked",
  ],
  "contacts.search": [
    0x11F812D8,
    [
      ["q", "string"],
      ["limit", "int"],
    ],
    "contacts.Found",
  ],
  "contacts.resolveUsername": [
    0x725AFBBC,
    [
      ["flags", "#"],
      ["username", "string"],
      ["referer", "flags.0?string"],
    ],
    "contacts.ResolvedPeer",
  ],
  "contacts.getTopPeers": [
    0x973478B6,
    [
      ["flags", "#"],
      ["correspondents", "flags.0?true"],
      ["bots_pm", "flags.1?true"],
      ["bots_inline", "flags.2?true"],
      ["phone_calls", "flags.3?true"],
      ["forward_users", "flags.4?true"],
      ["forward_chats", "flags.5?true"],
      ["groups", "flags.10?true"],
      ["channels", "flags.15?true"],
      ["bots_app", "flags.16?true"],
      ["offset", "int"],
      ["limit", "int"],
      ["hash", "long"],
    ],
    "contacts.TopPeers",
  ],
  "contacts.resetTopPeerRating": [
    0x1AE373AC,
    [
      ["category", "TopPeerCategory"],
      ["peer", "InputPeer"],
    ],
    "Bool",
  ],
  "contacts.resetSaved": [
    0x879537F1,
    [],
    "Bool",
  ],
  "contacts.getSaved": [
    0x82F1E39F,
    [],
    "Vector<SavedContact>",
  ],
  "contacts.toggleTopPeers": [
    0x8514BDDA,
    [
      ["enabled", "Bool"],
    ],
    "Bool",
  ],
  "contacts.addContact": [
    0xE8F463D0,
    [
      ["flags", "#"],
      ["add_phone_privacy_exception", "flags.0?true"],
      ["id", "InputUser"],
      ["first_name", "string"],
      ["last_name", "string"],
      ["phone", "string"],
    ],
    "Updates",
  ],
  "contacts.acceptContact": [
    0xF831A20F,
    [
      ["id", "InputUser"],
    ],
    "Updates",
  ],
  "contacts.getLocated": [
    0xD348BC44,
    [
      ["flags", "#"],
      ["background", "flags.1?true"],
      ["geo_point", "InputGeoPoint"],
      ["self_expires", "flags.0?int"],
    ],
    "Updates",
  ],
  "contacts.blockFromReplies": [
    0x29A8962C,
    [
      ["flags", "#"],
      ["delete_message", "flags.0?true"],
      ["delete_history", "flags.1?true"],
      ["report_spam", "flags.2?true"],
      ["msg_id", "int"],
    ],
    "Updates",
  ],
  "contacts.resolvePhone": [
    0x8AF94344,
    [
      ["phone", "string"],
    ],
    "contacts.ResolvedPeer",
  ],
  "contacts.exportContactToken": [
    0xF8654027,
    [],
    "ExportedContactToken",
  ],
  "contacts.importContactToken": [
    0x13005788,
    [
      ["token", "string"],
    ],
    "User",
  ],
  "contacts.editCloseFriends": [
    0xBA6705F0,
    [
      ["id", "Vector<long>"],
    ],
    "Bool",
  ],
  "contacts.setBlocked": [
    0x94C65C76,
    [
      ["flags", "#"],
      ["my_stories_from", "flags.0?true"],
      ["id", "Vector<InputPeer>"],
      ["limit", "int"],
    ],
    "Bool",
  ],
  "contacts.getBirthdays": [
    0xDAEDA864,
    [],
    "contacts.ContactBirthdays",
  ],
  "messages.getMessages": [
    0x63C66506,
    [
      ["id", "Vector<InputMessage>"],
    ],
    "messages.Messages",
  ],
  "messages.getDialogs": [
    0xA0F4CB4F,
    [
      ["flags", "#"],
      ["exclude_pinned", "flags.0?true"],
      ["folder_id", "flags.1?int"],
      ["offset_date", "int"],
      ["offset_id", "int"],
      ["offset_peer", "InputPeer"],
      ["limit", "int"],
      ["hash", "long"],
    ],
    "messages.Dialogs",
  ],
  "messages.getHistory": [
    0x4423E6C5,
    [
      ["peer", "InputPeer"],
      ["offset_id", "int"],
      ["offset_date", "int"],
      ["add_offset", "int"],
      ["limit", "int"],
      ["max_id", "int"],
      ["min_id", "int"],
      ["hash", "long"],
    ],
    "messages.Messages",
  ],
  "messages.search": [
    0x29EE847A,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["q", "string"],
      ["from_id", "flags.0?InputPeer"],
      ["saved_peer_id", "flags.2?InputPeer"],
      ["saved_reaction", "flags.3?Vector<Reaction>"],
      ["top_msg_id", "flags.1?int"],
      ["filter", "MessagesFilter"],
      ["min_date", "int"],
      ["max_date", "int"],
      ["offset_id", "int"],
      ["add_offset", "int"],
      ["limit", "int"],
      ["max_id", "int"],
      ["min_id", "int"],
      ["hash", "long"],
    ],
    "messages.Messages",
  ],
  "messages.readHistory": [
    0x0E306D3A,
    [
      ["peer", "InputPeer"],
      ["max_id", "int"],
    ],
    "messages.AffectedMessages",
  ],
  "messages.deleteHistory": [
    0xB08F922A,
    [
      ["flags", "#"],
      ["just_clear", "flags.0?true"],
      ["revoke", "flags.1?true"],
      ["peer", "InputPeer"],
      ["max_id", "int"],
      ["min_date", "flags.2?int"],
      ["max_date", "flags.3?int"],
    ],
    "messages.AffectedHistory",
  ],
  "messages.deleteMessages": [
    0xE58E95D2,
    [
      ["flags", "#"],
      ["revoke", "flags.0?true"],
      ["id", "Vector<int>"],
    ],
    "messages.AffectedMessages",
  ],
  "messages.receivedMessages": [
    0x05A954C0,
    [
      ["max_id", "int"],
    ],
    "Vector<ReceivedNotifyMessage>",
  ],
  "messages.setTyping": [
    0x58943EE2,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["top_msg_id", "flags.0?int"],
      ["action", "SendMessageAction"],
    ],
    "Bool",
  ],
  "messages.sendMessage": [
    0xFBF2340A,
    [
      ["flags", "#"],
      ["no_webpage", "flags.1?true"],
      ["silent", "flags.5?true"],
      ["background", "flags.6?true"],
      ["clear_draft", "flags.7?true"],
      ["noforwards", "flags.14?true"],
      ["update_stickersets_order", "flags.15?true"],
      ["invert_media", "flags.16?true"],
      ["allow_paid_floodskip", "flags.19?true"],
      ["peer", "InputPeer"],
      ["reply_to", "flags.0?InputReplyTo"],
      ["message", "string"],
      ["random_id", "long"],
      ["reply_markup", "flags.2?ReplyMarkup"],
      ["entities", "flags.3?Vector<MessageEntity>"],
      ["schedule_date", "flags.10?int"],
      ["send_as", "flags.13?InputPeer"],
      ["quick_reply_shortcut", "flags.17?InputQuickReplyShortcut"],
      ["effect", "flags.18?long"],
      ["allow_paid_stars", "flags.21?long"],
    ],
    "Updates",
  ],
  "messages.sendMedia": [
    0xA550CD78,
    [
      ["flags", "#"],
      ["silent", "flags.5?true"],
      ["background", "flags.6?true"],
      ["clear_draft", "flags.7?true"],
      ["noforwards", "flags.14?true"],
      ["update_stickersets_order", "flags.15?true"],
      ["invert_media", "flags.16?true"],
      ["allow_paid_floodskip", "flags.19?true"],
      ["peer", "InputPeer"],
      ["reply_to", "flags.0?InputReplyTo"],
      ["media", "InputMedia"],
      ["message", "string"],
      ["random_id", "long"],
      ["reply_markup", "flags.2?ReplyMarkup"],
      ["entities", "flags.3?Vector<MessageEntity>"],
      ["schedule_date", "flags.10?int"],
      ["send_as", "flags.13?InputPeer"],
      ["quick_reply_shortcut", "flags.17?InputQuickReplyShortcut"],
      ["effect", "flags.18?long"],
      ["allow_paid_stars", "flags.21?long"],
    ],
    "Updates",
  ],
  "messages.forwardMessages": [
    0xBB9FA475,
    [
      ["flags", "#"],
      ["silent", "flags.5?true"],
      ["background", "flags.6?true"],
      ["with_my_score", "flags.8?true"],
      ["drop_author", "flags.11?true"],
      ["drop_media_captions", "flags.12?true"],
      ["noforwards", "flags.14?true"],
      ["allow_paid_floodskip", "flags.19?true"],
      ["from_peer", "InputPeer"],
      ["id", "Vector<int>"],
      ["random_id", "Vector<long>"],
      ["to_peer", "InputPeer"],
      ["top_msg_id", "flags.9?int"],
      ["schedule_date", "flags.10?int"],
      ["send_as", "flags.13?InputPeer"],
      ["quick_reply_shortcut", "flags.17?InputQuickReplyShortcut"],
      ["video_timestamp", "flags.20?int"],
      ["allow_paid_stars", "flags.21?long"],
    ],
    "Updates",
  ],
  "messages.reportSpam": [
    0xCF1592DB,
    [
      ["peer", "InputPeer"],
    ],
    "Bool",
  ],
  "messages.getPeerSettings": [
    0xEFD9A6A2,
    [
      ["peer", "InputPeer"],
    ],
    "messages.PeerSettings",
  ],
  "messages.report": [
    0xFC78AF9B,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
      ["option", "bytes"],
      ["message", "string"],
    ],
    "ReportResult",
  ],
  "messages.getChats": [
    0x49E9528F,
    [
      ["id", "Vector<long>"],
    ],
    "messages.Chats",
  ],
  "messages.getFullChat": [
    0xAEB00B34,
    [
      ["chat_id", "long"],
    ],
    "messages.ChatFull",
  ],
  "messages.editChatTitle": [
    0x73783FFD,
    [
      ["chat_id", "long"],
      ["title", "string"],
    ],
    "Updates",
  ],
  "messages.editChatPhoto": [
    0x35DDD674,
    [
      ["chat_id", "long"],
      ["photo", "InputChatPhoto"],
    ],
    "Updates",
  ],
  "messages.addChatUser": [
    0xCBC6D107,
    [
      ["chat_id", "long"],
      ["user_id", "InputUser"],
      ["fwd_limit", "int"],
    ],
    "messages.InvitedUsers",
  ],
  "messages.deleteChatUser": [
    0xA2185CAB,
    [
      ["flags", "#"],
      ["revoke_history", "flags.0?true"],
      ["chat_id", "long"],
      ["user_id", "InputUser"],
    ],
    "Updates",
  ],
  "messages.createChat": [
    0x92CEDDD4,
    [
      ["flags", "#"],
      ["users", "Vector<InputUser>"],
      ["title", "string"],
      ["ttl_period", "flags.0?int"],
    ],
    "messages.InvitedUsers",
  ],
  "messages.getDhConfig": [
    0x26CF8950,
    [
      ["version", "int"],
      ["random_length", "int"],
    ],
    "messages.DhConfig",
  ],
  "messages.requestEncryption": [
    0xF64DAF43,
    [
      ["user_id", "InputUser"],
      ["random_id", "int"],
      ["g_a", "bytes"],
    ],
    "EncryptedChat",
  ],
  "messages.acceptEncryption": [
    0x3DBC0415,
    [
      ["peer", "InputEncryptedChat"],
      ["g_b", "bytes"],
      ["key_fingerprint", "long"],
    ],
    "EncryptedChat",
  ],
  "messages.discardEncryption": [
    0xF393AEA0,
    [
      ["flags", "#"],
      ["delete_history", "flags.0?true"],
      ["chat_id", "int"],
    ],
    "Bool",
  ],
  "messages.setEncryptedTyping": [
    0x791451ED,
    [
      ["peer", "InputEncryptedChat"],
      ["typing", "Bool"],
    ],
    "Bool",
  ],
  "messages.readEncryptedHistory": [
    0x7F4B690A,
    [
      ["peer", "InputEncryptedChat"],
      ["max_date", "int"],
    ],
    "Bool",
  ],
  "messages.sendEncrypted": [
    0x44FA7A15,
    [
      ["flags", "#"],
      ["silent", "flags.0?true"],
      ["peer", "InputEncryptedChat"],
      ["random_id", "long"],
      ["data", "bytes"],
    ],
    "messages.SentEncryptedMessage",
  ],
  "messages.sendEncryptedFile": [
    0x5559481D,
    [
      ["flags", "#"],
      ["silent", "flags.0?true"],
      ["peer", "InputEncryptedChat"],
      ["random_id", "long"],
      ["data", "bytes"],
      ["file", "InputEncryptedFile"],
    ],
    "messages.SentEncryptedMessage",
  ],
  "messages.sendEncryptedService": [
    0x32D439A4,
    [
      ["peer", "InputEncryptedChat"],
      ["random_id", "long"],
      ["data", "bytes"],
    ],
    "messages.SentEncryptedMessage",
  ],
  "messages.receivedQueue": [
    0x55A5BB66,
    [
      ["max_qts", "int"],
    ],
    "Vector<long>",
  ],
  "messages.reportEncryptedSpam": [
    0x4B0C8C0F,
    [
      ["peer", "InputEncryptedChat"],
    ],
    "Bool",
  ],
  "messages.readMessageContents": [
    0x36A73F77,
    [
      ["id", "Vector<int>"],
    ],
    "messages.AffectedMessages",
  ],
  "messages.getStickers": [
    0xD5A5D3A1,
    [
      ["emoticon", "string"],
      ["hash", "long"],
    ],
    "messages.Stickers",
  ],
  "messages.getAllStickers": [
    0xB8A0A1A8,
    [
      ["hash", "long"],
    ],
    "messages.AllStickers",
  ],
  "messages.getWebPagePreview": [
    0x570D6F6F,
    [
      ["flags", "#"],
      ["message", "string"],
      ["entities", "flags.3?Vector<MessageEntity>"],
    ],
    "messages.WebPagePreview",
  ],
  "messages.exportChatInvite": [
    0xA455DE90,
    [
      ["flags", "#"],
      ["legacy_revoke_permanent", "flags.2?true"],
      ["request_needed", "flags.3?true"],
      ["peer", "InputPeer"],
      ["expire_date", "flags.0?int"],
      ["usage_limit", "flags.1?int"],
      ["title", "flags.4?string"],
      ["subscription_pricing", "flags.5?StarsSubscriptionPricing"],
    ],
    "ExportedChatInvite",
  ],
  "messages.checkChatInvite": [
    0x3EADB1BB,
    [
      ["hash", "string"],
    ],
    "ChatInvite",
  ],
  "messages.importChatInvite": [
    0x6C50051C,
    [
      ["hash", "string"],
    ],
    "Updates",
  ],
  "messages.getStickerSet": [
    0xC8A0EC74,
    [
      ["stickerset", "InputStickerSet"],
      ["hash", "int"],
    ],
    "messages.StickerSet",
  ],
  "messages.installStickerSet": [
    0xC78FE460,
    [
      ["stickerset", "InputStickerSet"],
      ["archived", "Bool"],
    ],
    "messages.StickerSetInstallResult",
  ],
  "messages.uninstallStickerSet": [
    0xF96E55DE,
    [
      ["stickerset", "InputStickerSet"],
    ],
    "Bool",
  ],
  "messages.startBot": [
    0xE6DF7378,
    [
      ["bot", "InputUser"],
      ["peer", "InputPeer"],
      ["random_id", "long"],
      ["start_param", "string"],
    ],
    "Updates",
  ],
  "messages.getMessagesViews": [
    0x5784D3E1,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
      ["increment", "Bool"],
    ],
    "messages.MessageViews",
  ],
  "messages.editChatAdmin": [
    0xA85BD1C2,
    [
      ["chat_id", "long"],
      ["user_id", "InputUser"],
      ["is_admin", "Bool"],
    ],
    "Bool",
  ],
  "messages.migrateChat": [
    0xA2875319,
    [
      ["chat_id", "long"],
    ],
    "Updates",
  ],
  "messages.searchGlobal": [
    0x4BC6589A,
    [
      ["flags", "#"],
      ["broadcasts_only", "flags.1?true"],
      ["groups_only", "flags.2?true"],
      ["users_only", "flags.3?true"],
      ["folder_id", "flags.0?int"],
      ["q", "string"],
      ["filter", "MessagesFilter"],
      ["min_date", "int"],
      ["max_date", "int"],
      ["offset_rate", "int"],
      ["offset_peer", "InputPeer"],
      ["offset_id", "int"],
      ["limit", "int"],
    ],
    "messages.Messages",
  ],
  "messages.reorderStickerSets": [
    0x78337739,
    [
      ["flags", "#"],
      ["masks", "flags.0?true"],
      ["emojis", "flags.1?true"],
      ["order", "Vector<long>"],
    ],
    "Bool",
  ],
  "messages.getDocumentByHash": [
    0xB1F2061F,
    [
      ["sha256", "bytes"],
      ["size", "long"],
      ["mime_type", "string"],
    ],
    "Document",
  ],
  "messages.getSavedGifs": [
    0x5CF09635,
    [
      ["hash", "long"],
    ],
    "messages.SavedGifs",
  ],
  "messages.saveGif": [
    0x327A30CB,
    [
      ["id", "InputDocument"],
      ["unsave", "Bool"],
    ],
    "Bool",
  ],
  "messages.getInlineBotResults": [
    0x514E999D,
    [
      ["flags", "#"],
      ["bot", "InputUser"],
      ["peer", "InputPeer"],
      ["geo_point", "flags.0?InputGeoPoint"],
      ["query", "string"],
      ["offset", "string"],
    ],
    "messages.BotResults",
  ],
  "messages.setInlineBotResults": [
    0xBB12A419,
    [
      ["flags", "#"],
      ["gallery", "flags.0?true"],
      ["private", "flags.1?true"],
      ["query_id", "long"],
      ["results", "Vector<InputBotInlineResult>"],
      ["cache_time", "int"],
      ["next_offset", "flags.2?string"],
      ["switch_pm", "flags.3?InlineBotSwitchPM"],
      ["switch_webview", "flags.4?InlineBotWebView"],
    ],
    "Bool",
  ],
  "messages.sendInlineBotResult": [
    0xC0CF7646,
    [
      ["flags", "#"],
      ["silent", "flags.5?true"],
      ["background", "flags.6?true"],
      ["clear_draft", "flags.7?true"],
      ["hide_via", "flags.11?true"],
      ["peer", "InputPeer"],
      ["reply_to", "flags.0?InputReplyTo"],
      ["random_id", "long"],
      ["query_id", "long"],
      ["id", "string"],
      ["schedule_date", "flags.10?int"],
      ["send_as", "flags.13?InputPeer"],
      ["quick_reply_shortcut", "flags.17?InputQuickReplyShortcut"],
      ["allow_paid_stars", "flags.21?long"],
    ],
    "Updates",
  ],
  "messages.getMessageEditData": [
    0xFDA68D36,
    [
      ["peer", "InputPeer"],
      ["id", "int"],
    ],
    "messages.MessageEditData",
  ],
  "messages.editMessage": [
    0xDFD14005,
    [
      ["flags", "#"],
      ["no_webpage", "flags.1?true"],
      ["invert_media", "flags.16?true"],
      ["peer", "InputPeer"],
      ["id", "int"],
      ["message", "flags.11?string"],
      ["media", "flags.14?InputMedia"],
      ["reply_markup", "flags.2?ReplyMarkup"],
      ["entities", "flags.3?Vector<MessageEntity>"],
      ["schedule_date", "flags.15?int"],
      ["quick_reply_shortcut_id", "flags.17?int"],
    ],
    "Updates",
  ],
  "messages.editInlineBotMessage": [
    0x83557DBA,
    [
      ["flags", "#"],
      ["no_webpage", "flags.1?true"],
      ["invert_media", "flags.16?true"],
      ["id", "InputBotInlineMessageID"],
      ["message", "flags.11?string"],
      ["media", "flags.14?InputMedia"],
      ["reply_markup", "flags.2?ReplyMarkup"],
      ["entities", "flags.3?Vector<MessageEntity>"],
    ],
    "Bool",
  ],
  "messages.getBotCallbackAnswer": [
    0x9342CA07,
    [
      ["flags", "#"],
      ["game", "flags.1?true"],
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["data", "flags.0?bytes"],
      ["password", "flags.2?InputCheckPasswordSRP"],
    ],
    "messages.BotCallbackAnswer",
  ],
  "messages.setBotCallbackAnswer": [
    0xD58F130A,
    [
      ["flags", "#"],
      ["alert", "flags.1?true"],
      ["query_id", "long"],
      ["message", "flags.0?string"],
      ["url", "flags.2?string"],
      ["cache_time", "int"],
    ],
    "Bool",
  ],
  "messages.getPeerDialogs": [
    0xE470BCFD,
    [
      ["peers", "Vector<InputDialogPeer>"],
    ],
    "messages.PeerDialogs",
  ],
  "messages.saveDraft": [
    0xD372C5CE,
    [
      ["flags", "#"],
      ["no_webpage", "flags.1?true"],
      ["invert_media", "flags.6?true"],
      ["reply_to", "flags.4?InputReplyTo"],
      ["peer", "InputPeer"],
      ["message", "string"],
      ["entities", "flags.3?Vector<MessageEntity>"],
      ["media", "flags.5?InputMedia"],
      ["effect", "flags.7?long"],
    ],
    "Bool",
  ],
  "messages.getAllDrafts": [
    0x6A3F8D65,
    [],
    "Updates",
  ],
  "messages.getFeaturedStickers": [
    0x64780B14,
    [
      ["hash", "long"],
    ],
    "messages.FeaturedStickers",
  ],
  "messages.readFeaturedStickers": [
    0x5B118126,
    [
      ["id", "Vector<long>"],
    ],
    "Bool",
  ],
  "messages.getRecentStickers": [
    0x9DA9403B,
    [
      ["flags", "#"],
      ["attached", "flags.0?true"],
      ["hash", "long"],
    ],
    "messages.RecentStickers",
  ],
  "messages.saveRecentSticker": [
    0x392718F8,
    [
      ["flags", "#"],
      ["attached", "flags.0?true"],
      ["id", "InputDocument"],
      ["unsave", "Bool"],
    ],
    "Bool",
  ],
  "messages.clearRecentStickers": [
    0x8999602D,
    [
      ["flags", "#"],
      ["attached", "flags.0?true"],
    ],
    "Bool",
  ],
  "messages.getArchivedStickers": [
    0x57F17692,
    [
      ["flags", "#"],
      ["masks", "flags.0?true"],
      ["emojis", "flags.1?true"],
      ["offset_id", "long"],
      ["limit", "int"],
    ],
    "messages.ArchivedStickers",
  ],
  "messages.getMaskStickers": [
    0x640F82B8,
    [
      ["hash", "long"],
    ],
    "messages.AllStickers",
  ],
  "messages.getAttachedStickers": [
    0xCC5B67CC,
    [
      ["media", "InputStickeredMedia"],
    ],
    "Vector<StickerSetCovered>",
  ],
  "messages.setGameScore": [
    0x8EF8ECC0,
    [
      ["flags", "#"],
      ["edit_message", "flags.0?true"],
      ["force", "flags.1?true"],
      ["peer", "InputPeer"],
      ["id", "int"],
      ["user_id", "InputUser"],
      ["score", "int"],
    ],
    "Updates",
  ],
  "messages.setInlineGameScore": [
    0x15AD9F64,
    [
      ["flags", "#"],
      ["edit_message", "flags.0?true"],
      ["force", "flags.1?true"],
      ["id", "InputBotInlineMessageID"],
      ["user_id", "InputUser"],
      ["score", "int"],
    ],
    "Bool",
  ],
  "messages.getGameHighScores": [
    0xE822649D,
    [
      ["peer", "InputPeer"],
      ["id", "int"],
      ["user_id", "InputUser"],
    ],
    "messages.HighScores",
  ],
  "messages.getInlineGameHighScores": [
    0x0F635E1B,
    [
      ["id", "InputBotInlineMessageID"],
      ["user_id", "InputUser"],
    ],
    "messages.HighScores",
  ],
  "messages.getCommonChats": [
    0xE40CA104,
    [
      ["user_id", "InputUser"],
      ["max_id", "long"],
      ["limit", "int"],
    ],
    "messages.Chats",
  ],
  "messages.getWebPage": [
    0x8D9692A3,
    [
      ["url", "string"],
      ["hash", "int"],
    ],
    "messages.WebPage",
  ],
  "messages.toggleDialogPin": [
    0xA731E257,
    [
      ["flags", "#"],
      ["pinned", "flags.0?true"],
      ["peer", "InputDialogPeer"],
    ],
    "Bool",
  ],
  "messages.reorderPinnedDialogs": [
    0x3B1ADF37,
    [
      ["flags", "#"],
      ["force", "flags.0?true"],
      ["folder_id", "int"],
      ["order", "Vector<InputDialogPeer>"],
    ],
    "Bool",
  ],
  "messages.getPinnedDialogs": [
    0xD6B94DF2,
    [
      ["folder_id", "int"],
    ],
    "messages.PeerDialogs",
  ],
  "messages.setBotShippingResults": [
    0xE5F672FA,
    [
      ["flags", "#"],
      ["query_id", "long"],
      ["error", "flags.0?string"],
      ["shipping_options", "flags.1?Vector<ShippingOption>"],
    ],
    "Bool",
  ],
  "messages.setBotPrecheckoutResults": [
    0x09C2DD95,
    [
      ["flags", "#"],
      ["success", "flags.1?true"],
      ["query_id", "long"],
      ["error", "flags.0?string"],
    ],
    "Bool",
  ],
  "messages.uploadMedia": [
    0x14967978,
    [
      ["flags", "#"],
      ["business_connection_id", "flags.0?string"],
      ["peer", "InputPeer"],
      ["media", "InputMedia"],
    ],
    "MessageMedia",
  ],
  "messages.sendScreenshotNotification": [
    0xA1405817,
    [
      ["peer", "InputPeer"],
      ["reply_to", "InputReplyTo"],
      ["random_id", "long"],
    ],
    "Updates",
  ],
  "messages.getFavedStickers": [
    0x04F1AAA9,
    [
      ["hash", "long"],
    ],
    "messages.FavedStickers",
  ],
  "messages.faveSticker": [
    0xB9FFC55B,
    [
      ["id", "InputDocument"],
      ["unfave", "Bool"],
    ],
    "Bool",
  ],
  "messages.getUnreadMentions": [
    0xF107E790,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["top_msg_id", "flags.0?int"],
      ["offset_id", "int"],
      ["add_offset", "int"],
      ["limit", "int"],
      ["max_id", "int"],
      ["min_id", "int"],
    ],
    "messages.Messages",
  ],
  "messages.readMentions": [
    0x36E5BF4D,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["top_msg_id", "flags.0?int"],
    ],
    "messages.AffectedHistory",
  ],
  "messages.getRecentLocations": [
    0x702A40E0,
    [
      ["peer", "InputPeer"],
      ["limit", "int"],
      ["hash", "long"],
    ],
    "messages.Messages",
  ],
  "messages.sendMultiMedia": [
    0x1BF89D74,
    [
      ["flags", "#"],
      ["silent", "flags.5?true"],
      ["background", "flags.6?true"],
      ["clear_draft", "flags.7?true"],
      ["noforwards", "flags.14?true"],
      ["update_stickersets_order", "flags.15?true"],
      ["invert_media", "flags.16?true"],
      ["allow_paid_floodskip", "flags.19?true"],
      ["peer", "InputPeer"],
      ["reply_to", "flags.0?InputReplyTo"],
      ["multi_media", "Vector<InputSingleMedia>"],
      ["schedule_date", "flags.10?int"],
      ["send_as", "flags.13?InputPeer"],
      ["quick_reply_shortcut", "flags.17?InputQuickReplyShortcut"],
      ["effect", "flags.18?long"],
      ["allow_paid_stars", "flags.21?long"],
    ],
    "Updates",
  ],
  "messages.uploadEncryptedFile": [
    0x5057C497,
    [
      ["peer", "InputEncryptedChat"],
      ["file", "InputEncryptedFile"],
    ],
    "EncryptedFile",
  ],
  "messages.searchStickerSets": [
    0x35705B8A,
    [
      ["flags", "#"],
      ["exclude_featured", "flags.0?true"],
      ["q", "string"],
      ["hash", "long"],
    ],
    "messages.FoundStickerSets",
  ],
  "messages.getSplitRanges": [
    0x1CFF7E08,
    [],
    "Vector<MessageRange>",
  ],
  "messages.markDialogUnread": [
    0xC286D98F,
    [
      ["flags", "#"],
      ["unread", "flags.0?true"],
      ["peer", "InputDialogPeer"],
    ],
    "Bool",
  ],
  "messages.getDialogUnreadMarks": [
    0x22E24E22,
    [],
    "Vector<DialogPeer>",
  ],
  "messages.clearAllDrafts": [
    0x7E58EE9C,
    [],
    "Bool",
  ],
  "messages.updatePinnedMessage": [
    0xD2AAF7EC,
    [
      ["flags", "#"],
      ["silent", "flags.0?true"],
      ["unpin", "flags.1?true"],
      ["pm_oneside", "flags.2?true"],
      ["peer", "InputPeer"],
      ["id", "int"],
    ],
    "Updates",
  ],
  "messages.sendVote": [
    0x10EA6184,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["options", "Vector<bytes>"],
    ],
    "Updates",
  ],
  "messages.getPollResults": [
    0x73BB643B,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "Updates",
  ],
  "messages.getOnlines": [
    0x6E2BE050,
    [
      ["peer", "InputPeer"],
    ],
    "ChatOnlines",
  ],
  "messages.editChatAbout": [
    0xDEF60797,
    [
      ["peer", "InputPeer"],
      ["about", "string"],
    ],
    "Bool",
  ],
  "messages.editChatDefaultBannedRights": [
    0xA5866B41,
    [
      ["peer", "InputPeer"],
      ["banned_rights", "ChatBannedRights"],
    ],
    "Updates",
  ],
  "messages.getEmojiKeywords": [
    0x35A0E062,
    [
      ["lang_code", "string"],
    ],
    "EmojiKeywordsDifference",
  ],
  "messages.getEmojiKeywordsDifference": [
    0x1508B6AF,
    [
      ["lang_code", "string"],
      ["from_version", "int"],
    ],
    "EmojiKeywordsDifference",
  ],
  "messages.getEmojiKeywordsLanguages": [
    0x4E9963B2,
    [
      ["lang_codes", "Vector<string>"],
    ],
    "Vector<EmojiLanguage>",
  ],
  "messages.getEmojiURL": [
    0xD5B10C26,
    [
      ["lang_code", "string"],
    ],
    "EmojiURL",
  ],
  "messages.getSearchCounters": [
    0x1BBCF300,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["saved_peer_id", "flags.2?InputPeer"],
      ["top_msg_id", "flags.0?int"],
      ["filters", "Vector<MessagesFilter>"],
    ],
    "Vector<messages.SearchCounter>",
  ],
  "messages.requestUrlAuth": [
    0x198FB446,
    [
      ["flags", "#"],
      ["peer", "flags.1?InputPeer"],
      ["msg_id", "flags.1?int"],
      ["button_id", "flags.1?int"],
      ["url", "flags.2?string"],
    ],
    "UrlAuthResult",
  ],
  "messages.acceptUrlAuth": [
    0xB12C7125,
    [
      ["flags", "#"],
      ["write_allowed", "flags.0?true"],
      ["peer", "flags.1?InputPeer"],
      ["msg_id", "flags.1?int"],
      ["button_id", "flags.1?int"],
      ["url", "flags.2?string"],
    ],
    "UrlAuthResult",
  ],
  "messages.hidePeerSettingsBar": [
    0x4FACB138,
    [
      ["peer", "InputPeer"],
    ],
    "Bool",
  ],
  "messages.getScheduledHistory": [
    0xF516760B,
    [
      ["peer", "InputPeer"],
      ["hash", "long"],
    ],
    "messages.Messages",
  ],
  "messages.getScheduledMessages": [
    0xBDBB0464,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "messages.Messages",
  ],
  "messages.sendScheduledMessages": [
    0xBD38850A,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Updates",
  ],
  "messages.deleteScheduledMessages": [
    0x59AE2B16,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Updates",
  ],
  "messages.getPollVotes": [
    0xB86E380E,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["id", "int"],
      ["option", "flags.0?bytes"],
      ["offset", "flags.1?string"],
      ["limit", "int"],
    ],
    "messages.VotesList",
  ],
  "messages.toggleStickerSets": [
    0xB5052FEA,
    [
      ["flags", "#"],
      ["uninstall", "flags.0?true"],
      ["archive", "flags.1?true"],
      ["unarchive", "flags.2?true"],
      ["stickersets", "Vector<InputStickerSet>"],
    ],
    "Bool",
  ],
  "messages.getDialogFilters": [
    0xEFD48C89,
    [],
    "messages.DialogFilters",
  ],
  "messages.getSuggestedDialogFilters": [
    0xA29CD42C,
    [],
    "Vector<DialogFilterSuggested>",
  ],
  "messages.updateDialogFilter": [
    0x1AD4A04A,
    [
      ["flags", "#"],
      ["id", "int"],
      ["filter", "flags.0?DialogFilter"],
    ],
    "Bool",
  ],
  "messages.updateDialogFiltersOrder": [
    0xC563C1E4,
    [
      ["order", "Vector<int>"],
    ],
    "Bool",
  ],
  "messages.getOldFeaturedStickers": [
    0x7ED094A1,
    [
      ["offset", "int"],
      ["limit", "int"],
      ["hash", "long"],
    ],
    "messages.FeaturedStickers",
  ],
  "messages.getReplies": [
    0x22DDD30C,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["offset_id", "int"],
      ["offset_date", "int"],
      ["add_offset", "int"],
      ["limit", "int"],
      ["max_id", "int"],
      ["min_id", "int"],
      ["hash", "long"],
    ],
    "messages.Messages",
  ],
  "messages.getDiscussionMessage": [
    0x446972FD,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "messages.DiscussionMessage",
  ],
  "messages.readDiscussion": [
    0xF731A9F4,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["read_max_id", "int"],
    ],
    "Bool",
  ],
  "messages.unpinAllMessages": [
    0xEE22B9A8,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["top_msg_id", "flags.0?int"],
    ],
    "messages.AffectedHistory",
  ],
  "messages.deleteChat": [
    0x5BD0EE50,
    [
      ["chat_id", "long"],
    ],
    "Bool",
  ],
  "messages.deletePhoneCallHistory": [
    0xF9CBE409,
    [
      ["flags", "#"],
      ["revoke", "flags.0?true"],
    ],
    "messages.AffectedFoundMessages",
  ],
  "messages.checkHistoryImport": [
    0x43FE19F3,
    [
      ["import_head", "string"],
    ],
    "messages.HistoryImportParsed",
  ],
  "messages.initHistoryImport": [
    0x34090C3B,
    [
      ["peer", "InputPeer"],
      ["file", "InputFile"],
      ["media_count", "int"],
    ],
    "messages.HistoryImport",
  ],
  "messages.uploadImportedMedia": [
    0x2A862092,
    [
      ["peer", "InputPeer"],
      ["import_id", "long"],
      ["file_name", "string"],
      ["media", "InputMedia"],
    ],
    "MessageMedia",
  ],
  "messages.startHistoryImport": [
    0xB43DF344,
    [
      ["peer", "InputPeer"],
      ["import_id", "long"],
    ],
    "Bool",
  ],
  "messages.getExportedChatInvites": [
    0xA2B5A3F6,
    [
      ["flags", "#"],
      ["revoked", "flags.3?true"],
      ["peer", "InputPeer"],
      ["admin_id", "InputUser"],
      ["offset_date", "flags.2?int"],
      ["offset_link", "flags.2?string"],
      ["limit", "int"],
    ],
    "messages.ExportedChatInvites",
  ],
  "messages.getExportedChatInvite": [
    0x73746F5C,
    [
      ["peer", "InputPeer"],
      ["link", "string"],
    ],
    "messages.ExportedChatInvite",
  ],
  "messages.editExportedChatInvite": [
    0xBDCA2F75,
    [
      ["flags", "#"],
      ["revoked", "flags.2?true"],
      ["peer", "InputPeer"],
      ["link", "string"],
      ["expire_date", "flags.0?int"],
      ["usage_limit", "flags.1?int"],
      ["request_needed", "flags.3?Bool"],
      ["title", "flags.4?string"],
    ],
    "messages.ExportedChatInvite",
  ],
  "messages.deleteRevokedExportedChatInvites": [
    0x56987BD5,
    [
      ["peer", "InputPeer"],
      ["admin_id", "InputUser"],
    ],
    "Bool",
  ],
  "messages.deleteExportedChatInvite": [
    0xD464A42B,
    [
      ["peer", "InputPeer"],
      ["link", "string"],
    ],
    "Bool",
  ],
  "messages.getAdminsWithInvites": [
    0x3920E6EF,
    [
      ["peer", "InputPeer"],
    ],
    "messages.ChatAdminsWithInvites",
  ],
  "messages.getChatInviteImporters": [
    0xDF04DD4E,
    [
      ["flags", "#"],
      ["requested", "flags.0?true"],
      ["subscription_expired", "flags.3?true"],
      ["peer", "InputPeer"],
      ["link", "flags.1?string"],
      ["q", "flags.2?string"],
      ["offset_date", "int"],
      ["offset_user", "InputUser"],
      ["limit", "int"],
    ],
    "messages.ChatInviteImporters",
  ],
  "messages.setHistoryTTL": [
    0xB80E5FE4,
    [
      ["peer", "InputPeer"],
      ["period", "int"],
    ],
    "Updates",
  ],
  "messages.checkHistoryImportPeer": [
    0x5DC60F03,
    [
      ["peer", "InputPeer"],
    ],
    "messages.CheckedHistoryImportPeer",
  ],
  "messages.setChatTheme": [
    0xE63BE13F,
    [
      ["peer", "InputPeer"],
      ["emoticon", "string"],
    ],
    "Updates",
  ],
  "messages.getMessageReadParticipants": [
    0x31C1C44F,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "Vector<ReadParticipantDate>",
  ],
  "messages.getSearchResultsCalendar": [
    0x6AA3F6BD,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["saved_peer_id", "flags.2?InputPeer"],
      ["filter", "MessagesFilter"],
      ["offset_id", "int"],
      ["offset_date", "int"],
    ],
    "messages.SearchResultsCalendar",
  ],
  "messages.getSearchResultsPositions": [
    0x9C7F2F10,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["saved_peer_id", "flags.2?InputPeer"],
      ["filter", "MessagesFilter"],
      ["offset_id", "int"],
      ["limit", "int"],
    ],
    "messages.SearchResultsPositions",
  ],
  "messages.hideChatJoinRequest": [
    0x7FE7E815,
    [
      ["flags", "#"],
      ["approved", "flags.0?true"],
      ["peer", "InputPeer"],
      ["user_id", "InputUser"],
    ],
    "Updates",
  ],
  "messages.hideAllChatJoinRequests": [
    0xE085F4EA,
    [
      ["flags", "#"],
      ["approved", "flags.0?true"],
      ["peer", "InputPeer"],
      ["link", "flags.1?string"],
    ],
    "Updates",
  ],
  "messages.toggleNoForwards": [
    0xB11EAFA2,
    [
      ["peer", "InputPeer"],
      ["enabled", "Bool"],
    ],
    "Updates",
  ],
  "messages.saveDefaultSendAs": [
    0xCCFDDF96,
    [
      ["peer", "InputPeer"],
      ["send_as", "InputPeer"],
    ],
    "Bool",
  ],
  "messages.sendReaction": [
    0xD30D78D4,
    [
      ["flags", "#"],
      ["big", "flags.1?true"],
      ["add_to_recent", "flags.2?true"],
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["reaction", "flags.0?Vector<Reaction>"],
    ],
    "Updates",
  ],
  "messages.getMessagesReactions": [
    0x8BBA90E6,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Updates",
  ],
  "messages.getMessageReactionsList": [
    0x461B3F48,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["id", "int"],
      ["reaction", "flags.0?Reaction"],
      ["offset", "flags.1?string"],
      ["limit", "int"],
    ],
    "messages.MessageReactionsList",
  ],
  "messages.setChatAvailableReactions": [
    0x864B2581,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["available_reactions", "ChatReactions"],
      ["reactions_limit", "flags.0?int"],
      ["paid_enabled", "flags.1?Bool"],
    ],
    "Updates",
  ],
  "messages.getAvailableReactions": [
    0x18DEA0AC,
    [
      ["hash", "int"],
    ],
    "messages.AvailableReactions",
  ],
  "messages.setDefaultReaction": [
    0x4F47A016,
    [
      ["reaction", "Reaction"],
    ],
    "Bool",
  ],
  "messages.translateText": [
    0x63183030,
    [
      ["flags", "#"],
      ["peer", "flags.0?InputPeer"],
      ["id", "flags.0?Vector<int>"],
      ["text", "flags.1?Vector<TextWithEntities>"],
      ["to_lang", "string"],
    ],
    "messages.TranslatedText",
  ],
  "messages.getUnreadReactions": [
    0x3223495B,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["top_msg_id", "flags.0?int"],
      ["offset_id", "int"],
      ["add_offset", "int"],
      ["limit", "int"],
      ["max_id", "int"],
      ["min_id", "int"],
    ],
    "messages.Messages",
  ],
  "messages.readReactions": [
    0x54AA7F8E,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["top_msg_id", "flags.0?int"],
    ],
    "messages.AffectedHistory",
  ],
  "messages.searchSentMedia": [
    0x107E31A0,
    [
      ["q", "string"],
      ["filter", "MessagesFilter"],
      ["limit", "int"],
    ],
    "messages.Messages",
  ],
  "messages.getAttachMenuBots": [
    0x16FCC2CB,
    [
      ["hash", "long"],
    ],
    "AttachMenuBots",
  ],
  "messages.getAttachMenuBot": [
    0x77216192,
    [
      ["bot", "InputUser"],
    ],
    "AttachMenuBotsBot",
  ],
  "messages.toggleBotInAttachMenu": [
    0x69F59D69,
    [
      ["flags", "#"],
      ["write_allowed", "flags.0?true"],
      ["bot", "InputUser"],
      ["enabled", "Bool"],
    ],
    "Bool",
  ],
  "messages.requestWebView": [
    0x269DC2C1,
    [
      ["flags", "#"],
      ["from_bot_menu", "flags.4?true"],
      ["silent", "flags.5?true"],
      ["compact", "flags.7?true"],
      ["fullscreen", "flags.8?true"],
      ["peer", "InputPeer"],
      ["bot", "InputUser"],
      ["url", "flags.1?string"],
      ["start_param", "flags.3?string"],
      ["theme_params", "flags.2?DataJSON"],
      ["platform", "string"],
      ["reply_to", "flags.0?InputReplyTo"],
      ["send_as", "flags.13?InputPeer"],
    ],
    "WebViewResult",
  ],
  "messages.prolongWebView": [
    0xB0D81A83,
    [
      ["flags", "#"],
      ["silent", "flags.5?true"],
      ["peer", "InputPeer"],
      ["bot", "InputUser"],
      ["query_id", "long"],
      ["reply_to", "flags.0?InputReplyTo"],
      ["send_as", "flags.13?InputPeer"],
    ],
    "Bool",
  ],
  "messages.requestSimpleWebView": [
    0x413A3E73,
    [
      ["flags", "#"],
      ["from_switch_webview", "flags.1?true"],
      ["from_side_menu", "flags.2?true"],
      ["compact", "flags.7?true"],
      ["fullscreen", "flags.8?true"],
      ["bot", "InputUser"],
      ["url", "flags.3?string"],
      ["start_param", "flags.4?string"],
      ["theme_params", "flags.0?DataJSON"],
      ["platform", "string"],
    ],
    "WebViewResult",
  ],
  "messages.sendWebViewResultMessage": [
    0x0A4314F5,
    [
      ["bot_query_id", "string"],
      ["result", "InputBotInlineResult"],
    ],
    "WebViewMessageSent",
  ],
  "messages.sendWebViewData": [
    0xDC0242C8,
    [
      ["bot", "InputUser"],
      ["random_id", "long"],
      ["button_text", "string"],
      ["data", "string"],
    ],
    "Updates",
  ],
  "messages.transcribeAudio": [
    0x269E9A49,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "messages.TranscribedAudio",
  ],
  "messages.rateTranscribedAudio": [
    0x7F1D072F,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["transcription_id", "long"],
      ["good", "Bool"],
    ],
    "Bool",
  ],
  "messages.getCustomEmojiDocuments": [
    0xD9AB0F54,
    [
      ["document_id", "Vector<long>"],
    ],
    "Vector<Document>",
  ],
  "messages.getEmojiStickers": [
    0xFBFCA18F,
    [
      ["hash", "long"],
    ],
    "messages.AllStickers",
  ],
  "messages.getFeaturedEmojiStickers": [
    0x0ECF6736,
    [
      ["hash", "long"],
    ],
    "messages.FeaturedStickers",
  ],
  "messages.reportReaction": [
    0x3F64C076,
    [
      ["peer", "InputPeer"],
      ["id", "int"],
      ["reaction_peer", "InputPeer"],
    ],
    "Bool",
  ],
  "messages.getTopReactions": [
    0xBB8125BA,
    [
      ["limit", "int"],
      ["hash", "long"],
    ],
    "messages.Reactions",
  ],
  "messages.getRecentReactions": [
    0x39461DB2,
    [
      ["limit", "int"],
      ["hash", "long"],
    ],
    "messages.Reactions",
  ],
  "messages.clearRecentReactions": [
    0x9DFEEFB4,
    [],
    "Bool",
  ],
  "messages.getExtendedMedia": [
    0x84F80814,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Updates",
  ],
  "messages.setDefaultHistoryTTL": [
    0x9EB51445,
    [
      ["period", "int"],
    ],
    "Bool",
  ],
  "messages.getDefaultHistoryTTL": [
    0x658B7188,
    [],
    "DefaultHistoryTTL",
  ],
  "messages.sendBotRequestedPeer": [
    0x91B2D060,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["button_id", "int"],
      ["requested_peers", "Vector<InputPeer>"],
    ],
    "Updates",
  ],
  "messages.getEmojiGroups": [
    0x7488CE5B,
    [
      ["hash", "int"],
    ],
    "messages.EmojiGroups",
  ],
  "messages.getEmojiStatusGroups": [
    0x2ECD56CD,
    [
      ["hash", "int"],
    ],
    "messages.EmojiGroups",
  ],
  "messages.getEmojiProfilePhotoGroups": [
    0x21A548F3,
    [
      ["hash", "int"],
    ],
    "messages.EmojiGroups",
  ],
  "messages.searchCustomEmoji": [
    0x2C11C0D7,
    [
      ["emoticon", "string"],
      ["hash", "long"],
    ],
    "EmojiList",
  ],
  "messages.togglePeerTranslations": [
    0xE47CB579,
    [
      ["flags", "#"],
      ["disabled", "flags.0?true"],
      ["peer", "InputPeer"],
    ],
    "Bool",
  ],
  "messages.getBotApp": [
    0x34FDC5C3,
    [
      ["app", "InputBotApp"],
      ["hash", "long"],
    ],
    "messages.BotApp",
  ],
  "messages.requestAppWebView": [
    0x53618BCE,
    [
      ["flags", "#"],
      ["write_allowed", "flags.0?true"],
      ["compact", "flags.7?true"],
      ["fullscreen", "flags.8?true"],
      ["peer", "InputPeer"],
      ["app", "InputBotApp"],
      ["start_param", "flags.1?string"],
      ["theme_params", "flags.2?DataJSON"],
      ["platform", "string"],
    ],
    "WebViewResult",
  ],
  "messages.setChatWallPaper": [
    0x8FFACAE1,
    [
      ["flags", "#"],
      ["for_both", "flags.3?true"],
      ["revert", "flags.4?true"],
      ["peer", "InputPeer"],
      ["wallpaper", "flags.0?InputWallPaper"],
      ["settings", "flags.2?WallPaperSettings"],
      ["id", "flags.1?int"],
    ],
    "Updates",
  ],
  "messages.searchEmojiStickerSets": [
    0x92B4494C,
    [
      ["flags", "#"],
      ["exclude_featured", "flags.0?true"],
      ["q", "string"],
      ["hash", "long"],
    ],
    "messages.FoundStickerSets",
  ],
  "messages.getSavedDialogs": [
    0x5381D21A,
    [
      ["flags", "#"],
      ["exclude_pinned", "flags.0?true"],
      ["offset_date", "int"],
      ["offset_id", "int"],
      ["offset_peer", "InputPeer"],
      ["limit", "int"],
      ["hash", "long"],
    ],
    "messages.SavedDialogs",
  ],
  "messages.getSavedHistory": [
    0x3D9A414D,
    [
      ["peer", "InputPeer"],
      ["offset_id", "int"],
      ["offset_date", "int"],
      ["add_offset", "int"],
      ["limit", "int"],
      ["max_id", "int"],
      ["min_id", "int"],
      ["hash", "long"],
    ],
    "messages.Messages",
  ],
  "messages.deleteSavedHistory": [
    0x6E98102B,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["max_id", "int"],
      ["min_date", "flags.2?int"],
      ["max_date", "flags.3?int"],
    ],
    "messages.AffectedHistory",
  ],
  "messages.getPinnedSavedDialogs": [
    0xD63D94E0,
    [],
    "messages.SavedDialogs",
  ],
  "messages.toggleSavedDialogPin": [
    0xAC81BBDE,
    [
      ["flags", "#"],
      ["pinned", "flags.0?true"],
      ["peer", "InputDialogPeer"],
    ],
    "Bool",
  ],
  "messages.reorderPinnedSavedDialogs": [
    0x8B716587,
    [
      ["flags", "#"],
      ["force", "flags.0?true"],
      ["order", "Vector<InputDialogPeer>"],
    ],
    "Bool",
  ],
  "messages.getSavedReactionTags": [
    0x3637E05B,
    [
      ["flags", "#"],
      ["peer", "flags.0?InputPeer"],
      ["hash", "long"],
    ],
    "messages.SavedReactionTags",
  ],
  "messages.updateSavedReactionTag": [
    0x60297DEC,
    [
      ["flags", "#"],
      ["reaction", "Reaction"],
      ["title", "flags.0?string"],
    ],
    "Bool",
  ],
  "messages.getDefaultTagReactions": [
    0xBDF93428,
    [
      ["hash", "long"],
    ],
    "messages.Reactions",
  ],
  "messages.getOutboxReadDate": [
    0x8C4BFE5D,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "OutboxReadDate",
  ],
  "messages.getQuickReplies": [
    0xD483F2A8,
    [
      ["hash", "long"],
    ],
    "messages.QuickReplies",
  ],
  "messages.reorderQuickReplies": [
    0x60331907,
    [
      ["order", "Vector<int>"],
    ],
    "Bool",
  ],
  "messages.checkQuickReplyShortcut": [
    0xF1D0FBD3,
    [
      ["shortcut", "string"],
    ],
    "Bool",
  ],
  "messages.editQuickReplyShortcut": [
    0x5C003CEF,
    [
      ["shortcut_id", "int"],
      ["shortcut", "string"],
    ],
    "Bool",
  ],
  "messages.deleteQuickReplyShortcut": [
    0x3CC04740,
    [
      ["shortcut_id", "int"],
    ],
    "Bool",
  ],
  "messages.getQuickReplyMessages": [
    0x94A495C3,
    [
      ["flags", "#"],
      ["shortcut_id", "int"],
      ["id", "flags.0?Vector<int>"],
      ["hash", "long"],
    ],
    "messages.Messages",
  ],
  "messages.sendQuickReplyMessages": [
    0x6C750DE1,
    [
      ["peer", "InputPeer"],
      ["shortcut_id", "int"],
      ["id", "Vector<int>"],
      ["random_id", "Vector<long>"],
    ],
    "Updates",
  ],
  "messages.deleteQuickReplyMessages": [
    0xE105E910,
    [
      ["shortcut_id", "int"],
      ["id", "Vector<int>"],
    ],
    "Updates",
  ],
  "messages.toggleDialogFilterTags": [
    0xFD2DDA49,
    [
      ["enabled", "Bool"],
    ],
    "Bool",
  ],
  "messages.getMyStickers": [
    0xD0B5E1FC,
    [
      ["offset_id", "long"],
      ["limit", "int"],
    ],
    "messages.MyStickers",
  ],
  "messages.getEmojiStickerGroups": [
    0x1DD840F5,
    [
      ["hash", "int"],
    ],
    "messages.EmojiGroups",
  ],
  "messages.getAvailableEffects": [
    0xDEA20A39,
    [
      ["hash", "int"],
    ],
    "messages.AvailableEffects",
  ],
  "messages.editFactCheck": [
    0x0589EE75,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["text", "TextWithEntities"],
    ],
    "Updates",
  ],
  "messages.deleteFactCheck": [
    0xD1DA940C,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "Updates",
  ],
  "messages.getFactCheck": [
    0xB9CDC5EE,
    [
      ["peer", "InputPeer"],
      ["msg_id", "Vector<int>"],
    ],
    "Vector<FactCheck>",
  ],
  "messages.requestMainWebView": [
    0xC9E01E7B,
    [
      ["flags", "#"],
      ["compact", "flags.7?true"],
      ["fullscreen", "flags.8?true"],
      ["peer", "InputPeer"],
      ["bot", "InputUser"],
      ["start_param", "flags.1?string"],
      ["theme_params", "flags.0?DataJSON"],
      ["platform", "string"],
    ],
    "WebViewResult",
  ],
  "messages.sendPaidReaction": [
    0x58BBCB50,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["count", "int"],
      ["random_id", "long"],
      ["private", "flags.0?PaidReactionPrivacy"],
    ],
    "Updates",
  ],
  "messages.togglePaidReactionPrivacy": [
    0x435885B5,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
      ["private", "PaidReactionPrivacy"],
    ],
    "Bool",
  ],
  "messages.getPaidReactionPrivacy": [
    0x472455AA,
    [],
    "Updates",
  ],
  "messages.viewSponsoredMessage": [
    0x673AD8F1,
    [
      ["peer", "InputPeer"],
      ["random_id", "bytes"],
    ],
    "Bool",
  ],
  "messages.clickSponsoredMessage": [
    0x0F093465,
    [
      ["flags", "#"],
      ["media", "flags.0?true"],
      ["fullscreen", "flags.1?true"],
      ["peer", "InputPeer"],
      ["random_id", "bytes"],
    ],
    "Bool",
  ],
  "messages.reportSponsoredMessage": [
    0x1AF3DBB8,
    [
      ["peer", "InputPeer"],
      ["random_id", "bytes"],
      ["option", "bytes"],
    ],
    "channels.SponsoredMessageReportResult",
  ],
  "messages.getSponsoredMessages": [
    0x9BD2F439,
    [
      ["peer", "InputPeer"],
    ],
    "messages.SponsoredMessages",
  ],
  "messages.savePreparedInlineMessage": [
    0xF21F7F2F,
    [
      ["flags", "#"],
      ["result", "InputBotInlineResult"],
      ["user_id", "InputUser"],
      ["peer_types", "flags.0?Vector<InlineQueryPeerType>"],
    ],
    "messages.BotPreparedInlineMessage",
  ],
  "messages.getPreparedInlineMessage": [
    0x857EBDB8,
    [
      ["bot", "InputUser"],
      ["id", "string"],
    ],
    "messages.PreparedInlineMessage",
  ],
  "messages.searchStickers": [
    0x29B1C66A,
    [
      ["flags", "#"],
      ["emojis", "flags.0?true"],
      ["q", "string"],
      ["emoticon", "string"],
      ["lang_code", "Vector<string>"],
      ["offset", "int"],
      ["limit", "int"],
      ["hash", "long"],
    ],
    "messages.FoundStickers",
  ],
  "messages.reportMessagesDelivery": [
    0x5A6D7395,
    [
      ["flags", "#"],
      ["push", "flags.0?true"],
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Bool",
  ],
  "updates.getState": [
    0xEDD4882A,
    [],
    "updates.State",
  ],
  "updates.getDifference": [
    0x19C2F763,
    [
      ["flags", "#"],
      ["pts", "int"],
      ["pts_limit", "flags.1?int"],
      ["pts_total_limit", "flags.0?int"],
      ["date", "int"],
      ["qts", "int"],
      ["qts_limit", "flags.2?int"],
    ],
    "updates.Difference",
  ],
  "updates.getChannelDifference": [
    0x03173D78,
    [
      ["flags", "#"],
      ["force", "flags.0?true"],
      ["channel", "InputChannel"],
      ["filter", "ChannelMessagesFilter"],
      ["pts", "int"],
      ["limit", "int"],
    ],
    "updates.ChannelDifference",
  ],
  "photos.updateProfilePhoto": [
    0x09E82039,
    [
      ["flags", "#"],
      ["fallback", "flags.0?true"],
      ["bot", "flags.1?InputUser"],
      ["id", "InputPhoto"],
    ],
    "photos.Photo",
  ],
  "photos.uploadProfilePhoto": [
    0x0388A3B5,
    [
      ["flags", "#"],
      ["fallback", "flags.3?true"],
      ["bot", "flags.5?InputUser"],
      ["file", "flags.0?InputFile"],
      ["video", "flags.1?InputFile"],
      ["video_start_ts", "flags.2?double"],
      ["video_emoji_markup", "flags.4?VideoSize"],
    ],
    "photos.Photo",
  ],
  "photos.deletePhotos": [
    0x87CF7F2F,
    [
      ["id", "Vector<InputPhoto>"],
    ],
    "Vector<long>",
  ],
  "photos.getUserPhotos": [
    0x91CD32A8,
    [
      ["user_id", "InputUser"],
      ["offset", "int"],
      ["max_id", "long"],
      ["limit", "int"],
    ],
    "photos.Photos",
  ],
  "photos.uploadContactProfilePhoto": [
    0xE14C4A71,
    [
      ["flags", "#"],
      ["suggest", "flags.3?true"],
      ["save", "flags.4?true"],
      ["user_id", "InputUser"],
      ["file", "flags.0?InputFile"],
      ["video", "flags.1?InputFile"],
      ["video_start_ts", "flags.2?double"],
      ["video_emoji_markup", "flags.5?VideoSize"],
    ],
    "photos.Photo",
  ],
  "upload.saveFilePart": [
    0xB304A621,
    [
      ["file_id", "long"],
      ["file_part", "int"],
      ["bytes", "bytes"],
    ],
    "Bool",
  ],
  "upload.getFile": [
    0xBE5335BE,
    [
      ["flags", "#"],
      ["precise", "flags.0?true"],
      ["cdn_supported", "flags.1?true"],
      ["location", "InputFileLocation"],
      ["offset", "long"],
      ["limit", "int"],
    ],
    "upload.File",
  ],
  "upload.saveBigFilePart": [
    0xDE7B673D,
    [
      ["file_id", "long"],
      ["file_part", "int"],
      ["file_total_parts", "int"],
      ["bytes", "bytes"],
    ],
    "Bool",
  ],
  "upload.getWebFile": [
    0x24E6818D,
    [
      ["location", "InputWebFileLocation"],
      ["offset", "int"],
      ["limit", "int"],
    ],
    "upload.WebFile",
  ],
  "upload.getCdnFile": [
    0x395F69DA,
    [
      ["file_token", "bytes"],
      ["offset", "long"],
      ["limit", "int"],
    ],
    "upload.CdnFile",
  ],
  "upload.reuploadCdnFile": [
    0x9B2754A8,
    [
      ["file_token", "bytes"],
      ["request_token", "bytes"],
    ],
    "Vector<FileHash>",
  ],
  "upload.getCdnFileHashes": [
    0x91DC3F31,
    [
      ["file_token", "bytes"],
      ["offset", "long"],
    ],
    "Vector<FileHash>",
  ],
  "upload.getFileHashes": [
    0x9156982A,
    [
      ["location", "InputFileLocation"],
      ["offset", "long"],
    ],
    "Vector<FileHash>",
  ],
  "help.getConfig": [
    0xC4F9186B,
    [],
    "Config",
  ],
  "help.getNearestDc": [
    0x1FB33026,
    [],
    "NearestDc",
  ],
  "help.getAppUpdate": [
    0x522D5A7D,
    [
      ["source", "string"],
    ],
    "help.AppUpdate",
  ],
  "help.getInviteText": [
    0x4D392343,
    [],
    "help.InviteText",
  ],
  "help.getSupport": [
    0x9CDF08CD,
    [],
    "help.Support",
  ],
  "help.setBotUpdatesStatus": [
    0xEC22CFCD,
    [
      ["pending_updates_count", "int"],
      ["message", "string"],
    ],
    "Bool",
  ],
  "help.getCdnConfig": [
    0x52029342,
    [],
    "CdnConfig",
  ],
  "help.getRecentMeUrls": [
    0x3DC0F114,
    [
      ["referer", "string"],
    ],
    "help.RecentMeUrls",
  ],
  "help.getTermsOfServiceUpdate": [
    0x2CA51FD1,
    [],
    "help.TermsOfServiceUpdate",
  ],
  "help.acceptTermsOfService": [
    0xEE72F79A,
    [
      ["id", "DataJSON"],
    ],
    "Bool",
  ],
  "help.getDeepLinkInfo": [
    0x3FEDC75F,
    [
      ["path", "string"],
    ],
    "help.DeepLinkInfo",
  ],
  "help.getAppConfig": [
    0x61E3F854,
    [
      ["hash", "int"],
    ],
    "help.AppConfig",
  ],
  "help.saveAppLog": [
    0x6F02F748,
    [
      ["events", "Vector<InputAppEvent>"],
    ],
    "Bool",
  ],
  "help.getPassportConfig": [
    0xC661AD08,
    [
      ["hash", "int"],
    ],
    "help.PassportConfig",
  ],
  "help.getSupportName": [
    0xD360E72C,
    [],
    "help.SupportName",
  ],
  "help.getUserInfo": [
    0x038A08D3,
    [
      ["user_id", "InputUser"],
    ],
    "help.UserInfo",
  ],
  "help.editUserInfo": [
    0x66B91B70,
    [
      ["user_id", "InputUser"],
      ["message", "string"],
      ["entities", "Vector<MessageEntity>"],
    ],
    "help.UserInfo",
  ],
  "help.getPromoData": [
    0xC0977421,
    [],
    "help.PromoData",
  ],
  "help.hidePromoData": [
    0x1E251C95,
    [
      ["peer", "InputPeer"],
    ],
    "Bool",
  ],
  "help.dismissSuggestion": [
    0xF50DBAA1,
    [
      ["peer", "InputPeer"],
      ["suggestion", "string"],
    ],
    "Bool",
  ],
  "help.getCountriesList": [
    0x735787A8,
    [
      ["lang_code", "string"],
      ["hash", "int"],
    ],
    "help.CountriesList",
  ],
  "help.getPremiumPromo": [
    0xB81B93D4,
    [],
    "help.PremiumPromo",
  ],
  "help.getPeerColors": [
    0xDA80F42F,
    [
      ["hash", "int"],
    ],
    "help.PeerColors",
  ],
  "help.getPeerProfileColors": [
    0xABCFA9FD,
    [
      ["hash", "int"],
    ],
    "help.PeerColors",
  ],
  "help.getTimezonesList": [
    0x49B30240,
    [
      ["hash", "int"],
    ],
    "help.TimezonesList",
  ],
  "channels.readHistory": [
    0xCC104937,
    [
      ["channel", "InputChannel"],
      ["max_id", "int"],
    ],
    "Bool",
  ],
  "channels.deleteMessages": [
    0x84C1FD4E,
    [
      ["channel", "InputChannel"],
      ["id", "Vector<int>"],
    ],
    "messages.AffectedMessages",
  ],
  "channels.reportSpam": [
    0xF44A8315,
    [
      ["channel", "InputChannel"],
      ["participant", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Bool",
  ],
  "channels.getMessages": [
    0xAD8C9A23,
    [
      ["channel", "InputChannel"],
      ["id", "Vector<InputMessage>"],
    ],
    "messages.Messages",
  ],
  "channels.getParticipants": [
    0x77CED9D0,
    [
      ["channel", "InputChannel"],
      ["filter", "ChannelParticipantsFilter"],
      ["offset", "int"],
      ["limit", "int"],
      ["hash", "long"],
    ],
    "channels.ChannelParticipants",
  ],
  "channels.getParticipant": [
    0xA0AB6CC6,
    [
      ["channel", "InputChannel"],
      ["participant", "InputPeer"],
    ],
    "channels.ChannelParticipant",
  ],
  "channels.getChannels": [
    0x0A7F6BBB,
    [
      ["id", "Vector<InputChannel>"],
    ],
    "messages.Chats",
  ],
  "channels.getFullChannel": [
    0x08736A09,
    [
      ["channel", "InputChannel"],
    ],
    "messages.ChatFull",
  ],
  "channels.createChannel": [
    0x91006707,
    [
      ["flags", "#"],
      ["broadcast", "flags.0?true"],
      ["megagroup", "flags.1?true"],
      ["for_import", "flags.3?true"],
      ["forum", "flags.5?true"],
      ["title", "string"],
      ["about", "string"],
      ["geo_point", "flags.2?InputGeoPoint"],
      ["address", "flags.2?string"],
      ["ttl_period", "flags.4?int"],
    ],
    "Updates",
  ],
  "channels.editAdmin": [
    0xD33C8902,
    [
      ["channel", "InputChannel"],
      ["user_id", "InputUser"],
      ["admin_rights", "ChatAdminRights"],
      ["rank", "string"],
    ],
    "Updates",
  ],
  "channels.editTitle": [
    0x566DECD0,
    [
      ["channel", "InputChannel"],
      ["title", "string"],
    ],
    "Updates",
  ],
  "channels.editPhoto": [
    0xF12E57C9,
    [
      ["channel", "InputChannel"],
      ["photo", "InputChatPhoto"],
    ],
    "Updates",
  ],
  "channels.checkUsername": [
    0x10E6BD2C,
    [
      ["channel", "InputChannel"],
      ["username", "string"],
    ],
    "Bool",
  ],
  "channels.updateUsername": [
    0x3514B3DE,
    [
      ["channel", "InputChannel"],
      ["username", "string"],
    ],
    "Bool",
  ],
  "channels.joinChannel": [
    0x24B524C5,
    [
      ["channel", "InputChannel"],
    ],
    "Updates",
  ],
  "channels.leaveChannel": [
    0xF836AA95,
    [
      ["channel", "InputChannel"],
    ],
    "Updates",
  ],
  "channels.inviteToChannel": [
    0xC9E33D54,
    [
      ["channel", "InputChannel"],
      ["users", "Vector<InputUser>"],
    ],
    "messages.InvitedUsers",
  ],
  "channels.deleteChannel": [
    0xC0111FE3,
    [
      ["channel", "InputChannel"],
    ],
    "Updates",
  ],
  "channels.exportMessageLink": [
    0xE63FADEB,
    [
      ["flags", "#"],
      ["grouped", "flags.0?true"],
      ["thread", "flags.1?true"],
      ["channel", "InputChannel"],
      ["id", "int"],
    ],
    "ExportedMessageLink",
  ],
  "channels.toggleSignatures": [
    0x418D549C,
    [
      ["flags", "#"],
      ["signatures_enabled", "flags.0?true"],
      ["profiles_enabled", "flags.1?true"],
      ["channel", "InputChannel"],
    ],
    "Updates",
  ],
  "channels.getAdminedPublicChannels": [
    0xF8B036AF,
    [
      ["flags", "#"],
      ["by_location", "flags.0?true"],
      ["check_limit", "flags.1?true"],
      ["for_personal", "flags.2?true"],
    ],
    "messages.Chats",
  ],
  "channels.editBanned": [
    0x96E6CD81,
    [
      ["channel", "InputChannel"],
      ["participant", "InputPeer"],
      ["banned_rights", "ChatBannedRights"],
    ],
    "Updates",
  ],
  "channels.getAdminLog": [
    0x33DDF480,
    [
      ["flags", "#"],
      ["channel", "InputChannel"],
      ["q", "string"],
      ["events_filter", "flags.0?ChannelAdminLogEventsFilter"],
      ["admins", "flags.1?Vector<InputUser>"],
      ["max_id", "long"],
      ["min_id", "long"],
      ["limit", "int"],
    ],
    "channels.AdminLogResults",
  ],
  "channels.setStickers": [
    0xEA8CA4F9,
    [
      ["channel", "InputChannel"],
      ["stickerset", "InputStickerSet"],
    ],
    "Bool",
  ],
  "channels.readMessageContents": [
    0xEAB5DC38,
    [
      ["channel", "InputChannel"],
      ["id", "Vector<int>"],
    ],
    "Bool",
  ],
  "channels.deleteHistory": [
    0x9BAA9647,
    [
      ["flags", "#"],
      ["for_everyone", "flags.0?true"],
      ["channel", "InputChannel"],
      ["max_id", "int"],
    ],
    "Updates",
  ],
  "channels.togglePreHistoryHidden": [
    0xEABBB94C,
    [
      ["channel", "InputChannel"],
      ["enabled", "Bool"],
    ],
    "Updates",
  ],
  "channels.getLeftChannels": [
    0x8341ECC0,
    [
      ["offset", "int"],
    ],
    "messages.Chats",
  ],
  "channels.getGroupsForDiscussion": [
    0xF5DAD378,
    [],
    "messages.Chats",
  ],
  "channels.setDiscussionGroup": [
    0x40582BB2,
    [
      ["broadcast", "InputChannel"],
      ["group", "InputChannel"],
    ],
    "Bool",
  ],
  "channels.editCreator": [
    0x8F38CD1F,
    [
      ["channel", "InputChannel"],
      ["user_id", "InputUser"],
      ["password", "InputCheckPasswordSRP"],
    ],
    "Updates",
  ],
  "channels.editLocation": [
    0x58E63F6D,
    [
      ["channel", "InputChannel"],
      ["geo_point", "InputGeoPoint"],
      ["address", "string"],
    ],
    "Bool",
  ],
  "channels.toggleSlowMode": [
    0xEDD49EF0,
    [
      ["channel", "InputChannel"],
      ["seconds", "int"],
    ],
    "Updates",
  ],
  "channels.getInactiveChannels": [
    0x11E831EE,
    [],
    "messages.InactiveChats",
  ],
  "channels.convertToGigagroup": [
    0x0B290C69,
    [
      ["channel", "InputChannel"],
    ],
    "Updates",
  ],
  "channels.getSendAs": [
    0xE785A43F,
    [
      ["flags", "#"],
      ["for_paid_reactions", "flags.0?true"],
      ["peer", "InputPeer"],
    ],
    "channels.SendAsPeers",
  ],
  "channels.deleteParticipantHistory": [
    0x367544DB,
    [
      ["channel", "InputChannel"],
      ["participant", "InputPeer"],
    ],
    "messages.AffectedHistory",
  ],
  "channels.toggleJoinToSend": [
    0xE4CB9580,
    [
      ["channel", "InputChannel"],
      ["enabled", "Bool"],
    ],
    "Updates",
  ],
  "channels.toggleJoinRequest": [
    0x4C2985B6,
    [
      ["channel", "InputChannel"],
      ["enabled", "Bool"],
    ],
    "Updates",
  ],
  "channels.reorderUsernames": [
    0xB45CED1D,
    [
      ["channel", "InputChannel"],
      ["order", "Vector<string>"],
    ],
    "Bool",
  ],
  "channels.toggleUsername": [
    0x50F24105,
    [
      ["channel", "InputChannel"],
      ["username", "string"],
      ["active", "Bool"],
    ],
    "Bool",
  ],
  "channels.deactivateAllUsernames": [
    0x0A245DD3,
    [
      ["channel", "InputChannel"],
    ],
    "Bool",
  ],
  "channels.toggleForum": [
    0xA4298B29,
    [
      ["channel", "InputChannel"],
      ["enabled", "Bool"],
    ],
    "Updates",
  ],
  "channels.createForumTopic": [
    0xF40C0224,
    [
      ["flags", "#"],
      ["channel", "InputChannel"],
      ["title", "string"],
      ["icon_color", "flags.0?int"],
      ["icon_emoji_id", "flags.3?long"],
      ["random_id", "long"],
      ["send_as", "flags.2?InputPeer"],
    ],
    "Updates",
  ],
  "channels.getForumTopics": [
    0x0DE560D1,
    [
      ["flags", "#"],
      ["channel", "InputChannel"],
      ["q", "flags.0?string"],
      ["offset_date", "int"],
      ["offset_id", "int"],
      ["offset_topic", "int"],
      ["limit", "int"],
    ],
    "messages.ForumTopics",
  ],
  "channels.getForumTopicsByID": [
    0xB0831EB9,
    [
      ["channel", "InputChannel"],
      ["topics", "Vector<int>"],
    ],
    "messages.ForumTopics",
  ],
  "channels.editForumTopic": [
    0xF4DFA185,
    [
      ["flags", "#"],
      ["channel", "InputChannel"],
      ["topic_id", "int"],
      ["title", "flags.0?string"],
      ["icon_emoji_id", "flags.1?long"],
      ["closed", "flags.2?Bool"],
      ["hidden", "flags.3?Bool"],
    ],
    "Updates",
  ],
  "channels.updatePinnedForumTopic": [
    0x6C2D9026,
    [
      ["channel", "InputChannel"],
      ["topic_id", "int"],
      ["pinned", "Bool"],
    ],
    "Updates",
  ],
  "channels.deleteTopicHistory": [
    0x34435F2D,
    [
      ["channel", "InputChannel"],
      ["top_msg_id", "int"],
    ],
    "messages.AffectedHistory",
  ],
  "channels.reorderPinnedForumTopics": [
    0x2950A18F,
    [
      ["flags", "#"],
      ["force", "flags.0?true"],
      ["channel", "InputChannel"],
      ["order", "Vector<int>"],
    ],
    "Updates",
  ],
  "channels.toggleAntiSpam": [
    0x68F3E4EB,
    [
      ["channel", "InputChannel"],
      ["enabled", "Bool"],
    ],
    "Updates",
  ],
  "channels.reportAntiSpamFalsePositive": [
    0xA850A693,
    [
      ["channel", "InputChannel"],
      ["msg_id", "int"],
    ],
    "Bool",
  ],
  "channels.toggleParticipantsHidden": [
    0x6A6E7854,
    [
      ["channel", "InputChannel"],
      ["enabled", "Bool"],
    ],
    "Updates",
  ],
  "channels.updateColor": [
    0xD8AA3671,
    [
      ["flags", "#"],
      ["for_profile", "flags.1?true"],
      ["channel", "InputChannel"],
      ["color", "flags.2?int"],
      ["background_emoji_id", "flags.0?long"],
    ],
    "Updates",
  ],
  "channels.toggleViewForumAsMessages": [
    0x9738BB15,
    [
      ["channel", "InputChannel"],
      ["enabled", "Bool"],
    ],
    "Updates",
  ],
  "channels.getChannelRecommendations": [
    0x25A71742,
    [
      ["flags", "#"],
      ["channel", "flags.0?InputChannel"],
    ],
    "messages.Chats",
  ],
  "channels.updateEmojiStatus": [
    0xF0D3E6A8,
    [
      ["channel", "InputChannel"],
      ["emoji_status", "EmojiStatus"],
    ],
    "Updates",
  ],
  "channels.setBoostsToUnblockRestrictions": [
    0xAD399CEE,
    [
      ["channel", "InputChannel"],
      ["boosts", "int"],
    ],
    "Updates",
  ],
  "channels.setEmojiStickers": [
    0x3CD930B7,
    [
      ["channel", "InputChannel"],
      ["stickerset", "InputStickerSet"],
    ],
    "Bool",
  ],
  "channels.restrictSponsoredMessages": [
    0x9AE91519,
    [
      ["channel", "InputChannel"],
      ["restricted", "Bool"],
    ],
    "Updates",
  ],
  "channels.searchPosts": [
    0xD19F987B,
    [
      ["hashtag", "string"],
      ["offset_rate", "int"],
      ["offset_peer", "InputPeer"],
      ["offset_id", "int"],
      ["limit", "int"],
    ],
    "messages.Messages",
  ],
  "channels.updatePaidMessagesPrice": [
    0xFC84653F,
    [
      ["channel", "InputChannel"],
      ["send_paid_messages_stars", "long"],
    ],
    "Updates",
  ],
  "bots.sendCustomRequest": [
    0xAA2769ED,
    [
      ["custom_method", "string"],
      ["params", "DataJSON"],
    ],
    "DataJSON",
  ],
  "bots.answerWebhookJSONQuery": [
    0xE6213F4D,
    [
      ["query_id", "long"],
      ["data", "DataJSON"],
    ],
    "Bool",
  ],
  "bots.setBotCommands": [
    0x0517165A,
    [
      ["scope", "BotCommandScope"],
      ["lang_code", "string"],
      ["commands", "Vector<BotCommand>"],
    ],
    "Bool",
  ],
  "bots.resetBotCommands": [
    0x3D8DE0F9,
    [
      ["scope", "BotCommandScope"],
      ["lang_code", "string"],
    ],
    "Bool",
  ],
  "bots.getBotCommands": [
    0xE34C0DD6,
    [
      ["scope", "BotCommandScope"],
      ["lang_code", "string"],
    ],
    "Vector<BotCommand>",
  ],
  "bots.setBotMenuButton": [
    0x4504D54F,
    [
      ["user_id", "InputUser"],
      ["button", "BotMenuButton"],
    ],
    "Bool",
  ],
  "bots.getBotMenuButton": [
    0x9C60EB28,
    [
      ["user_id", "InputUser"],
    ],
    "BotMenuButton",
  ],
  "bots.setBotBroadcastDefaultAdminRights": [
    0x788464E1,
    [
      ["admin_rights", "ChatAdminRights"],
    ],
    "Bool",
  ],
  "bots.setBotGroupDefaultAdminRights": [
    0x925EC9EA,
    [
      ["admin_rights", "ChatAdminRights"],
    ],
    "Bool",
  ],
  "bots.setBotInfo": [
    0x10CF3123,
    [
      ["flags", "#"],
      ["bot", "flags.2?InputUser"],
      ["lang_code", "string"],
      ["name", "flags.3?string"],
      ["about", "flags.0?string"],
      ["description", "flags.1?string"],
    ],
    "Bool",
  ],
  "bots.getBotInfo": [
    0xDCD914FD,
    [
      ["flags", "#"],
      ["bot", "flags.0?InputUser"],
      ["lang_code", "string"],
    ],
    "bots.BotInfo",
  ],
  "bots.reorderUsernames": [
    0x9709B1C2,
    [
      ["bot", "InputUser"],
      ["order", "Vector<string>"],
    ],
    "Bool",
  ],
  "bots.toggleUsername": [
    0x053CA973,
    [
      ["bot", "InputUser"],
      ["username", "string"],
      ["active", "Bool"],
    ],
    "Bool",
  ],
  "bots.canSendMessage": [
    0x1359F4E6,
    [
      ["bot", "InputUser"],
    ],
    "Bool",
  ],
  "bots.allowSendMessage": [
    0xF132E3EF,
    [
      ["bot", "InputUser"],
    ],
    "Updates",
  ],
  "bots.invokeWebViewCustomMethod": [
    0x087FC5E7,
    [
      ["bot", "InputUser"],
      ["custom_method", "string"],
      ["params", "DataJSON"],
    ],
    "DataJSON",
  ],
  "bots.getPopularAppBots": [
    0xC2510192,
    [
      ["offset", "string"],
      ["limit", "int"],
    ],
    "bots.PopularAppBots",
  ],
  "bots.addPreviewMedia": [
    0x17AEB75A,
    [
      ["bot", "InputUser"],
      ["lang_code", "string"],
      ["media", "InputMedia"],
    ],
    "BotPreviewMedia",
  ],
  "bots.editPreviewMedia": [
    0x8525606F,
    [
      ["bot", "InputUser"],
      ["lang_code", "string"],
      ["media", "InputMedia"],
      ["new_media", "InputMedia"],
    ],
    "BotPreviewMedia",
  ],
  "bots.deletePreviewMedia": [
    0x2D0135B3,
    [
      ["bot", "InputUser"],
      ["lang_code", "string"],
      ["media", "Vector<InputMedia>"],
    ],
    "Bool",
  ],
  "bots.reorderPreviewMedias": [
    0xB627F3AA,
    [
      ["bot", "InputUser"],
      ["lang_code", "string"],
      ["order", "Vector<InputMedia>"],
    ],
    "Bool",
  ],
  "bots.getPreviewInfo": [
    0x423AB3AD,
    [
      ["bot", "InputUser"],
      ["lang_code", "string"],
    ],
    "bots.PreviewInfo",
  ],
  "bots.getPreviewMedias": [
    0xA2A5594D,
    [
      ["bot", "InputUser"],
    ],
    "Vector<BotPreviewMedia>",
  ],
  "bots.updateUserEmojiStatus": [
    0xED9F30C5,
    [
      ["user_id", "InputUser"],
      ["emoji_status", "EmojiStatus"],
    ],
    "Bool",
  ],
  "bots.toggleUserEmojiStatusPermission": [
    0x06DE6392,
    [
      ["bot", "InputUser"],
      ["enabled", "Bool"],
    ],
    "Bool",
  ],
  "bots.checkDownloadFileParams": [
    0x50077589,
    [
      ["bot", "InputUser"],
      ["file_name", "string"],
      ["url", "string"],
    ],
    "Bool",
  ],
  "bots.getAdminedBots": [
    0xB0711D83,
    [],
    "Vector<User>",
  ],
  "bots.updateStarRefProgram": [
    0x778B5AB3,
    [
      ["flags", "#"],
      ["bot", "InputUser"],
      ["commission_permille", "int"],
      ["duration_months", "flags.0?int"],
    ],
    "StarRefProgram",
  ],
  "bots.setCustomVerification": [
    0x8B89DFBD,
    [
      ["flags", "#"],
      ["enabled", "flags.1?true"],
      ["bot", "flags.0?InputUser"],
      ["peer", "InputPeer"],
      ["custom_description", "flags.2?string"],
    ],
    "Bool",
  ],
  "bots.getBotRecommendations": [
    0xA1B70815,
    [
      ["bot", "InputUser"],
    ],
    "users.Users",
  ],
  "payments.getPaymentForm": [
    0x37148DBB,
    [
      ["flags", "#"],
      ["invoice", "InputInvoice"],
      ["theme_params", "flags.0?DataJSON"],
    ],
    "payments.PaymentForm",
  ],
  "payments.getPaymentReceipt": [
    0x2478D1CC,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "payments.PaymentReceipt",
  ],
  "payments.validateRequestedInfo": [
    0xB6C8F12B,
    [
      ["flags", "#"],
      ["save", "flags.0?true"],
      ["invoice", "InputInvoice"],
      ["info", "PaymentRequestedInfo"],
    ],
    "payments.ValidatedRequestedInfo",
  ],
  "payments.sendPaymentForm": [
    0x2D03522F,
    [
      ["flags", "#"],
      ["form_id", "long"],
      ["invoice", "InputInvoice"],
      ["requested_info_id", "flags.0?string"],
      ["shipping_option_id", "flags.1?string"],
      ["credentials", "InputPaymentCredentials"],
      ["tip_amount", "flags.2?long"],
    ],
    "payments.PaymentResult",
  ],
  "payments.getSavedInfo": [
    0x227D824B,
    [],
    "payments.SavedInfo",
  ],
  "payments.clearSavedInfo": [
    0xD83D70C1,
    [
      ["flags", "#"],
      ["credentials", "flags.0?true"],
      ["info", "flags.1?true"],
    ],
    "Bool",
  ],
  "payments.getBankCardData": [
    0x2E79D779,
    [
      ["number", "string"],
    ],
    "payments.BankCardData",
  ],
  "payments.exportInvoice": [
    0x0F91B065,
    [
      ["invoice_media", "InputMedia"],
    ],
    "payments.ExportedInvoice",
  ],
  "payments.assignAppStoreTransaction": [
    0x80ED747D,
    [
      ["receipt", "bytes"],
      ["purpose", "InputStorePaymentPurpose"],
    ],
    "Updates",
  ],
  "payments.assignPlayMarketTransaction": [
    0xDFFD50D3,
    [
      ["receipt", "DataJSON"],
      ["purpose", "InputStorePaymentPurpose"],
    ],
    "Updates",
  ],
  "payments.canPurchasePremium": [
    0x9FC19EB6,
    [
      ["purpose", "InputStorePaymentPurpose"],
    ],
    "Bool",
  ],
  "payments.getPremiumGiftCodeOptions": [
    0x2757BA54,
    [
      ["flags", "#"],
      ["boost_peer", "flags.0?InputPeer"],
    ],
    "Vector<PremiumGiftCodeOption>",
  ],
  "payments.checkGiftCode": [
    0x8E51B4C1,
    [
      ["slug", "string"],
    ],
    "payments.CheckedGiftCode",
  ],
  "payments.applyGiftCode": [
    0xF6E26854,
    [
      ["slug", "string"],
    ],
    "Updates",
  ],
  "payments.getGiveawayInfo": [
    0xF4239425,
    [
      ["peer", "InputPeer"],
      ["msg_id", "int"],
    ],
    "payments.GiveawayInfo",
  ],
  "payments.launchPrepaidGiveaway": [
    0x5FF58F20,
    [
      ["peer", "InputPeer"],
      ["giveaway_id", "long"],
      ["purpose", "InputStorePaymentPurpose"],
    ],
    "Updates",
  ],
  "payments.getStarsTopupOptions": [
    0xC00EC7D3,
    [],
    "Vector<StarsTopupOption>",
  ],
  "payments.getStarsStatus": [
    0x104FCFA7,
    [
      ["peer", "InputPeer"],
    ],
    "payments.StarsStatus",
  ],
  "payments.getStarsTransactions": [
    0x69DA4557,
    [
      ["flags", "#"],
      ["inbound", "flags.0?true"],
      ["outbound", "flags.1?true"],
      ["ascending", "flags.2?true"],
      ["subscription_id", "flags.3?string"],
      ["peer", "InputPeer"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "payments.StarsStatus",
  ],
  "payments.sendStarsForm": [
    0x7998C914,
    [
      ["form_id", "long"],
      ["invoice", "InputInvoice"],
    ],
    "payments.PaymentResult",
  ],
  "payments.refundStarsCharge": [
    0x25AE8F4A,
    [
      ["user_id", "InputUser"],
      ["charge_id", "string"],
    ],
    "Updates",
  ],
  "payments.getStarsRevenueStats": [
    0xD91FFAD6,
    [
      ["flags", "#"],
      ["dark", "flags.0?true"],
      ["peer", "InputPeer"],
    ],
    "payments.StarsRevenueStats",
  ],
  "payments.getStarsRevenueWithdrawalUrl": [
    0x13BBE8B3,
    [
      ["peer", "InputPeer"],
      ["stars", "long"],
      ["password", "InputCheckPasswordSRP"],
    ],
    "payments.StarsRevenueWithdrawalUrl",
  ],
  "payments.getStarsRevenueAdsAccountUrl": [
    0xD1D7EFC5,
    [
      ["peer", "InputPeer"],
    ],
    "payments.StarsRevenueAdsAccountUrl",
  ],
  "payments.getStarsTransactionsByID": [
    0x27842D2E,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<InputStarsTransaction>"],
    ],
    "payments.StarsStatus",
  ],
  "payments.getStarsGiftOptions": [
    0xD3C96BC8,
    [
      ["flags", "#"],
      ["user_id", "flags.0?InputUser"],
    ],
    "Vector<StarsGiftOption>",
  ],
  "payments.getStarsSubscriptions": [
    0x032512C5,
    [
      ["flags", "#"],
      ["missing_balance", "flags.0?true"],
      ["peer", "InputPeer"],
      ["offset", "string"],
    ],
    "payments.StarsStatus",
  ],
  "payments.changeStarsSubscription": [
    0xC7770878,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["subscription_id", "string"],
      ["canceled", "flags.0?Bool"],
    ],
    "Bool",
  ],
  "payments.fulfillStarsSubscription": [
    0xCC5BEBB3,
    [
      ["peer", "InputPeer"],
      ["subscription_id", "string"],
    ],
    "Bool",
  ],
  "payments.getStarsGiveawayOptions": [
    0xBD1EFD3E,
    [],
    "Vector<StarsGiveawayOption>",
  ],
  "payments.getStarGifts": [
    0xC4563590,
    [
      ["hash", "int"],
    ],
    "payments.StarGifts",
  ],
  "payments.saveStarGift": [
    0x2A2A697C,
    [
      ["flags", "#"],
      ["unsave", "flags.0?true"],
      ["stargift", "InputSavedStarGift"],
    ],
    "Bool",
  ],
  "payments.convertStarGift": [
    0x74BF076B,
    [
      ["stargift", "InputSavedStarGift"],
    ],
    "Bool",
  ],
  "payments.botCancelStarsSubscription": [
    0x6DFA0622,
    [
      ["flags", "#"],
      ["restore", "flags.0?true"],
      ["user_id", "InputUser"],
      ["charge_id", "string"],
    ],
    "Bool",
  ],
  "payments.getConnectedStarRefBots": [
    0x5869A553,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["offset_date", "flags.2?int"],
      ["offset_link", "flags.2?string"],
      ["limit", "int"],
    ],
    "payments.ConnectedStarRefBots",
  ],
  "payments.getConnectedStarRefBot": [
    0xB7D998F0,
    [
      ["peer", "InputPeer"],
      ["bot", "InputUser"],
    ],
    "payments.ConnectedStarRefBots",
  ],
  "payments.getSuggestedStarRefBots": [
    0x0D6B48F7,
    [
      ["flags", "#"],
      ["order_by_revenue", "flags.0?true"],
      ["order_by_date", "flags.1?true"],
      ["peer", "InputPeer"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "payments.SuggestedStarRefBots",
  ],
  "payments.connectStarRefBot": [
    0x7ED5348A,
    [
      ["peer", "InputPeer"],
      ["bot", "InputUser"],
    ],
    "payments.ConnectedStarRefBots",
  ],
  "payments.editConnectedStarRefBot": [
    0xE4FCA4A3,
    [
      ["flags", "#"],
      ["revoked", "flags.0?true"],
      ["peer", "InputPeer"],
      ["link", "string"],
    ],
    "payments.ConnectedStarRefBots",
  ],
  "payments.getStarGiftUpgradePreview": [
    0x9C9ABCB1,
    [
      ["gift_id", "long"],
    ],
    "payments.StarGiftUpgradePreview",
  ],
  "payments.upgradeStarGift": [
    0xAED6E4F5,
    [
      ["flags", "#"],
      ["keep_original_details", "flags.0?true"],
      ["stargift", "InputSavedStarGift"],
    ],
    "Updates",
  ],
  "payments.transferStarGift": [
    0x7F18176A,
    [
      ["stargift", "InputSavedStarGift"],
      ["to_id", "InputPeer"],
    ],
    "Updates",
  ],
  "payments.getUniqueStarGift": [
    0xA1974D72,
    [
      ["slug", "string"],
    ],
    "payments.UniqueStarGift",
  ],
  "payments.getSavedStarGifts": [
    0x23830DE9,
    [
      ["flags", "#"],
      ["exclude_unsaved", "flags.0?true"],
      ["exclude_saved", "flags.1?true"],
      ["exclude_unlimited", "flags.2?true"],
      ["exclude_limited", "flags.3?true"],
      ["exclude_unique", "flags.4?true"],
      ["sort_by_value", "flags.5?true"],
      ["peer", "InputPeer"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "payments.SavedStarGifts",
  ],
  "payments.getSavedStarGift": [
    0xB455A106,
    [
      ["stargift", "Vector<InputSavedStarGift>"],
    ],
    "payments.SavedStarGifts",
  ],
  "payments.getStarGiftWithdrawalUrl": [
    0xD06E93A8,
    [
      ["stargift", "InputSavedStarGift"],
      ["password", "InputCheckPasswordSRP"],
    ],
    "payments.StarGiftWithdrawalUrl",
  ],
  "payments.toggleChatStarGiftNotifications": [
    0x60EAEFA1,
    [
      ["flags", "#"],
      ["enabled", "flags.0?true"],
      ["peer", "InputPeer"],
    ],
    "Bool",
  ],
  "payments.toggleStarGiftsPinnedToTop": [
    0x1513E7B0,
    [
      ["peer", "InputPeer"],
      ["stargift", "Vector<InputSavedStarGift>"],
    ],
    "Bool",
  ],
  "stickers.createStickerSet": [
    0x9021AB67,
    [
      ["flags", "#"],
      ["masks", "flags.0?true"],
      ["emojis", "flags.5?true"],
      ["text_color", "flags.6?true"],
      ["user_id", "InputUser"],
      ["title", "string"],
      ["short_name", "string"],
      ["thumb", "flags.2?InputDocument"],
      ["stickers", "Vector<InputStickerSetItem>"],
      ["software", "flags.3?string"],
    ],
    "messages.StickerSet",
  ],
  "stickers.removeStickerFromSet": [
    0xF7760F51,
    [
      ["sticker", "InputDocument"],
    ],
    "messages.StickerSet",
  ],
  "stickers.changeStickerPosition": [
    0xFFB6D4CA,
    [
      ["sticker", "InputDocument"],
      ["position", "int"],
    ],
    "messages.StickerSet",
  ],
  "stickers.addStickerToSet": [
    0x8653FEBE,
    [
      ["stickerset", "InputStickerSet"],
      ["sticker", "InputStickerSetItem"],
    ],
    "messages.StickerSet",
  ],
  "stickers.setStickerSetThumb": [
    0xA76A5392,
    [
      ["flags", "#"],
      ["stickerset", "InputStickerSet"],
      ["thumb", "flags.0?InputDocument"],
      ["thumb_document_id", "flags.1?long"],
    ],
    "messages.StickerSet",
  ],
  "stickers.checkShortName": [
    0x284B3639,
    [
      ["short_name", "string"],
    ],
    "Bool",
  ],
  "stickers.suggestShortName": [
    0x4DAFC503,
    [
      ["title", "string"],
    ],
    "stickers.SuggestedShortName",
  ],
  "stickers.changeSticker": [
    0xF5537EBC,
    [
      ["flags", "#"],
      ["sticker", "InputDocument"],
      ["emoji", "flags.0?string"],
      ["mask_coords", "flags.1?MaskCoords"],
      ["keywords", "flags.2?string"],
    ],
    "messages.StickerSet",
  ],
  "stickers.renameStickerSet": [
    0x124B1C00,
    [
      ["stickerset", "InputStickerSet"],
      ["title", "string"],
    ],
    "messages.StickerSet",
  ],
  "stickers.deleteStickerSet": [
    0x87704394,
    [
      ["stickerset", "InputStickerSet"],
    ],
    "Bool",
  ],
  "stickers.replaceSticker": [
    0x4696459A,
    [
      ["sticker", "InputDocument"],
      ["new_sticker", "InputStickerSetItem"],
    ],
    "messages.StickerSet",
  ],
  "phone.getCallConfig": [
    0x55451FA9,
    [],
    "DataJSON",
  ],
  "phone.requestCall": [
    0xA6C4600C,
    [
      ["flags", "#"],
      ["video", "flags.0?true"],
      ["user_id", "InputUser"],
      ["conference_call", "flags.1?InputGroupCall"],
      ["random_id", "int"],
      ["g_a_hash", "bytes"],
      ["protocol", "PhoneCallProtocol"],
    ],
    "phone.PhoneCall",
  ],
  "phone.acceptCall": [
    0x3BD2B4A0,
    [
      ["peer", "InputPhoneCall"],
      ["g_b", "bytes"],
      ["protocol", "PhoneCallProtocol"],
    ],
    "phone.PhoneCall",
  ],
  "phone.confirmCall": [
    0x2EFE1722,
    [
      ["peer", "InputPhoneCall"],
      ["g_a", "bytes"],
      ["key_fingerprint", "long"],
      ["protocol", "PhoneCallProtocol"],
    ],
    "phone.PhoneCall",
  ],
  "phone.receivedCall": [
    0x17D54F61,
    [
      ["peer", "InputPhoneCall"],
    ],
    "Bool",
  ],
  "phone.discardCall": [
    0xB2CBC1C0,
    [
      ["flags", "#"],
      ["video", "flags.0?true"],
      ["peer", "InputPhoneCall"],
      ["duration", "int"],
      ["reason", "PhoneCallDiscardReason"],
      ["connection_id", "long"],
    ],
    "Updates",
  ],
  "phone.setCallRating": [
    0x59EAD627,
    [
      ["flags", "#"],
      ["user_initiative", "flags.0?true"],
      ["peer", "InputPhoneCall"],
      ["rating", "int"],
      ["comment", "string"],
    ],
    "Updates",
  ],
  "phone.saveCallDebug": [
    0x277ADD7E,
    [
      ["peer", "InputPhoneCall"],
      ["debug", "DataJSON"],
    ],
    "Bool",
  ],
  "phone.sendSignalingData": [
    0xFF7A9383,
    [
      ["peer", "InputPhoneCall"],
      ["data", "bytes"],
    ],
    "Bool",
  ],
  "phone.createGroupCall": [
    0x48CDC6D8,
    [
      ["flags", "#"],
      ["rtmp_stream", "flags.2?true"],
      ["peer", "InputPeer"],
      ["random_id", "int"],
      ["title", "flags.0?string"],
      ["schedule_date", "flags.1?int"],
    ],
    "Updates",
  ],
  "phone.joinGroupCall": [
    0xD61E1DF3,
    [
      ["flags", "#"],
      ["muted", "flags.0?true"],
      ["video_stopped", "flags.2?true"],
      ["call", "InputGroupCall"],
      ["join_as", "InputPeer"],
      ["invite_hash", "flags.1?string"],
      ["key_fingerprint", "flags.3?long"],
      ["params", "DataJSON"],
    ],
    "Updates",
  ],
  "phone.leaveGroupCall": [
    0x500377F9,
    [
      ["call", "InputGroupCall"],
      ["source", "int"],
    ],
    "Updates",
  ],
  "phone.inviteToGroupCall": [
    0x7B393160,
    [
      ["call", "InputGroupCall"],
      ["users", "Vector<InputUser>"],
    ],
    "Updates",
  ],
  "phone.discardGroupCall": [
    0x7A777135,
    [
      ["call", "InputGroupCall"],
    ],
    "Updates",
  ],
  "phone.toggleGroupCallSettings": [
    0x74BBB43D,
    [
      ["flags", "#"],
      ["reset_invite_hash", "flags.1?true"],
      ["call", "InputGroupCall"],
      ["join_muted", "flags.0?Bool"],
    ],
    "Updates",
  ],
  "phone.getGroupCall": [
    0x041845DB,
    [
      ["call", "InputGroupCall"],
      ["limit", "int"],
    ],
    "phone.GroupCall",
  ],
  "phone.getGroupParticipants": [
    0xC558D8AB,
    [
      ["call", "InputGroupCall"],
      ["ids", "Vector<InputPeer>"],
      ["sources", "Vector<int>"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "phone.GroupParticipants",
  ],
  "phone.checkGroupCall": [
    0xB59CF977,
    [
      ["call", "InputGroupCall"],
      ["sources", "Vector<int>"],
    ],
    "Vector<int>",
  ],
  "phone.toggleGroupCallRecord": [
    0xF128C708,
    [
      ["flags", "#"],
      ["start", "flags.0?true"],
      ["video", "flags.2?true"],
      ["call", "InputGroupCall"],
      ["title", "flags.1?string"],
      ["video_portrait", "flags.2?Bool"],
    ],
    "Updates",
  ],
  "phone.editGroupCallParticipant": [
    0xA5273ABF,
    [
      ["flags", "#"],
      ["call", "InputGroupCall"],
      ["participant", "InputPeer"],
      ["muted", "flags.0?Bool"],
      ["volume", "flags.1?int"],
      ["raise_hand", "flags.2?Bool"],
      ["video_stopped", "flags.3?Bool"],
      ["video_paused", "flags.4?Bool"],
      ["presentation_paused", "flags.5?Bool"],
    ],
    "Updates",
  ],
  "phone.editGroupCallTitle": [
    0x1CA6AC0A,
    [
      ["call", "InputGroupCall"],
      ["title", "string"],
    ],
    "Updates",
  ],
  "phone.getGroupCallJoinAs": [
    0xEF7C213A,
    [
      ["peer", "InputPeer"],
    ],
    "phone.JoinAsPeers",
  ],
  "phone.exportGroupCallInvite": [
    0xE6AA647F,
    [
      ["flags", "#"],
      ["can_self_unmute", "flags.0?true"],
      ["call", "InputGroupCall"],
    ],
    "phone.ExportedGroupCallInvite",
  ],
  "phone.toggleGroupCallStartSubscription": [
    0x219C34E6,
    [
      ["call", "InputGroupCall"],
      ["subscribed", "Bool"],
    ],
    "Updates",
  ],
  "phone.startScheduledGroupCall": [
    0x5680E342,
    [
      ["call", "InputGroupCall"],
    ],
    "Updates",
  ],
  "phone.saveDefaultGroupCallJoinAs": [
    0x575E1F8C,
    [
      ["peer", "InputPeer"],
      ["join_as", "InputPeer"],
    ],
    "Bool",
  ],
  "phone.joinGroupCallPresentation": [
    0xCBEA6BC4,
    [
      ["call", "InputGroupCall"],
      ["params", "DataJSON"],
    ],
    "Updates",
  ],
  "phone.leaveGroupCallPresentation": [
    0x1C50D144,
    [
      ["call", "InputGroupCall"],
    ],
    "Updates",
  ],
  "phone.getGroupCallStreamChannels": [
    0x1AB21940,
    [
      ["call", "InputGroupCall"],
    ],
    "phone.GroupCallStreamChannels",
  ],
  "phone.getGroupCallStreamRtmpUrl": [
    0xDEB3ABBF,
    [
      ["peer", "InputPeer"],
      ["revoke", "Bool"],
    ],
    "phone.GroupCallStreamRtmpUrl",
  ],
  "phone.saveCallLog": [
    0x41248786,
    [
      ["peer", "InputPhoneCall"],
      ["file", "InputFile"],
    ],
    "Bool",
  ],
  "phone.createConferenceCall": [
    0xDFC909AB,
    [
      ["peer", "InputPhoneCall"],
      ["key_fingerprint", "long"],
    ],
    "phone.PhoneCall",
  ],
  "langpack.getLangPack": [
    0xF2F2330A,
    [
      ["lang_pack", "string"],
      ["lang_code", "string"],
    ],
    "LangPackDifference",
  ],
  "langpack.getStrings": [
    0xEFEA3803,
    [
      ["lang_pack", "string"],
      ["lang_code", "string"],
      ["keys", "Vector<string>"],
    ],
    "Vector<LangPackString>",
  ],
  "langpack.getDifference": [
    0xCD984AA5,
    [
      ["lang_pack", "string"],
      ["lang_code", "string"],
      ["from_version", "int"],
    ],
    "LangPackDifference",
  ],
  "langpack.getLanguages": [
    0x42C6978F,
    [
      ["lang_pack", "string"],
    ],
    "Vector<LangPackLanguage>",
  ],
  "langpack.getLanguage": [
    0x6A596502,
    [
      ["lang_pack", "string"],
      ["lang_code", "string"],
    ],
    "LangPackLanguage",
  ],
  "folders.editPeerFolders": [
    0x6847D0AB,
    [
      ["folder_peers", "Vector<InputFolderPeer>"],
    ],
    "Updates",
  ],
  "stats.getBroadcastStats": [
    0xAB42441A,
    [
      ["flags", "#"],
      ["dark", "flags.0?true"],
      ["channel", "InputChannel"],
    ],
    "stats.BroadcastStats",
  ],
  "stats.loadAsyncGraph": [
    0x621D5FA0,
    [
      ["flags", "#"],
      ["token", "string"],
      ["x", "flags.0?long"],
    ],
    "StatsGraph",
  ],
  "stats.getMegagroupStats": [
    0xDCDF8607,
    [
      ["flags", "#"],
      ["dark", "flags.0?true"],
      ["channel", "InputChannel"],
    ],
    "stats.MegagroupStats",
  ],
  "stats.getMessagePublicForwards": [
    0x5F150144,
    [
      ["channel", "InputChannel"],
      ["msg_id", "int"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "stats.PublicForwards",
  ],
  "stats.getMessageStats": [
    0xB6E0A3F5,
    [
      ["flags", "#"],
      ["dark", "flags.0?true"],
      ["channel", "InputChannel"],
      ["msg_id", "int"],
    ],
    "stats.MessageStats",
  ],
  "stats.getStoryStats": [
    0x374FEF40,
    [
      ["flags", "#"],
      ["dark", "flags.0?true"],
      ["peer", "InputPeer"],
      ["id", "int"],
    ],
    "stats.StoryStats",
  ],
  "stats.getStoryPublicForwards": [
    0xA6437EF6,
    [
      ["peer", "InputPeer"],
      ["id", "int"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "stats.PublicForwards",
  ],
  "stats.getBroadcastRevenueStats": [
    0xF788EE19,
    [
      ["flags", "#"],
      ["dark", "flags.0?true"],
      ["peer", "InputPeer"],
    ],
    "stats.BroadcastRevenueStats",
  ],
  "stats.getBroadcastRevenueWithdrawalUrl": [
    0x9DF4FAAD,
    [
      ["peer", "InputPeer"],
      ["password", "InputCheckPasswordSRP"],
    ],
    "stats.BroadcastRevenueWithdrawalUrl",
  ],
  "stats.getBroadcastRevenueTransactions": [
    0x70990B6D,
    [
      ["peer", "InputPeer"],
      ["offset", "int"],
      ["limit", "int"],
    ],
    "stats.BroadcastRevenueTransactions",
  ],
  "chatlists.exportChatlistInvite": [
    0x8472478E,
    [
      ["chatlist", "InputChatlist"],
      ["title", "string"],
      ["peers", "Vector<InputPeer>"],
    ],
    "chatlists.ExportedChatlistInvite",
  ],
  "chatlists.deleteExportedInvite": [
    0x719C5C5E,
    [
      ["chatlist", "InputChatlist"],
      ["slug", "string"],
    ],
    "Bool",
  ],
  "chatlists.editExportedInvite": [
    0x653DB63D,
    [
      ["flags", "#"],
      ["chatlist", "InputChatlist"],
      ["slug", "string"],
      ["title", "flags.1?string"],
      ["peers", "flags.2?Vector<InputPeer>"],
    ],
    "ExportedChatlistInvite",
  ],
  "chatlists.getExportedInvites": [
    0xCE03DA83,
    [
      ["chatlist", "InputChatlist"],
    ],
    "chatlists.ExportedInvites",
  ],
  "chatlists.checkChatlistInvite": [
    0x41C10FFF,
    [
      ["slug", "string"],
    ],
    "chatlists.ChatlistInvite",
  ],
  "chatlists.joinChatlistInvite": [
    0xA6B1E39A,
    [
      ["slug", "string"],
      ["peers", "Vector<InputPeer>"],
    ],
    "Updates",
  ],
  "chatlists.getChatlistUpdates": [
    0x89419521,
    [
      ["chatlist", "InputChatlist"],
    ],
    "chatlists.ChatlistUpdates",
  ],
  "chatlists.joinChatlistUpdates": [
    0xE089F8F5,
    [
      ["chatlist", "InputChatlist"],
      ["peers", "Vector<InputPeer>"],
    ],
    "Updates",
  ],
  "chatlists.hideChatlistUpdates": [
    0x66E486FB,
    [
      ["chatlist", "InputChatlist"],
    ],
    "Bool",
  ],
  "chatlists.getLeaveChatlistSuggestions": [
    0xFDBCD714,
    [
      ["chatlist", "InputChatlist"],
    ],
    "Vector<Peer>",
  ],
  "chatlists.leaveChatlist": [
    0x74FAE13A,
    [
      ["chatlist", "InputChatlist"],
      ["peers", "Vector<InputPeer>"],
    ],
    "Updates",
  ],
  "stories.canSendStory": [
    0xC7DFDFDD,
    [
      ["peer", "InputPeer"],
    ],
    "Bool",
  ],
  "stories.sendStory": [
    0xE4E6694B,
    [
      ["flags", "#"],
      ["pinned", "flags.2?true"],
      ["noforwards", "flags.4?true"],
      ["fwd_modified", "flags.7?true"],
      ["peer", "InputPeer"],
      ["media", "InputMedia"],
      ["media_areas", "flags.5?Vector<MediaArea>"],
      ["caption", "flags.0?string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["privacy_rules", "Vector<InputPrivacyRule>"],
      ["random_id", "long"],
      ["period", "flags.3?int"],
      ["fwd_from_id", "flags.6?InputPeer"],
      ["fwd_from_story", "flags.6?int"],
    ],
    "Updates",
  ],
  "stories.editStory": [
    0xB583BA46,
    [
      ["flags", "#"],
      ["peer", "InputPeer"],
      ["id", "int"],
      ["media", "flags.0?InputMedia"],
      ["media_areas", "flags.3?Vector<MediaArea>"],
      ["caption", "flags.1?string"],
      ["entities", "flags.1?Vector<MessageEntity>"],
      ["privacy_rules", "flags.2?Vector<InputPrivacyRule>"],
    ],
    "Updates",
  ],
  "stories.deleteStories": [
    0xAE59DB5F,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Vector<int>",
  ],
  "stories.togglePinned": [
    0x9A75A1EF,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
      ["pinned", "Bool"],
    ],
    "Vector<int>",
  ],
  "stories.getAllStories": [
    0xEEB0D625,
    [
      ["flags", "#"],
      ["next", "flags.1?true"],
      ["hidden", "flags.2?true"],
      ["state", "flags.0?string"],
    ],
    "stories.AllStories",
  ],
  "stories.getPinnedStories": [
    0x5821A5DC,
    [
      ["peer", "InputPeer"],
      ["offset_id", "int"],
      ["limit", "int"],
    ],
    "stories.Stories",
  ],
  "stories.getStoriesArchive": [
    0xB4352016,
    [
      ["peer", "InputPeer"],
      ["offset_id", "int"],
      ["limit", "int"],
    ],
    "stories.Stories",
  ],
  "stories.getStoriesByID": [
    0x5774CA74,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "stories.Stories",
  ],
  "stories.toggleAllStoriesHidden": [
    0x7C2557C4,
    [
      ["hidden", "Bool"],
    ],
    "Bool",
  ],
  "stories.readStories": [
    0xA556DAC8,
    [
      ["peer", "InputPeer"],
      ["max_id", "int"],
    ],
    "Vector<int>",
  ],
  "stories.incrementStoryViews": [
    0xB2028AFB,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Bool",
  ],
  "stories.getStoryViewsList": [
    0x7ED23C57,
    [
      ["flags", "#"],
      ["just_contacts", "flags.0?true"],
      ["reactions_first", "flags.2?true"],
      ["forwards_first", "flags.3?true"],
      ["peer", "InputPeer"],
      ["q", "flags.1?string"],
      ["id", "int"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "stories.StoryViewsList",
  ],
  "stories.getStoriesViews": [
    0x28E16CC8,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "stories.StoryViews",
  ],
  "stories.exportStoryLink": [
    0x7B8DEF20,
    [
      ["peer", "InputPeer"],
      ["id", "int"],
    ],
    "ExportedStoryLink",
  ],
  "stories.report": [
    0x19D8EB45,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
      ["option", "bytes"],
      ["message", "string"],
    ],
    "ReportResult",
  ],
  "stories.activateStealthMode": [
    0x57BBD166,
    [
      ["flags", "#"],
      ["past", "flags.0?true"],
      ["future", "flags.1?true"],
    ],
    "Updates",
  ],
  "stories.sendReaction": [
    0x7FD736B2,
    [
      ["flags", "#"],
      ["add_to_recent", "flags.0?true"],
      ["peer", "InputPeer"],
      ["story_id", "int"],
      ["reaction", "Reaction"],
    ],
    "Updates",
  ],
  "stories.getPeerStories": [
    0x2C4ADA50,
    [
      ["peer", "InputPeer"],
    ],
    "stories.PeerStories",
  ],
  "stories.getAllReadPeerStories": [
    0x9B5AE7F9,
    [],
    "Updates",
  ],
  "stories.getPeerMaxIDs": [
    0x535983C3,
    [
      ["id", "Vector<InputPeer>"],
    ],
    "Vector<int>",
  ],
  "stories.getChatsToSend": [
    0xA56A8B60,
    [],
    "messages.Chats",
  ],
  "stories.togglePeerStoriesHidden": [
    0xBD0415C4,
    [
      ["peer", "InputPeer"],
      ["hidden", "Bool"],
    ],
    "Bool",
  ],
  "stories.getStoryReactionsList": [
    0xB9B2881F,
    [
      ["flags", "#"],
      ["forwards_first", "flags.2?true"],
      ["peer", "InputPeer"],
      ["id", "int"],
      ["reaction", "flags.0?Reaction"],
      ["offset", "flags.1?string"],
      ["limit", "int"],
    ],
    "stories.StoryReactionsList",
  ],
  "stories.togglePinnedToTop": [
    0x0B297E9B,
    [
      ["peer", "InputPeer"],
      ["id", "Vector<int>"],
    ],
    "Bool",
  ],
  "stories.searchPosts": [
    0xD1810907,
    [
      ["flags", "#"],
      ["hashtag", "flags.0?string"],
      ["area", "flags.1?MediaArea"],
      ["peer", "flags.2?InputPeer"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "stories.FoundStories",
  ],
  "premium.getBoostsList": [
    0x60F67660,
    [
      ["flags", "#"],
      ["gifts", "flags.0?true"],
      ["peer", "InputPeer"],
      ["offset", "string"],
      ["limit", "int"],
    ],
    "premium.BoostsList",
  ],
  "premium.getMyBoosts": [
    0x0BE77B4A,
    [],
    "premium.MyBoosts",
  ],
  "premium.applyBoost": [
    0x6B7DA746,
    [
      ["flags", "#"],
      ["slots", "flags.0?Vector<int>"],
      ["peer", "InputPeer"],
    ],
    "premium.MyBoosts",
  ],
  "premium.getBoostsStatus": [
    0x042F1F61,
    [
      ["peer", "InputPeer"],
    ],
    "premium.BoostsStatus",
  ],
  "premium.getUserBoosts": [
    0x39854D1F,
    [
      ["peer", "InputPeer"],
      ["user_id", "InputUser"],
    ],
    "premium.BoostsList",
  ],
  "smsjobs.isEligibleToJoin": [
    0x0EDC39D0,
    [],
    "smsjobs.EligibilityToJoin",
  ],
  "smsjobs.join": [
    0xA74ECE2D,
    [],
    "Bool",
  ],
  "smsjobs.leave": [
    0x9898AD73,
    [],
    "Bool",
  ],
  "smsjobs.updateSettings": [
    0x093FA0BF,
    [
      ["flags", "#"],
      ["allow_international", "flags.0?true"],
    ],
    "Bool",
  ],
  "smsjobs.getStatus": [
    0x10A698E8,
    [],
    "smsjobs.Status",
  ],
  "smsjobs.getSmsJob": [
    0x778D902F,
    [
      ["job_id", "string"],
    ],
    "SmsJob",
  ],
  "smsjobs.finishJob": [
    0x4F1EBF24,
    [
      ["flags", "#"],
      ["job_id", "string"],
      ["error", "flags.0?string"],
    ],
    "Bool",
  ],
  "fragment.getCollectibleInfo": [
    0xBE1E85BA,
    [
      ["collectible", "InputCollectible"],
    ],
    "fragment.CollectibleInfo",
  ],
});
