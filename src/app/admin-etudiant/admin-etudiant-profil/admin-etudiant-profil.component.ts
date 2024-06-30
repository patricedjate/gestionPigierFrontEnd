import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Etudiants} from "../../core/model/etudiants";
import {ToastrService} from "ngx-toastr";
import {EtudiantService} from "../../core/service/etudiant/etudiant.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-etudiant-profil',
  templateUrl: './admin-etudiant-profil.component.html',
  styleUrls: ['./admin-etudiant-profil.component.css']
})
export class AdminEtudiantProfilComponent implements OnInit {
  form!: FormGroup;
  etudId : any = localStorage.getItem("etudId");
 errorMessage!:string;
  constructor(private router: Router,
              private service : EtudiantService,
              private toastrService: ToastrService) {}

  ngOnInit() {
    this.form = new FormGroup({
      nom : new FormControl('', [Validators.required]),
      prenom : new FormControl('', [Validators.required]),
      universite: new FormControl('', [Validators.required]),
      tel: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      niveau: new FormControl('', [Validators.required]),
    })
    console.log(this.etudId)
  }

      valider(){
    if(this.form.valid){
      this.service.update(this.etudId,{
        nom:this.form.get('nom')?.value,
        prenom:this.form.get('prenoms')?.value,
        telephone:this.form.get('telephone')?.value,
        universite:this.form.get('universite')?.value,
        date_naissance:this.form.get('date')?.value,
        niveau_etude:this.form.get('niveau')?.value,
      }).subscribe({
        next : (data: any) =>{
          console.log(data);
          this.toastrService.success("Modification effectué avec succès");
        },
        error : (error: any) =>{
         this.errorMessage = error.message;
        }
      })
    }
    else{
      this.toastrService.error("Information incorrect");
    }
    }


}
