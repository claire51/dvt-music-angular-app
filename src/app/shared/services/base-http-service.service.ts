import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {HttpMethod} from '../../model/httpMethods';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpServiceService<T extends any> {

  constructor(private readonly http: HttpClient) {
  }

  request(method: string, url: string, options?: any): Observable<any> {
    options = this.getAuthHeaders(options, true);
    options.responseType = 'json';

    return this.http.request<T>(method, url, options).pipe(
      map((value) => {
        return value;
      }),
      catchError(this.catchRequestError()),
    );
  }

  get(url: string, options?: any): Observable<any> {
    return this.request(HttpMethod.GET, url, options).pipe(catchError(this.catchRequestError()));
  }

  post(url: string, body: any, options?: any): Observable<any> {
    options = options || {};
    options.body = JSON.stringify(body);
    return this.request(HttpMethod.POST, url, options).pipe(catchError(this.catchRequestError()));
  }

  private getAuthHeaders(options?: any, addContentTypeJsonHeader: boolean = false): any {
    const headers = addContentTypeJsonHeader
      ? new HttpHeaders({
        'Content-Type': 'application/json',
      })
      : new HttpHeaders();

    if (!options) {
      options = {
        headers,
      };
    } else if (!options.headers) {
      options.headers = headers;
    }

    return options;
  }

  private catchRequestError(): any {
    return (response: HttpErrorResponse) => {
      if ([401, 403, 0].includes(response.status)) {
        if (response.status === 0) {
          alert(`A network error occured`);
        } else {
          alert(`Error: ${JSON.stringify(response)} `);
        }
      }
      return throwError(JSON.stringify(response));
    };
  }
}
