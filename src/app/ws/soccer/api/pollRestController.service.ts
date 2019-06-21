/**
 * Soccer API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: voetbalsvk@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {CustomHttpUrlEncodingCodec} from '../encoder';

import {Observable} from 'rxjs/Observable';

import {AccountDTO} from '../model/accountDTO';
import {MatchPollDTO} from '../model/matchPollDTO';
import {MultipleChoiceVoteDTOlong} from '../model/multipleChoiceVoteDTOlong';
import {PageDTOMatchPollDTO} from '../model/pageDTOMatchPollDTO';
import {ResponseEntity} from '../model/responseEntity';

import {BASE_PATH} from '../variables';
import {Configuration} from '../configuration';


@Injectable()
export class PollRestControllerService {

    protected basePath = 'https://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
     * Get match poll by id
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMatchPollById(id: number, observe?: 'body', reportProgress?: boolean): Observable<MatchPollDTO>;
    public getMatchPollById(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MatchPollDTO>>;
    public getMatchPollById(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MatchPollDTO>>;
    public getMatchPollById(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getMatchPollById.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<MatchPollDTO>(`${this.basePath}/api/v1/matchPoll/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get all match polls
     *
     * @param page page
     * @param size size
     * @param sort sort
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getMatchPolls(page: number, size?: number, sort?: string, observe?: 'body', reportProgress?: boolean): Observable<PageDTOMatchPollDTO>;
    public getMatchPolls(page: number, size?: number, sort?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PageDTOMatchPollDTO>>;
    public getMatchPolls(page: number, size?: number, sort?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PageDTOMatchPollDTO>>;
    public getMatchPolls(page: number, size?: number, sort?: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (page === null || page === undefined) {
            throw new Error('Required parameter page was null or undefined when calling getMatchPolls.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (page !== undefined) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (sort !== undefined) {
            queryParameters = queryParameters.set('sort', <any>sort);
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<PageDTOMatchPollDTO>(`${this.basePath}/api/v1/matchPoll`,
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
     * Vote
     *
     * @param id id
     * @param vote vote
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public matchPollVote(id: number, vote: MultipleChoiceVoteDTOlong, observe?: 'body', reportProgress?: boolean): Observable<MultipleChoiceVoteDTOlong>;
    public matchPollVote(id: number, vote: MultipleChoiceVoteDTOlong, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MultipleChoiceVoteDTOlong>>;
    public matchPollVote(id: number, vote: MultipleChoiceVoteDTOlong, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MultipleChoiceVoteDTOlong>>;
    public matchPollVote(id: number, vote: MultipleChoiceVoteDTOlong, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling matchPollVote.');
        }
        if (vote === null || vote === undefined) {
            throw new Error('Required parameter vote was null or undefined when calling matchPollVote.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<MultipleChoiceVoteDTOlong>(`${this.basePath}/api/v1/matchPoll/${encodeURIComponent(String(id))}/vote`,
            vote,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Refresh match poll
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public refreshMatchPoll(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<AccountDTO>>;
    public refreshMatchPoll(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AccountDTO>>>;
    public refreshMatchPoll(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AccountDTO>>>;
    public refreshMatchPoll(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling refreshMatchPoll.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.put<Array<AccountDTO>>(`${this.basePath}/api/v1/matchPoll/match/${encodeURIComponent(String(id))}/refresh`,
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
     * Reset match poll
     *
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public resetMatchPoll(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public resetMatchPoll(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public resetMatchPoll(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public resetMatchPoll(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling resetMatchPoll.');
        }

        let headers = this.defaultHeaders;

        // authentication (token) required
        if (this.configuration.apiKeys["X-Auth-Token"]) {
            headers = headers.set('X-Auth-Token', this.configuration.apiKeys["X-Auth-Token"]);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.put<ResponseEntity>(`${this.basePath}/api/v1/poll/${encodeURIComponent(String(id))}/reset`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}