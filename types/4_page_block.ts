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
import { type FileId, FileType, serializeFileId } from "./_file_id.ts";
import { constructLocation, type Location } from "./0_location.ts";
import { type ChatP, constructChatP } from "./1_chat_p.ts";
import { constructPhoto } from "./1_photo.ts";
import { constructRichTextComponent, type RichTextComponent } from "./3_rich_text_component.ts";

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
/** @unlisted */
export interface PageBlockTableRow {
  cells: PageBlockTableCell[];
}
export function constructPageBlockTableRow(ptr: Api.PageTableRow, photos: Api.Photo[]): PageBlockTableRow {
  return {
    cells: ptr.cells.map((v) => constructPageBlockTableCell(v, photos)),
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
      return { type: "pullQuote", text: constructRichTextComponent(pb.text, photos), caption: constructRichTextComponent(pb.caption, photos) };
    case "pageBlockPhoto": {
      const fileId = constructPhoto(Api.as("photo", photos.find((v) => v.id === pb.photo_id))).fileId;
      return cleanObject({ type: "photo", fileId, caption: constructPageBlockCaption(pb.caption, photos), isSpoiler: !!pb.spoiler, linkPreviewId: pb.webpage_id ? String(pb.webpage_id) : undefined, url: pb.url });
    }
    case "pageBlockVideo": {
      const document = Api.as("document", documents.find((v) => v.id === pb.video_id));
      const isAnimated = !!document.attributes.find((v) => Api.is("documentAttributeAnimated", v));
      const fileId: FileId = {
        type: isAnimated ? FileType.Animation : FileType.Video,
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
        type: audioAttribute.voice ? FileType.VoiceNote : FileType.Audio,
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
