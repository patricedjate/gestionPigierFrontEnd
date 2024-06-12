import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-etudiant-stage',
  templateUrl: './admin-etudiant-stage.component.html',
  styleUrls: ['./admin-etudiant-stage.component.css']
})
export class AdminEtudiantStageComponent implements OnInit{
  constructor(private router: Router) {

  }
  ngOnInit(){

  }
  description(){
    this.router.navigate(['etudiant','rechercheStage']);
  }
}
