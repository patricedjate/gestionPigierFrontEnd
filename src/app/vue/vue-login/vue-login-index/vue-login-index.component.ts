import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../core/model/user";
import {Router} from "@angular/router";
import {AccountService} from "../../../core/service/account/account.service";
import {ToastrService} from "ngx-toastr";
import {jwtDecode} from "jwt-decode";


@Component({
  selector: 'app-vue-login-index',
  templateUrl: './vue-login-index.component.html',
  styleUrls: ['./vue-login-index.component.css']
})
export class VueLoginIndexComponent implements OnInit {
  form!: FormGroup;
  user!: any;
  isConnecting! : false;
  constructor(
    public router: Router,
    public authService : AccountService,
    public  toastr : ToastrService,

  ) {}
  ngOnInit():void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  seConnecter(){
    if(this.form.valid && !this.isConnecting ){
      console.log(this.form.value);
      this.authService.login( this.form.get('email')?.value,this.form.get('password')?.value).subscribe({
        next : data =>{
          this.authService.loadProfile(data);
          alert(JSON.stringify(data));
          this.user = data;
          let decodedJwt:any =jwtDecode(this.user["access_token"]);
          //this.email = decodedJwt.sub;
          //this.roles = decodedJwt.scope;
          this.toastr.success("Connexion réussir!");
          localStorage.setItem("accessToken",this.user["access_token"]);
          localStorage.setItem("email",decodedJwt.sub);
          localStorage.setItem("role",decodedJwt.roles);
          if(localStorage.getItem("role") == "ADMIN"){
            this.router.navigate(['']);
          }else if(localStorage.getItem("role") == "ENTREPRISE"){
            this.router.navigate(['entreprise']);
          }
          else if(localStorage.getItem("role") == "ETUDIANT"){
            this.router.navigate(["etudiant']"])
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
