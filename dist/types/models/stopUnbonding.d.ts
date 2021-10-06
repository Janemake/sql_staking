import { Entity } from "@subql/types";
export declare class StopUnbonding implements Entity {
    constructor(id: string);
    id: string;
    nominator: string;
    timestamp?: Date;
    amountWithdraw?: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<StopUnbonding | undefined>;
    static create(record: any): StopUnbonding;
}
