import { SubstrateBlock, SubstrateEvent } from "@subql/types";
export declare function eventId(event: SubstrateEvent): string;
export declare function eventIdFromBlockAndIdx(blockNumber: string, eventIdx: string): string;
export declare function blockNumber(event: SubstrateEvent): number;
export declare function timestamp(block: SubstrateBlock): Date;
