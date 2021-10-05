// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Slashed implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public nominator: string;

    public timestamp: Date;

    public amountSlashed: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Slashed entity without an ID");
        await store.set('Slashed', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Slashed entity without an ID");
        await store.remove('Slashed', id.toString());
    }

    static async get(id:string): Promise<Slashed | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Slashed entity without an ID");
        const record = await store.get('Slashed', id.toString());
        if (record){
            return Slashed.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Slashed(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
