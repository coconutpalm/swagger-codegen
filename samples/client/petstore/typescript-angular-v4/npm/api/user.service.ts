/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { User } from '../model/user';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomQueryEncoderHelper }                          from '../encoder';


@Injectable()
export class UserService {

    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders = new Headers();
    public configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * This can only be done by the logged in user.
     * @summary Create user
     * @param body Created user object
     */
    public createUser(body: User, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.createUserWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Creates list of users with given input array
     * @param body List of user object
     */
    public createUsersWithArrayInput(body: Array<User>, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.createUsersWithArrayInputWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Creates list of users with given input array
     * @param body List of user object
     */
    public createUsersWithListInput(body: Array<User>, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.createUsersWithListInputWithHttpInfo(body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * This can only be done by the logged in user.
     * @summary Delete user
     * @param username The name that needs to be deleted
     */
    public deleteUser(username: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.deleteUserWithHttpInfo(username, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Get user by user name
     * @param username The name that needs to be fetched. Use user1 for testing. 
     */
    public getUserByName(username: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<User> {
        return this.getUserByNameWithHttpInfo(username, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Logs user into the system
     * @param username The user name for login
     * @param password The password for login in clear text
     */
    public loginUser(username: string, password: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<string> {
        return this.loginUserWithHttpInfo(username, password, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * 
     * @summary Logs out current logged in user session
     */
    public logoutUser(extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.logoutUserWithHttpInfo(extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }

    /**
     * This can only be done by the logged in user.
     * @summary Updated user
     * @param username name that need to be deleted
     * @param body Updated user object
     */
    public updateUser(username: string, body: User, extraHttpRequestParams?: RequestOptionsArgs): Observable<{}> {
        return this.updateUserWithHttpInfo(username, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            });
    }


    /**
     * Create user
     * This can only be done by the logged in user.
     * @param body Created user object
     */
    public createUserWithHttpInfo(body: User, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUser.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/user`, requestOptions);
    }

    /**
     * Creates list of users with given input array
     * 
     * @param body List of user object
     */
    public createUsersWithArrayInputWithHttpInfo(body: Array<User>, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUsersWithArrayInput.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/user/createWithArray`, requestOptions);
    }

    /**
     * Creates list of users with given input array
     * 
     * @param body List of user object
     */
    public createUsersWithListInputWithHttpInfo(body: Array<User>, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUsersWithListInput.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/user/createWithList`, requestOptions);
    }

    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param username The name that needs to be deleted
     */
    public deleteUserWithHttpInfo(username: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling deleteUser.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/user/${encodeURIComponent(String(username))}`, requestOptions);
    }

    /**
     * Get user by user name
     * 
     * @param username The name that needs to be fetched. Use user1 for testing. 
     */
    public getUserByNameWithHttpInfo(username: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling getUserByName.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/user/${encodeURIComponent(String(username))}`, requestOptions);
    }

    /**
     * Logs user into the system
     * 
     * @param username The user name for login
     * @param password The password for login in clear text
     */
    public loginUserWithHttpInfo(username: string, password: string, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling loginUser.');
        }
        if (password === null || password === undefined) {
            throw new Error('Required parameter password was null or undefined when calling loginUser.');
        }

        let queryParameters = new URLSearchParams('', new CustomQueryEncoderHelper());
        if (username !== undefined) {
            queryParameters.set('username', <any>username);
        }
        if (password !== undefined) {
            queryParameters.set('password', <any>password);
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/user/login`, requestOptions);
    }

    /**
     * Logs out current logged in user session
     * 
     */
    public logoutUserWithHttpInfo(extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/user/logout`, requestOptions);
    }

    /**
     * Updated user
     * This can only be done by the logged in user.
     * @param username name that need to be deleted
     * @param body Updated user object
     */
    public updateUserWithHttpInfo(username: string, body: User, extraHttpRequestParams?: RequestOptionsArgs): Observable<Response> {
        if (username === null || username === undefined) {
            throw new Error('Required parameter username was null or undefined when calling updateUser.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateUser.');
        }

        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(`${this.basePath}/user/${encodeURIComponent(String(username))}`, requestOptions);
    }

}
