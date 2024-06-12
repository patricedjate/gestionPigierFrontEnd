import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantDashboardComponent } from './admin-etudiant-dashboard.component';

describe('AdminEtudiantDashboardComponent', () => {
  let component: AdminEtudiantDashboardComponent;
  let fixture: ComponentFixture<AdminEtudiantDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantDashboardComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
