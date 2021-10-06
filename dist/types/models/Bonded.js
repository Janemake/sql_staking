"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bonded = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class Bonded {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save Bonded entity without an ID");
        await store.set('Bonded', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove Bonded entity without an ID");
        await store.remove('Bonded', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get Bonded entity without an ID");
        const record = await store.get('Bonded', id.toString());
        if (record) {
            return Bonded.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new Bonded(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Bonded = Bonded;
