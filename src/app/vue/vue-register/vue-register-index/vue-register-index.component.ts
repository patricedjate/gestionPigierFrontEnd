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
      username : new FormControl('', [Validators.required]),
      mdp: new FormControl('', [Validators.required]),
    })
  }
  register(){
    if(this.form.valid){
      this.authService.register({
        email: this.form.get('email')?.value,
        username: this.form.get('username')?.value,
        password: this.form.get('mdp')?.value,
      }).subscribe({
        next : (data: any) =>{
          this.etudiantsService.addData({
            email: this.form.get('email')?.value,
            user: this.form.get('username')?.value,
          }).subscribe({
            next : (data: any) =>{
              console.log("etudiant cree avec success");
            }
          })
          this.toastr.success("Inscription effectué avec succès!");
          this.router.navigate(['']);
        }
      })
    }else{
      this.toastr.error('Please fill all the fields.');
    }
  }
}
