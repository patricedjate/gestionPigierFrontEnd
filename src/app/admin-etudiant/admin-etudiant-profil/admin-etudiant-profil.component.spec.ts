import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEtudiantProfilComponent } from './admin-etudiant-profil.component';

describe('AdminEtudiantProfilComponent', () => {
  let component: AdminEtudiantProfilComponent;
  let fixture: ComponentFixture<AdminEtudiantProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEtudiantProfilComponent]
    });
    fixture = TestBed.createComponent(AdminEtudiantProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
