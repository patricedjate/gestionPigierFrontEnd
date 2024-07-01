import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Entreprises} from "../../model/entreprises";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
private apiUrl = environment.apiUrl
  constructor(private http : HttpClient) { }

  addData(data:Entreprises):Observable<any>{
  return this.http.post(`${this.apiUrl}/entreprise/add`, data)
  }
  addStageToEntreprise(entrepriseId: any,stageId:any ):Observable<any>{
  return this.http.post(`${this.apiUrl}/entreprise/${stageId}/${entrepriseId}`, {entrepriseId,stageId})
  }
  getByUserId(userId:any):Observable<any>{
  return this.http.get(`${this.apiUrl}/entreprise/getbyuserid/${userId}`)
  }
  getById(entrepriseId:any):Observable<any>{
  return this.http.get(`${this.apiUrl}/entreprise/${entrepriseId}`)
  }
}
