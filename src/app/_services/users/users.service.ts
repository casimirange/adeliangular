import { Injectable } from '@angular/core';
import {IUser} from "../../_model/user";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ICredentials} from "../../_interfaces/credentials";
import {Observable, throwError} from "rxjs";
import {IToken} from "../../_model/token";
import {environment} from "../../../environments/environment";
import {ISignup} from "../../_model/signup";
import {CustomResponse} from "../../_interfaces/custom-response";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(environment.users);
  }


  getUserss(): Observable<CustomResponse<IUser>>{
    return this.http.get<CustomResponse<IUser>>(environment.users);
  }

  users$ = (firstname?: string, lastname?: string, type?: string, status?: string, idStore?: string, page?: number, size?: number) => <Observable<any>>
    this.http.get<any>(environment.users + `/filter?page=${page}&size=${size}&firstName=${firstname}&lastName=${lastname}&typeAccount=${type}&status=${status}&montant=${idStore}`,)
      .pipe(catchError(this.handleError));

  user$ = (internalRef: string) => <Observable<any>>
    this.http.get<any>(environment.users + `/${internalRef}`,)
      .pipe(catchError(this.handleError));


  getAllUsersWithPagination(page: number, size: number): Observable<any>{
    return this.http.get<any>(environment.users+ `?page=${page}&size=${size}`)
  }

  getUser(internalRef: string): Observable<any>{
    return this.http.get<any>(environment.users + `/${internalRef}`);
  }

  getUsersByTypeAccount(type: string): Observable<any>{
    return this.http.get<any>(environment.users + `/typeaccount/${type}`);
  }

  enableDesable(internalRef: string, status: boolean): Observable<any>{
    return this.http.get<any>(environment.users + `/lockAndUnlockAccount/${internalRef}/${status}`);
  }

  updateUser(user: any, userid: string): Observable<any>{
    return this.http.put<any>(environment.users + `/update/${userid}`, user);
  }

  // changePassword(userId: number, body: any): Observable<any>{
  //   return this.http.put<any>(environment.changePassword + `/${userId}/password-update`, body);
  // }

  changePassword(userId: string, body: any): Observable<any>{
    return this.http.put<any>(environment.changePassword + `/${userId}/password-update`, body);
  }

  handleError(error: HttpErrorResponse): Observable<never>{
    return throwError(`Une erreur est survenue: ${error.error.message }` )
  }

}
