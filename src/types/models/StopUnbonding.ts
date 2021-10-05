// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class StopUnbonding implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public nominator: string;

    public timestamp: Date;

    public amountWithdraw: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save StopUnbonding entity without an ID");
        await store.set('stopUnbonding', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove StopUnbonding entity without an ID");
        await store.remove('stopUnbonding', id.toString());
    }

    static async get(id:string): Promise<StopUnbonding | undefined>{
        assert((id !== null && id !== undefined), "Cannot get StopUnbonding entity without an ID");
        const record = await store.get('stopUnbonding', id.toString());
        if (record){
            return StopUnbonding.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new StopUnbonding(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
