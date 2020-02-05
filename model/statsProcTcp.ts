/**
 * HTTP API
 * The HTTP API for Event Store
 *
 * The version of the OpenAPI document: 5.0.4
 * Contact: chris.ward@eventstore.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * TCP connection stats
 */
export interface StatsProcTcp { 
    /**
     * Number of TCP connections to Event Store
     */
    connections?: number;
    /**
     * Receiving speed in bytes per second
     */
    receivingSpeed?: string;
    /**
     * Sending speed in bytes per second
     */
    sendingSpeed?: number;
    /**
     * Number of bytes sent to connections but not yet acknowledged by the receiving party
     */
    inSend?: number;
    /**
     * Time elapsed since last stats read
     */
    measureTime?: number;
    /**
     * Number of bytes waiting to be received by connections
     */
    pendingReceived?: number;
    /**
     * Number of bytes waiting to be sent to connections
     */
    pendingSend?: number;
    /**
     * Total bytes received by TCP connections since last run
     */
    receivedBytesSinceLastRun?: number;
    /**
     * Total bytes received by TCP connections
     */
    receivedBytesTotal?: number;
    /**
     * Total bytes sent to TCP connections since last run
     */
    sentBytesSinceLastRun?: number;
    /**
     * Total bytes sent from TCP connections
     */
    sentBytesTotal?: number;
}
