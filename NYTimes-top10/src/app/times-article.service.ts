import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class TimesArticleService {
    // your own apikey
    private apikey: string;
    constructor(private _http: Http) { }
    /*
     * 
     * @address: chooseable parameter, choose which city's top 10 article;
     */
    getArticle(address?: string): Promise<[any]> {
        return this._http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + address + '&sort=newest&api-key=' + this.apikey)
            .toPromise() //transform Obervable class to Promise class
            .then(this.extractData)
            .catch(this.errorHandler);
    }
    //data handle
    private extractData(res: Response) {
        let body = res.json();
        //specify this when encounter different type of response
        return body.response.docs || {};
    }
    //error handle method copied from angular.io
    private errorHandler(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    }
}