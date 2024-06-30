import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StageService} from "../../core/service/stage/stage.service";
import {Stages} from "../../core/model/stages";
import {ToastrService} from "ngx-toastr";
import {EtudiantService} from "../../core/service/etudiant/etudiant.service";
import {Etudiants} from "../../core/model/etudiants";
import {error} from "@angular/compiler-cli/src/transformers/util";


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
  stageId! : number;
  etudId : any = localStorage.getItem("etudId");

  displayTable: boolean = false;
  constructor(private router: Router,
              private service : StageService,
              private toastrService: ToastrService,
              private etudiantService: EtudiantService,) {

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
  postuler(item : any){
    let id =this.etudId;
    this.etudiantService.addStageToEtudiant(item,this.etudId).subscribe({
      next: (data:any) => {
        this.toastrService.success("Votre candidature a bien été prise en compte");
      },
      error : err => {
        this.errorMessage = err;
        this.toastrService.error("Vous avez dejà postuler à cette offre");
      }
    })
  }
}
