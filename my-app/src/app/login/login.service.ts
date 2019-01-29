import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginModel } from './LoginModel';
import { LoginResponseModel } from './LoginResponseModel';

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


  addHero(login: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.heroesUrl + "/login", login, httpOptions).pipe(
      tap((loginresponse: LoginResponseModel) => this.log(`logged in w/ id=${loginresponse.txtUsername}`)),
      catchError(this.handleError<LoginModel>('login'))
    );
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
