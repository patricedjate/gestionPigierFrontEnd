import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StageService} from "../../core/service/stage/stage.service";
import {Stages} from "../../core/model/stages";


@Component({
  selector: 'app-admin-etudiant-stage',
  templateUrl: './admin-etudiant-stage.component.html',
  styleUrls: ['./admin-etudiant-stage.component.css']
})
export class AdminEtudiantStageComponent implements OnInit{
  //dtOptions : DataTable.Settings= {};

  items: any = [];
  item!: any;
  errorMessage!: string;
  id: any;

  displayTable: boolean = false;
  constructor(private router: Router,
              private service : StageService) {

  }
  ngOnInit(){
this.getItems()
    alert(localStorage.getItem("role"));
    alert(localStorage.getItem("accessToken"));
  }
  getItems() {
    this.service.getStageByDomaine("informatique").subscribe({
      next: (data: Stages) => {

          //this.dtOptions = {};
          this.items = data;
          this.displayTable = true;
          console.log(JSON.stringify(this.items));

      },
      error: (error: any) => {
        this.errorMessage = error;
      },
    });
  }
  description(){
    this.router.navigate(['etudiant','rechercheStage']);
  }
}
