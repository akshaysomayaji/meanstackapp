import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { userFilterModel, UsersModel, userResponseModel } from './usersModel';


const httpOptions = {
  headers: new HttpHeaders({
    "authorization": localStorage.getItem("accessToken"),
    'Access-Control-Allow-Headers': '*',
    "Expires": "0",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache, no-store, must-revalidate"
  }),
};

@Injectable({
  providedIn: 'root',
})

export class UsersService {
  private heroesUrl = environment.API_ENDPOINT;


  constructor(
    private http: HttpClient, private usersService: UsersService)
  { }


  getUsersDetails(filter: userFilterModel): Observable<userResponseModel> {
    return this.http.get<userResponseModel>(this.heroesUrl + "/user/getall/" + filter.userrole, httpOptions).pipe(
      tap((response: userResponseModel) => this.log(`logged in w/ id=${response}`)),
      catchError(this.handleError<userResponseModel>('authenticate'))
    );
  } 

  addUserDetails(register: UsersModel): Observable<userResponseModel> {
    return this.http.post<userResponseModel>(this.heroesUrl + "/user/add", register, httpOptions).pipe(
      tap((response: userResponseModel) => this.log(`logged in w/ id=${response}`)),
      catchError(this.handleError<userResponseModel>('Register'))
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
