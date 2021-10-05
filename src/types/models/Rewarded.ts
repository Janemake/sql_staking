// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Rewarded implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public nominator: string;

    public timestamp: Date;

    public amountRewarded: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Rewarded entity without an ID");
        await store.set('Rewarded', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Rewarded entity without an ID");
        await store.remove('Rewarded', id.toString());
    }

    static async get(id:string): Promise<Rewarded | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Rewarded entity without an ID");
        const record = await store.get('Rewarded', id.toString());
        if (record){
            return Rewarded.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Rewarded(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
