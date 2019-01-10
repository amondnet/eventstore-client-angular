/**
 * HTTP API
 * The HTTP API for Event Store
 *
 * OpenAPI spec version: 4.1.1
 * Contact: chris.ward@eventstore.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface SubscriptionItem { 
    /**
     * Whether to resolve link events
     */
    ResolveLinkTos?: boolean;
    /**
     * Which event position in the stream the subscription should start from
     */
    startFrom?: number;
    /**
     * Whether to track latency statistics on this subscription
     */
    extraStatistics?: boolean;
    /**
     * The amount of time to try to checkpoint after
     */
    checkPointAfterMilliseconds?: number;
    /**
     * The size of the buffer (in-memory) listening to live messages as they happen before paging occurs
     */
    liveBufferSize?: number;
    /**
     * The number of events to read per batch when reading the history
     */
    readBatchSize?: number;
    /**
     * The number of events to cache when paging through history
     */
    bufferSize?: number;
    /**
     * The maximum number of messages not checkpointed before forcing a checkpoint
     */
    maxCheckPointCount?: number;
    /**
     * The maximum number of retries (due to timeout) before a message is considered to be parked
     */
    maxRetryCount?: number;
    /**
     * The maximum number of subscribers allowed
     */
    maxSubscriberCount?: number;
    /**
     * The amount of time after which to consider a message as timedout and retried
     */
    messageTimeoutMilliseconds?: number;
    /**
     * The minimum number of messages to write to a checkpoint
     */
    minCheckPointCount?: number;
    /**
     * The strategy to use for distributing events to client consumers
     */
    namedConsumerStrategy?: SubscriptionItem.NamedConsumerStrategyEnum;
}
export namespace SubscriptionItem {
    export type NamedConsumerStrategyEnum = 'RoundRobin' | 'DispatchToSingle' | 'Pinned';
    export const NamedConsumerStrategyEnum = {
        RoundRobin: 'RoundRobin' as NamedConsumerStrategyEnum,
        DispatchToSingle: 'DispatchToSingle' as NamedConsumerStrategyEnum,
        Pinned: 'Pinned' as NamedConsumerStrategyEnum
    };
}