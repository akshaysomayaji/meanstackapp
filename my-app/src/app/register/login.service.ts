import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RegisterModel } from './registerModel';
import { RegisterResponseModel } from './RegisterResponseModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private heroesUrl = environment.API_ENDPOINT;

  constructor(
    private http: HttpClient)
  { }


  addHero(login: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(this.heroesUrl + "/login", login, httpOptions).pipe(
      tap((loginresponse: RegisterResponseModel) => this.log(`logged in w/ id=${loginresponse.txtUsername}`)),
      catchError(this.handleError<RegisterModel>('Register'))
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
