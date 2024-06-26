import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EtudiantService} from "../../../core/service/etudiant/etudiant.service";
import {Etudiants} from "../../../core/model/etudiants";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-admin-etudiant-sidebar',
  templateUrl: './admin-etudiant-sidebar.component.html',
  styleUrls: ['./admin-etudiant-sidebar.component.css']
})
export class AdminEtudiantSidebarComponent implements OnInit {
  page! : String;
  items: any=[];
  item!:any
errorMessage!: string;
  constructor(private router: Router,
              private service: EtudiantService) {}
  ngOnInit() {
    this.information();
  }
  onChange(name:any){
    this.page = name;
  }
  logout(event:any){
    event.preventDefault();
    localStorage.clear();
  }
  information(){
    this.service.getById(27).subscribe({
      next: (data:Etudiants) => {
        this.items = data;
      }
    , error: (error: any) => {
      this.errorMessage = error}
      }
    )
  }

}
