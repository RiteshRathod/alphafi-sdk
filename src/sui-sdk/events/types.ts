import { PoolName } from "../../common/types";

interface CommonEventAttributes {
  type: string;
  timestamp: number;
}

export interface CetusAutoCompoundingEvent {
  compound_amount_a: bigint;
  compound_amount_b: bigint;
  current_liquidity: bigint;
  fee_collected_a: bigint;
  fee_collected_b: bigint;
  free_balance_a: bigint;
  free_balance_b: bigint;
  investor_id: string;
  total_amount_a: bigint;
  total_amount_b: bigint;
}

export interface NaviAutoCompoundingEvent {
  compound_amount: bigint;
  fee_collected: bigint;
  investor_id: string;
  location: number;
  total_amount: bigint;
}

export interface RebalanceEvent {
  investor_id: string;
  lower_tick_after: string;
  upper_tick_after: string;
  sqrt_price_after: string;
  amount_a_before: string;
  amount_b_before: string;
  amount_a_after: string;
  amount_b_after: string;
}

export interface AlphaAutoCompoundingEvent {
  amount: string;
  investor_id: string;
}

export type AutoCompoundingEventNode =
  | (CetusAutoCompoundingEvent & CommonEventAttributes)
  | (NaviAutoCompoundingEvent & CommonEventAttributes)
  | (AlphaAutoCompoundingEvent & CommonEventAttributes);

export type RebalanceEventNode = RebalanceEvent & CommonEventAttributes;

export type EventNode = AutoCompoundingEventNode | RebalanceEventNode;

export type FetchAutoCompoundingEventsParams = {
  startTime?: number;
  endTime?: number;
  poolNames?: PoolName[];
};

export type FetchRebalanceEventsParams = FetchAutoCompoundingEventsParams;

export type FetchEventsParams = {
  eventTypes: string[];
  startTime?: number;
  endTime?: number;
};
