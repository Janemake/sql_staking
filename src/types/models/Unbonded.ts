// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Unbonded implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public nominator: string;

    public amountUnbonded?: bigint;

    public timestamp?: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Unbonded entity without an ID");
        await store.set('Unbonded', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Unbonded entity without an ID");
        await store.remove('Unbonded', id.toString());
    }

    static async get(id:string): Promise<Unbonded | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Unbonded entity without an ID");
        const record = await store.get('Unbonded', id.toString());
        if (record){
            return Unbonded.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Unbonded(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
