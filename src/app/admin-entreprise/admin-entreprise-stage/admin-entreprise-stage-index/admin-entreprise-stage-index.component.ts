import {Component, OnInit} from '@angular/core';
import {EntrepriseService} from "../../../core/service/entreprise/entreprise.service";

@Component({
  selector: 'app-admin-entreprise-stage-index',
  templateUrl: './admin-entreprise-stage-index.component.html',
  styleUrls: ['./admin-entreprise-stage-index.component.css']
})
export class AdminEntrepriseStageIndexComponent implements OnInit {
  items : any;
  entrepriseId = localStorage.getItem('entrepriseId');
  messageError!: string;
  constructor(
    private service : EntrepriseService
  ){


  }
  ngOnInit() {
    this.getstage()  }
  getstage(){
    this.service.getById(this.entrepriseId).subscribe({
      next : (data :any )=>{
        this.items = data.stage
    },
    error : (error:any) => {
        this.messageError = error;
    }
    })

  }

}
