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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { SubscriptionItem } from '../model/subscriptionItem';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class SubscriptionsService {

    protected basePath = 'https://eventstore.org';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Acknowledge a single message
     * Clients must acknowledge (or not acknowledge) messages in the competing consumer model. If the client fails to respond in the given timeout period, the message will be retried. You should use the &#x60;rel&#x60; links in the feed for acknowledgements not bookmark URIs as they are subject to change in future versions.
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param messageid The id of the message that needs to be acked
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public acknowledgeASingleMessage(stream: string, subscription: string, messageid: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public acknowledgeASingleMessage(stream: string, subscription: string, messageid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public acknowledgeASingleMessage(stream: string, subscription: string, messageid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public acknowledgeASingleMessage(stream: string, subscription: string, messageid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling acknowledgeASingleMessage.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling acknowledgeASingleMessage.');
        }
        if (messageid === null || messageid === undefined) {
            throw new Error('Required parameter messageid was null or undefined when calling acknowledgeASingleMessage.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}/ack/${encodeURIComponent(String(messageid))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Acknowledge multiple messages
     * Clients must acknowledge (or not acknowledge) messages in the competing consumer model. If the client fails to respond in the given timeout period, the message will be retried. You should use the &#x60;rel&#x60; links in the feed for acknowledgements not bookmark URIs as they are subject to change in future versions.
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param ids The ids of the messages that need to be acked separated by commas
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public acknowledgeMultipleMessages(stream: string, subscription: string, ids?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public acknowledgeMultipleMessages(stream: string, subscription: string, ids?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public acknowledgeMultipleMessages(stream: string, subscription: string, ids?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public acknowledgeMultipleMessages(stream: string, subscription: string, ids?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling acknowledgeMultipleMessages.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling acknowledgeMultipleMessages.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});


        if (ids !== undefined && ids !== null) {
            queryParameters = queryParameters.set('ids', <any>ids);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}/ack`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a persistent subscription
     * Before interacting with a subscription group, you need to create one. You will receive an error if you attempt to create a subscription group more than once. This requires [admin permissions](/server/access-control-lists).
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param subscriptionItem Subscription to create
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createSubscription(stream: string, subscription: string, subscriptionItem?: SubscriptionItem, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createSubscription(stream: string, subscription: string, subscriptionItem?: SubscriptionItem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createSubscription(stream: string, subscription: string, subscriptionItem?: SubscriptionItem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createSubscription(stream: string, subscription: string, subscriptionItem?: SubscriptionItem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling createSubscription.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling createSubscription.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}`,
            subscriptionItem,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a subscription
     * Deletes a subscription
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteSubscription(stream: string, subscription: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteSubscription(stream: string, subscription: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteSubscription(stream: string, subscription: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteSubscription(stream: string, subscription: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling deleteSubscription.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling deleteSubscription.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Negative acknowledge a single message
     * Clients must acknowledge (or not acknowledge) messages in the competing consumer model. If the client fails to respond in the given timeout period, the message will be retried. You should use the &#x60;rel&#x60; links in the feed for acknowledgements not bookmark URIs as they are subject to change in future versions.
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param messageid The id of the message that needs to be nacked
     * @param action &lt;ul&gt;&lt;li&gt;**Park** - Don&#39;t retry the message, park it until a request is sent to reply the parked messages&lt;li&gt;**Retry** - Retry the message&lt;li&gt;**Skip** - Discard the message&lt;li&gt;**Stop** - Stop the subscription&lt;/ul&gt;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dontAcknowledgeASingleMessage(stream: string, subscription: string, messageid: string, action?: 'Park' | 'Retyr' | 'Skip' | 'Stop', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public dontAcknowledgeASingleMessage(stream: string, subscription: string, messageid: string, action?: 'Park' | 'Retyr' | 'Skip' | 'Stop', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public dontAcknowledgeASingleMessage(stream: string, subscription: string, messageid: string, action?: 'Park' | 'Retyr' | 'Skip' | 'Stop', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public dontAcknowledgeASingleMessage(stream: string, subscription: string, messageid: string, action?: 'Park' | 'Retyr' | 'Skip' | 'Stop', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling dontAcknowledgeASingleMessage.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling dontAcknowledgeASingleMessage.');
        }
        if (messageid === null || messageid === undefined) {
            throw new Error('Required parameter messageid was null or undefined when calling dontAcknowledgeASingleMessage.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});


        if (action !== undefined && action !== null) {
            queryParameters = queryParameters.set('action', <any>action);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}/nack/${encodeURIComponent(String(messageid))}`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Negative acknowledge multiple messages
     * Clients must acknowledge (or not acknowledge) messages in the competing consumer model. If the client fails to respond in the given timeout period, the message will be retried. You should use the &#x60;rel&#x60; links in the feed for acknowledgements not bookmark URIs as they are subject to change in future versions.
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param ids The ids of the messages that need to be nacked separated by commas
     * @param action &lt;ul&gt;&lt;li&gt;**Park** - Don&#39;t retry the message, park it until a request is sent to reply the parked messages&lt;li&gt;**Retry** - Retry the message&lt;li&gt;**Skip** - Discard the message&lt;li&gt;**Stop** - Stop the subscription&lt;/ul&gt;
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public dontAcknowledgeMultipleMessages(stream: string, subscription: string, ids?: string, action?: 'Park' | 'Retry' | 'Skip' | 'Stop', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public dontAcknowledgeMultipleMessages(stream: string, subscription: string, ids?: string, action?: 'Park' | 'Retry' | 'Skip' | 'Stop', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public dontAcknowledgeMultipleMessages(stream: string, subscription: string, ids?: string, action?: 'Park' | 'Retry' | 'Skip' | 'Stop', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public dontAcknowledgeMultipleMessages(stream: string, subscription: string, ids?: string, action?: 'Park' | 'Retry' | 'Skip' | 'Stop', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling dontAcknowledgeMultipleMessages.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling dontAcknowledgeMultipleMessages.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});


        if (ids !== undefined && ids !== null) {
            queryParameters = queryParameters.set('ids', <any>ids);
        }
        if (action !== undefined && action !== null) {
            queryParameters = queryParameters.set('action', <any>action);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}/nack`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Read a stream
     * Read a specified stream by a persistent subscription.
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param embed Needed
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAStream(stream: string, subscription: string, embed?: 'None' | 'Content' | 'Rich' | 'Body' | 'PrettyBody' | 'TryHarder', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAStream(stream: string, subscription: string, embed?: 'None' | 'Content' | 'Rich' | 'Body' | 'PrettyBody' | 'TryHarder', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAStream(stream: string, subscription: string, embed?: 'None' | 'Content' | 'Rich' | 'Body' | 'PrettyBody' | 'TryHarder', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAStream(stream: string, subscription: string, embed?: 'None' | 'Content' | 'Rich' | 'Body' | 'PrettyBody' | 'TryHarder', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling getAStream.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling getAStream.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});


        if (embed !== undefined && embed !== null) {
            queryParameters = queryParameters.set('embed', <any>embed);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get information for all subscriptions
     * Returns all subscriptions from all streams.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllSubscriptions(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAllSubscriptions(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAllSubscriptions(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAllSubscriptions(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/subscriptions`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Reads a stream via a persistent subscription and return a specific number of events
     * Reads a stream via a persistent subscription and return a specific number of events
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param count How many events to return for the request.
     * @param embed 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getNSubscriptionEvents(stream: string, subscription: string, count: number, embed?: 'None' | 'Content' | 'Rich' | 'Body' | 'PrettyBody' | 'TryHarder', observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getNSubscriptionEvents(stream: string, subscription: string, count: number, embed?: 'None' | 'Content' | 'Rich' | 'Body' | 'PrettyBody' | 'TryHarder', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getNSubscriptionEvents(stream: string, subscription: string, count: number, embed?: 'None' | 'Content' | 'Rich' | 'Body' | 'PrettyBody' | 'TryHarder', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getNSubscriptionEvents(stream: string, subscription: string, count: number, embed?: 'None' | 'Content' | 'Rich' | 'Body' | 'PrettyBody' | 'TryHarder', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling getNSubscriptionEvents.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling getNSubscriptionEvents.');
        }
        if (count === null || count === undefined) {
            throw new Error('Required parameter count was null or undefined when calling getNSubscriptionEvents.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});


        if (embed !== undefined && embed !== null) {
            queryParameters = queryParameters.set('embed', <any>embed);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}/${encodeURIComponent(String(count))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Reads stream information via a persistent subscription
     * Needed
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubscriptionInformation(stream: string, subscription: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getSubscriptionInformation(stream: string, subscription: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getSubscriptionInformation(stream: string, subscription: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getSubscriptionInformation(stream: string, subscription: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling getSubscriptionInformation.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling getSubscriptionInformation.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}/info`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns information about the subscriptions for a stream
     * Needed
     * @param stream The stream name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getSubscriptionStreamInformation(stream: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getSubscriptionStreamInformation(stream: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getSubscriptionStreamInformation(stream: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getSubscriptionStreamInformation(stream: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling getSubscriptionStreamInformation.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Replay any previously parked messages in a stream
     * Replay any previously parked messages in a stream that were parked by a negative acknowledgement action.
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public replayPreviouslyParkedMessages(stream: string, subscription: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public replayPreviouslyParkedMessages(stream: string, subscription: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public replayPreviouslyParkedMessages(stream: string, subscription: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public replayPreviouslyParkedMessages(stream: string, subscription: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling replayPreviouslyParkedMessages.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling replayPreviouslyParkedMessages.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.post<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}/replayParked`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a persistant subscription
     * You can edit the settings of an existing subscription while it is running. This will drop the current subscribers and will reset the subscription internally.
     * @param stream The stream the persistent subscription is on
     * @param subscription The name of the subscription group
     * @param subscriptionItem Subscription to create
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateSubscription(stream: string, subscription: string, subscriptionItem?: SubscriptionItem, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateSubscription(stream: string, subscription: string, subscriptionItem?: SubscriptionItem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateSubscription(stream: string, subscription: string, subscriptionItem?: SubscriptionItem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateSubscription(stream: string, subscription: string, subscriptionItem?: SubscriptionItem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (stream === null || stream === undefined) {
            throw new Error('Required parameter stream was null or undefined when calling updateSubscription.');
        }
        if (subscription === null || subscription === undefined) {
            throw new Error('Required parameter subscription was null or undefined when calling updateSubscription.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.eventstore.competingatom+json',
            'application/vnd.eventstore.competingatom+xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/subscriptions/${encodeURIComponent(String(stream))}/${encodeURIComponent(String(subscription))}`,
            subscriptionItem,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}