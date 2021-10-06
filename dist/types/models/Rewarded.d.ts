import { Entity } from "@subql/types";
export declare class Rewarded implements Entity {
    constructor(id: string);
    id: string;
    nominator: string;
    timestamp?: Date;
    amountRewarded?: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Rewarded | undefined>;
    static create(record: any): Rewarded;
}
