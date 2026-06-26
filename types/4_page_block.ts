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
import { cleanObject } from "../1_utilities.ts";
import { Api } from "../2_tl.ts";
import { deserializeFileId, type FileId, FileType, serializeFileId } from "./_file_id.ts";
import { constructLocation, type Location } from "./0_location.ts";
import { type ChatP, constructChatP } from "./1_chat_p.ts";
import { constructPhoto } from "./1_photo.ts";
import { constructRichTextComponent, type RichTextComponent, type RichTextComponentPhoto, richTextComponentToTlObject } from "./3_rich_text_component.ts";

/**
 * An unsupported type of page block.
 * @unlisted
 */
export interface PageBlockUnsupported {
  type: "unsupported";
}

/**
 * A paragraph page block.
 * @unlisted
 */
export interface PageBlockParagraph {
  type: "paragraph";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A pre-formatted page block.
 * @unlisted
 */
export interface PageBlockPre {
  type: "pre";
  /** The block's code language. */
  language?: string;
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A footer page block.
 * @unlisted
 */
export interface PageBlockFooter {
  type: "footer";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A divider page block.
 * @unlisted
 */
export interface PageBlockDivider {
  type: "divider";
}

/**
 * An anchor page block.
 * @unlisted
 */
export interface PageBlockAnchor {
  type: "anchor";
  /** The name of the anchor. */
  name: string;
}

/** @unlisted */
export interface PageBlockListItemText {
  type: "text";
  /** Whether the item is a checkbox. */
  isCheckbox: boolean;
  /** Whether the item is a checked checkbox. */
  isChecked: boolean;
  /** The text of the item. */
  text: RichTextComponent;
}
/** @unlisted */
export interface PageBlockListItemBlockList {
  type: "blockList";
  /** Whether the item is a checkbox. */
  isCheckbox: boolean;
  /** Whether the item is a checked checkbox. */
  isChecked: boolean;
  /** The blocks of the item. */
  blocks: PageBlock[];
}
/** @unlisted */
export type PageBlockListItem = PageBlockListItemText | PageBlockListItemBlockList;
export function constructPageBlockListItem(pli: Api.PageListItem, photos: Api.Photo[], documents: Api.Document[]): PageBlockListItem {
  switch (pli._) {
    case "pageListItemText":
      return { type: "text", isCheckbox: !!pli.checkbox, isChecked: !!pli.checked, text: constructRichTextComponent(pli.text, photos) };
    case "pageListItemBlocks":
      return { type: "blockList", isCheckbox: !!pli.checkbox, isChecked: !!pli.checked, blocks: pli.blocks.map((v) => constructPageBlock(v, photos, documents)) };
  }
}
export function pageBlockListItemToTlObject(pbli: PageBlockListItem): Api.PageListItem {
  switch (pbli.type) {
    case "text":
      return { _: "pageListItemText", checkbox: pbli.isCheckbox || undefined, checked: pbli.isChecked || undefined, text: richTextComponentToTlObject(pbli.text) };
    case "blockList":
      return { _: "pageListItemBlocks", checkbox: pbli.isCheckbox || undefined, checked: pbli.isChecked || undefined, blocks: pbli.blocks.map(pageBlockToTlObject) };
  }
}
/**
 * A list page block.
 * @unlisted
 */
export interface PageBlockList {
  type: "list";
  /** The list's items. */
  items: PageBlockListItem[];
}

/**
 * A block quote page block.
 * @unlisted
 */
export interface PageBlockBlockQuote {
  type: "blockQuote";
  /** The block quote's text. */
  text: RichTextComponent;
  /** The block quote's caption. */
  caption: RichTextComponent;
}

/**
 * A pull quote page block.
 * @unlisted
 */
export interface PageBlockPullQuote {
  type: "pullQuote";
  /** The pull quote's text. */
  text: RichTextComponent;
  /** The pull quote's caption. */
  caption: RichTextComponent;
}

/**
 * A page block's caption.
 *
 * @unlisted
 */
export interface PageBlockCaption {
  /** The caption's text. */
  text: RichTextComponent;
  /** The caption's credit text. */
  credit: RichTextComponent;
}
export function constructPageBlockCaption(pc: Api.PageCaption, photos: Api.Photo[]): PageBlockCaption {
  return {
    text: constructRichTextComponent(pc.text, photos),
    credit: constructRichTextComponent(pc.credit, photos),
  };
}
export function pageBlockCaptionToTlObject(pbc: PageBlockCaption): Api.PageCaption {
  return {
    _: "pageCaption",
    text: richTextComponentToTlObject(pbc.text),
    credit: richTextComponentToTlObject(pbc.credit),
  };
}
/**
 * A photo page block.
 * @unlisted
 */
export interface PageBlockPhoto {
  type: "photo";
  /** The file identifier of the photo. */
  fileId: string;
  /** The photo's caption. */
  caption: PageBlockCaption;
  /** Whether the photo is a spoiler. */
  isSpoiler: boolean;
  url?: string;
  linkPreviewId?: string;
}

/**
 * A video page block.
 * @unlisted
 */
export interface PageBlockVideo {
  type: "video";
  /** The file identifier of the video. */
  fileId: string;
  /** The video's caption. */
  caption: PageBlockCaption;
  /** Whether the video is a spoiler. */
  isSpoiler: boolean;
  /** Whether the video is played in loop. */
  isLoop: boolean;
  /** Whether the video is automatically played. */
  isAutoplay: boolean;
  linkPreviewId?: string;
}

/**
 * An animation page block.
 * @unlisted
 */
export interface PageBlockAnimation {
  type: "animation";
  /** The file identifier of the animation. */
  fileId: string;
  /** The animation's caption. */
  caption: PageBlockCaption;
  /** Whether the animation is a spoiler. */
  isSpoiler: boolean;
  /** Whether the animation is played in loop. */
  isLoop: boolean;
  /** Whether the animation is automatically played. */
  isAutoplay: boolean;
  linkPreviewId?: string;
}

/**
 * A cover page block.
 * @unlisted
 */
export interface PageBlockCover {
  type: "cover";
  /** The cover. */
  cover: PageBlock;
}

/**
 * An embed page block.
 * @unlisted
 */
export interface PageBlockEmbed {
  type: "embed";
  isFullWidth: boolean;
  isScrollingAllowed: boolean;
  url?: string;
  html?: string;
  posterPhotoId?: string;
  width?: number;
  height?: number;
  caption: PageBlockCaption;
}

/**
 * An embed post page block.
 * @unlisted
 */
export interface PageBlockEmbedPost {
  type: "embedPost";
  url: string;
  linkPreviewId: string;
  authorPhotoId: string;
  author: string;
  date: number;
  blocks: PageBlock[];
  caption: PageBlockCaption;
}

/**
 * A collage page block.
 * @unlisted
 */
export interface PageBlockCollage {
  type: "collage";
  items: PageBlock[];
  caption: PageBlockCaption;
}

/**
 * A slideshow page block.
 * @unlisted
 */
export interface PageBlockSlideshow {
  type: "slideshow";
  items: PageBlock[];
  caption: PageBlockCaption;
}

/**
 * A channel page block.
 * @unlisted
 */
export interface PageBlockChannel {
  type: "channel";
  chat: ChatP;
}

/**
 * An audio page block.
 * @unlisted
 */
export interface PageBlockAudio {
  type: "audio";
  fileId: string;
  caption: PageBlockCaption;
}

/**
 * A voice page block.
 * @unlisted
 */
export interface PageBlockVoice {
  type: "voice";
  fileId: string;
  caption: PageBlockCaption;
}

/**
 * A kicker page block.
 * @unlisted
 */
export interface PageBlockKicker {
  type: "kicker";
  text: RichTextComponent;
}

/** @unlisted */
export interface PageBlockTableCell {
  isHeader: boolean;
  isCenterAligned: boolean;
  isRightAligned: boolean;
  isMiddleVerticallyAligned: boolean;
  isBottomVerticallyAligned: boolean;
  text?: RichTextComponent;
  colspan?: number;
  rowspan?: number;
}
export function constructPageBlockTableCell(ptc: Api.PageTableCell, photos: Api.Photo[]): PageBlockTableCell {
  return cleanObject({
    isHeader: !!ptc.header,
    isCenterAligned: !!ptc.align_center,
    isRightAligned: !!ptc.align_right,
    isMiddleVerticallyAligned: !!ptc.valign_middle,
    isBottomVerticallyAligned: !!ptc.valign_bottom,
    text: ptc.text ? constructRichTextComponent(ptc.text, photos) : undefined,
    colspan: ptc.colspan,
    rowspan: ptc.rowspan,
  });
}
export function pageBlockTableCellToTlObject(pbtc: PageBlockTableCell): Api.PageTableCell {
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
export interface PageBlockTableRow {
  cells: PageBlockTableCell[];
}
export function constructPageBlockTableRow(ptr: Api.PageTableRow, photos: Api.Photo[]): PageBlockTableRow {
  return {
    cells: ptr.cells.map((v) => constructPageBlockTableCell(v, photos)),
  };
}
export function pageBlockTableRowToTlObject(pbtr: PageBlockTableRow): Api.PageTableRow {
  return {
    _: "pageTableRow",
    cells: pbtr.cells.map(pageBlockTableCellToTlObject),
  };
}
/**
 * A table page block.
 * @unlisted
 */
export interface PageBlockTable {
  type: "table";
  isBordered: boolean;
  isStriped: boolean;
  title: RichTextComponent;
  rows: PageBlockTableRow[];
}

/** @unlisted */
export interface PageBlockOrderedListItemText {
  type: "text";
  isCheckbox: boolean;
  isChecked: boolean;
  number?: string;
  value?: number;
  itemType?: string;
  text: RichTextComponent;
}
/** @unlisted */
export interface PageBlockOrderedListItemTextBlockList {
  type: "blockList";
  isCheckbox: boolean;
  isChecked: boolean;
  number?: string;
  value?: number;
  itemType?: string;
  blocks: PageBlock[];
}
/** @unlisted */
export type PageBlockOrderedListItem = PageBlockOrderedListItemText | PageBlockOrderedListItemTextBlockList;
export function constructPageBlockOrderedListItem(ploi: Api.PageListOrderedItem, photos: Api.Photo[], documents: Api.Document[]): PageBlockOrderedListItem {
  switch (ploi._) {
    case "pageListOrderedItemText":
      return cleanObject({ type: "text", isCheckbox: !!ploi.checkbox, isChecked: !!ploi.checked, number: ploi.num, value: ploi.value, itemType: ploi.type, text: constructRichTextComponent(ploi.text, photos) });
    case "pageListOrderedItemBlocks":
      return cleanObject({ type: "blockList", isCheckbox: !!ploi.checkbox, isChecked: !!ploi.checked, number: ploi.num, value: ploi.value, itemType: ploi.type, blocks: ploi.blocks.map((v) => constructPageBlock(v, photos, documents)) });
  }

  unreachable();
}
export function pageBlockOrderedListItemToTlObject(pboli: PageBlockOrderedListItem): Api.PageListOrderedItem {
  switch (pboli.type) {
    case "text":
      return { _: "pageListOrderedItemText", checkbox: pboli.isCheckbox || undefined, checked: pboli.isChecked || undefined, text: richTextComponentToTlObject(pboli.text), num: pboli.number, type: pboli.itemType, value: pboli.value };
    case "blockList":
      return { _: "pageListOrderedItemBlocks", checkbox: pboli.isCheckbox || undefined, checked: pboli.isChecked || undefined, blocks: pboli.blocks.map(pageBlockToTlObject), num: pboli.number, type: pboli.itemType, value: pboli.value };
  }
}
/**
 * An order list page block.
 * @unlisted
 */
export interface PageBlockOrderedList {
  type: "orderedList";
  isReversed: boolean;
  items: PageBlockOrderedListItem[];
  start?: number;
  itemsType?: string;
}

/**
 * A details page block.
 * @unlisted
 */
export interface PageBlockDetails {
  type: "details";
  isOpen: boolean;
  blocks: PageBlock[];
  title: RichTextComponent;
}

/**
 * A map page block.
 * @unlisted
 */
export interface PageBlockMap {
  type: "map";
  location: Location;
  zoom: number;
  width: number;
  height: number;
  caption: PageBlockCaption;
}

/**
 * A heading 1 page block.
 * @unlisted
 */
export interface PageBlockHeading1 {
  type: "heading1";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A heading 2 page block.
 * @unlisted
 */
export interface PageBlockHeading2 {
  type: "heading2";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A heading 3 page block.
 * @unlisted
 */
export interface PageBlockHeading3 {
  type: "heading3";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A heading 4 page block.
 * @unlisted
 */
export interface PageBlockHeading4 {
  type: "heading4";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A heading 5 page block.
 * @unlisted
 */
export interface PageBlockHeading5 {
  type: "heading5";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A heading 6 page block.
 * @unlisted
 */
export interface PageBlockHeading6 {
  type: "heading6";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A math page block.
 * @unlisted
 */
export interface PageBlockMath {
  type: "math";
  /** The math code. */
  code: string;
}

/**
 * A thinking block.
 * @unlisted
 */
export interface PageBlockThinking {
  type: "thinking";
  /** The block's text. */
  text: RichTextComponent;
}

/**
 * A block quote blocks block.
 * @unlisted
 */
export interface PageBlockBlockQuoteBlocks {
  type: "blockQuoteBlocks";
  blocks: PageBlock[];
  caption: RichTextComponent;
}

/** Any type of page block. */
export type PageBlock =
  | PageBlockUnsupported
  | PageBlockParagraph
  | PageBlockPre
  | PageBlockFooter
  | PageBlockDivider
  | PageBlockAnchor
  | PageBlockList
  | PageBlockBlockQuote
  | PageBlockPullQuote
  | PageBlockPhoto
  | PageBlockVideo
  | PageBlockAnimation
  | PageBlockCover
  | PageBlockEmbed
  | PageBlockEmbedPost
  | PageBlockCollage
  | PageBlockSlideshow
  | PageBlockChannel
  | PageBlockAudio
  | PageBlockVoice
  | PageBlockKicker
  | PageBlockTable
  | PageBlockOrderedList
  | PageBlockDetails
  | PageBlockMap
  | PageBlockHeading1
  | PageBlockHeading2
  | PageBlockHeading3
  | PageBlockHeading4
  | PageBlockHeading5
  | PageBlockHeading6
  | PageBlockMath
  | PageBlockThinking
  | PageBlockBlockQuoteBlocks;

export function constructPageBlock(pb: Api.PageBlock, photos: Api.Photo[], documents: Api.Document[]): PageBlock {
  switch (pb._) {
    case "pageBlockUnsupported":
      return { type: "unsupported" };
    case "pageBlockParagraph":
      return { type: "paragraph", text: constructRichTextComponent(pb.text, photos) };
    case "pageBlockPreformatted":
      return cleanObject({ type: "pre", text: constructRichTextComponent(pb.text, photos), language: pb.language || undefined });
    case "pageBlockFooter":
      return { type: "footer", text: constructRichTextComponent(pb.text, photos) };
    case "pageBlockDivider":
      return { type: "divider" };
    case "pageBlockAnchor":
      return { type: "anchor", name: pb.name };
    case "pageBlockList":
      return { type: "list", items: pb.items.map((v) => constructPageBlockListItem(v, photos, documents)) };
    case "pageBlockBlockquote":
      return { type: "blockQuote", text: constructRichTextComponent(pb.text, photos), caption: constructRichTextComponent(pb.caption, photos) };
    case "pageBlockPullquote":
      return { type: "blockQuote", text: constructRichTextComponent(pb.text, photos), caption: constructRichTextComponent(pb.caption, photos) };
    case "pageBlockPhoto": {
      const fileId = constructPhoto(Api.as("photo", photos.find((v) => v.id === pb.photo_id))).fileId;
      return cleanObject({ type: "photo", fileId, caption: constructPageBlockCaption(pb.caption, photos), isSpoiler: !!pb.spoiler, linkPreviewId: pb.webpage_id ? String(pb.webpage_id) : undefined, url: pb.url });
    }
    case "pageBlockVideo": {
      const document = Api.as("document", documents.find((v) => v.id === pb.video_id));
      const isAnimated = !!document.attributes.find((v) => Api.is("documentAttributeAnimated", v));
      const fileId: FileId = {
        type: FileType.Video,
        dcId: document.dc_id,
        location: { type: "common", id: document.id, accessHash: document.access_hash },
        fileReference: document.file_reference,
      };
      return { type: isAnimated ? "animation" : "video", fileId: serializeFileId(fileId), caption: constructPageBlockCaption(pb.caption, photos), isSpoiler: !!pb.spoiler, isAutoplay: !!pb.autoplay, isLoop: !!pb.loop };
    }
    case "pageBlockCover":
      return { type: "cover", cover: constructPageBlock(pb.cover, photos, documents) };
    case "pageBlockEmbed":
      return cleanObject({ type: "embed", caption: constructPageBlockCaption(pb.caption, photos), isFullWidth: !!pb.full_width, isScrollingAllowed: !!pb.allow_scrolling, width: pb.w, height: pb.h, html: pb.html, url: pb.url, posterPhotoId: pb.poster_photo_id ? String(pb.poster_photo_id) : undefined });
    case "pageBlockEmbedPost":
      return cleanObject({ type: "embedPost", caption: constructPageBlockCaption(pb.caption, photos), author: pb.author, authorPhotoId: String(pb.author_photo_id), blocks: pb.blocks.map((v) => constructPageBlock(v, photos, documents)), date: pb.date, linkPreviewId: String(pb.webpage_id), url: pb.url });
    case "pageBlockCollage":
      return cleanObject({ type: "collage", caption: constructPageBlockCaption(pb.caption, photos), items: pb.items.map((v) => constructPageBlock(v, photos, documents)) });
    case "pageBlockSlideshow":
      return cleanObject({ type: "slideshow", caption: constructPageBlockCaption(pb.caption, photos), items: pb.items.map((v) => constructPageBlock(v, photos, documents)) });
    case "pageBlockChannel":
      return cleanObject({ type: "channel", chat: constructChatP(pb.channel) });
    case "pageBlockAudio": {
      const document = Api.as("document", documents.find((v) => v.id === pb.audio_id));
      const audioAttribute = document.attributes.find((v) => Api.is("documentAttributeAudio", v));
      if (!audioAttribute) {
        unreachable();
      }
      const fileId: FileId = {
        type: FileType.Video,
        dcId: document.dc_id,
        location: { type: "common", id: document.id, accessHash: document.access_hash },
        fileReference: document.file_reference,
      };
      return cleanObject({ type: audioAttribute.voice ? "voice" : "audio", fileId: serializeFileId(fileId), caption: constructPageBlockCaption(pb.caption, photos) });
    }
    case "pageBlockKicker":
      return cleanObject({ type: "kicker", text: constructRichTextComponent(pb.text, photos) });
    case "pageBlockTable":
      return cleanObject({ type: "table", isBordered: !!pb.bordered, isStriped: !!pb.striped, title: constructRichTextComponent(pb.title, photos), rows: pb.rows.map((v) => constructPageBlockTableRow(v, photos)) });
    case "pageBlockOrderedList":
      return cleanObject({
        type: "orderedList",
        isReversed: !!pb.reversed,
        items: pb.items.map((v) => constructPageBlockOrderedListItem(v, photos, documents)),
        itemsType: pb.type,
        start: pb.start,
      });
    case "pageBlockDetails":
      return { type: "details", isOpen: !!pb.open, title: constructRichTextComponent(pb.title, photos), blocks: pb.blocks.map((v) => constructPageBlock(v, photos, documents)) };
    case "pageBlockMap":
      return {
        type: "map",
        caption: constructPageBlockCaption(pb.caption, photos),
        width: pb.w,
        height: pb.h,
        zoom: pb.zoom,
        location: constructLocation(Api.as("geoPoint", pb.geo)),
      };
    case "pageBlockHeading1":
      return { type: "heading1", text: constructRichTextComponent(pb.text, photos) };
    case "pageBlockHeading2":
      return { type: "heading2", text: constructRichTextComponent(pb.text, photos) };
    case "pageBlockHeading3":
      return { type: "heading3", text: constructRichTextComponent(pb.text, photos) };
    case "pageBlockHeading4":
      return { type: "heading4", text: constructRichTextComponent(pb.text, photos) };
    case "pageBlockHeading5":
      return { type: "heading5", text: constructRichTextComponent(pb.text, photos) };
    case "pageBlockHeading6":
      return { type: "heading6", text: constructRichTextComponent(pb.text, photos) };
    case "pageBlockMath":
      return { type: "math", code: pb.source };
    case "pageBlockThinking":
      return { type: "thinking", text: constructRichTextComponent(pb.text, photos) };
    case "inputPageBlockMap":
      unreachable();
      break;
    case "pageBlockBlockquoteBlocks":
      return { type: "blockQuoteBlocks", blocks: pb.blocks.map((v) => constructPageBlock(v, photos, documents)), caption: constructRichTextComponent(pb.caption, photos) };
  }

  unreachable();
}

export function pageBlockToTlObject(pb: PageBlock): Api.PageBlock {
  switch (pb.type) {
    case "unsupported":
      return { _: "pageBlockUnsupported" };
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
      return { _: "pageBlockList", items: pb.items.map(pageBlockListItemToTlObject) };
    case "blockQuote":
      return { _: "pageBlockBlockquote", text: richTextComponentToTlObject(pb.text), caption: richTextComponentToTlObject(pb.caption) };
    case "pullQuote":
      return { _: "pageBlockPullquote", text: richTextComponentToTlObject(pb.text), caption: richTextComponentToTlObject(pb.caption) };
    case "photo": {
      const location = deserializeFileId(pb.fileId).location;
      if (!("id" in location)) {
        unreachable();
      }
      return { _: "pageBlockPhoto", photo_id: location.id, caption: pageBlockCaptionToTlObject(pb.caption), spoiler: pb.isSpoiler || undefined, url: pb.url, webpage_id: pb.linkPreviewId ? BigInt(pb.linkPreviewId) : undefined };
    }
    case "video":
    case "animation": {
      const location = deserializeFileId(pb.fileId).location;
      if (!("id" in location)) {
        unreachable();
      }
      return { _: "pageBlockVideo", video_id: location.id, caption: pageBlockCaptionToTlObject(pb.caption), spoiler: pb.isSpoiler || undefined, autoplay: pb.isAutoplay || undefined, loop: pb.isLoop || undefined };
    }
    case "cover":
      return { _: "pageBlockCover", cover: pageBlockToTlObject(pb.cover) };
    case "embed":
      return { _: "pageBlockEmbed", caption: pageBlockCaptionToTlObject(pb.caption), allow_scrolling: pb.isScrollingAllowed || undefined, full_width: pb.isFullWidth || undefined, w: pb.width, h: pb.height, html: pb.html, url: pb.url, poster_photo_id: pb.posterPhotoId ? BigInt(pb.posterPhotoId) : undefined };
    case "embedPost":
      return { _: "pageBlockEmbedPost", caption: pageBlockCaptionToTlObject(pb.caption), url: pb.url, author: pb.author, author_photo_id: BigInt(pb.authorPhotoId), blocks: pb.blocks.map(pageBlockToTlObject), date: pb.date, webpage_id: BigInt(pb.linkPreviewId) };
    case "collage":
      return { _: "pageBlockCollage", caption: pageBlockCaptionToTlObject(pb.caption), items: pb.items.map(pageBlockToTlObject) };
    case "slideshow":
      return { _: "pageBlockSlideshow", caption: pageBlockCaptionToTlObject(pb.caption), items: pb.items.map(pageBlockToTlObject) };
    case "channel":
      unreachable();
      break;
    case "audio":
    case "voice": {
      const location = deserializeFileId(pb.fileId).location;
      if (!("id" in location)) {
        unreachable();
      }
      return { _: "pageBlockAudio", audio_id: location.id, caption: pageBlockCaptionToTlObject(pb.caption) };
    }
    case "kicker":
      return { _: "pageBlockKicker", text: richTextComponentToTlObject(pb.text) };
    case "math":
      return { _: "pageBlockMath", source: pb.code };
    case "table":
      return { _: "pageBlockTable", title: richTextComponentToTlObject(pb.title), rows: pb.rows.map(pageBlockTableRowToTlObject), bordered: pb.isBordered || undefined, striped: pb.isStriped || undefined };
    case "orderedList":
      return { _: "pageBlockOrderedList", items: pb.items.map(pageBlockOrderedListItemToTlObject), reversed: pb.isReversed || undefined, start: pb.start, type: pb.itemsType };
    case "details":
      return { _: "pageBlockDetails", title: richTextComponentToTlObject(pb.title), blocks: pb.blocks.map(pageBlockToTlObject), open: pb.isOpen || undefined };
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
      return { _: "pageBlockBlockquoteBlocks", caption: richTextComponentToTlObject(pb.caption), blocks: pb.blocks.map(pageBlockToTlObject) };
  }

  unreachable();
}

export function collectMediaFileIds(pageBlocks: PageBlock[]): { fileId: string; type: "photo" | "audio" | "video" | "voice" | "animation" }[] {
  const fileIds = new Array<{ fileId: string; type: "photo" | "audio" | "video" | "voice" | "animation" }>();
  for (const m of collectPageBlockMedia(pageBlocks)) {
    fileIds.push({ type: m.type, fileId: m.fileId });
  }
  for (const photo of collectRichTextComponentPhoto(collectRichTextComponents(pageBlocks))) {
    fileIds.push({ type: "photo", fileId: photo.fileId });
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
  const items = new Array<RichTextComponent>();
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
function collectRichTextComponents(pageBlocks: PageBlock[]): RichTextComponent[] {
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
      case "embed":
      case "audio":
      case "map":
        components.push(pb.caption.text);
        components.push(pb.caption.credit);
        break;
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
function collectPageBlockMedia(pageBlocks: PageBlock[]) {
  const media = new Array<PageBlockPhoto | PageBlockVideo | PageBlockAudio | PageBlockVoice | PageBlockAnimation>();
  for (const pb of pageBlocks) {
    if (pb.type === "photo" || pb.type === "video" || pb.type === "audio" || pb.type === "voice" || pb.type === "animation") {
      media.push(pb);
    } else {switch (pb.type) {
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
      }}
  }

  return media;
}
