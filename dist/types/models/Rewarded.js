"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rewarded = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class Rewarded {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save Rewarded entity without an ID");
        await store.set('Rewarded', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove Rewarded entity without an ID");
        await store.remove('Rewarded', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get Rewarded entity without an ID");
        const record = await store.get('Rewarded', id.toString());
        if (record) {
            return Rewarded.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new Rewarded(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Rewarded = Rewarded;
