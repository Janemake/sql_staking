import {SubstrateEvent} from "@subql/types";
import {timestamp, eventId} from "./globalFunction";
import {Bonded, 
        Unbonded, 
        StopUnbonding, 
        Slashed, 
        Rewarded} from "../types/models";
import {Balance} from "@polkadot/types/interfaces";

export async function handleBonded(event: SubstrateEvent): Promise<void> {
    
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString();
    let amountBalance = (amount as Balance).toBigInt();

    const element = new Bonded(eventId(event));

    element.timestamp = timestamp(event.block);
    element.nominator = address;
    element.amountBonded = amountBalance;
   
    await element.save();
    logger.info('Bonded from' + address);
}

export async function handleUnbonded(event: SubstrateEvent): Promise<void> {
    
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString();
    let amountBalance = (amount as Balance).toBigInt();

    const element = new Unbonded(eventId(event));

    element.timestamp = timestamp(event.block);
    element.nominator = address;
    element.amountUnbonded = amountBalance;
   
    await element.save();
    logger.info('Unbonded from' + address);
}

export async function handleWithdraw(event: SubstrateEvent): Promise<void> {   
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString();
    let amountBalance = (amount as Balance).toBigInt();

    const element = new StopUnbonding(eventId(event));

    element.timestamp = timestamp(event.block);
    element.nominator = address;
    element.amountWithdraw = amountBalance;
   
    await element.save();
    logger.info('Unbonded withdraw from' + address);
}

export async function handleRewarded(event: SubstrateEvent): Promise<void> {   
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString();
    let amountBalance = (amount as Balance).toBigInt();

    const element = new Rewarded(eventId(event));

    element.timestamp = timestamp(event.block);
    element.nominator = address;
    element.amountRewarded = amountBalance;
   
    await element.save();
    logger.info('Reward received for' + address);
}

export async function handleSlashed(event: SubstrateEvent): Promise<void> {   
    const {event: {data: [acountID, amount]}} = event;

    let address = acountID.toString();
    let amountBalance = (amount as Balance).toBigInt();

    const element = new Slashed(eventId(event));

    element.timestamp = timestamp(event.block);
    element.nominator = address;
    element.amountSlashed = amountBalance;
   
    await element.save();
    logger.info('Slashed for' + address);
}
