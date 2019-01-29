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

export class RegisterService {
  private heroesUrl = environment.API_ENDPOINT;

  constructor(
    private http: HttpClient)
  { }


  register(register: RegisterModel): Observable<RegisterResponseModel> {
    return this.http.post<RegisterResponseModel>(this.heroesUrl + "/user/register", register, httpOptions).pipe(
      tap((response: RegisterResponseModel) => this.log(`logged in w/ id=${response.response_message}`)),
      catchError(this.handleError<RegisterModel>('Register'))
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
