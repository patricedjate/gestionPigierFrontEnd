import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {StageService} from "../../../core/service/stage/stage.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Etudiants} from "../../../core/model/etudiants";
import {Stages} from "../../../core/model/stages";
import {EtudiantService} from "../../../core/service/etudiant/etudiant.service";
import {EntrepriseService} from "../../../core/service/entreprise/entreprise.service";

@Component({
  selector: 'app-admin-entreprise-stage-add',
  templateUrl: './admin-entreprise-stage-add.component.html',
  styleUrls: ['./admin-entreprise-stage-add.component.css']
})
export class AdminEntrepriseStageAddComponent implements OnInit{
  form!: FormGroup;
  errorMessage: any;
  userId = localStorage.getItem('userId');
  constructor(
    private tostr: ToastrService,
    private router: Router,
    private service: StageService,
    private entreprisesService : EntrepriseService
  ){

  }
  ngOnInit() {
    this.form = new FormGroup({
      titre: new FormControl("", Validators.required),
      domaine : new FormControl("", Validators.required),
      dateDebut: new FormControl("", Validators.required),
      dateFin: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    })
  }
  addStage(){
    if(this.form.valid){
      this.service.addStage({
        titre : this.form.get('titre'),
        domaine : this.form.get('domaine'),
        date_debut: this.form.get('dateDebut'),
        date_fin: this.form.get('dateFin'),
        description: this.form.get('description'),
      }).subscribe({
        next: (data:Stages) => {
          this.entreprisesService.getByUserId(this.userId).subscribe({
            next : (data : any)=> {

          },
            error: (error: any) => {
              this.errorMessage = error
            }
          })      },
        error: (error: any) => {
          this.errorMessage = error
        }
        }



      )
    }else{
      this.tostr.info("Cette offre existe deja");
    }
  }
}
