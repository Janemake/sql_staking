import { Entity } from "@subql/types";
export declare class Bonded implements Entity {
    constructor(id: string);
    id: string;
    nominator: string;
    amountBonded?: bigint;
    timestamp?: Date;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Bonded | undefined>;
    static create(record: any): Bonded;
}
