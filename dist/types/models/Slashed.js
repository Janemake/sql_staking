"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slashed = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class Slashed {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save Slashed entity without an ID");
        await store.set('Slashed', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove Slashed entity without an ID");
        await store.remove('Slashed', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get Slashed entity without an ID");
        const record = await store.get('Slashed', id.toString());
        if (record) {
            return Slashed.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        let entity = new Slashed(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.Slashed = Slashed;
