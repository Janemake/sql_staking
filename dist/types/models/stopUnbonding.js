"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopUnbonding = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class StopUnbonding {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save StopUnbonding entity without an ID");
        await store.set('stopUnbonding', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove StopUnbonding entity without an ID");
        await store.remove('stopUnbonding', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get StopUnbonding entity without an ID");
        const record = await store.get('stopUnbonding', id.toString());
        if (record) {
            return StopUnbonding.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new StopUnbonding(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.StopUnbonding = StopUnbonding;
