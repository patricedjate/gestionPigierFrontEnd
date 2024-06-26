import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environments";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {jwtDecode} from "jwt-decode";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.apiUrl;
  isAuthenticated = false;
  email : any;
  roles : any;
  accessToken! : string;
  constructor(private http: HttpClient) {
    }
  public login(email: string, password: string) {
    let option ={
      headers: new HttpHeaders({}).set('Accept', 'application/x-www-form-urlencoded')
    }
    let params = new HttpParams().set('email', email).set('password', password);
    return this.http.post(`${this.apiUrl}/login`,params,option);
  }
  loadProfile(data : any){
    this.isAuthenticated = true;
    this.accessToken = data['access_token'];
    let decodedJwt:any =jwtDecode(this.accessToken);
    this.email = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }
  /*
  public register(data : User){
    return this.http.post(`${this.apiUrl}/addUser`,data)
  }

   */
  public addRole(userId: number, roleId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addRoleToUser/${userId}/${roleId}`,{userId:userId,roleId:roleId},)
  }
}


