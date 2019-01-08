import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { commonResponseModel } from '../commonResponseModel';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "authorization": sessionStorage.getItem("accessToken"),
    'Access-Control-Allow-Headers': '*',
    "Expires": "0",
    "Pragma": "no-cache",
    "Cache-Control":"no-cache, no-store, must-revalidate"
  }),
  withCredentials: true
};


@Injectable({
  providedIn: 'root',
})

export class HeroesService {
  private heroesUrl = environment.API_ENDPOINT;

  constructor(
    private http: HttpClient) { }

  sessionCheck(): Observable<commonResponseModel> {
    return this.http.get<commonResponseModel>(this.heroesUrl + "/user/sessionvalidation/" + sessionStorage.getItem("accessToken"), httpOptions).pipe(
      tap((response: commonResponseModel) => this.log(`logged in w/ id=${response}`)),
      catchError(this.handleError<commonResponseModel>('authenticate'))
    );
  }
  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
