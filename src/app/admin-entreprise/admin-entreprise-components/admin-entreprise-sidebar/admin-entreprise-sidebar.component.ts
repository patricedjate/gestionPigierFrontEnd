import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Etudiants} from "../../../core/model/etudiants";
import {EntrepriseService} from "../../../core/service/entreprise/entreprise.service";
import {Entreprises} from "../../../core/model/entreprises";

@Component({
  selector: 'app-admin-entreprise-sidebar',
  templateUrl: './admin-entreprise-sidebar.component.html',
  styleUrls: ['./admin-entreprise-sidebar.component.css']
})
export class AdminEntrepriseSidebarComponent implements OnInit{
  page! : String;
  items: any=[];
  item!:any
  entrepriseId : any  = localStorage.getItem("entrepriseId");
  errorMessage!: string;
  constructor(private router: Router,
              private service: EntrepriseService) {}
  ngOnInit() {
    this.information();
    console.log(this.entrepriseId)
  }
  onChange(name:any){
    this.page = name;
  }
  logout(event:any){
    event.preventDefault();
    localStorage.clear();
  }
  information(){
    this.service.getById(this.entrepriseId).subscribe({
        next: (data:Entreprises) => {
          this.items = data;
          console.log("sidebar");
        }
        , error: (error: any) => {
          this.errorMessage = error}
      }
    )
  }

}
