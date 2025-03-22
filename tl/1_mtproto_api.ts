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

import type { Schema } from "./0_types.ts";

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
}

export type AnyType = Types[keyof Types];

export type AnyFunction<T = Function> = Functions<T>[keyof Functions<T>];

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

export const schema = Object.freeze({
  definitions: {
    resPQ: [
      0x05162463,
      [
        ["nonce", "int128"],
        ["server_nonce", "int128"],
        ["pq", "bytes"],
        ["server_public_key_fingerprints", "Vector<long>"],
      ],
      "ResPQ",
    ],
    p_q_inner_data_dc: [
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
    p_q_inner_data_temp_dc: [
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
    server_DH_params_ok: [
      0xD0E8075C,
      [
        ["nonce", "int128"],
        ["server_nonce", "int128"],
        ["encrypted_answer", "bytes"],
      ],
      "Server_DH_Params",
    ],
    server_DH_inner_data: [
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
    client_DH_inner_data: [
      0x6643B654,
      [
        ["nonce", "int128"],
        ["server_nonce", "int128"],
        ["retry_id", "long"],
        ["g_b", "bytes"],
      ],
      "Client_DH_Inner_Data",
    ],
    dh_gen_ok: [
      0x3BCBF734,
      [
        ["nonce", "int128"],
        ["server_nonce", "int128"],
        ["new_nonce_hash1", "int128"],
      ],
      "Set_client_DH_params_answer",
    ],
    dh_gen_retry: [
      0x46DC1FB9,
      [
        ["nonce", "int128"],
        ["server_nonce", "int128"],
        ["new_nonce_hash2", "int128"],
      ],
      "Set_client_DH_params_answer",
    ],
    dh_gen_fail: [
      0xA69DAE02,
      [
        ["nonce", "int128"],
        ["server_nonce", "int128"],
        ["new_nonce_hash3", "int128"],
      ],
      "Set_client_DH_params_answer",
    ],
    bind_auth_key_inner: [
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
    rpc_error: [
      0x2144CA19,
      [
        ["error_code", "int"],
        ["error_message", "string"],
      ],
      "RpcError",
    ],
    rpc_answer_unknown: [
      0x5E2AD36E,
      [],
      "RpcDropAnswer",
    ],
    rpc_answer_dropped_running: [
      0xCD78E586,
      [],
      "RpcDropAnswer",
    ],
    rpc_answer_dropped: [
      0xA43AD8B7,
      [
        ["msg_id", "long"],
        ["seq_no", "int"],
        ["bytes", "int"],
      ],
      "RpcDropAnswer",
    ],
    future_salt: [
      0x0949D9DC,
      [
        ["valid_since", "int"],
        ["valid_until", "int"],
        ["salt", "long"],
      ],
      "FutureSalt",
    ],
    future_salts: [
      0xAE500895,
      [
        ["req_msg_id", "long"],
        ["now", "int"],
        ["salts", "vector<FutureSalt>"],
      ],
      "FutureSalts",
    ],
    pong: [
      0x347773C5,
      [
        ["msg_id", "long"],
        ["ping_id", "long"],
      ],
      "Pong",
    ],
    destroy_session_ok: [
      0xE22045FC,
      [
        ["session_id", "long"],
      ],
      "DestroySessionRes",
    ],
    destroy_session_none: [
      0x62D350C9,
      [
        ["session_id", "long"],
      ],
      "DestroySessionRes",
    ],
    new_session_created: [
      0x9EC20908,
      [
        ["first_msg_id", "long"],
        ["unique_id", "long"],
        ["server_salt", "long"],
      ],
      "NewSession",
    ],
    gzip_packed: [
      0x3072CFA1,
      [
        ["packed_data", "bytes"],
      ],
      "Object",
    ],
    msgs_ack: [
      0x62D6B459,
      [
        ["msg_ids", "Vector<long>"],
      ],
      "MsgsAck",
    ],
    bad_msg_notification: [
      0xA7EFF811,
      [
        ["bad_msg_id", "long"],
        ["bad_msg_seqno", "int"],
        ["error_code", "int"],
      ],
      "BadMsgNotification",
    ],
    bad_server_salt: [
      0xEDAB447B,
      [
        ["bad_msg_id", "long"],
        ["bad_msg_seqno", "int"],
        ["error_code", "int"],
        ["new_server_salt", "long"],
      ],
      "BadMsgNotification",
    ],
    msg_resend_req: [
      0x7D861A08,
      [
        ["msg_ids", "Vector<long>"],
      ],
      "MsgResendReq",
    ],
    msgs_state_req: [
      0xDA69FB52,
      [
        ["msg_ids", "Vector<long>"],
      ],
      "MsgsStateReq",
    ],
    msgs_state_info: [
      0x04DEB57D,
      [
        ["req_msg_id", "long"],
        ["info", "bytes"],
      ],
      "MsgsStateInfo",
    ],
    msgs_all_info: [
      0x8CC0D131,
      [
        ["msg_ids", "Vector<long>"],
        ["info", "bytes"],
      ],
      "MsgsAllInfo",
    ],
    msg_detailed_info: [
      0x276D3EC6,
      [
        ["msg_id", "long"],
        ["answer_msg_id", "long"],
        ["bytes", "int"],
        ["status", "int"],
      ],
      "MsgDetailedInfo",
    ],
    msg_new_detailed_info: [
      0x809DB6DF,
      [
        ["answer_msg_id", "long"],
        ["bytes", "int"],
        ["status", "int"],
      ],
      "MsgDetailedInfo",
    ],
    destroy_auth_key_ok: [
      0xF660E1D4,
      [],
      "DestroyAuthKeyRes",
    ],
    destroy_auth_key_none: [
      0x0A9F2259,
      [],
      "DestroyAuthKeyRes",
    ],
    destroy_auth_key_fail: [
      0xEA109B13,
      [],
      "DestroyAuthKeyRes",
    ],
    http_wait: [
      0x9299359F,
      [
        ["max_delay", "int"],
        ["wait_after", "int"],
        ["max_wait", "int"],
      ],
      "HttpWait",
    ],
    req_pq_multi: [
      0xBE7E8EF1,
      [
        ["nonce", "int128"],
      ],
      "ResPQ",
    ],
    req_DH_params: [
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
    set_client_DH_params: [
      0xF5045F1F,
      [
        ["nonce", "int128"],
        ["server_nonce", "int128"],
        ["encrypted_data", "bytes"],
      ],
      "Set_client_DH_params_answer",
    ],
    rpc_drop_answer: [
      0x58E4A740,
      [
        ["req_msg_id", "long"],
      ],
      "RpcDropAnswer",
    ],
    get_future_salts: [
      0xB921BD04,
      [
        ["num", "int"],
      ],
      "FutureSalts",
    ],
    ping: [
      0x7ABE77EC,
      [
        ["ping_id", "long"],
      ],
      "Pong",
    ],
    ping_delay_disconnect: [
      0xF3427B8C,
      [
        ["ping_id", "long"],
        ["disconnect_delay", "int"],
      ],
      "Pong",
    ],
    destroy_session: [
      0xE7512126,
      [
        ["session_id", "long"],
      ],
      "DestroySessionRes",
    ],
    destroy_auth_key: [
      0xD1435160,
      [],
      "DestroyAuthKeyRes",
    ],
  },
  identifierToName: {
    [0x05162463]: "resPQ",
    [0xA9F55F95]: "p_q_inner_data_dc",
    [0x56FDDF88]: "p_q_inner_data_temp_dc",
    [0xD0E8075C]: "server_DH_params_ok",
    [0xB5890DBA]: "server_DH_inner_data",
    [0x6643B654]: "client_DH_inner_data",
    [0x3BCBF734]: "dh_gen_ok",
    [0x46DC1FB9]: "dh_gen_retry",
    [0xA69DAE02]: "dh_gen_fail",
    [0x75A3F765]: "bind_auth_key_inner",
    [0x2144CA19]: "rpc_error",
    [0x5E2AD36E]: "rpc_answer_unknown",
    [0xCD78E586]: "rpc_answer_dropped_running",
    [0xA43AD8B7]: "rpc_answer_dropped",
    [0x0949D9DC]: "future_salt",
    [0xAE500895]: "future_salts",
    [0x347773C5]: "pong",
    [0xE22045FC]: "destroy_session_ok",
    [0x62D350C9]: "destroy_session_none",
    [0x9EC20908]: "new_session_created",
    [0x3072CFA1]: "gzip_packed",
    [0x62D6B459]: "msgs_ack",
    [0xA7EFF811]: "bad_msg_notification",
    [0xEDAB447B]: "bad_server_salt",
    [0x7D861A08]: "msg_resend_req",
    [0xDA69FB52]: "msgs_state_req",
    [0x04DEB57D]: "msgs_state_info",
    [0x8CC0D131]: "msgs_all_info",
    [0x276D3EC6]: "msg_detailed_info",
    [0x809DB6DF]: "msg_new_detailed_info",
    [0xF660E1D4]: "destroy_auth_key_ok",
    [0x0A9F2259]: "destroy_auth_key_none",
    [0xEA109B13]: "destroy_auth_key_fail",
    [0x9299359F]: "http_wait",
  },
}) as unknown as Schema;
