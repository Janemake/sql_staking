import { Entity } from "@subql/types";
export declare class Unbonded implements Entity {
    constructor(id: string);
    id: string;
    nominator: string;
    amountUnbonded?: bigint;
    timestamp?: Date;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Unbonded | undefined>;
    static create(record: any): Unbonded;
}
