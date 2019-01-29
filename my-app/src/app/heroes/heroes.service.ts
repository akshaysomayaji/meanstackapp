import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { commonResponseModel } from '../commonResponseModel';
import { catchError, map, tap, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "authorization": localStorage.getItem("accessToken"),
    'Access-Control-Allow-Headers': '*',
    "Expires": "0",
    "Pragma": "no-cache",
    "Cache-Control":"no-cache, no-store, must-revalidate"
  })
};


@Injectable({
  providedIn: 'root',
})

export class HeroesService {
  private heroesUrl = environment.API_ENDPOINT;

  constructor(
    private http: HttpClient) { }

  sessionCheck(): Observable<commonResponseModel> {
    console.log("session token =", localStorage.getItem("accessToken"));
    return this.http.get<commonResponseModel>(this.heroesUrl + "/user/sessionvalidation/" + sessionStorage.getItem("accessToken"), httpOptions).pipe(
      tap((loginresponse: commonResponseModel) => this.log(`logged in w/ id=${loginresponse}`)),
      catchError(this.handleError<commonResponseModel>('session'))
    )s;
  }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.error}`);
      result = error.error;
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
