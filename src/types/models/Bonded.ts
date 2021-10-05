// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class Bonded implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public nominator: string;

    public amountBonded?: bigint;

    public timestamp?: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Bonded entity without an ID");
        await store.set('Bonded', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Bonded entity without an ID");
        await store.remove('Bonded', id.toString());
    }

    static async get(id:string): Promise<Bonded | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Bonded entity without an ID");
        const record = await store.get('Bonded', id.toString());
        if (record){
            return Bonded.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new Bonded(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
