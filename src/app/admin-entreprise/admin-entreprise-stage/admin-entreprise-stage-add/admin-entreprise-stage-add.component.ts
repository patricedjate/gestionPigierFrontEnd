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
  stageId  :any ;
  entrepriseId  = localStorage.getItem('entrepriseId');
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
      lieu : new FormControl("",Validators.required)
    })
  }
  addStage(){
    if(this.form.valid){
      this.service.addStage({
        titre : this.form.get('titre')?.value,
        domaine : this.form.get('domaine')?.value,
        date_debut: this.form.get('dateDebut')?.value,
        date_fin: this.form.get('dateFin')?.value,
        description: this.form.get('description')?.value,
        lieu: this.form.get('lieu')?.value
      }).subscribe({
        next: (data : any ) => {
          this.stageId = data.id
          this.entreprisesService.addStageToEntreprise(this.entrepriseId,this.stageId)
            .subscribe({next: (data : any ) => {
                this.tostr.success("Offre de stage crée avec succès");
                this.router.navigate(['/entreprise/stage'])
              },
              error: (error: any ) => {
              this.errorMessage = error;
              }
            })
      }
      })
    }else{
      this.tostr.info("Cette offre existe deja");
    }
  }
}
