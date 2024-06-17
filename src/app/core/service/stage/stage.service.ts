import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getStageByDomaine(domaine : string): Observable<any> {
    return this.http.get(`${this.apiUrl}/stage/liste/${domaine}`);
  }
}
