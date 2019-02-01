import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { userFilterModel, UsersModel, userResponseModel } from './usersModel';
import { query } from '@angular/core/src/render3/query';


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
  usermodel: UsersModel;
  params: HttpParams
    
  constructor(
    private http: HttpClient, private usersService: UsersService)
  { }


  getUsersDetails(filter: userFilterModel): Observable<userResponseModel> {
    this.getHttpParams(filter).subscribe(response => this.params = response);
    return this.http.get<userResponseModel>(this.heroesUrl + "/user/getall/", { headers: httpOptions.headers, params: this.params }).pipe(
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


  updateUserDetails(register: UsersModel): Observable<userResponseModel> {
    return this.http.put<userResponseModel>(this.heroesUrl + "/user/edit", register, httpOptions).pipe(
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

  getHttpParams(filter: userFilterModel): Observable<HttpParams>{
    let httpParams = new HttpParams();
    Object.keys(filter).forEach(function (key, value) {
      httpParams = httpParams.set(key, filter[key]);
    });
    return of(httpParams);
  }

  setFormData(formData: UsersModel): void {
    console.log(formData);
    this.usermodel = formData;
  }

  getFormData(): Observable<UsersModel> {
    return of(this.usermodel);
  }

}
