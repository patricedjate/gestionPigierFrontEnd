import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../core/model/user";
import {Router} from "@angular/router";
import {AccountService} from "../../../core/service/account/account.service";
import {ToastrService} from "ngx-toastr";
import {jwtDecode} from "jwt-decode";
import {Etudiants} from "../../../core/model/etudiants";
import {EtudiantService} from "../../../core/service/etudiant/etudiant.service";
import {EntrepriseService} from "../../../core/service/entreprise/entreprise.service";
import {Entreprises} from "../../../core/model/entreprises";


@Component({
  selector: 'app-vue-login-index',
  templateUrl: './vue-login-index.component.html',
  styleUrls: ['./vue-login-index.component.css']
})
export class VueLoginIndexComponent implements OnInit {
  form!: FormGroup;
  user!: any;
  isConnecting! : boolean;
  email!: any;
  userId!: any;
  etudId!: any;
  entrepriseId! : any
 errorMessage: any;
  constructor(
    private router: Router,
    private authService : AccountService,
    private  toastr : ToastrService,
    private service : EtudiantService,
    private entrepriseService : EntrepriseService

  ) {}
  ngOnInit():void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  seConnecter(){
    if(this.form.valid && !this.isConnecting ){
      this.authService.login( this.form.get('email')?.value,this.form.get('password')?.value).subscribe({
        next : data =>{
          this.authService.loadProfile(data);
          this.isConnecting = true;
          alert(JSON.stringify(data));
          this.user = data;
          let decodedJwt:any =jwtDecode(this.user["access_token"]);
          //this.email = decodedJwt.sub;
          //this.roles = decodedJwt.scope;
          this.toastr.success("Connexion réussir!");
          localStorage.setItem("accessToken",this.user["access_token"]);
          localStorage.setItem("email",decodedJwt.sub);
          localStorage.setItem("role",decodedJwt.roles);
          console.log(data)
console.log(decodedJwt.token);
          if(localStorage.getItem("role") == "ADMIN"){
            this.router.navigate(['']);
          }else if(localStorage.getItem("role") == "ENTREPRISE"){
            this.router.navigate(['entreprise'])
            this.email = localStorage.getItem("email")
            this.authService.getUserByEmail(this.email).subscribe({
                next : (data : any) =>{
                  console.log(data)
                  this.userId = data.id;
                  console.log(this.userId);
                  localStorage.setItem("userId",this.userId);
                  this.entrepriseService.getByUserId(this.userId).subscribe({
                    next : ( data : Entreprises) =>{
                      console.log(data)
                      this.entrepriseId = data.id
                      localStorage.setItem("entrepriseId",this.entrepriseId)
                    },
                    error : (error: any ) => {
                      this.errorMessage = error;
                    }
                  })
                },
              }
            )
          }
          else if(localStorage.getItem("role") == "ETUDIANT"){
            this.router.navigate(['etudiant']);
            this.email = localStorage.getItem("email");
            this.authService.getUserByEmail(this.email).subscribe({
              next : data =>{
                this.userId = data.id;
                localStorage.setItem("userId",this.userId);
                this.service.getByUserId(this.userId).subscribe({
                    next: (data:Etudiants) => {
                      this.etudId = data.id;
                    localStorage.setItem("etudId",this.etudId);
                    }
                    , error: (error: any) => {
                      this.errorMessage = error}
                  }
                )
              }
            })
          }else if(localStorage.getItem("role") == "SUPERVISEUR"){
            this.router.navigate([''])
          }
          else{
            this.router.navigate([''])
          }
        },
        error : err=> this.toastr.error("veuillez saisir des identifiants valide")
      })
    }else{
      this.isConnecting = false;

      this.toastr.error("Veuillez saisir un email et un mot de passe");
    }

  }
  enregistrer(){
    this.router.navigate(['','register']);
  }
}
