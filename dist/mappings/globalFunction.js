"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = exports.blockNumber = exports.eventIdFromBlockAndIdx = exports.eventId = void 0;
//import {Balance} from "@polkadot/types/interfaces";
function eventId(event) {
    return `${blockNumber(event)}-${event.idx}`;
}
exports.eventId = eventId;
function eventIdFromBlockAndIdx(blockNumber, eventIdx) {
    return `${blockNumber}-${eventIdx}`;
}
exports.eventIdFromBlockAndIdx = eventIdFromBlockAndIdx;
function blockNumber(event) {
    return event.block.block.header.number.toNumber();
}
exports.blockNumber = blockNumber;
function timestamp(block) {
    return block.timestamp;
}
exports.timestamp = timestamp;
