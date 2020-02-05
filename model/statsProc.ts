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
import { StatsProcTcp } from './statsProcTcp';
import { StatsProcDiskIo } from './statsProcDiskIo';
import { StatsProcGc } from './statsProcGc';


/**
 * Stats on the currently active process
 */
export interface StatsProc { 
    /**
     * Time the associated process started
     */
    startTime?: string;
    /**
     * Id of the associated process
     */
    id?: number;
    /**
     * Virtual memory used by the associated process
     */
    mem?: number;
    /**
     * CPU usage of the process
     */
    cpu?: number;
    /**
     * CPU usage of the process scaled by logical processor count
     */
    cpuScaled?: number;
    /**
     * Number of threads used by process
     */
    threadsCount?: number;
    /**
     * The rate at which threads in the process attempt to acquire a managed lock unsuccessfully
     */
    contentionsRate?: number;
    /**
     * Number of exceptions thrown per second
     */
    thrownExceptionsRate?: number;
    gc?: StatsProcGc;
    diskIo?: StatsProcDiskIo;
    tcp?: StatsProcTcp;
}

