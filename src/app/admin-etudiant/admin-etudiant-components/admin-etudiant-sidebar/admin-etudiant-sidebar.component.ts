import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-etudiant-sidebar',
  templateUrl: './admin-etudiant-sidebar.component.html',
  styleUrls: ['./admin-etudiant-sidebar.component.css']
})
export class AdminEtudiantSidebarComponent implements OnInit {
  page! : String;
  constructor(private router: Router) {

  }
  ngOnInit() {
  }
  onChange(name:any){
    this.page = name;
  }

}
