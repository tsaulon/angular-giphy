import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, iif } from 'rxjs';
import { pluck, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private readonly endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'http://api.giphy.com';
  }

  /**
   * This function retrieves the url of the first item from a collection
   * of gifs from giphy's response and returns the url wrapped in an Observable.
   * If there are no results related to the search term `q`, a 404 gif from giphy
   * is returned as the url wrapped in an Observable. As a side effect to no results,
   * this function prints an error message.
   * @param q Search term
   * @param key Unique API KEY
   */
  search(q: string, key: string): Observable<any> {
    return this.http.get(`${this.endpoint}/v1/gifs/search`, {
      params: new HttpParams().append('q', q)
                              .append('api_key', key)
                              .append('limit', '1')
    })
    .pipe(pluck('data'),
          mergeMap((data: object[]) => iif(
            () => data.length > 0,
            of(data[0]).pipe(pluck('embed_url')),
            of('https://giphy.com/embed/14uQ3cOFteDaU').pipe(tap(() => console.error(`No results for term: ${q}`)))
          )));
  }


}
