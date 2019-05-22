import { Injectable } from '@angular/core';
import { OperatorFunction, pipe, iif, of, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { pluck, mergeMap, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgGiphyService {

  private readonly endpoint: string;
  private embedUrl: OperatorFunction<string, string>;

  constructor(private http: HttpClient) {
    this.endpoint = 'http://api.giphy.com';
    this.embedUrl = pipe(
      pluck('data'),
          mergeMap((data: any) => iif(
            () => !Array.isArray(data) || data.length > 0,
            of(data).pipe(map(items => Array.isArray(items) ? items[0] : items), pluck('embed_url')),
            of('https://giphy.com/embed/14uQ3cOFteDaU').pipe(tap(() => console.error(`No results for term.`)))
          ))
    );
  }

  /**
   * @desc This function retrieves the url of the first item from a collection
   * of gifs from giphy's response and returns the url wrapped in an Observable.
   * If there are no results related to the search term `q`, a 404 gif from giphy
   * is returned as the url wrapped in an Observable. As a side effect to no results,
   * this function prints an error message.
   * @param q Search term
   * @param key Unique API KEY
   * @returns Observable wrapped Giphy embed_url string
   */
  search(q: string, key: string): Observable<string> {
    return this.http.get(`${this.endpoint}/v1/gifs/search`, {
      params: new HttpParams().append('q', q)
                              .append('api_key', key)
                              .append('limit', '1')
    })
    .pipe(this.embedUrl);
  }

  translate(s: string, key: string): Observable<string> {
    return this.http.get(`${this.endpoint}/v1/gifs/translate`, {
      params: new HttpParams().append('s', s)
                              .append('api_key', key)
                              .append('limit', '1')
    })
    .pipe(this.embedUrl);
  }

  trending(key: string): Observable<string> {
    return this.http.get(`${this.endpoint}/v1/gifs/trending`, {
      params: new HttpParams().append('api_key', key)
                              .append('limit', '1')
    })
    .pipe(this.embedUrl);
  }

  random(key: string): Observable<string> {
    return this.http.get(`${this.endpoint}/v1/gifs/random`, {
      params: new HttpParams().append('api_key', key)
                              .append('limit', '1')
    })
    .pipe(this.embedUrl);
  }

  gifById(id: string, key: string): Observable<string> {
    return this.http.get(`${this.endpoint}/v1/gifs/${id}`, {
      params: new HttpParams().append('api_key', key)
    })
    .pipe(this.embedUrl);
  }
}
