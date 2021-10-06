"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSlashed = exports.handleRewarded = exports.handleWithdraw = exports.handleUnbonded = exports.handleBonded = void 0;
const globalFunction_1 = require("./globalFunction");
const models_1 = require("../types/models");
async function handleBonded(event) {
    const { event: { data: [acountID, amount] } } = event;
    let address = acountID.toString();
    let amountBalance = amount.toBigInt();
    const element = new models_1.Bonded((0, globalFunction_1.eventId)(event));
    element.timestamp = (0, globalFunction_1.timestamp)(event.block);
    element.nominator = address;
    element.amountBonded = amountBalance;
    await element.save();
    logger.info('Bonded from' + address);
}
exports.handleBonded = handleBonded;
async function handleUnbonded(event) {
    const { event: { data: [acountID, amount] } } = event;
    let address = acountID.toString();
    let amountBalance = amount.toBigInt();
    const element = new models_1.Unbonded((0, globalFunction_1.eventId)(event));
    element.timestamp = (0, globalFunction_1.timestamp)(event.block);
    element.nominator = address;
    element.amountUnbonded = amountBalance;
    await element.save();
    logger.info('Unbonded from' + address);
}
exports.handleUnbonded = handleUnbonded;
async function handleWithdraw(event) {
    const { event: { data: [acountID, amount] } } = event;
    let address = acountID.toString();
    let amountBalance = amount.toBigInt();
    const element = new models_1.StopUnbonding((0, globalFunction_1.eventId)(event));
    element.timestamp = (0, globalFunction_1.timestamp)(event.block);
    element.nominator = address;
    element.amountWithdraw = amountBalance;
    await element.save();
    logger.info('Unbonded withdraw from' + address);
}
exports.handleWithdraw = handleWithdraw;
async function handleRewarded(event) {
    const { event: { data: [acountID, amount] } } = event;
    let address = acountID.toString();
    let amountBalance = amount.toBigInt();
    const element = new models_1.Rewarded((0, globalFunction_1.eventId)(event));
    element.timestamp = (0, globalFunction_1.timestamp)(event.block);
    element.nominator = address;
    element.amountRewarded = amountBalance;
    await element.save();
    logger.info('Reward received for' + address);
}
exports.handleRewarded = handleRewarded;
async function handleSlashed(event) {
    const { event: { data: [acountID, amount] } } = event;
    let address = acountID.toString();
    let amountBalance = amount.toBigInt();
    const element = new models_1.Slashed((0, globalFunction_1.eventId)(event));
    element.timestamp = (0, globalFunction_1.timestamp)(event.block);
    element.nominator = address;
    element.amountSlashed = amountBalance;
    await element.save();
    logger.info('Slashed for' + address);
}
exports.handleSlashed = handleSlashed;
