/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2026 Roj <https://roj.im/>
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

import { unreachable } from "../0_deps.ts";
import type { Api } from "../2_tl.ts";
import type { FileSource } from "./0_file_source.ts";
import type { Location } from "./0_location.ts";
import { type RichTextComponent, type RichTextComponentPhoto, richTextComponentToTlObject } from "./3_rich_text_component.ts";

/** @unlisted */
export interface _InputPageBlockMediaCommon {
  /** The file name to assign if applicable. */
  fileName?: string;
  /** The file's size. */
  fileSize?: number;
  /** The MIME type to assign if applicable. */
  mimeType?: string;
  /** Size of each upload chunk in bytes. */
  chunkSize?: number;
  /** Upload abort signal. */
  signal?: AbortSignal;
  /** A progress ID retrieved from the method getProgressId. If specified, updates on the upload progress will be sent. */
  progressId?: string;
}

/**
 * An input paragraph page block.
 * @unlisted
 */
export interface InputPageBlockParagraph {
  type: "paragraph";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input pre-formatted page block.
 * @unlisted
 */
export interface InputPageBlockPre {
  type: "pre";
  /** The block's code language. */
  language?: string;
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input footer page block.
 * @unlisted
 */
export interface InputPageBlockFooter {
  type: "footer";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input divider page block.
 * @unlisted
 */
export interface InputPageBlockDivider {
  type: "divider";
}

/**
 * An input anchor page block.
 * @unlisted
 */
export interface InputPageBlockAnchor {
  type: "anchor";
  /** The name of the anchor. */
  name: string;
}

/** @unlisted */
export interface InputPageBlockListItemText {
  type: "text";
  /** Whether the item is a checkbox. */
  isCheckbox: boolean;
  /** Whether the item is a checked checkbox. */
  isChecked: boolean;
  /** The text of the item. */
  text: RichTextComponent;
}
/** @unlisted */
export interface InputPageBlockListItemBlockList {
  type: "blockList";
  /** Whether the item is a checkbox. */
  isCheckbox: boolean;
  /** Whether the item is a checked checkbox. */
  isChecked: boolean;
  /** The blocks of the item. */
  blocks: InputPageBlock[];
}
/** @unlisted */
export type InputPageBlockListItem = InputPageBlockListItemText | InputPageBlockListItemBlockList;
export function pageBlockListItemToTlObject(pbli: InputPageBlockListItem, photoIds: bigint[], documentIds: bigint[]): Api.PageListItem {
  switch (pbli.type) {
    case "text":
      return { _: "pageListItemText", checkbox: pbli.isCheckbox || undefined, checked: pbli.isChecked || undefined, text: richTextComponentToTlObject(pbli.text) };
    case "blockList":
      return { _: "pageListItemBlocks", checkbox: pbli.isCheckbox || undefined, checked: pbli.isChecked || undefined, blocks: pbli.blocks.map((v) => inputPageBlockToTlObject(v, photoIds, documentIds)) };
  }
}
/**
 * An input list page block.
 * @unlisted
 */
export interface InputPageBlockList {
  type: "list";
  /** The list's items. */
  items: InputPageBlockListItem[];
}

/**
 * An input block quote page block.
 * @unlisted
 */
export interface InputPageBlockBlockQuote {
  type: "blockQuote";
  /** The block quote's text. */
  text: RichTextComponent;
  /** The block quote's caption. */
  caption: RichTextComponent;
}

/**
 * An input pull quote page block.
 * @unlisted
 */
export interface InputPageBlockPullQuote {
  type: "pullQuote";
  /** The pull quote's text. */
  text: RichTextComponent;
  /** The pull quote's caption. */
  caption: RichTextComponent;
}

/**
 * An input page block's caption.
 *
 * @unlisted
 */
export interface InputPageBlockCaption {
  /** The caption's text. */
  text: RichTextComponent;
  /** The caption's credit text. */
  credit: RichTextComponent;
}
export function pageBlockCaptionToTlObject(pbc: InputPageBlockCaption): Api.PageCaption {
  return {
    _: "pageCaption",
    text: richTextComponentToTlObject(pbc.text),
    credit: richTextComponentToTlObject(pbc.credit),
  };
}
/**
 * An input photo page block.
 * @unlisted
 */
export interface InputPageBlockPhoto extends _InputPageBlockMediaCommon {
  type: "photo";
  /** The photo. */
  photo: FileSource;
  /** The photo's caption. */
  caption?: InputPageBlockCaption;
  /** Whether the photo is a spoiler. */
  isSpoiler?: boolean;
  url?: string;
  linkPreviewId?: string;
}

/**
 * An input video page block.
 * @unlisted
 */
export interface InputPageBlockVideo extends _InputPageBlockMediaCommon {
  type: "video";
  /** The video. */
  video: FileSource;
  /** The video's caption. */
  caption?: InputPageBlockCaption;
  /** Whether the video is a spoiler. */
  isSpoiler?: boolean;
  /** Whether the video is played in loop. */
  isLoop?: boolean;
  /** Whether the video is automatically played. */
  isAutoplay?: boolean;
  linkPreviewId?: string;
  /** The width of the video. */
  width?: number;
  /** The height of the video. */
  height?: number;
  /** The duration of the video. */
  duration?: number;
  /** Whether streaming is suppported. */
  isStreamingSupported?: boolean;
}

/**
 * An input animation page block.
 * @unlisted
 */
export interface InputPageBlockAnimation extends _InputPageBlockMediaCommon {
  type: "animation";
  /** The animation. */
  animation: FileSource;
  /** The animation's caption. */
  caption?: InputPageBlockCaption;
  /** Whether the animation is a spoiler. */
  isSpoiler?: boolean;
  /** Whether the animation is played in loop. */
  isLoop?: boolean;
  /** Whether the animation is automatically played. */
  isAutoplay?: boolean;
  /** The duration of the animation. */
  duration?: number;
  /** The width of the animation. */
  width?: number;
  /** The height of the animation. */
  height?: number;
  linkPreviewId?: string;
}

/**
 * An input cover page block.
 * @unlisted
 */
export interface InputPageBlockCover {
  type: "cover";
  /** The cover. */
  cover: InputPageBlock;
}

/**
 * An input embed page block.
 * @unlisted
 */
export interface InputPageBlockEmbed {
  type: "embed";
  isFullWidth: boolean;
  isScrollingAllowed: boolean;
  url?: string;
  html?: string;
  posterPhotoId?: string;
  width?: number;
  height?: number;
  caption: InputPageBlockCaption;
}

/**
 * An input embed post page block.
 * @unlisted
 */
export interface InputPageBlockEmbedPost {
  type: "embedPost";
  url: string;
  linkPreviewId: string;
  authorPhotoId: string;
  author: string;
  date: number;
  blocks: InputPageBlock[];
  caption: InputPageBlockCaption;
}

/**
 * An input collage page block.
 * @unlisted
 */
export interface InputPageBlockCollage {
  type: "collage";
  items: InputPageBlock[];
  caption: InputPageBlockCaption;
}

/**
 * An input slideshow page block.
 * @unlisted
 */
export interface InputPageBlockSlideshow {
  type: "slideshow";
  items: InputPageBlock[];
  caption: InputPageBlockCaption;
}

/**
 * An input audio page block.
 * @unlisted
 */
export interface InputPageBlockAudio extends _InputPageBlockMediaCommon {
  type: "audio";
  audio: FileSource;
  duration?: number;
  performer?: string;
  title?: string;
  caption?: InputPageBlockCaption;
}

/**
 * An input voice page block.
 * @unlisted
 */
export interface InputPageBlockVoice extends _InputPageBlockMediaCommon {
  type: "voice";
  voice: FileSource;
  duration?: number;
  caption?: InputPageBlockCaption;
}

/**
 * An input kicker page block.
 * @unlisted
 */
export interface InputPageBlockKicker {
  type: "kicker";
  text: RichTextComponent;
}

/** @unlisted */
export interface InputPageBlockTableCell {
  isHeader: boolean;
  isCenterAligned: boolean;
  isRightAligned: boolean;
  isMiddleVerticallyAligned: boolean;
  isBottomVerticallyAligned: boolean;
  text?: RichTextComponent;
  colspan?: number;
  rowspan?: number;
}
export function pageBlockTableCellToTlObject(pbtc: InputPageBlockTableCell): Api.PageTableCell {
  return {
    _: "pageTableCell",
    header: pbtc.isHeader || undefined,
    align_center: pbtc.isCenterAligned || undefined,
    align_right: pbtc.isRightAligned || undefined,
    valign_middle: pbtc.isMiddleVerticallyAligned || undefined,
    valign_bottom: pbtc.isBottomVerticallyAligned || undefined,
    text: pbtc.text ? richTextComponentToTlObject(pbtc.text) : undefined,
    colspan: pbtc.colspan,
    rowspan: pbtc.rowspan,
  };
}
/** @unlisted */
export interface InputPageBlockTableRow {
  cells: InputPageBlockTableCell[];
}
export function pageBlockTableRowToTlObject(pbtr: InputPageBlockTableRow): Api.PageTableRow {
  return {
    _: "pageTableRow",
    cells: pbtr.cells.map(pageBlockTableCellToTlObject),
  };
}
/**
 * An input table page block.
 * @unlisted
 */
export interface InputPageBlockTable {
  type: "table";
  isBordered: boolean;
  isStriped: boolean;
  title: RichTextComponent;
  rows: InputPageBlockTableRow[];
}

/** @unlisted */
export interface InputPageBlockOrderedListItemText {
  type: "text";
  isCheckbox: boolean;
  isChecked: boolean;
  number?: string;
  value?: number;
  itemType?: string;
  text: RichTextComponent;
}
/** @unlisted */
export interface InputPageBlockOrderedListItemTextBlockList {
  type: "blockList";
  isCheckbox: boolean;
  isChecked: boolean;
  number?: string;
  value?: number;
  itemType?: string;
  blocks: InputPageBlock[];
}
/** @unlisted */
export type InputPageBlockOrderedListItem = InputPageBlockOrderedListItemText | InputPageBlockOrderedListItemTextBlockList;
export function pageBlockOrderedListItemToTlObject(pboli: InputPageBlockOrderedListItem, photoIds: bigint[], documentIds: bigint[]): Api.PageListOrderedItem {
  switch (pboli.type) {
    case "text":
      return { _: "pageListOrderedItemText", checkbox: pboli.isCheckbox || undefined, checked: pboli.isChecked || undefined, text: richTextComponentToTlObject(pboli.text), num: pboli.number, type: pboli.itemType, value: pboli.value };
    case "blockList":
      return { _: "pageListOrderedItemBlocks", checkbox: pboli.isCheckbox || undefined, checked: pboli.isChecked || undefined, blocks: pboli.blocks.map((v) => inputPageBlockToTlObject(v, photoIds, documentIds)), num: pboli.number, type: pboli.itemType, value: pboli.value };
  }
}
/**
 * An input order list page block.
 * @unlisted
 */
export interface InputPageBlockOrderedList {
  type: "orderedList";
  isReversed: boolean;
  items: InputPageBlockOrderedListItem[];
  start?: number;
  itemsType?: string;
}

/**
 * An input details page block.
 * @unlisted
 */
export interface InputPageBlockDetails {
  type: "details";
  isOpen: boolean;
  blocks: InputPageBlock[];
  title: RichTextComponent;
}

/**
 * An input map page block.
 * @unlisted
 */
export interface InputPageBlockMap {
  type: "map";
  location: Location;
  zoom: number;
  width: number;
  height: number;
  caption: InputPageBlockCaption;
}

/**
 * An input heading 1 page block.
 * @unlisted
 */
export interface InputPageBlockHeading1 {
  type: "heading1";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input heading 2 page block.
 * @unlisted
 */
export interface InputPageBlockHeading2 {
  type: "heading2";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input heading 3 page block.
 * @unlisted
 */
export interface InputPageBlockHeading3 {
  type: "heading3";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input heading 4 page block.
 * @unlisted
 */
export interface InputPageBlockHeading4 {
  type: "heading4";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input heading 5 page block.
 * @unlisted
 */
export interface InputPageBlockHeading5 {
  type: "heading5";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input heading 6 page block.
 * @unlisted
 */
export interface InputPageBlockHeading6 {
  type: "heading6";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input math page block.
 * @unlisted
 */
export interface InputPageBlockMath {
  type: "math";
  /** The math code. */
  code: string;
}

/**
 * An input thinking block.
 * @unlisted
 */
export interface InputPageBlockThinking {
  type: "thinking";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * An input block quote blocks block.
 * @unlisted
 */
export interface InputPageBlockBlockQuoteBlocks {
  type: "blockQuoteBlocks";
  blocks: InputPageBlock[];
  caption: RichTextComponent;
}

/** Any type of input page block. */
export type InputPageBlock =
  | InputPageBlockParagraph
  | InputPageBlockPre
  | InputPageBlockFooter
  | InputPageBlockDivider
  | InputPageBlockAnchor
  | InputPageBlockList
  | InputPageBlockBlockQuote
  | InputPageBlockPullQuote
  | InputPageBlockPhoto
  | InputPageBlockVideo
  | InputPageBlockAnimation
  | InputPageBlockCover
  | InputPageBlockEmbed
  | InputPageBlockEmbedPost
  | InputPageBlockCollage
  | InputPageBlockSlideshow
  | InputPageBlockAudio
  | InputPageBlockVoice
  | InputPageBlockKicker
  | InputPageBlockTable
  | InputPageBlockOrderedList
  | InputPageBlockDetails
  | InputPageBlockMap
  | InputPageBlockHeading1
  | InputPageBlockHeading2
  | InputPageBlockHeading3
  | InputPageBlockHeading4
  | InputPageBlockHeading5
  | InputPageBlockHeading6
  | InputPageBlockMath
  | InputPageBlockThinking
  | InputPageBlockBlockQuoteBlocks;

export function inputPageBlockToTlObject(pb: InputPageBlock, photoIds: bigint[], documentIds: bigint[]): Api.PageBlock {
  switch (pb.type) {
    case "paragraph":
      return { _: "pageBlockParagraph", text: richTextComponentToTlObject(pb.text) };
    case "pre":
      return { _: "pageBlockPreformatted", text: richTextComponentToTlObject(pb.text), language: pb.language ?? "" };
    case "footer":
      return { _: "pageBlockFooter", text: richTextComponentToTlObject(pb.text) };
    case "divider":
      return { _: "pageBlockDivider" };
    case "anchor":
      return { _: "pageBlockAnchor", name: pb.name };
    case "list":
      return { _: "pageBlockList", items: pb.items.map((v) => pageBlockListItemToTlObject(v, photoIds, documentIds)) };
    case "blockQuote":
      return { _: "pageBlockBlockquote", text: richTextComponentToTlObject(pb.text), caption: richTextComponentToTlObject(pb.caption) };
    case "pullQuote":
      return { _: "pageBlockPullquote", text: richTextComponentToTlObject(pb.text), caption: richTextComponentToTlObject(pb.caption) };
    case "photo": {
      const photo_id = photoIds.shift();
      if (photo_id === undefined) {
        unreachable();
      }
      return { _: "pageBlockPhoto", photo_id, caption: pageBlockCaptionToTlObject(pb.caption ?? { text: { type: "empty" }, credit: { type: "empty" } }), spoiler: pb.isSpoiler || undefined, url: pb.url, webpage_id: pb.linkPreviewId ? BigInt(pb.linkPreviewId) : undefined };
    }
    case "video":
    case "animation": {
      const video_id = documentIds.shift();
      if (video_id === undefined) {
        unreachable();
      }
      return { _: "pageBlockVideo", video_id, caption: pageBlockCaptionToTlObject(pb.caption ?? { text: { type: "empty" }, credit: { type: "empty" } }), spoiler: pb.isSpoiler || undefined, autoplay: pb.isAutoplay || undefined, loop: pb.isLoop || undefined };
    }
    case "cover":
      return { _: "pageBlockCover", cover: inputPageBlockToTlObject(pb.cover, photoIds, documentIds) };
    case "embed":
      return { _: "pageBlockEmbed", caption: pageBlockCaptionToTlObject(pb.caption), allow_scrolling: pb.isScrollingAllowed || undefined, full_width: pb.isFullWidth || undefined, w: pb.width, h: pb.height, html: pb.html, url: pb.url, poster_photo_id: pb.posterPhotoId ? BigInt(pb.posterPhotoId) : undefined };
    case "embedPost":
      return { _: "pageBlockEmbedPost", caption: pageBlockCaptionToTlObject(pb.caption), url: pb.url, author: pb.author, author_photo_id: BigInt(pb.authorPhotoId), blocks: pb.blocks.map((v) => inputPageBlockToTlObject(v, photoIds, documentIds)), date: pb.date, webpage_id: BigInt(pb.linkPreviewId) };
    case "collage":
      return { _: "pageBlockCollage", caption: pageBlockCaptionToTlObject(pb.caption), items: pb.items.map((v) => inputPageBlockToTlObject(v, photoIds, documentIds)) };
    case "slideshow":
      return { _: "pageBlockSlideshow", caption: pageBlockCaptionToTlObject(pb.caption), items: pb.items.map((v) => inputPageBlockToTlObject(v, photoIds, documentIds)) };
    case "audio":
    case "voice": {
      const audio_id = documentIds.shift();
      if (audio_id === undefined) {
        unreachable();
      }
      return { _: "pageBlockAudio", audio_id, caption: pageBlockCaptionToTlObject(pb.caption ?? { text: { type: "empty" }, credit: { type: "empty" } }) };
    }
    case "kicker":
      return { _: "pageBlockKicker", text: richTextComponentToTlObject(pb.text) };
    case "math":
      return { _: "pageBlockMath", source: pb.code };
    case "table":
      return { _: "pageBlockTable", title: richTextComponentToTlObject(pb.title), rows: pb.rows.map(pageBlockTableRowToTlObject), bordered: pb.isBordered || undefined, striped: pb.isStriped || undefined };
    case "orderedList":
      return { _: "pageBlockOrderedList", items: pb.items.map((v) => pageBlockOrderedListItemToTlObject(v, photoIds, documentIds)), reversed: pb.isReversed || undefined, start: pb.start, type: pb.itemsType };
    case "details":
      return { _: "pageBlockDetails", title: richTextComponentToTlObject(pb.title), blocks: pb.blocks.map((v) => inputPageBlockToTlObject(v, photoIds, documentIds)), open: pb.isOpen || undefined };
    case "map":
      return { _: "inputPageBlockMap", geo: { _: "inputGeoPoint", lat: pb.location.latitude, long: pb.location.longitude, accuracy_radius: pb.location.horizontalAccuracy }, caption: pageBlockCaptionToTlObject(pb.caption), w: pb.width, h: pb.height, zoom: pb.zoom };
    case "heading1":
      return { _: "pageBlockHeading1", text: richTextComponentToTlObject(pb.text) };
    case "heading2":
      return { _: "pageBlockHeading2", text: richTextComponentToTlObject(pb.text) };
    case "heading3":
      return { _: "pageBlockHeading3", text: richTextComponentToTlObject(pb.text) };
    case "heading4":
      return { _: "pageBlockHeading4", text: richTextComponentToTlObject(pb.text) };
    case "heading5":
      return { _: "pageBlockHeading5", text: richTextComponentToTlObject(pb.text) };
    case "heading6":
      return { _: "pageBlockHeading6", text: richTextComponentToTlObject(pb.text) };
    case "thinking":
      return { _: "pageBlockThinking", text: richTextComponentToTlObject(pb.text) };
    case "blockQuoteBlocks":
      return { _: "pageBlockBlockquoteBlocks", caption: richTextComponentToTlObject(pb.caption), blocks: pb.blocks.map((v) => inputPageBlockToTlObject(v, photoIds, documentIds)) };
  }

  unreachable();
}

export function collectMediaFileSources(pageBlocks: InputPageBlock[]): { fileSource: FileSource; type: "photo" | "audio" | "video" | "voice" | "animation"; params: _InputPageBlockMediaCommon }[] {
  const fileIds = new Array<{ fileSource: FileSource; type: "photo" | "audio" | "video" | "voice" | "animation"; params: _InputPageBlockMediaCommon }>();
  for (const m of collectPageBlockMedia(pageBlocks)) {
    switch (m.type) {
      case "photo":
        fileIds.push({ type: m.type, fileSource: m.photo, params: m });
        break;
      case "video":
        fileIds.push({ type: m.type, fileSource: m.video, params: m });
        break;
      case "animation":
        fileIds.push({ type: m.type, fileSource: m.animation, params: m });
        break;
      case "audio":
        fileIds.push({ type: m.type, fileSource: m.audio, params: m });
        break;
      case "voice":
        fileIds.push({ type: m.type, fileSource: m.voice, params: m });
        break;
    }
  }
  for (const photo of collectRichTextComponentPhoto(collectRichTextComponents(pageBlocks))) {
    fileIds.push({ type: "photo", fileSource: photo.fileId, params: {} });
  }
  return fileIds;
}
function collectRichTextComponentPhoto(components: RichTextComponent[]): RichTextComponentPhoto[] {
  const photos = new Array<RichTextComponentPhoto>();

  for (const component of components) {
    for (const c of flattenRichTextComponent(component)) {
      if (c.type === "photo") {
        photos.push(c);
      }
    }
  }

  return photos;
}
function flattenRichTextComponent(component: RichTextComponent): RichTextComponent[] {
  const items = new Array<RichTextComponent>(component);
  switch (component.type) {
    case "anchor":
    case "dateTime":
    case "bold":
    case "italic":
    case "underline":
    case "strikethrough":
    case "fixed":
    case "link":
    case "emailLink":
    case "subscript":
    case "superscript":
    case "marked":
    case "phoneNumberLink":
    case "spoiler":
    case "mention":
    case "hashtag":
    case "botCommand":
    case "cashtag":
    case "url":
    case "email":
    case "phoneNumber":
    case "bankCard":
    case "textMention":
      for (const item of flattenRichTextComponent(component.text)) {
        items.push(item);
      }
      break;
    case "concatenate":
      for (const c of component.components) {
        for (const i of flattenRichTextComponent(c)) {
          items.push(i);
        }
      }
  }
  return items;
}
function collectRichTextComponents(pageBlocks: InputPageBlock[]): RichTextComponent[] {
  const components = new Array<RichTextComponent>();
  for (const pb of pageBlocks) {
    switch (pb.type) {
      case "paragraph":
      case "pre":
      case "footer":
      case "kicker":
      case "heading1":
      case "heading2":
      case "heading3":
      case "heading4":
      case "heading5":
      case "heading6":
      case "thinking":
        components.push(pb.text);
        break;
      case "list":
      case "orderedList":
        for (const item of pb.items) {
          if (item.type === "text") {
            components.push(item.text);
          } else {
            for (const c of collectRichTextComponents(item.blocks)) {
              components.push(c);
            }
          }
        }
        break;
      case "blockQuote":
      case "pullQuote":
        components.push(pb.text);
        components.push(pb.caption);
        break;
      case "photo":
      case "video":
      case "animation":
      case "embed":
      case "audio":
      case "voice":
      case "map": {
        const caption = pb.caption ?? { text: { type: "empty" }, credit: { type: "empty" } };
        components.push(caption.text);
        components.push(caption.credit);
        break;
      }
      case "cover":
        for (const c of collectRichTextComponents([pb.cover])) {
          components.push(c);
        }
        break;
      case "collage":
      case "slideshow":
        components.push(pb.caption.text);
        components.push(pb.caption.credit);
        for (const c of collectRichTextComponents(pb.items)) {
          components.push(c);
        }
        break;
      case "embedPost":
        components.push(pb.caption.text);
        components.push(pb.caption.credit);
        for (const c of collectRichTextComponents(pb.blocks)) {
          components.push(c);
        }
        break;
      case "math":
        break;
      case "table":
        components.push(pb.title);
        for (const row of pb.rows) {
          for (const cell of row.cells) {
            if (cell.text) {
              components.push(cell.text);
            }
          }
        }
        break;
      case "details":
        components.push(pb.title);
        for (const c of collectRichTextComponents(pb.blocks)) {
          components.push(c);
        }
        break;
      case "blockQuoteBlocks":
        components.push(pb.caption);
        for (const c of collectRichTextComponents(pb.blocks)) {
          components.push(c);
        }
        break;
    }
  }

  return components;
}
function collectPageBlockMedia(pageBlocks: InputPageBlock[]) {
  const media = new Array<InputPageBlockPhoto | InputPageBlockVideo | InputPageBlockAudio | InputPageBlockVoice | InputPageBlockAnimation>();
  for (const pb of pageBlocks) {
    if (pb.type === "photo" || pb.type === "video" || pb.type === "audio" || pb.type === "voice" || pb.type === "animation") {
      media.push(pb);
    } else {
      switch (pb.type) {
        case "list":
          for (const item of pb.items) {
            if (item.type === "blockList") {
              for (const m of collectPageBlockMedia(item.blocks)) {
                media.push(m);
              }
            }
          }
          break;
        case "embedPost":
          for (const m of collectPageBlockMedia(pb.blocks)) {
            media.push(m);
          }
          break;
        case "collage":
        case "slideshow":
          for (const m of collectPageBlockMedia(pb.items)) {
            media.push(m);
          }
          break;
        case "orderedList":
          for (const item of pb.items) {
            if (item.type === "blockList") {
              for (const m of collectPageBlockMedia(item.blocks)) {
                media.push(m);
              }
            }
          }
          break;
        case "details":
        case "blockQuoteBlocks":
          for (const m of collectPageBlockMedia(pb.blocks)) {
            media.push(m);
          }
          break;
        case "cover":
          for (const m of collectPageBlockMedia([pb.cover])) {
            media.push(m);
          }
      }
    }
  }

  return media;
}
