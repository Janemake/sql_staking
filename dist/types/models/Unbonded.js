"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unbonded = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class Unbonded {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save Unbonded entity without an ID");
        await store.set('Unbonded', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove Unbonded entity without an ID");
        await store.remove('Unbonded', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get Unbonded entity without an ID");
        const record = await store.get('Unbonded', id.toString());
        if (record) {
            return Unbonded.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new Unbonded(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Unbonded = Unbonded;
