import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AccountService} from "../../../core/service/account/account.service";
import {EtudiantService} from "../../../core/service/etudiant/etudiant.service";

@Component({
  selector: 'app-vue-register-index',
  templateUrl: './vue-register-index.component.html',
  styleUrls: ['./vue-register-index.component.css']
})
export class VueRegisterIndexComponent implements OnInit{
  form!: FormGroup;
  constructor(private router : Router,
              private toastr : ToastrService,
              private authService : AccountService,
              private etudiantsService : EtudiantService) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl('', [Validators.required]),
      nom : new FormControl('', [Validators.required]),
      mdp: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      prenoms : new FormControl('', [Validators.required]),
      universite: new FormControl('', [Validators.required]),
      niveau: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
    })
  }

  inscription(){
    if(this.form.valid){
      this.etudiantsService.addData({
        nom:this.form.get('nom')?.value,
        prenom:this.form.get('prenoms')?.value,
        email:this.form.get('email')?.value,
        telephone :this.form.get('telephone')?.value,
        universite: this.form.get('universite')?.value,
        niveau_etude: this.form.get('niveau')?.value,
        date_naissance: this.form.get('date')?.value,
        user:({
          username : this.form.get('username')?.value,
          password : this.form.get('mdp')?.value,
          email:this.form.get('email')?.value,
        })
      }).subscribe({
        next: (data: any) => {
          alert(JSON.stringify(data));
          console.log("etudiant cree avec success");
          let userId = data.user.id;
          this.authService.addRole(userId,2).subscribe({
            next: (data: any) => {
              console.log("role ajouté avec succèss")
              this.toastr.success("Inscription effectué avec succès!");
              this.router.navigate([''])
            }
          })
        }
      })
}
  }
}
