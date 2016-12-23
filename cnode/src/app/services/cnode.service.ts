import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/toPromise'
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()

export class CnodeService {
  constructor(private _http: Http) {
  }

  getTopics(page: number, tab: string): Promise<any> {
    return this._http.get('https://cnodejs.org/api/v1/topics?page=' + page + '&tab=' + tab)
      .toPromise()
      .then(this.extractData)
      .catch(this.errorHandler)
  }

  getTopicContent(id): Observable<any> {
    return this._http.get('https://cnodejs.org/api/v1/topic/' + id)
      .map((res: Response) => res.json())
  }

  getUser(name) {
    return this._http.get('https://cnodejs.org/api/v1/user/' + name)
      .map((res: Response) => res.json())
  }

  extractData(res: Response) {
    let body = res.json();
    return body.data || {}
  }

  errorHandler(err: Response | any) {
    let errMsg: string;
    if (err instanceof Response) {
      const body = err.json();
      const error = body.error || JSON.stringify(body);
      errMsg = `${err.status} - ${err.statusText || ''} ${err}`
    } else {
      errMsg = err.message ? err.message : err.toString()
    }
    return Promise.reject(errMsg)
  }
}
