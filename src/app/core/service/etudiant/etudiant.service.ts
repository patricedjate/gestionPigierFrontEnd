import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environments";
import {Etudiants} from "../../model/etudiants"
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public addData(data:Etudiants){
    return this.http.post(`${this.apiUrl}/etudiant/add`, data);
}


  getById(id:number){
    return this.http.get(`${this.apiUrl}/etudiant/${id}`);
  }
  update(id:number, data:Etudiants){
    return this.http.put(`${this.apiUrl}/etudiant/update/${id}`, data);
  }
  getByUserId(id:number){
    return this.http.get(`${this.apiUrl}/etudiant/getEtud/${id}`);
  }
  addStageToEtudiant(stageId:number, etudId:number){
    return this.http.post(`${this.apiUrl}/etudiant/${etudId}/${stageId}`, {stageId:stageId, etudId:etudId});
  }


}
