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
  ttl_seconds?: number;
}

export interface inputMediaDocument {
  _: "inputMediaDocument";
  spoiler?: true;
  id: InputDocument;
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
  provider: string;
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
  stories?: PeerStories;
  wallpaper?: WallPaper;
  boosts_applied?: number;
  boosts_unrestrict?: number;
  emojiset?: StickerSet;
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
}

export interface messageService {
  _: "messageService";
  out?: true;
  mentioned?: true;
  media_unread?: true;
  silent?: true;
  post?: true;
  legacy?: true;
  id: number;
  from_id?: Peer;
  peer_id: Peer;
  reply_to?: MessageReplyHeader;
  date: number;
  action: MessageAction;
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
  alt_document?: Document;
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
  months: number;
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
  months: number;
  prize_description?: string;
  until_date: number;
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
}

export interface messageActionPaymentSent {
  _: "messageActionPaymentSent";
  recurring_init?: true;
  recurring_used?: true;
  currency: string;
  total_amount: bigint;
  invoice_slug?: string;
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
}

export interface messageActionGiveawayLaunch {
  _: "messageActionGiveawayLaunch";
}

export interface messageActionGiveawayResults {
  _: "messageActionGiveawayResults";
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
  premium_gifts?: Array<PremiumGiftOption>;
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
  chat_id: bigint;
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
  extended_media: MessageExtendedMedia;
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
  title?: string;
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
  title: string;
  about?: string;
  photo: Photo;
  participants_count: number;
  participants?: Array<User>;
  color: number;
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
  user_id?: bigint;
  description?: string;
  description_photo?: Photo;
  description_document?: Document;
  commands?: Array<BotCommand>;
  menu_button?: BotMenuButton;
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
}

export interface channelParticipantSelf {
  _: "channelParticipantSelf";
  via_request?: true;
  user_id: bigint;
  inviter_id: bigint;
  date: number;
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
  receipt?: string;
  push_timeout?: number;
  length: number;
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
}

export interface phoneCallDiscarded {
  _: "phoneCallDiscarded";
  need_rating?: true;
  need_debug?: true;
  video?: true;
  id: bigint;
  reason?: PhoneCallDiscardReason;
  duration?: number;
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
  text: string;
  option: Uint8Array;
}

export interface poll {
  _: "poll";
  id: bigint;
  closed?: true;
  public_voters?: true;
  multiple_choice?: true;
  quiz?: true;
  question: string;
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
  id: number;
  title: string;
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
  id: number;
  title: string;
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
  show_peer_photo?: true;
  can_report?: true;
  random_id: Uint8Array;
  from_id?: Peer;
  chat_invite?: ChatInvite;
  chat_invite_hash?: string;
  channel_post?: number;
  start_param?: string;
  webpage?: SponsoredWebPage;
  app?: BotApp;
  message: string;
  entities?: Array<MessageEntity>;
  button_text?: string;
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
  query_id: bigint;
  url: string;
}

export interface simpleWebViewResultUrl {
  _: "simpleWebViewResultUrl";
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

export interface premiumGiftOption {
  _: "premiumGiftOption";
  months: number;
  currency: string;
  amount: bigint;
  bot_url: string;
  store_product?: string;
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
}

export interface emojiStatusUntil {
  _: "emojiStatusUntil";
  document_id: bigint;
  until: number;
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

export interface appWebViewResultUrl {
  _: "appWebViewResultUrl";
  url: string;
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
  title: string;
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

export interface sponsoredWebPage {
  _: "sponsoredWebPage";
  url: string;
  site_name: string;
  photo?: Photo;
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
  finish_date: number;
  winners_count: number;
  activated_count: number;
}

export interface prepaidGiveaway {
  _: "prepaidGiveaway";
  id: bigint;
  months: number;
  quantity: number;
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
  current_balance: bigint;
  available_balance: bigint;
  overall_revenue: bigint;
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

export interface invokeAfterMsg<T extends Function> {
  _: "invokeAfterMsg";
  msg_id: bigint;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeAfterMsgs<T extends Function> {
  _: "invokeAfterMsgs";
  msg_ids: Array<bigint>;
  query: T;
  [R]?: ReturnType<T>;
}

export interface initConnection<T extends Function> {
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

export interface invokeWithLayer<T extends Function> {
  _: "invokeWithLayer";
  layer: number;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithoutUpdates<T extends Function> {
  _: "invokeWithoutUpdates";
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithMessagesRange<T extends Function> {
  _: "invokeWithMessagesRange";
  range: MessageRange;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithTakeout<T extends Function> {
  _: "invokeWithTakeout";
  takeout_id: bigint;
  query: T;
  [R]?: ReturnType<T>;
}

export interface invokeWithBusinessConnection<T extends Function> {
  _: "invokeWithBusinessConnection";
  connection_id: string;
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
  ios_push_secret?: string;
  [R]?: boolean;
}

export interface auth_resetLoginEmail {
  _: "auth.resetLoginEmail";
  phone_number: string;
  phone_code_hash: string;
  [R]?: auth_SentCode;
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

export interface users_getIsPremiumRequiredToContact {
  _: "users.getIsPremiumRequiredToContact";
  id: Array<InputUser>;
  [R]?: Array<boolean>;
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
  peer: InputPeer;
  reply_to?: InputReplyTo;
  message: string;
  random_id: bigint;
  reply_markup?: ReplyMarkup;
  entities?: Array<MessageEntity>;
  schedule_date?: number;
  send_as?: InputPeer;
  quick_reply_shortcut?: InputQuickReplyShortcut;
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
  from_peer: InputPeer;
  id: Array<number>;
  random_id: Array<bigint>;
  to_peer: InputPeer;
  top_msg_id?: number;
  schedule_date?: number;
  send_as?: InputPeer;
  quick_reply_shortcut?: InputQuickReplyShortcut;
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
  reason: ReportReason;
  message: string;
  [R]?: boolean;
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
  [R]?: MessageMedia;
}

export interface messages_exportChatInvite {
  _: "messages.exportChatInvite";
  legacy_revoke_permanent?: true;
  request_needed?: true;
  peer: InputPeer;
  expire_date?: number;
  usage_limit?: number;
  title?: string;
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
  peer: InputPeer;
  reply_to?: InputReplyTo;
  multi_media: Array<InputSingleMedia>;
  schedule_date?: number;
  send_as?: InputPeer;
  quick_reply_shortcut?: InputQuickReplyShortcut;
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
  bot: InputUser;
  url?: string;
  start_param?: string;
  theme_params?: DataJSON;
  platform: string;
  [R]?: SimpleWebViewResult;
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
  peer: InputPeer;
  app: InputBotApp;
  start_param?: string;
  theme_params?: DataJSON;
  platform: string;
  [R]?: AppWebViewResult;
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
  channel: InputChannel;
  enabled: boolean;
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

export interface channels_viewSponsoredMessage {
  _: "channels.viewSponsoredMessage";
  channel: InputChannel;
  random_id: Uint8Array;
  [R]?: boolean;
}

export interface channels_getSponsoredMessages {
  _: "channels.getSponsoredMessages";
  channel: InputChannel;
  [R]?: messages_SponsoredMessages;
}

export interface channels_getSendAs {
  _: "channels.getSendAs";
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

export interface channels_clickSponsoredMessage {
  _: "channels.clickSponsoredMessage";
  channel: InputChannel;
  random_id: Uint8Array;
  [R]?: boolean;
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
  channel: InputChannel;
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

export interface channels_reportSponsoredMessage {
  _: "channels.reportSponsoredMessage";
  channel: InputChannel;
  random_id: Uint8Array;
  option: Uint8Array;
  [R]?: channels_SponsoredMessageReportResult;
}

export interface channels_restrictSponsoredMessages {
  _: "channels.restrictSponsoredMessages";
  channel: InputChannel;
  restricted: boolean;
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
  channel: InputChannel;
  [R]?: stats_BroadcastRevenueStats;
}

export interface stats_getBroadcastRevenueWithdrawalUrl {
  _: "stats.getBroadcastRevenueWithdrawalUrl";
  channel: InputChannel;
  password: InputCheckPasswordSRP;
  [R]?: stats_BroadcastRevenueWithdrawalUrl;
}

export interface stats_getBroadcastRevenueTransactions {
  _: "stats.getBroadcastRevenueTransactions";
  channel: InputChannel;
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
  reason: ReportReason;
  message: string;
  [R]?: boolean;
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
  "payments.validatedRequestedInfo": payments_validatedRequestedInfo;
  "payments.paymentResult": payments_paymentResult;
  "payments.paymentVerificationNeeded": payments_paymentVerificationNeeded;
  "payments.paymentReceipt": payments_paymentReceipt;
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
  "simpleWebViewResultUrl": simpleWebViewResultUrl;
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
  "payments.exportedInvoice": payments_exportedInvoice;
  "messages.transcribedAudio": messages_transcribedAudio;
  "help.premiumPromo": help_premiumPromo;
  "inputStorePaymentPremiumSubscription": inputStorePaymentPremiumSubscription;
  "inputStorePaymentGiftPremium": inputStorePaymentGiftPremium;
  "inputStorePaymentPremiumGiftCode": inputStorePaymentPremiumGiftCode;
  "inputStorePaymentPremiumGiveaway": inputStorePaymentPremiumGiveaway;
  "premiumGiftOption": premiumGiftOption;
  "paymentFormMethod": paymentFormMethod;
  "emojiStatusEmpty": emojiStatusEmpty;
  "emojiStatus": emojiStatus;
  "emojiStatusUntil": emojiStatusUntil;
  "account.emojiStatusesNotModified": account_emojiStatusesNotModified;
  "account.emojiStatuses": account_emojiStatuses;
  "reactionEmpty": reactionEmpty;
  "reactionEmoji": reactionEmoji;
  "reactionCustomEmoji": reactionCustomEmoji;
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
  "appWebViewResultUrl": appWebViewResultUrl;
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
  "sponsoredWebPage": sponsoredWebPage;
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
  "peerStories": peerStories;
  "stories.peerStories": stories_peerStories;
  "messages.webPage": messages_webPage;
  "premiumGiftCodeOption": premiumGiftCodeOption;
  "payments.checkedGiftCode": payments_checkedGiftCode;
  "payments.giveawayInfo": payments_giveawayInfo;
  "payments.giveawayInfoResults": payments_giveawayInfoResults;
  "prepaidGiveaway": prepaidGiveaway;
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
}

export interface Functions<T extends Function = Function> {
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
  "invokeAfterMsg": invokeAfterMsg<T>;
  "invokeAfterMsgs": invokeAfterMsgs<T>;
  "initConnection": initConnection<T>;
  "invokeWithLayer": invokeWithLayer<T>;
  "invokeWithoutUpdates": invokeWithoutUpdates<T>;
  "invokeWithMessagesRange": invokeWithMessagesRange<T>;
  "invokeWithTakeout": invokeWithTakeout<T>;
  "invokeWithBusinessConnection": invokeWithBusinessConnection<T>;
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
  "users.getUsers": users_getUsers;
  "users.getFullUser": users_getFullUser;
  "users.setSecureValueErrors": users_setSecureValueErrors;
  "users.getIsPremiumRequiredToContact": users_getIsPremiumRequiredToContact;
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
  "channels.viewSponsoredMessage": channels_viewSponsoredMessage;
  "channels.getSponsoredMessages": channels_getSponsoredMessages;
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
  "channels.clickSponsoredMessage": channels_clickSponsoredMessage;
  "channels.updateColor": channels_updateColor;
  "channels.toggleViewForumAsMessages": channels_toggleViewForumAsMessages;
  "channels.getChannelRecommendations": channels_getChannelRecommendations;
  "channels.updateEmojiStatus": channels_updateEmojiStatus;
  "channels.setBoostsToUnblockRestrictions": channels_setBoostsToUnblockRestrictions;
  "channels.setEmojiStickers": channels_setEmojiStickers;
  "channels.reportSponsoredMessage": channels_reportSponsoredMessage;
  "channels.restrictSponsoredMessages": channels_restrictSponsoredMessages;
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
  "SimpleWebViewResult": SimpleWebViewResult;
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
  "PremiumGiftOption": PremiumGiftOption;
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
  "AppWebViewResult": AppWebViewResult;
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
  "SponsoredWebPage": SponsoredWebPage;
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
}

export type AnyType = Types[keyof Types];

export type AnyFunction<T extends Function = Function> = Functions<T>[keyof Functions<T>];

export type AnyObject<T extends Function = Function> = AnyType | AnyFunction<T>;

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

export type InputFile = inputFile | inputFileBig;

export type InputMedia = inputMediaEmpty | inputMediaUploadedPhoto | inputMediaPhoto | inputMediaGeoPoint | inputMediaContact | inputMediaUploadedDocument | inputMediaDocument | inputMediaVenue | inputMediaPhotoExternal | inputMediaDocumentExternal | inputMediaGame | inputMediaInvoice | inputMediaGeoLive | inputMediaPoll | inputMediaDice | inputMediaStory | inputMediaWebPage;

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

export type MessageMedia = messageMediaEmpty | messageMediaPhoto | messageMediaGeo | messageMediaContact | messageMediaUnsupported | messageMediaDocument | messageMediaWebPage | messageMediaVenue | messageMediaGame | messageMediaInvoice | messageMediaGeoLive | messageMediaPoll | messageMediaDice | messageMediaStory | messageMediaGiveaway | messageMediaGiveawayResults;

export type MessageAction =
  | messageActionEmpty
  | messageActionChatCreate
  | messageActionChatEditTitle
  | messageActionChatEditPhoto
  | messageActionChatDeletePhoto
  | messageActionChatAddUser
  | messageActionChatDeleteUser
  | messageActionChatJoinedByLink
  | messageActionChannelCreate
  | messageActionChatMigrateTo
  | messageActionChannelMigrateFrom
  | messageActionPinMessage
  | messageActionHistoryClear
  | messageActionGameScore
  | messageActionPaymentSentMe
  | messageActionPaymentSent
  | messageActionPhoneCall
  | messageActionScreenshotTaken
  | messageActionCustomAction
  | messageActionBotAllowed
  | messageActionSecureValuesSentMe
  | messageActionSecureValuesSent
  | messageActionContactSignUp
  | messageActionGeoProximityReached
  | messageActionGroupCall
  | messageActionInviteToGroupCall
  | messageActionSetMessagesTTL
  | messageActionGroupCallScheduled
  | messageActionSetChatTheme
  | messageActionChatJoinedByRequest
  | messageActionWebViewDataSentMe
  | messageActionWebViewDataSent
  | messageActionGiftPremium
  | messageActionTopicCreate
  | messageActionTopicEdit
  | messageActionSuggestProfilePhoto
  | messageActionRequestedPeer
  | messageActionSetChatWallPaper
  | messageActionGiftCode
  | messageActionGiveawayLaunch
  | messageActionGiveawayResults
  | messageActionBoostApply
  | messageActionRequestedPeerSentMe;

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
  | updateBotDeleteBusinessMessage;

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

export type InputPrivacyKey = inputPrivacyKeyStatusTimestamp | inputPrivacyKeyChatInvite | inputPrivacyKeyPhoneCall | inputPrivacyKeyPhoneP2P | inputPrivacyKeyForwards | inputPrivacyKeyProfilePhoto | inputPrivacyKeyPhoneNumber | inputPrivacyKeyAddedByPhone | inputPrivacyKeyVoiceMessages | inputPrivacyKeyAbout | inputPrivacyKeyBirthday;

export type PrivacyKey = privacyKeyStatusTimestamp | privacyKeyChatInvite | privacyKeyPhoneCall | privacyKeyPhoneP2P | privacyKeyForwards | privacyKeyProfilePhoto | privacyKeyPhoneNumber | privacyKeyAddedByPhone | privacyKeyVoiceMessages | privacyKeyAbout | privacyKeyBirthday;

export type InputPrivacyRule = inputPrivacyValueAllowContacts | inputPrivacyValueAllowAll | inputPrivacyValueAllowUsers | inputPrivacyValueDisallowContacts | inputPrivacyValueDisallowAll | inputPrivacyValueDisallowUsers | inputPrivacyValueAllowChatParticipants | inputPrivacyValueDisallowChatParticipants | inputPrivacyValueAllowCloseFriends | inputPrivacyValueAllowPremium;

export type PrivacyRule = privacyValueAllowContacts | privacyValueAllowAll | privacyValueAllowUsers | privacyValueDisallowContacts | privacyValueDisallowAll | privacyValueDisallowUsers | privacyValueAllowChatParticipants | privacyValueDisallowChatParticipants | privacyValueAllowCloseFriends | privacyValueAllowPremium;

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

export type KeyboardButton = keyboardButton | keyboardButtonUrl | keyboardButtonCallback | keyboardButtonRequestPhone | keyboardButtonRequestGeoLocation | keyboardButtonSwitchInline | keyboardButtonGame | keyboardButtonBuy | keyboardButtonUrlAuth | inputKeyboardButtonUrlAuth | keyboardButtonRequestPoll | inputKeyboardButtonUserProfile | keyboardButtonUserProfile | keyboardButtonWebView | keyboardButtonSimpleWebView | keyboardButtonRequestPeer | inputKeyboardButtonRequestPeer;

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

export type auth_SentCodeType = auth_sentCodeTypeApp | auth_sentCodeTypeSms | auth_sentCodeTypeCall | auth_sentCodeTypeFlashCall | auth_sentCodeTypeMissedCall | auth_sentCodeTypeEmailCode | auth_sentCodeTypeSetUpEmailRequired | auth_sentCodeTypeFragmentSms | auth_sentCodeTypeFirebaseSms;

export type messages_BotCallbackAnswer = messages_botCallbackAnswer;

export type messages_MessageEditData = messages_messageEditData;

export type InputBotInlineMessageID = inputBotInlineMessageID | inputBotInlineMessageID64;

export type InlineBotSwitchPM = inlineBotSwitchPM;

export type messages_PeerDialogs = messages_peerDialogs;

export type TopPeer = topPeer;

export type TopPeerCategory = topPeerCategoryBotsPM | topPeerCategoryBotsInline | topPeerCategoryCorrespondents | topPeerCategoryGroups | topPeerCategoryChannels | topPeerCategoryPhoneCalls | topPeerCategoryForwardUsers | topPeerCategoryForwardChats;

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

export type PhoneCallDiscardReason = phoneCallDiscardReasonMissed | phoneCallDiscardReasonDisconnect | phoneCallDiscardReasonHangup | phoneCallDiscardReasonBusy;

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

export type payments_PaymentForm = payments_paymentForm;

export type payments_ValidatedRequestedInfo = payments_validatedRequestedInfo;

export type payments_PaymentResult = payments_paymentResult | payments_paymentVerificationNeeded;

export type payments_PaymentReceipt = payments_paymentReceipt;

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
  | channelAdminLogEventActionChangeEmojiStickerSet;

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

export type WebPageAttribute = webPageAttributeTheme | webPageAttributeStory;

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

export type SimpleWebViewResult = simpleWebViewResultUrl;

export type WebViewMessageSent = webViewMessageSent;

export type BotMenuButton = botMenuButtonDefault | botMenuButtonCommands | botMenuButton;

export type account_SavedRingtones = account_savedRingtonesNotModified | account_savedRingtones;

export type NotificationSound = notificationSoundDefault | notificationSoundNone | notificationSoundLocal | notificationSoundRingtone;

export type account_SavedRingtone = account_savedRingtone | account_savedRingtoneConverted;

export type AttachMenuPeerType = attachMenuPeerTypeSameBotPM | attachMenuPeerTypeBotPM | attachMenuPeerTypePM | attachMenuPeerTypeChat | attachMenuPeerTypeBroadcast;

export type InputInvoice = inputInvoiceMessage | inputInvoiceSlug | inputInvoicePremiumGiftCode;

export type payments_ExportedInvoice = payments_exportedInvoice;

export type messages_TranscribedAudio = messages_transcribedAudio;

export type help_PremiumPromo = help_premiumPromo;

export type InputStorePaymentPurpose = inputStorePaymentPremiumSubscription | inputStorePaymentGiftPremium | inputStorePaymentPremiumGiftCode | inputStorePaymentPremiumGiveaway;

export type PremiumGiftOption = premiumGiftOption;

export type PaymentFormMethod = paymentFormMethod;

export type EmojiStatus = emojiStatusEmpty | emojiStatus | emojiStatusUntil;

export type account_EmojiStatuses = account_emojiStatusesNotModified | account_emojiStatuses;

export type Reaction = reactionEmpty | reactionEmoji | reactionCustomEmoji;

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

export type EmojiGroup = emojiGroup;

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

export type AppWebViewResult = appWebViewResultUrl;

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

export type SponsoredWebPage = sponsoredWebPage;

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

export type MediaArea = mediaAreaVenue | inputMediaAreaVenue | mediaAreaGeoPoint | mediaAreaSuggestedReaction | mediaAreaChannelPost | inputMediaAreaChannelPost;

export type PeerStories = peerStories;

export type stories_PeerStories = stories_peerStories;

export type messages_WebPage = messages_webPage;

export type PremiumGiftCodeOption = premiumGiftCodeOption;

export type payments_CheckedGiftCode = payments_checkedGiftCode;

export type payments_GiveawayInfo = payments_giveawayInfo | payments_giveawayInfoResults;

export type PrepaidGiveaway = prepaidGiveaway;

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

const map: Map<number, string> = new Map([
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
  [0x9664F57F, "inputMediaEmpty"],
  [0x1E287D04, "inputMediaUploadedPhoto"],
  [0xB3BA0635, "inputMediaPhoto"],
  [0xF9C44144, "inputMediaGeoPoint"],
  [0xF8AB7DFB, "inputMediaContact"],
  [0x5B38C6C1, "inputMediaUploadedDocument"],
  [0x33473058, "inputMediaDocument"],
  [0xC13D1C11, "inputMediaVenue"],
  [0xE5BBFE1A, "inputMediaPhotoExternal"],
  [0xFB52DC99, "inputMediaDocumentExternal"],
  [0xD33F43F3, "inputMediaGame"],
  [0x8EB5A6D5, "inputMediaInvoice"],
  [0x971FA843, "inputMediaGeoLive"],
  [0x0F94E5F1, "inputMediaPoll"],
  [0xE66FBF7B, "inputMediaDice"],
  [0x89FDD778, "inputMediaStory"],
  [0xC21B8849, "inputMediaWebPage"],
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
  [0x215C4438, "user"],
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
  [0x0AADFC8F, "channel"],
  [0x17D493D5, "channelForbidden"],
  [0xC9D31138, "chatFull"],
  [0x44C054A7, "channelFull"],
  [0xC02D4007, "chatParticipant"],
  [0xE46BCEE4, "chatParticipantCreator"],
  [0xA0933F5B, "chatParticipantAdmin"],
  [0x8763D3E1, "chatParticipantsForbidden"],
  [0x3CBC93F8, "chatParticipants"],
  [0x37C1011C, "chatPhotoEmpty"],
  [0x1C6E1C11, "chatPhoto"],
  [0x90A6CA84, "messageEmpty"],
  [0x2357BF25, "message"],
  [0x2B085862, "messageService"],
  [0x3DED6320, "messageMediaEmpty"],
  [0x695150D7, "messageMediaPhoto"],
  [0x56E0D474, "messageMediaGeo"],
  [0x70322949, "messageMediaContact"],
  [0x9F84F49E, "messageMediaUnsupported"],
  [0x4CF4D72D, "messageMediaDocument"],
  [0xDDF10C3B, "messageMediaWebPage"],
  [0x2EC0533F, "messageMediaVenue"],
  [0xFDB19008, "messageMediaGame"],
  [0xF6A548D3, "messageMediaInvoice"],
  [0xB940C666, "messageMediaGeoLive"],
  [0x4BD6E798, "messageMediaPoll"],
  [0x3F7EE58B, "messageMediaDice"],
  [0x68CB6283, "messageMediaStory"],
  [0xDAAD85B0, "messageMediaGiveaway"],
  [0xC6991068, "messageMediaGiveawayResults"],
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
  [0x8F31B327, "messageActionPaymentSentMe"],
  [0x96163F56, "messageActionPaymentSent"],
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
  [0xC83D6AEC, "messageActionGiftPremium"],
  [0x0D999256, "messageActionTopicCreate"],
  [0xC0944820, "messageActionTopicEdit"],
  [0x57DE635E, "messageActionSuggestProfilePhoto"],
  [0x31518E9B, "messageActionRequestedPeer"],
  [0x5060A3F4, "messageActionSetChatWallPaper"],
  [0x678C2E09, "messageActionGiftCode"],
  [0x332BA9ED, "messageActionGiveawayLaunch"],
  [0x2A9FADC5, "messageActionGiveawayResults"],
  [0xCC02AA6D, "messageActionBoostApply"],
  [0x93B31848, "messageActionRequestedPeerSentMe"],
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
  [0xACD66C5E, "peerSettings"],
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
  [0xCC997720, "userFull"],
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
  [0x90866CEE, "updateDeleteScheduledMessages"],
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
  [0x14B24500, "updateGroupCall"],
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
  [0x5A73A98C, "updateMessageExtendedMedia"],
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
  [0x50A04E45, "account.privacyRules"],
  [0xB8D0AFDF, "accountDaysTTL"],
  [0x6C37C15C, "documentAttributeImageSize"],
  [0x11B58939, "documentAttributeAnimated"],
  [0x6319D612, "documentAttributeSticker"],
  [0xD38FF1C2, "documentAttributeVideo"],
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
  [0x0AB4A819, "chatInviteExported"],
  [0xED107AB7, "chatInvitePublicJoinRequests"],
  [0x5A686D7C, "chatInviteAlready"],
  [0xCDE0EC40, "chatInvite"],
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
  [0x8F300B57, "botInfo"],
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
  [0x020DF5D0, "messageEntityBlockquote"],
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
  [0xC00C07C0, "channelParticipant"],
  [0x35A8BFA7, "channelParticipantSelf"],
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
  [0xE57B1432, "auth.sentCodeTypeFirebaseSms"],
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
  [0xFB834291, "topPeerCategoryPeers"],
  [0xDE266EF5, "contacts.topPeersNotModified"],
  [0x70B772A8, "contacts.topPeers"],
  [0xB52C939D, "contacts.topPeersDisabled"],
  [0x1B0C841A, "draftMessageEmpty"],
  [0x3FCCF7EF, "draftMessage"],
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
  [0x7D748D04, "dataJSON"],
  [0xCB296BF8, "labeledPrice"],
  [0x5DB95A15, "invoice"],
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
  [0xD1451883, "payments.validatedRequestedInfo"],
  [0x4E5F810D, "payments.paymentResult"],
  [0xD8411139, "payments.paymentVerificationNeeded"],
  [0x70C4FE03, "payments.paymentReceipt"],
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
  [0xC5226F17, "phoneCallWaiting"],
  [0x14B0ED0C, "phoneCallRequested"],
  [0x3660C311, "phoneCallAccepted"],
  [0x30535AF5, "phoneCall"],
  [0x50CA4DE1, "phoneCallDiscarded"],
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
  [0x6CA9C2E9, "pollAnswer"],
  [0x86E18161, "poll"],
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
  [0x4899484E, "messages.votesList"],
  [0xF568028A, "bankCardOpenUrl"],
  [0x3E24E573, "payments.bankCardData"],
  [0x5FB5523B, "dialogFilter"],
  [0x363293AE, "dialogFilterDefault"],
  [0x9FE28EA4, "dialogFilterChatlist"],
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
  [0x734C4CCB, "globalPrivacySettings"],
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
  [0xD597650C, "groupCall"],
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
  [0xED5383F7, "sponsoredMessage"],
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
  [0x4F2B9479, "messageReactions"],
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
  [0x0C14557C, "webViewResultUrl"],
  [0x882F76BB, "simpleWebViewResultUrl"],
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
  [0xAED0CBD9, "payments.exportedInvoice"],
  [0xCFB9D957, "messages.transcribedAudio"],
  [0x5334759C, "help.premiumPromo"],
  [0xA6751E66, "inputStorePaymentPremiumSubscription"],
  [0x616F7FE8, "inputStorePaymentGiftPremium"],
  [0xA3805F3F, "inputStorePaymentPremiumGiftCode"],
  [0x160544CA, "inputStorePaymentPremiumGiveaway"],
  [0x74C34319, "premiumGiftOption"],
  [0x88F8F21B, "paymentFormMethod"],
  [0x2DE11AAE, "emojiStatusEmpty"],
  [0x929B619D, "emojiStatus"],
  [0xFA30A8C7, "emojiStatusUntil"],
  [0xD08CE645, "account.emojiStatusesNotModified"],
  [0x90C467D1, "account.emojiStatuses"],
  [0x79F5D419, "reactionEmpty"],
  [0x1B2286B8, "reactionEmoji"],
  [0x8935FC73, "reactionCustomEmoji"],
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
  [0x3C1B4F0D, "appWebViewResultUrl"],
  [0xB57295D5, "inlineBotWebView"],
  [0x4A4FF172, "readParticipantDate"],
  [0xF3E0DA33, "inputChatlistDialogFilter"],
  [0x0C5181AC, "exportedChatlistInvite"],
  [0x10E6E3A6, "chatlists.exportedChatlistInvite"],
  [0x10AB6DC7, "chatlists.exportedInvites"],
  [0xFA87F659, "chatlists.chatlistInviteAlready"],
  [0x1DCD839D, "chatlists.chatlistInvite"],
  [0x93BD878D, "chatlists.chatlistUpdates"],
  [0xE8A775B0, "bots.botInfo"],
  [0xB6CC2D5C, "messagePeerVote"],
  [0x74CDA504, "messagePeerVoteInputOption"],
  [0x4628F6E6, "messagePeerVoteMultiple"],
  [0x3DB8EC63, "sponsoredWebPage"],
  [0x8D595CD6, "storyViews"],
  [0x51E6EE4F, "storyItemDeleted"],
  [0xFFADC913, "storyItemSkipped"],
  [0x79B26A24, "storyItem"],
  [0x1158FE3E, "stories.allStoriesNotModified"],
  [0x6EFC5E81, "stories.allStories"],
  [0x5DD8C3C8, "stories.stories"],
  [0xB0BDEAC5, "storyView"],
  [0x9083670B, "storyViewPublicForward"],
  [0xBD74CF49, "storyViewPublicRepost"],
  [0x59D78FC5, "stories.storyViewsList"],
  [0xDE9EED1D, "stories.storyViews"],
  [0x22C0F6D5, "inputReplyToMessage"],
  [0x5881323A, "inputReplyToStory"],
  [0x3FC9053B, "exportedStoryLink"],
  [0x712E27FD, "storiesStealthMode"],
  [0x03D1EA4E, "mediaAreaCoordinates"],
  [0xBE82DB9C, "mediaAreaVenue"],
  [0xB282217F, "inputMediaAreaVenue"],
  [0xDF8B3B22, "mediaAreaGeoPoint"],
  [0x14455871, "mediaAreaSuggestedReaction"],
  [0x770416AF, "mediaAreaChannelPost"],
  [0x2271F2BF, "inputMediaAreaChannelPost"],
  [0x9A35E999, "peerStories"],
  [0xCAE68768, "stories.peerStories"],
  [0xFD5E12BD, "messages.webPage"],
  [0x257E962B, "premiumGiftCodeOption"],
  [0x284A1096, "payments.checkedGiftCode"],
  [0x4367DAA0, "payments.giveawayInfo"],
  [0x00CD5570, "payments.giveawayInfoResults"],
  [0xB2539D54, "prepaidGiveaway"],
  [0x2A1C8C71, "boost"],
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
  [0xD07B4BAD, "stats.broadcastRevenueStats"],
  [0xEC659737, "stats.broadcastRevenueWithdrawalUrl"],
  [0x557E2CC4, "broadcastRevenueTransactionProceeds"],
  [0x5A590978, "broadcastRevenueTransactionWithdrawal"],
  [0x42D30D2E, "broadcastRevenueTransactionRefund"],
  [0x87158466, "stats.broadcastRevenueTransactions"],
]);

export const getTypeName: (id: number) => string | undefined = map.get.bind(map);

export const flags: symbol = Symbol();

export type Parameters = [number, [string, unknown, string][]];

const enums: Map<string, (keyof Types)[]> = new Map([
  ["ResPQ", ["resPQ"]],
  ["P_Q_inner_data", ["p_q_inner_data_dc", "p_q_inner_data_temp_dc"]],
  ["Server_DH_Params", ["server_DH_params_ok"]],
  ["Server_DH_inner_data", ["server_DH_inner_data"]],
  ["Client_DH_Inner_Data", ["client_DH_inner_data"]],
  ["Set_client_DH_params_answer", ["dh_gen_ok", "dh_gen_retry", "dh_gen_fail"]],
  ["BindAuthKeyInner", ["bind_auth_key_inner"]],
  ["RpcError", ["rpc_error"]],
  ["RpcDropAnswer", ["rpc_answer_unknown", "rpc_answer_dropped_running", "rpc_answer_dropped"]],
  ["FutureSalt", ["future_salt"]],
  ["FutureSalts", ["future_salts"]],
  ["Pong", ["pong"]],
  ["DestroySessionRes", ["destroy_session_ok", "destroy_session_none"]],
  ["NewSession", ["new_session_created"]],
  ["Object", ["gzip_packed"]],
  ["MsgsAck", ["msgs_ack"]],
  ["BadMsgNotification", ["bad_msg_notification", "bad_server_salt"]],
  ["MsgResendReq", ["msg_resend_req"]],
  ["MsgsStateReq", ["msgs_state_req"]],
  ["MsgsStateInfo", ["msgs_state_info"]],
  ["MsgsAllInfo", ["msgs_all_info"]],
  ["MsgDetailedInfo", ["msg_detailed_info", "msg_new_detailed_info"]],
  ["DestroyAuthKeyRes", ["destroy_auth_key_ok", "destroy_auth_key_none", "destroy_auth_key_fail"]],
  ["HttpWait", ["http_wait"]],
  ["True", ["true"]],
  ["Error", ["error"]],
  ["IpPort", ["ipPort", "ipPortSecret"]],
  ["AccessPointRule", ["accessPointRule"]],
  ["help.ConfigSimple", ["help.configSimple"]],
  ["InputFileLocation", ["inputPeerPhotoFileLocationLegacy", "inputStickerSetThumbLegacy", "inputFileLocation", "inputEncryptedFileLocation", "inputDocumentFileLocation", "inputSecureFileLocation", "inputTakeoutFileLocation", "inputPhotoFileLocation", "inputPhotoLegacyFileLocation", "inputPeerPhotoFileLocation", "inputStickerSetThumb", "inputGroupCallStream"]],
  ["InputPeer", ["inputPeerEmpty", "inputPeerSelf", "inputPeerChat", "inputPeerUser", "inputPeerChannel", "inputPeerUserFromMessage", "inputPeerChannelFromMessage"]],
  ["InputUser", ["inputUserEmpty", "inputUserSelf", "inputUser", "inputUserFromMessage"]],
  ["InputContact", ["inputPhoneContact"]],
  ["InputFile", ["inputFile", "inputFileBig"]],
  ["InputMedia", ["inputMediaEmpty", "inputMediaUploadedPhoto", "inputMediaPhoto", "inputMediaGeoPoint", "inputMediaContact", "inputMediaUploadedDocument", "inputMediaDocument", "inputMediaVenue", "inputMediaPhotoExternal", "inputMediaDocumentExternal", "inputMediaGame", "inputMediaInvoice", "inputMediaGeoLive", "inputMediaPoll", "inputMediaDice", "inputMediaStory", "inputMediaWebPage"]],
  ["InputChatPhoto", ["inputChatPhotoEmpty", "inputChatUploadedPhoto", "inputChatPhoto"]],
  ["InputGeoPoint", ["inputGeoPointEmpty", "inputGeoPoint"]],
  ["InputPhoto", ["inputPhotoEmpty", "inputPhoto"]],
  ["Peer", ["peerUser", "peerChat", "peerChannel"]],
  ["storage.FileType", ["storage.fileUnknown", "storage.filePartial", "storage.fileJpeg", "storage.fileGif", "storage.filePng", "storage.filePdf", "storage.fileMp3", "storage.fileMov", "storage.fileMp4", "storage.fileWebp"]],
  ["User", ["userEmpty", "user"]],
  ["UserProfilePhoto", ["userProfilePhotoEmpty", "userProfilePhoto"]],
  ["UserStatus", ["userStatusEmpty", "userStatusOnline", "userStatusOffline", "userStatusRecently", "userStatusLastWeek", "userStatusLastMonth"]],
  ["Chat", ["chatEmpty", "chat", "chatForbidden", "channel", "channelForbidden"]],
  ["ChatFull", ["chatFull", "channelFull"]],
  ["ChatParticipant", ["chatParticipant", "chatParticipantCreator", "chatParticipantAdmin"]],
  ["ChatParticipants", ["chatParticipantsForbidden", "chatParticipants"]],
  ["ChatPhoto", ["chatPhotoEmpty", "chatPhoto"]],
  ["Message", ["messageEmpty", "message", "messageService"]],
  ["MessageMedia", ["messageMediaEmpty", "messageMediaPhoto", "messageMediaGeo", "messageMediaContact", "messageMediaUnsupported", "messageMediaDocument", "messageMediaWebPage", "messageMediaVenue", "messageMediaGame", "messageMediaInvoice", "messageMediaGeoLive", "messageMediaPoll", "messageMediaDice", "messageMediaStory", "messageMediaGiveaway", "messageMediaGiveawayResults"]],
  ["MessageAction", [
    "messageActionEmpty",
    "messageActionChatCreate",
    "messageActionChatEditTitle",
    "messageActionChatEditPhoto",
    "messageActionChatDeletePhoto",
    "messageActionChatAddUser",
    "messageActionChatDeleteUser",
    "messageActionChatJoinedByLink",
    "messageActionChannelCreate",
    "messageActionChatMigrateTo",
    "messageActionChannelMigrateFrom",
    "messageActionPinMessage",
    "messageActionHistoryClear",
    "messageActionGameScore",
    "messageActionPaymentSentMe",
    "messageActionPaymentSent",
    "messageActionPhoneCall",
    "messageActionScreenshotTaken",
    "messageActionCustomAction",
    "messageActionBotAllowed",
    "messageActionSecureValuesSentMe",
    "messageActionSecureValuesSent",
    "messageActionContactSignUp",
    "messageActionGeoProximityReached",
    "messageActionGroupCall",
    "messageActionInviteToGroupCall",
    "messageActionSetMessagesTTL",
    "messageActionGroupCallScheduled",
    "messageActionSetChatTheme",
    "messageActionChatJoinedByRequest",
    "messageActionWebViewDataSentMe",
    "messageActionWebViewDataSent",
    "messageActionGiftPremium",
    "messageActionTopicCreate",
    "messageActionTopicEdit",
    "messageActionSuggestProfilePhoto",
    "messageActionRequestedPeer",
    "messageActionSetChatWallPaper",
    "messageActionGiftCode",
    "messageActionGiveawayLaunch",
    "messageActionGiveawayResults",
    "messageActionBoostApply",
    "messageActionRequestedPeerSentMe",
  ]],
  ["Dialog", ["dialog", "dialogFolder"]],
  ["Photo", ["photoEmpty", "photo"]],
  ["PhotoSize", ["photoSizeEmpty", "photoSize", "photoCachedSize", "photoStrippedSize", "photoSizeProgressive", "photoPathSize"]],
  ["GeoPoint", ["geoPointEmpty", "geoPoint"]],
  ["auth.SentCode", ["auth.sentCode", "auth.sentCodeSuccess"]],
  ["auth.Authorization", ["auth.authorization", "auth.authorizationSignUpRequired"]],
  ["auth.ExportedAuthorization", ["auth.exportedAuthorization"]],
  ["InputNotifyPeer", ["inputNotifyPeer", "inputNotifyUsers", "inputNotifyChats", "inputNotifyBroadcasts", "inputNotifyForumTopic"]],
  ["InputPeerNotifySettings", ["inputPeerNotifySettings"]],
  ["PeerNotifySettings", ["peerNotifySettings"]],
  ["PeerSettings", ["peerSettings"]],
  ["WallPaper", ["wallPaper", "wallPaperNoFile"]],
  ["ReportReason", ["inputReportReasonSpam", "inputReportReasonViolence", "inputReportReasonPornography", "inputReportReasonChildAbuse", "inputReportReasonOther", "inputReportReasonCopyright", "inputReportReasonGeoIrrelevant", "inputReportReasonFake", "inputReportReasonIllegalDrugs", "inputReportReasonPersonalDetails"]],
  ["UserFull", ["userFull"]],
  ["Contact", ["contact"]],
  ["ImportedContact", ["importedContact"]],
  ["ContactStatus", ["contactStatus"]],
  ["contacts.Contacts", ["contacts.contactsNotModified", "contacts.contacts"]],
  ["contacts.ImportedContacts", ["contacts.importedContacts"]],
  ["contacts.Blocked", ["contacts.blocked", "contacts.blockedSlice"]],
  ["messages.Dialogs", ["messages.dialogs", "messages.dialogsSlice", "messages.dialogsNotModified"]],
  ["messages.Messages", ["messages.messages", "messages.messagesSlice", "messages.channelMessages", "messages.messagesNotModified"]],
  ["messages.Chats", ["messages.chats", "messages.chatsSlice"]],
  ["messages.ChatFull", ["messages.chatFull"]],
  ["messages.AffectedHistory", ["messages.affectedHistory"]],
  ["MessagesFilter", ["inputMessagesFilterEmpty", "inputMessagesFilterPhotos", "inputMessagesFilterVideo", "inputMessagesFilterPhotoVideo", "inputMessagesFilterDocument", "inputMessagesFilterUrl", "inputMessagesFilterGif", "inputMessagesFilterVoice", "inputMessagesFilterMusic", "inputMessagesFilterChatPhotos", "inputMessagesFilterPhoneCalls", "inputMessagesFilterRoundVoice", "inputMessagesFilterRoundVideo", "inputMessagesFilterMyMentions", "inputMessagesFilterGeo", "inputMessagesFilterContacts", "inputMessagesFilterPinned"]],
  ["Update", [
    "updateNewMessage",
    "updateMessageID",
    "updateDeleteMessages",
    "updateUserTyping",
    "updateChatUserTyping",
    "updateChatParticipants",
    "updateUserStatus",
    "updateUserName",
    "updateNewAuthorization",
    "updateNewEncryptedMessage",
    "updateEncryptedChatTyping",
    "updateEncryption",
    "updateEncryptedMessagesRead",
    "updateChatParticipantAdd",
    "updateChatParticipantDelete",
    "updateDcOptions",
    "updateNotifySettings",
    "updateServiceNotification",
    "updatePrivacy",
    "updateUserPhone",
    "updateReadHistoryInbox",
    "updateReadHistoryOutbox",
    "updateWebPage",
    "updateReadMessagesContents",
    "updateChannelTooLong",
    "updateChannel",
    "updateNewChannelMessage",
    "updateReadChannelInbox",
    "updateDeleteChannelMessages",
    "updateChannelMessageViews",
    "updateChatParticipantAdmin",
    "updateNewStickerSet",
    "updateStickerSetsOrder",
    "updateStickerSets",
    "updateSavedGifs",
    "updateBotInlineQuery",
    "updateBotInlineSend",
    "updateEditChannelMessage",
    "updateBotCallbackQuery",
    "updateEditMessage",
    "updateInlineBotCallbackQuery",
    "updateReadChannelOutbox",
    "updateDraftMessage",
    "updateReadFeaturedStickers",
    "updateRecentStickers",
    "updateConfig",
    "updatePtsChanged",
    "updateChannelWebPage",
    "updateDialogPinned",
    "updatePinnedDialogs",
    "updateBotWebhookJSON",
    "updateBotWebhookJSONQuery",
    "updateBotShippingQuery",
    "updateBotPrecheckoutQuery",
    "updatePhoneCall",
    "updateLangPackTooLong",
    "updateLangPack",
    "updateFavedStickers",
    "updateChannelReadMessagesContents",
    "updateContactsReset",
    "updateChannelAvailableMessages",
    "updateDialogUnreadMark",
    "updateMessagePoll",
    "updateChatDefaultBannedRights",
    "updateFolderPeers",
    "updatePeerSettings",
    "updatePeerLocated",
    "updateNewScheduledMessage",
    "updateDeleteScheduledMessages",
    "updateTheme",
    "updateGeoLiveViewed",
    "updateLoginToken",
    "updateMessagePollVote",
    "updateDialogFilter",
    "updateDialogFilterOrder",
    "updateDialogFilters",
    "updatePhoneCallSignalingData",
    "updateChannelMessageForwards",
    "updateReadChannelDiscussionInbox",
    "updateReadChannelDiscussionOutbox",
    "updatePeerBlocked",
    "updateChannelUserTyping",
    "updatePinnedMessages",
    "updatePinnedChannelMessages",
    "updateChat",
    "updateGroupCallParticipants",
    "updateGroupCall",
    "updatePeerHistoryTTL",
    "updateChatParticipant",
    "updateChannelParticipant",
    "updateBotStopped",
    "updateGroupCallConnection",
    "updateBotCommands",
    "updatePendingJoinRequests",
    "updateBotChatInviteRequester",
    "updateMessageReactions",
    "updateAttachMenuBots",
    "updateWebViewResultSent",
    "updateBotMenuButton",
    "updateSavedRingtones",
    "updateTranscribedAudio",
    "updateReadFeaturedEmojiStickers",
    "updateUserEmojiStatus",
    "updateRecentEmojiStatuses",
    "updateRecentReactions",
    "updateMoveStickerSetToTop",
    "updateMessageExtendedMedia",
    "updateChannelPinnedTopic",
    "updateChannelPinnedTopics",
    "updateUser",
    "updateAutoSaveSettings",
    "updateStory",
    "updateReadStories",
    "updateStoryID",
    "updateStoriesStealthMode",
    "updateSentStoryReaction",
    "updateBotChatBoost",
    "updateChannelViewForumAsMessages",
    "updatePeerWallpaper",
    "updateBotMessageReaction",
    "updateBotMessageReactions",
    "updateSavedDialogPinned",
    "updatePinnedSavedDialogs",
    "updateSavedReactionTags",
    "updateSmsJob",
    "updateQuickReplies",
    "updateNewQuickReply",
    "updateDeleteQuickReply",
    "updateQuickReplyMessage",
    "updateDeleteQuickReplyMessages",
    "updateBotBusinessConnect",
    "updateBotNewBusinessMessage",
    "updateBotEditBusinessMessage",
    "updateBotDeleteBusinessMessage",
  ]],
  ["updates.State", ["updates.state"]],
  ["updates.Difference", ["updates.differenceEmpty", "updates.difference", "updates.differenceSlice", "updates.differenceTooLong"]],
  ["Updates", ["updatesTooLong", "updateShortMessage", "updateShortChatMessage", "updateShort", "updatesCombined", "updates", "updateShortSentMessage"]],
  ["photos.Photos", ["photos.photos", "photos.photosSlice"]],
  ["photos.Photo", ["photos.photo"]],
  ["upload.File", ["upload.file", "upload.fileCdnRedirect"]],
  ["DcOption", ["dcOption"]],
  ["Config", ["config"]],
  ["NearestDc", ["nearestDc"]],
  ["help.AppUpdate", ["help.appUpdate", "help.noAppUpdate"]],
  ["help.InviteText", ["help.inviteText"]],
  ["EncryptedChat", ["encryptedChatEmpty", "encryptedChatWaiting", "encryptedChatRequested", "encryptedChat", "encryptedChatDiscarded"]],
  ["InputEncryptedChat", ["inputEncryptedChat"]],
  ["EncryptedFile", ["encryptedFileEmpty", "encryptedFile"]],
  ["InputEncryptedFile", ["inputEncryptedFileEmpty", "inputEncryptedFileUploaded", "inputEncryptedFile", "inputEncryptedFileBigUploaded"]],
  ["EncryptedMessage", ["encryptedMessage", "encryptedMessageService"]],
  ["messages.DhConfig", ["messages.dhConfigNotModified", "messages.dhConfig"]],
  ["messages.SentEncryptedMessage", ["messages.sentEncryptedMessage", "messages.sentEncryptedFile"]],
  ["InputDocument", ["inputDocumentEmpty", "inputDocument"]],
  ["Document", ["documentEmpty", "document"]],
  ["help.Support", ["help.support"]],
  ["NotifyPeer", ["notifyPeer", "notifyUsers", "notifyChats", "notifyBroadcasts", "notifyForumTopic"]],
  ["SendMessageAction", ["sendMessageTypingAction", "sendMessageCancelAction", "sendMessageRecordVideoAction", "sendMessageUploadVideoAction", "sendMessageRecordAudioAction", "sendMessageUploadAudioAction", "sendMessageUploadPhotoAction", "sendMessageUploadDocumentAction", "sendMessageGeoLocationAction", "sendMessageChooseContactAction", "sendMessageGamePlayAction", "sendMessageRecordRoundAction", "sendMessageUploadRoundAction", "speakingInGroupCallAction", "sendMessageHistoryImportAction", "sendMessageChooseStickerAction", "sendMessageEmojiInteraction", "sendMessageEmojiInteractionSeen"]],
  ["contacts.Found", ["contacts.found"]],
  ["InputPrivacyKey", ["inputPrivacyKeyStatusTimestamp", "inputPrivacyKeyChatInvite", "inputPrivacyKeyPhoneCall", "inputPrivacyKeyPhoneP2P", "inputPrivacyKeyForwards", "inputPrivacyKeyProfilePhoto", "inputPrivacyKeyPhoneNumber", "inputPrivacyKeyAddedByPhone", "inputPrivacyKeyVoiceMessages", "inputPrivacyKeyAbout", "inputPrivacyKeyBirthday"]],
  ["PrivacyKey", ["privacyKeyStatusTimestamp", "privacyKeyChatInvite", "privacyKeyPhoneCall", "privacyKeyPhoneP2P", "privacyKeyForwards", "privacyKeyProfilePhoto", "privacyKeyPhoneNumber", "privacyKeyAddedByPhone", "privacyKeyVoiceMessages", "privacyKeyAbout", "privacyKeyBirthday"]],
  ["InputPrivacyRule", ["inputPrivacyValueAllowContacts", "inputPrivacyValueAllowAll", "inputPrivacyValueAllowUsers", "inputPrivacyValueDisallowContacts", "inputPrivacyValueDisallowAll", "inputPrivacyValueDisallowUsers", "inputPrivacyValueAllowChatParticipants", "inputPrivacyValueDisallowChatParticipants", "inputPrivacyValueAllowCloseFriends", "inputPrivacyValueAllowPremium"]],
  ["PrivacyRule", ["privacyValueAllowContacts", "privacyValueAllowAll", "privacyValueAllowUsers", "privacyValueDisallowContacts", "privacyValueDisallowAll", "privacyValueDisallowUsers", "privacyValueAllowChatParticipants", "privacyValueDisallowChatParticipants", "privacyValueAllowCloseFriends", "privacyValueAllowPremium"]],
  ["account.PrivacyRules", ["account.privacyRules"]],
  ["AccountDaysTTL", ["accountDaysTTL"]],
  ["DocumentAttribute", ["documentAttributeImageSize", "documentAttributeAnimated", "documentAttributeSticker", "documentAttributeVideo", "documentAttributeAudio", "documentAttributeFilename", "documentAttributeHasStickers", "documentAttributeCustomEmoji"]],
  ["messages.Stickers", ["messages.stickersNotModified", "messages.stickers"]],
  ["StickerPack", ["stickerPack"]],
  ["messages.AllStickers", ["messages.allStickersNotModified", "messages.allStickers"]],
  ["messages.AffectedMessages", ["messages.affectedMessages"]],
  ["WebPage", ["webPageEmpty", "webPagePending", "webPage", "webPageNotModified"]],
  ["Authorization", ["authorization"]],
  ["account.Authorizations", ["account.authorizations"]],
  ["account.Password", ["account.password"]],
  ["account.PasswordSettings", ["account.passwordSettings"]],
  ["account.PasswordInputSettings", ["account.passwordInputSettings"]],
  ["auth.PasswordRecovery", ["auth.passwordRecovery"]],
  ["ReceivedNotifyMessage", ["receivedNotifyMessage"]],
  ["ExportedChatInvite", ["chatInviteExported", "chatInvitePublicJoinRequests"]],
  ["ChatInvite", ["chatInviteAlready", "chatInvite", "chatInvitePeek"]],
  ["InputStickerSet", ["inputStickerSetEmpty", "inputStickerSetID", "inputStickerSetShortName", "inputStickerSetAnimatedEmoji", "inputStickerSetDice", "inputStickerSetAnimatedEmojiAnimations", "inputStickerSetPremiumGifts", "inputStickerSetEmojiGenericAnimations", "inputStickerSetEmojiDefaultStatuses", "inputStickerSetEmojiDefaultTopicIcons", "inputStickerSetEmojiChannelDefaultStatuses"]],
  ["StickerSet", ["stickerSet"]],
  ["messages.StickerSet", ["messages.stickerSet", "messages.stickerSetNotModified"]],
  ["BotCommand", ["botCommand"]],
  ["BotInfo", ["botInfo"]],
  ["KeyboardButton", ["keyboardButton", "keyboardButtonUrl", "keyboardButtonCallback", "keyboardButtonRequestPhone", "keyboardButtonRequestGeoLocation", "keyboardButtonSwitchInline", "keyboardButtonGame", "keyboardButtonBuy", "keyboardButtonUrlAuth", "inputKeyboardButtonUrlAuth", "keyboardButtonRequestPoll", "inputKeyboardButtonUserProfile", "keyboardButtonUserProfile", "keyboardButtonWebView", "keyboardButtonSimpleWebView", "keyboardButtonRequestPeer", "inputKeyboardButtonRequestPeer"]],
  ["KeyboardButtonRow", ["keyboardButtonRow"]],
  ["ReplyMarkup", ["replyKeyboardHide", "replyKeyboardForceReply", "replyKeyboardMarkup", "replyInlineMarkup"]],
  ["MessageEntity", ["messageEntityUnknown", "messageEntityMention", "messageEntityHashtag", "messageEntityBotCommand", "messageEntityUrl", "messageEntityEmail", "messageEntityBold", "messageEntityItalic", "messageEntityCode", "messageEntityPre", "messageEntityTextUrl", "messageEntityMentionName", "inputMessageEntityMentionName", "messageEntityPhone", "messageEntityCashtag", "messageEntityUnderline", "messageEntityStrike", "messageEntityBankCard", "messageEntitySpoiler", "messageEntityCustomEmoji", "messageEntityBlockquote"]],
  ["InputChannel", ["inputChannelEmpty", "inputChannel", "inputChannelFromMessage"]],
  ["contacts.ResolvedPeer", ["contacts.resolvedPeer"]],
  ["MessageRange", ["messageRange"]],
  ["updates.ChannelDifference", ["updates.channelDifferenceEmpty", "updates.channelDifferenceTooLong", "updates.channelDifference"]],
  ["ChannelMessagesFilter", ["channelMessagesFilterEmpty", "channelMessagesFilter"]],
  ["ChannelParticipant", ["channelParticipant", "channelParticipantSelf", "channelParticipantCreator", "channelParticipantAdmin", "channelParticipantBanned", "channelParticipantLeft"]],
  ["ChannelParticipantsFilter", ["channelParticipantsRecent", "channelParticipantsAdmins", "channelParticipantsKicked", "channelParticipantsBots", "channelParticipantsBanned", "channelParticipantsSearch", "channelParticipantsContacts", "channelParticipantsMentions"]],
  ["channels.ChannelParticipants", ["channels.channelParticipants", "channels.channelParticipantsNotModified"]],
  ["channels.ChannelParticipant", ["channels.channelParticipant"]],
  ["help.TermsOfService", ["help.termsOfService"]],
  ["messages.SavedGifs", ["messages.savedGifsNotModified", "messages.savedGifs"]],
  ["InputBotInlineMessage", ["inputBotInlineMessageMediaAuto", "inputBotInlineMessageText", "inputBotInlineMessageMediaGeo", "inputBotInlineMessageMediaVenue", "inputBotInlineMessageMediaContact", "inputBotInlineMessageGame", "inputBotInlineMessageMediaInvoice", "inputBotInlineMessageMediaWebPage"]],
  ["InputBotInlineResult", ["inputBotInlineResult", "inputBotInlineResultPhoto", "inputBotInlineResultDocument", "inputBotInlineResultGame"]],
  ["BotInlineMessage", ["botInlineMessageMediaAuto", "botInlineMessageText", "botInlineMessageMediaGeo", "botInlineMessageMediaVenue", "botInlineMessageMediaContact", "botInlineMessageMediaInvoice", "botInlineMessageMediaWebPage"]],
  ["BotInlineResult", ["botInlineResult", "botInlineMediaResult"]],
  ["messages.BotResults", ["messages.botResults"]],
  ["ExportedMessageLink", ["exportedMessageLink"]],
  ["MessageFwdHeader", ["messageFwdHeader"]],
  ["auth.CodeType", ["auth.codeTypeSms", "auth.codeTypeCall", "auth.codeTypeFlashCall", "auth.codeTypeMissedCall", "auth.codeTypeFragmentSms"]],
  ["auth.SentCodeType", ["auth.sentCodeTypeApp", "auth.sentCodeTypeSms", "auth.sentCodeTypeCall", "auth.sentCodeTypeFlashCall", "auth.sentCodeTypeMissedCall", "auth.sentCodeTypeEmailCode", "auth.sentCodeTypeSetUpEmailRequired", "auth.sentCodeTypeFragmentSms", "auth.sentCodeTypeFirebaseSms"]],
  ["messages.BotCallbackAnswer", ["messages.botCallbackAnswer"]],
  ["messages.MessageEditData", ["messages.messageEditData"]],
  ["InputBotInlineMessageID", ["inputBotInlineMessageID", "inputBotInlineMessageID64"]],
  ["InlineBotSwitchPM", ["inlineBotSwitchPM"]],
  ["messages.PeerDialogs", ["messages.peerDialogs"]],
  ["TopPeer", ["topPeer"]],
  ["TopPeerCategory", ["topPeerCategoryBotsPM", "topPeerCategoryBotsInline", "topPeerCategoryCorrespondents", "topPeerCategoryGroups", "topPeerCategoryChannels", "topPeerCategoryPhoneCalls", "topPeerCategoryForwardUsers", "topPeerCategoryForwardChats"]],
  ["TopPeerCategoryPeers", ["topPeerCategoryPeers"]],
  ["contacts.TopPeers", ["contacts.topPeersNotModified", "contacts.topPeers", "contacts.topPeersDisabled"]],
  ["DraftMessage", ["draftMessageEmpty", "draftMessage"]],
  ["messages.FeaturedStickers", ["messages.featuredStickersNotModified", "messages.featuredStickers"]],
  ["messages.RecentStickers", ["messages.recentStickersNotModified", "messages.recentStickers"]],
  ["messages.ArchivedStickers", ["messages.archivedStickers"]],
  ["messages.StickerSetInstallResult", ["messages.stickerSetInstallResultSuccess", "messages.stickerSetInstallResultArchive"]],
  ["StickerSetCovered", ["stickerSetCovered", "stickerSetMultiCovered", "stickerSetFullCovered", "stickerSetNoCovered"]],
  ["MaskCoords", ["maskCoords"]],
  ["InputStickeredMedia", ["inputStickeredMediaPhoto", "inputStickeredMediaDocument"]],
  ["Game", ["game"]],
  ["InputGame", ["inputGameID", "inputGameShortName"]],
  ["HighScore", ["highScore"]],
  ["messages.HighScores", ["messages.highScores"]],
  ["RichText", ["textEmpty", "textPlain", "textBold", "textItalic", "textUnderline", "textStrike", "textFixed", "textUrl", "textEmail", "textConcat", "textSubscript", "textSuperscript", "textMarked", "textPhone", "textImage", "textAnchor"]],
  ["PageBlock", ["pageBlockUnsupported", "pageBlockTitle", "pageBlockSubtitle", "pageBlockAuthorDate", "pageBlockHeader", "pageBlockSubheader", "pageBlockParagraph", "pageBlockPreformatted", "pageBlockFooter", "pageBlockDivider", "pageBlockAnchor", "pageBlockList", "pageBlockBlockquote", "pageBlockPullquote", "pageBlockPhoto", "pageBlockVideo", "pageBlockCover", "pageBlockEmbed", "pageBlockEmbedPost", "pageBlockCollage", "pageBlockSlideshow", "pageBlockChannel", "pageBlockAudio", "pageBlockKicker", "pageBlockTable", "pageBlockOrderedList", "pageBlockDetails", "pageBlockRelatedArticles", "pageBlockMap"]],
  ["PhoneCallDiscardReason", ["phoneCallDiscardReasonMissed", "phoneCallDiscardReasonDisconnect", "phoneCallDiscardReasonHangup", "phoneCallDiscardReasonBusy"]],
  ["DataJSON", ["dataJSON"]],
  ["LabeledPrice", ["labeledPrice"]],
  ["Invoice", ["invoice"]],
  ["PaymentCharge", ["paymentCharge"]],
  ["PostAddress", ["postAddress"]],
  ["PaymentRequestedInfo", ["paymentRequestedInfo"]],
  ["PaymentSavedCredentials", ["paymentSavedCredentialsCard"]],
  ["WebDocument", ["webDocument", "webDocumentNoProxy"]],
  ["InputWebDocument", ["inputWebDocument"]],
  ["InputWebFileLocation", ["inputWebFileLocation", "inputWebFileGeoPointLocation", "inputWebFileAudioAlbumThumbLocation"]],
  ["upload.WebFile", ["upload.webFile"]],
  ["payments.PaymentForm", ["payments.paymentForm"]],
  ["payments.ValidatedRequestedInfo", ["payments.validatedRequestedInfo"]],
  ["payments.PaymentResult", ["payments.paymentResult", "payments.paymentVerificationNeeded"]],
  ["payments.PaymentReceipt", ["payments.paymentReceipt"]],
  ["payments.SavedInfo", ["payments.savedInfo"]],
  ["InputPaymentCredentials", ["inputPaymentCredentialsSaved", "inputPaymentCredentials", "inputPaymentCredentialsApplePay", "inputPaymentCredentialsGooglePay"]],
  ["account.TmpPassword", ["account.tmpPassword"]],
  ["ShippingOption", ["shippingOption"]],
  ["InputStickerSetItem", ["inputStickerSetItem"]],
  ["InputPhoneCall", ["inputPhoneCall"]],
  ["PhoneCall", ["phoneCallEmpty", "phoneCallWaiting", "phoneCallRequested", "phoneCallAccepted", "phoneCall", "phoneCallDiscarded"]],
  ["PhoneConnection", ["phoneConnection", "phoneConnectionWebrtc"]],
  ["PhoneCallProtocol", ["phoneCallProtocol"]],
  ["phone.PhoneCall", ["phone.phoneCall"]],
  ["upload.CdnFile", ["upload.cdnFileReuploadNeeded", "upload.cdnFile"]],
  ["CdnPublicKey", ["cdnPublicKey"]],
  ["CdnConfig", ["cdnConfig"]],
  ["LangPackString", ["langPackString", "langPackStringPluralized", "langPackStringDeleted"]],
  ["LangPackDifference", ["langPackDifference"]],
  ["LangPackLanguage", ["langPackLanguage"]],
  ["ChannelAdminLogEventAction", [
    "channelAdminLogEventActionChangeTitle",
    "channelAdminLogEventActionChangeAbout",
    "channelAdminLogEventActionChangeUsername",
    "channelAdminLogEventActionChangePhoto",
    "channelAdminLogEventActionToggleInvites",
    "channelAdminLogEventActionToggleSignatures",
    "channelAdminLogEventActionUpdatePinned",
    "channelAdminLogEventActionEditMessage",
    "channelAdminLogEventActionDeleteMessage",
    "channelAdminLogEventActionParticipantJoin",
    "channelAdminLogEventActionParticipantLeave",
    "channelAdminLogEventActionParticipantInvite",
    "channelAdminLogEventActionParticipantToggleBan",
    "channelAdminLogEventActionParticipantToggleAdmin",
    "channelAdminLogEventActionChangeStickerSet",
    "channelAdminLogEventActionTogglePreHistoryHidden",
    "channelAdminLogEventActionDefaultBannedRights",
    "channelAdminLogEventActionStopPoll",
    "channelAdminLogEventActionChangeLinkedChat",
    "channelAdminLogEventActionChangeLocation",
    "channelAdminLogEventActionToggleSlowMode",
    "channelAdminLogEventActionStartGroupCall",
    "channelAdminLogEventActionDiscardGroupCall",
    "channelAdminLogEventActionParticipantMute",
    "channelAdminLogEventActionParticipantUnmute",
    "channelAdminLogEventActionToggleGroupCallSetting",
    "channelAdminLogEventActionParticipantJoinByInvite",
    "channelAdminLogEventActionExportedInviteDelete",
    "channelAdminLogEventActionExportedInviteRevoke",
    "channelAdminLogEventActionExportedInviteEdit",
    "channelAdminLogEventActionParticipantVolume",
    "channelAdminLogEventActionChangeHistoryTTL",
    "channelAdminLogEventActionParticipantJoinByRequest",
    "channelAdminLogEventActionToggleNoForwards",
    "channelAdminLogEventActionSendMessage",
    "channelAdminLogEventActionChangeAvailableReactions",
    "channelAdminLogEventActionChangeUsernames",
    "channelAdminLogEventActionToggleForum",
    "channelAdminLogEventActionCreateTopic",
    "channelAdminLogEventActionEditTopic",
    "channelAdminLogEventActionDeleteTopic",
    "channelAdminLogEventActionPinTopic",
    "channelAdminLogEventActionToggleAntiSpam",
    "channelAdminLogEventActionChangePeerColor",
    "channelAdminLogEventActionChangeProfilePeerColor",
    "channelAdminLogEventActionChangeWallpaper",
    "channelAdminLogEventActionChangeEmojiStatus",
    "channelAdminLogEventActionChangeEmojiStickerSet",
  ]],
  ["ChannelAdminLogEvent", ["channelAdminLogEvent"]],
  ["channels.AdminLogResults", ["channels.adminLogResults"]],
  ["ChannelAdminLogEventsFilter", ["channelAdminLogEventsFilter"]],
  ["PopularContact", ["popularContact"]],
  ["messages.FavedStickers", ["messages.favedStickersNotModified", "messages.favedStickers"]],
  ["RecentMeUrl", ["recentMeUrlUnknown", "recentMeUrlUser", "recentMeUrlChat", "recentMeUrlChatInvite", "recentMeUrlStickerSet"]],
  ["help.RecentMeUrls", ["help.recentMeUrls"]],
  ["InputSingleMedia", ["inputSingleMedia"]],
  ["WebAuthorization", ["webAuthorization"]],
  ["account.WebAuthorizations", ["account.webAuthorizations"]],
  ["InputMessage", ["inputMessageID", "inputMessageReplyTo", "inputMessagePinned", "inputMessageCallbackQuery"]],
  ["InputDialogPeer", ["inputDialogPeer", "inputDialogPeerFolder"]],
  ["DialogPeer", ["dialogPeer", "dialogPeerFolder"]],
  ["messages.FoundStickerSets", ["messages.foundStickerSetsNotModified", "messages.foundStickerSets"]],
  ["FileHash", ["fileHash"]],
  ["InputClientProxy", ["inputClientProxy"]],
  ["help.TermsOfServiceUpdate", ["help.termsOfServiceUpdateEmpty", "help.termsOfServiceUpdate"]],
  ["InputSecureFile", ["inputSecureFileUploaded", "inputSecureFile"]],
  ["SecureFile", ["secureFileEmpty", "secureFile"]],
  ["SecureData", ["secureData"]],
  ["SecurePlainData", ["securePlainPhone", "securePlainEmail"]],
  ["SecureValueType", ["secureValueTypePersonalDetails", "secureValueTypePassport", "secureValueTypeDriverLicense", "secureValueTypeIdentityCard", "secureValueTypeInternalPassport", "secureValueTypeAddress", "secureValueTypeUtilityBill", "secureValueTypeBankStatement", "secureValueTypeRentalAgreement", "secureValueTypePassportRegistration", "secureValueTypeTemporaryRegistration", "secureValueTypePhone", "secureValueTypeEmail"]],
  ["SecureValue", ["secureValue"]],
  ["InputSecureValue", ["inputSecureValue"]],
  ["SecureValueHash", ["secureValueHash"]],
  ["SecureValueError", ["secureValueErrorData", "secureValueErrorFrontSide", "secureValueErrorReverseSide", "secureValueErrorSelfie", "secureValueErrorFile", "secureValueErrorFiles", "secureValueError", "secureValueErrorTranslationFile", "secureValueErrorTranslationFiles"]],
  ["SecureCredentialsEncrypted", ["secureCredentialsEncrypted"]],
  ["account.AuthorizationForm", ["account.authorizationForm"]],
  ["account.SentEmailCode", ["account.sentEmailCode"]],
  ["help.DeepLinkInfo", ["help.deepLinkInfoEmpty", "help.deepLinkInfo"]],
  ["SavedContact", ["savedPhoneContact"]],
  ["account.Takeout", ["account.takeout"]],
  ["PasswordKdfAlgo", ["passwordKdfAlgoUnknown", "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"]],
  ["SecurePasswordKdfAlgo", ["securePasswordKdfAlgoUnknown", "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000", "securePasswordKdfAlgoSHA512"]],
  ["SecureSecretSettings", ["secureSecretSettings"]],
  ["InputCheckPasswordSRP", ["inputCheckPasswordEmpty", "inputCheckPasswordSRP"]],
  ["SecureRequiredType", ["secureRequiredType", "secureRequiredTypeOneOf"]],
  ["help.PassportConfig", ["help.passportConfigNotModified", "help.passportConfig"]],
  ["InputAppEvent", ["inputAppEvent"]],
  ["JSONObjectValue", ["jsonObjectValue"]],
  ["JSONValue", ["jsonNull", "jsonBool", "jsonNumber", "jsonString", "jsonArray", "jsonObject"]],
  ["PageTableCell", ["pageTableCell"]],
  ["PageTableRow", ["pageTableRow"]],
  ["PageCaption", ["pageCaption"]],
  ["PageListItem", ["pageListItemText", "pageListItemBlocks"]],
  ["PageListOrderedItem", ["pageListOrderedItemText", "pageListOrderedItemBlocks"]],
  ["PageRelatedArticle", ["pageRelatedArticle"]],
  ["Page", ["page"]],
  ["help.SupportName", ["help.supportName"]],
  ["help.UserInfo", ["help.userInfoEmpty", "help.userInfo"]],
  ["PollAnswer", ["pollAnswer"]],
  ["Poll", ["poll"]],
  ["PollAnswerVoters", ["pollAnswerVoters"]],
  ["PollResults", ["pollResults"]],
  ["ChatOnlines", ["chatOnlines"]],
  ["StatsURL", ["statsURL"]],
  ["ChatAdminRights", ["chatAdminRights"]],
  ["ChatBannedRights", ["chatBannedRights"]],
  ["InputWallPaper", ["inputWallPaper", "inputWallPaperSlug", "inputWallPaperNoFile"]],
  ["account.WallPapers", ["account.wallPapersNotModified", "account.wallPapers"]],
  ["CodeSettings", ["codeSettings"]],
  ["WallPaperSettings", ["wallPaperSettings"]],
  ["AutoDownloadSettings", ["autoDownloadSettings"]],
  ["account.AutoDownloadSettings", ["account.autoDownloadSettings"]],
  ["EmojiKeyword", ["emojiKeyword", "emojiKeywordDeleted"]],
  ["EmojiKeywordsDifference", ["emojiKeywordsDifference"]],
  ["EmojiURL", ["emojiURL"]],
  ["EmojiLanguage", ["emojiLanguage"]],
  ["Folder", ["folder"]],
  ["InputFolderPeer", ["inputFolderPeer"]],
  ["FolderPeer", ["folderPeer"]],
  ["messages.SearchCounter", ["messages.searchCounter"]],
  ["UrlAuthResult", ["urlAuthResultRequest", "urlAuthResultAccepted", "urlAuthResultDefault"]],
  ["ChannelLocation", ["channelLocationEmpty", "channelLocation"]],
  ["PeerLocated", ["peerLocated", "peerSelfLocated"]],
  ["RestrictionReason", ["restrictionReason"]],
  ["InputTheme", ["inputTheme", "inputThemeSlug"]],
  ["Theme", ["theme"]],
  ["account.Themes", ["account.themesNotModified", "account.themes"]],
  ["auth.LoginToken", ["auth.loginToken", "auth.loginTokenMigrateTo", "auth.loginTokenSuccess"]],
  ["account.ContentSettings", ["account.contentSettings"]],
  ["messages.InactiveChats", ["messages.inactiveChats"]],
  ["BaseTheme", ["baseThemeClassic", "baseThemeDay", "baseThemeNight", "baseThemeTinted", "baseThemeArctic"]],
  ["InputThemeSettings", ["inputThemeSettings"]],
  ["ThemeSettings", ["themeSettings"]],
  ["WebPageAttribute", ["webPageAttributeTheme", "webPageAttributeStory"]],
  ["messages.VotesList", ["messages.votesList"]],
  ["BankCardOpenUrl", ["bankCardOpenUrl"]],
  ["payments.BankCardData", ["payments.bankCardData"]],
  ["DialogFilter", ["dialogFilter", "dialogFilterDefault", "dialogFilterChatlist"]],
  ["DialogFilterSuggested", ["dialogFilterSuggested"]],
  ["StatsDateRangeDays", ["statsDateRangeDays"]],
  ["StatsAbsValueAndPrev", ["statsAbsValueAndPrev"]],
  ["StatsPercentValue", ["statsPercentValue"]],
  ["StatsGraph", ["statsGraphAsync", "statsGraphError", "statsGraph"]],
  ["stats.BroadcastStats", ["stats.broadcastStats"]],
  ["help.PromoData", ["help.promoDataEmpty", "help.promoData"]],
  ["VideoSize", ["videoSize", "videoSizeEmojiMarkup", "videoSizeStickerMarkup"]],
  ["StatsGroupTopPoster", ["statsGroupTopPoster"]],
  ["StatsGroupTopAdmin", ["statsGroupTopAdmin"]],
  ["StatsGroupTopInviter", ["statsGroupTopInviter"]],
  ["stats.MegagroupStats", ["stats.megagroupStats"]],
  ["GlobalPrivacySettings", ["globalPrivacySettings"]],
  ["help.CountryCode", ["help.countryCode"]],
  ["help.Country", ["help.country"]],
  ["help.CountriesList", ["help.countriesListNotModified", "help.countriesList"]],
  ["MessageViews", ["messageViews"]],
  ["messages.MessageViews", ["messages.messageViews"]],
  ["messages.DiscussionMessage", ["messages.discussionMessage"]],
  ["MessageReplyHeader", ["messageReplyHeader", "messageReplyStoryHeader"]],
  ["MessageReplies", ["messageReplies"]],
  ["PeerBlocked", ["peerBlocked"]],
  ["stats.MessageStats", ["stats.messageStats"]],
  ["GroupCall", ["groupCallDiscarded", "groupCall"]],
  ["InputGroupCall", ["inputGroupCall"]],
  ["GroupCallParticipant", ["groupCallParticipant"]],
  ["phone.GroupCall", ["phone.groupCall"]],
  ["phone.GroupParticipants", ["phone.groupParticipants"]],
  ["InlineQueryPeerType", ["inlineQueryPeerTypeSameBotPM", "inlineQueryPeerTypePM", "inlineQueryPeerTypeChat", "inlineQueryPeerTypeMegagroup", "inlineQueryPeerTypeBroadcast", "inlineQueryPeerTypeBotPM"]],
  ["messages.HistoryImport", ["messages.historyImport"]],
  ["messages.HistoryImportParsed", ["messages.historyImportParsed"]],
  ["messages.AffectedFoundMessages", ["messages.affectedFoundMessages"]],
  ["ChatInviteImporter", ["chatInviteImporter"]],
  ["messages.ExportedChatInvites", ["messages.exportedChatInvites"]],
  ["messages.ExportedChatInvite", ["messages.exportedChatInvite", "messages.exportedChatInviteReplaced"]],
  ["messages.ChatInviteImporters", ["messages.chatInviteImporters"]],
  ["ChatAdminWithInvites", ["chatAdminWithInvites"]],
  ["messages.ChatAdminsWithInvites", ["messages.chatAdminsWithInvites"]],
  ["messages.CheckedHistoryImportPeer", ["messages.checkedHistoryImportPeer"]],
  ["phone.JoinAsPeers", ["phone.joinAsPeers"]],
  ["phone.ExportedGroupCallInvite", ["phone.exportedGroupCallInvite"]],
  ["GroupCallParticipantVideoSourceGroup", ["groupCallParticipantVideoSourceGroup"]],
  ["GroupCallParticipantVideo", ["groupCallParticipantVideo"]],
  ["stickers.SuggestedShortName", ["stickers.suggestedShortName"]],
  ["BotCommandScope", ["botCommandScopeDefault", "botCommandScopeUsers", "botCommandScopeChats", "botCommandScopeChatAdmins", "botCommandScopePeer", "botCommandScopePeerAdmins", "botCommandScopePeerUser"]],
  ["account.ResetPasswordResult", ["account.resetPasswordFailedWait", "account.resetPasswordRequestedWait", "account.resetPasswordOk"]],
  ["SponsoredMessage", ["sponsoredMessage"]],
  ["messages.SponsoredMessages", ["messages.sponsoredMessages", "messages.sponsoredMessagesEmpty"]],
  ["SearchResultsCalendarPeriod", ["searchResultsCalendarPeriod"]],
  ["messages.SearchResultsCalendar", ["messages.searchResultsCalendar"]],
  ["SearchResultsPosition", ["searchResultPosition"]],
  ["messages.SearchResultsPositions", ["messages.searchResultsPositions"]],
  ["channels.SendAsPeers", ["channels.sendAsPeers"]],
  ["users.UserFull", ["users.userFull"]],
  ["messages.PeerSettings", ["messages.peerSettings"]],
  ["auth.LoggedOut", ["auth.loggedOut"]],
  ["ReactionCount", ["reactionCount"]],
  ["MessageReactions", ["messageReactions"]],
  ["messages.MessageReactionsList", ["messages.messageReactionsList"]],
  ["AvailableReaction", ["availableReaction"]],
  ["messages.AvailableReactions", ["messages.availableReactionsNotModified", "messages.availableReactions"]],
  ["MessagePeerReaction", ["messagePeerReaction"]],
  ["GroupCallStreamChannel", ["groupCallStreamChannel"]],
  ["phone.GroupCallStreamChannels", ["phone.groupCallStreamChannels"]],
  ["phone.GroupCallStreamRtmpUrl", ["phone.groupCallStreamRtmpUrl"]],
  ["AttachMenuBotIconColor", ["attachMenuBotIconColor"]],
  ["AttachMenuBotIcon", ["attachMenuBotIcon"]],
  ["AttachMenuBot", ["attachMenuBot"]],
  ["AttachMenuBots", ["attachMenuBotsNotModified", "attachMenuBots"]],
  ["AttachMenuBotsBot", ["attachMenuBotsBot"]],
  ["WebViewResult", ["webViewResultUrl"]],
  ["SimpleWebViewResult", ["simpleWebViewResultUrl"]],
  ["WebViewMessageSent", ["webViewMessageSent"]],
  ["BotMenuButton", ["botMenuButtonDefault", "botMenuButtonCommands", "botMenuButton"]],
  ["account.SavedRingtones", ["account.savedRingtonesNotModified", "account.savedRingtones"]],
  ["NotificationSound", ["notificationSoundDefault", "notificationSoundNone", "notificationSoundLocal", "notificationSoundRingtone"]],
  ["account.SavedRingtone", ["account.savedRingtone", "account.savedRingtoneConverted"]],
  ["AttachMenuPeerType", ["attachMenuPeerTypeSameBotPM", "attachMenuPeerTypeBotPM", "attachMenuPeerTypePM", "attachMenuPeerTypeChat", "attachMenuPeerTypeBroadcast"]],
  ["InputInvoice", ["inputInvoiceMessage", "inputInvoiceSlug", "inputInvoicePremiumGiftCode"]],
  ["payments.ExportedInvoice", ["payments.exportedInvoice"]],
  ["messages.TranscribedAudio", ["messages.transcribedAudio"]],
  ["help.PremiumPromo", ["help.premiumPromo"]],
  ["InputStorePaymentPurpose", ["inputStorePaymentPremiumSubscription", "inputStorePaymentGiftPremium", "inputStorePaymentPremiumGiftCode", "inputStorePaymentPremiumGiveaway"]],
  ["PremiumGiftOption", ["premiumGiftOption"]],
  ["PaymentFormMethod", ["paymentFormMethod"]],
  ["EmojiStatus", ["emojiStatusEmpty", "emojiStatus", "emojiStatusUntil"]],
  ["account.EmojiStatuses", ["account.emojiStatusesNotModified", "account.emojiStatuses"]],
  ["Reaction", ["reactionEmpty", "reactionEmoji", "reactionCustomEmoji"]],
  ["ChatReactions", ["chatReactionsNone", "chatReactionsAll", "chatReactionsSome"]],
  ["messages.Reactions", ["messages.reactionsNotModified", "messages.reactions"]],
  ["EmailVerifyPurpose", ["emailVerifyPurposeLoginSetup", "emailVerifyPurposeLoginChange", "emailVerifyPurposePassport"]],
  ["EmailVerification", ["emailVerificationCode", "emailVerificationGoogle", "emailVerificationApple"]],
  ["account.EmailVerified", ["account.emailVerified", "account.emailVerifiedLogin"]],
  ["PremiumSubscriptionOption", ["premiumSubscriptionOption"]],
  ["SendAsPeer", ["sendAsPeer"]],
  ["MessageExtendedMedia", ["messageExtendedMediaPreview", "messageExtendedMedia"]],
  ["StickerKeyword", ["stickerKeyword"]],
  ["Username", ["username"]],
  ["ForumTopic", ["forumTopicDeleted", "forumTopic"]],
  ["messages.ForumTopics", ["messages.forumTopics"]],
  ["DefaultHistoryTTL", ["defaultHistoryTTL"]],
  ["ExportedContactToken", ["exportedContactToken"]],
  ["RequestPeerType", ["requestPeerTypeUser", "requestPeerTypeChat", "requestPeerTypeBroadcast"]],
  ["EmojiList", ["emojiListNotModified", "emojiList"]],
  ["EmojiGroup", ["emojiGroup"]],
  ["messages.EmojiGroups", ["messages.emojiGroupsNotModified", "messages.emojiGroups"]],
  ["TextWithEntities", ["textWithEntities"]],
  ["messages.TranslatedText", ["messages.translateResult"]],
  ["AutoSaveSettings", ["autoSaveSettings"]],
  ["AutoSaveException", ["autoSaveException"]],
  ["account.AutoSaveSettings", ["account.autoSaveSettings"]],
  ["help.AppConfig", ["help.appConfigNotModified", "help.appConfig"]],
  ["InputBotApp", ["inputBotAppID", "inputBotAppShortName"]],
  ["BotApp", ["botAppNotModified", "botApp"]],
  ["messages.BotApp", ["messages.botApp"]],
  ["AppWebViewResult", ["appWebViewResultUrl"]],
  ["InlineBotWebView", ["inlineBotWebView"]],
  ["ReadParticipantDate", ["readParticipantDate"]],
  ["InputChatlist", ["inputChatlistDialogFilter"]],
  ["ExportedChatlistInvite", ["exportedChatlistInvite"]],
  ["chatlists.ExportedChatlistInvite", ["chatlists.exportedChatlistInvite"]],
  ["chatlists.ExportedInvites", ["chatlists.exportedInvites"]],
  ["chatlists.ChatlistInvite", ["chatlists.chatlistInviteAlready", "chatlists.chatlistInvite"]],
  ["chatlists.ChatlistUpdates", ["chatlists.chatlistUpdates"]],
  ["bots.BotInfo", ["bots.botInfo"]],
  ["MessagePeerVote", ["messagePeerVote", "messagePeerVoteInputOption", "messagePeerVoteMultiple"]],
  ["SponsoredWebPage", ["sponsoredWebPage"]],
  ["StoryViews", ["storyViews"]],
  ["StoryItem", ["storyItemDeleted", "storyItemSkipped", "storyItem"]],
  ["stories.AllStories", ["stories.allStoriesNotModified", "stories.allStories"]],
  ["stories.Stories", ["stories.stories"]],
  ["StoryView", ["storyView", "storyViewPublicForward", "storyViewPublicRepost"]],
  ["stories.StoryViewsList", ["stories.storyViewsList"]],
  ["stories.StoryViews", ["stories.storyViews"]],
  ["InputReplyTo", ["inputReplyToMessage", "inputReplyToStory"]],
  ["ExportedStoryLink", ["exportedStoryLink"]],
  ["StoriesStealthMode", ["storiesStealthMode"]],
  ["MediaAreaCoordinates", ["mediaAreaCoordinates"]],
  ["MediaArea", ["mediaAreaVenue", "inputMediaAreaVenue", "mediaAreaGeoPoint", "mediaAreaSuggestedReaction", "mediaAreaChannelPost", "inputMediaAreaChannelPost"]],
  ["PeerStories", ["peerStories"]],
  ["stories.PeerStories", ["stories.peerStories"]],
  ["messages.WebPage", ["messages.webPage"]],
  ["PremiumGiftCodeOption", ["premiumGiftCodeOption"]],
  ["payments.CheckedGiftCode", ["payments.checkedGiftCode"]],
  ["payments.GiveawayInfo", ["payments.giveawayInfo", "payments.giveawayInfoResults"]],
  ["PrepaidGiveaway", ["prepaidGiveaway"]],
  ["Boost", ["boost"]],
  ["premium.BoostsList", ["premium.boostsList"]],
  ["MyBoost", ["myBoost"]],
  ["premium.MyBoosts", ["premium.myBoosts"]],
  ["premium.BoostsStatus", ["premium.boostsStatus"]],
  ["StoryFwdHeader", ["storyFwdHeader"]],
  ["PostInteractionCounters", ["postInteractionCountersMessage", "postInteractionCountersStory"]],
  ["stats.StoryStats", ["stats.storyStats"]],
  ["PublicForward", ["publicForwardMessage", "publicForwardStory"]],
  ["stats.PublicForwards", ["stats.publicForwards"]],
  ["PeerColor", ["peerColor"]],
  ["help.PeerColorSet", ["help.peerColorSet", "help.peerColorProfileSet"]],
  ["help.PeerColorOption", ["help.peerColorOption"]],
  ["help.PeerColors", ["help.peerColorsNotModified", "help.peerColors"]],
  ["StoryReaction", ["storyReaction", "storyReactionPublicForward", "storyReactionPublicRepost"]],
  ["stories.StoryReactionsList", ["stories.storyReactionsList"]],
  ["SavedDialog", ["savedDialog"]],
  ["messages.SavedDialogs", ["messages.savedDialogs", "messages.savedDialogsSlice", "messages.savedDialogsNotModified"]],
  ["SavedReactionTag", ["savedReactionTag"]],
  ["messages.SavedReactionTags", ["messages.savedReactionTagsNotModified", "messages.savedReactionTags"]],
  ["OutboxReadDate", ["outboxReadDate"]],
  ["smsjobs.EligibilityToJoin", ["smsjobs.eligibleToJoin"]],
  ["smsjobs.Status", ["smsjobs.status"]],
  ["SmsJob", ["smsJob"]],
  ["BusinessWeeklyOpen", ["businessWeeklyOpen"]],
  ["BusinessWorkHours", ["businessWorkHours"]],
  ["BusinessLocation", ["businessLocation"]],
  ["InputBusinessRecipients", ["inputBusinessRecipients"]],
  ["BusinessRecipients", ["businessRecipients"]],
  ["BusinessAwayMessageSchedule", ["businessAwayMessageScheduleAlways", "businessAwayMessageScheduleOutsideWorkHours", "businessAwayMessageScheduleCustom"]],
  ["InputBusinessGreetingMessage", ["inputBusinessGreetingMessage"]],
  ["BusinessGreetingMessage", ["businessGreetingMessage"]],
  ["InputBusinessAwayMessage", ["inputBusinessAwayMessage"]],
  ["BusinessAwayMessage", ["businessAwayMessage"]],
  ["Timezone", ["timezone"]],
  ["help.TimezonesList", ["help.timezonesListNotModified", "help.timezonesList"]],
  ["QuickReply", ["quickReply"]],
  ["InputQuickReplyShortcut", ["inputQuickReplyShortcut", "inputQuickReplyShortcutId"]],
  ["messages.QuickReplies", ["messages.quickReplies", "messages.quickRepliesNotModified"]],
  ["ConnectedBot", ["connectedBot"]],
  ["account.ConnectedBots", ["account.connectedBots"]],
  ["messages.DialogFilters", ["messages.dialogFilters"]],
  ["Birthday", ["birthday"]],
  ["BotBusinessConnection", ["botBusinessConnection"]],
  ["InputBusinessIntro", ["inputBusinessIntro"]],
  ["BusinessIntro", ["businessIntro"]],
  ["messages.MyStickers", ["messages.myStickers"]],
  ["InputCollectible", ["inputCollectibleUsername", "inputCollectiblePhone"]],
  ["fragment.CollectibleInfo", ["fragment.collectibleInfo"]],
  ["InputBusinessBotRecipients", ["inputBusinessBotRecipients"]],
  ["BusinessBotRecipients", ["businessBotRecipients"]],
  ["ContactBirthday", ["contactBirthday"]],
  ["contacts.ContactBirthdays", ["contacts.contactBirthdays"]],
  ["MissingInvitee", ["missingInvitee"]],
  ["messages.InvitedUsers", ["messages.invitedUsers"]],
  ["InputBusinessChatLink", ["inputBusinessChatLink"]],
  ["BusinessChatLink", ["businessChatLink"]],
  ["account.BusinessChatLinks", ["account.businessChatLinks"]],
  ["account.ResolvedBusinessChatLinks", ["account.resolvedBusinessChatLinks"]],
  ["RequestedPeer", ["requestedPeerUser", "requestedPeerChat", "requestedPeerChannel"]],
  ["SponsoredMessageReportOption", ["sponsoredMessageReportOption"]],
  ["channels.SponsoredMessageReportResult", ["channels.sponsoredMessageReportResultChooseOption", "channels.sponsoredMessageReportResultAdsHidden", "channels.sponsoredMessageReportResultReported"]],
  ["stats.BroadcastRevenueStats", ["stats.broadcastRevenueStats"]],
  ["stats.BroadcastRevenueWithdrawalUrl", ["stats.broadcastRevenueWithdrawalUrl"]],
  ["BroadcastRevenueTransaction", ["broadcastRevenueTransactionProceeds", "broadcastRevenueTransactionWithdrawal", "broadcastRevenueTransactionRefund"]],
  ["stats.BroadcastRevenueTransactions", ["stats.broadcastRevenueTransactions"]],
]);

const types: Map<string, Parameters> = new Map([
  [
    "resPQ",
    [
      0x05162463,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["pq", Uint8Array, "bytes"],
        ["server_public_key_fingerprints", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "p_q_inner_data_dc",
    [
      0xA9F55F95,
      [
        ["pq", Uint8Array, "bytes"],
        ["p", Uint8Array, "bytes"],
        ["q", Uint8Array, "bytes"],
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["new_nonce", "bigint", "int256"],
        ["dc", "number", "int"],
      ],
    ],
  ],
  [
    "p_q_inner_data_temp_dc",
    [
      0x56FDDF88,
      [
        ["pq", Uint8Array, "bytes"],
        ["p", Uint8Array, "bytes"],
        ["q", Uint8Array, "bytes"],
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["new_nonce", "bigint", "int256"],
        ["dc", "number", "int"],
        ["expires_in", "number", "int"],
      ],
    ],
  ],
  [
    "server_DH_params_ok",
    [
      0xD0E8075C,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["encrypted_answer", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "server_DH_inner_data",
    [
      0xB5890DBA,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["g", "number", "int"],
        ["dh_prime", Uint8Array, "bytes"],
        ["g_a", Uint8Array, "bytes"],
        ["server_time", "number", "int"],
      ],
    ],
  ],
  [
    "client_DH_inner_data",
    [
      0x6643B654,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["retry_id", "bigint", "long"],
        ["g_b", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "dh_gen_ok",
    [
      0x3BCBF734,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["new_nonce_hash1", "bigint", "int128"],
      ],
    ],
  ],
  [
    "dh_gen_retry",
    [
      0x46DC1FB9,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["new_nonce_hash2", "bigint", "int128"],
      ],
    ],
  ],
  [
    "dh_gen_fail",
    [
      0xA69DAE02,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["new_nonce_hash3", "bigint", "int128"],
      ],
    ],
  ],
  [
    "bind_auth_key_inner",
    [
      0x75A3F765,
      [
        ["nonce", "bigint", "long"],
        ["temp_auth_key_id", "bigint", "long"],
        ["perm_auth_key_id", "bigint", "long"],
        ["temp_session_id", "bigint", "long"],
        ["expires_at", "number", "int"],
      ],
    ],
  ],
  [
    "rpc_error",
    [
      0x2144CA19,
      [
        ["error_code", "number", "int"],
        ["error_message", "string", "string"],
      ],
    ],
  ],
  [
    "rpc_answer_unknown",
    [
      0x5E2AD36E,
      [],
    ],
  ],
  [
    "rpc_answer_dropped_running",
    [
      0xCD78E586,
      [],
    ],
  ],
  [
    "rpc_answer_dropped",
    [
      0xA43AD8B7,
      [
        ["msg_id", "bigint", "long"],
        ["seq_no", "number", "int"],
        ["bytes", "number", "int"],
      ],
    ],
  ],
  [
    "future_salt",
    [
      0x0949D9DC,
      [
        ["valid_since", "number", "int"],
        ["valid_until", "number", "int"],
        ["salt", "bigint", "long"],
      ],
    ],
  ],
  [
    "future_salts",
    [
      0xAE500895,
      [
        ["req_msg_id", "bigint", "long"],
        ["now", "number", "int"],
        ["salts", ["FutureSalt"], "vector<FutureSalt>"],
      ],
    ],
  ],
  [
    "pong",
    [
      0x347773C5,
      [
        ["msg_id", "bigint", "long"],
        ["ping_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "destroy_session_ok",
    [
      0xE22045FC,
      [
        ["session_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "destroy_session_none",
    [
      0x62D350C9,
      [
        ["session_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "new_session_created",
    [
      0x9EC20908,
      [
        ["first_msg_id", "bigint", "long"],
        ["unique_id", "bigint", "long"],
        ["server_salt", "bigint", "long"],
      ],
    ],
  ],
  [
    "gzip_packed",
    [
      0x3072CFA1,
      [
        ["packed_data", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "msgs_ack",
    [
      0x62D6B459,
      [
        ["msg_ids", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "bad_msg_notification",
    [
      0xA7EFF811,
      [
        ["bad_msg_id", "bigint", "long"],
        ["bad_msg_seqno", "number", "int"],
        ["error_code", "number", "int"],
      ],
    ],
  ],
  [
    "bad_server_salt",
    [
      0xEDAB447B,
      [
        ["bad_msg_id", "bigint", "long"],
        ["bad_msg_seqno", "number", "int"],
        ["error_code", "number", "int"],
        ["new_server_salt", "bigint", "long"],
      ],
    ],
  ],
  [
    "msg_resend_req",
    [
      0x7D861A08,
      [
        ["msg_ids", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "msgs_state_req",
    [
      0xDA69FB52,
      [
        ["msg_ids", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "msgs_state_info",
    [
      0x04DEB57D,
      [
        ["req_msg_id", "bigint", "long"],
        ["info", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "msgs_all_info",
    [
      0x8CC0D131,
      [
        ["msg_ids", ["bigint"], "Vector<long>"],
        ["info", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "msg_detailed_info",
    [
      0x276D3EC6,
      [
        ["msg_id", "bigint", "long"],
        ["answer_msg_id", "bigint", "long"],
        ["bytes", "number", "int"],
        ["status", "number", "int"],
      ],
    ],
  ],
  [
    "msg_new_detailed_info",
    [
      0x809DB6DF,
      [
        ["answer_msg_id", "bigint", "long"],
        ["bytes", "number", "int"],
        ["status", "number", "int"],
      ],
    ],
  ],
  [
    "destroy_auth_key_ok",
    [
      0xF660E1D4,
      [],
    ],
  ],
  [
    "destroy_auth_key_none",
    [
      0x0A9F2259,
      [],
    ],
  ],
  [
    "destroy_auth_key_fail",
    [
      0xEA109B13,
      [],
    ],
  ],
  [
    "http_wait",
    [
      0x9299359F,
      [
        ["max_delay", "number", "int"],
        ["wait_after", "number", "int"],
        ["max_wait", "number", "int"],
      ],
    ],
  ],
  [
    "true",
    [
      0x3FEDD339,
      [],
    ],
  ],
  [
    "error",
    [
      0xC4B9F9BB,
      [
        ["code", "number", "int"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "ipPort",
    [
      0xD433AD73,
      [
        ["ipv4", "number", "int"],
        ["port", "number", "int"],
      ],
    ],
  ],
  [
    "ipPortSecret",
    [
      0x37982646,
      [
        ["ipv4", "number", "int"],
        ["port", "number", "int"],
        ["secret", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "accessPointRule",
    [
      0x4679B65F,
      [
        ["phone_prefix_rules", "string", "string"],
        ["dc_id", "number", "int"],
        ["ips", ["IpPort"], "vector<IpPort>"],
      ],
    ],
  ],
  [
    "help.configSimple",
    [
      0x5A592A6C,
      [
        ["date", "number", "int"],
        ["expires", "number", "int"],
        ["rules", ["AccessPointRule"], "vector<AccessPointRule>"],
      ],
    ],
  ],
  [
    "inputPeerPhotoFileLocationLegacy",
    [
      0x27D69997,
      [
        ["flags", flags, "#"],
        ["big", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["volume_id", "bigint", "long"],
        ["local_id", "number", "int"],
      ],
    ],
  ],
  [
    "inputStickerSetThumbLegacy",
    [
      0x0DBAEAE9,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["volume_id", "bigint", "long"],
        ["local_id", "number", "int"],
      ],
    ],
  ],
  [
    "inputPeerEmpty",
    [
      0x7F3B18EA,
      [],
    ],
  ],
  [
    "inputPeerSelf",
    [
      0x7DA07EC9,
      [],
    ],
  ],
  [
    "inputPeerChat",
    [
      0x35A95CB9,
      [
        ["chat_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputPeerUser",
    [
      0xDDE8A54C,
      [
        ["user_id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputPeerChannel",
    [
      0x27BCBBFC,
      [
        ["channel_id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputPeerUserFromMessage",
    [
      0xA87B0A1C,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputPeerChannelFromMessage",
    [
      0xBD2A0840,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["channel_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputUserEmpty",
    [
      0xB98886CF,
      [],
    ],
  ],
  [
    "inputUserSelf",
    [
      0xF7C1B13F,
      [],
    ],
  ],
  [
    "inputUser",
    [
      0xF21158C6,
      [
        ["user_id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputUserFromMessage",
    [
      0x1DA448E2,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputPhoneContact",
    [
      0xF392B7F4,
      [
        ["client_id", "bigint", "long"],
        ["phone", "string", "string"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
      ],
    ],
  ],
  [
    "inputFile",
    [
      0xF52FF27F,
      [
        ["id", "bigint", "long"],
        ["parts", "number", "int"],
        ["name", "string", "string"],
        ["md5_checksum", "string", "string"],
      ],
    ],
  ],
  [
    "inputFileBig",
    [
      0xFA4F0BB5,
      [
        ["id", "bigint", "long"],
        ["parts", "number", "int"],
        ["name", "string", "string"],
      ],
    ],
  ],
  [
    "inputMediaEmpty",
    [
      0x9664F57F,
      [],
    ],
  ],
  [
    "inputMediaUploadedPhoto",
    [
      0x1E287D04,
      [
        ["flags", flags, "#"],
        ["spoiler", "true", "flags.2?true"],
        ["file", "InputFile", "InputFile"],
        ["stickers", ["InputDocument"], "flags.0?Vector<InputDocument>"],
        ["ttl_seconds", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "inputMediaPhoto",
    [
      0xB3BA0635,
      [
        ["flags", flags, "#"],
        ["spoiler", "true", "flags.1?true"],
        ["id", "InputPhoto", "InputPhoto"],
        ["ttl_seconds", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "inputMediaGeoPoint",
    [
      0xF9C44144,
      [
        ["geo_point", "InputGeoPoint", "InputGeoPoint"],
      ],
    ],
  ],
  [
    "inputMediaContact",
    [
      0xF8AB7DFB,
      [
        ["phone_number", "string", "string"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
        ["vcard", "string", "string"],
      ],
    ],
  ],
  [
    "inputMediaUploadedDocument",
    [
      0x5B38C6C1,
      [
        ["flags", flags, "#"],
        ["nosound_video", "true", "flags.3?true"],
        ["force_file", "true", "flags.4?true"],
        ["spoiler", "true", "flags.5?true"],
        ["file", "InputFile", "InputFile"],
        ["thumb", "InputFile", "flags.2?InputFile"],
        ["mime_type", "string", "string"],
        ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
        ["stickers", ["InputDocument"], "flags.0?Vector<InputDocument>"],
        ["ttl_seconds", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "inputMediaDocument",
    [
      0x33473058,
      [
        ["flags", flags, "#"],
        ["spoiler", "true", "flags.2?true"],
        ["id", "InputDocument", "InputDocument"],
        ["ttl_seconds", "number", "flags.0?int"],
        ["query", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "inputMediaVenue",
    [
      0xC13D1C11,
      [
        ["geo_point", "InputGeoPoint", "InputGeoPoint"],
        ["title", "string", "string"],
        ["address", "string", "string"],
        ["provider", "string", "string"],
        ["venue_id", "string", "string"],
        ["venue_type", "string", "string"],
      ],
    ],
  ],
  [
    "inputMediaPhotoExternal",
    [
      0xE5BBFE1A,
      [
        ["flags", flags, "#"],
        ["spoiler", "true", "flags.1?true"],
        ["url", "string", "string"],
        ["ttl_seconds", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "inputMediaDocumentExternal",
    [
      0xFB52DC99,
      [
        ["flags", flags, "#"],
        ["spoiler", "true", "flags.1?true"],
        ["url", "string", "string"],
        ["ttl_seconds", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "inputMediaGame",
    [
      0xD33F43F3,
      [
        ["id", "InputGame", "InputGame"],
      ],
    ],
  ],
  [
    "inputMediaInvoice",
    [
      0x8EB5A6D5,
      [
        ["flags", flags, "#"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["photo", "InputWebDocument", "flags.0?InputWebDocument"],
        ["invoice", "Invoice", "Invoice"],
        ["payload", Uint8Array, "bytes"],
        ["provider", "string", "string"],
        ["provider_data", "DataJSON", "DataJSON"],
        ["start_param", "string", "flags.1?string"],
        ["extended_media", "InputMedia", "flags.2?InputMedia"],
      ],
    ],
  ],
  [
    "inputMediaGeoLive",
    [
      0x971FA843,
      [
        ["flags", flags, "#"],
        ["stopped", "true", "flags.0?true"],
        ["geo_point", "InputGeoPoint", "InputGeoPoint"],
        ["heading", "number", "flags.2?int"],
        ["period", "number", "flags.1?int"],
        ["proximity_notification_radius", "number", "flags.3?int"],
      ],
    ],
  ],
  [
    "inputMediaPoll",
    [
      0x0F94E5F1,
      [
        ["flags", flags, "#"],
        ["poll", "Poll", "Poll"],
        ["correct_answers", [Uint8Array], "flags.0?Vector<bytes>"],
        ["solution", "string", "flags.1?string"],
        ["solution_entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "inputMediaDice",
    [
      0xE66FBF7B,
      [
        ["emoticon", "string", "string"],
      ],
    ],
  ],
  [
    "inputMediaStory",
    [
      0x89FDD778,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "inputMediaWebPage",
    [
      0xC21B8849,
      [
        ["flags", flags, "#"],
        ["force_large_media", "true", "flags.0?true"],
        ["force_small_media", "true", "flags.1?true"],
        ["optional", "true", "flags.2?true"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "inputChatPhotoEmpty",
    [
      0x1CA48F57,
      [],
    ],
  ],
  [
    "inputChatUploadedPhoto",
    [
      0xBDCDAEC0,
      [
        ["flags", flags, "#"],
        ["file", "InputFile", "flags.0?InputFile"],
        ["video", "InputFile", "flags.1?InputFile"],
        ["video_start_ts", "number", "flags.2?double"],
        ["video_emoji_markup", "VideoSize", "flags.3?VideoSize"],
      ],
    ],
  ],
  [
    "inputChatPhoto",
    [
      0x8953AD37,
      [
        ["id", "InputPhoto", "InputPhoto"],
      ],
    ],
  ],
  [
    "inputGeoPointEmpty",
    [
      0xE4C123D6,
      [],
    ],
  ],
  [
    "inputGeoPoint",
    [
      0x48222FAF,
      [
        ["flags", flags, "#"],
        ["lat", "number", "double"],
        ["long", "number", "double"],
        ["accuracy_radius", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "inputPhotoEmpty",
    [
      0x1CD7BF0D,
      [],
    ],
  ],
  [
    "inputPhoto",
    [
      0x3BB3B94A,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["file_reference", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "inputFileLocation",
    [
      0xDFDAABE1,
      [
        ["volume_id", "bigint", "long"],
        ["local_id", "number", "int"],
        ["secret", "bigint", "long"],
        ["file_reference", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "inputEncryptedFileLocation",
    [
      0xF5235D55,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputDocumentFileLocation",
    [
      0xBAD07584,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["file_reference", Uint8Array, "bytes"],
        ["thumb_size", "string", "string"],
      ],
    ],
  ],
  [
    "inputSecureFileLocation",
    [
      0xCBC7EE28,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputTakeoutFileLocation",
    [
      0x29BE5899,
      [],
    ],
  ],
  [
    "inputPhotoFileLocation",
    [
      0x40181FFE,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["file_reference", Uint8Array, "bytes"],
        ["thumb_size", "string", "string"],
      ],
    ],
  ],
  [
    "inputPhotoLegacyFileLocation",
    [
      0xD83466F3,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["file_reference", Uint8Array, "bytes"],
        ["volume_id", "bigint", "long"],
        ["local_id", "number", "int"],
        ["secret", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputPeerPhotoFileLocation",
    [
      0x37257E99,
      [
        ["flags", flags, "#"],
        ["big", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["photo_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputStickerSetThumb",
    [
      0x9D84F3DB,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["thumb_version", "number", "int"],
      ],
    ],
  ],
  [
    "inputGroupCallStream",
    [
      0x0598A92A,
      [
        ["flags", flags, "#"],
        ["call", "InputGroupCall", "InputGroupCall"],
        ["time_ms", "bigint", "long"],
        ["scale", "number", "int"],
        ["video_channel", "number", "flags.0?int"],
        ["video_quality", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "peerUser",
    [
      0x59511722,
      [
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "peerChat",
    [
      0x36C6019A,
      [
        ["chat_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "peerChannel",
    [
      0xA2A5371E,
      [
        ["channel_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "storage.fileUnknown",
    [
      0xAA963B05,
      [],
    ],
  ],
  [
    "storage.filePartial",
    [
      0x40BC6F52,
      [],
    ],
  ],
  [
    "storage.fileJpeg",
    [
      0x007EFE0E,
      [],
    ],
  ],
  [
    "storage.fileGif",
    [
      0xCAE1AADF,
      [],
    ],
  ],
  [
    "storage.filePng",
    [
      0x0A4F63C0,
      [],
    ],
  ],
  [
    "storage.filePdf",
    [
      0xAE1E508D,
      [],
    ],
  ],
  [
    "storage.fileMp3",
    [
      0x528A0677,
      [],
    ],
  ],
  [
    "storage.fileMov",
    [
      0x4B09EBBC,
      [],
    ],
  ],
  [
    "storage.fileMp4",
    [
      0xB3CEA0E4,
      [],
    ],
  ],
  [
    "storage.fileWebp",
    [
      0x1081464C,
      [],
    ],
  ],
  [
    "userEmpty",
    [
      0xD3BC4B7A,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "user",
    [
      0x215C4438,
      [
        ["flags", flags, "#"],
        ["self", "true", "flags.10?true"],
        ["contact", "true", "flags.11?true"],
        ["mutual_contact", "true", "flags.12?true"],
        ["deleted", "true", "flags.13?true"],
        ["bot", "true", "flags.14?true"],
        ["bot_chat_history", "true", "flags.15?true"],
        ["bot_nochats", "true", "flags.16?true"],
        ["verified", "true", "flags.17?true"],
        ["restricted", "true", "flags.18?true"],
        ["min", "true", "flags.20?true"],
        ["bot_inline_geo", "true", "flags.21?true"],
        ["support", "true", "flags.23?true"],
        ["scam", "true", "flags.24?true"],
        ["apply_min_photo", "true", "flags.25?true"],
        ["fake", "true", "flags.26?true"],
        ["bot_attach_menu", "true", "flags.27?true"],
        ["premium", "true", "flags.28?true"],
        ["attach_menu_enabled", "true", "flags.29?true"],
        ["flags2", flags, "#"],
        ["bot_can_edit", "true", "flags2.1?true"],
        ["close_friend", "true", "flags2.2?true"],
        ["stories_hidden", "true", "flags2.3?true"],
        ["stories_unavailable", "true", "flags2.4?true"],
        ["contact_require_premium", "true", "flags2.10?true"],
        ["bot_business", "true", "flags2.11?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "flags.0?long"],
        ["first_name", "string", "flags.1?string"],
        ["last_name", "string", "flags.2?string"],
        ["username", "string", "flags.3?string"],
        ["phone", "string", "flags.4?string"],
        ["photo", "UserProfilePhoto", "flags.5?UserProfilePhoto"],
        ["status", "UserStatus", "flags.6?UserStatus"],
        ["bot_info_version", "number", "flags.14?int"],
        ["restriction_reason", ["RestrictionReason"], "flags.18?Vector<RestrictionReason>"],
        ["bot_inline_placeholder", "string", "flags.19?string"],
        ["lang_code", "string", "flags.22?string"],
        ["emoji_status", "EmojiStatus", "flags.30?EmojiStatus"],
        ["usernames", ["Username"], "flags2.0?Vector<Username>"],
        ["stories_max_id", "number", "flags2.5?int"],
        ["color", "PeerColor", "flags2.8?PeerColor"],
        ["profile_color", "PeerColor", "flags2.9?PeerColor"],
      ],
    ],
  ],
  [
    "userProfilePhotoEmpty",
    [
      0x4F11BAE1,
      [],
    ],
  ],
  [
    "userProfilePhoto",
    [
      0x82D1F706,
      [
        ["flags", flags, "#"],
        ["has_video", "true", "flags.0?true"],
        ["personal", "true", "flags.2?true"],
        ["photo_id", "bigint", "long"],
        ["stripped_thumb", Uint8Array, "flags.1?bytes"],
        ["dc_id", "number", "int"],
      ],
    ],
  ],
  [
    "userStatusEmpty",
    [
      0x09D05049,
      [],
    ],
  ],
  [
    "userStatusOnline",
    [
      0xEDB93949,
      [
        ["expires", "number", "int"],
      ],
    ],
  ],
  [
    "userStatusOffline",
    [
      0x008C703F,
      [
        ["was_online", "number", "int"],
      ],
    ],
  ],
  [
    "userStatusRecently",
    [
      0x7B197DC8,
      [
        ["flags", flags, "#"],
        ["by_me", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "userStatusLastWeek",
    [
      0x541A1D1A,
      [
        ["flags", flags, "#"],
        ["by_me", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "userStatusLastMonth",
    [
      0x65899777,
      [
        ["flags", flags, "#"],
        ["by_me", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "chatEmpty",
    [
      0x29562865,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "chat",
    [
      0x41CBF256,
      [
        ["flags", flags, "#"],
        ["creator", "true", "flags.0?true"],
        ["left", "true", "flags.2?true"],
        ["deactivated", "true", "flags.5?true"],
        ["call_active", "true", "flags.23?true"],
        ["call_not_empty", "true", "flags.24?true"],
        ["noforwards", "true", "flags.25?true"],
        ["id", "bigint", "long"],
        ["title", "string", "string"],
        ["photo", "ChatPhoto", "ChatPhoto"],
        ["participants_count", "number", "int"],
        ["date", "number", "int"],
        ["version", "number", "int"],
        ["migrated_to", "InputChannel", "flags.6?InputChannel"],
        ["admin_rights", "ChatAdminRights", "flags.14?ChatAdminRights"],
        ["default_banned_rights", "ChatBannedRights", "flags.18?ChatBannedRights"],
      ],
    ],
  ],
  [
    "chatForbidden",
    [
      0x6592A1A7,
      [
        ["id", "bigint", "long"],
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "channel",
    [
      0x0AADFC8F,
      [
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
        ["has_link", "true", "flags.20?true"],
        ["has_geo", "true", "flags.21?true"],
        ["slowmode_enabled", "true", "flags.22?true"],
        ["call_active", "true", "flags.23?true"],
        ["call_not_empty", "true", "flags.24?true"],
        ["fake", "true", "flags.25?true"],
        ["gigagroup", "true", "flags.26?true"],
        ["noforwards", "true", "flags.27?true"],
        ["join_to_send", "true", "flags.28?true"],
        ["join_request", "true", "flags.29?true"],
        ["forum", "true", "flags.30?true"],
        ["flags2", flags, "#"],
        ["stories_hidden", "true", "flags2.1?true"],
        ["stories_hidden_min", "true", "flags2.2?true"],
        ["stories_unavailable", "true", "flags2.3?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "flags.13?long"],
        ["title", "string", "string"],
        ["username", "string", "flags.6?string"],
        ["photo", "ChatPhoto", "ChatPhoto"],
        ["date", "number", "int"],
        ["restriction_reason", ["RestrictionReason"], "flags.9?Vector<RestrictionReason>"],
        ["admin_rights", "ChatAdminRights", "flags.14?ChatAdminRights"],
        ["banned_rights", "ChatBannedRights", "flags.15?ChatBannedRights"],
        ["default_banned_rights", "ChatBannedRights", "flags.18?ChatBannedRights"],
        ["participants_count", "number", "flags.17?int"],
        ["usernames", ["Username"], "flags2.0?Vector<Username>"],
        ["stories_max_id", "number", "flags2.4?int"],
        ["color", "PeerColor", "flags2.7?PeerColor"],
        ["profile_color", "PeerColor", "flags2.8?PeerColor"],
        ["emoji_status", "EmojiStatus", "flags2.9?EmojiStatus"],
        ["level", "number", "flags2.10?int"],
      ],
    ],
  ],
  [
    "channelForbidden",
    [
      0x17D493D5,
      [
        ["flags", flags, "#"],
        ["broadcast", "true", "flags.5?true"],
        ["megagroup", "true", "flags.8?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["title", "string", "string"],
        ["until_date", "number", "flags.16?int"],
      ],
    ],
  ],
  [
    "chatFull",
    [
      0xC9D31138,
      [
        ["flags", flags, "#"],
        ["can_set_username", "true", "flags.7?true"],
        ["has_scheduled", "true", "flags.8?true"],
        ["translations_disabled", "true", "flags.19?true"],
        ["id", "bigint", "long"],
        ["about", "string", "string"],
        ["participants", "ChatParticipants", "ChatParticipants"],
        ["chat_photo", "Photo", "flags.2?Photo"],
        ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
        ["exported_invite", "ExportedChatInvite", "flags.13?ExportedChatInvite"],
        ["bot_info", ["BotInfo"], "flags.3?Vector<BotInfo>"],
        ["pinned_msg_id", "number", "flags.6?int"],
        ["folder_id", "number", "flags.11?int"],
        ["call", "InputGroupCall", "flags.12?InputGroupCall"],
        ["ttl_period", "number", "flags.14?int"],
        ["groupcall_default_join_as", "Peer", "flags.15?Peer"],
        ["theme_emoticon", "string", "flags.16?string"],
        ["requests_pending", "number", "flags.17?int"],
        ["recent_requesters", ["bigint"], "flags.17?Vector<long>"],
        ["available_reactions", "ChatReactions", "flags.18?ChatReactions"],
      ],
    ],
  ],
  [
    "channelFull",
    [
      0x44C054A7,
      [
        ["flags", flags, "#"],
        ["can_view_participants", "true", "flags.3?true"],
        ["can_set_username", "true", "flags.6?true"],
        ["can_set_stickers", "true", "flags.7?true"],
        ["hidden_prehistory", "true", "flags.10?true"],
        ["can_set_location", "true", "flags.16?true"],
        ["has_scheduled", "true", "flags.19?true"],
        ["can_view_stats", "true", "flags.20?true"],
        ["blocked", "true", "flags.22?true"],
        ["flags2", flags, "#"],
        ["can_delete_channel", "true", "flags2.0?true"],
        ["antispam", "true", "flags2.1?true"],
        ["participants_hidden", "true", "flags2.2?true"],
        ["translations_disabled", "true", "flags2.3?true"],
        ["stories_pinned_available", "true", "flags2.5?true"],
        ["view_forum_as_messages", "true", "flags2.6?true"],
        ["restricted_sponsored", "true", "flags2.11?true"],
        ["can_view_revenue", "true", "flags2.12?true"],
        ["id", "bigint", "long"],
        ["about", "string", "string"],
        ["participants_count", "number", "flags.0?int"],
        ["admins_count", "number", "flags.1?int"],
        ["kicked_count", "number", "flags.2?int"],
        ["banned_count", "number", "flags.2?int"],
        ["online_count", "number", "flags.13?int"],
        ["read_inbox_max_id", "number", "int"],
        ["read_outbox_max_id", "number", "int"],
        ["unread_count", "number", "int"],
        ["chat_photo", "Photo", "Photo"],
        ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
        ["exported_invite", "ExportedChatInvite", "flags.23?ExportedChatInvite"],
        ["bot_info", ["BotInfo"], "Vector<BotInfo>"],
        ["migrated_from_chat_id", "bigint", "flags.4?long"],
        ["migrated_from_max_id", "number", "flags.4?int"],
        ["pinned_msg_id", "number", "flags.5?int"],
        ["stickerset", "StickerSet", "flags.8?StickerSet"],
        ["available_min_id", "number", "flags.9?int"],
        ["folder_id", "number", "flags.11?int"],
        ["linked_chat_id", "bigint", "flags.14?long"],
        ["location", "ChannelLocation", "flags.15?ChannelLocation"],
        ["slowmode_seconds", "number", "flags.17?int"],
        ["slowmode_next_send_date", "number", "flags.18?int"],
        ["stats_dc", "number", "flags.12?int"],
        ["pts", "number", "int"],
        ["call", "InputGroupCall", "flags.21?InputGroupCall"],
        ["ttl_period", "number", "flags.24?int"],
        ["pending_suggestions", ["string"], "flags.25?Vector<string>"],
        ["groupcall_default_join_as", "Peer", "flags.26?Peer"],
        ["theme_emoticon", "string", "flags.27?string"],
        ["requests_pending", "number", "flags.28?int"],
        ["recent_requesters", ["bigint"], "flags.28?Vector<long>"],
        ["default_send_as", "Peer", "flags.29?Peer"],
        ["available_reactions", "ChatReactions", "flags.30?ChatReactions"],
        ["stories", "PeerStories", "flags2.4?PeerStories"],
        ["wallpaper", "WallPaper", "flags2.7?WallPaper"],
        ["boosts_applied", "number", "flags2.8?int"],
        ["boosts_unrestrict", "number", "flags2.9?int"],
        ["emojiset", "StickerSet", "flags2.10?StickerSet"],
      ],
    ],
  ],
  [
    "chatParticipant",
    [
      0xC02D4007,
      [
        ["user_id", "bigint", "long"],
        ["inviter_id", "bigint", "long"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "chatParticipantCreator",
    [
      0xE46BCEE4,
      [
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "chatParticipantAdmin",
    [
      0xA0933F5B,
      [
        ["user_id", "bigint", "long"],
        ["inviter_id", "bigint", "long"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "chatParticipantsForbidden",
    [
      0x8763D3E1,
      [
        ["flags", flags, "#"],
        ["chat_id", "bigint", "long"],
        ["self_participant", "ChatParticipant", "flags.0?ChatParticipant"],
      ],
    ],
  ],
  [
    "chatParticipants",
    [
      0x3CBC93F8,
      [
        ["chat_id", "bigint", "long"],
        ["participants", ["ChatParticipant"], "Vector<ChatParticipant>"],
        ["version", "number", "int"],
      ],
    ],
  ],
  [
    "chatPhotoEmpty",
    [
      0x37C1011C,
      [],
    ],
  ],
  [
    "chatPhoto",
    [
      0x1C6E1C11,
      [
        ["flags", flags, "#"],
        ["has_video", "true", "flags.0?true"],
        ["photo_id", "bigint", "long"],
        ["stripped_thumb", Uint8Array, "flags.1?bytes"],
        ["dc_id", "number", "int"],
      ],
    ],
  ],
  [
    "messageEmpty",
    [
      0x90A6CA84,
      [
        ["flags", flags, "#"],
        ["id", "number", "int"],
        ["peer_id", "Peer", "flags.0?Peer"],
      ],
    ],
  ],
  [
    "message",
    [
      0x2357BF25,
      [
        ["flags", flags, "#"],
        ["out", "true", "flags.1?true"],
        ["mentioned", "true", "flags.4?true"],
        ["media_unread", "true", "flags.5?true"],
        ["silent", "true", "flags.13?true"],
        ["post", "true", "flags.14?true"],
        ["from_scheduled", "true", "flags.18?true"],
        ["legacy", "true", "flags.19?true"],
        ["edit_hide", "true", "flags.21?true"],
        ["pinned", "true", "flags.24?true"],
        ["noforwards", "true", "flags.26?true"],
        ["invert_media", "true", "flags.27?true"],
        ["flags2", flags, "#"],
        ["offline", "true", "flags2.1?true"],
        ["id", "number", "int"],
        ["from_id", "Peer", "flags.8?Peer"],
        ["from_boosts_applied", "number", "flags.29?int"],
        ["peer_id", "Peer", "Peer"],
        ["saved_peer_id", "Peer", "flags.28?Peer"],
        ["fwd_from", "MessageFwdHeader", "flags.2?MessageFwdHeader"],
        ["via_bot_id", "bigint", "flags.11?long"],
        ["via_business_bot_id", "bigint", "flags2.0?long"],
        ["reply_to", "MessageReplyHeader", "flags.3?MessageReplyHeader"],
        ["date", "number", "int"],
        ["message", "string", "string"],
        ["media", "MessageMedia", "flags.9?MessageMedia"],
        ["reply_markup", "ReplyMarkup", "flags.6?ReplyMarkup"],
        ["entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
        ["views", "number", "flags.10?int"],
        ["forwards", "number", "flags.10?int"],
        ["replies", "MessageReplies", "flags.23?MessageReplies"],
        ["edit_date", "number", "flags.15?int"],
        ["post_author", "string", "flags.16?string"],
        ["grouped_id", "bigint", "flags.17?long"],
        ["reactions", "MessageReactions", "flags.20?MessageReactions"],
        ["restriction_reason", ["RestrictionReason"], "flags.22?Vector<RestrictionReason>"],
        ["ttl_period", "number", "flags.25?int"],
        ["quick_reply_shortcut_id", "number", "flags.30?int"],
      ],
    ],
  ],
  [
    "messageService",
    [
      0x2B085862,
      [
        ["flags", flags, "#"],
        ["out", "true", "flags.1?true"],
        ["mentioned", "true", "flags.4?true"],
        ["media_unread", "true", "flags.5?true"],
        ["silent", "true", "flags.13?true"],
        ["post", "true", "flags.14?true"],
        ["legacy", "true", "flags.19?true"],
        ["id", "number", "int"],
        ["from_id", "Peer", "flags.8?Peer"],
        ["peer_id", "Peer", "Peer"],
        ["reply_to", "MessageReplyHeader", "flags.3?MessageReplyHeader"],
        ["date", "number", "int"],
        ["action", "MessageAction", "MessageAction"],
        ["ttl_period", "number", "flags.25?int"],
      ],
    ],
  ],
  [
    "messageMediaEmpty",
    [
      0x3DED6320,
      [],
    ],
  ],
  [
    "messageMediaPhoto",
    [
      0x695150D7,
      [
        ["flags", flags, "#"],
        ["spoiler", "true", "flags.3?true"],
        ["photo", "Photo", "flags.0?Photo"],
        ["ttl_seconds", "number", "flags.2?int"],
      ],
    ],
  ],
  [
    "messageMediaGeo",
    [
      0x56E0D474,
      [
        ["geo", "GeoPoint", "GeoPoint"],
      ],
    ],
  ],
  [
    "messageMediaContact",
    [
      0x70322949,
      [
        ["phone_number", "string", "string"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
        ["vcard", "string", "string"],
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messageMediaUnsupported",
    [
      0x9F84F49E,
      [],
    ],
  ],
  [
    "messageMediaDocument",
    [
      0x4CF4D72D,
      [
        ["flags", flags, "#"],
        ["nopremium", "true", "flags.3?true"],
        ["spoiler", "true", "flags.4?true"],
        ["video", "true", "flags.6?true"],
        ["round", "true", "flags.7?true"],
        ["voice", "true", "flags.8?true"],
        ["document", "Document", "flags.0?Document"],
        ["alt_document", "Document", "flags.5?Document"],
        ["ttl_seconds", "number", "flags.2?int"],
      ],
    ],
  ],
  [
    "messageMediaWebPage",
    [
      0xDDF10C3B,
      [
        ["flags", flags, "#"],
        ["force_large_media", "true", "flags.0?true"],
        ["force_small_media", "true", "flags.1?true"],
        ["manual", "true", "flags.3?true"],
        ["safe", "true", "flags.4?true"],
        ["webpage", "WebPage", "WebPage"],
      ],
    ],
  ],
  [
    "messageMediaVenue",
    [
      0x2EC0533F,
      [
        ["geo", "GeoPoint", "GeoPoint"],
        ["title", "string", "string"],
        ["address", "string", "string"],
        ["provider", "string", "string"],
        ["venue_id", "string", "string"],
        ["venue_type", "string", "string"],
      ],
    ],
  ],
  [
    "messageMediaGame",
    [
      0xFDB19008,
      [
        ["game", "Game", "Game"],
      ],
    ],
  ],
  [
    "messageMediaInvoice",
    [
      0xF6A548D3,
      [
        ["flags", flags, "#"],
        ["shipping_address_requested", "true", "flags.1?true"],
        ["test", "true", "flags.3?true"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["photo", "WebDocument", "flags.0?WebDocument"],
        ["receipt_msg_id", "number", "flags.2?int"],
        ["currency", "string", "string"],
        ["total_amount", "bigint", "long"],
        ["start_param", "string", "string"],
        ["extended_media", "MessageExtendedMedia", "flags.4?MessageExtendedMedia"],
      ],
    ],
  ],
  [
    "messageMediaGeoLive",
    [
      0xB940C666,
      [
        ["flags", flags, "#"],
        ["geo", "GeoPoint", "GeoPoint"],
        ["heading", "number", "flags.0?int"],
        ["period", "number", "int"],
        ["proximity_notification_radius", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "messageMediaPoll",
    [
      0x4BD6E798,
      [
        ["poll", "Poll", "Poll"],
        ["results", "PollResults", "PollResults"],
      ],
    ],
  ],
  [
    "messageMediaDice",
    [
      0x3F7EE58B,
      [
        ["value", "number", "int"],
        ["emoticon", "string", "string"],
      ],
    ],
  ],
  [
    "messageMediaStory",
    [
      0x68CB6283,
      [
        ["flags", flags, "#"],
        ["via_mention", "true", "flags.1?true"],
        ["peer", "Peer", "Peer"],
        ["id", "number", "int"],
        ["story", "StoryItem", "flags.0?StoryItem"],
      ],
    ],
  ],
  [
    "messageMediaGiveaway",
    [
      0xDAAD85B0,
      [
        ["flags", flags, "#"],
        ["only_new_subscribers", "true", "flags.0?true"],
        ["winners_are_visible", "true", "flags.2?true"],
        ["channels", ["bigint"], "Vector<long>"],
        ["countries_iso2", ["string"], "flags.1?Vector<string>"],
        ["prize_description", "string", "flags.3?string"],
        ["quantity", "number", "int"],
        ["months", "number", "int"],
        ["until_date", "number", "int"],
      ],
    ],
  ],
  [
    "messageMediaGiveawayResults",
    [
      0xC6991068,
      [
        ["flags", flags, "#"],
        ["only_new_subscribers", "true", "flags.0?true"],
        ["refunded", "true", "flags.2?true"],
        ["channel_id", "bigint", "long"],
        ["additional_peers_count", "number", "flags.3?int"],
        ["launch_msg_id", "number", "int"],
        ["winners_count", "number", "int"],
        ["unclaimed_count", "number", "int"],
        ["winners", ["bigint"], "Vector<long>"],
        ["months", "number", "int"],
        ["prize_description", "string", "flags.1?string"],
        ["until_date", "number", "int"],
      ],
    ],
  ],
  [
    "messageActionEmpty",
    [
      0xB6AEF7B0,
      [],
    ],
  ],
  [
    "messageActionChatCreate",
    [
      0xBD47CBAD,
      [
        ["title", "string", "string"],
        ["users", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messageActionChatEditTitle",
    [
      0xB5A1CE5A,
      [
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "messageActionChatEditPhoto",
    [
      0x7FCB13A8,
      [
        ["photo", "Photo", "Photo"],
      ],
    ],
  ],
  [
    "messageActionChatDeletePhoto",
    [
      0x95E3FBEF,
      [],
    ],
  ],
  [
    "messageActionChatAddUser",
    [
      0x15CEFD00,
      [
        ["users", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messageActionChatDeleteUser",
    [
      0xA43F30CC,
      [
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messageActionChatJoinedByLink",
    [
      0x031224C3,
      [
        ["inviter_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messageActionChannelCreate",
    [
      0x95D2AC92,
      [
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "messageActionChatMigrateTo",
    [
      0xE1037F92,
      [
        ["channel_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messageActionChannelMigrateFrom",
    [
      0xEA3948E9,
      [
        ["title", "string", "string"],
        ["chat_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messageActionPinMessage",
    [
      0x94BD38ED,
      [],
    ],
  ],
  [
    "messageActionHistoryClear",
    [
      0x9FBAB604,
      [],
    ],
  ],
  [
    "messageActionGameScore",
    [
      0x92A72876,
      [
        ["game_id", "bigint", "long"],
        ["score", "number", "int"],
      ],
    ],
  ],
  [
    "messageActionPaymentSentMe",
    [
      0x8F31B327,
      [
        ["flags", flags, "#"],
        ["recurring_init", "true", "flags.2?true"],
        ["recurring_used", "true", "flags.3?true"],
        ["currency", "string", "string"],
        ["total_amount", "bigint", "long"],
        ["payload", Uint8Array, "bytes"],
        ["info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
        ["shipping_option_id", "string", "flags.1?string"],
        ["charge", "PaymentCharge", "PaymentCharge"],
      ],
    ],
  ],
  [
    "messageActionPaymentSent",
    [
      0x96163F56,
      [
        ["flags", flags, "#"],
        ["recurring_init", "true", "flags.2?true"],
        ["recurring_used", "true", "flags.3?true"],
        ["currency", "string", "string"],
        ["total_amount", "bigint", "long"],
        ["invoice_slug", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "messageActionPhoneCall",
    [
      0x80E11A7F,
      [
        ["flags", flags, "#"],
        ["video", "true", "flags.2?true"],
        ["call_id", "bigint", "long"],
        ["reason", "PhoneCallDiscardReason", "flags.0?PhoneCallDiscardReason"],
        ["duration", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "messageActionScreenshotTaken",
    [
      0x4792929B,
      [],
    ],
  ],
  [
    "messageActionCustomAction",
    [
      0xFAE69F56,
      [
        ["message", "string", "string"],
      ],
    ],
  ],
  [
    "messageActionBotAllowed",
    [
      0xC516D679,
      [
        ["flags", flags, "#"],
        ["attach_menu", "true", "flags.1?true"],
        ["from_request", "true", "flags.3?true"],
        ["domain", "string", "flags.0?string"],
        ["app", "BotApp", "flags.2?BotApp"],
      ],
    ],
  ],
  [
    "messageActionSecureValuesSentMe",
    [
      0x1B287353,
      [
        ["values", ["SecureValue"], "Vector<SecureValue>"],
        ["credentials", "SecureCredentialsEncrypted", "SecureCredentialsEncrypted"],
      ],
    ],
  ],
  [
    "messageActionSecureValuesSent",
    [
      0xD95C6154,
      [
        ["types", ["SecureValueType"], "Vector<SecureValueType>"],
      ],
    ],
  ],
  [
    "messageActionContactSignUp",
    [
      0xF3F25F76,
      [],
    ],
  ],
  [
    "messageActionGeoProximityReached",
    [
      0x98E0D697,
      [
        ["from_id", "Peer", "Peer"],
        ["to_id", "Peer", "Peer"],
        ["distance", "number", "int"],
      ],
    ],
  ],
  [
    "messageActionGroupCall",
    [
      0x7A0D7F42,
      [
        ["flags", flags, "#"],
        ["call", "InputGroupCall", "InputGroupCall"],
        ["duration", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "messageActionInviteToGroupCall",
    [
      0x502F92F7,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["users", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messageActionSetMessagesTTL",
    [
      0x3C134D7B,
      [
        ["flags", flags, "#"],
        ["period", "number", "int"],
        ["auto_setting_from", "bigint", "flags.0?long"],
      ],
    ],
  ],
  [
    "messageActionGroupCallScheduled",
    [
      0xB3A07661,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["schedule_date", "number", "int"],
      ],
    ],
  ],
  [
    "messageActionSetChatTheme",
    [
      0xAA786345,
      [
        ["emoticon", "string", "string"],
      ],
    ],
  ],
  [
    "messageActionChatJoinedByRequest",
    [
      0xEBBCA3CB,
      [],
    ],
  ],
  [
    "messageActionWebViewDataSentMe",
    [
      0x47DD8079,
      [
        ["text", "string", "string"],
        ["data", "string", "string"],
      ],
    ],
  ],
  [
    "messageActionWebViewDataSent",
    [
      0xB4C38CB5,
      [
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "messageActionGiftPremium",
    [
      0xC83D6AEC,
      [
        ["flags", flags, "#"],
        ["currency", "string", "string"],
        ["amount", "bigint", "long"],
        ["months", "number", "int"],
        ["crypto_currency", "string", "flags.0?string"],
        ["crypto_amount", "bigint", "flags.0?long"],
      ],
    ],
  ],
  [
    "messageActionTopicCreate",
    [
      0x0D999256,
      [
        ["flags", flags, "#"],
        ["title", "string", "string"],
        ["icon_color", "number", "int"],
        ["icon_emoji_id", "bigint", "flags.0?long"],
      ],
    ],
  ],
  [
    "messageActionTopicEdit",
    [
      0xC0944820,
      [
        ["flags", flags, "#"],
        ["title", "string", "flags.0?string"],
        ["icon_emoji_id", "bigint", "flags.1?long"],
        ["closed", "boolean", "flags.2?Bool"],
        ["hidden", "boolean", "flags.3?Bool"],
      ],
    ],
  ],
  [
    "messageActionSuggestProfilePhoto",
    [
      0x57DE635E,
      [
        ["photo", "Photo", "Photo"],
      ],
    ],
  ],
  [
    "messageActionRequestedPeer",
    [
      0x31518E9B,
      [
        ["button_id", "number", "int"],
        ["peers", ["Peer"], "Vector<Peer>"],
      ],
    ],
  ],
  [
    "messageActionSetChatWallPaper",
    [
      0x5060A3F4,
      [
        ["flags", flags, "#"],
        ["same", "true", "flags.0?true"],
        ["for_both", "true", "flags.1?true"],
        ["wallpaper", "WallPaper", "WallPaper"],
      ],
    ],
  ],
  [
    "messageActionGiftCode",
    [
      0x678C2E09,
      [
        ["flags", flags, "#"],
        ["via_giveaway", "true", "flags.0?true"],
        ["unclaimed", "true", "flags.2?true"],
        ["boost_peer", "Peer", "flags.1?Peer"],
        ["months", "number", "int"],
        ["slug", "string", "string"],
        ["currency", "string", "flags.2?string"],
        ["amount", "bigint", "flags.2?long"],
        ["crypto_currency", "string", "flags.3?string"],
        ["crypto_amount", "bigint", "flags.3?long"],
      ],
    ],
  ],
  [
    "messageActionGiveawayLaunch",
    [
      0x332BA9ED,
      [],
    ],
  ],
  [
    "messageActionGiveawayResults",
    [
      0x2A9FADC5,
      [
        ["winners_count", "number", "int"],
        ["unclaimed_count", "number", "int"],
      ],
    ],
  ],
  [
    "messageActionBoostApply",
    [
      0xCC02AA6D,
      [
        ["boosts", "number", "int"],
      ],
    ],
  ],
  [
    "messageActionRequestedPeerSentMe",
    [
      0x93B31848,
      [
        ["button_id", "number", "int"],
        ["peers", ["RequestedPeer"], "Vector<RequestedPeer>"],
      ],
    ],
  ],
  [
    "dialog",
    [
      0xD58A08C6,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.2?true"],
        ["unread_mark", "true", "flags.3?true"],
        ["view_forum_as_messages", "true", "flags.6?true"],
        ["peer", "Peer", "Peer"],
        ["top_message", "number", "int"],
        ["read_inbox_max_id", "number", "int"],
        ["read_outbox_max_id", "number", "int"],
        ["unread_count", "number", "int"],
        ["unread_mentions_count", "number", "int"],
        ["unread_reactions_count", "number", "int"],
        ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
        ["pts", "number", "flags.0?int"],
        ["draft", "DraftMessage", "flags.1?DraftMessage"],
        ["folder_id", "number", "flags.4?int"],
        ["ttl_period", "number", "flags.5?int"],
      ],
    ],
  ],
  [
    "dialogFolder",
    [
      0x71BD134C,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.2?true"],
        ["folder", "Folder", "Folder"],
        ["peer", "Peer", "Peer"],
        ["top_message", "number", "int"],
        ["unread_muted_peers_count", "number", "int"],
        ["unread_unmuted_peers_count", "number", "int"],
        ["unread_muted_messages_count", "number", "int"],
        ["unread_unmuted_messages_count", "number", "int"],
      ],
    ],
  ],
  [
    "photoEmpty",
    [
      0x2331B22D,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "photo",
    [
      0xFB197A65,
      [
        ["flags", flags, "#"],
        ["has_stickers", "true", "flags.0?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["file_reference", Uint8Array, "bytes"],
        ["date", "number", "int"],
        ["sizes", ["PhotoSize"], "Vector<PhotoSize>"],
        ["video_sizes", ["VideoSize"], "flags.1?Vector<VideoSize>"],
        ["dc_id", "number", "int"],
      ],
    ],
  ],
  [
    "photoSizeEmpty",
    [
      0x0E17E23C,
      [
        ["type", "string", "string"],
      ],
    ],
  ],
  [
    "photoSize",
    [
      0x75C78E60,
      [
        ["type", "string", "string"],
        ["w", "number", "int"],
        ["h", "number", "int"],
        ["size", "number", "int"],
      ],
    ],
  ],
  [
    "photoCachedSize",
    [
      0x021E1AD6,
      [
        ["type", "string", "string"],
        ["w", "number", "int"],
        ["h", "number", "int"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "photoStrippedSize",
    [
      0xE0B0BC2E,
      [
        ["type", "string", "string"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "photoSizeProgressive",
    [
      0xFA3EFB95,
      [
        ["type", "string", "string"],
        ["w", "number", "int"],
        ["h", "number", "int"],
        ["sizes", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "photoPathSize",
    [
      0xD8214D41,
      [
        ["type", "string", "string"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "geoPointEmpty",
    [
      0x1117DD5F,
      [],
    ],
  ],
  [
    "geoPoint",
    [
      0xB2A2F663,
      [
        ["flags", flags, "#"],
        ["long", "number", "double"],
        ["lat", "number", "double"],
        ["access_hash", "bigint", "long"],
        ["accuracy_radius", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "auth.sentCode",
    [
      0x5E002502,
      [
        ["flags", flags, "#"],
        ["type", "auth_SentCodeType", "auth.SentCodeType"],
        ["phone_code_hash", "string", "string"],
        ["next_type", "auth_CodeType", "flags.1?auth.CodeType"],
        ["timeout", "number", "flags.2?int"],
      ],
    ],
  ],
  [
    "auth.sentCodeSuccess",
    [
      0x2390FE44,
      [
        ["authorization", "auth_Authorization", "auth.Authorization"],
      ],
    ],
  ],
  [
    "auth.authorization",
    [
      0x2EA2C0D4,
      [
        ["flags", flags, "#"],
        ["setup_password_required", "true", "flags.1?true"],
        ["otherwise_relogin_days", "number", "flags.1?int"],
        ["tmp_sessions", "number", "flags.0?int"],
        ["future_auth_token", Uint8Array, "flags.2?bytes"],
        ["user", "User", "User"],
      ],
    ],
  ],
  [
    "auth.authorizationSignUpRequired",
    [
      0x44747E9A,
      [
        ["flags", flags, "#"],
        ["terms_of_service", "help_TermsOfService", "flags.0?help.TermsOfService"],
      ],
    ],
  ],
  [
    "auth.exportedAuthorization",
    [
      0xB434E2B8,
      [
        ["id", "bigint", "long"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "inputNotifyPeer",
    [
      0xB8BC5B0C,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "inputNotifyUsers",
    [
      0x193B4417,
      [],
    ],
  ],
  [
    "inputNotifyChats",
    [
      0x4A95E84E,
      [],
    ],
  ],
  [
    "inputNotifyBroadcasts",
    [
      0xB1DB7C7E,
      [],
    ],
  ],
  [
    "inputNotifyForumTopic",
    [
      0x5C467992,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["top_msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "inputPeerNotifySettings",
    [
      0xCACB6AE2,
      [
        ["flags", flags, "#"],
        ["show_previews", "boolean", "flags.0?Bool"],
        ["silent", "boolean", "flags.1?Bool"],
        ["mute_until", "number", "flags.2?int"],
        ["sound", "NotificationSound", "flags.3?NotificationSound"],
        ["stories_muted", "boolean", "flags.6?Bool"],
        ["stories_hide_sender", "boolean", "flags.7?Bool"],
        ["stories_sound", "NotificationSound", "flags.8?NotificationSound"],
      ],
    ],
  ],
  [
    "peerNotifySettings",
    [
      0x99622C0C,
      [
        ["flags", flags, "#"],
        ["show_previews", "boolean", "flags.0?Bool"],
        ["silent", "boolean", "flags.1?Bool"],
        ["mute_until", "number", "flags.2?int"],
        ["ios_sound", "NotificationSound", "flags.3?NotificationSound"],
        ["android_sound", "NotificationSound", "flags.4?NotificationSound"],
        ["other_sound", "NotificationSound", "flags.5?NotificationSound"],
        ["stories_muted", "boolean", "flags.6?Bool"],
        ["stories_hide_sender", "boolean", "flags.7?Bool"],
        ["stories_ios_sound", "NotificationSound", "flags.8?NotificationSound"],
        ["stories_android_sound", "NotificationSound", "flags.9?NotificationSound"],
        ["stories_other_sound", "NotificationSound", "flags.10?NotificationSound"],
      ],
    ],
  ],
  [
    "peerSettings",
    [
      0xACD66C5E,
      [
        ["flags", flags, "#"],
        ["report_spam", "true", "flags.0?true"],
        ["add_contact", "true", "flags.1?true"],
        ["block_contact", "true", "flags.2?true"],
        ["share_contact", "true", "flags.3?true"],
        ["need_contacts_exception", "true", "flags.4?true"],
        ["report_geo", "true", "flags.5?true"],
        ["autoarchived", "true", "flags.7?true"],
        ["invite_members", "true", "flags.8?true"],
        ["request_chat_broadcast", "true", "flags.10?true"],
        ["business_bot_paused", "true", "flags.11?true"],
        ["business_bot_can_reply", "true", "flags.12?true"],
        ["geo_distance", "number", "flags.6?int"],
        ["request_chat_title", "string", "flags.9?string"],
        ["request_chat_date", "number", "flags.9?int"],
        ["business_bot_id", "bigint", "flags.13?long"],
        ["business_bot_manage_url", "string", "flags.13?string"],
      ],
    ],
  ],
  [
    "wallPaper",
    [
      0xA437C3ED,
      [
        ["id", "bigint", "long"],
        ["flags", flags, "#"],
        ["creator", "true", "flags.0?true"],
        ["default", "true", "flags.1?true"],
        ["pattern", "true", "flags.3?true"],
        ["dark", "true", "flags.4?true"],
        ["access_hash", "bigint", "long"],
        ["slug", "string", "string"],
        ["document", "Document", "Document"],
        ["settings", "WallPaperSettings", "flags.2?WallPaperSettings"],
      ],
    ],
  ],
  [
    "wallPaperNoFile",
    [
      0xE0804116,
      [
        ["id", "bigint", "long"],
        ["flags", flags, "#"],
        ["default", "true", "flags.1?true"],
        ["dark", "true", "flags.4?true"],
        ["settings", "WallPaperSettings", "flags.2?WallPaperSettings"],
      ],
    ],
  ],
  [
    "inputReportReasonSpam",
    [
      0x58DBCAB8,
      [],
    ],
  ],
  [
    "inputReportReasonViolence",
    [
      0x1E22C78D,
      [],
    ],
  ],
  [
    "inputReportReasonPornography",
    [
      0x2E59D922,
      [],
    ],
  ],
  [
    "inputReportReasonChildAbuse",
    [
      0xADF44EE3,
      [],
    ],
  ],
  [
    "inputReportReasonOther",
    [
      0xC1E4A2B1,
      [],
    ],
  ],
  [
    "inputReportReasonCopyright",
    [
      0x9B89F93A,
      [],
    ],
  ],
  [
    "inputReportReasonGeoIrrelevant",
    [
      0xDBD4FEED,
      [],
    ],
  ],
  [
    "inputReportReasonFake",
    [
      0xF5DDD6E7,
      [],
    ],
  ],
  [
    "inputReportReasonIllegalDrugs",
    [
      0x0A8EB2BE,
      [],
    ],
  ],
  [
    "inputReportReasonPersonalDetails",
    [
      0x9EC7863D,
      [],
    ],
  ],
  [
    "userFull",
    [
      0xCC997720,
      [
        ["flags", flags, "#"],
        ["blocked", "true", "flags.0?true"],
        ["phone_calls_available", "true", "flags.4?true"],
        ["phone_calls_private", "true", "flags.5?true"],
        ["can_pin_message", "true", "flags.7?true"],
        ["has_scheduled", "true", "flags.12?true"],
        ["video_calls_available", "true", "flags.13?true"],
        ["voice_messages_forbidden", "true", "flags.20?true"],
        ["translations_disabled", "true", "flags.23?true"],
        ["stories_pinned_available", "true", "flags.26?true"],
        ["blocked_my_stories_from", "true", "flags.27?true"],
        ["wallpaper_overridden", "true", "flags.28?true"],
        ["contact_require_premium", "true", "flags.29?true"],
        ["read_dates_private", "true", "flags.30?true"],
        ["flags2", flags, "#"],
        ["id", "bigint", "long"],
        ["about", "string", "flags.1?string"],
        ["settings", "PeerSettings", "PeerSettings"],
        ["personal_photo", "Photo", "flags.21?Photo"],
        ["profile_photo", "Photo", "flags.2?Photo"],
        ["fallback_photo", "Photo", "flags.22?Photo"],
        ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
        ["bot_info", "BotInfo", "flags.3?BotInfo"],
        ["pinned_msg_id", "number", "flags.6?int"],
        ["common_chats_count", "number", "int"],
        ["folder_id", "number", "flags.11?int"],
        ["ttl_period", "number", "flags.14?int"],
        ["theme_emoticon", "string", "flags.15?string"],
        ["private_forward_name", "string", "flags.16?string"],
        ["bot_group_admin_rights", "ChatAdminRights", "flags.17?ChatAdminRights"],
        ["bot_broadcast_admin_rights", "ChatAdminRights", "flags.18?ChatAdminRights"],
        ["premium_gifts", ["PremiumGiftOption"], "flags.19?Vector<PremiumGiftOption>"],
        ["wallpaper", "WallPaper", "flags.24?WallPaper"],
        ["stories", "PeerStories", "flags.25?PeerStories"],
        ["business_work_hours", "BusinessWorkHours", "flags2.0?BusinessWorkHours"],
        ["business_location", "BusinessLocation", "flags2.1?BusinessLocation"],
        ["business_greeting_message", "BusinessGreetingMessage", "flags2.2?BusinessGreetingMessage"],
        ["business_away_message", "BusinessAwayMessage", "flags2.3?BusinessAwayMessage"],
        ["business_intro", "BusinessIntro", "flags2.4?BusinessIntro"],
        ["birthday", "Birthday", "flags2.5?Birthday"],
        ["personal_channel_id", "bigint", "flags2.6?long"],
        ["personal_channel_message", "number", "flags2.6?int"],
      ],
    ],
  ],
  [
    "contact",
    [
      0x145ADE0B,
      [
        ["user_id", "bigint", "long"],
        ["mutual", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "importedContact",
    [
      0xC13E3C50,
      [
        ["user_id", "bigint", "long"],
        ["client_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "contactStatus",
    [
      0x16D9703B,
      [
        ["user_id", "bigint", "long"],
        ["status", "UserStatus", "UserStatus"],
      ],
    ],
  ],
  [
    "contacts.contactsNotModified",
    [
      0xB74BA9D2,
      [],
    ],
  ],
  [
    "contacts.contacts",
    [
      0xEAE87E42,
      [
        ["contacts", ["Contact"], "Vector<Contact>"],
        ["saved_count", "number", "int"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "contacts.importedContacts",
    [
      0x77D01C3B,
      [
        ["imported", ["ImportedContact"], "Vector<ImportedContact>"],
        ["popular_invites", ["PopularContact"], "Vector<PopularContact>"],
        ["retry_contacts", ["bigint"], "Vector<long>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "contacts.blocked",
    [
      0x0ADE1591,
      [
        ["blocked", ["PeerBlocked"], "Vector<PeerBlocked>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "contacts.blockedSlice",
    [
      0xE1664194,
      [
        ["count", "number", "int"],
        ["blocked", ["PeerBlocked"], "Vector<PeerBlocked>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.dialogs",
    [
      0x15BA6C40,
      [
        ["dialogs", ["Dialog"], "Vector<Dialog>"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.dialogsSlice",
    [
      0x71E094F3,
      [
        ["count", "number", "int"],
        ["dialogs", ["Dialog"], "Vector<Dialog>"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.dialogsNotModified",
    [
      0xF0E3E596,
      [
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "messages.messages",
    [
      0x8C718E87,
      [
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.messagesSlice",
    [
      0x3A54685E,
      [
        ["flags", flags, "#"],
        ["inexact", "true", "flags.1?true"],
        ["count", "number", "int"],
        ["next_rate", "number", "flags.0?int"],
        ["offset_id_offset", "number", "flags.2?int"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.channelMessages",
    [
      0xC776BA4E,
      [
        ["flags", flags, "#"],
        ["inexact", "true", "flags.1?true"],
        ["pts", "number", "int"],
        ["count", "number", "int"],
        ["offset_id_offset", "number", "flags.2?int"],
        ["messages", ["Message"], "Vector<Message>"],
        ["topics", ["ForumTopic"], "Vector<ForumTopic>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.messagesNotModified",
    [
      0x74535F21,
      [
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "messages.chats",
    [
      0x64FF9FD5,
      [
        ["chats", ["Chat"], "Vector<Chat>"],
      ],
    ],
  ],
  [
    "messages.chatsSlice",
    [
      0x9CD81144,
      [
        ["count", "number", "int"],
        ["chats", ["Chat"], "Vector<Chat>"],
      ],
    ],
  ],
  [
    "messages.chatFull",
    [
      0xE5D7D19C,
      [
        ["full_chat", "ChatFull", "ChatFull"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.affectedHistory",
    [
      0xB45C69D1,
      [
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
        ["offset", "number", "int"],
      ],
    ],
  ],
  [
    "inputMessagesFilterEmpty",
    [
      0x57E2F66C,
      [],
    ],
  ],
  [
    "inputMessagesFilterPhotos",
    [
      0x9609A51C,
      [],
    ],
  ],
  [
    "inputMessagesFilterVideo",
    [
      0x9FC00E65,
      [],
    ],
  ],
  [
    "inputMessagesFilterPhotoVideo",
    [
      0x56E9F0E4,
      [],
    ],
  ],
  [
    "inputMessagesFilterDocument",
    [
      0x9EDDF188,
      [],
    ],
  ],
  [
    "inputMessagesFilterUrl",
    [
      0x7EF0DD87,
      [],
    ],
  ],
  [
    "inputMessagesFilterGif",
    [
      0xFFC86587,
      [],
    ],
  ],
  [
    "inputMessagesFilterVoice",
    [
      0x50F5C392,
      [],
    ],
  ],
  [
    "inputMessagesFilterMusic",
    [
      0x3751B49E,
      [],
    ],
  ],
  [
    "inputMessagesFilterChatPhotos",
    [
      0x3A20ECB8,
      [],
    ],
  ],
  [
    "inputMessagesFilterPhoneCalls",
    [
      0x80C99768,
      [
        ["flags", flags, "#"],
        ["missed", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "inputMessagesFilterRoundVoice",
    [
      0x7A7C17A4,
      [],
    ],
  ],
  [
    "inputMessagesFilterRoundVideo",
    [
      0xB549DA53,
      [],
    ],
  ],
  [
    "inputMessagesFilterMyMentions",
    [
      0xC1F8E69A,
      [],
    ],
  ],
  [
    "inputMessagesFilterGeo",
    [
      0xE7026D0D,
      [],
    ],
  ],
  [
    "inputMessagesFilterContacts",
    [
      0xE062DB83,
      [],
    ],
  ],
  [
    "inputMessagesFilterPinned",
    [
      0x1BB00451,
      [],
    ],
  ],
  [
    "updateNewMessage",
    [
      0x1F2B0AFD,
      [
        ["message", "Message", "Message"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateMessageID",
    [
      0x4E90BFD6,
      [
        ["id", "number", "int"],
        ["random_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "updateDeleteMessages",
    [
      0xA20DB0E5,
      [
        ["messages", ["number"], "Vector<int>"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateUserTyping",
    [
      0xC01E857F,
      [
        ["user_id", "bigint", "long"],
        ["action", "SendMessageAction", "SendMessageAction"],
      ],
    ],
  ],
  [
    "updateChatUserTyping",
    [
      0x83487AF0,
      [
        ["chat_id", "bigint", "long"],
        ["from_id", "Peer", "Peer"],
        ["action", "SendMessageAction", "SendMessageAction"],
      ],
    ],
  ],
  [
    "updateChatParticipants",
    [
      0x07761198,
      [
        ["participants", "ChatParticipants", "ChatParticipants"],
      ],
    ],
  ],
  [
    "updateUserStatus",
    [
      0xE5BDF8DE,
      [
        ["user_id", "bigint", "long"],
        ["status", "UserStatus", "UserStatus"],
      ],
    ],
  ],
  [
    "updateUserName",
    [
      0xA7848924,
      [
        ["user_id", "bigint", "long"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
        ["usernames", ["Username"], "Vector<Username>"],
      ],
    ],
  ],
  [
    "updateNewAuthorization",
    [
      0x8951ABEF,
      [
        ["flags", flags, "#"],
        ["unconfirmed", "true", "flags.0?true"],
        ["hash", "bigint", "long"],
        ["date", "number", "flags.0?int"],
        ["device", "string", "flags.0?string"],
        ["location", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "updateNewEncryptedMessage",
    [
      0x12BCBD9A,
      [
        ["message", "EncryptedMessage", "EncryptedMessage"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateEncryptedChatTyping",
    [
      0x1710F156,
      [
        ["chat_id", "number", "int"],
      ],
    ],
  ],
  [
    "updateEncryption",
    [
      0xB4A2E88D,
      [
        ["chat", "EncryptedChat", "EncryptedChat"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "updateEncryptedMessagesRead",
    [
      0x38FE25B7,
      [
        ["chat_id", "number", "int"],
        ["max_date", "number", "int"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "updateChatParticipantAdd",
    [
      0x3DDA5451,
      [
        ["chat_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["inviter_id", "bigint", "long"],
        ["date", "number", "int"],
        ["version", "number", "int"],
      ],
    ],
  ],
  [
    "updateChatParticipantDelete",
    [
      0xE32F3D77,
      [
        ["chat_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["version", "number", "int"],
      ],
    ],
  ],
  [
    "updateDcOptions",
    [
      0x8E5E9873,
      [
        ["dc_options", ["DcOption"], "Vector<DcOption>"],
      ],
    ],
  ],
  [
    "updateNotifySettings",
    [
      0xBEC268EF,
      [
        ["peer", "NotifyPeer", "NotifyPeer"],
        ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
      ],
    ],
  ],
  [
    "updateServiceNotification",
    [
      0xEBE46819,
      [
        ["flags", flags, "#"],
        ["popup", "true", "flags.0?true"],
        ["invert_media", "true", "flags.2?true"],
        ["inbox_date", "number", "flags.1?int"],
        ["type", "string", "string"],
        ["message", "string", "string"],
        ["media", "MessageMedia", "MessageMedia"],
        ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "updatePrivacy",
    [
      0xEE3B272A,
      [
        ["key", "PrivacyKey", "PrivacyKey"],
        ["rules", ["PrivacyRule"], "Vector<PrivacyRule>"],
      ],
    ],
  ],
  [
    "updateUserPhone",
    [
      0x05492A13,
      [
        ["user_id", "bigint", "long"],
        ["phone", "string", "string"],
      ],
    ],
  ],
  [
    "updateReadHistoryInbox",
    [
      0x9C974FDF,
      [
        ["flags", flags, "#"],
        ["folder_id", "number", "flags.0?int"],
        ["peer", "Peer", "Peer"],
        ["max_id", "number", "int"],
        ["still_unread_count", "number", "int"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateReadHistoryOutbox",
    [
      0x2F2F21BF,
      [
        ["peer", "Peer", "Peer"],
        ["max_id", "number", "int"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateWebPage",
    [
      0x7F891213,
      [
        ["webpage", "WebPage", "WebPage"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateReadMessagesContents",
    [
      0xF8227181,
      [
        ["flags", flags, "#"],
        ["messages", ["number"], "Vector<int>"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
        ["date", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "updateChannelTooLong",
    [
      0x108D941F,
      [
        ["flags", flags, "#"],
        ["channel_id", "bigint", "long"],
        ["pts", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "updateChannel",
    [
      0x635B4C09,
      [
        ["channel_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "updateNewChannelMessage",
    [
      0x62BA04D9,
      [
        ["message", "Message", "Message"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateReadChannelInbox",
    [
      0x922E6E10,
      [
        ["flags", flags, "#"],
        ["folder_id", "number", "flags.0?int"],
        ["channel_id", "bigint", "long"],
        ["max_id", "number", "int"],
        ["still_unread_count", "number", "int"],
        ["pts", "number", "int"],
      ],
    ],
  ],
  [
    "updateDeleteChannelMessages",
    [
      0xC32D5B12,
      [
        ["channel_id", "bigint", "long"],
        ["messages", ["number"], "Vector<int>"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateChannelMessageViews",
    [
      0xF226AC08,
      [
        ["channel_id", "bigint", "long"],
        ["id", "number", "int"],
        ["views", "number", "int"],
      ],
    ],
  ],
  [
    "updateChatParticipantAdmin",
    [
      0xD7CA61A2,
      [
        ["chat_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["is_admin", "boolean", "Bool"],
        ["version", "number", "int"],
      ],
    ],
  ],
  [
    "updateNewStickerSet",
    [
      0x688A30AA,
      [
        ["stickerset", "messages_StickerSet", "messages.StickerSet"],
      ],
    ],
  ],
  [
    "updateStickerSetsOrder",
    [
      0x0BB2D201,
      [
        ["flags", flags, "#"],
        ["masks", "true", "flags.0?true"],
        ["emojis", "true", "flags.1?true"],
        ["order", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "updateStickerSets",
    [
      0x31C24808,
      [
        ["flags", flags, "#"],
        ["masks", "true", "flags.0?true"],
        ["emojis", "true", "flags.1?true"],
      ],
    ],
  ],
  [
    "updateSavedGifs",
    [
      0x9375341E,
      [],
    ],
  ],
  [
    "updateBotInlineQuery",
    [
      0x496F379C,
      [
        ["flags", flags, "#"],
        ["query_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["query", "string", "string"],
        ["geo", "GeoPoint", "flags.0?GeoPoint"],
        ["peer_type", "InlineQueryPeerType", "flags.1?InlineQueryPeerType"],
        ["offset", "string", "string"],
      ],
    ],
  ],
  [
    "updateBotInlineSend",
    [
      0x12F12A07,
      [
        ["flags", flags, "#"],
        ["user_id", "bigint", "long"],
        ["query", "string", "string"],
        ["geo", "GeoPoint", "flags.0?GeoPoint"],
        ["id", "string", "string"],
        ["msg_id", "InputBotInlineMessageID", "flags.1?InputBotInlineMessageID"],
      ],
    ],
  ],
  [
    "updateEditChannelMessage",
    [
      0x1B3F4DF7,
      [
        ["message", "Message", "Message"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateBotCallbackQuery",
    [
      0xB9CFC48D,
      [
        ["flags", flags, "#"],
        ["query_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["peer", "Peer", "Peer"],
        ["msg_id", "number", "int"],
        ["chat_instance", "bigint", "long"],
        ["data", Uint8Array, "flags.0?bytes"],
        ["game_short_name", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "updateEditMessage",
    [
      0xE40370A3,
      [
        ["message", "Message", "Message"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateInlineBotCallbackQuery",
    [
      0x691E9052,
      [
        ["flags", flags, "#"],
        ["query_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["msg_id", "InputBotInlineMessageID", "InputBotInlineMessageID"],
        ["chat_instance", "bigint", "long"],
        ["data", Uint8Array, "flags.0?bytes"],
        ["game_short_name", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "updateReadChannelOutbox",
    [
      0xB75F99A9,
      [
        ["channel_id", "bigint", "long"],
        ["max_id", "number", "int"],
      ],
    ],
  ],
  [
    "updateDraftMessage",
    [
      0x1B49EC6D,
      [
        ["flags", flags, "#"],
        ["peer", "Peer", "Peer"],
        ["top_msg_id", "number", "flags.0?int"],
        ["draft", "DraftMessage", "DraftMessage"],
      ],
    ],
  ],
  [
    "updateReadFeaturedStickers",
    [
      0x571D2742,
      [],
    ],
  ],
  [
    "updateRecentStickers",
    [
      0x9A422C20,
      [],
    ],
  ],
  [
    "updateConfig",
    [
      0xA229DD06,
      [],
    ],
  ],
  [
    "updatePtsChanged",
    [
      0x3354678F,
      [],
    ],
  ],
  [
    "updateChannelWebPage",
    [
      0x2F2BA99F,
      [
        ["channel_id", "bigint", "long"],
        ["webpage", "WebPage", "WebPage"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateDialogPinned",
    [
      0x6E6FE51C,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.0?true"],
        ["folder_id", "number", "flags.1?int"],
        ["peer", "DialogPeer", "DialogPeer"],
      ],
    ],
  ],
  [
    "updatePinnedDialogs",
    [
      0xFA0F3CA2,
      [
        ["flags", flags, "#"],
        ["folder_id", "number", "flags.1?int"],
        ["order", ["DialogPeer"], "flags.0?Vector<DialogPeer>"],
      ],
    ],
  ],
  [
    "updateBotWebhookJSON",
    [
      0x8317C0C3,
      [
        ["data", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "updateBotWebhookJSONQuery",
    [
      0x9B9240A6,
      [
        ["query_id", "bigint", "long"],
        ["data", "DataJSON", "DataJSON"],
        ["timeout", "number", "int"],
      ],
    ],
  ],
  [
    "updateBotShippingQuery",
    [
      0xB5AEFD7D,
      [
        ["query_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["payload", Uint8Array, "bytes"],
        ["shipping_address", "PostAddress", "PostAddress"],
      ],
    ],
  ],
  [
    "updateBotPrecheckoutQuery",
    [
      0x8CAA9A96,
      [
        ["flags", flags, "#"],
        ["query_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["payload", Uint8Array, "bytes"],
        ["info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
        ["shipping_option_id", "string", "flags.1?string"],
        ["currency", "string", "string"],
        ["total_amount", "bigint", "long"],
      ],
    ],
  ],
  [
    "updatePhoneCall",
    [
      0xAB0F6B1E,
      [
        ["phone_call", "PhoneCall", "PhoneCall"],
      ],
    ],
  ],
  [
    "updateLangPackTooLong",
    [
      0x46560264,
      [
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "updateLangPack",
    [
      0x56022F4D,
      [
        ["difference", "LangPackDifference", "LangPackDifference"],
      ],
    ],
  ],
  [
    "updateFavedStickers",
    [
      0xE511996D,
      [],
    ],
  ],
  [
    "updateChannelReadMessagesContents",
    [
      0xEA29055D,
      [
        ["flags", flags, "#"],
        ["channel_id", "bigint", "long"],
        ["top_msg_id", "number", "flags.0?int"],
        ["messages", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "updateContactsReset",
    [
      0x7084A7BE,
      [],
    ],
  ],
  [
    "updateChannelAvailableMessages",
    [
      0xB23FC698,
      [
        ["channel_id", "bigint", "long"],
        ["available_min_id", "number", "int"],
      ],
    ],
  ],
  [
    "updateDialogUnreadMark",
    [
      0xE16459C3,
      [
        ["flags", flags, "#"],
        ["unread", "true", "flags.0?true"],
        ["peer", "DialogPeer", "DialogPeer"],
      ],
    ],
  ],
  [
    "updateMessagePoll",
    [
      0xACA1657B,
      [
        ["flags", flags, "#"],
        ["poll_id", "bigint", "long"],
        ["poll", "Poll", "flags.0?Poll"],
        ["results", "PollResults", "PollResults"],
      ],
    ],
  ],
  [
    "updateChatDefaultBannedRights",
    [
      0x54C01850,
      [
        ["peer", "Peer", "Peer"],
        ["default_banned_rights", "ChatBannedRights", "ChatBannedRights"],
        ["version", "number", "int"],
      ],
    ],
  ],
  [
    "updateFolderPeers",
    [
      0x19360DC0,
      [
        ["folder_peers", ["FolderPeer"], "Vector<FolderPeer>"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updatePeerSettings",
    [
      0x6A7E7366,
      [
        ["peer", "Peer", "Peer"],
        ["settings", "PeerSettings", "PeerSettings"],
      ],
    ],
  ],
  [
    "updatePeerLocated",
    [
      0xB4AFCFB0,
      [
        ["peers", ["PeerLocated"], "Vector<PeerLocated>"],
      ],
    ],
  ],
  [
    "updateNewScheduledMessage",
    [
      0x39A51DFB,
      [
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "updateDeleteScheduledMessages",
    [
      0x90866CEE,
      [
        ["peer", "Peer", "Peer"],
        ["messages", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "updateTheme",
    [
      0x8216FBA3,
      [
        ["theme", "Theme", "Theme"],
      ],
    ],
  ],
  [
    "updateGeoLiveViewed",
    [
      0x871FB939,
      [
        ["peer", "Peer", "Peer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "updateLoginToken",
    [
      0x564FE691,
      [],
    ],
  ],
  [
    "updateMessagePollVote",
    [
      0x24F40E77,
      [
        ["poll_id", "bigint", "long"],
        ["peer", "Peer", "Peer"],
        ["options", [Uint8Array], "Vector<bytes>"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateDialogFilter",
    [
      0x26FFDE7D,
      [
        ["flags", flags, "#"],
        ["id", "number", "int"],
        ["filter", "DialogFilter", "flags.0?DialogFilter"],
      ],
    ],
  ],
  [
    "updateDialogFilterOrder",
    [
      0xA5D72105,
      [
        ["order", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "updateDialogFilters",
    [
      0x3504914F,
      [],
    ],
  ],
  [
    "updatePhoneCallSignalingData",
    [
      0x2661BF09,
      [
        ["phone_call_id", "bigint", "long"],
        ["data", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "updateChannelMessageForwards",
    [
      0xD29A27F4,
      [
        ["channel_id", "bigint", "long"],
        ["id", "number", "int"],
        ["forwards", "number", "int"],
      ],
    ],
  ],
  [
    "updateReadChannelDiscussionInbox",
    [
      0xD6B19546,
      [
        ["flags", flags, "#"],
        ["channel_id", "bigint", "long"],
        ["top_msg_id", "number", "int"],
        ["read_max_id", "number", "int"],
        ["broadcast_id", "bigint", "flags.0?long"],
        ["broadcast_post", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "updateReadChannelDiscussionOutbox",
    [
      0x695C9E7C,
      [
        ["channel_id", "bigint", "long"],
        ["top_msg_id", "number", "int"],
        ["read_max_id", "number", "int"],
      ],
    ],
  ],
  [
    "updatePeerBlocked",
    [
      0xEBE07752,
      [
        ["flags", flags, "#"],
        ["blocked", "true", "flags.0?true"],
        ["blocked_my_stories_from", "true", "flags.1?true"],
        ["peer_id", "Peer", "Peer"],
      ],
    ],
  ],
  [
    "updateChannelUserTyping",
    [
      0x8C88C923,
      [
        ["flags", flags, "#"],
        ["channel_id", "bigint", "long"],
        ["top_msg_id", "number", "flags.0?int"],
        ["from_id", "Peer", "Peer"],
        ["action", "SendMessageAction", "SendMessageAction"],
      ],
    ],
  ],
  [
    "updatePinnedMessages",
    [
      0xED85EAB5,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.0?true"],
        ["peer", "Peer", "Peer"],
        ["messages", ["number"], "Vector<int>"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updatePinnedChannelMessages",
    [
      0x5BB98608,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.0?true"],
        ["channel_id", "bigint", "long"],
        ["messages", ["number"], "Vector<int>"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "updateChat",
    [
      0xF89A6A4E,
      [
        ["chat_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "updateGroupCallParticipants",
    [
      0xF2EBDB4E,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["participants", ["GroupCallParticipant"], "Vector<GroupCallParticipant>"],
        ["version", "number", "int"],
      ],
    ],
  ],
  [
    "updateGroupCall",
    [
      0x14B24500,
      [
        ["chat_id", "bigint", "long"],
        ["call", "GroupCall", "GroupCall"],
      ],
    ],
  ],
  [
    "updatePeerHistoryTTL",
    [
      0xBB9BB9A5,
      [
        ["flags", flags, "#"],
        ["peer", "Peer", "Peer"],
        ["ttl_period", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "updateChatParticipant",
    [
      0xD087663A,
      [
        ["flags", flags, "#"],
        ["chat_id", "bigint", "long"],
        ["date", "number", "int"],
        ["actor_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["prev_participant", "ChatParticipant", "flags.0?ChatParticipant"],
        ["new_participant", "ChatParticipant", "flags.1?ChatParticipant"],
        ["invite", "ExportedChatInvite", "flags.2?ExportedChatInvite"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateChannelParticipant",
    [
      0x985D3ABB,
      [
        ["flags", flags, "#"],
        ["via_chatlist", "true", "flags.3?true"],
        ["channel_id", "bigint", "long"],
        ["date", "number", "int"],
        ["actor_id", "bigint", "long"],
        ["user_id", "bigint", "long"],
        ["prev_participant", "ChannelParticipant", "flags.0?ChannelParticipant"],
        ["new_participant", "ChannelParticipant", "flags.1?ChannelParticipant"],
        ["invite", "ExportedChatInvite", "flags.2?ExportedChatInvite"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateBotStopped",
    [
      0xC4870A49,
      [
        ["user_id", "bigint", "long"],
        ["date", "number", "int"],
        ["stopped", "boolean", "Bool"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateGroupCallConnection",
    [
      0x0B783982,
      [
        ["flags", flags, "#"],
        ["presentation", "true", "flags.0?true"],
        ["params", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "updateBotCommands",
    [
      0x4D712F2E,
      [
        ["peer", "Peer", "Peer"],
        ["bot_id", "bigint", "long"],
        ["commands", ["BotCommand"], "Vector<BotCommand>"],
      ],
    ],
  ],
  [
    "updatePendingJoinRequests",
    [
      0x7063C3DB,
      [
        ["peer", "Peer", "Peer"],
        ["requests_pending", "number", "int"],
        ["recent_requesters", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "updateBotChatInviteRequester",
    [
      0x11DFA986,
      [
        ["peer", "Peer", "Peer"],
        ["date", "number", "int"],
        ["user_id", "bigint", "long"],
        ["about", "string", "string"],
        ["invite", "ExportedChatInvite", "ExportedChatInvite"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateMessageReactions",
    [
      0x5E1B3CB8,
      [
        ["flags", flags, "#"],
        ["peer", "Peer", "Peer"],
        ["msg_id", "number", "int"],
        ["top_msg_id", "number", "flags.0?int"],
        ["reactions", "MessageReactions", "MessageReactions"],
      ],
    ],
  ],
  [
    "updateAttachMenuBots",
    [
      0x17B7A20B,
      [],
    ],
  ],
  [
    "updateWebViewResultSent",
    [
      0x1592B79D,
      [
        ["query_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "updateBotMenuButton",
    [
      0x14B85813,
      [
        ["bot_id", "bigint", "long"],
        ["button", "BotMenuButton", "BotMenuButton"],
      ],
    ],
  ],
  [
    "updateSavedRingtones",
    [
      0x74D8BE99,
      [],
    ],
  ],
  [
    "updateTranscribedAudio",
    [
      0x0084CD5A,
      [
        ["flags", flags, "#"],
        ["pending", "true", "flags.0?true"],
        ["peer", "Peer", "Peer"],
        ["msg_id", "number", "int"],
        ["transcription_id", "bigint", "long"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "updateReadFeaturedEmojiStickers",
    [
      0xFB4C496C,
      [],
    ],
  ],
  [
    "updateUserEmojiStatus",
    [
      0x28373599,
      [
        ["user_id", "bigint", "long"],
        ["emoji_status", "EmojiStatus", "EmojiStatus"],
      ],
    ],
  ],
  [
    "updateRecentEmojiStatuses",
    [
      0x30F443DB,
      [],
    ],
  ],
  [
    "updateRecentReactions",
    [
      0x6F7863F4,
      [],
    ],
  ],
  [
    "updateMoveStickerSetToTop",
    [
      0x86FCCF85,
      [
        ["flags", flags, "#"],
        ["masks", "true", "flags.0?true"],
        ["emojis", "true", "flags.1?true"],
        ["stickerset", "bigint", "long"],
      ],
    ],
  ],
  [
    "updateMessageExtendedMedia",
    [
      0x5A73A98C,
      [
        ["peer", "Peer", "Peer"],
        ["msg_id", "number", "int"],
        ["extended_media", "MessageExtendedMedia", "MessageExtendedMedia"],
      ],
    ],
  ],
  [
    "updateChannelPinnedTopic",
    [
      0x192EFBE3,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.0?true"],
        ["channel_id", "bigint", "long"],
        ["topic_id", "number", "int"],
      ],
    ],
  ],
  [
    "updateChannelPinnedTopics",
    [
      0xFE198602,
      [
        ["flags", flags, "#"],
        ["channel_id", "bigint", "long"],
        ["order", ["number"], "flags.0?Vector<int>"],
      ],
    ],
  ],
  [
    "updateUser",
    [
      0x20529438,
      [
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "updateAutoSaveSettings",
    [
      0xEC05B097,
      [],
    ],
  ],
  [
    "updateStory",
    [
      0x75B3B798,
      [
        ["peer", "Peer", "Peer"],
        ["story", "StoryItem", "StoryItem"],
      ],
    ],
  ],
  [
    "updateReadStories",
    [
      0xF74E932B,
      [
        ["peer", "Peer", "Peer"],
        ["max_id", "number", "int"],
      ],
    ],
  ],
  [
    "updateStoryID",
    [
      0x1BF335B9,
      [
        ["id", "number", "int"],
        ["random_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "updateStoriesStealthMode",
    [
      0x2C084DC1,
      [
        ["stealth_mode", "StoriesStealthMode", "StoriesStealthMode"],
      ],
    ],
  ],
  [
    "updateSentStoryReaction",
    [
      0x7D627683,
      [
        ["peer", "Peer", "Peer"],
        ["story_id", "number", "int"],
        ["reaction", "Reaction", "Reaction"],
      ],
    ],
  ],
  [
    "updateBotChatBoost",
    [
      0x904DD49C,
      [
        ["peer", "Peer", "Peer"],
        ["boost", "Boost", "Boost"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateChannelViewForumAsMessages",
    [
      0x07B68920,
      [
        ["channel_id", "bigint", "long"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "updatePeerWallpaper",
    [
      0xAE3F101D,
      [
        ["flags", flags, "#"],
        ["wallpaper_overridden", "true", "flags.1?true"],
        ["peer", "Peer", "Peer"],
        ["wallpaper", "WallPaper", "flags.0?WallPaper"],
      ],
    ],
  ],
  [
    "updateBotMessageReaction",
    [
      0xAC21D3CE,
      [
        ["peer", "Peer", "Peer"],
        ["msg_id", "number", "int"],
        ["date", "number", "int"],
        ["actor", "Peer", "Peer"],
        ["old_reactions", ["Reaction"], "Vector<Reaction>"],
        ["new_reactions", ["Reaction"], "Vector<Reaction>"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateBotMessageReactions",
    [
      0x09CB7759,
      [
        ["peer", "Peer", "Peer"],
        ["msg_id", "number", "int"],
        ["date", "number", "int"],
        ["reactions", ["ReactionCount"], "Vector<ReactionCount>"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateSavedDialogPinned",
    [
      0xAEAF9E74,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.0?true"],
        ["peer", "DialogPeer", "DialogPeer"],
      ],
    ],
  ],
  [
    "updatePinnedSavedDialogs",
    [
      0x686C85A6,
      [
        ["flags", flags, "#"],
        ["order", ["DialogPeer"], "flags.0?Vector<DialogPeer>"],
      ],
    ],
  ],
  [
    "updateSavedReactionTags",
    [
      0x39C67432,
      [],
    ],
  ],
  [
    "updateSmsJob",
    [
      0xF16269D4,
      [
        ["job_id", "string", "string"],
      ],
    ],
  ],
  [
    "updateQuickReplies",
    [
      0xF9470AB2,
      [
        ["quick_replies", ["QuickReply"], "Vector<QuickReply>"],
      ],
    ],
  ],
  [
    "updateNewQuickReply",
    [
      0xF53DA717,
      [
        ["quick_reply", "QuickReply", "QuickReply"],
      ],
    ],
  ],
  [
    "updateDeleteQuickReply",
    [
      0x53E6F1EC,
      [
        ["shortcut_id", "number", "int"],
      ],
    ],
  ],
  [
    "updateQuickReplyMessage",
    [
      0x3E050D0F,
      [
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "updateDeleteQuickReplyMessages",
    [
      0x566FE7CD,
      [
        ["shortcut_id", "number", "int"],
        ["messages", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "updateBotBusinessConnect",
    [
      0x8AE5C97A,
      [
        ["connection", "BotBusinessConnection", "BotBusinessConnection"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateBotNewBusinessMessage",
    [
      0x9DDB347C,
      [
        ["flags", flags, "#"],
        ["connection_id", "string", "string"],
        ["message", "Message", "Message"],
        ["reply_to_message", "Message", "flags.0?Message"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateBotEditBusinessMessage",
    [
      0x07DF587C,
      [
        ["flags", flags, "#"],
        ["connection_id", "string", "string"],
        ["message", "Message", "Message"],
        ["reply_to_message", "Message", "flags.0?Message"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updateBotDeleteBusinessMessage",
    [
      0xA02A982E,
      [
        ["connection_id", "string", "string"],
        ["peer", "Peer", "Peer"],
        ["messages", ["number"], "Vector<int>"],
        ["qts", "number", "int"],
      ],
    ],
  ],
  [
    "updates.state",
    [
      0xA56C2A3E,
      [
        ["pts", "number", "int"],
        ["qts", "number", "int"],
        ["date", "number", "int"],
        ["seq", "number", "int"],
        ["unread_count", "number", "int"],
      ],
    ],
  ],
  [
    "updates.differenceEmpty",
    [
      0x5D75A138,
      [
        ["date", "number", "int"],
        ["seq", "number", "int"],
      ],
    ],
  ],
  [
    "updates.difference",
    [
      0x00F49CA0,
      [
        ["new_messages", ["Message"], "Vector<Message>"],
        ["new_encrypted_messages", ["EncryptedMessage"], "Vector<EncryptedMessage>"],
        ["other_updates", ["Update"], "Vector<Update>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["state", "updates_State", "updates.State"],
      ],
    ],
  ],
  [
    "updates.differenceSlice",
    [
      0xA8FB1981,
      [
        ["new_messages", ["Message"], "Vector<Message>"],
        ["new_encrypted_messages", ["EncryptedMessage"], "Vector<EncryptedMessage>"],
        ["other_updates", ["Update"], "Vector<Update>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["intermediate_state", "updates_State", "updates.State"],
      ],
    ],
  ],
  [
    "updates.differenceTooLong",
    [
      0x4AFE8F6D,
      [
        ["pts", "number", "int"],
      ],
    ],
  ],
  [
    "updatesTooLong",
    [
      0xE317AF7E,
      [],
    ],
  ],
  [
    "updateShortMessage",
    [
      0x313BC7F8,
      [
        ["flags", flags, "#"],
        ["out", "true", "flags.1?true"],
        ["mentioned", "true", "flags.4?true"],
        ["media_unread", "true", "flags.5?true"],
        ["silent", "true", "flags.13?true"],
        ["id", "number", "int"],
        ["user_id", "bigint", "long"],
        ["message", "string", "string"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
        ["date", "number", "int"],
        ["fwd_from", "MessageFwdHeader", "flags.2?MessageFwdHeader"],
        ["via_bot_id", "bigint", "flags.11?long"],
        ["reply_to", "MessageReplyHeader", "flags.3?MessageReplyHeader"],
        ["entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
        ["ttl_period", "number", "flags.25?int"],
      ],
    ],
  ],
  [
    "updateShortChatMessage",
    [
      0x4D6DEEA5,
      [
        ["flags", flags, "#"],
        ["out", "true", "flags.1?true"],
        ["mentioned", "true", "flags.4?true"],
        ["media_unread", "true", "flags.5?true"],
        ["silent", "true", "flags.13?true"],
        ["id", "number", "int"],
        ["from_id", "bigint", "long"],
        ["chat_id", "bigint", "long"],
        ["message", "string", "string"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
        ["date", "number", "int"],
        ["fwd_from", "MessageFwdHeader", "flags.2?MessageFwdHeader"],
        ["via_bot_id", "bigint", "flags.11?long"],
        ["reply_to", "MessageReplyHeader", "flags.3?MessageReplyHeader"],
        ["entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
        ["ttl_period", "number", "flags.25?int"],
      ],
    ],
  ],
  [
    "updateShort",
    [
      0x78D4DEC1,
      [
        ["update", "Update", "Update"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "updatesCombined",
    [
      0x725B04C3,
      [
        ["updates", ["Update"], "Vector<Update>"],
        ["users", ["User"], "Vector<User>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["date", "number", "int"],
        ["seq_start", "number", "int"],
        ["seq", "number", "int"],
      ],
    ],
  ],
  [
    "updates",
    [
      0x74AE4240,
      [
        ["updates", ["Update"], "Vector<Update>"],
        ["users", ["User"], "Vector<User>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["date", "number", "int"],
        ["seq", "number", "int"],
      ],
    ],
  ],
  [
    "updateShortSentMessage",
    [
      0x9015E101,
      [
        ["flags", flags, "#"],
        ["out", "true", "flags.1?true"],
        ["id", "number", "int"],
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
        ["date", "number", "int"],
        ["media", "MessageMedia", "flags.9?MessageMedia"],
        ["entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
        ["ttl_period", "number", "flags.25?int"],
      ],
    ],
  ],
  [
    "photos.photos",
    [
      0x8DCA6AA5,
      [
        ["photos", ["Photo"], "Vector<Photo>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "photos.photosSlice",
    [
      0x15051F54,
      [
        ["count", "number", "int"],
        ["photos", ["Photo"], "Vector<Photo>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "photos.photo",
    [
      0x20212CA8,
      [
        ["photo", "Photo", "Photo"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "upload.file",
    [
      0x096A18D5,
      [
        ["type", "storage_FileType", "storage.FileType"],
        ["mtime", "number", "int"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "upload.fileCdnRedirect",
    [
      0xF18CDA44,
      [
        ["dc_id", "number", "int"],
        ["file_token", Uint8Array, "bytes"],
        ["encryption_key", Uint8Array, "bytes"],
        ["encryption_iv", Uint8Array, "bytes"],
        ["file_hashes", ["FileHash"], "Vector<FileHash>"],
      ],
    ],
  ],
  [
    "dcOption",
    [
      0x18B7A10D,
      [
        ["flags", flags, "#"],
        ["ipv6", "true", "flags.0?true"],
        ["media_only", "true", "flags.1?true"],
        ["tcpo_only", "true", "flags.2?true"],
        ["cdn", "true", "flags.3?true"],
        ["static", "true", "flags.4?true"],
        ["this_port_only", "true", "flags.5?true"],
        ["id", "number", "int"],
        ["ip_address", "string", "string"],
        ["port", "number", "int"],
        ["secret", Uint8Array, "flags.10?bytes"],
      ],
    ],
  ],
  [
    "config",
    [
      0xCC1A241E,
      [
        ["flags", flags, "#"],
        ["default_p2p_contacts", "true", "flags.3?true"],
        ["preload_featured_stickers", "true", "flags.4?true"],
        ["revoke_pm_inbox", "true", "flags.6?true"],
        ["blocked_mode", "true", "flags.8?true"],
        ["force_try_ipv6", "true", "flags.14?true"],
        ["date", "number", "int"],
        ["expires", "number", "int"],
        ["test_mode", "boolean", "Bool"],
        ["this_dc", "number", "int"],
        ["dc_options", ["DcOption"], "Vector<DcOption>"],
        ["dc_txt_domain_name", "string", "string"],
        ["chat_size_max", "number", "int"],
        ["megagroup_size_max", "number", "int"],
        ["forwarded_count_max", "number", "int"],
        ["online_update_period_ms", "number", "int"],
        ["offline_blur_timeout_ms", "number", "int"],
        ["offline_idle_timeout_ms", "number", "int"],
        ["online_cloud_timeout_ms", "number", "int"],
        ["notify_cloud_delay_ms", "number", "int"],
        ["notify_default_delay_ms", "number", "int"],
        ["push_chat_period_ms", "number", "int"],
        ["push_chat_limit", "number", "int"],
        ["edit_time_limit", "number", "int"],
        ["revoke_time_limit", "number", "int"],
        ["revoke_pm_time_limit", "number", "int"],
        ["rating_e_decay", "number", "int"],
        ["stickers_recent_limit", "number", "int"],
        ["channels_read_media_period", "number", "int"],
        ["tmp_sessions", "number", "flags.0?int"],
        ["call_receive_timeout_ms", "number", "int"],
        ["call_ring_timeout_ms", "number", "int"],
        ["call_connect_timeout_ms", "number", "int"],
        ["call_packet_timeout_ms", "number", "int"],
        ["me_url_prefix", "string", "string"],
        ["autoupdate_url_prefix", "string", "flags.7?string"],
        ["gif_search_username", "string", "flags.9?string"],
        ["venue_search_username", "string", "flags.10?string"],
        ["img_search_username", "string", "flags.11?string"],
        ["static_maps_provider", "string", "flags.12?string"],
        ["caption_length_max", "number", "int"],
        ["message_length_max", "number", "int"],
        ["webfile_dc_id", "number", "int"],
        ["suggested_lang_code", "string", "flags.2?string"],
        ["lang_pack_version", "number", "flags.2?int"],
        ["base_lang_pack_version", "number", "flags.2?int"],
        ["reactions_default", "Reaction", "flags.15?Reaction"],
        ["autologin_token", "string", "flags.16?string"],
      ],
    ],
  ],
  [
    "nearestDc",
    [
      0x8E1A1775,
      [
        ["country", "string", "string"],
        ["this_dc", "number", "int"],
        ["nearest_dc", "number", "int"],
      ],
    ],
  ],
  [
    "help.appUpdate",
    [
      0xCCBBCE30,
      [
        ["flags", flags, "#"],
        ["can_not_skip", "true", "flags.0?true"],
        ["id", "number", "int"],
        ["version", "string", "string"],
        ["text", "string", "string"],
        ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
        ["document", "Document", "flags.1?Document"],
        ["url", "string", "flags.2?string"],
        ["sticker", "Document", "flags.3?Document"],
      ],
    ],
  ],
  [
    "help.noAppUpdate",
    [
      0xC45A6536,
      [],
    ],
  ],
  [
    "help.inviteText",
    [
      0x18CB9F78,
      [
        ["message", "string", "string"],
      ],
    ],
  ],
  [
    "encryptedChatEmpty",
    [
      0xAB7EC0A0,
      [
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "encryptedChatWaiting",
    [
      0x66B25953,
      [
        ["id", "number", "int"],
        ["access_hash", "bigint", "long"],
        ["date", "number", "int"],
        ["admin_id", "bigint", "long"],
        ["participant_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "encryptedChatRequested",
    [
      0x48F1D94C,
      [
        ["flags", flags, "#"],
        ["folder_id", "number", "flags.0?int"],
        ["id", "number", "int"],
        ["access_hash", "bigint", "long"],
        ["date", "number", "int"],
        ["admin_id", "bigint", "long"],
        ["participant_id", "bigint", "long"],
        ["g_a", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "encryptedChat",
    [
      0x61F0D4C7,
      [
        ["id", "number", "int"],
        ["access_hash", "bigint", "long"],
        ["date", "number", "int"],
        ["admin_id", "bigint", "long"],
        ["participant_id", "bigint", "long"],
        ["g_a_or_b", Uint8Array, "bytes"],
        ["key_fingerprint", "bigint", "long"],
      ],
    ],
  ],
  [
    "encryptedChatDiscarded",
    [
      0x1E1C7C45,
      [
        ["flags", flags, "#"],
        ["history_deleted", "true", "flags.0?true"],
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "inputEncryptedChat",
    [
      0xF141B5E1,
      [
        ["chat_id", "number", "int"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "encryptedFileEmpty",
    [
      0xC21F497E,
      [],
    ],
  ],
  [
    "encryptedFile",
    [
      0xA8008CD8,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["size", "bigint", "long"],
        ["dc_id", "number", "int"],
        ["key_fingerprint", "number", "int"],
      ],
    ],
  ],
  [
    "inputEncryptedFileEmpty",
    [
      0x1837C364,
      [],
    ],
  ],
  [
    "inputEncryptedFileUploaded",
    [
      0x64BD0306,
      [
        ["id", "bigint", "long"],
        ["parts", "number", "int"],
        ["md5_checksum", "string", "string"],
        ["key_fingerprint", "number", "int"],
      ],
    ],
  ],
  [
    "inputEncryptedFile",
    [
      0x5A17B5E5,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputEncryptedFileBigUploaded",
    [
      0x2DC173C8,
      [
        ["id", "bigint", "long"],
        ["parts", "number", "int"],
        ["key_fingerprint", "number", "int"],
      ],
    ],
  ],
  [
    "encryptedMessage",
    [
      0xED18C118,
      [
        ["random_id", "bigint", "long"],
        ["chat_id", "number", "int"],
        ["date", "number", "int"],
        ["bytes", Uint8Array, "bytes"],
        ["file", "EncryptedFile", "EncryptedFile"],
      ],
    ],
  ],
  [
    "encryptedMessageService",
    [
      0x23734B06,
      [
        ["random_id", "bigint", "long"],
        ["chat_id", "number", "int"],
        ["date", "number", "int"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "messages.dhConfigNotModified",
    [
      0xC0E24635,
      [
        ["random", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "messages.dhConfig",
    [
      0x2C221EDD,
      [
        ["g", "number", "int"],
        ["p", Uint8Array, "bytes"],
        ["version", "number", "int"],
        ["random", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "messages.sentEncryptedMessage",
    [
      0x560F8935,
      [
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "messages.sentEncryptedFile",
    [
      0x9493FF32,
      [
        ["date", "number", "int"],
        ["file", "EncryptedFile", "EncryptedFile"],
      ],
    ],
  ],
  [
    "inputDocumentEmpty",
    [
      0x72F0EAAE,
      [],
    ],
  ],
  [
    "inputDocument",
    [
      0x1ABFB575,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["file_reference", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "documentEmpty",
    [
      0x36F8C871,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "document",
    [
      0x8FD4C4D8,
      [
        ["flags", flags, "#"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["file_reference", Uint8Array, "bytes"],
        ["date", "number", "int"],
        ["mime_type", "string", "string"],
        ["size", "bigint", "long"],
        ["thumbs", ["PhotoSize"], "flags.0?Vector<PhotoSize>"],
        ["video_thumbs", ["VideoSize"], "flags.1?Vector<VideoSize>"],
        ["dc_id", "number", "int"],
        ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
      ],
    ],
  ],
  [
    "help.support",
    [
      0x17C6B5F6,
      [
        ["phone_number", "string", "string"],
        ["user", "User", "User"],
      ],
    ],
  ],
  [
    "notifyPeer",
    [
      0x9FD40BD8,
      [
        ["peer", "Peer", "Peer"],
      ],
    ],
  ],
  [
    "notifyUsers",
    [
      0xB4C83B4C,
      [],
    ],
  ],
  [
    "notifyChats",
    [
      0xC007CEC3,
      [],
    ],
  ],
  [
    "notifyBroadcasts",
    [
      0xD612E8EF,
      [],
    ],
  ],
  [
    "notifyForumTopic",
    [
      0x226E6308,
      [
        ["peer", "Peer", "Peer"],
        ["top_msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "sendMessageTypingAction",
    [
      0x16BF744E,
      [],
    ],
  ],
  [
    "sendMessageCancelAction",
    [
      0xFD5EC8F5,
      [],
    ],
  ],
  [
    "sendMessageRecordVideoAction",
    [
      0xA187D66F,
      [],
    ],
  ],
  [
    "sendMessageUploadVideoAction",
    [
      0xE9763AEC,
      [
        ["progress", "number", "int"],
      ],
    ],
  ],
  [
    "sendMessageRecordAudioAction",
    [
      0xD52F73F7,
      [],
    ],
  ],
  [
    "sendMessageUploadAudioAction",
    [
      0xF351D7AB,
      [
        ["progress", "number", "int"],
      ],
    ],
  ],
  [
    "sendMessageUploadPhotoAction",
    [
      0xD1D34A26,
      [
        ["progress", "number", "int"],
      ],
    ],
  ],
  [
    "sendMessageUploadDocumentAction",
    [
      0xAA0CD9E4,
      [
        ["progress", "number", "int"],
      ],
    ],
  ],
  [
    "sendMessageGeoLocationAction",
    [
      0x176F8BA1,
      [],
    ],
  ],
  [
    "sendMessageChooseContactAction",
    [
      0x628CBC6F,
      [],
    ],
  ],
  [
    "sendMessageGamePlayAction",
    [
      0xDD6A8F48,
      [],
    ],
  ],
  [
    "sendMessageRecordRoundAction",
    [
      0x88F27FBC,
      [],
    ],
  ],
  [
    "sendMessageUploadRoundAction",
    [
      0x243E1C66,
      [
        ["progress", "number", "int"],
      ],
    ],
  ],
  [
    "speakingInGroupCallAction",
    [
      0xD92C2285,
      [],
    ],
  ],
  [
    "sendMessageHistoryImportAction",
    [
      0xDBDA9246,
      [
        ["progress", "number", "int"],
      ],
    ],
  ],
  [
    "sendMessageChooseStickerAction",
    [
      0xB05AC6B1,
      [],
    ],
  ],
  [
    "sendMessageEmojiInteraction",
    [
      0x25972BCB,
      [
        ["emoticon", "string", "string"],
        ["msg_id", "number", "int"],
        ["interaction", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "sendMessageEmojiInteractionSeen",
    [
      0xB665902E,
      [
        ["emoticon", "string", "string"],
      ],
    ],
  ],
  [
    "contacts.found",
    [
      0xB3134D9D,
      [
        ["my_results", ["Peer"], "Vector<Peer>"],
        ["results", ["Peer"], "Vector<Peer>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "inputPrivacyKeyStatusTimestamp",
    [
      0x4F96CB18,
      [],
    ],
  ],
  [
    "inputPrivacyKeyChatInvite",
    [
      0xBDFB0426,
      [],
    ],
  ],
  [
    "inputPrivacyKeyPhoneCall",
    [
      0xFABADC5F,
      [],
    ],
  ],
  [
    "inputPrivacyKeyPhoneP2P",
    [
      0xDB9E70D2,
      [],
    ],
  ],
  [
    "inputPrivacyKeyForwards",
    [
      0xA4DD4C08,
      [],
    ],
  ],
  [
    "inputPrivacyKeyProfilePhoto",
    [
      0x5719BACC,
      [],
    ],
  ],
  [
    "inputPrivacyKeyPhoneNumber",
    [
      0x0352DAFA,
      [],
    ],
  ],
  [
    "inputPrivacyKeyAddedByPhone",
    [
      0xD1219BDD,
      [],
    ],
  ],
  [
    "inputPrivacyKeyVoiceMessages",
    [
      0xAEE69D68,
      [],
    ],
  ],
  [
    "inputPrivacyKeyAbout",
    [
      0x3823CC40,
      [],
    ],
  ],
  [
    "inputPrivacyKeyBirthday",
    [
      0xD65A11CC,
      [],
    ],
  ],
  [
    "privacyKeyStatusTimestamp",
    [
      0xBC2EAB30,
      [],
    ],
  ],
  [
    "privacyKeyChatInvite",
    [
      0x500E6DFA,
      [],
    ],
  ],
  [
    "privacyKeyPhoneCall",
    [
      0x3D662B7B,
      [],
    ],
  ],
  [
    "privacyKeyPhoneP2P",
    [
      0x39491CC8,
      [],
    ],
  ],
  [
    "privacyKeyForwards",
    [
      0x69EC56A3,
      [],
    ],
  ],
  [
    "privacyKeyProfilePhoto",
    [
      0x96151FED,
      [],
    ],
  ],
  [
    "privacyKeyPhoneNumber",
    [
      0xD19AE46D,
      [],
    ],
  ],
  [
    "privacyKeyAddedByPhone",
    [
      0x42FFD42B,
      [],
    ],
  ],
  [
    "privacyKeyVoiceMessages",
    [
      0x0697F414,
      [],
    ],
  ],
  [
    "privacyKeyAbout",
    [
      0xA486B761,
      [],
    ],
  ],
  [
    "privacyKeyBirthday",
    [
      0x2000A518,
      [],
    ],
  ],
  [
    "inputPrivacyValueAllowContacts",
    [
      0x0D09E07B,
      [],
    ],
  ],
  [
    "inputPrivacyValueAllowAll",
    [
      0x184B35CE,
      [],
    ],
  ],
  [
    "inputPrivacyValueAllowUsers",
    [
      0x131CC67F,
      [
        ["users", ["InputUser"], "Vector<InputUser>"],
      ],
    ],
  ],
  [
    "inputPrivacyValueDisallowContacts",
    [
      0x0BA52007,
      [],
    ],
  ],
  [
    "inputPrivacyValueDisallowAll",
    [
      0xD66B66C9,
      [],
    ],
  ],
  [
    "inputPrivacyValueDisallowUsers",
    [
      0x90110467,
      [
        ["users", ["InputUser"], "Vector<InputUser>"],
      ],
    ],
  ],
  [
    "inputPrivacyValueAllowChatParticipants",
    [
      0x840649CF,
      [
        ["chats", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "inputPrivacyValueDisallowChatParticipants",
    [
      0xE94F0F86,
      [
        ["chats", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "inputPrivacyValueAllowCloseFriends",
    [
      0x2F453E49,
      [],
    ],
  ],
  [
    "inputPrivacyValueAllowPremium",
    [
      0x77CDC9F1,
      [],
    ],
  ],
  [
    "privacyValueAllowContacts",
    [
      0xFFFE1BAC,
      [],
    ],
  ],
  [
    "privacyValueAllowAll",
    [
      0x65427B82,
      [],
    ],
  ],
  [
    "privacyValueAllowUsers",
    [
      0xB8905FB2,
      [
        ["users", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "privacyValueDisallowContacts",
    [
      0xF888FA1A,
      [],
    ],
  ],
  [
    "privacyValueDisallowAll",
    [
      0x8B73E763,
      [],
    ],
  ],
  [
    "privacyValueDisallowUsers",
    [
      0xE4621141,
      [
        ["users", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "privacyValueAllowChatParticipants",
    [
      0x6B134E8E,
      [
        ["chats", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "privacyValueDisallowChatParticipants",
    [
      0x41C87565,
      [
        ["chats", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "privacyValueAllowCloseFriends",
    [
      0xF7E8D89B,
      [],
    ],
  ],
  [
    "privacyValueAllowPremium",
    [
      0xECE9814B,
      [],
    ],
  ],
  [
    "account.privacyRules",
    [
      0x50A04E45,
      [
        ["rules", ["PrivacyRule"], "Vector<PrivacyRule>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "accountDaysTTL",
    [
      0xB8D0AFDF,
      [
        ["days", "number", "int"],
      ],
    ],
  ],
  [
    "documentAttributeImageSize",
    [
      0x6C37C15C,
      [
        ["w", "number", "int"],
        ["h", "number", "int"],
      ],
    ],
  ],
  [
    "documentAttributeAnimated",
    [
      0x11B58939,
      [],
    ],
  ],
  [
    "documentAttributeSticker",
    [
      0x6319D612,
      [
        ["flags", flags, "#"],
        ["mask", "true", "flags.1?true"],
        ["alt", "string", "string"],
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["mask_coords", "MaskCoords", "flags.0?MaskCoords"],
      ],
    ],
  ],
  [
    "documentAttributeVideo",
    [
      0xD38FF1C2,
      [
        ["flags", flags, "#"],
        ["round_message", "true", "flags.0?true"],
        ["supports_streaming", "true", "flags.1?true"],
        ["nosound", "true", "flags.3?true"],
        ["duration", "number", "double"],
        ["w", "number", "int"],
        ["h", "number", "int"],
        ["preload_prefix_size", "number", "flags.2?int"],
      ],
    ],
  ],
  [
    "documentAttributeAudio",
    [
      0x9852F9C6,
      [
        ["flags", flags, "#"],
        ["voice", "true", "flags.10?true"],
        ["duration", "number", "int"],
        ["title", "string", "flags.0?string"],
        ["performer", "string", "flags.1?string"],
        ["waveform", Uint8Array, "flags.2?bytes"],
      ],
    ],
  ],
  [
    "documentAttributeFilename",
    [
      0x15590068,
      [
        ["file_name", "string", "string"],
      ],
    ],
  ],
  [
    "documentAttributeHasStickers",
    [
      0x9801D2F7,
      [],
    ],
  ],
  [
    "documentAttributeCustomEmoji",
    [
      0xFD149899,
      [
        ["flags", flags, "#"],
        ["free", "true", "flags.0?true"],
        ["text_color", "true", "flags.1?true"],
        ["alt", "string", "string"],
        ["stickerset", "InputStickerSet", "InputStickerSet"],
      ],
    ],
  ],
  [
    "messages.stickersNotModified",
    [
      0xF1749A22,
      [],
    ],
  ],
  [
    "messages.stickers",
    [
      0x30A6EC7E,
      [
        ["hash", "bigint", "long"],
        ["stickers", ["Document"], "Vector<Document>"],
      ],
    ],
  ],
  [
    "stickerPack",
    [
      0x12B299D4,
      [
        ["emoticon", "string", "string"],
        ["documents", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messages.allStickersNotModified",
    [
      0xE86602C3,
      [],
    ],
  ],
  [
    "messages.allStickers",
    [
      0xCDBBCEBB,
      [
        ["hash", "bigint", "long"],
        ["sets", ["StickerSet"], "Vector<StickerSet>"],
      ],
    ],
  ],
  [
    "messages.affectedMessages",
    [
      0x84D19185,
      [
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
      ],
    ],
  ],
  [
    "webPageEmpty",
    [
      0x211A1788,
      [
        ["flags", flags, "#"],
        ["id", "bigint", "long"],
        ["url", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "webPagePending",
    [
      0xB0D13E47,
      [
        ["flags", flags, "#"],
        ["id", "bigint", "long"],
        ["url", "string", "flags.0?string"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "webPage",
    [
      0xE89C45B2,
      [
        ["flags", flags, "#"],
        ["has_large_media", "true", "flags.13?true"],
        ["id", "bigint", "long"],
        ["url", "string", "string"],
        ["display_url", "string", "string"],
        ["hash", "number", "int"],
        ["type", "string", "flags.0?string"],
        ["site_name", "string", "flags.1?string"],
        ["title", "string", "flags.2?string"],
        ["description", "string", "flags.3?string"],
        ["photo", "Photo", "flags.4?Photo"],
        ["embed_url", "string", "flags.5?string"],
        ["embed_type", "string", "flags.5?string"],
        ["embed_width", "number", "flags.6?int"],
        ["embed_height", "number", "flags.6?int"],
        ["duration", "number", "flags.7?int"],
        ["author", "string", "flags.8?string"],
        ["document", "Document", "flags.9?Document"],
        ["cached_page", "Page", "flags.10?Page"],
        ["attributes", ["WebPageAttribute"], "flags.12?Vector<WebPageAttribute>"],
      ],
    ],
  ],
  [
    "webPageNotModified",
    [
      0x7311CA11,
      [
        ["flags", flags, "#"],
        ["cached_page_views", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "authorization",
    [
      0xAD01D61D,
      [
        ["flags", flags, "#"],
        ["current", "true", "flags.0?true"],
        ["official_app", "true", "flags.1?true"],
        ["password_pending", "true", "flags.2?true"],
        ["encrypted_requests_disabled", "true", "flags.3?true"],
        ["call_requests_disabled", "true", "flags.4?true"],
        ["unconfirmed", "true", "flags.5?true"],
        ["hash", "bigint", "long"],
        ["device_model", "string", "string"],
        ["platform", "string", "string"],
        ["system_version", "string", "string"],
        ["api_id", "number", "int"],
        ["app_name", "string", "string"],
        ["app_version", "string", "string"],
        ["date_created", "number", "int"],
        ["date_active", "number", "int"],
        ["ip", "string", "string"],
        ["country", "string", "string"],
        ["region", "string", "string"],
      ],
    ],
  ],
  [
    "account.authorizations",
    [
      0x4BFF8EA0,
      [
        ["authorization_ttl_days", "number", "int"],
        ["authorizations", ["Authorization"], "Vector<Authorization>"],
      ],
    ],
  ],
  [
    "account.password",
    [
      0x957B50FB,
      [
        ["flags", flags, "#"],
        ["has_recovery", "true", "flags.0?true"],
        ["has_secure_values", "true", "flags.1?true"],
        ["has_password", "true", "flags.2?true"],
        ["current_algo", "PasswordKdfAlgo", "flags.2?PasswordKdfAlgo"],
        ["srp_B", Uint8Array, "flags.2?bytes"],
        ["srp_id", "bigint", "flags.2?long"],
        ["hint", "string", "flags.3?string"],
        ["email_unconfirmed_pattern", "string", "flags.4?string"],
        ["new_algo", "PasswordKdfAlgo", "PasswordKdfAlgo"],
        ["new_secure_algo", "SecurePasswordKdfAlgo", "SecurePasswordKdfAlgo"],
        ["secure_random", Uint8Array, "bytes"],
        ["pending_reset_date", "number", "flags.5?int"],
        ["login_email_pattern", "string", "flags.6?string"],
      ],
    ],
  ],
  [
    "account.passwordSettings",
    [
      0x9A5C33E5,
      [
        ["flags", flags, "#"],
        ["email", "string", "flags.0?string"],
        ["secure_settings", "SecureSecretSettings", "flags.1?SecureSecretSettings"],
      ],
    ],
  ],
  [
    "account.passwordInputSettings",
    [
      0xC23727C9,
      [
        ["flags", flags, "#"],
        ["new_algo", "PasswordKdfAlgo", "flags.0?PasswordKdfAlgo"],
        ["new_password_hash", Uint8Array, "flags.0?bytes"],
        ["hint", "string", "flags.0?string"],
        ["email", "string", "flags.1?string"],
        ["new_secure_settings", "SecureSecretSettings", "flags.2?SecureSecretSettings"],
      ],
    ],
  ],
  [
    "auth.passwordRecovery",
    [
      0x137948A5,
      [
        ["email_pattern", "string", "string"],
      ],
    ],
  ],
  [
    "receivedNotifyMessage",
    [
      0xA384B779,
      [
        ["id", "number", "int"],
        ["flags", "number", "int"],
      ],
    ],
  ],
  [
    "chatInviteExported",
    [
      0x0AB4A819,
      [
        ["flags", flags, "#"],
        ["revoked", "true", "flags.0?true"],
        ["permanent", "true", "flags.5?true"],
        ["request_needed", "true", "flags.6?true"],
        ["link", "string", "string"],
        ["admin_id", "bigint", "long"],
        ["date", "number", "int"],
        ["start_date", "number", "flags.4?int"],
        ["expire_date", "number", "flags.1?int"],
        ["usage_limit", "number", "flags.2?int"],
        ["usage", "number", "flags.3?int"],
        ["requested", "number", "flags.7?int"],
        ["title", "string", "flags.8?string"],
      ],
    ],
  ],
  [
    "chatInvitePublicJoinRequests",
    [
      0xED107AB7,
      [],
    ],
  ],
  [
    "chatInviteAlready",
    [
      0x5A686D7C,
      [
        ["chat", "Chat", "Chat"],
      ],
    ],
  ],
  [
    "chatInvite",
    [
      0xCDE0EC40,
      [
        ["flags", flags, "#"],
        ["channel", "true", "flags.0?true"],
        ["broadcast", "true", "flags.1?true"],
        ["public", "true", "flags.2?true"],
        ["megagroup", "true", "flags.3?true"],
        ["request_needed", "true", "flags.6?true"],
        ["verified", "true", "flags.7?true"],
        ["scam", "true", "flags.8?true"],
        ["fake", "true", "flags.9?true"],
        ["title", "string", "string"],
        ["about", "string", "flags.5?string"],
        ["photo", "Photo", "Photo"],
        ["participants_count", "number", "int"],
        ["participants", ["User"], "flags.4?Vector<User>"],
        ["color", "number", "int"],
      ],
    ],
  ],
  [
    "chatInvitePeek",
    [
      0x61695CB0,
      [
        ["chat", "Chat", "Chat"],
        ["expires", "number", "int"],
      ],
    ],
  ],
  [
    "inputStickerSetEmpty",
    [
      0xFFB62B95,
      [],
    ],
  ],
  [
    "inputStickerSetID",
    [
      0x9DE7A269,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputStickerSetShortName",
    [
      0x861CC8A0,
      [
        ["short_name", "string", "string"],
      ],
    ],
  ],
  [
    "inputStickerSetAnimatedEmoji",
    [
      0x028703C8,
      [],
    ],
  ],
  [
    "inputStickerSetDice",
    [
      0xE67F520E,
      [
        ["emoticon", "string", "string"],
      ],
    ],
  ],
  [
    "inputStickerSetAnimatedEmojiAnimations",
    [
      0x0CDE3739,
      [],
    ],
  ],
  [
    "inputStickerSetPremiumGifts",
    [
      0xC88B3B02,
      [],
    ],
  ],
  [
    "inputStickerSetEmojiGenericAnimations",
    [
      0x04C4D4CE,
      [],
    ],
  ],
  [
    "inputStickerSetEmojiDefaultStatuses",
    [
      0x29D0F5EE,
      [],
    ],
  ],
  [
    "inputStickerSetEmojiDefaultTopicIcons",
    [
      0x44C1F8E9,
      [],
    ],
  ],
  [
    "inputStickerSetEmojiChannelDefaultStatuses",
    [
      0x49748553,
      [],
    ],
  ],
  [
    "stickerSet",
    [
      0x2DD14EDC,
      [
        ["flags", flags, "#"],
        ["archived", "true", "flags.1?true"],
        ["official", "true", "flags.2?true"],
        ["masks", "true", "flags.3?true"],
        ["emojis", "true", "flags.7?true"],
        ["text_color", "true", "flags.9?true"],
        ["channel_emoji_status", "true", "flags.10?true"],
        ["creator", "true", "flags.11?true"],
        ["installed_date", "number", "flags.0?int"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["title", "string", "string"],
        ["short_name", "string", "string"],
        ["thumbs", ["PhotoSize"], "flags.4?Vector<PhotoSize>"],
        ["thumb_dc_id", "number", "flags.4?int"],
        ["thumb_version", "number", "flags.4?int"],
        ["thumb_document_id", "bigint", "flags.8?long"],
        ["count", "number", "int"],
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "messages.stickerSet",
    [
      0x6E153F16,
      [
        ["set", "StickerSet", "StickerSet"],
        ["packs", ["StickerPack"], "Vector<StickerPack>"],
        ["keywords", ["StickerKeyword"], "Vector<StickerKeyword>"],
        ["documents", ["Document"], "Vector<Document>"],
      ],
    ],
  ],
  [
    "messages.stickerSetNotModified",
    [
      0xD3F924EB,
      [],
    ],
  ],
  [
    "botCommand",
    [
      0xC27AC8C7,
      [
        ["command", "string", "string"],
        ["description", "string", "string"],
      ],
    ],
  ],
  [
    "botInfo",
    [
      0x8F300B57,
      [
        ["flags", flags, "#"],
        ["user_id", "bigint", "flags.0?long"],
        ["description", "string", "flags.1?string"],
        ["description_photo", "Photo", "flags.4?Photo"],
        ["description_document", "Document", "flags.5?Document"],
        ["commands", ["BotCommand"], "flags.2?Vector<BotCommand>"],
        ["menu_button", "BotMenuButton", "flags.3?BotMenuButton"],
      ],
    ],
  ],
  [
    "keyboardButton",
    [
      0xA2FA4880,
      [
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "keyboardButtonUrl",
    [
      0x258AFF05,
      [
        ["text", "string", "string"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "keyboardButtonCallback",
    [
      0x35BBDB6B,
      [
        ["flags", flags, "#"],
        ["requires_password", "true", "flags.0?true"],
        ["text", "string", "string"],
        ["data", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "keyboardButtonRequestPhone",
    [
      0xB16A6C29,
      [
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "keyboardButtonRequestGeoLocation",
    [
      0xFC796B3F,
      [
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "keyboardButtonSwitchInline",
    [
      0x93B9FBB5,
      [
        ["flags", flags, "#"],
        ["same_peer", "true", "flags.0?true"],
        ["text", "string", "string"],
        ["query", "string", "string"],
        ["peer_types", ["InlineQueryPeerType"], "flags.1?Vector<InlineQueryPeerType>"],
      ],
    ],
  ],
  [
    "keyboardButtonGame",
    [
      0x50F41CCF,
      [
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "keyboardButtonBuy",
    [
      0xAFD93FBB,
      [
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "keyboardButtonUrlAuth",
    [
      0x10B78D29,
      [
        ["flags", flags, "#"],
        ["text", "string", "string"],
        ["fwd_text", "string", "flags.0?string"],
        ["url", "string", "string"],
        ["button_id", "number", "int"],
      ],
    ],
  ],
  [
    "inputKeyboardButtonUrlAuth",
    [
      0xD02E7FD4,
      [
        ["flags", flags, "#"],
        ["request_write_access", "true", "flags.0?true"],
        ["text", "string", "string"],
        ["fwd_text", "string", "flags.1?string"],
        ["url", "string", "string"],
        ["bot", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "keyboardButtonRequestPoll",
    [
      0xBBC7515D,
      [
        ["flags", flags, "#"],
        ["quiz", "boolean", "flags.0?Bool"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "inputKeyboardButtonUserProfile",
    [
      0xE988037B,
      [
        ["text", "string", "string"],
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "keyboardButtonUserProfile",
    [
      0x308660C1,
      [
        ["text", "string", "string"],
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "keyboardButtonWebView",
    [
      0x13767230,
      [
        ["text", "string", "string"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "keyboardButtonSimpleWebView",
    [
      0xA0C0505C,
      [
        ["text", "string", "string"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "keyboardButtonRequestPeer",
    [
      0x53D7BFD8,
      [
        ["text", "string", "string"],
        ["button_id", "number", "int"],
        ["peer_type", "RequestPeerType", "RequestPeerType"],
        ["max_quantity", "number", "int"],
      ],
    ],
  ],
  [
    "inputKeyboardButtonRequestPeer",
    [
      0xC9662D05,
      [
        ["flags", flags, "#"],
        ["name_requested", "true", "flags.0?true"],
        ["username_requested", "true", "flags.1?true"],
        ["photo_requested", "true", "flags.2?true"],
        ["text", "string", "string"],
        ["button_id", "number", "int"],
        ["peer_type", "RequestPeerType", "RequestPeerType"],
        ["max_quantity", "number", "int"],
      ],
    ],
  ],
  [
    "keyboardButtonRow",
    [
      0x77608B83,
      [
        ["buttons", ["KeyboardButton"], "Vector<KeyboardButton>"],
      ],
    ],
  ],
  [
    "replyKeyboardHide",
    [
      0xA03E5B85,
      [
        ["flags", flags, "#"],
        ["selective", "true", "flags.2?true"],
      ],
    ],
  ],
  [
    "replyKeyboardForceReply",
    [
      0x86B40B08,
      [
        ["flags", flags, "#"],
        ["single_use", "true", "flags.1?true"],
        ["selective", "true", "flags.2?true"],
        ["placeholder", "string", "flags.3?string"],
      ],
    ],
  ],
  [
    "replyKeyboardMarkup",
    [
      0x85DD99D1,
      [
        ["flags", flags, "#"],
        ["resize", "true", "flags.0?true"],
        ["single_use", "true", "flags.1?true"],
        ["selective", "true", "flags.2?true"],
        ["persistent", "true", "flags.4?true"],
        ["rows", ["KeyboardButtonRow"], "Vector<KeyboardButtonRow>"],
        ["placeholder", "string", "flags.3?string"],
      ],
    ],
  ],
  [
    "replyInlineMarkup",
    [
      0x48A30254,
      [
        ["rows", ["KeyboardButtonRow"], "Vector<KeyboardButtonRow>"],
      ],
    ],
  ],
  [
    "messageEntityUnknown",
    [
      0xBB92BA95,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityMention",
    [
      0xFA04579D,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityHashtag",
    [
      0x6F635B0D,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityBotCommand",
    [
      0x6CEF8AC7,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityUrl",
    [
      0x6ED02538,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityEmail",
    [
      0x64E475C2,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityBold",
    [
      0xBD610BC9,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityItalic",
    [
      0x826F8B60,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityCode",
    [
      0x28A20571,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityPre",
    [
      0x73924BE0,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
        ["language", "string", "string"],
      ],
    ],
  ],
  [
    "messageEntityTextUrl",
    [
      0x76A6D327,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "messageEntityMentionName",
    [
      0xDC7B1140,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputMessageEntityMentionName",
    [
      0x208E68C9,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "messageEntityPhone",
    [
      0x9B69E34B,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityCashtag",
    [
      0x4C4E743F,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityUnderline",
    [
      0x9C4E7E8B,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityStrike",
    [
      0xBF0693D4,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityBankCard",
    [
      0x761E6AF4,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntitySpoiler",
    [
      0x32CA960F,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messageEntityCustomEmoji",
    [
      0xC8CF05F8,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
        ["document_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messageEntityBlockquote",
    [
      0x020DF5D0,
      [
        ["offset", "number", "int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "inputChannelEmpty",
    [
      0xEE8C1E86,
      [],
    ],
  ],
  [
    "inputChannel",
    [
      0xF35AEC28,
      [
        ["channel_id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputChannelFromMessage",
    [
      0x5B934F9D,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["channel_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "contacts.resolvedPeer",
    [
      0x7F077AD9,
      [
        ["peer", "Peer", "Peer"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messageRange",
    [
      0x0AE30253,
      [
        ["min_id", "number", "int"],
        ["max_id", "number", "int"],
      ],
    ],
  ],
  [
    "updates.channelDifferenceEmpty",
    [
      0x3E11AFFB,
      [
        ["flags", flags, "#"],
        ["final", "true", "flags.0?true"],
        ["pts", "number", "int"],
        ["timeout", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "updates.channelDifferenceTooLong",
    [
      0xA4BCC6FE,
      [
        ["flags", flags, "#"],
        ["final", "true", "flags.0?true"],
        ["timeout", "number", "flags.1?int"],
        ["dialog", "Dialog", "Dialog"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "updates.channelDifference",
    [
      0x2064674E,
      [
        ["flags", flags, "#"],
        ["final", "true", "flags.0?true"],
        ["pts", "number", "int"],
        ["timeout", "number", "flags.1?int"],
        ["new_messages", ["Message"], "Vector<Message>"],
        ["other_updates", ["Update"], "Vector<Update>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "channelMessagesFilterEmpty",
    [
      0x94D42EE7,
      [],
    ],
  ],
  [
    "channelMessagesFilter",
    [
      0xCD77D957,
      [
        ["flags", flags, "#"],
        ["exclude_new_messages", "true", "flags.1?true"],
        ["ranges", ["MessageRange"], "Vector<MessageRange>"],
      ],
    ],
  ],
  [
    "channelParticipant",
    [
      0xC00C07C0,
      [
        ["user_id", "bigint", "long"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "channelParticipantSelf",
    [
      0x35A8BFA7,
      [
        ["flags", flags, "#"],
        ["via_request", "true", "flags.0?true"],
        ["user_id", "bigint", "long"],
        ["inviter_id", "bigint", "long"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "channelParticipantCreator",
    [
      0x2FE601D3,
      [
        ["flags", flags, "#"],
        ["user_id", "bigint", "long"],
        ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
        ["rank", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "channelParticipantAdmin",
    [
      0x34C3BB53,
      [
        ["flags", flags, "#"],
        ["can_edit", "true", "flags.0?true"],
        ["self", "true", "flags.1?true"],
        ["user_id", "bigint", "long"],
        ["inviter_id", "bigint", "flags.1?long"],
        ["promoted_by", "bigint", "long"],
        ["date", "number", "int"],
        ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
        ["rank", "string", "flags.2?string"],
      ],
    ],
  ],
  [
    "channelParticipantBanned",
    [
      0x6DF8014E,
      [
        ["flags", flags, "#"],
        ["left", "true", "flags.0?true"],
        ["peer", "Peer", "Peer"],
        ["kicked_by", "bigint", "long"],
        ["date", "number", "int"],
        ["banned_rights", "ChatBannedRights", "ChatBannedRights"],
      ],
    ],
  ],
  [
    "channelParticipantLeft",
    [
      0x1B03F006,
      [
        ["peer", "Peer", "Peer"],
      ],
    ],
  ],
  [
    "channelParticipantsRecent",
    [
      0xDE3F3C79,
      [],
    ],
  ],
  [
    "channelParticipantsAdmins",
    [
      0xB4608969,
      [],
    ],
  ],
  [
    "channelParticipantsKicked",
    [
      0xA3B54985,
      [
        ["q", "string", "string"],
      ],
    ],
  ],
  [
    "channelParticipantsBots",
    [
      0xB0D1865B,
      [],
    ],
  ],
  [
    "channelParticipantsBanned",
    [
      0x1427A5E1,
      [
        ["q", "string", "string"],
      ],
    ],
  ],
  [
    "channelParticipantsSearch",
    [
      0x0656AC4B,
      [
        ["q", "string", "string"],
      ],
    ],
  ],
  [
    "channelParticipantsContacts",
    [
      0xBB6AE88D,
      [
        ["q", "string", "string"],
      ],
    ],
  ],
  [
    "channelParticipantsMentions",
    [
      0xE04B5CEB,
      [
        ["flags", flags, "#"],
        ["q", "string", "flags.0?string"],
        ["top_msg_id", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "channels.channelParticipants",
    [
      0x9AB0FEAF,
      [
        ["count", "number", "int"],
        ["participants", ["ChannelParticipant"], "Vector<ChannelParticipant>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "channels.channelParticipantsNotModified",
    [
      0xF0173FE9,
      [],
    ],
  ],
  [
    "channels.channelParticipant",
    [
      0xDFB80317,
      [
        ["participant", "ChannelParticipant", "ChannelParticipant"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "help.termsOfService",
    [
      0x780A0310,
      [
        ["flags", flags, "#"],
        ["popup", "true", "flags.0?true"],
        ["id", "DataJSON", "DataJSON"],
        ["text", "string", "string"],
        ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
        ["min_age_confirm", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "messages.savedGifsNotModified",
    [
      0xE8025CA2,
      [],
    ],
  ],
  [
    "messages.savedGifs",
    [
      0x84A02A0D,
      [
        ["hash", "bigint", "long"],
        ["gifs", ["Document"], "Vector<Document>"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageMediaAuto",
    [
      0x3380C786,
      [
        ["flags", flags, "#"],
        ["invert_media", "true", "flags.3?true"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageText",
    [
      0x3DCD7A87,
      [
        ["flags", flags, "#"],
        ["no_webpage", "true", "flags.0?true"],
        ["invert_media", "true", "flags.3?true"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageMediaGeo",
    [
      0x96929A85,
      [
        ["flags", flags, "#"],
        ["geo_point", "InputGeoPoint", "InputGeoPoint"],
        ["heading", "number", "flags.0?int"],
        ["period", "number", "flags.1?int"],
        ["proximity_notification_radius", "number", "flags.3?int"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageMediaVenue",
    [
      0x417BBF11,
      [
        ["flags", flags, "#"],
        ["geo_point", "InputGeoPoint", "InputGeoPoint"],
        ["title", "string", "string"],
        ["address", "string", "string"],
        ["provider", "string", "string"],
        ["venue_id", "string", "string"],
        ["venue_type", "string", "string"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageMediaContact",
    [
      0xA6EDBFFD,
      [
        ["flags", flags, "#"],
        ["phone_number", "string", "string"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
        ["vcard", "string", "string"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageGame",
    [
      0x4B425864,
      [
        ["flags", flags, "#"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageMediaInvoice",
    [
      0xD7E78225,
      [
        ["flags", flags, "#"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["photo", "InputWebDocument", "flags.0?InputWebDocument"],
        ["invoice", "Invoice", "Invoice"],
        ["payload", Uint8Array, "bytes"],
        ["provider", "string", "string"],
        ["provider_data", "DataJSON", "DataJSON"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageMediaWebPage",
    [
      0xBDDCC510,
      [
        ["flags", flags, "#"],
        ["invert_media", "true", "flags.3?true"],
        ["force_large_media", "true", "flags.4?true"],
        ["force_small_media", "true", "flags.5?true"],
        ["optional", "true", "flags.6?true"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["url", "string", "string"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "inputBotInlineResult",
    [
      0x88BF9319,
      [
        ["flags", flags, "#"],
        ["id", "string", "string"],
        ["type", "string", "string"],
        ["title", "string", "flags.1?string"],
        ["description", "string", "flags.2?string"],
        ["url", "string", "flags.3?string"],
        ["thumb", "InputWebDocument", "flags.4?InputWebDocument"],
        ["content", "InputWebDocument", "flags.5?InputWebDocument"],
        ["send_message", "InputBotInlineMessage", "InputBotInlineMessage"],
      ],
    ],
  ],
  [
    "inputBotInlineResultPhoto",
    [
      0xA8D864A7,
      [
        ["id", "string", "string"],
        ["type", "string", "string"],
        ["photo", "InputPhoto", "InputPhoto"],
        ["send_message", "InputBotInlineMessage", "InputBotInlineMessage"],
      ],
    ],
  ],
  [
    "inputBotInlineResultDocument",
    [
      0xFFF8FDC4,
      [
        ["flags", flags, "#"],
        ["id", "string", "string"],
        ["type", "string", "string"],
        ["title", "string", "flags.1?string"],
        ["description", "string", "flags.2?string"],
        ["document", "InputDocument", "InputDocument"],
        ["send_message", "InputBotInlineMessage", "InputBotInlineMessage"],
      ],
    ],
  ],
  [
    "inputBotInlineResultGame",
    [
      0x4FA417F2,
      [
        ["id", "string", "string"],
        ["short_name", "string", "string"],
        ["send_message", "InputBotInlineMessage", "InputBotInlineMessage"],
      ],
    ],
  ],
  [
    "botInlineMessageMediaAuto",
    [
      0x764CF810,
      [
        ["flags", flags, "#"],
        ["invert_media", "true", "flags.3?true"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "botInlineMessageText",
    [
      0x8C7F65E2,
      [
        ["flags", flags, "#"],
        ["no_webpage", "true", "flags.0?true"],
        ["invert_media", "true", "flags.3?true"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "botInlineMessageMediaGeo",
    [
      0x051846FD,
      [
        ["flags", flags, "#"],
        ["geo", "GeoPoint", "GeoPoint"],
        ["heading", "number", "flags.0?int"],
        ["period", "number", "flags.1?int"],
        ["proximity_notification_radius", "number", "flags.3?int"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "botInlineMessageMediaVenue",
    [
      0x8A86659C,
      [
        ["flags", flags, "#"],
        ["geo", "GeoPoint", "GeoPoint"],
        ["title", "string", "string"],
        ["address", "string", "string"],
        ["provider", "string", "string"],
        ["venue_id", "string", "string"],
        ["venue_type", "string", "string"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "botInlineMessageMediaContact",
    [
      0x18D1CDC2,
      [
        ["flags", flags, "#"],
        ["phone_number", "string", "string"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
        ["vcard", "string", "string"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "botInlineMessageMediaInvoice",
    [
      0x354A9B09,
      [
        ["flags", flags, "#"],
        ["shipping_address_requested", "true", "flags.1?true"],
        ["test", "true", "flags.3?true"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["photo", "WebDocument", "flags.0?WebDocument"],
        ["currency", "string", "string"],
        ["total_amount", "bigint", "long"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "botInlineMessageMediaWebPage",
    [
      0x809AD9A6,
      [
        ["flags", flags, "#"],
        ["invert_media", "true", "flags.3?true"],
        ["force_large_media", "true", "flags.4?true"],
        ["force_small_media", "true", "flags.5?true"],
        ["manual", "true", "flags.7?true"],
        ["safe", "true", "flags.8?true"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["url", "string", "string"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
      ],
    ],
  ],
  [
    "botInlineResult",
    [
      0x11965F3A,
      [
        ["flags", flags, "#"],
        ["id", "string", "string"],
        ["type", "string", "string"],
        ["title", "string", "flags.1?string"],
        ["description", "string", "flags.2?string"],
        ["url", "string", "flags.3?string"],
        ["thumb", "WebDocument", "flags.4?WebDocument"],
        ["content", "WebDocument", "flags.5?WebDocument"],
        ["send_message", "BotInlineMessage", "BotInlineMessage"],
      ],
    ],
  ],
  [
    "botInlineMediaResult",
    [
      0x17DB940B,
      [
        ["flags", flags, "#"],
        ["id", "string", "string"],
        ["type", "string", "string"],
        ["photo", "Photo", "flags.0?Photo"],
        ["document", "Document", "flags.1?Document"],
        ["title", "string", "flags.2?string"],
        ["description", "string", "flags.3?string"],
        ["send_message", "BotInlineMessage", "BotInlineMessage"],
      ],
    ],
  ],
  [
    "messages.botResults",
    [
      0xE021F2F6,
      [
        ["flags", flags, "#"],
        ["gallery", "true", "flags.0?true"],
        ["query_id", "bigint", "long"],
        ["next_offset", "string", "flags.1?string"],
        ["switch_pm", "InlineBotSwitchPM", "flags.2?InlineBotSwitchPM"],
        ["switch_webview", "InlineBotWebView", "flags.3?InlineBotWebView"],
        ["results", ["BotInlineResult"], "Vector<BotInlineResult>"],
        ["cache_time", "number", "int"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "exportedMessageLink",
    [
      0x5DAB1AF4,
      [
        ["link", "string", "string"],
        ["html", "string", "string"],
      ],
    ],
  ],
  [
    "messageFwdHeader",
    [
      0x4E4DF4BB,
      [
        ["flags", flags, "#"],
        ["imported", "true", "flags.7?true"],
        ["saved_out", "true", "flags.11?true"],
        ["from_id", "Peer", "flags.0?Peer"],
        ["from_name", "string", "flags.5?string"],
        ["date", "number", "int"],
        ["channel_post", "number", "flags.2?int"],
        ["post_author", "string", "flags.3?string"],
        ["saved_from_peer", "Peer", "flags.4?Peer"],
        ["saved_from_msg_id", "number", "flags.4?int"],
        ["saved_from_id", "Peer", "flags.8?Peer"],
        ["saved_from_name", "string", "flags.9?string"],
        ["saved_date", "number", "flags.10?int"],
        ["psa_type", "string", "flags.6?string"],
      ],
    ],
  ],
  [
    "auth.codeTypeSms",
    [
      0x72A3158C,
      [],
    ],
  ],
  [
    "auth.codeTypeCall",
    [
      0x741CD3E3,
      [],
    ],
  ],
  [
    "auth.codeTypeFlashCall",
    [
      0x226CCEFB,
      [],
    ],
  ],
  [
    "auth.codeTypeMissedCall",
    [
      0xD61AD6EE,
      [],
    ],
  ],
  [
    "auth.codeTypeFragmentSms",
    [
      0x06ED998C,
      [],
    ],
  ],
  [
    "auth.sentCodeTypeApp",
    [
      0x3DBB5986,
      [
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "auth.sentCodeTypeSms",
    [
      0xC000BBA2,
      [
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "auth.sentCodeTypeCall",
    [
      0x5353E5A7,
      [
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "auth.sentCodeTypeFlashCall",
    [
      0xAB03C6D9,
      [
        ["pattern", "string", "string"],
      ],
    ],
  ],
  [
    "auth.sentCodeTypeMissedCall",
    [
      0x82006484,
      [
        ["prefix", "string", "string"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "auth.sentCodeTypeEmailCode",
    [
      0xF450F59B,
      [
        ["flags", flags, "#"],
        ["apple_signin_allowed", "true", "flags.0?true"],
        ["google_signin_allowed", "true", "flags.1?true"],
        ["email_pattern", "string", "string"],
        ["length", "number", "int"],
        ["reset_available_period", "number", "flags.3?int"],
        ["reset_pending_date", "number", "flags.4?int"],
      ],
    ],
  ],
  [
    "auth.sentCodeTypeSetUpEmailRequired",
    [
      0xA5491DEA,
      [
        ["flags", flags, "#"],
        ["apple_signin_allowed", "true", "flags.0?true"],
        ["google_signin_allowed", "true", "flags.1?true"],
      ],
    ],
  ],
  [
    "auth.sentCodeTypeFragmentSms",
    [
      0xD9565C39,
      [
        ["url", "string", "string"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "auth.sentCodeTypeFirebaseSms",
    [
      0xE57B1432,
      [
        ["flags", flags, "#"],
        ["nonce", Uint8Array, "flags.0?bytes"],
        ["receipt", "string", "flags.1?string"],
        ["push_timeout", "number", "flags.1?int"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "messages.botCallbackAnswer",
    [
      0x36585EA4,
      [
        ["flags", flags, "#"],
        ["alert", "true", "flags.1?true"],
        ["has_url", "true", "flags.3?true"],
        ["native_ui", "true", "flags.4?true"],
        ["message", "string", "flags.0?string"],
        ["url", "string", "flags.2?string"],
        ["cache_time", "number", "int"],
      ],
    ],
  ],
  [
    "messages.messageEditData",
    [
      0x26B5DDE6,
      [
        ["flags", flags, "#"],
        ["caption", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageID",
    [
      0x890C3D89,
      [
        ["dc_id", "number", "int"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputBotInlineMessageID64",
    [
      0xB6D915D7,
      [
        ["dc_id", "number", "int"],
        ["owner_id", "bigint", "long"],
        ["id", "number", "int"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inlineBotSwitchPM",
    [
      0x3C20629F,
      [
        ["text", "string", "string"],
        ["start_param", "string", "string"],
      ],
    ],
  ],
  [
    "messages.peerDialogs",
    [
      0x3371C354,
      [
        ["dialogs", ["Dialog"], "Vector<Dialog>"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["state", "updates_State", "updates.State"],
      ],
    ],
  ],
  [
    "topPeer",
    [
      0xEDCDC05B,
      [
        ["peer", "Peer", "Peer"],
        ["rating", "number", "double"],
      ],
    ],
  ],
  [
    "topPeerCategoryBotsPM",
    [
      0xAB661B5B,
      [],
    ],
  ],
  [
    "topPeerCategoryBotsInline",
    [
      0x148677E2,
      [],
    ],
  ],
  [
    "topPeerCategoryCorrespondents",
    [
      0x0637B7ED,
      [],
    ],
  ],
  [
    "topPeerCategoryGroups",
    [
      0xBD17A14A,
      [],
    ],
  ],
  [
    "topPeerCategoryChannels",
    [
      0x161D9628,
      [],
    ],
  ],
  [
    "topPeerCategoryPhoneCalls",
    [
      0x1E76A78C,
      [],
    ],
  ],
  [
    "topPeerCategoryForwardUsers",
    [
      0xA8406CA9,
      [],
    ],
  ],
  [
    "topPeerCategoryForwardChats",
    [
      0xFBEEC0F0,
      [],
    ],
  ],
  [
    "topPeerCategoryPeers",
    [
      0xFB834291,
      [
        ["category", "TopPeerCategory", "TopPeerCategory"],
        ["count", "number", "int"],
        ["peers", ["TopPeer"], "Vector<TopPeer>"],
      ],
    ],
  ],
  [
    "contacts.topPeersNotModified",
    [
      0xDE266EF5,
      [],
    ],
  ],
  [
    "contacts.topPeers",
    [
      0x70B772A8,
      [
        ["categories", ["TopPeerCategoryPeers"], "Vector<TopPeerCategoryPeers>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "contacts.topPeersDisabled",
    [
      0xB52C939D,
      [],
    ],
  ],
  [
    "draftMessageEmpty",
    [
      0x1B0C841A,
      [
        ["flags", flags, "#"],
        ["date", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "draftMessage",
    [
      0x3FCCF7EF,
      [
        ["flags", flags, "#"],
        ["no_webpage", "true", "flags.1?true"],
        ["invert_media", "true", "flags.6?true"],
        ["reply_to", "InputReplyTo", "flags.4?InputReplyTo"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
        ["media", "InputMedia", "flags.5?InputMedia"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "messages.featuredStickersNotModified",
    [
      0xC6DC0C66,
      [
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "messages.featuredStickers",
    [
      0xBE382906,
      [
        ["flags", flags, "#"],
        ["premium", "true", "flags.0?true"],
        ["hash", "bigint", "long"],
        ["count", "number", "int"],
        ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
        ["unread", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messages.recentStickersNotModified",
    [
      0x0B17F890,
      [],
    ],
  ],
  [
    "messages.recentStickers",
    [
      0x88D37C56,
      [
        ["hash", "bigint", "long"],
        ["packs", ["StickerPack"], "Vector<StickerPack>"],
        ["stickers", ["Document"], "Vector<Document>"],
        ["dates", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.archivedStickers",
    [
      0x4FCBA9C8,
      [
        ["count", "number", "int"],
        ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
      ],
    ],
  ],
  [
    "messages.stickerSetInstallResultSuccess",
    [
      0x38641628,
      [],
    ],
  ],
  [
    "messages.stickerSetInstallResultArchive",
    [
      0x35E410A8,
      [
        ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
      ],
    ],
  ],
  [
    "stickerSetCovered",
    [
      0x6410A5D2,
      [
        ["set", "StickerSet", "StickerSet"],
        ["cover", "Document", "Document"],
      ],
    ],
  ],
  [
    "stickerSetMultiCovered",
    [
      0x3407E51B,
      [
        ["set", "StickerSet", "StickerSet"],
        ["covers", ["Document"], "Vector<Document>"],
      ],
    ],
  ],
  [
    "stickerSetFullCovered",
    [
      0x40D13C0E,
      [
        ["set", "StickerSet", "StickerSet"],
        ["packs", ["StickerPack"], "Vector<StickerPack>"],
        ["keywords", ["StickerKeyword"], "Vector<StickerKeyword>"],
        ["documents", ["Document"], "Vector<Document>"],
      ],
    ],
  ],
  [
    "stickerSetNoCovered",
    [
      0x77B15D1C,
      [
        ["set", "StickerSet", "StickerSet"],
      ],
    ],
  ],
  [
    "maskCoords",
    [
      0xAED6DBB2,
      [
        ["n", "number", "int"],
        ["x", "number", "double"],
        ["y", "number", "double"],
        ["zoom", "number", "double"],
      ],
    ],
  ],
  [
    "inputStickeredMediaPhoto",
    [
      0x4A992157,
      [
        ["id", "InputPhoto", "InputPhoto"],
      ],
    ],
  ],
  [
    "inputStickeredMediaDocument",
    [
      0x0438865B,
      [
        ["id", "InputDocument", "InputDocument"],
      ],
    ],
  ],
  [
    "game",
    [
      0xBDF9653B,
      [
        ["flags", flags, "#"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["short_name", "string", "string"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["photo", "Photo", "Photo"],
        ["document", "Document", "flags.0?Document"],
      ],
    ],
  ],
  [
    "inputGameID",
    [
      0x032C3E77,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputGameShortName",
    [
      0xC331E80A,
      [
        ["bot_id", "InputUser", "InputUser"],
        ["short_name", "string", "string"],
      ],
    ],
  ],
  [
    "highScore",
    [
      0x73A379EB,
      [
        ["pos", "number", "int"],
        ["user_id", "bigint", "long"],
        ["score", "number", "int"],
      ],
    ],
  ],
  [
    "messages.highScores",
    [
      0x9A3BFD99,
      [
        ["scores", ["HighScore"], "Vector<HighScore>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "textEmpty",
    [
      0xDC3D824F,
      [],
    ],
  ],
  [
    "textPlain",
    [
      0x744694E0,
      [
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "textBold",
    [
      0x6724ABC4,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "textItalic",
    [
      0xD912A59C,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "textUnderline",
    [
      0xC12622C4,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "textStrike",
    [
      0x9BF8BB95,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "textFixed",
    [
      0x6C3F19B9,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "textUrl",
    [
      0x3C2884C1,
      [
        ["text", "RichText", "RichText"],
        ["url", "string", "string"],
        ["webpage_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "textEmail",
    [
      0xDE5A0DD6,
      [
        ["text", "RichText", "RichText"],
        ["email", "string", "string"],
      ],
    ],
  ],
  [
    "textConcat",
    [
      0x7E6260D7,
      [
        ["texts", ["RichText"], "Vector<RichText>"],
      ],
    ],
  ],
  [
    "textSubscript",
    [
      0xED6A8504,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "textSuperscript",
    [
      0xC7FB5E01,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "textMarked",
    [
      0x034B8621,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "textPhone",
    [
      0x1CCB966A,
      [
        ["text", "RichText", "RichText"],
        ["phone", "string", "string"],
      ],
    ],
  ],
  [
    "textImage",
    [
      0x081CCF4F,
      [
        ["document_id", "bigint", "long"],
        ["w", "number", "int"],
        ["h", "number", "int"],
      ],
    ],
  ],
  [
    "textAnchor",
    [
      0x35553762,
      [
        ["text", "RichText", "RichText"],
        ["name", "string", "string"],
      ],
    ],
  ],
  [
    "pageBlockUnsupported",
    [
      0x13567E8A,
      [],
    ],
  ],
  [
    "pageBlockTitle",
    [
      0x70ABC3FD,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockSubtitle",
    [
      0x8FFA9A1F,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockAuthorDate",
    [
      0xBAAFE5E0,
      [
        ["author", "RichText", "RichText"],
        ["published_date", "number", "int"],
      ],
    ],
  ],
  [
    "pageBlockHeader",
    [
      0xBFD064EC,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockSubheader",
    [
      0xF12BB6E1,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockParagraph",
    [
      0x467A0766,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockPreformatted",
    [
      0xC070D93E,
      [
        ["text", "RichText", "RichText"],
        ["language", "string", "string"],
      ],
    ],
  ],
  [
    "pageBlockFooter",
    [
      0x48870999,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockDivider",
    [
      0xDB20B188,
      [],
    ],
  ],
  [
    "pageBlockAnchor",
    [
      0xCE0D37B0,
      [
        ["name", "string", "string"],
      ],
    ],
  ],
  [
    "pageBlockList",
    [
      0xE4E88011,
      [
        ["items", ["PageListItem"], "Vector<PageListItem>"],
      ],
    ],
  ],
  [
    "pageBlockBlockquote",
    [
      0x263D7C26,
      [
        ["text", "RichText", "RichText"],
        ["caption", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockPullquote",
    [
      0x4F4456D3,
      [
        ["text", "RichText", "RichText"],
        ["caption", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockPhoto",
    [
      0x1759C560,
      [
        ["flags", flags, "#"],
        ["photo_id", "bigint", "long"],
        ["caption", "PageCaption", "PageCaption"],
        ["url", "string", "flags.0?string"],
        ["webpage_id", "bigint", "flags.0?long"],
      ],
    ],
  ],
  [
    "pageBlockVideo",
    [
      0x7C8FE7B6,
      [
        ["flags", flags, "#"],
        ["autoplay", "true", "flags.0?true"],
        ["loop", "true", "flags.1?true"],
        ["video_id", "bigint", "long"],
        ["caption", "PageCaption", "PageCaption"],
      ],
    ],
  ],
  [
    "pageBlockCover",
    [
      0x39F23300,
      [
        ["cover", "PageBlock", "PageBlock"],
      ],
    ],
  ],
  [
    "pageBlockEmbed",
    [
      0xA8718DC5,
      [
        ["flags", flags, "#"],
        ["full_width", "true", "flags.0?true"],
        ["allow_scrolling", "true", "flags.3?true"],
        ["url", "string", "flags.1?string"],
        ["html", "string", "flags.2?string"],
        ["poster_photo_id", "bigint", "flags.4?long"],
        ["w", "number", "flags.5?int"],
        ["h", "number", "flags.5?int"],
        ["caption", "PageCaption", "PageCaption"],
      ],
    ],
  ],
  [
    "pageBlockEmbedPost",
    [
      0xF259A80B,
      [
        ["url", "string", "string"],
        ["webpage_id", "bigint", "long"],
        ["author_photo_id", "bigint", "long"],
        ["author", "string", "string"],
        ["date", "number", "int"],
        ["blocks", ["PageBlock"], "Vector<PageBlock>"],
        ["caption", "PageCaption", "PageCaption"],
      ],
    ],
  ],
  [
    "pageBlockCollage",
    [
      0x65A0FA4D,
      [
        ["items", ["PageBlock"], "Vector<PageBlock>"],
        ["caption", "PageCaption", "PageCaption"],
      ],
    ],
  ],
  [
    "pageBlockSlideshow",
    [
      0x031F9590,
      [
        ["items", ["PageBlock"], "Vector<PageBlock>"],
        ["caption", "PageCaption", "PageCaption"],
      ],
    ],
  ],
  [
    "pageBlockChannel",
    [
      0xEF1751B5,
      [
        ["channel", "Chat", "Chat"],
      ],
    ],
  ],
  [
    "pageBlockAudio",
    [
      0x804361EA,
      [
        ["audio_id", "bigint", "long"],
        ["caption", "PageCaption", "PageCaption"],
      ],
    ],
  ],
  [
    "pageBlockKicker",
    [
      0x1E148390,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockTable",
    [
      0xBF4DEA82,
      [
        ["flags", flags, "#"],
        ["bordered", "true", "flags.0?true"],
        ["striped", "true", "flags.1?true"],
        ["title", "RichText", "RichText"],
        ["rows", ["PageTableRow"], "Vector<PageTableRow>"],
      ],
    ],
  ],
  [
    "pageBlockOrderedList",
    [
      0x9A8AE1E1,
      [
        ["items", ["PageListOrderedItem"], "Vector<PageListOrderedItem>"],
      ],
    ],
  ],
  [
    "pageBlockDetails",
    [
      0x76768BED,
      [
        ["flags", flags, "#"],
        ["open", "true", "flags.0?true"],
        ["blocks", ["PageBlock"], "Vector<PageBlock>"],
        ["title", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageBlockRelatedArticles",
    [
      0x16115A96,
      [
        ["title", "RichText", "RichText"],
        ["articles", ["PageRelatedArticle"], "Vector<PageRelatedArticle>"],
      ],
    ],
  ],
  [
    "pageBlockMap",
    [
      0xA44F3EF6,
      [
        ["geo", "GeoPoint", "GeoPoint"],
        ["zoom", "number", "int"],
        ["w", "number", "int"],
        ["h", "number", "int"],
        ["caption", "PageCaption", "PageCaption"],
      ],
    ],
  ],
  [
    "phoneCallDiscardReasonMissed",
    [
      0x85E42301,
      [],
    ],
  ],
  [
    "phoneCallDiscardReasonDisconnect",
    [
      0xE095C1A0,
      [],
    ],
  ],
  [
    "phoneCallDiscardReasonHangup",
    [
      0x57ADC690,
      [],
    ],
  ],
  [
    "phoneCallDiscardReasonBusy",
    [
      0xFAF7E8C9,
      [],
    ],
  ],
  [
    "dataJSON",
    [
      0x7D748D04,
      [
        ["data", "string", "string"],
      ],
    ],
  ],
  [
    "labeledPrice",
    [
      0xCB296BF8,
      [
        ["label", "string", "string"],
        ["amount", "bigint", "long"],
      ],
    ],
  ],
  [
    "invoice",
    [
      0x5DB95A15,
      [
        ["flags", flags, "#"],
        ["test", "true", "flags.0?true"],
        ["name_requested", "true", "flags.1?true"],
        ["phone_requested", "true", "flags.2?true"],
        ["email_requested", "true", "flags.3?true"],
        ["shipping_address_requested", "true", "flags.4?true"],
        ["flexible", "true", "flags.5?true"],
        ["phone_to_provider", "true", "flags.6?true"],
        ["email_to_provider", "true", "flags.7?true"],
        ["recurring", "true", "flags.9?true"],
        ["currency", "string", "string"],
        ["prices", ["LabeledPrice"], "Vector<LabeledPrice>"],
        ["max_tip_amount", "bigint", "flags.8?long"],
        ["suggested_tip_amounts", ["bigint"], "flags.8?Vector<long>"],
        ["terms_url", "string", "flags.10?string"],
      ],
    ],
  ],
  [
    "paymentCharge",
    [
      0xEA02C27E,
      [
        ["id", "string", "string"],
        ["provider_charge_id", "string", "string"],
      ],
    ],
  ],
  [
    "postAddress",
    [
      0x1E8CAAEB,
      [
        ["street_line1", "string", "string"],
        ["street_line2", "string", "string"],
        ["city", "string", "string"],
        ["state", "string", "string"],
        ["country_iso2", "string", "string"],
        ["post_code", "string", "string"],
      ],
    ],
  ],
  [
    "paymentRequestedInfo",
    [
      0x909C3F94,
      [
        ["flags", flags, "#"],
        ["name", "string", "flags.0?string"],
        ["phone", "string", "flags.1?string"],
        ["email", "string", "flags.2?string"],
        ["shipping_address", "PostAddress", "flags.3?PostAddress"],
      ],
    ],
  ],
  [
    "paymentSavedCredentialsCard",
    [
      0xCDC27A1F,
      [
        ["id", "string", "string"],
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "webDocument",
    [
      0x1C570ED1,
      [
        ["url", "string", "string"],
        ["access_hash", "bigint", "long"],
        ["size", "number", "int"],
        ["mime_type", "string", "string"],
        ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
      ],
    ],
  ],
  [
    "webDocumentNoProxy",
    [
      0xF9C8BCC6,
      [
        ["url", "string", "string"],
        ["size", "number", "int"],
        ["mime_type", "string", "string"],
        ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
      ],
    ],
  ],
  [
    "inputWebDocument",
    [
      0x9BED434D,
      [
        ["url", "string", "string"],
        ["size", "number", "int"],
        ["mime_type", "string", "string"],
        ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
      ],
    ],
  ],
  [
    "inputWebFileLocation",
    [
      0xC239D686,
      [
        ["url", "string", "string"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputWebFileGeoPointLocation",
    [
      0x9F2221C9,
      [
        ["geo_point", "InputGeoPoint", "InputGeoPoint"],
        ["access_hash", "bigint", "long"],
        ["w", "number", "int"],
        ["h", "number", "int"],
        ["zoom", "number", "int"],
        ["scale", "number", "int"],
      ],
    ],
  ],
  [
    "inputWebFileAudioAlbumThumbLocation",
    [
      0xF46FE924,
      [
        ["flags", flags, "#"],
        ["small", "true", "flags.2?true"],
        ["document", "InputDocument", "flags.0?InputDocument"],
        ["title", "string", "flags.1?string"],
        ["performer", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "upload.webFile",
    [
      0x21E753BC,
      [
        ["size", "number", "int"],
        ["mime_type", "string", "string"],
        ["file_type", "storage_FileType", "storage.FileType"],
        ["mtime", "number", "int"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "payments.paymentForm",
    [
      0xA0058751,
      [
        ["flags", flags, "#"],
        ["can_save_credentials", "true", "flags.2?true"],
        ["password_missing", "true", "flags.3?true"],
        ["form_id", "bigint", "long"],
        ["bot_id", "bigint", "long"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["photo", "WebDocument", "flags.5?WebDocument"],
        ["invoice", "Invoice", "Invoice"],
        ["provider_id", "bigint", "long"],
        ["url", "string", "string"],
        ["native_provider", "string", "flags.4?string"],
        ["native_params", "DataJSON", "flags.4?DataJSON"],
        ["additional_methods", ["PaymentFormMethod"], "flags.6?Vector<PaymentFormMethod>"],
        ["saved_info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
        ["saved_credentials", ["PaymentSavedCredentials"], "flags.1?Vector<PaymentSavedCredentials>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "payments.validatedRequestedInfo",
    [
      0xD1451883,
      [
        ["flags", flags, "#"],
        ["id", "string", "flags.0?string"],
        ["shipping_options", ["ShippingOption"], "flags.1?Vector<ShippingOption>"],
      ],
    ],
  ],
  [
    "payments.paymentResult",
    [
      0x4E5F810D,
      [
        ["updates", "Updates", "Updates"],
      ],
    ],
  ],
  [
    "payments.paymentVerificationNeeded",
    [
      0xD8411139,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "payments.paymentReceipt",
    [
      0x70C4FE03,
      [
        ["flags", flags, "#"],
        ["date", "number", "int"],
        ["bot_id", "bigint", "long"],
        ["provider_id", "bigint", "long"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["photo", "WebDocument", "flags.2?WebDocument"],
        ["invoice", "Invoice", "Invoice"],
        ["info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
        ["shipping", "ShippingOption", "flags.1?ShippingOption"],
        ["tip_amount", "bigint", "flags.3?long"],
        ["currency", "string", "string"],
        ["total_amount", "bigint", "long"],
        ["credentials_title", "string", "string"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "payments.savedInfo",
    [
      0xFB8FE43C,
      [
        ["flags", flags, "#"],
        ["has_saved_credentials", "true", "flags.1?true"],
        ["saved_info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
      ],
    ],
  ],
  [
    "inputPaymentCredentialsSaved",
    [
      0xC10EB2CF,
      [
        ["id", "string", "string"],
        ["tmp_password", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "inputPaymentCredentials",
    [
      0x3417D728,
      [
        ["flags", flags, "#"],
        ["save", "true", "flags.0?true"],
        ["data", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "inputPaymentCredentialsApplePay",
    [
      0x0AA1C39F,
      [
        ["payment_data", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "inputPaymentCredentialsGooglePay",
    [
      0x8AC32801,
      [
        ["payment_token", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "account.tmpPassword",
    [
      0xDB64FD34,
      [
        ["tmp_password", Uint8Array, "bytes"],
        ["valid_until", "number", "int"],
      ],
    ],
  ],
  [
    "shippingOption",
    [
      0xB6213CDF,
      [
        ["id", "string", "string"],
        ["title", "string", "string"],
        ["prices", ["LabeledPrice"], "Vector<LabeledPrice>"],
      ],
    ],
  ],
  [
    "inputStickerSetItem",
    [
      0x32DA9E9C,
      [
        ["flags", flags, "#"],
        ["document", "InputDocument", "InputDocument"],
        ["emoji", "string", "string"],
        ["mask_coords", "MaskCoords", "flags.0?MaskCoords"],
        ["keywords", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "inputPhoneCall",
    [
      0x1E36FDED,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "phoneCallEmpty",
    [
      0x5366C915,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "phoneCallWaiting",
    [
      0xC5226F17,
      [
        ["flags", flags, "#"],
        ["video", "true", "flags.6?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["date", "number", "int"],
        ["admin_id", "bigint", "long"],
        ["participant_id", "bigint", "long"],
        ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
        ["receive_date", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "phoneCallRequested",
    [
      0x14B0ED0C,
      [
        ["flags", flags, "#"],
        ["video", "true", "flags.6?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["date", "number", "int"],
        ["admin_id", "bigint", "long"],
        ["participant_id", "bigint", "long"],
        ["g_a_hash", Uint8Array, "bytes"],
        ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
      ],
    ],
  ],
  [
    "phoneCallAccepted",
    [
      0x3660C311,
      [
        ["flags", flags, "#"],
        ["video", "true", "flags.6?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["date", "number", "int"],
        ["admin_id", "bigint", "long"],
        ["participant_id", "bigint", "long"],
        ["g_b", Uint8Array, "bytes"],
        ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
      ],
    ],
  ],
  [
    "phoneCall",
    [
      0x30535AF5,
      [
        ["flags", flags, "#"],
        ["p2p_allowed", "true", "flags.5?true"],
        ["video", "true", "flags.6?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["date", "number", "int"],
        ["admin_id", "bigint", "long"],
        ["participant_id", "bigint", "long"],
        ["g_a_or_b", Uint8Array, "bytes"],
        ["key_fingerprint", "bigint", "long"],
        ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
        ["connections", ["PhoneConnection"], "Vector<PhoneConnection>"],
        ["start_date", "number", "int"],
        ["custom_parameters", "DataJSON", "flags.7?DataJSON"],
      ],
    ],
  ],
  [
    "phoneCallDiscarded",
    [
      0x50CA4DE1,
      [
        ["flags", flags, "#"],
        ["need_rating", "true", "flags.2?true"],
        ["need_debug", "true", "flags.3?true"],
        ["video", "true", "flags.6?true"],
        ["id", "bigint", "long"],
        ["reason", "PhoneCallDiscardReason", "flags.0?PhoneCallDiscardReason"],
        ["duration", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "phoneConnection",
    [
      0x9CC123C7,
      [
        ["flags", flags, "#"],
        ["tcp", "true", "flags.0?true"],
        ["id", "bigint", "long"],
        ["ip", "string", "string"],
        ["ipv6", "string", "string"],
        ["port", "number", "int"],
        ["peer_tag", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "phoneConnectionWebrtc",
    [
      0x635FE375,
      [
        ["flags", flags, "#"],
        ["turn", "true", "flags.0?true"],
        ["stun", "true", "flags.1?true"],
        ["id", "bigint", "long"],
        ["ip", "string", "string"],
        ["ipv6", "string", "string"],
        ["port", "number", "int"],
        ["username", "string", "string"],
        ["password", "string", "string"],
      ],
    ],
  ],
  [
    "phoneCallProtocol",
    [
      0xFC878FC8,
      [
        ["flags", flags, "#"],
        ["udp_p2p", "true", "flags.0?true"],
        ["udp_reflector", "true", "flags.1?true"],
        ["min_layer", "number", "int"],
        ["max_layer", "number", "int"],
        ["library_versions", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "phone.phoneCall",
    [
      0xEC82E140,
      [
        ["phone_call", "PhoneCall", "PhoneCall"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "upload.cdnFileReuploadNeeded",
    [
      0xEEA8E46E,
      [
        ["request_token", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "upload.cdnFile",
    [
      0xA99FCA4F,
      [
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "cdnPublicKey",
    [
      0xC982EABA,
      [
        ["dc_id", "number", "int"],
        ["public_key", "string", "string"],
      ],
    ],
  ],
  [
    "cdnConfig",
    [
      0x5725E40A,
      [
        ["public_keys", ["CdnPublicKey"], "Vector<CdnPublicKey>"],
      ],
    ],
  ],
  [
    "langPackString",
    [
      0xCAD181F6,
      [
        ["key", "string", "string"],
        ["value", "string", "string"],
      ],
    ],
  ],
  [
    "langPackStringPluralized",
    [
      0x6C47AC9F,
      [
        ["flags", flags, "#"],
        ["key", "string", "string"],
        ["zero_value", "string", "flags.0?string"],
        ["one_value", "string", "flags.1?string"],
        ["two_value", "string", "flags.2?string"],
        ["few_value", "string", "flags.3?string"],
        ["many_value", "string", "flags.4?string"],
        ["other_value", "string", "string"],
      ],
    ],
  ],
  [
    "langPackStringDeleted",
    [
      0x2979EEB2,
      [
        ["key", "string", "string"],
      ],
    ],
  ],
  [
    "langPackDifference",
    [
      0xF385C1F6,
      [
        ["lang_code", "string", "string"],
        ["from_version", "number", "int"],
        ["version", "number", "int"],
        ["strings", ["LangPackString"], "Vector<LangPackString>"],
      ],
    ],
  ],
  [
    "langPackLanguage",
    [
      0xEECA5CE3,
      [
        ["flags", flags, "#"],
        ["official", "true", "flags.0?true"],
        ["rtl", "true", "flags.2?true"],
        ["beta", "true", "flags.3?true"],
        ["name", "string", "string"],
        ["native_name", "string", "string"],
        ["lang_code", "string", "string"],
        ["base_lang_code", "string", "flags.1?string"],
        ["plural_code", "string", "string"],
        ["strings_count", "number", "int"],
        ["translated_count", "number", "int"],
        ["translations_url", "string", "string"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeTitle",
    [
      0xE6DFB825,
      [
        ["prev_value", "string", "string"],
        ["new_value", "string", "string"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeAbout",
    [
      0x55188A2E,
      [
        ["prev_value", "string", "string"],
        ["new_value", "string", "string"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeUsername",
    [
      0x6A4AFC38,
      [
        ["prev_value", "string", "string"],
        ["new_value", "string", "string"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangePhoto",
    [
      0x434BD2AF,
      [
        ["prev_photo", "Photo", "Photo"],
        ["new_photo", "Photo", "Photo"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionToggleInvites",
    [
      0x1B7907AE,
      [
        ["new_value", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionToggleSignatures",
    [
      0x26AE0971,
      [
        ["new_value", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionUpdatePinned",
    [
      0xE9E82C18,
      [
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionEditMessage",
    [
      0x709B2405,
      [
        ["prev_message", "Message", "Message"],
        ["new_message", "Message", "Message"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionDeleteMessage",
    [
      0x42E047BB,
      [
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantJoin",
    [
      0x183040D3,
      [],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantLeave",
    [
      0xF89777F2,
      [],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantInvite",
    [
      0xE31C34D8,
      [
        ["participant", "ChannelParticipant", "ChannelParticipant"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantToggleBan",
    [
      0xE6D83D7E,
      [
        ["prev_participant", "ChannelParticipant", "ChannelParticipant"],
        ["new_participant", "ChannelParticipant", "ChannelParticipant"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantToggleAdmin",
    [
      0xD5676710,
      [
        ["prev_participant", "ChannelParticipant", "ChannelParticipant"],
        ["new_participant", "ChannelParticipant", "ChannelParticipant"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeStickerSet",
    [
      0xB1C3CAA7,
      [
        ["prev_stickerset", "InputStickerSet", "InputStickerSet"],
        ["new_stickerset", "InputStickerSet", "InputStickerSet"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionTogglePreHistoryHidden",
    [
      0x5F5C95F1,
      [
        ["new_value", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionDefaultBannedRights",
    [
      0x2DF5FC0A,
      [
        ["prev_banned_rights", "ChatBannedRights", "ChatBannedRights"],
        ["new_banned_rights", "ChatBannedRights", "ChatBannedRights"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionStopPoll",
    [
      0x8F079643,
      [
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeLinkedChat",
    [
      0x050C7AC8,
      [
        ["prev_value", "bigint", "long"],
        ["new_value", "bigint", "long"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeLocation",
    [
      0x0E6B76AE,
      [
        ["prev_value", "ChannelLocation", "ChannelLocation"],
        ["new_value", "ChannelLocation", "ChannelLocation"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionToggleSlowMode",
    [
      0x53909779,
      [
        ["prev_value", "number", "int"],
        ["new_value", "number", "int"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionStartGroupCall",
    [
      0x23209745,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionDiscardGroupCall",
    [
      0xDB9F9140,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantMute",
    [
      0xF92424D2,
      [
        ["participant", "GroupCallParticipant", "GroupCallParticipant"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantUnmute",
    [
      0xE64429C0,
      [
        ["participant", "GroupCallParticipant", "GroupCallParticipant"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionToggleGroupCallSetting",
    [
      0x56D6A247,
      [
        ["join_muted", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantJoinByInvite",
    [
      0xFE9FC158,
      [
        ["flags", flags, "#"],
        ["via_chatlist", "true", "flags.0?true"],
        ["invite", "ExportedChatInvite", "ExportedChatInvite"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionExportedInviteDelete",
    [
      0x5A50FCA4,
      [
        ["invite", "ExportedChatInvite", "ExportedChatInvite"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionExportedInviteRevoke",
    [
      0x410A134E,
      [
        ["invite", "ExportedChatInvite", "ExportedChatInvite"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionExportedInviteEdit",
    [
      0xE90EBB59,
      [
        ["prev_invite", "ExportedChatInvite", "ExportedChatInvite"],
        ["new_invite", "ExportedChatInvite", "ExportedChatInvite"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantVolume",
    [
      0x3E7F6847,
      [
        ["participant", "GroupCallParticipant", "GroupCallParticipant"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeHistoryTTL",
    [
      0x6E941A38,
      [
        ["prev_value", "number", "int"],
        ["new_value", "number", "int"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionParticipantJoinByRequest",
    [
      0xAFB6144A,
      [
        ["invite", "ExportedChatInvite", "ExportedChatInvite"],
        ["approved_by", "bigint", "long"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionToggleNoForwards",
    [
      0xCB2AC766,
      [
        ["new_value", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionSendMessage",
    [
      0x278F2868,
      [
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeAvailableReactions",
    [
      0xBE4E0EF8,
      [
        ["prev_value", "ChatReactions", "ChatReactions"],
        ["new_value", "ChatReactions", "ChatReactions"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeUsernames",
    [
      0xF04FB3A9,
      [
        ["prev_value", ["string"], "Vector<string>"],
        ["new_value", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionToggleForum",
    [
      0x02CC6383,
      [
        ["new_value", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionCreateTopic",
    [
      0x58707D28,
      [
        ["topic", "ForumTopic", "ForumTopic"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionEditTopic",
    [
      0xF06FE208,
      [
        ["prev_topic", "ForumTopic", "ForumTopic"],
        ["new_topic", "ForumTopic", "ForumTopic"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionDeleteTopic",
    [
      0xAE168909,
      [
        ["topic", "ForumTopic", "ForumTopic"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionPinTopic",
    [
      0x5D8D353B,
      [
        ["flags", flags, "#"],
        ["prev_topic", "ForumTopic", "flags.0?ForumTopic"],
        ["new_topic", "ForumTopic", "flags.1?ForumTopic"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionToggleAntiSpam",
    [
      0x64F36DFC,
      [
        ["new_value", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangePeerColor",
    [
      0x5796E780,
      [
        ["prev_value", "PeerColor", "PeerColor"],
        ["new_value", "PeerColor", "PeerColor"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeProfilePeerColor",
    [
      0x5E477B25,
      [
        ["prev_value", "PeerColor", "PeerColor"],
        ["new_value", "PeerColor", "PeerColor"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeWallpaper",
    [
      0x31BB5D52,
      [
        ["prev_value", "WallPaper", "WallPaper"],
        ["new_value", "WallPaper", "WallPaper"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeEmojiStatus",
    [
      0x3EA9FEB1,
      [
        ["prev_value", "EmojiStatus", "EmojiStatus"],
        ["new_value", "EmojiStatus", "EmojiStatus"],
      ],
    ],
  ],
  [
    "channelAdminLogEventActionChangeEmojiStickerSet",
    [
      0x46D840AB,
      [
        ["prev_stickerset", "InputStickerSet", "InputStickerSet"],
        ["new_stickerset", "InputStickerSet", "InputStickerSet"],
      ],
    ],
  ],
  [
    "channelAdminLogEvent",
    [
      0x1FAD68CD,
      [
        ["id", "bigint", "long"],
        ["date", "number", "int"],
        ["user_id", "bigint", "long"],
        ["action", "ChannelAdminLogEventAction", "ChannelAdminLogEventAction"],
      ],
    ],
  ],
  [
    "channels.adminLogResults",
    [
      0xED8AF74D,
      [
        ["events", ["ChannelAdminLogEvent"], "Vector<ChannelAdminLogEvent>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "channelAdminLogEventsFilter",
    [
      0xEA107AE4,
      [
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
        ["group_call", "true", "flags.14?true"],
        ["invites", "true", "flags.15?true"],
        ["send", "true", "flags.16?true"],
        ["forums", "true", "flags.17?true"],
      ],
    ],
  ],
  [
    "popularContact",
    [
      0x5CE14175,
      [
        ["client_id", "bigint", "long"],
        ["importers", "number", "int"],
      ],
    ],
  ],
  [
    "messages.favedStickersNotModified",
    [
      0x9E8FA6D3,
      [],
    ],
  ],
  [
    "messages.favedStickers",
    [
      0x2CB51097,
      [
        ["hash", "bigint", "long"],
        ["packs", ["StickerPack"], "Vector<StickerPack>"],
        ["stickers", ["Document"], "Vector<Document>"],
      ],
    ],
  ],
  [
    "recentMeUrlUnknown",
    [
      0x46E1D13D,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "recentMeUrlUser",
    [
      0xB92C09E2,
      [
        ["url", "string", "string"],
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "recentMeUrlChat",
    [
      0xB2DA71D2,
      [
        ["url", "string", "string"],
        ["chat_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "recentMeUrlChatInvite",
    [
      0xEB49081D,
      [
        ["url", "string", "string"],
        ["chat_invite", "ChatInvite", "ChatInvite"],
      ],
    ],
  ],
  [
    "recentMeUrlStickerSet",
    [
      0xBC0A57DC,
      [
        ["url", "string", "string"],
        ["set", "StickerSetCovered", "StickerSetCovered"],
      ],
    ],
  ],
  [
    "help.recentMeUrls",
    [
      0x0E0310D7,
      [
        ["urls", ["RecentMeUrl"], "Vector<RecentMeUrl>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "inputSingleMedia",
    [
      0x1CC6E91F,
      [
        ["flags", flags, "#"],
        ["media", "InputMedia", "InputMedia"],
        ["random_id", "bigint", "long"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.0?Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "webAuthorization",
    [
      0xA6F8F452,
      [
        ["hash", "bigint", "long"],
        ["bot_id", "bigint", "long"],
        ["domain", "string", "string"],
        ["browser", "string", "string"],
        ["platform", "string", "string"],
        ["date_created", "number", "int"],
        ["date_active", "number", "int"],
        ["ip", "string", "string"],
        ["region", "string", "string"],
      ],
    ],
  ],
  [
    "account.webAuthorizations",
    [
      0xED56C9FC,
      [
        ["authorizations", ["WebAuthorization"], "Vector<WebAuthorization>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "inputMessageID",
    [
      0xA676A322,
      [
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "inputMessageReplyTo",
    [
      0xBAD88395,
      [
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "inputMessagePinned",
    [
      0x86872538,
      [],
    ],
  ],
  [
    "inputMessageCallbackQuery",
    [
      0xACFA1A7E,
      [
        ["id", "number", "int"],
        ["query_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputDialogPeer",
    [
      0xFCAAFEB7,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "inputDialogPeerFolder",
    [
      0x64600527,
      [
        ["folder_id", "number", "int"],
      ],
    ],
  ],
  [
    "dialogPeer",
    [
      0xE56DBF05,
      [
        ["peer", "Peer", "Peer"],
      ],
    ],
  ],
  [
    "dialogPeerFolder",
    [
      0x514519E2,
      [
        ["folder_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.foundStickerSetsNotModified",
    [
      0x0D54B65D,
      [],
    ],
  ],
  [
    "messages.foundStickerSets",
    [
      0x8AF09DD2,
      [
        ["hash", "bigint", "long"],
        ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
      ],
    ],
  ],
  [
    "fileHash",
    [
      0xF39B035C,
      [
        ["offset", "bigint", "long"],
        ["limit", "number", "int"],
        ["hash", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "inputClientProxy",
    [
      0x75588B3F,
      [
        ["address", "string", "string"],
        ["port", "number", "int"],
      ],
    ],
  ],
  [
    "help.termsOfServiceUpdateEmpty",
    [
      0xE3309F7F,
      [
        ["expires", "number", "int"],
      ],
    ],
  ],
  [
    "help.termsOfServiceUpdate",
    [
      0x28ECF961,
      [
        ["expires", "number", "int"],
        ["terms_of_service", "help_TermsOfService", "help.TermsOfService"],
      ],
    ],
  ],
  [
    "inputSecureFileUploaded",
    [
      0x3334B0F0,
      [
        ["id", "bigint", "long"],
        ["parts", "number", "int"],
        ["md5_checksum", "string", "string"],
        ["file_hash", Uint8Array, "bytes"],
        ["secret", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "inputSecureFile",
    [
      0x5367E5BE,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "secureFileEmpty",
    [
      0x64199744,
      [],
    ],
  ],
  [
    "secureFile",
    [
      0x7D09C27E,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["size", "bigint", "long"],
        ["dc_id", "number", "int"],
        ["date", "number", "int"],
        ["file_hash", Uint8Array, "bytes"],
        ["secret", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "secureData",
    [
      0x8AEABEC3,
      [
        ["data", Uint8Array, "bytes"],
        ["data_hash", Uint8Array, "bytes"],
        ["secret", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "securePlainPhone",
    [
      0x7D6099DD,
      [
        ["phone", "string", "string"],
      ],
    ],
  ],
  [
    "securePlainEmail",
    [
      0x21EC5A5F,
      [
        ["email", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueTypePersonalDetails",
    [
      0x9D2A81E3,
      [],
    ],
  ],
  [
    "secureValueTypePassport",
    [
      0x3DAC6A00,
      [],
    ],
  ],
  [
    "secureValueTypeDriverLicense",
    [
      0x06E425C4,
      [],
    ],
  ],
  [
    "secureValueTypeIdentityCard",
    [
      0xA0D0744B,
      [],
    ],
  ],
  [
    "secureValueTypeInternalPassport",
    [
      0x99A48F23,
      [],
    ],
  ],
  [
    "secureValueTypeAddress",
    [
      0xCBE31E26,
      [],
    ],
  ],
  [
    "secureValueTypeUtilityBill",
    [
      0xFC36954E,
      [],
    ],
  ],
  [
    "secureValueTypeBankStatement",
    [
      0x89137C0D,
      [],
    ],
  ],
  [
    "secureValueTypeRentalAgreement",
    [
      0x8B883488,
      [],
    ],
  ],
  [
    "secureValueTypePassportRegistration",
    [
      0x99E3806A,
      [],
    ],
  ],
  [
    "secureValueTypeTemporaryRegistration",
    [
      0xEA02EC33,
      [],
    ],
  ],
  [
    "secureValueTypePhone",
    [
      0xB320AADB,
      [],
    ],
  ],
  [
    "secureValueTypeEmail",
    [
      0x8E3CA7EE,
      [],
    ],
  ],
  [
    "secureValue",
    [
      0x187FA0CA,
      [
        ["flags", flags, "#"],
        ["type", "SecureValueType", "SecureValueType"],
        ["data", "SecureData", "flags.0?SecureData"],
        ["front_side", "SecureFile", "flags.1?SecureFile"],
        ["reverse_side", "SecureFile", "flags.2?SecureFile"],
        ["selfie", "SecureFile", "flags.3?SecureFile"],
        ["translation", ["SecureFile"], "flags.6?Vector<SecureFile>"],
        ["files", ["SecureFile"], "flags.4?Vector<SecureFile>"],
        ["plain_data", "SecurePlainData", "flags.5?SecurePlainData"],
        ["hash", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "inputSecureValue",
    [
      0xDB21D0A7,
      [
        ["flags", flags, "#"],
        ["type", "SecureValueType", "SecureValueType"],
        ["data", "SecureData", "flags.0?SecureData"],
        ["front_side", "InputSecureFile", "flags.1?InputSecureFile"],
        ["reverse_side", "InputSecureFile", "flags.2?InputSecureFile"],
        ["selfie", "InputSecureFile", "flags.3?InputSecureFile"],
        ["translation", ["InputSecureFile"], "flags.6?Vector<InputSecureFile>"],
        ["files", ["InputSecureFile"], "flags.4?Vector<InputSecureFile>"],
        ["plain_data", "SecurePlainData", "flags.5?SecurePlainData"],
      ],
    ],
  ],
  [
    "secureValueHash",
    [
      0xED1ECDB0,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["hash", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "secureValueErrorData",
    [
      0xE8A40BD9,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["data_hash", Uint8Array, "bytes"],
        ["field", "string", "string"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueErrorFrontSide",
    [
      0x00BE3DFA,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["file_hash", Uint8Array, "bytes"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueErrorReverseSide",
    [
      0x868A2AA5,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["file_hash", Uint8Array, "bytes"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueErrorSelfie",
    [
      0xE537CED6,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["file_hash", Uint8Array, "bytes"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueErrorFile",
    [
      0x7A700873,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["file_hash", Uint8Array, "bytes"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueErrorFiles",
    [
      0x666220E9,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["file_hash", [Uint8Array], "Vector<bytes>"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueError",
    [
      0x869D758F,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["hash", Uint8Array, "bytes"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueErrorTranslationFile",
    [
      0xA1144770,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["file_hash", Uint8Array, "bytes"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureValueErrorTranslationFiles",
    [
      0x34636DD8,
      [
        ["type", "SecureValueType", "SecureValueType"],
        ["file_hash", [Uint8Array], "Vector<bytes>"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "secureCredentialsEncrypted",
    [
      0x33F0EA47,
      [
        ["data", Uint8Array, "bytes"],
        ["hash", Uint8Array, "bytes"],
        ["secret", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "account.authorizationForm",
    [
      0xAD2E1CD8,
      [
        ["flags", flags, "#"],
        ["required_types", ["SecureRequiredType"], "Vector<SecureRequiredType>"],
        ["values", ["SecureValue"], "Vector<SecureValue>"],
        ["errors", ["SecureValueError"], "Vector<SecureValueError>"],
        ["users", ["User"], "Vector<User>"],
        ["privacy_policy_url", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "account.sentEmailCode",
    [
      0x811F854F,
      [
        ["email_pattern", "string", "string"],
        ["length", "number", "int"],
      ],
    ],
  ],
  [
    "help.deepLinkInfoEmpty",
    [
      0x66AFA166,
      [],
    ],
  ],
  [
    "help.deepLinkInfo",
    [
      0x6A4EE832,
      [
        ["flags", flags, "#"],
        ["update_app", "true", "flags.0?true"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "savedPhoneContact",
    [
      0x1142BD56,
      [
        ["phone", "string", "string"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "account.takeout",
    [
      0x4DBA4501,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "passwordKdfAlgoUnknown",
    [
      0xD45AB096,
      [],
    ],
  ],
  [
    "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow",
    [
      0x3A912D4A,
      [
        ["salt1", Uint8Array, "bytes"],
        ["salt2", Uint8Array, "bytes"],
        ["g", "number", "int"],
        ["p", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "securePasswordKdfAlgoUnknown",
    [
      0x004A8537,
      [],
    ],
  ],
  [
    "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000",
    [
      0xBBF2DDA0,
      [
        ["salt", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "securePasswordKdfAlgoSHA512",
    [
      0x86471D92,
      [
        ["salt", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "secureSecretSettings",
    [
      0x1527BCAC,
      [
        ["secure_algo", "SecurePasswordKdfAlgo", "SecurePasswordKdfAlgo"],
        ["secure_secret", Uint8Array, "bytes"],
        ["secure_secret_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputCheckPasswordEmpty",
    [
      0x9880F658,
      [],
    ],
  ],
  [
    "inputCheckPasswordSRP",
    [
      0xD27FF082,
      [
        ["srp_id", "bigint", "long"],
        ["A", Uint8Array, "bytes"],
        ["M1", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "secureRequiredType",
    [
      0x829D99DA,
      [
        ["flags", flags, "#"],
        ["native_names", "true", "flags.0?true"],
        ["selfie_required", "true", "flags.1?true"],
        ["translation_required", "true", "flags.2?true"],
        ["type", "SecureValueType", "SecureValueType"],
      ],
    ],
  ],
  [
    "secureRequiredTypeOneOf",
    [
      0x027477B4,
      [
        ["types", ["SecureRequiredType"], "Vector<SecureRequiredType>"],
      ],
    ],
  ],
  [
    "help.passportConfigNotModified",
    [
      0xBFB9F457,
      [],
    ],
  ],
  [
    "help.passportConfig",
    [
      0xA098D6AF,
      [
        ["hash", "number", "int"],
        ["countries_langs", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "inputAppEvent",
    [
      0x1D1B1245,
      [
        ["time", "number", "double"],
        ["type", "string", "string"],
        ["peer", "bigint", "long"],
        ["data", "JSONValue", "JSONValue"],
      ],
    ],
  ],
  [
    "jsonObjectValue",
    [
      0xC0DE1BD9,
      [
        ["key", "string", "string"],
        ["value", "JSONValue", "JSONValue"],
      ],
    ],
  ],
  [
    "jsonNull",
    [
      0x3F6D7B68,
      [],
    ],
  ],
  [
    "jsonBool",
    [
      0xC7345E6A,
      [
        ["value", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "jsonNumber",
    [
      0x2BE0DFA4,
      [
        ["value", "number", "double"],
      ],
    ],
  ],
  [
    "jsonString",
    [
      0xB71E767A,
      [
        ["value", "string", "string"],
      ],
    ],
  ],
  [
    "jsonArray",
    [
      0xF7444763,
      [
        ["value", ["JSONValue"], "Vector<JSONValue>"],
      ],
    ],
  ],
  [
    "jsonObject",
    [
      0x99C1D49D,
      [
        ["value", ["JSONObjectValue"], "Vector<JSONObjectValue>"],
      ],
    ],
  ],
  [
    "pageTableCell",
    [
      0x34566B6A,
      [
        ["flags", flags, "#"],
        ["header", "true", "flags.0?true"],
        ["align_center", "true", "flags.3?true"],
        ["align_right", "true", "flags.4?true"],
        ["valign_middle", "true", "flags.5?true"],
        ["valign_bottom", "true", "flags.6?true"],
        ["text", "RichText", "flags.7?RichText"],
        ["colspan", "number", "flags.1?int"],
        ["rowspan", "number", "flags.2?int"],
      ],
    ],
  ],
  [
    "pageTableRow",
    [
      0xE0C0C5E5,
      [
        ["cells", ["PageTableCell"], "Vector<PageTableCell>"],
      ],
    ],
  ],
  [
    "pageCaption",
    [
      0x6F747657,
      [
        ["text", "RichText", "RichText"],
        ["credit", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageListItemText",
    [
      0xB92FB6CD,
      [
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageListItemBlocks",
    [
      0x25E073FC,
      [
        ["blocks", ["PageBlock"], "Vector<PageBlock>"],
      ],
    ],
  ],
  [
    "pageListOrderedItemText",
    [
      0x5E068047,
      [
        ["num", "string", "string"],
        ["text", "RichText", "RichText"],
      ],
    ],
  ],
  [
    "pageListOrderedItemBlocks",
    [
      0x98DD8936,
      [
        ["num", "string", "string"],
        ["blocks", ["PageBlock"], "Vector<PageBlock>"],
      ],
    ],
  ],
  [
    "pageRelatedArticle",
    [
      0xB390DC08,
      [
        ["flags", flags, "#"],
        ["url", "string", "string"],
        ["webpage_id", "bigint", "long"],
        ["title", "string", "flags.0?string"],
        ["description", "string", "flags.1?string"],
        ["photo_id", "bigint", "flags.2?long"],
        ["author", "string", "flags.3?string"],
        ["published_date", "number", "flags.4?int"],
      ],
    ],
  ],
  [
    "page",
    [
      0x98657F0D,
      [
        ["flags", flags, "#"],
        ["part", "true", "flags.0?true"],
        ["rtl", "true", "flags.1?true"],
        ["v2", "true", "flags.2?true"],
        ["url", "string", "string"],
        ["blocks", ["PageBlock"], "Vector<PageBlock>"],
        ["photos", ["Photo"], "Vector<Photo>"],
        ["documents", ["Document"], "Vector<Document>"],
        ["views", "number", "flags.3?int"],
      ],
    ],
  ],
  [
    "help.supportName",
    [
      0x8C05F1C9,
      [
        ["name", "string", "string"],
      ],
    ],
  ],
  [
    "help.userInfoEmpty",
    [
      0xF3AE2EED,
      [],
    ],
  ],
  [
    "help.userInfo",
    [
      0x01EB3758,
      [
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
        ["author", "string", "string"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "pollAnswer",
    [
      0x6CA9C2E9,
      [
        ["text", "string", "string"],
        ["option", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "poll",
    [
      0x86E18161,
      [
        ["id", "bigint", "long"],
        ["flags", flags, "#"],
        ["closed", "true", "flags.0?true"],
        ["public_voters", "true", "flags.1?true"],
        ["multiple_choice", "true", "flags.2?true"],
        ["quiz", "true", "flags.3?true"],
        ["question", "string", "string"],
        ["answers", ["PollAnswer"], "Vector<PollAnswer>"],
        ["close_period", "number", "flags.4?int"],
        ["close_date", "number", "flags.5?int"],
      ],
    ],
  ],
  [
    "pollAnswerVoters",
    [
      0x3B6DDAD2,
      [
        ["flags", flags, "#"],
        ["chosen", "true", "flags.0?true"],
        ["correct", "true", "flags.1?true"],
        ["option", Uint8Array, "bytes"],
        ["voters", "number", "int"],
      ],
    ],
  ],
  [
    "pollResults",
    [
      0x7ADF2420,
      [
        ["flags", flags, "#"],
        ["min", "true", "flags.0?true"],
        ["results", ["PollAnswerVoters"], "flags.1?Vector<PollAnswerVoters>"],
        ["total_voters", "number", "flags.2?int"],
        ["recent_voters", ["Peer"], "flags.3?Vector<Peer>"],
        ["solution", "string", "flags.4?string"],
        ["solution_entities", ["MessageEntity"], "flags.4?Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "chatOnlines",
    [
      0xF041E250,
      [
        ["onlines", "number", "int"],
      ],
    ],
  ],
  [
    "statsURL",
    [
      0x47A971E0,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "chatAdminRights",
    [
      0x5FB224D5,
      [
        ["flags", flags, "#"],
        ["change_info", "true", "flags.0?true"],
        ["post_messages", "true", "flags.1?true"],
        ["edit_messages", "true", "flags.2?true"],
        ["delete_messages", "true", "flags.3?true"],
        ["ban_users", "true", "flags.4?true"],
        ["invite_users", "true", "flags.5?true"],
        ["pin_messages", "true", "flags.7?true"],
        ["add_admins", "true", "flags.9?true"],
        ["anonymous", "true", "flags.10?true"],
        ["manage_call", "true", "flags.11?true"],
        ["other", "true", "flags.12?true"],
        ["manage_topics", "true", "flags.13?true"],
        ["post_stories", "true", "flags.14?true"],
        ["edit_stories", "true", "flags.15?true"],
        ["delete_stories", "true", "flags.16?true"],
      ],
    ],
  ],
  [
    "chatBannedRights",
    [
      0x9F120418,
      [
        ["flags", flags, "#"],
        ["view_messages", "true", "flags.0?true"],
        ["send_messages", "true", "flags.1?true"],
        ["send_media", "true", "flags.2?true"],
        ["send_stickers", "true", "flags.3?true"],
        ["send_gifs", "true", "flags.4?true"],
        ["send_games", "true", "flags.5?true"],
        ["send_inline", "true", "flags.6?true"],
        ["embed_links", "true", "flags.7?true"],
        ["send_polls", "true", "flags.8?true"],
        ["change_info", "true", "flags.10?true"],
        ["invite_users", "true", "flags.15?true"],
        ["pin_messages", "true", "flags.17?true"],
        ["manage_topics", "true", "flags.18?true"],
        ["send_photos", "true", "flags.19?true"],
        ["send_videos", "true", "flags.20?true"],
        ["send_roundvideos", "true", "flags.21?true"],
        ["send_audios", "true", "flags.22?true"],
        ["send_voices", "true", "flags.23?true"],
        ["send_docs", "true", "flags.24?true"],
        ["send_plain", "true", "flags.25?true"],
        ["until_date", "number", "int"],
      ],
    ],
  ],
  [
    "inputWallPaper",
    [
      0xE630B979,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputWallPaperSlug",
    [
      0x72091C80,
      [
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "inputWallPaperNoFile",
    [
      0x967A462E,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.wallPapersNotModified",
    [
      0x1C199183,
      [],
    ],
  ],
  [
    "account.wallPapers",
    [
      0xCDC3858C,
      [
        ["hash", "bigint", "long"],
        ["wallpapers", ["WallPaper"], "Vector<WallPaper>"],
      ],
    ],
  ],
  [
    "codeSettings",
    [
      0xAD253D78,
      [
        ["flags", flags, "#"],
        ["allow_flashcall", "true", "flags.0?true"],
        ["current_number", "true", "flags.1?true"],
        ["allow_app_hash", "true", "flags.4?true"],
        ["allow_missed_call", "true", "flags.5?true"],
        ["allow_firebase", "true", "flags.7?true"],
        ["logout_tokens", [Uint8Array], "flags.6?Vector<bytes>"],
        ["token", "string", "flags.8?string"],
        ["app_sandbox", "boolean", "flags.8?Bool"],
      ],
    ],
  ],
  [
    "wallPaperSettings",
    [
      0x372EFCD0,
      [
        ["flags", flags, "#"],
        ["blur", "true", "flags.1?true"],
        ["motion", "true", "flags.2?true"],
        ["background_color", "number", "flags.0?int"],
        ["second_background_color", "number", "flags.4?int"],
        ["third_background_color", "number", "flags.5?int"],
        ["fourth_background_color", "number", "flags.6?int"],
        ["intensity", "number", "flags.3?int"],
        ["rotation", "number", "flags.4?int"],
        ["emoticon", "string", "flags.7?string"],
      ],
    ],
  ],
  [
    "autoDownloadSettings",
    [
      0xBAA57628,
      [
        ["flags", flags, "#"],
        ["disabled", "true", "flags.0?true"],
        ["video_preload_large", "true", "flags.1?true"],
        ["audio_preload_next", "true", "flags.2?true"],
        ["phonecalls_less_data", "true", "flags.3?true"],
        ["stories_preload", "true", "flags.4?true"],
        ["photo_size_max", "number", "int"],
        ["video_size_max", "bigint", "long"],
        ["file_size_max", "bigint", "long"],
        ["video_upload_maxbitrate", "number", "int"],
        ["small_queue_active_operations_max", "number", "int"],
        ["large_queue_active_operations_max", "number", "int"],
      ],
    ],
  ],
  [
    "account.autoDownloadSettings",
    [
      0x63CACF26,
      [
        ["low", "AutoDownloadSettings", "AutoDownloadSettings"],
        ["medium", "AutoDownloadSettings", "AutoDownloadSettings"],
        ["high", "AutoDownloadSettings", "AutoDownloadSettings"],
      ],
    ],
  ],
  [
    "emojiKeyword",
    [
      0xD5B3B9F9,
      [
        ["keyword", "string", "string"],
        ["emoticons", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "emojiKeywordDeleted",
    [
      0x236DF622,
      [
        ["keyword", "string", "string"],
        ["emoticons", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "emojiKeywordsDifference",
    [
      0x5CC761BD,
      [
        ["lang_code", "string", "string"],
        ["from_version", "number", "int"],
        ["version", "number", "int"],
        ["keywords", ["EmojiKeyword"], "Vector<EmojiKeyword>"],
      ],
    ],
  ],
  [
    "emojiURL",
    [
      0xA575739D,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "emojiLanguage",
    [
      0xB3FB5361,
      [
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "folder",
    [
      0xFF544E65,
      [
        ["flags", flags, "#"],
        ["autofill_new_broadcasts", "true", "flags.0?true"],
        ["autofill_public_groups", "true", "flags.1?true"],
        ["autofill_new_correspondents", "true", "flags.2?true"],
        ["id", "number", "int"],
        ["title", "string", "string"],
        ["photo", "ChatPhoto", "flags.3?ChatPhoto"],
      ],
    ],
  ],
  [
    "inputFolderPeer",
    [
      0xFBD2C296,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["folder_id", "number", "int"],
      ],
    ],
  ],
  [
    "folderPeer",
    [
      0xE9BAA668,
      [
        ["peer", "Peer", "Peer"],
        ["folder_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.searchCounter",
    [
      0xE844EBFF,
      [
        ["flags", flags, "#"],
        ["inexact", "true", "flags.1?true"],
        ["filter", "MessagesFilter", "MessagesFilter"],
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "urlAuthResultRequest",
    [
      0x92D33A0E,
      [
        ["flags", flags, "#"],
        ["request_write_access", "true", "flags.0?true"],
        ["bot", "User", "User"],
        ["domain", "string", "string"],
      ],
    ],
  ],
  [
    "urlAuthResultAccepted",
    [
      0x8F8C0E4E,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "urlAuthResultDefault",
    [
      0xA9D6DB1F,
      [],
    ],
  ],
  [
    "channelLocationEmpty",
    [
      0xBFB5AD8B,
      [],
    ],
  ],
  [
    "channelLocation",
    [
      0x209B82DB,
      [
        ["geo_point", "GeoPoint", "GeoPoint"],
        ["address", "string", "string"],
      ],
    ],
  ],
  [
    "peerLocated",
    [
      0xCA461B5D,
      [
        ["peer", "Peer", "Peer"],
        ["expires", "number", "int"],
        ["distance", "number", "int"],
      ],
    ],
  ],
  [
    "peerSelfLocated",
    [
      0xF8EC284B,
      [
        ["expires", "number", "int"],
      ],
    ],
  ],
  [
    "restrictionReason",
    [
      0xD072ACB4,
      [
        ["platform", "string", "string"],
        ["reason", "string", "string"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "inputTheme",
    [
      0x3C5693E9,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputThemeSlug",
    [
      0xF5890DF1,
      [
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "theme",
    [
      0xA00E67D6,
      [
        ["flags", flags, "#"],
        ["creator", "true", "flags.0?true"],
        ["default", "true", "flags.1?true"],
        ["for_chat", "true", "flags.5?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["slug", "string", "string"],
        ["title", "string", "string"],
        ["document", "Document", "flags.2?Document"],
        ["settings", ["ThemeSettings"], "flags.3?Vector<ThemeSettings>"],
        ["emoticon", "string", "flags.6?string"],
        ["installs_count", "number", "flags.4?int"],
      ],
    ],
  ],
  [
    "account.themesNotModified",
    [
      0xF41EB622,
      [],
    ],
  ],
  [
    "account.themes",
    [
      0x9A3D8C6D,
      [
        ["hash", "bigint", "long"],
        ["themes", ["Theme"], "Vector<Theme>"],
      ],
    ],
  ],
  [
    "auth.loginToken",
    [
      0x629F1980,
      [
        ["expires", "number", "int"],
        ["token", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "auth.loginTokenMigrateTo",
    [
      0x068E9916,
      [
        ["dc_id", "number", "int"],
        ["token", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "auth.loginTokenSuccess",
    [
      0x390D5C5E,
      [
        ["authorization", "auth_Authorization", "auth.Authorization"],
      ],
    ],
  ],
  [
    "account.contentSettings",
    [
      0x57E28221,
      [
        ["flags", flags, "#"],
        ["sensitive_enabled", "true", "flags.0?true"],
        ["sensitive_can_change", "true", "flags.1?true"],
      ],
    ],
  ],
  [
    "messages.inactiveChats",
    [
      0xA927FEC5,
      [
        ["dates", ["number"], "Vector<int>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "baseThemeClassic",
    [
      0xC3A12462,
      [],
    ],
  ],
  [
    "baseThemeDay",
    [
      0xFBD81688,
      [],
    ],
  ],
  [
    "baseThemeNight",
    [
      0xB7B31EA8,
      [],
    ],
  ],
  [
    "baseThemeTinted",
    [
      0x6D5F77EE,
      [],
    ],
  ],
  [
    "baseThemeArctic",
    [
      0x5B11125A,
      [],
    ],
  ],
  [
    "inputThemeSettings",
    [
      0x8FDE504F,
      [
        ["flags", flags, "#"],
        ["message_colors_animated", "true", "flags.2?true"],
        ["base_theme", "BaseTheme", "BaseTheme"],
        ["accent_color", "number", "int"],
        ["outbox_accent_color", "number", "flags.3?int"],
        ["message_colors", ["number"], "flags.0?Vector<int>"],
        ["wallpaper", "InputWallPaper", "flags.1?InputWallPaper"],
        ["wallpaper_settings", "WallPaperSettings", "flags.1?WallPaperSettings"],
      ],
    ],
  ],
  [
    "themeSettings",
    [
      0xFA58B6D4,
      [
        ["flags", flags, "#"],
        ["message_colors_animated", "true", "flags.2?true"],
        ["base_theme", "BaseTheme", "BaseTheme"],
        ["accent_color", "number", "int"],
        ["outbox_accent_color", "number", "flags.3?int"],
        ["message_colors", ["number"], "flags.0?Vector<int>"],
        ["wallpaper", "WallPaper", "flags.1?WallPaper"],
      ],
    ],
  ],
  [
    "webPageAttributeTheme",
    [
      0x54B56617,
      [
        ["flags", flags, "#"],
        ["documents", ["Document"], "flags.0?Vector<Document>"],
        ["settings", "ThemeSettings", "flags.1?ThemeSettings"],
      ],
    ],
  ],
  [
    "webPageAttributeStory",
    [
      0x2E94C3E7,
      [
        ["flags", flags, "#"],
        ["peer", "Peer", "Peer"],
        ["id", "number", "int"],
        ["story", "StoryItem", "flags.0?StoryItem"],
      ],
    ],
  ],
  [
    "messages.votesList",
    [
      0x4899484E,
      [
        ["flags", flags, "#"],
        ["count", "number", "int"],
        ["votes", ["MessagePeerVote"], "Vector<MessagePeerVote>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["next_offset", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "bankCardOpenUrl",
    [
      0xF568028A,
      [
        ["url", "string", "string"],
        ["name", "string", "string"],
      ],
    ],
  ],
  [
    "payments.bankCardData",
    [
      0x3E24E573,
      [
        ["title", "string", "string"],
        ["open_urls", ["BankCardOpenUrl"], "Vector<BankCardOpenUrl>"],
      ],
    ],
  ],
  [
    "dialogFilter",
    [
      0x5FB5523B,
      [
        ["flags", flags, "#"],
        ["contacts", "true", "flags.0?true"],
        ["non_contacts", "true", "flags.1?true"],
        ["groups", "true", "flags.2?true"],
        ["broadcasts", "true", "flags.3?true"],
        ["bots", "true", "flags.4?true"],
        ["exclude_muted", "true", "flags.11?true"],
        ["exclude_read", "true", "flags.12?true"],
        ["exclude_archived", "true", "flags.13?true"],
        ["id", "number", "int"],
        ["title", "string", "string"],
        ["emoticon", "string", "flags.25?string"],
        ["color", "number", "flags.27?int"],
        ["pinned_peers", ["InputPeer"], "Vector<InputPeer>"],
        ["include_peers", ["InputPeer"], "Vector<InputPeer>"],
        ["exclude_peers", ["InputPeer"], "Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "dialogFilterDefault",
    [
      0x363293AE,
      [],
    ],
  ],
  [
    "dialogFilterChatlist",
    [
      0x9FE28EA4,
      [
        ["flags", flags, "#"],
        ["has_my_invites", "true", "flags.26?true"],
        ["id", "number", "int"],
        ["title", "string", "string"],
        ["emoticon", "string", "flags.25?string"],
        ["color", "number", "flags.27?int"],
        ["pinned_peers", ["InputPeer"], "Vector<InputPeer>"],
        ["include_peers", ["InputPeer"], "Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "dialogFilterSuggested",
    [
      0x77744D4A,
      [
        ["filter", "DialogFilter", "DialogFilter"],
        ["description", "string", "string"],
      ],
    ],
  ],
  [
    "statsDateRangeDays",
    [
      0xB637EDAF,
      [
        ["min_date", "number", "int"],
        ["max_date", "number", "int"],
      ],
    ],
  ],
  [
    "statsAbsValueAndPrev",
    [
      0xCB43ACDE,
      [
        ["current", "number", "double"],
        ["previous", "number", "double"],
      ],
    ],
  ],
  [
    "statsPercentValue",
    [
      0xCBCE2FE0,
      [
        ["part", "number", "double"],
        ["total", "number", "double"],
      ],
    ],
  ],
  [
    "statsGraphAsync",
    [
      0x4A27EB2D,
      [
        ["token", "string", "string"],
      ],
    ],
  ],
  [
    "statsGraphError",
    [
      0xBEDC9822,
      [
        ["error", "string", "string"],
      ],
    ],
  ],
  [
    "statsGraph",
    [
      0x8EA464B6,
      [
        ["flags", flags, "#"],
        ["json", "DataJSON", "DataJSON"],
        ["zoom_token", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "stats.broadcastStats",
    [
      0x396CA5FC,
      [
        ["period", "StatsDateRangeDays", "StatsDateRangeDays"],
        ["followers", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["views_per_post", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["shares_per_post", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["reactions_per_post", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["views_per_story", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["shares_per_story", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["reactions_per_story", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["enabled_notifications", "StatsPercentValue", "StatsPercentValue"],
        ["growth_graph", "StatsGraph", "StatsGraph"],
        ["followers_graph", "StatsGraph", "StatsGraph"],
        ["mute_graph", "StatsGraph", "StatsGraph"],
        ["top_hours_graph", "StatsGraph", "StatsGraph"],
        ["interactions_graph", "StatsGraph", "StatsGraph"],
        ["iv_interactions_graph", "StatsGraph", "StatsGraph"],
        ["views_by_source_graph", "StatsGraph", "StatsGraph"],
        ["new_followers_by_source_graph", "StatsGraph", "StatsGraph"],
        ["languages_graph", "StatsGraph", "StatsGraph"],
        ["reactions_by_emotion_graph", "StatsGraph", "StatsGraph"],
        ["story_interactions_graph", "StatsGraph", "StatsGraph"],
        ["story_reactions_by_emotion_graph", "StatsGraph", "StatsGraph"],
        ["recent_posts_interactions", ["PostInteractionCounters"], "Vector<PostInteractionCounters>"],
      ],
    ],
  ],
  [
    "help.promoDataEmpty",
    [
      0x98F6AC75,
      [
        ["expires", "number", "int"],
      ],
    ],
  ],
  [
    "help.promoData",
    [
      0x8C39793F,
      [
        ["flags", flags, "#"],
        ["proxy", "true", "flags.0?true"],
        ["expires", "number", "int"],
        ["peer", "Peer", "Peer"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["psa_type", "string", "flags.1?string"],
        ["psa_message", "string", "flags.2?string"],
      ],
    ],
  ],
  [
    "videoSize",
    [
      0xDE33B094,
      [
        ["flags", flags, "#"],
        ["type", "string", "string"],
        ["w", "number", "int"],
        ["h", "number", "int"],
        ["size", "number", "int"],
        ["video_start_ts", "number", "flags.0?double"],
      ],
    ],
  ],
  [
    "videoSizeEmojiMarkup",
    [
      0xF85C413C,
      [
        ["emoji_id", "bigint", "long"],
        ["background_colors", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "videoSizeStickerMarkup",
    [
      0x0DA082FE,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["sticker_id", "bigint", "long"],
        ["background_colors", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "statsGroupTopPoster",
    [
      0x9D04AF9B,
      [
        ["user_id", "bigint", "long"],
        ["messages", "number", "int"],
        ["avg_chars", "number", "int"],
      ],
    ],
  ],
  [
    "statsGroupTopAdmin",
    [
      0xD7584C87,
      [
        ["user_id", "bigint", "long"],
        ["deleted", "number", "int"],
        ["kicked", "number", "int"],
        ["banned", "number", "int"],
      ],
    ],
  ],
  [
    "statsGroupTopInviter",
    [
      0x535F779D,
      [
        ["user_id", "bigint", "long"],
        ["invitations", "number", "int"],
      ],
    ],
  ],
  [
    "stats.megagroupStats",
    [
      0xEF7FF916,
      [
        ["period", "StatsDateRangeDays", "StatsDateRangeDays"],
        ["members", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["messages", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["viewers", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["posters", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
        ["growth_graph", "StatsGraph", "StatsGraph"],
        ["members_graph", "StatsGraph", "StatsGraph"],
        ["new_members_by_source_graph", "StatsGraph", "StatsGraph"],
        ["languages_graph", "StatsGraph", "StatsGraph"],
        ["messages_graph", "StatsGraph", "StatsGraph"],
        ["actions_graph", "StatsGraph", "StatsGraph"],
        ["top_hours_graph", "StatsGraph", "StatsGraph"],
        ["weekdays_graph", "StatsGraph", "StatsGraph"],
        ["top_posters", ["StatsGroupTopPoster"], "Vector<StatsGroupTopPoster>"],
        ["top_admins", ["StatsGroupTopAdmin"], "Vector<StatsGroupTopAdmin>"],
        ["top_inviters", ["StatsGroupTopInviter"], "Vector<StatsGroupTopInviter>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "globalPrivacySettings",
    [
      0x734C4CCB,
      [
        ["flags", flags, "#"],
        ["archive_and_mute_new_noncontact_peers", "true", "flags.0?true"],
        ["keep_archived_unmuted", "true", "flags.1?true"],
        ["keep_archived_folders", "true", "flags.2?true"],
        ["hide_read_marks", "true", "flags.3?true"],
        ["new_noncontact_peers_require_premium", "true", "flags.4?true"],
      ],
    ],
  ],
  [
    "help.countryCode",
    [
      0x4203C5EF,
      [
        ["flags", flags, "#"],
        ["country_code", "string", "string"],
        ["prefixes", ["string"], "flags.0?Vector<string>"],
        ["patterns", ["string"], "flags.1?Vector<string>"],
      ],
    ],
  ],
  [
    "help.country",
    [
      0xC3878E23,
      [
        ["flags", flags, "#"],
        ["hidden", "true", "flags.0?true"],
        ["iso2", "string", "string"],
        ["default_name", "string", "string"],
        ["name", "string", "flags.1?string"],
        ["country_codes", ["help_CountryCode"], "Vector<help.CountryCode>"],
      ],
    ],
  ],
  [
    "help.countriesListNotModified",
    [
      0x93CC1F32,
      [],
    ],
  ],
  [
    "help.countriesList",
    [
      0x87D0759E,
      [
        ["countries", ["help_Country"], "Vector<help.Country>"],
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "messageViews",
    [
      0x455B853D,
      [
        ["flags", flags, "#"],
        ["views", "number", "flags.0?int"],
        ["forwards", "number", "flags.1?int"],
        ["replies", "MessageReplies", "flags.2?MessageReplies"],
      ],
    ],
  ],
  [
    "messages.messageViews",
    [
      0xB6C4F543,
      [
        ["views", ["MessageViews"], "Vector<MessageViews>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.discussionMessage",
    [
      0xA6341782,
      [
        ["flags", flags, "#"],
        ["messages", ["Message"], "Vector<Message>"],
        ["max_id", "number", "flags.0?int"],
        ["read_inbox_max_id", "number", "flags.1?int"],
        ["read_outbox_max_id", "number", "flags.2?int"],
        ["unread_count", "number", "int"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messageReplyHeader",
    [
      0xAFBC09DB,
      [
        ["flags", flags, "#"],
        ["reply_to_scheduled", "true", "flags.2?true"],
        ["forum_topic", "true", "flags.3?true"],
        ["quote", "true", "flags.9?true"],
        ["reply_to_msg_id", "number", "flags.4?int"],
        ["reply_to_peer_id", "Peer", "flags.0?Peer"],
        ["reply_from", "MessageFwdHeader", "flags.5?MessageFwdHeader"],
        ["reply_media", "MessageMedia", "flags.8?MessageMedia"],
        ["reply_to_top_id", "number", "flags.1?int"],
        ["quote_text", "string", "flags.6?string"],
        ["quote_entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
        ["quote_offset", "number", "flags.10?int"],
      ],
    ],
  ],
  [
    "messageReplyStoryHeader",
    [
      0x0E5AF939,
      [
        ["peer", "Peer", "Peer"],
        ["story_id", "number", "int"],
      ],
    ],
  ],
  [
    "messageReplies",
    [
      0x83D60FC2,
      [
        ["flags", flags, "#"],
        ["comments", "true", "flags.0?true"],
        ["replies", "number", "int"],
        ["replies_pts", "number", "int"],
        ["recent_repliers", ["Peer"], "flags.1?Vector<Peer>"],
        ["channel_id", "bigint", "flags.0?long"],
        ["max_id", "number", "flags.2?int"],
        ["read_max_id", "number", "flags.3?int"],
      ],
    ],
  ],
  [
    "peerBlocked",
    [
      0xE8FD8014,
      [
        ["peer_id", "Peer", "Peer"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "stats.messageStats",
    [
      0x7FE91C14,
      [
        ["views_graph", "StatsGraph", "StatsGraph"],
        ["reactions_by_emotion_graph", "StatsGraph", "StatsGraph"],
      ],
    ],
  ],
  [
    "groupCallDiscarded",
    [
      0x7780BCB4,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["duration", "number", "int"],
      ],
    ],
  ],
  [
    "groupCall",
    [
      0xD597650C,
      [
        ["flags", flags, "#"],
        ["join_muted", "true", "flags.1?true"],
        ["can_change_join_muted", "true", "flags.2?true"],
        ["join_date_asc", "true", "flags.6?true"],
        ["schedule_start_subscribed", "true", "flags.8?true"],
        ["can_start_video", "true", "flags.9?true"],
        ["record_video_active", "true", "flags.11?true"],
        ["rtmp_stream", "true", "flags.12?true"],
        ["listeners_hidden", "true", "flags.13?true"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["participants_count", "number", "int"],
        ["title", "string", "flags.3?string"],
        ["stream_dc_id", "number", "flags.4?int"],
        ["record_start_date", "number", "flags.5?int"],
        ["schedule_date", "number", "flags.7?int"],
        ["unmuted_video_count", "number", "flags.10?int"],
        ["unmuted_video_limit", "number", "int"],
        ["version", "number", "int"],
      ],
    ],
  ],
  [
    "inputGroupCall",
    [
      0xD8AA840F,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "groupCallParticipant",
    [
      0xEBA636FE,
      [
        ["flags", flags, "#"],
        ["muted", "true", "flags.0?true"],
        ["left", "true", "flags.1?true"],
        ["can_self_unmute", "true", "flags.2?true"],
        ["just_joined", "true", "flags.4?true"],
        ["versioned", "true", "flags.5?true"],
        ["min", "true", "flags.8?true"],
        ["muted_by_you", "true", "flags.9?true"],
        ["volume_by_admin", "true", "flags.10?true"],
        ["self", "true", "flags.12?true"],
        ["video_joined", "true", "flags.15?true"],
        ["peer", "Peer", "Peer"],
        ["date", "number", "int"],
        ["active_date", "number", "flags.3?int"],
        ["source", "number", "int"],
        ["volume", "number", "flags.7?int"],
        ["about", "string", "flags.11?string"],
        ["raise_hand_rating", "bigint", "flags.13?long"],
        ["video", "GroupCallParticipantVideo", "flags.6?GroupCallParticipantVideo"],
        ["presentation", "GroupCallParticipantVideo", "flags.14?GroupCallParticipantVideo"],
      ],
    ],
  ],
  [
    "phone.groupCall",
    [
      0x9E727AAD,
      [
        ["call", "GroupCall", "GroupCall"],
        ["participants", ["GroupCallParticipant"], "Vector<GroupCallParticipant>"],
        ["participants_next_offset", "string", "string"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "phone.groupParticipants",
    [
      0xF47751B6,
      [
        ["count", "number", "int"],
        ["participants", ["GroupCallParticipant"], "Vector<GroupCallParticipant>"],
        ["next_offset", "string", "string"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["version", "number", "int"],
      ],
    ],
  ],
  [
    "inlineQueryPeerTypeSameBotPM",
    [
      0x3081ED9D,
      [],
    ],
  ],
  [
    "inlineQueryPeerTypePM",
    [
      0x833C0FAC,
      [],
    ],
  ],
  [
    "inlineQueryPeerTypeChat",
    [
      0xD766C50A,
      [],
    ],
  ],
  [
    "inlineQueryPeerTypeMegagroup",
    [
      0x5EC4BE43,
      [],
    ],
  ],
  [
    "inlineQueryPeerTypeBroadcast",
    [
      0x6334EE9A,
      [],
    ],
  ],
  [
    "inlineQueryPeerTypeBotPM",
    [
      0x0E3B2D0C,
      [],
    ],
  ],
  [
    "messages.historyImport",
    [
      0x1662AF0B,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.historyImportParsed",
    [
      0x5E0FB7B9,
      [
        ["flags", flags, "#"],
        ["pm", "true", "flags.0?true"],
        ["group", "true", "flags.1?true"],
        ["title", "string", "flags.2?string"],
      ],
    ],
  ],
  [
    "messages.affectedFoundMessages",
    [
      0xEF8D3E6C,
      [
        ["pts", "number", "int"],
        ["pts_count", "number", "int"],
        ["offset", "number", "int"],
        ["messages", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "chatInviteImporter",
    [
      0x8C5ADFD9,
      [
        ["flags", flags, "#"],
        ["requested", "true", "flags.0?true"],
        ["via_chatlist", "true", "flags.3?true"],
        ["user_id", "bigint", "long"],
        ["date", "number", "int"],
        ["about", "string", "flags.2?string"],
        ["approved_by", "bigint", "flags.1?long"],
      ],
    ],
  ],
  [
    "messages.exportedChatInvites",
    [
      0xBDC62DCC,
      [
        ["count", "number", "int"],
        ["invites", ["ExportedChatInvite"], "Vector<ExportedChatInvite>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.exportedChatInvite",
    [
      0x1871BE50,
      [
        ["invite", "ExportedChatInvite", "ExportedChatInvite"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.exportedChatInviteReplaced",
    [
      0x222600EF,
      [
        ["invite", "ExportedChatInvite", "ExportedChatInvite"],
        ["new_invite", "ExportedChatInvite", "ExportedChatInvite"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.chatInviteImporters",
    [
      0x81B6B00A,
      [
        ["count", "number", "int"],
        ["importers", ["ChatInviteImporter"], "Vector<ChatInviteImporter>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "chatAdminWithInvites",
    [
      0xF2ECEF23,
      [
        ["admin_id", "bigint", "long"],
        ["invites_count", "number", "int"],
        ["revoked_invites_count", "number", "int"],
      ],
    ],
  ],
  [
    "messages.chatAdminsWithInvites",
    [
      0xB69B72D7,
      [
        ["admins", ["ChatAdminWithInvites"], "Vector<ChatAdminWithInvites>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.checkedHistoryImportPeer",
    [
      0xA24DE717,
      [
        ["confirm_text", "string", "string"],
      ],
    ],
  ],
  [
    "phone.joinAsPeers",
    [
      0xAFE5623F,
      [
        ["peers", ["Peer"], "Vector<Peer>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "phone.exportedGroupCallInvite",
    [
      0x204BD158,
      [
        ["link", "string", "string"],
      ],
    ],
  ],
  [
    "groupCallParticipantVideoSourceGroup",
    [
      0xDCB118B7,
      [
        ["semantics", "string", "string"],
        ["sources", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "groupCallParticipantVideo",
    [
      0x67753AC8,
      [
        ["flags", flags, "#"],
        ["paused", "true", "flags.0?true"],
        ["endpoint", "string", "string"],
        ["source_groups", ["GroupCallParticipantVideoSourceGroup"], "Vector<GroupCallParticipantVideoSourceGroup>"],
        ["audio_source", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "stickers.suggestedShortName",
    [
      0x85FEA03F,
      [
        ["short_name", "string", "string"],
      ],
    ],
  ],
  [
    "botCommandScopeDefault",
    [
      0x2F6CB2AB,
      [],
    ],
  ],
  [
    "botCommandScopeUsers",
    [
      0x3C4F04D8,
      [],
    ],
  ],
  [
    "botCommandScopeChats",
    [
      0x6FE1A881,
      [],
    ],
  ],
  [
    "botCommandScopeChatAdmins",
    [
      0xB9AA606A,
      [],
    ],
  ],
  [
    "botCommandScopePeer",
    [
      0xDB9D897D,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "botCommandScopePeerAdmins",
    [
      0x3FD863D1,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "botCommandScopePeerUser",
    [
      0x0A1321F3,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "account.resetPasswordFailedWait",
    [
      0xE3779861,
      [
        ["retry_date", "number", "int"],
      ],
    ],
  ],
  [
    "account.resetPasswordRequestedWait",
    [
      0xE9EFFC7D,
      [
        ["until_date", "number", "int"],
      ],
    ],
  ],
  [
    "account.resetPasswordOk",
    [
      0xE926D63E,
      [],
    ],
  ],
  [
    "sponsoredMessage",
    [
      0xED5383F7,
      [
        ["flags", flags, "#"],
        ["recommended", "true", "flags.5?true"],
        ["show_peer_photo", "true", "flags.6?true"],
        ["can_report", "true", "flags.12?true"],
        ["random_id", Uint8Array, "bytes"],
        ["from_id", "Peer", "flags.3?Peer"],
        ["chat_invite", "ChatInvite", "flags.4?ChatInvite"],
        ["chat_invite_hash", "string", "flags.4?string"],
        ["channel_post", "number", "flags.2?int"],
        ["start_param", "string", "flags.0?string"],
        ["webpage", "SponsoredWebPage", "flags.9?SponsoredWebPage"],
        ["app", "BotApp", "flags.10?BotApp"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["button_text", "string", "flags.11?string"],
        ["sponsor_info", "string", "flags.7?string"],
        ["additional_info", "string", "flags.8?string"],
      ],
    ],
  ],
  [
    "messages.sponsoredMessages",
    [
      0xC9EE1D87,
      [
        ["flags", flags, "#"],
        ["posts_between", "number", "flags.0?int"],
        ["messages", ["SponsoredMessage"], "Vector<SponsoredMessage>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.sponsoredMessagesEmpty",
    [
      0x1839490F,
      [],
    ],
  ],
  [
    "searchResultsCalendarPeriod",
    [
      0xC9B0539F,
      [
        ["date", "number", "int"],
        ["min_msg_id", "number", "int"],
        ["max_msg_id", "number", "int"],
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "messages.searchResultsCalendar",
    [
      0x147EE23C,
      [
        ["flags", flags, "#"],
        ["inexact", "true", "flags.0?true"],
        ["count", "number", "int"],
        ["min_date", "number", "int"],
        ["min_msg_id", "number", "int"],
        ["offset_id_offset", "number", "flags.1?int"],
        ["periods", ["SearchResultsCalendarPeriod"], "Vector<SearchResultsCalendarPeriod>"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "searchResultPosition",
    [
      0x7F648B67,
      [
        ["msg_id", "number", "int"],
        ["date", "number", "int"],
        ["offset", "number", "int"],
      ],
    ],
  ],
  [
    "messages.searchResultsPositions",
    [
      0x53B22BAF,
      [
        ["count", "number", "int"],
        ["positions", ["SearchResultsPosition"], "Vector<SearchResultsPosition>"],
      ],
    ],
  ],
  [
    "channels.sendAsPeers",
    [
      0xF496B0C6,
      [
        ["peers", ["SendAsPeer"], "Vector<SendAsPeer>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "users.userFull",
    [
      0x3B6D152E,
      [
        ["full_user", "UserFull", "UserFull"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.peerSettings",
    [
      0x6880B94D,
      [
        ["settings", "PeerSettings", "PeerSettings"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "auth.loggedOut",
    [
      0xC3A2835F,
      [
        ["flags", flags, "#"],
        ["future_auth_token", Uint8Array, "flags.0?bytes"],
      ],
    ],
  ],
  [
    "reactionCount",
    [
      0xA3D1CB80,
      [
        ["flags", flags, "#"],
        ["chosen_order", "number", "flags.0?int"],
        ["reaction", "Reaction", "Reaction"],
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "messageReactions",
    [
      0x4F2B9479,
      [
        ["flags", flags, "#"],
        ["min", "true", "flags.0?true"],
        ["can_see_list", "true", "flags.2?true"],
        ["reactions_as_tags", "true", "flags.3?true"],
        ["results", ["ReactionCount"], "Vector<ReactionCount>"],
        ["recent_reactions", ["MessagePeerReaction"], "flags.1?Vector<MessagePeerReaction>"],
      ],
    ],
  ],
  [
    "messages.messageReactionsList",
    [
      0x31BD492D,
      [
        ["flags", flags, "#"],
        ["count", "number", "int"],
        ["reactions", ["MessagePeerReaction"], "Vector<MessagePeerReaction>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["next_offset", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "availableReaction",
    [
      0xC077EC01,
      [
        ["flags", flags, "#"],
        ["inactive", "true", "flags.0?true"],
        ["premium", "true", "flags.2?true"],
        ["reaction", "string", "string"],
        ["title", "string", "string"],
        ["static_icon", "Document", "Document"],
        ["appear_animation", "Document", "Document"],
        ["select_animation", "Document", "Document"],
        ["activate_animation", "Document", "Document"],
        ["effect_animation", "Document", "Document"],
        ["around_animation", "Document", "flags.1?Document"],
        ["center_icon", "Document", "flags.1?Document"],
      ],
    ],
  ],
  [
    "messages.availableReactionsNotModified",
    [
      0x9F071957,
      [],
    ],
  ],
  [
    "messages.availableReactions",
    [
      0x768E3AAD,
      [
        ["hash", "number", "int"],
        ["reactions", ["AvailableReaction"], "Vector<AvailableReaction>"],
      ],
    ],
  ],
  [
    "messagePeerReaction",
    [
      0x8C79B63C,
      [
        ["flags", flags, "#"],
        ["big", "true", "flags.0?true"],
        ["unread", "true", "flags.1?true"],
        ["my", "true", "flags.2?true"],
        ["peer_id", "Peer", "Peer"],
        ["date", "number", "int"],
        ["reaction", "Reaction", "Reaction"],
      ],
    ],
  ],
  [
    "groupCallStreamChannel",
    [
      0x80EB48AF,
      [
        ["channel", "number", "int"],
        ["scale", "number", "int"],
        ["last_timestamp_ms", "bigint", "long"],
      ],
    ],
  ],
  [
    "phone.groupCallStreamChannels",
    [
      0xD0E482B2,
      [
        ["channels", ["GroupCallStreamChannel"], "Vector<GroupCallStreamChannel>"],
      ],
    ],
  ],
  [
    "phone.groupCallStreamRtmpUrl",
    [
      0x2DBF3432,
      [
        ["url", "string", "string"],
        ["key", "string", "string"],
      ],
    ],
  ],
  [
    "attachMenuBotIconColor",
    [
      0x4576F3F0,
      [
        ["name", "string", "string"],
        ["color", "number", "int"],
      ],
    ],
  ],
  [
    "attachMenuBotIcon",
    [
      0xB2A7386B,
      [
        ["flags", flags, "#"],
        ["name", "string", "string"],
        ["icon", "Document", "Document"],
        ["colors", ["AttachMenuBotIconColor"], "flags.0?Vector<AttachMenuBotIconColor>"],
      ],
    ],
  ],
  [
    "attachMenuBot",
    [
      0xD90D8DFE,
      [
        ["flags", flags, "#"],
        ["inactive", "true", "flags.0?true"],
        ["has_settings", "true", "flags.1?true"],
        ["request_write_access", "true", "flags.2?true"],
        ["show_in_attach_menu", "true", "flags.3?true"],
        ["show_in_side_menu", "true", "flags.4?true"],
        ["side_menu_disclaimer_needed", "true", "flags.5?true"],
        ["bot_id", "bigint", "long"],
        ["short_name", "string", "string"],
        ["peer_types", ["AttachMenuPeerType"], "flags.3?Vector<AttachMenuPeerType>"],
        ["icons", ["AttachMenuBotIcon"], "Vector<AttachMenuBotIcon>"],
      ],
    ],
  ],
  [
    "attachMenuBotsNotModified",
    [
      0xF1D88A5C,
      [],
    ],
  ],
  [
    "attachMenuBots",
    [
      0x3C4301C0,
      [
        ["hash", "bigint", "long"],
        ["bots", ["AttachMenuBot"], "Vector<AttachMenuBot>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "attachMenuBotsBot",
    [
      0x93BF667F,
      [
        ["bot", "AttachMenuBot", "AttachMenuBot"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "webViewResultUrl",
    [
      0x0C14557C,
      [
        ["query_id", "bigint", "long"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "simpleWebViewResultUrl",
    [
      0x882F76BB,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "webViewMessageSent",
    [
      0x0C94511C,
      [
        ["flags", flags, "#"],
        ["msg_id", "InputBotInlineMessageID", "flags.0?InputBotInlineMessageID"],
      ],
    ],
  ],
  [
    "botMenuButtonDefault",
    [
      0x7533A588,
      [],
    ],
  ],
  [
    "botMenuButtonCommands",
    [
      0x4258C205,
      [],
    ],
  ],
  [
    "botMenuButton",
    [
      0xC7B57CE6,
      [
        ["text", "string", "string"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "account.savedRingtonesNotModified",
    [
      0xFBF6E8B1,
      [],
    ],
  ],
  [
    "account.savedRingtones",
    [
      0xC1E92CC5,
      [
        ["hash", "bigint", "long"],
        ["ringtones", ["Document"], "Vector<Document>"],
      ],
    ],
  ],
  [
    "notificationSoundDefault",
    [
      0x97E8BEBE,
      [],
    ],
  ],
  [
    "notificationSoundNone",
    [
      0x6F0C34DF,
      [],
    ],
  ],
  [
    "notificationSoundLocal",
    [
      0x830B9AE4,
      [
        ["title", "string", "string"],
        ["data", "string", "string"],
      ],
    ],
  ],
  [
    "notificationSoundRingtone",
    [
      0xFF6C8049,
      [
        ["id", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.savedRingtone",
    [
      0xB7263F6D,
      [],
    ],
  ],
  [
    "account.savedRingtoneConverted",
    [
      0x1F307EB7,
      [
        ["document", "Document", "Document"],
      ],
    ],
  ],
  [
    "attachMenuPeerTypeSameBotPM",
    [
      0x7D6BE90E,
      [],
    ],
  ],
  [
    "attachMenuPeerTypeBotPM",
    [
      0xC32BFA1A,
      [],
    ],
  ],
  [
    "attachMenuPeerTypePM",
    [
      0xF146D31F,
      [],
    ],
  ],
  [
    "attachMenuPeerTypeChat",
    [
      0x0509113F,
      [],
    ],
  ],
  [
    "attachMenuPeerTypeBroadcast",
    [
      0x7BFBDEFC,
      [],
    ],
  ],
  [
    "inputInvoiceMessage",
    [
      0xC5B56859,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "inputInvoiceSlug",
    [
      0xC326CAEF,
      [
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "inputInvoicePremiumGiftCode",
    [
      0x98986C0D,
      [
        ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
        ["option", "PremiumGiftCodeOption", "PremiumGiftCodeOption"],
      ],
    ],
  ],
  [
    "payments.exportedInvoice",
    [
      0xAED0CBD9,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "messages.transcribedAudio",
    [
      0xCFB9D957,
      [
        ["flags", flags, "#"],
        ["pending", "true", "flags.0?true"],
        ["transcription_id", "bigint", "long"],
        ["text", "string", "string"],
        ["trial_remains_num", "number", "flags.1?int"],
        ["trial_remains_until_date", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "help.premiumPromo",
    [
      0x5334759C,
      [
        ["status_text", "string", "string"],
        ["status_entities", ["MessageEntity"], "Vector<MessageEntity>"],
        ["video_sections", ["string"], "Vector<string>"],
        ["videos", ["Document"], "Vector<Document>"],
        ["period_options", ["PremiumSubscriptionOption"], "Vector<PremiumSubscriptionOption>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "inputStorePaymentPremiumSubscription",
    [
      0xA6751E66,
      [
        ["flags", flags, "#"],
        ["restore", "true", "flags.0?true"],
        ["upgrade", "true", "flags.1?true"],
      ],
    ],
  ],
  [
    "inputStorePaymentGiftPremium",
    [
      0x616F7FE8,
      [
        ["user_id", "InputUser", "InputUser"],
        ["currency", "string", "string"],
        ["amount", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputStorePaymentPremiumGiftCode",
    [
      0xA3805F3F,
      [
        ["flags", flags, "#"],
        ["users", ["InputUser"], "Vector<InputUser>"],
        ["boost_peer", "InputPeer", "flags.0?InputPeer"],
        ["currency", "string", "string"],
        ["amount", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputStorePaymentPremiumGiveaway",
    [
      0x160544CA,
      [
        ["flags", flags, "#"],
        ["only_new_subscribers", "true", "flags.0?true"],
        ["winners_are_visible", "true", "flags.3?true"],
        ["boost_peer", "InputPeer", "InputPeer"],
        ["additional_peers", ["InputPeer"], "flags.1?Vector<InputPeer>"],
        ["countries_iso2", ["string"], "flags.2?Vector<string>"],
        ["prize_description", "string", "flags.4?string"],
        ["random_id", "bigint", "long"],
        ["until_date", "number", "int"],
        ["currency", "string", "string"],
        ["amount", "bigint", "long"],
      ],
    ],
  ],
  [
    "premiumGiftOption",
    [
      0x74C34319,
      [
        ["flags", flags, "#"],
        ["months", "number", "int"],
        ["currency", "string", "string"],
        ["amount", "bigint", "long"],
        ["bot_url", "string", "string"],
        ["store_product", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "paymentFormMethod",
    [
      0x88F8F21B,
      [
        ["url", "string", "string"],
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "emojiStatusEmpty",
    [
      0x2DE11AAE,
      [],
    ],
  ],
  [
    "emojiStatus",
    [
      0x929B619D,
      [
        ["document_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "emojiStatusUntil",
    [
      0xFA30A8C7,
      [
        ["document_id", "bigint", "long"],
        ["until", "number", "int"],
      ],
    ],
  ],
  [
    "account.emojiStatusesNotModified",
    [
      0xD08CE645,
      [],
    ],
  ],
  [
    "account.emojiStatuses",
    [
      0x90C467D1,
      [
        ["hash", "bigint", "long"],
        ["statuses", ["EmojiStatus"], "Vector<EmojiStatus>"],
      ],
    ],
  ],
  [
    "reactionEmpty",
    [
      0x79F5D419,
      [],
    ],
  ],
  [
    "reactionEmoji",
    [
      0x1B2286B8,
      [
        ["emoticon", "string", "string"],
      ],
    ],
  ],
  [
    "reactionCustomEmoji",
    [
      0x8935FC73,
      [
        ["document_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "chatReactionsNone",
    [
      0xEAFC32BC,
      [],
    ],
  ],
  [
    "chatReactionsAll",
    [
      0x52928BCA,
      [
        ["flags", flags, "#"],
        ["allow_custom", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "chatReactionsSome",
    [
      0x661D4037,
      [
        ["reactions", ["Reaction"], "Vector<Reaction>"],
      ],
    ],
  ],
  [
    "messages.reactionsNotModified",
    [
      0xB06FDBDF,
      [],
    ],
  ],
  [
    "messages.reactions",
    [
      0xEAFDF716,
      [
        ["hash", "bigint", "long"],
        ["reactions", ["Reaction"], "Vector<Reaction>"],
      ],
    ],
  ],
  [
    "emailVerifyPurposeLoginSetup",
    [
      0x4345BE73,
      [
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
      ],
    ],
  ],
  [
    "emailVerifyPurposeLoginChange",
    [
      0x527D22EB,
      [],
    ],
  ],
  [
    "emailVerifyPurposePassport",
    [
      0xBBF51685,
      [],
    ],
  ],
  [
    "emailVerificationCode",
    [
      0x922E55A9,
      [
        ["code", "string", "string"],
      ],
    ],
  ],
  [
    "emailVerificationGoogle",
    [
      0xDB909EC2,
      [
        ["token", "string", "string"],
      ],
    ],
  ],
  [
    "emailVerificationApple",
    [
      0x96D074FD,
      [
        ["token", "string", "string"],
      ],
    ],
  ],
  [
    "account.emailVerified",
    [
      0x2B96CD1B,
      [
        ["email", "string", "string"],
      ],
    ],
  ],
  [
    "account.emailVerifiedLogin",
    [
      0xE1BB0D61,
      [
        ["email", "string", "string"],
        ["sent_code", "auth_SentCode", "auth.SentCode"],
      ],
    ],
  ],
  [
    "premiumSubscriptionOption",
    [
      0x5F2D1DF2,
      [
        ["flags", flags, "#"],
        ["current", "true", "flags.1?true"],
        ["can_purchase_upgrade", "true", "flags.2?true"],
        ["transaction", "string", "flags.3?string"],
        ["months", "number", "int"],
        ["currency", "string", "string"],
        ["amount", "bigint", "long"],
        ["bot_url", "string", "string"],
        ["store_product", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "sendAsPeer",
    [
      0xB81C7034,
      [
        ["flags", flags, "#"],
        ["premium_required", "true", "flags.0?true"],
        ["peer", "Peer", "Peer"],
      ],
    ],
  ],
  [
    "messageExtendedMediaPreview",
    [
      0xAD628CC8,
      [
        ["flags", flags, "#"],
        ["w", "number", "flags.0?int"],
        ["h", "number", "flags.0?int"],
        ["thumb", "PhotoSize", "flags.1?PhotoSize"],
        ["video_duration", "number", "flags.2?int"],
      ],
    ],
  ],
  [
    "messageExtendedMedia",
    [
      0xEE479C64,
      [
        ["media", "MessageMedia", "MessageMedia"],
      ],
    ],
  ],
  [
    "stickerKeyword",
    [
      0xFCFEB29C,
      [
        ["document_id", "bigint", "long"],
        ["keyword", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "username",
    [
      0xB4073647,
      [
        ["flags", flags, "#"],
        ["editable", "true", "flags.0?true"],
        ["active", "true", "flags.1?true"],
        ["username", "string", "string"],
      ],
    ],
  ],
  [
    "forumTopicDeleted",
    [
      0x023F109B,
      [
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "forumTopic",
    [
      0x71701DA9,
      [
        ["flags", flags, "#"],
        ["my", "true", "flags.1?true"],
        ["closed", "true", "flags.2?true"],
        ["pinned", "true", "flags.3?true"],
        ["short", "true", "flags.5?true"],
        ["hidden", "true", "flags.6?true"],
        ["id", "number", "int"],
        ["date", "number", "int"],
        ["title", "string", "string"],
        ["icon_color", "number", "int"],
        ["icon_emoji_id", "bigint", "flags.0?long"],
        ["top_message", "number", "int"],
        ["read_inbox_max_id", "number", "int"],
        ["read_outbox_max_id", "number", "int"],
        ["unread_count", "number", "int"],
        ["unread_mentions_count", "number", "int"],
        ["unread_reactions_count", "number", "int"],
        ["from_id", "Peer", "Peer"],
        ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
        ["draft", "DraftMessage", "flags.4?DraftMessage"],
      ],
    ],
  ],
  [
    "messages.forumTopics",
    [
      0x367617D3,
      [
        ["flags", flags, "#"],
        ["order_by_create_date", "true", "flags.0?true"],
        ["count", "number", "int"],
        ["topics", ["ForumTopic"], "Vector<ForumTopic>"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["pts", "number", "int"],
      ],
    ],
  ],
  [
    "defaultHistoryTTL",
    [
      0x43B46B20,
      [
        ["period", "number", "int"],
      ],
    ],
  ],
  [
    "exportedContactToken",
    [
      0x41BF109B,
      [
        ["url", "string", "string"],
        ["expires", "number", "int"],
      ],
    ],
  ],
  [
    "requestPeerTypeUser",
    [
      0x5F3B8A00,
      [
        ["flags", flags, "#"],
        ["bot", "boolean", "flags.0?Bool"],
        ["premium", "boolean", "flags.1?Bool"],
      ],
    ],
  ],
  [
    "requestPeerTypeChat",
    [
      0xC9F06E1B,
      [
        ["flags", flags, "#"],
        ["creator", "true", "flags.0?true"],
        ["bot_participant", "true", "flags.5?true"],
        ["has_username", "boolean", "flags.3?Bool"],
        ["forum", "boolean", "flags.4?Bool"],
        ["user_admin_rights", "ChatAdminRights", "flags.1?ChatAdminRights"],
        ["bot_admin_rights", "ChatAdminRights", "flags.2?ChatAdminRights"],
      ],
    ],
  ],
  [
    "requestPeerTypeBroadcast",
    [
      0x339BEF6C,
      [
        ["flags", flags, "#"],
        ["creator", "true", "flags.0?true"],
        ["has_username", "boolean", "flags.3?Bool"],
        ["user_admin_rights", "ChatAdminRights", "flags.1?ChatAdminRights"],
        ["bot_admin_rights", "ChatAdminRights", "flags.2?ChatAdminRights"],
      ],
    ],
  ],
  [
    "emojiListNotModified",
    [
      0x481EADFA,
      [],
    ],
  ],
  [
    "emojiList",
    [
      0x7A1E11D1,
      [
        ["hash", "bigint", "long"],
        ["document_id", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "emojiGroup",
    [
      0x7A9ABDA9,
      [
        ["title", "string", "string"],
        ["icon_emoji_id", "bigint", "long"],
        ["emoticons", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "messages.emojiGroupsNotModified",
    [
      0x6FB4AD87,
      [],
    ],
  ],
  [
    "messages.emojiGroups",
    [
      0x881FB94B,
      [
        ["hash", "number", "int"],
        ["groups", ["EmojiGroup"], "Vector<EmojiGroup>"],
      ],
    ],
  ],
  [
    "textWithEntities",
    [
      0x751F3146,
      [
        ["text", "string", "string"],
        ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "messages.translateResult",
    [
      0x33DB32F8,
      [
        ["result", ["TextWithEntities"], "Vector<TextWithEntities>"],
      ],
    ],
  ],
  [
    "autoSaveSettings",
    [
      0xC84834CE,
      [
        ["flags", flags, "#"],
        ["photos", "true", "flags.0?true"],
        ["videos", "true", "flags.1?true"],
        ["video_max_size", "bigint", "flags.2?long"],
      ],
    ],
  ],
  [
    "autoSaveException",
    [
      0x81602D47,
      [
        ["peer", "Peer", "Peer"],
        ["settings", "AutoSaveSettings", "AutoSaveSettings"],
      ],
    ],
  ],
  [
    "account.autoSaveSettings",
    [
      0x4C3E069D,
      [
        ["users_settings", "AutoSaveSettings", "AutoSaveSettings"],
        ["chats_settings", "AutoSaveSettings", "AutoSaveSettings"],
        ["broadcasts_settings", "AutoSaveSettings", "AutoSaveSettings"],
        ["exceptions", ["AutoSaveException"], "Vector<AutoSaveException>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "help.appConfigNotModified",
    [
      0x7CDE641D,
      [],
    ],
  ],
  [
    "help.appConfig",
    [
      0xDD18782E,
      [
        ["hash", "number", "int"],
        ["config", "JSONValue", "JSONValue"],
      ],
    ],
  ],
  [
    "inputBotAppID",
    [
      0xA920BD7A,
      [
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "inputBotAppShortName",
    [
      0x908C0407,
      [
        ["bot_id", "InputUser", "InputUser"],
        ["short_name", "string", "string"],
      ],
    ],
  ],
  [
    "botAppNotModified",
    [
      0x5DA674B7,
      [],
    ],
  ],
  [
    "botApp",
    [
      0x95FCD1D6,
      [
        ["flags", flags, "#"],
        ["id", "bigint", "long"],
        ["access_hash", "bigint", "long"],
        ["short_name", "string", "string"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["photo", "Photo", "Photo"],
        ["document", "Document", "flags.0?Document"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.botApp",
    [
      0xEB50ADF5,
      [
        ["flags", flags, "#"],
        ["inactive", "true", "flags.0?true"],
        ["request_write_access", "true", "flags.1?true"],
        ["has_settings", "true", "flags.2?true"],
        ["app", "BotApp", "BotApp"],
      ],
    ],
  ],
  [
    "appWebViewResultUrl",
    [
      0x3C1B4F0D,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "inlineBotWebView",
    [
      0xB57295D5,
      [
        ["text", "string", "string"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "readParticipantDate",
    [
      0x4A4FF172,
      [
        ["user_id", "bigint", "long"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "inputChatlistDialogFilter",
    [
      0xF3E0DA33,
      [
        ["filter_id", "number", "int"],
      ],
    ],
  ],
  [
    "exportedChatlistInvite",
    [
      0x0C5181AC,
      [
        ["flags", flags, "#"],
        ["title", "string", "string"],
        ["url", "string", "string"],
        ["peers", ["Peer"], "Vector<Peer>"],
      ],
    ],
  ],
  [
    "chatlists.exportedChatlistInvite",
    [
      0x10E6E3A6,
      [
        ["filter", "DialogFilter", "DialogFilter"],
        ["invite", "ExportedChatlistInvite", "ExportedChatlistInvite"],
      ],
    ],
  ],
  [
    "chatlists.exportedInvites",
    [
      0x10AB6DC7,
      [
        ["invites", ["ExportedChatlistInvite"], "Vector<ExportedChatlistInvite>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "chatlists.chatlistInviteAlready",
    [
      0xFA87F659,
      [
        ["filter_id", "number", "int"],
        ["missing_peers", ["Peer"], "Vector<Peer>"],
        ["already_peers", ["Peer"], "Vector<Peer>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "chatlists.chatlistInvite",
    [
      0x1DCD839D,
      [
        ["flags", flags, "#"],
        ["title", "string", "string"],
        ["emoticon", "string", "flags.0?string"],
        ["peers", ["Peer"], "Vector<Peer>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "chatlists.chatlistUpdates",
    [
      0x93BD878D,
      [
        ["missing_peers", ["Peer"], "Vector<Peer>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "bots.botInfo",
    [
      0xE8A775B0,
      [
        ["name", "string", "string"],
        ["about", "string", "string"],
        ["description", "string", "string"],
      ],
    ],
  ],
  [
    "messagePeerVote",
    [
      0xB6CC2D5C,
      [
        ["peer", "Peer", "Peer"],
        ["option", Uint8Array, "bytes"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "messagePeerVoteInputOption",
    [
      0x74CDA504,
      [
        ["peer", "Peer", "Peer"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "messagePeerVoteMultiple",
    [
      0x4628F6E6,
      [
        ["peer", "Peer", "Peer"],
        ["options", [Uint8Array], "Vector<bytes>"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "sponsoredWebPage",
    [
      0x3DB8EC63,
      [
        ["flags", flags, "#"],
        ["url", "string", "string"],
        ["site_name", "string", "string"],
        ["photo", "Photo", "flags.0?Photo"],
      ],
    ],
  ],
  [
    "storyViews",
    [
      0x8D595CD6,
      [
        ["flags", flags, "#"],
        ["has_viewers", "true", "flags.1?true"],
        ["views_count", "number", "int"],
        ["forwards_count", "number", "flags.2?int"],
        ["reactions", ["ReactionCount"], "flags.3?Vector<ReactionCount>"],
        ["reactions_count", "number", "flags.4?int"],
        ["recent_viewers", ["bigint"], "flags.0?Vector<long>"],
      ],
    ],
  ],
  [
    "storyItemDeleted",
    [
      0x51E6EE4F,
      [
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "storyItemSkipped",
    [
      0xFFADC913,
      [
        ["flags", flags, "#"],
        ["close_friends", "true", "flags.8?true"],
        ["id", "number", "int"],
        ["date", "number", "int"],
        ["expire_date", "number", "int"],
      ],
    ],
  ],
  [
    "storyItem",
    [
      0x79B26A24,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.5?true"],
        ["public", "true", "flags.7?true"],
        ["close_friends", "true", "flags.8?true"],
        ["min", "true", "flags.9?true"],
        ["noforwards", "true", "flags.10?true"],
        ["edited", "true", "flags.11?true"],
        ["contacts", "true", "flags.12?true"],
        ["selected_contacts", "true", "flags.13?true"],
        ["out", "true", "flags.16?true"],
        ["id", "number", "int"],
        ["date", "number", "int"],
        ["from_id", "Peer", "flags.18?Peer"],
        ["fwd_from", "StoryFwdHeader", "flags.17?StoryFwdHeader"],
        ["expire_date", "number", "int"],
        ["caption", "string", "flags.0?string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["media", "MessageMedia", "MessageMedia"],
        ["media_areas", ["MediaArea"], "flags.14?Vector<MediaArea>"],
        ["privacy", ["PrivacyRule"], "flags.2?Vector<PrivacyRule>"],
        ["views", "StoryViews", "flags.3?StoryViews"],
        ["sent_reaction", "Reaction", "flags.15?Reaction"],
      ],
    ],
  ],
  [
    "stories.allStoriesNotModified",
    [
      0x1158FE3E,
      [
        ["flags", flags, "#"],
        ["state", "string", "string"],
        ["stealth_mode", "StoriesStealthMode", "StoriesStealthMode"],
      ],
    ],
  ],
  [
    "stories.allStories",
    [
      0x6EFC5E81,
      [
        ["flags", flags, "#"],
        ["has_more", "true", "flags.0?true"],
        ["count", "number", "int"],
        ["state", "string", "string"],
        ["peer_stories", ["PeerStories"], "Vector<PeerStories>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["stealth_mode", "StoriesStealthMode", "StoriesStealthMode"],
      ],
    ],
  ],
  [
    "stories.stories",
    [
      0x5DD8C3C8,
      [
        ["count", "number", "int"],
        ["stories", ["StoryItem"], "Vector<StoryItem>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "storyView",
    [
      0xB0BDEAC5,
      [
        ["flags", flags, "#"],
        ["blocked", "true", "flags.0?true"],
        ["blocked_my_stories_from", "true", "flags.1?true"],
        ["user_id", "bigint", "long"],
        ["date", "number", "int"],
        ["reaction", "Reaction", "flags.2?Reaction"],
      ],
    ],
  ],
  [
    "storyViewPublicForward",
    [
      0x9083670B,
      [
        ["flags", flags, "#"],
        ["blocked", "true", "flags.0?true"],
        ["blocked_my_stories_from", "true", "flags.1?true"],
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "storyViewPublicRepost",
    [
      0xBD74CF49,
      [
        ["flags", flags, "#"],
        ["blocked", "true", "flags.0?true"],
        ["blocked_my_stories_from", "true", "flags.1?true"],
        ["peer_id", "Peer", "Peer"],
        ["story", "StoryItem", "StoryItem"],
      ],
    ],
  ],
  [
    "stories.storyViewsList",
    [
      0x59D78FC5,
      [
        ["flags", flags, "#"],
        ["count", "number", "int"],
        ["views_count", "number", "int"],
        ["forwards_count", "number", "int"],
        ["reactions_count", "number", "int"],
        ["views", ["StoryView"], "Vector<StoryView>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["next_offset", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "stories.storyViews",
    [
      0xDE9EED1D,
      [
        ["views", ["StoryViews"], "Vector<StoryViews>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "inputReplyToMessage",
    [
      0x22C0F6D5,
      [
        ["flags", flags, "#"],
        ["reply_to_msg_id", "number", "int"],
        ["top_msg_id", "number", "flags.0?int"],
        ["reply_to_peer_id", "InputPeer", "flags.1?InputPeer"],
        ["quote_text", "string", "flags.2?string"],
        ["quote_entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
        ["quote_offset", "number", "flags.4?int"],
      ],
    ],
  ],
  [
    "inputReplyToStory",
    [
      0x5881323A,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["story_id", "number", "int"],
      ],
    ],
  ],
  [
    "exportedStoryLink",
    [
      0x3FC9053B,
      [
        ["link", "string", "string"],
      ],
    ],
  ],
  [
    "storiesStealthMode",
    [
      0x712E27FD,
      [
        ["flags", flags, "#"],
        ["active_until_date", "number", "flags.0?int"],
        ["cooldown_until_date", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "mediaAreaCoordinates",
    [
      0x03D1EA4E,
      [
        ["x", "number", "double"],
        ["y", "number", "double"],
        ["w", "number", "double"],
        ["h", "number", "double"],
        ["rotation", "number", "double"],
      ],
    ],
  ],
  [
    "mediaAreaVenue",
    [
      0xBE82DB9C,
      [
        ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
        ["geo", "GeoPoint", "GeoPoint"],
        ["title", "string", "string"],
        ["address", "string", "string"],
        ["provider", "string", "string"],
        ["venue_id", "string", "string"],
        ["venue_type", "string", "string"],
      ],
    ],
  ],
  [
    "inputMediaAreaVenue",
    [
      0xB282217F,
      [
        ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
        ["query_id", "bigint", "long"],
        ["result_id", "string", "string"],
      ],
    ],
  ],
  [
    "mediaAreaGeoPoint",
    [
      0xDF8B3B22,
      [
        ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
        ["geo", "GeoPoint", "GeoPoint"],
      ],
    ],
  ],
  [
    "mediaAreaSuggestedReaction",
    [
      0x14455871,
      [
        ["flags", flags, "#"],
        ["dark", "true", "flags.0?true"],
        ["flipped", "true", "flags.1?true"],
        ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
        ["reaction", "Reaction", "Reaction"],
      ],
    ],
  ],
  [
    "mediaAreaChannelPost",
    [
      0x770416AF,
      [
        ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
        ["channel_id", "bigint", "long"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "inputMediaAreaChannelPost",
    [
      0x2271F2BF,
      [
        ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
        ["channel", "InputChannel", "InputChannel"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "peerStories",
    [
      0x9A35E999,
      [
        ["flags", flags, "#"],
        ["peer", "Peer", "Peer"],
        ["max_read_id", "number", "flags.0?int"],
        ["stories", ["StoryItem"], "Vector<StoryItem>"],
      ],
    ],
  ],
  [
    "stories.peerStories",
    [
      0xCAE68768,
      [
        ["stories", "PeerStories", "PeerStories"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.webPage",
    [
      0xFD5E12BD,
      [
        ["webpage", "WebPage", "WebPage"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "premiumGiftCodeOption",
    [
      0x257E962B,
      [
        ["flags", flags, "#"],
        ["users", "number", "int"],
        ["months", "number", "int"],
        ["store_product", "string", "flags.0?string"],
        ["store_quantity", "number", "flags.1?int"],
        ["currency", "string", "string"],
        ["amount", "bigint", "long"],
      ],
    ],
  ],
  [
    "payments.checkedGiftCode",
    [
      0x284A1096,
      [
        ["flags", flags, "#"],
        ["via_giveaway", "true", "flags.2?true"],
        ["from_id", "Peer", "flags.4?Peer"],
        ["giveaway_msg_id", "number", "flags.3?int"],
        ["to_id", "bigint", "flags.0?long"],
        ["date", "number", "int"],
        ["months", "number", "int"],
        ["used_date", "number", "flags.1?int"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "payments.giveawayInfo",
    [
      0x4367DAA0,
      [
        ["flags", flags, "#"],
        ["participating", "true", "flags.0?true"],
        ["preparing_results", "true", "flags.3?true"],
        ["start_date", "number", "int"],
        ["joined_too_early_date", "number", "flags.1?int"],
        ["admin_disallowed_chat_id", "bigint", "flags.2?long"],
        ["disallowed_country", "string", "flags.4?string"],
      ],
    ],
  ],
  [
    "payments.giveawayInfoResults",
    [
      0x00CD5570,
      [
        ["flags", flags, "#"],
        ["winner", "true", "flags.0?true"],
        ["refunded", "true", "flags.1?true"],
        ["start_date", "number", "int"],
        ["gift_code_slug", "string", "flags.0?string"],
        ["finish_date", "number", "int"],
        ["winners_count", "number", "int"],
        ["activated_count", "number", "int"],
      ],
    ],
  ],
  [
    "prepaidGiveaway",
    [
      0xB2539D54,
      [
        ["id", "bigint", "long"],
        ["months", "number", "int"],
        ["quantity", "number", "int"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "boost",
    [
      0x2A1C8C71,
      [
        ["flags", flags, "#"],
        ["gift", "true", "flags.1?true"],
        ["giveaway", "true", "flags.2?true"],
        ["unclaimed", "true", "flags.3?true"],
        ["id", "string", "string"],
        ["user_id", "bigint", "flags.0?long"],
        ["giveaway_msg_id", "number", "flags.2?int"],
        ["date", "number", "int"],
        ["expires", "number", "int"],
        ["used_gift_slug", "string", "flags.4?string"],
        ["multiplier", "number", "flags.5?int"],
      ],
    ],
  ],
  [
    "premium.boostsList",
    [
      0x86F8613C,
      [
        ["flags", flags, "#"],
        ["count", "number", "int"],
        ["boosts", ["Boost"], "Vector<Boost>"],
        ["next_offset", "string", "flags.0?string"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "myBoost",
    [
      0xC448415C,
      [
        ["flags", flags, "#"],
        ["slot", "number", "int"],
        ["peer", "Peer", "flags.0?Peer"],
        ["date", "number", "int"],
        ["expires", "number", "int"],
        ["cooldown_until_date", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "premium.myBoosts",
    [
      0x9AE228E2,
      [
        ["my_boosts", ["MyBoost"], "Vector<MyBoost>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "premium.boostsStatus",
    [
      0x4959427A,
      [
        ["flags", flags, "#"],
        ["my_boost", "true", "flags.2?true"],
        ["level", "number", "int"],
        ["current_level_boosts", "number", "int"],
        ["boosts", "number", "int"],
        ["gift_boosts", "number", "flags.4?int"],
        ["next_level_boosts", "number", "flags.0?int"],
        ["premium_audience", "StatsPercentValue", "flags.1?StatsPercentValue"],
        ["boost_url", "string", "string"],
        ["prepaid_giveaways", ["PrepaidGiveaway"], "flags.3?Vector<PrepaidGiveaway>"],
        ["my_boost_slots", ["number"], "flags.2?Vector<int>"],
      ],
    ],
  ],
  [
    "storyFwdHeader",
    [
      0xB826E150,
      [
        ["flags", flags, "#"],
        ["modified", "true", "flags.3?true"],
        ["from", "Peer", "flags.0?Peer"],
        ["from_name", "string", "flags.1?string"],
        ["story_id", "number", "flags.2?int"],
      ],
    ],
  ],
  [
    "postInteractionCountersMessage",
    [
      0xE7058E7F,
      [
        ["msg_id", "number", "int"],
        ["views", "number", "int"],
        ["forwards", "number", "int"],
        ["reactions", "number", "int"],
      ],
    ],
  ],
  [
    "postInteractionCountersStory",
    [
      0x8A480E27,
      [
        ["story_id", "number", "int"],
        ["views", "number", "int"],
        ["forwards", "number", "int"],
        ["reactions", "number", "int"],
      ],
    ],
  ],
  [
    "stats.storyStats",
    [
      0x50CD067C,
      [
        ["views_graph", "StatsGraph", "StatsGraph"],
        ["reactions_by_emotion_graph", "StatsGraph", "StatsGraph"],
      ],
    ],
  ],
  [
    "publicForwardMessage",
    [
      0x01F2BF4A,
      [
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "publicForwardStory",
    [
      0xEDF3ADD0,
      [
        ["peer", "Peer", "Peer"],
        ["story", "StoryItem", "StoryItem"],
      ],
    ],
  ],
  [
    "stats.publicForwards",
    [
      0x93037E20,
      [
        ["flags", flags, "#"],
        ["count", "number", "int"],
        ["forwards", ["PublicForward"], "Vector<PublicForward>"],
        ["next_offset", "string", "flags.0?string"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "peerColor",
    [
      0xB54B5ACF,
      [
        ["flags", flags, "#"],
        ["color", "number", "flags.0?int"],
        ["background_emoji_id", "bigint", "flags.1?long"],
      ],
    ],
  ],
  [
    "help.peerColorSet",
    [
      0x26219A58,
      [
        ["colors", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "help.peerColorProfileSet",
    [
      0x767D61EB,
      [
        ["palette_colors", ["number"], "Vector<int>"],
        ["bg_colors", ["number"], "Vector<int>"],
        ["story_colors", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "help.peerColorOption",
    [
      0xADEC6EBE,
      [
        ["flags", flags, "#"],
        ["hidden", "true", "flags.0?true"],
        ["color_id", "number", "int"],
        ["colors", "help_PeerColorSet", "flags.1?help.PeerColorSet"],
        ["dark_colors", "help_PeerColorSet", "flags.2?help.PeerColorSet"],
        ["channel_min_level", "number", "flags.3?int"],
        ["group_min_level", "number", "flags.4?int"],
      ],
    ],
  ],
  [
    "help.peerColorsNotModified",
    [
      0x2BA1F5CE,
      [],
    ],
  ],
  [
    "help.peerColors",
    [
      0x00F8ED08,
      [
        ["hash", "number", "int"],
        ["colors", ["help_PeerColorOption"], "Vector<help.PeerColorOption>"],
      ],
    ],
  ],
  [
    "storyReaction",
    [
      0x6090D6D5,
      [
        ["peer_id", "Peer", "Peer"],
        ["date", "number", "int"],
        ["reaction", "Reaction", "Reaction"],
      ],
    ],
  ],
  [
    "storyReactionPublicForward",
    [
      0xBBAB2643,
      [
        ["message", "Message", "Message"],
      ],
    ],
  ],
  [
    "storyReactionPublicRepost",
    [
      0xCFCD0F13,
      [
        ["peer_id", "Peer", "Peer"],
        ["story", "StoryItem", "StoryItem"],
      ],
    ],
  ],
  [
    "stories.storyReactionsList",
    [
      0xAA5F789C,
      [
        ["flags", flags, "#"],
        ["count", "number", "int"],
        ["reactions", ["StoryReaction"], "Vector<StoryReaction>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
        ["next_offset", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "savedDialog",
    [
      0xBD87CB6C,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.2?true"],
        ["peer", "Peer", "Peer"],
        ["top_message", "number", "int"],
      ],
    ],
  ],
  [
    "messages.savedDialogs",
    [
      0xF83AE221,
      [
        ["dialogs", ["SavedDialog"], "Vector<SavedDialog>"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.savedDialogsSlice",
    [
      0x44BA9DD9,
      [
        ["count", "number", "int"],
        ["dialogs", ["SavedDialog"], "Vector<SavedDialog>"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.savedDialogsNotModified",
    [
      0xC01F6FE8,
      [
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "savedReactionTag",
    [
      0xCB6FF828,
      [
        ["flags", flags, "#"],
        ["reaction", "Reaction", "Reaction"],
        ["title", "string", "flags.0?string"],
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "messages.savedReactionTagsNotModified",
    [
      0x889B59EF,
      [],
    ],
  ],
  [
    "messages.savedReactionTags",
    [
      0x3259950A,
      [
        ["tags", ["SavedReactionTag"], "Vector<SavedReactionTag>"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "outboxReadDate",
    [
      0x3BB842AC,
      [
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "smsjobs.eligibleToJoin",
    [
      0xDC8B44CF,
      [
        ["terms_url", "string", "string"],
        ["monthly_sent_sms", "number", "int"],
      ],
    ],
  ],
  [
    "smsjobs.status",
    [
      0x2AEE9191,
      [
        ["flags", flags, "#"],
        ["allow_international", "true", "flags.0?true"],
        ["recent_sent", "number", "int"],
        ["recent_since", "number", "int"],
        ["recent_remains", "number", "int"],
        ["total_sent", "number", "int"],
        ["total_since", "number", "int"],
        ["last_gift_slug", "string", "flags.1?string"],
        ["terms_url", "string", "string"],
      ],
    ],
  ],
  [
    "smsJob",
    [
      0xE6A1EEB8,
      [
        ["job_id", "string", "string"],
        ["phone_number", "string", "string"],
        ["text", "string", "string"],
      ],
    ],
  ],
  [
    "businessWeeklyOpen",
    [
      0x120B1AB9,
      [
        ["start_minute", "number", "int"],
        ["end_minute", "number", "int"],
      ],
    ],
  ],
  [
    "businessWorkHours",
    [
      0x8C92B098,
      [
        ["flags", flags, "#"],
        ["open_now", "true", "flags.0?true"],
        ["timezone_id", "string", "string"],
        ["weekly_open", ["BusinessWeeklyOpen"], "Vector<BusinessWeeklyOpen>"],
      ],
    ],
  ],
  [
    "businessLocation",
    [
      0xAC5C1AF7,
      [
        ["flags", flags, "#"],
        ["geo_point", "GeoPoint", "flags.0?GeoPoint"],
        ["address", "string", "string"],
      ],
    ],
  ],
  [
    "inputBusinessRecipients",
    [
      0x6F8B32AA,
      [
        ["flags", flags, "#"],
        ["existing_chats", "true", "flags.0?true"],
        ["new_chats", "true", "flags.1?true"],
        ["contacts", "true", "flags.2?true"],
        ["non_contacts", "true", "flags.3?true"],
        ["exclude_selected", "true", "flags.5?true"],
        ["users", ["InputUser"], "flags.4?Vector<InputUser>"],
      ],
    ],
  ],
  [
    "businessRecipients",
    [
      0x21108FF7,
      [
        ["flags", flags, "#"],
        ["existing_chats", "true", "flags.0?true"],
        ["new_chats", "true", "flags.1?true"],
        ["contacts", "true", "flags.2?true"],
        ["non_contacts", "true", "flags.3?true"],
        ["exclude_selected", "true", "flags.5?true"],
        ["users", ["bigint"], "flags.4?Vector<long>"],
      ],
    ],
  ],
  [
    "businessAwayMessageScheduleAlways",
    [
      0xC9B9E2B9,
      [],
    ],
  ],
  [
    "businessAwayMessageScheduleOutsideWorkHours",
    [
      0xC3F2F501,
      [],
    ],
  ],
  [
    "businessAwayMessageScheduleCustom",
    [
      0xCC4D9ECC,
      [
        ["start_date", "number", "int"],
        ["end_date", "number", "int"],
      ],
    ],
  ],
  [
    "inputBusinessGreetingMessage",
    [
      0x0194CB3B,
      [
        ["shortcut_id", "number", "int"],
        ["recipients", "InputBusinessRecipients", "InputBusinessRecipients"],
        ["no_activity_days", "number", "int"],
      ],
    ],
  ],
  [
    "businessGreetingMessage",
    [
      0xE519ABAB,
      [
        ["shortcut_id", "number", "int"],
        ["recipients", "BusinessRecipients", "BusinessRecipients"],
        ["no_activity_days", "number", "int"],
      ],
    ],
  ],
  [
    "inputBusinessAwayMessage",
    [
      0x832175E0,
      [
        ["flags", flags, "#"],
        ["offline_only", "true", "flags.0?true"],
        ["shortcut_id", "number", "int"],
        ["schedule", "BusinessAwayMessageSchedule", "BusinessAwayMessageSchedule"],
        ["recipients", "InputBusinessRecipients", "InputBusinessRecipients"],
      ],
    ],
  ],
  [
    "businessAwayMessage",
    [
      0xEF156A5C,
      [
        ["flags", flags, "#"],
        ["offline_only", "true", "flags.0?true"],
        ["shortcut_id", "number", "int"],
        ["schedule", "BusinessAwayMessageSchedule", "BusinessAwayMessageSchedule"],
        ["recipients", "BusinessRecipients", "BusinessRecipients"],
      ],
    ],
  ],
  [
    "timezone",
    [
      0xFF9289F5,
      [
        ["id", "string", "string"],
        ["name", "string", "string"],
        ["utc_offset", "number", "int"],
      ],
    ],
  ],
  [
    "help.timezonesListNotModified",
    [
      0x970708CC,
      [],
    ],
  ],
  [
    "help.timezonesList",
    [
      0x7B74ED71,
      [
        ["timezones", ["Timezone"], "Vector<Timezone>"],
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "quickReply",
    [
      0x0697102B,
      [
        ["shortcut_id", "number", "int"],
        ["shortcut", "string", "string"],
        ["top_message", "number", "int"],
        ["count", "number", "int"],
      ],
    ],
  ],
  [
    "inputQuickReplyShortcut",
    [
      0x24596D41,
      [
        ["shortcut", "string", "string"],
      ],
    ],
  ],
  [
    "inputQuickReplyShortcutId",
    [
      0x01190CF1,
      [
        ["shortcut_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.quickReplies",
    [
      0xC68D6695,
      [
        ["quick_replies", ["QuickReply"], "Vector<QuickReply>"],
        ["messages", ["Message"], "Vector<Message>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.quickRepliesNotModified",
    [
      0x5F91EB5B,
      [],
    ],
  ],
  [
    "connectedBot",
    [
      0xBD068601,
      [
        ["flags", flags, "#"],
        ["can_reply", "true", "flags.0?true"],
        ["bot_id", "bigint", "long"],
        ["recipients", "BusinessBotRecipients", "BusinessBotRecipients"],
      ],
    ],
  ],
  [
    "account.connectedBots",
    [
      0x17D7F87B,
      [
        ["connected_bots", ["ConnectedBot"], "Vector<ConnectedBot>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "messages.dialogFilters",
    [
      0x2AD93719,
      [
        ["flags", flags, "#"],
        ["tags_enabled", "true", "flags.0?true"],
        ["filters", ["DialogFilter"], "Vector<DialogFilter>"],
      ],
    ],
  ],
  [
    "birthday",
    [
      0x6C8E1E06,
      [
        ["flags", flags, "#"],
        ["day", "number", "int"],
        ["month", "number", "int"],
        ["year", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "botBusinessConnection",
    [
      0x896433B4,
      [
        ["flags", flags, "#"],
        ["can_reply", "true", "flags.0?true"],
        ["disabled", "true", "flags.1?true"],
        ["connection_id", "string", "string"],
        ["user_id", "bigint", "long"],
        ["dc_id", "number", "int"],
        ["date", "number", "int"],
      ],
    ],
  ],
  [
    "inputBusinessIntro",
    [
      0x09C469CD,
      [
        ["flags", flags, "#"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["sticker", "InputDocument", "flags.0?InputDocument"],
      ],
    ],
  ],
  [
    "businessIntro",
    [
      0x5A0A066D,
      [
        ["flags", flags, "#"],
        ["title", "string", "string"],
        ["description", "string", "string"],
        ["sticker", "Document", "flags.0?Document"],
      ],
    ],
  ],
  [
    "messages.myStickers",
    [
      0xFAFF629D,
      [
        ["count", "number", "int"],
        ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
      ],
    ],
  ],
  [
    "inputCollectibleUsername",
    [
      0xE39460A9,
      [
        ["username", "string", "string"],
      ],
    ],
  ],
  [
    "inputCollectiblePhone",
    [
      0xA2E214A4,
      [
        ["phone", "string", "string"],
      ],
    ],
  ],
  [
    "fragment.collectibleInfo",
    [
      0x6EBDFF91,
      [
        ["purchase_date", "number", "int"],
        ["currency", "string", "string"],
        ["amount", "bigint", "long"],
        ["crypto_currency", "string", "string"],
        ["crypto_amount", "bigint", "long"],
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "inputBusinessBotRecipients",
    [
      0xC4E5921E,
      [
        ["flags", flags, "#"],
        ["existing_chats", "true", "flags.0?true"],
        ["new_chats", "true", "flags.1?true"],
        ["contacts", "true", "flags.2?true"],
        ["non_contacts", "true", "flags.3?true"],
        ["exclude_selected", "true", "flags.5?true"],
        ["users", ["InputUser"], "flags.4?Vector<InputUser>"],
        ["exclude_users", ["InputUser"], "flags.6?Vector<InputUser>"],
      ],
    ],
  ],
  [
    "businessBotRecipients",
    [
      0xB88CF373,
      [
        ["flags", flags, "#"],
        ["existing_chats", "true", "flags.0?true"],
        ["new_chats", "true", "flags.1?true"],
        ["contacts", "true", "flags.2?true"],
        ["non_contacts", "true", "flags.3?true"],
        ["exclude_selected", "true", "flags.5?true"],
        ["users", ["bigint"], "flags.4?Vector<long>"],
        ["exclude_users", ["bigint"], "flags.6?Vector<long>"],
      ],
    ],
  ],
  [
    "contactBirthday",
    [
      0x1D998733,
      [
        ["contact_id", "bigint", "long"],
        ["birthday", "Birthday", "Birthday"],
      ],
    ],
  ],
  [
    "contacts.contactBirthdays",
    [
      0x114FF30D,
      [
        ["contacts", ["ContactBirthday"], "Vector<ContactBirthday>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "missingInvitee",
    [
      0x628C9224,
      [
        ["flags", flags, "#"],
        ["premium_would_allow_invite", "true", "flags.0?true"],
        ["premium_required_for_pm", "true", "flags.1?true"],
        ["user_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.invitedUsers",
    [
      0x7F5DEFA6,
      [
        ["updates", "Updates", "Updates"],
        ["missing_invitees", ["MissingInvitee"], "Vector<MissingInvitee>"],
      ],
    ],
  ],
  [
    "inputBusinessChatLink",
    [
      0x11679FA7,
      [
        ["flags", flags, "#"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.0?Vector<MessageEntity>"],
        ["title", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "businessChatLink",
    [
      0xB4AE666F,
      [
        ["flags", flags, "#"],
        ["link", "string", "string"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.0?Vector<MessageEntity>"],
        ["title", "string", "flags.1?string"],
        ["views", "number", "int"],
      ],
    ],
  ],
  [
    "account.businessChatLinks",
    [
      0xEC43A2D1,
      [
        ["links", ["BusinessChatLink"], "Vector<BusinessChatLink>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "account.resolvedBusinessChatLinks",
    [
      0x9A23AF21,
      [
        ["flags", flags, "#"],
        ["peer", "Peer", "Peer"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.0?Vector<MessageEntity>"],
        ["chats", ["Chat"], "Vector<Chat>"],
        ["users", ["User"], "Vector<User>"],
      ],
    ],
  ],
  [
    "requestedPeerUser",
    [
      0xD62FF46A,
      [
        ["flags", flags, "#"],
        ["user_id", "bigint", "long"],
        ["first_name", "string", "flags.0?string"],
        ["last_name", "string", "flags.0?string"],
        ["username", "string", "flags.1?string"],
        ["photo", "Photo", "flags.2?Photo"],
      ],
    ],
  ],
  [
    "requestedPeerChat",
    [
      0x7307544F,
      [
        ["flags", flags, "#"],
        ["chat_id", "bigint", "long"],
        ["title", "string", "flags.0?string"],
        ["photo", "Photo", "flags.2?Photo"],
      ],
    ],
  ],
  [
    "requestedPeerChannel",
    [
      0x8BA403E4,
      [
        ["flags", flags, "#"],
        ["channel_id", "bigint", "long"],
        ["title", "string", "flags.0?string"],
        ["username", "string", "flags.1?string"],
        ["photo", "Photo", "flags.2?Photo"],
      ],
    ],
  ],
  [
    "sponsoredMessageReportOption",
    [
      0x430D3150,
      [
        ["text", "string", "string"],
        ["option", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "channels.sponsoredMessageReportResultChooseOption",
    [
      0x846F9E42,
      [
        ["title", "string", "string"],
        ["options", ["SponsoredMessageReportOption"], "Vector<SponsoredMessageReportOption>"],
      ],
    ],
  ],
  [
    "channels.sponsoredMessageReportResultAdsHidden",
    [
      0x3E3BCF2F,
      [],
    ],
  ],
  [
    "channels.sponsoredMessageReportResultReported",
    [
      0xAD798849,
      [],
    ],
  ],
  [
    "stats.broadcastRevenueStats",
    [
      0xD07B4BAD,
      [
        ["top_hours_graph", "StatsGraph", "StatsGraph"],
        ["revenue_graph", "StatsGraph", "StatsGraph"],
        ["current_balance", "bigint", "long"],
        ["available_balance", "bigint", "long"],
        ["overall_revenue", "bigint", "long"],
        ["usd_rate", "number", "double"],
      ],
    ],
  ],
  [
    "stats.broadcastRevenueWithdrawalUrl",
    [
      0xEC659737,
      [
        ["url", "string", "string"],
      ],
    ],
  ],
  [
    "broadcastRevenueTransactionProceeds",
    [
      0x557E2CC4,
      [
        ["amount", "bigint", "long"],
        ["from_date", "number", "int"],
        ["to_date", "number", "int"],
      ],
    ],
  ],
  [
    "broadcastRevenueTransactionWithdrawal",
    [
      0x5A590978,
      [
        ["flags", flags, "#"],
        ["pending", "true", "flags.0?true"],
        ["failed", "true", "flags.2?true"],
        ["amount", "bigint", "long"],
        ["date", "number", "int"],
        ["provider", "string", "string"],
        ["transaction_date", "number", "flags.1?int"],
        ["transaction_url", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "broadcastRevenueTransactionRefund",
    [
      0x42D30D2E,
      [
        ["amount", "bigint", "long"],
        ["date", "number", "int"],
        ["provider", "string", "string"],
      ],
    ],
  ],
  [
    "stats.broadcastRevenueTransactions",
    [
      0x87158466,
      [
        ["count", "number", "int"],
        ["transactions", ["BroadcastRevenueTransaction"], "Vector<BroadcastRevenueTransaction>"],
      ],
    ],
  ],
  [
    "req_pq_multi",
    [
      0xBE7E8EF1,
      [
        ["nonce", "bigint", "int128"],
      ],
    ],
  ],
  [
    "req_DH_params",
    [
      0xD712E4BE,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["p", Uint8Array, "bytes"],
        ["q", Uint8Array, "bytes"],
        ["public_key_fingerprint", "bigint", "long"],
        ["encrypted_data", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "set_client_DH_params",
    [
      0xF5045F1F,
      [
        ["nonce", "bigint", "int128"],
        ["server_nonce", "bigint", "int128"],
        ["encrypted_data", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "rpc_drop_answer",
    [
      0x58E4A740,
      [
        ["req_msg_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "get_future_salts",
    [
      0xB921BD04,
      [
        ["num", "number", "int"],
      ],
    ],
  ],
  [
    "ping",
    [
      0x7ABE77EC,
      [
        ["ping_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "ping_delay_disconnect",
    [
      0xF3427B8C,
      [
        ["ping_id", "bigint", "long"],
        ["disconnect_delay", "number", "int"],
      ],
    ],
  ],
  [
    "destroy_session",
    [
      0xE7512126,
      [
        ["session_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "destroy_auth_key",
    [
      0xD1435160,
      [],
    ],
  ],
  [
    "invokeWithBusinessConnectionPrefix",
    [
      0xDD289F8E,
      [
        ["connection_id", "string", "string"],
      ],
    ],
  ],
  [
    "invokeAfterMsg",
    [
      0xCB9F372D,
      [
        ["msg_id", "bigint", "long"],
        ["query", null, "!X"],
      ],
    ],
  ],
  [
    "invokeAfterMsgs",
    [
      0x3DC4B4F0,
      [
        ["msg_ids", ["bigint"], "Vector<long>"],
        ["query", null, "!X"],
      ],
    ],
  ],
  [
    "initConnection",
    [
      0xC1CD5EA9,
      [
        ["flags", flags, "#"],
        ["api_id", "number", "int"],
        ["device_model", "string", "string"],
        ["system_version", "string", "string"],
        ["app_version", "string", "string"],
        ["system_lang_code", "string", "string"],
        ["lang_pack", "string", "string"],
        ["lang_code", "string", "string"],
        ["proxy", "InputClientProxy", "flags.0?InputClientProxy"],
        ["params", "JSONValue", "flags.1?JSONValue"],
        ["query", null, "!X"],
      ],
    ],
  ],
  [
    "invokeWithLayer",
    [
      0xDA9B0D0D,
      [
        ["layer", "number", "int"],
        ["query", null, "!X"],
      ],
    ],
  ],
  [
    "invokeWithoutUpdates",
    [
      0xBF9459B7,
      [
        ["query", null, "!X"],
      ],
    ],
  ],
  [
    "invokeWithMessagesRange",
    [
      0x365275F2,
      [
        ["range", "MessageRange", "MessageRange"],
        ["query", null, "!X"],
      ],
    ],
  ],
  [
    "invokeWithTakeout",
    [
      0xACA9FD2E,
      [
        ["takeout_id", "bigint", "long"],
        ["query", null, "!X"],
      ],
    ],
  ],
  [
    "invokeWithBusinessConnection",
    [
      0xDD289F8E,
      [
        ["connection_id", "string", "string"],
        ["query", null, "!X"],
      ],
    ],
  ],
  [
    "auth.sendCode",
    [
      0xA677244F,
      [
        ["phone_number", "string", "string"],
        ["api_id", "number", "int"],
        ["api_hash", "string", "string"],
        ["settings", "CodeSettings", "CodeSettings"],
      ],
    ],
  ],
  [
    "auth.signUp",
    [
      0xAAC7B717,
      [
        ["flags", flags, "#"],
        ["no_joined_notifications", "true", "flags.0?true"],
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
      ],
    ],
  ],
  [
    "auth.signIn",
    [
      0x8D52A951,
      [
        ["flags", flags, "#"],
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
        ["phone_code", "string", "flags.0?string"],
        ["email_verification", "EmailVerification", "flags.1?EmailVerification"],
      ],
    ],
  ],
  [
    "auth.logOut",
    [
      0x3E72BA19,
      [],
    ],
  ],
  [
    "auth.resetAuthorizations",
    [
      0x9FAB0D1A,
      [],
    ],
  ],
  [
    "auth.exportAuthorization",
    [
      0xE5BFFFCD,
      [
        ["dc_id", "number", "int"],
      ],
    ],
  ],
  [
    "auth.importAuthorization",
    [
      0xA57A7DAD,
      [
        ["id", "bigint", "long"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "auth.bindTempAuthKey",
    [
      0xCDD42A05,
      [
        ["perm_auth_key_id", "bigint", "long"],
        ["nonce", "bigint", "long"],
        ["expires_at", "number", "int"],
        ["encrypted_message", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "auth.importBotAuthorization",
    [
      0x67A3FF2C,
      [
        ["flags", "number", "int"],
        ["api_id", "number", "int"],
        ["api_hash", "string", "string"],
        ["bot_auth_token", "string", "string"],
      ],
    ],
  ],
  [
    "auth.checkPassword",
    [
      0xD18B4D16,
      [
        ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
      ],
    ],
  ],
  [
    "auth.requestPasswordRecovery",
    [
      0xD897BC66,
      [],
    ],
  ],
  [
    "auth.recoverPassword",
    [
      0x37096C70,
      [
        ["flags", flags, "#"],
        ["code", "string", "string"],
        ["new_settings", "account_PasswordInputSettings", "flags.0?account.PasswordInputSettings"],
      ],
    ],
  ],
  [
    "auth.resendCode",
    [
      0x3EF1A9BF,
      [
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
      ],
    ],
  ],
  [
    "auth.cancelCode",
    [
      0x1F040578,
      [
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
      ],
    ],
  ],
  [
    "auth.dropTempAuthKeys",
    [
      0x8E48A188,
      [
        ["except_auth_keys", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "auth.exportLoginToken",
    [
      0xB7E085FE,
      [
        ["api_id", "number", "int"],
        ["api_hash", "string", "string"],
        ["except_ids", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "auth.importLoginToken",
    [
      0x95AC5CE4,
      [
        ["token", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "auth.acceptLoginToken",
    [
      0xE894AD4D,
      [
        ["token", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "auth.checkRecoveryPassword",
    [
      0x0D36BF79,
      [
        ["code", "string", "string"],
      ],
    ],
  ],
  [
    "auth.importWebTokenAuthorization",
    [
      0x2DB873A9,
      [
        ["api_id", "number", "int"],
        ["api_hash", "string", "string"],
        ["web_auth_token", "string", "string"],
      ],
    ],
  ],
  [
    "auth.requestFirebaseSms",
    [
      0x89464B50,
      [
        ["flags", flags, "#"],
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
        ["safety_net_token", "string", "flags.0?string"],
        ["ios_push_secret", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "auth.resetLoginEmail",
    [
      0x7E960193,
      [
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
      ],
    ],
  ],
  [
    "account.registerDevice",
    [
      0xEC86017A,
      [
        ["flags", flags, "#"],
        ["no_muted", "true", "flags.0?true"],
        ["token_type", "number", "int"],
        ["token", "string", "string"],
        ["app_sandbox", "boolean", "Bool"],
        ["secret", Uint8Array, "bytes"],
        ["other_uids", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "account.unregisterDevice",
    [
      0x6A0D3206,
      [
        ["token_type", "number", "int"],
        ["token", "string", "string"],
        ["other_uids", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "account.updateNotifySettings",
    [
      0x84BE5B93,
      [
        ["peer", "InputNotifyPeer", "InputNotifyPeer"],
        ["settings", "InputPeerNotifySettings", "InputPeerNotifySettings"],
      ],
    ],
  ],
  [
    "account.getNotifySettings",
    [
      0x12B3AD31,
      [
        ["peer", "InputNotifyPeer", "InputNotifyPeer"],
      ],
    ],
  ],
  [
    "account.resetNotifySettings",
    [
      0xDB7E1747,
      [],
    ],
  ],
  [
    "account.updateProfile",
    [
      0x78515775,
      [
        ["flags", flags, "#"],
        ["first_name", "string", "flags.0?string"],
        ["last_name", "string", "flags.1?string"],
        ["about", "string", "flags.2?string"],
      ],
    ],
  ],
  [
    "account.updateStatus",
    [
      0x6628562C,
      [
        ["offline", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "account.getWallPapers",
    [
      0x07967D36,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.reportPeer",
    [
      0xC5BA3D86,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["reason", "ReportReason", "ReportReason"],
        ["message", "string", "string"],
      ],
    ],
  ],
  [
    "account.checkUsername",
    [
      0x2714D86C,
      [
        ["username", "string", "string"],
      ],
    ],
  ],
  [
    "account.updateUsername",
    [
      0x3E0BDD7C,
      [
        ["username", "string", "string"],
      ],
    ],
  ],
  [
    "account.getPrivacy",
    [
      0xDADBC950,
      [
        ["key", "InputPrivacyKey", "InputPrivacyKey"],
      ],
    ],
  ],
  [
    "account.setPrivacy",
    [
      0xC9F81CE8,
      [
        ["key", "InputPrivacyKey", "InputPrivacyKey"],
        ["rules", ["InputPrivacyRule"], "Vector<InputPrivacyRule>"],
      ],
    ],
  ],
  [
    "account.deleteAccount",
    [
      0xA2C0CF74,
      [
        ["flags", flags, "#"],
        ["reason", "string", "string"],
        ["password", "InputCheckPasswordSRP", "flags.0?InputCheckPasswordSRP"],
      ],
    ],
  ],
  [
    "account.getAccountTTL",
    [
      0x08FC711D,
      [],
    ],
  ],
  [
    "account.setAccountTTL",
    [
      0x2442485E,
      [
        ["ttl", "AccountDaysTTL", "AccountDaysTTL"],
      ],
    ],
  ],
  [
    "account.sendChangePhoneCode",
    [
      0x82574AE5,
      [
        ["phone_number", "string", "string"],
        ["settings", "CodeSettings", "CodeSettings"],
      ],
    ],
  ],
  [
    "account.changePhone",
    [
      0x70C32EDB,
      [
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
        ["phone_code", "string", "string"],
      ],
    ],
  ],
  [
    "account.updateDeviceLocked",
    [
      0x38DF3532,
      [
        ["period", "number", "int"],
      ],
    ],
  ],
  [
    "account.getAuthorizations",
    [
      0xE320C158,
      [],
    ],
  ],
  [
    "account.resetAuthorization",
    [
      0xDF77F3BC,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.getPassword",
    [
      0x548A30F5,
      [],
    ],
  ],
  [
    "account.getPasswordSettings",
    [
      0x9CD4EAF9,
      [
        ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
      ],
    ],
  ],
  [
    "account.updatePasswordSettings",
    [
      0xA59B102F,
      [
        ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
        ["new_settings", "account_PasswordInputSettings", "account.PasswordInputSettings"],
      ],
    ],
  ],
  [
    "account.sendConfirmPhoneCode",
    [
      0x1B3FAA88,
      [
        ["hash", "string", "string"],
        ["settings", "CodeSettings", "CodeSettings"],
      ],
    ],
  ],
  [
    "account.confirmPhone",
    [
      0x5F2178C3,
      [
        ["phone_code_hash", "string", "string"],
        ["phone_code", "string", "string"],
      ],
    ],
  ],
  [
    "account.getTmpPassword",
    [
      0x449E0B51,
      [
        ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
        ["period", "number", "int"],
      ],
    ],
  ],
  [
    "account.getWebAuthorizations",
    [
      0x182E6D6F,
      [],
    ],
  ],
  [
    "account.resetWebAuthorization",
    [
      0x2D01B9EF,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.resetWebAuthorizations",
    [
      0x682D2594,
      [],
    ],
  ],
  [
    "account.getAllSecureValues",
    [
      0xB288BC7D,
      [],
    ],
  ],
  [
    "account.getSecureValue",
    [
      0x73665BC2,
      [
        ["types", ["SecureValueType"], "Vector<SecureValueType>"],
      ],
    ],
  ],
  [
    "account.saveSecureValue",
    [
      0x899FE31D,
      [
        ["value", "InputSecureValue", "InputSecureValue"],
        ["secure_secret_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.deleteSecureValue",
    [
      0xB880BC4B,
      [
        ["types", ["SecureValueType"], "Vector<SecureValueType>"],
      ],
    ],
  ],
  [
    "account.getAuthorizationForm",
    [
      0xA929597A,
      [
        ["bot_id", "bigint", "long"],
        ["scope", "string", "string"],
        ["public_key", "string", "string"],
      ],
    ],
  ],
  [
    "account.acceptAuthorization",
    [
      0xF3ED4C73,
      [
        ["bot_id", "bigint", "long"],
        ["scope", "string", "string"],
        ["public_key", "string", "string"],
        ["value_hashes", ["SecureValueHash"], "Vector<SecureValueHash>"],
        ["credentials", "SecureCredentialsEncrypted", "SecureCredentialsEncrypted"],
      ],
    ],
  ],
  [
    "account.sendVerifyPhoneCode",
    [
      0xA5A356F9,
      [
        ["phone_number", "string", "string"],
        ["settings", "CodeSettings", "CodeSettings"],
      ],
    ],
  ],
  [
    "account.verifyPhone",
    [
      0x4DD3A7F6,
      [
        ["phone_number", "string", "string"],
        ["phone_code_hash", "string", "string"],
        ["phone_code", "string", "string"],
      ],
    ],
  ],
  [
    "account.sendVerifyEmailCode",
    [
      0x98E037BB,
      [
        ["purpose", "EmailVerifyPurpose", "EmailVerifyPurpose"],
        ["email", "string", "string"],
      ],
    ],
  ],
  [
    "account.verifyEmail",
    [
      0x032DA4CF,
      [
        ["purpose", "EmailVerifyPurpose", "EmailVerifyPurpose"],
        ["verification", "EmailVerification", "EmailVerification"],
      ],
    ],
  ],
  [
    "account.initTakeoutSession",
    [
      0x8EF3EAB0,
      [
        ["flags", flags, "#"],
        ["contacts", "true", "flags.0?true"],
        ["message_users", "true", "flags.1?true"],
        ["message_chats", "true", "flags.2?true"],
        ["message_megagroups", "true", "flags.3?true"],
        ["message_channels", "true", "flags.4?true"],
        ["files", "true", "flags.5?true"],
        ["file_max_size", "bigint", "flags.5?long"],
      ],
    ],
  ],
  [
    "account.finishTakeoutSession",
    [
      0x1D2652EE,
      [
        ["flags", flags, "#"],
        ["success", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "account.confirmPasswordEmail",
    [
      0x8FDF1920,
      [
        ["code", "string", "string"],
      ],
    ],
  ],
  [
    "account.resendPasswordEmail",
    [
      0x7A7F2A15,
      [],
    ],
  ],
  [
    "account.cancelPasswordEmail",
    [
      0xC1CBD5B6,
      [],
    ],
  ],
  [
    "account.getContactSignUpNotification",
    [
      0x9F07C728,
      [],
    ],
  ],
  [
    "account.setContactSignUpNotification",
    [
      0xCFF43F61,
      [
        ["silent", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "account.getNotifyExceptions",
    [
      0x53577479,
      [
        ["flags", flags, "#"],
        ["compare_sound", "true", "flags.1?true"],
        ["compare_stories", "true", "flags.2?true"],
        ["peer", "InputNotifyPeer", "flags.0?InputNotifyPeer"],
      ],
    ],
  ],
  [
    "account.getWallPaper",
    [
      0xFC8DDBEA,
      [
        ["wallpaper", "InputWallPaper", "InputWallPaper"],
      ],
    ],
  ],
  [
    "account.uploadWallPaper",
    [
      0xE39A8F03,
      [
        ["flags", flags, "#"],
        ["for_chat", "true", "flags.0?true"],
        ["file", "InputFile", "InputFile"],
        ["mime_type", "string", "string"],
        ["settings", "WallPaperSettings", "WallPaperSettings"],
      ],
    ],
  ],
  [
    "account.saveWallPaper",
    [
      0x6C5A5B37,
      [
        ["wallpaper", "InputWallPaper", "InputWallPaper"],
        ["unsave", "boolean", "Bool"],
        ["settings", "WallPaperSettings", "WallPaperSettings"],
      ],
    ],
  ],
  [
    "account.installWallPaper",
    [
      0xFEED5769,
      [
        ["wallpaper", "InputWallPaper", "InputWallPaper"],
        ["settings", "WallPaperSettings", "WallPaperSettings"],
      ],
    ],
  ],
  [
    "account.resetWallPapers",
    [
      0xBB3B9804,
      [],
    ],
  ],
  [
    "account.getAutoDownloadSettings",
    [
      0x56DA0B3F,
      [],
    ],
  ],
  [
    "account.saveAutoDownloadSettings",
    [
      0x76F36233,
      [
        ["flags", flags, "#"],
        ["low", "true", "flags.0?true"],
        ["high", "true", "flags.1?true"],
        ["settings", "AutoDownloadSettings", "AutoDownloadSettings"],
      ],
    ],
  ],
  [
    "account.uploadTheme",
    [
      0x1C3DB333,
      [
        ["flags", flags, "#"],
        ["file", "InputFile", "InputFile"],
        ["thumb", "InputFile", "flags.0?InputFile"],
        ["file_name", "string", "string"],
        ["mime_type", "string", "string"],
      ],
    ],
  ],
  [
    "account.createTheme",
    [
      0x652E4400,
      [
        ["flags", flags, "#"],
        ["slug", "string", "string"],
        ["title", "string", "string"],
        ["document", "InputDocument", "flags.2?InputDocument"],
        ["settings", ["InputThemeSettings"], "flags.3?Vector<InputThemeSettings>"],
      ],
    ],
  ],
  [
    "account.updateTheme",
    [
      0x2BF40CCC,
      [
        ["flags", flags, "#"],
        ["format", "string", "string"],
        ["theme", "InputTheme", "InputTheme"],
        ["slug", "string", "flags.0?string"],
        ["title", "string", "flags.1?string"],
        ["document", "InputDocument", "flags.2?InputDocument"],
        ["settings", ["InputThemeSettings"], "flags.3?Vector<InputThemeSettings>"],
      ],
    ],
  ],
  [
    "account.saveTheme",
    [
      0xF257106C,
      [
        ["theme", "InputTheme", "InputTheme"],
        ["unsave", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "account.installTheme",
    [
      0xC727BB3B,
      [
        ["flags", flags, "#"],
        ["dark", "true", "flags.0?true"],
        ["theme", "InputTheme", "flags.1?InputTheme"],
        ["format", "string", "flags.2?string"],
        ["base_theme", "BaseTheme", "flags.3?BaseTheme"],
      ],
    ],
  ],
  [
    "account.getTheme",
    [
      0x3A5869EC,
      [
        ["format", "string", "string"],
        ["theme", "InputTheme", "InputTheme"],
      ],
    ],
  ],
  [
    "account.getThemes",
    [
      0x7206E458,
      [
        ["format", "string", "string"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.setContentSettings",
    [
      0xB574B16B,
      [
        ["flags", flags, "#"],
        ["sensitive_enabled", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "account.getContentSettings",
    [
      0x8B9B4DAE,
      [],
    ],
  ],
  [
    "account.getMultiWallPapers",
    [
      0x65AD71DC,
      [
        ["wallpapers", ["InputWallPaper"], "Vector<InputWallPaper>"],
      ],
    ],
  ],
  [
    "account.getGlobalPrivacySettings",
    [
      0xEB2B4CF6,
      [],
    ],
  ],
  [
    "account.setGlobalPrivacySettings",
    [
      0x1EDAAAC2,
      [
        ["settings", "GlobalPrivacySettings", "GlobalPrivacySettings"],
      ],
    ],
  ],
  [
    "account.reportProfilePhoto",
    [
      0xFA8CC6F5,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["photo_id", "InputPhoto", "InputPhoto"],
        ["reason", "ReportReason", "ReportReason"],
        ["message", "string", "string"],
      ],
    ],
  ],
  [
    "account.resetPassword",
    [
      0x9308CE1B,
      [],
    ],
  ],
  [
    "account.declinePasswordReset",
    [
      0x4C9409F6,
      [],
    ],
  ],
  [
    "account.getChatThemes",
    [
      0xD638DE89,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.setAuthorizationTTL",
    [
      0xBF899AA0,
      [
        ["authorization_ttl_days", "number", "int"],
      ],
    ],
  ],
  [
    "account.changeAuthorizationSettings",
    [
      0x40F48462,
      [
        ["flags", flags, "#"],
        ["confirmed", "true", "flags.3?true"],
        ["hash", "bigint", "long"],
        ["encrypted_requests_disabled", "boolean", "flags.0?Bool"],
        ["call_requests_disabled", "boolean", "flags.1?Bool"],
      ],
    ],
  ],
  [
    "account.getSavedRingtones",
    [
      0xE1902288,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.saveRingtone",
    [
      0x3DEA5B03,
      [
        ["id", "InputDocument", "InputDocument"],
        ["unsave", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "account.uploadRingtone",
    [
      0x831A83A2,
      [
        ["file", "InputFile", "InputFile"],
        ["file_name", "string", "string"],
        ["mime_type", "string", "string"],
      ],
    ],
  ],
  [
    "account.updateEmojiStatus",
    [
      0xFBD3DE6B,
      [
        ["emoji_status", "EmojiStatus", "EmojiStatus"],
      ],
    ],
  ],
  [
    "account.getDefaultEmojiStatuses",
    [
      0xD6753386,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.getRecentEmojiStatuses",
    [
      0x0F578105,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.clearRecentEmojiStatuses",
    [
      0x18201AAE,
      [],
    ],
  ],
  [
    "account.reorderUsernames",
    [
      0xEF500EAB,
      [
        ["order", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "account.toggleUsername",
    [
      0x58D6B376,
      [
        ["username", "string", "string"],
        ["active", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "account.getDefaultProfilePhotoEmojis",
    [
      0xE2750328,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.getDefaultGroupPhotoEmojis",
    [
      0x915860AE,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.getAutoSaveSettings",
    [
      0xADCBBCDA,
      [],
    ],
  ],
  [
    "account.saveAutoSaveSettings",
    [
      0xD69B8361,
      [
        ["flags", flags, "#"],
        ["users", "true", "flags.0?true"],
        ["chats", "true", "flags.1?true"],
        ["broadcasts", "true", "flags.2?true"],
        ["peer", "InputPeer", "flags.3?InputPeer"],
        ["settings", "AutoSaveSettings", "AutoSaveSettings"],
      ],
    ],
  ],
  [
    "account.deleteAutoSaveExceptions",
    [
      0x53BC0020,
      [],
    ],
  ],
  [
    "account.invalidateSignInCodes",
    [
      0xCA8AE8BA,
      [
        ["codes", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "account.updateColor",
    [
      0x7CEFA15D,
      [
        ["flags", flags, "#"],
        ["for_profile", "true", "flags.1?true"],
        ["color", "number", "flags.2?int"],
        ["background_emoji_id", "bigint", "flags.0?long"],
      ],
    ],
  ],
  [
    "account.getDefaultBackgroundEmojis",
    [
      0xA60AB9CE,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.getChannelDefaultEmojiStatuses",
    [
      0x7727A7D5,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.getChannelRestrictedStatusEmojis",
    [
      0x35A9E0D5,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "account.updateBusinessWorkHours",
    [
      0x4B00E066,
      [
        ["flags", flags, "#"],
        ["business_work_hours", "BusinessWorkHours", "flags.0?BusinessWorkHours"],
      ],
    ],
  ],
  [
    "account.updateBusinessLocation",
    [
      0x9E6B131A,
      [
        ["flags", flags, "#"],
        ["geo_point", "InputGeoPoint", "flags.1?InputGeoPoint"],
        ["address", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "account.updateBusinessGreetingMessage",
    [
      0x66CDAFC4,
      [
        ["flags", flags, "#"],
        ["message", "InputBusinessGreetingMessage", "flags.0?InputBusinessGreetingMessage"],
      ],
    ],
  ],
  [
    "account.updateBusinessAwayMessage",
    [
      0xA26A7FA5,
      [
        ["flags", flags, "#"],
        ["message", "InputBusinessAwayMessage", "flags.0?InputBusinessAwayMessage"],
      ],
    ],
  ],
  [
    "account.updateConnectedBot",
    [
      0x43D8521D,
      [
        ["flags", flags, "#"],
        ["can_reply", "true", "flags.0?true"],
        ["deleted", "true", "flags.1?true"],
        ["bot", "InputUser", "InputUser"],
        ["recipients", "InputBusinessBotRecipients", "InputBusinessBotRecipients"],
      ],
    ],
  ],
  [
    "account.getConnectedBots",
    [
      0x4EA4C80F,
      [],
    ],
  ],
  [
    "account.getBotBusinessConnection",
    [
      0x76A86270,
      [
        ["connection_id", "string", "string"],
      ],
    ],
  ],
  [
    "account.updateBusinessIntro",
    [
      0xA614D034,
      [
        ["flags", flags, "#"],
        ["intro", "InputBusinessIntro", "flags.0?InputBusinessIntro"],
      ],
    ],
  ],
  [
    "account.toggleConnectedBotPaused",
    [
      0x646E1097,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["paused", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "account.disablePeerConnectedBot",
    [
      0x5E437ED9,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "account.updateBirthday",
    [
      0xCC6E0C11,
      [
        ["flags", flags, "#"],
        ["birthday", "Birthday", "flags.0?Birthday"],
      ],
    ],
  ],
  [
    "account.createBusinessChatLink",
    [
      0x8851E68E,
      [
        ["link", "InputBusinessChatLink", "InputBusinessChatLink"],
      ],
    ],
  ],
  [
    "account.editBusinessChatLink",
    [
      0x8C3410AF,
      [
        ["slug", "string", "string"],
        ["link", "InputBusinessChatLink", "InputBusinessChatLink"],
      ],
    ],
  ],
  [
    "account.deleteBusinessChatLink",
    [
      0x60073674,
      [
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "account.getBusinessChatLinks",
    [
      0x6F70DDE1,
      [],
    ],
  ],
  [
    "account.resolveBusinessChatLink",
    [
      0x5492E5EE,
      [
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "account.updatePersonalChannel",
    [
      0xD94305E0,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "users.getUsers",
    [
      0x0D91A548,
      [
        ["id", ["InputUser"], "Vector<InputUser>"],
      ],
    ],
  ],
  [
    "users.getFullUser",
    [
      0xB60F5918,
      [
        ["id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "users.setSecureValueErrors",
    [
      0x90C894B5,
      [
        ["id", "InputUser", "InputUser"],
        ["errors", ["SecureValueError"], "Vector<SecureValueError>"],
      ],
    ],
  ],
  [
    "users.getIsPremiumRequiredToContact",
    [
      0xA622AA10,
      [
        ["id", ["InputUser"], "Vector<InputUser>"],
      ],
    ],
  ],
  [
    "contacts.getContactIDs",
    [
      0x7ADC669D,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "contacts.getStatuses",
    [
      0xC4A353EE,
      [],
    ],
  ],
  [
    "contacts.getContacts",
    [
      0x5DD69E12,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "contacts.importContacts",
    [
      0x2C800BE5,
      [
        ["contacts", ["InputContact"], "Vector<InputContact>"],
      ],
    ],
  ],
  [
    "contacts.deleteContacts",
    [
      0x096A0E00,
      [
        ["id", ["InputUser"], "Vector<InputUser>"],
      ],
    ],
  ],
  [
    "contacts.deleteByPhones",
    [
      0x1013FD9E,
      [
        ["phones", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "contacts.block",
    [
      0x2E2E8734,
      [
        ["flags", flags, "#"],
        ["my_stories_from", "true", "flags.0?true"],
        ["id", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "contacts.unblock",
    [
      0xB550D328,
      [
        ["flags", flags, "#"],
        ["my_stories_from", "true", "flags.0?true"],
        ["id", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "contacts.getBlocked",
    [
      0x9A868F80,
      [
        ["flags", flags, "#"],
        ["my_stories_from", "true", "flags.0?true"],
        ["offset", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "contacts.search",
    [
      0x11F812D8,
      [
        ["q", "string", "string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "contacts.resolveUsername",
    [
      0xF93CCBA3,
      [
        ["username", "string", "string"],
      ],
    ],
  ],
  [
    "contacts.getTopPeers",
    [
      0x973478B6,
      [
        ["flags", flags, "#"],
        ["correspondents", "true", "flags.0?true"],
        ["bots_pm", "true", "flags.1?true"],
        ["bots_inline", "true", "flags.2?true"],
        ["phone_calls", "true", "flags.3?true"],
        ["forward_users", "true", "flags.4?true"],
        ["forward_chats", "true", "flags.5?true"],
        ["groups", "true", "flags.10?true"],
        ["channels", "true", "flags.15?true"],
        ["offset", "number", "int"],
        ["limit", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "contacts.resetTopPeerRating",
    [
      0x1AE373AC,
      [
        ["category", "TopPeerCategory", "TopPeerCategory"],
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "contacts.resetSaved",
    [
      0x879537F1,
      [],
    ],
  ],
  [
    "contacts.getSaved",
    [
      0x82F1E39F,
      [],
    ],
  ],
  [
    "contacts.toggleTopPeers",
    [
      0x8514BDDA,
      [
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "contacts.addContact",
    [
      0xE8F463D0,
      [
        ["flags", flags, "#"],
        ["add_phone_privacy_exception", "true", "flags.0?true"],
        ["id", "InputUser", "InputUser"],
        ["first_name", "string", "string"],
        ["last_name", "string", "string"],
        ["phone", "string", "string"],
      ],
    ],
  ],
  [
    "contacts.acceptContact",
    [
      0xF831A20F,
      [
        ["id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "contacts.getLocated",
    [
      0xD348BC44,
      [
        ["flags", flags, "#"],
        ["background", "true", "flags.1?true"],
        ["geo_point", "InputGeoPoint", "InputGeoPoint"],
        ["self_expires", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "contacts.blockFromReplies",
    [
      0x29A8962C,
      [
        ["flags", flags, "#"],
        ["delete_message", "true", "flags.0?true"],
        ["delete_history", "true", "flags.1?true"],
        ["report_spam", "true", "flags.2?true"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "contacts.resolvePhone",
    [
      0x8AF94344,
      [
        ["phone", "string", "string"],
      ],
    ],
  ],
  [
    "contacts.exportContactToken",
    [
      0xF8654027,
      [],
    ],
  ],
  [
    "contacts.importContactToken",
    [
      0x13005788,
      [
        ["token", "string", "string"],
      ],
    ],
  ],
  [
    "contacts.editCloseFriends",
    [
      0xBA6705F0,
      [
        ["id", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "contacts.setBlocked",
    [
      0x94C65C76,
      [
        ["flags", flags, "#"],
        ["my_stories_from", "true", "flags.0?true"],
        ["id", ["InputPeer"], "Vector<InputPeer>"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "contacts.getBirthdays",
    [
      0xDAEDA864,
      [],
    ],
  ],
  [
    "messages.getMessages",
    [
      0x63C66506,
      [
        ["id", ["InputMessage"], "Vector<InputMessage>"],
      ],
    ],
  ],
  [
    "messages.getDialogs",
    [
      0xA0F4CB4F,
      [
        ["flags", flags, "#"],
        ["exclude_pinned", "true", "flags.0?true"],
        ["folder_id", "number", "flags.1?int"],
        ["offset_date", "number", "int"],
        ["offset_id", "number", "int"],
        ["offset_peer", "InputPeer", "InputPeer"],
        ["limit", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getHistory",
    [
      0x4423E6C5,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["offset_id", "number", "int"],
        ["offset_date", "number", "int"],
        ["add_offset", "number", "int"],
        ["limit", "number", "int"],
        ["max_id", "number", "int"],
        ["min_id", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.search",
    [
      0x29EE847A,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["q", "string", "string"],
        ["from_id", "InputPeer", "flags.0?InputPeer"],
        ["saved_peer_id", "InputPeer", "flags.2?InputPeer"],
        ["saved_reaction", ["Reaction"], "flags.3?Vector<Reaction>"],
        ["top_msg_id", "number", "flags.1?int"],
        ["filter", "MessagesFilter", "MessagesFilter"],
        ["min_date", "number", "int"],
        ["max_date", "number", "int"],
        ["offset_id", "number", "int"],
        ["add_offset", "number", "int"],
        ["limit", "number", "int"],
        ["max_id", "number", "int"],
        ["min_id", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.readHistory",
    [
      0x0E306D3A,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["max_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.deleteHistory",
    [
      0xB08F922A,
      [
        ["flags", flags, "#"],
        ["just_clear", "true", "flags.0?true"],
        ["revoke", "true", "flags.1?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["max_id", "number", "int"],
        ["min_date", "number", "flags.2?int"],
        ["max_date", "number", "flags.3?int"],
      ],
    ],
  ],
  [
    "messages.deleteMessages",
    [
      0xE58E95D2,
      [
        ["flags", flags, "#"],
        ["revoke", "true", "flags.0?true"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.receivedMessages",
    [
      0x05A954C0,
      [
        ["max_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.setTyping",
    [
      0x58943EE2,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["top_msg_id", "number", "flags.0?int"],
        ["action", "SendMessageAction", "SendMessageAction"],
      ],
    ],
  ],
  [
    "messages.sendMessage",
    [
      0xDFF8042C,
      [
        ["flags", flags, "#"],
        ["no_webpage", "true", "flags.1?true"],
        ["silent", "true", "flags.5?true"],
        ["background", "true", "flags.6?true"],
        ["clear_draft", "true", "flags.7?true"],
        ["noforwards", "true", "flags.14?true"],
        ["update_stickersets_order", "true", "flags.15?true"],
        ["invert_media", "true", "flags.16?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
        ["message", "string", "string"],
        ["random_id", "bigint", "long"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
        ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
        ["schedule_date", "number", "flags.10?int"],
        ["send_as", "InputPeer", "flags.13?InputPeer"],
        ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
      ],
    ],
  ],
  [
    "messages.sendMedia",
    [
      0x7BD66041,
      [
        ["flags", flags, "#"],
        ["silent", "true", "flags.5?true"],
        ["background", "true", "flags.6?true"],
        ["clear_draft", "true", "flags.7?true"],
        ["noforwards", "true", "flags.14?true"],
        ["update_stickersets_order", "true", "flags.15?true"],
        ["invert_media", "true", "flags.16?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
        ["media", "InputMedia", "InputMedia"],
        ["message", "string", "string"],
        ["random_id", "bigint", "long"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
        ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
        ["schedule_date", "number", "flags.10?int"],
        ["send_as", "InputPeer", "flags.13?InputPeer"],
        ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
      ],
    ],
  ],
  [
    "messages.forwardMessages",
    [
      0xD5039208,
      [
        ["flags", flags, "#"],
        ["silent", "true", "flags.5?true"],
        ["background", "true", "flags.6?true"],
        ["with_my_score", "true", "flags.8?true"],
        ["drop_author", "true", "flags.11?true"],
        ["drop_media_captions", "true", "flags.12?true"],
        ["noforwards", "true", "flags.14?true"],
        ["from_peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
        ["random_id", ["bigint"], "Vector<long>"],
        ["to_peer", "InputPeer", "InputPeer"],
        ["top_msg_id", "number", "flags.9?int"],
        ["schedule_date", "number", "flags.10?int"],
        ["send_as", "InputPeer", "flags.13?InputPeer"],
        ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
      ],
    ],
  ],
  [
    "messages.reportSpam",
    [
      0xCF1592DB,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.getPeerSettings",
    [
      0xEFD9A6A2,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.report",
    [
      0x8953AB4E,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
        ["reason", "ReportReason", "ReportReason"],
        ["message", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getChats",
    [
      0x49E9528F,
      [
        ["id", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messages.getFullChat",
    [
      0xAEB00B34,
      [
        ["chat_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.editChatTitle",
    [
      0x73783FFD,
      [
        ["chat_id", "bigint", "long"],
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "messages.editChatPhoto",
    [
      0x35DDD674,
      [
        ["chat_id", "bigint", "long"],
        ["photo", "InputChatPhoto", "InputChatPhoto"],
      ],
    ],
  ],
  [
    "messages.addChatUser",
    [
      0xCBC6D107,
      [
        ["chat_id", "bigint", "long"],
        ["user_id", "InputUser", "InputUser"],
        ["fwd_limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.deleteChatUser",
    [
      0xA2185CAB,
      [
        ["flags", flags, "#"],
        ["revoke_history", "true", "flags.0?true"],
        ["chat_id", "bigint", "long"],
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "messages.createChat",
    [
      0x92CEDDD4,
      [
        ["flags", flags, "#"],
        ["users", ["InputUser"], "Vector<InputUser>"],
        ["title", "string", "string"],
        ["ttl_period", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "messages.getDhConfig",
    [
      0x26CF8950,
      [
        ["version", "number", "int"],
        ["random_length", "number", "int"],
      ],
    ],
  ],
  [
    "messages.requestEncryption",
    [
      0xF64DAF43,
      [
        ["user_id", "InputUser", "InputUser"],
        ["random_id", "number", "int"],
        ["g_a", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "messages.acceptEncryption",
    [
      0x3DBC0415,
      [
        ["peer", "InputEncryptedChat", "InputEncryptedChat"],
        ["g_b", Uint8Array, "bytes"],
        ["key_fingerprint", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.discardEncryption",
    [
      0xF393AEA0,
      [
        ["flags", flags, "#"],
        ["delete_history", "true", "flags.0?true"],
        ["chat_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.setEncryptedTyping",
    [
      0x791451ED,
      [
        ["peer", "InputEncryptedChat", "InputEncryptedChat"],
        ["typing", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.readEncryptedHistory",
    [
      0x7F4B690A,
      [
        ["peer", "InputEncryptedChat", "InputEncryptedChat"],
        ["max_date", "number", "int"],
      ],
    ],
  ],
  [
    "messages.sendEncrypted",
    [
      0x44FA7A15,
      [
        ["flags", flags, "#"],
        ["silent", "true", "flags.0?true"],
        ["peer", "InputEncryptedChat", "InputEncryptedChat"],
        ["random_id", "bigint", "long"],
        ["data", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "messages.sendEncryptedFile",
    [
      0x5559481D,
      [
        ["flags", flags, "#"],
        ["silent", "true", "flags.0?true"],
        ["peer", "InputEncryptedChat", "InputEncryptedChat"],
        ["random_id", "bigint", "long"],
        ["data", Uint8Array, "bytes"],
        ["file", "InputEncryptedFile", "InputEncryptedFile"],
      ],
    ],
  ],
  [
    "messages.sendEncryptedService",
    [
      0x32D439A4,
      [
        ["peer", "InputEncryptedChat", "InputEncryptedChat"],
        ["random_id", "bigint", "long"],
        ["data", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "messages.receivedQueue",
    [
      0x55A5BB66,
      [
        ["max_qts", "number", "int"],
      ],
    ],
  ],
  [
    "messages.reportEncryptedSpam",
    [
      0x4B0C8C0F,
      [
        ["peer", "InputEncryptedChat", "InputEncryptedChat"],
      ],
    ],
  ],
  [
    "messages.readMessageContents",
    [
      0x36A73F77,
      [
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.getStickers",
    [
      0xD5A5D3A1,
      [
        ["emoticon", "string", "string"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getAllStickers",
    [
      0xB8A0A1A8,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getWebPagePreview",
    [
      0x8B68B0CC,
      [
        ["flags", flags, "#"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "messages.exportChatInvite",
    [
      0xA02CE5D5,
      [
        ["flags", flags, "#"],
        ["legacy_revoke_permanent", "true", "flags.2?true"],
        ["request_needed", "true", "flags.3?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["expire_date", "number", "flags.0?int"],
        ["usage_limit", "number", "flags.1?int"],
        ["title", "string", "flags.4?string"],
      ],
    ],
  ],
  [
    "messages.checkChatInvite",
    [
      0x3EADB1BB,
      [
        ["hash", "string", "string"],
      ],
    ],
  ],
  [
    "messages.importChatInvite",
    [
      0x6C50051C,
      [
        ["hash", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getStickerSet",
    [
      0xC8A0EC74,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "messages.installStickerSet",
    [
      0xC78FE460,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["archived", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.uninstallStickerSet",
    [
      0xF96E55DE,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
      ],
    ],
  ],
  [
    "messages.startBot",
    [
      0xE6DF7378,
      [
        ["bot", "InputUser", "InputUser"],
        ["peer", "InputPeer", "InputPeer"],
        ["random_id", "bigint", "long"],
        ["start_param", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getMessagesViews",
    [
      0x5784D3E1,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
        ["increment", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.editChatAdmin",
    [
      0xA85BD1C2,
      [
        ["chat_id", "bigint", "long"],
        ["user_id", "InputUser", "InputUser"],
        ["is_admin", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.migrateChat",
    [
      0xA2875319,
      [
        ["chat_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.searchGlobal",
    [
      0x4BC6589A,
      [
        ["flags", flags, "#"],
        ["folder_id", "number", "flags.0?int"],
        ["q", "string", "string"],
        ["filter", "MessagesFilter", "MessagesFilter"],
        ["min_date", "number", "int"],
        ["max_date", "number", "int"],
        ["offset_rate", "number", "int"],
        ["offset_peer", "InputPeer", "InputPeer"],
        ["offset_id", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.reorderStickerSets",
    [
      0x78337739,
      [
        ["flags", flags, "#"],
        ["masks", "true", "flags.0?true"],
        ["emojis", "true", "flags.1?true"],
        ["order", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messages.getDocumentByHash",
    [
      0xB1F2061F,
      [
        ["sha256", Uint8Array, "bytes"],
        ["size", "bigint", "long"],
        ["mime_type", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getSavedGifs",
    [
      0x5CF09635,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.saveGif",
    [
      0x327A30CB,
      [
        ["id", "InputDocument", "InputDocument"],
        ["unsave", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.getInlineBotResults",
    [
      0x514E999D,
      [
        ["flags", flags, "#"],
        ["bot", "InputUser", "InputUser"],
        ["peer", "InputPeer", "InputPeer"],
        ["geo_point", "InputGeoPoint", "flags.0?InputGeoPoint"],
        ["query", "string", "string"],
        ["offset", "string", "string"],
      ],
    ],
  ],
  [
    "messages.setInlineBotResults",
    [
      0xBB12A419,
      [
        ["flags", flags, "#"],
        ["gallery", "true", "flags.0?true"],
        ["private", "true", "flags.1?true"],
        ["query_id", "bigint", "long"],
        ["results", ["InputBotInlineResult"], "Vector<InputBotInlineResult>"],
        ["cache_time", "number", "int"],
        ["next_offset", "string", "flags.2?string"],
        ["switch_pm", "InlineBotSwitchPM", "flags.3?InlineBotSwitchPM"],
        ["switch_webview", "InlineBotWebView", "flags.4?InlineBotWebView"],
      ],
    ],
  ],
  [
    "messages.sendInlineBotResult",
    [
      0x3EBEE86A,
      [
        ["flags", flags, "#"],
        ["silent", "true", "flags.5?true"],
        ["background", "true", "flags.6?true"],
        ["clear_draft", "true", "flags.7?true"],
        ["hide_via", "true", "flags.11?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
        ["random_id", "bigint", "long"],
        ["query_id", "bigint", "long"],
        ["id", "string", "string"],
        ["schedule_date", "number", "flags.10?int"],
        ["send_as", "InputPeer", "flags.13?InputPeer"],
        ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
      ],
    ],
  ],
  [
    "messages.getMessageEditData",
    [
      0xFDA68D36,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.editMessage",
    [
      0xDFD14005,
      [
        ["flags", flags, "#"],
        ["no_webpage", "true", "flags.1?true"],
        ["invert_media", "true", "flags.16?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["message", "string", "flags.11?string"],
        ["media", "InputMedia", "flags.14?InputMedia"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
        ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
        ["schedule_date", "number", "flags.15?int"],
        ["quick_reply_shortcut_id", "number", "flags.17?int"],
      ],
    ],
  ],
  [
    "messages.editInlineBotMessage",
    [
      0x83557DBA,
      [
        ["flags", flags, "#"],
        ["no_webpage", "true", "flags.1?true"],
        ["invert_media", "true", "flags.16?true"],
        ["id", "InputBotInlineMessageID", "InputBotInlineMessageID"],
        ["message", "string", "flags.11?string"],
        ["media", "InputMedia", "flags.14?InputMedia"],
        ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
        ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "messages.getBotCallbackAnswer",
    [
      0x9342CA07,
      [
        ["flags", flags, "#"],
        ["game", "true", "flags.1?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["data", Uint8Array, "flags.0?bytes"],
        ["password", "InputCheckPasswordSRP", "flags.2?InputCheckPasswordSRP"],
      ],
    ],
  ],
  [
    "messages.setBotCallbackAnswer",
    [
      0xD58F130A,
      [
        ["flags", flags, "#"],
        ["alert", "true", "flags.1?true"],
        ["query_id", "bigint", "long"],
        ["message", "string", "flags.0?string"],
        ["url", "string", "flags.2?string"],
        ["cache_time", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getPeerDialogs",
    [
      0xE470BCFD,
      [
        ["peers", ["InputDialogPeer"], "Vector<InputDialogPeer>"],
      ],
    ],
  ],
  [
    "messages.saveDraft",
    [
      0x7FF3B806,
      [
        ["flags", flags, "#"],
        ["no_webpage", "true", "flags.1?true"],
        ["invert_media", "true", "flags.6?true"],
        ["reply_to", "InputReplyTo", "flags.4?InputReplyTo"],
        ["peer", "InputPeer", "InputPeer"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
        ["media", "InputMedia", "flags.5?InputMedia"],
      ],
    ],
  ],
  [
    "messages.getAllDrafts",
    [
      0x6A3F8D65,
      [],
    ],
  ],
  [
    "messages.getFeaturedStickers",
    [
      0x64780B14,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.readFeaturedStickers",
    [
      0x5B118126,
      [
        ["id", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messages.getRecentStickers",
    [
      0x9DA9403B,
      [
        ["flags", flags, "#"],
        ["attached", "true", "flags.0?true"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.saveRecentSticker",
    [
      0x392718F8,
      [
        ["flags", flags, "#"],
        ["attached", "true", "flags.0?true"],
        ["id", "InputDocument", "InputDocument"],
        ["unsave", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.clearRecentStickers",
    [
      0x8999602D,
      [
        ["flags", flags, "#"],
        ["attached", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "messages.getArchivedStickers",
    [
      0x57F17692,
      [
        ["flags", flags, "#"],
        ["masks", "true", "flags.0?true"],
        ["emojis", "true", "flags.1?true"],
        ["offset_id", "bigint", "long"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getMaskStickers",
    [
      0x640F82B8,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getAttachedStickers",
    [
      0xCC5B67CC,
      [
        ["media", "InputStickeredMedia", "InputStickeredMedia"],
      ],
    ],
  ],
  [
    "messages.setGameScore",
    [
      0x8EF8ECC0,
      [
        ["flags", flags, "#"],
        ["edit_message", "true", "flags.0?true"],
        ["force", "true", "flags.1?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["user_id", "InputUser", "InputUser"],
        ["score", "number", "int"],
      ],
    ],
  ],
  [
    "messages.setInlineGameScore",
    [
      0x15AD9F64,
      [
        ["flags", flags, "#"],
        ["edit_message", "true", "flags.0?true"],
        ["force", "true", "flags.1?true"],
        ["id", "InputBotInlineMessageID", "InputBotInlineMessageID"],
        ["user_id", "InputUser", "InputUser"],
        ["score", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getGameHighScores",
    [
      0xE822649D,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "messages.getInlineGameHighScores",
    [
      0x0F635E1B,
      [
        ["id", "InputBotInlineMessageID", "InputBotInlineMessageID"],
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "messages.getCommonChats",
    [
      0xE40CA104,
      [
        ["user_id", "InputUser", "InputUser"],
        ["max_id", "bigint", "long"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getWebPage",
    [
      0x8D9692A3,
      [
        ["url", "string", "string"],
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "messages.toggleDialogPin",
    [
      0xA731E257,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.0?true"],
        ["peer", "InputDialogPeer", "InputDialogPeer"],
      ],
    ],
  ],
  [
    "messages.reorderPinnedDialogs",
    [
      0x3B1ADF37,
      [
        ["flags", flags, "#"],
        ["force", "true", "flags.0?true"],
        ["folder_id", "number", "int"],
        ["order", ["InputDialogPeer"], "Vector<InputDialogPeer>"],
      ],
    ],
  ],
  [
    "messages.getPinnedDialogs",
    [
      0xD6B94DF2,
      [
        ["folder_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.setBotShippingResults",
    [
      0xE5F672FA,
      [
        ["flags", flags, "#"],
        ["query_id", "bigint", "long"],
        ["error", "string", "flags.0?string"],
        ["shipping_options", ["ShippingOption"], "flags.1?Vector<ShippingOption>"],
      ],
    ],
  ],
  [
    "messages.setBotPrecheckoutResults",
    [
      0x09C2DD95,
      [
        ["flags", flags, "#"],
        ["success", "true", "flags.1?true"],
        ["query_id", "bigint", "long"],
        ["error", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "messages.uploadMedia",
    [
      0x14967978,
      [
        ["flags", flags, "#"],
        ["business_connection_id", "string", "flags.0?string"],
        ["peer", "InputPeer", "InputPeer"],
        ["media", "InputMedia", "InputMedia"],
      ],
    ],
  ],
  [
    "messages.sendScreenshotNotification",
    [
      0xA1405817,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["reply_to", "InputReplyTo", "InputReplyTo"],
        ["random_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getFavedStickers",
    [
      0x04F1AAA9,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.faveSticker",
    [
      0xB9FFC55B,
      [
        ["id", "InputDocument", "InputDocument"],
        ["unfave", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.getUnreadMentions",
    [
      0xF107E790,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["top_msg_id", "number", "flags.0?int"],
        ["offset_id", "number", "int"],
        ["add_offset", "number", "int"],
        ["limit", "number", "int"],
        ["max_id", "number", "int"],
        ["min_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.readMentions",
    [
      0x36E5BF4D,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["top_msg_id", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "messages.getRecentLocations",
    [
      0x702A40E0,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["limit", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.sendMultiMedia",
    [
      0x0C964709,
      [
        ["flags", flags, "#"],
        ["silent", "true", "flags.5?true"],
        ["background", "true", "flags.6?true"],
        ["clear_draft", "true", "flags.7?true"],
        ["noforwards", "true", "flags.14?true"],
        ["update_stickersets_order", "true", "flags.15?true"],
        ["invert_media", "true", "flags.16?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
        ["multi_media", ["InputSingleMedia"], "Vector<InputSingleMedia>"],
        ["schedule_date", "number", "flags.10?int"],
        ["send_as", "InputPeer", "flags.13?InputPeer"],
        ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
      ],
    ],
  ],
  [
    "messages.uploadEncryptedFile",
    [
      0x5057C497,
      [
        ["peer", "InputEncryptedChat", "InputEncryptedChat"],
        ["file", "InputEncryptedFile", "InputEncryptedFile"],
      ],
    ],
  ],
  [
    "messages.searchStickerSets",
    [
      0x35705B8A,
      [
        ["flags", flags, "#"],
        ["exclude_featured", "true", "flags.0?true"],
        ["q", "string", "string"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getSplitRanges",
    [
      0x1CFF7E08,
      [],
    ],
  ],
  [
    "messages.markDialogUnread",
    [
      0xC286D98F,
      [
        ["flags", flags, "#"],
        ["unread", "true", "flags.0?true"],
        ["peer", "InputDialogPeer", "InputDialogPeer"],
      ],
    ],
  ],
  [
    "messages.getDialogUnreadMarks",
    [
      0x22E24E22,
      [],
    ],
  ],
  [
    "messages.clearAllDrafts",
    [
      0x7E58EE9C,
      [],
    ],
  ],
  [
    "messages.updatePinnedMessage",
    [
      0xD2AAF7EC,
      [
        ["flags", flags, "#"],
        ["silent", "true", "flags.0?true"],
        ["unpin", "true", "flags.1?true"],
        ["pm_oneside", "true", "flags.2?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.sendVote",
    [
      0x10EA6184,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["options", [Uint8Array], "Vector<bytes>"],
      ],
    ],
  ],
  [
    "messages.getPollResults",
    [
      0x73BB643B,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getOnlines",
    [
      0x6E2BE050,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.editChatAbout",
    [
      0xDEF60797,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["about", "string", "string"],
      ],
    ],
  ],
  [
    "messages.editChatDefaultBannedRights",
    [
      0xA5866B41,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["banned_rights", "ChatBannedRights", "ChatBannedRights"],
      ],
    ],
  ],
  [
    "messages.getEmojiKeywords",
    [
      0x35A0E062,
      [
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getEmojiKeywordsDifference",
    [
      0x1508B6AF,
      [
        ["lang_code", "string", "string"],
        ["from_version", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getEmojiKeywordsLanguages",
    [
      0x4E9963B2,
      [
        ["lang_codes", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "messages.getEmojiURL",
    [
      0xD5B10C26,
      [
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getSearchCounters",
    [
      0x1BBCF300,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["saved_peer_id", "InputPeer", "flags.2?InputPeer"],
        ["top_msg_id", "number", "flags.0?int"],
        ["filters", ["MessagesFilter"], "Vector<MessagesFilter>"],
      ],
    ],
  ],
  [
    "messages.requestUrlAuth",
    [
      0x198FB446,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "flags.1?InputPeer"],
        ["msg_id", "number", "flags.1?int"],
        ["button_id", "number", "flags.1?int"],
        ["url", "string", "flags.2?string"],
      ],
    ],
  ],
  [
    "messages.acceptUrlAuth",
    [
      0xB12C7125,
      [
        ["flags", flags, "#"],
        ["write_allowed", "true", "flags.0?true"],
        ["peer", "InputPeer", "flags.1?InputPeer"],
        ["msg_id", "number", "flags.1?int"],
        ["button_id", "number", "flags.1?int"],
        ["url", "string", "flags.2?string"],
      ],
    ],
  ],
  [
    "messages.hidePeerSettingsBar",
    [
      0x4FACB138,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.getScheduledHistory",
    [
      0xF516760B,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getScheduledMessages",
    [
      0xBDBB0464,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.sendScheduledMessages",
    [
      0xBD38850A,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.deleteScheduledMessages",
    [
      0x59AE2B16,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.getPollVotes",
    [
      0xB86E380E,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["option", Uint8Array, "flags.0?bytes"],
        ["offset", "string", "flags.1?string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.toggleStickerSets",
    [
      0xB5052FEA,
      [
        ["flags", flags, "#"],
        ["uninstall", "true", "flags.0?true"],
        ["archive", "true", "flags.1?true"],
        ["unarchive", "true", "flags.2?true"],
        ["stickersets", ["InputStickerSet"], "Vector<InputStickerSet>"],
      ],
    ],
  ],
  [
    "messages.getDialogFilters",
    [
      0xEFD48C89,
      [],
    ],
  ],
  [
    "messages.getSuggestedDialogFilters",
    [
      0xA29CD42C,
      [],
    ],
  ],
  [
    "messages.updateDialogFilter",
    [
      0x1AD4A04A,
      [
        ["flags", flags, "#"],
        ["id", "number", "int"],
        ["filter", "DialogFilter", "flags.0?DialogFilter"],
      ],
    ],
  ],
  [
    "messages.updateDialogFiltersOrder",
    [
      0xC563C1E4,
      [
        ["order", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.getOldFeaturedStickers",
    [
      0x7ED094A1,
      [
        ["offset", "number", "int"],
        ["limit", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getReplies",
    [
      0x22DDD30C,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["offset_id", "number", "int"],
        ["offset_date", "number", "int"],
        ["add_offset", "number", "int"],
        ["limit", "number", "int"],
        ["max_id", "number", "int"],
        ["min_id", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getDiscussionMessage",
    [
      0x446972FD,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.readDiscussion",
    [
      0xF731A9F4,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["read_max_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.unpinAllMessages",
    [
      0xEE22B9A8,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["top_msg_id", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "messages.deleteChat",
    [
      0x5BD0EE50,
      [
        ["chat_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.deletePhoneCallHistory",
    [
      0xF9CBE409,
      [
        ["flags", flags, "#"],
        ["revoke", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "messages.checkHistoryImport",
    [
      0x43FE19F3,
      [
        ["import_head", "string", "string"],
      ],
    ],
  ],
  [
    "messages.initHistoryImport",
    [
      0x34090C3B,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["file", "InputFile", "InputFile"],
        ["media_count", "number", "int"],
      ],
    ],
  ],
  [
    "messages.uploadImportedMedia",
    [
      0x2A862092,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["import_id", "bigint", "long"],
        ["file_name", "string", "string"],
        ["media", "InputMedia", "InputMedia"],
      ],
    ],
  ],
  [
    "messages.startHistoryImport",
    [
      0xB43DF344,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["import_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getExportedChatInvites",
    [
      0xA2B5A3F6,
      [
        ["flags", flags, "#"],
        ["revoked", "true", "flags.3?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["admin_id", "InputUser", "InputUser"],
        ["offset_date", "number", "flags.2?int"],
        ["offset_link", "string", "flags.2?string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getExportedChatInvite",
    [
      0x73746F5C,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["link", "string", "string"],
      ],
    ],
  ],
  [
    "messages.editExportedChatInvite",
    [
      0xBDCA2F75,
      [
        ["flags", flags, "#"],
        ["revoked", "true", "flags.2?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["link", "string", "string"],
        ["expire_date", "number", "flags.0?int"],
        ["usage_limit", "number", "flags.1?int"],
        ["request_needed", "boolean", "flags.3?Bool"],
        ["title", "string", "flags.4?string"],
      ],
    ],
  ],
  [
    "messages.deleteRevokedExportedChatInvites",
    [
      0x56987BD5,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["admin_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "messages.deleteExportedChatInvite",
    [
      0xD464A42B,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["link", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getAdminsWithInvites",
    [
      0x3920E6EF,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.getChatInviteImporters",
    [
      0xDF04DD4E,
      [
        ["flags", flags, "#"],
        ["requested", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["link", "string", "flags.1?string"],
        ["q", "string", "flags.2?string"],
        ["offset_date", "number", "int"],
        ["offset_user", "InputUser", "InputUser"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.setHistoryTTL",
    [
      0xB80E5FE4,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["period", "number", "int"],
      ],
    ],
  ],
  [
    "messages.checkHistoryImportPeer",
    [
      0x5DC60F03,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.setChatTheme",
    [
      0xE63BE13F,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["emoticon", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getMessageReadParticipants",
    [
      0x31C1C44F,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getSearchResultsCalendar",
    [
      0x6AA3F6BD,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["saved_peer_id", "InputPeer", "flags.2?InputPeer"],
        ["filter", "MessagesFilter", "MessagesFilter"],
        ["offset_id", "number", "int"],
        ["offset_date", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getSearchResultsPositions",
    [
      0x9C7F2F10,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["saved_peer_id", "InputPeer", "flags.2?InputPeer"],
        ["filter", "MessagesFilter", "MessagesFilter"],
        ["offset_id", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.hideChatJoinRequest",
    [
      0x7FE7E815,
      [
        ["flags", flags, "#"],
        ["approved", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "messages.hideAllChatJoinRequests",
    [
      0xE085F4EA,
      [
        ["flags", flags, "#"],
        ["approved", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["link", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "messages.toggleNoForwards",
    [
      0xB11EAFA2,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.saveDefaultSendAs",
    [
      0xCCFDDF96,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["send_as", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.sendReaction",
    [
      0xD30D78D4,
      [
        ["flags", flags, "#"],
        ["big", "true", "flags.1?true"],
        ["add_to_recent", "true", "flags.2?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["reaction", ["Reaction"], "flags.0?Vector<Reaction>"],
      ],
    ],
  ],
  [
    "messages.getMessagesReactions",
    [
      0x8BBA90E6,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.getMessageReactionsList",
    [
      0x461B3F48,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["reaction", "Reaction", "flags.0?Reaction"],
        ["offset", "string", "flags.1?string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.setChatAvailableReactions",
    [
      0xFEB16771,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["available_reactions", "ChatReactions", "ChatReactions"],
      ],
    ],
  ],
  [
    "messages.getAvailableReactions",
    [
      0x18DEA0AC,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "messages.setDefaultReaction",
    [
      0x4F47A016,
      [
        ["reaction", "Reaction", "Reaction"],
      ],
    ],
  ],
  [
    "messages.translateText",
    [
      0x63183030,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "flags.0?InputPeer"],
        ["id", ["number"], "flags.0?Vector<int>"],
        ["text", ["TextWithEntities"], "flags.1?Vector<TextWithEntities>"],
        ["to_lang", "string", "string"],
      ],
    ],
  ],
  [
    "messages.getUnreadReactions",
    [
      0x3223495B,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["top_msg_id", "number", "flags.0?int"],
        ["offset_id", "number", "int"],
        ["add_offset", "number", "int"],
        ["limit", "number", "int"],
        ["max_id", "number", "int"],
        ["min_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.readReactions",
    [
      0x54AA7F8E,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["top_msg_id", "number", "flags.0?int"],
      ],
    ],
  ],
  [
    "messages.searchSentMedia",
    [
      0x107E31A0,
      [
        ["q", "string", "string"],
        ["filter", "MessagesFilter", "MessagesFilter"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getAttachMenuBots",
    [
      0x16FCC2CB,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getAttachMenuBot",
    [
      0x77216192,
      [
        ["bot", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "messages.toggleBotInAttachMenu",
    [
      0x69F59D69,
      [
        ["flags", flags, "#"],
        ["write_allowed", "true", "flags.0?true"],
        ["bot", "InputUser", "InputUser"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.requestWebView",
    [
      0x269DC2C1,
      [
        ["flags", flags, "#"],
        ["from_bot_menu", "true", "flags.4?true"],
        ["silent", "true", "flags.5?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["bot", "InputUser", "InputUser"],
        ["url", "string", "flags.1?string"],
        ["start_param", "string", "flags.3?string"],
        ["theme_params", "DataJSON", "flags.2?DataJSON"],
        ["platform", "string", "string"],
        ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
        ["send_as", "InputPeer", "flags.13?InputPeer"],
      ],
    ],
  ],
  [
    "messages.prolongWebView",
    [
      0xB0D81A83,
      [
        ["flags", flags, "#"],
        ["silent", "true", "flags.5?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["bot", "InputUser", "InputUser"],
        ["query_id", "bigint", "long"],
        ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
        ["send_as", "InputPeer", "flags.13?InputPeer"],
      ],
    ],
  ],
  [
    "messages.requestSimpleWebView",
    [
      0x1A46500A,
      [
        ["flags", flags, "#"],
        ["from_switch_webview", "true", "flags.1?true"],
        ["from_side_menu", "true", "flags.2?true"],
        ["bot", "InputUser", "InputUser"],
        ["url", "string", "flags.3?string"],
        ["start_param", "string", "flags.4?string"],
        ["theme_params", "DataJSON", "flags.0?DataJSON"],
        ["platform", "string", "string"],
      ],
    ],
  ],
  [
    "messages.sendWebViewResultMessage",
    [
      0x0A4314F5,
      [
        ["bot_query_id", "string", "string"],
        ["result", "InputBotInlineResult", "InputBotInlineResult"],
      ],
    ],
  ],
  [
    "messages.sendWebViewData",
    [
      0xDC0242C8,
      [
        ["bot", "InputUser", "InputUser"],
        ["random_id", "bigint", "long"],
        ["button_text", "string", "string"],
        ["data", "string", "string"],
      ],
    ],
  ],
  [
    "messages.transcribeAudio",
    [
      0x269E9A49,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.rateTranscribedAudio",
    [
      0x7F1D072F,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["transcription_id", "bigint", "long"],
        ["good", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.getCustomEmojiDocuments",
    [
      0xD9AB0F54,
      [
        ["document_id", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messages.getEmojiStickers",
    [
      0xFBFCA18F,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getFeaturedEmojiStickers",
    [
      0x0ECF6736,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.reportReaction",
    [
      0x3F64C076,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["reaction_peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.getTopReactions",
    [
      0xBB8125BA,
      [
        ["limit", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getRecentReactions",
    [
      0x39461DB2,
      [
        ["limit", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.clearRecentReactions",
    [
      0x9DFEEFB4,
      [],
    ],
  ],
  [
    "messages.getExtendedMedia",
    [
      0x84F80814,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.setDefaultHistoryTTL",
    [
      0x9EB51445,
      [
        ["period", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getDefaultHistoryTTL",
    [
      0x658B7188,
      [],
    ],
  ],
  [
    "messages.sendBotRequestedPeer",
    [
      0x91B2D060,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
        ["button_id", "number", "int"],
        ["requested_peers", ["InputPeer"], "Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "messages.getEmojiGroups",
    [
      0x7488CE5B,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getEmojiStatusGroups",
    [
      0x2ECD56CD,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getEmojiProfilePhotoGroups",
    [
      0x21A548F3,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "messages.searchCustomEmoji",
    [
      0x2C11C0D7,
      [
        ["emoticon", "string", "string"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.togglePeerTranslations",
    [
      0xE47CB579,
      [
        ["flags", flags, "#"],
        ["disabled", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "messages.getBotApp",
    [
      0x34FDC5C3,
      [
        ["app", "InputBotApp", "InputBotApp"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.requestAppWebView",
    [
      0x8C5A3B3C,
      [
        ["flags", flags, "#"],
        ["write_allowed", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["app", "InputBotApp", "InputBotApp"],
        ["start_param", "string", "flags.1?string"],
        ["theme_params", "DataJSON", "flags.2?DataJSON"],
        ["platform", "string", "string"],
      ],
    ],
  ],
  [
    "messages.setChatWallPaper",
    [
      0x8FFACAE1,
      [
        ["flags", flags, "#"],
        ["for_both", "true", "flags.3?true"],
        ["revert", "true", "flags.4?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["wallpaper", "InputWallPaper", "flags.0?InputWallPaper"],
        ["settings", "WallPaperSettings", "flags.2?WallPaperSettings"],
        ["id", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "messages.searchEmojiStickerSets",
    [
      0x92B4494C,
      [
        ["flags", flags, "#"],
        ["exclude_featured", "true", "flags.0?true"],
        ["q", "string", "string"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getSavedDialogs",
    [
      0x5381D21A,
      [
        ["flags", flags, "#"],
        ["exclude_pinned", "true", "flags.0?true"],
        ["offset_date", "number", "int"],
        ["offset_id", "number", "int"],
        ["offset_peer", "InputPeer", "InputPeer"],
        ["limit", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getSavedHistory",
    [
      0x3D9A414D,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["offset_id", "number", "int"],
        ["offset_date", "number", "int"],
        ["add_offset", "number", "int"],
        ["limit", "number", "int"],
        ["max_id", "number", "int"],
        ["min_id", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.deleteSavedHistory",
    [
      0x6E98102B,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["max_id", "number", "int"],
        ["min_date", "number", "flags.2?int"],
        ["max_date", "number", "flags.3?int"],
      ],
    ],
  ],
  [
    "messages.getPinnedSavedDialogs",
    [
      0xD63D94E0,
      [],
    ],
  ],
  [
    "messages.toggleSavedDialogPin",
    [
      0xAC81BBDE,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.0?true"],
        ["peer", "InputDialogPeer", "InputDialogPeer"],
      ],
    ],
  ],
  [
    "messages.reorderPinnedSavedDialogs",
    [
      0x8B716587,
      [
        ["flags", flags, "#"],
        ["force", "true", "flags.0?true"],
        ["order", ["InputDialogPeer"], "Vector<InputDialogPeer>"],
      ],
    ],
  ],
  [
    "messages.getSavedReactionTags",
    [
      0x3637E05B,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "flags.0?InputPeer"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.updateSavedReactionTag",
    [
      0x60297DEC,
      [
        ["flags", flags, "#"],
        ["reaction", "Reaction", "Reaction"],
        ["title", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "messages.getDefaultTagReactions",
    [
      0xBDF93428,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.getOutboxReadDate",
    [
      0x8C4BFE5D,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getQuickReplies",
    [
      0xD483F2A8,
      [
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.reorderQuickReplies",
    [
      0x60331907,
      [
        ["order", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.checkQuickReplyShortcut",
    [
      0xF1D0FBD3,
      [
        ["shortcut", "string", "string"],
      ],
    ],
  ],
  [
    "messages.editQuickReplyShortcut",
    [
      0x5C003CEF,
      [
        ["shortcut_id", "number", "int"],
        ["shortcut", "string", "string"],
      ],
    ],
  ],
  [
    "messages.deleteQuickReplyShortcut",
    [
      0x3CC04740,
      [
        ["shortcut_id", "number", "int"],
      ],
    ],
  ],
  [
    "messages.getQuickReplyMessages",
    [
      0x94A495C3,
      [
        ["flags", flags, "#"],
        ["shortcut_id", "number", "int"],
        ["id", ["number"], "flags.0?Vector<int>"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "messages.sendQuickReplyMessages",
    [
      0x6C750DE1,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["shortcut_id", "number", "int"],
        ["id", ["number"], "Vector<int>"],
        ["random_id", ["bigint"], "Vector<long>"],
      ],
    ],
  ],
  [
    "messages.deleteQuickReplyMessages",
    [
      0xE105E910,
      [
        ["shortcut_id", "number", "int"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "messages.toggleDialogFilterTags",
    [
      0xFD2DDA49,
      [
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "messages.getMyStickers",
    [
      0xD0B5E1FC,
      [
        ["offset_id", "bigint", "long"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "updates.getState",
    [
      0xEDD4882A,
      [],
    ],
  ],
  [
    "updates.getDifference",
    [
      0x19C2F763,
      [
        ["flags", flags, "#"],
        ["pts", "number", "int"],
        ["pts_limit", "number", "flags.1?int"],
        ["pts_total_limit", "number", "flags.0?int"],
        ["date", "number", "int"],
        ["qts", "number", "int"],
        ["qts_limit", "number", "flags.2?int"],
      ],
    ],
  ],
  [
    "updates.getChannelDifference",
    [
      0x03173D78,
      [
        ["flags", flags, "#"],
        ["force", "true", "flags.0?true"],
        ["channel", "InputChannel", "InputChannel"],
        ["filter", "ChannelMessagesFilter", "ChannelMessagesFilter"],
        ["pts", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "photos.updateProfilePhoto",
    [
      0x09E82039,
      [
        ["flags", flags, "#"],
        ["fallback", "true", "flags.0?true"],
        ["bot", "InputUser", "flags.1?InputUser"],
        ["id", "InputPhoto", "InputPhoto"],
      ],
    ],
  ],
  [
    "photos.uploadProfilePhoto",
    [
      0x0388A3B5,
      [
        ["flags", flags, "#"],
        ["fallback", "true", "flags.3?true"],
        ["bot", "InputUser", "flags.5?InputUser"],
        ["file", "InputFile", "flags.0?InputFile"],
        ["video", "InputFile", "flags.1?InputFile"],
        ["video_start_ts", "number", "flags.2?double"],
        ["video_emoji_markup", "VideoSize", "flags.4?VideoSize"],
      ],
    ],
  ],
  [
    "photos.deletePhotos",
    [
      0x87CF7F2F,
      [
        ["id", ["InputPhoto"], "Vector<InputPhoto>"],
      ],
    ],
  ],
  [
    "photos.getUserPhotos",
    [
      0x91CD32A8,
      [
        ["user_id", "InputUser", "InputUser"],
        ["offset", "number", "int"],
        ["max_id", "bigint", "long"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "photos.uploadContactProfilePhoto",
    [
      0xE14C4A71,
      [
        ["flags", flags, "#"],
        ["suggest", "true", "flags.3?true"],
        ["save", "true", "flags.4?true"],
        ["user_id", "InputUser", "InputUser"],
        ["file", "InputFile", "flags.0?InputFile"],
        ["video", "InputFile", "flags.1?InputFile"],
        ["video_start_ts", "number", "flags.2?double"],
        ["video_emoji_markup", "VideoSize", "flags.5?VideoSize"],
      ],
    ],
  ],
  [
    "upload.saveFilePart",
    [
      0xB304A621,
      [
        ["file_id", "bigint", "long"],
        ["file_part", "number", "int"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "upload.getFile",
    [
      0xBE5335BE,
      [
        ["flags", flags, "#"],
        ["precise", "true", "flags.0?true"],
        ["cdn_supported", "true", "flags.1?true"],
        ["location", "InputFileLocation", "InputFileLocation"],
        ["offset", "bigint", "long"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "upload.saveBigFilePart",
    [
      0xDE7B673D,
      [
        ["file_id", "bigint", "long"],
        ["file_part", "number", "int"],
        ["file_total_parts", "number", "int"],
        ["bytes", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "upload.getWebFile",
    [
      0x24E6818D,
      [
        ["location", "InputWebFileLocation", "InputWebFileLocation"],
        ["offset", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "upload.getCdnFile",
    [
      0x395F69DA,
      [
        ["file_token", Uint8Array, "bytes"],
        ["offset", "bigint", "long"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "upload.reuploadCdnFile",
    [
      0x9B2754A8,
      [
        ["file_token", Uint8Array, "bytes"],
        ["request_token", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "upload.getCdnFileHashes",
    [
      0x91DC3F31,
      [
        ["file_token", Uint8Array, "bytes"],
        ["offset", "bigint", "long"],
      ],
    ],
  ],
  [
    "upload.getFileHashes",
    [
      0x9156982A,
      [
        ["location", "InputFileLocation", "InputFileLocation"],
        ["offset", "bigint", "long"],
      ],
    ],
  ],
  [
    "help.getConfig",
    [
      0xC4F9186B,
      [],
    ],
  ],
  [
    "help.getNearestDc",
    [
      0x1FB33026,
      [],
    ],
  ],
  [
    "help.getAppUpdate",
    [
      0x522D5A7D,
      [
        ["source", "string", "string"],
      ],
    ],
  ],
  [
    "help.getInviteText",
    [
      0x4D392343,
      [],
    ],
  ],
  [
    "help.getSupport",
    [
      0x9CDF08CD,
      [],
    ],
  ],
  [
    "help.setBotUpdatesStatus",
    [
      0xEC22CFCD,
      [
        ["pending_updates_count", "number", "int"],
        ["message", "string", "string"],
      ],
    ],
  ],
  [
    "help.getCdnConfig",
    [
      0x52029342,
      [],
    ],
  ],
  [
    "help.getRecentMeUrls",
    [
      0x3DC0F114,
      [
        ["referer", "string", "string"],
      ],
    ],
  ],
  [
    "help.getTermsOfServiceUpdate",
    [
      0x2CA51FD1,
      [],
    ],
  ],
  [
    "help.acceptTermsOfService",
    [
      0xEE72F79A,
      [
        ["id", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "help.getDeepLinkInfo",
    [
      0x3FEDC75F,
      [
        ["path", "string", "string"],
      ],
    ],
  ],
  [
    "help.getAppConfig",
    [
      0x61E3F854,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "help.saveAppLog",
    [
      0x6F02F748,
      [
        ["events", ["InputAppEvent"], "Vector<InputAppEvent>"],
      ],
    ],
  ],
  [
    "help.getPassportConfig",
    [
      0xC661AD08,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "help.getSupportName",
    [
      0xD360E72C,
      [],
    ],
  ],
  [
    "help.getUserInfo",
    [
      0x038A08D3,
      [
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "help.editUserInfo",
    [
      0x66B91B70,
      [
        ["user_id", "InputUser", "InputUser"],
        ["message", "string", "string"],
        ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
      ],
    ],
  ],
  [
    "help.getPromoData",
    [
      0xC0977421,
      [],
    ],
  ],
  [
    "help.hidePromoData",
    [
      0x1E251C95,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "help.dismissSuggestion",
    [
      0xF50DBAA1,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["suggestion", "string", "string"],
      ],
    ],
  ],
  [
    "help.getCountriesList",
    [
      0x735787A8,
      [
        ["lang_code", "string", "string"],
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "help.getPremiumPromo",
    [
      0xB81B93D4,
      [],
    ],
  ],
  [
    "help.getPeerColors",
    [
      0xDA80F42F,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "help.getPeerProfileColors",
    [
      0xABCFA9FD,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "help.getTimezonesList",
    [
      0x49B30240,
      [
        ["hash", "number", "int"],
      ],
    ],
  ],
  [
    "channels.readHistory",
    [
      0xCC104937,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["max_id", "number", "int"],
      ],
    ],
  ],
  [
    "channels.deleteMessages",
    [
      0x84C1FD4E,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "channels.reportSpam",
    [
      0xF44A8315,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["participant", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "channels.getMessages",
    [
      0xAD8C9A23,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["id", ["InputMessage"], "Vector<InputMessage>"],
      ],
    ],
  ],
  [
    "channels.getParticipants",
    [
      0x77CED9D0,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["filter", "ChannelParticipantsFilter", "ChannelParticipantsFilter"],
        ["offset", "number", "int"],
        ["limit", "number", "int"],
        ["hash", "bigint", "long"],
      ],
    ],
  ],
  [
    "channels.getParticipant",
    [
      0xA0AB6CC6,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["participant", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "channels.getChannels",
    [
      0x0A7F6BBB,
      [
        ["id", ["InputChannel"], "Vector<InputChannel>"],
      ],
    ],
  ],
  [
    "channels.getFullChannel",
    [
      0x08736A09,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.createChannel",
    [
      0x91006707,
      [
        ["flags", flags, "#"],
        ["broadcast", "true", "flags.0?true"],
        ["megagroup", "true", "flags.1?true"],
        ["for_import", "true", "flags.3?true"],
        ["forum", "true", "flags.5?true"],
        ["title", "string", "string"],
        ["about", "string", "string"],
        ["geo_point", "InputGeoPoint", "flags.2?InputGeoPoint"],
        ["address", "string", "flags.2?string"],
        ["ttl_period", "number", "flags.4?int"],
      ],
    ],
  ],
  [
    "channels.editAdmin",
    [
      0xD33C8902,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["user_id", "InputUser", "InputUser"],
        ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
        ["rank", "string", "string"],
      ],
    ],
  ],
  [
    "channels.editTitle",
    [
      0x566DECD0,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "channels.editPhoto",
    [
      0xF12E57C9,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["photo", "InputChatPhoto", "InputChatPhoto"],
      ],
    ],
  ],
  [
    "channels.checkUsername",
    [
      0x10E6BD2C,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["username", "string", "string"],
      ],
    ],
  ],
  [
    "channels.updateUsername",
    [
      0x3514B3DE,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["username", "string", "string"],
      ],
    ],
  ],
  [
    "channels.joinChannel",
    [
      0x24B524C5,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.leaveChannel",
    [
      0xF836AA95,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.inviteToChannel",
    [
      0xC9E33D54,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["users", ["InputUser"], "Vector<InputUser>"],
      ],
    ],
  ],
  [
    "channels.deleteChannel",
    [
      0xC0111FE3,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.exportMessageLink",
    [
      0xE63FADEB,
      [
        ["flags", flags, "#"],
        ["grouped", "true", "flags.0?true"],
        ["thread", "true", "flags.1?true"],
        ["channel", "InputChannel", "InputChannel"],
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "channels.toggleSignatures",
    [
      0x1F69B606,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.getAdminedPublicChannels",
    [
      0xF8B036AF,
      [
        ["flags", flags, "#"],
        ["by_location", "true", "flags.0?true"],
        ["check_limit", "true", "flags.1?true"],
        ["for_personal", "true", "flags.2?true"],
      ],
    ],
  ],
  [
    "channels.editBanned",
    [
      0x96E6CD81,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["participant", "InputPeer", "InputPeer"],
        ["banned_rights", "ChatBannedRights", "ChatBannedRights"],
      ],
    ],
  ],
  [
    "channels.getAdminLog",
    [
      0x33DDF480,
      [
        ["flags", flags, "#"],
        ["channel", "InputChannel", "InputChannel"],
        ["q", "string", "string"],
        ["events_filter", "ChannelAdminLogEventsFilter", "flags.0?ChannelAdminLogEventsFilter"],
        ["admins", ["InputUser"], "flags.1?Vector<InputUser>"],
        ["max_id", "bigint", "long"],
        ["min_id", "bigint", "long"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "channels.setStickers",
    [
      0xEA8CA4F9,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["stickerset", "InputStickerSet", "InputStickerSet"],
      ],
    ],
  ],
  [
    "channels.readMessageContents",
    [
      0xEAB5DC38,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "channels.deleteHistory",
    [
      0x9BAA9647,
      [
        ["flags", flags, "#"],
        ["for_everyone", "true", "flags.0?true"],
        ["channel", "InputChannel", "InputChannel"],
        ["max_id", "number", "int"],
      ],
    ],
  ],
  [
    "channels.togglePreHistoryHidden",
    [
      0xEABBB94C,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.getLeftChannels",
    [
      0x8341ECC0,
      [
        ["offset", "number", "int"],
      ],
    ],
  ],
  [
    "channels.getGroupsForDiscussion",
    [
      0xF5DAD378,
      [],
    ],
  ],
  [
    "channels.setDiscussionGroup",
    [
      0x40582BB2,
      [
        ["broadcast", "InputChannel", "InputChannel"],
        ["group", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.editCreator",
    [
      0x8F38CD1F,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["user_id", "InputUser", "InputUser"],
        ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
      ],
    ],
  ],
  [
    "channels.editLocation",
    [
      0x58E63F6D,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["geo_point", "InputGeoPoint", "InputGeoPoint"],
        ["address", "string", "string"],
      ],
    ],
  ],
  [
    "channels.toggleSlowMode",
    [
      0xEDD49EF0,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["seconds", "number", "int"],
      ],
    ],
  ],
  [
    "channels.getInactiveChannels",
    [
      0x11E831EE,
      [],
    ],
  ],
  [
    "channels.convertToGigagroup",
    [
      0x0B290C69,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.viewSponsoredMessage",
    [
      0xBEAEDB94,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["random_id", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "channels.getSponsoredMessages",
    [
      0xEC210FBF,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.getSendAs",
    [
      0x0DC770EE,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "channels.deleteParticipantHistory",
    [
      0x367544DB,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["participant", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "channels.toggleJoinToSend",
    [
      0xE4CB9580,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.toggleJoinRequest",
    [
      0x4C2985B6,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.reorderUsernames",
    [
      0xB45CED1D,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["order", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "channels.toggleUsername",
    [
      0x50F24105,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["username", "string", "string"],
        ["active", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.deactivateAllUsernames",
    [
      0x0A245DD3,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.toggleForum",
    [
      0xA4298B29,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.createForumTopic",
    [
      0xF40C0224,
      [
        ["flags", flags, "#"],
        ["channel", "InputChannel", "InputChannel"],
        ["title", "string", "string"],
        ["icon_color", "number", "flags.0?int"],
        ["icon_emoji_id", "bigint", "flags.3?long"],
        ["random_id", "bigint", "long"],
        ["send_as", "InputPeer", "flags.2?InputPeer"],
      ],
    ],
  ],
  [
    "channels.getForumTopics",
    [
      0x0DE560D1,
      [
        ["flags", flags, "#"],
        ["channel", "InputChannel", "InputChannel"],
        ["q", "string", "flags.0?string"],
        ["offset_date", "number", "int"],
        ["offset_id", "number", "int"],
        ["offset_topic", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "channels.getForumTopicsByID",
    [
      0xB0831EB9,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["topics", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "channels.editForumTopic",
    [
      0xF4DFA185,
      [
        ["flags", flags, "#"],
        ["channel", "InputChannel", "InputChannel"],
        ["topic_id", "number", "int"],
        ["title", "string", "flags.0?string"],
        ["icon_emoji_id", "bigint", "flags.1?long"],
        ["closed", "boolean", "flags.2?Bool"],
        ["hidden", "boolean", "flags.3?Bool"],
      ],
    ],
  ],
  [
    "channels.updatePinnedForumTopic",
    [
      0x6C2D9026,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["topic_id", "number", "int"],
        ["pinned", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.deleteTopicHistory",
    [
      0x34435F2D,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["top_msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "channels.reorderPinnedForumTopics",
    [
      0x2950A18F,
      [
        ["flags", flags, "#"],
        ["force", "true", "flags.0?true"],
        ["channel", "InputChannel", "InputChannel"],
        ["order", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "channels.toggleAntiSpam",
    [
      0x68F3E4EB,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.reportAntiSpamFalsePositive",
    [
      0xA850A693,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "channels.toggleParticipantsHidden",
    [
      0x6A6E7854,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.clickSponsoredMessage",
    [
      0x18AFBC93,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["random_id", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "channels.updateColor",
    [
      0xD8AA3671,
      [
        ["flags", flags, "#"],
        ["for_profile", "true", "flags.1?true"],
        ["channel", "InputChannel", "InputChannel"],
        ["color", "number", "flags.2?int"],
        ["background_emoji_id", "bigint", "flags.0?long"],
      ],
    ],
  ],
  [
    "channels.toggleViewForumAsMessages",
    [
      0x9738BB15,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["enabled", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "channels.getChannelRecommendations",
    [
      0x83B70D97,
      [
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "channels.updateEmojiStatus",
    [
      0xF0D3E6A8,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["emoji_status", "EmojiStatus", "EmojiStatus"],
      ],
    ],
  ],
  [
    "channels.setBoostsToUnblockRestrictions",
    [
      0xAD399CEE,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["boosts", "number", "int"],
      ],
    ],
  ],
  [
    "channels.setEmojiStickers",
    [
      0x3CD930B7,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["stickerset", "InputStickerSet", "InputStickerSet"],
      ],
    ],
  ],
  [
    "channels.reportSponsoredMessage",
    [
      0xAF8FF6B9,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["random_id", Uint8Array, "bytes"],
        ["option", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "channels.restrictSponsoredMessages",
    [
      0x9AE91519,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["restricted", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "bots.sendCustomRequest",
    [
      0xAA2769ED,
      [
        ["custom_method", "string", "string"],
        ["params", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "bots.answerWebhookJSONQuery",
    [
      0xE6213F4D,
      [
        ["query_id", "bigint", "long"],
        ["data", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "bots.setBotCommands",
    [
      0x0517165A,
      [
        ["scope", "BotCommandScope", "BotCommandScope"],
        ["lang_code", "string", "string"],
        ["commands", ["BotCommand"], "Vector<BotCommand>"],
      ],
    ],
  ],
  [
    "bots.resetBotCommands",
    [
      0x3D8DE0F9,
      [
        ["scope", "BotCommandScope", "BotCommandScope"],
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "bots.getBotCommands",
    [
      0xE34C0DD6,
      [
        ["scope", "BotCommandScope", "BotCommandScope"],
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "bots.setBotMenuButton",
    [
      0x4504D54F,
      [
        ["user_id", "InputUser", "InputUser"],
        ["button", "BotMenuButton", "BotMenuButton"],
      ],
    ],
  ],
  [
    "bots.getBotMenuButton",
    [
      0x9C60EB28,
      [
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "bots.setBotBroadcastDefaultAdminRights",
    [
      0x788464E1,
      [
        ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
      ],
    ],
  ],
  [
    "bots.setBotGroupDefaultAdminRights",
    [
      0x925EC9EA,
      [
        ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
      ],
    ],
  ],
  [
    "bots.setBotInfo",
    [
      0x10CF3123,
      [
        ["flags", flags, "#"],
        ["bot", "InputUser", "flags.2?InputUser"],
        ["lang_code", "string", "string"],
        ["name", "string", "flags.3?string"],
        ["about", "string", "flags.0?string"],
        ["description", "string", "flags.1?string"],
      ],
    ],
  ],
  [
    "bots.getBotInfo",
    [
      0xDCD914FD,
      [
        ["flags", flags, "#"],
        ["bot", "InputUser", "flags.0?InputUser"],
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "bots.reorderUsernames",
    [
      0x9709B1C2,
      [
        ["bot", "InputUser", "InputUser"],
        ["order", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "bots.toggleUsername",
    [
      0x053CA973,
      [
        ["bot", "InputUser", "InputUser"],
        ["username", "string", "string"],
        ["active", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "bots.canSendMessage",
    [
      0x1359F4E6,
      [
        ["bot", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "bots.allowSendMessage",
    [
      0xF132E3EF,
      [
        ["bot", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "bots.invokeWebViewCustomMethod",
    [
      0x087FC5E7,
      [
        ["bot", "InputUser", "InputUser"],
        ["custom_method", "string", "string"],
        ["params", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "payments.getPaymentForm",
    [
      0x37148DBB,
      [
        ["flags", flags, "#"],
        ["invoice", "InputInvoice", "InputInvoice"],
        ["theme_params", "DataJSON", "flags.0?DataJSON"],
      ],
    ],
  ],
  [
    "payments.getPaymentReceipt",
    [
      0x2478D1CC,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "payments.validateRequestedInfo",
    [
      0xB6C8F12B,
      [
        ["flags", flags, "#"],
        ["save", "true", "flags.0?true"],
        ["invoice", "InputInvoice", "InputInvoice"],
        ["info", "PaymentRequestedInfo", "PaymentRequestedInfo"],
      ],
    ],
  ],
  [
    "payments.sendPaymentForm",
    [
      0x2D03522F,
      [
        ["flags", flags, "#"],
        ["form_id", "bigint", "long"],
        ["invoice", "InputInvoice", "InputInvoice"],
        ["requested_info_id", "string", "flags.0?string"],
        ["shipping_option_id", "string", "flags.1?string"],
        ["credentials", "InputPaymentCredentials", "InputPaymentCredentials"],
        ["tip_amount", "bigint", "flags.2?long"],
      ],
    ],
  ],
  [
    "payments.getSavedInfo",
    [
      0x227D824B,
      [],
    ],
  ],
  [
    "payments.clearSavedInfo",
    [
      0xD83D70C1,
      [
        ["flags", flags, "#"],
        ["credentials", "true", "flags.0?true"],
        ["info", "true", "flags.1?true"],
      ],
    ],
  ],
  [
    "payments.getBankCardData",
    [
      0x2E79D779,
      [
        ["number", "string", "string"],
      ],
    ],
  ],
  [
    "payments.exportInvoice",
    [
      0x0F91B065,
      [
        ["invoice_media", "InputMedia", "InputMedia"],
      ],
    ],
  ],
  [
    "payments.assignAppStoreTransaction",
    [
      0x80ED747D,
      [
        ["receipt", Uint8Array, "bytes"],
        ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
      ],
    ],
  ],
  [
    "payments.assignPlayMarketTransaction",
    [
      0xDFFD50D3,
      [
        ["receipt", "DataJSON", "DataJSON"],
        ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
      ],
    ],
  ],
  [
    "payments.canPurchasePremium",
    [
      0x9FC19EB6,
      [
        ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
      ],
    ],
  ],
  [
    "payments.getPremiumGiftCodeOptions",
    [
      0x2757BA54,
      [
        ["flags", flags, "#"],
        ["boost_peer", "InputPeer", "flags.0?InputPeer"],
      ],
    ],
  ],
  [
    "payments.checkGiftCode",
    [
      0x8E51B4C1,
      [
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "payments.applyGiftCode",
    [
      0xF6E26854,
      [
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "payments.getGiveawayInfo",
    [
      0xF4239425,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "payments.launchPrepaidGiveaway",
    [
      0x5FF58F20,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["giveaway_id", "bigint", "long"],
        ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
      ],
    ],
  ],
  [
    "stickers.createStickerSet",
    [
      0x9021AB67,
      [
        ["flags", flags, "#"],
        ["masks", "true", "flags.0?true"],
        ["emojis", "true", "flags.5?true"],
        ["text_color", "true", "flags.6?true"],
        ["user_id", "InputUser", "InputUser"],
        ["title", "string", "string"],
        ["short_name", "string", "string"],
        ["thumb", "InputDocument", "flags.2?InputDocument"],
        ["stickers", ["InputStickerSetItem"], "Vector<InputStickerSetItem>"],
        ["software", "string", "flags.3?string"],
      ],
    ],
  ],
  [
    "stickers.removeStickerFromSet",
    [
      0xF7760F51,
      [
        ["sticker", "InputDocument", "InputDocument"],
      ],
    ],
  ],
  [
    "stickers.changeStickerPosition",
    [
      0xFFB6D4CA,
      [
        ["sticker", "InputDocument", "InputDocument"],
        ["position", "number", "int"],
      ],
    ],
  ],
  [
    "stickers.addStickerToSet",
    [
      0x8653FEBE,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["sticker", "InputStickerSetItem", "InputStickerSetItem"],
      ],
    ],
  ],
  [
    "stickers.setStickerSetThumb",
    [
      0xA76A5392,
      [
        ["flags", flags, "#"],
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["thumb", "InputDocument", "flags.0?InputDocument"],
        ["thumb_document_id", "bigint", "flags.1?long"],
      ],
    ],
  ],
  [
    "stickers.checkShortName",
    [
      0x284B3639,
      [
        ["short_name", "string", "string"],
      ],
    ],
  ],
  [
    "stickers.suggestShortName",
    [
      0x4DAFC503,
      [
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "stickers.changeSticker",
    [
      0xF5537EBC,
      [
        ["flags", flags, "#"],
        ["sticker", "InputDocument", "InputDocument"],
        ["emoji", "string", "flags.0?string"],
        ["mask_coords", "MaskCoords", "flags.1?MaskCoords"],
        ["keywords", "string", "flags.2?string"],
      ],
    ],
  ],
  [
    "stickers.renameStickerSet",
    [
      0x124B1C00,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "stickers.deleteStickerSet",
    [
      0x87704394,
      [
        ["stickerset", "InputStickerSet", "InputStickerSet"],
      ],
    ],
  ],
  [
    "stickers.replaceSticker",
    [
      0x4696459A,
      [
        ["sticker", "InputDocument", "InputDocument"],
        ["new_sticker", "InputStickerSetItem", "InputStickerSetItem"],
      ],
    ],
  ],
  [
    "phone.getCallConfig",
    [
      0x55451FA9,
      [],
    ],
  ],
  [
    "phone.requestCall",
    [
      0x42FF96ED,
      [
        ["flags", flags, "#"],
        ["video", "true", "flags.0?true"],
        ["user_id", "InputUser", "InputUser"],
        ["random_id", "number", "int"],
        ["g_a_hash", Uint8Array, "bytes"],
        ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
      ],
    ],
  ],
  [
    "phone.acceptCall",
    [
      0x3BD2B4A0,
      [
        ["peer", "InputPhoneCall", "InputPhoneCall"],
        ["g_b", Uint8Array, "bytes"],
        ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
      ],
    ],
  ],
  [
    "phone.confirmCall",
    [
      0x2EFE1722,
      [
        ["peer", "InputPhoneCall", "InputPhoneCall"],
        ["g_a", Uint8Array, "bytes"],
        ["key_fingerprint", "bigint", "long"],
        ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
      ],
    ],
  ],
  [
    "phone.receivedCall",
    [
      0x17D54F61,
      [
        ["peer", "InputPhoneCall", "InputPhoneCall"],
      ],
    ],
  ],
  [
    "phone.discardCall",
    [
      0xB2CBC1C0,
      [
        ["flags", flags, "#"],
        ["video", "true", "flags.0?true"],
        ["peer", "InputPhoneCall", "InputPhoneCall"],
        ["duration", "number", "int"],
        ["reason", "PhoneCallDiscardReason", "PhoneCallDiscardReason"],
        ["connection_id", "bigint", "long"],
      ],
    ],
  ],
  [
    "phone.setCallRating",
    [
      0x59EAD627,
      [
        ["flags", flags, "#"],
        ["user_initiative", "true", "flags.0?true"],
        ["peer", "InputPhoneCall", "InputPhoneCall"],
        ["rating", "number", "int"],
        ["comment", "string", "string"],
      ],
    ],
  ],
  [
    "phone.saveCallDebug",
    [
      0x277ADD7E,
      [
        ["peer", "InputPhoneCall", "InputPhoneCall"],
        ["debug", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "phone.sendSignalingData",
    [
      0xFF7A9383,
      [
        ["peer", "InputPhoneCall", "InputPhoneCall"],
        ["data", Uint8Array, "bytes"],
      ],
    ],
  ],
  [
    "phone.createGroupCall",
    [
      0x48CDC6D8,
      [
        ["flags", flags, "#"],
        ["rtmp_stream", "true", "flags.2?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["random_id", "number", "int"],
        ["title", "string", "flags.0?string"],
        ["schedule_date", "number", "flags.1?int"],
      ],
    ],
  ],
  [
    "phone.joinGroupCall",
    [
      0xB132FF7B,
      [
        ["flags", flags, "#"],
        ["muted", "true", "flags.0?true"],
        ["video_stopped", "true", "flags.2?true"],
        ["call", "InputGroupCall", "InputGroupCall"],
        ["join_as", "InputPeer", "InputPeer"],
        ["invite_hash", "string", "flags.1?string"],
        ["params", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "phone.leaveGroupCall",
    [
      0x500377F9,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["source", "number", "int"],
      ],
    ],
  ],
  [
    "phone.inviteToGroupCall",
    [
      0x7B393160,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["users", ["InputUser"], "Vector<InputUser>"],
      ],
    ],
  ],
  [
    "phone.discardGroupCall",
    [
      0x7A777135,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
      ],
    ],
  ],
  [
    "phone.toggleGroupCallSettings",
    [
      0x74BBB43D,
      [
        ["flags", flags, "#"],
        ["reset_invite_hash", "true", "flags.1?true"],
        ["call", "InputGroupCall", "InputGroupCall"],
        ["join_muted", "boolean", "flags.0?Bool"],
      ],
    ],
  ],
  [
    "phone.getGroupCall",
    [
      0x041845DB,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "phone.getGroupParticipants",
    [
      0xC558D8AB,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["ids", ["InputPeer"], "Vector<InputPeer>"],
        ["sources", ["number"], "Vector<int>"],
        ["offset", "string", "string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "phone.checkGroupCall",
    [
      0xB59CF977,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["sources", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "phone.toggleGroupCallRecord",
    [
      0xF128C708,
      [
        ["flags", flags, "#"],
        ["start", "true", "flags.0?true"],
        ["video", "true", "flags.2?true"],
        ["call", "InputGroupCall", "InputGroupCall"],
        ["title", "string", "flags.1?string"],
        ["video_portrait", "boolean", "flags.2?Bool"],
      ],
    ],
  ],
  [
    "phone.editGroupCallParticipant",
    [
      0xA5273ABF,
      [
        ["flags", flags, "#"],
        ["call", "InputGroupCall", "InputGroupCall"],
        ["participant", "InputPeer", "InputPeer"],
        ["muted", "boolean", "flags.0?Bool"],
        ["volume", "number", "flags.1?int"],
        ["raise_hand", "boolean", "flags.2?Bool"],
        ["video_stopped", "boolean", "flags.3?Bool"],
        ["video_paused", "boolean", "flags.4?Bool"],
        ["presentation_paused", "boolean", "flags.5?Bool"],
      ],
    ],
  ],
  [
    "phone.editGroupCallTitle",
    [
      0x1CA6AC0A,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["title", "string", "string"],
      ],
    ],
  ],
  [
    "phone.getGroupCallJoinAs",
    [
      0xEF7C213A,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "phone.exportGroupCallInvite",
    [
      0xE6AA647F,
      [
        ["flags", flags, "#"],
        ["can_self_unmute", "true", "flags.0?true"],
        ["call", "InputGroupCall", "InputGroupCall"],
      ],
    ],
  ],
  [
    "phone.toggleGroupCallStartSubscription",
    [
      0x219C34E6,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["subscribed", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "phone.startScheduledGroupCall",
    [
      0x5680E342,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
      ],
    ],
  ],
  [
    "phone.saveDefaultGroupCallJoinAs",
    [
      0x575E1F8C,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["join_as", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "phone.joinGroupCallPresentation",
    [
      0xCBEA6BC4,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
        ["params", "DataJSON", "DataJSON"],
      ],
    ],
  ],
  [
    "phone.leaveGroupCallPresentation",
    [
      0x1C50D144,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
      ],
    ],
  ],
  [
    "phone.getGroupCallStreamChannels",
    [
      0x1AB21940,
      [
        ["call", "InputGroupCall", "InputGroupCall"],
      ],
    ],
  ],
  [
    "phone.getGroupCallStreamRtmpUrl",
    [
      0xDEB3ABBF,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["revoke", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "phone.saveCallLog",
    [
      0x41248786,
      [
        ["peer", "InputPhoneCall", "InputPhoneCall"],
        ["file", "InputFile", "InputFile"],
      ],
    ],
  ],
  [
    "langpack.getLangPack",
    [
      0xF2F2330A,
      [
        ["lang_pack", "string", "string"],
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "langpack.getStrings",
    [
      0xEFEA3803,
      [
        ["lang_pack", "string", "string"],
        ["lang_code", "string", "string"],
        ["keys", ["string"], "Vector<string>"],
      ],
    ],
  ],
  [
    "langpack.getDifference",
    [
      0xCD984AA5,
      [
        ["lang_pack", "string", "string"],
        ["lang_code", "string", "string"],
        ["from_version", "number", "int"],
      ],
    ],
  ],
  [
    "langpack.getLanguages",
    [
      0x42C6978F,
      [
        ["lang_pack", "string", "string"],
      ],
    ],
  ],
  [
    "langpack.getLanguage",
    [
      0x6A596502,
      [
        ["lang_pack", "string", "string"],
        ["lang_code", "string", "string"],
      ],
    ],
  ],
  [
    "folders.editPeerFolders",
    [
      0x6847D0AB,
      [
        ["folder_peers", ["InputFolderPeer"], "Vector<InputFolderPeer>"],
      ],
    ],
  ],
  [
    "stats.getBroadcastStats",
    [
      0xAB42441A,
      [
        ["flags", flags, "#"],
        ["dark", "true", "flags.0?true"],
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "stats.loadAsyncGraph",
    [
      0x621D5FA0,
      [
        ["flags", flags, "#"],
        ["token", "string", "string"],
        ["x", "bigint", "flags.0?long"],
      ],
    ],
  ],
  [
    "stats.getMegagroupStats",
    [
      0xDCDF8607,
      [
        ["flags", flags, "#"],
        ["dark", "true", "flags.0?true"],
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "stats.getMessagePublicForwards",
    [
      0x5F150144,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["msg_id", "number", "int"],
        ["offset", "string", "string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "stats.getMessageStats",
    [
      0xB6E0A3F5,
      [
        ["flags", flags, "#"],
        ["dark", "true", "flags.0?true"],
        ["channel", "InputChannel", "InputChannel"],
        ["msg_id", "number", "int"],
      ],
    ],
  ],
  [
    "stats.getStoryStats",
    [
      0x374FEF40,
      [
        ["flags", flags, "#"],
        ["dark", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "stats.getStoryPublicForwards",
    [
      0xA6437EF6,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["offset", "string", "string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "stats.getBroadcastRevenueStats",
    [
      0x75DFB671,
      [
        ["flags", flags, "#"],
        ["dark", "true", "flags.0?true"],
        ["channel", "InputChannel", "InputChannel"],
      ],
    ],
  ],
  [
    "stats.getBroadcastRevenueWithdrawalUrl",
    [
      0x2A65EF73,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
      ],
    ],
  ],
  [
    "stats.getBroadcastRevenueTransactions",
    [
      0x0069280F,
      [
        ["channel", "InputChannel", "InputChannel"],
        ["offset", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "chatlists.exportChatlistInvite",
    [
      0x8472478E,
      [
        ["chatlist", "InputChatlist", "InputChatlist"],
        ["title", "string", "string"],
        ["peers", ["InputPeer"], "Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "chatlists.deleteExportedInvite",
    [
      0x719C5C5E,
      [
        ["chatlist", "InputChatlist", "InputChatlist"],
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "chatlists.editExportedInvite",
    [
      0x653DB63D,
      [
        ["flags", flags, "#"],
        ["chatlist", "InputChatlist", "InputChatlist"],
        ["slug", "string", "string"],
        ["title", "string", "flags.1?string"],
        ["peers", ["InputPeer"], "flags.2?Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "chatlists.getExportedInvites",
    [
      0xCE03DA83,
      [
        ["chatlist", "InputChatlist", "InputChatlist"],
      ],
    ],
  ],
  [
    "chatlists.checkChatlistInvite",
    [
      0x41C10FFF,
      [
        ["slug", "string", "string"],
      ],
    ],
  ],
  [
    "chatlists.joinChatlistInvite",
    [
      0xA6B1E39A,
      [
        ["slug", "string", "string"],
        ["peers", ["InputPeer"], "Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "chatlists.getChatlistUpdates",
    [
      0x89419521,
      [
        ["chatlist", "InputChatlist", "InputChatlist"],
      ],
    ],
  ],
  [
    "chatlists.joinChatlistUpdates",
    [
      0xE089F8F5,
      [
        ["chatlist", "InputChatlist", "InputChatlist"],
        ["peers", ["InputPeer"], "Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "chatlists.hideChatlistUpdates",
    [
      0x66E486FB,
      [
        ["chatlist", "InputChatlist", "InputChatlist"],
      ],
    ],
  ],
  [
    "chatlists.getLeaveChatlistSuggestions",
    [
      0xFDBCD714,
      [
        ["chatlist", "InputChatlist", "InputChatlist"],
      ],
    ],
  ],
  [
    "chatlists.leaveChatlist",
    [
      0x74FAE13A,
      [
        ["chatlist", "InputChatlist", "InputChatlist"],
        ["peers", ["InputPeer"], "Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "stories.canSendStory",
    [
      0xC7DFDFDD,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "stories.sendStory",
    [
      0xE4E6694B,
      [
        ["flags", flags, "#"],
        ["pinned", "true", "flags.2?true"],
        ["noforwards", "true", "flags.4?true"],
        ["fwd_modified", "true", "flags.7?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["media", "InputMedia", "InputMedia"],
        ["media_areas", ["MediaArea"], "flags.5?Vector<MediaArea>"],
        ["caption", "string", "flags.0?string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["privacy_rules", ["InputPrivacyRule"], "Vector<InputPrivacyRule>"],
        ["random_id", "bigint", "long"],
        ["period", "number", "flags.3?int"],
        ["fwd_from_id", "InputPeer", "flags.6?InputPeer"],
        ["fwd_from_story", "number", "flags.6?int"],
      ],
    ],
  ],
  [
    "stories.editStory",
    [
      0xB583BA46,
      [
        ["flags", flags, "#"],
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["media", "InputMedia", "flags.0?InputMedia"],
        ["media_areas", ["MediaArea"], "flags.3?Vector<MediaArea>"],
        ["caption", "string", "flags.1?string"],
        ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
        ["privacy_rules", ["InputPrivacyRule"], "flags.2?Vector<InputPrivacyRule>"],
      ],
    ],
  ],
  [
    "stories.deleteStories",
    [
      0xAE59DB5F,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "stories.togglePinned",
    [
      0x9A75A1EF,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
        ["pinned", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "stories.getAllStories",
    [
      0xEEB0D625,
      [
        ["flags", flags, "#"],
        ["next", "true", "flags.1?true"],
        ["hidden", "true", "flags.2?true"],
        ["state", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "stories.getPinnedStories",
    [
      0x5821A5DC,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["offset_id", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "stories.getStoriesArchive",
    [
      0xB4352016,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["offset_id", "number", "int"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "stories.getStoriesByID",
    [
      0x5774CA74,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "stories.toggleAllStoriesHidden",
    [
      0x7C2557C4,
      [
        ["hidden", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "stories.readStories",
    [
      0xA556DAC8,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["max_id", "number", "int"],
      ],
    ],
  ],
  [
    "stories.incrementStoryViews",
    [
      0xB2028AFB,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "stories.getStoryViewsList",
    [
      0x7ED23C57,
      [
        ["flags", flags, "#"],
        ["just_contacts", "true", "flags.0?true"],
        ["reactions_first", "true", "flags.2?true"],
        ["forwards_first", "true", "flags.3?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["q", "string", "flags.1?string"],
        ["id", "number", "int"],
        ["offset", "string", "string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "stories.getStoriesViews",
    [
      0x28E16CC8,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
      ],
    ],
  ],
  [
    "stories.exportStoryLink",
    [
      0x7B8DEF20,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
      ],
    ],
  ],
  [
    "stories.report",
    [
      0x1923FA8C,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["id", ["number"], "Vector<int>"],
        ["reason", "ReportReason", "ReportReason"],
        ["message", "string", "string"],
      ],
    ],
  ],
  [
    "stories.activateStealthMode",
    [
      0x57BBD166,
      [
        ["flags", flags, "#"],
        ["past", "true", "flags.0?true"],
        ["future", "true", "flags.1?true"],
      ],
    ],
  ],
  [
    "stories.sendReaction",
    [
      0x7FD736B2,
      [
        ["flags", flags, "#"],
        ["add_to_recent", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["story_id", "number", "int"],
        ["reaction", "Reaction", "Reaction"],
      ],
    ],
  ],
  [
    "stories.getPeerStories",
    [
      0x2C4ADA50,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "stories.getAllReadPeerStories",
    [
      0x9B5AE7F9,
      [],
    ],
  ],
  [
    "stories.getPeerMaxIDs",
    [
      0x535983C3,
      [
        ["id", ["InputPeer"], "Vector<InputPeer>"],
      ],
    ],
  ],
  [
    "stories.getChatsToSend",
    [
      0xA56A8B60,
      [],
    ],
  ],
  [
    "stories.togglePeerStoriesHidden",
    [
      0xBD0415C4,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["hidden", "boolean", "Bool"],
      ],
    ],
  ],
  [
    "stories.getStoryReactionsList",
    [
      0xB9B2881F,
      [
        ["flags", flags, "#"],
        ["forwards_first", "true", "flags.2?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["id", "number", "int"],
        ["reaction", "Reaction", "flags.0?Reaction"],
        ["offset", "string", "flags.1?string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "premium.getBoostsList",
    [
      0x60F67660,
      [
        ["flags", flags, "#"],
        ["gifts", "true", "flags.0?true"],
        ["peer", "InputPeer", "InputPeer"],
        ["offset", "string", "string"],
        ["limit", "number", "int"],
      ],
    ],
  ],
  [
    "premium.getMyBoosts",
    [
      0x0BE77B4A,
      [],
    ],
  ],
  [
    "premium.applyBoost",
    [
      0x6B7DA746,
      [
        ["flags", flags, "#"],
        ["slots", ["number"], "flags.0?Vector<int>"],
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "premium.getBoostsStatus",
    [
      0x042F1F61,
      [
        ["peer", "InputPeer", "InputPeer"],
      ],
    ],
  ],
  [
    "premium.getUserBoosts",
    [
      0x39854D1F,
      [
        ["peer", "InputPeer", "InputPeer"],
        ["user_id", "InputUser", "InputUser"],
      ],
    ],
  ],
  [
    "smsjobs.isEligibleToJoin",
    [
      0x0EDC39D0,
      [],
    ],
  ],
  [
    "smsjobs.join",
    [
      0xA74ECE2D,
      [],
    ],
  ],
  [
    "smsjobs.leave",
    [
      0x9898AD73,
      [],
    ],
  ],
  [
    "smsjobs.updateSettings",
    [
      0x093FA0BF,
      [
        ["flags", flags, "#"],
        ["allow_international", "true", "flags.0?true"],
      ],
    ],
  ],
  [
    "smsjobs.getStatus",
    [
      0x10A698E8,
      [],
    ],
  ],
  [
    "smsjobs.getSmsJob",
    [
      0x778D902F,
      [
        ["job_id", "string", "string"],
      ],
    ],
  ],
  [
    "smsjobs.finishJob",
    [
      0x4F1EBF24,
      [
        ["flags", flags, "#"],
        ["job_id", "string", "string"],
        ["error", "string", "flags.0?string"],
      ],
    ],
  ],
  [
    "fragment.getCollectibleInfo",
    [
      0xBE1E85BA,
      [
        ["collectible", "InputCollectible", "InputCollectible"],
      ],
    ],
  ],
] as unknown as [string, Parameters][]);

export const getType: (name: string) => Parameters | undefined = types.get.bind(types);

export const getEnum: (name: string) => (keyof Types)[] | undefined = enums.get.bind(enums);

// @ts-ignore: lib
export const _types: Map<string, Parameters> | undefined = typeof Deno === "undefined" ? typeof process === "undefined" ? undefined : process.env.__TYPE_MAP ? types : undefined : Deno.env.get("__TYPE_MAP") ? types : undefined;