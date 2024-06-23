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


}
