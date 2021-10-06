import { SubstrateEvent } from "@subql/types";
export declare function handleBonded(event: SubstrateEvent): Promise<void>;
export declare function handleUnbonded(event: SubstrateEvent): Promise<void>;
export declare function handleWithdraw(event: SubstrateEvent): Promise<void>;
export declare function handleRewarded(event: SubstrateEvent): Promise<void>;
export declare function handleSlashed(event: SubstrateEvent): Promise<void>;
