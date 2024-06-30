import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EtudiantService} from "../../core/service/etudiant/etudiant.service";
import {count} from "rxjs";

@Component({
  selector: 'app-admin-etudiant-dashboard',
  templateUrl: './admin-etudiant-dashboard.component.html',
  styleUrls: ['./admin-etudiant-dashboard.component.css']
})
export class AdminEtudiantDashboardComponent implements OnInit {
  items: any = [];
  item!: any;
  etudId : any = localStorage.getItem("etudId");
   errorMessage: any;
  constructor(private router: Router,
              private service :  EtudiantService,) { }
  ngOnInit(): void {
    this.getStage()
  }

  getStage(){
    this.service.getById(this.etudId).subscribe({
      next: data => {
        this.items = data;
        console.log(this.etudId)
        console.log(this.items.stage);
      },
      error: err => {
        this.errorMessage  = err.message()
      }
      }
    )
  }

  protected readonly count = count;
}
