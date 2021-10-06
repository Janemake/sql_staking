import { Entity } from "@subql/types";
export declare class Slashed implements Entity {
    constructor(id: string);
    id: string;
    nominator: string;
    timestamp?: Date;
    amountSlashed?: bigint;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Slashed | undefined>;
    static create(record: any): Slashed;
}
