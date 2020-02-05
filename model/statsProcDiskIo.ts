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
 * Disk input and output stats
 */
export interface StatsProcDiskIo { 
    /**
     * The number of bytes read by Event Store since server start
     */
    readBytes?: number;
    /**
     * The number of bytes written by Event Store since server start
     */
    writtenBytes?: number;
    /**
     * The number of read operations by Event Store since server start
     */
    readOps?: number;
    /**
     * The number of write operations by Event Store since server start
     */
    writeOps?: number;
}
