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

import { PasswordChangeItem } from '../model/passwordChangeItem';
import { PasswordResetItem } from '../model/passwordResetItem';
import { UserItem } from '../model/userItem';
import { UserUpdateItem } from '../model/userUpdateItem';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class UsersService {

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
     * Change user password
     * Change the password of the specified user.
     * @param login The user&#39;s name
     * @param newPassword The new password for the user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public changePassword(login: string, newPassword: PasswordChangeItem, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public changePassword(login: string, newPassword: PasswordChangeItem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public changePassword(login: string, newPassword: PasswordChangeItem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public changePassword(login: string, newPassword: PasswordChangeItem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling changePassword.');
        }
        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling changePassword.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
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

        return this.httpClient.post<any>(`${this.basePath}/users/${encodeURIComponent(String(login))}/command/change-password`,
            newPassword,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a User
     * Create a new user.
     * @param userItem User to create
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createAUser(userItem?: UserItem, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createAUser(userItem?: UserItem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createAUser(userItem?: UserItem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createAUser(userItem?: UserItem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // authentication (basicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
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

        return this.httpClient.post<any>(`${this.basePath}/users`,
            userItem,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a user
     * Delete specified user.
     * @param login The user&#39;s name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteAUser(login: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteAUser(login: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteAUser(login: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteAUser(login: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling deleteAUser.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/users/${encodeURIComponent(String(login))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Disable the specified user
     * Disable the acount of the specified user.
     * @param login The user&#39;s name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disableAUser(login: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public disableAUser(login: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public disableAUser(login: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public disableAUser(login: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling disableAUser.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.put<any>(`${this.basePath}/users/${encodeURIComponent(String(login))}/command/disable`,
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
     * Enable the specified user
     * Enable the acount of the specified user.
     * @param login The user&#39;s name
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public enableAUser(login: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public enableAUser(login: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public enableAUser(login: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public enableAUser(login: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling enableAUser.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.put<any>(`${this.basePath}/users/${encodeURIComponent(String(login))}/command/enable`,
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
     * Get user
     * Returns the user currently authenticated with the API, or the user specified.
     * @param login The user passed to the API call.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAUser(login: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAUser(login: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAUser(login: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAUser(login: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling getAUser.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/users/${encodeURIComponent(String(login))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all users
     * Returns all users defined in Event Store.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllUsers(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAllUsers(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAllUsers(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAllUsers(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/users`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Reset user password
     * Reset the password of the specified user.
     * @param login The user&#39;s name
     * @param newPassword The new password for the user
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public resetPassword(login: string, newPassword: PasswordResetItem, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public resetPassword(login: string, newPassword: PasswordResetItem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public resetPassword(login: string, newPassword: PasswordResetItem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public resetPassword(login: string, newPassword: PasswordResetItem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling resetPassword.');
        }
        if (newPassword === null || newPassword === undefined) {
            throw new Error('Required parameter newPassword was null or undefined when calling resetPassword.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
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

        return this.httpClient.post<any>(`${this.basePath}/users/${encodeURIComponent(String(login))}/command/reset-password`,
            newPassword,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update specified user
     * Update the FullName of Groups of the specified user.
     * @param login The user&#39;s name
     * @param userUpdateItem User to update
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateAUser(login: string, userUpdateItem?: UserUpdateItem, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateAUser(login: string, userUpdateItem?: UserUpdateItem, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateAUser(login: string, userUpdateItem?: UserUpdateItem, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateAUser(login: string, userUpdateItem?: UserUpdateItem, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (login === null || login === undefined) {
            throw new Error('Required parameter login was null or undefined when calling updateAUser.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'application/xml'
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

        return this.httpClient.put<any>(`${this.basePath}/users/${encodeURIComponent(String(login))}`,
            userUpdateItem,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
